import Link from 'next/link'
import { Instagram, Twitter, Facebook, Mail, Phone } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="text-gray-600 py-16 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-blue-600 mb-6 inline-block">
                            English Chill Course
                        </Link>
                        <p className="text-gray-500 leading-relaxed max-w-sm">
                            Platform belajar bahasa Inggris yang santai, fleksibel, dan fokus pada hasil nyata. Ga perlu kaku buat jadi jago.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-6">Program</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link href="#classes" className="hover:text-blue-600 transition-colors">Daily Conversation</Link></li>
                            <li><Link href="#classes" className="hover:text-blue-600 transition-colors">Interview Prep</Link></li>
                            <li><Link href="#classes" className="hover:text-blue-600 transition-colors">Presentation</Link></li>
                            <li><Link href="#classes" className="hover:text-blue-600 transition-colors">Basic English</Link></li>
                        </ul>
                    </div>


                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} English Chill Course. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
