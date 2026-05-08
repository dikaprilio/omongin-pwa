'use server'

import { createClient, createAdminClient } from '@/utils/supabase/server'
import { registerSchema } from '@/lib/validation'
import { checkRateLimit, RATE_LIMITS } from '@/lib/rate-limit'
import { headers } from 'next/headers'

export interface RegisterResult {
    success?: boolean
    error?: string
    message?: string
    redirectTo?: string
}

/**
 * Register a new student account
 * - Validates input with Zod
 * - Rate limits by IP
 * - Creates auth user via Supabase
 * - Auto-creates student record (for admin visibility)
 */
export async function registerStudent(_formData: FormData): Promise<RegisterResult> {
    // Registration is currently disabled
    return {
        error: 'Registration is currently closed. Please contact admin for assistance.'
    }
}

/**
 * Resend verification email
 * Rate limited to prevent abuse
 */
export async function resendVerificationEmail(email: string): Promise<RegisterResult> {
    try {
        // Rate limit: 3 resends per 5 minutes per email
        const rateCheck = checkRateLimit(
            `resend:${email.toLowerCase()}`,
            RATE_LIMITS.RESEND_EMAIL.max,
            RATE_LIMITS.RESEND_EMAIL.window
        )

        if (!rateCheck.allowed) {
            const secondsLeft = Math.ceil(rateCheck.resetIn / 1000)
            return {
                error: `Please wait ${secondsLeft} second${secondsLeft > 1 ? 's' : ''} before requesting again.`
            }
        }

        const supabase = await createClient()
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

        const { error } = await supabase.auth.resend({
            type: 'signup',
            email: email.toLowerCase().trim(),
            options: {
                emailRedirectTo: `${siteUrl}/auth/callback?next=/curriculum`
            }
        })

        if (error) {
            console.error('Resend email error:', error)
            // Don't reveal if email exists or not
            return { error: 'Failed to resend verification email. Please try again.' }
        }

        return {
            success: true,
            message: 'Verification email sent! Please check your inbox.'
        }

    } catch (error) {
        console.error('Resend email error:', error)
        return { error: 'An unexpected error occurred. Please try again.' }
    }
}
