"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

const slides = [
    {
        id: 1,
        image: "/capu/Onboarding-Capu-Waving-Hi.svg",
        title: "Halo, Gw Capu!",
        subtitle:
            "Belajar bahasa Inggris gak harus ribet. Santai aja kaya ngopi bareng temen!",
        features: [],
    },
    {
        id: 2,
        image: "/capu/Onboarding-Capu-Speaking.svg",
        title: "Ngobrol & Latih",
        subtitle:
            "Mau latih speaking, simulasi interview, atau ngobrol sama AI tutor? Bisa semua!",
        features: [
            { icon: "Mic", label: "Speaking AI" },
            { icon: "MessageCircle", label: "AI Chat 24/7" },
            { icon: "Briefcase", label: "Interview Sim" },
        ],
    },
    {
        id: 3,
        image: "/capu/Onboarding-Capu-Reading.svg",
        title: "Yuk Mulai!",
        subtitle: "Gak usah perfect, yang penting mulai dulu. Capu temenin tiap hari!",
        features: [],
    },
];

const MicIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
    </svg>
);

const MessageIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
    </svg>
);

const BriefcaseIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
    </svg>
);

const ChevronRightIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const iconMap: Record<string, React.FC> = {
    Mic: MicIcon,
    MessageCircle: MessageIcon,
    Briefcase: BriefcaseIcon,
};

interface OnboardingScreenProps {
    onComplete: () => void;
}

export default function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [wiggleCapu, setWiggleCapu] = useState(false);
    const touchStart = useRef<number | null>(null);
    const touchEnd = useRef<number | null>(null);

    const minSwipeDistance = 50;

    const onTouchStart = useCallback((e: React.TouchEvent) => {
        touchStart.current = e.targetTouches[0].clientX;
    }, []);

    const onTouchMove = useCallback((e: React.TouchEvent) => {
        touchEnd.current = e.targetTouches[0].clientX;
    }, []);

    const onTouchEnd = useCallback(() => {
        if (!touchStart.current || !touchEnd.current) return;
        const distance = touchStart.current - touchEnd.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && currentSlide < slides.length - 1) {
            goToSlide(currentSlide + 1);
        } else if (isRightSwipe && currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }

        touchStart.current = null;
        touchEnd.current = null;
    }, [currentSlide]);

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 400);
    };

    const skipToEnd = () => {
        goToSlide(slides.length - 1);
    };

    const handleCapuClick = () => {
        setWiggleCapu(true);
        setTimeout(() => setWiggleCapu(false), 500);
    };

    const handleGetStarted = () => {
        localStorage.setItem("onboardingComplete", "true");
        onComplete();
    };

    const slide = slides[currentSlide];
    const isLastSlide = currentSlide === slides.length - 1;

    return (
        <div
            className="fixed inset-0 z-[100] bg-white overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* CSS Animations */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                @keyframes steam {
                    0% { transform: translateY(0) scale(1); opacity: 0.6; }
                    100% { transform: translateY(-25px) scale(1.5); opacity: 0; }
                }
                @keyframes wiggle {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-5deg); }
                    75% { transform: rotate(5deg); }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes pulse-soft {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.02); }
                }
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0) rotate(var(--rotate, 0deg)); }
                    50% { transform: translateY(-6px) rotate(var(--rotate, 0deg)); }
                }
                .animate-float { animation: float 3s ease-in-out infinite; }
                .animate-steam { animation: steam 2s ease-out infinite; }
                .animate-wiggle { animation: wiggle 0.5s ease-in-out; }
                .animate-slide-up { animation: slideUp 0.5s ease-out forwards; }
                .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
                .animate-pulse-soft { animation: pulse-soft 2s ease-in-out infinite; }
            `}</style>

            {/* Skip button - only on first two screens */}
            {!isLastSlide && (
                <button
                    onClick={skipToEnd}
                    className="absolute top-12 right-6 z-20 text-slate-400 text-sm font-medium hover:text-slate-600 transition-colors"
                >
                    Lewati
                </button>
            )}

            {/* Main content container */}
            <div className="h-full flex flex-col relative">
                {/* SLIDE 1: Halo Gw Capu! */}
                {currentSlide === 0 && (
                    <div className="h-full flex flex-col animate-fade-in">
                        {/* Text content - Top section */}
                        <div className="px-8 pt-16 pb-4">
                            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight animate-slide-up">
                                Belajar 1-on-1,
                                <span className="text-blue-600"> Murah!</span>
                            </h1>
                            <p
                                className="text-slate-500 text-lg leading-relaxed animate-slide-up"
                                style={{ animationDelay: "0.1s" }}
                            >
                                Latih speaking & persiapan interview bareng tutor profesional. Gak harus mahal buat jago bahasa Inggris!
                            </p>
                        </div>

                        {/* Giant Capu - Center section */}
                        <div className="flex-1 relative flex items-center justify-center min-h-0">
                            {/* Coffee steam */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="w-2 h-2 bg-slate-300 rounded-full animate-steam"
                                        style={{ animationDelay: `${i * 0.4}s` }}
                                    />
                                ))}
                            </div>

                            {/* Capu image with surrounding pills */}
                            <div
                                onClick={handleCapuClick}
                                className={`relative w-[32rem] h-[32rem] flex items-center justify-center translate-x-8 -translate-y-8 ${
                                    wiggleCapu ? "animate-wiggle" : ""
                                }`}
                            >
                                {/* Left pill - Santai! */}
                                <div
                                    className="absolute left-4 top-1/4 z-20 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
                                    style={{
                                        animation: "bounce-subtle 2s ease-in-out infinite 0.2s",
                                        transform: "rotate(-18deg)",
                                    }}
                                >
                                    😌 Santai!
                                </div>

                                {/* Right pill - Ngopi */}
                                <div
                                    className="absolute left-1/2 top-1/3 z-20 bg-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
                                    style={{
                                        animation: "bounce-subtle 2.3s ease-in-out infinite 0.5s",
                                        transform: "rotate(20deg)",
                                    }}
                                >
                                    ☕ Ngopi?
                                </div>

                                {/* Left-bottom pill - Chill */}
                                <div
                                    className="absolute left-8 bottom-1/3 z-20 bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
                                    style={{
                                        animation: "bounce-subtle 2.5s ease-in-out infinite 0.8s",
                                        transform: "rotate(-10deg)",
                                    }}
                                >
                                    ✨ Chill
                                </div>

                                <img
                                    src={slide.image}
                                    alt="Capu"
                                    className="absolute w-full h-full object-contain drop-shadow-xl animate-float"
                                />
                            </div>
                        </div>

                        {/* Bottom controls */}
                        <div className="px-8 pb-12 pt-4 z-30 relative bg-white/80 backdrop-blur-sm rounded-t-3xl shadow-lg">
                            <button
                                onClick={() => goToSlide(1)}
                                className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 active:scale-95 transition-all flex items-center justify-center gap-2 animate-slide-up animate-pulse-soft"
                                style={{ animationDelay: "0.2s" }}
                            >
                                Mulai Sekarang
                                <ChevronRightIcon />
                            </button>

                            {/* Dot indicators */}
                            <div className="flex justify-center gap-2 mt-6">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goToSlide(i)}
                                        className={`transition-all duration-300 rounded-full ${
                                            i === currentSlide
                                                ? "w-8 h-2 bg-blue-500"
                                                : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* SLIDE 2: Ngobrol & Latih */}
                {currentSlide === 1 && (
                    <div className="h-full flex flex-col animate-fade-in">
                        {/* Text content - Top */}
                        <div className="px-8 pt-20 pb-6">
                            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight animate-slide-up">
                                Ngobrol & Latih
                            </h1>
                            <p
                                className="text-slate-500 text-lg leading-relaxed animate-slide-up"
                                style={{ animationDelay: "0.1s" }}
                            >
                                Mau latih speaking, simulasi interview, atau ngobrol sama AI tutor? Bisa semua!
                            </p>
                        </div>

                        {/* Capu with feature badges */}
                        <div className="flex-1 relative flex items-center justify-center">
                            {/* Feature badges floating around */}
                            <div
                                className="absolute top-4 left-6 bg-blue-50 text-blue-600 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold animate-slide-up shadow-sm"
                                style={{ animationDelay: "0.3s" }}
                            >
                                <MicIcon />
                                Speaking AI
                            </div>
                            <div
                                className="absolute top-12 right-6 bg-purple-50 text-purple-600 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold animate-slide-up shadow-sm"
                                style={{ animationDelay: "0.4s" }}
                            >
                                <MessageIcon />
                                AI Chat 24/7
                            </div>
                            <div
                                className="absolute bottom-20 left-8 bg-amber-50 text-amber-600 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold animate-slide-up shadow-sm"
                                style={{ animationDelay: "0.5s" }}
                            >
                                <BriefcaseIcon />
                                Interview Sim
                            </div>

                            {/* Capu - medium size, centered */}
                            <div
                                onClick={handleCapuClick}
                                className={`relative cursor-pointer animate-float ${
                                    wiggleCapu ? "animate-wiggle" : ""
                                }`}
                            >
                                <img
                                    src={slide.image}
                                    alt="Capu"
                                    className="w-80 h-80 object-contain drop-shadow-xl"
                                    style={{
                                        transform: "scale(1.3)",
                                        transformOrigin: "center center",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Bottom controls */}
                        <div className="px-8 pb-12">
                            <button
                                onClick={() => goToSlide(2)}
                                className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 active:scale-95 transition-all flex items-center justify-center gap-2 animate-pulse-soft"
                            >
                                Lanjut
                                <ChevronRightIcon />
                            </button>

                            {/* Dot indicators */}
                            <div className="flex justify-center gap-2 mt-6">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goToSlide(i)}
                                        className={`transition-all duration-300 rounded-full ${
                                            i === currentSlide
                                                ? "w-8 h-2 bg-blue-500"
                                                : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* SLIDE 3: Yuk Mulai! */}
                {currentSlide === 2 && (
                    <div className="h-full flex flex-col animate-fade-in">
                        {/* Capu - Top positioned, smaller */}
                        <div className="h-[45%] flex items-end justify-center pt-12">
                            <div
                                onClick={handleCapuClick}
                                className={`relative cursor-pointer animate-float ${
                                    wiggleCapu ? "animate-wiggle" : ""
                                }`}
                            >
                                <img
                                    src={slide.image}
                                    alt="Capu"
                                    className="w-64 h-64 object-contain drop-shadow-xl"
                                    style={{
                                        transform: "scale(1.2)",
                                        transformOrigin: "center bottom",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Text content - Center */}
                        <div className="flex-1 flex flex-col justify-center px-8">
                            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight text-center animate-slide-up">
                                Yuk Mulai!
                            </h1>
                            <p
                                className="text-slate-500 text-lg leading-relaxed text-center animate-slide-up"
                                style={{ animationDelay: "0.1s" }}
                            >
                                Gak usah perfect, yang penting mulai dulu. Capu temenin tiap hari!
                            </p>
                        </div>

                        {/* CTA Buttons - Bottom */}
                        <div className="px-8 pb-12">
                            <button
                                onClick={handleGetStarted}
                                className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 active:scale-95 transition-all animate-pulse-soft"
                            >
                                Mulai Belajar
                            </button>

                            <button
                                onClick={handleGetStarted}
                                className="w-full py-3 mt-4 text-slate-400 text-sm font-medium hover:text-slate-600 transition-colors"
                            >
                                Lewati dulu
                            </button>

                            {/* Dot indicators */}
                            <div className="flex justify-center gap-2 mt-6">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goToSlide(i)}
                                        className={`transition-all duration-300 rounded-full ${
                                            i === currentSlide
                                                ? "w-8 h-2 bg-blue-500"
                                                : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
