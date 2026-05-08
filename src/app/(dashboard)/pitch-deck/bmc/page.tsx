'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
    Maximize,
    Handshake,
    Settings,
    Heart,
    Users,
    Target,
    Gem,
    Megaphone,
    Wallet,
    TrendingUp,
    Zap,
    Crown
} from 'lucide-react'
import Image from 'next/image'

interface BMCBlockProps {
    title: string
    icon: React.ReactNode
    items: string[]
    accentColor: string
    highlight?: boolean
    className?: string
}

function BMCBlock({ title, icon, items, accentColor, highlight, className = '' }: BMCBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -2 }}
            className={`flex flex-col h-full ${className}`}
            style={{ 
                background: highlight 
                    ? `linear-gradient(180deg, #ffffff 0%, ${accentColor}08 100%)`
                    : '#ffffff',
                border: highlight ? `2px solid ${accentColor}40` : '1px solid #e2e8f0',
                borderRadius: '12px',
                boxShadow: highlight 
                    ? `0 4px 20px -4px ${accentColor}30`
                    : '0 2px 8px -2px rgba(0,0,0,0.06)'
            }}
        >
            {/* Header */}
            <div className="px-4 py-3 flex items-center gap-3 border-b border-slate-100">
                <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: accentColor }}
                >
                    {icon}
                </div>
                <span className="text-sm font-bold text-slate-800 uppercase tracking-wide">{title}</span>
                {highlight && <Crown size={16} className="ml-auto" style={{ color: accentColor }} />}
            </div>
            
            {/* Content */}
            <div className="p-4 flex-1">
                <ul className="space-y-2">
                    {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span 
                                className="w-2 h-2 rounded-full mt-2 shrink-0"
                                style={{ backgroundColor: accentColor }}
                            />
                            <span className="text-[13px] text-slate-700 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}

export default function BMCSlidePage() {
    const [isFullscreen, setIsFullscreen] = useState(false)
    const slideRef = useRef<HTMLDivElement>(null)

    const toggleFullscreen = async () => {
        if (!document.fullscreenElement) {
            await slideRef.current?.requestFullscreen()
        } else {
            await document.exitFullscreen()
        }
    }

    useEffect(() => {
        const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement)
        document.addEventListener('fullscreenchange', handleFullscreenChange)
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }, [])

    return (
        <div className={`${isFullscreen ? 'bg-black flex items-center justify-center' : 'min-h-screen bg-slate-100 p-4 sm:p-6'}`}>
            <div className={`${isFullscreen ? 'w-full h-full p-0' : 'max-w-7xl mx-auto'}`}>
                {/* Controls */}
                {!isFullscreen && (
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-slate-800" />
                            <span className="text-sm text-slate-600 font-medium">Slide 2: Business Model Canvas</span>
                        </div>
                        <button
                            onClick={toggleFullscreen}
                            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm text-sm text-slate-600 hover:text-slate-900 transition-all"
                        >
                            <Maximize size={16} />
                            Fullscreen
                        </button>
                    </div>
                )}

                {/* BMC Slide Container */}
                <div
                    ref={slideRef}
                    className={`relative bg-white rounded-2xl overflow-hidden ${
                        isFullscreen ? 'w-full h-full rounded-none' : 'aspect-[16/9]'
                    }`}
                    style={{ 
                        boxShadow: isFullscreen ? 'none' : '0 4px 20px -4px rgba(0,0,0,0.1)',
                        border: '1px solid #e2e8f0'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 to-white" />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col p-8">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-5 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center">
                                    <Image src="/ecc-logo.png" alt="ECC Logo" width={26} height={26} className="object-contain brightness-0 invert" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-bold text-slate-900">Business Model Canvas</h1>
                                    <p className="text-xs text-slate-500">English Chill Course — EdTech Startup</p>
                                </div>
                            </div>
                            <div className="text-xs text-slate-400">InnoVenture IPB University</div>
                        </div>

                        {/* BMC Canvas - Main Rectangle with Outer Border */}
                        <div className="flex-1 rounded-xl overflow-hidden" style={{ border: '2px solid #cbd5e1' }}>
                            {/* TOP SECTION - 5 columns, 2 rows */}
                            <div className="grid grid-cols-5 h-[58%]">
                                {/* Col 1: Key Partnerships - tall (spans 2 rows) */}
                                <div className="row-span-2 border-r border-slate-200">
                                    <BMCBlock
                                        title="Key Partnerships"
                                        icon={<Handshake size={18} />}
                                        accentColor="#64748b"
                                        items={[
                                            "Tutor profesional & native speakers",
                                            "Institusi pendidikan (kampus/sekolah)",
                                            "Platform video conference",
                                            "AI speech recognition providers"
                                        ]}
                                        className="h-full rounded-none border-0 shadow-none"
                                    />
                                </div>

                                {/* Col 2: Key Activities (row 1) + Key Resources (row 2) */}
                                <div className="border-r border-slate-200 flex flex-col">
                                    <div className="flex-1 border-b border-slate-200">
                                        <BMCBlock
                                            title="Key Activities"
                                            icon={<Settings size={18} />}
                                            accentColor="#8b5cf6"
                                            items={[
                                                "Mengelola sesi tutoring 1-on-1",
                                                "Develop konten pembelajaran",
                                                "Marketing & customer acquisition",
                                                "Tutor training & QC"
                                            ]}
                                            className="h-full rounded-none border-0 shadow-none"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <BMCBlock
                                            title="Key Resources"
                                            icon={<Gem size={18} />}
                                            accentColor="#06b6d4"
                                            items={[
                                                "Tutor berkualitas",
                                                "Platform & AI system",
                                                "Bank konten materi",
                                                "Brand & community"
                                            ]}
                                            className="h-full rounded-none border-0 shadow-none"
                                        />
                                    </div>
                                </div>

                                {/* Col 3: Value Propositions - tall (spans 2 rows) */}
                                <div className="row-span-2 border-r border-slate-200">
                                    <BMCBlock
                                        title="Value Propositions"
                                        icon={<Heart size={18} />}
                                        accentColor="#ef4444"
                                        highlight
                                        items={[
                                            "Belajar santai tanpa tekanan",
                                            "Fokus praktik & confidence",
                                            "AI-powered: speaking & interview",
                                            "Schedule fleksibel"
                                        ]}
                                        className="h-full rounded-none border-0 shadow-none"
                                    />
                                </div>

                                {/* Col 4: Customer Relationships (row 1) + Channels (row 2) */}
                                <div className="border-r border-slate-200 flex flex-col">
                                    <div className="flex-1 border-b border-slate-200">
                                        <BMCBlock
                                            title="Customer Relationships"
                                            icon={<Users size={18} />}
                                            accentColor="#10b981"
                                            items={[
                                                "Personal 1-on-1 mentoring",
                                                "24/7 AI feedback",
                                                "Community support",
                                                "Gamified progress"
                                            ]}
                                            className="h-full rounded-none border-0 shadow-none"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <BMCBlock
                                            title="Channels"
                                            icon={<Megaphone size={18} />}
                                            accentColor="#ec4899"
                                            items={[
                                                "Website & mobile platform",
                                                "Instagram & TikTok",
                                                "Kampus partnership",
                                                "Word of mouth"
                                            ]}
                                            className="h-full rounded-none border-0 shadow-none"
                                        />
                                    </div>
                                </div>

                                {/* Col 5: Customer Segments - tall (spans 2 rows) */}
                                <div className="row-span-2">
                                    <BMCBlock
                                        title="Customer Segments"
                                        icon={<Target size={18} />}
                                        accentColor="#f59e0b"
                                        items={[
                                            "Mahasiswa & fresh graduate",
                                            "Job seekers",
                                            "Profesional muda",
                                            "Karyawan upgrade skill"
                                        ]}
                                        className="h-full rounded-none border-0 shadow-none"
                                    />
                                </div>
                            </div>

                            {/* BOTTOM SECTION - 2 blocks filling full width */}
                            <div className="grid grid-cols-2 h-[42%] border-t border-slate-200">
                                {/* Cost Structure - left half (spans under KP + KA/KR) */}
                                <div className="border-r border-slate-200">
                                    <BMCBlock
                                        title="Cost Structure"
                                        icon={<Wallet size={18} />}
                                        accentColor="#475569"
                                        items={[
                                            "Biaya tutor (80% revenue share)",
                                            "Operasional: server, tools, admin",
                                            "Marketing & customer acquisition",
                                            "Pengembangan produk"
                                        ]}
                                        className="h-full rounded-none border-0 shadow-none"
                                    />
                                </div>

                                {/* Revenue Streams - right half (spans under CR/CH + CS) */}
                                <div>
                                    <BMCBlock
                                        title="Revenue Streams"
                                        icon={<TrendingUp size={18} />}
                                        accentColor="#22c55e"
                                        highlight
                                        items={[
                                            "Live Tutoring: Rp50-75k/sesi (20% fee)",
                                            "Produk Digital: E-book, bank soal",
                                            "Subscription: Unlimited AI tools",
                                            "Corporate Training: B2B"
                                        ]}
                                        className="h-full rounded-none border-0 shadow-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-4 flex items-center justify-center gap-4 shrink-0">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100">
                                <Zap size={12} className="text-amber-500" />
                                <span className="text-[11px] text-slate-500">Hybrid: Live Tutoring + SaaS</span>
                            </div>
                            <span className="text-[11px] text-slate-300">englishchillcourse.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
