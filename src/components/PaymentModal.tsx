
'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Crown, Sparkles, X } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface PaymentModalProps {
    isOpen: boolean
    onClose: () => void
}

export function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md p-0 overflow-hidden border-0 shadow-2xl bg-white">

                {/* Visual Header */}
                <div className="relative h-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                    <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4">
                        <Crown className="w-32 h-32 text-white rotate-12" />
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-center px-6 text-white">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider border border-white/20">
                                Premium Access
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight">Unlock Full Access</h2>
                        <p className="text-indigo-100 text-sm font-medium opacity-90">Start your journey to fluency today.</p>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100 transition-colors hover:bg-slate-100/80">
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <Sparkles className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800">Unlimited Conversation</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Access all Adult-Speak and Conversation modules without restriction.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100 transition-colors hover:bg-slate-100/80">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800">Personalized Feedback</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Get corrected by professional teachers and track your progress.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 pt-2">
                        <p className="text-center text-xs text-slate-400">
                            Secure payment via WhatsApp / Bank Transfer
                        </p>
                        <Button
                            className="w-full h-12 text-base font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/20 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                            onClick={() => window.open('https://wa.me/6281234567890?text=I%20want%20to%20subscribe%20to%20English%20Chill%20Course', '_blank')}
                        >
                            Subscribe Now
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={onClose}
                            className="w-full h-10 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl"
                        >
                            Maybe Later
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
