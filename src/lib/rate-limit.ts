/**
 * Simple in-memory rate limiter
 * Note: This resets on server restart. For production at scale,
 * consider using Redis or Supabase edge functions with rate limiting.
 */

interface RateLimitRecord {
    count: number
    resetTime: number
}

const rateLimitStore = new Map<string, RateLimitRecord>()

// Clean up old entries periodically (every 5 minutes)
if (typeof setInterval !== 'undefined') {
    setInterval(() => {
        const now = Date.now()
        for (const [key, record] of rateLimitStore.entries()) {
            if (now > record.resetTime) {
                rateLimitStore.delete(key)
            }
        }
    }, 5 * 60 * 1000)
}

export interface RateLimitResult {
    allowed: boolean
    remaining: number
    resetIn: number // milliseconds until reset
}

/**
 * Check if a request is allowed based on rate limiting
 * @param key - Unique identifier (e.g., IP address, user ID, or action:IP combo)
 * @param maxRequests - Maximum number of requests allowed in the window
 * @param windowMs - Time window in milliseconds
 */
export function checkRateLimit(
    key: string,
    maxRequests: number,
    windowMs: number
): RateLimitResult {
    const now = Date.now()
    const record = rateLimitStore.get(key)

    // No existing record or window expired - allow and start fresh
    if (!record || now > record.resetTime) {
        rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
        return {
            allowed: true,
            remaining: maxRequests - 1,
            resetIn: windowMs
        }
    }

    // Window still active - check if limit exceeded
    if (record.count >= maxRequests) {
        return {
            allowed: false,
            remaining: 0,
            resetIn: record.resetTime - now
        }
    }

    // Increment count and allow
    record.count++
    return {
        allowed: true,
        remaining: maxRequests - record.count,
        resetIn: record.resetTime - now
    }
}

/**
 * Reset rate limit for a specific key (useful for testing)
 */
export function resetRateLimit(key: string): void {
    rateLimitStore.delete(key)
}

// Pre-configured rate limiters for common use cases
export const RATE_LIMITS = {
    REGISTER: { max: 5, window: 60 * 60 * 1000 },     // 5 per hour
    RESEND_EMAIL: { max: 3, window: 5 * 60 * 1000 },  // 3 per 5 minutes
    LOGIN: { max: 10, window: 15 * 60 * 1000 },       // 10 per 15 minutes
} as const
