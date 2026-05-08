'use server'
// Actions for students

import { createClient, createAdminClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { isAdmin, requireAdmin, getUserRole } from '@/lib/auth/roles'

export async function getStudents() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return []

    const admin = await isAdmin()

    // Build query based on role - include teacher_id for display
    let query = supabase
        .from('students')
        .select(`
            id, 
            full_name, 
            nickname, 
            zoom_link, 
            phone, 
            job, 
            age, 
            schedule_preference, 
            created_at, 
            teacher_id,
            user_id,
            subscriptions (
                status,
                packages (name)
            )
        `)
        .order('created_at', { ascending: false })

    // Admins see all students, teachers only see students assigned to them
    if (!admin) {
        query = query.eq('teacher_id', user.id)
    }

    const { data: students, error } = await query

    if (error) {
        console.error('Error fetching students:', error)
        return []
    }

    // Process students to flatten subscription info
    return (students || []).map((student: any) => {
        // Find active subscription
        const activeSub = student.subscriptions?.find((sub: any) => sub.status === 'active')
        const activePackage = activeSub?.packages?.name

        return {
            ...student,
            activePackage
        }
    })
}


export async function getStudentDetails(id: string) {
    const supabase = await createClient()

    // Fetch student profile
    const { data: student, error: studentError } = await supabase
        .from('students')
        .select('*')
        .eq('id', id)
        .single()

    if (studentError) throw new Error(`Failed to fetch student: ${studentError.message}`)

    // Fetch sessions (ordered by start_time)
    const { data: sessions, error: sessionsError } = await supabase
        .from('sessions')
        .select('*')
        .eq('student_id', id)
        .order('start_time', { ascending: false })

    if (sessionsError) throw new Error(`Failed to fetch sessions: ${sessionsError.message}`)

    // Fetch active subscription
    const { data: subscription } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('student_id', id)
        .eq('status', 'active')
        .single()

    // Fetch teacher info if student has a teacher_id
    let teacher = null
    if (student.teacher_id) {
        const { data: teacherProfile } = await supabase
            .from('profiles')
            .select('id, full_name, avatar_url')
            .eq('id', student.teacher_id)
            .single()
        teacher = teacherProfile
    }

    return { student, sessions, subscription, teacher }
}

export async function createStudent(formData: FormData) {
    // Only admins can create students
    await requireAdmin()

    const supabase = await createClient()

    const full_name = formData.get('full_name') as string
    const nickname = formData.get('nickname') as string
    const zoom_link = formData.get('zoom_link') as string
    const phone = formData.get('phone') as string
    const age = formData.get('age') ? parseInt(formData.get('age') as string) : null
    const job = formData.get('job') as string
    const packageId = formData.get('packageId') as string
    const schedulePreference = formData.get('schedulePreference') as string
    const teacherId = formData.get('teacherId') as string | null

    // New fields for account creation
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const createAccount = formData.get('createAccount') === 'true'

    const { data: { user: adminUser } } = await supabase.auth.getUser()

    if (!adminUser) {
        throw new Error('User not authenticated')
    }

    let studentUserId = adminUser.id // Default to admin ID for "offline" students (legacy behavior)

    // 1. Create Auth User if requested
    if (createAccount && email && password) {
        const adminSupabase = await createAdminClient()

        const { data: newUser, error: createUserError } = await adminSupabase.auth.admin.createUser({
            email,
            password,
            email_confirm: true, // Auto-confirm for admin-created users
            user_metadata: {
                full_name,
            }
        })

        if (createUserError) {
            console.error('Error creating user account:', createUserError)
            throw new Error(`Failed to create account: ${createUserError.message}`)
        }

        if (newUser.user) {
            studentUserId = newUser.user.id

            // Create profile for the new user
            await adminSupabase.from('profiles').upsert({
                id: newUser.user.id,
                full_name,
                role: 'student',
                updated_at: new Date().toISOString()
            })
        }
    }

    // 2. Create Student Record
    const { data: student, error } = await supabase.from('students').insert({
        user_id: studentUserId,
        full_name,
        nickname,
        zoom_link,
        phone,
        age,
        job,
        schedule_preference: schedulePreference,
        teacher_id: teacherId || null
        // We could store email in students table too if needed, but it's in auth/profiles
    }).select().single()

    if (error) {
        console.error('Error creating student:', error)
        throw new Error(error.message)
    }

    // 3. Assign Package (if selected) - Linked to the STUDENT'S user_id if created
    if (packageId && student) {
        // Fetch package details
        const { data: pkg } = await supabase.from('packages').select('total_sessions').eq('id', packageId).single()

        const sessionsTotal = formData.get('totalSessions')
            ? parseInt(formData.get('totalSessions') as string)
            : (pkg?.total_sessions || 0)

        if (pkg) {
            // Note: Subscription user_id should be the STUDENT'S user_id so they can see it
            // Limit: If we used adminID, the student wouldn't see it.
            // So for manually created accounts, this works perfectly.
            // For offline students (adminID), the student doesn't login anyway.
            await supabase.from('subscriptions').insert({
                user_id: studentUserId,
                student_id: student.id,
                package_id: packageId,
                sessions_total: sessionsTotal,
                sessions_remaining: sessionsTotal,
                status: 'active'
            })
        }
    }

    const nextAction = formData.get('nextAction') as string

    revalidatePath('/students')

    if (nextAction === 'schedule' && student) {
        return { redirectUrl: `/students/${student.id}?action=schedule` }
    } else {
        return { success: true }
    }
}

export async function updateStudent(id: string, formData: FormData) {
    // Only admins can update students
    await requireAdmin()

    const supabase = await createClient()

    const full_name = formData.get('full_name') as string
    const nickname = formData.get('nickname') as string
    const zoom_link = formData.get('zoom_link') as string
    const phone = formData.get('phone') as string
    const age = formData.get('age') ? parseInt(formData.get('age') as string) : null
    const job = formData.get('job') as string
    const schedulePreference = formData.get('schedulePreference') as string

    // Update Student
    const { error } = await supabase.from('students').update({
        full_name,
        nickname,
        zoom_link,
        phone,
        age,
        job,
        schedule_preference: schedulePreference
    }).eq('id', id)

    if (error) {
        console.error('Error updating student:', error)
        throw new Error(error.message)
    }

    // Note: We are not updating the package/subscription here as that's a more complex flow
    // involving billing/sessions logic. That should be a separate "Change Package" feature.

    revalidatePath('/students')
}

export async function importStudents(data: any[]) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Not authenticated')

    // Fetch all packages to map names
    const { data: packages } = await supabase.from('packages').select('id, name, total_sessions')

    const results = { success: 0, failed: 0, errors: [] as string[] }

    for (const row of data) {
        try {
            // Map Package Name to ID
            // Fuzzy match: check if package name contains the CSV package name
            const pkg = packages?.find(p =>
                p.name.toLowerCase().includes(row.Package?.toLowerCase() || 'xyz_nomatch') ||
                (row.Package?.toLowerCase() === 'speaking' && p.name.toLowerCase().includes('conversation')) || // Alias for Speaking
                (row.Package?.toLowerCase() === 'presentation (kti)' && p.name.toLowerCase().includes('presentation')) // Alias for Presentation
            )

            // Create Student
            const { data: student, error: studentError } = await supabase.from('students').insert({
                user_id: user.id,
                full_name: row.Nama,
                nickname: row['Nama Panggilan'],
                age: row.Usia ? parseInt(row.Usia) : null,
                job: row.Pekerjaan,
                phone: row['No. telpon'],
                schedule_preference: row.Jadwal,
                // We could store 'Payment Status' and 'Special Note' in a notes field or new columns
            }).select().single()

            if (studentError) throw new Error(studentError.message)

            // Create Subscription if package found
            if (pkg && student) {
                // Calculate remaining sessions based on "Sesi ke-" (Session count)
                // If "Sesi ke-" is 1, it means they finished 1 session? Or is it the *current* session?
                // Assuming "Sesi ke- 1" means they are ON session 1 (so 0 completed? or 1 completed?)
                // Let's assume "Sesi ke-" means "Sessions Completed".
                const sessionsCompleted = row['Sesi ke-'] ? parseInt(row['Sesi ke-']) : 0
                const sessionsRemaining = Math.max(0, pkg.total_sessions - sessionsCompleted)

                await supabase.from('subscriptions').insert({
                    user_id: user.id,
                    student_id: student.id,
                    package_id: pkg.id,
                    sessions_total: pkg.total_sessions,
                    sessions_remaining: sessionsRemaining,
                    status: sessionsRemaining > 0 ? 'active' : 'completed'
                })
            }

            results.success++
        } catch (e: any) {
            console.error(`Failed to import ${row.Nama}:`, e)
            results.failed++
            results.errors.push(`${row.Nama}: ${e.message}`)
        }
    }

    revalidatePath('/students')
    return results
}

import { getCalendarService } from '@/lib/google/calendar'

export async function deleteStudent(id: string) {
    // Only admins can delete students
    await requireAdmin()

    const supabase = await createAdminClient()

    // Google Calendar deletion is disabled
    if (false) {
        try {
            const calendar = await getCalendarService()
            if (calendar) {
                // await Promise.all(sessions.map(async (session) => { ... }))
            }
        } catch (e) {
            console.error('Failed to initialize calendar service for deletion', e)
        }
    }

    // 3. Delete related sessions from DB
    const { error: sessionsError } = await supabase.from('sessions').delete().eq('student_id', id)
    if (sessionsError) {
        console.error('Error deleting student sessions:', sessionsError)
        throw new Error('Failed to delete student sessions')
    }

    // 4. Delete related subscriptions
    const { error: subsError } = await supabase.from('subscriptions').delete().eq('student_id', id)
    if (subsError) {
        console.error('Error deleting student subscriptions:', subsError)
        throw new Error('Failed to delete student subscriptions')
    }

    // 5. Finally delete the student
    const { error } = await supabase.from('students').delete().eq('id', id)

    if (error) {
        console.error('Error deleting student:', error)
        throw new Error('Failed to delete student')
    }

    revalidatePath('/students')
}

export async function deleteStudents(ids: string[]) {
    // Only admins can delete students
    await requireAdmin()

    const supabase = await createAdminClient()

    // Google Calendar deletion is disabled
    if (false) {
        try {
            const calendar = await getCalendarService()
            if (calendar) {
                // await Promise.all(sessions.map(async (session) => { ... }))
            }
        } catch (e) {
            console.error('Failed to initialize calendar service for deletion', e)
        }
    }

    // 3. Delete related sessions from DB
    const { error: sessionsError } = await supabase.from('sessions').delete().in('student_id', ids)
    if (sessionsError) throw new Error('Failed to delete student sessions')

    // 4. Delete related subscriptions
    const { error: subsError } = await supabase.from('subscriptions').delete().in('student_id', ids)
    if (subsError) throw new Error('Failed to delete student subscriptions')

    // 5. Finally delete the students
    const { error } = await supabase.from('students').delete().in('id', ids)

    if (error) {
        console.error('Error deleting students:', error)
        throw new Error('Failed to delete students')
    }

    revalidatePath('/students')
}

export async function getStudentSubscription(studentId: string, userId?: string | null) {
    const supabase = await createClient()

    let query = supabase
        .from('subscriptions')
        .select('*, packages(*)')
        .eq('status', 'active')

    if (userId) {
        // If we have a user_id, check either match (inclusive)
        query = query.or(`student_id.eq.${studentId},user_id.eq.${userId}`)
    } else {
        query = query.eq('student_id', studentId)
    }

    const { data: subscriptions, error } = await query

    if (error) {
        console.error('Error fetching subscription:', error)
        return null
    }

    // Return the first active subscription found
    return subscriptions?.[0] || null
}

/**
 * Bulk assign students to a teacher (Admin only)
 * Uses admin client to bypass RLS
 */
export async function bulkAssignStudentsToTeacher(
    studentIds: string[],
    teacherId: string | null
) {
    await requireAdmin()

    // Use admin client to bypass RLS
    const supabase = await createAdminClient()

    const { error } = await supabase
        .from('students')
        .update({ teacher_id: teacherId })
        .in('id', studentIds)

    if (error) {
        console.error('Error assigning students:', error)
        throw new Error('Failed to assign students to teacher')
    }

    revalidatePath('/students')
    return { success: true, count: studentIds.length }
}


/**
 * Get all students for admin (unfiltered, for assignment purposes)
 * Uses admin client to bypass RLS
 */
export async function getAllStudentsForAdmin() {
    await requireAdmin()

    // Use admin client to bypass RLS
    const supabase = await createAdminClient()

    // Simple query without joins - teacher name can be resolved on frontend
    const { data: students, error } = await supabase
        .from('students')
        .select('id, full_name, nickname, teacher_id')
        .order('full_name', { ascending: true })

    if (error) {
        console.error('Error fetching all students:', error)
        return []
    }

    return students || []
}


export async function assignPackage(studentId: string, packageId: string, totalSessions?: number) {
    await requireAdmin()

    // Use admin client to bypass RLS - admin is inserting subscription for another user
    const supabase = await createAdminClient()

    // 1. Get Package Details
    const { data: pkg, error: pkgError } = await supabase
        .from('packages')
        .select('*')
        .eq('id', packageId)
        .single()

    if (pkgError || !pkg) throw new Error('Package not found')

    // 2. Check for existing active subscription
    const { data: existingSub } = await supabase
        .from('subscriptions')
        .select('id')
        .eq('student_id', studentId)
        .eq('status', 'active')
        .single()

    // 3. Determine User ID for the subscription
    const { data: student } = await supabase
        .from('students')
        .select('user_id')
        .eq('id', studentId)
        .single()

    if (!student) throw new Error('Student not found')

    const sessionsCount = totalSessions || pkg.total_sessions

    if (existingSub) {
        // Cancel old one
        await supabase
            .from('subscriptions')
            .update({ status: 'cancelled' })
            .eq('id', existingSub.id)
    }

    // Create NEW subscription
    const { error } = await supabase
        .from('subscriptions')
        .insert({
            user_id: student.user_id,
            student_id: studentId,
            package_id: packageId,
            sessions_total: sessionsCount,
            sessions_remaining: sessionsCount,
            status: 'active'
        })

    if (error) {
        console.error('Error assigning package:', error)
        throw new Error('Failed to assign package')
    }

    revalidatePath('/students')
    return { success: true }
}
