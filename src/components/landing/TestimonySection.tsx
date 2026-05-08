'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { Quote, Star, Sparkles } from 'lucide-react'

const testimonies = [
    {
        id: 1,
        name: 'Ahmad',
        role: 'Anak SMP',
        content: 'Sumpah awalnya males bgt les inggris WKWKWKW tapi di sini tutornya asik parah. Nilai ulangan gw naik drastis!!!!!',
        rating: 5,
        color: 'bg-yellow-200',
        tapeColor: 'bg-yellow-400/50',
        rotate: 'rotate-1',
    },
    {
        id: 2,
        name: 'Yuliana',
        role: 'Mahasiswa',
        content: 'Buat interview magang aku pake bahasa inggris, but with ECC aku jadi terbiasa buat english interviews',
        rating: 5,
        color: 'bg-pink-200',
        tapeColor: 'bg-pink-400/50',
        rotate: '-rotate-2',
    },
    {
        id: 3,
        name: 'Dimas A.',
        role: 'Karyawan',
        content: 'Dulu meeting sama klien bule keringet dingin, sekarang alhamdulillah aman!',
        rating: 5,
        color: 'bg-blue-200',
        tapeColor: 'bg-blue-400/50',
        rotate: 'rotate-2',
    },
    {
        id: 4,
        name: 'Tiara',
        role: 'Fresh Grad',
        content: 'ecc helps my pronounciation so much dan jadi tempat aku belajar bahasa inggris tanpa harus merasa dijudge',
        rating: 5,
        color: 'bg-green-200',
        tapeColor: 'bg-green-400/50',
        rotate: '-rotate-1',
    }
]

export default function TestimonySection() {
    const [cards, setCards] = useState(testimonies)
    const activeIndex = testimonies.findIndex(t => t.id === cards[0].id)

    const removeCard = (dir: number) => {
        // Move the first card to the end of the array
        const newCards = [...cards]
        const firstCard = newCards.shift()
        if (firstCard) newCards.push(firstCard)
        setCards(newCards)
    }

    return (
        <section id="testimony" className="py-24 relative overflow-hidden">
            {/* Background Elements - Corkboard feel? Or just clean */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 tracking-tight">
                            Kata Mereka yang Udah <span className="text-blue-600">Chill</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Real stories, sticky notes style!
                        </p>
                    </motion.div>
                </div>

                {/* --- MOBILE VIEW: Stacked Swipe --- */}
                <div className="md:hidden w-full flex flex-col items-center">
                    <div className="relative w-full max-w-md h-[450px] flex items-center justify-center perspective-1000">
                        <AnimatePresence mode="popLayout">
                            {cards.slice(0, 3).reverse().map((card) => {
                                const index = cards.indexOf(card)
                                const isFront = index === 0
                                return (
                                    <Card
                                        key={card.id}
                                        data={card}
                                        index={index}
                                        isFront={isFront}
                                        onRemove={removeCard}
                                    />
                                )
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Segmented Progress Bar (Mobile Only) */}
                    <div className="mt-8 flex gap-2">
                        {testimonies.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-gray-900' : 'w-4 bg-gray-200'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* --- DESKTOP VIEW: Bulletin Board Grid --- */}
                <div className="hidden md:grid grid-cols-2 gap-12 w-full max-w-5xl">
                    {testimonies.map((testimony, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02, rotate: 0, transition: { duration: 0.2 } }}
                            className={`relative p-8 ${testimony.color} shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between min-h-[320px] ${testimony.rotate}`}
                            style={{
                                clipPath: 'polygon(0% 0%, 100% 0%, 100% 98%, 98% 100%, 0% 100%)', // Subtle folded corner effect
                            }}
                        >
                            {/* Washi Tape Element */}
                            <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 ${testimony.tapeColor} opacity-80 rotate-1 shadow-sm`}></div>

                            <Quote className="absolute top-8 right-8 w-8 h-8 text-gray-800/20 fill-current" />

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center text-gray-900 font-bold text-xl shadow-sm border-2 border-white/20">
                                    {testimony.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">{testimony.name}</h4>
                                    <p className="text-sm text-gray-700 font-medium">{testimony.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-800 text-lg leading-relaxed font-handwriting font-medium mb-6 relative z-10">
                                "{testimony.content}"
                            </p>

                            <div className="flex items-center justify-between relative z-10">
                                <div className="flex gap-1">
                                    {[...Array(testimony.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-gray-900 fill-current" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

function Card({ data, index, isFront, onRemove }: { data: any, index: number, isFront: boolean, onRemove: (dir: number) => void }) {
    const x = useMotionValue(0)
    const rotate = useTransform(x, [-200, 200], [-15, 15])
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0])

    const handleDragEnd = (_: any, info: any) => {
        const threshold = 100
        if (info.offset.x > threshold) {
            onRemove(1)
        } else if (info.offset.x < -threshold) {
            onRemove(-1)
        }
    }

    // Stack Styles
    const variants: any = {
        front: {
            zIndex: 30,
            scale: 1,
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: { type: 'spring', stiffness: 300, damping: 20 }
        },
        middle: {
            zIndex: 20,
            scale: 0.95,
            opacity: 0.7,
            y: 15,
            rotate: -2,
            transition: { duration: 0.4 }
        },
        back: {
            zIndex: 10,
            scale: 0.9,
            opacity: 0.4,
            y: 30,
            rotate: 2,
            transition: { duration: 0.4 }
        },
        exit: (custom: number) => ({
            zIndex: 40,
            x: custom === 1 ? 500 : -500,
            opacity: 0,
            rotate: custom === 1 ? 20 : -20,
            transition: { duration: 0.3 }
        })
    }

    return (
        <motion.div
            layout
            custom={x.get() > 0 ? 1 : -1} // Direction for exit
            variants={variants}
            initial="back"
            animate={index === 0 ? 'front' : index === 1 ? 'middle' : 'back'}
            exit="exit"
            style={{
                x: isFront ? x : 0,
                rotate: isFront ? rotate : 0,
                opacity: isFront ? opacity : undefined,
                position: 'absolute',
                width: '100%',
            }}
            drag={isFront ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: 'grabbing' }}
            className={`${data.color} rounded-none shadow-xl cursor-grab select-none w-full max-w-sm mx-auto h-[450px] flex flex-col justify-between p-8 relative`}
        // Add clip-path for paper feel if desired, or just keep it simple
        >
            {/* Washi Tape Element */}
            <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 ${data.tapeColor} opacity-80 rotate-1 shadow-sm`}></div>

            {/* Quote Icon */}
            <div className="absolute top-8 right-8">
                <Quote className="w-8 h-8 text-gray-800/20 fill-current" />
            </div>

            {/* Header */}
            <div className="flex items-center gap-4 relative z-10 mt-4">
                <div className="w-14 h-14 rounded-full bg-white/50 flex items-center justify-center text-gray-900 font-bold text-xl shadow-sm border-2 border-white/20">
                    {data.name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-lg">{data.name}</h4>
                    <p className="text-sm text-gray-700 font-medium">{data.role}</p>
                </div>
            </div>

            {/* Content */}
            <div className="flex-grow flex items-center relative z-10">
                <p className="text-gray-800 text-xl leading-relaxed font-handwriting font-medium">
                    "{data.content}"
                </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4 relative z-10">
                <div className="flex gap-1">
                    {[...Array(data.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gray-900 fill-current" />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}