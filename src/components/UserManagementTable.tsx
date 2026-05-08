'use client'

import { SystemUser, updateUserRole, UserRole, deleteUserAction } from '@/app/(dashboard)/users/actions'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { ShieldAlert, User, GraduationCap, Loader2, MoreHorizontal, Pencil, Trash2, CreditCard } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { EditUserModal } from './EditUserModal'
import { ManageSubscriptionModal } from './ManageSubscriptionModal'

interface PackageOption {
    id: string
    name: string
    total_sessions: number
    price: number
}

interface UserManagementTableProps {
    initialUsers: SystemUser[]
    packages: PackageOption[]
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
}

const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

export function UserManagementTable({ initialUsers, packages }: UserManagementTableProps) {
    const [users, setUsers] = useState(initialUsers)
    const [updatingId, setUpdatingId] = useState<string | null>(null)
    const [editUser, setEditUser] = useState<SystemUser | null>(null)
    const [manageSubUser, setManageSubUser] = useState<SystemUser | null>(null)
    const [deleteUser, setDeleteUser] = useState<SystemUser | null>(null)
    const [isDeleting, setIsDeleting] = useState(false)

    const handleRoleChange = async (userId: string, newRole: UserRole) => {
        setUpdatingId(userId)
        try {
            await updateUserRole(userId, newRole)
            toast.success(`Role updated to ${newRole}`)

            // Optimistic update
            setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u))
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Failed to update role')
        } finally {
            setUpdatingId(null)
        }
    }

    const handleDelete = async () => {
        if (!deleteUser) return

        setIsDeleting(true)
        try {
            const result = await deleteUserAction(deleteUser.id)
            if (result.error) throw new Error(result.error)

            toast.success('User deleted successfully')
            setUsers(prev => prev.filter(u => u.id !== deleteUser.id))
            setDeleteUser(null)
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Failed to delete user')
        } finally {
            setIsDeleting(false)
        }
    }

    const handleEditSuccess = (updatedUser: SystemUser) => {
        setUsers(prev => prev.map(u => u.id === updatedUser.id ? { ...u, ...updatedUser } : u))
    }

    const getSubscriptionBadge = (user: SystemUser) => {
        const sub = user.subscription
        if (!sub) {
            return <Badge variant="outline" className="text-xs">No sub</Badge>
        }
        const isExpired = sub.expiresAt ? new Date(sub.expiresAt) < new Date() : false
        const isActive = sub.status === 'active' && !isExpired

        return (
            <div className="flex flex-col gap-0.5">
                <Badge variant={isActive ? 'default' : 'secondary'} className="w-fit text-xs">
                    {isActive ? 'Active' : isExpired ? 'Expired' : sub.status}
                </Badge>
                <span className="text-[10px] text-muted-foreground">
                    {sub.sessionsRemaining}/{sub.sessionsTotal} sessions
                    {sub.expiresAt && (
                        <span className="ml-1">• Exp: {formatDate(sub.expiresAt)}</span>
                    )}
                </span>
            </div>
        )
    }

    const getRoleBadge = (role: UserRole) => {
        switch (role) {
            case 'super_admin':
                return <Badge variant="destructive" className="gap-1"><ShieldAlert className="w-3 h-3" /> Admin</Badge>
            case 'teacher':
                return <Badge variant="default" className="bg-blue-600 hover:bg-blue-700 gap-1"><GraduationCap className="w-3 h-3" /> Teacher</Badge>
            default:
                return <Badge variant="secondary" className="gap-1"><User className="w-3 h-3" /> Student</Badge>
        }
    }

    return (
        <Card className="overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border">
                        <tr>
                            <th className="px-6 py-4">User</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Subscription</th>
                            <th className="px-6 py-4">Activity</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-white">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-muted/30 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-gray-900">{user.fullName || 'No Name'}</span>
                                        <span className="text-xs text-gray-500">{user.email}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        {getRoleBadge(user.role)}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {getSubscriptionBadge(user)}
                                </td>
                                <td className="px-6 py-4 text-xs text-gray-500">
                                    <div>Joined: {formatDate(user.createdAt)}</div>
                                    {user.lastSignIn && (
                                        <div className="text-emerald-600 mt-1">
                                            Last seen: {formatDateTime(user.lastSignIn)}
                                        </div>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end">
                                        <Select
                                            value={user.role}
                                            onValueChange={(val) => handleRoleChange(user.id, val as UserRole)}
                                            disabled={updatingId === user.id}
                                        >
                                            <SelectTrigger className="w-[110px] h-8 text-xs mr-2">
                                                {updatingId === user.id ? (
                                                    <Loader2 className="h-3 w-3 animate-spin mx-auto" />
                                                ) : (
                                                    <SelectValue />
                                                )}
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="student">Student</SelectItem>
                                                <SelectItem value="teacher">Teacher</SelectItem>
                                                <SelectItem value="super_admin">Admin</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4 text-gray-500" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem onClick={() => setEditUser(user)} className="cursor-pointer font-medium text-slate-700">
                                                    <Pencil className="mr-2 h-4 w-4" />
                                                    <span>Edit Content</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setManageSubUser(user)} className="cursor-pointer font-medium text-slate-700">
                                                    <CreditCard className="mr-2 h-4 w-4" />
                                                    <span>Manage Subscription</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setDeleteUser(user)} className="cursor-pointer text-red-600 focus:text-red-600 font-medium">
                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                    <span>Delete User</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {users.length === 0 && (
                <div className="p-12 text-center text-gray-500">
                    No users found.
                </div>
            )}

            <EditUserModal
                user={editUser}
                open={!!editUser}
                onOpenChange={(open) => !open && setEditUser(null)}
                onSuccess={handleEditSuccess}
            />

            <ManageSubscriptionModal
                user={manageSubUser}
                packages={packages}
                open={!!manageSubUser}
                onOpenChange={(open) => !open && setManageSubUser(null)}
                onSuccess={handleEditSuccess}
            />

            <AlertDialog open={!!deleteUser} onOpenChange={(open: boolean) => !open && setDeleteUser(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will permanently delete the user account for <strong>{deleteUser?.fullName || deleteUser?.email}</strong>.
                            This action cannot be undone. User data and progression may be lost.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.preventDefault()
                                handleDelete()
                            }}
                            className="bg-red-600 hover:bg-red-700"
                            disabled={isDeleting}
                        >
                            {isDeleting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                            Delete User
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Card>
    )
}
