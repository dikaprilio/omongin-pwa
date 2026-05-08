import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    {
        type: 'title',
        title: "To Be vs Verb 🔤",
        subtitle: "Basic Meeting 2",
        teacherNote: "Pertemuan ini fokus membedakan penggunaan to be (is/am/are/was/were) dengan kata kerja biasa."
    },
    {
        type: 'concept',
        title: "Why This Matters?",
        content: [
            "Banyak siswa bingung: pakai 'is' atau pakai kata kerja langsung?",
            "To be = untuk keadaan, identitas, lokasi, usia",
            "Verb biasa = untuk aksi/kegiatan",
            "TIDAK BISA pakai to be + verb-1 barengan!"
        ],
        teacherNote: "Berikan contoh kesalahan umum: 'I am eat' atau 'She is works'."
    },
    {
        type: 'comparison',
        title: "The Trap vs The Fix",
        comparison: [
            { wrong: "I am agree with you.", right: "I agree with you." },
            { wrong: "She is works at a bank.", right: "She works at a bank." },
            { wrong: "They are go to school.", right: "They go to school." }
        ],
        teacherNote: "Jelaskan bahwa 'agree' sudah berarti 'setuju', tidak perlu to be."
    },
    {
        type: 'formula',
        title: "The Grammar Formula",
        formula: "S + To Be + (Adj/Noun/Prep Phrase)",
        content: [
            "vs S + Verb (s/es) + Object",
            "To Be = penghubung, bukan aksi",
            "Verb = menunjukkan aksi yang dilakukan"
        ]
    },
    {
        type: 'vocabulary',
        title: "Key Terms",
        vocabulary: [
            { term: "To Be", meaning: "Kata penghubung: am, is, are, was, were, be, been", example: "She is happy" },
            { term: "State Verb", meaning: "Kata kerja keadaan (tidak pakai -ing)", example: "know, like, want, need" },
            { term: "Action Verb", meaning: "Kata kerja aksi", example: "run, eat, write, play" },
            { term: "Adjective", meaning: "Kata sifat", example: "happy, tall, beautiful" }
        ]
    },
    {
        type: 'concept',
        title: "When to Use To Be",
        content: [
            "1. Identitas: I am a student.",
            "2. Keadaan/sifat: He is tired.",
            "3. Lokasi: They are in the park.",
            "4. Usia: She is 20 years old.",
            "5. Progressive (sedang): I am eating."
        ],
        teacherNote: "Tekankan bahwa to be untuk situasi yang 'statis' atau sedang berlangsung."
    },
    {
        type: 'comparison',
        title: "More Examples",
        comparison: [
            { wrong: "I am have a car.", right: "I have a car." },
            { wrong: "She is likes chocolate.", right: "She likes chocolate." },
            { wrong: "He is goes to work.", right: "He goes to work." }
        ]
    },
    {
        type: 'micro-drill',
        title: "Quick Pattern Practice",
        content: [
            "I ___ tired. (am)",
            "She ___ a doctor. (is)",
            "They ___ soccer every day. (play)",
            "He ___ TV now. (is watching)"
        ],
        teacherNote: "Minta siswa pilih: pakai to be atau verb biasa?"
    },
    {
        type: 'case-study',
        title: "Real Conversation",
        caseStudy: {
            scenario: "Temanmu bilang: 'I am don't understand.'",
            template: "Fix: 'I don't understand.' (gunakan auxiliary do, bukan to be + don't)"
        },
        teacherNote: "Jelaskan juga common error: double negative dengan to be."
    },
    {
        type: 'roleplay',
        title: "Student Practice",
        content: [
            "Pilih to be atau verb yang tepat:",
            "1. She ___ (is/likes) ice cream.",
            "2. They ___ (are/play) basketball now.",
            "3. I ___ (am/have) two brothers.",
            "4. He ___ (is/works) at home today."
        ],
        teacherNote: "Beri waktu 3 menit untuk menjawab."
    },
    {
        type: 'micro-drill',
        title: "Error Correction Drill",
        content: [
            "❌ I am agree.",
            "❌ She is goes to school.",
            "❌ They are have lunch.",
            "→ Hapus to be untuk verb biasa!"
        ],
        teacherNote: "Drill cepat - identifikasi kesalahan."
    },
    {
        type: 'formula',
        title: "Advanced Application",
        formula: "S + To Be + V-ing = Progressive (sedang terjadi)",
        content: [
            "vs S + Verb = Simple (kebiasaan/fakta)",
            "Contoh: 'She eats' (kebiasaan) vs 'She is eating' (sedang makan)"
        ]
    },
    {
        type: 'recap',
        title: "Summary Table",
        recap: [
            { context: "Keadaan/sifat", sayThis: "S + am/is/are + Adj", dontSayThis: "I am happy" },
            { context: "Aksi rutin", sayThis: "S + Verb", dontSayThis: "She is works" },
            { context: "Sedang terjadi", sayThis: "S + am/is/are + V-ing", dontSayThis: "He eating" }
        ]
    },
    {
        type: 'mission',
        title: "Homework Assignment",
        mission: [
            "Buat 5 kalimat dengan to be (identitas, lokasi, keadaan)",
            "Buat 5 kalimat dengan verb biasa (aksi)",
            "Buat 5 kalimat dengan to be + V-ing (progressive)"
        ]
    },
    {
        type: 'title',
        title: "Well Done! 🌟",
        subtitle: "To Be = State | Verb = Action | Never Both!",
        teacherNote: "Ringkas: To be untuk keadaan, verb untuk aksi. Jangan campuradukkan!"
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Pilih yang BENAR: 'She ___ a teacher.'",
        options: ["is", "works", "teaches", "does"],
        correctIndex: 0,
        explanation: "Untuk identitas/profesi pakai to be: 'She is a teacher.'"
    },
    {
        question: "Pilih yang BENAR: 'I ___ agree with you.'",
        options: ["am", "-", "do", "does"],
        correctIndex: 1,
        explanation: "'Agree' adalah verb biasa, tidak perlu to be. 'I agree with you.'"
    },
    {
        question: "Perbaiki: 'He is goes to work.'",
        options: [
            "He is go to work.",
            "He goes to work.",
            "He going to work.",
            "He is going to work."
        ],
        correctIndex: 1,
        explanation: "Hapus 'is' untuk simple present: 'He goes to work.'"
    },
    {
        question: "Pilih yang BENAR: 'They ___ in the classroom.'",
        options: ["are", "sit", "sitting", "sits"],
        correctIndex: 0,
        explanation: "Untuk lokasi pakai to be: 'They are in the classroom.'"
    },
    {
        question: "Manakah yang SALAH?",
        options: [
            "I am tired.",
            "She is happy.",
            "They are have a car.",
            "He is a student."
        ],
        correctIndex: 2,
        explanation: "'They are have' salah. Seharusnya: 'They have a car.'"
    },
    {
        question: "Pilih yang BENAR: 'We ___ soccer every weekend.'",
        options: ["are play", "playing", "play", "are playing"],
        correctIndex: 2,
        explanation: "'Every weekend' menunjukkan kebiasaan → simple present: 'We play.'"
    },
    {
        question: "Kapan kita pakai 'am'?",
        options: [
            "Dengan he/she/it",
            "Dengan you/we/they",
            "Dengan I",
            "Dengan semua subjek"
        ],
        correctIndex: 2,
        explanation: "'Am' hanya digunakan dengan subjek 'I'."
    },
    {
        question: "Perbaiki: 'I am don't like coffee.'",
        options: [
            "I am not like coffee.",
            "I don't like coffee.",
            "I not like coffee.",
            "I doesn't like coffee."
        ],
        correctIndex: 1,
        explanation: "Negatif untuk verb biasa pakai don't/doesn't, bukan to be + don't."
    },
    {
        question: "Pilih yang BENAR: 'She ___ TV right now.'",
        options: ["watches", "is watching", "watch", "watching"],
        correctIndex: 1,
        explanation: "'Right now' = sedang terjadi → present continuous: 'is watching'"
    },
    {
        question: "'To Be' digunakan untuk kecuali:",
        options: [
            "Identitas",
            "Keadaan/sifat",
            "Aksi/kegiatan",
            "Lokasi"
        ],
        correctIndex: 2,
        explanation: "Aksi/kegiatan menggunakan verb biasa, bukan to be (kecuali progressive)."
    },
    {
        question: "Pilih yang BENAR: 'My brother ___ 25 years old.'",
        options: ["has", "is", "does", "goes"],
        correctIndex: 1,
        explanation: "Untuk usia pakai to be: 'My brother is 25 years old.'"
    },
    {
        question: "Manakah yang menggunakan to be dengan benar?",
        options: [
            "She is works hard.",
            "They are play football.",
            "He is happy today.",
            "I am agree with you."
        ],
        correctIndex: 2,
        explanation: "'He is happy today' benar karena 'happy' adalah adjective (keadaan)."
    },
    {
        question: "Pilih yang BENAR: 'The children ___ in the garden now.'",
        options: ["play", "are playing", "plays", "is play"],
        correctIndex: 1,
        explanation: "'Now' = present continuous → to be + V-ing: 'are playing'"
    },
    {
        question: "Perbaiki: 'They are has many friends.'",
        options: [
            "They have many friends.",
            "They are have many friends.",
            "They has many friends.",
            "They are having many friends."
        ],
        correctIndex: 0,
        explanation: "Hapus 'are' karena 'have' adalah verb biasa: 'They have many friends.'"
    },
    {
        question: "Pilih yang BENAR: '___ you tired?'",
        options: ["Do", "Are", "Does", "Is"],
        correctIndex: 1,
        explanation: "Pertanyaan dengan adjective 'tired' pakai to be: 'Are you tired?'"
    },
    {
        question: "State verb adalah kata kerja yang:",
        options: [
            "Menunjukkan aksi",
            "Menunjukkan keadaan/pikiran/perasaan",
            "Selalu pakai -ing",
            "Tidak punya arti"
        ],
        correctIndex: 1,
        explanation: "State verbs (know, like, want) menunjukkan keadaan batin, bukan aksi fisik."
    },
    {
        question: "Pilih yang BENAR: 'I ___ a headache.'",
        options: ["am", "have", "feel", "is"],
        correctIndex: 1,
        explanation: "Dalam bahasa Inggris, 'have a headache' adalah ungkapan yang benar."
    },
    {
        question: "Manakah yang SALAH?",
        options: [
            "She is sleeping.",
            "They are students.",
            "He is goes home.",
            "We are friends."
        ],
        correctIndex: 2,
        explanation: "'He is goes' salah. Seharusnya: 'He goes home' atau 'He is going home.'"
    },
    {
        question: "Pilih yang BENAR: 'The book ___ on the table.'",
        options: ["is", "sits", "lays", "puts"],
        correctIndex: 0,
        explanation: "Untuk lokasi benda pakai to be: 'The book is on the table.'"
    },
    {
        question: "Perbaiki: 'I am live in Jakarta.'",
        options: [
            "I am living in Jakarta.",
            "I live in Jakarta.",
            "I does live in Jakarta.",
            "I living in Jakarta."
        ],
        correctIndex: 1,
        explanation: "Hapus 'am' untuk simple present: 'I live in Jakarta.'"
    }
];
