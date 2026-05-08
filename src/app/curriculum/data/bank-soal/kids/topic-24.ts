import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 24,
    path: 'speaking-kids',
    title: "Kid vs Parent Debate 🗣️",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-24-001",
            question: "Apa arti dari 'debate'?",
            options: [
                "Debat/perdebatan",
                "Persetujuan",
                "Permainan",
                "Pelajaran"
            ],
            correctIndex: 0,
            explanation: "'Debate' artinya debat atau perdebatan (mendiskusikan topik dengan argumen).",
            difficulty: "easy"
        },
        {
            id: "kids-24-002",
            question: "Pilih kata yang menunjukkan SETUJU:",
            options: ["disagree", "no", "yes", "never"],
            correctIndex: 2,
            explanation: "'Yes' artinya ya/setuju.",
            difficulty: "easy"
        },
        {
            id: "kids-24-003",
            question: "Bahasa Indonesia dari 'I think...' adalah:",
            options: [
                "Aku mau...",
                "Aku pikir...",
                "Aku tahu...",
                "Aku bisa..."
            ],
            correctIndex: 1,
            explanation: "'I think' artinya 'aku pikir/menurutku' (untuk menyampaikan pendapat).",
            difficulty: "easy"
        },
        {
            id: "kids-24-004",
            question: "Pilih kalimat yang sopan untuk menyatakan TIDAK SETUJU:",
            options: [
                "You're wrong!",
                "I don't agree with you.",
                "That's stupid!",
                "Shut up!"
            ],
            correctIndex: 1,
            explanation: "'I don't agree with you' adalah cara sopan untuk tidak setuju.",
            difficulty: "easy"
        },
        {
            id: "kids-24-005",
            question: "Apa arti dari 'because'?",
            options: [
                "Tetapi",
                "Karena",
                "Atau",
                "Jika"
            ],
            correctIndex: 1,
            explanation: "'Because' artinya karena (untuk memberikan alasan).",
            difficulty: "easy"
        },
        {
            id: "kids-24-006",
            question: "Lengkapi: 'I think children ___ more play time.'",
            options: ["need", "needs", "needing", "to need"],
            correctIndex: 0,
            explanation: "Setelah subjek plural (children), gunakan kata kerja dasar (need).",
            difficulty: "easy"
        },
        {
            id: "kids-24-007",
            question: "Bahasa Inggris dari 'Menurutku' adalah:",
            options: ["I know", "I think", "I want", "I have"],
            correctIndex: 1,
            explanation: "'I think' atau 'In my opinion' artinya 'menurutku'.",
            difficulty: "easy"
        },
        {
            id: "kids-24-008",
            question: "Pilih kata yang menunjukkan pendapat:",
            options: ["run", "think", "eat", "sleep"],
            correctIndex: 1,
            explanation: "'Think' (berpikir) digunakan untuk menyatakan opini/pendapat.",
            difficulty: "easy"
        },
        {
            id: "kids-24-009",
            question: "Apa arti dari 'agree'?",
            options: [
                "Setuju",
                "Tidak setuju",
                "Bingung",
                "Marah"
            ],
            correctIndex: 0,
            explanation: "'Agree' artinya setuju (sama pendapat).",
            difficulty: "easy"
        },
        {
            id: "kids-24-010",
            question: "Pilih kalimat yang benar:",
            options: [
                "I agree to you.",
                "I agree with you.",
                "I agree at you.",
                "I agree for you."
            ],
            correctIndex: 1,
            explanation: "Preposisi yang benar: 'agree WITH someone' (setuju dengan seseorang).",
            difficulty: "easy"
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-24-011",
            question: "Pilih argumen yang BAIK untuk anak:",
            options: [
                "Because I said so!",
                "Homework helps us learn, but we also need time to rest and play for our health.",
                "I don't want to!",
                "Parents are always wrong!"
            ],
            correctIndex: 1,
            explanation: "Argumen yang baik menggunakan alasan logis dan sopan.",
            difficulty: "medium"
        },
        {
            id: "kids-24-012",
            question: "Lengkapi: 'I understand your point, ___ I have a different opinion.'",
            options: ["and", "but", "because", "so"],
            correctIndex: 1,
            explanation: "'But' digunakan untuk menunjukkan perbedaan/kontras pendapat.",
            difficulty: "medium"
        },
        {
            id: "kids-24-013",
            question: "Bahasa Indonesia dari 'In my opinion':",
            options: [
                "Di rumahku",
                "Menurutku",
                "Untukku",
                "Denganku"
            ],
            correctIndex: 1,
            explanation: "'In my opinion' artinya 'menurut pendapatku' atau 'menurutku'.",
            difficulty: "medium"
        },
        {
            id: "kids-24-014",
            question: "Pilih frasa yang sopan untuk memulai debat:",
            options: [
                "You're stupid!",
                "I see what you mean, but...",
                "I hate your idea!",
                "That's wrong!"
            ],
            correctIndex: 1,
            explanation: "'I see what you mean, but...' menunjukkan kamu mendengar sebelum menyanggah.",
            difficulty: "medium"
        },
        {
            id: "kids-24-015",
            question: "Apa arti dari 'however'?",
            options: [
                "Namun/bagaimanapun",
                "Karena itu",
                "Selain itu",
                "Akhirnya"
            ],
            correctIndex: 0,
            explanation: "'However' artinya namun/bagaimanapun juga (seperti 'but' tapi lebih formal).",
            difficulty: "medium"
        },
        {
            id: "kids-24-016",
            question: "Lengkali: 'Parents ___ that children need discipline.'",
            options: ["believe", "believes", "believing", "to believe"],
            correctIndex: 0,
            explanation: "Subjek 'Parents' (jamak) menggunakan kata kerja dasar 'believe'.",
            difficulty: "medium"
        },
        {
            id: "kids-24-017",
            question: "Bahasa Inggris dari 'Sebaliknya' adalah:",
            options: ["Instead", "Also", "Again", "Always"],
            correctIndex: 0,
            explanation: "'Instead' artinya 'sebagai gantinya' atau 'sebaliknya'.",
            difficulty: "medium"
        },
        {
            id: "kids-24-018",
            question: "Pilih kata yang menunjukkan BANDINGAN:",
            options: ["and", "but", "because", "with"],
            correctIndex: 1,
            explanation: "'But' digunakan untuk membandingkan dua ide yang berbeda.",
            difficulty: "medium"
        },
        {
            id: "kids-24-019",
            question: "Apa arti dari 'fair'?",
            options: [
                "Adil",
                "Tidak adil",
                "Benar",
                "Salah"
            ],
            correctIndex: 0,
            explanation: "'Fair' artinya adil (setara untuk semua orang).",
            difficulty: "medium"
        },
        {
            id: "kids-24-020",
            question: "Pilih kalimat yang menggunakan 'should' dengan benar:",
            options: [
                "Children should to sleep early.",
                "Children should sleep early.",
                "Children should sleeping early.",
                "Children should sleeps early."
            ],
            correctIndex: 1,
            explanation: "Setelah 'should', gunakan kata kerja dasar (sleep, play, eat).",
            difficulty: "medium"
        },
        {
            id: "kids-24-021",
            question: "Lengkapi: 'From a parent's point ___, safety is important.'",
            options: ["of", "at", "in", "for"],
            correctIndex: 0,
            explanation: "'From one's point of view' artinya 'dari sudut pandang seseorang'.",
            difficulty: "medium"
        },
        {
            id: "kids-24-022",
            question: "Bahasa Indonesia dari 'I respectfully disagree':",
            options: [
                "Aku sangat setuju",
                "Aku tidak setuju dengan hormat",
                "Aku benci kamu",
                "Aku tidak peduli"
            ],
            correctIndex: 1,
            explanation: "'Respectfully' artinya dengan hormat, jadi ini cara sopan untuk tidak setuju.",
            difficulty: "medium"
        },

        // === HARD (8 questions) ===
        {
            id: "kids-24-023",
            question: "Susun argumen yang logis: 'need / children / free / time / play / to'",
            options: [
                "Children need free time to play.",
                "Need children free time to play.",
                "Children to play need free time.",
                "Free time children need to play."
            ],
            correctIndex: 0,
            explanation: "Struktur: Subjek + need + objek + to + kata kerja.",
            difficulty: "hard"
        },
        {
            id: "kids-24-024",
            question: "Pilih argumen yang paling kuat untuk anak:",
            options: [
                "I want more playtime!",
                "Studies show that children who play regularly develop better social skills, creativity, and mental health, which helps them perform better in school too.",
                "Other kids get more playtime!",
                "You're a mean parent!"
            ],
            correctIndex: 1,
            explanation: "Argumen terkuat menggunakan fakta dan logika yang meyakinkan.",
            difficulty: "hard"
        },
        {
            id: "kids-24-025",
            question: "Apa arti dari 'valid point'?",
            options: [
                "Poin yang tidak penting",
                "Poin yang sah/berargumen kuat",
                "Poin yang salah",
                "Poin yang lucu"
            ],
            correctIndex: 1,
            explanation: "'Valid point' artinya argumen/poin yang sah, logis, dan patut dipertimbangkan.",
            difficulty: "hard"
        },
        {
            id: "kids-24-026",
            question: "Pilih kata yang BUKAN penghubung (conjunction):",
            options: ["however", "therefore", "beautiful", "although"],
            correctIndex: 2,
            explanation: "'Beautiful' (cantik) adalah kata sifat, bukan penghubung.",
            difficulty: "hard"
        },
        {
            id: "kids-24-027",
            question: "Lengkapi: '___ children need rules, ___ they also need freedom to grow.'",
            options: ["Although / they", "Because / and", "If / but", "When / so"],
            correctIndex: 0,
            explanation: "'Although... they also...' menunjukkan kontras yang seimbang.",
            difficulty: "hard"
        },
        {
            id: "kids-24-028",
            question: "Bahasa Indonesia dari 'On the other hand':",
            options: [
                "Di tangan lain",
                "Di sisi lain/sebaliknya",
                "Di atas meja",
                "Di bawah kursi"
            ],
            correctIndex: 1,
            explanation: "'On the other hand' artinya 'di sisi lain' (untuk menyajikan sudut pandang berbeda).",
            difficulty: "hard"
        },
        {
            id: "kids-24-029",
            question: "Pilih cara terbaik untuk mengakhiri debat dengan sopan:",
            options: [
                "I win, you lose!",
                "I understand your perspective now. Thank you for sharing your thoughts with me.",
                "You're still wrong!",
                "I don't want to talk to you anymore!"
            ],
            correctIndex: 1,
            explanation: "Mengakhiri dengan menghargai perspektif orang lain menunjukkan kedewasaan.",
            difficulty: "hard"
        },
        {
            id: "kids-24-030",
            question: "Susun argumen lengkap:\nTopik: 'Should children have homework every day?'\nArgumen Anak:",
            options: [
                "No homework!",
                "While I understand homework helps us practice, I believe daily homework is too stressful. Children need time to rest, play, and spend time with family. Studies show that too much homework can actually make us hate learning. Instead, we should have meaningful projects that don't take all our free time.",
                "I hate homework!",
                "Parents are wrong!"
            ],
            correctIndex: 1,
            explanation: "Argumen terbaik mengakui poin lawan, memberikan alasan logis, dan menawarkan solusi!",
            difficulty: "hard"
        }
    ]
};

