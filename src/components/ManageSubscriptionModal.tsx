'use client'

import { useState, useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Loader2, Calendar, Package, Zap } from 'lucide-react'
import { toast } from 'sonner'
import { SystemUser, toggleUserSubscription, updateUserSubscription } from '@/app/(dashboard)/users/actions'

interface PackageOption {
    id: string
    name: string
    total_sessions: number
    price: number
}

interface ManageSubscriptionModalProps {
    user: SystemUser | null
    packages: PackageOption[]
    open: boolean
    onOpenChange: (open: boolean) => void
    onSuccess: (updatedUser: SystemUser) => void
}

const MODULE_OPTIONS = [
    { id: 'speaking-adults', label: 'Speaking Adults', category: 'Curriculum' },
    { id: 'speaking-kids', label: 'Speaking Kids', category: 'Curriculum' },
    { id: 'basic-adults', label: 'Basic Grammar', category: 'Curriculum' },
    { id: 'basic-kids', label: 'Basic Kids', category: 'Curriculum' },
    { id: 'interview', label: 'Interview Prep', category: 'Curriculum' },
    { id: 'presentation', label: 'Presentation', category: 'Curriculum' },
    { id: 'speaking-test', label: 'Speaking Test', category: 'Assessments' },
    { id: 'reading-test', label: 'Reading Test', category: 'Assessments' },
    { id: 'interview-sim', label: 'Interview Simulation', category: 'Assessments' },
    { id: 'speaking-practice', label: 'Speaking Practice', category: 'Assessments' },
    { id: 'placement-test', label: 'Placement Test', category: 'Assessments' },
    { id: 'writing-test', label: 'Writing Test', category: 'Assessments' },
]

export function ManageSubscriptionModal({
    user,
    packages,
    open,
    onOpenChange,
    onSuccess,
}: ManageSubscriptionModalProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [isToggling, setIsToggling] = useState(false)

    const [packageId, setPackageId] = useState('__none__')
    const [sessionsTotal, setSessionsTotal] = useState('0')
    const [sessionsRemaining, setSessionsRemaining] = useState('0')
    const [expiresAt, setExpiresAt] = useState('')
    const [status, setStatus] = useState<'active' | 'completed' | 'cancelled'>('active')
    const [allowedModules, setAllowedModules] = useState<string[]>([])

    useEffect(() => {
        if (user?.subscription) {
            setPackageId(user.subscription.packageId || '__none__')
            setSessionsTotal(String(user.subscription.sessionsTotal))
            setSessionsRemaining(String(user.subscription.sessionsRemaining))
            setExpiresAt(user.subscription.expiresAt ? new Date(user.subscription.expiresAt).toISOString().split('T')[0] : '')
            setStatus(user.subscription.status)
            setAllowedModules(user.subscription.allowedModules || [])
        } else {
            setPackageId('__none__')
            setSessionsTotal('0')
            setSessionsRemaining('0')
            setExpiresAt('')
            setStatus('active')
            setAllowedModules([])
        }
    }, [user, open])

    const handlePackageChange = (pkgId: string) => {
        setPackageId(pkgId)
        if (pkgId === '__none__') return
        const pkg = packages.find(p => p.id === pkgId)
        if (pkg) {
            setSessionsTotal(String(pkg.total_sessions))
            setSessionsRemaining(String(pkg.total_sessions))
        }
    }

    const toggleModule = (moduleId: string, checked: boolean) => {
        setAllowedModules(prev =>
            checked ? [...prev, moduleId] : prev.filter(id => id !== moduleId)
        )
    }

    const selectAllInCategory = (category: string) => {
        const ids = MODULE_OPTIONS.filter(m => m.category === category).map(m => m.id)
        setAllowedModules(prev => Array.from(new Set([...prev, ...ids])))
    }

    const clearCategory = (category: string) => {
        const ids = MODULE_OPTIONS.filter(m => m.category === category).map(m => m.id)
        setAllowedModules(prev => prev.filter(id => !ids.includes(id)))
    }

    const handleToggle = async () => {
        if (!user?.subscription) return
        setIsToggling(true)
        try {
            const result = await toggleUserSubscription(user.id, user.subscription.status)
            if (result.error) throw new Error(result.error)

            const newStatus = result.newStatus as 'active' | 'completed' | 'cancelled'
            setStatus(newStatus)
            toast.success(`Subscription ${newStatus === 'active' ? 'activated' : 'deactivated'}`)

            onSuccess({
                ...user,
                subscription: { ...user.subscription, status: newStatus }
            })
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Failed to toggle subscription')
        } finally {
            setIsToggling(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!user) return

        setIsLoading(true)
        try {
            const formData = new FormData()
            formData.set('userId', user.id)
            formData.set('packageId', packageId === '__none__' ? '' : packageId)
            formData.set('sessionsTotal', sessionsTotal)
            formData.set('sessionsRemaining', sessionsRemaining)
            formData.set('expiresAt', expiresAt)
            formData.set('status', status)
            formData.set('allowedModules', JSON.stringify(allowedModules))

            const result = await updateUserSubscription(formData)
            if (result.error) throw new Error(result.error)

            toast.success('Subscription updated successfully')

            const pkgName = packages.find(p => p.id === packageId)?.name || null
            onSuccess({
                ...user,
                subscription: {
                    id: user.subscription?.id || '',
                    status,
                    sessionsTotal: parseInt(sessionsTotal),
                    sessionsRemaining: parseInt(sessionsRemaining),
                    expiresAt: expiresAt ? new Date(expiresAt).toISOString() : null,
                    packageId: (packageId === '__none__' ? null : packageId) || null,
                    packageName: pkgName,
                    allowedModules
                }
            })
            onOpenChange(false)
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Failed to update subscription')
        } finally {
            setIsLoading(false)
        }
    }

    const isExpired = user?.subscription?.expiresAt
        ? new Date(user.subscription.expiresAt) < new Date()
        : false

    const curriculumModules = MODULE_OPTIONS.filter(m => m.category === 'Curriculum')
    const assessmentModules = MODULE_OPTIONS.filter(m => m.category === 'Assessments')

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Manage Subscription</DialogTitle>
                    <DialogDescription>
                        {user?.fullName || user?.email}
                    </DialogDescription>
                </DialogHeader>

                {user?.subscription ? (
                    <div className="flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center gap-2">
                            <Badge variant={status === 'active' && !isExpired ? 'default' : 'secondary'}>
                                {status === 'active' && isExpired ? 'Expired' : status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                                {user.subscription.packageName || 'No package'}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Switch
                                checked={status === 'active'}
                                onCheckedChange={handleToggle}
                                disabled={isToggling}
                            />
                            {isToggling && <Loader2 className="h-4 w-4 animate-spin" />}
                        </div>
                    </div>
                ) : (
                    <div className="rounded-lg border border-dashed p-4 text-center text-sm text-muted-foreground">
                        No subscription found. Fill the form below to create one.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="package" className="flex items-center gap-2">
                            <Package className="h-4 w-4" />
                            Package
                        </Label>
                        <Select value={packageId} onValueChange={handlePackageChange}>
                            <SelectTrigger id="package">
                                <SelectValue placeholder="Select a package" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="__none__">No package</SelectItem>
                                {packages.map(pkg => (
                                    <SelectItem key={pkg.id} value={pkg.id}>
                                        {pkg.name} ({pkg.total_sessions} sessions)
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="sessionsTotal" className="flex items-center gap-2">
                                <Zap className="h-4 w-4" />
                                Total Sessions
                            </Label>
                            <Input
                                id="sessionsTotal"
                                type="number"
                                min={0}
                                value={sessionsTotal}
                                onChange={(e) => setSessionsTotal(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="sessionsRemaining">Remaining</Label>
                            <Input
                                id="sessionsRemaining"
                                type="number"
                                min={0}
                                value={sessionsRemaining}
                                onChange={(e) => setSessionsRemaining(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="expiresAt" className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Expires At
                        </Label>
                        <Input
                            id="expiresAt"
                            type="date"
                            value={expiresAt}
                            onChange={(e) => setExpiresAt(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                            Leave empty if the subscription does not expire.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Select value={status} onValueChange={(val) => setStatus(val as typeof status)}>
                            <SelectTrigger id="status">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-3 border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <Label>Allowed Modules / Privileges</Label>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-slate-700">Curriculum</span>
                                    <div className="flex gap-2">
                                        <button type="button" onClick={() => selectAllInCategory('Curriculum')} className="text-xs text-blue-600 hover:underline">Select all</button>
                                        <button type="button" onClick={() => clearCategory('Curriculum')} className="text-xs text-slate-500 hover:underline">Clear</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {curriculumModules.map(mod => (
                                        <label key={mod.id} className="flex items-center gap-2 text-sm cursor-pointer">
                                            <Checkbox
                                                checked={allowedModules.includes(mod.id)}
                                                onCheckedChange={(checked) => toggleModule(mod.id, checked === true)}
                                            />
                                            <span className="text-slate-700">{mod.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="border-t pt-3">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-slate-700">Assessments & Practice</span>
                                    <div className="flex gap-2">
                                        <button type="button" onClick={() => selectAllInCategory('Assessments')} className="text-xs text-blue-600 hover:underline">Select all</button>
                                        <button type="button" onClick={() => clearCategory('Assessments')} className="text-xs text-slate-500 hover:underline">Clear</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {assessmentModules.map(mod => (
                                        <label key={mod.id} className="flex items-center gap-2 text-sm cursor-pointer">
                                            <Checkbox
                                                checked={allowedModules.includes(mod.id)}
                                                onCheckedChange={(checked) => toggleModule(mod.id, checked === true)}
                                            />
                                            <span className="text-slate-700">{mod.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {user?.subscription ? 'Update Subscription' : 'Create Subscription'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
