import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    {
        type: 'title',
        title: "Present Continuous ⏯️",
        subtitle: "Basic Meeting 8",
        teacherNote: "Perkenalkan tense untuk aksi yang sedang berlangsung sekarang."
    },
    {
        type: 'concept',
        title: "Why This Matters?",
        content: [
            "Present Continuous = aksi yang sedang terjadi SEKARANG.",
            "Beda dengan Present Simple yang untuk kebiasaan.",
            "Penting untuk mendeskripsikan aktivitas real-time."
        ],
        teacherNote: "Contohkan dengan aktivitas yang terlihat di kelas saat ini."
    },
    {
        type: 'comparison',
        title: "The Trap vs The Fix",
        comparison: [
            { wrong: "She eating now.", right: "She is eating now." },
            { wrong: "I am agree with you.", right: "I agree with you." },
            { wrong: "They are play football.", right: "They are playing football." }
        ],
        teacherNote: "Jelaskan perbedaan penggunaan state verbs vs action verbs."
    },
    {
        type: 'formula',
        title: "The Grammar Formula",
        formula: "S + am/is/are + V-ing + O",
        content: [
            "I + am + V-ing",
            "He/she/it + is + V-ing",
            "You/we/they + are + V-ing",
            "Keterangan waktu: now, right now, at the moment, currently"
        ]
    },
    {
        type: 'vocabulary',
        title: "Key Terms",
        vocabulary: [
            { term: "Continuous", meaning: "Sedang berlangsung", example: "I am reading." },
            { term: "Progressive", meaning: "Progresif/sedang terjadi", example: "She is sleeping." },
            { term: "V-ing", meaning: "Bentuk -ing dari verb", example: "playing, eating, reading" },
            { term: "Action Verb", meaning: "Kata kerja aksi", example: "run, eat, write" }
        ]
    },
    {
        type: 'concept',
        title: "When to Use Present Continuous",
        content: [
            "1. Aksi sedang terjadi NOW: 'I am studying.'",
            "2. Perubahan/tren: 'The climate is changing.'",
            "3. Rencana di masa depan: 'I am meeting him tomorrow.'",
            "4. Situasi sementara: 'I am living with my parents.'"
        ],
        teacherNote: "Berikan contoh untuk setiap penggunaan."
    },
    {
        type: 'comparison',
        title: "More Examples",
        comparison: [
            { wrong: "Look! He sleeping.", right: "Look! He is sleeping." },
            { wrong: "They watching TV now.", right: "They are watching TV now." },
            { wrong: "I working at the moment.", right: "I am working at the moment." }
        ]
    },
    {
        type: 'micro-drill',
        title: "Quick Pattern Practice",
        content: [
            "I ___ (eat) lunch. (am eating)",
            "She ___ (read) a book. (is reading)",
            "They ___ (play) games. (are playing)",
            "We ___ (watch) TV. (are watching)"
        ],
        teacherNote: "Drill cepat 3 menit. Fokus pada to be + V-ing."
    },
    {
        type: 'case-study',
        title: "Real Conversation",
        caseStudy: {
            scenario: "Teman bertanya: 'What are you doing?'",
            template: "Jawab: 'I am studying English.' atau 'I am reading a book.'"
        },
        teacherNote: "Praktikkan dialog singkat tentang aktivitas yang sedang dilakukan."
    },
    {
        type: 'roleplay',
        title: "Student Practice",
        content: [
            "Deskripsikan apa yang sedang terjadi:",
            "1. The teacher ___ (explain) the lesson.",
            "2. The students ___ (listen) carefully.",
            "3. I ___ (take) notes.",
            "4. My friend ___ (look) at the board."
        ],
        teacherNote: "Beri waktu 3 menit untuk menyelesaikan."
    },
    {
        type: 'micro-drill',
        title: "Error Correction Drill",
        content: [
            "❌ She eating lunch right now.",
            "❌ They are play in the park.",
            "❌ I am don't understand.",
            "→ Jangan lupa to be! V-ing untuk action verbs!"
        ],
        teacherNote: "Identifikasi kesalahan umum present continuous."
    },
    {
        type: 'formula',
        title: "Advanced Application",
        formula: "Spelling Rules for V-ing",
        content: [
            "General: tambah -ing (play → playing)",
            "Silent e: hapus e (make → making, but: see → seeing)",
            "CVC stressed: gandakan (run → running, sit → sitting)",
            "-ie: ganti jadi y (die → dying, lie → lying)"
        ]
    },
    {
        type: 'recap',
        title: "Summary Table",
        recap: [
            { context: "Sedang terjadi sekarang", sayThis: "I am eating", dontSayThis: "I eating" },
            { context: "Kebiasaan/rutin", sayThis: "I eat", dontSayThis: "I am eat" },
            { context: "State verb (know, like)", sayThis: "I know", dontSayThis: "I am knowing" },
            { context: "Rencana mendatang", sayThis: "I am meeting tomorrow", dontSayThis: "I meet tomorrow" }
        ]
    },
    {
        type: 'mission',
        title: "Homework Assignment",
        mission: [
            "Tulis deskripsi aktivitas keluargamu malam ini (minimal 5 kalimat)",
            "Buat 5 kalimat dengan rencana masa depan (using present continuous)",
            "Bedakan 5 pasang kalimat present simple vs continuous"
        ]
    },
    {
        type: 'title',
        title: "Excellent Progress! 🎉",
        subtitle: "Present Continuous = Action in Progress!",
        teacherNote: "Ingatkan bedanya dengan Present Simple."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Rumus Present Continuous:",
        options: [
            "S + V1 + O",
            "S + am/is/are + V-ing + O",
            "S + V2 + O",
            "S + will + V1 + O"
        ],
        correctIndex: 1,
        explanation: "Present Continuous = S + am/is/are + V-ing + O"
    },
    {
        question: "Pilih yang BENAR: 'She ___ a book now.'",
        options: ["reads", "is reading", "read", "reading"],
        correctIndex: 1,
        explanation: "'Now' menunjukkan sedang terjadi → 'is reading'."
    },
    {
        question: "Manakah yang menggunakan Present Continuous?",
        options: [
            "I eat breakfast every day.",
            "She is sleeping right now.",
            "They go to school by bus.",
            "He works at a bank."
        ],
        correctIndex: 1,
        explanation: "'She is sleeping right now' adalah present continuous."
    },
    {
        question: "Pilih yang BENAR: '___ you ___ TV?'",
        options: [
            "Do / watch",
            "Are / watching",
            "Is / watching",
            "Do / watching"
        ],
        correctIndex: 1,
        explanation: "Present continuous question: Are + you + watching?"
    },
    {
        question: "Kapan kita pakai Present Continuous?",
        options: [
            "Kebiasaan harian",
            "Aksi sedang berlangsung sekarang",
            "Fakta umum",
            "Peristiwa masa lalu"
        ],
        correctIndex: 1,
        explanation: "Present Continuous untuk aksi yang sedang berlangsung sekarang."
    },
    {
        question: "Perbaiki: 'He sleeping in his room.'",
        options: [
            "He is sleeping in his room.",
            "He are sleeping in his room.",
            "He be sleeping in his room.",
            "He sleeps sleeping in his room."
        ],
        correctIndex: 0,
        explanation: "Tambahkan to be 'is': 'He is sleeping...'"
    },
    {
        question: "Kata yang TIDAK bisa pakai Present Continuous:",
        options: ["run", "eat", "know", "play"],
        correctIndex: 2,
        explanation: "'Know' adalah state verb, tidak bisa pakai continuous."
    },
    {
        question: "Pilih yang BENAR: 'Look! The children ___ in the garden.'",
        options: ["play", "are playing", "plays", "played"],
        correctIndex: 1,
        explanation: "'Look!' menunjukkan aksi sedang terjadi → present continuous."
    },
    {
        question: "Bentuk V-ing dari 'run' adalah:",
        options: ["runing", "running", "runeing", "runned"],
        correctIndex: 1,
        explanation: "CVC (consonant-vowel-consonant) stressed → gandakan: running."
    },
    {
        question: "Present Continuous juga bisa untuk:",
        options: [
            "Fakta ilmiah",
            "Rencana di masa depan",
            "Kebiasaan masa lalu",
            "Peristiwa sejarah"
        ],
        correctIndex: 1,
        explanation: "Present Continuous bisa untuk rencana yang sudah direncanakan."
    },
    {
        question: "Pilih yang BENAR: 'I ___ to the party tomorrow.' (sudah direncanakan)",
        options: ["go", "am going", "will go", "gone"],
        correctIndex: 1,
        explanation: "Rencana yang sudah direncanakan bisa pakai present continuous."
    },
    {
        question: "Manakah yang SALAH?",
        options: [
            "She is eating now.",
            "They are playing football.",
            "I am knowing the answer.",
            "We are studying English."
        ],
        correctIndex: 2,
        explanation: "'Know' adalah state verb → 'I know the answer.'"
    },
    {
        question: "Bentuk V-ing dari 'make' adalah:",
        options: ["makeing", "making", "maken", "maked"],
        correctIndex: 1,
        explanation: "Silent e → hapus e: making."
    },
    {
        question: "Negatif Present Continuous: 'She ___ (not/sleep)'",
        options: [
            "isn't sleeping",
            "not is sleeping",
            "isn't sleep",
            "don't sleeping"
        ],
        correctIndex: 0,
        explanation: "Negatif: is + not (isn't) + V-ing."
    },
    {
        question: "Keterangan waktu untuk Present Continuous:",
        options: [
            "every day, always",
            "now, right now, at the moment",
            "yesterday, last week",
            "tomorrow, next year"
        ],
        correctIndex: 1,
        explanation: "'Now, right now, at the moment' adalah keterangan waktu present continuous."
    },
    {
        question: "Pilih yang BENAR: 'Listen! Someone ___ the door.'",
        options: ["knocks", "is knocking", "knocking", "knock"],
        correctIndex: 1,
        explanation: "'Listen!' menunjukkan aksi sedang terjadi → present continuous."
    },
    {
        question: "Bentuk V-ing dari 'die' adalah:",
        options: ["dieing", "dying", "dieeing", "dieding"],
        correctIndex: 1,
        explanation: "-ie → ganti jadi y: dying."
    },
    {
        question: "Pertanyaan: 'What ___ you ___?' (lakukan)",
        options: [
            "do / do",
            "are / doing",
            "is / doing",
            "do / doing"
        ],
        correctIndex: 1,
        explanation: "Present continuous question: What are you doing?"
    },
    {
        question: "Perbaiki: 'They are play in the park.'",
        options: [
            "They are playing in the park.",
            "They playing in the park.",
            "They is playing in the park.",
            "They play in the park."
        ],
        correctIndex: 0,
        explanation: "Setelah to be, gunakan V-ing: 'are playing'."
    },
    {
        question: "State verbs adalah kata kerja yang:",
        options: [
            "Menunjukkan aksi",
            "Menunjukkan keadaan/pikiran/perasaan",
            "Selalu pakai -ing",
            "Hanya untuk he/she/it"
        ],
        correctIndex: 1,
        explanation: "State verbs (know, like, want, believe) menunjukkan keadaan batin."
    }
];
