import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 26,
    path: 'speaking-kids',
    title: "Problem Solvers 💡",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-26-001",
            question: "Apa arti dari 'problem solver'?",
            options: [
                "Pembuat masalah",
                "Penyelesai masalah",
                "Pencari masalah",
                "Pemberi masalah"
            ],
            correctIndex: 1,
            explanation: "'Problem solver' artinya penyelesai masalah (orang yang menyelesaikan masalah).",
            difficulty: "easy"
        },
        {
            id: "kids-26-002",
            question: "Pilih kata yang berarti MASALAH:",
            options: ["solution", "answer", "problem", "fix"],
            correctIndex: 2,
            explanation: "'Problem' artinya masalah atau kesulitan.",
            difficulty: "easy"
        },
        {
            id: "kids-26-003",
            question: "Bahasa Indonesia dari 'We need to find a solution' adalah:",
            options: [
                "Kita perlu mencari masalah",
                "Kita perlu menemukan solusi",
                "Kita punya masalah",
                "Kita tidak tahu apa-apa"
            ],
            correctIndex: 1,
            explanation: "'Find a solution' artinya menemukan solusi/jalan keluar.",
            difficulty: "easy"
        },
        {
            id: "kids-26-004",
            question: "Pilih kata yang berarti PENDEKATAN/strategi:",
            options: ["give up", "approach", "ignore", "forget"],
            correctIndex: 1,
            explanation: "'Approach' artinya pendekatan atau cara menangani sesuatu.",
            difficulty: "easy"
        },
        {
            id: "kids-26-005",
            question: "Apa arti dari 'idea'?",
            options: [
                "Masalah",
                "Ide/gagasan",
                "Solusi",
                "Kesalahan"
            ],
            correctIndex: 1,
            explanation: "'Idea' artinya ide atau gagasan.",
            difficulty: "easy"
        },
        {
            id: "kids-26-006",
            question: "Lengkapi: 'What ___ we do?'",
            options: ["is", "can", "are", "was"],
            correctIndex: 1,
            explanation: "'What can we do?' = Apa yang bisa kita lakukan?",
            difficulty: "easy"
        },
        {
            id: "kids-26-007",
            question: "Bahasa Inggris dari 'Bagaimana kalau kita...?' adalah:",
            options: [
                "What should we...?",
                "How about we...?",
                "Why do we...?",
                "Where are we...?"
            ],
            correctIndex: 1,
            explanation: "'How about we...?' = Bagaimana kalau kita...? (menyampaikan ide).",
            difficulty: "easy"
        },
        {
            id: "kids-26-008",
            question: "Pilih kata yang BUKAN kata kerja positif:",
            options: ["try", "help", "fix", "break"],
            correctIndex: 3,
            explanation: "'Break' (merusak) adalah tindakan negatif, bukan positif.",
            difficulty: "easy"
        },
        {
            id: "kids-26-009",
            question: "Apa arti dari 'work together'?",
            options: [
                "Bekerja sendiri",
                "Bekerja sama",
                "Bekerja cepat",
                "Bekerja lambat"
            ],
            correctIndex: 1,
            explanation: "'Work together' artinya bekerja sama (teamwork).",
            difficulty: "easy"
        },
        {
            id: "kids-26-010",
            question: "Pilih kalimat yang menunjukkan TANYA:",
            options: [
                "This is a problem.",
                "Is this a problem?",
                "We can solve this.",
                "This is easy."
            ],
            correctIndex: 1,
            explanation: "Kalimat tanya dalam bahasa Inggris dimulai dengan kata kerja bantu (Is, Can, Do, What).",
            difficulty: "easy"
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-26-011",
            question: "Pilih langkah pertama yang BAIK dalam memecahkan masalah:",
            options: [
                "Menyalahkan orang lain",
                "Mengidentifikasi/mengenali masalahnya",
                "Menyerah langsung",
                "Menangis saja"
            ],
            correctIndex: 1,
            explanation: "Langkah pertama adalah mengenali dan memahami masalah dengan jelas.",
            difficulty: "medium"
        },
        {
            id: "kids-26-012",
            question: "Lengkapi: 'Let's ___ and think carefully.'",
            options: ["hurry", "stop", "run", "shout"],
            correctIndex: 1,
            explanation: "'Let's stop and think' = Mari berhenti dan berpikir (tenang sebelum bertindak).",
            difficulty: "medium"
        },
        {
            id: "kids-26-013",
            question: "Bahasa Indonesia dari 'brainstorming':",
            options: [
                "Berkelahi",
                "Berpikir bersama/mencari ide",
                "Bermain game",
                "Berlari kencang"
            ],
            correctIndex: 1,
            explanation: "'Brainstorming' artinya mencari ide bersama-sama.",
            difficulty: "medium"
        },
        {
            id: "kids-26-014",
            question: "Pilih kata yang sinonim dengan 'solution':",
            options: ["problem", "answer", "question", "mistake"],
            correctIndex: 1,
            explanation: "'Answer' dan 'solution' sama-sama artinya jawaban/penyelesaian.",
            difficulty: "medium"
        },
        {
            id: "kids-26-015",
            question: "Apa arti dari 'step by step'?",
            options: [
                "Langsung cepat",
                "Langkah demi langkah",
                "Tidak jalan sama sekali",
                "Berlari"
            ],
            correctIndex: 1,
            explanation: "'Step by step' artinya langkah demi langkah (perlahan tapi pasti).",
            difficulty: "medium"
        },
        {
            id: "kids-26-016",
            question: "Lengkapi: 'We should ___ all the possibilities.'",
            options: ["ignore", "consider", "forget", "hide"],
            correctIndex: 1,
            explanation: "'Consider' artinya mempertimbangkan/menimbang-nimbang.",
            difficulty: "medium"
        },
        {
            id: "kids-26-017",
            question: "Bahasa Inggris dari 'Jangan menyerah!' adalah:",
            options: [
                "Give up!",
                "Don't give up!",
                "Never try!",
                "Stop now!"
            ],
            correctIndex: 1,
            explanation: "'Don't give up!' = Jangan menyerah! (semangat untuk terus berusaha).",
            difficulty: "medium"
        },
        {
            id: "kids-26-018",
            question: "Pilih frasa yang menunjukkan KERJASAMA:",
            options: [
                "I can do it alone!",
                "Let's work together on this!",
                "You do it, not me!",
                "I don't want to help!"
            ],
            correctIndex: 1,
            explanation: "'Let's work together' adalah ajakan untuk bekerja sama menyelesaikan masalah.",
            difficulty: "medium"
        },
        {
            id: "kids-26-019",
            question: "Apa arti dari 'creative'?",
            options: [
                "Kreatif",
                "Malas",
                "Cepat",
                "Kuat"
            ],
            correctIndex: 0,
            explanation: "'Creative' artinya kreatif (pandai menciptakan ide baru).",
            difficulty: "medium"
        },
        {
            id: "kids-26-020",
            question: "Pilih kalimat yang menggunakan 'if' dengan benar:",
            options: [
                "If we work together, we can solve this.",
                "If we work together, we solved this.",
                "If we work together, we solved this yesterday.",
                "If we work together, solving this."
            ],
            correctIndex: 0,
            explanation: "Struktur 'if': If + simple present, can/will + verb.",
            difficulty: "medium"
        },
        {
            id: "kids-26-021",
            question: "Lengkapi: 'What are the advantages and ___?'",
            options: ["problems", "disadvantages", "solutions", "questions"],
            correctIndex: 1,
            explanation: "'Advantages and disadvantages' artinya kelebihan dan kekurangan.",
            difficulty: "medium"
        },
        {
            id: "kids-26-022",
            question: "Bahasa Indonesia dari 'There's always a way':",
            options: [
                "Selalu ada jalan/solusi",
                "Tidak ada harapan",
                "Tidak mungkin berhasil",
                "Semua sulit"
            ],
            correctIndex: 0,
            explanation: "'There's always a way' = Selalu ada jalan/solusi (jangan menyerah!).",
            difficulty: "medium"
        },

        // === HARD (8 questions) ===
        {
            id: "kids-26-023",
            question: "Susun langkah menyelesaikan masalah: 'identify / first / the / we / problem / must'",
            options: [
                "First we must identify the problem.",
                "We first must the problem identify.",
                "Identify first we must the problem.",
                "The problem first we must identify."
            ],
            correctIndex: 0,
            explanation: "Struktur: Time adverb + Subject + must + verb + object.",
            difficulty: "hard"
        },
        {
            id: "kids-26-024",
            question: "Pilih strategi pemecahan masalah terbaik:",
            options: [
                "Langsung mengerjakan tanpa berpikir",
                "Mengidentifikasi masalah → brainstorming solusi → memilih solusi terbaik → mengevaluasi hasil",
                "Menunggu orang lain menyelesaikan",
                "Menyalahkan keadaan"
            ],
            correctIndex: 1,
            explanation: "Strategi sistematis: identifikasi → brainstorming → pilih solusi → evaluasi.",
            difficulty: "hard"
        },
        {
            id: "kids-26-025",
            question: "Apa arti dari 'critical thinking'?",
            options: [
                "Berpikir kritis/analitis",
                "Berpikir cepat",
                "Berpikir lambat",
                "Tidak berpikir"
            ],
            correctIndex: 0,
            explanation: "'Critical thinking' artinya berpikir kritis/menganalisis secara logis.",
            difficulty: "hard"
        },
        {
            id: "kids-26-026",
            question: "Pilih kata yang merupakan ANTONIM dari 'easy':",
            options: ["simple", "difficult", "effortless", "quick"],
            correctIndex: 1,
            explanation: "'Difficult' (sulit) adalah lawan dari 'easy' (mudah).",
            difficulty: "hard"
        },
        {
            id: "kids-26-027",
            question: "Lengkapi: 'We need to ___ at this from a different angle.'",
            options: ["see", "look", "watch", "view"],
            correctIndex: 1,
            explanation: "'Look at this from a different angle' = Melihat ini dari sudut pandang berbeda.",
            difficulty: "hard"
        },
        {
            id: "kids-26-028",
            question: "Bahasa Indonesia dari 'Think outside the box':",
            options: [
                "Berpikir di luar kotak",
                "Berpikir kreatif/tidak biasa",
                "Berpikir di dalam kotak",
                "Berpikir cepat"
            ],
            correctIndex: 1,
            explanation: "'Think outside the box' artinya berpikir kreatif, tidak terpaku pada cara biasa.",
            difficulty: "hard"
        },
        {
            id: "kids-26-029",
            question: "Pilih kata yang menunjukkan ANALISIS:",
            options: ["maybe", "analyze", "guess", "hope"],
            correctIndex: 1,
            explanation: "'Analyze' artinya menganalisis/meneliti secara cermat.",
            difficulty: "hard"
        },
        {
            id: "kids-26-030",
            question: "Selesaikan dialog pemecahan masalah:\nMasalah: Tim harus membuat proyek dalam waktu singkat.\nAnak A: ___\nAnak B: Great idea! Let's start right away.",
            options: [
                "I give up!",
                "How about we divide the tasks? Each person can do what they're best at, and we'll check our progress every hour.",
                "This is impossible!",
                "You do everything!"
            ],
            correctIndex: 1,
            explanation: "Solusi yang konkret dengan langkah-langkah jelas adalah jawaban terbaik!",
            difficulty: "hard"
        }
    ]
};

