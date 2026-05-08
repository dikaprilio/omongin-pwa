import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    {
        type: 'title',
        title: "Pronouns & Possession 👥",
        subtitle: "Basic Meeting 4",
        teacherNote: "Perkenalkan berbagai jenis pronoun dan cara menunjukkan kepemilikan dalam bahasa Inggris."
    },
    {
        type: 'concept',
        title: "Why This Matters?",
        content: [
            "Pronouns menggantikan noun agar kalimat tidak berulang.",
            "Possessives menunjukkan kepemilikan tanpa perlu kata 'punya'.",
            "Menguasai ini membuat percakapan lebih natural dan efisien."
        ],
        teacherNote: "Contohkan perbedaan: 'John's book' vs 'Buku John punya'."
    },
    {
        type: 'comparison',
        title: "The Trap vs The Fix",
        comparison: [
            { wrong: "This is my book, not your.", right: "This is my book, not yours." },
            { wrong: "He is friend.", right: "He is my friend." },
            { wrong: "The book is her.", right: "The book is hers." }
        ],
        teacherNote: "Jelaskan perbedaan possessive adjective (my, your) dan possessive pronoun (mine, yours)."
    },
    {
        type: 'formula',
        title: "The Grammar Formula",
        formula: "Possessive Adjective + Noun vs Possessive Pronoun (tanpa noun)",
        content: [
            "My book → mine (tanpa noun setelahnya)",
            "Your car → yours",
            "Her house → hers"
        ]
    },
    {
        type: 'vocabulary',
        title: "Key Terms",
        vocabulary: [
            { term: "Subject Pronoun", meaning: "Pelaku kalimat", example: "I, you, he, she, it, we, they" },
            { term: "Object Pronoun", meaning: "Penerima aksi", example: "me, you, him, her, it, us, them" },
            { term: "Possessive Adj.", meaning: "Kata sifat kepemilikan", example: "my, your, his, her, its, our, their" },
            { term: "Possessive Pronoun", meaning: "Kata ganti kepemilikan", example: "mine, yours, his, hers, ours, theirs" }
        ]
    },
    {
        type: 'concept',
        title: "Pronoun Categories",
        content: [
            "Subject: I, you, he, she, it, we, they (di awal kalimat)",
            "Object: me, you, him, her, it, us, them (setelah verb/prep)",
            "Possessive Adj: my, your, his, her, its, our, their (sebelum noun)",
            "Possessive Pro: mine, yours, his, hers, ours, theirs (standalone)"
        ],
        teacherNote: "Buat tabel di papan tulis untuk memudahkan memahami."
    },
    {
        type: 'comparison',
        title: "More Examples",
        comparison: [
            { wrong: "Me am happy.", right: "I am happy." },
            { wrong: "She loves he.", right: "She loves him." },
            { wrong: "This book is my.", right: "This book is mine." }
        ]
    },
    {
        type: 'micro-drill',
        title: "Quick Pattern Practice",
        content: [
            "___ (I/me) like pizza.",
            "She calls ___ (I/me) every day.",
            "This is ___ (my/mine) bag.",
            "The bag is ___ (my/mine)."
        ],
        teacherNote: "Drill cepat 3 menit. Fokus pada posisi pronoun."
    },
    {
        type: 'case-study',
        title: "Real Conversation",
        caseStudy: {
            scenario: "Temanmu bilang: 'This pen is my.'",
            template: "Fix: 'This pen is mine.' atau 'This is my pen.'"
        },
        teacherNote: "Beda penggunaan possessive adjective vs pronoun."
    },
    {
        type: 'roleplay',
        title: "Student Practice",
        content: [
            "Lengkapi dengan pronoun yang tepat:",
            "1. ___ (He/Him) is my brother.",
            "2. I see ___ (she/her) at school.",
            "3. The bag is ___ (their/theirs).",
            "4. This is ___ (our/ours) classroom."
        ],
        teacherNote: "Beri waktu 3 menit untuk mengerjakan."
    },
    {
        type: 'micro-drill',
        title: "Error Correction Drill",
        content: [
            "❌ Me like chocolate.",
            "❌ She loves he.",
            "❌ That car is her.",
            "→ Pilih subject/object/possessive yang tepat!"
        ],
        teacherNote: "Cepat-cepat identifikasi kesalahan."
    },
    {
        type: 'formula',
        title: "Advanced Application",
        formula: "Double Possessive: a friend of mine",
        content: [
            "Gunakan 'of + possessive pronoun' untuk penekanan",
            "Contoh: 'a friend of mine', 'that car of yours'"
        ]
    },
    {
        type: 'recap',
        title: "Summary Table",
        recap: [
            { context: "Pelaku kalimat", sayThis: "I/you/he/she/it/we/they", dontSayThis: "me/him/her" },
            { context: "Setelah verb/prep", sayThis: "me/you/him/her/it/us/them", dontSayThis: "I/he/she/they" },
            { context: "Sebelum noun", sayThis: "my/your/his/her/its/our/their", dontSayThis: "mine/yours/hers" },
            { context: "Standalone", sayThis: "mine/yours/his/hers/ours/theirs", dontSayThis: "my/your/her" }
        ]
    },
    {
        type: 'mission',
        title: "Homework Assignment",
        mission: [
            "Buat 10 kalimat dengan berbagai jenis pronoun",
            "Buat 5 kalimat perbandingan possessive adj vs pronoun",
            "Identifikasi pronoun dalam sebuah lagu bahasa Inggris"
        ]
    },
    {
        type: 'title',
        title: "Great Progress! 🌟",
        subtitle: "Pronouns make your English smooth!",
        teacherNote: "Review tabel pronoun sebelum melanjutkan ke materi berikutnya."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Pilih yang BENAR: '___ am a student.'",
        options: ["I", "Me", "My", "Mine"],
        correctIndex: 0,
        explanation: "'I' adalah subject pronoun untuk orang pertama."
    },
    {
        question: "Pilih yang BENAR: 'She loves ___.'",
        options: ["he", "him", "his", "himself"],
        correctIndex: 1,
        explanation: "Setelah verb pakai object pronoun: 'him'."
    },
    {
        question: "'This is ___ book.' (possessive adjective)",
        options: ["my", "mine", "me", "I"],
        correctIndex: 0,
        explanation: "'My' adalah possessive adjective yang digunakan sebelum noun."
    },
    {
        question: "'The book is ___.' (possessive pronoun)",
        options: ["my", "mine", "me", "I"],
        correctIndex: 1,
        explanation: "'Mine' adalah possessive pronoun (standalone, tanpa noun)."
    },
    {
        question: "Perbaiki: 'Me am happy.'",
        options: ["My am happy.", "I am happy.", "Mine am happy.", "Me is happy."],
        correctIndex: 1,
        explanation: "'I' adalah subject pronoun yang benar untuk posisi pelaku."
    },
    {
        question: "Object pronoun untuk 'we' adalah:",
        options: ["we", "us", "our", "ours"],
        correctIndex: 1,
        explanation: "'Us' adalah object pronoun dari 'we'."
    },
    {
        question: "Pilih yang BENAR: 'Give ___ the book.'",
        options: ["I", "my", "me", "mine"],
        correctIndex: 2,
        explanation: "Setelah verb imperative pakai object pronoun: 'me'."
    },
    {
        question: "Possessive adjective untuk 'they' adalah:",
        options: ["they", "them", "their", "theirs"],
        correctIndex: 2,
        explanation: "'Their' adalah possessive adjective: 'their house'."
    },
    {
        question: "'That car is ___' (milik dia laki-laki)",
        options: ["his", "him", "he", "himself"],
        correctIndex: 0,
        explanation: "'His' bisa jadi possessive adjective atau possessive pronoun."
    },
    {
        question: "Perbaiki: 'She is friend.'",
        options: [
            "She is my friend.",
            "She is mine friend.",
            "Her is my friend.",
            "She is me friend."
        ],
        correctIndex: 0,
        explanation: "Tambahkan possessive adjective: 'my friend'."
    },
    {
        question: "Subject pronoun untuk 'John and I' adalah:",
        options: ["us", "we", "our", "ours"],
        correctIndex: 1,
        explanation: "'We' adalah subject pronoun untuk jamak termasuk penutur."
    },
    {
        question: "Pilih yang BENAR: '___ like ice cream.' (mereka)",
        options: ["Them", "They", "Their", "Theirs"],
        correctIndex: 1,
        explanation: "'They' adalah subject pronoun untuk 'mereka'."
    },
    {
        question: "'Is this pen ___?' (milik kamu)",
        options: ["your", "yours", "you", "yourself"],
        correctIndex: 1,
        explanation: "'Yours' adalah possessive pronoun (standalone)."
    },
    {
        question: "Object pronoun untuk 'she' adalah:",
        options: ["she", "her", "hers", "herself"],
        correctIndex: 1,
        explanation: "'Her' adalah object pronoun dari 'she'."
    },
    {
        question: "Perbaiki: 'The bag is her.'",
        options: [
            "The bag is hers.",
            "The bag is she.",
            "The bag is her bag.",
            "A dan C benar"
        ],
        correctIndex: 3,
        explanation: "'The bag is hers' atau 'The bag is her bag' keduanya benar."
    },
    {
        question: "Pilih yang SALAH:",
        options: [
            "He loves her.",
            "She calls him.",
            "Me like pizza.",
            "They know us."
        ],
        correctIndex: 2,
        explanation: "'Me like pizza' salah. Seharusnya: 'I like pizza.'"
    },
    {
        question: "Possessive pronoun untuk 'we' adalah:",
        options: ["we", "us", "our", "ours"],
        correctIndex: 3,
        explanation: "'Ours' adalah possessive pronoun: 'The house is ours.'"
    },
    {
        question: "Pilih yang BENAR: 'This house is ___' (milik kita)",
        options: ["our", "ours", "us", "we"],
        correctIndex: 1,
        explanation: "Karena tidak ada noun setelahnya, pakai possessive pronoun 'ours'."
    },
    {
        question: "'Its' digunakan untuk:",
        options: [
            "Orang",
            "Hewan/benda",
            "Tempat",
            "Waktu"
        ],
        correctIndex: 1,
        explanation: "'Its' adalah possessive untuk hewan atau benda (it)."
    },
    {
        question: "Pilih yang BENAR: '___ went to the park with ___.'",
        options: [
            "She / he",
            "Her / him",
            "She / him",
            "Her / he"
        ],
        correctIndex: 2,
        explanation: "'She' (subject) + 'him' (object setelah with)."
    }
];
