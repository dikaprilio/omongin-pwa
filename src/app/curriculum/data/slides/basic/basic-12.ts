import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    {
        type: 'title',
        title: "Regular Verbs (-ed) 📚",
        subtitle: "Basic Meeting 12",
        teacherNote: "Perkenalkan bentuk lampau dari kata kerja regular dengan -ed."
    },
    {
        type: 'concept',
        title: "Why This Matters?",
        content: [
            "Regular verbs = mayoritas kata kerja dalam bahasa Inggris.",
            "Pola yang konsisten: tambahkan -ed untuk past tense.",
            "Menguasai ini memudahkan membentuk kalimat lampau."
        ],
        teacherNote: "Jelaskan bahwa sebagian besar verbs adalah regular."
    },
    {
        type: 'comparison',
        title: "The Trap vs The Fix",
        comparison: [
            { wrong: "I play-ed soccer yesterday.", right: "I played soccer yesterday." },
            { wrong: "She watch-ed TV.", right: "She watched TV." },
            { wrong: "They stop-ed the car.", right: "They stopped the car." }
        ],
        teacherNote: "Jelaskan aturan spelling untuk -ed."
    },
    {
        type: 'formula',
        title: "The Grammar Formula",
        formula: "S + V2 (-ed) + O",
        content: [
            "V2 = Verb 2 (past form) = V1 + -ed",
            "Semua subjek pakai form yang sama",
            "Keterangan waktu: yesterday, last week, ago, in 2020"
        ]
    },
    {
        type: 'vocabulary',
        title: "Key Terms",
        vocabulary: [
            { term: "Regular Verb", meaning: "Kata kerja beraturan", example: "play → played" },
            { term: "Past Tense", meaning: "Bentuk lampau", example: "walked, watched" },
            { term: "-ed ending", meaning: "Akhiran -ed untuk past", example: "wanted, needed" },
            { term: "Spelling Rule", meaning: "Aturan ejaan", example: "stop → stopped" }
        ]
    },
    {
        type: 'concept',
        title: "Spelling Rules for -ed",
        content: [
            "General: tambah -ed (play → played, want → wanted)",
            "-e: tambah -d (live → lived, love → loved)",
            "CVC stressed: gandakan (stop → stopped, plan → planned)",
            "-y setelah konsonan: ganti -ied (study → studied, carry → carried)"
        ],
        teacherNote: "Praktikkan dengan contoh-contoh di papan tulis."
    },
    {
        type: 'comparison',
        title: "More Examples",
        comparison: [
            { wrong: "He work-ed hard.", right: "He worked hard." },
            { wrong: "I study-ed English.", right: "I studied English." },
            { wrong: "She dance-ed well.", right: "She danced well." }
        ]
    },
    {
        type: 'micro-drill',
        title: "Quick Pattern Practice",
        content: [
            "play → ___ (played)",
            "study → ___ (studied)",
            "stop → ___ (stopped)",
            "watch → ___ (watched)"
        ],
        teacherNote: "Drill cepat 3 menit."
    },
    {
        type: 'case-study',
        title: "Real Conversation",
        caseStudy: {
            scenario: "Teman bertanya: 'What did you do yesterday?'",
            template: "Jawab: 'I watched a movie.' atau 'I played games.'"
        },
        teacherNote: "Praktikkan dialog dengan regular verbs."
    },
    {
        type: 'roleplay',
        title: "Student Practice",
        content: [
            "Ceritakan aktivitasmu kemarin:",
            "1. I ___ (walk) to school.",
            "2. I ___ (watch) TV.",
            "3. I ___ (study) English.",
            "4. I ___ (play) with my friends."
        ],
        teacherNote: "Beri waktu 3 menit untuk menyelesaikan."
    },
    {
        type: 'micro-drill',
        title: "Error Correction Drill",
        content: [
            "❌ I walk-ed to the park.",
            "❌ She stop-ed the car.",
            "❌ They study-ed hard.",
            "→ Perhatikan spelling rules!"
        ],
        teacherNote: "Identifikasi dan perbaiki kesalahan spelling."
    },
    {
        type: 'formula',
        title: "Advanced Application",
        formula: "Pronunciation of -ed: /t/ | /d/ | /ɪd/",
        content: [
            "/t/ → after voiceless: walked, watched, stopped",
            "/d/ → after voiced: played, lived, planned",
            "/ɪd/ → after t/d: wanted, needed, visited"
        ]
    },
    {
        type: 'recap',
        title: "Summary Table",
        recap: [
            { context: "General verb", sayThis: "play → played", dontSayThis: "play-ed" },
            { context: "Verb berakhiran -e", sayThis: "live → lived", dontSayThis: "liveed" },
            { context: "CVC stressed", sayThis: "stop → stopped", dontSayThis: "stoped" },
            { context: "Konsonan + y", sayThis: "study → studied", dontSayThis: "studiedy" }
        ]
    },
    {
        type: 'mission',
        title: "Homework Assignment",
        mission: [
            "Buat daftar 20 regular verbs dan bentuk past-nya",
            "Tulis cerita singkat tentang hari kemarin (minimal 10 kalimat)",
            "Praktikkan pengucapan -ed dengan 10 kata"
        ]
    },
    {
        type: 'title',
        title: "Well Done! 🌟",
        subtitle: "Regular Verbs = Add -ed!",
        teacherNote: "Review spelling rules dan pronunciation -ed."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Past tense dari 'play' adalah:",
        options: ["play-ed", "played", "plaied", "playing"],
        correctIndex: 1,
        explanation: "General rule: tambah -ed → played."
    },
    {
        question: "Past tense dari 'study' adalah:",
        options: ["studied", "studiedy", "studyed", "studying"],
        correctIndex: 0,
        explanation: "Konsonan + y → ganti jadi i + ed: studied."
    },
    {
        question: "Past tense dari 'stop' adalah:",
        options: ["stoped", "stopped", "stopps", "stopping"],
        correctIndex: 1,
        explanation: "CVC (consonant-vowel-consonant) stressed → gandakan konsonan: stopped."
    },
    {
        question: "Past tense dari 'live' adalah:",
        options: ["liveed", "lived", "livved", "living"],
        correctIndex: 1,
        explanation: "Verb berakhiran -e → tambah -d saja: lived."
    },
    {
        question: "Manakah yang SALAH?",
        options: [
            "I walked home.",
            "She watched TV.",
            "They play-ed games.",
            "He studied hard."
        ],
        correctIndex: 2,
        explanation: "'Play-ed' salah. Seharusnya: 'played'."
    },
    {
        question: "Past tense dari 'watch' adalah:",
        options: ["watch-ed", "watched", "watchh", "watching"],
        correctIndex: 1,
        explanation: "Tambah -ed langsung: watched."
    },
    {
        question: "Past tense dari 'carry' adalah:",
        options: ["carryed", "carried", "carrid", "carring"],
        correctIndex: 1,
        explanation: "Konsonan + y → ganti jadi i + ed: carried."
    },
    {
        question: "Pengucapan /ɪd/ untuk -ed digunakan setelah:",
        options: ["p, k", "t, d", "b, g", "s, z"],
        correctIndex: 1,
        explanation: "/ɪd/ digunakan setelah t atau d: wanted, needed."
    },
    {
        question: "Past tense dari 'plan' adalah:",
        options: ["planed", "planned", "plann", "planing"],
        correctIndex: 1,
        explanation: "CVC stressed → gandakan: planned."
    },
    {
        question: "Pilih yang BENAR: 'I ___ to the store yesterday.'",
        options: ["walk", "walked", "walking", "walks"],
        correctIndex: 1,
        explanation: "'Yesterday' → past tense: walked."
    },
    {
        question: "Pengucapan /t/ untuk -ed digunakan setelah:",
        options: ["b, d", "p, k, s", "l, m, n", "vowel"],
        correctIndex: 1,
        explanation: "/t/ digunakan setelah voiceless sounds: p, k, s, sh, ch, f."
    },
    {
        question: "Past tense dari 'dance' adalah:",
        options: ["danceed", "danced", "dancid", "dancing"],
        correctIndex: 1,
        explanation: "Verb berakhiran -e → tambah -d: danced."
    },
    {
        question: "Pengucapan /d/ untuk -ed digunakan setelah:",
        options: ["p, t", "b, g, v, vowel", "s, z", "sh, ch"],
        correctIndex: 1,
        explanation: "/d/ digunakan setelah voiced sounds: b, g, v, l, m, n, r, vowel."
    },
    {
        question: "Past tense dari 'try' adalah:",
        options: ["tryed", "tried", "tryied", "trying"],
        correctIndex: 1,
        explanation: "Konsonan + y → ganti jadi i + ed: tried."
    },
    {
        question: "Manakah yang diucapkan dengan /ɪd/?",
        options: ["walked", "played", "wanted", "lived"],
        correctIndex: 2,
        explanation: "'Wanted' diucapkan dengan /ɪd/ karena berakhiran t."
    },
    {
        question: "Pilih yang BENAR:",
        options: [
            "She stoped the car.",
            "They studied English.",
            "He liveed in Jakarta.",
            "I play-ed soccer."
        ],
        correctIndex: 1,
        explanation: "'They studied English' adalah kalimat yang benar."
    },
    {
        question: "Manakah yang diucapkan dengan /t/?",
        options: ["played", "walked", "planned", "cleaned"],
        correctIndex: 1,
        explanation: "'Walked' diucapkan dengan /t/ karena k adalah voiceless."
    },
    {
        question: "Past tense dari 'clean' adalah:",
        options: ["clean-ed", "cleaned", "cleanned", "cleaning"],
        correctIndex: 1,
        explanation: "Tambah -ed langsung: cleaned."
    },
    {
        question: "Semua subjek dalam past tense regular verbs:",
        options: [
            "Memiliki bentuk berbeda",
            "Memiliki bentuk yang sama",
            "Hanya I/you pakai -ed",
            "Hanya he/she/it pakai -ed"
        ],
        correctIndex: 1,
        explanation: "Dalam past tense, semua subjek pakai bentuk yang sama (played, watched, dll)."
    }
];
