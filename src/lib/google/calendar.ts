import { createClient } from '@/utils/supabase/server'

const CALENDAR_API_BASE = 'https://www.googleapis.com/calendar/v3'

export async function getCalendarService() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // For provider_token, we still need the session, but we authenticate the user first
    const { data: { session } } = await supabase.auth.getSession()

    let providerToken = session?.provider_token

    if (!providerToken) {
        // Try to get from cookie
        const { cookies } = await import('next/headers')
        const cookieStore = await cookies()
        providerToken = cookieStore.get('provider_token')?.value
    }

    // If still no token, try to refresh using the stored refresh token
    if (!providerToken && session?.user?.id) {
        const { data: profile } = await supabase
            .from('profiles')
            .select('google_refresh_token')
            .eq('id', session.user.id)
            .single()

        if (profile?.google_refresh_token) {
            try {
                const response = await fetch('https://oauth2.googleapis.com/token', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams({
                        client_id: process.env.SUPABASE_AUTH_GOOGLE_CLIENT_ID!,
                        client_secret: process.env.SUPABASE_AUTH_GOOGLE_SECRET!,
                        refresh_token: profile.google_refresh_token,
                        grant_type: 'refresh_token',
                    }),
                })

                if (!response.ok) {
                    console.error("Refresh failed. Status:", response.status)
                    return null
                }

                const data = await response.json()
                if (data.access_token) {
                    providerToken = data.access_token
                    // Optional: Update cookie with new token
                }
            } catch (error) {
                console.error("Error refreshing token:", error)
            }
        }
    }

    if (!providerToken) {
        return null
    }

    return {
        token: providerToken,

        async listEvents(timeMin?: string, maxResults = 10) {
            const params = new URLSearchParams({
                access_token: this.token,
                calendarId: 'primary',
                maxResults: maxResults.toString(),
                singleEvents: 'true',
                orderBy: 'startTime',
            })

            if (timeMin) params.append('timeMin', timeMin)

            const response = await fetch(`${CALENDAR_API_BASE}/calendars/primary/events?${params}`)
            if (!response.ok) {
                throw new Error(`Calendar API error: ${response.statusText}`)
            }
            return response.json()
        },

        async createEvent(event: any) {
            const response = await fetch(`${CALENDAR_API_BASE}/calendars/primary/events?access_token=${this.token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(event),
            })

            if (!response.ok) {
                const error = await response.json()
                throw new Error(`Failed to create event: ${error.error?.message || response.statusText}`)
            }
            return response.json()
        },

        async deleteEvent(eventId: string) {
            const response = await fetch(`${CALENDAR_API_BASE}/calendars/primary/events/${eventId}?access_token=${this.token}`, {
                method: 'DELETE',
            })

            if (!response.ok && response.status !== 404) { // Ignore 404 if already deleted
                const error = await response.json().catch(() => ({}))
                throw new Error(`Failed to delete event: ${error.error?.message || response.statusText}`)
            }
            return true
        },

        async updateEvent(eventId: string, event: any) {
            const response = await fetch(`${CALENDAR_API_BASE}/calendars/primary/events/${eventId}?access_token=${this.token}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(event),
            })

            if (!response.ok) {
                const error = await response.json()
                throw new Error(`Failed to update event: ${error.error?.message || response.statusText}`)
            }
            return response.json()
        }
    }
}
