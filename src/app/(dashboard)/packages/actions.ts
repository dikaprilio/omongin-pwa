'use server'
// Actions for packages

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/auth/roles'

export async function getPackages() {
    // All users can view packages
    const supabase = await createClient()
    const { data: packages, error } = await supabase
        .from('packages')
        .select('id, name, total_sessions, price, created_at')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching packages:', error)
        return []
    }

    return packages || []
}

export async function createPackage(formData: FormData) {
    // Only admins can create packages
    await requireAdmin()

    const supabase = await createClient()

    const name = formData.get('name') as string
    const total_sessions = parseInt(formData.get('total_sessions') as string)
    const price = parseInt(formData.get('price') as string)

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        throw new Error('User not authenticated')
    }

    const { error } = await supabase.from('packages').insert({
        user_id: user.id,
        name,
        total_sessions,
        price,
    })

    if (error) {
        console.error('Error creating package:', error)
        throw new Error(error.message)
    }

    revalidatePath('/packages')
    redirect('/packages')
}

export async function updatePackage(id: string, formData: FormData) {
    // Only admins can update packages
    await requireAdmin()

    const supabase = await createClient()

    const name = formData.get('name') as string
    const total_sessions = parseInt(formData.get('total_sessions') as string)
    const price = parseInt(formData.get('price') as string)

    const { error } = await supabase.from('packages').update({
        name,
        total_sessions,
        price,
    }).eq('id', id)

    if (error) {
        console.error('Error updating package:', error)
        throw new Error(error.message)
    }

    revalidatePath('/packages')
}

export async function deletePackage(id: string) {
    // Only admins can delete packages
    await requireAdmin()

    const supabase = await createClient()
    const { error } = await supabase.from('packages').delete().eq('id', id)

    if (error) {
        console.error('Error deleting package:', error)
        throw new Error(error.message)
    }

    revalidatePath('/packages')
}
