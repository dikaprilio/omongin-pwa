'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function LandingNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 px-4">
            <div className="max-w-4xl mx-auto relative">
                {/* Tape Effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/90 rotate-[-3deg] z-20 shadow-sm mask-tape"
                    style={{ clipPath: 'polygon(2% 0%, 98% 2%, 100% 98%, 0% 100%)' }}>
                    <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
                </div>

                {/* Navbar Card */}
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white/95 backdrop-blur-xl border-2 border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-4 sm:px-6 py-3 flex items-center justify-between relative z-10 transform rotate-1 backface-hidden translate-z-0 transform-gpu will-change-transform subpixel-antialiased"
                >
                    {/* Left: Logo & Mobile Menu Button */}
                    <div className="flex items-center gap-3">
                        <button
                            className="md:hidden p-1 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/images/ecc-logo.png"
                                    alt="ECC Logo"
                                    fill
                                    className="object-contain transform group-hover:scale-110 transition-transform"
                                />
                            </div>
                            <span className="font-black text-xl tracking-tighter text-blue-600 hidden sm:block">ECC.</span>
                        </Link>
                    </div>

                    {/* Center: Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        <Link href="#classes" className="text-gray-600 font-medium hover:text-blue-600 transition-colors font-handwriting text-lg transform hover:rotate-2">
                            Class Menu
                        </Link>
                    </div>

                    {/* Right: CTA Button (Visible on Mobile) */}
                    <div>
                        <Link
                            href="https://wa.me/628978902180"
                            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 transform -rotate-1 inline-block"
                        >
                            Tanya Dulu Aja
                        </Link>
                    </div>
                </motion.div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 mt-4 p-4 bg-white border-2 border-gray-100 rounded-2xl shadow-xl md:hidden flex flex-col gap-4 z-50"
                    >
                        <Link
                            href="#classes"
                            className="text-gray-600 font-medium p-2 hover:bg-gray-50 rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Class Menu
                        </Link>
                        <Link
                            href="/login"
                            className="text-gray-600 font-medium p-2 hover:bg-gray-50 rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Login
                        </Link>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}
