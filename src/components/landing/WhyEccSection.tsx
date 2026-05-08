'use client'

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, MessageCircle } from 'lucide-react'

const chats = [
    {
        id: 'personalized',
        question: "Belajarnya bisa request materi?",
        answer: "Bisa banget! Materi 100% disesuaikan dengan level, kebutuhan, dan tujuan kamu. Jadi ga buang waktu pelajari yang ga perlu.",
        color: 'bg-blue-500',
    },
    {
        id: 'tutors',
        question: "Gurunya galak ga?",
        answer: "Big NO! Tutor kita super asik, sabar, dan supportive. Berasa ngobrol sama temen sendiri, jadi ga bakal deg-degan.",
        color: 'bg-pink-500',
    },
    {
        id: 'schedule',
        question: "Kalau sibuk kerja/kuliah gimana?",
        answer: "Santai, jadwalnya fleksibel. Kamu bisa atur waktu belajar kapan aja, termasuk malam atau weekend.",
        color: 'bg-orange-500',
    },
    {
        id: 'materials',
        question: "Materinya ngebosenin ga?",
        answer: "Engga dong! Kita pake materi praktis yang relevan sama dunia nyata. Langsung kepake buat kerja, kuliah, atau daily convo.",
        color: 'bg-emerald-500',
    },
    {
        id: 'price',
        question: "Harganya mahal?",
        answer: "Mulai 50rb aja! Kualitas premium tapi harga tetep ramah di kantong pelajar & mahasiswa.",
        color: 'bg-purple-500',
    },
]

export default function WhyEccSection() {
    const [openIds, setOpenIds] = useState<string[]>([])

    const toggleChat = (id: string) => {
        setOpenIds(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        )
    }

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6 animate-fade-in-up">
                        <MessageCircle className="w-4 h-4" />
                        FAQ
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Kenapa Harus <span className="text-blue-600">ECC?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Masih ragu? Sini kita ngobrol dulu.
                    </p>
                </div>

                <div className="space-y-6">
                    {chats.map((chat, idx) => (
                        <div key={chat.id} className="flex flex-col animate-fade-in-up" style={{ animationDelay: `${0.3 + (idx * 0.1)}s` }}>
                            {/* Question (User Bubble) */}
                            <div className="flex justify-end mb-2">
                                <button
                                    onClick={() => toggleChat(chat.id)}
                                    className={`group flex items-center gap-3 pl-6 pr-4 py-4 rounded-3xl rounded-tr-sm text-white font-bold text-left shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 max-w-[90%] md:max-w-[80%] ${chat.color}`}
                                >
                                    <span className="text-lg">{chat.question}</span>
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-90">
                                        {openIds.includes(chat.id) ? (
                                            <Minus className="w-5 h-5 text-white" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-white" />
                                        )}
                                    </div>
                                </button>
                            </div>

                            {/* Answer (System Bubble) */}
                            <AnimatePresence>
                                {openIds.includes(chat.id) && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, y: -10 }}
                                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                                        exit={{ opacity: 0, height: 0, y: -10 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="overflow-hidden flex justify-start"
                                    >
                                        <div className="bg-white border border-gray-100 p-6 rounded-3xl rounded-tl-sm shadow-md max-w-[90%] md:max-w-[80%] text-gray-600 leading-relaxed font-medium relative">
                                            {/* Tiny Avatar/Icon decoration */}
                                            <div className="absolute -left-2 -top-2 w-4 h-4 bg-gray-200 rounded-full animate-ping opacity-20"></div>
                                            {chat.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
