'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize, Minimize, CheckCircle, Zap, Download, Loader2, RotateCcw, PenTool, Eraser, Eye, EyeOff, XCircle, Type } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { domToPng } from 'modern-screenshot';
import { jsPDF } from 'jspdf';
import { Slide, ComparisonRow, VocabularyItem, PronunciationItem, RecapRow, InterviewVocabItem, InterviewScenario, MockInterview } from '../data/types';
import { toast } from 'sonner';
import { useSwipeNavigation } from '@/hooks/useSwipeNavigation';
import AnnotationOverlay, { AnnotationOverlayRef } from './AnnotationOverlay';

interface SlideDeckProps {
    slides: Slide[];
    meetingTitle: string;
}

// ============================================
// DECORATION PATTERNS USING PNG IMAGES
// ============================================

const Pattern1 = ({ fs }: { fs: boolean }) => (
    <div className="opacity-40 mix-blend-multiply pointer-events-none">
        <Image src="/images/megaphone.png" alt="" width={100} height={100} className={`absolute ${fs ? 'top-8 left-16' : 'top-4 left-10'} drop-shadow-lg`} />
        <Image src="/images/target.png" alt="" width={90} height={90} className={`absolute ${fs ? 'top-6 right-16' : 'top-3 right-10'} drop-shadow-lg`} />
        <Image src="/images/light-bulb-green.png" alt="" width={70} height={70} className={`absolute ${fs ? 'bottom-24 left-20' : 'bottom-16 left-12'} drop-shadow-lg`} />
        <Image src="/images/rocket.png" alt="" width={80} height={80} className={`absolute ${fs ? 'bottom-20 right-24' : 'bottom-14 right-16'} drop-shadow-lg`} />
        <Image src="/images/thumbs-up.png" alt="" width={90} height={90} className={`absolute ${fs ? 'top-1/3 left-8' : 'top-1/4 left-5'} drop-shadow-md`} />
        <Image src="/images/okay-hand-sign-sticker.png" alt="" width={55} height={55} className={`absolute ${fs ? 'bottom-1/3 right-10' : 'bottom-1/4 right-6'} drop-shadow-md`} />
    </div>
);

const Pattern2 = ({ fs }: { fs: boolean }) => (
    <div className="opacity-40 mix-blend-multiply pointer-events-none">
        <Image src="/images/rocket.png" alt="" width={100} height={100} className={`absolute ${fs ? 'top-10 right-20' : 'top-6 right-12'} drop-shadow-lg`} />
        <Image src="/images/thumbs-up.png" alt="" width={80} height={80} className={`absolute ${fs ? 'top-12 left-16' : 'top-8 left-10'} drop-shadow-lg`} />
        <Image src="/images/magnifying-glass.png" alt="" width={70} height={70} className={`absolute ${fs ? 'bottom-20 left-20' : 'bottom-14 left-12'} drop-shadow-lg`} />
        <Image src="/images/target.png" alt="" width={75} height={75} className={`absolute ${fs ? 'bottom-24 right-20' : 'bottom-16 right-14'} drop-shadow-lg`} />
        <Image src="/images/light-bulb-green.png" alt="" width={55} height={55} className={`absolute ${fs ? 'top-1/2 left-8' : 'top-1/3 left-5'} drop-shadow-md`} />
    </div>
);

const Pattern3 = ({ fs }: { fs: boolean }) => (
    <div className="opacity-40 mix-blend-multiply pointer-events-none">
        <Image src="/images/light-bulb-green.png" alt="" width={90} height={90} className={`absolute ${fs ? 'top-8 right-16' : 'top-5 right-10'} drop-shadow-lg`} />
        <Image src="/images/okay-hand-sign-sticker.png" alt="" width={85} height={85} className={`absolute ${fs ? 'top-10 left-20' : 'top-6 left-12'} drop-shadow-lg`} />
        <Image src="/images/megaphone.png" alt="" width={240} height={240} className={`absolute ${fs ? 'bottom-20 right-24' : 'bottom-14 right-16'} drop-shadow-lg`} />
        <Image src="/images/magnifying-glass.png" alt="" width={180} height={180} className={`absolute ${fs ? 'bottom-16 left-16' : 'bottom-16 left-10'} drop-shadow-lg`} />
    </div>
);

// Grid pattern overlay (Dot pattern to match Hero)
const GridPattern = () => (
    <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
            backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)',
            backgroundSize: '24px 24px'
        }}
    />
);

// Alternating subtle blue/slate gradients
const bgColors = [
    'bg-gradient-to-br from-blue-50 via-white to-slate-50',
    'bg-gradient-to-br from-slate-50 via-white to-blue-50',
    'bg-gradient-to-br from-white via-blue-50 to-slate-50',
    'bg-gradient-to-br from-blue-50 via-slate-50 to-white',
    'bg-gradient-to-br from-slate-50 via-blue-50 to-white',
];

export default function SlideDeck({ slides, meetingTitle }: SlideDeckProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const [exportProgress, setExportProgress] = useState(0);
    const [scale, setScale] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const slideRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const exportAbortRef = useRef(false);
    const hiddenContainerRef = useRef<HTMLDivElement>(null);
    const [hiddenSlideIndex, setHiddenSlideIndex] = useState<number | null>(null);
    const [isAnnotationMode, setIsAnnotationMode] = useState(false);
    const [annotationMode, setAnnotationMode] = useState<'draw' | 'text'>('draw');
    const [annotationColor, setAnnotationColor] = useState('#2563eb'); // Default blue-600
    const annotationRef = useRef<AnnotationOverlayRef>(null);
    const [showControls, setShowControls] = useState(true);
    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Aliasing fs for convenience if it's not already aliased in scope (it seems to be used later, but to be safe for our new code)
    const fs = isFullscreen;

    // Manual control visibility toggling
    const toggleControls = () => setShowControls(prev => !prev);

    const goToSlide = useCallback((index: number) => {
        if (index < 0 || index >= slides.length) return;
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
        // Clear annotations on slide change
        if (annotationRef.current) annotationRef.current.clear();
    }, [currentSlide, slides.length]);

    const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [goToSlide, currentSlide]);
    const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [goToSlide, currentSlide]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
            switch (e.key) {
                case 'ArrowRight': case ' ': e.preventDefault(); nextSlide(); break;
                case 'ArrowLeft': e.preventDefault(); prevSlide(); break;
                case 'f': case 'F': e.preventDefault(); toggleFullscreen(); break;
                case 'c': case 'C': annotationRef.current?.clear(); break;
                // Annotation shortcuts - Desktop only
                case 't': case 'T':
                    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                        e.preventDefault();
                        if (isAnnotationMode) {
                            setAnnotationMode(prev => prev === 'draw' ? 'text' : 'draw');
                        } else {
                            setIsAnnotationMode(true);
                            setAnnotationMode('text');
                        }
                    }
                    break;
                case 'd': case 'D':
                    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                        e.preventDefault();
                        if (isAnnotationMode) {
                            setAnnotationMode(prev => prev === 'text' ? 'draw' : 'text');
                        } else {
                            setIsAnnotationMode(true);
                            setAnnotationMode('draw');
                        }
                    }
                    break;
                case 'Escape': if (isFullscreen) exitFullscreen(); break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, isFullscreen, isAnnotationMode]);

    // Disable annotation mode on mobile (resize handler)
    useEffect(() => {
        const checkMobile = () => {
            if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                setIsAnnotationMode(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleFullscreen = async () => { if (!isFullscreen) await enterFullscreen(); else await exitFullscreen(); };
    const enterFullscreen = async () => { if (wrapperRef.current?.requestFullscreen) { await wrapperRef.current.requestFullscreen(); setIsFullscreen(true); } };
    const exitFullscreen = async () => { if (document.fullscreenElement) await document.exitFullscreen(); setIsFullscreen(false); };

    useEffect(() => {
        const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    // PDF Export function - uses modern-screenshot + jsPDF with toast notifications
    const exportToPdf = async () => {
        if (isExporting) return;

        setIsExporting(true);
        exportAbortRef.current = false;
        const originalSlide = currentSlide;

        const toastId = toast.loading(`Preparing PDF export... 0/${slides.length}`, {
            description: "You can continue using the slides while exporting.",
            duration: Infinity,
        });

        try {
            if (!containerRef.current) {
                toast.error('Cannot find slide container', { id: toastId });
                setIsExporting(false);
                return;
            }

            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [1920, 1080],
                compress: true,
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            for (let i = 0; i < slides.length; i++) {
                // Check for cancel
                if (exportAbortRef.current) {
                    toast.info('Export cancelled', { id: toastId });
                    setCurrentSlide(originalSlide);
                    setIsExporting(false);
                    setExportProgress(0);
                    return;
                }

                // Update progress toast
                setExportProgress(Math.round(((i + 1) / slides.length) * 100));
                toast.loading(`Exporting slide ${i + 1}/${slides.length}...`, {
                    id: toastId,
                    description: "You can continue using the slides.",
                });

                setCurrentSlide(i);

                // Set hidden slide index to render this slide in the off-screen container
                setHiddenSlideIndex(i);
                await new Promise(resolve => setTimeout(resolve, 300)); // Wait for React to render hidden slide

                // Capture from the hidden off-screen container (always 1920x1080, no transform)
                if (!hiddenContainerRef.current) {
                    console.error('Hidden container not found');
                    continue;
                }

                const dataUrl = await domToPng(hiddenContainerRef.current, {
                    width: 1920,
                    height: 1080,
                    scale: 1,
                    quality: 0.92,
                });

                if (i > 0) pdf.addPage();
                pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
            }

            const fileName = meetingTitle
                ? `${meetingTitle.replace(/\s+/g, '-').toLowerCase()}-slides.pdf`
                : 'slides.pdf';
            pdf.save(fileName);

            toast.success('PDF exported successfully!', {
                id: toastId,
                description: `${slides.length} slides saved.`,
            });

        } catch (error) {
            console.error('Error exporting PDF:', error);
            toast.error('Failed to export PDF', {
                id: toastId,
                description: error instanceof Error ? error.message : 'Unknown error',
            });
        } finally {
            setCurrentSlide(originalSlide);
            setIsExporting(false);
            setExportProgress(0);
        }
    };

    // Cancel export handler
    const handleCancelExport = () => {
        exportAbortRef.current = true;
    };

    // Helper variables
    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? '3%' : '-3%', opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir < 0 ? '3%' : '-3%', opacity: 0 })
    };

    // Cycling patterns and colors - Helper for any index
    const getSlideContext = (idx: number) => {
        const patternIdx = idx % 3;
        const colorIdx = idx % bgColors.length;
        const bg = bgColors[colorIdx];
        const pattern = (() => {
            switch (patternIdx) {
                case 0: return <Pattern1 fs={fs} />;
                case 1: return <Pattern2 fs={fs} />;
                case 2: return <Pattern3 fs={fs} />;
                default: return <Pattern1 fs={fs} />;
            }
        })();
        return { s: slides[idx], bg, pattern };
    };

    // Current slide context for main view
    const { s: slide, bg: bgColor, pattern: currentPattern } = getSlideContext(currentSlide);
    // Alias renderPattern for backward compatibility if needed, or just use currentPattern
    const renderPattern = () => currentPattern;

    // ============================================
    // UNIFIED SLIDE STYLE (Title slide style for ALL)
    // ============================================

    // Helper: use regular div/span when rendering for export to disable animations
    const getMotionComponents = (isForExport: boolean) => ({
        div: isForExport ? 'div' : motion.div,
        h1: isForExport ? 'h1' : motion.h1,
        h2: isForExport ? 'h2' : motion.h2,
        p: isForExport ? 'p' : motion.p,
    } as const);

    const renderSlide = (slideIndex?: number) => {
        const idx = slideIndex !== undefined ? slideIndex : currentSlide;
        const isForExport = slideIndex !== undefined;
        const M = getMotionComponents(isForExport);
        // If rendering for export (slideIndex provided), use that context. Otherwise use outer current context.
        // We use 's' and 'bg' inside the function to avoid conflict with outer 'slide'/'bgColor'
        const { s, bg, pattern } = slideIndex !== undefined ? getSlideContext(idx) : { s: slide, bg: bgColor, pattern: currentPattern };
        const titleStyle = `uppercase tracking-wide text-black text-7xl`;
        const subtitleStyle = `text-black font-normal text-xl`;

        // --- TITLE SLIDE ---
        if (s.type === 'title') {
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    {/* Decorative blurs */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl opacity-50" />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl opacity-50" />
                    {pattern}

                    <div className="absolute inset-0 flex items-center justify-center px-8 z-10">
                        <M.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center max-w-6xl"
                        >
                            <M.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={titleStyle}
                                style={{
                                    fontFamily: 'var(--font-display), "Lilita One", sans-serif',
                                    textShadow: '0 4px 12px rgba(37, 99, 235, 0.1)'
                                }}
                            >
                                {s.title}
                            </M.h1>
                            {s.teacherNote && (
                                <M.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className={`text-slate-600 mt-6 text-xl font-medium`}
                                >
                                    {s.teacherNote}
                                </M.p>
                            )}
                        </M.div>
                    </div>
                </div>
            );
        }

        // --- CONCEPT SLIDE ---
        if (s.type === 'concept') {
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl opacity-50" />
                    {pattern}

                    <div className={`absolute inset-0 flex flex-col justify-center px-32 z-10`}>
                        <M.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            {s.subtitle && <p className={`text-slate-500 mb-2 text-xl font-medium uppercase tracking-wide`}>{s.subtitle}</p>}
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>{s.title}</h2>
                        </M.div>

                        <div className={`mt-8 space-y-4`}>
                            {s.content?.map((c: string, i: number) => (
                                <M.div
                                    key={i}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 * i }}
                                    className={`flex items-start gap-4`}
                                >
                                    <div className={`flex-shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-500/30 w-12 h-12 text-2xl`}>
                                        {i + 1}
                                    </div>
                                    <p className={`text-slate-800 font-semibold pt-1 text-2xl`}>{c}</p>
                                </M.div>
                            ))}
                        </div>

                        {s.teacherNote && (
                            <M.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 self-start"
                            >
                                <p className="text-amber-800 text-sm font-medium">
                                    <span className="font-bold">👨‍🏫 Teacher Note:</span> {s.teacherNote}
                                </p>
                            </M.div>
                        )}
                    </div>
                </div>
            );
        }

        // --- FORMULA SLIDE ---
        if (s.type === 'formula') {
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl opacity-50" />
                    {pattern}

                    <div className={`absolute inset-0 flex flex-col justify-center px-32 z-10`}>
                        <M.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>{s.title}</h2>
                            {s.subtitle && <p className={`text-slate-500 mt-2 text-xl font-medium`}>{s.subtitle}</p>}
                        </M.div>

                        {s.formula && (
                            <M.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className={`mt-6 bg-white/95 backdrop-blur-md rounded-2xl border-4 border-blue-500 shadow-2xl shadow-blue-500/20 inline-flex items-center gap-4 self-start px-10 py-6`}
                            >
                                <Zap className={`text-blue-600 w-8 h-8`} />
                                <p className={`font-mono font-bold text-blue-900 text-3xl`}>{s.formula}</p>
                            </M.div>
                        )}

                        {s.content && s.content.length > 0 && (
                            <div className={`mt-6 space-y-3 ${s.formula ? '' : 'mt-8'}`}>
                                {s.content.map((c: string, i: number) => (
                                    <M.p
                                        key={i}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 * i }}
                                        className={`text-slate-700 text-xl flex items-start gap-3`}
                                    >
                                        <span className="text-blue-500 mt-1">•</span>
                                        <span>{c}</span>
                                    </M.p>
                                ))}
                            </div>
                        )}

                        {s.vocabulary && s.vocabulary.length > 0 && (
                            <div className={`mt-8 grid gap-4 ${s.vocabulary.length <= 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                                {s.vocabulary.map((v: VocabularyItem, i: number) => (
                                    <M.div
                                        key={i}
                                        initial={{ y: 15, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 * i }}
                                        className={`bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg p-6`}
                                    >
                                        <p className={`font-bold text-slate-800 text-xl`}>{v.term}</p>
                                        <p className={`text-slate-600 text-lg`}>{v.meaning}</p>
                                    </M.div>
                                ))}
                            </div>
                        )}

                        {s.teacherNote && (
                            <M.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 self-start"
                            >
                                <p className="text-amber-800 text-sm font-medium">
                                    <span className="font-bold">👨‍🏫 Teacher Note:</span> {s.teacherNote}
                                </p>
                            </M.div>
                        )}
                    </div>
                </div>
            );
        }

        // --- VOCABULARY SLIDE ---
        if (s.type === 'vocabulary') {
            const items = s.vocabulary || s.pronunciations || [];
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl opacity-50" />
                    {pattern}

                    <div className={`absolute inset-0 flex flex-col justify-center px-32 z-10`}>
                        <M.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>{s.title}</h2>
                            {s.subtitle && <p className={`text-slate-500 mt-2 text-xl font-medium`}>{s.subtitle}</p>}
                        </M.div>

                        {items.length > 8 ? (
                            // TABLE VIEW for large lists
                            <div className="mt-6 w-full max-w-6xl mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white/80 backdrop-blur-md">
                                <table className="w-full">
                                    <thead>
                                        <tr className={`bg-blue-50/80 border-b border-blue-100 text-blue-900 font-bold uppercase tracking-wider ${fs ? 'text-sm' : 'text-[10px]'}`}>
                                            <th className={`text-left p-4`} style={{ width: '25%' }}>Term / Word</th>
                                            <th className={`text-left p-4`} style={{ width: '25%' }}>Meaning / IPA</th>
                                            <th className={`text-left p-4`} style={{ width: '50%' }}>Example / Tip</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`overflow-y-auto max-h-[700px]`}>
                                        {items.map((v: any, i: number) => (
                                            <tr
                                                key={i}
                                                className={`border-b border-slate-100 last:border-b-0 ${i % 2 === 0 ? 'bg-white/40' : 'bg-slate-50/50'}`}
                                            >
                                                <td className={`font-bold text-blue-700 ${fs ? 'p-4 text-lg' : 'p-2 text-xs'}`}>{v.term || v.word}</td>
                                                <td className={`text-slate-600 ${fs ? 'p-4 text-base' : 'p-2 text-[10px]'}`}>{v.meaning || v.ipa}</td>
                                                <td className={`text-slate-500 italic ${fs ? 'p-4 text-base' : 'p-2 text-[10px]'}`}>{v.example || v.tip}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            // GRID VIEW for small lists
                            <div className={`mt-8 grid gap-4 ${items.length <= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                                {items.map((v: any, i: number) => (
                                    <M.div
                                        key={i}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.08 * i }}
                                        className={`bg-white/90 backdrop-blur-md rounded-2xl border-2 border-transparent hover:border-blue-100 shadow-lg p-6 group transition-all`}
                                    >
                                        <p className={`font-bold text-blue-700 text-2xl group-hover:text-blue-600 transition-colors`}>{v.term || v.word}</p>
                                        <p className={`text-slate-700 font-medium text-xl`}>{v.meaning || v.ipa}</p>
                                        {(v.example || v.tip) && <p className={`text-slate-500 italic mt-2 border-t border-slate-100 pt-2 text-lg`}>{v.example || v.tip}</p>}
                                    </M.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        // --- MICRO-DRILL SLIDE (New Light Mode Type) ---
        if (s.type === 'micro-drill') {
            return (
                <div data-slide-content className={`h-full w-full relative bg-white overflow-hidden`}>
                    <GridPattern />
                    {/* Soft ambient background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-white" />
                    {pattern}

                    <div className="absolute inset-0 flex flex-col justify-center items-center px-16 z-10">
                        <M.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="absolute top-16 left-0 right-0 text-center"
                        >
                            <span className="bg-blue-100/50 text-blue-600 px-6 py-2 rounded-full font-bold uppercase tracking-[0.2em] text-sm border border-blue-200">
                                ⚡ Micro-Drill
                            </span>
                        </M.div>

                        <M.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-5xl">
                            <h2 className="text-7xl font-black text-slate-900 mb-8 leading-tight" style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>
                                {s.title}
                            </h2>

                            {s.subtitle && (
                                <p className="text-3xl text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto mb-8">
                                    {s.subtitle}
                                </p>
                            )}

                            {/* Support 'content' array (used by basic slides) */}
                            {s.content && (
                                <div className="mt-8 bg-white border-2 border-blue-100 rounded-[2rem] p-10 shadow-xl shadow-blue-500/5 hover:border-blue-300 transition-colors">
                                    <div className="flex flex-col gap-6">
                                        {s.content.map((item, i) => (
                                            <div key={i} className="flex items-center gap-6 text-left">
                                                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl flex-shrink-0">
                                                    {i + 1}
                                                </div>
                                                <p className="text-2xl text-slate-800 font-semibold">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {s.mission && (
                                <div className="mt-8 bg-white border-2 border-blue-100 rounded-[2rem] p-10 shadow-xl shadow-blue-500/5 hover:border-blue-300 transition-colors">
                                    <div className="flex flex-col gap-6">
                                        {s.mission.map((m, i) => (
                                            <div key={i} className="flex items-center gap-6 text-left">
                                                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl flex-shrink-0">
                                                    {i + 1}
                                                </div>
                                                <p className="text-2xl text-slate-800 font-semibold">{m}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Show teacher note if present */}
                            {s.teacherNote && (
                                <div className="mt-8 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl max-w-4xl mx-auto">
                                    <p className="text-xl text-amber-800 font-medium">
                                        <span className="font-bold">👨‍🏫 Teacher Note:</span> {s.teacherNote}
                                    </p>
                                </div>
                            )}

                            <div className="mt-12 inline-flex items-center gap-3 text-slate-400 font-medium uppercase tracking-widest text-sm animate-pulse">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                Your Turn To Speak
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                            </div>
                        </M.div>
                    </div>
                </div>
            );
        }

        // --- COMPARISON SLIDE (Redesigned Card Style) ---
        if (s.type === 'comparison') {
            const itemCount = s.comparison?.length || 0;
            // Responsive sizing based on item count
            const isCompact = itemCount > 3;
            const isVeryCompact = itemCount > 5;
            
            // Font sizes adjust based on content
            const wrongTextSize = isVeryCompact ? 'text-xl' : isCompact ? 'text-2xl' : 'text-3xl';
            const rightTextSize = isVeryCompact ? 'text-2xl' : isCompact ? 'text-3xl' : 'text-4xl';
            const spacing = isVeryCompact ? 'space-y-3' : isCompact ? 'space-y-4' : 'space-y-8';
            const padding = isVeryCompact ? 'p-6' : isCompact ? 'p-8' : 'p-12';
            const titleMargin = isVeryCompact ? 'mb-6' : isCompact ? 'mb-10' : 'mb-16';
            const headerMargin = isVeryCompact ? 'mb-4' : isCompact ? 'mb-6' : 'mb-10';
            
            return (
                <div data-slide-content className={`h-full w-full relative bg-slate-50 overflow-hidden`}>
                    <GridPattern />
                    {pattern}

                    <div className={`absolute inset-0 flex flex-col justify-center items-center px-12 z-10`}>
                        <M.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`text-center ${titleMargin}`}>
                            <h2 className={`${isVeryCompact ? 'text-5xl' : isCompact ? 'text-6xl' : 'text-7xl'} font-black text-slate-900`} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>
                                {s.title}
                            </h2>
                        </M.div>

                        <div className={`relative w-full max-w-7xl grid grid-cols-2 gap-0 items-stretch ${isCompact ? 'max-h-[75%]' : ''}`}>
                            {/* VS Badge */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <div className="bg-white rounded-full p-2 shadow-xl">
                                    <div className={`bg-slate-900 text-white rounded-full flex items-center justify-center font-black border-4 border-white shadow-inner ${isCompact ? 'w-14 h-14 text-lg' : 'w-20 h-20 text-2xl'}`}>
                                        VS
                                    </div>
                                </div>
                            </div>

                            {/* Left Card: Wrong */}
                            <M.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className={`bg-white rounded-l-3xl border-y border-l border-r-0 border-slate-200 ${padding} pr-20 shadow-lg relative group overflow-hidden`}
                            >
                                <div className="absolute top-0 left-0 w-2 h-full bg-red-400" />
                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-50 rounded-full opacity-50 blur-3xl pointer-events-none" />

                                <div className={`flex items-center gap-4 ${headerMargin}`}>
                                    <div className={`bg-red-50 text-red-500 rounded-xl flex items-center justify-center ${isCompact ? 'w-10 h-10 text-lg' : 'w-12 h-12 text-xl'}`}>✕</div>
                                    <h3 className="text-slate-400 font-bold tracking-widest uppercase text-sm">The Amateur Way</h3>
                                </div>

                                <div className={spacing}>
                                    {s.comparison?.map((row: ComparisonRow, i: number) => (
                                        <div key={i} className="relative">
                                            <p className={`${wrongTextSize} text-slate-400 font-medium line-through decoration-red-300/50 decoration-2 leading-snug`}>{row.wrong}</p>
                                        </div>
                                    ))}
                                </div>
                            </M.div>

                            {/* Right Card: Right */}
                            <M.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className={`bg-white rounded-r-3xl border border-slate-200 ${padding} pl-20 shadow-2xl relative z-10`}
                            >
                                <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500" />
                                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full opacity-50 blur-3xl pointer-events-none" />

                                <div className={`flex items-center gap-4 ${headerMargin}`}>
                                    <div className={`bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center ${isCompact ? 'w-10 h-10 text-lg' : 'w-12 h-12 text-xl'}`}>✓</div>
                                    <h3 className="text-emerald-600 font-bold tracking-widest uppercase text-sm">The Professional Way</h3>
                                </div>

                                <div className={spacing}>
                                    {s.comparison?.map((row: ComparisonRow, i: number) => (
                                        <div key={i} className="relative">
                                            <p className={`${rightTextSize} text-slate-800 font-bold leading-snug`}>{row.right}</p>
                                        </div>
                                    ))}
                                </div>
                            </M.div>
                        </div>
                    </div>
                </div>
            );
        }

        // --- SIMULATION SLIDE (Switched to Light Mode) ---
        if (s.type === 'simulation') {
            return (
                <div data-slide-content className={`h-full w-full relative bg-white overflow-hidden`}>
                    <GridPattern />
                    {/* Light ambience */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-white" />

                    <div className="absolute inset-0 flex flex-col justify-center items-center px-12 z-10 text-slate-900">
                        <M.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                            <p className="text-blue-600 font-bold tracking-[0.3em] uppercase mb-4 text-xl flex items-center justify-center gap-3">
                                <span>🚀</span> REAL WORLD SIMULATION
                            </p>
                            <h2 className="text-7xl font-black font-display tracking-tight text-slate-900 mb-6" style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>
                                {s.title}
                            </h2>
                        </M.div>

                        <div className="grid grid-cols-2 gap-8 w-full max-w-6xl items-stretch">
                            {/* Left: Role & Context */}
                            <M.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white border-2 border-slate-100 rounded-[2rem] p-10 flex flex-col justify-center shadow-xl shadow-slate-200/50"
                            >
                                <div className="space-y-10">
                                    <div>
                                        <p className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-3">Your Role</p>
                                        <p className="text-4xl font-black text-slate-800">
                                            {s.simulation?.role}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-3">The Scenario</p>
                                        <p className="text-2xl leading-relaxed text-slate-600 font-medium">
                                            {s.simulation?.scenario}
                                        </p>
                                    </div>
                                    <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                                        <p className="text-emerald-600 font-bold uppercase tracking-wider text-xs mb-2">Your Goal</p>
                                        <p className="text-2xl font-bold text-emerald-900">
                                            {s.simulation?.goal}
                                        </p>
                                    </div>
                                </div>
                            </M.div>

                            {/* Right: The Stage / Timer */}
                            <M.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-[2rem] p-10 flex flex-col justify-center items-center text-center shadow-2xl shadow-blue-500/30 relative overflow-hidden group text-white"
                            >
                                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
                                <div className="absolute -top-32 -right-32 w-64 h-64 bg-white rounded-full blur-3xl opacity-20" />

                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8">
                                    <Zap className="w-10 h-10 text-yellow-300 fill-yellow-300 animate-pulse" />
                                </div>

                                <h3 className="text-5xl font-black mb-4 tracking-tight">ACTION!</h3>
                                <p className="text-blue-100 text-xl mb-12 leading-relaxed max-w-md">
                                    Turn on your camera. Look at the lens.<br />
                                    You have <strong className="text-white border-b-2 border-white/30">{s.simulation?.timeLimit || 30} seconds</strong>.
                                </p>
                                <button className="bg-white text-blue-700 px-10 py-5 rounded-full font-black text-xl hover:scale-105 hover:shadow-lg hover:shadow-white/20 transition-all shadow-xl flex items-center gap-3 active:scale-95 group-hover:ring-4 ring-white/30">
                                    <span>🎤 Start Speaking</span>
                                </button>
                            </M.div>
                        </div>
                    </div>
                </div>
            );
        }

        // --- CASE STUDY SLIDE ---
        if (s.type === 'case-study') {
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl opacity-50" />
                    {pattern}

                    <div className={`absolute inset-0 flex flex-col justify-center px-32 z-10`}>
                        <M.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <p className={`text-slate-500 uppercase tracking-wider font-bold mb-2 text-sm`}>{s.subtitle}</p>
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>{s.title}</h2>
                        </M.div>

                        <M.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className={`mt-6 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg p-8`}
                        >
                            <p className={`text-slate-700 italic text-xl leading-relaxed`}>{s.caseStudy?.scenario}</p>
                        </M.div>

                        <M.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className={`mt-6 bg-white/95 border-2 border-blue-500 rounded-2xl shadow-2xl shadow-blue-500/10 p-8 relative overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0" />
                            <p className={`text-blue-600 uppercase tracking-wider font-black mb-2 ${fs ? 'text-xs' : 'text-[10px]'} relative z-10`}>💡 Suggested Template</p>
                            <p className={`font-bold text-blue-950 whitespace-pre-line text-2xl relative z-10`}>{s.caseStudy?.template}</p>
                        </M.div>

                        {/* Show teacher note if present */}
                        {s.teacherNote && (
                            <M.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl"
                            >
                                <p className="text-lg text-amber-800 font-medium">
                                    <span className="font-bold">👨‍🏫 Teacher Note:</span> {s.teacherNote}
                                </p>
                            </M.div>
                        )}
                    </div>
                </div>
            );
        }

        // --- ROLEPLAY SLIDE (Activity-style with speech bubbles) ---
        if (s.type === 'roleplay') {
            // Parse the template into lines and split by A/B (if caseStudy is provided)
            const lines = s.caseStudy?.template?.split('\n') || [];

            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl opacity-50" />
                    {pattern}

                    <div className={`absolute inset-0 flex flex-col justify-center px-32 z-10`}>
                        <M.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4">
                            <p className={`text-slate-500 uppercase tracking-wider font-bold mb-2 text-sm`}>🎭 Your Turn!</p>
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>{s.title}</h2>
                            {s.subtitle && <p className={`text-slate-500 mt-2 text-xl`}>{s.subtitle}</p>}
                        </M.div>

                        {s.caseStudy?.scenario && (
                            <M.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className={`mb-6 bg-amber-50/90 backdrop-blur-md rounded-2xl border border-amber-200 shadow-lg p-5 text-center mx-auto max-w-3xl`}
                            >
                                <p className={`text-amber-800 font-medium text-lg`}>📋 {s.caseStudy?.scenario}</p>
                            </M.div>
                        )}

                        {/* Support 'content' array (used by basic slides) */}
                        {s.content && (
                            <M.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mb-6 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg p-8 max-w-4xl mx-auto w-full"
                            >
                                <div className="flex flex-col gap-4">
                                    {s.content.map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                                                {i + 1}
                                            </div>
                                            <p className="text-xl text-slate-700 font-medium leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </M.div>
                        )}

                        {/* Show A/B conversation lines if caseStudy.template exists */}
                        {s.caseStudy?.template && (
                            <div className={`space-y-3 max-w-4xl mx-auto w-full`}>
                                {lines.map((line: string, i: number) => {
                                    const isA = line.startsWith('A:');
                                    const isB = line.startsWith('B:');
                                    const text = line.replace(/^[AB]:\s*/, '');

                                    if (!isA && !isB) return null;

                                    return (
                                        <M.div
                                            key={i}
                                            initial={{ opacity: 0, x: isA ? -20 : 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * i }}
                                            className={`flex ${isA ? 'justify-start' : 'justify-end'}`}
                                        >
                                            <div className={`flex items-start gap-3 max-w-[85%] ${isA ? 'flex-row' : 'flex-row-reverse'}`}>
                                                <div className={`flex-shrink-0 rounded-full flex items-center justify-center font-bold text-white shadow-md ${isA ? 'bg-blue-500' : 'bg-pink-500'
                                                    } w-10 h-10 text-xl mt-1`}>
                                                    {isA ? 'A' : 'B'}
                                                </div>
                                                <div className={`rounded-2xl shadow-sm ${isA
                                                    ? 'bg-white border text-slate-700 border-slate-200 rounded-tl-none'
                                                    : 'bg-blue-50 border text-blue-900 border-blue-100 rounded-tr-none'
                                                    } px-6 py-3`}>
                                                    <p className={`font-medium text-xl`}>
                                                        {text}
                                                    </p>
                                                </div>
                                            </div>
                                        </M.div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Show teacher note if present */}
                        {s.teacherNote && (
                            <M.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl max-w-4xl mx-auto w-full"
                            >
                                <p className="text-lg text-amber-800 font-medium">
                                    <span className="font-bold">👨‍🏫 Teacher Note:</span> {s.teacherNote}
                                </p>
                            </M.div>
                        )}
                    </div>
                </div>
            );
        }

        // --- RECAP SLIDE ---
        if (s.type === 'recap') {
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    {pattern}

                    <div className={`absolute inset-0 flex flex-col justify-center px-32 z-10`}>
                        <M.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>{s.title}</h2>
                        </M.div>

                        <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-2xl bg-white/90 backdrop-blur-md">
                            <div className={`grid grid-cols-3 bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider ${fs ? 'p-5 text-sm' : 'p-3 text-xs'}`}>
                                <span>Context</span>
                                <span className="text-emerald-600">✓ Say This</span>
                                <span className="text-red-500">✗ Don't Say</span>
                            </div>
                            <div className="overflow-hidden">
                                {s.recap?.map((row: RecapRow, i: number) => (
                                    <M.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1 * i }}
                                        className={`grid grid-cols-3 items-center border-b border-slate-100 last:border-b-0 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} p-6`}
                                    >
                                        <span className={`text-slate-600 text-lg font-medium`}>{row.context}</span>
                                        <span className={`text-slate-900 font-bold text-lg`}>{row.sayThis}</span>
                                        <span className={`text-slate-400 line-through text-lg`}>{row.dontSayThis}</span>
                                    </M.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        // --- MISSION SLIDE ---
        if (s.type === 'mission') {
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl opacity-50" />
                    {pattern}

                    <div className={`absolute inset-0 flex flex-col justify-center items-center px-32 z-10`}>
                        <M.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
                            <p className={`text-slate-500 uppercase tracking-wider font-bold mb-2 text-sm`}>🎯 Action Item</p>
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>{s.title}</h2>
                        </M.div>

                        <div className="space-y-4 w-full max-w-3xl">
                            {s.mission?.map((m: string, i: number) => (
                                <M.div
                                    key={i}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.15 * i }}
                                    className={`flex items-center gap-4 bg-white/95 backdrop-blur-md border-2 border-blue-100 rounded-2xl px-8 py-6 shadow-lg hover:border-blue-300 transition-colors`}
                                >
                                    <CheckCircle className={`text-blue-500 flex-shrink-0 w-8 h-8`} />
                                    <p className={`text-slate-800 font-semibold text-xl`}>{m}</p>
                                </M.div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        // --- PRESENTATION PHASE HEADER ---
        if (s.type === 'pres-phase') {
            return (
                <div data-slide-content className={`h-full w-full relative bg-blue-600 overflow-hidden`}>
                    <GridPattern />
                    {/* Simplified pattern for phase header */}
                    <div className="absolute inset-0 opacity-20">
                        <Pattern1 fs={fs} />
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12 z-10">
                        <M.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="max-w-6xl"
                        >
                            <M.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-blue-100 font-black tracking-[0.3em] uppercase mb-12 text-2xl"
                            >
                                PHASE {s.phaseNumber}
                            </M.p>

                            <M.h1
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3, type: "spring" }}
                                className="text-white text-9xl font-black leading-tight mb-8"
                                style={{
                                    fontFamily: 'var(--font-display), "Lilita One", sans-serif',
                                    textShadow: '0 10px 30px rgba(0,0,0,0.2)'
                                }}
                            >
                                {s.title}
                            </M.h1>

                            {s.subtitle && (
                                <M.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-white/90 text-4xl font-medium max-w-4xl mx-auto"
                                >
                                    {s.subtitle}
                                </M.p>
                            )}
                        </M.div>
                    </div>
                </div>
            );
        }

        // --- PRESENTATION SCRIPT ---
        if (s.type === 'pres-script') {
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl opacity-50" />
                    {pattern}
                    <div className="absolute inset-0 flex flex-col justify-center px-24 py-16 z-10">
                        <M.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>
                                {s.title}
                            </h2>
                        </M.div>

                        <div className="space-y-10 max-w-7xl mx-auto w-full">
                            {s.scriptSteps?.map((step, i) => (
                                <M.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex items-start gap-12"
                                >
                                    {/* Left Side: Number + Label + Action */}
                                    <div className="flex-shrink-0 w-[420px] flex gap-5">
                                        <div className="flex-shrink-0 bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl font-black shadow-lg shadow-blue-500/30">
                                            {i + 1}
                                        </div>
                                        <div className="space-y-4 pt-1">
                                            <div className="text-blue-600 font-extrabold text-2xl uppercase tracking-wider leading-tight">
                                                {step.label}
                                            </div>
                                            <div className="bg-amber-50/90 backdrop-blur-md border border-amber-200 rounded-2xl p-6 shadow-md relative overflow-hidden">
                                                <p className="text-amber-900 font-bold text-xl leading-relaxed flex items-start gap-2">
                                                    <span className="text-2xl">🎬</span>
                                                    <span>{step.action}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side: Speech Bubble */}
                                    <div className="flex-grow relative">
                                        <div className="bg-white/95 backdrop-blur-md rounded-[40px] border border-blue-100 p-10 shadow-xl relative">
                                            {/* Triangle Pointer */}
                                            <div className="absolute top-8 -left-5 w-10 h-10 bg-white/95 border-l border-b border-blue-100 rotate-45" />

                                            <p className="text-5xl font-bold text-slate-800 leading-[1.4] font-serif relative z-10">
                                                "{step.script}"
                                            </p>
                                        </div>
                                    </div>
                                </M.div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }





        // --- PRESENTATION LANGUAGE FOCUS ---
        if (s.type === 'pres-language') {
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl opacity-50" />
                    {pattern}
                    <div className="absolute inset-0 flex flex-col justify-center px-24 z-10">
                        <M.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>
                                {s.title}
                            </h2>
                            {s.subtitle && <p className="text-4xl text-slate-500 mt-4 font-medium">{s.subtitle}</p>}
                        </M.div>

                        <div className="grid grid-cols-3 gap-10 items-stretch">
                            {s.languagePoints?.map((point, i) => (
                                <M.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="bg-white/90 backdrop-blur-md rounded-[40px] border border-white/50 p-10 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] flex flex-col h-full"
                                >
                                    <div className="bg-blue-600 text-white font-black px-6 py-2 rounded-full text-lg self-start mb-8 uppercase tracking-widest shadow-lg shadow-blue-500/30">
                                        {point.category}
                                    </div>
                                    <div className="flex-grow space-y-6 mb-10">
                                        {point.items.map((item, j) => (
                                            <div key={j} className="flex items-center gap-4">
                                                <div className="w-2 h-10 bg-blue-300 rounded-full" />
                                                <span className="text-5xl font-black text-slate-800 tracking-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {point.note && (
                                        <div className="mt-auto border-t border-slate-100 pt-6 italic text-2xl text-slate-500 font-medium">
                                            💡 {point.note}
                                        </div>
                                    )}
                                </M.div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        // --- PRESENTATION DELIVERY TIPS ---
        if (s.type === 'pres-delivery') {
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl opacity-50" />
                    {pattern}
                    <div className="absolute inset-0 flex flex-col justify-center px-24 z-10">
                        <M.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="mb-12 text-center">
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>
                                {s.title}
                            </h2>
                        </M.div>

                        <div className="grid grid-cols-3 gap-10">
                            {s.deliveryTips?.map((tip, i) => (
                                <M.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="bg-white/95 backdrop-blur-md rounded-[40px] p-12 shadow-2xl border-b-[12px] border-blue-500 flex flex-col items-center text-center gap-8 hover:translate-y-[-4px] transition-transform"
                                >
                                    <div className="text-9xl bg-blue-50 w-36 h-36 flex items-center justify-center rounded-full shadow-inner text-blue-600">
                                        {tip.icon}
                                    </div>
                                    <p className="text-4xl font-black text-slate-900 leading-tight tracking-tight">
                                        {tip.tip}
                                    </p>
                                </M.div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        // --- PRESENTATION Q&A PRACTICE ---
        if (s.type === 'pres-qa') {
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl opacity-50" />
                    {pattern}
                    <div className="absolute inset-0 flex flex-col justify-center px-24 z-10">
                        <M.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>
                                {s.title}
                            </h2>
                        </M.div>

                        <div className="max-w-6xl mx-auto w-full space-y-12">
                            {s.qaItems?.map((item, i) => (
                                <div key={i} className="space-y-10">
                                    <M.div
                                        initial={{ opacity: 0, x: -40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="bg-blue-600 text-white rounded-[40px] p-12 shadow-2xl relative overflow-hidden"
                                    >
                                        <div className="absolute top-4 left-4 text-white/10 text-[12rem] font-black -z-0 pointer-events-none">Q</div>
                                        <p className="text-5xl font-black italic relative z-10 tracking-tight">
                                            "{item.question}"
                                        </p>
                                    </M.div>

                                    <M.div
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="bg-white/95 backdrop-blur-md rounded-[40px] p-12 shadow-2xl border-[6px] border-blue-600 relative overflow-hidden"
                                    >
                                        <div className="absolute top-4 right-4 text-blue-50 text-[12rem] font-black -z-0 pointer-events-none">A</div>
                                        <p className="text-5xl font-bold text-slate-800 leading-relaxed italic relative z-10 tracking-tight">
                                            "{item.answer}"
                                        </p>
                                    </M.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        // --- FULL TEXT (Long Script View) ---
        if (s.type === 'full-text') {
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    {pattern}
                    <div className="absolute inset-0 flex flex-col px-8 py-12 lg:px-16 lg:py-16 z-10">
                        <M.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-center flex-shrink-0">
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>
                                {s.title}
                            </h2>
                            {s.subtitle && (
                                <p className="text-2xl lg:text-3xl text-slate-600 mt-2">{s.subtitle}</p>
                            )}
                        </M.div>

                        <M.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex-1 overflow-y-auto bg-white/95 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50"
                        >
                            <p className="text-2xl lg:text-3xl text-slate-800 leading-relaxed whitespace-pre-wrap">
                                {s.fullText}
                            </p>
                        </M.div>
                    </div>
                </div>
            );
        }

        // --- PRESENTATION TECHNIQUE ---
        if (s.type === 'pres-technique' && s.technique) {
            const t = s.technique;
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl opacity-50" />
                    {pattern}
                    <div className="absolute inset-0 flex flex-col justify-center px-24 z-10">
                        <M.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
                            <div className="flex items-center gap-6 mb-4">
                                <div className="text-6xl bg-white/80 backdrop-blur-md w-24 h-24 rounded-3xl flex items-center justify-center shadow-xl border border-white/50 text-blue-600">
                                    {t.icon || '🚀'}
                                </div>
                                <div>
                                    <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>
                                        {t.name}
                                    </h2>
                                    <p className="text-3xl text-slate-500 font-medium">{s.title}</p>
                                </div>
                            </div>
                        </M.div>

                        <div className="grid grid-cols-5 gap-10 items-stretch">
                            <M.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="col-span-3 bg-white/95 backdrop-blur-md rounded-[40px] p-12 shadow-2xl border border-white/50"
                            >
                                <p className="text-3xl text-slate-700 leading-relaxed mb-10 font-medium">
                                    {t.description}
                                </p>
                                <div className="space-y-6">
                                    {t.steps?.map((step, i) => (
                                        <div key={i} className="flex items-center gap-6 group">
                                            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-black text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                {i + 1}
                                            </div>
                                            <p className="text-2xl text-slate-800 font-bold tracking-tight">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </M.div>

                            <M.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[40px] p-12 shadow-2xl text-white flex flex-col"
                            >
                                <div className="bg-white/20 rounded-full px-6 py-2 self-start mb-8 text-sm font-black uppercase tracking-widest">
                                    Why it works?
                                </div>
                                <p className="text-3xl font-bold leading-[1.4] italic opacity-95">
                                    "{t.whyItWorks}"
                                </p>
                                <div className="mt-auto pt-10 border-t border-white/10 flex justify-end">
                                    <Zap className="w-12 h-12 text-yellow-300 fill-yellow-300" />
                                </div>
                            </M.div>
                        </div>
                    </div>
                </div>
            );
        }

        // --- PRESENTATION CHECKLIST ---
        if (s.type === 'pres-checklist' && s.checklist) {
            const cl = s.checklist;
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    {pattern}
                    <div className="absolute inset-0 flex flex-col justify-center px-24 z-10">
                        <M.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>
                                {cl.title}
                            </h2>
                            {s.subtitle && <p className="text-3xl text-slate-500 mt-4 font-medium">{s.subtitle}</p>}
                        </M.div>

                        <div className="max-w-4xl mx-auto w-full space-y-4">
                            {cl.items.map((item, i) => (
                                <M.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border-2 border-slate-100 flex items-center gap-8 shadow-xl hover:border-blue-400 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <p className="text-3xl font-black text-slate-800 tracking-tight">
                                        {item}
                                    </p>
                                </M.div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        // --- PRESENTATION MINDSET (Before/After) ---
        if (s.type === 'pres-mindset' && s.mindset) {
            const m = s.mindset;
            return (
                <div data-slide-content className={`h-full w-full relative bg-slate-50 overflow-hidden`}>
                    <GridPattern />
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[120px] -ml-48 -mb-48" />
                    {pattern}

                    <div className="absolute inset-0 flex flex-col px-16 py-12 z-10">
                        {/* Header */}
                        <M.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-10 shrink-0"
                        >
                            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-4 shadow-lg shadow-blue-500/20">
                                <RotateCcw className="w-3.5 h-3.5" />
                                Mindset Transformation
                            </div>
                            <h2 className="text-6xl font-black text-slate-900 leading-tight" style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>
                                {s.title}
                            </h2>
                        </M.div>

                        <div className="flex-1 flex items-center justify-center gap-12 max-w-7xl mx-auto w-full">
                            {/* Old Mindset Card */}
                            <M.div
                                initial={{ opacity: 0, scale: 0.9, x: -30 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                className="flex-1 bg-white border-2 border-slate-100 rounded-[3rem] p-12 shadow-xl relative group"
                            >
                                <div className="absolute -top-4 -left-4 bg-slate-100 text-slate-500 px-6 py-2 rounded-2xl font-black uppercase text-sm tracking-widest border-2 border-white shadow-sm">
                                    The Trap
                                </div>
                                <div className="absolute top-8 right-8 text-8xl font-black text-slate-50 opacity-10 select-none">
                                    01
                                </div>
                                <p className="text-4xl font-bold text-slate-400 italic leading-relaxed relative z-10">
                                    "{m.before}"
                                </p>
                                <div className="mt-8 flex items-center gap-3 text-red-400 font-bold uppercase tracking-wider text-xs">
                                    <XCircle className="w-5 h-5" />
                                    Limiting Belief
                                </div>
                            </M.div>

                            {/* Center Arrow/Path */}
                            <M.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, type: 'spring' }}
                                className="shrink-0 flex flex-col items-center gap-4 py-8"
                            >
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 border-4 border-white">
                                    <ChevronRight className="w-10 h-10 text-white" strokeWidth={3} />
                                </div>
                                <div className="bg-white px-6 py-3 rounded-2xl shadow-lg border border-blue-50 text-blue-700 font-black text-lg whitespace-nowrap backdrop-blur-sm">
                                    {m.bridgeText}
                                </div>
                            </M.div>

                            {/* New Mindset Card */}
                            <M.div
                                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex-1 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 shadow-2xl shadow-blue-500/30 relative text-white"
                            >
                                <div className="absolute -top-4 -left-4 bg-amber-400 text-amber-950 px-6 py-2 rounded-2xl font-black uppercase text-sm tracking-widest border-4 border-white shadow-lg">
                                    The Upgrade
                                </div>
                                <div className="absolute top-8 right-8 text-8xl font-black text-white/5 select-none">
                                    02
                                </div>
                                <p className="text-4xl font-black italic leading-relaxed relative z-10">
                                    "{m.after}"
                                </p>
                                <div className="mt-8 flex items-center gap-3 text-blue-200 font-bold uppercase tracking-wider text-xs">
                                    <CheckCircle className="w-5 h-5" />
                                    Empowered Strategy
                                </div>
                            </M.div>
                        </div>
                    </div>
                </div>
            );
        }

        // --- PRESENTATION IMPACT (Quote) ---
        if (s.type === 'pres-impact' && s.impact) {
            const imp = s.impact;
            return (
                <div data-slide-content className={`h-full w-full relative bg-white overflow-hidden`}>
                    <GridPattern />
                    {/* Soft light gradients */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-white to-slate-50 opacity-80" />
                    {pattern}

                    <div className="absolute inset-0 flex flex-col items-center justify-center px-40 z-10">
                        <M.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-[1600px] text-center"
                        >
                            <M.div
                                initial={{ width: 0 }}
                                animate={{ width: 120 }}
                                className="mx-auto h-2 bg-blue-600 rounded-full mb-20 shadow-lg shadow-blue-500/20"
                            />

                            <M.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-slate-900 text-[11rem] font-black leading-[0.85] tracking-tighter mb-20 italic break-words"
                                style={{
                                    fontFamily: 'var(--font-display), "Lilita One", sans-serif',
                                    textShadow: '0 20px 40px rgba(0,0,0,0.05)'
                                }}
                            >
                                {imp.quote}
                            </M.h1>

                            {imp.author && (
                                <M.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center justify-center gap-6"
                                >
                                    <div className="w-20 h-0.5 bg-slate-200" />
                                    <p className="text-blue-600 text-5xl font-black tracking-[0.2em] uppercase">
                                        {imp.author}
                                    </p>
                                    <div className="w-20 h-0.5 bg-slate-200" />
                                </M.div>
                            )}
                        </M.div>
                    </div>

                    {/* Corner accents - Light variant */}
                    <div className="absolute top-0 left-0 w-80 h-80 border-t-[12px] border-l-[12px] border-slate-100 m-24 rounded-tl-[4rem]" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 border-b-[12px] border-r-[12px] border-slate-100 m-24 rounded-br-[4rem]" />
                </div>
            );
        }

        // --- INT-VOCAB SLIDE (Interview Vocabulary Table) ---
        if (s.type === 'int-vocab') {
            const vocab = s.interviewVocab || [];
            return (
                <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                    <GridPattern />
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl opacity-50" />
                    {pattern}
                    <div className={`absolute inset-0 flex flex-col justify-center px-24 z-10`}>
                        <M.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full font-bold uppercase tracking-[0.15em] text-xs mb-4 inline-block">💼 Interview Vocab</span>
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>{s.title}</h2>
                        </M.div>
                        <div className="mt-6 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white/80 backdrop-blur-md">
                            <table className="w-full">
                                <thead>
                                    <tr className={`bg-purple-50/80 border-b border-purple-100 text-purple-900 font-bold uppercase tracking-wider ${fs ? 'text-sm' : 'text-[10px]'}`}>
                                        <th className="text-left p-4" style={{ width: '10%' }}>Category</th>
                                        <th className="text-left p-4" style={{ width: '25%' }}>English Phrase</th>
                                        <th className="text-left p-4" style={{ width: '25%' }}>Indonesian</th>
                                        <th className="text-left p-4" style={{ width: '40%' }}>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vocab.map((v: InterviewVocabItem, i: number) => (
                                        <tr key={i} className={`border-b border-slate-100 last:border-b-0 ${i % 2 === 0 ? 'bg-white/40' : 'bg-slate-50/50'}`}>
                                            <td className={`${fs ? 'p-4' : 'p-2'}`}>
                                                {v.category && (
                                                    <span className={`inline-block px-2 py-0.5 rounded-full font-bold ${fs ? 'text-xs' : 'text-[8px]'} ${v.category === 'Present' ? 'bg-blue-100 text-blue-700' : v.category === 'Past' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>{v.category}</span>
                                                )}
                                            </td>
                                            <td className={`font-bold text-purple-700 ${fs ? 'p-4 text-lg' : 'p-2 text-xs'}`}>{v.term}</td>
                                            <td className={`text-slate-600 ${fs ? 'p-4 text-base' : 'p-2 text-[10px]'}`}>{v.meaning}</td>
                                            <td className={`text-slate-500 italic ${fs ? 'p-4 text-base' : 'p-2 text-[10px]'}`}>{v.example}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {s.teacherNote && (
                            <M.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 self-start">
                                <p className="text-amber-800 text-sm font-medium"><span className="font-bold">👨‍🏫 Teacher Note:</span> {s.teacherNote}</p>
                            </M.div>
                        )}
                    </div>
                </div>
            );
        }

        // --- INT-SCENARIO SLIDE (Interview Q&A with STAR) ---
        if (s.type === 'int-scenario') {
            const scenario = s.interviewScenario;
            if (!scenario) return null;
            return (
                <div data-slide-content className={`h-full w-full relative bg-white overflow-hidden`}>
                    <GridPattern />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-white" />
                    {pattern}
                    <div className="absolute inset-0 flex flex-col justify-center px-24 z-10">
                        <M.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                            <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full font-bold uppercase tracking-[0.15em] text-xs mb-4 inline-block">🎯 Interview Scenario</span>
                            <h2 className={titleStyle} style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>{s.title}</h2>
                        </M.div>
                        <M.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-purple-600 text-white px-8 py-5 rounded-2xl mb-6 shadow-lg shadow-purple-500/20">
                            <p className="text-sm font-bold uppercase tracking-wider text-purple-200 mb-2">Interviewer asks:</p>
                            <p className="text-3xl font-black">&ldquo;{scenario.question}&rdquo;</p>
                        </M.div>
                        <div className="grid grid-cols-4 gap-4">
                            {(['situation', 'task', 'action', 'result'] as const).map((key, i) => {
                                const labels: Record<string, string> = { situation: 'S', task: 'T', action: 'A', result: 'R' };
                                const fullLabels: Record<string, string> = { situation: 'Situation', task: 'Task', action: 'Action', result: 'Result' };
                                const colors: Record<string, string> = { situation: 'bg-blue-50 border-blue-200 text-blue-700', task: 'bg-amber-50 border-amber-200 text-amber-700', action: 'bg-emerald-50 border-emerald-200 text-emerald-700', result: 'bg-purple-50 border-purple-200 text-purple-700' };
                                const badgeColors: Record<string, string> = { situation: 'bg-blue-600', task: 'bg-amber-600', action: 'bg-emerald-600', result: 'bg-purple-600' };
                                return (
                                    <M.div key={key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className={`rounded-2xl border-2 p-5 ${colors[key]}`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-10 h-10 rounded-xl ${badgeColors[key]} text-white flex items-center justify-center font-black text-lg`}>{labels[key]}</div>
                                            <span className="font-bold text-sm uppercase tracking-wider">{fullLabels[key]}</span>
                                        </div>
                                        <p className={`font-medium leading-relaxed ${fs ? 'text-base' : 'text-[11px]'}`}>{scenario.starAnswer[key]}</p>
                                    </M.div>
                                );
                            })}
                        </div>
                        {scenario.tip && (
                            <M.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-6 flex items-center gap-3 text-slate-500">
                                <span className="text-lg">💡</span>
                                <p className="text-sm font-medium italic">{scenario.tip}</p>
                            </M.div>
                        )}
                        {s.teacherNote && (
                            <M.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 self-start">
                                <p className="text-amber-800 text-sm font-medium"><span className="font-bold">👨‍🏫 Teacher Note:</span> {s.teacherNote}</p>
                            </M.div>
                        )}
                    </div>
                </div>
            );
        }

        // --- INT-MOCK SLIDE (Mock Interview Setup) ---
        if (s.type === 'int-mock') {
            const mock = s.mockInterview;
            if (!mock) return null;
            return (
                <div data-slide-content className={`h-full w-full relative bg-white overflow-hidden`}>
                    <GridPattern />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-white to-white" />
                    {pattern}
                    <div className="absolute inset-0 flex flex-col justify-center items-center px-16 z-10">
                        <M.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
                            <span className="bg-purple-100 text-purple-700 px-6 py-2 rounded-full font-bold uppercase tracking-[0.2em] text-sm border border-purple-200 mb-6 inline-block">🎭 Mock Interview</span>
                            <h2 className="text-7xl font-black text-slate-900" style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}>{s.title}</h2>
                        </M.div>
                        <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
                            <M.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white border-2 border-slate-100 rounded-[2rem] p-10 shadow-xl shadow-slate-200/50">
                                <div className="space-y-8">
                                    <div>
                                        <p className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-2">Position</p>
                                        <p className="text-4xl font-black text-slate-800">{mock.jobTitle}</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-2">Company</p>
                                        <p className="text-2xl font-bold text-slate-600">{mock.company}</p>
                                    </div>
                                    <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                                        <p className="text-purple-600 font-bold uppercase tracking-wider text-xs mb-2">Context</p>
                                        <p className="text-lg font-medium text-purple-900 leading-relaxed">{mock.context}</p>
                                    </div>
                                </div>
                            </M.div>
                            <M.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-[2rem] p-10 text-white shadow-2xl shadow-purple-500/30 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
                                <div className="absolute -top-32 -right-32 w-64 h-64 bg-white rounded-full blur-3xl opacity-10" />
                                <div className="relative z-10">
                                    <p className="text-purple-200 font-bold uppercase tracking-wider text-sm mb-6">Interview Questions</p>
                                    <div className="space-y-5">
                                        {mock.questions.map((q: string, i: number) => (
                                            <M.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">{i + 1}</div>
                                                <p className={`font-medium leading-relaxed pt-1.5 ${fs ? 'text-xl' : 'text-sm'}`}>{q}</p>
                                            </M.div>
                                        ))}
                                    </div>
                                </div>
                            </M.div>
                        </div>
                    </div>
                </div>
            );
        }

        // --- FALLBACK ---
        return (
            <div data-slide-content className={`h-full w-full relative ${bg} overflow-hidden`}>
                <GridPattern />
                {pattern}

                <div className="absolute inset-0 flex items-center justify-center px-8">
                    <M.h2
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={titleStyle}
                        style={{ fontFamily: 'var(--font-display), "Lilita One", sans-serif' }}
                    >
                        {s.title}
                    </M.h2>
                </div>
            </div>
        );
    };

    // --- NAVIGATION BAR ---
    const NavigationBar = () => {
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
        const compact = fs || isMobile;

        return (
            <div className={`absolute left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scale < 0.3 && !fs ? 'bottom-6' : (compact ? 'bottom-20 lg:bottom-6' : 'bottom-6')} ${fs && !showControls ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
                <div className={`flex items-center gap-1.5 lg:gap-2 bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl rounded-full ${compact ? 'p-1 pl-3 lg:p-2 lg:pl-6' : 'p-2 pl-6'}`}>
                    <span className={`font-black text-slate-500 mr-1 lg:mr-2 font-mono ${compact ? 'text-sm lg:text-lg' : 'text-lg'}`}>
                        {currentSlide + 1}<span className="opacity-30 mx-0.5">/</span>{slides.length}
                    </span>
                    <div className="h-6 w-px bg-slate-200 mx-0.5 lg:mx-1" />
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0 || isExporting}
                        className={`rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-all disabled:opacity-20 ${compact ? 'w-8 h-8 lg:w-12 lg:h-12' : 'w-12 h-12'}`}
                    >
                        <ChevronLeft className={compact ? 'w-5 h-5 lg:w-7 lg:h-7' : 'w-7 h-7'} />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1 || isExporting}
                        className={`rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-black hover:from-blue-700 hover:to-blue-600 flex items-center gap-1 transition-all shadow-lg shadow-blue-500/20 active:scale-95 ${compact ? 'h-8 lg:h-12 px-4 lg:px-8 text-sm lg:text-lg' : 'h-12 px-8 text-lg'}`}
                    >
                        <span className={isMobile && !fs ? 'hidden' : 'block'}>Next</span>
                        <ChevronRight className={compact ? 'w-5 h-5 lg:w-6 lg:h-6' : 'w-6 h-6'} />
                    </button>
                    <div className="h-6 w-px bg-slate-200 mx-0.5 lg:mx-1" />
                    {/* Annotation Buttons - Desktop Only */}
                    {!isMobile && (
                        <>
                            {/* Draw Annotation Button */}
                            <button
                                onClick={() => {
                                    if (isAnnotationMode && annotationMode === 'draw') {
                                        setIsAnnotationMode(false);
                                    } else {
                                        setIsAnnotationMode(true);
                                        setAnnotationMode('draw');
                                    }
                                }}
                                disabled={isExporting}
                                className={`rounded-full flex items-center justify-center transition-all disabled:opacity-30 ${isAnnotationMode && annotationMode === 'draw' ? 'bg-blue-600 text-white shadow-inner' : 'hover:bg-blue-50 text-slate-700'} ${compact ? 'w-8 h-8 lg:w-12 lg:h-12' : 'w-12 h-12'}`}
                                title="Draw (D)"
                            >
                                <PenTool className={compact ? 'w-4 h-4 lg:w-6 lg:h-6' : 'w-6 h-6'} />
                            </button>
                            {/* Text Annotation Button */}
                            <button
                                onClick={() => {
                                    if (isAnnotationMode && annotationMode === 'text') {
                                        setIsAnnotationMode(false);
                                    } else {
                                        setIsAnnotationMode(true);
                                        setAnnotationMode('text');
                                    }
                                }}
                                disabled={isExporting}
                                className={`rounded-full flex items-center justify-center transition-all disabled:opacity-30 ${isAnnotationMode && annotationMode === 'text' ? 'bg-blue-600 text-white shadow-inner' : 'hover:bg-blue-50 text-slate-700'} ${compact ? 'w-8 h-8 lg:w-12 lg:h-12' : 'w-12 h-12'}`}
                                title="Text (T)"
                            >
                                <Type className={compact ? 'w-4 h-4 lg:w-6 lg:h-6' : 'w-6 h-6'} />
                            </button>
                        </>
                    )}
                    {isExporting ? (
                        <button
                            onClick={handleCancelExport}
                            className={`rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center gap-2 text-red-600 transition-all ${compact ? 'h-8 px-4 text-sm lg:h-12 lg:px-6 lg:text-lg' : 'h-12 px-6 text-lg'}`}
                            title="Cancel Export"
                        >
                            <Loader2 className={`animate-spin ${compact ? 'w-4 h-4 lg:w-5 lg:h-5' : 'w-5 h-5'}`} />
                            <span>{exportProgress}%</span>
                        </button>
                    ) : (
                        <button
                            onClick={exportToPdf}
                            disabled={isExporting}
                            className={`rounded-full hover:bg-emerald-100 flex items-center justify-center text-slate-700 transition-all disabled:opacity-30 ${compact ? 'w-8 h-8 lg:w-12 lg:h-12' : 'w-12 h-12'}`}
                            title="Export to PDF"
                        >
                            <Download className={compact ? 'w-5 h-5 lg:w-6 lg:h-6' : 'w-6 h-6'} />
                        </button>
                    )}
                    <button
                        onClick={toggleFullscreen}
                        disabled={isExporting}
                        className={`rounded-full hover:bg-blue-100 flex items-center justify-center text-slate-700 transition-all disabled:opacity-30 ${compact ? 'w-8 h-8 lg:w-12 lg:h-12' : 'w-12 h-12'}`}
                    >
                        {fs ? <Minimize className={compact ? 'w-5 h-5 lg:w-6 lg:h-6' : 'w-6 h-6'} /> : <Maximize className={compact ? 'w-5 h-5 lg:w-6 lg:h-6' : 'w-6 h-6'} />}
                    </button>
                    {/* Hide Controls Button (Only in Fullscreen) */}
                    {fs && (
                        <>
                            <div className="h-6 w-px bg-slate-200 mx-0.5 lg:mx-1" />
                            <button
                                onClick={toggleControls}
                                className={`rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-all ${compact ? 'w-8 h-8 lg:w-12 lg:h-12' : 'w-12 h-12'}`}
                                title="Hide Controls"
                            >
                                <EyeOff className={compact ? 'w-5 h-5 lg:w-6 lg:h-6' : 'w-6 h-6'} />
                            </button>
                        </>
                    )}
                </div>

                {/* Annotation Toolbar Sub-bar - Desktop Only */}
                <AnimatePresence>
                    {isAnnotationMode && !isExporting && !isMobile && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: '-50%' }}
                            animate={{ opacity: 1, y: 0, x: '-50%' }}
                            exit={{ opacity: 0, y: 10, x: '-50%' }}
                            className={`absolute left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-full p-1 flex items-center gap-1 transition-all duration-300 ${scale < 0.3 && !fs ? 'bottom-12' : (isMobile ? 'bottom-16' : 'bottom-24')}`}
                        >
                            {/* Color picker - only show in draw mode */}
                            {annotationMode === 'draw' && (
                                <>
                                    {['#ef4444', '#22c55e', '#3b82f6', '#f59e0b', '#000000'].map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setAnnotationColor(color)}
                                            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 transition-transform active:scale-90 ${annotationColor === color ? 'border-indigo-600 scale-110' : 'border-transparent hover:scale-105'
                                                }`}
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                    <div className="w-px h-4 sm:h-6 bg-gray-200 mx-0.5 sm:mx-1" />
                                </>
                            )}
                            {/* Text mode help text */}
                            {annotationMode === 'text' && (
                                <span className="text-[10px] text-gray-500 px-2 hidden sm:inline">Click to place • Drag to move • Resize to scale • Double-click to edit</span>
                            )}
                            <button
                                onClick={() => annotationRef.current?.clear()}
                                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors"
                                title="Clear All"
                            >
                                <Eraser className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    // Swipe gestures for mobile
    const { onTouchStart, onTouchEnd } = useSwipeNavigation(nextSlide, prevSlide);

    // 1920x1080 Scaling Logic
    useEffect(() => {
        const updateScale = () => {
            if (!wrapperRef.current) return;
            const { clientWidth, clientHeight } = wrapperRef.current;

            // Calculate scale to fit 1920x1080 into the available space
            // On mobile, we want to maximize real estate
            const isLandscape = clientWidth > clientHeight;

            // Deduct space for navigation controls
            // In fullscreen landscape, we minimize padding to maximize slide size
            const isMobile = clientWidth < 1024;
            const reservedHeight = fs
                ? (isLandscape ? 40 : 80)
                : (isMobile ? 120 : 180);

            const paddingX = fs ? 20 : (isMobile ? 0 : 64);

            const scaleX = (clientWidth - paddingX) / 1920;
            const scaleY = (clientHeight - reservedHeight) / 1080;

            // Use the smaller scale factor to ensure it fits completely
            const newScale = Math.min(scaleX, scaleY);
            setScale(Math.max(0.1, newScale));
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, [fs]); // Using 'fs' (isFullscreen alias) to trigger update

    return (
        <div
            ref={wrapperRef}
            className={`w-full h-full flex items-center justify-center relative touch-pan-y ${fs ? 'fixed inset-0 z-[9999] bg-black' : 'bg-transparent'}`}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            {/* 1920x1080 Stage Container */}
            <div
                ref={containerRef}
                style={{
                    width: 1920,
                    height: 1080,
                    transform: `translateX(-50%) translateY(-50%) scale(${scale})`,
                    transformOrigin: 'center center',
                    left: '50%',
                    top: fs ? '50%' : (typeof window !== 'undefined' && window.innerWidth < 1024 ? 'calc(50% - 20px)' : 'calc(50% - 40px)'), // Center more precisely in FS, offset in normal to account for nav
                    position: 'absolute',
                    flexShrink: 0
                }}
                className={`overflow-hidden ${fs ? '' : 'rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-4 border-white'} bg-white`}
            >
                {/* Slide Content - Add disable selection when annotating */}
                {isExporting ? (
                    // During export: render without any animations
                    <div
                        className={`absolute inset-0 w-full h-full ${isAnnotationMode ? 'select-none' : ''}`}
                        ref={slideRef}
                    >
                        {renderSlide()}
                    </div>
                ) : (
                    // Normal view: with animations
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentSlide}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className={`absolute inset-0 w-full h-full ${isAnnotationMode ? 'select-none' : ''}`}
                            style={{ isolation: 'isolate' }}
                            ref={slideRef}
                        >
                            {renderSlide()}
                        </motion.div>
                    </AnimatePresence>
                )}

                {/* Annotation Overlay - Must be above slide content */}
                <AnnotationOverlay
                    ref={annotationRef}
                    isActive={isAnnotationMode && !isExporting}
                    mode={annotationMode}
                    color={annotationColor}
                    lineWidth={8}
                />

                {isExporting && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-[100]">
                        <div className="bg-white rounded-3xl px-8 py-6 flex flex-col items-center gap-4 shadow-2xl">
                            <div className="flex items-center gap-4">
                                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                                <span className="font-bold text-slate-800 text-xl">Exporting PDF... {exportProgress}%</span>
                            </div>
                            <button
                                onClick={handleCancelExport}
                                className="text-sm text-red-500 hover:text-red-700 font-bold uppercase tracking-wider"
                            >
                                Cancel Export
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <NavigationBar />

            {/* Restore Controls Buton (When hidden in Fullscreen) */}
            {fs && !showControls && (
                <button
                    onClick={toggleControls}
                    className="absolute bottom-6 right-6 z-[110] bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-all shadow-lg active:scale-95 border border-white/20 animate-in fade-in zoom-in duration-300"
                    title="Show Controls"
                >
                    <Eye className="w-6 h-6" />
                </button>
            )}

            {/* Mobile Portrait Warning */}
            {scale < 0.25 && !isFullscreen && !isExporting && (
                <motion.div
                    initial={{ opacity: 0, y: 20, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    className={`absolute bottom-24 left-1/2 bg-white/95 backdrop-blur-md text-blue-600 px-6 py-3 rounded-full text-xs font-black flex items-center gap-3 pointer-events-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-[110] border-2 border-blue-50 transition-all whitespace-nowrap duration-500 ${fs && !showControls ? 'opacity-0 translate-y-10' : 'opacity-100'}`}
                >
                    <RotateCcw className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
                    <span className="tracking-widest uppercase">Rotate for best view</span>
                </motion.div>
            )}
            {/* Hidden Off-Screen Container for PDF Export */}
            {hiddenSlideIndex !== null && (
                <div
                    style={{
                        position: 'fixed',
                        left: '-9999px',
                        top: 0,
                        width: 1920,
                        height: 1080,
                        overflow: 'hidden',
                        pointerEvents: 'none',
                        zIndex: -1000
                    }}
                >
                    <div
                        ref={hiddenContainerRef}
                        style={{
                            width: 1920,
                            height: 1080,
                            backgroundColor: 'white',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        className="flex flex-col box-border"
                    >
                        {/* 
                           Render the slide at hiddenSlideIndex. 
                           IMPORTANT: Passing the index ensures the correct context is used.
                        */}
                        <div className="absolute inset-0 w-full h-full" style={{ isolation: 'isolate' }}>
                            {renderSlide(hiddenSlideIndex)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

