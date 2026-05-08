'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
    Sparkles, Send, CheckCircle2, ArrowRight, User, MapPin,
    GraduationCap, BookOpen, Clock, Calendar,
    MessageCircle, ArrowLeft, Loader2, AlertCircle, PartyPopper,
    Minus, Plus, Zap, Gift
} from 'lucide-react'
import { submitRegistration } from './actions'
import { KELAS_OPTIONS, INTERVIEW_TIERS, GROUP_SIZES, getPrivatePrice, getGroupPrice, getPromoDiscount, formatSessionTypeLabel, type SessionType, type GroupSize, type InterviewTier } from '@/lib/data/kelas'

const levels = [
    'Beginner', 'Elementary', 'Pre-intermediate',
    'Intermediate', 'Upper-intermediate', 'Advanced'
]

const skills = [
    'Speaking', 'Listening', 'Vocabulary',
    'Pronunciation', 'Grammar', 'Confidence'
]

const frekuensiOptions = ['1x/minggu', '2x/minggu', 'Fleksibel']

const kegiatanOptions = [
    'Conversation', 'Games', 'Movie session', 'Vocab challenge',
    'Reading club', 'Public speaking', 'Discussion'
]

const waktuOptions = ['Pagi', 'Siang', 'Sore', 'Malam', 'Fleksibel']

// Step configuration
const steps = [
    { id: 1, title: 'Data Diri', icon: User, fields: ['namaLengkap', 'namaPanggilan', 'asalKampus', 'domisili', 'usia'] },
    { id: 2, title: 'Kelas & Sesi', icon: GraduationCap, fields: ['kelasTitle', 'totalSessions', 'levelBahasa'] },
    { id: 3, title: 'Preferensi Belajar', icon: BookOpen, fields: ['skillImprove', 'frekuensiBelajar', 'jenisKegiatan', 'waktuNyaman'] },
]

const DEV_FILL: FormData = {
    namaLengkap: 'Dika Aprilio Wibowo',
    namaPanggilan: 'Dika',
    asalKampus: 'Universitas Indonesia',
    domisili: 'Jakarta',
    usia: '21',
    totalSessions: 4,
    kelasTitle: 'Speaking for Adults',
    sessionType: 'private',
    groupSize: '',
    interviewTier: '',
    levelBahasa: 'Pre-intermediate',
    skillImprove: ['Speaking', 'Confidence'],
    frekuensiBelajar: '2x/minggu',
    jenisKegiatan: ['Conversation', 'Games'],
    waktuNyaman: 'Malam',
    members: [],
}

type GroupMemberForm = {
    namaLengkap: string
    asalKampus: string
    domisili: string
    usia: string
}

type FormData = {
    namaLengkap: string
    namaPanggilan: string
    asalKampus: string
    domisili: string
    usia: string
    totalSessions: number
    kelasTitle: string
    sessionType: SessionType
    groupSize: string
    interviewTier: string
    levelBahasa: string
    skillImprove: string[]
    frekuensiBelajar: string
    jenisKegiatan: string[]
    waktuNyaman: string
    members: GroupMemberForm[]
}

type FormErrors = Partial<Record<keyof FormData, string>>

export default function DaftarSesiForm() {
    const searchParams = useSearchParams()
    const [currentStep, setCurrentStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitResult, setSubmitResult] = useState<{ success: boolean; whatsappUrl?: string; studentName?: string; error?: string } | null>(null)
    const [errors, setErrors] = useState<FormErrors>({})
    const formRef = useRef<HTMLDivElement>(null)

    const [form, setForm] = useState<FormData>({
        namaLengkap: '',
        namaPanggilan: '',
        asalKampus: '',
        domisili: '',
        usia: '',
        totalSessions: 1,
        kelasTitle: '',
        sessionType: 'private',
        groupSize: '',
        interviewTier: '',
        levelBahasa: '',
        skillImprove: [],
        frekuensiBelajar: '',
        jenisKegiatan: [],
        waktuNyaman: '',
        members: [],
    })

    // Pre-select sessions from URL param (from PackageSection links)
    useEffect(() => {
        const pkg = searchParams.get('package')
        if (pkg) {
            if (pkg.includes('4')) {
                setForm(prev => ({ ...prev, totalSessions: 4 }))
            } else if (pkg.includes('8')) {
                setForm(prev => ({ ...prev, totalSessions: 8 }))
            }
        }
    }, [searchParams])

    const updateField = (field: keyof FormData, value: string | string[] | number) => {
        setForm(prev => {
            const next = { ...prev, [field]: value } as FormData
            // Reset dependent fields on changes
            if (field === 'kelasTitle') {
                if (next.kelasTitle !== 'Interview Prep') next.interviewTier = ''
                if (next.sessionType === 'group' && (next.kelasTitle === 'Interview Prep' || next.kelasTitle === 'Presentation Skills')) {
                    next.kelasTitle = ''
                }
            }
            if (field === 'sessionType') {
                if (next.sessionType === 'private') {
                    next.groupSize = ''
                    next.members = []
                }
                if (next.sessionType === 'group' && (next.kelasTitle === 'Interview Prep' || next.kelasTitle === 'Presentation Skills')) {
                    next.kelasTitle = ''
                    next.interviewTier = ''
                }
            }
            if (field === 'groupSize' && typeof value === 'string' && value) {
                const count = parseInt(value) - 1
                next.members = Array.from({ length: count }, () => ({
                    namaLengkap: '',
                    asalKampus: '',
                    domisili: '',
                    usia: '',
                }))
            }
            return next
        })
        if (errors[field]) {
            setErrors(prev => {
                const next = { ...prev }
                delete next[field]
                return next
            })
        }
    }

    const updateMember = (index: number, field: keyof GroupMemberForm, value: string) => {
        setForm(prev => {
            const members = [...prev.members]
            members[index] = { ...members[index], [field]: value }
            return { ...prev, members }
        })
        if (errors.members) {
            setErrors(prev => {
                const next = { ...prev }
                delete next.members
                return next
            })
        }
    }

    const toggleArrayField = (field: 'skillImprove' | 'jenisKegiatan', value: string) => {
        setForm(prev => {
            const current = prev[field]
            const updated = current.includes(value)
                ? current.filter(v => v !== value)
                : [...current, value]
            return { ...prev, [field]: updated }
        })
        if (errors[field]) {
            setErrors(prev => {
                const next = { ...prev }
                delete next[field]
                return next
            })
        }
    }

    const validateStep = (step: number): boolean => {
        const newErrors: FormErrors = {}
        const stepFields = steps[step - 1].fields

        stepFields.forEach(field => {
            const key = field as keyof FormData
            const value = form[key]

            if (key === 'namaLengkap' && (!value || (typeof value === 'string' && !value.trim()))) {
                newErrors[key] = 'Nama lengkap wajib diisi'
            }
            if (key === 'namaPanggilan' && (!value || (typeof value === 'string' && !value.trim()))) {
                newErrors[key] = 'Nama panggilan wajib diisi'
            }
            if (key === 'asalKampus' && (!value || (typeof value === 'string' && !value.trim()))) {
                newErrors[key] = 'Asal kampus/sekolah/pekerjaan wajib diisi'
            }
            if (key === 'domisili' && (!value || (typeof value === 'string' && !value.trim()))) {
                newErrors[key] = 'Domisili wajib diisi'
            }
            if (key === 'usia') {
                const num = Number(value)
                if (!value || isNaN(num) || num < 5 || num > 99) {
                    newErrors[key] = 'Usia harus antara 5-99'
                }
            }
            if (key === 'kelasTitle' && !value) {
                newErrors[key] = 'Pilih jenis kelas'
            }
            if (key === 'sessionType' && !value) {
                newErrors[key] = 'Pilih tipe sesi'
            }
            if (key === 'totalSessions') {
                const num = Number(value)
                if (!num || num < 1 || num > 20) {
                    newErrors[key] = 'Jumlah sesi harus antara 1-20'
                }
            }
            if (key === 'levelBahasa' && !value) {
                newErrors[key] = 'Pilih level bahasa Inggris'
            }
            if (key === 'skillImprove' && Array.isArray(value) && value.length === 0) {
                newErrors[key] = 'Pilih minimal 1 skill'
            }
            if (key === 'frekuensiBelajar' && !value) {
                newErrors[key] = 'Pilih frekuensi belajar'
            }
            if (key === 'jenisKegiatan' && Array.isArray(value) && value.length === 0) {
                newErrors[key] = 'Pilih minimal 1 kegiatan'
            }
            if (key === 'waktuNyaman' && !value) {
                newErrors[key] = 'Pilih waktu yang nyaman'
            }
        })

        // Cross-field validations for Step 2
        if (step === 2) {
            if (form.sessionType === 'group' && !form.groupSize) {
                newErrors.groupSize = 'Pilih jumlah orang'
            }
            if (form.sessionType === 'group' && (form.kelasTitle === 'Interview Prep' || form.kelasTitle === 'Presentation Skills')) {
                newErrors.kelasTitle = 'Interview Prep dan Presentation Skills hanya tersedia untuk kelas privat'
            }
            if (form.sessionType === 'group' && form.groupSize) {
                const expected = parseInt(form.groupSize) - 1
                if (form.members.length !== expected) {
                    newErrors.members = `Lengkapi data ${expected} anggota lainnya`
                } else {
                    form.members.forEach((m, idx) => {
                        if (!m.namaLengkap.trim()) {
                            newErrors.members = `Nama lengkap anggota ${idx + 1} wajib diisi`
                        } else if (!m.asalKampus.trim()) {
                            newErrors.members = `Asal kampus anggota ${idx + 1} wajib diisi`
                        } else if (!m.domisili.trim()) {
                            newErrors.members = `Domisili anggota ${idx + 1} wajib diisi`
                        } else if (!m.usia || isNaN(Number(m.usia)) || Number(m.usia) < 5 || Number(m.usia) > 99) {
                            newErrors.members = `Usia anggota ${idx + 1} harus 5-99`
                        }
                    })
                }
            }
            if (form.kelasTitle === 'Interview Prep' && form.sessionType === 'private' && !form.interviewTier) {
                newErrors.interviewTier = 'Pilih level wawancara'
            }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, 3))
            formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const handleBack = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1))
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const handleSubmit = async () => {
        if (!validateStep(currentStep)) return

        // Demo: just redirect to home, don't actually submit
        window.location.href = '/'
    }

    // Price calculation helpers
    const hargaPerSesi = form.sessionType === 'private'
        ? getPrivatePrice(form.kelasTitle as any, form.interviewTier as InterviewTier | undefined)
        : getGroupPrice(form.kelasTitle as any, form.groupSize as GroupSize)
    const promoDiscount = form.sessionType === 'private' ? getPromoDiscount(form.totalSessions) : 0
    const totalHarga = hargaPerSesi > 0 ? (form.totalSessions * hargaPerSesi) - promoDiscount : 0
    const isPromo = form.sessionType === 'private' && (form.totalSessions === 4 || form.totalSessions === 8)
    const promoInfo = isPromo
        ? { discount: form.totalSessions === 4 ? 'Hemat Rp20.000' : 'Hemat Rp60.000', icon: form.totalSessions === 4 ? Gift : Zap, color: form.totalSessions === 4 ? 'blue' : 'orange' }
        : null

    // Success state
    if (submitResult?.success) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4 py-12">
                {/* Background decorations */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="relative max-w-lg w-full"
                >
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                        {/* Success header */}
                        <div className="bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-10 text-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-2 left-8 text-4xl">🎉</div>
                                <div className="absolute top-6 right-12 text-3xl">✨</div>
                                <div className="absolute bottom-4 left-16 text-2xl">🎊</div>
                                <div className="absolute bottom-2 right-8 text-3xl">🥳</div>
                            </div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                            >
                                <PartyPopper className="w-16 h-16 text-white mx-auto mb-4" />
                            </motion.div>
                            <h2 className="text-2xl font-black text-white">Pendaftaran Berhasil!</h2>
                            <p className="text-emerald-100 mt-2 font-medium">
                                Data kamu sudah tersimpan, {submitResult.studentName} 💚
                            </p>
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="px-8 py-8">
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 mb-6">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Satu Langkah Lagi! 🚀</h3>
                                        <p className="text-gray-600 text-sm mt-1">
                                            Klik tombol di bawah untuk lanjut ke <strong>prosedur pembayaran</strong> via WhatsApp.
                                            Pesan sudah otomatis terisi — tinggal klik <strong>Kirim</strong> dan kakak akan membalas dengan info pembayaran! 💳
                                        </p>
                                    </div>
                                </div>

                                <motion.div
                                    animate={{ scale: [1, 1.02, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <a
                                        href={submitResult.whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg group"
                                    >
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Kirim via WhatsApp
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </motion.div>

                                <p className="text-center text-xs text-gray-400 mt-3">
                                    💡 Pesan akan otomatis terisi lengkap. Tinggal tekan kirim!
                                </p>
                            </div>

                            <Link
                                href="/"
                                className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 font-medium py-3 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Kembali ke halaman utama
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen py-8 px-4 md:py-12">
            {/* Background decorations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-2xl mx-auto relative" ref={formRef}>
                {/* Back to home */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-6"
                >
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 font-medium transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Kembali
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                        <Sparkles className="w-4 h-4" />
                        English Chill Club
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
                        Daftar Sesi Belajar ✨
                    </h1>
                    <p className="text-gray-500 font-medium max-w-md mx-auto">
                        Hai! Silakan isi data berikut untuk bergabung ke English Chill Club ya
                    </p>
                    {process.env.NODE_ENV === 'development' && (
                        <button
                            type="button"
                            onClick={() => { setForm(DEV_FILL); setCurrentStep(3) }}
                            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs font-bold rounded-lg border border-amber-300 transition-all"
                        >
                            ⚡ Quick Fill (dev)
                        </button>
                    )}
                </motion.div>

                {/* Progress Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center justify-center gap-2 mb-8"
                >
                    {steps.map((step, idx) => {
                        const StepIcon = step.icon
                        const isActive = currentStep === step.id
                        const isCompleted = currentStep > step.id

                        return (
                            <div key={step.id} className="flex items-center gap-2">
                                <button
                                    onClick={() => {
                                        if (isCompleted) setCurrentStep(step.id)
                                    }}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${isActive
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                        : isCompleted
                                            ? 'bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer'
                                            : 'bg-gray-100 text-gray-400'
                                        }`}
                                    disabled={!isCompleted && !isActive}
                                >
                                    {isCompleted ? (
                                        <CheckCircle2 className="w-4 h-4" />
                                    ) : (
                                        <StepIcon className="w-4 h-4" />
                                    )}
                                    <span className="hidden sm:inline">{step.title}</span>
                                    <span className="sm:hidden">{step.id}</span>
                                </button>
                                {idx < steps.length - 1 && (
                                    <div className={`w-8 h-0.5 rounded-full transition-colors duration-300 ${currentStep > step.id ? 'bg-green-400' : 'bg-gray-200'
                                        }`} />
                                )}
                            </div>
                        )
                    })}
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                >
                    {/* Step Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-5">
                        <h2 className="text-white font-bold text-lg flex items-center gap-2">
                            {(() => { const Icon = steps[currentStep - 1].icon; return <Icon className="w-5 h-5" /> })()}
                            {steps[currentStep - 1].title}
                        </h2>
                        <p className="text-blue-200 text-sm mt-0.5">Langkah {currentStep} dari {steps.length}</p>
                    </div>

                    <div className="p-6 md:p-8">
                        <AnimatePresence mode="wait">
                            {/* Step 1: Personal Info */}
                            {currentStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-5"
                                >
                                    <FormInput
                                        label="Nama Lengkap"
                                        placeholder="Masukkan nama lengkap"
                                        value={form.namaLengkap}
                                        onChange={(v) => updateField('namaLengkap', v)}
                                        error={errors.namaLengkap}
                                        icon={<User className="w-4 h-4" />}
                                    />
                                    <FormInput
                                        label="Nama Panggilan"
                                        placeholder="Nama yang biasa dipanggil"
                                        value={form.namaPanggilan}
                                        onChange={(v) => updateField('namaPanggilan', v)}
                                        error={errors.namaPanggilan}
                                        icon={<User className="w-4 h-4" />}
                                    />
                                    <FormInput
                                        label="Asal Kampus / Sekolah / Pekerjaan"
                                        placeholder="Contoh: Universitas Indonesia, SMA 1, PT. ABC"
                                        value={form.asalKampus}
                                        onChange={(v) => updateField('asalKampus', v)}
                                        error={errors.asalKampus}
                                        icon={<GraduationCap className="w-4 h-4" />}
                                    />
                                    <FormInput
                                        label="Domisili"
                                        placeholder="Contoh: Jakarta, Bandung, Surabaya"
                                        value={form.domisili}
                                        onChange={(v) => updateField('domisili', v)}
                                        error={errors.domisili}
                                        icon={<MapPin className="w-4 h-4" />}
                                    />
                                    <FormInput
                                        label="Usia"
                                        placeholder="Contoh: 20"
                                        value={form.usia}
                                        onChange={(v) => updateField('usia', v)}
                                        error={errors.usia}
                                        type="number"
                                        icon={<Calendar className="w-4 h-4" />}
                                    />
                                </motion.div>
                            )}

                            {/* Step 2: Class & Sessions */}
                            {currentStep === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    {/* Class Type + Session Type */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Left: Class Type */}
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-3">
                                                Pilih Jenis Kelas
                                            </label>
                                            <div className="grid grid-cols-1 gap-2">
                                                {KELAS_OPTIONS.map(kelas => {
                                                    const isSelected = form.kelasTitle === kelas.title
                                                    const disabled = form.sessionType === 'group' && (kelas.title === 'Interview Prep' || kelas.title === 'Presentation Skills')
                                                    return (
                                                        <button
                                                            key={kelas.title}
                                                            type="button"
                                                            disabled={disabled}
                                                            onClick={() => updateField('kelasTitle', kelas.title)}
                                                            className={`flex items-center justify-between px-4 py-3.5 rounded-xl border-2 text-left transition-all duration-200 ${isSelected
                                                                ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200'
                                                                : disabled
                                                                    ? 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                                                                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                                                }`}
                                                        >
                                                            <span className={`text-sm font-bold ${isSelected ? 'text-indigo-700' : disabled ? 'text-gray-400' : 'text-gray-700'}`}>
                                                                {isSelected && '✓ '}{kelas.title}
                                                            </span>
                                                            <span className={`text-xs font-black ml-2 shrink-0 ${isSelected ? 'text-indigo-500' : disabled ? 'text-gray-300' : 'text-gray-400'}`}>
                                                                Rp{kelas.price.toLocaleString('id-ID')}/sesi
                                                            </span>
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                            {errors.kelasTitle && <ErrorMessage message={errors.kelasTitle} />}
                                        </div>

                                        {/* Right: Session Type + Group Size */}
                                        <div className="space-y-5">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-3">
                                                    Tipe Sesi
                                                </label>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {(['private', 'group'] as SessionType[]).map(type => {
                                                        const isSelected = form.sessionType === type
                                                        return (
                                                            <button
                                                                key={type}
                                                                type="button"
                                                                onClick={() => updateField('sessionType', type)}
                                                                className={`px-4 py-3 rounded-xl border-2 text-sm font-bold transition-all duration-200 ${isSelected
                                                                    ? 'border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-200'
                                                                    : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                                                                    }`}
                                                            >
                                                                {isSelected && '✓ '}{type === 'private' ? 'Privat' : 'Grup'}
                                                            </button>
                                                        )
                                                    })}
                                                </div>
                                                {errors.sessionType && <ErrorMessage message={errors.sessionType} />}
                                            </div>

                                            {/* Interview Tier (Private + Interview only) */}
                                            {form.sessionType === 'private' && form.kelasTitle === 'Interview Prep' && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="space-y-2"
                                                >
                                                    <label className="block text-sm font-bold text-gray-700">
                                                        Level Wawancara
                                                    </label>
                                                    <div className="grid grid-cols-1 gap-2">
                                                        {INTERVIEW_TIERS.map(tier => {
                                                            const isSelected = form.interviewTier === tier.key
                                                            return (
                                                                <button
                                                                    key={tier.key}
                                                                    type="button"
                                                                    onClick={() => updateField('interviewTier', tier.key)}
                                                                    className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 text-left transition-all duration-200 ${isSelected
                                                                        ? 'border-violet-500 bg-violet-50 text-violet-700 ring-2 ring-violet-200'
                                                                        : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                                                                        }`}
                                                                >
                                                                    <span className="text-sm font-bold">{isSelected && '✓ '}{tier.label}</span>
                                                                    <span className="text-xs font-black text-gray-400">Rp{tier.price.toLocaleString('id-ID')}/sesi</span>
                                                                </button>
                                                            )
                                                        })}
                                                    </div>
                                                    {errors.interviewTier && <ErrorMessage message={errors.interviewTier} />}
                                                </motion.div>
                                            )}

                                            {/* Group Size (Group only) */}
                                            {form.sessionType === 'group' && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="space-y-2"
                                                >
                                                    <label className="block text-sm font-bold text-gray-700">
                                                        Jumlah Orang dalam Grup
                                                    </label>
                                                    <div className="grid grid-cols-3 gap-2">
                                                        {GROUP_SIZES.map(size => {
                                                            const isSelected = form.groupSize === size
                                                            const groupPrice = form.kelasTitle ? getGroupPrice(form.kelasTitle as any, size) : 0
                                                            return (
                                                                <button
                                                                    key={size}
                                                                    type="button"
                                                                    onClick={() => updateField('groupSize', size)}
                                                                    className={`px-3 py-3 rounded-xl border-2 text-sm font-bold transition-all duration-200 ${isSelected
                                                                        ? 'border-purple-500 bg-purple-50 text-purple-700 ring-2 ring-purple-200'
                                                                        : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                                                                        }`}
                                                                >
                                                                    <span className="block">{size}</span>
                                                                    {groupPrice > 0 && (
                                                                        <span className="block text-[10px] font-medium text-gray-400 mt-0.5">
                                                                            Rp{groupPrice.toLocaleString('id-ID')}/org
                                                                        </span>
                                                                    )}
                                                                </button>
                                                            )
                                                        })}
                                                    </div>
                                                    {errors.groupSize && <ErrorMessage message={errors.groupSize} />}
                                                </motion.div>
                                            )}

                                            {/* Group Members Biodata */}
                                            {form.sessionType === 'group' && form.groupSize && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="space-y-4 pt-2"
                                                >
                                                    <div className="border-t border-gray-100 pt-4">
                                                        <label className="block text-sm font-bold text-gray-700 mb-3">
                                                            Data Diri Anggota Lain
                                                        </label>
                                                        <p className="text-xs text-gray-500 mb-3">
                                                            Pemesan utama ({form.namaLengkap || 'Anda'}) sudah terisi di langkah 1.
                                                        </p>
                                                        {form.members.map((member, idx) => (
                                                            <div key={idx} className="bg-purple-50/50 rounded-xl p-4 border border-purple-100 mb-3">
                                                                <p className="text-xs font-bold text-purple-700 mb-2">Anggota {idx + 1}</p>
                                                                <div className="space-y-2">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Nama lengkap"
                                                                        value={member.namaLengkap}
                                                                        onChange={(e) => updateMember(idx, 'namaLengkap', e.target.value)}
                                                                        className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                                                                    />
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Asal kampus / sekolah / pekerjaan"
                                                                        value={member.asalKampus}
                                                                        onChange={(e) => updateMember(idx, 'asalKampus', e.target.value)}
                                                                        className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                                                                    />
                                                                    <div className="grid grid-cols-2 gap-2">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Domisili"
                                                                            value={member.domisili}
                                                                            onChange={(e) => updateMember(idx, 'domisili', e.target.value)}
                                                                            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                                                                        />
                                                                        <input
                                                                            type="number"
                                                                            placeholder="Usia"
                                                                            value={member.usia}
                                                                            onChange={(e) => updateMember(idx, 'usia', e.target.value)}
                                                                            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                        {errors.members && <ErrorMessage message={errors.members} />}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Session Count Picker */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-3">
                                            Jumlah Sesi
                                        </label>

                                        {/* Counter */}
                                        <div className="flex items-center justify-center gap-4 mb-4">
                                            <button
                                                type="button"
                                                onClick={() => updateField('totalSessions', Math.max(1, form.totalSessions - 1))}
                                                className="w-12 h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                                disabled={form.totalSessions <= 1}
                                            >
                                                <Minus className="w-5 h-5" />
                                            </button>
                                            <div className="text-center min-w-[80px]">
                                                <motion.span
                                                    key={form.totalSessions}
                                                    initial={{ scale: 1.3, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    className="text-4xl font-black text-gray-900 block"
                                                >
                                                    {form.totalSessions}
                                                </motion.span>
                                                <span className="text-sm text-gray-500 font-medium">sesi</span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => updateField('totalSessions', Math.min(20, form.totalSessions + 1))}
                                                className="w-12 h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                                disabled={form.totalSessions >= 20}
                                            >
                                                <Plus className="w-5 h-5" />
                                            </button>
                                        </div>

                                        {/* Quick select buttons */}
                                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                                            {[1, 2, 3, 4, 5, 6, 8, 10].map(n => (
                                                <button
                                                    key={n}
                                                    type="button"
                                                    onClick={() => updateField('totalSessions', n)}
                                                    className={`relative px-4 py-2 rounded-xl border-2 text-sm font-bold transition-all duration-200 ${form.totalSessions === n
                                                        ? n === 4 ? 'border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-200'
                                                            : n === 8 ? 'border-orange-500 bg-orange-50 text-orange-700 ring-2 ring-orange-200'
                                                                : 'border-indigo-500 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-200'
                                                        : (n === 4 || n === 8) ? 'border-gray-200 text-gray-600 hover:border-gray-300 bg-gradient-to-b from-white to-gray-50'
                                                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                                        }`}
                                                >
                                                    {n}
                                                    {(n === 4 || n === 8) && (
                                                        <span className="absolute -top-2 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full leading-none">
                                                            PROMO
                                                        </span>
                                                    )}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Live Price Preview */}
                                        <AnimatePresence mode="wait">
                                            {hargaPerSesi > 0 ? (
                                                <motion.div
                                                    key={`price-${form.totalSessions}-${form.kelasTitle}`}
                                                    initial={{ opacity: 0, y: -8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    className={`rounded-2xl p-4 border-2 ${promoInfo
                                                        ? promoInfo.color === 'blue' ? 'bg-blue-50 border-blue-200' : 'bg-orange-50 border-orange-200'
                                                        : 'bg-gray-50 border-gray-100'
                                                        }`}
                                                >
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-xs text-gray-500 font-medium">
                                                            Rp{hargaPerSesi.toLocaleString('id-ID')} × {form.totalSessions} sesi
                                                        </span>
                                                        <span className="text-xs font-bold text-gray-700">
                                                            Rp{(form.totalSessions * hargaPerSesi).toLocaleString('id-ID')}
                                                        </span>
                                                    </div>
                                                    {promoInfo && promoDiscount > 0 && (
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className={`text-xs font-bold flex items-center gap-1 ${promoInfo.color === 'blue' ? 'text-blue-600' : 'text-orange-600'}`}>
                                                                <promoInfo.icon className="w-3 h-3" />
                                                                {promoInfo.discount}
                                                            </span>
                                                            <span className={`text-xs font-bold ${promoInfo.color === 'blue' ? 'text-blue-600' : 'text-orange-600'}`}>
                                                                −Rp{promoDiscount.toLocaleString('id-ID')}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                                                        <span className="text-sm font-black text-gray-900">
                                                            Total{form.sessionType === 'group' ? ' per orang' : ''}
                                                        </span>
                                                        <span className="text-lg font-black text-gray-900">
                                                            Rp{totalHarga.toLocaleString('id-ID')}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="no-kelas"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="rounded-2xl p-4 border border-gray-100 bg-gray-50"
                                                >
                                                    <p className="text-sm text-gray-400 text-center">
                                                        💡 Pilih <strong className="text-indigo-600">jenis kelas</strong> di atas untuk melihat estimasi biaya. Pilih <strong className="text-blue-600">4</strong> atau <strong className="text-orange-600">8 sesi</strong> untuk promo!
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {errors.totalSessions && <ErrorMessage message={errors.totalSessions} />}
                                    </div>

                                    {/* Level Selection */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-3">
                                            Level Bahasa Inggris Saat Ini
                                        </label>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                            {levels.map(level => (
                                                <button
                                                    key={level}
                                                    type="button"
                                                    onClick={() => updateField('levelBahasa', level)}
                                                    className={`px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${form.levelBahasa === level
                                                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-200'
                                                        : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {level}
                                                </button>
                                            ))}
                                        </div>
                                        {errors.levelBahasa && <ErrorMessage message={errors.levelBahasa} />}
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Preferences */}
                            {currentStep === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    {/* Skills */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-3">
                                            Skill yang Ingin Di-improve <span className="text-gray-400 font-normal">(bisa lebih dari 1)</span>
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.map(skill => (
                                                <button
                                                    key={skill}
                                                    type="button"
                                                    onClick={() => toggleArrayField('skillImprove', skill)}
                                                    className={`px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${form.skillImprove.includes(skill)
                                                        ? 'border-violet-500 bg-violet-50 text-violet-700 ring-2 ring-violet-200'
                                                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                                        }`}
                                                >
                                                    {form.skillImprove.includes(skill) && '✓ '}{skill}
                                                </button>
                                            ))}
                                        </div>
                                        {errors.skillImprove && <ErrorMessage message={errors.skillImprove} />}
                                    </div>

                                    {/* Frekuensi */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-3">
                                            Frekuensi Belajar
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {frekuensiOptions.map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => updateField('frekuensiBelajar', opt)}
                                                    className={`px-3 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${form.frekuensiBelajar === opt
                                                        ? 'border-orange-500 bg-orange-50 text-orange-700 ring-2 ring-orange-200'
                                                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                                        }`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                        {errors.frekuensiBelajar && <ErrorMessage message={errors.frekuensiBelajar} />}
                                    </div>

                                    {/* Jenis Kegiatan */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-3">
                                            Jenis Kegiatan yang Kamu Suka <span className="text-gray-400 font-normal">(bisa lebih dari 1)</span>
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {kegiatanOptions.map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => toggleArrayField('jenisKegiatan', opt)}
                                                    className={`px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${form.jenisKegiatan.includes(opt)
                                                        ? 'border-teal-500 bg-teal-50 text-teal-700 ring-2 ring-teal-200'
                                                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                                        }`}
                                                >
                                                    {form.jenisKegiatan.includes(opt) && '✓ '}{opt}
                                                </button>
                                            ))}
                                        </div>
                                        {errors.jenisKegiatan && <ErrorMessage message={errors.jenisKegiatan} />}
                                    </div>

                                    {/* Waktu */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-3">
                                            Waktu yang Paling Nyaman
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {waktuOptions.map(opt => (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => updateField('waktuNyaman', opt)}
                                                    className={`px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${form.waktuNyaman === opt
                                                        ? 'border-amber-500 bg-amber-50 text-amber-700 ring-2 ring-amber-200'
                                                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                                        }`}
                                                >
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                        {errors.waktuNyaman && <ErrorMessage message={errors.waktuNyaman} />}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Error Message */}
                        {submitResult?.error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2 text-sm"
                            >
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                {submitResult.error}
                            </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                            {currentStep > 1 ? (
                                <button
                                    onClick={handleBack}
                                    className="flex items-center gap-2 px-5 py-3 rounded-xl text-gray-600 hover:text-gray-800 hover:bg-gray-100 font-semibold transition-all"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Kembali
                                </button>
                            ) : (
                                <div />
                            )}

                            {currentStep < 3 ? (
                                <button
                                    onClick={handleNext}
                                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                                >
                                    Lanjut
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Mengirim...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Kirim Pendaftaran
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Info note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-xs text-gray-400 mt-6"
                >
                    🔒 Data kamu aman dan hanya digunakan untuk keperluan pendaftaran
                </motion.p>
            </div>
        </div>
    )
}

// Reusable form components
function FormInput({
    label, placeholder, value, onChange, error, type = 'text', icon
}: {
    label: string
    placeholder: string
    value: string
    onChange: (v: string) => void
    error?: string
    type?: string
    icon?: React.ReactNode
}) {
    return (
        <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">{label}</label>
            <div className="relative">
                {icon && (
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 outline-none ${error
                        ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                        : 'border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-300'
                        }`}
                />
            </div>
            {error && <ErrorMessage message={error} />}
        </div>
    )
}

function ErrorMessage({ message }: { message: string }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-xs font-semibold mt-1.5 flex items-center gap-1"
        >
            <AlertCircle className="w-3 h-3" />
            {message}
        </motion.p>
    )
}
