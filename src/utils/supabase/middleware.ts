import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { getRootDomain, getAdminUrl, getMainDomain, isAdminSubdomain as checkIsAdmin, isLocalhost as checkIsLocalhost } from '@/lib/utils/url'

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    // Extract hostname for logic
    const hostname = request.headers.get('host') || ''
    const isLocalhost = checkIsLocalhost(hostname)
    const cookieDomain = isLocalhost ? undefined : getRootDomain(hostname)

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, {
                            ...options,
                            domain: cookieDomain,
                        })
                    )
                },
            },
        }
    )

    // IMPORTANT: Do not run supabase.auth.getUser() immediately to avoid N+1 if not needed.
    // However, Supabase auth often needs getUser to refresh session in the cookie.
    // We will call it, but optimizing the PROFILE fetch.
    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser()

    // Handle invalid refresh token by clearing the session cookies
    // This prevents infinite redirect loops when the token is expired/invalid
    if (authError?.code === 'session_not_found' || authError?.message?.includes('Refresh Token')) {
        // Clear auth cookies to break the loop
        const authCookies = request.cookies.getAll().filter(c => c.name.startsWith('sb-'))
        authCookies.forEach(cookie => {
            response.cookies.set(cookie.name, '', {
                expires: new Date(0),
                domain: cookieDomain,
            })
        })
    }

    const url = request.nextUrl.clone()
    const isAdminSubdomain = checkIsAdmin(hostname)
    const pathname = url.pathname

    // Check for development mode
    const isDevelopment = process.env.NODE_ENV === 'development'

    // Verify deleted users are immediately locked out
    if (user) {
        const { data: profile } = await supabase
            .from('profiles')
            .select('id')
            .eq('id', user.id)
            .single()

        if (!profile) {
            // User was deleted — clear session and redirect to login
            const authCookies = request.cookies.getAll().filter(c => c.name.startsWith('sb-'))
            authCookies.forEach(cookie => {
                response.cookies.set(cookie.name, '', {
                    expires: new Date(0),
                    domain: cookieDomain,
                })
            })
            url.pathname = '/login'
            return NextResponse.redirect(url)
        }
    }

    // Allow static assets and auth endpoints
    if (
        pathname.startsWith('/auth') ||
        pathname.startsWith('/_next') ||
        pathname === '/favicon.ico' ||
        pathname.includes('/auth/callback')
    ) {
        return response
    }

    // Lazy load user role only if we strictly need it for redirection logic
    let userRole: string | null = null
    const getUserRole = async () => {
        if (!user) return null
        if (userRole) return userRole // cache if already fetched

        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single()
        userRole = profile?.role || 'student'
        return userRole
    }

    // --- Login/Register Page Logic ---
    if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
        // If user is already logged in, redirect based on role
        if (user) {
            const role = await getUserRole()
            if (role) {
                if (isAdminSubdomain) {
                    // Admin subdomain: check if user has admin/teacher role
                    if (role === 'super_admin' || role === 'teacher') {
                        url.pathname = '/dashboard'
                        return NextResponse.redirect(url)
                    } else {
                        // Student trying to access admin login -> redirect to main domain
                        const mainDomain = getMainDomain(hostname)
                        return NextResponse.redirect(`${url.protocol}//${mainDomain}/curriculum`)
                    }
                } else {
                    // Main domain: redirect to appropriate page based on role
                    if (role === 'student') {
                        url.pathname = '/curriculum'
                        return NextResponse.redirect(url)
                    } else {
                        // Admin/teacher on main domain login -> redirect to admin subdomain
                        if (!isLocalhost) {
                            const adminHost = getAdminUrl(hostname)
                            return NextResponse.redirect(`${url.protocol}//${adminHost}/dashboard`)
                        }
                        url.pathname = '/dashboard'
                        return NextResponse.redirect(url)
                    }
                }
            }
        }
        return response
    }

    // --- Admin Subdomain Logic ---
    if (isAdminSubdomain) {
        // Must be logged in for any page on admin subdomain
        if (!user) {
            url.pathname = '/login'
            // Preserve the original URL so we can redirect back after login
            url.searchParams.set('redirect_to', pathname)
            return NextResponse.redirect(url)
        }

        const role = await getUserRole()

        // Verify user has admin/teacher role
        if (role === 'student') {
            // Students cannot access admin subdomain -> redirect to main domain
            const mainDomain = getMainDomain(hostname)
            return NextResponse.redirect(`${url.protocol}//${mainDomain}/login`)
        }

        // If at root, go to dashboard
        if (pathname === '/') {
            url.pathname = '/dashboard'
            return NextResponse.redirect(url)
        }

        return response
    }

    // --- Main Domain Logic ---

    // Block dashboard access on main domain (redirect to admin subdomain)
    if (pathname.startsWith('/dashboard')) {
        if (!isLocalhost) {
            // Redirect to admin subdomain
            const adminHost = getAdminUrl(hostname)
            const adminUrl = new URL(url.toString())
            adminUrl.host = adminHost
            adminUrl.pathname = '/dashboard'
            return NextResponse.redirect(adminUrl)
        }

        // For localhost, allow but require admin role
        if (!user) {
            url.pathname = '/login'
            return NextResponse.redirect(url)
        }

        const role = await getUserRole()
        if (role === 'student') {
            url.pathname = '/curriculum'
            return NextResponse.redirect(url)
        }

        return response
    }

    // Protect authenticated routes
    const protectedRoutes = ['/curriculum', '/speaking-test', '/reading-test', '/interview-sim', '/schedule']
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

    if (isProtectedRoute && !user) {
        url.pathname = '/login'
        // Preserve the original URL so we can redirect back after login
        url.searchParams.set('redirect_to', pathname)
        return NextResponse.redirect(url)
    }

    return response
}
