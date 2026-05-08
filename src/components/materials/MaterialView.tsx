'use client'

import { useState, useEffect } from 'react'
import { FolderPlus, FilePlus, ChevronRight, Home, Loader2, ArrowLeft, Search, LayoutGrid, List as ListIcon } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FolderCard } from './FolderCard'
import { MaterialCard } from './MaterialCard'
import { AddFolderModal } from './AddFolderModal'
import { AddMaterialModal } from './AddMaterialModal'
import { PreviewModal } from './PreviewModal'
import { EmptyState } from '@/components/EmptyState'
import { ConfirmModal } from '@/components/ConfirmModal'
import { getFolders, getMaterials, deleteFolder, deleteMaterial } from '@/app/(dashboard)/materials/actions'

interface Breadcrumb {
    id: string | null
    name: string
}

export function MaterialView() {
    const [currentFolderId, setCurrentFolderId] = useState<string | null>(null)
    const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([{ id: null, name: 'Home' }])

    const [folders, setFolders] = useState<any[]>([])
    const [materials, setMaterials] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

    const [isAddFolderOpen, setIsAddFolderOpen] = useState(false)
    const [isAddMaterialOpen, setIsAddMaterialOpen] = useState(false)
    const [previewMaterial, setPreviewMaterial] = useState<any | null>(null)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const [foldersData, materialsData] = await Promise.all([
                getFolders(currentFolderId),
                getMaterials(currentFolderId)
            ])
            setFolders(foldersData)
            setMaterials(materialsData)
        } catch (error) {
            console.error('Failed to fetch data', error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [currentFolderId])

    const handleFolderClick = (folder: any) => {
        setCurrentFolderId(folder.id)
        setBreadcrumbs([...breadcrumbs, { id: folder.id, name: folder.name }])
        setSearchQuery('') // Clear search on navigation
    }

    const handleBreadcrumbClick = (index: number) => {
        const newBreadcrumbs = breadcrumbs.slice(0, index + 1)
        setBreadcrumbs(newBreadcrumbs)
        setCurrentFolderId(newBreadcrumbs[newBreadcrumbs.length - 1].id)
        setSearchQuery('')
    }

    const handleBack = () => {
        if (breadcrumbs.length > 1) {
            handleBreadcrumbClick(breadcrumbs.length - 2)
        }
    }

    const [confirmModal, setConfirmModal] = useState<{
        isOpen: boolean
        title: string
        description: string
        onConfirm: () => void
        variant?: 'default' | 'destructive'
    }>({
        isOpen: false,
        title: '',
        description: '',
        onConfirm: () => { },
    })

    const handleDeleteFolder = (id: string) => {
        setConfirmModal({
            isOpen: true,
            title: 'Delete Folder',
            description: 'Are you sure you want to delete this folder? This action cannot be undone.',
            variant: 'destructive',
            onConfirm: async () => {
                // Optimistic update: remove locally immediately
                setFolders(prev => prev.filter(f => f.id !== id))
                setConfirmModal(prev => ({ ...prev, isOpen: false }))

                try {
                    await deleteFolder(id)
                    toast.success('Folder deleted')
                    // No need to fetch data if success, as we already removed it
                } catch (error) {
                    console.error(error)
                    toast.error('Failed to delete folder')
                    fetchData() // Revert on error
                }
            }
        })
    }

    const handleDeleteMaterial = (id: string) => {
        setConfirmModal({
            isOpen: true,
            title: 'Delete Material',
            description: 'Are you sure you want to delete this material? This action cannot be undone.',
            variant: 'destructive',
            onConfirm: async () => {
                // Optimistic update
                setMaterials(prev => prev.filter(m => m.id !== id))
                setConfirmModal(prev => ({ ...prev, isOpen: false }))

                try {
                    await deleteMaterial(id)
                    toast.success('Material deleted')
                } catch (error) {
                    console.error(error)
                    toast.error('Failed to delete material')
                    fetchData()
                }
            }
        })
    }

    // Filter items based on search query
    const filteredFolders = folders.filter(f => f.name.toLowerCase().includes(searchQuery.toLowerCase()))
    const filteredMaterials = materials.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <div className="h-full flex flex-col space-y-6">
            {/* Header / Toolbar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">

                {/* Breadcrumbs & Navigation */}
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
                    {breadcrumbs.length > 1 && (
                        <Button variant="ghost" size="icon" onClick={handleBack} className="mr-2 h-8 w-8">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    )}
                    <div className="flex items-center bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center text-sm font-medium text-slate-600 whitespace-nowrap">
                                {index > 0 && <ChevronRight className="h-4 w-4 mx-1 text-slate-400" />}
                                <button
                                    onClick={() => handleBreadcrumbClick(index)}
                                    className={`hover:text-indigo-600 transition-colors flex items-center gap-1 ${index === breadcrumbs.length - 1 ? 'text-indigo-600 font-bold' : ''}`}
                                >
                                    {index === 0 && <Home className="h-4 w-4" />}
                                    {crumb.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions & Search */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9 h-9 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                        />
                    </div>

                    <div className="flex items-center border-l border-slate-200 pl-3 gap-1">
                        <Button
                            variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                            size="icon"
                            className="h-9 w-9"
                            onClick={() => setViewMode('grid')}
                        >
                            <LayoutGrid className="h-4 w-4" />
                        </Button>
                        <Button
                            variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                            size="icon"
                            className="h-9 w-9"
                            onClick={() => setViewMode('list')}
                        >
                            <ListIcon className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="flex items-center gap-2 ml-2">
                        <Button onClick={() => setIsAddFolderOpen(true)} variant="outline" size="sm" className="gap-2 h-9">
                            <FolderPlus className="h-4 w-4" />
                            <span className="hidden sm:inline">Folder</span>
                        </Button>
                        <Button onClick={() => setIsAddMaterialOpen(true)} size="sm" className="gap-2 bg-indigo-600 hover:bg-indigo-700 h-9">
                            <FilePlus className="h-4 w-4" />
                            <span className="hidden sm:inline">Material</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto pr-2">
                {isLoading ? (
                    <div className="h-64 flex items-center justify-center">
                        <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                    </div>
                ) : (
                    <div className="space-y-8">
                        {/* Empty State */}
                        {filteredFolders.length === 0 && filteredMaterials.length === 0 && (
                            <EmptyState
                                icon={FolderPlus}
                                title="No items found"
                                description={searchQuery ? "Try adjusting your search query" : "Create a folder or add material to get started"}
                                actionLabel={!searchQuery ? "Create Folder" : undefined}
                                onAction={!searchQuery ? () => setIsAddFolderOpen(true) : undefined}
                            />
                        )}

                        {/* Folders Section */}
                        {filteredFolders.length > 0 && (
                            <div>
                                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-1">Folders</h2>
                                <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5' : 'grid-cols-1'}`}>
                                    {filteredFolders.map(folder => (
                                        <FolderCard
                                            key={folder.id}
                                            folder={folder}
                                            onClick={() => handleFolderClick(folder)}
                                            onDelete={handleDeleteFolder}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Materials Section */}
                        {filteredMaterials.length > 0 && (
                            <div>
                                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-1">Files</h2>
                                <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5' : 'grid-cols-1'}`}>
                                    {filteredMaterials.map(material => (
                                        <MaterialCard
                                            key={material.id}
                                            material={material}
                                            onClick={() => setPreviewMaterial(material)}
                                            onDelete={handleDeleteMaterial}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Modals */}
            <AddFolderModal
                isOpen={isAddFolderOpen}
                onClose={() => setIsAddFolderOpen(false)}
                parentId={currentFolderId}
            />
            <AddMaterialModal
                isOpen={isAddMaterialOpen}
                onClose={() => setIsAddMaterialOpen(false)}
                folderId={currentFolderId}
            />
            <PreviewModal
                material={previewMaterial}
                onClose={() => setPreviewMaterial(null)}
            />
            <ConfirmModal
                isOpen={confirmModal.isOpen}
                onClose={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
                onConfirm={confirmModal.onConfirm}
                title={confirmModal.title}
                description={confirmModal.description}
                variant={confirmModal.variant}
            />
        </div>
    )
}
