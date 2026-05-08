'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createFolder } from '@/app/(dashboard)/materials/actions'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

interface AddFolderModalProps {
    isOpen: boolean
    onClose: () => void
    parentId: string | null
}

export function AddFolderModal({ isOpen, onClose, parentId }: AddFolderModalProps) {
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!name.trim()) return

        // Optimistic UI: Close modal immediately
        const folderName = name
        setName('')
        onClose()

        // Show loading toast
        const toastId = toast.loading('Creating folder...')

        setIsLoading(true)
        try {
            await createFolder(folderName, parentId)
            toast.success('Folder created successfully', { id: toastId })
            router.refresh()
        } catch (error) {
            console.error(error)
            toast.error('Failed to create folder', { id: toastId })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create New Folder</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Folder Name</Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Grammar, Speaking, Unit 1"
                            autoFocus
                        />
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                        <Button type="submit" disabled={isLoading || !name.trim()}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Create Folder
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
