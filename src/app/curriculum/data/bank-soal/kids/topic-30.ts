import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 30,
    path: 'speaking-kids',
    title: "The Graduation Show 🎓",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-30-001",
            question: "Apa arti dari 'graduation'?",
            options: [
                "Masuk sekolah",
                "Kelulusan/wisuda",
                "Ulangan",
                "Liburan"
            ],
            correctIndex: 1,
            explanation: "'Graduation' artinya kelulusan atau upacara wisuda.",
            difficulty: "easy"
        },
        {
            id: "kids-30-002",
            question: "Pilih kata yang menunjukkan PERASAAN BANGGA:",
            options: ["sad", "angry", "proud", "scared"],
            correctIndex: 2,
            explanation: "'Proud' artinya bangga (puas dengan pencapaian).",
            difficulty: "easy"
        },
        {
            id: "kids-30-003",
            question: "Bahasa Indonesia dari 'I am proud of...' adalah:",
            options: [
                "Aku benci...",
                "Aku bangga dengan...",
                "Aku takut dengan...",
                "Aku lupa..."
            ],
            correctIndex: 1,
            explanation: "'I am proud of' = Aku bangga dengan...",
            difficulty: "easy"
        },
        {
            id: "kids-30-004",
            question: "Pilih kalimat yang sopan untuk berterima kasih:",
            options: [
                "Thanks for nothing!",
                "Thank you for helping me learn English!",
                "I don't need your help!",
                "Go away!"
            ],
            correctIndex: 1,
            explanation: "'Thank you for helping me...' adalah cara sopan berterima kasih.",
            difficulty: "easy"
        },
        {
            id: "kids-30-005",
            question: "Apa arti dari 'achievement'?",
            options: [
                "Kegagalan",
                "Pencapaian",
                "Masalah",
                "Tantangan"
            ],
            correctIndex: 1,
            explanation: "'Achievement' artinya pencapaian/sesuatu yang berhasil dicapai.",
            difficulty: "easy"
        },
        {
            id: "kids-30-006",
            question: "Lengkapi: 'I have learned ___ many things.'",
            options: ["a", "so", "the", "is"],
            correctIndex: 1,
            explanation: "'So many things' artinya sangat banyak hal.",
            difficulty: "easy"
        },
        {
            id: "kids-30-007",
            question: "Bahasa Inggris dari 'Terima kasih banyak' adalah:",
            options: [
                "Thank you a lot",
                "Thank you very much",
                "Thanks you very",
                "Thank very you"
            ],
            correctIndex: 1,
            explanation: "'Thank you very much' adalah ucapan terima kasih formal yang benar.",
            difficulty: "easy"
        },
        {
            id: "kids-30-008",
            question: "Pilih kata yang menunjukkan KEMAJUAN:",
            options: ["forget", "improve", "lose", "stop"],
            correctIndex: 1,
            explanation: "'Improve' artinya membaik/berkembang (menunjukkan kemajuan).",
            difficulty: "easy"
        },
        {
            id: "kids-30-009",
            question: "Apa arti dari 'journey'?",
            options: [
                "Tujuan akhir",
                "Perjalanan",
                "Kendaraan",
                "Peta"
            ],
            correctIndex: 1,
            explanation: "'Journey' artinya perjalanan (bisa fisik atau perjalanan belajar).",
            difficulty: "easy"
        },
        {
            id: "kids-30-010",
            question: "Pilih kalimat yang benar:",
            options: [
                "I want to thanks my teacher.",
                "I want to thank my teacher.",
                "I want to thanking my teacher.",
                "I want to thanked my teacher."
            ],
            correctIndex: 1,
            explanation: "Setelah 'want to', gunakan kata kerja dasar (thank, play, learn).",
            difficulty: "easy"
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-30-011",
            question: "Pilih ucapan yang PALING bermakna untuk guru:",
            options: [
                "Bye!",
                "Thank you for being patient with me and helping me become more confident in speaking English. You've made learning fun!",
                "See you!",
                "Good luck!"
            ],
            correctIndex: 1,
            explanation: "Ucapan yang spesifik dan personal (patient, confident, fun) lebih bermakna.",
            difficulty: "medium"
        },
        {
            id: "kids-30-012",
            question: "Lengkapi: 'When I started, I ___ speak English well. Now I can!'",
            options: ["can", "couldn't", "can to", "could to"],
            correctIndex: 1,
            explanation: "'Couldn't' (could not) untuk kemampuan di masa lalu yang belum bisa.",
            difficulty: "medium"
        },
        {
            id: "kids-30-013",
            question: "Bahasa Indonesia dari 'I will never forget...':",
            options: [
                "Aku akan selalu lupa...",
                "Aku tidak akan pernah lupa...",
                "Aku sudah lupa...",
                "Aku ingin lupa..."
            ],
            correctIndex: 1,
            explanation: "'I will never forget' = Aku tidak akan pernah lupa (kenangan berharga).",
            difficulty: "medium"
        },
        {
            id: "kids-30-014",
            question: "Pilih kata yang menggambarkan PERUBAHAN POSITIF:",
            options: ["worse", "better", "harder", "slower"],
            correctIndex: 1,
            explanation: "'Better' (lebih baik) menunjukkan perubahan positif.",
            difficulty: "medium"
        },
        {
            id: "kids-30-015",
            question: "Apa arti dari 'confidence'?",
            options: [
                "Ketakutan",
                "Kepercayaan diri",
                "Keraguan",
                "Kesedihan"
            ],
            correctIndex: 1,
            explanation: "'Confidence' artinya kepercayaan diri.",
            difficulty: "medium"
        },
        {
            id: "kids-30-016",
            question: "Lengkapi: 'I used to be shy, ___ now I'm confident.'",
            options: ["and", "but", "because", "so"],
            correctIndex: 1,
            explanation: "'But' digunakan untuk menunjukkan kontras/perubahan (dulu malu, sekarang percaya diri).",
            difficulty: "medium"
        },
        {
            id: "kids-30-017",
            question: "Bahasa Inggris dari 'Aku sudah berkembang banyak' adalah:",
            options: [
                "I have improved a lot.",
                "I has improved a lot.",
                "I improved a lot.",
                "I improving a lot."
            ],
            correctIndex: 0,
            explanation: "'I have improved' (Present Perfect) untuk perubahan dari masa lalu sampai sekarang.",
            difficulty: "medium"
        },
        {
            id: "kids-30-018",
            question: "Pilih frasa yang tepat untuk menutup presentasi:",
            options: [
                "I'm done!",
                "Thank you for listening, and I hope to see you all again soon!",
                "That's it, bye!",
                "Finished!"
            ],
            correctIndex: 1,
            explanation: "'Thank you for listening...' adalah penutup yang sopan dan profesional.",
            difficulty: "medium"
        },
        {
            id: "kids-30-019",
            question: "Apa arti dari 'memories'?",
            options: [
                "Lupa",
                "Kenangan",
                "Mimpi",
                "Tujuan"
            ],
            correctIndex: 1,
            explanation: "'Memories' artinya kenangan/pengalaman yang diingat.",
            difficulty: "medium"
        },
        {
            id: "kids-30-020",
            question: "Pilih kalimat yang menggunakan 'used to' dengan benar:",
            options: [
                "I used to couldn't speak English.",
                "I didn't use to like English, but now I do.",
                "I used to liking English.",
                "I used to can speak English."
            ],
            correctIndex: 1,
            explanation: "'Didn't use to + verb' untuk kebiasaan di masa lalu yang sudah berubah.",
            difficulty: "medium"
        },
        {
            id: "kids-30-021",
            question: "Lengkapi: 'This is just the ___ of my English journey.'",
            options: ["end", "beginning", "middle", "finish"],
            correctIndex: 1,
            explanation: "'Beginning' artinya awal (masih banyak yang akan dipelajari di masa depan).",
            difficulty: "medium"
        },
        {
            id: "kids-30-022",
            question: "Bahasa Indonesia dari 'I couldn't have done it without you':",
            options: [
                "Aku bisa melakukannya tanpamu",
                "Aku tidak bisa melakukannya tanpamu",
                "Aku tidak mau melakukannya",
                "Aku sudah selesai melakukannya"
            ],
            correctIndex: 1,
            explanation: "'Couldn't have done it without you' = Tidak mungkin bisa tanpa bantuanmu.",
            difficulty: "medium"
        },

        // === HARD (8 questions) ===
        {
            id: "kids-30-023",
            question: "Susun kalimat: 'have / I / so / here / much / learned'",
            options: [
                "I have learned so much here.",
                "I have so much learned here.",
                "So much I have learned here.",
                "Here I have learned so much."
            ],
            correctIndex: 0,
            explanation: "Struktur: Subject + have + past participle + so much + place.",
            difficulty: "hard"
        },
        {
            id: "kids-30-024",
            question: "Pilih ucapan kelulusan yang PALING lengkap dan menyentuh:",
            options: [
                "Thanks!",
                "Thank you, teachers and friends!",
                "I want to thank my amazing teacher for believing in me when I didn't believe in myself. A year ago, I was too scared to say 'hello' in English. Now I can have conversations! This is just the beginning of my English adventure. I'll never forget the fun we had in class!",
                "Bye everyone!"
            ],
            correctIndex: 2,
            explanation: "Ucapan terbaik mencakup: terima kasih spesifik, perubahan diri, pencapaian, dan harapan masa depan!",
            difficulty: "hard"
        },
        {
            id: "kids-30-025",
            question: "Apa arti dari 'grateful'?",
            options: [
                "Marah",
                "Bersyukur/berterima kasih",
                "Sedih",
                "Bosan"
            ],
            correctIndex: 1,
            explanation: "'Grateful' artinya bersyukur atau sangat berterima kasih.",
            difficulty: "hard"
        },
        {
            id: "kids-30-026",
            question: "Pilih kata yang merupakan ANTONIM dari 'shy':",
            options: ["quiet", "nervous", "confident", "scared"],
            correctIndex: 2,
            explanation: "'Confident' (percaya diri) adalah lawan dari 'shy' (malu/penakut).",
            difficulty: "hard"
        },
        {
            id: "kids-30-027",
            question: "Lengkapi: 'Looking back, I ___ how far I've come.'",
            options: ["forget", "realize", "ignore", "doubt"],
            correctIndex: 1,
            explanation: "'Realize' artinya menyadari (menyadari kemajuan yang telah dicapai).",
            difficulty: "hard"
        },
        {
            id: "kids-30-028",
            question: "Bahasa Indonesia dari 'This experience has changed my life':",
            options: [
                "Pengalaman ini tidak mengubah apa-apa",
                "Pengalaman ini telah mengubah hidupku",
                "Pengalaman ini sangat membosankan",
                "Pengalaman ini akan kulupakan"
            ],
            correctIndex: 1,
            explanation: "'Has changed my life' = telah mengubah hidupku (dampak besar).",
            difficulty: "hard"
        },
        {
            id: "kids-30-029",
            question: "Pilih kutipan yang paling INSPIRATIF untuk ucapan kelulusan:",
            options: [
                "I'm glad it's over.",
                "Every ending is a new beginning. Thank you for helping me start this amazing journey with English!",
                "I don't like English anymore.",
                "School is boring."
            ],
            correctIndex: 1,
            explanation: "Kutipan inspiratif tentang 'new beginning' sangat cocok untuk perpisahan kelulusan.",
            difficulty: "hard"
        },
        {
            id: "kids-30-030",
            question: " ",
            options: [
                "Thanks, bye!",
                "Dear teachers and friends, thank you for this incredible journey. When I first came here, I couldn't even introduce myself. Now I can give presentations! I'm proud of how much I've grown, and I'm excited to continue learning. This isn't goodbye - it's see you later as better English speakers!",
                "Goodbye!",
                "I finished!"
            ],
            correctIndex: 1,
            explanation: "Ucapan terbaik: struktur lengkap (salam, transformasi, pencapaian, harapan, penutup positif)!",
            difficulty: "hard"
        }
    ]
};


