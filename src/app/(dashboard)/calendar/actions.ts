'use server'

import { createClient, createAdminClient } from '@/utils/supabase/server'
import { getCalendarService } from '@/lib/google/calendar'
import { isAdmin } from '@/lib/auth/roles'
import { fetchSchedules } from '@/lib/google/scheduler'

export async function listCalendarEvents(timeMin: string, teacherId?: string) {
    try {
        const supabase = await createClient()
        const calendar = await getCalendarService()

        // Parallel Fetching: Google Calendar + Supabase user + Jadwal Sheet
        const [googleEventsResult, userResult, jadwalSchedules] = await Promise.all([
            // 1. Fetch from Google Calendar
            (async () => {
                try {
                    if (calendar) {
                        const gcalResponse = await calendar.listEvents(timeMin, 100)
                        return gcalResponse.items || []
                    }
                    return []
                } catch (error) {
                    console.error('Failed to fetch Google Calendar events:', error)
                    return []
                }
            })(),
            // 2. Fetch User
            supabase.auth.getUser(),
            // 3. Fetch from Jadwal Sheet
            (async () => {
                try {
                    return await fetchSchedules()
                } catch (error) {
                    console.error('Failed to fetch Jadwal schedules:', error)
                    return []
                }
            })(),
        ])

        const googleEvents = googleEventsResult
        const { data: { user } } = userResult

        if (!user) {
            return { items: [] }
        }

        const admin = await isAdmin()

        // Use admin client for admins to bypass RLS, regular client for teachers
        const queryClient = admin ? await createAdminClient() : supabase

        // 4. Fetch sessions from Supabase
        let sessionsQuery = queryClient
            .from('sessions')
            .select(`
                id,
                start_time,
                end_time,
                notes,
                status,
                zoom_link,
                user_id,
                student:students(full_name),
                package:packages(name)
            `)
            .gte('start_time', timeMin)
            .order('start_time', { ascending: true })

        if (admin) {
            if (teacherId) {
                sessionsQuery = sessionsQuery.eq('user_id', teacherId)
            }
        } else {
            sessionsQuery = sessionsQuery.eq('user_id', user.id)
        }

        const { data: sessions, error } = await sessionsQuery

        if (error) {
            console.error('Supabase fetch error:', error)
        }

        // 5. Fetch teacher profiles for all unique user_ids
        const teacherIds = [...new Set((sessions || []).map((s: any) => s.user_id).filter(Boolean))]
        let teacherMap: Record<string, string> = {}

        if (teacherIds.length > 0) {
            const { data: teachers } = await queryClient
                .from('profiles')
                .select('id, full_name')
                .in('id', teacherIds)

            if (teachers) {
                teacherMap = Object.fromEntries(
                    teachers.map((t: any) => [t.id, t.full_name])
                )
            }
        }

        // 6. Transform Supabase sessions
        const appEvents = (sessions || []).map((session: any) => {
            const studentData = session.student as any
            const studentName = Array.isArray(studentData)
                ? studentData[0]?.full_name
                : studentData?.full_name

            const packageData = session.package as any
            const packageName = (Array.isArray(packageData) ? packageData[0]?.name : packageData?.name) || 'English Session'

            const teacherName = session.user_id ? teacherMap[session.user_id] : null

            return {
                id: session.id,
                summary: `${studentName || 'Student'} - ${packageName}`,
                description: session.notes,
                start: { dateTime: session.start_time },
                end: { dateTime: session.end_time },
                zoomLink: session.zoom_link,
                status: session.status,
                isAppSession: true,
                teacherId: session.user_id,
                teacherName: teacherName || null,
            }
        })

        // 7. Transform Jadwal sheet schedules into calendar events
        const jadwalEvents = jadwalSchedules
            .filter(s => s.date && s.studentName)
            .map(s => {
                // Parse time "HH:MM" or "H:MM AM/PM"
                let hours = 9, minutes = 0
                if (s.time) {
                    const timeParts = s.time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i)
                    if (timeParts) {
                        hours = parseInt(timeParts[1])
                        minutes = parseInt(timeParts[2])
                        if (timeParts[3]) {
                            const period = timeParts[3].toUpperCase()
                            if (period === 'PM' && hours !== 12) hours += 12
                            if (period === 'AM' && hours === 12) hours = 0
                        }
                    }
                }

                // Parse time as WIB (UTC+7) explicitly
                // Format: YYYY-MM-DDTHH:mm:00+07:00
                const startDate = new Date(`${s.date}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00+07:00`)
                const endDate = new Date(startDate.getTime() + 60 * 60000) // +1 hour

                if (isNaN(startDate.getTime())) return null

                return {
                    id: `jadwal-${s.rowIndex}`,
                    summary: `${s.studentName}${s.package ? ' - ' + s.package : ''}`,
                    description: s.notes || '',
                    start: { dateTime: startDate.toISOString() },
                    end: { dateTime: endDate.toISOString() },
                    status: s.status === 'Done' ? 'completed' : 'scheduled',
                    isAppSession: true,
                    isJadwalSheet: true,
                    teacherName: s.tutor || null,
                }
            })
            .filter(Boolean)

        // 8. Merge Logic (Google Calendar Deduplication removed as it's disabled)
        const externalEvents = googleEvents.map((gEvent: any) => ({
            ...gEvent,
            isExternal: true,
            status: 'scheduled'
        }))

        // Combine and sort
        const allEvents = [...appEvents, ...jadwalEvents, ...externalEvents].sort((a: any, b: any) => {
            const dateA = new Date(a.start.dateTime || a.start.date).getTime()
            const dateB = new Date(b.start.dateTime || b.start.date).getTime()
            return dateA - dateB
        })

        return { items: allEvents }

    } catch (error) {
        console.error('Failed to fetch calendar events:', error)
        return { items: [] }
    }
}
