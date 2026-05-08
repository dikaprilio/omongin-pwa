import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { UserRole } from '@/lib/auth/roles'

// Mock the Supabase server module before importing the functions
const mockGetUser = vi.fn()
const mockFrom = vi.fn()
const mockSelect = vi.fn()
const mockEq = vi.fn()
const mockSingle = vi.fn()
const mockRpc = vi.fn()

vi.mock('@/utils/supabase/server', () => ({
    createClient: vi.fn(() => ({
        auth: {
            getUser: mockGetUser,
        },
        from: mockFrom,
        rpc: mockRpc,
    })),
    createAdminClient: vi.fn(() => ({
        from: mockFrom,
        rpc: mockRpc,
    })),
}))

// Import the functions after mocking
import {
    getUserRole,
    getCurrentUserWithRole,
    isAdmin,
    isTeacher,
    isStudent,
    requireAdmin,
    getTeachers,
    getAllTeachableUsers,
} from '@/lib/auth/roles'

describe('Auth Roles', () => {
    beforeEach(() => {
        vi.clearAllMocks()
        
        // Build chain: from().select().in().order()
        const mockOrder = vi.fn(() => Promise.resolve({ data: [], error: null }))
        const mockIn = vi.fn(() => ({ order: mockOrder }))
        mockSelect.mockReturnValue({ eq: mockEq, single: mockSingle, in: mockIn })
        
        mockFrom.mockReturnValue({ select: mockSelect, eq: mockEq })
        mockEq.mockReturnValue({ single: mockSingle })
    })

    describe('getUserRole', () => {
        it('should return null when user is not authenticated', async () => {
            mockGetUser.mockResolvedValue({ data: { user: null }, error: { message: 'Not authenticated' } })

            const role = await getUserRole()
            expect(role).toBeNull()
        })

        it('should return user role from profile when authenticated', async () => {
            const mockUser = { id: 'user-123', email: 'test@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'teacher' }, error: null })

            const role = await getUserRole()
            expect(role).toBe('teacher')
        })

        it('should default to student if no role in profile', async () => {
            const mockUser = { id: 'user-123', email: 'test@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: null, error: { message: 'Not found' } })

            const role = await getUserRole()
            expect(role).toBe('student')
        })
    })

    describe('getCurrentUserWithRole', () => {
        it('should return null when user is not authenticated', async () => {
            mockGetUser.mockResolvedValue({ data: { user: null }, error: { message: 'Not authenticated' } })

            const user = await getCurrentUserWithRole()
            expect(user).toBeNull()
        })

        it('should return user with role when authenticated', async () => {
            const mockUser = { id: 'user-123', email: 'test@example.com', user_metadata: { full_name: 'Test User' } }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'super_admin', full_name: 'Admin User' }, error: null })

            const user = await getCurrentUserWithRole()
            expect(user).toEqual({
                id: 'user-123',
                email: 'test@example.com',
                role: 'super_admin',
                fullName: 'Admin User',
            })
        })

        it('should fallback to user_metadata full_name if profile has no full_name', async () => {
            const mockUser = { id: 'user-123', email: 'test@example.com', user_metadata: { full_name: 'Metadata Name' } }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'student' }, error: null })

            const user = await getCurrentUserWithRole()
            expect(user?.fullName).toBe('Metadata Name')
        })
    })

    describe('isAdmin', () => {
        it('should return true for super_admin role', async () => {
            const mockUser = { id: 'user-123', email: 'admin@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'super_admin' }, error: null })

            const result = await isAdmin()
            expect(result).toBe(true)
        })

        it('should return false for teacher role', async () => {
            const mockUser = { id: 'user-123', email: 'teacher@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'teacher' }, error: null })

            const result = await isAdmin()
            expect(result).toBe(false)
        })

        it('should return false for student role', async () => {
            const mockUser = { id: 'user-123', email: 'student@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'student' }, error: null })

            const result = await isAdmin()
            expect(result).toBe(false)
        })

        it('should return false when not authenticated', async () => {
            mockGetUser.mockResolvedValue({ data: { user: null }, error: { message: 'Not authenticated' } })

            const result = await isAdmin()
            expect(result).toBe(false)
        })
    })

    describe('isTeacher', () => {
        it('should return true for teacher role', async () => {
            const mockUser = { id: 'user-123', email: 'teacher@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'teacher' }, error: null })

            const result = await isTeacher()
            expect(result).toBe(true)
        })

        it('should return false for super_admin role', async () => {
            const mockUser = { id: 'user-123', email: 'admin@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'super_admin' }, error: null })

            const result = await isTeacher()
            expect(result).toBe(false)
        })
    })

    describe('isStudent', () => {
        it('should return true for student role', async () => {
            const mockUser = { id: 'user-123', email: 'student@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'student' }, error: null })

            const result = await isStudent()
            expect(result).toBe(true)
        })

        it('should return false for admin role', async () => {
            const mockUser = { id: 'user-123', email: 'admin@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'super_admin' }, error: null })

            const result = await isStudent()
            expect(result).toBe(false)
        })
    })

    describe('requireAdmin', () => {
        it('should not throw for super_admin', async () => {
            const mockUser = { id: 'user-123', email: 'admin@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'super_admin' }, error: null })

            await expect(requireAdmin()).resolves.not.toThrow()
        })

        it('should throw error for teacher', async () => {
            const mockUser = { id: 'user-123', email: 'teacher@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'teacher' }, error: null })

            await expect(requireAdmin()).rejects.toThrow('This action requires admin privileges')
        })

        it('should throw error for student', async () => {
            const mockUser = { id: 'user-123', email: 'student@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'student' }, error: null })

            await expect(requireAdmin()).rejects.toThrow('This action requires admin privileges')
        })

        it('should throw error when not authenticated', async () => {
            mockGetUser.mockResolvedValue({ data: { user: null }, error: { message: 'Not authenticated' } })

            await expect(requireAdmin()).rejects.toThrow('This action requires admin privileges')
        })
    })

    describe('getTeachers', () => {
        it('should throw error when user is not admin', async () => {
            const mockUser = { id: 'user-123', email: 'teacher@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'teacher' }, error: null })

            await expect(getTeachers()).rejects.toThrow('This action requires admin privileges')
        })

        it('should return teachers and admins when user is admin', async () => {
            const mockUser = { id: 'admin-123', email: 'admin@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            
            // First call for requireAdmin check (getUserRole)
            mockSingle
                .mockResolvedValueOnce({ data: { role: 'super_admin' }, error: null })

            // Build chain for getTeachers: from().select().in().order()
            const mockOrder = vi.fn(() => Promise.resolve({
                data: [
                    { id: 'teacher-1', role: 'teacher', full_name: 'Teacher One' },
                    { id: 'admin-1', role: 'super_admin', full_name: 'Admin One' },
                ],
                error: null,
            }))
            const mockIn = vi.fn(() => ({ order: mockOrder }))
            
            // Update mockSelect to return chain with .in()
            mockSelect.mockReturnValue({ eq: mockEq, single: mockSingle, in: mockIn })

            const teachers = await getTeachers()
            expect(teachers).toHaveLength(2)
            expect(teachers[0].role).toBe('teacher')
            expect(teachers[1].role).toBe('super_admin')
        })
    })

    describe('getAllTeachableUsers', () => {
        it('should throw error when user is not admin', async () => {
            const mockUser = { id: 'user-123', email: 'student@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            mockSingle.mockResolvedValue({ data: { role: 'student' }, error: null })

            await expect(getAllTeachableUsers()).rejects.toThrow('This action requires admin privileges')
        })

        it('should fallback to getTeachers when RPC is not available', async () => {
            const mockUser = { id: 'admin-123', email: 'admin@example.com' }
            mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null })
            
            mockSingle.mockResolvedValue({ data: { role: 'super_admin' }, error: null })
            mockRpc.mockResolvedValue({ data: null, error: { message: 'RPC not found' } })

            const mockOrder = vi.fn(() => Promise.resolve({
                data: [{ id: 'teacher-1', role: 'teacher', full_name: 'Teacher One' }],
                error: null,
            }))
            const mockIn = vi.fn(() => ({ order: mockOrder }))
            
            // Update mockSelect to return chain with .in()
            mockSelect.mockReturnValue({ eq: mockEq, single: mockSingle, in: mockIn })

            const users = await getAllTeachableUsers()
            expect(users).toHaveLength(1)
        })
    })
})
