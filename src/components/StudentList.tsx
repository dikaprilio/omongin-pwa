'use client'

import { useOptimistic, startTransition, useState } from 'react'
import Link from 'next/link'
import { Trash2, Video, Phone, Briefcase, BookOpen, User, GraduationCap, ChevronDown, ChevronUp, Search, Clock, Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { toast } from 'sonner'
import { deleteStudent } from '@/app/(dashboard)/students/actions'
import { EmptyState } from '@/components/EmptyState'
import { EditStudentModal } from '@/components/EditStudentModal'
import { CustomContextMenu } from '@/components/ui/custom-context-menu'
import { ConfirmModal } from '@/components/ConfirmModal'
import { UserWithRole } from '@/lib/auth/roles'

interface Student {
    id: string
    full_name: string
    nickname: string | null
    zoom_link: string | null
    phone: string | null
    job: string | null
    age: number | null
    schedule_preference: string | null
    teacher_id?: string | null
    email?: string | null
    user_id?: string | null
    activePackage?: string | null
}

interface Package {
    id: string
    name: string
    total_sessions: number
}

interface StudentListProps {
    initialStudents: Student[]
    teachers?: UserWithRole[]
    packages?: Package[]
    isAdmin?: boolean
}

export function StudentList({ initialStudents, teachers = [], packages = [], isAdmin = false }: StudentListProps) {
    const [optimisticStudents, removeOptimisticStudent] = useOptimistic(
        initialStudents,
        (state, idToRemove: string) => state.filter((student) => student.id !== idToRemove)
    )

    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
    const [lastSelectedId, setLastSelectedId] = useState<string | null>(null)
    const [isBulkDeleting, setIsBulkDeleting] = useState(false)
    const [showBulkDeleteConfirm, setShowBulkDeleteConfirm] = useState(false)
    const [studentToDelete, setStudentToDelete] = useState<string | null>(null)
    const [expandedMobileIds, setExpandedMobileIds] = useState<Set<string>>(new Set())

    const handleDeleteClick = (id: string) => {
        setStudentToDelete(id)
    }

    const handleConfirmDelete = async () => {
        if (!studentToDelete) return

        const id = studentToDelete
        setStudentToDelete(null) // Close modal immediately

        // Optimistic update
        startTransition(() => {
            removeOptimisticStudent(id)
        })

        const toastId = toast.loading('Deleting student...')

        try {
            await deleteStudent(id)
            toast.success('Student deleted successfully', { id: toastId })
        } catch (error) {
            console.error(error)
            toast.error('Failed to delete student', { id: toastId })
        }
    }

    const toggleSelection = (id: string, multiSelect: boolean) => {
        const newSelected = new Set(multiSelect ? selectedIds : [])
        if (multiSelect && selectedIds.has(id)) {
            newSelected.delete(id)
        } else {
            newSelected.add(id)
        }
        setSelectedIds(newSelected)
        setLastSelectedId(id)
    }

    const handleCheckboxChange = (id: string, checked: boolean, shiftKey: boolean) => {
        const newSelected = new Set(selectedIds)

        if (checked) {
            newSelected.add(id)

            // Shift-click range selection
            if (shiftKey && lastSelectedId) {
                const currentIndex = optimisticStudents.findIndex(s => s.id === id)
                const lastIndex = optimisticStudents.findIndex(s => s.id === lastSelectedId)

                if (currentIndex !== -1 && lastIndex !== -1) {
                    const start = Math.min(currentIndex, lastIndex)
                    const end = Math.max(currentIndex, lastIndex)

                    for (let i = start; i <= end; i++) {
                        newSelected.add(optimisticStudents[i].id)
                    }
                }
            }
            setLastSelectedId(id)
        } else {
            newSelected.delete(id)
            setLastSelectedId(null)
        }
        setSelectedIds(newSelected)
    }

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedIds(new Set(optimisticStudents.map(s => s.id)))
        } else {
            setSelectedIds(new Set())
        }
    }

    const handleBulkDelete = async () => {
        setIsBulkDeleting(true)
        const toastId = toast.loading(`Deleting ${selectedIds.size} students...`)

        // Optimistic update
        const idsToDelete = Array.from(selectedIds)
        setSelectedIds(new Set()) // Clear selection immediately
        setShowBulkDeleteConfirm(false)

        startTransition(() => {
            idsToDelete.forEach(id => removeOptimisticStudent(id))
        })

        try {
            const { deleteStudents } = await import('@/app/(dashboard)/students/actions')
            await deleteStudents(idsToDelete)
            toast.success('Students deleted successfully', { id: toastId })
        } catch (error) {
            console.error(error)
            toast.error('Failed to delete students', { id: toastId })
        } finally {
            setIsBulkDeleting(false)
        }
    }

    const toggleMobileExpand = (id: string) => {
        setExpandedMobileIds(prev => {
            const newSet = new Set(prev)
            if (newSet.has(id)) {
                newSet.delete(id)
            } else {
                newSet.add(id)
            }
            return newSet
        })
    }

    return (
        <>
            {/* Mobile Card View */}
            <div className="md:hidden space-y-3">
                {optimisticStudents.length === 0 ? (
                    <Card className="p-8">
                        <EmptyState
                            icon={User}
                            title="No students found"
                            description="Add a student to get started."
                        />
                    </Card>
                ) : (
                    optimisticStudents.map((student) => {
                        const isExpanded = expandedMobileIds.has(student.id)
                        return (
                            <Card key={student.id} className="overflow-hidden">
                                <div
                                    className="p-4 flex items-center gap-3 cursor-pointer active:bg-muted/50"
                                    onClick={() => toggleMobileExpand(student.id)}
                                >
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                                        {student.full_name[0]}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <Link href={`/students/${student.id}`} onClick={(e) => e.stopPropagation()} className="block">
                                            <p className="font-semibold text-slate-800 truncate">{student.full_name}</p>
                                        </Link>
                                        {student.nickname && (
                                            <p className="text-xs text-muted-foreground truncate">{student.nickname}</p>
                                        )}
                                    </div>
                                    {isExpanded ? (
                                        <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                                    )}
                                </div>

                                {isExpanded && (
                                    <div className="px-4 pb-4 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-3 animate-in slide-in-from-top-1 duration-200">
                                        <div className="grid grid-cols-2 gap-3 text-sm">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Phone className="h-4 w-4" />
                                                <span>{student.phone || 'No phone'}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Briefcase className="h-4 w-4" />
                                                <span>{student.job || 'No job'}</span>
                                            </div>
                                            {student.zoom_link && (
                                                <a href={student.zoom_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary col-span-2">
                                                    <Video className="h-4 w-4" />
                                                    <span className="underline">Open Zoom Link</span>
                                                </a>
                                            )}
                                            {student.schedule_preference && (
                                                <div className="flex items-center gap-2 text-blue-600 col-span-2">
                                                    <BookOpen className="h-4 w-4" />
                                                    <span>{student.schedule_preference}</span>
                                                </div>
                                            )}
                                            {isAdmin && student.teacher_id && (
                                                <div className="flex items-center gap-2 text-blue-700 col-span-2">
                                                    <GraduationCap className="h-4 w-4" />
                                                    <span className="font-medium">
                                                        {teachers.find(t => t.id === student.teacher_id)?.fullName || 'Unknown Teacher'}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="col-span-2 flex flex-wrap gap-2 mt-2 pt-2 border-t border-slate-200">
                                                {student.user_id ? (
                                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">
                                                        Linked
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                                        Unlinked
                                                    </span>
                                                )}
                                                {student.activePackage && (
                                                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                                        {student.activePackage}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex gap-2 pt-2">
                                            <Link href={`/students/${student.id}`} className="flex-1">
                                                <Button variant="outline" size="sm" className="w-full">
                                                    View Details
                                                </Button>
                                            </Link>
                                            <EditStudentModal student={student} packages={packages} />
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-destructive hover:bg-destructive/10"
                                                onClick={(e) => { e.stopPropagation(); handleDeleteClick(student.id); }}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </Card>
                        )
                    })
                )}
            </div>

            {/* Desktop Table View */}
            <Card className="overflow-hidden relative hidden md:block">
                {selectedIds.size > 0 && (
                    <div className="absolute top-0 left-0 right-0 z-10 bg-primary text-primary-foreground p-2 px-4 flex items-center justify-between animate-in slide-in-from-top-2 duration-200">
                        <div className="font-medium text-sm">
                            {selectedIds.size} selected
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="secondary"
                                size="sm"
                                className="h-8 text-xs bg-white/20 hover:bg-white/30 text-white border-0"
                                onClick={() => setSelectedIds(new Set())}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="destructive"
                                size="sm"
                                className="h-8 text-xs gap-1.5 shadow-sm"
                                onClick={() => setShowBulkDeleteConfirm(true)}
                            >
                                <Trash2 className="h-3.5 w-3.5" />
                                Delete Selected
                            </Button>
                        </div>
                    </div>
                )}

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border">
                            <tr>
                                <th className="px-6 py-4 w-[40px]">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                                        checked={optimisticStudents.length > 0 && selectedIds.size === optimisticStudents.length}
                                        onChange={(e) => handleSelectAll(e.target.checked)}
                                    />
                                </th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Account</th>
                                <th className="px-6 py-4">Package</th>
                                <th className="px-6 py-4">Contact</th>
                                <th className="px-6 py-4">Details</th>
                                {isAdmin && <th className="px-6 py-4">Teacher</th>}
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {optimisticStudents.length === 0 ? (
                                <tr>
                                    <td colSpan={isAdmin ? 6 : 5} className="px-6 py-12 text-center text-muted-foreground">
                                        <EmptyState
                                            icon={User}
                                            title="No students found"
                                            description="Add a student to get started."
                                        />
                                    </td>
                                </tr>
                            ) : (
                                optimisticStudents.map((student) => (
                                    <CustomContextMenu
                                        key={student.id}
                                        as="tr"
                                        className={`hover:bg-muted/30 transition-colors animate-in fade-in duration-300 cursor-default ${selectedIds.has(student.id) ? 'bg-primary/5 hover:bg-primary/10' : ''}`}
                                        items={[
                                            {
                                                label: 'Edit Student',
                                                icon: <Pencil className="w-4 h-4" />,
                                                onClick: () => document.getElementById(`edit-student-trigger-${student.id}`)?.click(),
                                                shortcut: 'Double-click'
                                            },
                                            {
                                                label: 'Delete Student',
                                                icon: <Trash2 className="w-4 h-4" />,
                                                onClick: () => handleDeleteClick(student.id),
                                                className: 'text-red-600 hover:bg-red-50'
                                            }
                                        ]}
                                    >
                                        <td className="px-6 py-4">
                                            <input
                                                type="checkbox"
                                                className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                                                checked={selectedIds.has(student.id)}
                                                onChange={(e) => handleCheckboxChange(student.id, e.target.checked, (e.nativeEvent as any).shiftKey)}
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                        </td>
                                        <td className="px-6 py-4" onDoubleClick={() => document.getElementById(`edit-student-trigger-${student.id}`)?.click()}>
                                            <Link href={`/students/${student.id}`} className="block hover:underline group">
                                                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{student.full_name}</div>
                                                <div className="text-xs text-muted-foreground">{student.nickname}</div>
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.user_id ? (
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">
                                                    Linked
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                                    Unlinked
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.activePackage ? (
                                                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                                    {student.activePackage}
                                                </span>
                                            ) : (
                                                <span className="text-xs text-gray-400 italic">None</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4" onDoubleClick={() => document.getElementById(`edit-student-trigger-${student.id}`)?.click()}>
                                            {student.zoom_link ? (
                                                <a href={student.zoom_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                                                    <Video className="h-3 w-3" />
                                                    Zoom Link
                                                </a>
                                            ) : (
                                                <span className="flex items-center gap-2 text-muted-foreground text-xs">
                                                    <Video className="h-3 w-3" />
                                                    No Zoom Link
                                                </span>
                                            )}
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                                                <Phone className="h-3 w-3" />
                                                {student.phone || 'No phone'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4" onDoubleClick={() => document.getElementById(`edit-student-trigger-${student.id}`)?.click()}>
                                            <div className="flex items-center gap-2 text-foreground">
                                                <Briefcase className="h-3 w-3 text-muted-foreground" />
                                                {student.job}
                                            </div>
                                            <div className="text-xs text-muted-foreground mt-0.5">{student.age} years old</div>
                                            {student.schedule_preference && (
                                                <div className="flex items-center gap-1.5 text-xs text-blue-600 mt-1">
                                                    <BookOpen className="h-3 w-3" />
                                                    {student.schedule_preference}
                                                </div>
                                            )}
                                        </td>
                                        {isAdmin && (
                                            <td className="px-6 py-4">
                                                {student.teacher_id ? (
                                                    <div className="flex items-center gap-2">
                                                        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-medium">
                                                            {teachers.find(t => t.id === student.teacher_id)?.fullName?.[0] || 'T'}
                                                        </div>
                                                        <span className="text-sm text-slate-700">
                                                            {teachers.find(t => t.id === student.teacher_id)?.fullName || 'Unknown'}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                                                        Unassigned
                                                    </span>
                                                )}
                                            </td>
                                        )}
                                        <td className="px-6 py-4 text-right">

                                            <div className="flex justify-end items-center gap-1">
                                                <div id={`edit-student-trigger-${student.id}`} className="hidden">
                                                    <EditStudentModal student={student} packages={packages} />
                                                </div>
                                                <EditStudentModal student={student} packages={packages} />
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                                    onClick={() => handleDeleteClick(student.id)}
                                                    title="Delete Student"
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

            <ConfirmModal
                isOpen={!!studentToDelete}
                onClose={() => setStudentToDelete(null)}
                onConfirm={handleConfirmDelete}
                title="Delete Student"
                description="Are you sure you want to delete this student? This action cannot be undone."
                confirmText="Delete"
                variant="destructive"
            />

            <ConfirmModal
                isOpen={showBulkDeleteConfirm}
                onClose={() => setShowBulkDeleteConfirm(false)}
                onConfirm={handleBulkDelete}
                title={`Delete ${selectedIds.size} Students?`}
                description="Are you sure you want to delete the selected students? This action cannot be undone."
                confirmText="Delete Selected"
                variant="destructive"
                isLoading={isBulkDeleting}
            />
        </>
    )
}
