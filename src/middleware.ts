import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
    // Demo mode: bypass auth, block admin routes
    if (process.env.DEMO_MODE === 'true') {
        const pathname = request.nextUrl.pathname
        // Block admin routes in demo
        const adminRoutes = ['/dashboard', '/students', '/calendar', '/packages', '/teachers', '/users', '/orders', '/materials', '/reviews', '/pitch-deck']
        if (adminRoutes.some(route => pathname.startsWith(route))) {
            const url = request.nextUrl.clone()
            url.pathname = '/'
            return NextResponse.redirect(url)
        }
        // Allow everything else without auth
        return NextResponse.next()
    }
    return await updateSession(request)
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
