import { vi } from 'vitest'

// Type definitions for mock data
export type UserRole = 'super_admin' | 'teacher' | 'student'

export interface MockUser {
    id: string
    email: string
    role: UserRole
    full_name?: string
    user_metadata?: Record<string, unknown>
}

// Default mock users
export const mockUsers: Record<UserRole, MockUser> = {
    super_admin: {
        id: 'admin-uuid-123',
        email: 'admin@example.com',
        role: 'super_admin',
        full_name: 'Super Admin',
    },
    teacher: {
        id: 'teacher-uuid-456',
        email: 'teacher@example.com',
        role: 'teacher',
        full_name: 'Test Teacher',
    },
    student: {
        id: 'student-uuid-789',
        email: 'student@example.com',
        role: 'student',
        full_name: 'Test Student',
    },
}

// Mock Supabase client factory
export function createMockSupabaseClient(user: MockUser | null = null) {
    const mockSingle = vi.fn()
    const mockEq = vi.fn(() => ({ single: mockSingle }))
    const mockSelect = vi.fn(() => ({ eq: mockEq, single: mockSingle }))
    const mockFrom = vi.fn(() => ({ select: mockSelect, eq: mockEq }))
    const mockRpc = vi.fn()

    // Set up default profile response
    if (user) {
        mockSingle.mockResolvedValue({
            data: { role: user.role, full_name: user.full_name },
            error: null,
        })
    } else {
        mockSingle.mockResolvedValue({ data: null, error: { message: 'Not found' } })
    }

    return {
        auth: {
            getUser: vi.fn(() =>
                Promise.resolve({
                    data: { user: user ? { id: user.id, email: user.email, user_metadata: user.user_metadata } : null },
                    error: user ? null : { message: 'Not authenticated' },
                })
            ),
            getSession: vi.fn(() =>
                Promise.resolve({
                    data: {
                        session: user
                            ? {
                                  user: { id: user.id, email: user.email },
                                  access_token: 'mock-token',
                              }
                            : null,
                    },
                    error: null,
                })
            ),
            signInWithPassword: vi.fn(),
            signInWithOAuth: vi.fn(),
            signOut: vi.fn(() => Promise.resolve({ error: null })),
            onAuthStateChange: vi.fn(() => ({
                data: { subscription: { unsubscribe: vi.fn() } },
            })),
        },
        from: mockFrom,
        rpc: mockRpc,
    }
}

// Mock admin client (with service role)
export function createMockAdminClient() {
    const mockRpc = vi.fn()
    const mockSingle = vi.fn()
    const mockEq = vi.fn(() => ({ single: mockSingle }))
    const mockSelect = vi.fn(() => ({ eq: mockEq }))
    const mockFrom = vi.fn(() => ({ select: mockSelect, eq: mockEq }))

    return {
        from: mockFrom,
        rpc: mockRpc,
        auth: {
            admin: {
                listUsers: vi.fn(),
                deleteUser: vi.fn(),
            },
        },
    }
}

// Helper to mock the supabase server module
export function mockSupabaseServer(user: MockUser | null = null) {
    const mockClient = createMockSupabaseClient(user)
    const mockAdminClient = createMockAdminClient()

    vi.mock('@/utils/supabase/server', () => ({
        createClient: vi.fn(() => Promise.resolve(mockClient)),
        createAdminClient: vi.fn(() => Promise.resolve(mockAdminClient)),
    }))

    return { mockClient, mockAdminClient }
}

// Helper to mock the supabase client module (browser)
export function mockSupabaseBrowser(user: MockUser | null = null) {
    const mockClient = createMockSupabaseClient(user)

    vi.mock('@/utils/supabase/client', () => ({
        createClient: vi.fn(() => mockClient),
    }))

    return mockClient
}
