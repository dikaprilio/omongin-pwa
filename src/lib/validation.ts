import { z } from 'zod'

/**
 * Registration form validation schema
 * - Full name: 2-100 chars, letters/spaces/hyphens only
 * - Email: valid email format, lowercase, trimmed
 * - Password: min 8 chars, 1 uppercase, 1 number
 */
export const registerSchema = z.object({
    fullName: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name is too long (max 100 characters)')
        .regex(/^[a-zA-Z\s\-'\.]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes')
        .transform(val => val.trim()),
    email: z.string()
        .email('Please enter a valid email address')
        .max(255, 'Email is too long')
        .toLowerCase()
        .transform(val => val.trim()),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least 1 uppercase letter')
        .regex(/[0-9]/, 'Password must contain at least 1 number'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
})

export type RegisterInput = z.infer<typeof registerSchema>

/**
 * Login form validation schema
 */
export const loginSchema = z.object({
    email: z.string()
        .email('Please enter a valid email address')
        .toLowerCase()
        .transform(val => val.trim()),
    password: z.string()
        .min(1, 'Password is required')
})

export type LoginInput = z.infer<typeof loginSchema>
