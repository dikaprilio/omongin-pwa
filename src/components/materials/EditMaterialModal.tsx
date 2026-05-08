'use client'

import { useState } from 'react'
import { updateMaterial } from '@/app/(dashboard)/materials/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Loader2, FileText, Link as LinkIcon, Image as ImageIcon, Play } from 'lucide-react'
import { toast } from 'sonner'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface EditMaterialModalProps {
    material: { id: string; title: string; url: string; type: string }
    onClose: () => void
}

export function EditMaterialModal({ material, onClose }: EditMaterialModalProps) {
    const [isOpen, setIsOpen] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [title, setTitle] = useState(material.title)
    const [url, setUrl] = useState(material.url)
    const [type, setType] = useState(material.type)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            await updateMaterial(material.id, title, url, type)
            toast.success('Material updated successfully')
            setIsOpen(false)
            onClose()
        } catch (error) {
            console.error(error)
            toast.error('Failed to update material')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) onClose(); }}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl">
                        <div className="h-8 w-8 rounded-lg bg-indigo-100/50 flex items-center justify-center text-indigo-600">
                            <FileText className="h-5 w-5" />
                        </div>
                        Edit Material
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 py-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">Title</label>
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            placeholder="e.g. Introduction to Tenses"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">Type</label>
                        <Select value={type} onValueChange={setType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="gdrive">
                                    <div className="flex items-center gap-2">
                                        <FileText className="h-4 w-4 text-green-600" />
                                        <span>Google Drive</span>
                                    </div>
                                </SelectItem>
                                <SelectItem value="youtube">
                                    <div className="flex items-center gap-2">
                                        <Play className="h-4 w-4 text-red-600" />
                                        <span>YouTube</span>
                                    </div>
                                </SelectItem>
                                <SelectItem value="canva">
                                    <div className="flex items-center gap-2">
                                        <ImageIcon className="h-4 w-4 text-purple-600" />
                                        <span>Canva</span>
                                    </div>
                                </SelectItem>
                                <SelectItem value="link">
                                    <div className="flex items-center gap-2">
                                        <LinkIcon className="h-4 w-4 text-slate-600" />
                                        <span>Other Link</span>
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">URL</label>
                        <Input
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            required
                            placeholder="https://..."
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
