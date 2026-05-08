'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Loader2, BookOpen, Eye, EyeOff, Check, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { toast } from 'sonner'
import { registerStudent } from './actions'

// Password strength checker
function getPasswordStrength(password: string): { score: number; feedback: string[] } {
    const feedback: string[] = []
    let score = 0

    if (password.length >= 8) score++
    else feedback.push('At least 8 characters')

    if (/[A-Z]/.test(password)) score++
    else feedback.push('1 uppercase letter')

    if (/[0-9]/.test(password)) score++
    else feedback.push('1 number')

    if (/[^a-zA-Z0-9]/.test(password)) score++
    else feedback.push('1 special character (optional)')

    return { score, feedback }
}

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [passwordStrength, setPasswordStrength] = useState({ score: 0, feedback: [] as string[] })
    const [isLocalhost, setIsLocalhost] = useState(false)

    const router = useRouter()

    useEffect(() => {
        const hostname = window.location.hostname
        setIsLocalhost(hostname === 'localhost' || hostname === '127.0.0.1')
    }, [])

    useEffect(() => {
        setPasswordStrength(getPasswordStrength(password))
    }, [password])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const formData = new FormData()
            formData.set('fullName', fullName)
            formData.set('email', email)
            formData.set('password', password)
            formData.set('confirmPassword', confirmPassword)

            const result = await registerStudent(formData)

            if (result.error) {
                toast.error(result.error)
                setIsLoading(false)
                return
            }

            if (result.success) {
                toast.success(result.message || 'Registration successful!')

                if (result.redirectTo) {
                    router.push(result.redirectTo)
                }
            }
        } catch (error) {
            console.error('Registration error:', error)
            toast.error('Something went wrong. Please try again.')
            setIsLoading(false)
        }
    }

    const fillTestCredentials = () => {
        setFullName('Test Student')
        setEmail('test@student.com')
        setPassword('Test1234')
        setConfirmPassword('Test1234')
    }

    const passwordsMatch = password === confirmPassword && confirmPassword.length > 0

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="space-y-4 text-center pb-2">
                    <div className="flex justify-center">
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-gray-500 to-slate-600 flex items-center justify-center text-white shadow-lg shadow-gray-500/30">
                            <BookOpen className="h-7 w-7" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <CardTitle className="text-2xl font-black tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            Registration Closed
                        </CardTitle>
                        <CardDescription className="text-base">
                            We are currently not accepting new students at this time.
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="pt-4 text-center pb-8">
                    <p className="text-muted-foreground text-sm">
                        Please check back later or contact support for more information.
                    </p>
                </CardContent>

                <CardFooter className="flex flex-col gap-3 text-center text-sm pb-6">
                    <p className="text-muted-foreground">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                            Log in
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
