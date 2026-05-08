import { createBrowserClient } from '@supabase/ssr'
import { getRootDomain, isLocalhost } from '@/lib/utils/url'

export function createClient() {
    const hostname = typeof window !== 'undefined' ? window.location.host : ''
    const cookieDomain = isLocalhost(hostname) ? undefined : getRootDomain(hostname)

    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookieOptions: {
                domain: cookieDomain,
                path: '/',
            }
        }
    )
}
