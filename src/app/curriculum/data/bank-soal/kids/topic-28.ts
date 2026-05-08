import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 28,
    path: 'speaking-kids',
    title: "Movie Critic 🎬",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-28-001",
            question: "Apa arti dari 'movie critic'?",
            options: [
                "Pembuat film",
                "Penonton film",
                "Pengkritik film",
                "Aktor film"
            ],
            correctIndex: 2,
            explanation: "'Movie critic' artinya pengkritik film (orang yang memberi ulasan film).",
            difficulty: "easy"
        },
        {
            id: "kids-28-002",
            question: "Pilih kata yang berarti MENYUKAI film:",
            options: ["hate", "dislike", "love", "boring"],
            correctIndex: 2,
            explanation: "'Love' artinya sangat menyukai/cinta.",
            difficulty: "easy"
        },
        {
            id: "kids-28-003",
            question: "Bahasa Indonesia dari 'The movie was...' adalah:",
            options: [
                "Filmnya adalah...",
                "Filmnya akan...",
                "Filmnya sudah...",
                "Filmnya belum..."
            ],
            correctIndex: 0,
            explanation: "'The movie was...' = Filmnya adalah... (untuk menggambarkan film di masa lalu).",
            difficulty: "easy"
        },
        {
            id: "kids-28-004",
            question: "Pilih kata sifat yang BAIK untuk film:",
            options: ["terrible", "awful", "amazing", "boring"],
            correctIndex: 2,
            explanation: "'Amazing' (luar biasa) adalah kata sifat positif.",
            difficulty: "easy"
        },
        {
            id: "kids-28-005",
            question: "Apa arti dari 'actor'?",
            options: [
                "Pemeran wanita",
                "Pemeran pria",
                "Sutradara",
                "Penulis"
            ],
            correctIndex: 1,
            explanation: "'Actor' artinya pemeran pria (aktor).",
            difficulty: "easy"
        },
        {
            id: "kids-28-006",
            question: "Lengkapi: 'The story ___ very interesting.'",
            options: ["is", "are", "am", "be"],
            correctIndex: 0,
            explanation: "Subjek tunggal 'story' menggunakan 'is'.",
            difficulty: "easy"
        },
        {
            id: "kids-28-007",
            question: "Bahasa Inggris dari 'Aku merekomendasikan film ini' adalah:",
            options: [
                "I hate this movie.",
                "I recommend this movie.",
                "I don't like this movie.",
                "I forget this movie."
            ],
            correctIndex: 1,
            explanation: "'I recommend this movie' = Aku merekomendasikan film ini.",
            difficulty: "easy"
        },
        {
            id: "kids-28-008",
            question: "Pilih kata yang BUKAN genre film:",
            options: ["comedy", "action", "pizza", "animation"],
            correctIndex: 2,
            explanation: "'Pizza' adalah makanan, bukan genre film.",
            difficulty: "easy"
        },
        {
            id: "kids-28-009",
            question: "Apa arti dari 'boring'?",
            options: [
                "Seru",
                "Lucu",
                "Membosankan",
                "Menakutkan"
            ],
            correctIndex: 2,
            explanation: "'Boring' artinya membosankan/tidak menarik.",
            difficulty: "easy"
        },
        {
            id: "kids-28-010",
            question: "Pilih kalimat yang benar:",
            options: [
                "I like the movie because it is funny.",
                "I like the movie because it are funny.",
                "I like the movie because it am funny.",
                "I like the movie because it be funny."
            ],
            correctIndex: 0,
            explanation: "Subjek 'it' menggunakan 'is'.",
            difficulty: "easy"
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-28-011",
            question: "Pilih ulasan yang BAIK dan informatif:",
            options: [
                "Good.",
                "This movie was amazing! The characters were funny, the story was exciting, and I laughed the whole time.",
                "Okay.",
                "Bad."
            ],
            correctIndex: 1,
            explanation: "Ulasan yang baik memberikan alasan spesifik (characters, story, reaction).",
            difficulty: "medium"
        },
        {
            id: "kids-28-012",
            question: "Lengkapi: 'The actors performed ___ (baik).',",
            options: ["good", "well", "better", "best"],
            correctIndex: 1,
            explanation: "'Well' adalah adverb yang menggambarkan bagaimana mereka perform.",
            difficulty: "medium"
        },
        {
            id: "kids-28-013",
            question: "Bahasa Indonesia dari 'The plot was exciting':",
            options: [
                "Aktornya seru",
                "Alur ceritanya menarik",
                "Musiknya bagus",
                "Efeknya hebat"
            ],
            correctIndex: 1,
            explanation: "'Plot' artinya alur cerita.",
            difficulty: "medium"
        },
        {
            id: "kids-28-014",
            question: "Pilih genre film yang lucu:",
            options: ["horror", "comedy", "thriller", "documentary"],
            correctIndex: 1,
            explanation: "'Comedy' adalah film komedi yang lucu/funny.",
            difficulty: "medium"
        },
        {
            id: "kids-28-015",
            question: "Apa arti dari 'special effects'?",
            options: [
                "Efek spesial/efek khusus",
                "Aktor spesial",
                "Cerita spesial",
                "Musik spesial"
            ],
            correctIndex: 0,
            explanation: "'Special effects' artinya efek khusus (visual/digital dalam film).",
            difficulty: "medium"
        },
        {
            id: "kids-28-016",
            question: "Lengkapi: 'I ___ (sangat menikmati) the movie.'",
            options: [
                "really enjoyed",
                "real enjoy",
                "really enjoy",
                "real enjoyed"
            ],
            correctIndex: 0,
            explanation: "'Really enjoyed' (really + past tense) untuk pengalaman menonton.",
            difficulty: "medium"
        },
        {
            id: "kids-28-017",
            question: "Bahasa Inggris dari 'Film ini cocok untuk anak-anak' adalah:",
            options: [
                "This movie is scary for kids.",
                "This movie is suitable for kids.",
                "This movie is bad for kids.",
                "This movie is boring for kids."
            ],
            correctIndex: 1,
            explanation: "'Suitable for' artinya cocok/ sesuai untuk.",
            difficulty: "medium"
        },
        {
            id: "kids-28-018",
            question: "Pilih kata yang menggambarkan akting yang BAGUS:",
            options: ["terrible", "amazing", "bad", "poor"],
            correctIndex: 1,
            explanation: "'Amazing' (luar biasa) untuk menggambarkan akting yang sangat baik.",
            difficulty: "medium"
        },
        {
            id: "kids-28-019",
            question: "Apa arti dari 'soundtrack'?",
            options: [
                "Dialog film",
                "Musik/lagu dalam film",
                "Efek suara",
                "Poster film"
            ],
            correctIndex: 1,
            explanation: "'Soundtrack' artinya musik atau lagu dalam film.",
            difficulty: "medium"
        },
        {
            id: "kids-28-020",
            question: "Pilih kata yang berlawanan dengan 'exciting':",
            options: ["boring", "thrilling", "interesting", "amazing"],
            correctIndex: 0,
            explanation: "'Boring' (membosankan) adalah lawan dari 'exciting' (menarik/seru).",
            difficulty: "medium"
        },
        {
            id: "kids-28-021",
            question: "Lengkapi: 'My favorite ___ was the main character.'",
            options: ["actor", "movie", "scene", "soundtrack"],
            correctIndex: 0,
            explanation: "'Favorite actor' = aktor favorit (bermain sebagai main character).",
            difficulty: "medium"
        },
        {
            id: "kids-28-022",
            question: "Bahasa Indonesia dari 'I couldn't stop watching':",
            options: [
                "Aku tidak bisa berhenti menonton",
                "Aku tidak suka menonton",
                "Aku tertidur saat menonton",
                "Aku tidak mengerti filmnya"
            ],
            correctIndex: 0,
            explanation: "'Couldn't stop watching' = Tidak bisa berhenti menonton (sangat menarik).",
            difficulty: "medium"
        },

        // === HARD (8 questions) ===
        {
            id: "kids-28-023",
            question: "Susun ulasan: 'recommend / I / this / highly / movie'",
            options: [
                "I highly recommend this movie.",
                "I recommend highly this movie.",
                "Highly I recommend this movie.",
                "This movie I highly recommend."
            ],
            correctIndex: 0,
            explanation: "Struktur: I + highly (adverb) + recommend (verb) + this movie (object).",
            difficulty: "hard"
        },
        {
            id: "kids-28-024",
            question: "Pilih ulasan yang PALING detail dan membantu:",
            options: [
                "Nice movie.",
                "This animated movie was fantastic! The voice actors did an amazing job, the animation was beautiful and colorful, and the story taught me about friendship. I would recommend it to anyone who loves adventure and comedy!",
                "Good.",
                "I watched it."
            ],
            correctIndex: 1,
            explanation: "Ulasan terbaik mencakup berbagai aspek (voice actors, animation, story, recommendation).",
            difficulty: "hard"
        },
        {
            id: "kids-28-025",
            question: "Apa arti dari 'cliffhanger'?",
            options: [
                "Akhir cerita yang memuaskan",
                "Akhir cerita yang menegangkan/membuat penasaran",
                "Awal cerita",
                "Bagian tengah cerita"
            ],
            correctIndex: 1,
            explanation: "'Cliffhanger' artinya akhir cerita yang membuat penasaran (pengen nonton lanjutannya).",
            difficulty: "hard"
        },
        {
            id: "kids-28-026",
            question: "Pilih kata yang BUKAN cara memberi rating:",
            options: ["stars", "thumbs up", "delicious", "out of 10"],
            correctIndex: 2,
            explanation: "'Delicious' (lezat) untuk makanan, bukan untuk rating film.",
            difficulty: "hard"
        },
        {
            id: "kids-28-027",
            question: "Lengkapi: 'If you like adventure movies, you ___ love this one!'",
            options: ["will", "would", "was", "were"],
            correctIndex: 0,
            explanation: "'If you like... you will love...' (First conditional untuk rekomendasi).",
            difficulty: "hard"
        },
        {
            id: "kids-28-028",
            question: "Bahasa Indonesia dari 'The movie kept me on the edge of my seat':",
            options: [
                "Filmnya membuatku ngantuk",
                "Filmnya membuatku tegang/penasaran sepanjang waktu",
                "Filmnya membuatku tertidur",
                "Filmnya membuatku bosan"
            ],
            correctIndex: 1,
            explanation: "'Kept me on the edge of my seat' = membuat tegang/penasaran (tidak bisa lepas).",
            difficulty: "hard"
        },
        {
            id: "kids-28-029",
            question: "Pilih aspek film yang paling penting untuk dikritik:",
            options: [
                "Warna popcorn",
                "Acting, plot, visuals, dan pesan moral",
                "Harga tiket",
                "Nama bioskop"
            ],
            correctIndex: 1,
            explanation: "Aspek penting film: acting (akting), plot (cerita), visuals (tampilan), pesan moral.",
            difficulty: "hard"
        },
        {
            id: "kids-28-030",
            question: " ",
            options: [
                "Good movie.",
                "I just watched 'The Adventure Begins' and it was absolutely incredible! The animation was stunning, the characters were relatable and funny, and the soundtrack was catchy. The story taught me about courage and friendship. I give it 5 stars and recommend it to all my friends!",
                "Okay film.",
                "I watched a movie."
            ],
            correctIndex: 1,
            explanation: "Ulasan terbaik mencakup: judul, aspek teknis, pesan moral, dan rekomendasi personal!",
            difficulty: "hard"
        }
    ]
};


