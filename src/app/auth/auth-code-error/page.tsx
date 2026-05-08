'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertCircle, RefreshCw } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

function AuthCodeErrorContent() {
    const supabase = createClient()
    const router = useRouter()
    const searchParams = useSearchParams()
    const error = searchParams.get('error') || searchParams.get('error_code') || 'Authentication Failed'
    const description = searchParams.get('error_description') || 'There was an issue signing you in. Please try again.'

    const clearCookiesAndRetry = async () => {
        // Use Supabase signOut to properly clear the session
        await supabase.auth.signOut()

        // Redirect to login
        router.push('/login')
    }

    return (
        <div className="flex min-h-screen items-center justify-center p-4 bg-muted/30">
            <Card className="w-full max-w-md shadow-lg border-2 border-red-100">
                <CardHeader className="text-center space-y-4">
                    <div className="flex justify-center">
                        <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                            <AlertCircle className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <CardTitle className="text-xl font-bold text-red-900">
                            {error}
                        </CardTitle>
                        <CardDescription className="text-base text-red-700">
                            {description}
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                    <p>This could be due to an expired login session or a network issue.</p>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 pb-6">
                    <Button
                        onClick={clearCookiesAndRetry}
                        className="w-full bg-red-600 hover:bg-red-700 text-white gap-2"
                    >
                        <RefreshCw className="h-4 w-4" />
                        Clear Session & Retry
                    </Button>
                    <Button variant="ghost" asChild className="w-full">
                        <Link href="/login">Return to Login</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default function AuthCodeError() {
    return (
        <Suspense fallback={
            <div className="flex min-h-screen items-center justify-center">
                <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full" />
            </div>
        }>
            <AuthCodeErrorContent />
        </Suspense>
    )
}
