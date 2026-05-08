'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
    FileText, Sparkles, Mic, MessageSquare, ChevronRight, CheckCircle2, Square, 
    Download, FileUp, X, Code, BarChart3, Palette, Database, Megaphone, 
    Handshake, Landmark, Users, Settings, Briefcase, Rocket, Building2, 
    Stethoscope, GraduationCap, ShoppingCart, Factory, Building, 
    LandmarkIcon, TrendingUp, Award, Brain, Target, Zap, Lightbulb,
    Timer, ChevronLeft, RotateCcw, Trophy, Star, ThumbsUp, AlertCircle,
    Mic2, Keyboard, FileCheck, Loader, Waves, Cpu, Globe, LineChart,
    Wallet, HeartPulse, BookOpen, Store, Hammer, Scale, Crown, Sparkle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { StudentLayout } from '@/components/layouts/StudentLayout'
import { extractTextFromPDF } from '@/lib/utils/pdf'
import VoiceRecorder from '@/components/interview/VoiceRecorder'
import { useRole } from '@/hooks/useRole'
import { domToJpeg } from 'modern-screenshot'
import jsPDF from 'jspdf'

const STORAGE_KEY = 'interview_sim_state'

// Types
type Stage = 'welcome' | 'context' | 'upload' | 'processing' | 'interview' | 'summary'

interface Question {
    id: number
    text: string
    category: string
}

interface Answer {
    questionId: number
    text: string
    audioUrl?: string
    score?: number
    feedback?: string
}

interface InterviewContext {
    role: string
    industry: string
    experience: string
}

// Role options with Lucide icons
const ROLE_OPTIONS = [
    { id: 'software', label: 'Software Engineer', icon: Code, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { id: 'product', label: 'Product Manager', icon: BarChart3, color: 'text-purple-500', bgColor: 'bg-purple-50' },
    { id: 'design', label: 'UI/UX Designer', icon: Palette, color: 'text-pink-500', bgColor: 'bg-pink-50' },
    { id: 'data', label: 'Data Analyst', icon: Database, color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
    { id: 'marketing', label: 'Marketing', icon: Megaphone, color: 'text-orange-500', bgColor: 'bg-orange-50' },
    { id: 'sales', label: 'Sales', icon: Handshake, color: 'text-green-500', bgColor: 'bg-green-50' },
    { id: 'finance', label: 'Finance', icon: Landmark, color: 'text-amber-500', bgColor: 'bg-amber-50' },
    { id: 'hr', label: 'HR / People Ops', icon: Users, color: 'text-rose-500', bgColor: 'bg-rose-50' },
    { id: 'operations', label: 'Operations', icon: Settings, color: 'text-slate-500', bgColor: 'bg-slate-50' },
    { id: 'other', label: 'Other', icon: Briefcase, color: 'text-indigo-500', bgColor: 'bg-indigo-50' },
]

// Industry options with Lucide icons
const INDUSTRY_OPTIONS = [
    { id: 'tech', label: 'Tech / Startup', icon: Rocket, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { id: 'finance', label: 'Finance / Banking', icon: Building2, color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
    { id: 'healthcare', label: 'Healthcare', icon: HeartPulse, color: 'text-rose-500', bgColor: 'bg-rose-50' },
    { id: 'education', label: 'Education', icon: GraduationCap, color: 'text-amber-500', bgColor: 'bg-amber-50' },
    { id: 'retail', label: 'Retail / E-commerce', icon: ShoppingCart, color: 'text-orange-500', bgColor: 'bg-orange-50' },
    { id: 'manufacturing', label: 'Manufacturing', icon: Factory, color: 'text-slate-500', bgColor: 'bg-slate-50' },
    { id: 'consulting', label: 'Consulting', icon: LandmarkIcon, color: 'text-purple-500', bgColor: 'bg-purple-50' },
    { id: 'government', label: 'Government', icon: Building, color: 'text-indigo-500', bgColor: 'bg-indigo-50' },
]

// Experience options with icons and descriptions
const EXPERIENCE_OPTIONS = [
    { id: 'intern', label: 'Internship', desc: 'First job experience', icon: BookOpen, level: 1 },
    { id: 'entry', label: 'Entry Level', desc: '0-2 years', icon: TrendingUp, level: 2 },
    { id: 'mid', label: 'Mid Level', desc: '3-5 years', icon: Target, level: 3 },
    { id: 'senior', label: 'Senior', desc: '6-10 years', icon: Award, level: 4 },
    { id: 'lead', label: 'Lead / Manager', desc: '10+ years', icon: Crown, level: 5 },
]

// Question category icons
const CATEGORY_ICONS: Record<string, { icon: React.ElementType; color: string; bgColor: string; label: string }> = {
    behavioral: { icon: Brain, color: 'text-purple-500', bgColor: 'bg-purple-100', label: 'Behavioral' },
    technical: { icon: Cpu, color: 'text-blue-500', bgColor: 'bg-blue-100', label: 'Technical' },
    situational: { icon: Globe, color: 'text-emerald-500', bgColor: 'bg-emerald-100', label: 'Situational' },
    experience: { icon: Briefcase, color: 'text-amber-500', bgColor: 'bg-amber-100', label: 'Experience' },
    motivation: { icon: Sparkle, color: 'text-rose-500', bgColor: 'bg-rose-100', label: 'Motivation' },
}

// Animated loading steps
const PROCESSING_STEPS = [
    { id: 'scan', label: 'Scanning CV', icon: FileText, description: 'Extracting key information' },
    { id: 'analyze', label: 'Analyzing Skills', icon: Brain, description: 'Identifying your strengths' },
    { id: 'tailor', label: 'Tailoring Questions', icon: Target, description: 'Creating personalized questions' },
    { id: 'ready', label: 'Ready!', icon: Sparkles, description: 'Your interview is prepared' },
]

export default function InterviewSimPage() {
    const { isAdmin } = useRole()

    const [stage, setStage] = useState<Stage>('welcome')
    const [cvText, setCvText] = useState<string>('')
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState<Answer[]>([])
    const [isProcessing, setIsProcessing] = useState(false)

    // Interview context (for AI tailoring)
    const [interviewContext, setInterviewContext] = useState<InterviewContext>({
        role: '',
        industry: '',
        experience: ''
    })
    const [contextStep, setContextStep] = useState(0)

    // PDF upload state
    const [fileName, setFileName] = useState<string | null>(null)
    const [parsing, setParsing] = useState(false)
    const [manualCvText, setManualCvText] = useState('')
    const [error, setError] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Load state from localStorage
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
            try {
                const parsed = JSON.parse(saved)
                if (parsed.stage && parsed.stage !== 'welcome') {
                    setStage(parsed.stage)
                    if (parsed.cvText) setCvText(parsed.cvText)
                    if (parsed.manualCvText) setManualCvText(parsed.manualCvText)
                    if (parsed.questions) setQuestions(parsed.questions)
                    if (parsed.currentQuestionIndex !== undefined) setCurrentQuestionIndex(parsed.currentQuestionIndex)
                    if (parsed.answers) setAnswers(parsed.answers)
                    if (parsed.interviewContext) setInterviewContext(parsed.interviewContext)
                }
            } catch (e) {
                console.error('Failed to load saved state', e)
            }
        }
    }, [])

    // Save state changes
    useEffect(() => {
        if (stage === 'welcome') return
        const stateToSave = { stage, cvText, manualCvText, questions, currentQuestionIndex, answers, interviewContext }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave))
    }, [stage, cvText, manualCvText, questions, currentQuestionIndex, answers, interviewContext])

    const handleStart = () => setStage('context')

    const handleRestart = () => {
        localStorage.removeItem(STORAGE_KEY)
        setStage('welcome')
        setQuestions([])
        setAnswers([])
        setCurrentQuestionIndex(0)
        setCvText('')
        setManualCvText('')
        setInterviewContext({ role: '', industry: '', experience: '' })
        setContextStep(0)
    }

    async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (!file) return

        if (!file.name.toLowerCase().endsWith('.pdf')) {
            setError('Only PDF files are supported')
            return
        }
        if (file.size > 5 * 1024 * 1024) {
            setError('File size must be less than 5MB')
            return
        }

        setParsing(true)
        setError(null)
        setFileName(file.name)

        try {
            const result = await extractTextFromPDF(file)
            if (!result.text || result.text.length < 50) {
                throw new Error('Could not extract text from PDF. The file may be image-based or empty.')
            }
            setManualCvText(result.text)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to parse PDF')
            setFileName(null)
        } finally {
            setParsing(false)
        }
    }

    function clearFile() {
        setManualCvText('')
        setFileName(null)
        setError(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
    }

    const handleSubmit = async () => {
        if (!manualCvText || manualCvText.length < 50) {
            setError('Please paste at least 50 characters of your CV or upload a PDF')
            return
        }

        setStage('processing')
        setIsProcessing(true)
        setError(null)

        try {
            setCvText(manualCvText.slice(0, 8000))
            const questionsRes = await fetch('/api/interview/generate-questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cvText: manualCvText.slice(0, 4000),
                    context: interviewContext
                })
            })

            if (!questionsRes.ok) {
                const errorData = await questionsRes.json().catch(() => ({}))
                throw new Error(errorData.details || errorData.error || 'Failed to generate questions')
            }
            const { questions: generatedQuestions } = await questionsRes.json()
            setQuestions(generatedQuestions)

            setTimeout(() => {
                setStage('interview')
                setIsProcessing(false)
            }, 1500)
        } catch (err) {
            console.error('Error processing CV:', err)
            setError(err instanceof Error ? err.message : 'Failed to process CV')
            setIsProcessing(false)
            setStage('upload')
        }
    }

    // Helper to get category config
    const getCategoryConfig = (category: string) => {
        return CATEGORY_ICONS[category.toLowerCase()] || CATEGORY_ICONS.behavioral
    }

    return (
        <StudentLayout>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 pt-24">
                <AnimatePresence mode="wait">
                    {/* Welcome Stage */}
                    {stage === 'welcome' && (
                        <WelcomeStage onStart={handleStart} />
                    )}

                    {/* Context Stage */}
                    {stage === 'context' && (
                        <ContextStage 
                            contextStep={contextStep}
                            setContextStep={setContextStep}
                            interviewContext={interviewContext}
                            setInterviewContext={setInterviewContext}
                            setStage={setStage}
                        />
                    )}

                    {/* Upload Stage */}
                    {stage === 'upload' && (
                        <UploadStage
                            fileName={fileName}
                            parsing={parsing}
                            manualCvText={manualCvText}
                            setManualCvText={setManualCvText}
                            error={error}
                            fileInputRef={fileInputRef}
                            handleFileUpload={handleFileUpload}
                            clearFile={clearFile}
                            handleSubmit={handleSubmit}
                            onBack={() => setStage('context')}
                        />
                    )}

                    {/* Processing Stage */}
                    {stage === 'processing' && (
                        <ProcessingStage />
                    )}

                    {/* Interview Stage */}
                    {stage === 'interview' && (
                        <InterviewStage
                            questions={questions}
                            currentIndex={currentQuestionIndex}
                            answers={answers}
                            isPaidUser={isAdmin}
                            onAnswer={(answer) => {
                                setAnswers([...answers, answer])
                                if (currentQuestionIndex < questions.length - 1) {
                                    setCurrentQuestionIndex(currentQuestionIndex + 1)
                                } else {
                                    setStage('summary')
                                }
                            }}
                            getCategoryConfig={getCategoryConfig}
                        />
                    )}

                    {/* Summary Stage */}
                    {stage === 'summary' && (
                        <SummaryStage
                            questions={questions}
                            answers={answers}
                            onRestart={handleRestart}
                        />
                    )}
                </AnimatePresence>
            </div>
        </StudentLayout>
    )
}

// ==================== STAGE COMPONENTS ====================

function WelcomeStage({ onStart }: { onStart: () => void }) {
    const features = [
        { icon: FileUp, label: 'Upload CV', color: 'text-blue-500', bgColor: 'bg-blue-50' },
        { icon: Sparkles, label: 'AI Questions', color: 'text-purple-500', bgColor: 'bg-purple-50' },
        { icon: MessageSquare, label: 'Get Feedback', color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
    ]

    return (
        <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-[80vh] flex items-center justify-center p-6"
        >
            <div className="max-w-2xl w-full text-center">
                {/* Animated Icon Stack */}
                <motion.div className="relative w-32 h-32 mx-auto mb-8">
                    <motion.div
                        animate={{ 
                            y: [0, -10, 0],
                            rotate: [0, 5, 0, -5, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/30"
                    >
                        <Mic className="w-16 h-16 text-white" />
                    </motion.div>
                    {/* Floating particles */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"
                            style={{ 
                                top: `${20 + i * 30}%`, 
                                right: i === 1 ? '10%' : '-10%',
                                left: i === 0 ? '-10%' : undefined
                            }}
                            animate={{ 
                                y: [0, -20, 0],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ 
                                duration: 2 + i * 0.5, 
                                repeat: Infinity,
                                delay: i * 0.3 
                            }}
                        />
                    ))}
                </motion.div>

                {/* Title with gradient */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-6xl font-bold mb-4"
                >
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Interview Simulator
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-slate-500 mb-10 max-w-lg mx-auto leading-relaxed"
                >
                    Practice with AI-powered interviews tailored to your CV and target role
                </motion.p>

                {/* Features with animated cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={cn(
                                'flex items-center gap-3 px-5 py-3 rounded-2xl border shadow-sm transition-all cursor-default',
                                'bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-md'
                            )}
                        >
                            <div className={cn('p-2 rounded-xl', feature.bgColor)}>
                                <feature.icon className={cn('w-5 h-5', feature.color)} />
                            </div>
                            <span className="font-medium text-slate-700">{feature.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button with shine effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, type: 'spring' }}
                >
                    <Button
                        size="lg"
                        onClick={onStart}
                        className="relative h-16 px-10 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden group"
                    >
                        <span className="relative z-10 flex items-center">
                            Start Practice
                            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                        {/* Shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                            animate={{ x: ['-200%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        />
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    )
}

function ContextStage({ 
    contextStep, setContextStep, interviewContext, setInterviewContext, setStage 
}: {
    contextStep: number
    setContextStep: (step: number) => void
    interviewContext: InterviewContext
    setInterviewContext: (ctx: InterviewContext) => void
    setStage: (stage: Stage) => void
}) {
    const steps = [
        { label: 'Role', icon: Briefcase },
        { label: 'Industry', icon: Building2 },
        { label: 'Experience', icon: TrendingUp },
    ]

    return (
        <motion.div
            key="context"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="min-h-[80vh] flex items-center justify-center p-6"
        >
            <div className="max-w-3xl w-full">
                {/* Progress Steps */}
                <div className="mb-10">
                    <div className="flex items-center justify-center gap-2">
                        {steps.map((step, i) => (
                            <div key={i} className="flex items-center">
                                <motion.div
                                    className={cn(
                                        'flex items-center gap-2 px-4 py-2 rounded-full transition-all',
                                        contextStep === i 
                                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
                                            : contextStep > i
                                                ? 'bg-green-500 text-white'
                                                : 'bg-slate-200 text-slate-500'
                                    )}
                                    animate={contextStep === i ? { scale: [1, 1.05, 1] } : {}}
                                    transition={{ duration: 0.5 }}
                                >
                                    <step.icon className="w-4 h-4" />
                                    <span className="text-sm font-medium hidden sm:inline">{step.label}</span>
                                </motion.div>
                                {i < steps.length - 1 && (
                                    <div className={cn(
                                        'w-8 h-0.5 mx-2 transition-all',
                                        contextStep > i ? 'bg-green-500' : 'bg-slate-200'
                                    )} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {/* Step 1: Role */}
                    {contextStep === 0 && (
                        <motion.div
                            key="role"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="text-center"
                        >
                            <h2 className="text-3xl font-bold text-slate-800 mb-3">What role are you applying for?</h2>
                            <p className="text-slate-500 mb-10">Select the position that best matches your target</p>

                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                                {ROLE_OPTIONS.map((role, i) => (
                                    <motion.button
                                        key={role.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => {
                                            setInterviewContext({ ...interviewContext, role: role.id })
                                            setContextStep(1)
                                        }}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={cn(
                                            'p-5 rounded-2xl border-2 transition-all text-center',
                                            interviewContext.role === role.id
                                                ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/20'
                                                : 'border-slate-200 hover:border-blue-300 bg-white hover:shadow-md'
                                        )}
                                    >
                                        <div className={cn('w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center', role.bgColor)}>
                                            <role.icon className={cn('w-6 h-6', role.color)} />
                                        </div>
                                        <span className="text-sm font-medium text-slate-700">{role.label}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Industry */}
                    {contextStep === 1 && (
                        <motion.div
                            key="industry"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="text-center"
                        >
                            <h2 className="text-3xl font-bold text-slate-800 mb-3">Which industry?</h2>
                            <p className="text-slate-500 mb-10">This helps us tailor the interview context</p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {INDUSTRY_OPTIONS.map((industry, i) => (
                                    <motion.button
                                        key={industry.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => {
                                            setInterviewContext({ ...interviewContext, industry: industry.id })
                                            setContextStep(2)
                                        }}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={cn(
                                            'p-5 rounded-2xl border-2 transition-all text-center',
                                            interviewContext.industry === industry.id
                                                ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/20'
                                                : 'border-slate-200 hover:border-blue-300 bg-white hover:shadow-md'
                                        )}
                                    >
                                        <div className={cn('w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center', industry.bgColor)}>
                                            <industry.icon className={cn('w-6 h-6', industry.color)} />
                                        </div>
                                        <span className="text-sm font-medium text-slate-700">{industry.label}</span>
                                    </motion.button>
                                ))}
                            </div>

                            <button
                                onClick={() => setContextStep(0)}
                                className="mt-8 flex items-center gap-2 mx-auto text-slate-500 hover:text-slate-700 transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                <span className="text-sm">Back</span>
                            </button>
                        </motion.div>
                    )}

                    {/* Step 3: Experience */}
                    {contextStep === 2 && (
                        <motion.div
                            key="experience"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="text-center"
                        >
                            <h2 className="text-3xl font-bold text-slate-800 mb-3">What's your experience level?</h2>
                            <p className="text-slate-500 mb-10">We'll adjust the difficulty accordingly</p>

                            <div className="flex flex-col gap-4 max-w-lg mx-auto">
                                {EXPERIENCE_OPTIONS.map((exp, i) => (
                                    <motion.button
                                        key={exp.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        onClick={() => {
                                            setInterviewContext({ ...interviewContext, experience: exp.id })
                                            setStage('upload')
                                        }}
                                        whileHover={{ x: 4, scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        className={cn(
                                            'p-5 rounded-2xl border-2 transition-all flex items-center gap-4 text-left',
                                            interviewContext.experience === exp.id
                                                ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/20'
                                                : 'border-slate-200 hover:border-blue-300 bg-white hover:shadow-md'
                                        )}
                                    >
                                        <div className="flex items-center gap-3 flex-1">
                                            <div className={cn(
                                                'w-12 h-12 rounded-xl flex items-center justify-center transition-colors',
                                                interviewContext.experience === exp.id ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500'
                                            )}>
                                                <exp.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <span className="font-semibold text-slate-700 block">{exp.label}</span>
                                                <span className="text-sm text-slate-400">{exp.desc}</span>
                                            </div>
                                        </div>
                                        {/* Level indicators */}
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, j) => (
                                                <div
                                                    key={j}
                                                    className={cn(
                                                        'w-2 h-2 rounded-full transition-colors',
                                                        j < exp.level 
                                                            ? interviewContext.experience === exp.id ? 'bg-blue-500' : 'bg-slate-300'
                                                            : 'bg-slate-100'
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>

                            <button
                                onClick={() => setContextStep(1)}
                                className="mt-8 flex items-center gap-2 mx-auto text-slate-500 hover:text-slate-700 transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                <span className="text-sm">Back</span>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

function UploadStage({ 
    fileName, parsing, manualCvText, setManualCvText, error, 
    fileInputRef, handleFileUpload, clearFile, handleSubmit, onBack 
}: {
    fileName: string | null
    parsing: boolean
    manualCvText: string
    setManualCvText: (text: string) => void
    error: string | null
    fileInputRef: React.RefObject<HTMLInputElement | null>
    handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
    clearFile: () => void
    handleSubmit: () => void
    onBack: () => void
}) {
    return (
        <motion.div
            key="upload"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="min-h-[80vh] flex items-center justify-center p-6"
        >
            <div className="max-w-2xl w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                        <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Upload Your CV</h2>
                    <p className="text-slate-500">Upload PDF or paste your CV content</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="p-8 shadow-lg border-slate-100">
                        {/* PDF Upload */}
                        <div className="mb-6">
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf"
                                onChange={handleFileUpload}
                                className="hidden"
                                id="pdf-upload"
                            />

                            {fileName ? (
                                <motion.div 
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                                        <FileCheck className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-green-800 truncate">{fileName}</p>
                                        <p className="text-sm text-green-600">Successfully uploaded</p>
                                    </div>
                                    <button
                                        onClick={clearFile}
                                        className="p-2 hover:bg-green-100 rounded-xl transition-colors"
                                    >
                                        <X className="w-5 h-5 text-green-600" />
                                    </button>
                                </motion.div>
                            ) : (
                                <label
                                    htmlFor="pdf-upload"
                                    className={cn(
                                        'flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-2xl cursor-pointer transition-all',
                                        parsing
                                            ? 'border-blue-400 bg-blue-50/50'
                                            : 'border-slate-300 hover:border-blue-400 hover:bg-blue-50/30'
                                    )}
                                >
                                    {parsing ? (
                                        <div className="text-center">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-100 flex items-center justify-center"
                                            >
                                                <Loader className="w-6 h-6 text-blue-600" />
                                            </motion.div>
                                            <span className="text-blue-600 font-medium">Reading PDF...</span>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="w-16 h-16 mb-4 rounded-2xl bg-slate-100 flex items-center justify-center">
                                                <FileUp className="w-8 h-8 text-slate-400" />
                                            </div>
                                            <span className="text-slate-700 font-medium mb-1">Upload PDF CV</span>
                                            <span className="text-sm text-slate-400">Maximum file size 5MB</span>
                                        </>
                                    )}
                                </label>
                            )}
                        </div>

                        <div className="flex items-center gap-4 my-6">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                            <span className="text-sm text-slate-400 font-medium">or paste text</span>
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                        </div>

                        <textarea
                            value={manualCvText}
                            onChange={(e) => setManualCvText(e.target.value)}
                            placeholder="Paste your CV/Resume content here...

Example:
John Doe
Software Engineer with 5 years experience...
Skills: React, Node.js, Python...
Experience: 
- Company A (2020-2023): Built web applications...
- Company B (2018-2020): Developed APIs..."
                            className="w-full h-56 p-5 border border-slate-200 rounded-2xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm leading-relaxed"
                        />

                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center gap-2"
                            >
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                {error}
                            </motion.div>
                        )}

                        <div className="flex justify-between items-center mt-6">
                            <button
                                onClick={onBack}
                                className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors px-4 py-2"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Back
                            </button>
                            <div className="flex items-center gap-4">
                                <span className={cn(
                                    'text-sm font-medium',
                                    manualCvText.length >= 50 ? 'text-green-600' : 'text-slate-400'
                                )}>
                                    {manualCvText.length} chars (min 50)
                                </span>
                                <Button
                                    onClick={handleSubmit}
                                    disabled={manualCvText.length < 50 || parsing}
                                    className="px-6 h-11"
                                >
                                    Generate Questions
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    )
}

function ProcessingStage() {
    const [currentStep, setCurrentStep] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep(prev => {
                if (prev < PROCESSING_STEPS.length - 1) return prev + 1
                return prev
            })
        }, 800)
        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            key="processing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-[80vh] flex items-center justify-center p-6"
        >
            <div className="text-center max-w-md">
                {/* Animated brain/AI icon */}
                <motion.div className="relative w-32 h-32 mx-auto mb-8">
                    {/* Outer ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 rounded-full border-4 border-dashed border-blue-200"
                    />
                    {/* Middle ring */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-4 rounded-full border-4 border-dotted border-indigo-200"
                    />
                    {/* Center icon */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-8 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-500/30"
                    >
                        <Brain className="w-10 h-10 text-white" />
                    </motion.div>
                    {/* Floating dots */}
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"
                            style={{ 
                                top: '50%', 
                                left: '50%',
                            }}
                            animate={{ 
                                x: [0, Math.cos(i * Math.PI / 2) * 60, 0],
                                y: [0, Math.sin(i * Math.PI / 2) * 60, 0],
                            }}
                            transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: 'easeInOut'
                            }}
                        />
                    ))}
                </motion.div>

                <h2 className="text-2xl font-bold text-slate-800 mb-2">Analyzing Your CV...</h2>
                <p className="text-slate-500 mb-10">Crafting personalized interview questions</p>

                {/* Steps */}
                <div className="space-y-4">
                    {PROCESSING_STEPS.map((step, i) => {
                        const isActive = i === currentStep
                        const isComplete = i < currentStep
                        
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ 
                                    opacity: isComplete || isActive ? 1 : 0.4,
                                    x: 0,
                                    scale: isActive ? 1.02 : 1
                                }}
                                className={cn(
                                    'flex items-center gap-4 p-4 rounded-xl border transition-all',
                                    isActive 
                                        ? 'bg-blue-50 border-blue-200 shadow-md' 
                                        : isComplete
                                            ? 'bg-green-50 border-green-200'
                                            : 'bg-white border-slate-200'
                                )}
                            >
                                <div className={cn(
                                    'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                                    isActive ? 'bg-blue-500 text-white' :
                                    isComplete ? 'bg-green-500 text-white' :
                                    'bg-slate-100 text-slate-400'
                                )}>
                                    {isComplete ? (
                                        <CheckCircle2 className="w-5 h-5" />
                                    ) : (
                                        <step.icon className="w-5 h-5" />
                                    )}
                                </div>
                                <div className="flex-1 text-left">
                                    <p className={cn(
                                        'font-medium transition-colors',
                                        isActive ? 'text-blue-700' :
                                        isComplete ? 'text-green-700' :
                                        'text-slate-500'
                                    )}>
                                        {step.label}
                                    </p>
                                    <p className="text-xs text-slate-400">{step.description}</p>
                                </div>
                                {isActive && (
                                    <motion.div
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="w-2 h-2 rounded-full bg-blue-500"
                                    />
                                )}
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}

function InterviewStage({
    questions,
    currentIndex,
    answers,
    onAnswer,
    isPaidUser = false,
    getCategoryConfig
}: {
    questions: Question[]
    currentIndex: number
    answers: Answer[]
    onAnswer: (answer: Answer) => void
    isPaidUser?: boolean
    getCategoryConfig: (category: string) => { icon: React.ElementType; color: string; bgColor: string; label: string }
}) {
    const [answerText, setAnswerText] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [feedback, setFeedback] = useState<any>(null)
    const [showFeedback, setShowFeedback] = useState(false)
    const [inputMode, setInputMode] = useState<'text' | 'voice'>('text')
    const [voiceProcessing, setVoiceProcessing] = useState(false)
    const [pronunciationResults, setPronunciationResults] = useState<any>(null)

    const currentQuestion = questions[currentIndex]
    const categoryConfig = getCategoryConfig(currentQuestion.category)
    const CategoryIcon = categoryConfig.icon
    const progress = ((currentIndex) / questions.length) * 100

    const handleVoiceRecording = async (audioBlob: Blob, duration: number) => {
        setVoiceProcessing(true)
        setPronunciationResults(null)

        try {
            if (isPaidUser) {
                const formData = new FormData()
                formData.append('audio', audioBlob, 'recording.wav')
                formData.append('duration', duration.toString())

                const res = await fetch('/api/interview/assess-pronunciation', {
                    method: 'POST',
                    body: formData
                })

                if (res.ok) {
                    const result = await res.json()
                    setAnswerText(result.transcript || '')
                    setPronunciationResults({
                        pronunciationScore: result.pronunciationScore,
                        fluencyScore: result.fluencyScore,
                        accuracyScore: result.accuracyScore,
                        wordsPerMinute: result.wordsPerMinute,
                        words: result.words
                    })
                } else {
                    const fallbackFormData = new FormData()
                    fallbackFormData.append('audio', audioBlob, 'recording.wav')
                    const fallbackRes = await fetch('/api/transcribe-simple', {
                        method: 'POST',
                        body: fallbackFormData
                    })
                    if (fallbackRes.ok) {
                        const { text } = await fallbackRes.json()
                        setAnswerText(text || '')
                    }
                }
            } else {
                const formData = new FormData()
                formData.append('audio', audioBlob, 'recording.wav')
                const res = await fetch('/api/transcribe-simple', {
                    method: 'POST',
                    body: formData
                })
                if (res.ok) {
                    const { text } = await res.json()
                    setAnswerText(text || '')
                }
            }
        } catch (error) {
            console.error('Voice processing error:', error)
            setInputMode('text')
        } finally {
            setVoiceProcessing(false)
        }
    }

    const handleSubmit = async () => {
        if (!answerText.trim()) return
        setIsSubmitting(true)
        setFeedback(null)

        try {
            const res = await fetch('/api/interview/assess-answer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    question: currentQuestion.text,
                    answer: answerText,
                    isPaidUser
                })
            })

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}))
                throw new Error(errorData.details || errorData.error || 'Assessment failed')
            }
            const { assessment } = await res.json()
            setFeedback(assessment)
            setShowFeedback(true)
        } catch (error) {
            console.error('Submit error:', error)
            alert(error instanceof Error ? error.message : 'Failed to assess answer')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleNext = () => {
        onAnswer({
            questionId: currentQuestion.id,
            text: answerText,
            score: feedback?.score,
            feedback: feedback?.feedback
        })
        setAnswerText('')
        setFeedback(null)
        setShowFeedback(false)
        setPronunciationResults(null)
    }

    return (
        <motion.div
            key="interview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen p-6 pt-8"
        >
            <div className="max-w-3xl mx-auto">
                {/* Progress Header */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-slate-500">
                                Question {currentIndex + 1} of {questions.length}
                            </span>
                            <div className={cn('flex items-center gap-1.5 px-3 py-1 rounded-full', categoryConfig.bgColor)}>
                                <CategoryIcon className={cn('w-3.5 h-3.5', categoryConfig.color)} />
                                <span className={cn('text-xs font-medium capitalize', categoryConfig.color)}>
                                    {categoryConfig.label}
                                </span>
                            </div>
                        </div>
                        <span className="text-sm text-slate-400">{Math.round(progress)}% complete</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        />
                    </div>
                </div>

                {/* Question Card */}
                <motion.div
                    key={currentQuestion.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 mb-6"
                >
                    <div className="flex items-start gap-5">
                        <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0', categoryConfig.bgColor)}>
                            <CategoryIcon className={cn('w-6 h-6', categoryConfig.color)} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-400 mb-1 uppercase tracking-wide">{currentQuestion.category}</p>
                            <p className="text-lg text-slate-800 leading-relaxed font-medium">
                                {currentQuestion.text}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Answer Input */}
                {!showFeedback ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Input Mode Toggle */}
                        <div className="flex justify-center gap-3 mb-6">
                            <button
                                onClick={() => setInputMode('text')}
                                className={cn(
                                    'flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all font-medium',
                                    inputMode === 'text'
                                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                                )}
                            >
                                <Keyboard className="w-4 h-4" />
                                Type
                            </button>
                            {isPaidUser ? (
                                <button
                                    onClick={() => setInputMode('voice')}
                                    className={cn(
                                        'flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all font-medium',
                                        inputMode === 'voice'
                                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                                    )}
                                >
                                    <Mic2 className="w-4 h-4" />
                                    Voice
                                </button>
                            ) : (
                                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-400 cursor-not-allowed">
                                    <Mic2 className="w-4 h-4" />
                                    <span>Voice</span>
                                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">PRO</span>
                                </div>
                            )}
                        </div>

                        {inputMode === 'text' ? (
                            <>
                                <textarea
                                    value={answerText}
                                    onChange={(e) => setAnswerText(e.target.value)}
                                    placeholder="Type your answer here... (Consider using the STAR method for behavioral questions: Situation, Task, Action, Result)"
                                    className="w-full h-48 p-5 border border-slate-200 rounded-2xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all leading-relaxed"
                                    disabled={isSubmitting}
                                />
                                <div className="flex justify-between items-center mt-4">
                                    <span className={cn(
                                        'text-sm font-medium',
                                        answerText.length > 0 ? 'text-slate-600' : 'text-slate-400'
                                    )}>
                                        {answerText.length} characters
                                    </span>
                                    <Button
                                        onClick={handleSubmit}
                                        disabled={!answerText.trim() || isSubmitting}
                                        className="px-6 h-11"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                    className="mr-2"
                                                >
                                                    <Loader className="w-4 h-4" />
                                                </motion.div>
                                                Analyzing...
                                            </>
                                        ) : (
                                            'Submit Answer'
                                        )}
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div className="bg-white rounded-2xl border border-slate-200 p-8">
                                <VoiceRecorder
                                    disabled={isSubmitting}
                                    onRecordingComplete={handleVoiceRecording}
                                />
                                {voiceProcessing && (
                                    <div className="mt-6 text-center">
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center"
                                        >
                                            <Waves className="w-6 h-6 text-blue-500" />
                                        </motion.div>
                                        <p className="text-slate-600 font-medium">Processing your answer...</p>
                                    </div>
                                )}
                                {answerText && !voiceProcessing && (
                                    <div className="mt-6 space-y-4">
                                        {pronunciationResults && (
                                            <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                                                <h4 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                                                    <BarChart3 className="w-4 h-4" />
                                                    Pronunciation Analysis
                                                </h4>
                                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                                    {[
                                                        { label: 'Pronunciation', score: pronunciationResults.pronunciationScore, color: 'blue' },
                                                        { label: 'Fluency', score: pronunciationResults.fluencyScore, color: 'emerald' },
                                                        { label: 'Accuracy', score: pronunciationResults.accuracyScore, color: 'purple' },
                                                        { label: 'WPM', score: pronunciationResults.wordsPerMinute, color: 'amber', suffix: '' },
                                                    ].map((item) => (
                                                        <div key={item.label} className="text-center p-3 bg-white rounded-xl shadow-sm">
                                                            <div className={cn('text-2xl font-bold', `text-${item.color}-600`)}>
                                                                {item.score}{item.suffix !== undefined ? '' : ''}
                                                            </div>
                                                            <div className="text-xs text-slate-500">{item.label}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        <div className="p-5 bg-slate-50 rounded-2xl">
                                            <p className="text-sm text-slate-500 mb-2">Transcribed:</p>
                                            <p className="text-slate-700 leading-relaxed">{answerText}</p>
                                        </div>
                                        <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full h-11">
                                            {isSubmitting ? (
                                                <>
                                                    <Loader className="w-4 h-4 mr-2 animate-spin" />
                                                    Analyzing...
                                                </>
                                            ) : (
                                                'Submit Answer'
                                            )}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                ) : (
                    /* Feedback Display */
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                            'rounded-2xl border p-6',
                            (feedback?.score || 0) >= 70 ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' :
                            (feedback?.score || 0) >= 50 ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200' :
                            'bg-gradient-to-br from-rose-50 to-red-50 border-rose-200'
                        )}
                    >
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-3">
                                <div className={cn(
                                    'w-12 h-12 rounded-xl flex items-center justify-center',
                                    (feedback?.score || 0) >= 70 ? 'bg-green-100 text-green-600' :
                                    (feedback?.score || 0) >= 50 ? 'bg-amber-100 text-amber-600' :
                                    'bg-rose-100 text-rose-600'
                                )}>
                                    {feedback?.score >= 70 ? <Trophy className="w-6 h-6" /> :
                                     feedback?.score >= 50 ? <Star className="w-6 h-6" /> :
                                     <AlertCircle className="w-6 h-6" />}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800">AI Feedback</h3>
                                    <p className="text-sm text-slate-500">
                                        {feedback?.score >= 70 ? 'Great job!' :
                                         feedback?.score >= 50 ? 'Good effort!' :
                                         'Keep practicing!'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className={cn(
                                    'text-4xl font-bold',
                                    (feedback?.score || 0) >= 70 ? 'text-green-600' :
                                    (feedback?.score || 0) >= 50 ? 'text-amber-600' :
                                    'text-rose-600'
                                )}>
                                    {feedback?.score}
                                </span>
                                <span className="text-slate-400">/100</span>
                            </div>
                        </div>

                        <p className="text-slate-700 mb-5 leading-relaxed">{feedback?.feedback}</p>

                        {feedback?.strengths?.length > 0 && (
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                                    <ThumbsUp className="w-4 h-4" />
                                    Strengths
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {feedback.strengths.map((s: string, i: number) => (
                                        <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {feedback?.improvements?.length > 0 && (
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-amber-700 mb-2 flex items-center gap-2">
                                    <Target className="w-4 h-4" />
                                    Areas to Improve
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {feedback.improvements.map((imp: string, i: number) => (
                                        <span key={i} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                                            {imp}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <Button 
                            onClick={handleNext} 
                            className={cn(
                                'w-full h-12 text-base font-medium',
                                (feedback?.score || 0) >= 70 ? 'bg-green-600 hover:bg-green-700' :
                                (feedback?.score || 0) >= 50 ? 'bg-amber-600 hover:bg-amber-700' :
                                'bg-rose-600 hover:bg-rose-700'
                            )}
                        >
                            {currentIndex < questions.length - 1 ? (
                                <>Next Question <ChevronRight className="w-4 h-4 ml-2" /></>
                            ) : (
                                <>See Results <Trophy className="w-4 h-4 ml-2" /></>
                            )}
                        </Button>
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}

function SummaryStage({
    questions,
    answers,
    onRestart
}: {
    questions: Question[]
    answers: Answer[]
    onRestart: () => void
}) {
    const averageScore = answers.reduce((sum, a) => sum + (a.score || 0), 0) / answers.length
    const reportRef = useRef<HTMLDivElement>(null)
    const [downloading, setDownloading] = useState(false)

    const getScoreRating = (score: number) => {
        if (score >= 80) return { label: 'Excellent!', color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' }
        if (score >= 60) return { label: 'Good Job!', color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' }
        if (score >= 40) return { label: 'Keep Practicing', color: 'text-amber-600', bgColor: 'bg-amber-50', borderColor: 'border-amber-200' }
        return { label: 'Needs Work', color: 'text-rose-600', bgColor: 'bg-rose-50', borderColor: 'border-rose-200' }
    }

    const rating = getScoreRating(averageScore)

    const handleDownload = async () => {
        if (!reportRef.current) return
        setDownloading(true)
        try {
            const imgData = await domToJpeg(reportRef.current, {
                scale: 2,
                quality: 0.8,
                backgroundColor: '#ffffff',
                filter: (node) => !(node instanceof Element && node.classList.contains('no-print'))
            })

            const pdf = new jsPDF('p', 'mm', 'a4')
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = pdf.internal.pageSize.getHeight()

            const img = new Image()
            img.src = imgData
            await new Promise((resolve) => { img.onload = resolve })

            const imgHeightInPdf = (img.height * pdfWidth) / img.width
            let heightLeft = imgHeightInPdf
            let position = 0

            pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeightInPdf)
            heightLeft -= pdfHeight

            while (heightLeft > 0) {
                position -= pdfHeight
                pdf.addPage()
                pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeightInPdf)
                heightLeft -= pdfHeight
            }

            pdf.save('interview-report.pdf')
        } catch (error) {
            console.error('PDF generation failed', error)
            alert('Could not generate PDF. Please try taking a screenshot instead.')
        } finally {
            setDownloading(false)
        }
    }

    return (
        <motion.div
            key="summary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen p-6 pt-8"
        >
            <div className="max-w-3xl mx-auto" ref={reportRef}>
                {/* Header */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', damping: 15 }}
                        className={cn('w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-xl', rating.bgColor)}
                    >
                        {averageScore >= 80 ? <Trophy className={cn('w-12 h-12', rating.color)} /> :
                         averageScore >= 60 ? <Award className={cn('w-12 h-12', rating.color)} /> :
                         averageScore >= 40 ? <Star className={cn('w-12 h-12', rating.color)} /> :
                         <Target className={cn('w-12 h-12', rating.color)} />}
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl font-bold text-slate-800 mb-2"
                    >
                        Interview Complete!
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-500"
                    >
                        Here's your performance summary
                    </motion.p>
                </div>

                {/* Overall Score Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={cn('rounded-3xl border p-8 mb-8 text-center', rating.bgColor, rating.borderColor)}
                >
                    <p className="text-slate-600 mb-3 font-medium">Overall Score</p>
                    <div className={cn('text-7xl font-bold mb-2', rating.color)}>
                        {Math.round(averageScore)}
                    </div>
                    <p className="text-slate-500 mb-4">out of 100</p>
                    <div className={cn('inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border', rating.borderColor)}>
                        {averageScore >= 80 ? <Trophy className={cn('w-4 h-4', rating.color)} /> :
                         averageScore >= 60 ? <Award className={cn('w-4 h-4', rating.color)} /> :
                         averageScore >= 40 ? <Star className={cn('w-4 h-4', rating.color)} /> :
                         <Target className={cn('w-4 h-4', rating.color)} />}
                        <span className={cn('font-semibold', rating.color)}>{rating.label}</span>
                    </div>
                </motion.div>

                {/* Question Breakdown */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                >
                    <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-slate-400" />
                        Question Breakdown
                    </h2>
                    <div className="space-y-3">
                        {questions.map((q, i) => {
                            const answer = answers.find(a => a.questionId === q.id)
                            const score = answer?.score || 0
                            return (
                                <motion.div
                                    key={q.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className={cn(
                                        'rounded-2xl border p-5 transition-all hover:shadow-md',
                                        score >= 70 ? 'bg-green-50/50 border-green-100' :
                                        score >= 50 ? 'bg-amber-50/50 border-amber-100' :
                                        'bg-rose-50/50 border-rose-100'
                                    )}
                                >
                                    <div className="flex justify-between items-start gap-4 mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className={cn(
                                                'w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold',
                                                score >= 70 ? 'bg-green-100 text-green-700' :
                                                score >= 50 ? 'bg-amber-100 text-amber-700' :
                                                'bg-rose-100 text-rose-700'
                                            )}>
                                                {i + 1}
                                            </div>
                                            <span className="text-sm text-slate-400 capitalize">{q.category}</span>
                                        </div>
                                        <span className={cn(
                                            'text-lg font-bold',
                                            score >= 70 ? 'text-green-600' :
                                            score >= 50 ? 'text-amber-600' :
                                            'text-rose-600'
                                        )}>
                                            {score}
                                        </span>
                                    </div>
                                    <p className="text-slate-700 text-sm mb-2 font-medium">{q.text}</p>
                                    {answer?.feedback && (
                                        <p className="text-slate-500 text-xs leading-relaxed">{answer.feedback}</p>
                                    )}
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Actions */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-4 no-print"
                >
                    <Button 
                        variant="outline" 
                        onClick={onRestart} 
                        className="flex-1 h-12"
                    >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Practice Again
                    </Button>
                    <Button
                        onClick={handleDownload}
                        disabled={downloading}
                        className="flex-1 h-12"
                    >
                        {downloading ? (
                            <>
                                <Loader className="w-4 h-4 mr-2 animate-spin" />
                                Generating...
                            </>
                        ) : (
                            <>
                                <Download className="w-4 h-4 mr-2" />
                                Download Report
                            </>
                        )}
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    )
}
