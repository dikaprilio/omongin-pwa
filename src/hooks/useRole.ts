'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/utils/supabase/client'

export type UserRole = 'super_admin' | 'teacher' | 'student'

interface UseRoleReturn {
    role: UserRole | null
    isAdmin: boolean
    isTeacher: boolean
    isStudent: boolean
    loading: boolean
    userId: string | null
    refresh: () => Promise<void>
}

/**
 * Client-side hook to get the current user's role
 * Use this for conditional rendering in client components
 */
export function useRole(): UseRoleReturn {
    const [role, setRole] = useState<UserRole | null>(null)
    const [userId, setUserId] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    const fetchRole = useCallback(async () => {
        setLoading(true)
        const supabase = createClient()

        try {
            const { data: { user } } = await supabase.auth.getUser()

            if (user) {
                setUserId(user.id)
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('role')
                    .eq('id', user.id)
                    .single()

                // Default to 'student' if no role is found
                setRole((profile?.role as UserRole) || 'student')
            } else {
                setRole(null)
                setUserId(null)
            }
        } catch (error) {
            console.error('Error fetching role:', error)
            // Default to student on error if we had a user, but here we just null it safely
            setRole(null)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchRole()
    }, [fetchRole])

    return {
        role,
        isAdmin: role === 'super_admin',
        isTeacher: role === 'teacher',
        isStudent: role === 'student',
        loading,
        userId,
        refresh: fetchRole
    }
}
