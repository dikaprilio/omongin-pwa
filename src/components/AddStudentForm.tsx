'use client'

import { useState } from 'react'
import { createStudent } from '@/app/(dashboard)/students/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

interface Package {
    id: string
    name: string
    total_sessions: number
}

export function AddStudentForm({ packages }: { packages: Package[] }) {
    const [selectedPackageId, setSelectedPackageId] = useState('')
    const [totalSessions, setTotalSessions] = useState<number | ''>('')
    const [isSubmitting, setIsSubmitting] = useState(false)

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

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true)
        try {
            await createStudent(formData)
            toast.success('Student added successfully')
            // Optional: You could reset the form here if you weren't redirecting
            // But since the action redirects, the component unmounts.
            // If we want to stay on the page and add another, we should change the action to not redirect.
            // For now, the toast is sufficient as it persists across navigation.
        } catch (error) {
            console.error(error)
            toast.error('Failed to add student')
            setIsSubmitting(false)
        }
    }

    return (
        <form action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Full Name</label>
                <Input name="full_name" required placeholder="John Doe" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Nickname</label>
                <Input name="nickname" placeholder="Johnny" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Email</label>
                <Input name="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Phone (WhatsApp)</label>
                <Input name="phone" placeholder="628123456789" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Age</label>
                    <Input name="age" type="number" placeholder="25" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Job</label>
                    <Input name="job" placeholder="Engineer" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Assign Package</label>
                <select
                    name="packageId"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={selectedPackageId}
                    onChange={handlePackageChange}
                >
                    <option value="">Select a package...</option>
                    {packages.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                            {pkg.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Total Sessions</label>
                <Input
                    name="totalSessions"
                    type="number"
                    placeholder="e.g. 5"
                    value={totalSessions}
                    onChange={(e) => setTotalSessions(e.target.value === '' ? '' : parseInt(e.target.value))}
                />
                <p className="text-[10px] text-muted-foreground">
                    You can override the default number of sessions for this student.
                </p>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Schedule Preference</label>
                <Input name="schedulePreference" placeholder="e.g. Mon, Wed 20.00" />
            </div>

            <div className="flex gap-3 pt-2">
                <Button type="submit" name="nextAction" value="save" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Adding...
                        </>
                    ) : (
                        'Add Student'
                    )}
                </Button>
                <Button type="submit" name="nextAction" value="schedule" variant="secondary" className="flex-1" disabled={isSubmitting}>
                    Add & Schedule
                </Button>
            </div>
        </form>
    )
}
