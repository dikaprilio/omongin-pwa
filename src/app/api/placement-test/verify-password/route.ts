import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/utils/supabase/server'
import { checkRateLimit } from '@/lib/rate-limit'
import bcrypt from 'bcryptjs'
import { SignJWT } from 'jose'

// Rate limit config for password verification
const VERIFY_RATE_LIMIT = { max: 5, window: 15 * 60 * 1000 } // 5 attempts per 15 minutes

// JWT secret - should be in env in production
const JWT_SECRET = new TextEncoder().encode(
    process.env.PLACEMENT_JWT_SECRET || 'placement-test-secret-key-change-in-prod'
)

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const forwarded = request.headers.get('x-forwarded-for')
        const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown'
        const rateLimitKey = `placement-verify:${ip}`

        // Check rate limit
        const rateLimit = checkRateLimit(rateLimitKey, VERIFY_RATE_LIMIT.max, VERIFY_RATE_LIMIT.window)
        if (!rateLimit.allowed) {
            const retryAfterSeconds = Math.ceil(rateLimit.resetIn / 1000)
            return NextResponse.json(
                {
                    error: 'Too many attempts',
                    retryAfter: retryAfterSeconds,
                    message: `Terlalu banyak percobaan. Coba lagi dalam ${Math.ceil(retryAfterSeconds / 60)} menit.`
                },
                {
                    status: 429,
                    headers: { 'Retry-After': retryAfterSeconds.toString() }
                }
            )
        }

        const { password } = await request.json()

        if (!password || typeof password !== 'string') {
            return NextResponse.json(
                { error: 'Password is required' },
                { status: 400 }
            )
        }

        // Get active password from database
        const supabase = await createAdminClient()
        const { data: activePassword, error } = await supabase
            .from('placement_passwords')
            .select('password_hash, expires_at')
            .eq('is_active', true)
            .gt('expires_at', new Date().toISOString())
            .order('created_at', { ascending: false })
            .limit(1)
            .single()

        if (error || !activePassword) {
            return NextResponse.json(
                { error: 'No active password', message: 'Tidak ada password aktif. Hubungi admin.' },
                { status: 404 }
            )
        }

        // Verify password
        const isValid = await bcrypt.compare(password, activePassword.password_hash)
        if (!isValid) {
            return NextResponse.json(
                {
                    error: 'Invalid password',
                    message: 'Password salah.',
                    remaining: rateLimit.remaining
                },
                { status: 401 }
            )
        }

        // Generate session token (JWT valid for 2 hours)
        const token = await new SignJWT({
            type: 'placement-access',
            expiresAt: activePassword.expires_at
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('2h')
            .sign(JWT_SECRET)

        // Create response with cookie
        const response = NextResponse.json({
            success: true,
            message: 'Password verified successfully'
        })

        // Set HTTP-only cookie for security
        response.cookies.set('placement-session', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 2 * 60 * 60, // 2 hours
            path: '/placement-test'
        })

        return response
    } catch (error) {
        console.error('Password verification error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// GET: Check if session is valid
export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get('placement-session')?.value

        if (!token) {
            return NextResponse.json({ valid: false })
        }

        // Verify token
        const { jwtVerify } = await import('jose')
        try {
            await jwtVerify(token, JWT_SECRET)
            return NextResponse.json({ valid: true })
        } catch {
            return NextResponse.json({ valid: false })
        }
    } catch (error) {
        console.error('Session check error:', error)
        return NextResponse.json({ valid: false })
    }
}
