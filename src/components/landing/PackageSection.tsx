'use client'

import { motion } from 'framer-motion'
import { Sparkles, Check, ArrowRight, Gift, Zap } from 'lucide-react'
import Link from 'next/link'

const packages = [
    {
        title: 'Paket 4 Sesi',
        subtitle: 'Starter Pack',
        description: 'Mulai perjalanan bahasamu dengan paket bulan pertama yang hemat.',
        discount: 'Hemat Rp20.000',
        formula: 'Dari total biaya kelas normal',
        icon: Gift,
        features: [
            '4x Pertemuan intensif',
            'Bebas pilih jadwal',
            'Materi disesuaikan kustom',
            'Evaluasi akhir bulan',
        ],
        accentColor: 'text-blue-600',
        bgAccent: 'bg-blue-50',
        borderAccent: 'border-blue-200',
        buttonGradient: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
        badgeBg: 'bg-blue-100 text-blue-700',
        iconBg: 'bg-blue-100 text-blue-600',
    },
    {
        title: 'Paket 8 Sesi',
        subtitle: 'Progres Optimal',
        description: 'Pilihan paling ideal untuk melihat perkembangan yang signifikan.',
        discount: 'Hemat Rp60.000',
        formula: 'Dari total biaya kelas normal',
        icon: Zap,
        features: [
            '8x Pertemuan intensif',
            'Prioritas pilih jadwal',
            'Materi terstruktur',
            'Report progress berkala',
        ],
        accentColor: 'text-orange-600',
        bgAccent: 'bg-orange-50',
        borderAccent: 'border-orange-200',
        buttonGradient: 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600',
        badgeBg: 'bg-orange-100 text-orange-700',
        iconBg: 'bg-orange-100 text-orange-600',
        popular: true,
    }
]

export default function PackageSection() {
    return (
        <section id="packages" className="py-24 relative overflow-hidden">
            {/* Background Doodles */}
            <div className="absolute top-20 right-10 opacity-10 rotate-12 pointer-events-none">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-orange-500 w-32 h-32">
                    <rect x="10" y="10" width="80" height="80" rx="15" />
                </svg>
            </div>
            <div className="absolute bottom-20 left-10 opacity-10 -rotate-12 pointer-events-none">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-blue-500 w-40 h-40">
                    <polygon points="50,5 95,97.5 5,97.5" />
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
                        <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 tracking-tight transform -rotate-1">
                            Ambil <span className="text-orange-600 relative inline-block">
                                Paket
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>{' '}
                            Lebih Hemat!
                        </h2>
                        <p className="text-xl text-gray-600 font-handwriting transform rotate-1 max-w-2xl mx-auto">
                            Bebas pilih kelas apa saja! <br />
                            <span className="font-bold text-gray-800">Bayar lebih murah dari per-sesi.</span>
                        </p>
                    </motion.div>
                </div>

                {/* Package Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {packages.map((pkg, idx) => {
                        const IconComponent = pkg.icon
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className={`group relative rounded-3xl border-2 ${pkg.popular ? pkg.borderAccent : 'border-gray-100'} bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden`}
                            >
                                {/* Popular Badge */}
                                {pkg.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-1.5 rounded-full text-xs font-black shadow-lg flex items-center gap-1.5 z-20 whitespace-nowrap">
                                        <Sparkles className="w-3.5 h-3.5" /> PALING HEMAT
                                    </div>
                                )}

                                {/* Card Content */}
                                <div className="p-8 pt-10 flex flex-col flex-grow">
                                    {/* Icon + Title Area */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className={`w-14 h-14 rounded-2xl ${pkg.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-7 h-7" strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-gray-900 tracking-tight">{pkg.title}</h3>
                                            <p className="text-sm font-semibold text-gray-500 flex items-center gap-1.5 mt-0.5">
                                                <Sparkles className="w-3.5 h-3.5" />
                                                {pkg.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Discount Highlight */}
                                    <div className={`${pkg.bgAccent} rounded-2xl p-5 mb-6 border ${pkg.borderAccent}`}>
                                        <p className={`text-3xl font-black ${pkg.accentColor} tracking-tight`}>{pkg.discount}</p>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">{pkg.formula}</p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6">
                                        {pkg.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-3.5 mb-8 flex-grow">
                                        {pkg.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                                                <div className={`w-5 h-5 rounded-full ${pkg.badgeBg} flex items-center justify-center flex-shrink-0`}>
                                                    <Check className="w-3 h-3" strokeWidth={3.5} />
                                                </div>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        href={`/daftar-sesi?package=${encodeURIComponent(pkg.title)}`}
                                        className={`w-full py-4 rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-white ${pkg.buttonGradient}`}
                                    >
                                        Pilih Paket Ini
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Example Calculation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-14 px-4"
                >
                    <div className="inline-block bg-gray-50 rounded-2xl px-6 py-4 border border-gray-100 space-y-2">
                        <p className="text-sm text-gray-500 font-medium max-w-2xl mx-auto">
                            💡 Contoh: Kelas Rp70.000/sesi → Paket 4 Sesi = (Rp70.000 × 4) − Rp20.000 = <span className="font-black text-gray-800">Rp260.000</span>{' '}
                            <span className="text-green-600 font-bold">(Hemat Rp20rb!)</span>
                        </p>
                        <p className="text-xs text-purple-600 font-medium max-w-2xl mx-auto">
                            Harga grup mulai Rp40.000–Rp50.000/orang. Promo paket hanya berlaku untuk kelas privat.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
