'use server'

import { createClient } from '@/utils/supabase/server'
import { getCurrentUserWithRole } from '@/lib/auth/roles'

export interface ReviewRecord {
    id: string
    studentName: string
    tutorId: string
    tutorName: string
    rating: number
    comment: string | null
    testimoni: string | null
    createdAt: string
}

/**
 * Fetch all reviews (admin only).
 * Joins with profiles to get tutor full_name.
 */
export async function fetchAllReviews(): Promise<ReviewRecord[]> {
    const user = await getCurrentUserWithRole()
    if (!user || user.role !== 'super_admin') {
        throw new Error('Unauthorized: Admin access required')
    }

    const supabase = await createClient()

    const { data, error } = await supabase
        .from('reviews')
        .select(`
            id,
            student_name,
            tutor_id,
            rating,
            comment,
            testimoni,
            created_at,
            profiles!tutor_id ( full_name )
        `)
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching all reviews:', error)
        return []
    }

    return (data || []).map((r: any) => ({
        id: r.id,
        studentName: r.student_name,
        tutorId: r.tutor_id,
        tutorName: r.profiles?.full_name || 'Unknown',
        rating: r.rating,
        comment: r.comment,
        testimoni: r.testimoni,
        createdAt: r.created_at,
    }))
}

/**
 * Fetch reviews for the currently logged-in tutor/admin.
 */
export async function fetchMyReviews(): Promise<ReviewRecord[]> {
    const user = await getCurrentUserWithRole()
    if (!user) {
        throw new Error('Unauthorized')
    }

    const supabase = await createClient()

    const { data, error } = await supabase
        .from('reviews')
        .select(`
            id,
            student_name,
            tutor_id,
            rating,
            comment,
            testimoni,
            created_at,
            profiles!tutor_id ( full_name )
        `)
        .eq('tutor_id', user.id)
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching my reviews:', error)
        return []
    }

    return (data || []).map((r: any) => ({
        id: r.id,
        studentName: r.student_name,
        tutorId: r.tutor_id,
        tutorName: r.profiles?.full_name || user.fullName || 'Unknown',
        rating: r.rating,
        comment: r.comment,
        testimoni: r.testimoni,
        createdAt: r.created_at,
    }))
}
