'use client'

import { Folder, MoreVertical, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { Pencil } from 'lucide-react'
import { EditFolderModal } from './EditFolderModal'
import { CustomContextMenu } from '@/components/ui/custom-context-menu'

interface FolderCardProps {
    folder: any
    onClick: () => void
    onDelete: (id: string) => void
}

export function FolderCard({ folder, onClick, onDelete }: FolderCardProps) {
    const [isEditOpen, setIsEditOpen] = useState(false)

    return (
        <>
            <CustomContextMenu
                items={[
                    {
                        label: 'Edit Folder',
                        icon: <Pencil className="w-4 h-4" />,
                        onClick: () => setIsEditOpen(true),
                        shortcut: 'Double-click'
                    },
                    {
                        label: 'Delete Folder',
                        icon: <Trash2 className="w-4 h-4" />,
                        onClick: () => onDelete(folder.id),
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
                        <div className="h-10 w-10 bg-blue-100/50 text-blue-600 rounded-lg flex items-center justify-center">
                            <Folder className="h-5 w-5 fill-blue-600/20" />
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity" onClick={e => e.stopPropagation()}>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 -mt-2 text-slate-400 hover:text-slate-600">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setIsEditOpen(true)}>
                                        <Pencil className="mr-2 h-4 w-4" />
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className="text-red-600 focus:text-red-600 focus:bg-red-50"
                                        onClick={() => onDelete(folder.id)}
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
                            {folder.name}
                        </h3>
                        <p className="text-[10px] text-slate-400 font-medium mt-0.5">Folder</p>
                    </div>
                </div>
            </CustomContextMenu>
            {isEditOpen && (
                <EditFolderModal folder={folder} onClose={() => setIsEditOpen(false)} />
            )}
        </>
    )
}
