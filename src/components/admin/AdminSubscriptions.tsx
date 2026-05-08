'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from 'sonner'
import { createClient } from '@/utils/supabase/client'
import { MoreHorizontal, ShieldCheck, Loader2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface Subscription {
    id: string
    status: 'active' | 'cancelled' | 'completed'
    sessions_remaining: number
    students: {
        full_name: string
        email: string
    }
    packages: {
        name: string
    }
}

export function AdminSubscriptions() {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([])
    const [loading, setLoading] = useState(true)
    const [updatingId, setUpdatingId] = useState<string | null>(null)

    const supabase = createClient()

    useEffect(() => {
        fetchSubscriptions()
    }, [])

    const fetchSubscriptions = async () => {
        try {
            const { data, error } = await supabase
                .from('subscriptions')
                .select(`
                    id,
                    status,
                    sessions_remaining,
                    students (full_name, email),
                    packages (name)
                `)
                .order('created_at', { ascending: false })
                .limit(50)

            if (error) throw error
            setSubscriptions((data as any[]) || [])
        } catch (error) {
            console.error('Error fetching subscriptions:', error)
            toast.error('Failed to load subscriptions')
        } finally {
            setLoading(false)
        }
    }

    const handlePaidToggle = async (subscriptionId: string, currentVerified: boolean) => {
        setUpdatingId(subscriptionId)
        try {
            const response = await fetch('/api/admin/subscriptions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    subscriptionId,
                    paid: !currentVerified // toggle
                })
            })

            if (!response.ok) throw new Error('Update failed')

            // Optimistic update
            setSubscriptions(prev => prev.map(sub => {
                if (sub.id === subscriptionId) {
                    return {
                        ...sub,
                        status: !currentVerified ? 'active' : 'cancelled'
                    }
                }
                return sub
            }))

            toast.success('Subscription updated')
        } catch (error) {
            toast.error('Failed to update subscription')
            // Revert changes (optional, but good practice if not re-fetching)
            fetchSubscriptions()
        } finally {
            setUpdatingId(null)
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
            </div>
        )
    }

    return (
        <Card className="border-indigo-100 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-indigo-600" />
                    Subscription Management
                </CardTitle>
                <CardDescription>
                    Manually verify payments and manage active subscriptions
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {subscriptions.length === 0 ? (
                        <p className="text-center text-muted-foreground py-8">No subscriptions found</p>
                    ) : (
                        <div className="grid gap-3">
                            {subscriptions.map((sub) => {
                                const isPaid = sub.status === 'active'
                                return (
                                    <div
                                        key={sub.id}
                                        className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-colors group"
                                    >
                                        <div className="flex-1 min-w-0 mr-4">
                                            <div className="flex items-center gap-2 mb-1">
                                                <p className="font-semibold text-slate-800 truncate">
                                                    {sub.students?.full_name || 'Unknown Student'}
                                                </p>
                                                <Badge variant={isPaid ? "default" : "secondary"} className={isPaid ? "bg-green-500 hover:bg-green-600" : ""}>
                                                    {isPaid ? 'Active' : 'Unpaid'}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-slate-500 truncate">
                                                {sub.packages?.name || 'Unknown Package'} • {sub.sessions_remaining} sessions left
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="flex flex-col items-end mr-2">
                                                <span className="text-xs font-medium text-slate-500 mb-1">
                                                    PAID
                                                </span>
                                                {updatingId === sub.id ? (
                                                    <Loader2 className="h-5 w-5 animate-spin text-indigo-500" />
                                                ) : (
                                                    <Checkbox
                                                        checked={isPaid}
                                                        onCheckedChange={() => handlePaidToggle(sub.id, isPaid)}
                                                        className="h-5 w-5 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
