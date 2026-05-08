import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { getRootDomain, getAdminUrl, getMainDomain, isAdminSubdomain as checkIsAdmin, isLocalhost as checkIsLocalhost, getSafeRedirect } from '@/lib/utils/url'

export async function GET(request: Request) {
    const { url: requestUrl } = request
    const url = new URL(requestUrl)
    const { searchParams } = url
    const hostname = request.headers.get('host') || url.hostname
    const protocol = request.headers.get('x-forwarded-proto') || (url.protocol.replace(':', ''))
    const origin = `${protocol}://${hostname}`

    const code = searchParams.get('code')
    const nextParam = searchParams.get('next')
    const next = getSafeRedirect(nextParam, '/')

    // Get root domain for cross-subdomain cookie sharing
    const isLocalhost = checkIsLocalhost(hostname)
    const cookieDomain = isLocalhost ? undefined : getRootDomain(hostname)

    if (code) {
        const cookieStore = await cookies()
        const allCookies = cookieStore.getAll()

        console.log('[Auth Callback Debug] ------------------------------------------------')
        console.log(`[Auth Callback Debug] Hostname: ${hostname}`)
        console.log(`[Auth Callback Debug] Protocol: ${protocol}`)
        console.log(`[Auth Callback Debug] Cookie Domain: ${cookieDomain}`)
        console.log(`[Auth Callback Debug] Is Localhost: ${isLocalhost}`)
        console.log(`[Auth Callback Debug] Cookies Received: ${allCookies.map(c => c.name).join(', ')}`)

        // Check for verifier cookie specifically (starts with sb- and ends with -code-verifier)
        const verifierCookie = allCookies.find(c => c.name.endsWith('-code-verifier'))
        if (verifierCookie) {
            console.log(`[Auth Callback Debug] Found Verifier Cookie: ${verifierCookie.name}`)
        } else {
            console.warn('[Auth Callback Debug] WARNING: No code verifier cookie found!')
        }
        console.log('[Auth Callback Debug] ------------------------------------------------')

        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll() {
                        return cookieStore.getAll()
                    },
                    setAll(cookiesToSet) {
                        try {
                            cookiesToSet.forEach(({ name, value, options }) =>
                                cookieStore.set(name, value, {
                                    ...options,
                                    domain: cookieDomain,
                                })
                            )
                        } catch {
                            // The `setAll` method was called from a Server Component.
                            // This can be ignored if you have middleware refreshing
                            // user sessions.
                        }
                    },
                },
            }
        )
        const { data, error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error && data.user) {
            const userMetadata = data.user.user_metadata || {}
            const isOAuthLogin = !!data.session?.provider_token
            const isEmailVerification = !isOAuthLogin

            // --- OAuth Login (Google) ---
            if (isOAuthLogin) {
                // Store provider token in cookie for quick access
                cookieStore.set('provider_token', data.session.provider_token!, {
                    path: '/',
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'lax',
                    maxAge: 3600, // 1 hour
                    domain: cookieDomain, // Share across subdomains
                })

                // Sync profile data from Google (admins/teachers)
                const { error: updateError } = await supabase
                    .from('profiles')
                    .upsert({
                        id: data.user.id,
                        google_refresh_token: data.session?.provider_refresh_token || null,
                        full_name: userMetadata.full_name || userMetadata.name || null,
                        avatar_url: userMetadata.avatar_url || userMetadata.picture || null,
                        updated_at: new Date().toISOString(),
                    })

                if (updateError) {
                    console.error('Error saving OAuth profile data:', updateError)
                }
            }

            // --- Email Verification (Self-registered students) ---
            if (isEmailVerification) {
                const fullName = userMetadata.full_name || userMetadata.name || 'Student'

                // 1. Ensure profile exists with student role
                const { error: profileError } = await supabase
                    .from('profiles')
                    .upsert({
                        id: data.user.id,
                        full_name: fullName,
                        role: 'student', // Default role for self-registered users
                        updated_at: new Date().toISOString(),
                    }, {
                        onConflict: 'id',
                        // Don't overwrite role if it already exists (admin might have changed it)
                        ignoreDuplicates: false
                    })

                if (profileError) {
                    console.error('Error creating student profile:', profileError)
                }

                // 2. Check if student record already exists
                const { data: existingStudent } = await supabase
                    .from('students')
                    .select('id')
                    .eq('user_id', data.user.id)
                    .single()

                // 3. Create student record if not exists (for admin dashboard visibility)
                if (!existingStudent) {
                    const { error: studentError } = await supabase
                        .from('students')
                        .insert({
                            user_id: data.user.id,
                            full_name: fullName,
                            // Other fields left null for admin to fill later
                        })

                    if (studentError) {
                        // Log but don't fail - profile was created successfully
                        console.error('Error creating student record:', studentError)
                    }
                }
            }

            // --- Role-based redirect logic ---
            // Fetch user role to determine correct redirect destination
            const { data: profile } = await supabase
                .from('profiles')
                .select('role')
                .eq('id', data.user.id)
                .single()

            const role = profile?.role || 'student'

            // Determine redirect path based on role
            let redirectPath = next
            if (next === '/' || next === '') {
                // Default redirect based on role
                redirectPath = role === 'student' ? '/curriculum' : '/dashboard'
            }

            // Ensure correct subdomain based on role
            const isAdminPath = role === 'super_admin' || role === 'teacher'
            const currentIsAdmin = checkIsAdmin(hostname)

            if (isAdminPath && !currentIsAdmin && !isLocalhost) {
                // Admin user on main domain -> Redirect to admin subdomain
                const adminHost = getAdminUrl(hostname)
                return NextResponse.redirect(`${protocol}://${adminHost}${redirectPath}`)
            } else if (!isAdminPath && currentIsAdmin && !isLocalhost) {
                // Student user on admin subdomain -> Redirect to main domain
                const mainHost = getMainDomain(hostname)
                return NextResponse.redirect(`${protocol}://${mainHost}${redirectPath}`)
            }

            return NextResponse.redirect(`${origin}${redirectPath}`)
        }

        if (error) {
            console.error('Auth code exchange error:', error)
            return NextResponse.redirect(`${origin}/auth/auth-code-error?error=${encodeURIComponent(error?.name || 'AuthError')}&error_description=${encodeURIComponent(error?.message || 'An unknown error occurred')}`)
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error?error=NoCodeProvided&error_description=No+authentication+code+was+provided`)
}
