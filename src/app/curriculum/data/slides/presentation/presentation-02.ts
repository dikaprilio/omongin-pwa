import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // ===== TITLE SLIDE =====
    {
        type: 'title',
        title: "Foundation: The 'Big Idea' Framework",
        subtitle: "Cara merangkum materi rumit menjadi satu pesan inti yang kuat",
        teacherNote: "Fokus: Membunuh kebiasaan 'Bertele-tele' orang Indo. Pakai analogi 'Peluru vs Pasir'."
    },

    // ===== PHASE 1: THE MINDSET =====
    {
        type: 'pres-phase',
        phaseNumber: 1,
        title: "The Clarity Mindset",
        subtitle: "Mengapa 'Sedikit' justru 'Lebih Baik' dalam presentasi"
    },
    {
        type: 'pres-mindset',
        title: "The Data Dump Trap",
        subtitle: "Jangan terjebak ingin menunjukkan semua yang Anda kerjakan",
        mindset: {
            before: "I must show ALL data to prove that I am smart and hardworking.",
            after: "I must share ONE clear message so my audience understands.",
            bridgeText: "Move from 'About Me' to 'For the Audience'"
        },
        teacherNote: "Banyak murid takut membuang data. Jelaskan: Data tanpa kesimpulan itu distraksi."
    },
    {
        type: 'pres-impact',
        title: "The Golden Rule",
        subtitle: "Prinsip Utama Kejelasan (Clarity)",
        impact: {
            quote: "ONE CLEAR POINT",
            author: "Presentation Rule #2",
            accentColor: "#2563eb"
        },
        teacherNote: "Jika audiens tidak bisa merangkum slide-mu dalam 5 detik, berarti slide-mu gagal."
    },

    // ===== PHASE 2: LOGIC & MECHANICS =====
    {
        type: 'pres-phase',
        phaseNumber: 2,
        title: "The Big Idea Formula",
        subtitle: "Struktur sederhana untuk membangun pesan inti"
    },
    {
        type: 'pres-technique',
        title: "The Message Anchor",
        technique: {
            name: "The Big Idea Formula",
            description: "Setiap presentasi harus bisa dirangkum dalam satu kalimat: Subjek + Aksi/Manfaat.",
            steps: [
                "Identify Target Audience (Siapa audiensnya?)",
                "Identify Pain Point (Apa masalah utama mereka?)",
                "Write: [Our Solution] will help [Audience] to [Achieve Result]."
            ],
            whyItWorks: "Kalimat ini berfungsi sebagai jangkar (anchor). Data apapun yang tidak mendukung kalimat ini harus DIBUANG.",
            icon: "⚓"
        },
        teacherNote: "Contoh: Jangan bilang 'Laporan Q4'. Bilang 'Efisiensi kita naik 20% berkat sistem baru'."
    },
    {
        type: 'comparison',
        title: "Weak vs Strong Message",
        subtitle: "Berhenti memberi label, mulailah memberi solusi",
        comparison: [
            {
                wrong: "I will explain about our new app features.",
                right: "Our new features will cut your admin work by 50%."
            },
            {
                wrong: "January marketing department report.",
                right: "Our TikTok strategy reduced ad costs by 15%."
            }
        ],
        teacherNote: "Versi 'Strong' selalu fokus pada HASIL (Outcome), bukan sekadar topik."
    },

    // ===== PHASE 3: THE UPGRADE =====
    {
        type: 'pres-phase',
        phaseNumber: 3,
        title: "The 'So What?' Test",
        subtitle: "Tes kejujuran untuk setiap poin di slide Anda"
    },
    {
        type: 'pres-technique',
        title: "The Value Filter",
        technique: {
            name: "The 'So What?' Test",
            description: "Setiap selesai menulis sebuah poin, tanyakan pada diri sendiri: 'So what?' (Terus kenapa?).",
            steps: [
                "Read your slide point/title.",
                "Ask 'So what?' (Kenapa audiens harus peduli?)",
                "Rename your slide as the answer to that question."
            ],
            whyItWorks: "Audiens hanya peduli pada: 'What's In It For Me?' (WIIFM).",
            icon: "🤔"
        },
        teacherNote: "Judul Slide 'Sejarah Perusahaan' -> 'Kami Berpengalaman Mengatasi Masalah Serupa Selama 10 Tahun'."
    },
    {
        type: 'pres-checklist',
        title: "Checklist: A Strong Big Idea",
        subtitle: "Gunakan filter ini untuk menyaring konten Anda",
        checklist: {
            title: "Big Idea Qualities",
            items: [
                "Clear Point of View (Punya opini jelas)",
                "One-Breath Rule (Bisa diucapkan dlm satu napas)",
                "Future Focused (Fokus pada hasil masa depan)",
                "Audience-Centric (Menjawab masalah audiens)",
                "Memorable (Mudah diingat setelah keluar ruangan)"
            ]
        }
    },

    // ===== PHASE 4: PRACTICE & SIMULATION =====
    {
        type: 'pres-phase',
        phaseNumber: 4,
        title: "Simulation: The 30s Pitch",
        subtitle: "Merangkum 30 menit menjadi 30 detik"
    },
    {
        type: 'pres-script',
        title: "The 'Hook' Opening",
        subtitle: "Cara membuka presentasi dengan 'Big Idea'",
        scriptSteps: [
            {
                label: "The Big Idea Hook",
                action: "Maintain eye contact, use a confident tone.",
                script: "Today, I'm not just here to show you a report. I'm going to show you how WE can save $10,000 next month."
            }
        ],
        teacherNote: "Tekan kata 'Save' dan '10,000'. Itu adalah 'Big Idea' nya."
    },
    {
        type: 'simulation',
        title: "The Elevator Summary",
        simulation: {
            role: "Project Manager",
            scenario: "Bos Anda hanya punya waktu 30 detik di lift. Dia bertanya, 'Intinya laporanmu apa?'",
            goal: "Sampaikan Big Idea Anda dengan jelas tanpa membuang waktu di detail teknis.",
            timeLimit: 30
        }
    },

    // ===== MISSION =====
    {
        type: 'mission',
        title: "Mission: Clarity Master",
        subtitle: "Menajamkan pesan presentasi Anda",
        mission: [
            "Ambil satu draft presentasi lama dan tulis satu 'Big Idea' untuk itu.",
            "Remove at least 3 slides yang tidak mendukung Big Idea tersebut.",
            "Gunakan 'So What?' test untuk setiap judul slide.",
            "Praktikkan Big Idea Anda sampai terdengar pro."
        ]
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "What is the primary goal of a 'Big Idea'?",
        options: ["To show all data", "To deliver one clear and powerful message", "To make slides look pretty", "To talk like a robot"],
        correctIndex: 1,
        explanation: "A focused message is far more memorable than a 'data dump'."
    },
    {
        question: "What is the 'Data Dump Trap'?",
        options: ["Not having enough data", "Trying to show everything to prove you worked hard", "Losing your data in the computer", "Deleting too many slides"],
        correctIndex: 1,
        explanation: "Showing too much data overwhelms the audience and hides the main point."
    },
    {
        question: "What does 'WIIFM' stand for?",
        options: ["What If I Fail Manually", "What's In It For Me", "Why Is Focus Mandatory", "Who Is In Front of Me"],
        correctIndex: 1,
        explanation: "Every audience member implicitly asks: 'What's in it for me?'."
    },
    {
        question: "How do you perform the 'So What?' test?",
        options: ["Check the grammar", "Ask why a point matters until you find the real benefit", "Ask the boss's opinion", "Time your presentation"],
        correctIndex: 1,
        explanation: "This test helps find the true value of your information for the audience."
    },
    {
        question: "Which of these is a 'Strong' message?",
        options: ["Sales update for Q4.", "We increased our revenue by 20% in Q4.", "A list of Q4 customers.", "Our Q4 meetings were productive."],
        correctIndex: 1,
        explanation: "A strong message focuses on results and benefits, not just a label or title."
    }
];
