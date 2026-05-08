'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'
import { Package, Plus, Pencil, Trash2, Users, Loader2, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { createClient } from '@/utils/supabase/client'

interface PackageType {
    id: string
    name: string
    price: number
    total_sessions: number
    description: string
    privileges: Record<string, any>
    is_promo: boolean
}

interface Student {
    id: string
    full_name: string
    email: string
}

export function AdminPackages() {
    const [packages, setPackages] = useState<PackageType[]>([])
    const [loading, setLoading] = useState(true)
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [isAssignOpen, setIsAssignOpen] = useState(false)
    const [editingPackage, setEditingPackage] = useState<PackageType | null>(null)
    const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null)

    // Form States
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        total_sessions: 5,
        description: '',
        privileges: '{}',
        is_promo: false
    })

    // Assign States
    const [students, setStudents] = useState<Student[]>([])
    const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([])
    const [assigning, setAssigning] = useState(false)

    const supabase = createClient()

    useEffect(() => {
        fetchPackages()
        fetchStudents()
    }, [])

    const fetchPackages = async () => {
        try {
            const res = await fetch('/api/admin/packages')
            const data = await res.json()
            if (data.data) setPackages(data.data)
        } catch (error) {
            toast.error('Failed to load packages')
        } finally {
            setLoading(false)
        }
    }

    const fetchStudents = async () => {
        const { data } = await supabase.from('students').select('id, full_name, email').order('full_name')
        if (data) setStudents(data)
    }

    const handleSubmit = async () => {
        try {
            let parsedPrivileges = {}
            try {
                parsedPrivileges = JSON.parse(formData.privileges)
            } catch (e) {
                toast.error('Invalid JSON in privileges')
                return
            }

            const payload = {
                ...formData,
                privileges: parsedPrivileges
            }

            const url = editingPackage
                ? `/api/admin/packages/${editingPackage.id}`
                : '/api/admin/packages'

            const method = editingPackage ? 'PATCH' : 'POST'

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })

            if (!res.ok) throw new Error('Failed to save')

            toast.success(editingPackage ? 'Package updated' : 'Package created')
            setIsCreateOpen(false)
            setEditingPackage(null)
            fetchPackages()
            resetForm()
        } catch (error) {
            toast.error('Operation failed')
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure? This cannot be undone.')) return
        try {
            const res = await fetch(`/api/admin/packages/${id}`, { method: 'DELETE' })
            if (!res.ok) throw new Error('Failed')
            toast.success('Package deleted')
            fetchPackages()
        } catch (error) {
            toast.error('Delete failed')
        }
    }

    const handleAssign = async () => {
        if (!selectedPackageId || selectedStudentIds.length === 0) return

        setAssigning(true)
        try {
            const res = await fetch(`/api/admin/packages/${selectedPackageId}/assign`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ studentIds: selectedStudentIds })
            })

            const data = await res.json()
            if (data.error) throw new Error(data.error)

            toast.success(`Assigned to ${selectedStudentIds.length} students`)
            setIsAssignOpen(false)
            setSelectedStudentIds([])
        } catch (error) {
            toast.error('Assignment failed')
        } finally {
            setAssigning(false)
        }
    }

    const openEdit = (pkg: PackageType) => {
        setEditingPackage(pkg)
        setFormData({
            name: pkg.name,
            price: pkg.price,
            total_sessions: pkg.total_sessions,
            description: pkg.description || '',
            privileges: JSON.stringify(pkg.privileges, null, 2),
            is_promo: pkg.is_promo
        })
        setIsCreateOpen(true)
    }

    const resetForm = () => {
        setFormData({
            name: '',
            price: 0,
            total_sessions: 5,
            description: '',
            privileges: '{\n  "speaking_tests_per_day": 3\n}',
            is_promo: false
        })
        setEditingPackage(null)
    }

    if (loading) return <div className="p-8 text-center"><Loader2 className="h-8 w-8 animate-spin mx-auto text-slate-400" /></div>

    return (
        <Card className="border-indigo-100 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500" />
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-indigo-600" />
                        Package Management
                    </CardTitle>
                    <CardDescription>Create and manage course packages</CardDescription>
                </div>
                <Button onClick={() => { resetForm(); setIsCreateOpen(true) }} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Package
                </Button>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="grid gap-3">
                        {packages.map((pkg) => (
                            <div key={pkg.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-colors group">
                                <div className="flex-1 min-w-0 mr-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-semibold text-slate-800">{pkg.name}</p>
                                        {pkg.is_promo && <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 border-0">PROMO</Badge>}
                                    </div>
                                    <p className="text-sm text-slate-500">
                                        Rp {pkg.price.toLocaleString()} • {pkg.total_sessions} sessions
                                    </p>
                                    <p className="text-xs text-slate-400 font-mono mt-1">
                                        Features: {JSON.stringify(pkg.privileges).slice(0, 50)}...
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" onClick={() => { setSelectedPackageId(pkg.id); setIsAssignOpen(true) }} title="Assign to Student">
                                        <Users className="h-4 w-4 text-blue-600" />
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={() => openEdit(pkg)}>
                                        <Pencil className="h-4 w-4 text-slate-500" />
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={() => handleDelete(pkg.id)}>
                                        <Trash2 className="h-4 w-4 text-rose-500" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>

            {/* Create/Edit Modal */}
            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                <DialogContent className="max-w-lg">
                    <DialogHeader>
                        <DialogTitle>{editingPackage ? 'Edit Package' : 'Create Package'}</DialogTitle>
                        <DialogDescription>Configure package details and privileges</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Name</Label>
                                <Input value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Standard Bundle" />
                            </div>
                            <div className="space-y-2">
                                <Label>Price (IDR)</Label>
                                <Input type="number" value={formData.price} onChange={e => setFormData({ ...formData, price: Number(e.target.value) })} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Total Sessions</Label>
                            <Input type="number" value={formData.total_sessions} onChange={e => setFormData({ ...formData, total_sessions: Number(e.target.value) })} />
                        </div>
                        <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                            <Label>Privileges (JSON)</Label>
                            <Textarea
                                value={formData.privileges}
                                onChange={e => setFormData({ ...formData, privileges: e.target.value })}
                                className="font-mono text-xs"
                                rows={5}
                            />
                            <p className="text-[10px] text-muted-foreground">Example: {`{"speaking_tests_per_day": 5}`}</p>
                        </div>

                        <div className="space-y-3 pt-2 border-t">
                            <Label>Curriculum Access</Label>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { id: 'speaking-adults', label: 'Speaking (Adults)' },
                                    { id: 'speaking-kids', label: 'Speaking (Kids)' },
                                    { id: 'basic-adults', label: 'Basic (Adults)' },
                                    { id: 'basic-kids', label: 'Basic (Kids)' },
                                    { id: 'interview', label: 'Interview Prep' },
                                    { id: 'presentation', label: 'Presentation' }
                                ].map((mod) => {
                                    let currentPrivs: any = {};
                                    try { currentPrivs = JSON.parse(formData.privileges || '{}'); } catch (e) { }
                                    const allowed = Array.isArray(currentPrivs?.allowed_modules) ? currentPrivs.allowed_modules : [];
                                    const isChecked = allowed.includes(mod.id);

                                    return (
                                        <div key={mod.id} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={`mod-${mod.id}`}
                                                checked={isChecked}
                                                onCheckedChange={(checked) => {
                                                    const newAllowed = checked
                                                        ? [...allowed, mod.id]
                                                        : allowed.filter((id: string) => id !== mod.id);

                                                    const newPrivs = { ...currentPrivs, allowed_modules: newAllowed };
                                                    setFormData({ ...formData, privileges: JSON.stringify(newPrivs, null, 2) });
                                                }}
                                            />
                                            <Label htmlFor={`mod-${mod.id}`} className="text-sm cursor-pointer font-normal">{mod.label}</Label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="promo"
                                checked={formData.is_promo}
                                onCheckedChange={(c) => setFormData({ ...formData, is_promo: c as boolean })}
                            />
                            <Label htmlFor="promo" className="cursor-pointer">Is Promo Package?</Label>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
                        <Button onClick={handleSubmit}>Save Package</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Assign Modal */}
            <Dialog open={isAssignOpen} onOpenChange={setIsAssignOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Assign Package</DialogTitle>
                        <DialogDescription>Select students to assign this package to.</DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                        <div className="max-h-[300px] overflow-y-auto border rounded-md p-2 space-y-2">
                            {students.map(student => (
                                <div key={student.id} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded">
                                    <Checkbox
                                        checked={selectedStudentIds.includes(student.id)}
                                        onCheckedChange={(checked) => {
                                            if (checked) setSelectedStudentIds(prev => [...prev, student.id])
                                            else setSelectedStudentIds(prev => prev.filter((id: string) => id !== student.id))
                                        }}
                                    />
                                    <div className="text-sm">
                                        <p className="font-medium">{student.full_name}</p>
                                        <p className="text-xs text-muted-foreground">{student.email}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground text-right">Selected: {selectedStudentIds.length}</p>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsAssignOpen(false)}>Cancel</Button>
                        <Button onClick={handleAssign} disabled={assigning || selectedStudentIds.length === 0}>
                            {assigning ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Confirm Assignment'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </Card>
    )
}
