'use client'

import { useState } from 'react'
import { updateFolder } from '@/app/(dashboard)/materials/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Loader2, Folder, Pencil } from 'lucide-react'
import { toast } from 'sonner'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

interface EditFolderModalProps {
    folder: { id: string; name: string }
    onClose: () => void
}

export function EditFolderModal({ folder, onClose }: EditFolderModalProps) {
    const [isOpen, setIsOpen] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [name, setName] = useState(folder.name)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            await updateFolder(folder.id, name)
            toast.success('Folder updated successfully')
            setIsOpen(false)
            onClose()
        } catch (error) {
            console.error(error)
            toast.error('Failed to update folder')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) onClose(); }}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl">
                        <div className="h-8 w-8 rounded-lg bg-blue-100/50 flex items-center justify-center text-blue-600">
                            <Folder className="h-5 w-5" />
                        </div>
                        Edit Folder
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 py-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">Folder Name</label>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="e.g. Grammar"
                        />
                    </div>

                    <div className="pt-2">
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
