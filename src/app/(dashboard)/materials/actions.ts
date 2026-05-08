'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { isAdmin } from '@/lib/auth/roles'

export async function getFolders(parentId: string | null = null) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return []

    // RLS handles visibility (shared folders + own folders)
    // The policy already ensures users see:
    // - Shared folders (is_shared = TRUE)
    // - Their own folders (user_id = auth.uid())
    let query = supabase
        .from('folders')
        .select('*, user_id, is_shared')
        .order('name', { ascending: true })

    if (parentId) {
        query = query.eq('parent_id', parentId)
    } else {
        query = query.is('parent_id', null)
    }

    const { data, error } = await query

    if (error) {
        console.error('Error fetching folders:', error)
        return []
    }

    return data || []
}

export async function createFolder(name: string, parentId: string | null = null) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Not authenticated')

    // Check if user is admin to set is_shared
    const admin = await isAdmin()

    const { data, error } = await supabase
        .from('folders')
        .insert({
            name,
            parent_id: parentId,
            user_id: user.id,
            is_shared: admin // Admin-created folders are shared with all teachers
        })
        .select()
        .single()

    if (error) throw new Error(error.message)

    revalidatePath('/materials')
    return data
}

export async function deleteFolder(id: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Not authenticated')

    // Check ownership or admin status
    const admin = await isAdmin()

    // Get folder info
    const { data: folder } = await supabase
        .from('folders')
        .select('user_id, is_shared')
        .eq('id', id)
        .single()

    if (!folder) throw new Error('Folder not found')

    // Only allow deletion if:
    // - User owns the folder, OR
    // - User is admin (can delete shared folders)
    if (folder.user_id !== user.id && !admin) {
        throw new Error('You do not have permission to delete this folder')
    }

    // If it's a shared folder, only admins can delete
    if (folder.is_shared && !admin) {
        throw new Error('Only admins can delete shared folders')
    }

    const { error } = await supabase.from('folders').delete().eq('id', id)

    if (error) throw new Error(error.message)
    revalidatePath('/materials')
}

export async function getMaterials(folderId: string | null = null) {
    const supabase = await createClient()

    // RLS handles visibility
    let query = supabase
        .from('materials')
        .select('*, user_id, is_shared')
        .order('created_at', { ascending: false })

    if (folderId) {
        query = query.eq('folder_id', folderId)
    } else {
        query = query.is('folder_id', null)
    }

    const { data, error } = await query

    if (error) {
        console.error('Error fetching materials:', error)
        return []
    }

    return data || []
}

export async function createMaterial(folderId: string | null, title: string, type: string, url: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Not authenticated')

    const admin = await isAdmin()

    // If adding to a folder, check if it's a shared folder
    let isShared = admin // Default: admin-created materials are shared

    if (folderId) {
        const { data: folder } = await supabase
            .from('folders')
            .select('is_shared, user_id')
            .eq('id', folderId)
            .single()

        if (folder) {
            // If folder is shared, only admins can add materials
            if (folder.is_shared && !admin) {
                throw new Error('Only admins can add materials to shared folders')
            }
            // Inherit folder's shared status
            isShared = folder.is_shared || false
        }
    }

    const { data, error } = await supabase
        .from('materials')
        .insert({
            folder_id: folderId,
            title,
            type,
            url,
            user_id: user.id,
            is_shared: isShared
        })
        .select()
        .single()

    if (error) throw new Error(error.message)

    revalidatePath('/materials')
    return data
}

export async function deleteMaterial(id: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Not authenticated')

    const admin = await isAdmin()

    // Get material info
    const { data: material } = await supabase
        .from('materials')
        .select('user_id, is_shared')
        .eq('id', id)
        .single()

    if (!material) throw new Error('Material not found')

    // Check permissions
    if (material.user_id !== user.id && !admin) {
        throw new Error('You do not have permission to delete this material')
    }

    if (material.is_shared && !admin) {
        throw new Error('Only admins can delete shared materials')
    }

    const { error } = await supabase.from('materials').delete().eq('id', id)

    if (error) throw new Error(error.message)
    revalidatePath('/materials')
}


export async function updateFolder(id: string, name: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Not authenticated')

    const admin = await isAdmin()

    // Get folder info
    const { data: folder } = await supabase
        .from('folders')
        .select('user_id, is_shared')
        .eq('id', id)
        .single()

    if (!folder) throw new Error('Folder not found')

    // Check permissions
    if (folder.user_id !== user.id && !admin) {
        throw new Error('You do not have permission to edit this folder')
    }

    if (folder.is_shared && !admin) {
        throw new Error('Only admins can edit shared folders')
    }

    const { error } = await supabase.from('folders').update({ name }).eq('id', id)

    if (error) throw new Error(error.message)
    revalidatePath('/materials')
}

export async function updateMaterial(id: string, title: string, url: string, type: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Not authenticated')

    const admin = await isAdmin()

    // Get material info
    const { data: material } = await supabase
        .from('materials')
        .select('user_id, is_shared')
        .eq('id', id)
        .single()

    if (!material) throw new Error('Material not found')

    // Check permissions
    if (material.user_id !== user.id && !admin) {
        throw new Error('You do not have permission to edit this material')
    }

    if (material.is_shared && !admin) {
        throw new Error('Only admins can edit shared materials')
    }

    const { error } = await supabase.from('materials').update({ title, url, type }).eq('id', id)

    if (error) throw new Error(error.message)
    revalidatePath('/materials')
}
