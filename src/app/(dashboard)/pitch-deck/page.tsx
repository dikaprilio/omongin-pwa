'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import {
    Users,
    BookOpen,
    Video,
    Headphones,
    MessageSquare,
    FileText,
    Maximize,
    Minimize,
    Mic,
    Play,
    ChevronLeft,
    ChevronRight,
    Clock,
    Zap
} from 'lucide-react'
import Image from 'next/image'

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
}

const floatVariants: Variants = {
    animate: {
        y: [-6, 6, -6],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const }
    }
}

// Mock Components that represent actual platform features

// 1. Tutoring Platform Mock (for tutors to focus on tutoring)
function TutoringPlatformMock() {
    return (
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden scale-[0.85] origin-top">
            <div className="bg-[#105cdb] px-3 py-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/30" />
                <div className="w-2 h-2 rounded-full bg-white/30" />
                <div className="w-2 h-2 rounded-full bg-white/30" />
                <span className="text-white/80 text-xs ml-2">Platform Tutoring</span>
            </div>
            <div className="p-3 space-y-2">
                {/* Tutor Dashboard Stats */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-blue-50 rounded-lg p-2 text-center">
                        <div className="text-xs text-blue-600 font-bold">12</div>
                        <div className="text-[8px] text-blue-400">Sesi Aktif</div>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-2 text-center">
                        <div className="text-xs text-emerald-600 font-bold">Rp2.5M</div>
                        <div className="text-[8px] text-emerald-400">Pendapatan</div>
                    </div>
                </div>
                {/* Student List */}
                {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#105cdb] to-[#8b5cf6]" />
                        <div className="flex-1">
                            <div className="h-1.5 bg-slate-200 rounded w-16" />
                            <div className="h-1 bg-slate-100 rounded w-10 mt-1" />
                        </div>
                        <div className="w-5 h-5 rounded bg-[#105cdb]/10 flex items-center justify-center">
                            <Video className="w-3 h-3 text-[#105cdb]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// 2. Live Session Mock
function LiveSessionMock() {
    return (
        <div className="bg-slate-900 rounded-xl shadow-xl overflow-hidden scale-[0.85] origin-top">
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative">
                {/* Video Grid */}
                <div className="absolute inset-2 grid grid-cols-2 gap-2">
                    <div className="bg-slate-700 rounded-lg flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-[#105cdb] flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                        </div>
                    </div>
                    <div className="bg-slate-700 rounded-lg flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                            <Video className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>
                {/* Controls */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-sm" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center">
                        <Mic className="w-3 h-3 text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

// 3. Digital Materials / Slide Deck Mock
function SlideDeckMock() {
    const [slide, setSlide] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => setSlide(s => (s + 1) % 3), 2000)
        return () => clearInterval(interval)
    }, [])
    
    const slides = [
        { bg: 'bg-gradient-to-br from-blue-50 to-white', text: 'Grammar Basics' },
        { bg: 'bg-gradient-to-br from-purple-50 to-white', text: 'Speaking Practice' },
        { bg: 'bg-gradient-to-br from-emerald-50 to-white', text: 'Interview Prep' },
    ]
    
    return (
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 scale-[0.85] origin-top">
            <div className={`aspect-video rounded-lg ${slides[slide].bg} flex items-center justify-center relative overflow-hidden transition-all duration-500`}>
                {/* Decorative elements */}
                <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-white/50" />
                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/50" />
                
                <div className="text-center">
                    <h4 className="text-slate-800 font-bold text-sm">{slides[slide].text}</h4>
                    <div className="flex gap-1 justify-center mt-2">
                        {slides.map((_, i) => (
                            <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === slide ? 'bg-[#105cdb]' : 'bg-slate-300'}`} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-2 px-1">
                <ChevronLeft className="w-4 h-4 text-slate-400" />
                <span className="text-[10px] text-slate-400">Slide {slide + 1}/3</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>
        </div>
    )
}

// 4. AI Speaking Test Mock
function SpeakingTestMock() {
    const [recording, setRecording] = useState(false)
    const [progress, setProgress] = useState(0)
    
    useEffect(() => {
        if (recording) {
            const interval = setInterval(() => {
                setProgress(p => {
                    if (p >= 100) {
                        setRecording(false)
                        return 0
                    }
                    return p + 2
                })
            }, 100)
            return () => clearInterval(interval)
        }
    }, [recording])
    
    return (
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-3 scale-[0.85] origin-top">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <Headphones className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                    <div className="text-xs font-semibold text-slate-800">AI Speaking Test</div>
                    <div className="text-[10px] text-slate-400">Pronunciation Check</div>
                </div>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-3 text-center">
                <p className="text-sm text-slate-600 mb-3">&quot;Hello, how are you today?&quot;</p>
                
                <button 
                    onClick={() => setRecording(!recording)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto transition-all ${
                        recording ? 'bg-red-500 animate-pulse' : 'bg-[#105cdb]'
                    }`}
                >
                    {recording ? <div className="w-3 h-3 bg-white rounded-sm" /> : <Mic className="w-5 h-5 text-white" />}
                </button>
                
                {recording && (
                    <div className="mt-2 h-1 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div 
                            className="h-full bg-[#105cdb]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                )}
                
                {!recording && progress === 0 && (
                    <div className="mt-2 flex justify-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-1 bg-[#105cdb]/30 rounded-full" style={{ height: `${Math.random() * 16 + 4}px` }} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

// 5. Interview Simulator Mock
function InterviewMock() {
    const messages = [
        { type: 'ai', text: 'Tell me about yourself' },
        { type: 'user', text: 'I am a software engineer...' },
        { type: 'ai', text: 'What are your strengths?' },
    ]
    
    return (
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 scale-[0.85] origin-top">
            <div className="bg-gradient-to-r from-[#105cdb] to-purple-600 rounded-t-lg px-3 py-2">
                <span className="text-white text-xs font-medium">AI Interview Coach</span>
            </div>
            <div className="space-y-2 p-2 bg-slate-50 rounded-b-lg h-28 overflow-hidden">
                {messages.map((m, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: m.type === 'ai' ? -10 : 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.5 }}
                        className={`flex ${m.type === 'ai' ? 'justify-start' : 'justify-end'}`}
                    >
                        <div className={`max-w-[80%] px-2 py-1 rounded-lg text-[10px] ${
                            m.type === 'ai' 
                                ? 'bg-white border border-slate-200 text-slate-700' 
                                : 'bg-[#105cdb] text-white'
                        }`}>
                            {m.text}
                        </div>
                    </motion.div>
                ))}
                <div className="flex gap-1 justify-center mt-1">
                    <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" />
                    <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
            </div>
        </div>
    )
}

// 6. RSVP Reading Test Mock - Light Mode Blue Style (matching actual RSVP)
function RSVPMock() {
    const words = ['Reading', 'at', 'the', 'speed', 'of', 'thought']
    const [index, setIndex] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => setIndex(i => (i + 1) % words.length), 400)
        return () => clearInterval(interval)
    }, [])
    
    const currentWord = words[index]
    const orpIndex = Math.floor(currentWord.length * 0.35)
    const leftPart = currentWord.slice(0, orpIndex)
    const centerChar = currentWord[orpIndex]
    const rightPart = currentWord.slice(orpIndex + 1)
    
    return (
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-3 scale-[0.85] origin-top">
            <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-slate-400 font-medium">RSVP Reader</span>
                <span className="text-[10px] text-blue-600 font-bold">350 WPM</span>
            </div>
            <div className="aspect-video bg-white rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                {/* Word display with ORP - matching actual RSVP style */}
                <div className="relative flex items-baseline justify-center">
                    {/* Center guide markers */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-blue-200 -translate-x-1/2" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rotate-45" />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rotate-45" />
                    
                    {/* Word with ORP */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1 }}
                            className="font-mono text-lg flex items-baseline"
                        >
                            <span className="text-slate-500 text-right">{leftPart}</span>
                            <span className="text-blue-600 font-black mx-[1px]">{centerChar}</span>
                            <span className="text-slate-500 text-left">{rightPart}</span>
                        </motion.div>
                    </AnimatePresence>
                </div>
                
                {/* Progress bar */}
                <div className="absolute bottom-2 left-4 right-4 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        style={{ width: `${((index + 1) / words.length) * 100}%` }}
                    />
                </div>
            </div>
            <div className="flex justify-center gap-2 mt-2">
                <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100">
                    <Play className="w-3 h-3 text-blue-600" />
                </div>
                <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-200">
                    <Clock className="w-3 h-3 text-slate-500" />
                </div>
            </div>
        </div>
    )
}

// Feature Card with Mock
interface FeatureCardProps {
    title: string
    description: string
    mock: React.ReactNode
    icon: React.ReactNode
    color: string
}

function FeatureCard({ title, description, mock, icon, color }: FeatureCardProps) {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group relative bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 overflow-hidden flex flex-col"
        >
            {/* Mock Preview Area */}
            <div className="relative h-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    {mock}
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>
            
            {/* Content */}
            <div className="p-4 relative z-10 -mt-2">
                <div className="flex items-center gap-2 mb-1">
                    <div 
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${color}15` }}
                    >
                        <div style={{ color }}>{icon}</div>
                    </div>
                    <h3 className="font-semibold text-slate-800 text-sm">{title}</h3>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">{description}</p>
            </div>
            
            {/* Hover glow */}
            <div 
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity blur-2xl"
                style={{ backgroundColor: color }}
            />
        </motion.div>
    )
}

// Stats Badge
function StatsBadge({ value, label, suffix = '' }: { value: string; label: string; suffix?: string }) {
    return (
        <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center px-4 py-2 bg-white rounded-xl border border-slate-100 shadow-md"
        >
            <span className="text-xl font-bold text-[#105cdb]">{value}{suffix}</span>
            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">{label}</span>
        </motion.div>
    )
}

export default function PitchDeckPage() {
    const [isFullscreen, setIsFullscreen] = useState(false)
    const slideRef = useRef<HTMLDivElement>(null)
    
    // Toggle fullscreen
    const toggleFullscreen = async () => {
        if (!document.fullscreenElement) {
            await slideRef.current?.requestFullscreen()
        } else {
            await document.exitFullscreen()
        }
    }
    
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement)
        }
        document.addEventListener('fullscreenchange', handleFullscreenChange)
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }, [])
    
    const features: FeatureCardProps[] = [
        {
            title: "Platform Tutoring",
            description: "Platform untuk tutor fokus mengajar. Statistik siswa, jadwal, dan pendapatan dalam satu dashboard.",
            mock: <TutoringPlatformMock />,
            icon: <Users size={16} />,
            color: "#105cdb"
        },
        {
            title: "Kelas Live",
            description: "Kelas video interaktif dengan screen sharing dan fitur rekaman.",
            mock: <LiveSessionMock />,
            icon: <Video size={16} />,
            color: "#8b5cf6"
        },
        {
            title: "Materi Digital",
            description: "Kurikulum lengkap: Grammar, Speaking, Interview Preparation.",
            mock: <SlideDeckMock />,
            icon: <BookOpen size={16} />,
            color: "#10b981"
        },
        {
            title: "AI Speaking Test",
            description: "Penilaian pronunciation otomatis dengan feedback AI instan.",
            mock: <SpeakingTestMock />,
            icon: <Headphones size={16} />,
            color: "#f59e0b"
        },
        {
            title: "Simulasi Interview",
            description: "Wawancara simulasi berbasis AI dengan coaching real-time.",
            mock: <InterviewMock />,
            icon: <MessageSquare size={16} />,
            color: "#ef4444"
        },
        {
            title: "RSVP Reading Test",
            description: "Speed reading trainer dengan metode Rapid Serial Visual Presentation.",
            mock: <RSVPMock />,
            icon: <FileText size={16} />,
            color: "#06b6d4"
        }
    ]

    return (
        <div className={`${isFullscreen ? 'bg-black flex items-center justify-center' : 'min-h-screen bg-slate-50 p-4 sm:p-6'}`}>
            <div className={`${isFullscreen ? 'w-full h-full p-0' : 'max-w-6xl mx-auto'}`}>
                {/* Controls - hidden in fullscreen */}
                {!isFullscreen && (
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={toggleFullscreen}
                            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm text-sm text-slate-600 hover:text-[#105cdb] hover:border-[#105cdb]/30 transition-all"
                        >
                            <Maximize size={16} />
                            Fullscreen
                        </button>
                    </div>
                )}

                {/* 16:9 Slide - True fullscreen when in fullscreen mode */}
                <motion.div
                    ref={slideRef}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden ${
                        isFullscreen ? 'w-full h-full rounded-none' : 'aspect-[16/9]'
                    }`}
                    style={isFullscreen ? {} : { boxShadow: '0 25px 80px -20px rgba(16, 92, 219, 0.2)' }}
                >
                    {/* Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div 
                            variants={floatVariants}
                            animate="animate"
                            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#105cdb]/8 to-transparent blur-3xl"
                        />
                        <motion.div 
                            variants={floatVariants}
                            animate="animate"
                            style={{ animationDelay: '2s' }}
                            className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#8b5cf6]/8 to-transparent blur-3xl"
                        />
                        {/* Grid */}
                        <div 
                            className="absolute inset-0 opacity-[0.02]"
                            style={{
                                backgroundImage: `radial-gradient(#105cdb 1px, transparent 1px)`,
                                backgroundSize: '32px 32px'
                            }}
                        />
                    </div>

                    {/* Content - with bigger left/right margins */}
                    <div className="relative z-10 h-full flex flex-col px-16 sm:px-20 py-10 sm:py-12">
                        {/* Header with ECC Logo */}
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-between mb-6"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-lg shadow-[#105cdb]/10 flex items-center justify-center overflow-hidden border border-slate-100">
                                    <Image 
                                        src="/ecc-logo.png" 
                                        alt="ECC Logo" 
                                        width={40} 
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-sm font-bold text-[#105cdb] tracking-wider uppercase">Fitur Platform</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                                <span className="text-xs font-medium">English Chill Course</span>
                            </div>
                        </motion.div>

                        {/* Title - Indonesian */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-6"
                        >
                            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-2">
                                Semua yang Kamu Butuhkan untuk{' '}
                                <span className="text-[#105cdb]">Menguasai Bahasa Inggris</span>
                            </h1>
                            <p className="text-base text-slate-500 max-w-2xl">
                                Ekosistem EdTech komprehensif yang menggabungkan platform tutoring 
                                dengan tools pembelajaran SaaS berbasis AI
                            </p>
                        </motion.div>

                        {/* Features Grid */}
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-3 gap-4 flex-1"
                        >
                            {features.map((feature, index) => (
                                <FeatureCard key={index} {...feature} />
                            ))}
                        </motion.div>

                        {/* Stats Row - Indonesian */}
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-slate-100"
                        >
                            <StatsBadge value="2" label="Sumber Pendapatan" />
                            <StatsBadge value="20" label="Komisi" suffix="%" />
                            <StatsBadge value="60-75" label="Margin SaaS" suffix="%" />
                            <StatsBadge value="50-75K" label="Per Sesi" />
                            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                                <Zap className="w-4 h-4 text-amber-500" />
                                <span className="text-xs font-medium text-amber-700">Pembelajaran Gamified</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer - Indonesian */}
                    <div className="absolute bottom-3 left-16 right-16 flex justify-between items-center text-[10px] text-slate-300">
                        <span>InnoVenture IPB University</span>
                        <span>Slide 1: Fitur Utama</span>
                    </div>
                </motion.div>

                {/* Help text - Indonesian */}
                {!isFullscreen && (
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-center text-slate-400 text-xs mt-4"
                    >
                        Klik Fullscreen untuk mode presentasi • Screenshot untuk pitch deck • Format 16:9
                    </motion.p>
                )}
            </div>
        </div>
    )
}
