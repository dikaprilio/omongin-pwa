'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Star, TrendingUp, Users, MessageSquare, Copy, Check,
    ChevronDown, Link2, ExternalLink, Search
} from 'lucide-react'
import type { ReviewRecord } from '@/app/(dashboard)/reviews/actions'

const RATING_LABELS: Record<number, { label: string; emoji: string }> = {
    1: { label: 'Tidak Puas', emoji: '😞' },
    2: { label: 'Kurang Puas', emoji: '😕' },
    3: { label: 'Cukup', emoji: '😐' },
    4: { label: 'Cukup Puas', emoji: '🙂' },
    5: { label: 'Puas', emoji: '😊' },
    6: { label: 'Sangat Puas', emoji: '😄' },
    7: { label: 'Sangat Puas Banget', emoji: '🤩' },
}

interface ReviewsDashboardProps {
    reviews: ReviewRecord[]
    isAdmin: boolean
}

export function ReviewsDashboard({ reviews, isAdmin }: ReviewsDashboardProps) {
    const [filterTutor, setFilterTutor] = useState<string>('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState<'date' | 'rating'>('date')
    const [linkCopied, setLinkCopied] = useState(false)

    // Generate link modal
    const [showLinkGen, setShowLinkGen] = useState(false)
    const [linkStudent, setLinkStudent] = useState('')
    const [linkTutor, setLinkTutor] = useState('')

    // Unique tutors for filter
    const tutorOptions = useMemo(() => {
        const map = new Map<string, string>()
        reviews.forEach(r => map.set(r.tutorId, r.tutorName))
        return Array.from(map.entries()).map(([id, name]) => ({ id, name }))
    }, [reviews])

    // Filtered & sorted reviews
    const filteredReviews = useMemo(() => {
        let result = [...reviews]

        if (filterTutor !== 'all') {
            result = result.filter(r => r.tutorId === filterTutor)
        }

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase()
            result = result.filter(r =>
                r.studentName.toLowerCase().includes(q) ||
                r.comment?.toLowerCase().includes(q) ||
                r.testimoni?.toLowerCase().includes(q)
            )
        }

        if (sortBy === 'rating') {
            result.sort((a, b) => b.rating - a.rating)
        }
        // date is already sorted from server

        return result
    }, [reviews, filterTutor, searchQuery, sortBy])

    // Stats
    const stats = useMemo(() => {
        const target = filterTutor !== 'all'
            ? reviews.filter(r => r.tutorId === filterTutor)
            : reviews

        if (target.length === 0) return { avg: 0, total: 0, distribution: {} as Record<number, number> }

        const avg = target.reduce((sum, r) => sum + r.rating, 0) / target.length
        const distribution: Record<number, number> = {}
        for (let i = 1; i <= 7; i++) distribution[i] = 0
        target.forEach(r => distribution[r.rating]++)

        return { avg, total: target.length, distribution }
    }, [reviews, filterTutor])

    const handleCopyLink = () => {
        const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
        const params = new URLSearchParams()
        if (linkStudent.trim()) params.set('student', linkStudent.trim())
        if (linkTutor.trim()) params.set('tutor', linkTutor.trim())
        const url = `${baseUrl}/review${params.toString() ? '?' + params.toString() : ''}`

        navigator.clipboard.writeText(url)
        setLinkCopied(true)
        setTimeout(() => setLinkCopied(false), 2000)
    }

    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Average Rating */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                            <Star className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-medium">Rating Rata-rata</p>
                            <p className="text-2xl font-black text-gray-900">
                                {stats.avg > 0 ? stats.avg.toFixed(1) : '—'}
                                <span className="text-sm text-gray-400 font-medium"> / 7</span>
                            </p>
                        </div>
                    </div>
                    {stats.avg > 0 && (
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5, 6, 7].map(s => (
                                <Star
                                    key={s}
                                    className={`w-4 h-4 ${s <= Math.round(stats.avg) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Total Reviews */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-medium">Total Review</p>
                            <p className="text-2xl font-black text-gray-900">{stats.total}</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400">
                        {stats.total > 0
                            ? `${reviews.filter(r => r.comment || r.testimoni).length} dengan komentar`
                            : 'Belum ada review'
                        }
                    </p>
                </motion.div>

                {/* Rating Distribution */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-emerald-600" />
                        </div>
                        <p className="text-xs text-gray-500 font-medium">Distribusi</p>
                    </div>
                    <div className="space-y-1">
                        {[7, 6, 5, 4, 3, 2, 1].map(rating => {
                            const count = stats.distribution[rating] || 0
                            const pct = stats.total > 0 ? (count / stats.total) * 100 : 0
                            return (
                                <div key={rating} className="flex items-center gap-2 text-xs">
                                    <span className="w-3 text-right font-bold text-gray-500">{rating}</span>
                                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${pct}%` }}
                                            transition={{ delay: 0.3 + rating * 0.05, duration: 0.5 }}
                                            className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                                        />
                                    </div>
                                    <span className="w-6 text-right text-gray-400">{count}</span>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <div className="flex flex-wrap gap-2 items-center">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari nama / komentar..."
                            className="pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 w-56"
                        />
                    </div>

                    {/* Sort */}
                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as 'date' | 'rating')}
                            className="appearance-none pl-3 pr-8 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-primary cursor-pointer"
                        >
                            <option value="date">Terbaru</option>
                            <option value="rating">Rating Tertinggi</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>

                    {/* Tutor filter (admin only) */}
                    {isAdmin && tutorOptions.length > 1 && (
                        <div className="relative">
                            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <select
                                value={filterTutor}
                                onChange={(e) => setFilterTutor(e.target.value)}
                                className="appearance-none pl-9 pr-8 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-primary cursor-pointer"
                            >
                                <option value="all">Semua Tutor</option>
                                {tutorOptions.map(t => (
                                    <option key={t.id} value={t.id}>{t.name}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    )}
                </div>

                {/* Generate Link (admin only) */}
                {isAdmin && (
                    <button
                        onClick={() => setShowLinkGen(!showLinkGen)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-blue-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-sm"
                    >
                        <Link2 className="w-4 h-4" />
                        Generate Link
                    </button>
                )}
            </div>

            {/* Generate Link Panel */}
            <AnimatePresence>
                {showLinkGen && isAdmin && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5">
                            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <ExternalLink className="w-4 h-4 text-blue-600" />
                                Generate Link Review
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Buat link pre-filled untuk dikirim ke siswa via WhatsApp. Nama & tutor otomatis terisi.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="text"
                                    value={linkStudent}
                                    onChange={(e) => setLinkStudent(e.target.value)}
                                    placeholder="Nama siswa (opsional)"
                                    className="flex-1 px-3 py-2 rounded-lg border border-blue-200 text-sm outline-none focus:border-blue-400 bg-white"
                                />
                                <input
                                    type="text"
                                    value={linkTutor}
                                    onChange={(e) => setLinkTutor(e.target.value)}
                                    placeholder="Nama tutor (opsional)"
                                    className="flex-1 px-3 py-2 rounded-lg border border-blue-200 text-sm outline-none focus:border-blue-400 bg-white"
                                />
                                <button
                                    onClick={handleCopyLink}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${linkCopied
                                        ? 'bg-green-500 text-white'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                >
                                    {linkCopied ? (
                                        <><Check className="w-4 h-4" /> Copied!</>
                                    ) : (
                                        <><Copy className="w-4 h-4" /> Copy Link</>
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Reviews List */}
            {filteredReviews.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16 bg-white rounded-2xl border border-gray-200"
                >
                    <Star className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Belum ada review</p>
                    <p className="text-gray-400 text-sm mt-1">Review dari siswa akan muncul di sini</p>
                </motion.div>
            ) : (
                <div className="space-y-3">
                    {filteredReviews.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                    {/* Header */}
                                    <div className="flex items-center gap-2 flex-wrap mb-2">
                                        <span className="font-bold text-gray-900">{review.studentName}</span>
                                        {isAdmin && (
                                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">
                                                → {review.tutorName}
                                            </span>
                                        )}
                                        <span className="text-xs text-gray-400">
                                            {new Date(review.createdAt).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5, 6, 7].map(s => (
                                                <Star
                                                    key={s}
                                                    className={`w-4 h-4 ${s <= review.rating
                                                        ? 'text-amber-400 fill-amber-400'
                                                        : 'text-gray-200'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm font-bold text-gray-600">
                                            {RATING_LABELS[review.rating]?.emoji} {RATING_LABELS[review.rating]?.label}
                                        </span>
                                    </div>

                                    {/* Comment */}
                                    {review.comment && (
                                        <div className="mb-1">
                                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Saran: </span>
                                            <span className="text-sm text-gray-700">{review.comment}</span>
                                        </div>
                                    )}

                                    {/* Testimoni */}
                                    {review.testimoni && (
                                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg px-3 py-2 mt-2 border border-amber-100">
                                            <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">Testimoni: </span>
                                            <span className="text-sm text-gray-700 italic">&ldquo;{review.testimoni}&rdquo;</span>
                                        </div>
                                    )}
                                </div>

                                {/* Big rating badge */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                                    <span className="text-lg font-black text-amber-700">{review.rating}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    )
}
