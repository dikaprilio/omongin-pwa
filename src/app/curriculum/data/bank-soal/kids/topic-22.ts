import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 22,
    path: 'speaking-kids',
    title: "Would You Rather? 🤔",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-22-001",
            question: "Apa arti dari 'Would you rather...?'",
            options: [
                "Apakah kamu mau...?",
                "Maukah kamu lebih suka...?",
                "Bisakah kamu...?",
                "Kapan kamu...?"
            ],
            correctIndex: 1,
            explanation: "'Would you rather' artinya 'Maukah kamu lebih suka' - untuk memilih antara dua pilihan.",
            difficulty: "easy"
        },
        {
            id: "kids-22-002",
            question: "Pilih jawaban yang BENAR untuk 'Would you rather eat pizza or burger?'",
            options: [
                "Yes, I do.",
                "I would rather eat pizza.",
                "No, thank you.",
                "Maybe tomorrow."
            ],
            correctIndex: 1,
            explanation: "Jawaban yang tepat: 'I would rather...' (Aku lebih suka...)",
            difficulty: "easy"
        },
        {
            id: "kids-22-003",
            question: "Bahasa Indonesia dari 'I prefer ice cream' adalah:",
            options: [
                "Aku benci es krim",
                "Aku lebih suka es krim",
                "Aku punya es krim",
                "Aku membuat es krim"
            ],
            correctIndex: 1,
            explanation: "'I prefer' artinya 'Aku lebih suka/memilih'",
            difficulty: "easy"
        },
        {
            id: "kids-22-004",
            question: "Pilih kata yang tepat: 'Would you rather ___ (fly) or swim?'",
            options: ["fly", "flying", "to fly", "flied"],
            correctIndex: 0,
            explanation: "Setelah 'would you rather', gunakan kata kerja bentuk dasar (fly, swim, eat).",
            difficulty: "easy"
        },
        {
            id: "kids-22-005",
            question: "Apa arti dari 'neither'?",
            options: [
                "Keduanya",
                "Tidak keduanya",
                "Salah satu",
                "Semua"
            ],
            correctIndex: 1,
            explanation: "'Neither' artinya 'tidak keduanya' atau 'bukan salah satu pun'.",
            difficulty: "easy"
        },
        {
            id: "kids-22-006",
            question: "Lengkapi: '___ you rather have a dog or a cat?'",
            options: ["Do", "Would", "Are", "Can"],
            correctIndex: 1,
            explanation: "Rumus: 'Would you rather + verb?' (Maukah kamu lebih suka...?)",
            difficulty: "easy"
        },
        {
            id: "kids-22-007",
            question: "Bahasa Inggris dari 'Keduanya!' adalah:",
            options: ["None!", "Neither!", "Both!", "All!"],
            correctIndex: 2,
            explanation: "'Both' artinya 'keduanya' (dua-duanya).",
            difficulty: "easy"
        },
        {
            id: "kids-22-008",
            question: "Pilih kalimat yang benar:",
            options: [
                "I would rather to play outside.",
                "I would rather play outside.",
                "I would rather playing outside.",
                "I would rather played outside."
            ],
            correctIndex: 1,
            explanation: "Setelah 'would rather', langsung gunakan kata kerja tanpa 'to' (play, bukan to play).",
            difficulty: "easy"
        },
        {
            id: "kids-22-009",
            question: "Apa arti dari 'I would rather not'?",
            options: [
                "Aku sangat mau",
                "Aku lebih suka tidak",
                "Aku tidak tahu",
                "Aku pasti mau"
            ],
            correctIndex: 1,
            explanation: "'I would rather not' artinya 'Aku lebih suka tidak' (menolak dengan sopan).",
            difficulty: "easy"
        },
        {
            id: "kids-22-010",
            question: "Pilihan mana yang lebih sehat?",
            options: [
                "Would you rather eat candy or vegetables?",
                "Would you rather sleep or run?",
                "Would you rather read or write?",
                "Would you rather sing or dance?"
            ],
            correctIndex: 0,
            explanation: "Pertanyaan tentang candy (permen) vs vegetables (sayur) membahas pilihan sehat.",
            difficulty: "easy"
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-22-011",
            question: "Pilih jawaban yang memberikan alasan:",
            options: [
                "I would rather swim.",
                "I would rather swim because it's fun.",
                "Swim is good.",
                "I like swim."
            ],
            correctIndex: 1,
            explanation: "'Because' digunakan untuk memberikan alasan. Kalimat lengkap dengan alasan lebih baik!",
            difficulty: "medium"
        },
        {
            id: "kids-22-012",
            question: "Lengkapi: '___ rather stay home ___ go out in the rain.'",
            options: ["I'd / than", "I / that", "I'd / then", "I / and"],
            correctIndex: 0,
            explanation: "'I'd rather... than...' artinya 'Aku lebih suka... daripada...'",
            difficulty: "medium"
        },
        {
            id: "kids-22-013",
            question: "Bahasa Indonesia dari 'That's a tough choice':",
            options: [
                "Itu pilihan yang sulit",
                "Itu pilihan yang mudah",
                "Itu pilihan yang benar",
                "Itu pilihan yang salah"
            ],
            correctIndex: 0,
            explanation: "'Tough choice' artinya pilihan yang sulit/sulit diputuskan.",
            difficulty: "medium"
        },
        {
            id: "kids-22-014",
            question: "Pilih kalimat yang menggunakan 'because' dengan benar:",
            options: [
                "I would rather read because.",
                "I would rather read because it's relaxing.",
                "Because I would rather read.",
                "Read because I would rather."
            ],
            correctIndex: 1,
            explanation: "Struktur: 'I would rather [pilihan] because [alasan].'",
            difficulty: "medium"
        },
        {
            id: "kids-22-015",
            question: "Apa arti dari 'definitely'?",
            options: [
                "Mungkin",
                "Tidak tahu",
                "Pasti/definitely",
                "Jarang"
            ],
            correctIndex: 2,
            explanation: "'Definitely' artinya pasti/tentu sekali (sangat yakin).",
            difficulty: "medium"
        },
        {
            id: "kids-22-016",
            question: "Pilih kata yang BUKAN kata kerja:",
            options: ["run", "happy", "eat", "sleep"],
            correctIndex: 1,
            explanation: "'Happy' (senang) adalah kata sifat, bukan kata kerja.",
            difficulty: "medium"
        },
        {
            id: "kids-22-017",
            question: "Lengkapi: 'I ___ rather have summer vacation ___ winter vacation.'",
            options: ["would / that", "would / than", "will / than", "am / that"],
            correctIndex: 1,
            explanation: "'I'd rather... than...' (I'd = I would)",
            difficulty: "medium"
        },
        {
            id: "kids-22-018",
            question: "Bahasa Inggris dari 'It depends' adalah:",
            options: [
                "Itu tergantung",
                "Itu pasti",
                "Itu benar",
                "Itu salah"
            ],
            correctIndex: 0,
            explanation: "'It depends' artinya 'itu tergantung' (pada situasinya).",
            difficulty: "medium"
        },
        {
            id: "kids-22-019",
            question: "Pilih jawaban yang paling lengkap:",
            options: [
                "Pizza.",
                "I like pizza.",
                "I would definitely choose pizza because I love cheese and it's my favorite food.",
                "Pizza is good."
            ],
            correctIndex: 2,
            explanation: "Jawaban lengkap dengan penjelasan detail lebih baik untuk berbicara!",
            difficulty: "medium"
        },
        {
            id: "kids-22-020",
            question: "Apa arti dari 'Can I choose both'?",
            options: [
                "Bisakah aku pilih keduanya?",
                "Bisakah aku pilih salah satu?",
                "Bisakah aku tidak pilih?",
                "Bisakah aku pilih nanti?"
            ],
            correctIndex: 0,
            explanation: "'Both' artinya keduanya, jadi 'Can I choose both?' = Bisakah aku pilih keduanya?",
            difficulty: "medium"
        },
        {
            id: "kids-22-021",
            question: "Lengkapi: '___ you rather be able to fly ___ be invisible?'",
            options: ["Would / and", "Would / or", "Do / or", "Are / and"],
            correctIndex: 1,
            explanation: "Untuk pilihan, gunakan 'Would you rather... or...?'",
            difficulty: "medium"
        },
        {
            id: "kids-22-022",
            question: "Pilih kata yang berlawanan dengan 'boring':",
            options: ["tired", "exciting", "sleepy", "quiet"],
            correctIndex: 1,
            explanation: "'Exciting' (seru/menarik) adalah lawan dari 'boring' (membosankan).",
            difficulty: "medium"
        },

        // === HARD (8 questions) ===
        {
            id: "kids-22-023",
            question: "Susun kalimat: 'to / would / I / rather / be / teacher / a'",
            options: [
                "I would rather to be a teacher.",
                "I would rather be a teacher.",
                "Would I rather be a teacher.",
                "Rather I would be a teacher."
            ],
            correctIndex: 1,
            explanation: "Struktur benar: 'I would rather be a teacher' (tanpa 'to').",
            difficulty: "hard"
        },
        {
            id: "kids-22-024",
            question: "Pilih kalimat yang benar secara grammar:",
            options: [
                "I would rather go to beach than stay at home.",
                "I would rather going to beach than staying at home.",
                "I would rather to go to beach than to stay at home.",
                "I would rather gone to beach than stayed at home."
            ],
            correctIndex: 0,
            explanation: "Setelah 'would rather' dan 'than', gunakan kata kerja dasar (go, stay).",
            difficulty: "hard"
        },
        {
            id: "kids-22-025",
            question: "Apa arti dari 'That's a no-brainer'?",
            options: [
                "Itu pilihan yang sulit",
                "Itu pilihan yang sangat mudah (tanpa perlu berpikir)",
                "Itu pilihan yang salah",
                "Itu pilihan yang bahaya"
            ],
            correctIndex: 1,
            explanation: "'No-brainer' artinya pilihan yang sangat mudah, tidak perlu mikir lama.",
            difficulty: "hard"
        },
        {
            id: "kids-22-026",
            question: "Pilih kata yang sinonim dengan 'prefer':",
            options: ["hate", "dislike", "favor", "ignore"],
            correctIndex: 2,
            explanation: "'Favor' artinya menyukai/mengutamakan, sama seperti 'prefer'.",
            difficulty: "hard"
        },
        {
            id: "kids-22-027",
            question: "Lengkapi dengan jawaban yang sopan saing ditanya pilihan sulit: '___ , that's a tough one, but I think...'",
            options: ["Wow", "Yuck", "Boring", "Never"],
            correctIndex: 0,
            explanation: "'Wow, that's a tough one' adalah cara sopan untuk menunjukkan pilihan sulit.",
            difficulty: "hard"
        },
        {
            id: "kids-22-028",
            question: "Bahasa Indonesia dari 'I can't decide':",
            options: [
                "Aku sudah memutuskan",
                "Aku tidak bisa memutuskan",
                "Aku sangat yakin",
                "Aku tidak peduli"
            ],
            correctIndex: 1,
            explanation: "'I can't decide' artinya 'Aku tidak bisa memutuskan' (bimbang).",
            difficulty: "hard"
        },
        {
            id: "kids-22-029",
            question: "Pilih kalimat yang memberikan penjelasan terbaik:",
            options: [
                "I would rather read books because.",
                "I would rather read books because they take me to imaginary worlds and help me learn new things.",
                "I would rather read books because books.",
                "I would rather read books because yes."
            ],
            correctIndex: 1,
            explanation: "Penjelasan yang detail dan spesifik lebih baik untuk komunikasi.",
            difficulty: "hard"
        },
        {
            id: "kids-22-030",
            question: "Susun dialog lengkap:\nPerson A: Would you rather travel to Japan or Korea?\nPerson B: ___",
            options: [
                "I would rather travel to Japan because I love anime and Japanese culture, and the food looks amazing!",
                "Japan.",
                "Yes.",
                "I don't know."
            ],
            correctIndex: 0,
            explanation: "Jawaban lengkap dengan pilihan DAN alasan yang detail adalah yang terbaik!",
            difficulty: "hard"
        }
    ]
};

