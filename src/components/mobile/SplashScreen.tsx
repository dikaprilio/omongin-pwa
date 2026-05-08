"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
    const [showSplash, setShowSplash] = useState(false);

    useEffect(() => {
        const hasSeenSplash = sessionStorage.getItem("omongin-splash-shown");
        if (!hasSeenSplash) {
            setShowSplash(true);
            const timer = setTimeout(() => {
                setShowSplash(false);
                sessionStorage.setItem("omongin-splash-shown", "true");
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            <AnimatePresence>
                {showSplash && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400"
                        onClick={() => {
                            setShowSplash(false);
                            sessionStorage.setItem("omongin-splash-shown", "true");
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl scale-150" />
                            <img
                                src="/omongin-logo.svg"
                                alt="Omongin"
                                className="relative w-28 h-28 object-contain drop-shadow-2xl"
                            />
                        </motion.div>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="relative mt-8 text-3xl font-black text-white tracking-tight"
                        >
                            Omongin
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="relative mt-2 text-sm font-medium text-white/80"
                        >
                            Belajar Bahasa Inggris Santai & Fleksibel
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="absolute bottom-12"
                        >
                            <div className="w-8 h-8 border-[3px] border-white/30 border-t-white rounded-full animate-spin" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </>
    );
}
