'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, ArrowRight, AlertCircle, CheckCircle, Loader2, Eye, EyeOff } from 'lucide-react'
import { cn } from '@/lib/utils'
import LandingNavbar from '@/components/LandingNavbar'
import Footer from '@/components/landing/Footer'

// Placement Test Page - Password Protected, No Login Required
export default function PlacementTestPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isCheckingSession, setIsCheckingSession] = useState(true)
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [retryAfter, setRetryAfter] = useState(0)

    // Check existing session on mount
    useEffect(() => {
        checkSession()
    }, [])

    const checkSession = async () => {
        // First check local persistence
        const savedAuth = localStorage.getItem('placement-auth')
        if (savedAuth === 'true') {
            setIsAuthenticated(true)
            setIsCheckingSession(false)
            return
        }

        try {
            const res = await fetch('/api/placement-test/verify-password')
            const data = await res.json()
            if (data.valid) {
                setIsAuthenticated(true)
                localStorage.setItem('placement-auth', 'true')
            } else {
                setIsAuthenticated(false)
            }
        } catch {
            setIsAuthenticated(false)
        } finally {
            setIsCheckingSession(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!password.trim() || isSubmitting || retryAfter > 0) return

        setIsSubmitting(true)
        setError('')

        try {
            const res = await fetch('/api/placement-test/verify-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: password.trim() })
            })

            const data = await res.json()

            if (res.ok) {
                setIsAuthenticated(true)
                localStorage.setItem('placement-auth', 'true')
            } else if (res.status === 429) {
                setRetryAfter(data.retryAfter)
                setError(data.message)
            } else {
                setError(data.message || 'Password salah')
            }
        } catch {
            setError('Terjadi kesalahan. Coba lagi.')
        } finally {
            setIsSubmitting(false)
        }
    }

    // Loading state
    if (isCheckingSession) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <div className="print:hidden">
                <LandingNavbar />
            </div>

            <main className="flex-1 flex items-center justify-center px-4 py-16">
                <AnimatePresence mode="wait">
                    {!isAuthenticated ? (
                        <PasswordForm
                            key="password-form"
                            password={password}
                            showPassword={showPassword}
                            error={error}
                            isSubmitting={isSubmitting}
                            retryAfter={retryAfter}
                            onPasswordChange={setPassword}
                            onShowPasswordToggle={() => setShowPassword(!showPassword)}
                            onSubmit={handleSubmit}
                        />
                    ) : (
                        <PlacementTest key="placement-test" />
                    )}
                </AnimatePresence>
            </main>

            <div className="print:hidden">
                <Footer />
            </div>
        </div>
    )
}

// Password Entry Form
function PasswordForm({
    password,
    showPassword,
    error,
    isSubmitting,
    retryAfter,
    onPasswordChange,
    onShowPasswordToggle,
    onSubmit
}: {
    password: string
    showPassword: boolean
    error: string
    isSubmitting: boolean
    retryAfter: number
    onPasswordChange: (v: string) => void
    onShowPasswordToggle: () => void
    onSubmit: (e: React.FormEvent) => void
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-md"
        >
            <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-2xl font-semibold mb-2">Placement Test</h1>
                <p className="text-muted-foreground">
                    Masukkan password untuk mengakses tes
                </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => onPasswordChange(e.target.value.toUpperCase())}
                        placeholder="Masukkan password..."
                        maxLength={6}
                        className={cn(
                            "w-full px-4 py-3 pr-12 rounded-xl border bg-card text-center font-mono text-2xl tracking-widest uppercase",
                            "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                            error ? "border-destructive" : "border-border"
                        )}
                        disabled={isSubmitting || retryAfter > 0}
                        autoFocus
                    />
                    <button
                        type="button"
                        onClick={onShowPasswordToggle}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>

                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center gap-2 text-destructive text-sm px-1"
                        >
                            <AlertCircle className="h-4 w-4 flex-shrink-0" />
                            <span>{error}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    type="submit"
                    disabled={!password.trim() || isSubmitting || retryAfter > 0}
                    className={cn(
                        "w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all",
                        "bg-primary text-primary-foreground hover:bg-primary/90",
                        "disabled:opacity-50 disabled:cursor-not-allowed"
                    )}
                >
                    {isSubmitting ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                    ) : retryAfter > 0 ? (
                        <>Coba lagi dalam {Math.ceil(retryAfter / 60)} menit</>
                    ) : (
                        <>
                            Mulai Test
                            <ArrowRight className="h-5 w-5" />
                        </>
                    )}
                </button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
                Tidak punya password? Hubungi admin untuk mendapatkan akses.
            </p>
        </motion.div>
    )
}

import PlacementTestContainer from '@/components/placement-test/PlacementTestContainer';

// Placeholder Placement Test Component -> Real Component
function PlacementTest() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
        >
            <PlacementTestContainer />
        </motion.div>
    )
}
