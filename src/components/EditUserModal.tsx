'use client'

import { useState, useEffect } from 'react'
import { editUserAction, SystemUser, UserRole } from '@/app/(dashboard)/users/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
interface EditUserModalProps {
    user: SystemUser | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess?: (updatedUser: SystemUser) => void;
}

export function EditUserModal({ user, open, onOpenChange, onSuccess }: EditUserModalProps) {
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!user) return

        setIsLoading(true)

        const formData = new FormData(e.currentTarget)
        formData.append('userId', user.id)

        const result = await editUserAction(formData)

        setIsLoading(false)

        if (result.error) {
            toast.error(result.error)
        } else {
            toast.success('User updated successfully')
            onOpenChange(false)

            // Trigger optimistic update callback
            if (onSuccess) {
                onSuccess({
                    ...user,
                    fullName: formData.get('fullName') as string,
                    email: formData.get('email') as string,
                    role: formData.get('role') as UserRole,
                })
            }

        }
    }

    if (!user) return null

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit User Profile</DialogTitle>
                    <DialogDescription>
                        Modify system access and user details.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="edit-fullName">Full Name</Label>
                        <Input id="edit-fullName" name="fullName" defaultValue={user.fullName || ''} required placeholder="John Doe" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="edit-email">Email</Label>
                        <Input id="edit-email" name="email" type="email" defaultValue={user.email} required placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="edit-role">Role</Label>
                        <Select name="role" defaultValue={user.role}>
                            <SelectTrigger id="edit-role">
                                <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="student">Student</SelectItem>
                                <SelectItem value="teacher">Teacher</SelectItem>
                                <SelectItem value="super_admin">Admin</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="pt-2">
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Save Changes'}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
