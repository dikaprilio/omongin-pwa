'use client'

import { useState, useEffect } from 'react'
import { updateStudent, assignPackage, getStudentSubscription } from '@/app/(dashboard)/students/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Loader2, Pencil, UserCog, User, BookOpen, Calendar, Briefcase, Video, GraduationCap, AlertCircle, ShieldCheck } from 'lucide-react'
import { toast } from 'sonner'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'

interface Student {
    id: string
    full_name: string
    nickname: string | null
    zoom_link: string | null
    phone: string | null
    job: string | null
    age: number | null
    schedule_preference: string | null
    user_id?: string | null
}

interface Package {
    id: string
    name: string
    total_sessions: number
}

interface EditStudentModalProps {
    student: Student
    packages?: Package[]
}

export function EditStudentModal({ student, packages = [] }: EditStudentModalProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [activeTab, setActiveTab] = useState('profile')
    const router = useRouter()

    // Subscription State
    const [loadingSub, setLoadingSub] = useState(false)
    const [currentSubscription, setCurrentSubscription] = useState<any>(null)
    const [selectedPackageId, setSelectedPackageId] = useState('')
    const [totalSessions, setTotalSessions] = useState<number | ''>('')

    useEffect(() => {
        if (isOpen && activeTab === 'subscription') {
            fetchSubscription()
        }
    }, [isOpen, activeTab, student.id])

    const fetchSubscription = async () => {
        setLoadingSub(true)
        try {
            const sub = await getStudentSubscription(student.id, student.user_id)
            setCurrentSubscription(sub)
        } catch (error) {
            console.error(error)
        } finally {
            setLoadingSub(false)
        }
    }

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

    const handleUpdateProfile = async (formData: FormData) => {
        setIsSubmitting(true)
        const toastId = toast.loading('Updating profile...')

        try {
            await updateStudent(student.id, formData)
            toast.success('Student updated successfully', { id: toastId })
            router.refresh()
            // Don't close modal, just success
        } catch (error) {
            console.error(error)
            toast.error('Failed to update student', { id: toastId })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleAssignPackage = async () => {
        if (!selectedPackageId) return

        setIsSubmitting(true)
        const toastId = toast.loading('Assigning package...')
        try {
            const sessions = totalSessions === '' ? undefined : Number(totalSessions)
            await assignPackage(student.id, selectedPackageId, sessions)
            toast.success('Package assigned successfully', { id: toastId })
            router.refresh()
            fetchSubscription() // Refresh local state
            setSelectedPackageId('')
            setTotalSessions('')
        } catch (error) {
            console.error(error)
            toast.error('Failed to assign package', { id: toastId })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10"
                    title="Edit Student"
                >
                    <Pencil className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col p-0 gap-0 overflow-hidden">
                <div className="p-6 pb-2 border-b bg-slate-50/50">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-3 text-xl">
                            <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
                                <UserCog className="h-6 w-6" />
                            </div>
                            <div>
                                <div>Edit Student</div>
                                <div className="text-sm font-normal text-muted-foreground mt-0.5">Manage details and subscriptions.</div>
                            </div>
                        </DialogTitle>
                    </DialogHeader>
                </div>

                <div className="flex-1 overflow-hidden flex flex-col">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
                        <div className="px-6 pt-4">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="profile" className="gap-2">
                                    <User className="h-4 w-4" /> Profile
                                </TabsTrigger>
                                <TabsTrigger value="academic" className="gap-2">
                                    <BookOpen className="h-4 w-4" /> Academic
                                </TabsTrigger>
                                <TabsTrigger value="subscription" className="gap-2">
                                    <GraduationCap className="h-4 w-4" /> Subscription
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 py-4">
                            <TabsContent value="profile" className="mt-0 space-y-5 focus-visible:outline-none">
                                <form action={handleUpdateProfile} className="space-y-5">
                                    <div className="space-y-3">
                                        <Label className="text-base">Personal Information</Label>
                                        <div className="grid gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="full_name" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Full Name <span className="text-red-500">*</span></Label>
                                                <Input name="full_name" required defaultValue={student.full_name} className="h-11 bg-slate-50/50" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="nickname" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Nickname</Label>
                                                    <Input name="nickname" defaultValue={student.nickname || ''} className="h-11 bg-slate-50/50" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="age" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Age</Label>
                                                    <Input name="age" type="number" defaultValue={student.age || ''} className="h-11 bg-slate-50/50" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-2">
                                        <Label className="text-base">Contact</Label>
                                        <div className="grid gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Phone</Label>
                                                <Input name="phone" defaultValue={student.phone || ''} className="h-11 bg-slate-50/50" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="zoom_link" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Zoom Link</Label>
                                                <div className="relative">
                                                    <Video className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                    <Input name="zoom_link" type="url" defaultValue={student.zoom_link || ''} className="h-11 pl-10 bg-slate-50/50" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t flex justify-end">
                                        <Button type="submit" disabled={isSubmitting} size="sm">
                                            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                                            Update Profile
                                        </Button>
                                    </div>
                                </form>
                            </TabsContent>

                            <TabsContent value="academic" className="mt-0 space-y-5 focus-visible:outline-none">
                                <form action={handleUpdateProfile} className="space-y-5">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="job" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Job / Occupation</Label>
                                            <div className="relative">
                                                <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input name="job" defaultValue={student.job || ''} className="h-11 pl-10 bg-slate-50/50" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="schedulePreference" className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">Schedule Preference</Label>
                                            <div className="relative">
                                                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                <Input name="schedulePreference" defaultValue={student.schedule_preference || ''} className="h-11 pl-10 bg-slate-50/50" />
                                            </div>
                                            <p className="text-[10px] text-muted-foreground ml-1">Preferred times for meetings (e.g. "Mon 8pm")</p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t flex justify-end">
                                        <Button type="submit" disabled={isSubmitting} size="sm">
                                            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                                            Update Academic Info
                                        </Button>
                                    </div>
                                </form>
                            </TabsContent>

                            <TabsContent value="subscription" className="mt-0 space-y-6 focus-visible:outline-none">
                                {/* Account Status Section */}
                                <div className="space-y-3">
                                    <Label className="text-base">Account Status</Label>
                                    <div className={`p-4 rounded-xl border flex items-center justify-between ${student.user_id ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-200'}`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${student.user_id ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-500'}`}>
                                                <User className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <div className={`font-medium ${student.user_id ? 'text-green-900' : 'text-slate-900'}`}>
                                                    {student.user_id ? 'Linked User Account' : 'Guest Student (Unlinked)'}
                                                </div>
                                                <div className="text-xs text-muted-foreground">
                                                    {student.user_id ? 'Student can log in to the portal.' : 'Student cannot log in. Admin manages everything.'}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Future: Add "Link Account" button here */}
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <Label className="text-base">Active Plan</Label>

                                    {loadingSub ? (
                                        <div className="p-8 flex items-center justify-center text-muted-foreground bg-slate-50 rounded-xl border border-dashed">
                                            <Loader2 className="h-5 w-5 animate-spin mr-2" />
                                            Loading subscription...
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {currentSubscription ? (
                                                <div className="bg-blue-50 text-blue-900 p-4 rounded-xl border border-blue-200 flex gap-3">
                                                    <ShieldCheck className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" />
                                                    <div>
                                                        <div className="font-semibold">{currentSubscription.packages?.name || 'Unknown Package'}</div>
                                                        <div className="text-sm mt-1 opacity-90">
                                                            {currentSubscription.sessions_remaining} sessions remaining
                                                        </div>
                                                        <div className="text-xs mt-2 text-blue-700 font-medium">
                                                            Active since {new Date(currentSubscription.created_at).toLocaleDateString()}
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="bg-slate-50 text-slate-600 p-4 rounded-xl border border-slate-200 flex gap-3 items-center justify-center">
                                                    <AlertCircle className="h-5 w-5 text-slate-400" />
                                                    <span>No active subscription found.</span>
                                                </div>
                                            )}

                                            <div className="space-y-3 p-4 bg-muted/30 border rounded-xl">
                                                <Label className="text-sm font-medium">Assign New Package</Label>
                                                <div className="grid gap-3">
                                                    <select
                                                        className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                                        value={selectedPackageId}
                                                        onChange={handlePackageChange}
                                                    >
                                                        <option value="">Select a package...</option>
                                                        {packages.map((pkg) => (
                                                            <option key={pkg.id} value={pkg.id}>
                                                                {pkg.name} ({pkg.total_sessions} sessions)
                                                            </option>
                                                        ))}
                                                    </select>

                                                    {selectedPackageId && (
                                                        <div className="space-y-2 animate-in slide-in-from-top-2">
                                                            <Input
                                                                type="number"
                                                                value={totalSessions}
                                                                onChange={(e) => setTotalSessions(e.target.value === '' ? '' : parseInt(e.target.value))}
                                                                placeholder="Override session count (Optional)"
                                                                className="bg-white"
                                                            />
                                                        </div>
                                                    )}

                                                    <Button
                                                        onClick={handleAssignPackage}
                                                        disabled={!selectedPackageId || isSubmitting}
                                                        className="w-full mt-2"
                                                    >
                                                        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                                                        {currentSubscription ? 'Replace Current Plan' : 'Assign Plan'}
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>

                    <div className="p-4 border-t bg-slate-50/50 flex justify-between items-center text-xs text-muted-foreground">
                        <div>
                            {activeTab === 'profile' && "Edit personal details."}
                            {activeTab === 'academic' && "Update scheduling info."}
                            {activeTab === 'subscription' && "Manage courses and plans."}
                        </div>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setIsOpen(false)}
                            disabled={isSubmitting}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
