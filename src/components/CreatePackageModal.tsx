'use client'

import { useState } from 'react'
import { createPackage } from '@/app/(dashboard)/packages/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Loader2, Package, Plus } from 'lucide-react'
import { toast } from 'sonner'

export function CreatePackageModal({ children }: { children?: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true)
        try {
            await createPackage(formData)
            toast.success('Package created successfully')
            setIsOpen(false)
        } catch (error) {
            console.error(error)
            toast.error('Failed to create package')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {children || (
                    <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        New Package
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <Package className="h-5 w-5" />
                        </div>
                        Create New Package
                    </DialogTitle>
                </DialogHeader>

                <form action={handleSubmit} className="space-y-4 py-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">Package Name</label>
                        <Input name="name" required placeholder="e.g. Basic English" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">Total Sessions</label>
                            <Input name="total_sessions" type="number" required placeholder="10" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">Price (IDR)</label>
                            <Input name="price" type="number" required placeholder="1000000" />
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Creating...
                                </>
                            ) : (
                                'Create Package'
                            )}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
