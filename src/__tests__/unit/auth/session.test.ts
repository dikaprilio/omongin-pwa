import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the Supabase server module - using factory that doesn't reference hoisted vars
vi.mock('@/utils/supabase/server', () => ({
    createClient: vi.fn(),
    createAdminClient: vi.fn(),
}))

// Mock isStudent from roles
const mockIsStudent = vi.fn()
vi.mock('@/lib/auth/roles', () => ({
    isStudent: () => mockIsStudent(),
}))

// Import after mocking
import { enforceSessionLimit } from '@/lib/auth/session'
import { createClient, createAdminClient } from '@/utils/supabase/server'

describe('Session Management', () => {
    const mockGetUser = vi.fn()
    const mockRpc = vi.fn()

    beforeEach(() => {
        vi.clearAllMocks()
        
        // Setup mock implementations - include from() to handle the commented code path
        const mockClient = {
            auth: { getUser: mockGetUser },
            rpc: mockRpc,
            from: vi.fn(() => ({
                select: vi.fn(() => ({
                    eq: vi.fn(() => ({
                        order: vi.fn(() => Promise.resolve({ data: [], error: null }))
                    }))
                }))
            }))
        }
        const mockAdminClient = {
            rpc: mockRpc,
            from: vi.fn(() => ({
                select: vi.fn(() => ({
                    eq: vi.fn(() => ({
                        order: vi.fn(() => Promise.resolve({ data: [], error: null }))
                    }))
                }))
            }))
        }
        
        vi.mocked(createClient).mockResolvedValue(mockClient as any)
        vi.mocked(createAdminClient).mockResolvedValue(mockAdminClient as any)
    })

    describe('enforceSessionLimit', () => {
        it('should skip enforcement for non-student users', async () => {
            mockIsStudent.mockResolvedValue(false)

            const result = await enforceSessionLimit()

            expect(result).toEqual({ success: true, skipped: true })
            expect(mockGetUser).not.toHaveBeenCalled()
        })

        it('should return error when no authenticated user', async () => {
            mockIsStudent.mockResolvedValue(true)
            mockGetUser.mockResolvedValue({ 
                data: { user: null }, 
                error: { message: 'Not authenticated' } 
            })

            const result = await enforceSessionLimit()

            expect(result).toEqual({ error: 'No authenticated user' })
        })

        it('should return error when RPC get_active_sessions fails', async () => {
            const mockUser = { id: 'student-123', email: 'student@example.com' }
            mockIsStudent.mockResolvedValue(true)
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockRpc.mockResolvedValue({ 
                data: null, 
                error: { message: 'RPC function not found' } 
            })

            const result = await enforceSessionLimit()

            expect(result).toEqual({ error: 'Session tracking unavailable' })
        })

        it('should allow session when active sessions <= 2', async () => {
            const mockUser = { id: 'student-123', email: 'student@example.com' }
            mockIsStudent.mockResolvedValue(true)
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockRpc
                .mockResolvedValueOnce({ 
                    data: [
                        { id: 'session-1', created_at: '2024-01-01' },
                    ], 
                    error: null 
                })

            const result = await enforceSessionLimit()

            expect(result).toEqual({ success: true, count: 1 })
        })

        it('should delete oldest sessions when active sessions > 2', async () => {
            const mockUser = { id: 'student-123', email: 'student@example.com' }
            mockIsStudent.mockResolvedValue(true)
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            
            // 4 active sessions (exceeds limit of 2 by 2)
            mockRpc
                .mockResolvedValueOnce({ 
                    data: [
                        { id: 'session-1', created_at: '2024-01-01' },  // oldest - delete
                        { id: 'session-2', created_at: '2024-01-02' },  // oldest - delete
                        { id: 'session-3', created_at: '2024-01-03' },  // keep
                        { id: 'session-4', created_at: '2024-01-04' },  // keep (current)
                    ], 
                    error: null 
                })
                .mockResolvedValue({ data: null, error: null }) // delete_session RPC

            const result = await enforceSessionLimit()

            expect(result.success).toBe(true)
            expect(result.deleted).toBe(2)
            // Should call delete_session twice
            expect(mockRpc).toHaveBeenCalledWith('delete_session', { session_id: 'session-1' })
            expect(mockRpc).toHaveBeenCalledWith('delete_session', { session_id: 'session-2' })
        })

        it('should handle errors during session deletion gracefully', async () => {
            const mockUser = { id: 'student-123', email: 'student@example.com' }
            mockIsStudent.mockResolvedValue(true)
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            
            mockRpc
                .mockResolvedValueOnce({ 
                    data: [
                        { id: 'session-1', created_at: '2024-01-01' },
                        { id: 'session-2', created_at: '2024-01-02' },
                        { id: 'session-3', created_at: '2024-01-03' },
                    ], 
                    error: null 
                })
                .mockResolvedValueOnce({ data: null, error: { message: 'Delete failed' } }) // First delete fails
                .mockResolvedValueOnce({ data: null, error: null }) // Second delete succeeds

            const result = await enforceSessionLimit()

            expect(result.success).toBe(true)
            expect(result.deleted).toBe(1) // 3 sessions - 2 allowed = 1 to delete
        })

        it('should return internal error on unexpected exception', async () => {
            mockIsStudent.mockRejectedValue(new Error('Unexpected error'))

            const result = await enforceSessionLimit()

            expect(result).toEqual({ error: 'Internal error' })
        })
    })
})
