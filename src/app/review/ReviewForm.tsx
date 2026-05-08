'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
    Star, Send, ArrowLeft, Loader2, AlertCircle, PartyPopper,
    MessageSquare, Sparkles, ChevronDown, User, Heart
} from 'lucide-react'
import { getTutorList, submitReview, type TutorOption } from './actions'

const RATING_LABELS: Record<number, { label: string; emoji: string; color: string }> = {
    1: { label: 'Tidak Puas', emoji: '😞', color: 'from-red-500 to-red-600' },
    2: { label: 'Kurang Puas', emoji: '😕', color: 'from-orange-400 to-red-500' },
    3: { label: 'Cukup', emoji: '😐', color: 'from-amber-400 to-orange-500' },
    4: { label: 'Cukup Puas', emoji: '🙂', color: 'from-yellow-400 to-amber-500' },
    5: { label: 'Puas', emoji: '😊', color: 'from-lime-400 to-green-500' },
    6: { label: 'Sangat Puas', emoji: '😄', color: 'from-green-400 to-emerald-500' },
    7: { label: 'Sangat Puas Banget', emoji: '🤩', color: 'from-emerald-400 to-teal-500' },
}

export default function ReviewForm() {
    const searchParams = useSearchParams()
    const [tutors, setTutors] = useState<TutorOption[]>([])
    const [loadingTutors, setLoadingTutors] = useState(true)

    const [studentName, setStudentName] = useState('')
    const [selectedTutorId, setSelectedTutorId] = useState('')
    const [rating, setRating] = useState(0)
    const [hoveredRating, setHoveredRating] = useState(0)
    const [comment, setComment] = useState('')
    const [testimoni, setTestimoni] = useState('')

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitResult, setSubmitResult] = useState<{ success: boolean; error?: string } | null>(null)
    const [errors, setErrors] = useState<Record<string, string>>({})

    // Fetch tutors on mount
    useEffect(() => {
        async function load() {
            const list = await getTutorList()
            setTutors(list)
            setLoadingTutors(false)

            // Auto-fill from URL params
            const paramStudent = searchParams.get('student')
            const paramTutor = searchParams.get('tutor')

            if (paramStudent) {
                setStudentName(paramStudent)
            } else {
                // Fallback to localStorage
                const cached = localStorage.getItem('ecc_review_student')
                if (cached) setStudentName(cached)
            }

            if (paramTutor && list.length > 0) {
                // Find tutor by name (case-insensitive partial match)
                const match = list.find(t =>
                    t.fullName.toLowerCase().includes(paramTutor.toLowerCase())
                )
                if (match) setSelectedTutorId(match.id)
            }
        }
        load()
    }, [searchParams])

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {}
        if (!studentName.trim() || studentName.trim().length < 2) {
            newErrors.studentName = 'Tulis nama kamu ya (minimal 2 huruf)'
        }
        if (!selectedTutorId) {
            newErrors.tutorId = 'Pilih tutor yang mengajar'
        }
        if (rating === 0) {
            newErrors.rating = 'Berikan rating ya ⭐'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async () => {
        if (!validate()) return

        setIsSubmitting(true)
        try {
            const result = await submitReview({
                studentName: studentName.trim(),
                tutorId: selectedTutorId,
                rating,
                comment: comment.trim() || undefined,
                testimoni: testimoni.trim() || undefined,
            })
            setSubmitResult(result)

            if (result.success) {
                // Cache student name for next time
                localStorage.setItem('ecc_review_student', studentName.trim())
            }
        } catch {
            setSubmitResult({ success: false, error: 'Terjadi kesalahan. Coba lagi.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    const selectedTutor = tutors.find(t => t.id === selectedTutorId)
    const activeRating = hoveredRating || rating

    // Success state
    if (submitResult?.success) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4 py-12">
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="relative max-w-lg w-full"
                >
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-10 text-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-2 left-8 text-4xl">⭐</div>
                                <div className="absolute top-6 right-12 text-3xl">✨</div>
                                <div className="absolute bottom-4 left-16 text-2xl">💚</div>
                                <div className="absolute bottom-2 right-8 text-3xl">🎉</div>
                            </div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                            >
                                <PartyPopper className="w-16 h-16 text-white mx-auto mb-4" />
                            </motion.div>
                            <h2 className="text-2xl font-black text-white">Terima Kasih! 🙏</h2>
                            <p className="text-emerald-100 mt-2 font-medium">
                                Review kamu sudah tersimpan, Ka {studentName} 💚
                            </p>
                        </div>

                        <div className="px-8 py-8 text-center">
                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200 mb-6">
                                <Heart className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                                <p className="text-gray-700 font-medium">
                                    Feedback kamu sangat berarti untuk meningkatkan kualitas pengajaran di English Chill Course!
                                </p>
                                {selectedTutor && (
                                    <p className="text-sm text-emerald-600 mt-2 font-semibold">
                                        Rating untuk Tutor {selectedTutor.fullName}: {RATING_LABELS[rating]?.emoji} {rating}/7
                                    </p>
                                )}
                            </div>

                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 font-medium py-3 transition-colors"
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
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-100/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-xl mx-auto relative">
                {/* Back */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
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
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                        <Sparkles className="w-4 h-4" />
                        English Chill Course
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">
                        Gimana Sesinya? ⭐
                    </h1>
                    <p className="text-gray-500 font-medium max-w-md mx-auto">
                        Bantu kami jadi lebih baik dengan memberikan rating dan feedback ya!
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                >
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 md:px-8 py-5">
                        <h2 className="text-white font-bold text-lg flex items-center gap-2">
                            <Star className="w-5 h-5" />
                            Berikan Rating
                        </h2>
                        <p className="text-amber-100 text-sm mt-0.5">Isi form singkat ini setelah sesi belajar 🙏</p>
                    </div>

                    <div className="p-6 md:p-8 space-y-6">
                        {/* Student Name */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Nama Kamu
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    value={studentName}
                                    onChange={(e) => {
                                        setStudentName(e.target.value)
                                        if (errors.studentName) setErrors(prev => { const n = { ...prev }; delete n.studentName; return n })
                                    }}
                                    placeholder="Contoh: Ka May, Dika, Nisa..."
                                    className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 outline-none ${errors.studentName
                                        ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                                        : 'border-gray-200 bg-gray-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 focus:bg-white'
                                        }`}
                                />
                            </div>
                            {errors.studentName && <ErrorMessage message={errors.studentName} />}
                        </div>

                        {/* Tutor Picker */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Tutor yang Mengajar
                            </label>
                            {loadingTutors ? (
                                <div className="flex items-center gap-2 text-sm text-gray-400 py-3">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Memuat daftar tutor...
                                </div>
                            ) : (
                                <div className="relative">
                                    <select
                                        value={selectedTutorId}
                                        onChange={(e) => {
                                            setSelectedTutorId(e.target.value)
                                            if (errors.tutorId) setErrors(prev => { const n = { ...prev }; delete n.tutorId; return n })
                                        }}
                                        className={`w-full px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 outline-none appearance-none cursor-pointer ${errors.tutorId
                                            ? 'border-red-300 bg-red-50 focus:border-red-500'
                                            : selectedTutorId
                                                ? 'border-amber-400 bg-amber-50 text-amber-900'
                                                : 'border-gray-200 bg-gray-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-100'
                                            }`}
                                    >
                                        <option value="">Pilih tutor...</option>
                                        {tutors.map(t => (
                                            <option key={t.id} value={t.id}>
                                                Tutor {t.fullName}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                            )}
                            {errors.tutorId && <ErrorMessage message={errors.tutorId} />}
                        </div>

                        {/* Star Rating */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-3">
                                Rating Sesi <span className="text-gray-400 font-normal">(1–7)</span>
                            </label>
                            <div className="flex justify-center gap-1.5 mb-3">
                                {[1, 2, 3, 4, 5, 6, 7].map(star => {
                                    const isActive = star <= activeRating
                                    return (
                                        <motion.button
                                            key={star}
                                            type="button"
                                            whileHover={{ scale: 1.15 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => {
                                                setRating(star)
                                                if (errors.rating) setErrors(prev => { const n = { ...prev }; delete n.rating; return n })
                                            }}
                                            onMouseEnter={() => setHoveredRating(star)}
                                            onMouseLeave={() => setHoveredRating(0)}
                                            className="focus:outline-none transition-all duration-150"
                                        >
                                            <Star
                                                className={`w-9 h-9 md:w-10 md:h-10 transition-all duration-150 ${isActive
                                                    ? 'text-amber-400 fill-amber-400 drop-shadow-sm'
                                                    : 'text-gray-300 hover:text-amber-200'
                                                    }`}
                                            />
                                        </motion.button>
                                    )
                                })}
                            </div>

                            {/* Rating label */}
                            <AnimatePresence mode="wait">
                                {activeRating > 0 && (
                                    <motion.div
                                        key={activeRating}
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="text-center"
                                    >
                                        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold text-white bg-gradient-to-r ${RATING_LABELS[activeRating]?.color}`}>
                                            <span className="text-lg">{RATING_LABELS[activeRating]?.emoji}</span>
                                            {RATING_LABELS[activeRating]?.label}
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {errors.rating && <ErrorMessage message={errors.rating} />}
                        </div>

                        {/* Comment (Saran) */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Saran <span className="text-gray-400 font-normal">(Opsional)</span>
                            </label>
                            <div className="relative">
                                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Ada saran untuk perbaikan?"
                                    rows={3}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-sm font-medium transition-all duration-200 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 focus:bg-white resize-none"
                                />
                            </div>
                        </div>

                        {/* Testimoni */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Testimoni <span className="text-gray-400 font-normal">(Opsional)</span>
                            </label>
                            <div className="relative">
                                <Heart className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                <textarea
                                    value={testimoni}
                                    onChange={(e) => setTestimoni(e.target.value)}
                                    placeholder="Cerita pengalaman belajar kamu..."
                                    rows={3}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-sm font-medium transition-all duration-200 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 focus:bg-white resize-none"
                                />
                            </div>
                        </div>

                        {/* Error */}
                        {submitResult?.error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2 text-sm"
                            >
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                {submitResult.error}
                            </motion.div>
                        )}

                        {/* Submit */}
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Mengirim...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Kirim Review
                                </>
                            )}
                        </motion.button>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-xs text-gray-400 mt-6"
                >
                    🔒 Review kamu akan membantu meningkatkan kualitas pengajaran ECC
                </motion.p>
            </div>
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
