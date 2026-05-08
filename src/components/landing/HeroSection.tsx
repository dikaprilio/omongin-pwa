'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, Zap, Sparkles, ArrowRight, Star } from 'lucide-react'
import { useRef } from 'react'

export default function HeroSection() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    // Parallax transforms for side doodles
    const leftDoodleY = useTransform(scrollYProgress, [0, 1], [0, -200])
    const rightDoodleY = useTransform(scrollYProgress, [0, 1], [0, -300])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={containerRef} className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden selection:bg-yellow-200 selection:text-blue-900 pt-16 lg:pt-0">

            {/* Background Grid/Paper Texture */}
            <div className="absolute inset-0 -z-20 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Side Doodles (Left) - Fluid & Scroll Responsive */}
            <motion.div
                style={{ y: leftDoodleY, opacity }}
                className="absolute left-0 top-0 bottom-0 w-64 hidden lg:flex flex-col justify-center items-start pointer-events-none z-0"
            >
                {/* Yellow Star - Floating in/out and up/down */}
                <motion.div
                    animate={{
                        x: [-100, 40, 20, -100],
                        y: [-50, 20, -30, -50],
                        rotate: [0, 45, 90, 0]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.4, 0.7, 1]
                    }}
                    className="absolute top-1/4 left-0 text-yellow-300 opacity-80"
                >
                    <Star className="w-24 h-24 fill-current" />
                </motion.div>

                {/* Blue Swirl */}
                <motion.div
                    animate={{
                        x: [-120, 60, 30, -120],
                        y: [50, -20, 40, 50],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                        times: [0, 0.5, 0.8, 1]
                    }}
                    className="absolute bottom-1/3 left-0 text-blue-300 opacity-60"
                >
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="w-28 h-28">
                        <path d="M50 50 m-40 0 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeDasharray="10 20" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Side Doodles (Right) - Fluid & Scroll Responsive */}
            <motion.div
                style={{ y: rightDoodleY, opacity }}
                className="absolute right-0 top-0 bottom-0 w-64 hidden lg:flex flex-col justify-center items-end pointer-events-none z-0"
            >
                {/* Blue Triangle */}
                <motion.div
                    animate={{
                        x: [100, -40, -10, 100],
                        y: [30, -40, 20, 30],
                        rotate: [0, -45, -90, 0]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                        times: [0, 0.4, 0.7, 1]
                    }}
                    className="absolute top-1/3 right-0 text-blue-400 opacity-50"
                >
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="w-24 h-24">
                        <path d="M50 15 L85 85 L15 85 Z" />
                    </svg>
                </motion.div>

                {/* Yellow Sparkle */}
                <motion.div
                    animate={{
                        x: [120, -70, -30, 120],
                        y: [-20, 30, -50, -20],
                        scale: [1, 1.2, 1],
                        rotate: [0, 180]
                    }}
                    transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3,
                        times: [0, 0.5, 0.8, 1]
                    }}
                    className="absolute bottom-1/4 right-0 text-yellow-400 opacity-70"
                >
                    <Sparkles className="w-32 h-32 fill-current" />
                </motion.div>
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.2
                        }
                    }
                }}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center h-full"
            >

                {/* Sticker 1: The Badge - Elastic Drop */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 15,
                                mass: 1.2
                            }
                        }
                    }}
                    className="mb-6 relative z-20 mt-8 lg:-mt-8"
                >
                    <div className="relative group cursor-default">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative px-4 py-1.5 bg-white ring-1 ring-gray-900/5 rounded-full leading-none flex items-center space-x-2 shadow-lg">
                            <span className="text-red-600 font-bold text-[10px] tracking-wider uppercase animate-pulse">EASY WITH ECC!</span>
                            <span className="text-gray-800 font-bold text-xs">KURSUS TERJANGKAU</span>
                        </div>
                    </div>
                </motion.div>

                {/* Sticker 2: The Headline - Split Animation */}
                <motion.div
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                    className="relative z-10 text-center mb-6 max-w-3xl"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter transform rotate-1">
                        {/* Line 1: Slide & Tilt */}
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, x: -50, rotate: -10 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    rotate: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 12
                                    }
                                }
                            }}
                            className="block whitespace-nowrap"
                        >
                            Belajar Inggris?
                        </motion.span>

                        {/* Line 2: The Stamp */}
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, scale: 2.5, rotate: 10 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    rotate: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 15,
                                        mass: 1.5
                                    }
                                }
                            }}
                            className="relative inline-block mt-1 lg:mt-3"
                        >
                            <span className="relative z-10 text-white px-6 py-2 lg:px-6 lg:py-2 bg-blue-600 transform -skew-x-3 inline-block border-b-4 lg:border-b-6 border-blue-800 rounded-lg shadow-xl whitespace-nowrap text-5xl sm:text-6xl md:text-7xl">
                                Ga Usah Kaku!
                            </span>
                            <motion.div
                                animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-3 -right-3 lg:-top-5 lg:-right-5 text-yellow-400"
                            >
                                <Sparkles className="w-16 h-16 lg:w-8 lg:h-8 fill-current" />
                            </motion.div>
                        </motion.span>
                    </h1>
                </motion.div>

                {/* Subheadline */}
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="text-base lg:text-xl text-gray-600 mb-10 font-medium max-w-md lg:max-w-xl mx-auto text-center leading-relaxed font-handwriting"
                >
                    Kursus santai bahasa inggris <span className="text-blue-600 font-bold bg-blue-50 px-1 transform -rotate-2 inline-block">one-on-one</span> online dengan harga yang sangat terjangkau
                </motion.p>

                {/* Sticker 4: CTA Buttons - Jelly Pop */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.5 },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 10
                            }
                        }
                    }}
                    className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto relative z-30 px-4 items-center"
                >
                    <Link
                        href="https://wa.me/628978902180"
                        target="_blank"
                        className="group relative w-full sm:w-auto"
                    >
                        <div className="absolute inset-0 bg-green-600 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] transform translate-y-1 translate-x-1 transition-transform group-hover:translate-y-2 group-hover:translate-x-2"></div>
                        <div className="relative px-6 py-3 bg-green-500 text-white font-bold text-base sm:text-lg rounded-[255px_15px_225px_15px/15px_225px_15px_255px] border-2 border-green-700 flex items-center justify-center gap-2 transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                            <MessageCircle className="w-5 h-5" />
                            Mulai Chatting
                        </div>
                    </Link>

                    <Link
                        href="#classes"
                        className="group relative w-full sm:w-auto"
                    >
                        <div className="absolute inset-0 bg-gray-200 rounded-[15px_225px_15px_255px/255px_15px_225px_15px] transform translate-y-1 translate-x-1 transition-transform group-hover:translate-y-2 group-hover:translate-x-2"></div>
                        <div className="relative px-6 py-3 bg-white text-gray-900 font-bold text-base sm:text-lg rounded-[15px_225px_15px_255px/255px_15px_225px_15px] border-2 border-gray-900 flex items-center justify-center gap-2 transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                            <Zap className="w-5 h-5 text-yellow-500 fill-current" />
                            Liat Kelas
                        </div>
                    </Link>
                </motion.div>

            </motion.div>
        </section>
    )
}
