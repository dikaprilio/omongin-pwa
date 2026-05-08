import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createUserAction, editUserAction, deleteUserAction } from '@/app/(dashboard)/users/actions'
import { requireAdmin } from '@/lib/auth/roles'

// --- Mocking Dependencies ---

// 1. Mock Next Router/Cache
vi.mock('next/cache', () => ({
    revalidatePath: vi.fn(),
}))

// 2. Mock Auth Roles
vi.mock('@/lib/auth/roles', () => ({
    requireAdmin: vi.fn(),
}))

// 3. Mock Supabase Admin Client
const mockAuthAdmin = {
    createUser: vi.fn(),
    updateUserById: vi.fn(),
    deleteUser: vi.fn(),
}

const mockDbUpdate = vi.fn()
const mockDbDelete = vi.fn()
const mockDbEq = vi.fn()
const mockDbUpsert = vi.fn()

const mockDbFrom = vi.fn(() => ({
    upsert: mockDbUpsert,
    update: mockDbUpdate.mockImplementation(() => ({ eq: mockDbEq })),
    delete: mockDbDelete.mockImplementation(() => ({ eq: mockDbEq })),
}))

vi.mock('@/utils/supabase/server', () => ({
    createAdminClient: vi.fn(() => Promise.resolve({
        auth: { admin: mockAuthAdmin },
        from: mockDbFrom,
    })),
}))

// --- Test Suites ---

describe('User Management Actions', () => {

    beforeEach(() => {
        vi.clearAllMocks()
        // Default success returns
        mockAuthAdmin.createUser.mockResolvedValue({ data: { user: { id: '123e4567-e89b-12d3-a456-426614174001' } }, error: null })
        mockAuthAdmin.updateUserById.mockResolvedValue({ data: { user: { id: '123e4567-e89b-12d3-a456-426614174002' } }, error: null })
        mockAuthAdmin.deleteUser.mockResolvedValue({ data: {}, error: null })

        mockDbUpsert.mockResolvedValue({ error: null })
        mockDbEq.mockResolvedValue({ error: null })
    })

    describe('createUserAction', () => {
        it('should create a user successfully with valid data', async () => {
            const formData = new FormData()
            formData.append('email', 'new@example.com')
            formData.append('password', 'password123')
            formData.append('fullName', 'New User')
            formData.append('role', 'teacher')

            const result = await createUserAction(formData)

            expect(requireAdmin).toHaveBeenCalled()
            expect(mockAuthAdmin.createUser).toHaveBeenCalledWith({
                email: 'new@example.com',
                password: 'password123',
                email_confirm: true,
                user_metadata: { full_name: 'New User' }
            })
            expect(mockDbUpsert).toHaveBeenCalledWith({
                id: '123e4567-e89b-12d3-a456-426614174001',
                role: 'teacher',
                full_name: 'New User',
                subscription_tier: 'free'
            })
            expect(result).toEqual({ success: true, userId: '123e4567-e89b-12d3-a456-426614174001' })
        })

        it('should fail if validation fails (e.g. invalid email)', async () => {
            const formData = new FormData()
            formData.append('email', 'not-an-email')
            formData.append('password', 'password123')
            formData.append('fullName', 'New User')

            const result = await createUserAction(formData)

            expect(result.error).toBeDefined()
            expect(mockAuthAdmin.createUser).not.toHaveBeenCalled()
        })
    })

    describe('editUserAction', () => {
        it('should edit user Auth and Profile successfully', async () => {
            const formData = new FormData()
            formData.append('userId', '123e4567-e89b-12d3-a456-426614174002')
            formData.append('email', 'edited@example.com')
            formData.append('fullName', 'Edited Name')
            formData.append('role', 'super_admin')

            const result = await editUserAction(formData)

            expect(requireAdmin).toHaveBeenCalled()
            expect(mockAuthAdmin.updateUserById).toHaveBeenCalledWith('123e4567-e89b-12d3-a456-426614174002', {
                email: 'edited@example.com',
                user_metadata: { full_name: 'Edited Name' }
            })

            expect(mockDbFrom).toHaveBeenCalledWith('profiles')
            expect(mockDbUpdate).toHaveBeenCalledWith({
                role: 'super_admin',
                full_name: 'Edited Name'
            })
            expect(mockDbEq).toHaveBeenCalledWith('id', '123e4567-e89b-12d3-a456-426614174002')
            expect(result).toEqual({ success: true })
        })

        it('should fail if validation fails', async () => {
            const formData = new FormData()
            formData.append('email', 'edited@example.com') // Missing userId and fullName

            const result = await editUserAction(formData)

            expect(result.error).toBeDefined()
            expect(mockAuthAdmin.updateUserById).not.toHaveBeenCalled()
        })
    })

    describe('deleteUserAction', () => {
        it('should delete user from Auth and explicitly attempt from Profile', async () => {
            const result = await deleteUserAction('123e4567-e89b-12d3-a456-426614174003')

            expect(requireAdmin).toHaveBeenCalled()

            // Delete from auth
            expect(mockAuthAdmin.deleteUser).toHaveBeenCalledWith('123e4567-e89b-12d3-a456-426614174003')

            // Delete from profiles
            expect(mockDbFrom).toHaveBeenCalledWith('profiles')
            expect(mockDbDelete).toHaveBeenCalled()
            expect(mockDbEq).toHaveBeenCalledWith('id', '123e4567-e89b-12d3-a456-426614174003')

            expect(result).toEqual({ success: true })
        })

        it('should return error if userId is missing', async () => {
            // @ts-ignore - simulating bad input
            const result = await deleteUserAction()

            expect(result.error).toBe('User ID is required')
            expect(mockAuthAdmin.deleteUser).not.toHaveBeenCalled()
        })
    })

})
