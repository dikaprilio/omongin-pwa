import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    {
        type: 'title',
        title: "Adjectives & Adverbs ✨",
        subtitle: "Basic Meeting 9",
        teacherNote: "Perkenalkan cara mendeskripsikan noun (adjective) dan verb (adverb)."
    },
    {
        type: 'concept',
        title: "Why This Matters?",
        content: [
            "Adjectives membuat deskripsi lebih hidup dan detail.",
            "Adverbs memberi informasi tambahan tentang bagaimana sesuatu dilakukan.",
            "Posisi adjective dan adverb dalam kalimat berbeda!"
        ],
        teacherNote: "Bandingkan: 'She runs' vs 'She runs quickly'."
    },
    {
        type: 'comparison',
        title: "The Trap vs The Fix",
        comparison: [
            { wrong: "She sings beautiful.", right: "She sings beautifully." },
            { wrong: "He is a quickly runner.", right: "He is a quick runner." },
            { wrong: "They speak English good.", right: "They speak English well." }
        ],
        teacherNote: "Jelaskan perbedaan fungsi dan posisi adjective vs adverb."
    },
    {
        type: 'formula',
        title: "The Grammar Formula",
        formula: "Adjective + Noun | Verb + Adverb",
        content: [
            "Adjective mendeskripsikan noun → sebelum noun atau setelah to be",
            "Adverb mendeskripsikan verb/adj/adv → biasanya setelah verb",
            "Contoh: 'a quick runner' (adj) vs 'runs quickly' (adv)"
        ]
    },
    {
        type: 'vocabulary',
        title: "Key Terms",
        vocabulary: [
            { term: "Adjective", meaning: "Kata sifat", example: "beautiful, quick, happy" },
            { term: "Adverb", meaning: "Kata keterangan", example: "beautifully, quickly, happily" },
            { term: "Noun", meaning: "Kata benda", example: "book, car, person" },
            { term: "Verb", meaning: "Kata kerja", example: "run, sing, speak" }
        ]
    },
    {
        type: 'concept',
        title: "Forming Adverbs from Adjectives",
        content: [
            "General: tambah -ly (quick → quickly, beautiful → beautifully)",
            "-y → ganti jadi -ily (happy → happily, easy → easily)",
            "-le → ganti jadi -ly (gentle → gently, possible → possibly)",
            "Irregular: good → well, fast → fast, hard → hard"
        ],
        teacherNote: "Buat daftar irregular adverbs."
    },
    {
        type: 'comparison',
        title: "More Examples",
        comparison: [
            { wrong: "He drives careful.", right: "He drives carefully." },
            { wrong: "This is a badly movie.", right: "This is a bad movie." },
            { wrong: "She is a slowly walker.", right: "She is a slow walker." }
        ]
    },
    {
        type: 'micro-drill',
        title: "Quick Pattern Practice",
        content: [
            "She is a ___ (quick/quickly) learner. (quick)",
            "She learns ___. (quickly)",
            "He speaks ___ (soft/softly). (softly)",
            "He has a ___ voice. (soft)"
        ],
        teacherNote: "Drill cepat 3 menit. Fokus pada posisi."
    },
    {
        type: 'case-study',
        title: "Real Conversation",
        caseStudy: {
            scenario: "Temanmu bilang: 'You speak English very good.'",
            template: "Fix: 'You speak English very well.' (well = adverb untuk verb speak)"
        },
        teacherNote: "'Good' adalah adjective, 'well' adalah adverb."
    },
    {
        type: 'roleplay',
        title: "Student Practice",
        content: [
            "Pilih adjective atau adverb:",
            "1. She dances ___. (beautiful/beautifully)",
            "2. He is a ___ driver. (careful/carefully)",
            "3. They work ___. (hard/hardly)",
            "4. This is a ___ book. (good/well)"
        ],
        teacherNote: "Beri waktu 3 menit untuk mengerjakan."
    },
    {
        type: 'micro-drill',
        title: "Error Correction Drill",
        content: [
            "❌ She sings beautiful.",
            "❌ He is a fastly runner.",
            "❌ They speak English good.",
            "→ Perhatikan posisi dan bentuk adj/adv!"
        ],
        teacherNote: "Identifikasi dan perbaiki kesalahan."
    },
    {
        type: 'formula',
        title: "Advanced Application",
        formula: "Adverb juga bisa mendeskripsikan Adjective/Adverb",
        content: [
            "Adv + Adj: 'extremely beautiful', 'very happy'",
            "Adv + Adv: 'very quickly', 'quite well'",
            "Adj setelah to be: 'She is happy.'"
        ]
    },
    {
        type: 'recap',
        title: "Summary Table",
        recap: [
            { context: "Mendeskripsikan noun", sayThis: "Adjective", dontSayThis: "a quickly car" },
            { context: "Mendeskripsikan verb", sayThis: "Adverb", dontSayThis: "drive quick" },
            { context: "Setelah to be", sayThis: "Adjective", dontSayThis: "She is happily" },
            { context: "Good/Well", sayThis: "Speak well", dontSayThis: "Speak good" }
        ]
    },
    {
        type: 'mission',
        title: "Homework Assignment",
        mission: [
            "Buat 10 pasang kalimat adj vs adv (total 20 kalimat)",
            "Tulis deskripsi 3 orang dengan detail menggunakan adjective",
            "Ubah 10 adjective menjadi adverb"
        ]
    },
    {
        type: 'title',
        title: "Wonderful! 🌟",
        subtitle: "Adjectives describe nouns, Adverbs describe verbs!",
        teacherNote: "Review irregular adverbs: good→well, fast→fast, hard→hard"
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Adjective digunakan untuk mendeskripsikan:",
        options: ["Verb", "Noun", "Adverb", "Preposition"],
        correctIndex: 1,
        explanation: "Adjective mendeskripsikan noun (kata benda)."
    },
    {
        question: "Adverb digunakan untuk mendeskripsikan:",
        options: ["Hanya verb", "Verb, adjective, adverb", "Hanya noun", "Hanya preposition"],
        correctIndex: 1,
        explanation: "Adverb mendeskripsikan verb, adjective, dan adverb lain."
    },
    {
        question: "Pilih yang BENAR: 'She is a ___ singer.'",
        options: ["beautiful", "beautifully", "beauty", "beautify"],
        correctIndex: 0,
        explanation: "Sebelum noun pakai adjective: 'beautiful singer'."
    },
    {
        question: "Pilih yang BENAR: 'She sings ___.'",
        options: ["beautiful", "beautifully", "beauty", "beautify"],
        correctIndex: 1,
        explanation: "Setelah verb pakai adverb: 'sings beautifully'."
    },
    {
        question: "Adverb dari 'quick' adalah:",
        options: ["quick", "quickly", "quicker", "quickness"],
        correctIndex: 1,
        explanation: "Tambahkan -ly: quick → quickly."
    },
    {
        question: "Perbaiki: 'He drives very careful.'",
        options: [
            "He drives very carefully.",
            "He drive very careful.",
            "He is drives very careful.",
            "He drives very carefuly."
        ],
        correctIndex: 0,
        explanation: "Setelah verb 'drives' pakai adverb 'carefully'."
    },
    {
        question: "Adverb dari 'happy' adalah:",
        options: ["happy", "happily", "happiness", "happier"],
        correctIndex: 1,
        explanation: "-y → -ily: happy → happily."
    },
    {
        question: "Pilih yang BENAR: 'You speak English very ___.'",
        options: ["good", "well", "better", "best"],
        correctIndex: 1,
        explanation: "Setelah verb 'speak' pakai adverb 'well' (irregular dari good)."
    },
    {
        question: "Manakah yang menggunakan adjective?",
        options: [
            "She runs quickly.",
            "He is a fast runner.",
            "They speak softly.",
            "He works hard."
        ],
        correctIndex: 1,
        explanation: "'Fast' sebelum noun 'runner' adalah adjective."
    },
    {
        question: "Adverb dari 'gentle' adalah:",
        options: ["gentle", "gentely", "gently", "gentleness"],
        correctIndex: 2,
        explanation: "-le → -ly: gentle → gently."
    },
    {
        question: "Pilih yang SALAH:",
        options: [
            "She is happy.",
            "He drives carefully.",
            "They are a happily family.",
            "I feel good."
        ],
        correctIndex: 2,
        explanation: "'Happily' adalah adverb. Seharusnya: 'happy family'."
    },
    {
        question: "'Hard' sebagai adverb berarti:",
        options: ["Sulit", "Keras/keras-kerasan", "Hampir tidak", "Lembut"],
        correctIndex: 1,
        explanation: "'Hard' bisa jadi adjective dan adverb (irregular): 'He works hard.'"
    },
    {
        question: "Pilih yang BENAR: 'He is a ___ worker.'",
        options: ["hard", "hardly", "hardy", "harden"],
        correctIndex: 0,
        explanation: "Sebelum noun pakai adjective: 'hard worker'."
    },
    {
        question: "'Hardly' berarti:",
        options: ["Dengan keras", "Hampir tidak", "Sangat", "Cepat"],
        correctIndex: 1,
        explanation: "'Hardly' = hampir tidak (berbeda dengan hard)."
    },
    {
        question: "Adverb dari 'easy' adalah:",
        options: ["easy", "easily", "easiness", "easi"],
        correctIndex: 1,
        explanation: "-y → -ily: easy → easily."
    },
    {
        question: "Pilih yang BENAR: 'The test was ___ difficult.'",
        options: ["extreme", "extremely", "extremity", "extrem"],
        correctIndex: 1,
        explanation: "Mendeskripsikan adjective 'difficult' pakai adverb 'extremely'."
    },
    {
        question: "Irregular adverb dari 'good' adalah:",
        options: ["good", "goodly", "well", "better"],
        correctIndex: 2,
        explanation: "Good (adj) → well (adv)."
    },
    {
        question: "Pilih yang BENAR:",
        options: [
            "She sings good.",
            "He is a carefully driver.",
            "They speak English well.",
            "This is a badly book."
        ],
        correctIndex: 2,
        explanation: "'They speak English well' adalah kalimat yang benar."
    },
    {
        question: "Adjective setelah to be contohnya:",
        options: [
            "She speaks beautifully.",
            "He runs quickly.",
            "They are happy.",
            "She sings softly."
        ],
        correctIndex: 2,
        explanation: "'Happy' setelah to be 'are' adalah adjective."
    },
    {
        question: "Adverb dari 'possible' adalah:",
        options: ["possible", "possibly", "possibility", "possib"],
        correctIndex: 1,
        explanation: "-le → -ly: possible → possibly."
    }
];
