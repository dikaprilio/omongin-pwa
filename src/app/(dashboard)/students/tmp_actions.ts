'use server'

import { requireAdmin } from '@/lib/auth/roles'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function assignPackage(studentId: string, packageId: string, totalSessions?: number) {
    await requireAdmin()

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Not authenticated')

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
    // We need the student's *auth user id*.
    // The 'students' table maps 'id' (UUID PK) to 'user_id' (Auth ID).
    // But 'user_id' column in 'students' table *IS* the Auth ID.
    const { data: student } = await supabase
        .from('students')
        .select('user_id')
        .eq('id', studentId)
        .single()

    if (!student) throw new Error('Student not found')

    const sessionsCount = totalSessions || pkg.total_sessions

    if (existingSub) {
        // Update existing subscription
        // OR: Cancel old one and create new one?
        // Let's UPDATE the existing one to the new package and reset sessions?
        // OR just create a new one and mark old as completed?
        // Usually "Assign Package" implies starting a NEW package.
        // Let's mark old as 'completed' (or 'cancelled') and create new.

        await supabase
            .from('subscriptions')
            .update({ status: 'cancelled' }) // or 'completed'?
            .eq('id', existingSub.id)
    }

    // Create NEW subscription
    const { error } = await supabase
        .from('subscriptions')
        .insert({
            user_id: student.user_id, // The student's Auth ID
            student_id: studentId,    // The student's Record ID
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
