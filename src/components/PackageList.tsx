'use client'

import { useOptimistic, startTransition } from 'react'
import { Trash2, Package, Layers, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { toast } from 'sonner'
import { deletePackage } from '@/app/(dashboard)/packages/actions'
import { EmptyState } from '@/components/EmptyState'
import { EditPackageModal } from '@/components/EditPackageModal'
import { CustomContextMenu } from '@/components/ui/custom-context-menu'
import { Pencil } from 'lucide-react'

interface PackageItem {
    id: string
    name: string
    total_sessions: number
    price: number
}

interface PackageListProps {
    initialPackages: PackageItem[]
}

export function PackageList({ initialPackages }: PackageListProps) {
    const [optimisticPackages, removeOptimisticPackage] = useOptimistic(
        initialPackages,
        (state, idToRemove: string) => state.filter((pkg) => pkg.id !== idToRemove)
    )

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this package?')) {
            startTransition(() => {
                removeOptimisticPackage(id)
            })

            try {
                await deletePackage(id)
                toast.success('Package deleted successfully')
            } catch (error) {
                console.error(error)
                toast.error('Failed to delete package')
            }
        }
    }

    return (
        <Card className="overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border">
                        <tr>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Sessions</th>
                            <th className="px-6 py-4">Price</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {optimisticPackages.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-muted-foreground">
                                    <EmptyState
                                        icon={Package}
                                        title="No packages found"
                                        description="Add a package to get started."
                                    />
                                </td>
                            </tr>
                        ) : (
                            optimisticPackages.map((pkg) => (
                                <CustomContextMenu
                                    key={pkg.id}
                                    as="tr"
                                    className="hover:bg-muted/30 transition-colors animate-in fade-in duration-300 cursor-default"
                                    items={[
                                        {
                                            label: 'Edit Package',
                                            icon: <Pencil className="w-4 h-4" />,
                                            onClick: () => document.getElementById(`edit-package-trigger-${pkg.id}`)?.click(),
                                        },
                                        {
                                            label: 'Delete Package',
                                            icon: <Trash2 className="w-4 h-4" />,
                                            onClick: () => handleDelete(pkg.id),
                                            className: 'text-red-600 hover:bg-red-50'
                                        }
                                    ]}
                                >
                                    <td className="px-6 py-4 font-semibold text-foreground">
                                        {pkg.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-foreground">
                                            <Layers className="h-3 w-3 text-muted-foreground" />
                                            {pkg.total_sessions}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-foreground">
                                            <DollarSign className="h-3 w-3 text-muted-foreground" />
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(pkg.price)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end items-center gap-1">
                                            <div id={`edit-package-trigger-${pkg.id}`} className="hidden">
                                                <EditPackageModal pkg={pkg} />
                                            </div>
                                            <EditPackageModal pkg={pkg} />
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                                onClick={() => handleDelete(pkg.id)}
                                                title="Delete Package"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </td>
                                </CustomContextMenu>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}
