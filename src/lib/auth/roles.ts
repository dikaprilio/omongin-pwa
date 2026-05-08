'use server'

import { createClient, createAdminClient } from '@/utils/supabase/server'

export type UserRole = 'super_admin' | 'teacher' | 'student'

export interface UserWithRole {
    id: string
    email: string
    role: UserRole
    fullName?: string
}

/**
 * Get the current user's role from the profiles table
 */
export async function getUserRole(): Promise<UserRole | null> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return null

    const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

    return (profile?.role as UserRole) || 'student' // Default to student if no role
}

/**
 * Get the current user with their role information
 */
export async function getCurrentUserWithRole(): Promise<UserWithRole | null> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return null

    const { data: profile } = await supabase
        .from('profiles')
        .select('role, full_name')
        .eq('id', user.id)
        .single()

    return {
        id: user.id,
        email: user.email || '',
        role: (profile?.role as UserRole) || 'student',
        fullName: profile?.full_name || user.user_metadata?.full_name
    }
}

/**
 * Check if the current user is a super admin
 */
export async function isAdmin(): Promise<boolean> {
    const role = await getUserRole()
    return role === 'super_admin'
}

/**
 * Check if the current user is a teacher (not admin)
 */
export async function isTeacher(): Promise<boolean> {
    const role = await getUserRole()
    return role === 'teacher'
}

/**
 * Check if the current user is a student
 */
export async function isStudent(): Promise<boolean> {
    const role = await getUserRole()
    return role === 'student'
}

/**
 * Throw an error if the current user is not an admin
 * Use this to protect admin-only server actions
 */
export async function requireAdmin(): Promise<void> {
    const admin = await isAdmin()
    if (!admin) {
        throw new Error('This action requires admin privileges')
    }
}

/**
 * Get all teachers (for admin use - assigning students)
 * Includes both teachers AND admins since admins can also teach
 * Uses admin client to bypass RLS
 */
export async function getTeachers(): Promise<UserWithRole[]> {
    // First check if current user is admin
    await requireAdmin()

    // Use admin client to bypass RLS
    const supabase = await createAdminClient()

    // Get all users except super_admin (or include them if you want admins to be assignable)
    // For now, get all profiles that have a role (teacher or super_admin)
    const { data: profiles, error } = await supabase
        .from('profiles')
        .select('id, role, full_name')
        .in('role', ['teacher', 'super_admin'])
        .order('full_name', { ascending: true, nullsFirst: false })

    if (error) {
        console.error('Error fetching teachers:', error)
        return []
    }

    // Filter out null full_names and map properly
    return (profiles || []).map(p => ({
        id: p.id,
        email: '',
        role: p.role as UserRole,
        fullName: p.full_name || `User ${p.id.slice(0, 8)}` // Fallback if name is null
    }))
}

/**
 * Get all users who can be assigned students (teachers + admins who teach)
 * Returns profiles with email from auth.users
 */
export async function getAllTeachableUsers(): Promise<UserWithRole[]> {
    await requireAdmin()

    const supabase = await createAdminClient()

    // Query profiles and join with auth.users to get email
    const { data, error } = await supabase
        .rpc('get_users_with_profiles')

    if (error) {
        // Fallback to simple query if RPC doesn't exist
        console.log('RPC not available, using fallback')
        return getTeachers()
    }

    return (data || []).map((u: any) => ({
        id: u.id,
        email: u.email || '',
        role: u.role as UserRole,
        fullName: u.full_name || u.email?.split('@')[0] || `User ${u.id.slice(0, 8)}`
    }))
}


