import { createAdminClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/auth/roles'

// GET: Fetch all packages (admin view)
export async function GET() {
    try {
        const isUserAdmin = await isAdmin()
        if (!isUserAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const supabase = await createAdminClient()
        const { data, error } = await supabase
            .from('packages')
            .select('*')
            .order('price', { ascending: true })

        if (error) throw error
        return NextResponse.json({ data })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch packages' }, { status: 500 })
    }
}

// POST: Create a new package
export async function POST(request: Request) {
    try {
        const isUserAdmin = await isAdmin()
        if (!isUserAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const body = await request.json()
        const { name, price, total_sessions, description, privileges, is_promo } = body

        if (!name || price === undefined || !total_sessions) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const supabase = await createAdminClient()
        const { data, error } = await supabase
            .from('packages')
            .insert({
                name,
                price,
                total_sessions,
                description,
                privileges: privileges || {},
                is_promo: is_promo || false
            })
            .select()
            .single()

        if (error) throw error
        return NextResponse.json({ data })
    } catch (error) {
        console.error('Create package error:', error)
        return NextResponse.json({ error: 'Failed to create package' }, { status: 500 })
    }
}
