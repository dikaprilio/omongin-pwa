'use client'

import { FileText, Play, Link as LinkIcon, Image as ImageIcon, MoreVertical, Trash2, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { Pencil } from 'lucide-react'
import { EditMaterialModal } from './EditMaterialModal'
import { CustomContextMenu } from '@/components/ui/custom-context-menu'

interface MaterialCardProps {
    material: any
    onClick: () => void
    onDelete: (id: string) => void
}

export function MaterialCard({ material, onClick, onDelete }: MaterialCardProps) {
    const getIcon = () => {
        switch (material.type) {
            case 'gdrive': return <FileText className="h-5 w-5 text-green-600" />
            case 'canva': return <ImageIcon className="h-5 w-5 text-purple-600" />
            case 'youtube': return <Play className="h-5 w-5 text-red-600" />
            default: return <LinkIcon className="h-5 w-5 text-slate-600" />
        }
    }

    const getBgColor = () => {
        switch (material.type) {
            case 'gdrive': return 'bg-green-50'
            case 'canva': return 'bg-purple-50'
            case 'youtube': return 'bg-red-50'
            default: return 'bg-slate-50'
        }
    }

    const getTypeLabel = () => {
        switch (material.type) {
            case 'gdrive': return 'Google Drive'
            case 'canva': return 'Canva Design'
            case 'youtube': return 'YouTube Video'
            case 'link': return 'Website Link'
            default: return material.type
        }
    }

    const [isEditOpen, setIsEditOpen] = useState(false)

    return (
        <>
            <CustomContextMenu
                items={[
                    {
                        label: 'Open Link',
                        icon: <ExternalLink className="w-4 h-4" />,
                        onClick: () => window.open(material.url, '_blank'),
                    },
                    {
                        label: 'Edit Material',
                        icon: <Pencil className="w-4 h-4" />,
                        onClick: () => setIsEditOpen(true),
                        shortcut: 'Double-click'
                    },
                    {
                        label: 'Delete Material',
                        icon: <Trash2 className="w-4 h-4" />,
                        onClick: () => onDelete(material.id),
                        className: 'text-red-600 hover:bg-red-50'
                    }
                ]}
            >
                <div
                    onClick={onClick}
                    onDoubleClick={(e) => {
                        e.stopPropagation()
                        setIsEditOpen(true)
                    }}
                    className="group relative flex flex-col p-4 bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200 cursor-pointer select-none"
                >
                    <div className="flex items-start justify-between mb-3">
                        <div className={`h-10 w-10 ${getBgColor()} rounded-lg flex items-center justify-center`}>
                            {getIcon()}
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity" onClick={e => e.stopPropagation()}>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 -mt-2 text-slate-400 hover:text-slate-600">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => window.open(material.url, '_blank')}>
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Open Link
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setIsEditOpen(true)}>
                                        <Pencil className="mr-2 h-4 w-4" />
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="text-red-600 focus:text-red-600 focus:bg-red-50"
                                        onClick={() => onDelete(material.id)}
                                    >
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors truncate">
                            {material.title}
                        </h3>
                        <p className="text-[10px] text-slate-400 font-medium mt-0.5">{getTypeLabel()}</p>
                    </div>
                </div>
            </CustomContextMenu>
            {isEditOpen && (
                <EditMaterialModal material={material} onClose={() => setIsEditOpen(false)} />
            )}
        </>
    )
}
