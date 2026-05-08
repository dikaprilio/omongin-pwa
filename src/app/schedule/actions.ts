'use server'

import { createClient, createAdminClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function scheduleSession(formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        throw new Error('Not authenticated')
    }

    const studentId = formData.get('studentId') as string
    const startTimeStr = formData.get('startTime') as string
    const duration = parseInt(formData.get('duration') as string)
    const sessionType = formData.get('sessionType') as string || 'online'
    const notes = formData.get('notes') as string
    const isRecurring = formData.get('isRecurring') === 'on'
    const datesStr = formData.get('dates') as string

    if (!studentId || !startTimeStr) {
        throw new Error('Missing required fields')
    }

    const start = new Date(startTimeStr)
    if (isNaN(start.getTime())) {
        throw new Error('Invalid start time')
    }

    // 1. Fetch Student & Package Info
    let { data: student } = await supabase
        .from('students')
        .select('*')
        .eq('id', studentId)
        .single()

    if (!student) {
        if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
            const adminSupabase = await createAdminClient()
            const { data: orphanStudent } = await adminSupabase
                .from('students')
                .select('*, packages(id, name)')
                .eq('id', studentId)
                .single()

            if (orphanStudent) {
                await adminSupabase.from('students').update({ user_id: user.id }).eq('id', studentId)
                student = orphanStudent
            } else {
                throw new Error(`Student not found`)
            }
        } else {
            throw new Error(`Student not found`)
        }
    }

    // Fetch active subscription
    const { data: activeSubscription } = await supabase
        .from('subscriptions')
        .select('id, package_id, sessions_remaining, packages(name)')
        .eq('student_id', studentId)
        .eq('status', 'active')
        .single()

    const packageId = activeSubscription?.package_id || student.package_id

    // 2. Generate Session Dates
    const sessionDates: { start: Date; end: Date }[] = []

    if (!isRecurring && datesStr) {
        try {
            const dates = JSON.parse(datesStr) as string[]
            if (Array.isArray(dates)) {
                dates.forEach(dateStr => {
                    const s = new Date(dateStr)
                    sessionDates.push({
                        start: s,
                        end: new Date(s.getTime() + duration * 60000)
                    })
                })
            }
        } catch (e) {
            console.error("Error parsing dates:", e)
        }
    } else if (isRecurring) {
        const recurringCount = parseInt(formData.get('recurringCount') as string) || 4
        const recurringDaysStr = formData.get('recurringDays') as string
        let recurringDays: number[] = []
        try {
            recurringDays = JSON.parse(recurringDaysStr)
        } catch (e) {
            recurringDays = [start.getDay()]
        }

        let currentDate = new Date(start)
        const baseHours = start.getHours()
        const baseMinutes = start.getMinutes()
        let scheduledCount = 0
        let iteration = 0
        while (scheduledCount < recurringCount && iteration < 365) {
            if (recurringDays.includes(currentDate.getDay())) {
                const s = new Date(currentDate)
                s.setHours(baseHours, baseMinutes, 0, 0)
                sessionDates.push({
                    start: s,
                    end: new Date(s.getTime() + duration * 60000)
                })
                scheduledCount++
            }
            currentDate.setDate(currentDate.getDate() + 1)
            iteration++
        }
    } else {
        sessionDates.push({
            start: start,
            end: new Date(start.getTime() + duration * 60000)
        })
    }

    // 3. Batch Insert to Supabase (No Google Calendar)
    const sessionsToInsert = sessionDates.map((date) => ({
        user_id: user.id,
        student_id: studentId,
        package_id: packageId,
        start_time: date.start.toISOString(),
        end_time: date.end.toISOString(),
        status: 'scheduled',
        notes: notes,
    }))

    const { data: insertedSessions, error: insertError } = await supabase
        .from('sessions')
        .insert(sessionsToInsert)
        .select()

    if (insertError) throw insertError

    // 4. Update Subscription Count
    if (activeSubscription) {
        const totalScheduled = sessionsToInsert.length
        const newRemaining = Math.max(0, activeSubscription.sessions_remaining - totalScheduled)
        const newStatus = newRemaining === 0 ? 'completed' : 'active'

        await supabase
            .from('subscriptions')
            .update({ sessions_remaining: newRemaining, status: newStatus })
            .eq('id', activeSubscription.id)
    }

    revalidatePath('/schedule')
    revalidatePath('/students')
    revalidatePath('/')
    return { success: true, count: insertedSessions?.length || 0 }
}

export async function completeSession(formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

    const sessionId = formData.get('sessionId') as string
    const feedback = formData.get('feedback') as string
    const materialLink = formData.get('materialLink') as string
    const nextDateStr = formData.get('nextDate') as string

    if (!sessionId) throw new Error('Session ID is required')

    // 1. Mark current session as completed
    const { error } = await supabase
        .from('sessions')
        .update({
            status: 'completed',
            feedback: feedback,
            material_link: materialLink,
        })
        .eq('id', sessionId)
        .eq('user_id', user.id)

    if (error) throw new Error(`Failed to complete session: ${error.message}`)

    // 2. Decrement session count from active subscription
    const { data: currentSession } = await supabase
        .from('sessions')
        .select('student_id, package_id, duration, notes')
        .eq('id', sessionId)
        .single()

    if (currentSession) {
        const { data: subscription } = await supabase
            .from('subscriptions')
            .select('*')
            .eq('student_id', currentSession.student_id)
            .eq('package_id', currentSession.package_id)
            .eq('status', 'active')
            .single()

        if (subscription) {
            const newRemaining = Math.max(0, subscription.sessions_remaining - 1)
            const newStatus = newRemaining === 0 ? 'completed' : 'active'
            await supabase
                .from('subscriptions')
                .update({ sessions_remaining: newRemaining, status: newStatus })
                .eq('id', subscription.id)
        }

        // 3. Schedule next session if requested (No Google Calendar)
        if (nextDateStr) {
            const nextStart = new Date(nextDateStr)
            const duration = currentSession.duration || 60
            const nextEnd = new Date(nextStart.getTime() + duration * 60000)

            await supabase.from('sessions').insert({
                user_id: user.id,
                student_id: currentSession.student_id,
                package_id: currentSession.package_id,
                start_time: nextStart.toISOString(),
                end_time: nextEnd.toISOString(),
                notes: `Follow up: ${currentSession.notes || ''}`,
                status: 'scheduled'
            })
        }
    }

    revalidatePath('/students')
    revalidatePath('/')
    return { success: true }
}

export async function deleteSession(sessionId: string) {
    // Handle Google Sheets sessions (IDs starting with "jadwal-")
    if (sessionId.startsWith('jadwal-')) {
        const { deleteScheduleAction } = await import('@/app/(dashboard)/scheduler/actions')
        const rowIndex = parseInt(sessionId.replace('jadwal-', ''))
        await deleteScheduleAction(rowIndex)
        revalidatePath('/')
        revalidatePath('/students')
        revalidatePath('/calendar')
        return { success: true }
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

    // Delete from DB (No Google Calendar deletion)
    const { error, count } = await supabase
        .from('sessions')
        .delete({ count: 'exact' })
        .eq('id', sessionId)
        .eq('user_id', user.id)

    if (error) throw new Error(`Failed to delete session: ${error.message}`)

    if (count === 0) {
        // Force delete with admin if owner mismatch but ID exists
        const adminSupabase = await createAdminClient()
        await adminSupabase.from('sessions').delete().eq('id', sessionId)
    }

    revalidatePath('/')
    revalidatePath('/students')
    return { success: true }
}

export async function rescheduleSession(sessionId: string, newStartTime: string) {
    // Handle Google Sheets sessions (IDs starting with "jadwal-")
    if (sessionId.startsWith('jadwal-')) {
        const { rescheduleJadwalAction } = await import('@/app/(dashboard)/scheduler/actions')
        const rowIndex = parseInt(sessionId.replace('jadwal-', ''))
        const newDate = new Date(newStartTime)
        const dateStr = `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(2, '0')}-${String(newDate.getDate()).padStart(2, '0')}`
        // Extract time in WIB timezone (the input is ISO string from browser)
        // We need to format it as HH:mm in WIB time
        const wibFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Jakarta',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })
        const parts = wibFormatter.formatToParts(newDate)
        const wibHour = parts.find(p => p.type === 'hour')?.value || '00'
        const wibMinute = parts.find(p => p.type === 'minute')?.value || '00'
        const timeStr = `${wibHour}:${wibMinute}`
        await rescheduleJadwalAction(rowIndex, dateStr, timeStr)
        revalidatePath('/')
        revalidatePath('/calendar')
        return { success: true }
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

    const { data: session } = await supabase
        .from('sessions')
        .select('*')
        .eq('id', sessionId)
        .single()

    if (!session) throw new Error('Session not found')

    const start = new Date(newStartTime)
    const duration = session.duration || 60
    const end = new Date(start.getTime() + duration * 60000)

    const { error } = await supabase
        .from('sessions')
        .update({
            start_time: start.toISOString(),
            end_time: end.toISOString()
        })
        .eq('id', sessionId)

    if (error) throw new Error(`Failed to reschedule: ${error.message}`)

    revalidatePath('/')
    return { success: true }
}
