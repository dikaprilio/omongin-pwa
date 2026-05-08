/**
 * Topic 13: Hobbies & Games 🎮
 * ----------------------------
 * 30 questions about hobbies, games, sports, and leisure activities
 * for kids ages 7-12.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 13,
    path: 'speaking-kids',
    title: "Hobbies & Games 🎮",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-13-001",
            question: "⚽ 'I like to play ___ with my friends.'",
            options: ["pencil", "soccer", "book", "desk"],
            correctIndex: 1,
            explanation: "Soccer artinya sepak bola. Play soccer = bermain sepak bola.",
            difficulty: "easy",
            tags: ["vocabulary", "sports"]
        },
        {
            id: "kids-13-002",
            question: "Terjemahkan: 'Saya suka bermain game.'",
            options: [
                "I like to play games.",
                "I likes to play games.",
                "I like play games.",
                "I to like play games."
            ],
            correctIndex: 0,
            explanation: "I like to play games adalah kalimat yang benar. Like to + kata kerja.",
            difficulty: "easy",
            tags: ["grammar", "like-to"]
        },
        {
            id: "kids-13-003",
            question: "🎨 Kegiatan melukis dalam bahasa Inggris adalah...",
            options: ["Singing", "Drawing", "Swimming", "Running"],
            correctIndex: 1,
            explanation: "Drawing artinya menggambar/melukis. Singing = menyanyi, Swimming = berenang, Running = berlari.",
            difficulty: "easy",
            tags: ["vocabulary", "hobbies"]
        },
        {
            id: "kids-13-004",
            question: "Pilih kata yang benar: 'She ___ playing piano.'",
            options: ["like", "likes", "liking", "is like"],
            correctIndex: 1,
            explanation: "She (dia perempuan - tunggal) pakai 'likes'. Likes playing piano = suka bermain piano.",
            difficulty: "easy",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-13-005",
            question: "🏊 Aktivitas di kolam renang adalah...",
            options: ["running", "swimming", "jumping", "flying"],
            correctIndex: 1,
            explanation: "Swimming artinya berenang. Kegiatan di kolam renang adalah berenang.",
            difficulty: "easy",
            tags: ["vocabulary", "sports"]
        },
        {
            id: "kids-13-006",
            question: "🎵 'My hobby is ___ songs.'",
            options: ["draw", "sing", "run", "swim"],
            correctIndex: 1,
            explanation: "Sing songs = menyanyikan lagu. Hobby = hobi.",
            difficulty: "easy",
            tags: ["vocabulary", "hobbies"]
        },
        {
            id: "kids-13-007",
            question: "'Do you like ___ video games?'",
            options: ["play", "plays", "playing", "played"],
            correctIndex: 2,
            explanation: "Like playing = suka bermain. Setelah like, bisa pakai -ing (gerund).",
            difficulty: "easy",
            tags: ["grammar", "gerund"]
        },
        {
            id: "kids-13-008",
            question: "🚴 'I ride my ___ to school.'",
            options: ["car", "bicycle", "bus", "train"],
            correctIndex: 1,
            explanation: "Bicycle artinya sepeda. Ride a bicycle = mengendarai sepeda.",
            difficulty: "easy",
            tags: ["vocabulary", "transportation"]
        },
        {
            id: "kids-13-009",
            question: "Pilih yang BUKAN hobi:",
            options: ["reading", "sleeping", "painting", "playing chess"],
            correctIndex: 1,
            explanation: "Sleeping (tidur) adalah kebutuhan dasar, bukan hobi. Reading, painting, dan playing chess adalah hobi.",
            difficulty: "easy",
            tags: ["vocabulary", "hobbies"]
        },
        {
            id: "kids-13-010",
            question: "🎤 'I want to be a ___ when I grow up.' (Menyanyi)",
            options: ["dancer", "singer", "painter", "player"],
            correctIndex: 1,
            explanation: "Singer artinya penyanyi. Orang yang suka menyanyi bisa jadi singer.",
            difficulty: "easy",
            tags: ["vocabulary", "jobs"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-13-011",
            question: "Pilih kalimat yang benar:",
            options: [
                "He don't like playing basketball.",
                "He doesn't likes playing basketball.",
                "He doesn't like playing basketball.",
                "He not like playing basketball."
            ],
            correctIndex: 2,
            explanation: "He doesn't like playing basketball adalah kalimat yang benar. He pakai 'doesn't' + like (bentuk dasar).",
            difficulty: "medium",
            tags: ["grammar", "negatives"]
        },
        {
            id: "kids-13-012",
            question: "🎮 Apa arti dari 'board games'?",
            options: [
                "Game di papan",
                "Permainan papan (monopoli, catur)",
                "Game di papan tulis",
                "Game komputer"
            ],
            correctIndex: 1,
            explanation: "Board games artinya permainan papan seperti monopoli, ular tangga, atau catur.",
            difficulty: "medium",
            tags: ["vocabulary", "games"]
        },
        {
            id: "kids-13-013",
            question: "'___ do you do in your free time?' Pilih kata yang tepat:",
            options: ["What", "Where", "When", "Who"],
            correctIndex: 0,
            explanation: "What do you do...? = Apa yang kamu lakukan...? What untuk menanyakan aktivitas/kegiatan.",
            difficulty: "medium",
            tags: ["grammar", "questions"]
        },
        {
            id: "kids-13-014",
            question: "🏓 'Ping pong is also called ___'",
            options: ["tennis", "badminton", "table tennis", "volleyball"],
            correctIndex: 2,
            explanation: "Ping pong juga disebut table tennis (tenis meja).",
            difficulty: "medium",
            tags: ["vocabulary", "sports"]
        },
        {
            id: "kids-13-015",
            question: "Terjemahkan: 'Adikku suka menari.'",
            options: [
                "My little brother like dancing.",
                "My little brother likes dancing.",
                "My little sister like dancing.",
                "My little sister likes to dancing."
            ],
            correctIndex: 1,
            explanation: "My little brother likes dancing = Adik laki-lakiku suka menari. Adik perempuan = little sister.",
            difficulty: "medium",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-13-016",
            question: "🎸 'I am learning to play the ___.' (Gitar)",
            options: ["piano", "guitar", "violin", "drum"],
            correctIndex: 1,
            explanation: "Guitar artinya gitar. Am learning = sedang belajar.",
            difficulty: "medium",
            tags: ["vocabulary", "music"]
        },
        {
            id: "kids-13-017",
            question: "Pilih yang benar: 'They ___ playing hide and seek in the garden.'",
            options: ["is", "are", "am", "be"],
            correctIndex: 1,
            explanation: "They (mereka - jamak) pakai 'are'. Are playing = sedang bermain.",
            difficulty: "medium",
            tags: ["grammar", "present-continuous"]
        },
        {
            id: "kids-13-018",
            question: "🎯 'Archery is a sport using ___'",
            options: ["balls", "bows and arrows", "rackets", "bats"],
            correctIndex: 1,
            explanation: "Archery (panahan) menggunakan bows (busur) and arrows (anak panah).",
            difficulty: "medium",
            tags: ["vocabulary", "sports"]
        },
        {
            id: "kids-13-019",
            question: "Apa arti dari 'collecting stamps'?",
            options: [
                "Mengirim perangko",
                "Mengoleksi perangko",
                "Membuat perangko",
                "Menjual perangko"
            ],
            correctIndex: 1,
            explanation: "Collecting stamps artinya mengoleksi perangko. Collecting = mengumpulkan/mengoleksi.",
            difficulty: "medium",
            tags: ["vocabulary", "hobbies"]
        },
        {
            id: "kids-13-020",
            question: "🤸 'Gymnastics helps you become ___'",
            options: ["sleepy", "flexible", "hungry", "lazy"],
            correctIndex: 1,
            explanation: "Gymnastics (senam) membuat tubuh menjadi flexible (lentur/fleksibel).",
            difficulty: "medium",
            tags: ["vocabulary", "sports"]
        },
        {
            id: "kids-13-021",
            question: "Pilih kalimat yang benar:",
            options: [
                "She can dances very well.",
                "She can dance very well.",
                "She can dancing very well.",
                "She can to dance very well."
            ],
            correctIndex: 1,
            explanation: "She can dance very well adalah kalimat yang benar. Can + kata kerja bentuk dasar (dance).",
            difficulty: "medium",
            tags: ["grammar", "modals"]
        },
        {
            id: "kids-13-022",
            question: "🎲 'Monopoly and snakes and ladders are types of ___'",
            options: ["video games", "board games", "card games", "ball games"],
            correctIndex: 1,
            explanation: "Monopoli dan ular tangga adalah board games (permainan papan).",
            difficulty: "medium",
            tags: ["vocabulary", "games"]
        },

        // === HARD (8 questions) ===
        {
            id: "kids-13-023",
            question: "Susun kata berikut: 'chess / brother / my / playing / enjoys'",
            options: [
                "My brother enjoys playing chess.",
                "My brother playing chess enjoys.",
                "Enjoys my brother playing chess.",
                "Playing chess my brother enjoys."
            ],
            correctIndex: 0,
            explanation: "My brother enjoys playing chess = Kakak/adik laki-lakiku suka bermain catur. Enjoys + V-ing.",
            difficulty: "hard",
            tags: ["grammar", "sentence-structure"]
        },
        {
            id: "kids-13-024",
            question: "🎭 Apa bedanya 'acting' dan 'playing'?",
            options: [
                "Sama saja",
                "Acting = berakting/bermain peran, Playing = bermain (game/olahraga)",
                "Acting = bermain game, Playing = berakting",
                "Acting = menyanyi, Playing = menari"
            ],
            correctIndex: 1,
            explanation: "Acting = berakting/bermain peran di teater/film. Playing = bermain game, olahraga, atau instrumen musik.",
            difficulty: "hard",
            tags: ["vocabulary", "nuance"]
        },
        {
            id: "kids-13-025",
            question: "Pilih kalimat yang paling benar:",
            options: [
                "Neither my sister nor my brother likes video games.",
                "Neither my sister or my brother likes video games.",
                "Neither my sister nor my brother like video games.",
                "Neither my sister and my brother like video games."
            ],
            correctIndex: 0,
            explanation: "Neither...nor menggunakan likes (tunggal) karena subject terdekat adalah 'brother'.",
            difficulty: "hard",
            tags: ["grammar", "neither-nor"]
        },
        {
            id: "kids-13-026",
            question: "🏆 'The ___ of the competition will get a gold medal.'",
            options: ["loser", "winner", "player", "referee"],
            correctIndex: 1,
            explanation: "Winner artinya pemenang. Pemenang kompetisi mendapat medali emas.",
            difficulty: "hard",
            tags: ["vocabulary", "sports"]
        },
        {
            id: "kids-13-027",
            question: "Apa arti dari 'spare time'?",
            options: [
                "Waktu senggang",
                "Waktu habis",
                "Waktu cepat",
                "Waktu bermain"
            ],
            correctIndex: 0,
            explanation: "Spare time artinya waktu senggang/waktu luang. Di waktu senggang kita bisa melakukan hobi.",
            difficulty: "hard",
            tags: ["vocabulary", "time"]
        },
        {
            id: "kids-13-028",
            question: "🎹 'She is good ___ playing the piano.'",
            options: ["in", "at", "on", "with"],
            correctIndex: 1,
            explanation: "Good at = pandai dalam. She is good at playing the piano = Dia pandai bermain piano.",
            difficulty: "hard",
            tags: ["grammar", "prepositions"]
        },
        {
            id: "kids-13-029",
            question: "Pilih kalimat dengan grammar yang benar:",
            options: [
                "My friends and I enjoys playing basketball every Sunday.",
                "My friends and I enjoy playing basketball every Sunday.",
                "My friends and me enjoy playing basketball every Sunday.",
                "My friend and I enjoy playing basketball every Sunday."
            ],
            correctIndex: 1,
            explanation: "My friends and I (subjek jamak) pakai 'enjoy' (bukan enjoys). I untuk subjek, bukan me.",
            difficulty: "hard",
            tags: ["grammar", "subject-pronouns"]
        },
        {
            id: "kids-13-030",
            question: "Identifikasi semua error: 'My hobby are collecting stamps and me has many stamp from different country.'",
            options: [
                "2 errors",
                "3 errors",
                "4 errors",
                "5 errors"
            ],
            correctIndex: 2,
            explanation: "Errors: 1) are → is (hobby tunggal), 2) me → I (subjek pakai I), 3) stamp → stamps (jamak), 4) country → countries (jamak).",
            difficulty: "hard",
            tags: ["grammar", "error-correction"]
        }
    ]
};
