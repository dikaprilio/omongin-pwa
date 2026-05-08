import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { isAdmin, isTeacher } from '@/lib/auth/roles'

/**
 * Verifies if the current user has access to the specified curriculum module.
 * If not, redirects to the curriculum hub with a payment modal trigger (via query param if possible, or just hub).
 * 
 * @param moduleId The ID of the curriculum module (e.g., 'speaking-adults', 'kids-speak')
 */
export async function verifyCurriculumAccess(moduleId: string) {
    // DEMO MODE: bypass all auth checks — all curriculum modules are accessible
    if (process.env.DEMO_MODE === 'true') {
        return true
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // 1. Admin/Teacher Bypass
    const admin = await isAdmin()
    const teacher = await isTeacher()

    if (admin || teacher) {
        return true
    }

    // 3. Check Subscription & Privileges
    // Strict check: active subscription AND allowed_modules contains moduleId
    const { data: subscription } = await supabase
        .from('subscriptions')
        .select(`
            status,
            packages (privileges),
            sessions_remaining
        `)
        .eq('user_id', user.id) // Security: only check own sub
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(1)
        .single()

    if (!subscription) {
        redirect('/curriculum?lock=true')
    }

    const pkg = Array.isArray(subscription.packages) ? subscription.packages[0] : (subscription.packages as any)
    const privileges = pkg?.privileges || {}
    const allowedModules: string[] = Array.isArray(privileges.allowed_modules) ? privileges.allowed_modules : []

    if (!allowedModules.includes(moduleId)) {
        redirect('/curriculum?lock=true')
    }

    return true
}
