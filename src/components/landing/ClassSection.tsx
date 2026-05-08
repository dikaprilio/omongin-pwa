'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

const classes = [
    {
        title: 'Speaking for Adults',
        subtitle: 'Talk & Chill',
        description: 'Ngobrol bahasa Inggris lancar untuk kerja, traveling, dan pergaulan.',
        features: [
            'Topik profesional & santai',
            'Etika bisnis',
            'Phrasing natural',
            'Membangun kepercayaan diri',
        ],
        price: 'Rp70.000',
        period: '/ 1x pertemuan',
        groupPriceFrom: 'Rp50.000',
        gradient: 'from-blue-600 to-indigo-600',
        shadowColor: 'shadow-blue-200',
        buttonColor: 'bg-blue-600',
        headerColor: 'bg-gradient-to-br from-blue-600 to-indigo-700',
    },
    {
        title: 'Speaking for Kids',
        subtitle: 'Fun & Active',
        description: 'Belajar ngomong Inggris seru lewat games dan cerita.',
        features: [
            'Games & cerita seru',
            'Belajar interaktif',
            'Topik ramah anak',
            'Latihan pronunciation',
        ],
        price: 'Rp70.000',
        period: '/ 1x pertemuan',
        groupPriceFrom: 'Rp50.000',
        gradient: 'from-pink-500 to-purple-500',
        shadowColor: 'shadow-pink-200',
        buttonColor: 'bg-pink-500',
        headerColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
    },
    {
        title: 'Interview Prep',
        subtitle: 'Career Boost',
        description: 'Siap hadapi wawancara kerja dengan jawaban yang tenang & berkesan.',
        features: [
            'Simulasi wawancara',
            'Kosakata profesional',
            'Struktur jawaban',
            'Feedback personal',
        ],
        price: 'Rp85.000',
        period: '/ 1x pertemuan',
        gradient: 'from-purple-600 to-indigo-600',
        shadowColor: 'shadow-purple-200',
        buttonColor: 'bg-purple-600',
        headerColor: 'bg-gradient-to-br from-violet-600 to-purple-700',
    },
    {
        title: 'Basic English (Adults)',
        subtitle: 'Foundation',
        description: 'Pahami dasar grammar dari nol untuk komunikasi yang benar.',
        features: [
            'Grammar esensial',
            'Struktur kalimat',
            'Dasar menulis',
            'Penggunaan sehari-hari',
        ],
        price: 'Rp60.000',
        period: '/ 1x pertemuan',
        groupPriceFrom: 'Rp40.000',
        gradient: 'from-emerald-500 to-teal-600',
        shadowColor: 'shadow-emerald-200',
        buttonColor: 'bg-emerald-600',
        headerColor: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    },
    {
        title: 'Basic English (Kids)',
        subtitle: 'Kids Foundation',
        description: 'Pondasi grammar kuat untuk anak dengan metode yang ringan.',
        features: [
            'Aturan grammar seru',
            'Kalimat sederhana',
            'Dukungan sekolah',
            'Latihan menarik',
        ],
        price: 'Rp60.000',
        period: '/ 1x pertemuan',
        groupPriceFrom: 'Rp40.000',
        gradient: 'from-teal-400 to-cyan-500',
        shadowColor: 'shadow-teal-200',
        buttonColor: 'bg-teal-500',
        headerColor: 'bg-gradient-to-br from-cyan-500 to-teal-600',
    },
    {
        title: 'Presentation Skills',
        subtitle: 'Public Speaking',
        description: 'Presentasi percaya diri dengan struktur dan penyampaian yang kuat.',
        features: [
            'Menyusun ide',
            'Bahasa tubuh',
            'Proyeksi suara',
            'Penyampaian slide',
        ],
        price: 'Rp85.000',
        period: '/ 1x pertemuan',
        groupPriceFrom: undefined,
        gradient: 'from-orange-500 to-red-500',
        shadowColor: 'shadow-orange-200',
        buttonColor: 'bg-orange-600',
        headerColor: 'bg-gradient-to-br from-orange-500 to-amber-600',
    },
]

export default function ClassSection() {
    return (
        <section id="classes" className="py-24 relative overflow-hidden">
            {/* Background Doodles - Kept subtle */}
            <div className="absolute top-20 left-10 opacity-10 rotate-12 pointer-events-none">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-blue-500 w-32 h-32">
                    <path d="M50 0 L100 100 L0 100 Z" />
                </svg>
            </div>
            <div className="absolute bottom-20 right-10 opacity-10 -rotate-12 pointer-events-none">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-yellow-500 w-40 h-40">
                    <circle cx="50" cy="50" r="50" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 tracking-tight transform -rotate-2">
                            Pilihan <span className="text-blue-600 relative inline-block">
                                Kelas
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 font-handwriting transform rotate-1 max-w-2xl mx-auto">
                            Sesuaikan dengan kebutuhan dan target belajarmu. <br />
                            <span className="font-bold text-gray-800">Semua level welcome!</span>
                        </p>
                        <p className="text-sm text-gray-500 font-medium mt-3">
                            ⏱️ Sesi private: 60 menit | Sesi grup: 75 menit
                        </p>
                    </motion.div>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-8 -mx-4 scrollbar-hide lg:flex-wrap lg:justify-center lg:overflow-visible lg:pb-0 lg:px-0 lg:mx-0">
                    {classes.map((cls, idx) => (
                        <div
                            key={idx}
                            className={`group relative bg-white rounded-none border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden min-w-[85vw] snap-center md:min-w-[calc(50%-1rem)] lg:min-w-0 lg:w-[calc(33.33%-2rem)] animate-fade-in-up hover:shadow-${cls.buttonColor.replace('bg-', '')}/20`}
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            {/* Header Block - Gradient Color */}
                            <div className={`p-8 relative overflow-hidden ${cls.headerColor} text-white`}>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black mb-2 tracking-tight">{cls.title}</h3>
                                    <p className="font-medium text-white/90 text-sm mb-6 flex items-center gap-2">
                                        <Sparkles className="w-4 h-4" />
                                        {cls.subtitle}
                                    </p>

                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-black tracking-tighter">{cls.price}</span>
                                            <span className="text-xs font-bold text-white/80">{cls.period}</span>
                                        </div>
                                        <div className="text-sm font-bold text-white/90 bg-white/20 px-3 py-1 rounded-full inline-block self-start border border-white/30 backdrop-blur-sm shadow-sm">
                                            Lebih hemat{' '}
                                            <span className="text-yellow-300">
                                                Rp{((parseInt(cls.price.replace(/\D/g, '')) * 4 - 20000) / 4).toLocaleString('id-ID')}
                                            </span>
                                            /sesi dengan paket!
                                        </div>
                                        {cls.groupPriceFrom && (
                                            <div className="text-xs font-bold text-white/90 bg-purple-500/40 px-3 py-1 rounded-full inline-block self-start border border-white/30 backdrop-blur-sm shadow-sm">
                                                💰 Grup mulai {cls.groupPriceFrom}/orang (75 menit)
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Subtle Pattern Overlay */}
                                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                            </div>

                            {/* Body */}
                            <div className="p-8 flex flex-col flex-grow bg-white">
                                <p className="text-gray-600 font-medium mb-8 text-sm leading-relaxed min-h-[3rem]">
                                    {cls.description}
                                </p>

                                <div className="space-y-4 mb-8 flex-grow">
                                    {cls.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                                            <div className={`mt-0.5 min-w-[1.25rem] h-5 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center`}>
                                                <Check className="w-3 h-3" strokeWidth={3} />
                                            </div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={`https://wa.me/628978902180?text=${encodeURIComponent(`Halo kak, aku mau tanya tentang kelas ${cls.title}`)}`}
                                    className={`w-full py-4 rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-white ${cls.buttonColor} ${cls.shadowColor}`}
                                >
                                    Daftar Sekarang
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
