'use client'

import { useState, useEffect } from 'react'
import { assignPackage, getStudentSubscription } from '@/app/(dashboard)/students/actions'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog'
import { Package, ShieldCheck, Loader2, AlertCircle } from 'lucide-react' // Package icon might not exist in lucide-react? Use Box or Gift? ShieldCheck user used in AdminSubs.
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'

interface PackageData {
    id: string
    name: string
    total_sessions: number
}

interface AssignPackageModalProps {
    studentId: string
    studentName: string
    packages: PackageData[]
}

export function AssignPackageModal({ studentId, studentName, packages }: AssignPackageModalProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedPackageId, setSelectedPackageId] = useState('')
    const [totalSessions, setTotalSessions] = useState<number | ''>('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loadingSub, setLoadingSub] = useState(false)
    const [currentSubscription, setCurrentSubscription] = useState<any>(null)
    const router = useRouter()

    useEffect(() => {
        if (isOpen) {
            fetchSubscription()
        }
    }, [isOpen, studentId])

    const fetchSubscription = async () => {
        setLoadingSub(true)
        try {
            const sub = await getStudentSubscription(studentId)
            setCurrentSubscription(sub)
            if (sub) {
                // Pre-select? Maybe not. Let the user actively choose logic.
            }
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedPackageId) return

        setIsSubmitting(true)
        try {
            const sessions = totalSessions === '' ? undefined : Number(totalSessions)
            await assignPackage(studentId, selectedPackageId, sessions)
            toast.success('Package assigned successfully')
            setIsOpen(false)
            router.refresh()
        } catch (error) {
            console.error(error)
            toast.error('Failed to assign package')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <div
                    className="flex items-center gap-2 px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-slate-100 rounded-sm w-full"
                    onClick={(e) => { e.stopPropagation(); setIsOpen(true); }}
                >
                    <ShieldCheck className="h-4 w-4 text-indigo-600" />
                    <span>Assign Package</span>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-indigo-600" />
                        Assign Package
                    </DialogTitle>
                </DialogHeader>

                <div className="py-4 space-y-4">
                    <p className="text-sm text-slate-500">
                        Assigning a package to <span className="font-semibold text-slate-900">{studentName}</span>.
                    </p>

                    {loadingSub ? (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Loader2 className="h-3 w-3 animate-spin" />
                            Checking existing subscriptions...
                        </div>
                    ) : currentSubscription ? (
                        <div className="bg-amber-50 text-amber-800 p-3 rounded-lg text-sm border border-amber-200 flex gap-2">
                            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                            <div>
                                <p className="font-medium">Has Active Subscription</p>
                                <p className="text-xs mt-1 opacity-90">
                                    Currently on <b>{currentSubscription.packages?.name || 'Unknown Package'}</b> with {currentSubscription.sessions_remaining} sessions left.
                                    Assigning a new package will replace/cancel the current one.
                                </p>
                            </div>
                        </div>
                    ) : null}

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Select Package</label>
                            <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
                        </div>

                        {selectedPackageId && (
                            <div className="space-y-2 animate-in slide-in-from-top-2">
                                <label className="text-sm font-medium">Total Sessions</label>
                                <Input
                                    type="number"
                                    value={totalSessions}
                                    onChange={(e) => setTotalSessions(e.target.value === '' ? '' : parseInt(e.target.value))}
                                    placeholder="Override session count"
                                />
                                <p className="text-[10px] text-muted-foreground">Modify if you want to give custom number of sessions.</p>
                            </div>
                        )}
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={() => setIsOpen(false)} disabled={isSubmitting}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} disabled={!selectedPackageId || isSubmitting}>
                        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                        {currentSubscription ? 'Replace Package' : 'Assign Package'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
