/**
 * Topic 12: School Life 🏫
 * ------------------------
 * 30 questions about school subjects, activities, and daily routines
 * for kids ages 7-12.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 12,
    path: 'speaking-kids',
    title: "School Life 🏫",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-12-001",
            question: "📚 'I like to read ___'",
            options: ["pencil", "book", "eraser", "desk"],
            correctIndex: 1,
            explanation: "Book artinya buku. Kita membaca (read) buku.",
            difficulty: "easy",
            tags: ["vocabulary", "school"]
        },
        {
            id: "kids-12-002",
            question: "Terjemahkan: 'Ini adalah pensil saya.'",
            options: [
                "This is my pencil.",
                "This my pencil.",
                "This are my pencil.",
                "These is my pencil."
            ],
            correctIndex: 0,
            explanation: "This is my pencil adalah kalimat yang benar. This is = ini adalah.",
            difficulty: "easy",
            tags: ["grammar", "demonstratives"]
        },
        {
            id: "kids-12-003",
            question: "✏️ Apa bahasa Inggrisnya 'pena'?",
            options: ["Pencil", "Pen", "Ruler", "Crayon"],
            correctIndex: 1,
            explanation: "Pen artinya pena/pulpen. Pencil = pensil, Ruler = penggaris, Crayon = krayon.",
            difficulty: "easy",
            tags: ["vocabulary", "school-supplies"]
        },
        {
            id: "kids-12-004",
            question: "Pilih kata yang benar: 'My teacher ___ very kind.'",
            options: ["is", "are", "am", "be"],
            correctIndex: 0,
            explanation: "My teacher (guru saya - tunggal) pakai 'is'. Is very kind = sangat baik hati.",
            difficulty: "easy",
            tags: ["grammar", "to-be"]
        },
        {
            id: "kids-12-005",
            question: "📐 'We use a ___ to draw straight lines.'",
            options: ["pen", "ruler", "book", "bag"],
            correctIndex: 1,
            explanation: "Ruler artinya penggaris. Kita pakai penggaris untuk menggambar garis lurus.",
            difficulty: "easy",
            tags: ["vocabulary", "school-supplies"]
        },
        {
            id: "kids-12-006",
            question: "🎨 Mata pelajaran menggambar dalam bahasa Inggris adalah...",
            options: ["Math", "Art", "Music", "Science"],
            correctIndex: 1,
            explanation: "Art artinya seni/menggambar. Math = matematika, Music = musik, Science = IPA.",
            difficulty: "easy",
            tags: ["vocabulary", "subjects"]
        },
        {
            id: "kids-12-007",
            question: "'I go to school ___ bus.' Pilih kata yang tepat:",
            options: ["on", "by", "with", "in"],
            correctIndex: 1,
            explanation: "By bus = naik bus. By digunakan untuk menyebut transportasi.",
            difficulty: "easy",
            tags: ["grammar", "prepositions"]
        },
        {
            id: "kids-12-008",
            question: "🏫 'My classroom is ___ the second floor.'",
            options: ["on", "in", "at", "to"],
            correctIndex: 0,
            explanation: "On the second floor = di lantai dua. Pakai 'on' untuk lantai.",
            difficulty: "easy",
            tags: ["grammar", "prepositions"]
        },
        {
            id: "kids-12-009",
            question: "➕ Mata pelajaran hitung-hitungan dalam bahasa Inggris adalah...",
            options: ["English", "Math", "Science", "Social"],
            correctIndex: 1,
            explanation: "Math artinya matematika. English = bahasa Inggris, Science = IPA, Social = IPS.",
            difficulty: "easy",
            tags: ["vocabulary", "subjects"]
        },
        {
            id: "kids-12-010",
            question: "🎒 'I put my books in my ___.'",
            options: ["pocket", "bag", "hand", "desk"],
            correctIndex: 1,
            explanation: "Bag artinya tas. Kita menyimpan buku di tas (bag).",
            difficulty: "easy",
            tags: ["vocabulary", "school"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-12-011",
            question: "Pilih kalimat yang benar:",
            options: [
                "My friends is playing in the yard.",
                "My friend are playing in the yard.",
                "My friends are playing in the yard.",
                "My friends playing in the yard."
            ],
            correctIndex: 2,
            explanation: "Friends adalah jamak (banyak), jadi pakai 'are'. Are playing = sedang bermain.",
            difficulty: "medium",
            tags: ["grammar", "present-continuous"]
        },
        {
            id: "kids-12-012",
            question: "🧮 Apa arti dari 'multiplication'?",
            options: ["Pembagian", "Perkalian", "Penjumlahan", "Pengurangan"],
            correctIndex: 1,
            explanation: "Multiplication artinya perkalian. Division = pembagian, Addition = penjumlahan, Subtraction = pengurangan.",
            difficulty: "medium",
            tags: ["vocabulary", "math"]
        },
        {
            id: "kids-12-013",
            question: "'___ you like Math?' Pilih kata yang tepat:",
            options: ["Do", "Does", "Are", "Is"],
            correctIndex: 0,
            explanation: "Do you like...? = Apakah kamu suka...? Untuk 'you', gunakan 'Do'.",
            difficulty: "medium",
            tags: ["grammar", "questions"]
        },
        {
            id: "kids-12-014",
            question: "📝 'Please write your name ___ the paper.'",
            options: ["on", "in", "at", "under"],
            correctIndex: 0,
            explanation: "On the paper = di atas kertas. Menulis di permukaan kertas pakai 'on'.",
            difficulty: "medium",
            tags: ["grammar", "prepositions"]
        },
        {
            id: "kids-12-015",
            question: "Terjemahkan: 'Ujiannya sulit tapi saya bisa menjawab.'",
            options: [
                "The test is difficult but I can answer.",
                "The test difficult but I can answer.",
                "The test is difficult and I can't answer.",
                "The test are difficult but I can answer."
            ],
            correctIndex: 0,
            explanation: "The test is difficult but I can answer. But = tapi, can = bisa/can.",
            difficulty: "medium",
            tags: ["grammar", "conjunctions"]
        },
        {
            id: "kids-12-016",
            question: "🔬 'In ___ class, we learn about plants and animals.'",
            options: ["Math", "Science", "Art", "PE"],
            correctIndex: 1,
            explanation: "Science class = kelas IPA. Di sini kita belajar tentang tumbuhan dan hewan.",
            difficulty: "medium",
            tags: ["vocabulary", "subjects"]
        },
        {
            id: "kids-12-017",
            question: "Pilih yang benar: 'There ___ 25 students in my class.'",
            options: ["is", "are", "am", "be"],
            correctIndex: 1,
            explanation: "There are untuk benda jamak. 25 students = jamak, jadi pakai 'are'.",
            difficulty: "medium",
            tags: ["grammar", "there-is-are"]
        },
        {
            id: "kids-12-018",
            question: "📖 'I ___ my homework every day.'",
            options: ["do", "does", "doing", "did"],
            correctIndex: 0,
            explanation: "Do my homework = mengerjakan PR. I (saya) pakai 'do', bukan 'does'.",
            difficulty: "medium",
            tags: ["vocabulary", "collocations"]
        },
        {
            id: "kids-12-019",
            question: "Apa arti dari 'attendance list'?",
            options: [
                "Daftar nilai",
                "Daftar hadir",
                "Daftar buku",
                "Daftar tugas"
            ],
            correctIndex: 1,
            explanation: "Attendance list artinya daftar hadir. Attendance = kehadiran.",
            difficulty: "medium",
            tags: ["vocabulary", "school"]
        },
        {
            id: "kids-12-020",
            question: "🏃 'We have ___ class on Monday and Wednesday.'",
            options: ["Music", "Art", "PE", "Math"],
            correctIndex: 2,
            explanation: "PE (Physical Education) = olahraga/pendidikan jasmani.",
            difficulty: "medium",
            tags: ["vocabulary", "subjects"]
        },
        {
            id: "kids-12-021",
            question: "Pilih kalimat yang benar:",
            options: [
                "She don't like English.",
                "She doesn't likes English.",
                "She doesn't like English.",
                "She not like English."
            ],
            correctIndex: 2,
            explanation: "She doesn't like English adalah kalimat yang benar. She (tunggal) pakai 'doesn't' + like (bentuk dasar).",
            difficulty: "medium",
            tags: ["grammar", "negatives"]
        },
        {
            id: "kids-12-022",
            question: "🍎 'The teacher gives us a ___ every day.'",
            options: ["lesson", "game", "toy", "candy"],
            correctIndex: 0,
            explanation: "Lesson artinya pelajaran. Guru memberikan pelajaran setiap hari.",
            difficulty: "medium",
            tags: ["vocabulary", "school"]
        },

        // === HARD (8 questions) ===
        {
            id: "kids-12-023",
            question: "Susun kata berikut: 'homework / my / finished / have / I'",
            options: [
                "I have my finished homework.",
                "I have finished my homework.",
                "Have I finished my homework.",
                "My homework I have finished."
            ],
            correctIndex: 1,
            explanation: "I have finished my homework = Saya sudah menyelesaikan PR saya. Have finished = sudah menyelesaikan (present perfect).",
            difficulty: "hard",
            tags: ["grammar", "present-perfect"]
        },
        {
            id: "kids-12-024",
            question: "🌐 Apa bahasa Inggrisnya 'bahasa Indonesia'?",
            options: [
                "Indonesian language",
                "Bahasa Indonesia",
                "Indonesian",
                "All correct"
            ],
            correctIndex: 3,
            explanation: "Semua jawaban benar! Bisa 'Indonesian language', 'Bahasa Indonesia', atau hanya 'Indonesian'.",
            difficulty: "hard",
            tags: ["vocabulary", "languages"]
        },
        {
            id: "kids-12-025",
            question: "Pilih kalimat yang paling benar:",
            options: [
                "The childrens is studying in the library.",
                "The children is studying in the library.",
                "The children are studying in the library.",
                "The children studying in the library."
            ],
            correctIndex: 2,
            explanation: "Children sudah bentuk jamak (tidak perlu 's'). Pakai 'are' karena jamak. Are studying = sedang belajar.",
            difficulty: "hard",
            tags: ["grammar", "plurals"]
        },
        {
            id: "kids-12-026",
            question: "📅 'School starts ___ 7 o'clock ___ the morning.'",
            options: [
                "at / in",
                "in / at",
                "on / in",
                "at / on"
            ],
            correctIndex: 0,
            explanation: "At 7 o'clock (jam tertentu pakai 'at'), in the morning (pagi hari pakai 'in').",
            difficulty: "hard",
            tags: ["grammar", "prepositions-time"]
        },
        {
            id: "kids-12-027",
            question: "Apa bedanya 'principal' dan 'teacher'?",
            options: [
                "Sama saja",
                "Principal adalah kepala sekolah, teacher adalah guru",
                "Principal adalah guru, teacher adalah kepala sekolah",
                "Principal adalah murid"
            ],
            correctIndex: 1,
            explanation: "Principal = kepala sekolah, Teacher = guru.",
            difficulty: "hard",
            tags: ["vocabulary", "school-roles"]
        },
        {
            id: "kids-12-028",
            question: "📝 'If you want to get good ___, you must study hard.'",
            options: ["notes", "grades", "books", "pencils"],
            correctIndex: 1,
            explanation: "Grades artinya nilai. Get good grades = mendapat nilai bagus.",
            difficulty: "hard",
            tags: ["vocabulary", "school"]
        },
        {
            id: "kids-12-029",
            question: "Pilih kalimat dengan grammar yang benar:",
            options: [
                "Neither my friends nor I likes Math.",
                "Neither my friends nor I like Math.",
                "Neither my friends or I like Math.",
                "Neither my friend nor I like Math."
            ],
            correctIndex: 1,
            explanation: "Neither...nor menggunakan 'like' (bukan likes) karena subject terdekat adalah 'I'.",
            difficulty: "hard",
            tags: ["grammar", "neither-nor"]
        },
        {
            id: "kids-12-030",
            question: "Identifikasi semua error: 'My classmates and me always do our homeworks together in the library.'",
            options: [
                "1 error",
                "2 errors",
                "3 errors",
                "4 errors"
            ],
            correctIndex: 2,
            explanation: "Errors: 1) me → I (subjek pakai I, bukan me), 2) homeworks → homework (tidak ada jamak), 3) our → bisa jadi 'my' atau tetap 'our' tergantung konteks.",
            difficulty: "hard",
            tags: ["grammar", "error-correction"]
        }
    ]
};
