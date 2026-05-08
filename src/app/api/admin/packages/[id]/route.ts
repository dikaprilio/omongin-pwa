import { createAdminClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/auth/roles'

// PATCH: Update a package
export async function PATCH(
    request: Request,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    try {
        const isUserAdmin = await isAdmin()
        if (!isUserAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const { id } = params
        const body = await request.json()
        const { name, price, total_sessions, description, privileges, is_promo } = body

        const supabase = await createAdminClient()
        const { data, error } = await supabase
            .from('packages')
            .update({
                name,
                price,
                total_sessions,
                description,
                privileges,
                is_promo
            })
            .eq('id', id)
            .select()
            .single()

        if (error) throw error
        return NextResponse.json({ data })
    } catch (error) {
        console.error('Update package error:', error)
        return NextResponse.json({ error: 'Failed to update package' }, { status: 500 })
    }
}

// DELETE: Remove a package
export async function DELETE(
    request: Request,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    try {
        const isUserAdmin = await isAdmin()
        if (!isUserAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const { id } = params
        const supabase = await createAdminClient()
        const { error } = await supabase
            .from('packages')
            .delete()
            .eq('id', id)

        if (error) throw error
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Delete package error:', error)
        return NextResponse.json({ error: 'Failed to delete package' }, { status: 500 })
    }
}
