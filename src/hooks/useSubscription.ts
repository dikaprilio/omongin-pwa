
import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'

export interface SubscriptionStatus {
    isSubscribed: boolean
    isLoading: boolean
    plan?: string | null
    sessionsRemaining?: number | null
    allowedModules: string[]
}

export function useSubscription(): SubscriptionStatus {
    const [status, setStatus] = useState<SubscriptionStatus>({
        isSubscribed: false,
        isLoading: true,
        plan: null,
        sessionsRemaining: null,
        allowedModules: []
    })

    const checkSubscription = useCallback(async () => {
        try {
            const supabase = createClient()
            const { data: { user } } = await supabase.auth.getUser()

            if (!user?.email) {
                setStatus(prev => ({ ...prev, isLoading: false, isSubscribed: false, allowedModules: [] }))
                return
            }

            // Perform simpler query based on user_id which is now populated
            const { data: subscription, error } = await supabase
                .from('subscriptions')
                .select(`
                    id,
                    status,
                    sessions_remaining,
                    privileges,
                    packages (name, privileges)
                `)
                .eq('user_id', user.id)
                .in('status', ['active'])
                .order('created_at', { ascending: false })
                .limit(1)
                .single()

            if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows found" from .single()
                console.error('Error checking subscription:', error)
            }

            if (subscription) {
                const pkg = Array.isArray(subscription.packages) ? subscription.packages[0] : (subscription.packages as any)
                const pkgPrivileges = pkg?.privileges || {}
                const subPrivileges = (subscription as any).privileges || {}
                const allowedModules = Array.isArray(subPrivileges.allowed_modules)
                    ? subPrivileges.allowed_modules
                    : Array.isArray(pkgPrivileges.allowed_modules)
                        ? pkgPrivileges.allowed_modules
                        : []

                setStatus({
                    isSubscribed: true,
                    isLoading: false,
                    plan: pkg?.name,
                    sessionsRemaining: subscription.sessions_remaining,
                    allowedModules
                })
            } else {
                setStatus({
                    isSubscribed: false,
                    isLoading: false,
                    plan: null,
                    sessionsRemaining: null,
                    allowedModules: []
                })
            }

        } catch (error) {
            console.error('Unexpected error checking subscription:', error)
            setStatus(prev => ({ ...prev, isLoading: false }))
        }
    }, [])

    useEffect(() => {
        checkSubscription()
    }, [checkSubscription])

    return status
}
