'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ExternalLink, X, Maximize2, AlertCircle } from 'lucide-react'
import { useState } from 'react'

interface PreviewModalProps {
    material: any | null
    onClose: () => void
}

export function PreviewModal({ material, onClose }: PreviewModalProps) {
    const [loadError, setLoadError] = useState(false)

    if (!material) return null

    const getEmbedUrl = (url: string, type: string) => {
        try {
            if (type === 'youtube') {
                // Handle different YouTube URL formats
                let videoId = ''
                if (url.includes('youtu.be/')) {
                    videoId = url.split('youtu.be/')[1]?.split('?')[0]
                } else if (url.includes('v=')) {
                    videoId = url.split('v=')[1]?.split('&')[0]
                } else if (url.includes('/embed/')) {
                    return url // Already an embed URL
                }
                return videoId ? `https://www.youtube.com/embed/${videoId}` : url
            }

            if (type === 'gdrive') {
                // Extract file ID from various Google Drive URL formats
                let fileId = ''
                if (url.includes('/file/d/')) {
                    fileId = url.split('/file/d/')[1]?.split('/')[0]
                } else if (url.includes('id=')) {
                    fileId = url.split('id=')[1]?.split('&')[0]
                } else if (url.includes('/open?id=')) {
                    fileId = url.split('/open?id=')[1]?.split('&')[0]
                }
                return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url
            }

            if (type === 'canva') {
                // Canva embed format
                if (url.includes('/design/')) {
                    // Try to convert to embed URL
                    const designId = url.split('/design/')[1]?.split('/')[0]
                    if (designId) {
                        return `https://www.canva.com/design/${designId}/view?embed`
                    }
                }
                // If can't convert, return original (will open in new tab)
                return url
            }

            return url
        } catch (error) {
            console.error('Error parsing URL:', error)
            return url
        }
    }

    const embedUrl = getEmbedUrl(material.url, material.type)
    const canEmbed = material.type === 'youtube' || material.type === 'gdrive'

    return (
        <Dialog open={!!material} onOpenChange={() => onClose()}>
            <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 gap-0 bg-white border-none shadow-2xl rounded-2xl overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white z-10">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="h-8 w-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                            <Maximize2 className="h-4 w-4" />
                        </div>
                        <DialogTitle className="text-lg font-bold text-slate-800 truncate">
                            {material.title}
                        </DialogTitle>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 h-9 rounded-lg border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            onClick={() => window.open(material.url, '_blank')}
                        >
                            <ExternalLink className="h-4 w-4" />
                            <span className="hidden sm:inline">Open Original</span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                            onClick={onClose}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full bg-slate-50 relative">
                    {canEmbed && !loadError ? (
                        <iframe
                            src={embedUrl}
                            className="w-full h-full border-none"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onError={() => setLoadError(true)}
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center p-6">
                            <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                                <AlertCircle className="h-8 w-8 text-slate-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                {material.type === 'canva' ? 'Canva Preview Not Available' : 'Preview Not Available'}
                            </h3>
                            <p className="text-sm text-slate-500 mb-6 max-w-md">
                                {material.type === 'canva'
                                    ? 'Canva links must be opened directly. Click the button below to view in a new tab.'
                                    : 'This content cannot be previewed here. Click the button below to open it in a new tab.'}
                            </p>
                            <Button
                                size="lg"
                                className="gap-2"
                                onClick={() => window.open(material.url, '_blank')}
                            >
                                <ExternalLink className="h-5 w-5" />
                                Open in New Tab
                            </Button>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
