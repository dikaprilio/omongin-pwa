'use server'

import { createAdminClient } from '@/utils/supabase/server'
import { requireAdmin } from '@/lib/auth/roles'
import { revalidatePath } from 'next/cache'

import { z } from 'zod'

export type UserRole = 'super_admin' | 'teacher' | 'student'

export interface UserSubscription {
    id: string
    status: 'active' | 'completed' | 'cancelled'
    sessionsTotal: number
    sessionsRemaining: number
    expiresAt: string | null
    packageId: string | null
    packageName: string | null
    allowedModules: string[]
}

export interface SystemUser {
    id: string
    email: string
    fullName: string | null
    role: UserRole
    lastSignIn: string | null
    createdAt: string
    subscription: UserSubscription | null
}

// Define Schema using Zod
const CreateUserSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    fullName: z.string().min(2, 'Full name is required'),
    role: z.enum(['student', 'teacher', 'super_admin']).default('student')
})

export async function createUserAction(formData: FormData) {
    // 1. Authorization Check
    await requireAdmin()

    // 2. Input Validation (Zod)
    const rawData = {
        email: formData.get('email'),
        password: formData.get('password'),
        fullName: formData.get('fullName'),
        role: formData.get('role'),
    }

    const validatedFields = CreateUserSchema.safeParse(rawData)

    if (!validatedFields.success) {
        // Return first error message
        return { error: validatedFields.error.issues[0].message }
    }

    const { email, password, fullName, role } = validatedFields.data

    const supabase = await createAdminClient()

    try {
        // 2. Create User in Auth
        const { data: authData, error: authError } = await supabase.auth.admin.createUser({
            email,
            password,
            email_confirm: true,
            user_metadata: { full_name: fullName }
        })

        if (authError) throw authError
        if (!authData.user) throw new Error('Failed to create user')

        const userId = authData.user.id

        // 3. Update Profile (Role & Subscription)
        // Note: A trigger might create the profile initially, so we prioritize update
        // But to be safe, we perform an UPSERT
        const { error: profileError } = await supabase
            .from('profiles')
            .upsert({
                id: userId,
                role: role,
                full_name: fullName,
                subscription_tier: 'free', // Default for all manually created users unless handled elsewhere
                // valid_until: calculateExpiry(subscriptionTier) // Add logic if needed
            })

        if (profileError) {
            // If profile update fails, we might want to rollback (delete user)
            // But for now, just throw
            console.error('Profile update failed:', profileError)
            throw new Error('User created but profile update failed')
        }

        revalidatePath('/users')
        return { success: true, userId }

    } catch (error: any) {
        console.error('Create user error:', error)
        return { error: error.message || 'Failed to create user' }
    }
}

export async function getSystemUsers(): Promise<SystemUser[]> {
    await requireAdmin()
    const supabase = await createAdminClient()

    // 1. Fetch all users from Auth (paginated? for now assume < 1000 or fetch max)
    const { data: { users }, error: authError } = await supabase.auth.admin.listUsers({
        page: 1,
        perPage: 1000
    })

    if (authError) {
        console.error('Error fetching auth users:', authError)
        return []
    }

    // 2. Fetch all profiles to get roles
    const { data: profiles, error: profileError } = await supabase
        .from('profiles')
        .select('id, role, full_name')

    if (profileError) {
        console.error('Error fetching profiles:', profileError)
        return []
    }

    // 3. Fetch all subscriptions with package names
    let subscriptionsQuery = await supabase
        .from('subscriptions')
        .select('id, user_id, status, sessions_total, sessions_remaining, expires_at, package_id, privileges, packages(name)')

    let subscriptions = subscriptionsQuery.data
    let subError = subscriptionsQuery.error

    // Fallback if privileges column hasn't been migrated yet
    if (subError) {
        const fallback = await supabase
            .from('subscriptions')
            .select('id, user_id, status, sessions_total, sessions_remaining, expires_at, package_id, packages(name)')
        subscriptions = fallback.data as typeof subscriptions
        subError = fallback.error
        if (subError) {
            console.error('Error fetching subscriptions:', subError)
        }
    }

    const profilesMap = new Map(profiles?.map(p => [p.id, p]))
    const subsMap = new Map(subscriptions?.map(s => [s.user_id, s]))

    return users.map(user => {
        const profile = profilesMap.get(user.id)
        const sub = subsMap.get(user.id)
        const pkg = sub?.packages as any
        const packageName = Array.isArray(pkg) ? pkg[0]?.name : pkg?.name
        const subPrivileges = (sub?.privileges as any) || {}
        const pkgPrivileges = Array.isArray(pkg) ? pkg[0]?.privileges : pkg?.privileges
        const allowedModules = Array.isArray(subPrivileges.allowed_modules)
            ? subPrivileges.allowed_modules
            : Array.isArray(pkgPrivileges?.allowed_modules)
                ? pkgPrivileges.allowed_modules
                : []

        return {
            id: user.id,
            email: user.email || '',
            fullName: profile?.full_name || user.user_metadata?.full_name || null,
            role: (profile?.role as UserRole) || 'student',
            lastSignIn: user.last_sign_in_at || null,
            createdAt: user.created_at,
            subscription: sub ? {
                id: sub.id,
                status: sub.status as UserSubscription['status'],
                sessionsTotal: sub.sessions_total || 0,
                sessionsRemaining: sub.sessions_remaining || 0,
                expiresAt: sub.expires_at || null,
                packageId: sub.package_id || null,
                packageName: packageName || null,
                allowedModules
            } : null
        }
    }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export async function updateUserRole(userId: string, newRole: UserRole) {
    await requireAdmin()
    const supabase = await createAdminClient()

    const { error } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', userId)

    if (error) {
        throw new Error(error.message)
    }

    revalidatePath('/users')
    return { success: true }
}

const EditUserSchema = z.object({
    userId: z.string().uuid('Invalid user ID'),
    email: z.string().email('Invalid email address'),
    fullName: z.string().min(2, 'Full name is required'),
    role: z.enum(['student', 'teacher', 'super_admin'])
})

export async function editUserAction(formData: FormData) {
    await requireAdmin()

    const rawData = {
        userId: formData.get('userId'),
        email: formData.get('email'),
        fullName: formData.get('fullName'),
        role: formData.get('role'),
    }

    const validatedFields = EditUserSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return { error: validatedFields.error.issues[0].message }
    }

    const { userId, email, fullName, role } = validatedFields.data
    const supabase = await createAdminClient()

    try {
        // 1. Update Auth Email & Metadata
        const { error: authError } = await supabase.auth.admin.updateUserById(userId, {
            email: email,
            user_metadata: { full_name: fullName }
        })

        if (authError) throw authError

        // 2. Update Profile Role & Name
        const { error: profileError } = await supabase
            .from('profiles')
            .update({
                role: role,
                full_name: fullName
            })
            .eq('id', userId)

        if (profileError) throw profileError

        revalidatePath('/users')
        return { success: true }

    } catch (error: any) {
        console.error('Edit user error:', error)
        return { error: error.message || 'Failed to edit user' }
    }
}

export async function getPackages() {
    await requireAdmin()
    const supabase = await createAdminClient()

    const { data, error } = await supabase
        .from('packages')
        .select('id, name, total_sessions, price')
        .order('price', { ascending: true })

    if (error) {
        console.error('Error fetching packages:', error)
        return []
    }

    return data || []
}

export async function toggleUserSubscription(userId: string, currentStatus: UserSubscription['status']) {
    await requireAdmin()
    const supabase = await createAdminClient()

    // Find subscription by user_id
    const { data: sub } = await supabase
        .from('subscriptions')
        .select('id')
        .eq('user_id', userId)
        .single()

    if (!sub) {
        return { error: 'No subscription found for this user' }
    }

    const newStatus = currentStatus === 'active' ? 'cancelled' : 'active'

    const { error } = await supabase
        .from('subscriptions')
        .update({ status: newStatus })
        .eq('id', sub.id)

    if (error) {
        console.error('Error toggling subscription:', error)
        return { error: error.message }
    }

    revalidatePath('/users')
    return { success: true, newStatus }
}

export async function updateUserSubscription(formData: FormData) {
    await requireAdmin()
    const supabase = await createAdminClient()

    const userId = formData.get('userId') as string
    const packageId = formData.get('packageId') as string
    const sessionsRemaining = parseInt(formData.get('sessionsRemaining') as string) || 0
    const sessionsTotal = parseInt(formData.get('sessionsTotal') as string) || sessionsRemaining
    const expiresAt = formData.get('expiresAt') as string
    const status = formData.get('status') as UserSubscription['status']
    const allowedModulesRaw = formData.get('allowedModules') as string
    const allowedModules = allowedModulesRaw ? JSON.parse(allowedModulesRaw) as string[] : []
    const privileges = { allowed_modules: allowedModules }

    if (!userId) {
        return { error: 'User ID is required' }
    }

    // Find student_id for this user (subscriptions require student_id)
    let { data: student } = await supabase
        .from('students')
        .select('id')
        .eq('user_id', userId)
        .maybeSingle()

    // Auto-create student record if user is a student and doesn't have one yet
    if (!student) {
        const { data: profile } = await supabase
            .from('profiles')
            .select('role, full_name')
            .eq('id', userId)
            .single()

        if (profile?.role === 'student') {
            const { data: newStudent, error: studentError } = await supabase
                .from('students')
                .insert({
                    user_id: userId,
                    full_name: profile.full_name || 'Student'
                })
                .select('id')
                .single()

            if (studentError) {
                console.error('Error auto-creating student record:', studentError)
                return { error: 'Failed to auto-create student record: ' + studentError.message }
            }

            student = newStudent
        }
    }

    if (!student) {
        return { error: 'This user does not have a student record. Please create a student profile first.' }
    }

    // Find existing subscription
    const { data: existingSub } = await supabase
        .from('subscriptions')
        .select('id')
        .eq('user_id', userId)
        .maybeSingle()

    if (existingSub) {
        const { error } = await supabase
            .from('subscriptions')
            .update({
                package_id: packageId || null,
                sessions_total: sessionsTotal,
                sessions_remaining: sessionsRemaining,
                expires_at: expiresAt ? new Date(expiresAt).toISOString() : null,
                status,
                privileges
            })
            .eq('id', existingSub.id)

        if (error) {
            console.error('Error updating subscription:', error)
            return { error: error.message }
        }
    } else {
        // Create new subscription
        const { error } = await supabase
            .from('subscriptions')
            .insert({
                user_id: userId,
                student_id: student.id,
                package_id: packageId || null,
                sessions_total: sessionsTotal,
                sessions_remaining: sessionsRemaining,
                expires_at: expiresAt ? new Date(expiresAt).toISOString() : null,
                status,
                privileges
            })

        if (error) {
            console.error('Error creating subscription:', error)
            return { error: error.message }
        }
    }

    revalidatePath('/users')
    return { success: true }
}

export async function deleteUserAction(userId: string) {
    await requireAdmin()

    if (!userId) {
        return { error: 'User ID is required' }
    }

    const supabase = await createAdminClient()

    try {
        // 1. Delete dependent records first to avoid FK constraint errors
        // Subscriptions
        const { error: subError } = await supabase
            .from('subscriptions')
            .delete()
            .eq('user_id', userId)
        if (subError) console.error('Subscription deletion warning:', subError)

        // Sessions (if linked to user or student)
        const { error: sessionError } = await supabase
            .from('sessions')
            .delete()
            .eq('user_id', userId)
        if (sessionError) console.error('Session deletion warning:', sessionError)

        // Students
        const { error: studentError } = await supabase
            .from('students')
            .delete()
            .eq('user_id', userId)
        if (studentError) console.error('Student deletion warning:', studentError)

        // Profiles
        const { error: profileError } = await supabase
            .from('profiles')
            .delete()
            .eq('id', userId)
        if (profileError) console.error('Profile deletion warning:', profileError)

        // 2. Delete user from Supabase Auth
        const { error: authError } = await supabase.auth.admin.deleteUser(userId)
        if (authError) throw authError

        revalidatePath('/users')
        return { success: true }

    } catch (error: any) {
        console.error('Delete user error:', error)
        return { error: error.message || 'Failed to delete user' }
    }
}
