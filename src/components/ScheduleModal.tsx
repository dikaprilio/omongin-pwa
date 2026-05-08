'use client'

import { useState, useEffect, useMemo } from 'react'
import type { CreateScheduleInput } from '@/lib/google/scheduler'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Loader2, Clock, CalendarIcon, ChevronRight, Check, User, BookOpen, Search, X } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { toast } from 'sonner'

// Module-level cache for student names (survives across modal opens)
let _cachedStudentNames: string[] | null = null
let _cacheTimestamp = 0
const CACHE_TTL_MS = 5 * 60 * 1000 // 5 minutes

function getCachedStudentNames(): string[] | null {
    if (_cachedStudentNames && Date.now() - _cacheTimestamp < CACHE_TTL_MS) {
        return _cachedStudentNames
    }
    return null
}

function setCachedStudentNames(names: string[]) {
    _cachedStudentNames = names
    _cacheTimestamp = Date.now()
}

import type { CalendarTeacher } from './CalendarView'

interface ScheduleModalProps {
    isOpen: boolean
    onClose: () => void
    preselectedStudentId?: string // kept for backward compat but unused
    preselectedDate?: Date
    teachers?: CalendarTeacher[]
}

// Available tutor color palettes (same ordered list)
const TUTOR_COLOR_PALETTES = [
    { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-500', grad: 'from-blue-500 to-blue-600' },
    { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500', grad: 'from-emerald-500 to-emerald-600' },
    { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', dot: 'bg-violet-500', grad: 'from-violet-500 to-violet-600' },
    { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', dot: 'bg-pink-500', grad: 'from-pink-500 to-pink-600' },
    { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-500', grad: 'from-amber-500 to-amber-600' },
    { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', dot: 'bg-cyan-500', grad: 'from-cyan-500 to-cyan-600' },
    { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', dot: 'bg-rose-500', grad: 'from-rose-500 to-rose-600' },
    { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', dot: 'bg-indigo-500', grad: 'from-indigo-500 to-indigo-600' },
    { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', dot: 'bg-orange-500', grad: 'from-orange-500 to-orange-600' },
    { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', dot: 'bg-teal-500', grad: 'from-teal-500 to-teal-600' },
]

export function ScheduleModal({ isOpen, onClose, preselectedDate, teachers = [] }: ScheduleModalProps) {
    const [step, setStep] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Student names from Google Sheets orders
    const [studentNames, setStudentNames] = useState<string[]>([])
    const [studentSearch, setStudentSearch] = useState('')
    const [selectedStudent, setSelectedStudent] = useState('')
    const [showStudentDropdown, setShowStudentDropdown] = useState(false)

    // Tutor
    const [selectedTutor, setSelectedTutor] = useState<string>('')
    const [localTeachers, setLocalTeachers] = useState<CalendarTeacher[]>(teachers || [])

    // Session details
    const [selectedPackage, setSelectedPackage] = useState('')
    const [selectedStatus, setSelectedStatus] = useState<'Scheduled' | 'Done' | 'Rescheduled'>('Scheduled')
    const [notes, setNotes] = useState('')

    // Date & Time
    const [selectedDates, setSelectedDates] = useState<Date[]>([new Date()])
    const [selectedHour, setSelectedHour] = useState(9)
    const [selectedMinute, setSelectedMinute] = useState(0)

    // Reset state when opening
    useEffect(() => {
        if (isOpen) {
            setStep(1)
            setSelectedStudent('')
            setStudentSearch('')
            setSelectedTutor('')
            setSelectedPackage('')
            setSelectedStatus('Scheduled')
            setNotes('')

            const initialDate = preselectedDate || new Date()
            setSelectedDates([initialDate])
            const h = new Date().getHours()
            setSelectedHour(h < 8 ? 8 : (h > 23 ? 23 : h))
            setSelectedMinute(0)

            // Fetch student names and teachers
            const loadInitialData = async () => {
                const cached = getCachedStudentNames()
                if (cached) {
                    setStudentNames(cached)
                }

                setIsLoading(true)
                try {
                    const { fetchStudentNamesAction, fetchTeachersAction } = await import('@/app/(dashboard)/scheduler/actions')

                    if (!cached) {
                        const names = await fetchStudentNamesAction()
                        setStudentNames(names)
                        setCachedStudentNames(names)
                    }

                    if (!teachers || teachers.length === 0) {
                        const fetchedTeachers = await fetchTeachersAction()
                        setLocalTeachers(fetchedTeachers)
                    } else {
                        setLocalTeachers(teachers)
                    }
                } catch (error) {
                    console.error('Failed to load initial data', error)
                    toast.error('Gagal memuat data')
                } finally {
                    setIsLoading(false)
                }
            }
            loadInitialData()
        }
    }, [isOpen, preselectedDate, teachers])

    // Filtered students for autocomplete
    const filteredStudents = useMemo(() => {
        if (!studentSearch) return studentNames
        return studentNames.filter(name =>
            name.toLowerCase().includes(studentSearch.toLowerCase())
        )
    }, [studentNames, studentSearch])

    const handleTimeUpdate = (newHour: number, newMinute: number) => {
        setSelectedHour(newHour)
        setSelectedMinute(newMinute)
    }

    const handleNext = () => {
        if (step === 1 && (!selectedStudent || !selectedTutor)) return
        if (step === 2 && selectedDates.length === 0) return
        setStep(s => s + 1)
    }

    const handleBack = () => {
        setStep(s => s - 1)
    }

    const handleSubmit = async () => {
        if (selectedDates.length === 0 || !selectedStudent || !selectedTutor) return

        setIsSubmitting(true)

        // Build the time string (24h format)
        const timeStr = `${selectedHour.toString().padStart(2, '0')}:${selectedMinute.toString().padStart(2, '0')}`

        // Create optimistic events for immediate UI update
        // Times are in WIB (UTC+7), so we create ISO strings with +07:00 offset
        const optimisticEvents = selectedDates.map((date, index) => {
            const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
            // Parse as WIB time explicitly
            const startDateTime = new Date(`${dateStr}T${timeStr}:00+07:00`)
            const endDateTime = new Date(startDateTime.getTime() + 60 * 60000) // +1 hour

            return {
                id: `optimistic-${Date.now()}-${index}`,
                summary: `${selectedStudent}${selectedPackage ? ' - ' + selectedPackage : ''}`,
                description: notes || '',
                start: { dateTime: startDateTime.toISOString() },
                end: { dateTime: endDateTime.toISOString() },
                status: selectedStatus === 'Done' ? 'completed' : 'scheduled',
                isAppSession: true,
                isJadwalSheet: true,
                teacherName: selectedTutor,
                isOptimistic: true, // Mark as optimistic for UI treatment
            }
        })

        // Close modal immediately for optimistic UX
        onClose()

        // Dispatch optimistic events immediately
        window.dispatchEvent(new CustomEvent('sessions-optimistic', {
            detail: { events: optimisticEvents }
        }))

        // Show pending toast
        const toastId = toast.loading(`Menyimpan ${selectedDates.length} jadwal...`)

        try {
            const { createSchedulesAction } = await import('@/app/(dashboard)/scheduler/actions')

            const schedulesToCreate: CreateScheduleInput[] = selectedDates.map(date => {
                const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
                return {
                    date: dateStr,
                    time: timeStr,
                    studentName: selectedStudent,
                    tutor: selectedTutor,
                    package: selectedPackage,
                    sessionType: '',
                    location: '',
                    status: (selectedStatus === 'Rescheduled' ? 'Cancelled' : selectedStatus) as CreateScheduleInput['status'],
                    notes: notes || '',
                }
            })

            const created = await createSchedulesAction(schedulesToCreate)

            toast.success(`${selectedDates.length} jadwal berhasil dibuat!`, { id: toastId })
            // Update optimistic events with real data (including rowIndex)
            window.dispatchEvent(new CustomEvent('sessions-confirmed', {
                detail: { created }
            }))
        } catch (error) {
            console.error('[ScheduleModal] Bulk creation failed:', error)
            toast.error('Gagal membuat jadwal. Silakan coba lagi.', { id: toastId })
            // Clear optimistic data on error
            window.dispatchEvent(new CustomEvent('sessions-clear-optimistic'))
        } finally {
            setIsSubmitting(false)
        }
    }

    const getValidHours = () => {
        // User requested 8am to 11pm (23:00)
        return [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    }

    const currentHours = getValidHours()
    const minutes = [0, 15, 30, 45]

    const getStepTitle = () => {
        switch (step) {
            case 1: return "Detail Kelas"
            case 2: return "Tanggal & Waktu"
            case 3: return "Konfirmasi"
            default: return "Jadwalkan Sesi"
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-2xl w-[95vw] p-0 gap-0 bg-white overflow-hidden border-none shadow-2xl rounded-2xl">
                {/* Header */}
                <DialogHeader className="px-6 py-5 border-b border-slate-100 bg-white sticky top-0 z-10">
                    <div className="flex items-center justify-between mb-4">
                        <DialogTitle className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            {step === 1 && <User className="h-5 w-5 text-indigo-600" />}
                            {step === 2 && <CalendarIcon className="h-5 w-5 text-indigo-600" />}
                            {step === 3 && <Check className="h-5 w-5 text-indigo-600" />}
                            {getStepTitle()}
                        </DialogTitle>
                        <div className="flex gap-1">
                            {[1, 2, 3].map(i => (
                                <div key={i} className={cn("h-1.5 w-8 rounded-full transition-all duration-300", i <= step ? "bg-indigo-600" : "bg-slate-100")} />
                            ))}
                        </div>
                    </div>
                </DialogHeader>

                {/* Content Area */}
                <div className="p-6 min-h-[400px] max-h-[60vh] overflow-y-auto">

                    {/* STEP 1: STUDENT + TUTOR + DETAILS */}
                    {step === 1 && (
                        <div className="space-y-5 animate-in slide-in-from-right-4 fade-in duration-300">
                            {/* Student autocomplete */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Siswa</label>
                                <div className="relative">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                        <input
                                            type="text"
                                            className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-10 py-2 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                                            placeholder={isLoading ? "Memuat siswa..." : "Cari nama siswa..."}
                                            value={selectedStudent || studentSearch}
                                            onChange={(e) => {
                                                setStudentSearch(e.target.value)
                                                setSelectedStudent('')
                                                setShowStudentDropdown(true)
                                            }}
                                            onFocus={() => setShowStudentDropdown(true)}
                                            disabled={isLoading}
                                        />
                                        {selectedStudent && (
                                            <button
                                                type="button"
                                                onClick={() => { setSelectedStudent(''); setStudentSearch('') }}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        )}
                                    </div>
                                    {showStudentDropdown && !selectedStudent && filteredStudents.length > 0 && (
                                        <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-48 overflow-y-auto">
                                            {filteredStudents.map((name) => (
                                                <button
                                                    key={name}
                                                    type="button"
                                                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors first:rounded-t-xl last:rounded-b-xl"
                                                    onClick={() => {
                                                        setSelectedStudent(name)
                                                        setStudentSearch('')
                                                        setShowStudentDropdown(false)
                                                    }}
                                                >
                                                    {name}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Tutor selector */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Tutor</label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    {localTeachers.map((teacher, index) => {
                                        const colors = TUTOR_COLOR_PALETTES[index % TUTOR_COLOR_PALETTES.length]
                                        const isSelected = selectedTutor === teacher.full_name || selectedTutor === teacher.shortName

                                        return (
                                            <button
                                                key={teacher.id}
                                                type="button"
                                                onClick={() => setSelectedTutor(teacher.full_name)}
                                                className={cn(
                                                    "flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all",
                                                    isSelected
                                                        ? `${colors.bg} ${colors.text} border-current ring-2 ring-offset-1 ring-current/20 shadow-sm`
                                                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                                )}
                                            >
                                                <span className={`w-2.5 h-2.5 rounded-full ${colors.dot} shrink-0`} />
                                                {teacher.shortName}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Package dropdown */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Paket</label>
                                <div className="relative">
                                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                    <select
                                        className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-2 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none cursor-pointer"
                                        value={selectedPackage}
                                        onChange={(e) => setSelectedPackage(e.target.value)}
                                    >
                                        <option value="">Pilih paket...</option>
                                        <option value="Speaking Adults">Speaking Adults</option>
                                        <option value="Speaking Kids">Speaking Kids</option>
                                        <option value="Basic Adults">Basic Adults</option>
                                        <option value="Basic Kids">Basic Kids</option>
                                        <option value="Presentation">Presentation</option>
                                        <option value="Interview">Interview</option>
                                    </select>
                                </div>
                            </div>

                            {/* Status dropdown */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Status</label>
                                <select
                                    className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none cursor-pointer"
                                    value={selectedStatus}
                                    onChange={(e) => setSelectedStatus(e.target.value as any)}
                                >
                                    <option value="Scheduled">Scheduled</option>
                                    <option value="Done">Completed</option>
                                    <option value="Rescheduled">Rescheduled</option>
                                </select>
                            </div>

                            {/* Notes */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Catatan</label>
                                <Input
                                    placeholder="e.g. Unit 5 Review, Speaking Practice..."
                                    className="h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500/20"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {/* STEP 2: DATE & TIME */}
                    {step === 2 && (
                        <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                                        Pilih Tanggal
                                        {selectedDates.length > 0 && (
                                            <span className="ml-2 text-indigo-600 normal-case">({selectedDates.length} dipilih)</span>
                                        )}
                                    </label>
                                    <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-sm">
                                        <Calendar
                                            mode="multiple"
                                            dates={selectedDates}
                                            setDates={setSelectedDates}
                                            className="w-full"
                                        />
                                    </div>
                                    {selectedDates.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                            {selectedDates.map((d, i) => (
                                                <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
                                                    {d.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' })}
                                                    <button type="button" onClick={() => setSelectedDates(prev => prev.filter((_, idx) => idx !== i))} className="ml-0.5 hover:text-red-500">×</button>
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-4">
                                    <div>
                                        <span className="text-xs font-semibold text-slate-400 mb-2 block">Jam (24 Jam)</span>
                                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                                            {currentHours.map((h) => (
                                                <button
                                                    key={h}
                                                    type="button"
                                                    onClick={() => handleTimeUpdate(h, selectedMinute)}
                                                    className={cn(
                                                        "h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all",
                                                        selectedHour === h
                                                            ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                                                            : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
                                                    )}
                                                >
                                                    {h.toString().padStart(2, '0')}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <span className="text-xs font-semibold text-slate-400 mb-2 block">Menit</span>
                                        <div className="grid grid-cols-4 gap-2">
                                            {minutes.map((m) => (
                                                <button
                                                    key={m}
                                                    type="button"
                                                    onClick={() => handleTimeUpdate(selectedHour, m)}
                                                    className={cn(
                                                        "py-2 rounded-lg text-sm font-bold transition-all border",
                                                        selectedMinute === m
                                                            ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                                                            : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300"
                                                    )}
                                                >
                                                    {m.toString().padStart(2, '0')}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-indigo-50 rounded-xl p-3 text-center border border-indigo-100">
                                        <span className="text-2xl font-bold text-indigo-700">
                                            {selectedHour.toString().padStart(2, '0')}:{selectedMinute.toString().padStart(2, '0')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: REVIEW */}
                    {step === 3 && (
                        <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
                                {/* Student & Tutor */}
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                        <User className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Siswa</p>
                                        <p className="text-lg font-bold text-slate-900">{selectedStudent}</p>
                                    </div>
                                    {selectedTutor && (() => {
                                        const teacherIndex = teachers.findIndex(t => t.full_name === selectedTutor || t.shortName === selectedTutor)
                                        const teacher = teachers[teacherIndex]
                                        if (!teacher) return null

                                        const colors = TUTOR_COLOR_PALETTES[teacherIndex % TUTOR_COLOR_PALETTES.length]
                                        return (
                                            <div className={cn("px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border",
                                                colors.bg, colors.text, colors.border
                                            )}>
                                                <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                                                {teacher.shortName}
                                            </div>
                                        )
                                    })()}
                                </div>

                                <div className="h-px bg-slate-200" />

                                {/* Date, Time, Details */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Tanggal ({selectedDates.length})</p>
                                        <div className="flex flex-wrap gap-1">
                                            {selectedDates.map((d, i) => (
                                                <span key={i} className="inline-block px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
                                                    {d.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' })}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-sm text-slate-600 mt-1">
                                            {selectedHour.toString().padStart(2, '0')}:{selectedMinute.toString().padStart(2, '0')}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Detail</p>
                                        {selectedPackage && <p className="text-sm font-semibold text-slate-900">{selectedPackage}</p>}
                                        <p className={`text-sm font-medium mt-0.5 ${selectedStatus === 'Done' ? 'text-green-600' : selectedStatus === 'Rescheduled' ? 'text-amber-600' : 'text-blue-600'}`}>
                                            {selectedStatus === 'Done' ? '✅ Completed' : selectedStatus === 'Rescheduled' ? '🔄 Rescheduled' : '📅 Scheduled'}
                                        </p>
                                    </div>
                                </div>

                                {notes && (
                                    <div className="bg-white p-3 rounded-xl border border-slate-200 text-sm text-slate-600 italic">
                                        "{notes}"
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <Button
                        variant="ghost"
                        onClick={step === 1 ? onClose : handleBack}
                        className="text-slate-500 hover:text-slate-900"
                    >
                        {step === 1 ? 'Batal' : 'Kembali'}
                    </Button>

                    <Button
                        onClick={step === 3 ? handleSubmit : handleNext}
                        disabled={
                            (step === 1 && (!selectedStudent || !selectedTutor)) ||
                            (step === 2 && selectedDates.length === 0) ||
                            isSubmitting
                        }
                        className={cn(
                            "px-8 h-12 rounded-xl font-bold shadow-lg transition-all",
                            step === 3
                                ? "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20"
                                : "bg-slate-900 hover:bg-slate-800"
                        )}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Menjadwalkan...
                            </>
                        ) : (
                            step === 3 ? 'Konfirmasi Jadwal' : 'Langkah Berikutnya'
                        )}
                    </Button>
                </div>
            </DialogContent>
        </Dialog >
    )
}
