"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import confetti from 'canvas-confetti';

interface SentenceBuilderProps {
    originalText: string;
    onSuccess: () => void;
    onFail?: () => void;
    maxRetries?: number;
}

interface WordItem {
    id: string;
    text: string;
    originalIndex: number;
}

export const SentenceBuilder: React.FC<SentenceBuilderProps> = ({
    originalText,
    onSuccess,
    onFail,
    maxRetries = 1
}) => {
    const [availableWords, setAvailableWords] = useState<WordItem[]>([]);
    const [selectedWords, setSelectedWords] = useState<WordItem[]>([]);
    const [status, setStatus] = useState<'playing' | 'success' | 'error' | 'failed'>('playing');
    const [retriesLeft, setRetriesLeft] = useState(maxRetries);
    const [correctPositions, setCorrectPositions] = useState<boolean[]>([]);

    // Initialize game
    useEffect(() => {
        const rawWords = originalText.trim().split(/\s+/);

        const items: WordItem[] = rawWords.map((word, index) => ({
            id: `${index}-${word}`,
            text: word,
            originalIndex: index
        }));

        // Shuffle
        const shuffled = [...items].sort(() => Math.random() - 0.5);
        setAvailableWords(shuffled);
        setSelectedWords([]);
        setStatus('playing');
        setRetriesLeft(maxRetries);
        setCorrectPositions([]);
    }, [originalText, maxRetries]);

    const handleWordClick = (word: WordItem, source: 'available' | 'selected') => {
        if (status === 'success' || status === 'failed') return;
        if (status === 'error') {
            setStatus('playing');
            setCorrectPositions([]);
        }

        if (source === 'available') {
            setAvailableWords(prev => prev.filter(w => w.id !== word.id));
            setSelectedWords(prev => [...prev, word]);
        } else {
            setSelectedWords(prev => prev.filter(w => w.id !== word.id));
            setAvailableWords(prev => [...prev, word]);
        }
    };

    const checkAnswer = () => {
        const targetWords = originalText.trim().split(/\s+/);
        const isCorrect = selectedWords.every((word, idx) => word.text === targetWords[idx]);

        // Calculate which positions are correct
        const positions = selectedWords.map((word, idx) => word.text === targetWords[idx]);
        setCorrectPositions(positions);

        if (isCorrect) {
            setStatus('success');
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            setTimeout(() => {
                onSuccess();
            }, 1500);
        } else {
            if (retriesLeft > 0) {
                setStatus('error');
                setRetriesLeft(prev => prev - 1);
            } else {
                setStatus('failed');
                if (onFail) {
                    setTimeout(() => {
                        onFail();
                    }, 2500);
                }
            }
        }
    };

    const getWordStyle = (index: number) => {
        if (status === 'playing' || correctPositions.length === 0) {
            return "border-blue-200 text-blue-700";
        }
        if (correctPositions[index]) {
            return "border-green-400 bg-green-50 text-green-700";
        }
        return "border-red-400 bg-red-50 text-red-700";
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-4 flex flex-col h-full max-h-[calc(100vh-200px)]">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-2 text-gray-800">
                Susun Kalimatnya!
            </h3>

            {/* Retry indicator */}
            {status !== 'success' && status !== 'failed' && (
                <p className="text-center text-sm text-gray-500 mb-4">
                    {retriesLeft > 0 ? (
                        <>Kesempatan tersisa: <span className="font-bold text-blue-600">{retriesLeft + 1}</span></>
                    ) : (
                        <span className="text-orange-500 font-bold">Ini kesempatan terakhir!</span>
                    )}
                </p>
            )}

            {/* Main content area with fixed layout */}
            <div className="flex-1 flex flex-col min-h-0">
                {/* Selected Area (Input) - fixed height, scrollable */}
                <div
                    className={cn(
                        "min-h-[100px] max-h-[150px] md:max-h-[180px] overflow-y-auto p-4 rounded-2xl border-2 border-dashed mb-4 transition-colors flex flex-wrap gap-2 items-start content-start",
                        status === 'error' ? "border-orange-300 bg-orange-50" :
                            status === 'failed' ? "border-red-300 bg-red-50" :
                                status === 'success' ? "border-green-300 bg-green-50" :
                                    "border-gray-300 bg-gray-50/50"
                    )}
                >
                    {selectedWords.map((word, index) => (
                        <motion.button
                            key={word.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.1 }}
                            onClick={() => handleWordClick(word, 'selected')}
                            disabled={status === 'success' || status === 'failed'}
                            className={cn(
                                "px-3 py-1.5 bg-white border-2 font-bold rounded-lg shadow-sm transition-all text-sm md:text-base active:scale-95 disabled:cursor-not-allowed",
                                getWordStyle(index)
                            )}
                        >
                            {word.text}
                        </motion.button>
                    ))}

                    {selectedWords.length === 0 && (
                        <div className="w-full flex items-center justify-center text-gray-400 italic text-sm py-4">
                            Klik kata-kata di bawah...
                        </div>
                    )}
                </div>

                {/* Controls */}
                <div className="flex justify-center mb-4">
                    {status === 'failed' ? (
                        <div className="px-6 py-2.5 rounded-full bg-red-100 text-red-600 font-bold text-sm flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            Salah. Lanjut ke drill berikutnya...
                        </div>
                    ) : status === 'error' ? (
                        <div className="text-center">
                            <p className="text-orange-600 text-sm mb-2 font-medium">
                                Kata dengan warna <span className="text-green-600">hijau</span> sudah benar,
                                <span className="text-red-600"> merah</span> salah posisi.
                            </p>
                            <button
                                onClick={() => {
                                    setStatus('playing');
                                    setCorrectPositions([]);
                                }}
                                className="px-6 py-2.5 rounded-full bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 shadow-lg"
                            >
                                Coba Lagi ({retriesLeft} tersisa)
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={checkAnswer}
                            disabled={availableWords.length > 0 || status === 'success'}
                            className={cn(
                                "px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2",
                                availableWords.length > 0
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : status === 'success'
                                        ? "bg-green-500 text-white scale-105"
                                        : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:scale-105"
                            )}
                        >
                            {status === 'success' ? <Check className="w-5 h-5" /> : <Check className="w-5 h-5" />}
                            {status === 'success' ? "Benar!" : "Cek Jawaban"}
                        </button>
                    )}
                </div>

                {/* Available Words (Pool) - fixed height, scrollable */}
                <div className="min-h-[80px] max-h-[120px] md:max-h-[150px] overflow-y-auto p-4 bg-white rounded-2xl border border-gray-200">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {availableWords.map((word) => (
                            <motion.button
                                key={word.id}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.1 }}
                                onClick={() => handleWordClick(word, 'available')}
                                disabled={status === 'success' || status === 'failed'}
                                className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all text-sm md:text-base active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {word.text}
                            </motion.button>
                        ))}

                        {availableWords.length === 0 && status !== 'success' && status !== 'failed' && (
                            <p className="text-gray-400 text-sm italic">Semua kata sudah dipilih!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
