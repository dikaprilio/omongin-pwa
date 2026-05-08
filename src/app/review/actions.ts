'use server'

import { createAdminClient } from '@/utils/supabase/server'

// Rate limiting
const RATE_LIMIT_WINDOW = 60 * 1000
const MAX_REQUESTS = 5
const requestLog = new Map<string, number[]>()

function checkRateLimit(identifier: string): boolean {
    const now = Date.now()
    const requests = requestLog.get(identifier) || []
    const validRequests = requests.filter((time) => now - time < RATE_LIMIT_WINDOW)
    if (validRequests.length >= MAX_REQUESTS) return false
    validRequests.push(now)
    requestLog.set(identifier, validRequests)
    return true
}

export interface TutorOption {
    id: string
    fullName: string
}

/**
 * Fetch all tutors (teachers + admins) for the review form dropdown.
 * Public action — no auth required.
 */
export async function getTutorList(): Promise<TutorOption[]> {
    const supabase = await createAdminClient()

    const { data, error } = await supabase
        .from('profiles')
        .select('id, full_name')
        .in('role', ['teacher', 'super_admin'])
        .not('full_name', 'is', null)
        .order('full_name', { ascending: true })

    if (error) {
        console.error('Error fetching tutors:', error)
        return []
    }

    return (data || []).map(p => ({
        id: p.id,
        fullName: p.full_name || 'Unknown'
    }))
}

interface SubmitReviewInput {
    studentName: string
    tutorId: string
    rating: number
    comment?: string
    testimoni?: string
}

/**
 * Submit a review from a guest student.
 * Uses admin client to bypass RLS (guest has no session).
 */
export async function submitReview(input: SubmitReviewInput): Promise<{ success: boolean; error?: string }> {
    try {
        if (!checkRateLimit('review-global')) {
            return { success: false, error: 'Terlalu banyak permintaan. Coba lagi dalam 1 menit.' }
        }

        // Validate
        const studentName = input.studentName?.trim()
        if (!studentName || studentName.length < 2) {
            return { success: false, error: 'Nama harus minimal 2 karakter.' }
        }

        if (!input.tutorId) {
            return { success: false, error: 'Pilih tutor terlebih dahulu.' }
        }

        const rating = Math.round(input.rating)
        if (rating < 1 || rating > 7) {
            return { success: false, error: 'Rating harus antara 1-7.' }
        }

        const supabase = await createAdminClient()

        // Verify tutor exists
        const { data: tutor } = await supabase
            .from('profiles')
            .select('id')
            .eq('id', input.tutorId)
            .single()

        if (!tutor) {
            return { success: false, error: 'Tutor tidak ditemukan.' }
        }

        // Insert review
        const { error } = await supabase
            .from('reviews')
            .insert({
                tutor_id: input.tutorId,
                student_name: studentName,
                rating,
                comment: input.comment?.trim() || null,
                testimoni: input.testimoni?.trim() || null,
            })

        if (error) {
            console.error('Error inserting review:', error)
            return { success: false, error: 'Gagal menyimpan review. Coba lagi.' }
        }

        return { success: true }
    } catch (error) {
        console.error('Error in submitReview:', error)
        return { success: false, error: 'Terjadi kesalahan. Coba lagi.' }
    }
}
