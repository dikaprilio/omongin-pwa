import { vi } from 'vitest'
import { MockUser, UserRole, mockUsers } from '../mocks/supabase'

// Test context for auth tests
export interface AuthTestContext {
    user: MockUser | null
    cookies: Map<string, string>
}

// Create a test cookie store
export function createMockCookieStore(initialCookies: Record<string, string> = {}) {
    const cookies = new Map(Object.entries(initialCookies))

    return {
        get: vi.fn((name: string) => {
            const value = cookies.get(name)
            return value ? { name, value } : undefined
        }),
        set: vi.fn((name: string, value: string) => {
            cookies.set(name, value)
        }),
        delete: vi.fn((name: string) => {
            cookies.delete(name)
        }),
        getAll: vi.fn(() => Array.from(cookies.entries()).map(([name, value]) => ({ name, value }))),
        _cookies: cookies,
    }
}

// Helper to create authenticated test context
export function createAuthenticatedContext(role: UserRole = 'student'): AuthTestContext {
    return {
        user: mockUsers[role],
        cookies: new Map([
            ['sb-access-token', 'mock-access-token'],
            ['sb-refresh-token', 'mock-refresh-token'],
        ]),
    }
}

// Helper to create unauthenticated test context
export function createUnauthenticatedContext(): AuthTestContext {
    return {
        user: null,
        cookies: new Map(),
    }
}

// Mock Next.js headers with cookies
export function mockNextHeaders(context: AuthTestContext) {
    const cookieStore = createMockCookieStore(Object.fromEntries(context.cookies))

    vi.mock('next/headers', () => ({
        cookies: vi.fn(() => Promise.resolve(cookieStore)),
        headers: vi.fn(() => ({
            get: vi.fn((name: string) => {
                if (name === 'x-forwarded-for') return '127.0.0.1'
                return null
            }),
        })),
    }))

    return { cookieStore }
}

// Setup function for auth tests
export function setupAuthTest(role?: UserRole) {
    const context = role ? createAuthenticatedContext(role) : createUnauthenticatedContext()
    const { cookieStore } = mockNextHeaders(context)

    return {
        context,
        cookieStore,
        user: context.user,
    }
}

// Reset all mocks helper
export function resetAuthMocks() {
    vi.clearAllMocks()
    vi.unstubAllGlobals()
}
