'use client'

import { Suspense, useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Mail, Loader2, RefreshCw, CheckCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { toast } from 'sonner'
import { resendVerificationEmail } from '@/app/register/actions'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

function VerifyEmailContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const email = searchParams.get('email') || ''

    const [isResending, setIsResending] = useState(false)
    const [cooldown, setCooldown] = useState(0)
    const [isLocalhost, setIsLocalhost] = useState(false)
    const [isSkipping, setIsSkipping] = useState(false)

    useEffect(() => {
        const hostname = window.location.hostname
        setIsLocalhost(hostname === 'localhost' || hostname === '127.0.0.1')
    }, [])

    // Cooldown timer
    useEffect(() => {
        if (cooldown > 0) {
            const timer = setTimeout(() => setCooldown(cooldown - 1), 1000)
            return () => clearTimeout(timer)
        }
    }, [cooldown])

    const handleResend = async () => {
        if (!email || cooldown > 0) return

        setIsResending(true)
        try {
            const result = await resendVerificationEmail(email)

            if (result.error) {
                toast.error(result.error)
            } else {
                toast.success(result.message || 'Verification email sent!')
                setCooldown(60) // 60 second cooldown
            }
        } catch (error) {
            toast.error('Failed to resend email')
        } finally {
            setIsResending(false)
        }
    }

    // Dev mode: Skip verification
    const handleSkipVerification = async () => {
        if (!email) {
            toast.error('Email is required')
            return
        }

        setIsSkipping(true)
        try {
            // Try to sign in - if dev mode is enabled, the account should be auto-confirmed
            const supabase = createClient()

            // Note: This will only work if the user was created with SKIP_EMAIL_VERIFICATION=true
            // Otherwise, we show a helpful message
            toast.info('If SKIP_EMAIL_VERIFICATION is enabled, try logging in directly.')
            router.push('/login')

        } catch (error) {
            toast.error('Failed to skip verification')
        } finally {
            setIsSkipping(false)
        }
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="space-y-4 text-center pb-2">
                    <div className="flex justify-center">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                            <Mail className="h-8 w-8 text-blue-600 animate-pulse" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <CardTitle className="text-2xl font-black tracking-tight">
                            Check Your Email
                        </CardTitle>
                        <CardDescription className="text-base">
                            We&apos;ve sent a verification link to
                        </CardDescription>
                        {email && (
                            <p className="font-medium text-gray-900 bg-gray-100 px-3 py-1.5 rounded-lg inline-block">
                                {email}
                            </p>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="space-y-6 pt-4">
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-3">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div className="text-sm text-blue-800">
                                <p className="font-medium">Click the link in your email</p>
                                <p className="text-blue-600 mt-0.5">You&apos;ll be automatically signed in</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-sm text-muted-foreground space-y-2">
                        <p>Didn&apos;t receive the email? Check your spam folder.</p>
                        <Button
                            variant="outline"
                            onClick={handleResend}
                            disabled={isResending || cooldown > 0 || !email}
                            className="w-full"
                        >
                            {isResending ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                    Sending...
                                </>
                            ) : cooldown > 0 ? (
                                <>
                                    <RefreshCw className="h-4 w-4 mr-2" />
                                    Resend in {cooldown}s
                                </>
                            ) : (
                                <>
                                    <RefreshCw className="h-4 w-4 mr-2" />
                                    Resend Verification Email
                                </>
                            )}
                        </Button>
                    </div>

                    {/* Dev mode: Skip verification */}
                    {isLocalhost && (
                        <div className="border-t pt-4">
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                                <div className="flex items-start gap-3">
                                    <Sparkles className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-amber-800">Development Mode</p>
                                        <p className="text-xs text-amber-600 mt-0.5 mb-3">
                                            If SKIP_EMAIL_VERIFICATION is enabled, your account is auto-confirmed.
                                        </p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={handleSkipVerification}
                                            disabled={isSkipping}
                                            className="w-full bg-amber-100 border-amber-300 hover:bg-amber-200 text-amber-800"
                                        >
                                            {isSkipping ? (
                                                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                            ) : null}
                                            Go to Login
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>

                <CardFooter className="flex flex-col gap-3 text-center text-sm pb-6">
                    <p className="text-muted-foreground">
                        Wrong email?{' '}
                        <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                            Try again
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default function VerifyEmailPage() {
    return (
        <Suspense fallback={
            <div className="flex min-h-screen items-center justify-center p-4">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
        }>
            <VerifyEmailContent />
        </Suspense>
    )
}
