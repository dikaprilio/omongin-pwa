import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    {
        type: 'title',
        title: "Comparative/Superlative 📊",
        subtitle: "Basic Meeting 10",
        teacherNote: "Perkenalkan cara membandingkan dalam bahasa Inggris."
    },
    {
        type: 'concept',
        title: "Why This Matters?",
        content: [
            "Comparative untuk membandingkan 2 hal.",
            "Superlative untuk menyatakan yang paling...",
            "Dua bentuk ini sangat sering digunakan dalam percakapan."
        ],
        teacherNote: "Contohkan perbandingan dalam kehidupan sehari-hari."
    },
    {
        type: 'comparison',
        title: "The Trap vs The Fix",
        comparison: [
            { wrong: "She is more taller than me.", right: "She is taller than me." },
            { wrong: "This is the more beautiful place.", right: "This is the most beautiful place." },
            { wrong: "He is more fast than Tom.", right: "He is faster than Tom." }
        ],
        teacherNote: "Jelaskan kapan pakai -er/-est dan kapan pakai more/most."
    },
    {
        type: 'formula',
        title: "The Grammar Formula",
        formula: "Adj/Adv short: -er / the -est | Adj/Adv long: more / the most",
        content: [
            "Short (1-2 suku kata): tall → taller → the tallest",
            "Long (2+ suku kata): beautiful → more beautiful → the most beautiful",
            "Irregular: good → better → the best, bad → worse → the worst"
        ]
    },
    {
        type: 'vocabulary',
        title: "Key Terms",
        vocabulary: [
            { term: "Comparative", meaning: "Bentuk perbandingan (lebih)", example: "taller, more beautiful" },
            { term: "Superlative", meaning: "Bentuk paling", example: "the tallest, the most beautiful" },
            { term: "Short Adjective", meaning: "Adj pendek (1-2 suku kata)", example: "big, small, fast" },
            { term: "Long Adjective", meaning: "Adj panjang (2+ suku kata)", example: "beautiful, expensive" }
        ]
    },
    {
        type: 'concept',
        title: "Forming Comparative & Superlative",
        content: [
            "Short adj: tall → taller → the tallest",
            "CVC: big → bigger → the biggest (gandakan konsonan)",
            "-y: happy → happier → the happiest (ganti y jadi i)",
            "Long adj: expensive → more expensive → the most expensive"
        ],
        teacherNote: "Buat daftar irregular adjectives."
    },
    {
        type: 'comparison',
        title: "More Examples",
        comparison: [
            { wrong: "This book is more better.", right: "This book is better." },
            { wrong: "She is the taller in class.", right: "She is the tallest in class." },
            { wrong: "He runs more faster.", right: "He runs faster." }
        ]
    },
    {
        type: 'micro-drill',
        title: "Quick Pattern Practice",
        content: [
            "tall → ___ → ___ (taller, the tallest)",
            "beautiful → ___ → ___ (more beautiful, the most beautiful)",
            "good → ___ → ___ (better, the best)",
            "happy → ___ → ___ (happier, the happiest)"
        ],
        teacherNote: "Drill cepat 3 menit."
    },
    {
        type: 'case-study',
        title: "Real Conversation",
        caseStudy: {
            scenario: "Temanmu bilang: 'My phone is more expensive than yours.'",
            template: "Response: 'But mine is more reliable.' atau 'Is it the most expensive?'"
        },
        teacherNote: "Praktikkan perbandingan dalam konteks nyata."
    },
    {
        type: 'roleplay',
        title: "Student Practice",
        content: [
            "Buat perbandingan:",
            "1. My house vs your house (big)",
            "2. This book vs that book (interesting)",
            "3. Tom vs Jerry (fast)",
            "4. Among all students (good)"
        ],
        teacherNote: "Beri waktu 4 menit untuk membuat kalimat."
    },
    {
        type: 'micro-drill',
        title: "Error Correction Drill",
        content: [
            "❌ She is more taller than me.",
            "❌ This is the more beautiful painting.",
            "❌ He is the more fast runner.",
            "→ Jangan dobel more + -er!"
        ],
        teacherNote: "Identifikasi dan perbaiki kesalahan double comparative."
    },
    {
        type: 'formula',
        title: "Advanced Application",
        formula: "Special Cases: less / the least",
        content: [
            "Less + adj = kurang... (untuk semua adjective)",
            "The least + adj = paling tidak...",
            "Contoh: 'less expensive', 'the least expensive'"
        ]
    },
    {
        type: 'recap',
        title: "Summary Table",
        recap: [
            { context: "Membandingkan 2 hal (pendek)", sayThis: "taller than", dontSayThis: "more tall than" },
            { context: "Membandingkan 2 hal (panjang)", sayThis: "more beautiful than", dontSayThis: "beautifuller than" },
            { context: "Yang paling (pendek)", sayThis: "the tallest", dontSayThis: "the most tall" },
            { context: "Yang paling (panjang)", sayThis: "the most beautiful", dontSayThis: "the beautifulest" }
        ]
    },
    {
        type: 'mission',
        title: "Homework Assignment",
        mission: [
            "Bandingkan 5 hal dalam rumahmu (gunakan comparative)",
            "Tulis 5 superlative tentang kelas/teman-temanmu",
            "Buat daftar 10 irregular comparative/superlative"
        ]
    },
    {
        type: 'title',
        title: "Excellent! 🎉",
        subtitle: "Comparative vs Superlative mastered!",
        teacherNote: "Review irregular forms: good→better→best, bad→worse→worst"
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Comparative dari 'tall' adalah:",
        options: ["taller", "more tall", "tallest", "most tall"],
        correctIndex: 0,
        explanation: "Adj pendek (1-2 suku kata) tambah -er: taller."
    },
    {
        question: "Superlative dari 'beautiful' adalah:",
        options: ["beautifulest", "the beautifulest", "the most beautiful", "most beautiful"],
        correctIndex: 2,
        explanation: "Adj panjang (2+ suku kata) pakai the most."
    },
    {
        question: "Pilih yang BENAR: 'She is ___ than her sister.'",
        options: ["more taller", "taller", "tallest", "the taller"],
        correctIndex: 1,
        explanation: "Jangan dobel more + -er. Pakai 'taller'."
    },
    {
        question: "Comparative dari 'good' adalah:",
        options: ["gooder", "more good", "better", "best"],
        correctIndex: 2,
        explanation: "Irregular: good → better."
    },
    {
        question: "Superlative dari 'bad' adalah:",
        options: ["badder", "more bad", "worse", "the worst"],
        correctIndex: 3,
        explanation: "Irregular: bad → worse → the worst."
    },
    {
        question: "Pilih yang BENAR: 'This is ___ book I have ever read.'",
        options: ["the goodest", "the most good", "the best", "the better"],
        correctIndex: 2,
        explanation: "Superlative dari good adalah the best."
    },
    {
        question: "Comparative dari 'expensive' adalah:",
        options: ["expensiver", "more expensive", "expensivlier", "most expensive"],
        correctIndex: 1,
        explanation: "Adj panjang pakai more: more expensive."
    },
    {
        question: "Pilih yang SALAH:",
        options: [
            "She is taller than me.",
            "This is the most interesting book.",
            "He is more faster than Tom.",
            "It is the best movie."
        ],
        correctIndex: 2,
        explanation: "'More faster' salah (double comparative). Seharusnya: 'faster'."
    },
    {
        question: "Comparative dari 'happy' adalah:",
        options: ["happyer", "more happy", "happier", "happiest"],
        correctIndex: 2,
        explanation: "-y → ganti jadi i + -er: happier."
    },
    {
        question: "Superlative dari 'big' adalah:",
        options: ["bigest", "the bigest", "the biggest", "most big"],
        correctIndex: 2,
        explanation: "CVC → gandakan konsonan: the biggest."
    },
    {
        question: "Pilih yang BENAR: 'He runs ___ than me.'",
        options: ["fast", "faster", "more fast", "fastest"],
        correctIndex: 1,
        explanation: "Comparative dari fast adalah faster."
    },
    {
        question: "Untuk membandingkan 2 hal, gunakan:",
        options: ["Superlative", "Comparative", "Positive", "Adverb"],
        correctIndex: 1,
        explanation: "Comparative digunakan untuk membandingkan 2 hal."
    },
    {
        question: "Untuk menyatakan 'yang paling', gunakan:",
        options: ["Comparative", "Superlative", "Positive", "Adverb"],
        correctIndex: 1,
        explanation: "Superlative digunakan untuk menyatakan yang paling..."
    },
    {
        question: "Pilih yang BENAR: 'Mount Everest is ___ mountain in the world.'",
        options: ["the higher", "the highest", "highest", "higher"],
        correctIndex: 1,
        explanation: "Superlative: the highest."
    },
    {
        question: "Superlative selalu diawali dengan:",
        options: ["a", "an", "the", "-"],
        correctIndex: 2,
        explanation: "Superlative selalu pakai 'the': the tallest, the most beautiful."
    },
    {
        question: "Comparative dari 'little' adalah:",
        options: ["littler", "more little", "less", "least"],
        correctIndex: 2,
        explanation: "Irregular: little → less."
    },
    {
        question: "Pilih yang BENAR:",
        options: [
            "She is the more intelligent student.",
            "She is the most intelligent student.",
            "She is intelligenter than him.",
            "She is the intelligente"
        ],
        correctIndex: 1,
        explanation: "'The most intelligent' adalah bentuk yang benar."
    },
    {
        question: "'Less' digunakan untuk:",
        options: [
            "Superlative",
            "Comparative negatif (kurang)",
            "Positive",
            "Hanya untuk adj pendek"
        ],
        correctIndex: 1,
        explanation: "'Less' = kurang (bisa untuk semua adjective)."
    },
    {
        question: "Comparative dari 'far' adalah:",
        options: ["farer", "more far", "farther/further", "farest"],
        correctIndex: 2,
        explanation: "Irregular: far → farther/further."
    },
    {
        question: "Pilih yang BENAR:",
        options: [
            "This is the more good option.",
            "This is the better option.",
            "This is the bestest option.",
            "This is more better option."
        ],
        correctIndex: 1,
        explanation: "'The better option' adalah bentuk yang benar (comparative dari good)."
    }
];
