'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Key, Copy, RefreshCw, Loader2, Eye, EyeOff, Clock, AlertTriangle } from 'lucide-react'

interface PasswordData {
    hasActive: boolean
    password?: string
    createdAt?: string
    expiresAt?: string
}

export default function AdminPlacementPassword() {
    const [data, setData] = useState<PasswordData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isGenerating, setIsGenerating] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [timeLeft, setTimeLeft] = useState('')

    const fetchPassword = useCallback(async () => {
        try {
            const res = await fetch('/api/admin/placement-password')
            const json = await res.json()
            setData(json)
        } catch (error) {
            console.error('Failed to fetch password:', error)
            toast.error('Gagal memuat data password')
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchPassword()
    }, [fetchPassword])

    // Update countdown timer
    useEffect(() => {
        if (!data?.expiresAt) return

        const updateTimer = () => {
            const expires = new Date(data.expiresAt!).getTime()
            const now = Date.now()
            const diff = expires - now

            if (diff <= 0) {
                setTimeLeft('Expired')
                return
            }

            const hours = Math.floor(diff / (1000 * 60 * 60))
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            setTimeLeft(`${hours}h ${minutes}m`)
        }

        updateTimer()
        const interval = setInterval(updateTimer, 60000) // Update every minute
        return () => clearInterval(interval)
    }, [data?.expiresAt])

    const handleGenerate = async () => {
        setIsGenerating(true)
        try {
            const res = await fetch('/api/admin/placement-password', { method: 'POST' })
            const json = await res.json()

            if (res.ok) {
                toast.success('Password baru berhasil dibuat!')
                setData({
                    hasActive: true,
                    password: json.password,
                    expiresAt: json.expiresAt,
                    createdAt: new Date().toISOString()
                })
                setShowPassword(true)
            } else {
                toast.error(json.error || 'Gagal membuat password')
            }
        } catch (error) {
            console.error('Generate password error:', error)
            toast.error('Terjadi kesalahan')
        } finally {
            setIsGenerating(false)
        }
    }

    const handleCopy = () => {
        if (data?.password) {
            navigator.clipboard.writeText(data.password)
            toast.success('Password disalin ke clipboard!')
        }
    }

    const handleInvalidate = async () => {
        if (!confirm('Yakin ingin menonaktifkan password? User tidak akan bisa mengakses placement test.')) {
            return
        }

        try {
            const res = await fetch('/api/admin/placement-password', { method: 'DELETE' })
            if (res.ok) {
                toast.success('Password dinonaktifkan')
                setData({ hasActive: false })
            }
        } catch {
            toast.error('Gagal menonaktifkan password')
        }
    }

    if (isLoading) {
        return (
            <Card>
                <CardContent className="py-8 flex items-center justify-center">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </CardContent>
            </Card>
        )
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-primary" />
                    <CardTitle>Placement Test Password</CardTitle>
                </div>
                <CardDescription>
                    Password untuk mengakses placement test. Berlaku 24 jam.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {data?.hasActive ? (
                    <>
                        {/* Active Password Display */}
                        <div className="bg-muted/50 rounded-xl p-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Password Aktif:</span>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                    <span className={`text-sm font-medium ${timeLeft === 'Expired' ? 'text-destructive' : 'text-foreground'}`}>
                                        {timeLeft}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="flex-1 font-mono text-2xl tracking-widest text-center py-2 bg-background rounded-lg border border-border">
                                    {showPassword ? data.password : '••••••'}
                                </div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleCopy}
                                >
                                    <Copy className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={handleGenerate}
                                disabled={isGenerating}
                            >
                                {isGenerating ? (
                                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                ) : (
                                    <RefreshCw className="h-4 w-4 mr-2" />
                                )}
                                Buat Password Baru
                            </Button>
                            <Button
                                variant="destructive"
                                size="icon"
                                onClick={handleInvalidate}
                                title="Nonaktifkan password"
                            >
                                <AlertTriangle className="h-4 w-4" />
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        {/* No Active Password */}
                        <div className="text-center py-6">
                            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                                <Key className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Tidak ada password aktif. Buat password untuk mengaktifkan placement test.
                            </p>
                            <Button onClick={handleGenerate} disabled={isGenerating}>
                                {isGenerating ? (
                                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                ) : (
                                    <Key className="h-4 w-4 mr-2" />
                                )}
                                Buat Password
                            </Button>
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    )
}
