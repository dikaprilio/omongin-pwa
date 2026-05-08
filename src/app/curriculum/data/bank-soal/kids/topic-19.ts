/**
 * Topic 19: When I Grow Up 👨‍⚕️
 * -----------------------------
 * 30 questions about future jobs, careers, aspirations, and dreams
 * for kids ages 7-12.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 19,
    path: 'speaking-kids',
    title: "When I Grow Up 👨‍⚕️",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-19-001",
            question: "👨‍⚕️ 'When I grow up, I want to be a ___ to help sick people.'",
            options: ["teacher", "doctor", "chef", "driver"],
            correctIndex: 1,
            explanation: "Doctor (dokter) membantu orang sakit (sick people).",
            difficulty: "easy",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-19-002",
            question: "Terjemahkan: 'Saya ingin menjadi guru.'",
            options: [
                "I want to be a teacher.",
                "I wants to be a teacher.",
                "I wanting to be a teacher.",
                "I want be a teacher."
            ],
            correctIndex: 0,
            explanation: "I want to be a teacher = Saya ingin menjadi guru. Want to be = ingin menjadi.",
            difficulty: "easy",
            tags: ["grammar", "want-to"]
        },
        {
            id: "kids-19-003",
            question: "👩‍🏫 Orang yang mengajar di sekolah adalah...",
            options: ["Doctor", "Teacher", "Police", "Nurse"],
            correctIndex: 1,
            explanation: "Teacher (guru) mengajar (teach) di sekolah.",
            difficulty: "easy",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-19-004",
            question: "Pilih kata yang benar: 'She ___ to be a singer.' (Ingin)",
            options: ["want", "wants", "wanting", "wanted"],
            correctIndex: 1,
            explanation: "She wants = Dia ingin. She (tunggal) pakai wants.",
            difficulty: "easy",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-19-005",
            question: "👮 'A ___ helps keep our city safe.'",
            options: ["doctor", "police officer", "chef", "artist"],
            correctIndex: 1,
            explanation: "Police officer (polisi) menjaga keamanan kota (keep city safe).",
            difficulty: "easy",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-19-006",
            question: "🍳 'A ___ cooks delicious food in a restaurant.'",
            options: ["teacher", "chef", "pilot", "farmer"],
            correctIndex: 1,
            explanation: "Chef (koki) memasak makanan lezat (cooks delicious food).",
            difficulty: "easy",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-19-007",
            question: "'___ do you want to be when you grow up?' Pilih kata yang tepat:",
            options: ["What", "Where", "When", "Who"],
            correctIndex: 0,
            explanation: "What do you want to be? = Apa yang ingin kamu jadi? What untuk menanyakan pekerjaan.",
            difficulty: "easy",
            tags: ["grammar", "questions"]
        },
        {
            id: "kids-19-008",
            question: "✈️ 'A ___ flies airplanes.'",
            options: ["driver", "pilot", "captain", "sailor"],
            correctIndex: 1,
            explanation: "Pilot (pilot) terbangkan pesawat (flies airplanes).",
            difficulty: "easy",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-19-009",
            question: "Orang yang membuat lukisan adalah...",
            options: ["Singer", "Artist", "Dancer", "Actor"],
            correctIndex: 1,
            explanation: "Artist (seniman) membuat lukisan (paintings).",
            difficulty: "easy",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-19-010",
            question: "🚒 'A ___ drives a fire truck and puts out fires.'",
            options: ["police officer", "firefighter", "doctor", "soldier"],
            correctIndex: 1,
            explanation: "Firefighter (pemadam kebakaran) mengendarai mobil pemadam dan memadamkan api.",
            difficulty: "easy",
            tags: ["vocabulary", "jobs"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-19-011",
            question: "Pilih kalimat yang benar:",
            options: [
                "He want to be a scientist.",
                "He wants to be a scientist.",
                "He wanting to be a scientist.",
                "He wanted to be a scientist."
            ],
            correctIndex: 1,
            explanation: "He wants to be = Dia ingin menjadi. He (tunggal) pakai wants.",
            difficulty: "medium",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-19-012",
            question: "👨‍🌾 'A ___ grows vegetables and raises animals.'",
            options: ["teacher", "farmer", "engineer", "nurse"],
            correctIndex: 1,
            explanation: "Farmer (petani) menanam sayuran dan memelihara hewan.",
            difficulty: "medium",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-19-013",
            question: "'___ does your father do?' (Pekerjaan)",
            options: ["What", "Where", "When", "Who"],
            correctIndex: 0,
            explanation: "What does your father do? = Apa pekerjaan ayahmu? What untuk menanyakan pekerjaan.",
            difficulty: "medium",
            tags: ["grammar", "questions"]
        },
        {
            id: "kids-19-014",
            question: "🧑‍🔬 'A ___ works in a laboratory and does experiments.'",
            options: ["teacher", "scientist", "chef", "driver"],
            correctIndex: 1,
            explanation: "Scientist (ilmuwan) bekerja di laboratorium dan melakukan eksperimen.",
            difficulty: "medium",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-19-015",
            question: "Terjemahkan: 'Kakakku ingin menjadi perawat.'",
            options: [
                "My sister want to be a nurse.",
                "My sister wants to be a nurse.",
                "My sister wanting to be a nurse.",
                "My sister want be a nurse."
            ],
            correctIndex: 1,
            explanation: "My sister wants to be a nurse = Kakakku ingin menjadi perawat. Wants untuk she.",
            difficulty: "medium",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-19-016",
            question: "⚽ 'A ___ teaches sports and helps athletes.'",
            options: ["doctor", "coach", "police", "chef"],
            correctIndex: 1,
            explanation: "Coach (pelatih) mengajar olahraga dan membantu atlet.",
            difficulty: "medium",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-19-017",
            question: "Pilih yang benar: 'I ___ study hard to become a doctor.' (Harus)",
            options: ["can", "must", "may", "will"],
            correctIndex: 1,
            explanation: "Must = harus. I must study hard = Saya harus belajar giat.",
            difficulty: "medium",
            tags: ["grammar", "modals"]
        },
        {
            id: "kids-19-018",
            question: "🎤 'A ___ sings songs on stage.'",
            options: ["actor", "singer", "dancer", "writer"],
            correctIndex: 1,
            explanation: "Singer (penyanyi) menyanyikan lagu di atas panggung.",
            difficulty: "medium",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-19-019",
            question: "Apa arti dari 'grow up'?",
            options: [
                "Bermain",
                "Dewasa/besar",
                "Belajar",
                "Bekerja"
            ],
            correctIndex: 1,
            explanation: "Grow up artinya tumbuh besar/dewasa. When I grow up = Ketika saya dewasa.",
            difficulty: "medium",
            tags: ["vocabulary", "phrasal-verbs"]
        },
        {
            id: "kids-19-020",
            question: "🎭 'An ___ performs in movies and plays.'",
            options: ["singer", "actor", "dancer", "musician"],
            correctIndex: 1,
            explanation: "Actor (aktor) bermain di film dan pertunjukan teater.",
            difficulty: "medium",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-19-021",
            question: "Pilih kalimat yang benar:",
            options: [
                "My parents doesn't want me to be a pilot.",
                "My parents don't want me to be a pilot.",
                "My parents don't wants me to be a pilot.",
                "My parents not want me to be a pilot."
            ],
            correctIndex: 1,
            explanation: "Parents (jamak) pakai don't. Don't want = tidak ingin.",
            difficulty: "medium",
            tags: ["grammar", "negatives"]
        },
        {
            id: "kids-19-022",
            question: "📚 'A ___ writes stories and books.'",
            options: ["reader", "writer", "teacher", "librarian"],
            correctIndex: 1,
            explanation: "Writer (penulis) menulis cerita dan buku.",
            difficulty: "medium",
            tags: ["vocabulary", "jobs"]
        },

        // === HARD (8 questions) ===
        {
            id: "kids-19-023",
            question: "Susun kata berikut: 'be / want / doctor / I / to / a'",
            options: [
                "I want to be a doctor.",
                "I want be to a doctor.",
                "Want I to be a doctor.",
                "I to want be a doctor."
            ],
            correctIndex: 0,
            explanation: "I want to be a doctor = Saya ingin menjadi dokter. Want to be = ingin menjadi.",
            difficulty: "hard",
            tags: ["grammar", "sentence-structure"]
        },
        {
            id: "kids-19-024",
            question: "🏗️ 'An ___ designs buildings and bridges.'",
            options: ["artist", "architect", "engineer", "builder"],
            correctIndex: 1,
            explanation: "Architect (arsitek) merancang bangunan dan jembatan.",
            difficulty: "hard",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-19-025",
            question: "Pilih kalimat yang paling benar:",
            options: [
                "Both my sister and my brother wants to be doctors.",
                "Both my sister or my brother want to be doctors.",
                "Both my sister and my brother want to be doctors.",
                "Both my sister and my brother wanting to be doctors."
            ],
            correctIndex: 2,
            explanation: "Both...and menggunakan want (jamak) karena ada dua subjek (sister dan brother).",
            difficulty: "hard",
            tags: ["grammar", "both-and"]
        },
        {
            id: "kids-19-026",
            question: "💻 'A ___ creates computer programs and applications.'",
            options: ["gamer", "programmer", "typist", "user"],
            correctIndex: 1,
            explanation: "Programmer (programmer) membuat program dan aplikasi komputer.",
            difficulty: "hard",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-19-027",
            question: "Apa arti dari 'work hard'?",
            options: [
                "Bekerja dengan santai",
                "Bekerja keras",
                "Bekerja cepat",
                "Bekerja lambat"
            ],
            correctIndex: 1,
            explanation: "Work hard artinya bekerja keras. Hard = keras/giat.",
            difficulty: "hard",
            tags: ["vocabulary", "phrasal-verbs"]
        },
        {
            id: "kids-19-028",
            question: "🦷 'A ___ takes care of people's teeth.'",
            options: ["doctor", "dentist", "nurse", "surgeon"],
            correctIndex: 1,
            explanation: "Dentist (dokter gigi) merawat gigi orang.",
            difficulty: "hard",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-19-029",
            question: "Pilih kalimat dengan grammar yang benar:",
            options: [
                "Neither my mom nor my dad want me to be a singer.",
                "Neither my mom nor my dad wants me to be a singer.",
                "Neither my mom or my dad wants me to be a singer.",
                "Neither my mom and my dad wants me to be a singer."
            ],
            correctIndex: 1,
            explanation: "Neither...nor menggunakan wants (tunggal) karena subject terdekat adalah 'dad'.",
            difficulty: "hard",
            tags: ["grammar", "neither-nor"]
        },
        {
            id: "kids-19-030",
            question: "Identifikasi semua error: 'My friend want to be a pilots because he think it is very excited.'",
            options: [
                "2 errors",
                "3 errors",
                "4 errors",
                "5 errors"
            ],
            correctIndex: 2,
            explanation: "Errors: 1) want -> wants (friend tunggal), 2) pilots -> pilot (tunggal), 3) think -> thinks (he tunggal), 4) excited -> exciting.",
            difficulty: "hard",
            tags: ["grammar", "error-correction"]
        }
    ]
};
