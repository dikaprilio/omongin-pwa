'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { createMaterial } from '@/app/(dashboard)/materials/actions'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

interface AddMaterialModalProps {
    isOpen: boolean
    onClose: () => void
    folderId: string | null
}

export function AddMaterialModal({ isOpen, onClose, folderId }: AddMaterialModalProps) {
    const [title, setTitle] = useState('')
    const [type, setType] = useState('link')
    const [url, setUrl] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!title.trim() || !url.trim()) return

        // Optimistic UI: Close modal and save data
        const materialData = { title, type, url }
        setTitle('')
        setUrl('')
        setType('link')
        onClose()

        // Show loading toast
        const toastId = toast.loading('Adding material...')

        setIsLoading(true)
        try {
            await createMaterial(folderId, materialData.title, materialData.type, materialData.url)
            toast.success('Material added successfully', { id: toastId })
            router.refresh()
        } catch (error) {
            console.error(error)
            toast.error('Failed to add material', { id: toastId })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Material</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g. Unit 1 Presentation"
                            autoFocus
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="type">Type</Label>
                        <Select value={type} onValueChange={setType}>
                            <SelectTrigger id="type">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="link">Website Link</SelectItem>
                                <SelectItem value="gdrive">Google Drive</SelectItem>
                                <SelectItem value="canva">Canva Design</SelectItem>
                                <SelectItem value="youtube">YouTube Video</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="url">URL</Label>
                        <Input
                            id="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://..."
                        />
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                        <Button type="submit" disabled={isLoading || !title.trim() || !url.trim()}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Add Material
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
