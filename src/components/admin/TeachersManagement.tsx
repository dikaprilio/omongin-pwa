'use client'

import { useState } from 'react'
import { UserWithRole } from '@/lib/auth/roles'
import { bulkAssignStudentsToTeacher } from '@/app/(dashboard)/students/actions'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
    Users,
    UserCheck,
    Loader2,
    ChevronDown,
    ChevronUp,
    GraduationCap,
    BookOpen,
    Search,
    UserPlus
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

interface Student {
    id: string
    full_name: string
    nickname: string | null
    teacher_id: string | null
}

interface TeachersManagementProps {
    initialTeachers: UserWithRole[]
    initialStudents: Student[]
}

// Helper to get teacher name from teachers list
function getTeacherName(teacherId: string | null, teachers: UserWithRole[]): string {
    if (!teacherId) return 'Unassigned'
    const teacher = teachers.find(t => t.id === teacherId)
    return teacher?.fullName || 'Unknown'
}

export function TeachersManagement({ initialTeachers, initialStudents }: TeachersManagementProps) {
    const router = useRouter()
    const [expandedTeacher, setExpandedTeacher] = useState<string | null>(null)
    const [selectedStudents, setSelectedStudents] = useState<string[]>([])
    const [selectedTeacher, setSelectedTeacher] = useState<string>('')
    const [isAssigning, setIsAssigning] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [showAssignModal, setShowAssignModal] = useState(false)

    // Filter students by search
    const filteredStudents = initialStudents.filter(s =>
        s.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.nickname?.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleSelectStudent = (studentId: string, checked: boolean) => {
        if (checked) {
            setSelectedStudents(prev => [...prev, studentId])
        } else {
            setSelectedStudents(prev => prev.filter(id => id !== studentId))
        }
    }

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedStudents(filteredStudents.map(s => s.id))
        } else {
            setSelectedStudents([])
        }
    }

    const handleAssign = async () => {
        if (selectedStudents.length === 0) {
            toast.error('Please select at least one student')
            return
        }

        setIsAssigning(true)
        try {
            await bulkAssignStudentsToTeacher(
                selectedStudents,
                selectedTeacher === 'unassigned' ? null : selectedTeacher
            )
            toast.success(`Assigned ${selectedStudents.length} students successfully`)
            setSelectedStudents([])
            setSelectedTeacher('')
            setShowAssignModal(false)
            router.refresh()
        } catch (error) {
            toast.error('Failed to assign students')
            console.error(error)
        } finally {
            setIsAssigning(false)
        }
    }

    // Group students by teacher
    const unassignedStudents = initialStudents.filter(s => !s.teacher_id)
    const teacherData = initialTeachers.map(teacher => ({
        teacher,
        students: initialStudents.filter(s => s.teacher_id === teacher.id)
    }))

    // Calculate totals
    const totalStudents = initialStudents.length
    const assignedStudents = initialStudents.filter(s => s.teacher_id).length

    return (
        <div className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                <GraduationCap className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-800">{initialTeachers.length}</p>
                                <p className="text-xs text-slate-500">Teachers</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-purple-100 flex items-center justify-center">
                                <Users className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-800">{totalStudents}</p>
                                <p className="text-xs text-slate-500">Students</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-green-100 flex items-center justify-center">
                                <UserCheck className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-800">{assignedStudents}</p>
                                <p className="text-xs text-slate-500">Assigned</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-amber-50 to-white border-amber-100">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center">
                                <BookOpen className="h-5 w-5 text-amber-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-800">{unassignedStudents.length}</p>
                                <p className="text-xs text-slate-500">Unassigned</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search students..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                </div>
                <Button onClick={() => setShowAssignModal(true)} className="w-full sm:w-auto">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Bulk Assign Students
                </Button>
            </div>

            {/* Teachers with Expandable Student Lists */}
            <div className="space-y-4">
                <h2 className="text-lg font-bold text-slate-800">Teachers & Their Students</h2>

                {teacherData.length === 0 ? (
                    <Card className="p-8 text-center text-muted-foreground">
                        <GraduationCap className="h-12 w-12 mx-auto mb-3 opacity-30" />
                        <p>No teachers have signed up yet.</p>
                    </Card>
                ) : (
                    <div className="space-y-3">
                        {teacherData.map(({ teacher, students }) => {
                            const isExpanded = expandedTeacher === teacher.id
                            return (
                                <Card key={teacher.id} className="overflow-hidden">
                                    <button
                                        onClick={() => setExpandedTeacher(isExpanded ? null : teacher.id)}
                                        className="w-full p-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                                                {teacher.fullName?.[0] || 'T'}
                                            </div>
                                            <div className="text-left">
                                                <p className="font-semibold text-slate-800">{teacher.fullName || 'Unnamed Teacher'}</p>
                                                <p className="text-sm text-slate-500">{teacher.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className={cn(
                                                "px-3 py-1 rounded-full text-sm font-medium",
                                                students.length > 0
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-slate-100 text-slate-500"
                                            )}>
                                                {students.length} students
                                            </span>
                                            {isExpanded ? (
                                                <ChevronUp className="h-5 w-5 text-slate-400" />
                                            ) : (
                                                <ChevronDown className="h-5 w-5 text-slate-400" />
                                            )}
                                        </div>
                                    </button>

                                    {isExpanded && (
                                        <div className="border-t border-slate-100 bg-slate-50/50 p-4">
                                            {students.length === 0 ? (
                                                <p className="text-sm text-slate-500 text-center py-4">
                                                    No students assigned to this teacher yet.
                                                </p>
                                            ) : (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                                    {students.map(student => (
                                                        <div
                                                            key={student.id}
                                                            className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200"
                                                        >
                                                            <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-sm font-medium">
                                                                {student.full_name[0]}
                                                            </div>
                                                            <div className="min-w-0">
                                                                <p className="text-sm font-medium truncate">{student.full_name}</p>
                                                                {student.nickname && (
                                                                    <p className="text-xs text-slate-400 truncate">{student.nickname}</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </Card>
                            )
                        })}
                    </div>
                )}
            </div>

            {/* Unassigned Students Alert */}
            {unassignedStudents.length > 0 && (
                <Card className="border-amber-200 bg-amber-50/50">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-amber-700 text-base flex items-center gap-2">
                            <Users className="h-5 w-5" />
                            Unassigned Students ({unassignedStudents.length})
                        </CardTitle>
                        <CardDescription>
                            These students need to be assigned to a teacher
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {unassignedStudents.map(student => (
                                <span
                                    key={student.id}
                                    className="px-3 py-1.5 bg-white rounded-full text-sm border border-amber-200 font-medium"
                                >
                                    {student.full_name}
                                </span>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Bulk Assignment Modal */}
            {showAssignModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setShowAssignModal(false)}
                    />
                    <Card className="relative w-full max-w-lg max-h-[80vh] overflow-hidden flex flex-col">
                        <CardHeader>
                            <CardTitle>Bulk Assign Students</CardTitle>
                            <CardDescription>
                                Select students and assign them to a teacher
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-y-auto space-y-4">
                            {/* Teacher Selector */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Assign to Teacher</label>
                                <Select value={selectedTeacher} onValueChange={setSelectedTeacher}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a teacher..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="unassigned">
                                            <span className="text-muted-foreground">Unassign (remove teacher)</span>
                                        </SelectItem>
                                        {initialTeachers.map(teacher => (
                                            <SelectItem key={teacher.id} value={teacher.id}>
                                                {teacher.fullName || teacher.email}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Student List */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium">Select Students</label>
                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="select-all"
                                            checked={selectedStudents.length === filteredStudents.length && filteredStudents.length > 0}
                                            onCheckedChange={handleSelectAll}
                                        />
                                        <label htmlFor="select-all" className="text-xs text-muted-foreground cursor-pointer">
                                            Select All ({filteredStudents.length})
                                        </label>
                                    </div>
                                </div>

                                <div className="max-h-[250px] overflow-y-auto border rounded-lg divide-y">
                                    {filteredStudents.length === 0 ? (
                                        <p className="p-4 text-sm text-muted-foreground text-center">
                                            No students found
                                        </p>
                                    ) : (
                                        filteredStudents.map(student => (
                                            <div
                                                key={student.id}
                                                className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors"
                                            >
                                                <Checkbox
                                                    checked={selectedStudents.includes(student.id)}
                                                    onCheckedChange={(checked) => handleSelectStudent(student.id, checked as boolean)}
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-medium truncate">
                                                        {student.full_name}
                                                        {student.nickname && (
                                                            <span className="text-muted-foreground font-normal"> ({student.nickname})</span>
                                                        )}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {student.teacher_id
                                                            ? `Assigned to: ${getTeacherName(student.teacher_id, initialTeachers)}`
                                                            : 'Unassigned'
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </CardContent>
                        <div className="p-4 border-t flex gap-3">
                            <Button
                                variant="outline"
                                onClick={() => setShowAssignModal(false)}
                                className="flex-1"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleAssign}
                                disabled={selectedStudents.length === 0 || !selectedTeacher || isAssigning}
                                className="flex-1"
                            >
                                {isAssigning ? (
                                    <>
                                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                        Assigning...
                                    </>
                                ) : (
                                    <>
                                        <UserCheck className="h-4 w-4 mr-2" />
                                        Assign {selectedStudents.length} Student{selectedStudents.length !== 1 ? 's' : ''}
                                    </>
                                )}
                            </Button>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    )
}
