import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1: TITLE
    {
        type: 'title',
        title: "Foundation: First Impression",
        subtitle: "Professional Identity & Introductions",
        teacherNote: "Goal: Transformasi total. Dari 'Generic Indoglish' menjadi 'Professional & Executive' dalam 1 jam.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920"
    },

    // --- PHASE 1: THE MINDSET ---

    // SLIDE 2: WARM UP (BASELINE)
    {
        type: 'micro-drill',
        title: "Baseline Check",
        subtitle: "Perkenalkan diri Anda seperti biasa (cara lama).",
        mission: [
            "Tugas: Introduce yourself in 30 seconds.",
            "Teacher will take notes on your 'Indoglish' mistakes.",
            "Don't worry about errors yet. Just speak.",
            "Action: Start Speaking Now."
        ],
        teacherNote: "Biarkan mereka bicara apa adanya. Catat error umum: 'My name is...', 'I am work...', 'My hobby is...'. Kita akan perbaiki ini."
    },

    // SLIDE 3: FIRST IMPRESSION
    {
        type: 'concept',
        title: "The 7-Second Rule",
        subtitle: "Kesan pertama terbentuk dalam 7 detik.",
        content: [
            "Dalam bisnis, kompetensi Anda dinilai dari KALIMAT PERTAMA.",
            "Salah grammar = Terdengar kurang kompeten.",
            "Frase 'Textbook' = Terdengar kaku/junior.",
            "Goal: Terdengar natural dan profesional."
        ],
        teacherNote: "Tunjukkan bedanya 'Halo nama saya Budi' (Biasa) vs 'Saya Budi, spesialis di bidang...' (Pro)."
    },

    // SLIDE 4: THE GOLDEN RULE (TO BE)
    {
        type: 'comparison',
        title: "The Golden Rule",
        subtitle: "Kesalahan #1: 'I AM WORK'.",
        comparison: [
            { wrong: "I am work at Bank. (❌)", right: "I work at a Bank. (✅)" },
            { wrong: "I am agree. (❌)", right: "I agree. (✅)" },
            { wrong: "I am live in Jakarta. (❌)", right: "I live in Jakarta. (✅)" }
        ],
        teacherNote: "Jelaskan pakai Logika Indo: 'TO BE (Am/Is/Are) itu musuh kata kerja'. Kalau sudah ada WORK/LIVE/AGREE, jangan pakai AM."
    },

    // --- PHASE 2: IDENTITY VS MOMENTUM ---

    // SLIDE 5: IDENTITY (SIMPLE PRESENT)
    {
        type: 'formula',
        title: "Konsep 1: IDENTITY",
        subtitle: "Fakta permanen tentang siapa Anda (KTP).",
        formula: "Subject + Verb 1 (No 'To Be')",
        vocabulary: [
            { term: "I work at...", meaning: "Tempat kerja", example: "I work at Tokopedia." },
            { term: "I handle...", meaning: "Tanggung jawab utama", example: "I handle Digital Marketing." },
            { term: "I live in...", meaning: "Domisili", example: "I live in South Jakarta." }
        ],
        teacherNote: "Analogikan dengan KTP. Fakta yang tidak berubah-ubah tiap jam. Pakai Simple Present. Langsung S+V."
    },

    // SLIDE 6: DRILL (FACT CHECK)
    {
        type: 'micro-drill',
        title: "Micro-Drill: Fact Check",
        subtitle: "Jawab cepat (Fakta). Jangan pakai 'AM'.",
        mission: [
            "Tutor: Where do you live?",
            "Student: I live in... (NOT I am live)",
            "Tutor: Where do you work?",
            "Student: I work at... (NOT I am work)",
            "Tutor: What do you handle?",
            "Student: I handle..."
        ],
        teacherNote: "Lakukan dengan cepat (Rapid Fire). Koreksi setiap ada 'AM' yang keluar ketemu verb."
    },

    // SLIDE 7: MOMENTUM (PRESENT CONTINUOUS)
    {
        type: 'formula',
        title: "Konsep 2: MOMENTUM",
        subtitle: "Apa yang sedang sibuk dikerjakan SEKARANG.",
        formula: "Subject + Am/Is/Are + V-ing",
        vocabulary: [
            { term: "Currently, I'm working on...", meaning: "Proyek saat ini", example: "Currently, I'm working on our new app." },
            { term: "Right now, I'm leading...", meaning: "Memimpin tim", example: "Right now, I'm leading the sales team." },
            { term: "At the moment, I'm expanding...", meaning: "Expansi bisnis", example: "At the moment, I'm expanding to Bali." }
        ],
        teacherNote: "Tunjukkan bahwa Anda sibuk dan produktif. Pakai V-ing untuk fokus saat ini."
    },

    // SLIDE 8: CONTRAST DRILL
    {
        type: 'comparison',
        title: "Contrast: Standard vs Pro",
        subtitle: "Gabungkan Identity + Momentum.",
        comparison: [
            { wrong: "I work as a Designer. (Standar)", right: "I work as a Designer, and currently I'm designing a new logo." },
            { wrong: "I am a Sales Manager. (Basic)", right: "I'm a Sales Manager, and right now I'm building a new team." }
        ],
        teacherNote: "Rumus level up: Sebut jabatan (Identity) + Sebut proyek (Momentum)."
    },

    // SLIDE 9: ROLEPLAY PROMPT
    {
        type: 'micro-drill',
        title: "Mini-Task: Status Update",
        subtitle: "Bayangkan Anda update status LinkedIn/WhatsApp.",
        mission: [
            "Template: 'I am a [Role], and currently I'm [Actioning] [Project].'",
            "Contoh: 'I'm a Content Creator, and currently I'm editing a viral video.'",
            "Action: Buat kalimat Anda sendiri secara lisan."
        ]
    },

    // SLIDE 10: QUICK QUIZ
    {
        type: 'case-study',
        title: "Logic Check",
        subtitle: "Identity vs Current Focus",
        caseStudy: {
            scenario: "Pilih mana yang nuansanya benar?",
            template: "A: I live in Bali. (Permanen/KTP)\nB: I'm living in Bali this month. (Sementara/Dinas)"
        },
        teacherNote: "Present Continuous juga bisa untuk hal 'Sementara'. Simple Present untuk 'Permanen'."
    },

    // --- PHASE 3: THE UPGRADE (INTERESTS) ---

    // SLIDE 11: THE HOBBY TRAP
    {
        type: 'title',
        title: "Beyond 'My Hobby Is...'",
        subtitle: "Anda professional, bukan anak sekolah.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920"
    },

    // SLIDE 12: VOCABULARY UPGRADE
    {
        type: 'vocabulary',
        title: "Professional Interests",
        subtitle: "Ganti 'Hobby' dengan frase berkelas.",
        vocabulary: [
            { term: "I'm really into...", meaning: "Sangat tertarik", example: "I'm really into photography." },
            { term: "I'm a huge fan of...", meaning: "Penggemar berat", example: "I'm a huge fan of culinary arts." },
            { term: "Lately, I've been exploring...", meaning: "Sedang eksplorasi", example: "Lately, I've been exploring AI tools." },
            { term: "In my spare time, I enjoy...", meaning: "Menikmati waktu luang", example: "I enjoy cycling." }
        ]
    },

    // SLIDE 13: CONNECTING TOPICS
    {
        type: 'case-study',
        title: "Strategic Interests",
        subtitle: "Hubungkan hobi dengan 'Value' diri.",
        caseStudy: {
            scenario: "Jangan cuma sebut aktivitasnya. Sebut apa nilai positifnya.",
            template: "\"Running teaches me discipline.\"\n\"Cooking allows me to be creative.\"\n\"Traveling opens my mind.\""
        },
        teacherNote: "Hobi yang bikin Anda terlihat pintar/menarik."
    },

    // SLIDE 14: MINI DRILL (TRANSFORMATION)
    {
        type: 'recap',
        title: "Transformation Drill",
        recap: [
            { context: "Movie", sayThis: "I'm a huge fan of Sci-Fi movies.", dontSayThis: "My hobby is watching movie." },
            { context: "Food", sayThis: "I'm really into culinary adventures.", dontSayThis: "My hobby is eating." },
            { context: "Sport", sayThis: "I'm passionate about cycling.", dontSayThis: "My hobby is bicycle." }
        ]
    },

    // --- PHASE 4: THE ELEVATOR PITCH ---

    // SLIDE 15: THE FORMULA
    {
        type: 'formula',
        title: "The Introduction Formula",
        subtitle: "Rumus 3 Langkah Kenalan.",
        formula: "Identity + Momentum + Interest",
        vocabulary: [
            { term: "1. Identity", meaning: "Who I am (Facts)", example: "I'm a Manager at BCA." },
            { term: "2. Momentum", meaning: "Current Focus (Updates)", example: "Currently, I'm leading the digital transformation." },
            { term: "3. Interest", meaning: "Personal Hook", example: "Outside of work, I'm really into golf." }
        ],
        teacherNote: "Hafalkan flow ini: Siapa -> Apa yang dikerjakan -> Sisi Personal."
    },

    // SLIDE 16: BAD EXAMPLE
    {
        type: 'case-study',
        title: "Common Mistakes",
        subtitle: "Analisa kesalahan umum ini.",
        caseStudy: {
            scenario: "Role: Budi (Level Standar)\nContext: Kenalan santai",
            template: "\"Hello mister. My name Budi. I keep in Jakarta. I am office boy. My hobby is sleeping. Nice to meet you.\""
        },
        teacherNote: "Bedah errornya: 'Keep' (salah verb), 'Am+Noun', 'Hobby sleeping' (kekanak-kanakan)."
    },

    // SLIDE 17: GOOD EXAMPLE
    {
        type: 'case-study',
        title: "Professional Example",
        subtitle: "Versi Budi yang sudah di-upgrade.",
        caseStudy: {
            scenario: "Role: Budi (Level Pro)\nContext: Networking Event",
            template: "\"Hi, I'm Budi. I work as an Office Manager at a Tech Company in Jakarta. Currently, I'm managing a team of 5 staff. Outside of office, I'm really into badminton.\""
        },
        teacherNote: "Struktur Jelas: Identity -> Momentum -> Interest."
    },

    // SLIDE 18: SIMULATION PREP
    {
        type: 'micro-drill',
        title: "Preparation Time",
        subtitle: "1 Menit untuk menyusun Pitch Anda.",
        mission: [
            "1. Tulis Identity (Simple Present).",
            "2. Tulis Momentum (Continuous).",
            "3. Pilih Professional Interest.",
            "4. Latihan baca sekali."
        ]
    },

    // SLIDE 19: THE SIMULATION (FINAL BOSS)
    {
        type: 'simulation',
        title: "Networking Event",
        subtitle: "Final Simulation",
        simulation: {
            role: "Yourself (Professional Version)",
            scenario: "Anda di event bisnis. Anda bertemu calon klien/partner. Anda punya 45 detik untuk memberi kesan terbaik.",
            goal: "Perkenalkan diri dengan PD pakai Rumus tadi.",
            timeLimit: 45
        },
        teacherNote: "Kamera on. Mata ke lensa. Bicara  natural."
    },

    // SLIDE 20: CLOSING
    {
        type: 'title',
        title: "Session Completed",
        subtitle: "You have mastered the First Impression.",
        teacherNote: "Review masukan tutor dan praktikkan rumusnya."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Manakah kalimat yang BENAR secara grammar (Identity)?",
        options: [
            "I am work at Bank.",
            "I work at a Bank.",
            "I am working at Bank (permanent)."
        ],
        correctIndex: 1,
        explanation: "Jangan pakai 'AM' ketemu Verb 1. 'I work' adalah fakta permanen (Identity)."
    },
    {
        question: "Kapan kita menggunakan Present Continuous (I am working)?",
        options: [
            "Untuk fakta KTP.",
            "Untuk hobi.",
            "Untuk project yang sedang berjalan (Momentum)."
        ],
        correctIndex: 2,
        explanation: "Present Continuous menunjukkan aktifitas yang 'sedang' dilakukan atau update terkini."
    },
    {
        question: "Apa pengganti terbaik untuk 'My hobby is...'?",
        options: [
            "I like to...",
            "I'm really into...",
            "I do..."
        ],
        correctIndex: 1,
        explanation: "'I'm really into...' terdengar jauh lebih natural dan antusias."
    },
    {
        question: "Urutan Elevator Pitch yang ideal adalah:",
        options: [
            "Hobby -> Name -> Job",
            "Identity -> Momentum -> Interest",
            "Name -> Hobby -> Family"
        ],
        correctIndex: 1,
        explanation: "Mulai dari Siapa (Identity), Apa yang dikerjakan (Momentum), lalu Sisi Personal (Interest)."
    },
    {
        question: "Hindari kata ini saat menyebut jabatan:",
        options: [
            "I am a Manager.",
            "I work as a Manager.",
            "I'm just a staff."
        ],
        correctIndex: 2,
        explanation: "Kata 'Just' merendahkan diri sendiri. Hindari di konteks profesional."
    }
];
