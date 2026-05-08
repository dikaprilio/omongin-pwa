"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowRight, Zap, BookOpen, Timer, Eye, Trophy, Play } from 'lucide-react';
import { StudentLayout } from '@/components/layouts/StudentLayout';
import { RSVPReader } from '@/components/reading/RSVPReader';

const SAMPLE_TEXT = `Reading is a complex cognitive process of decoding symbols in order to construct or derive meaning. Reading is a means of language acquisition, communication, and of sharing information and ideas. Like all languages, it is a complex interaction between the text and the reader which is shaped by the reader's prior knowledge, experiences, attitude, and language community which is culturally and socially situated. The reading process requires continuous practice, development, and refinement. Keep practicing your speed and comprehension every day to see massive improvements in your fluency.`;

// --- Main Page ---
export default function ReadingTestPage() {
    const [showDemo, setShowDemo] = useState(false);

    return (
        <StudentLayout>
        <div className="min-h-screen font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">

            {/* Demo Reader Overlay */}
            {showDemo && (
                <RSVPReader
                    text={SAMPLE_TEXT}
                    defaultWpm={350}
                    showSetup={false}
                    onExit={() => setShowDemo(false)}
                />
            )}

            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 selection:bg-yellow-200 selection:text-blue-900">
                    {/* Background Grid */}
                    <div className="absolute inset-0 -z-20 opacity-[0.03]"
                        style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                    />

                    {/* Floating Doodles */}
                    <motion.div
                        animate={{ x: [-20, 20, -20], y: [-10, 10, -10], rotate: [0, 10, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-10 text-yellow-300 opacity-70 hidden lg:block"
                    >
                        <Sparkles className="w-24 h-24 fill-current" />
                    </motion.div>
                    <motion.div
                        animate={{ x: [20, -20, 20], y: [10, -10, 10], rotate: [0, -15, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/3 right-10 text-blue-300 opacity-60 hidden lg:block"
                    >
                        <BookOpen className="w-28 h-28" />
                    </motion.div>

                    <motion.div
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
                        initial="hidden"
                        animate="visible"
                        className="max-w-5xl mx-auto px-4 relative z-10 w-full flex flex-col items-center"
                    >
                        {/* Badge */}
                        <motion.div variants={{ hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 15 } } }} className="mb-6">
                            <div className="relative group cursor-default">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur opacity-30"></div>
                                <div className="relative px-4 py-1.5 bg-white ring-1 ring-gray-900/5 rounded-full leading-none flex items-center space-x-2 shadow-lg">
                                    <Zap className="w-4 h-4 text-yellow-500 fill-current" />
                                    <span className="text-gray-800 font-bold text-xs">SPEED READING TOOL</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Headline */}
                        <motion.div variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} className="text-center mb-8">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter">
                                <motion.span variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 12 } } }} className="block">
                                    Latih Kecepatan
                                </motion.span>
                                <motion.span variants={{ hidden: { scale: 1.5, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 15, mass: 1.5 } } }} className="relative inline-block mt-2">
                                    <span className="relative z-10 text-white px-6 py-2 bg-blue-600 transform -skew-x-3 inline-block border-b-4 border-blue-800 rounded-lg shadow-xl">
                                        Bacamu!
                                    </span>
                                    <motion.div animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-4 -right-4 text-yellow-400">
                                        <Sparkles className="w-8 h-8 fill-current" />
                                    </motion.div>
                                </motion.span>
                            </h1>
                        </motion.div>

                        {/* Subheadline */}
                        <motion.p variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }} className="text-base lg:text-xl text-gray-600 mb-10 font-medium max-w-xl mx-auto text-center leading-relaxed">
                            Pakai teknologi <span className="text-blue-600 font-bold bg-blue-50 px-1 transform -rotate-1 inline-block">RSVP</span> buat baca lebih cepat tanpa perlu gerakin mata. Langsung coba di bawah!
                        </motion.p>

                        {/* Try Demo Card */}
                        <motion.div
                            variants={{ hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.3 } } }}
                            className="w-full max-w-xl"
                        >
                            <div className="relative p-8 bg-white border-2 border-gray-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] transform rotate-[-0.5deg]">
                                {/* Tape Effect */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-yellow-200/90 rotate-[2deg] z-10 shadow-sm"
                                    style={{ clipPath: 'polygon(2% 0%, 98% 2%, 100% 98%, 0% 100%)' }}>
                                </div>

                                <div className="text-center">
                                    <h3 className="text-2xl font-black text-gray-900 mb-4">Coba Sekarang!</h3>
                                    <p className="text-gray-500 mb-6">Klik tombol di bawah untuk mencoba teknologi RSVP secara langsung.</p>

                                    <button
                                        onClick={() => setShowDemo(true)}
                                        className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-200"
                                    >
                                        <Play className="w-6 h-6 fill-current" />
                                        Try Demo
                                    </button>
                                </div>
                            </div>

                            <p className="mt-6 text-center text-sm text-gray-400 font-medium">
                                * Fokus ke huruf <span className="text-blue-600 font-bold">biru</span> di tengah. Jangan gerakin mata!
                            </p>

                            {/* CTAs */}
                            <div className="mt-8 text-center flex flex-col items-center gap-4">
                                <Link
                                    href="/reading-test/practice"
                                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg"
                                >
                                    <Zap className="w-5 h-5 text-yellow-400 fill-current" />
                                    Practice Mode
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <Link
                                    href="/reading-test/daily"
                                    className="group inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-bold transition-all transform hover:scale-105 shadow-md"
                                >
                                    <Trophy className="w-5 h-5 text-blue-600" />
                                    Daily Challenge
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <p className="mt-3 text-xs text-gray-400">Pakai teksmu sendiri, atur kecepatan, full screen!</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Explanation Section */}
                <section id="why" className="py-20 md:py-28 bg-gray-50/50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Kenapa Pakai <span className="text-blue-600">RSVP</span>?</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Eye, title: "Mata Gak Capek", desc: "Kata-kata muncul di satu titik. Mata kamu gak perlu lompat-lompat baca baris panjang." },
                                { icon: Timer, title: "2-3x Lebih Cepat", desc: "Rata-rata orang baca 200-250 WPM. Dengan RSVP, kamu bisa latihan sampai 600+ WPM!" },
                                { icon: Zap, title: "Fokus Maksimal", desc: "Satu kata, satu fokus. Pikiran gak kemana-mana, langsung serap artinya." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                                    viewport={{ once: true }}
                                    className="relative group"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                    <div className="relative bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-lg h-full transform group-hover:-translate-y-1 transition-transform">
                                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 transform -rotate-3 group-hover:rotate-3 transition-transform">
                                            <item.icon className="w-7 h-7 text-blue-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-500">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-400 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    </div>
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>

                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-8 text-white tracking-tight">
                            Mau Belajar Lebih Lanjut?
                        </h2>
                        <p className="text-xl text-blue-50 mb-10 font-medium max-w-2xl mx-auto">
                            Gabung kelas English Chill Course dan belajar bahasa Inggris dengan metode yang santai tapi efektif.
                        </p>
                        <Link
                            href="https://wa.me/628978902180"
                            className="inline-block px-10 py-5 bg-white text-blue-600 rounded-full font-black text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
                        >
                            Gabung Sekarang
                        </Link>
                    </div>
                </section>
            </main>

        </div>
        </StudentLayout>
    );
}
