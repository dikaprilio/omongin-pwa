import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1: TITLE
    {
        type: 'title',
        title: "Small Talk Strategy",
        subtitle: "From Awkward to Charismatic",
        teacherNote: "Goal: Mengubah 'Interview Mode' (kaku/satu arah) menjadi 'Ping-Pong Conversation' (dua arah).",
        image: "https://images.unsplash.com/photo-1515169067750-d51a73b50981?auto=format&fit=crop&q=80&w=1920"
    },

    // --- PHASE 1: THE MINDSET ---

    // SLIDE 2: WARM UP (BASELINE)
    {
        type: 'micro-drill',
        title: "Baseline Check",
        subtitle: "Tes kemampuan ngobrol Anda saat ini.",
        mission: [
            "Tutor: 'How was your weekend?'",
            "Student: Answer freely.",
            "Tutor: 'Do you like your job?'",
            "Student: Answer freely.",
            "Action: Tutor stop after 3 turns. Analyze: Did the conversation 'flow' or 'die'?"
        ],
        teacherNote: "Perhatikan apakah murid hanya menjawan 'Good', 'Yes', 'No' tanpa bertanya balik. Ini adalah 'Interview Mode'."
    },

    // SLIDE 3: THE TRAP
    {
        type: 'concept',
        title: "The Interview Mode",
        subtitle: "Kenapa obrolan terasa kaku?",
        content: [
            "Kesalahan #1: Hanya menjawab pertanyaan (Yes/No).",
            "Efek: Lawan bicara merasa 'diinterogasi' atau lelah mencari topik baru.",
            "Conversation Killer: Jawaban singkat tanpa 'Hook'.",
            "Goal: Ubah interogasi menjadi kolaborasi."
        ],
        teacherNote: "Tunjukkan grafik: Tutor tanya -> Murid jawab -> Hening. (Dead End)."
    },

    // SLIDE 4: THE GOLDEN RULE
    {
        type: 'comparison',
        title: "The Golden Rule",
        subtitle: "Dead End vs Ping-Pong",
        comparison: [
            { wrong: "Tutor: Good morning?\nYou: Morning. (Stop)", right: "You: Morning! How are you doing? (Bounce)" },
            { wrong: "Tutor: Do you like coffee?\nYou: Yes. (Stop)", right: "You: Yes, I love Kopi Kenangan. You? (Bounce)" }
        ],
        teacherNote: "Analogi Tenis Meja. Kalau bola datang, jangan ditangkap (Stop). Pukul balik (Bounce)."
    },

    // --- PHASE 2: LOGIC & MECHANICS (PING-PONG) ---

    // SLIDE 5: FORMULA A (ADD DETAIL)
    {
        type: 'formula',
        title: "Step 1: Add Detail",
        subtitle: "Jangan biarkan jawaban Anda 'telanjang'.",
        formula: "Answer + 1 Detail (Reason/Example/Story)",
        vocabulary: [
            { term: "I'm good.", meaning: "Answer (Basic)", example: "-" },
            { term: "I'm good, I just finished a big project.", meaning: "Answer + Detail (Better)", example: "-" },
            { term: "Yes, I do.", meaning: "Answer (Basic)", example: "-" },
            { term: "Yes, I do. I drink 3 cups a day.", meaning: "Answer + Detail (Better)", example: "-" }
        ],
        teacherNote: "Detail memberikan 'bahan' baru untuk obrolan. Tanpa detail, topik mati."
    },

    // SLIDE 6: DRILL (ADD DETAIL)
    {
        type: 'micro-drill',
        title: "Micro-Drill: +1 Detail",
        subtitle: "Jawab dengan Answer + Detail.",
        mission: [
            "Tutor: 'Did you sleep well?'",
            "Student: 'Yes, I slept 8 hours.' (Not just 'Yes')",
            "Tutor: 'Is it raining there?'",
            "Student: 'No, it's very sunny today.'",
            "Tutor: 'Are you busy?'",
            "Student: 'Not really, I'm just checking emails.'"
        ],
        teacherNote: "Pastikan murid TIDAK bertanya balik dulu. Fokus hanya pada pemanjangan jawaban."
    },

    // SLIDE 7: FORMULA B (ASK BACK)
    {
        type: 'formula',
        title: "Step 2: The Bounce",
        subtitle: "Lempar bola kembali.",
        formula: "Statement + Question Tag / Wh-Question",
        vocabulary: [
            { term: "How about you?", meaning: "Standard Bounce", example: "I'm fine. How about you?" },
            { term: "And yourself?", meaning: "Formal Bounce", example: "I'm great. And yourself?" },
            { term: "Have you...?", meaning: "Specific Bounce", example: "I love coffee. Have you tried the new cafe?" },
            { term: "Do you...?", meaning: "Specific Bounce", example: "I like action movies. Do you watch Marvel?" }
        ],
        teacherNote: "Ajarkan 'How about you?' sebagai senjata pamungkas paling mudah."
    },

    // SLIDE 8: COMPARISON
    {
        type: 'comparison',
        title: "The Full Ping-Pong",
        subtitle: "Answer + Detail + Bounce",
        comparison: [
            { wrong: "A: Busy?\nB: Yes.", right: "B: Yes, plenty of deadlines. How about you?" },
            { wrong: "A: Nice shoes.\nB: Thanks.", right: "B: Thanks! I got them on sale. Do you like sneakers?" }
        ],
        teacherNote: "Rumus Lengkap: A-D-B (Answer - Detail - Bounce)."
    },

    // SLIDE 9: MINI-TASK (PING-PONG)
    {
        type: 'micro-drill',
        title: "Mini-Task: Don't Drop the Ball",
        subtitle: "Jaga obrolan selama 3 putaran.",
        mission: [
            "Tutor memulai topik sembarang.",
            "Murid WAJIB menggunakan rumus Ping-Pong (A-D-B).",
            "Jika murid lupa 'Ask Back', Tutor bilang 'Drop!' (Bola jatuh).",
            "Example: Food, Weather, Traffic."
        ],
        teacherNote: "Latihan refleks. Paksa murid untuk *selalu* mengakhiri kalimat dengan tanda tanya."
    },

    // SLIDE 10: LOGIC CHECK
    {
        type: 'case-study',
        title: "Logic Check",
        subtitle: "Analyze the Flow",
        caseStudy: {
            scenario: "Mana respon yang mematikan obrolan?",
            template: "A: 'Have you been to Bali?'\n1. 'Yes, twice.'\n2. 'Yes, I went there last year. It was amazing. Have you?'"
        },
        teacherNote: "Nomor 1 mematikan topik (Dead End). Nomor 2 membuka topik baru (Open Road)."
    },

    // --- PHASE 3: THE UPGRADE (SMOOTHNESS) ---

    // SLIDE 11: TITLE
    {
        type: 'title',
        title: "The Upgrade: Smooth Transitions",
        subtitle: "Terdengar lebih luwes dan tidak kaku.",
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=1920"
    },

    // SLIDE 12: VOCABULARY (BRIDGES)
    {
        type: 'vocabulary',
        title: "Bridge Phrases",
        subtitle: "Jembatan antar topik.",
        vocabulary: [
            { term: "Speaking of...", meaning: "Ngomong-ngomong soal... (Nyambung)", example: "Speaking of food, are you hungry?" },
            { term: "By the way...", meaning: "Ngomong-ngomong... (Pindah topik)", example: "By the way, did you see the news?" },
            { term: "That reminds me of...", meaning: "Itu mengingatkan saya pada...", example: "That reminds me of my trip to Japan." },
            { term: "Funny you should say that...", meaning: "Lucu juga kamu bilang begitu...", example: "Funny you should say that, I was just thinking the same thing." }
        ],
        teacherNote: "Gunakan ini saat ingin mengubah arah pembicaraan secara halus."
    },

    // SLIDE 13: CASE STUDY (BRIDGING)
    {
        type: 'case-study',
        title: "Bridging the Gap",
        subtitle: "Menggunakan 'Speaking of'.",
        caseStudy: {
            scenario: "Topik: Coffee -> Lunch.",
            template: "A: 'This coffee is great.'\nB: 'Yeah, I really need this caffeine. Speaking of food, have you had lunch yet?'"
        },
        teacherNote: "Lihat betapa halusnya perpindahan dari kopi ke makan siang menggunakan 'Speaking of'."
    },

    // SLIDE 14: TRANSFORMATION DRILL
    {
        type: 'recap',
        title: "Transformation Drill",
        recap: [
            { context: "Weather -> Traffic", sayThis: "It's raining hard. Speaking of rain, how was the traffic?", dontSayThis: "It's raining. How is traffic?" },
            { context: "Movie -> Weekend", sayThis: "I love that movie. Speaking of fun, what are you doing this weekend?", dontSayThis: "I like movie. You?" }
        ]
    },

    // --- PHASE 4: THE SIMULATION ---

    // SLIDE 15: THE CHEAT SHEET
    {
        type: 'formula',
        title: "The Master Formula",
        subtitle: "Cheat Sheet for Small Talk",
        formula: "1. Answer -> 2. Add Detail -> 3. Bridge/Bounce",
        vocabulary: [
            { term: "Answer", meaning: "Jawab pertanyaan (langsung)", example: "Yes/No/Maybe." },
            { term: "Detail", meaning: "1 kalimat tambahan", example: "Beri alasan atau cerita singkat." },
            { term: "Bounce", meaning: "Tanya balik", example: "How about you?" }
        ],
        teacherNote: "Ingat 3 langkah ini di setiap giliran bicara."
    },

    // SLIDE 16: BAD EXAMPLE
    {
        type: 'case-study',
        title: "The Robot (Bad)",
        subtitle: "Analisa percakapan kaku ini.",
        caseStudy: {
            scenario: "Context: Sebelum meeting dimulai.",
            template: "A: Traffic is bad today.\nB: Yes.\nA: Did you drive?\nB: No.\nA: Oh... okay."
        },
        teacherNote: "Kenapa awkward? Karena B tidak memberi 'umpan' balik."
    },

    // SLIDE 17: GOOD EXAMPLE
    {
        type: 'case-study',
        title: "The Conversationalist (Good)",
        subtitle: "Versi pro dengan Ping-Pong.",
        caseStudy: {
            scenario: "Context: Sebelum meeting dimulai.",
            template: "A: Traffic is bad today.\nB: Yeah, it's crazy! I was stuck for an hour. Did you get caught in it too?\nA: Luckily no, I took the train."
        },
        teacherNote: "B merespon dengan Detail ('stuck for an hour') dan bertanya balik ('Did you...')."
    },

    // SLIDE 18: PREP TIME
    {
        type: 'micro-drill',
        title: "Preparation Time",
        subtitle: "Siapkan strategi Anda.",
        mission: [
            "Lihat sekeliling ruangan Anda.",
            "Tutor akan menunjuk satu objek (misal: AC, Jendela, Baju).",
            "Siapkan komentar + pertanyaan tentang objek itu."
        ],
        teacherNote: "Latihan spontanitas. Small talk seringkali tentang observasi sekitar."
    },

    // SLIDE 19: SIMULATION
    {
        type: 'simulation',
        title: "The Networking Event",
        subtitle: "Final Simulation",
        simulation: {
            role: "You are meeting a potential client.",
            scenario: "Anda baru saja bertemu di lobby hotel sambil menunggu lift. Mulai percakapan ringan.",
            goal: "Pertahankan obrolan sampai 'lift datang' (60 detik). Jangan biarkan hening.",
            timeLimit: 60
        },
        teacherNote: "Tutor bertindak sebagai Client yang agak pasif. Murid harus proaktif menjaga bola tetap bergerak."
    },

    // SLIDE 20: CLOSING
    {
        type: 'title',
        title: "Session Completed",
        subtitle: "Small Talk Mastered.",
        teacherNote: "Review: Seberapa sering murid bertanya balik? Beri feedback spesifik."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Apa tujuan utama dari 'Ping-Pong Method'?",
        options: [
            "Menjawab pertanyaan secepat mungkin.",
            "Menjaga percakapan tetap hidup dua arah.",
            "Bertanya lebih banyak daripada menjawab."
        ],
        correctIndex: 1,
        explanation: "Ping-Pong (Timbal balik) mencegah percakapan berhenti di satu orang."
    },
    {
        question: "Komponen yang hilang dari jawaban ini: 'Yes, I do.'",
        options: [
            "Answer",
            "Detail & Bounce",
            "Grammar"
        ],
        correctIndex: 1,
        explanation: "Jawaban itu hanya 'Answer'. Kurang 'Detail' (kenapa/contoh) dan 'Bounce' (tanya balik)."
    },
    {
        question: "Mana contoh 'Bridge' yang baik untuk pindah topik?",
        options: [
            "Stop talking.",
            "Speaking of...",
            "I want to change topic."
        ],
        correctIndex: 1,
        explanation: "'Speaking of...' adalah jembatan natural untuk mengaitkan topik lama ke baru."
    },
    {
        question: "Jika lawan bicara diam saja, apa yang harus Anda lakukan?",
        options: [
            "Ikut diam.",
            "Ajukan pertanyaan terbuka (Open Question).",
            "Pergi."
        ],
        correctIndex: 1,
        explanation: "Lempar bola (Bounce) dengan pertanyaan untuk memancing mereka bicara."
    },
    {
        question: "Mana respon terbaik untuk: 'It's cold in here.'",
        options: [
            "Yes.",
            "I don't think so.",
            "It is! Do you want me to ask them to turn down the AC?"
        ],
        correctIndex: 2,
        explanation: "Respon C memberikan Validasi (It is) + Action/Offer yang mengundang respon lanjut."
    }
];
