import { NextRequest, NextResponse } from 'next/server'
import { createClient, createAdminClient } from '@/utils/supabase/server'
import { isAdmin } from '@/lib/auth/roles'
import bcrypt from 'bcryptjs'

// Generate a random 6-character alphanumeric password
function generatePassword(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // Exclude confusing chars like 0/O, 1/I
    let password = ''
    for (let i = 0; i < 6; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
}

// GET: Fetch current active password info
export async function GET(request: NextRequest) {
    try {
        // Check admin access
        if (!(await isAdmin())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
        }

        const supabase = await createAdminClient()
        const { data, error } = await supabase
            .from('placement_passwords')
            .select('id, password, created_at, expires_at, is_active')
            .eq('is_active', true)
            .gt('expires_at', new Date().toISOString())
            .order('created_at', { ascending: false })
            .limit(1)
            .single()

        if (error || !data) {
            return NextResponse.json({
                hasActive: false,
                message: 'No active password'
            })
        }

        return NextResponse.json({
            hasActive: true,
            password: data.password,
            createdAt: data.created_at,
            expiresAt: data.expires_at
        })
    } catch (error) {
        console.error('Get placement password error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

// POST: Generate new password
export async function POST(request: NextRequest) {
    try {
        // Check admin access
        if (!(await isAdmin())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
        }

        const supabase = await createClient()
        const adminSupabase = await createAdminClient()

        // Get current user
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
        }

        // Deactivate any existing active passwords
        await adminSupabase
            .from('placement_passwords')
            .update({ is_active: false })
            .eq('is_active', true)

        // Generate new password
        const plainPassword = generatePassword()
        const passwordHash = await bcrypt.hash(plainPassword, 10)
        const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

        // Insert new password
        const { data, error } = await adminSupabase
            .from('placement_passwords')
            .insert({
                password: plainPassword,
                password_hash: passwordHash,
                expires_at: expiresAt.toISOString(),
                created_by: user.id,
                is_active: true
            })
            .select()
            .single()

        if (error) {
            console.error('Create password error:', error)
            return NextResponse.json({ error: 'Failed to create password' }, { status: 500 })
        }

        return NextResponse.json({
            success: true,
            password: plainPassword,
            expiresAt: expiresAt.toISOString()
        })
    } catch (error) {
        console.error('Generate placement password error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

// DELETE: Invalidate current password
export async function DELETE(request: NextRequest) {
    try {
        // Check admin access
        if (!(await isAdmin())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
        }

        const supabase = await createAdminClient()

        await supabase
            .from('placement_passwords')
            .update({ is_active: false })
            .eq('is_active', true)

        return NextResponse.json({ success: true, message: 'Password invalidated' })
    } catch (error) {
        console.error('Delete placement password error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
