'use client'

import { useState } from 'react'
import { createStudent } from '@/app/(dashboard)/students/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog'
import { Switch } from "@/components/ui/switch"
import { Loader2, Plus, UserPlus, User, Key, BookOpen, Calendar } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface Package {
    id: string
    name: string
    total_sessions: number
}

export function AddStudentModal({ packages, children }: { packages: Package[], children?: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedPackageId, setSelectedPackageId] = useState('')
    const [totalSessions, setTotalSessions] = useState<number | ''>('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [activeTab, setActiveTab] = useState('profile')
    const [createAccount, setCreateAccount] = useState(false)
    const [formError, setFormError] = useState<string | null>(null)

    // Form state for validation feedback
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        password: ''
    })

    const router = useRouter()

    const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const pkgId = e.target.value
        setSelectedPackageId(pkgId)

        const pkg = packages.find(p => p.id === pkgId)
        if (pkg) {
            setTotalSessions(pkg.total_sessions)
        } else {
            setTotalSessions('')
        }
    }

    const validateForm = () => {
        if (!formData.full_name) {
            setActiveTab('profile')
            setFormError('Full Name is required')
            return false
        }
        if (createAccount) {
            if (!formData.email || !formData.password) {
                setActiveTab('account')
                setFormError('Email and Password are required for account creation')
                return false
            }
            if (formData.password.length < 6) {
                setActiveTab('account')
                setFormError('Password must be at least 6 characters')
                return false
            }
        }
        return true
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormError(null)

        if (!validateForm()) return

        const form = e.currentTarget
        const submissionData = new FormData(form)

        // Add create account flag explicitly
        submissionData.set('createAccount', createAccount.toString())

        setIsSubmitting(true)
        const toastId = toast.loading('Adding student...')

        // Optimistic close
        setIsOpen(false)

        try {
            const result = await createStudent(submissionData) as any

            toast.success('Student added successfully', { id: toastId })
            router.refresh()

            // Reset
            setCreateAccount(false)
            setSelectedPackageId('')
            setTotalSessions('')
            setFormData({ full_name: '', email: '', password: '' })
            setActiveTab('profile')

            if (result?.redirectUrl) {
                setTimeout(() => router.push(result.redirectUrl), 500)
            }
        } catch (error: any) {
            console.error(error)
            toast.error(error.message || 'Failed to add student', { id: toastId })
            setIsOpen(true) // Re-open on error
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {children || (
                    <Button className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                        <UserPlus className="h-4 w-4" />
                        Add Student
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col p-0 gap-0 overflow-hidden">
                <div className="p-6 pb-2 border-b bg-slate-50/50">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-3 text-xl">
                            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                                <Plus className="h-6 w-6" />
                            </div>
                            <div>
                                <div>Add New Student</div>
                                <div className="text-sm font-normal text-muted-foreground mt-0.5">Enter details to onboard a new student.</div>
                            </div>
                        </DialogTitle>
                    </DialogHeader>
                </div>

                <form id="add-student-form" onSubmit={handleSubmit} className="flex-1 overflow-hidden flex flex-col">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
                        <div className="px-6 pt-4">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="profile" className="gap-2">
                                    <User className="h-4 w-4" /> Profile
                                </TabsTrigger>
                                <TabsTrigger value="account" className="gap-2">
                                    <Key className="h-4 w-4" /> Account
                                </TabsTrigger>
                                <TabsTrigger value="academic" className="gap-2">
                                    <BookOpen className="h-4 w-4" /> Academic
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 py-4">
                            {formError && (
                                <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md mb-4 border border-red-100 flex items-center gap-2 animate-in slide-in-from-top-2">
                                    <span className="h-2 w-2 rounded-full bg-red-600" />
                                    {formError}
                                </div>
                            )}

                            <TabsContent value="profile" className="mt-0 space-y-5 focus-visible:outline-none">
                                <div className="space-y-3">
                                    <Label className="text-base">Personal Information</Label>
                                    <div className="grid gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="full_name" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Full Name <span className="text-red-500">*</span></Label>
                                            <Input
                                                id="full_name"
                                                name="full_name"
                                                required
                                                placeholder="e.g. Sarah Connor"
                                                className="h-11 bg-slate-50/50"
                                                value={formData.full_name}
                                                onChange={e => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="nickname" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Nickname</Label>
                                                <Input id="nickname" name="nickname" placeholder="Sarah" className="h-11 bg-slate-50/50" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Phone</Label>
                                                <Input id="phone" name="phone" placeholder="628..." className="h-11 bg-slate-50/50" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <Label className="text-base">Additional Details</Label>
                                    <div className="grid gap-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="age" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Age</Label>
                                                <Input id="age" name="age" type="number" placeholder="25" className="h-11 bg-slate-50/50" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="job" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Job / Occupation</Label>
                                                <Input id="job" name="job" placeholder="Software Engineer" className="h-11 bg-slate-50/50" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="zoom_link" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Zoom Link</Label>
                                            <Input id="zoom_link" name="zoom_link" type="url" placeholder="https://zoom.us/..." className="h-11 bg-slate-50/50" />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="account" className="mt-0 space-y-6 focus-visible:outline-none">
                                <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 space-y-5">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <Label className="text-base text-blue-900">Create Login Account?</Label>
                                            <p className="text-sm text-blue-600/80">Enable this student to log in to the platform.</p>
                                        </div>
                                        <Switch
                                            checked={createAccount}
                                            onCheckedChange={setCreateAccount}
                                            className="data-[state=checked]:bg-blue-600"
                                        />
                                    </div>
                                </div>

                                {createAccount ? (
                                    <div className="space-y-4 animate-in slide-in-from-top-2 fade-in duration-300">
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Email Address <span className="text-red-500">*</span></Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required={createAccount}
                                                placeholder="student@example.com"
                                                className="h-11"
                                                value={formData.email}
                                                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="password" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Password <span className="text-red-500">*</span></Label>
                                            <Input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required={createAccount}
                                                minLength={6}
                                                placeholder="Min. 6 characters"
                                                className="h-11"
                                                value={formData.password}
                                                onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                            />
                                            <p className="text-xs text-muted-foreground">Share this password with the student manually.</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-10 text-muted-foreground bg-slate-50 rounded-xl border border-dashed">
                                        <User className="h-8 w-8 mx-auto mb-2 opacity-20" />
                                        <p>Account creation is disabled.</p>
                                        <p className="text-xs">Student will only be added to your roster.</p>
                                    </div>
                                )}
                            </TabsContent>

                            <TabsContent value="academic" className="mt-0 space-y-5 focus-visible:outline-none">
                                <div className="space-y-4">
                                    <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-xl space-y-4">
                                        <div className="flex items-center gap-2 text-amber-800 font-medium pb-2 border-b border-amber-100/50">
                                            <BookOpen className="h-4 w-4" />
                                            <span>Initial Package Assignment</span>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="packageId" className="text-xs uppercase text-amber-800/60 font-semibold tracking-wider">Select Package</Label>
                                            <div className="relative">
                                                <select
                                                    id="packageId"
                                                    name="packageId"
                                                    className="flex h-11 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 appearance-none"
                                                    value={selectedPackageId}
                                                    onChange={handlePackageChange}
                                                >
                                                    <option value="">No package for now</option>
                                                    {packages.map((pkg) => (
                                                        <option key={pkg.id} value={pkg.id}>
                                                            {pkg.name} ({pkg.total_sessions} sessions)
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-3 top-3 pointer-events-none text-muted-foreground">
                                                    <BookOpen className="h-4 w-4 opacity-50" />
                                                </div>
                                            </div>
                                        </div>

                                        {selectedPackageId && (
                                            <div className="space-y-2 animate-in fade-in slide-in-from-top-1">
                                                <Label htmlFor="totalSessions" className="text-xs uppercase text-amber-800/60 font-semibold tracking-wider">Total Sessions</Label>
                                                <Input
                                                    id="totalSessions"
                                                    name="totalSessions"
                                                    type="number"
                                                    placeholder="Custom count..."
                                                    value={totalSessions}
                                                    onChange={(e) => setTotalSessions(e.target.value === '' ? '' : parseInt(e.target.value))}
                                                    className="h-11 bg-white"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2 pt-2">
                                        <Label htmlFor="schedulePreference" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Schedule Preference</Label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="schedulePreference"
                                                name="schedulePreference"
                                                placeholder="e.g. Mon & Wed at 20:00"
                                                className="h-11 pl-10 bg-slate-50/50"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>

                    <div className="p-6 border-t bg-slate-50/50 flex justify-between items-center gap-4">
                        <div className="text-xs text-muted-foreground">
                            {activeTab === 'profile' && "Step 1 of 3: Enter personal details."}
                            {activeTab === 'account' && "Step 2 of 3: Setup login credentials."}
                            {activeTab === 'academic' && "Step 3 of 3: Assign course package."}
                        </div>
                        <div className="flex gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setIsOpen(false)}
                                disabled={isSubmitting}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="min-w-[120px] shadow-sm"
                            >
                                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                                {isSubmitting ? 'Saving...' : 'Add Student'}
                            </Button>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
