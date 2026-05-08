import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    {
        type: 'title',
        title: "Present Simple (Habits) 📅",
        subtitle: "Basic Meeting 6",
        teacherNote: "Perkenalkan tense pertama untuk kebiasaan dan fakta umum."
    },
    {
        type: 'concept',
        title: "Why This Matters?",
        content: [
            "Present Simple = tense yang paling sering digunakan.",
            "Untuk kebiasaan, rutinitas, jadwal, dan fakta umum.",
            "Kunci: tambahkan -s/-es untuk he/she/it!"
        ],
        teacherNote: "Contohkan kehidupan sehari-hari yang menggunakan present simple."
    },
    {
        type: 'comparison',
        title: "The Trap vs The Fix",
        comparison: [
            { wrong: "She work at a bank.", right: "She works at a bank." },
            { wrong: "He don't like coffee.", right: "He doesn't like coffee." },
            { wrong: "I goes to school.", right: "I go to school." }
        ],
        teacherNote: "Tegaskan aturan -s untuk he/she/it, tanpa -s untuk I/you/we/they."
    },
    {
        type: 'formula',
        title: "The Grammar Formula",
        formula: "S + V1(s/es) + O",
        content: [
            "I/you/we/they + V1 (go, eat, play)",
            "He/she/it + V1 + s/es (goes, eats, plays)",
            "Keterangan waktu: every day, always, usually, often, sometimes, never"
        ]
    },
    {
        type: 'vocabulary',
        title: "Key Terms",
        vocabulary: [
            { term: "Habit", meaning: "Kebiasaan", example: "I drink coffee every morning." },
            { term: "Routine", meaning: "Rutinitas", example: "She goes to work at 8 AM." },
            { term: "Fact", meaning: "Fakta", example: "The sun rises in the east." },
            { term: "Schedule", meaning: "Jadwal", example: "The train leaves at 5 PM." }
        ]
    },
    {
        type: 'concept',
        title: "Adding -s/-es Rules",
        content: [
            "General: tambah -s (work → works, read → reads)",
            "-s, -ss, -sh, -ch, -x, -z, -o → -es (watch → watches, go → goes)",
            "Konsonan + y → ganti -ies (study → studies, fly → flies)",
            "Vokal + y → tambah -s (play → plays, stay → stays)"
        ],
        teacherNote: "Praktikkan dengan kata kerja umum."
    },
    {
        type: 'comparison',
        title: "More Examples",
        comparison: [
            { wrong: "My father don't smoke.", right: "My father doesn't smoke." },
            { wrong: "They watches TV every night.", right: "They watch TV every night." },
            { wrong: "She study English.", right: "She studies English." }
        ]
    },
    {
        type: 'micro-drill',
        title: "Quick Pattern Practice",
        content: [
            "I ___ (play) football. (play)",
            "She ___ (play) tennis. (plays)",
            "They ___ (watch) TV. (watch)",
            "He ___ (watch) movies. (watches)"
        ],
        teacherNote: "Drill cepat 3 menit. Fokus pada -s/-es."
    },
    {
        type: 'case-study',
        title: "Real Conversation",
        caseStudy: {
            scenario: "Temanmu bilang: 'My sister work in Jakarta.'",
            template: "Fix: 'My sister works in Jakarta.' (she → works dengan -s)"
        },
        teacherNote: "Ingatkan aturan -s untuk orang ketiga tunggal."
    },
    {
        type: 'roleplay',
        title: "Student Practice",
        content: [
            "Ceritakan rutinitas harianmu menggunakan present simple:",
            "1. I wake up at ___",
            "2. I ___ breakfast at ___",
            "3. I go to ___",
            "4. I ___ home at ___"
        ],
        teacherNote: "Beri waktu 4 menit. Siswa tulis 4 kalimat."
    },
    {
        type: 'micro-drill',
        title: "Error Correction Drill",
        content: [
            "❌ She don't like pizza.",
            "❌ He go to school by bus.",
            "❌ My mother work at a hospital.",
            "→ Perhatikan -s untuk he/she/it!"
        ],
        teacherNote: "Identifikasi kesalahan dan perbaiki."
    },
    {
        type: 'formula',
        title: "Advanced Application",
        formula: "Negative: S + don't/doesn't + V1",
        content: [
            "I/you/we/they + don't + V1",
            "He/she/it + doesn't + V1 (tanpa -s!)",
            "Contoh: 'She doesn't like coffee.' (bukan 'doesn't likes')"
        ],
        teacherNote: "Tegaskan setelah doesn't, verb kembali ke bentuk dasar."
    },
    {
        type: 'recap',
        title: "Summary Table",
        recap: [
            { context: "Positif I/you/we/they", sayThis: "I play", dontSayThis: "I plays" },
            { context: "Positif he/she/it", sayThis: "She plays", dontSayThis: "She play" },
            { context: "Negatif I/you/we/they", sayThis: "I don't play", dontSayThis: "I no play" },
            { context: "Negatif he/she/it", sayThis: "He doesn't play", dontSayThis: "He don't play" }
        ]
    },
    {
        type: 'mission',
        title: "Homework Assignment",
        mission: [
            "Tulis rutinitas harian lengkap (minimal 10 aktivitas)",
            "Ceritakan kebiasaan keluargamu (3 orang)",
            "Buat 5 kalimat negatif dan 5 kalimat pertanyaan"
        ]
    },
    {
        type: 'title',
        title: "Awesome! 🌟",
        subtitle: "Present Simple = Habits & Facts!",
        teacherNote: "Ingatkan untuk selalu perhatikan -s untuk he/she/it."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Pilih yang BENAR: 'She ___ to school every day.'",
        options: ["go", "goes", "going", "gone"],
        correctIndex: 1,
        explanation: "She (he/she/it) + V1 + s → 'goes'."
    },
    {
        question: "Pilih yang BENAR: 'I ___ coffee every morning.'",
        options: ["drink", "drinks", "drinking", "drank"],
        correctIndex: 0,
        explanation: "I/you/we/they + V1 (tanpa s) → 'drink'."
    },
    {
        question: "Perbaiki: 'He don't like vegetables.'",
        options: [
            "He doesn't like vegetables.",
            "He not like vegetables.",
            "He no like vegetables.",
            "He isn't like vegetables."
        ],
        correctIndex: 0,
        explanation: "Negatif untuk he/she/it pakai 'doesn't'."
    },
    {
        question: "Present Simple digunakan untuk kecuali:",
        options: [
            "Kebiasaan",
            "Rutinitas",
            "Aksi sedang terjadi",
            "Fakta umum"
        ],
        correctIndex: 2,
        explanation: "Aksi sedang terjadi pakai Present Continuous, bukan Present Simple."
    },
    {
        question: "Pilih yang BENAR: 'My father ___ at 6 AM.'",
        options: ["wake", "wakes", "waking", "woke"],
        correctIndex: 1,
        explanation: "He/she/it + V1 + s → 'wakes'."
    },
    {
        question: "'They ___ TV every night.'",
        options: ["watch", "watches", "watching", "watched"],
        correctIndex: 0,
        explanation: "They (I/you/we/they) + V1 → 'watch' (tanpa -es)."
    },
    {
        question: "Perbaiki: 'She study English on Monday.'",
        options: [
            "She studies English on Monday.",
            "She studys English on Monday.",
            "She is study English on Monday.",
            "She studyes English on Monday."
        ],
        correctIndex: 0,
        explanation: "Konsonan + y → ganti dengan -ies: 'studies'."
    },
    {
        question: "Negatif dari 'She speaks French' adalah:",
        options: [
            "She don't speak French.",
            "She doesn't speaks French.",
            "She doesn't speak French.",
            "She not speak French."
        ],
        correctIndex: 2,
        explanation: "Doesn't + V1 (tanpa s)."
    },
    {
        question: "Pilih yang BENAR: 'The sun ___ in the east.'",
        options: ["rise", "rises", "rising", "rose"],
        correctIndex: 1,
        explanation: "Fakta umum pakai present simple: 'rises'."
    },
    {
        question: "Manakah yang SALAH?",
        options: [
            "He goes to work at 8.",
            "She watches TV every night.",
            "They plays football.",
            "I eat breakfast at 7."
        ],
        correctIndex: 2,
        explanation: "'They plays' salah. Seharusnya: 'They play' (tanpa s)."
    },
    {
        question: "'She ___ (not/like) chocolate.'",
        options: [
            "don't like",
            "doesn't like",
            "not likes",
            "isn't like"
        ],
        correctIndex: 1,
        explanation: "She + doesn't + V1 → 'doesn't like'."
    },
    {
        question: "Pilih yang BENAR: 'We usually ___ dinner at 7 PM.'",
        options: ["have", "has", "having", "haved"],
        correctIndex: 0,
        explanation: "We (I/you/we/they) + V1 → 'have'."
    },
    {
        question: "Kata kerja yang pakai -es untuk he/she/it:",
        options: ["play", "read", "watch", "go"],
        correctIndex: 3,
        explanation: "'Go' → 'goes' (tambah -es karena berakhiran o)."
    },
    {
        question: "Pertanyaan: '___ you like coffee?'",
        options: ["Do", "Does", "Are", "Is"],
        correctIndex: 0,
        explanation: "Do untuk I/you/we/they dalam pertanyaan present simple."
    },
    {
        question: "Pertanyaan: '___ she speak English?'",
        options: ["Do", "Does", "Are", "Is"],
        correctIndex: 1,
        explanation: "Does untuk he/she/it dalam pertanyaan present simple."
    },
    {
        question: "Pilih yang BENAR: 'My brother ___ a car.'",
        options: ["have", "has", "having", "haved"],
        correctIndex: 1,
        explanation: "He/she/it + has (have berubah jadi has)."
    },
    {
        question: "'___ he ___ (play) tennis?'",
        options: [
            "Do / plays",
            "Does / play",
            "Is / play",
            "Does / plays"
        ],
        correctIndex: 1,
        explanation: "Does untuk he, lalu verb kembali ke bentuk dasar (play)."
    },
    {
        question: "Keterangan waktu untuk present simple:",
        options: [
            "now, right now",
            "every day, always, usually",
            "yesterday, last week",
            "tomorrow, next week"
        ],
        correctIndex: 1,
        explanation: "'Every day, always, usually' adalah keterangan waktu present simple."
    },
    {
        question: "Perbaiki: 'He watchs TV every night.'",
        options: [
            "He watch TV every night.",
            "He watches TV every night.",
            "He watching TV every night.",
            "He watched TV every night."
        ],
        correctIndex: 1,
        explanation: "'Watch' berakhiran ch → tambah -es: watches."
    },
    {
        question: "Pilih yang BENAR:",
        options: [
            "She don't go to school.",
            "He doesn't works here.",
            "They plays basketball.",
            "I usually wake up early."
        ],
        correctIndex: 3,
        explanation: "'I usually wake up early' adalah kalimat yang benar."
    }
];
