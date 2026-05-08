'use client'

import { createClient } from '@/utils/supabase/client'
import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { Loader2, BookOpen, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { toast } from 'sonner'
import { useRouter, useSearchParams } from 'next/navigation'
import { enforceSessionLimit } from '@/lib/auth/session'
import { getSafeRedirect } from '@/lib/utils/url'

type LoginView = 'student' | 'admin'

function LoginContent() {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [view, setView] = useState<LoginView | null>(null)

    const supabase = createClient()
    const router = useRouter()
    const searchParams = useSearchParams()

    // Sanitize redirect_to from search params
    const redirectToParam = searchParams.get('redirect_to')
    const redirectTo = getSafeRedirect(redirectToParam, '')

    // Determine view based on subdomain (SSR-safe)
    useEffect(() => {
        const hostname = window.location.hostname
        const isAdminSubdomain = hostname.startsWith('admin.')
        setView(isAdminSubdomain ? 'admin' : 'student')
    }, [])

    const handleGoogleLogin = async () => {
        setIsLoading(true)
        try {
            // Preserve redirect_to for OAuth callback
            const callbackUrl = redirectTo
                ? `${location.origin}/auth/callback?next=${encodeURIComponent(redirectTo)}`
                : `${location.origin}/auth/callback`
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: callbackUrl,
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                        scope: 'openid profile email https://www.googleapis.com/auth/calendar',
                    },
                },
            })
            if (error) throw error
        } catch (error) {
            console.error('Error logging in:', error)
            toast.error('Failed to login with Google')
            setIsLoading(false)
        }
    }

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            if (error) throw error

            // Enforce Session Limit (2 devices) - ignore errors, it's optional
            try {
                await enforceSessionLimit()
            } catch (e) {
                console.warn('Session limit check skipped:', e)
            }

            toast.success('Logged in successfully')

            // Redirect to original destination or default to curriculum
            // redirectTo is already sanitized
            const destination = redirectTo || '/curriculum'

            // Force navigation - use both approaches for reliability
            router.push(destination)
            router.refresh()

            // Fallback: if router.push doesn't work, use window.location
            setTimeout(() => {
                if (window.location.pathname === '/login') {
                    window.location.href = destination
                }
            }, 500)
        } catch (error: any) {
            console.error('Login error:', error)
            toast.error(error.message || 'Invalid login credentials')
            setIsLoading(false)
        }
    }

    // Show loading while determining view
    if (view === null) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-muted/30">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-muted/30">
            <Card className="w-full max-w-md shadow-lg border-2">
                <CardHeader className="space-y-4 text-center">
                    <div className="flex justify-center">
                        <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30">
                            {view === 'admin' ? <ShieldCheck className="h-6 w-6" /> : <BookOpen className="h-6 w-6" />}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <CardTitle className="text-2xl font-black tracking-tight">
                            {view === 'admin' ? 'Admin Portal' : 'Student Login'}
                        </CardTitle>
                        <CardDescription>
                            {view === 'admin'
                                ? 'Restricted access for staff only'
                                : 'Sign in to continue your learning journey'}
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent>
                    {view === 'admin' ? (
                        <Button
                            onClick={handleGoogleLogin}
                            disabled={isLoading}
                            variant="outline"
                            className="w-full h-12 text-base font-medium relative hover:bg-slate-50 transition-colors"
                        >
                            {isLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <div className="flex items-center gap-3">
                                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"
                                        />
                                    </svg>
                                    Sign in with Google
                                </div>
                            )}
                        </Button>
                    ) : (
                        <form onSubmit={handleEmailLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="student@example.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={isLoading}
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full h-11 font-bold text-base bg-blue-600 hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                                disabled={isLoading}
                            >
                                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Log In'}
                            </Button>
                        </form>
                    )}
                </CardContent>
                <CardFooter className="flex flex-col gap-2 text-center text-sm text-muted-foreground pb-6">
                    {view === 'admin' ? (
                        <p>Authorized personnel only</p>
                    ) : (
                        <>
                            <p>
                                Don&apos;t have an account?{' '}
                                <Link href="/register" className="text-primary font-medium hover:underline">
                                    Sign up
                                </Link>
                            </p>
                            <p className="text-xs">Forgot your password? Contact your teacher.</p>
                        </>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="flex min-h-screen items-center justify-center bg-muted/30">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        }>
            <LoginContent />
        </Suspense>
    )
}
