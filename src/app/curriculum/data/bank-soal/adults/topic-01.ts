/**
 * Topic 01: Professional Introduction
 * ------------------------------------
 * 30 questions covering professional self-introduction,
 * the "I am work" error fix, and elevator pitch skills.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 1,
    path: 'speaking-adults',
    title: "Professional Introduction",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "adult-01-001",
            question: "Mana kalimat yang BENAR?",
            options: [
                "I am work at Bank.",
                "I work at a Bank.",
                "I am working at Bank permanent."
            ],
            correctIndex: 1,
            explanation: "Jangan pakai 'AM' ketemu Verb 1. 'I work' adalah fakta permanen (Identity).",
            difficulty: "easy",
            tags: ["grammar", "tobe", "identity"]
        },
        {
            id: "adult-01-002",
            question: "Kalimat 'I am live in Jakarta' salah karena...",
            options: [
                "Kurang kata 'the'",
                "AM + VERB bentrok (tidak boleh)",
                "Jakarta harus pakai 'at'"
            ],
            correctIndex: 1,
            explanation: "AM/IS/ARE tidak boleh bertemu VERB langsung. Pilih salah satu: 'I am a teacher' ATAU 'I teach'.",
            difficulty: "easy",
            tags: ["grammar", "tobe"]
        },
        {
            id: "adult-01-003",
            question: "Pilih cara profesional untuk menyebut hobi:",
            options: [
                "My hobby is reading.",
                "I'm really into reading.",
                "I like to read book."
            ],
            correctIndex: 1,
            explanation: "'I'm really into...' terdengar lebih natural dan antusias daripada 'My hobby is...'",
            difficulty: "easy",
            tags: ["vocabulary", "professional"]
        },
        {
            id: "adult-01-004",
            question: "Urutan Elevator Pitch yang ideal adalah:",
            options: [
                "Hobby → Name → Job",
                "Identity → Momentum → Interest",
                "Name → Hobby → Family"
            ],
            correctIndex: 1,
            explanation: "Mulai dari Siapa (Identity), Apa yang dikerjakan (Momentum), lalu Sisi Personal (Interest).",
            difficulty: "easy",
            tags: ["structure", "elevator-pitch"]
        },
        {
            id: "adult-01-005",
            question: "Hindari kata ini saat menyebut jabatan:",
            options: [
                "I am a Manager.",
                "I work as a Manager.",
                "I'm just a staff."
            ],
            correctIndex: 2,
            explanation: "Kata 'Just' merendahkan diri sendiri. Hindari di konteks profesional.",
            difficulty: "easy",
            tags: ["vocabulary", "confidence"]
        },
        {
            id: "adult-01-006",
            question: "'I am agree with you' - Apa yang salah?",
            options: [
                "Kurang 'very'",
                "AM + AGREE bentrok",
                "Harus pakai 'to you'"
            ],
            correctIndex: 1,
            explanation: "AGREE adalah verb. Tidak boleh pakai AM. Benar: 'I agree with you.'",
            difficulty: "easy",
            tags: ["grammar", "tobe"]
        },
        {
            id: "adult-01-007",
            question: "Kapan kita menggunakan Present Continuous (I am working)?",
            options: [
                "Untuk fakta KTP/permanen",
                "Untuk hobi sejak kecil",
                "Untuk project yang SEDANG berjalan"
            ],
            correctIndex: 2,
            explanation: "Present Continuous menunjukkan aktifitas yang 'sedang' dilakukan atau update terkini (Momentum).",
            difficulty: "easy",
            tags: ["grammar", "tenses"]
        },
        {
            id: "adult-01-008",
            question: "Pilih kalimat yang natural untuk networking:",
            options: [
                "Hello mister, my name Budi.",
                "Hi, I'm Budi. I work as a Marketing Manager.",
                "Good morning, I am called Budi."
            ],
            correctIndex: 1,
            explanation: "Singkat, langsung, dan profesional. Sebutkan nama + jabatan dengan jelas.",
            difficulty: "easy",
            tags: ["speaking", "introduction"]
        },
        {
            id: "adult-01-009",
            question: "'I handle Digital Marketing' menggunakan tense:",
            options: [
                "Simple Present (fakta permanen)",
                "Present Continuous",
                "Past Tense"
            ],
            correctIndex: 0,
            explanation: "Tanggung jawab kerja adalah fakta permanen (Identity), pakai Simple Present.",
            difficulty: "easy",
            tags: ["grammar", "tenses"]
        },
        {
            id: "adult-01-010",
            question: "Frase mana yang cocok untuk menyebut interest secara profesional?",
            options: [
                "My hobby is sleep.",
                "I'm passionate about technology.",
                "I do sport."
            ],
            correctIndex: 1,
            explanation: "'I'm passionate about...' terdengar profesional dan menunjukkan antusiasme.",
            difficulty: "easy",
            tags: ["vocabulary", "professional"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "adult-01-011",
            question: "Pilih kalimat yang menunjukkan 'Momentum' (update terkini):",
            options: [
                "I work at Tokopedia.",
                "Currently, I'm leading a new project.",
                "I live in South Jakarta."
            ],
            correctIndex: 1,
            explanation: "'Currently, I'm leading...' menggunakan Present Continuous untuk menunjukkan fokus saat ini.",
            difficulty: "medium",
            tags: ["grammar", "momentum"]
        },
        {
            id: "adult-01-012",
            question: "Gabungan Identity + Momentum yang benar:",
            options: [
                "I am work as Designer and I am design logo.",
                "I work as a Designer, and currently I'm designing a new logo.",
                "I am a Designer, currently design new logo."
            ],
            correctIndex: 1,
            explanation: "Identity pakai Simple Present (I work), Momentum pakai Continuous (I'm designing).",
            difficulty: "medium",
            tags: ["grammar", "structure"]
        },
        {
            id: "adult-01-013",
            question: "'I live in Bali' vs 'I'm living in Bali this month' - Apa bedanya?",
            options: [
                "Sama saja, tidak ada beda",
                "Live = permanen, Living = sementara",
                "Living lebih sopan"
            ],
            correctIndex: 1,
            explanation: "Simple Present untuk fakta permanen (KTP). Present Continuous untuk situasi sementara.",
            difficulty: "medium",
            tags: ["grammar", "nuance"]
        },
        {
            id: "adult-01-014",
            question: "Apa masalah utama dengan 'Hello mister, my name Budi, I am office boy'?",
            options: [
                "Terlalu panjang",
                "Grammar error + merendahkan diri",
                "Tidak pakai bahasa Inggris British"
            ],
            correctIndex: 1,
            explanation: "'My name Budi' kurang 'is'. Menyebut jabatan apa adanya tanpa kata 'just' sudah cukup.",
            difficulty: "medium",
            tags: ["grammar", "speaking"]
        },
        {
            id: "adult-01-015",
            question: "Mengapa 'In my spare time, I enjoy cycling' lebih baik dari 'My hobby is bicycle'?",
            options: [
                "Karena lebih panjang",
                "Karena menggunakan frase natural + verb yang benar",
                "Karena menyebut waktu luang"
            ],
            correctIndex: 1,
            explanation: "'I enjoy cycling' menggunakan verb (cycling), bukan noun (bicycle). Lebih natural.",
            difficulty: "medium",
            tags: ["vocabulary", "grammar"]
        },
        {
            id: "adult-01-016",
            question: "Saat networking event, urutan perkenalan yang strategis:",
            options: [
                "Nama → Perusahaan → Jabatan → Proyek sekarang → Interest personal",
                "Jabatan → Nama → Hobi → Alamat",
                "Salam → Cuaca → Nama → Keluarga"
            ],
            correctIndex: 0,
            explanation: "Flow profesional: Siapa → Di mana kerja → Ngapain → Fokus sekarang → Sisi personal.",
            difficulty: "medium",
            tags: ["structure", "networking"]
        },
        {
            id: "adult-01-017",
            question: "'Running teaches me discipline' - Kenapa ini bagus?",
            options: [
                "Karena menyebut olahraga",
                "Karena menghubungkan hobi dengan VALUE positif",
                "Karena menggunakan past tense"
            ],
            correctIndex: 1,
            explanation: "Menghubungkan hobi dengan nilai positif (discipline) membuat Anda terdengar reflektif dan menarik.",
            difficulty: "medium",
            tags: ["speaking", "professional"]
        },
        {
            id: "adult-01-018",
            question: "Pilih kalimat dengan grammar SALAH:",
            options: [
                "I'm a Sales Manager at BCA.",
                "I am manage the sales team.",
                "Right now, I'm building a new team."
            ],
            correctIndex: 1,
            explanation: "'I am manage' salah. Benar: 'I manage' (Simple Present) atau 'I'm managing' (Continuous).",
            difficulty: "medium",
            tags: ["grammar", "tobe"]
        },
        {
            id: "adult-01-019",
            question: "'Lately, I've been exploring AI tools' menggunakan tense:",
            options: [
                "Simple Present",
                "Present Perfect Continuous",
                "Past Simple"
            ],
            correctIndex: 1,
            explanation: "Present Perfect Continuous ('have been + V-ing') untuk aktifitas yang dimulai di masa lalu dan masih berlanjut.",
            difficulty: "medium",
            tags: ["grammar", "tenses"]
        },
        {
            id: "adult-01-020",
            question: "Di konteks bisnis, 'I'm really into culinary adventures' lebih baik dari 'I like eating' karena:",
            options: [
                "Menggunakan kata 'adventures' yang terdengar menarik",
                "Lebih panjang",
                "Pakai bahasa Inggris Amerika"
            ],
            correctIndex: 0,
            explanation: "'Culinary adventures' terdengar sophisticated dan menunjukkan passion, bukan sekedar aktivitas.",
            difficulty: "medium",
            tags: ["vocabulary", "nuance"]
        },
        {
            id: "adult-01-021",
            question: "Apa kesan pertama dari kalimat 'I'm just a junior staff'?",
            options: [
                "Humble dan sopan",
                "Kurang percaya diri, merendahkan diri",
                "Profesional"
            ],
            correctIndex: 1,
            explanation: "Kata 'just' dan 'junior' bersamaan memberikan kesan tidak percaya diri. Cukup sebut posisi saja.",
            difficulty: "medium",
            tags: ["speaking", "confidence"]
        },
        {
            id: "adult-01-022",
            question: "Perbaikan untuk 'I keep in Jakarta' adalah:",
            options: [
                "I stay in Jakarta",
                "I live in Jakarta",
                "I am in Jakarta"
            ],
            correctIndex: 1,
            explanation: "'Keep in' bukan frase yang benar. Untuk domisili, gunakan 'live in'.",
            difficulty: "medium",
            tags: ["vocabulary", "errors"]
        },

        // === HARD (8 questions) ===
        {
            id: "adult-01-023",
            question: "Analisa: 'I work at Tech Company and currently I work on new app.' Apa yang perlu diperbaiki?",
            options: [
                "Tidak ada yang salah",
                "Kedua kalimat pakai 'work' - yang kedua harusnya 'I'm working on'",
                "Kurang kata 'the'"
            ],
            correctIndex: 1,
            explanation: "Untuk 'current focus', gunakan Present Continuous. 'Currently, I'm working on a new app.'",
            difficulty: "hard",
            tags: ["grammar", "analysis"]
        },
        {
            id: "adult-01-024",
            question: "Mengapa native speaker jarang bilang 'My hobby is watching movie'?",
            options: [
                "Karena terlalu singkat",
                "Karena 'My hobby is...' terdengar kaku/textbook, dan 'movie' harusnya 'movies'",
                "Karena watching tidak sopan"
            ],
            correctIndex: 1,
            explanation: "'My hobby is...' terdengar seperti buku teks. Plus 'movie' harusnya plural 'movies'. Natural: 'I'm a huge fan of movies.'",
            difficulty: "hard",
            tags: ["speaking", "naturalness"]
        },
        {
            id: "adult-01-025",
            question: "Bedakan nuansa: 'I work at Google' vs 'I'm working at Google'",
            options: [
                "Sama saja",
                "'I work' = permanen/karyawan tetap, 'I'm working' = bisa sementara/kontrak/project",
                "'I'm working' lebih sopan"
            ],
            correctIndex: 1,
            explanation: "Present Continuous bisa mengimplikasikan status sementara. Simple Present lebih permanen.",
            difficulty: "hard",
            tags: ["grammar", "nuance"]
        },
        {
            id: "adult-01-026",
            question: "Dalam elevator pitch 45 detik, elemen mana yang TIDAK perlu?",
            options: [
                "Nama dan jabatan",
                "Detail gaji dan jam kerja",
                "Interest personal singkat"
            ],
            correctIndex: 1,
            explanation: "Elevator pitch fokus pada siapa Anda dan apa yang bisa Anda tawarkan. Detail administratif tidak relevan.",
            difficulty: "hard",
            tags: ["speaking", "strategy"]
        },
        {
            id: "adult-01-027",
            question: "Susun ulang menjadi pitch yang efektif: 'Tokopedia / Product Manager / Digital payments / Golf on weekends / Rina'",
            options: [
                "Hi, I'm Rina. I work as a Product Manager at Tokopedia, focusing on digital payments. Outside work, I enjoy golf.",
                "I am Rina, my hobby golf, I am work Tokopedia.",
                "Tokopedia Product Manager Rina here, golf weekends."
            ],
            correctIndex: 0,
            explanation: "Flow yang jelas: Nama → Jabatan + Perusahaan → Fokus → Interest personal.",
            difficulty: "hard",
            tags: ["speaking", "structure"]
        },
        {
            id: "adult-01-028",
            question: "Apa keunggulan 'I'm passionate about creating user-friendly products' dibanding 'I like my job'?",
            options: [
                "Lebih panjang",
                "Menunjukkan values dan expertise spesifik",
                "Menggunakan grammar yang kompleks"
            ],
            correctIndex: 1,
            explanation: "Frase pertama menunjukkan passion dan area keahlian. Lebih memorable dan profesional.",
            difficulty: "hard",
            tags: ["vocabulary", "impact"]
        },
        {
            id: "adult-01-029",
            question: "Di networking dengan C-Level executive, intro mana yang lebih tepat?",
            options: [
                "Hi boss, I am Budi, I am work here long time.",
                "Good evening. I'm Budi, leading the digital transformation initiative at XYZ Corp.",
                "Hello Sir, my name is Budi, nice to meet you, my hobby is badminton."
            ],
            correctIndex: 1,
            explanation: "Dengan executive, fokus pada impact/kontribusi Anda. Skip hobi kecuali mereka tanya.",
            difficulty: "hard",
            tags: ["speaking", "context"]
        },
        {
            id: "adult-01-030",
            question: "Final Challenge: Identifikasi SEMUA error dalam 'Hello mister, my name Budi, I am work in Jakarta, I am agree this event is nice, my hobby is sleeping.'",
            options: [
                "1 error",
                "2 errors",
                "4+ errors (my name/is, am work, am agree, hobby phrasing)"
            ],
            correctIndex: 2,
            explanation: "Errors: 'my name Budi' (kurang is), 'I am work' (AM+V), 'I am agree' (AM+V), 'my hobby is sleeping' (kekanak-kanakan + kaku).",
            difficulty: "hard",
            tags: ["grammar", "analysis"]
        }
    ]
};
