'use client'

import { useState } from 'react'
import { updatePackage } from '@/app/(dashboard)/packages/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Loader2, Pencil, Package } from 'lucide-react'
import { toast } from 'sonner'

interface PackageItem {
    id: string
    name: string
    total_sessions: number
    price: number
}

interface EditPackageModalProps {
    pkg: PackageItem
}

export function EditPackageModal({ pkg }: EditPackageModalProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true)
        try {
            await updatePackage(pkg.id, formData)
            toast.success('Package updated successfully')
            setIsOpen(false)
        } catch (error) {
            console.error(error)
            toast.error('Failed to update package')
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
                    title="Edit Package"
                >
                    <Pencil className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <Package className="h-5 w-5" />
                        </div>
                        Edit Package
                    </DialogTitle>
                </DialogHeader>

                <form action={handleSubmit} className="space-y-4 py-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">Package Name</label>
                        <Input name="name" required defaultValue={pkg.name} placeholder="e.g. Basic English" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">Total Sessions</label>
                            <Input name="total_sessions" type="number" required defaultValue={pkg.total_sessions} placeholder="10" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">Price (IDR)</label>
                            <Input name="price" type="number" required defaultValue={pkg.price} placeholder="1000000" />
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                'Save Changes'
                            )}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
