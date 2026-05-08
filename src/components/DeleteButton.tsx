'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Trash2, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { ConfirmModal } from '@/components/ConfirmModal'

interface DeleteButtonProps {
    action: (id: string) => Promise<void>
    id: string
    title?: string
}

export function DeleteButton({ action, id, title = "Delete" }: DeleteButtonProps) {
    const [isDeleting, setIsDeleting] = useState(false)
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)

    const handleDelete = async () => {
        setIsConfirmOpen(false)
        setIsDeleting(true)
        try {
            await action(id)
            toast.success('Item deleted successfully')
        } catch (error) {
            console.error(error)
            toast.error('Failed to delete item')
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <>
            <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                title={title}
                onClick={() => setIsConfirmOpen(true)}
                disabled={isDeleting}
            >
                {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
            </Button>

            <ConfirmModal
                isOpen={isConfirmOpen}
                onClose={() => setIsConfirmOpen(false)}
                onConfirm={handleDelete}
                title={title}
                description="Are you sure you want to delete this item? This action cannot be undone."
                variant="destructive"
                isLoading={isDeleting}
            />
        </>
    )
}
