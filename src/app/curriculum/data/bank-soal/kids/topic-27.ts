import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 27,
    path: 'speaking-kids',
    title: "Design Your Dream School 🏫",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-27-001",
            question: "Apa arti dari 'dream'?",
            options: [
                "Mimpi/impian",
                "Kenyataan",
                "Masalah",
                "Takut"
            ],
            correctIndex: 0,
            explanation: "'Dream' artinya mimpi atau impian (sesuatu yang diinginkan).",
            difficulty: "easy"
        },
        {
            id: "kids-27-002",
            question: "Pilih kata yang berarti MENDESAIN:",
            options: ["destroy", "design", "break", "forget"],
            correctIndex: 1,
            explanation: "'Design' artinya mendesain/merancang.",
            difficulty: "easy"
        },
        {
            id: "kids-27-003",
            question: "Bahasa Indonesia dari 'In my dream school...' adalah:",
            options: [
                "Di sekolah nyataku...",
                "Di sekolah impianku...",
                "Di sekolah lamaku...",
                "Di sekolah temanku..."
            ],
            correctIndex: 1,
            explanation: "'Dream school' artinya sekolah impian (sekolah yang ideal).",
            difficulty: "easy"
        },
        {
            id: "kids-27-004",
            question: "Pilih fasilitas yang ada di sekolah:",
            options: ["swimming pool", "rocket ship", "volcano", "spaceship"],
            correctIndex: 0,
            explanation: "'Swimming pool' (kolam renang) bisa ada di sekolah, lainnya tidak realistis.",
            difficulty: "easy"
        },
        {
            id: "kids-27-005",
            question: "Apa arti dari 'classroom'?",
            options: [
                "Ruang kelas",
                "Ruang guru",
                "Ruang perpustakaan",
                "Ruang kantin"
            ],
            correctIndex: 0,
            explanation: "'Classroom' artinya ruang kelas.",
            difficulty: "easy"
        },
        {
            id: "kids-27-006",
            question: "Lengkapi: 'My dream school ___ a big library.'",
            options: ["have", "has", "is", "are"],
            correctIndex: 1,
            explanation: "Subjek tunggal 'school' menggunakan 'has' (punya).",
            difficulty: "easy"
        },
        {
            id: "kids-27-007",
            question: "Bahasa Inggris dari 'Taman bermain' adalah:",
            options: [
                "Playground",
                "Classroom",
                "Library",
                "Canteen"
            ],
            correctIndex: 0,
            explanation: "'Playground' = taman bermain/playground.",
            difficulty: "easy"
        },
        {
            id: "kids-27-008",
            question: "Pilih kata yang BUKAN bagian dari sekolah:",
            options: ["library", "canteen", "bedroom", "laboratory"],
            correctIndex: 2,
            explanation: "'Bedroom' (kamar tidur) ada di rumah, bukan di sekolah.",
            difficulty: "easy"
        },
        {
            id: "kids-27-009",
            question: "Apa arti dari 'would have'?",
            options: [
                "Akan punya (dalam imajinasi)",
                "Sudah punya",
                "Tidak punya",
                "Baru saja punya"
            ],
            correctIndex: 0,
            explanation: "'Would have' digunakan untuk menggambarkan sesuatu yang kita bayangkan/inginkan.",
            difficulty: "easy"
        },
        {
            id: "kids-27-010",
            question: "Pilih kalimat yang benar:",
            options: [
                "In my dream school, there is a swimming pool.",
                "In my dream school, there are a swimming pool.",
                "In my dream school, there be a swimming pool.",
                "In my dream school, there am a swimming pool."
            ],
            correctIndex: 0,
            explanation: "Untuk tunggal: 'there is'. Untuk jamak: 'there are'.",
            difficulty: "easy"
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-27-011",
            question: "Pilih fasilitas yang BAGUS untuk sekolah impian:",
            options: [
                "Kamar mandi kotor",
                "Perpustakaan lengkap dengan buku menarik",
                "Kursi rusak",
                "Papan tulis pecah"
            ],
            correctIndex: 1,
            explanation: "Perpustakaan lengkap adalah fasilitas yang bagus untuk sekolah.",
            difficulty: "medium"
        },
        {
            id: "kids-27-012",
            question: "Lengkapi: 'There ___ many colorful classrooms.'",
            options: ["is", "are", "am", "be"],
            correctIndex: 1,
            explanation: "Untuk jamak 'many classrooms', gunakan 'there are'.",
            difficulty: "medium"
        },
        {
            id: "kids-27-013",
            question: "Bahasa Indonesia dari 'It would be amazing if...':",
            options: [
                "Akan luar biasa jika...",
                "Sangat buruk jika...",
                "Tidak mungkin jika...",
                "Sangat biasa jika..."
            ],
            correctIndex: 0,
            explanation: "'It would be amazing if...' = Akan luar biasa jika...",
            difficulty: "medium"
        },
        {
            id: "kids-27-014",
            question: "Pilih kata yang menggambarkan tempat NYAMAN:",
            options: ["uncomfortable", "cozy", "crowded", "noisy"],
            correctIndex: 1,
            explanation: "'Cozy' artinya nyaman dan hangat.",
            difficulty: "medium"
        },
        {
            id: "kids-27-015",
            question: "Apa arti dari 'facilities'?",
            options: [
                "Fasilitas/sarana",
                "Guru",
                "Murid",
                "Pelajaran"
            ],
            correctIndex: 0,
            explanation: "'Facilities' artinya fasilitas atau sarana prasarana.",
            difficulty: "medium"
        },
        {
            id: "kids-27-016",
            question: "Lengkapi: 'My dream school would ___ a music room.'",
            options: ["have", "has", "having", "to have"],
            correctIndex: 0,
            explanation: "Setelah 'would', gunakan kata kerja dasar (have, play, be).",
            difficulty: "medium"
        },
        {
            id: "kids-27-017",
            question: "Bahasa Inggris dari 'Laboratorium sains' adalah:",
            options: [
                "Science laboratory",
                "Music room",
                "Art studio",
                "Computer room"
            ],
            correctIndex: 0,
            explanation: "'Science laboratory' atau 'science lab' = laboratorium sains.",
            difficulty: "medium"
        },
        {
            id: "kids-27-018",
            question: "Pilih kalimat yang menggunakan 'there would be' dengan benar:",
            options: [
                "There would be many trees.",
                "There would be a lot of students.",
                "There would be a big garden.",
                "Semua benar"
            ],
            correctIndex: 3,
            explanation: "Semua kalimat menggunakan 'there would be' dengan benar untuk imajinasi.",
            difficulty: "medium"
        },
        {
            id: "kids-27-019",
            question: "Apa arti dari 'modern'?",
            options: [
                "Kuno/lama",
                "Modern/canggih",
                "Rusak",
                "Kotor"
            ],
            correctIndex: 1,
            explanation: "'Modern' artinya modern atau canggih (teknologi baru).",
            difficulty: "medium"
        },
        {
            id: "kids-27-020",
            question: "Pilih kata yang sinonim dengan 'beautiful':",
            options: ["ugly", "pretty", "dirty", "old"],
            correctIndex: 1,
            explanation: "'Pretty' dan 'beautiful' sama-sama artinya cantik/indah.",
            difficulty: "medium"
        },
        {
            id: "kids-27-021",
            question: "Lengkapi: 'The classrooms ___ big windows.'",
            options: ["have", "has", "is", "was"],
            correctIndex: 0,
            explanation: "Subjek jamak 'classrooms' menggunakan 'have'.",
            difficulty: "medium"
        },
        {
            id: "kids-27-022",
            question: "Bahasa Indonesia dari 'My ideal school would have...':",
            options: [
                "Sekolah nyataku punya...",
                "Sekolah idealku akan punya...",
                "Sekolah temanku punya...",
                "Sekolah lama ku punya..."
            ],
            correctIndex: 1,
            explanation: "'My ideal school would have...' = Sekolah idealku akan punya...",
            difficulty: "medium"
        },

        // === HARD (8 questions) ===
        {
            id: "kids-27-023",
            question: "Susun kalimat: 'would / school / my / have / dream / a / pool / swimming'",
            options: [
                "My dream school would have a swimming pool.",
                "My school dream would have a swimming pool.",
                "Would my dream school have a swimming pool.",
                "A swimming pool my dream school would have."
            ],
            correctIndex: 0,
            explanation: "Struktur: My dream school (subjek) + would have (kata kerja) + a swimming pool (objek).",
            difficulty: "hard"
        },
        {
            id: "kids-27-024",
            question: "Pilih deskripsi sekolah impian yang PALING detail dan menarik:",
            options: [
                "My school is big.",
                "My dream school would have a spacious library with comfortable bean bags, thousands of colorful books, and big windows that let in lots of natural sunlight.",
                "My school has books.",
                "School is nice."
            ],
            correctIndex: 1,
            explanation: "Deskripsi dengan detail spesifik (bean bags, thousands of books, natural sunlight) lebih menarik!",
            difficulty: "hard"
        },
        {
            id: "kids-27-025",
            question: "Apa arti dari 'state-of-the-art'?",
            options: [
                "Kuno",
                "Paling mutakhir/canggih",
                "Rusak",
                "Biasa saja"
            ],
            correctIndex: 1,
            explanation: "'State-of-the-art' artinya paling mutakhir/teknologi terbaru.",
            difficulty: "hard"
        },
        {
            id: "kids-27-026",
            question: "Pilih kata yang BUKAN kata sifat positif untuk menggambarkan bangunan:",
            options: ["spacious", "cramped", "bright", "airy"],
            correctIndex: 1,
            explanation: "'Cramped' artinya sempit/sempit sesak (negatif).",
            difficulty: "hard"
        },
        {
            id: "kids-27-027",
            question: "Lengkapi: 'If I could design my own school, it ___ the best school ever!'",
            options: ["is", "would be", "was", "will be"],
            correctIndex: 1,
            explanation: "Untuk conditional (if I could), gunakan 'would be'.",
            difficulty: "hard"
        },
        {
            id: "kids-27-028",
            question: "Bahasa Indonesia dari 'environmentally friendly':",
            options: [
                "Ramah lingkungan",
                "Tidak ramah",
                "Berbahaya",
                "Kotor"
            ],
            correctIndex: 0,
            explanation: "'Environmentally friendly' artinya ramah lingkungan (tidak merusak alam).",
            difficulty: "hard"
        },
        {
            id: "kids-27-029",
            question: "Pilih fasilitas yang paling INOVATIF untuk sekolah:",
            options: [
                "Meja dan kursi biasa",
                "Rooftop garden where students can grow vegetables and learn about sustainable farming while enjoying fresh air",
                "Papan tulis putih",
                "Lemari buku"
            ],
            correctIndex: 1,
            explanation: "Rooftop garden untuk belajar bertani adalah ide inovatif dan unik!",
            difficulty: "hard"
        },
        {
            id: "kids-27-030",
            question: " ",
            options: [
                "My school is nice and big.",
                "In my dream school, there would be a giant treehouse library where we could read while listening to birds, a swimming pool with a water slide, robots that help us carry heavy books, and a garden where we grow our own lunch vegetables!",
                "I want a big school.",
                "School should have many rooms."
            ],
            correctIndex: 1,
            explanation: "Deskripsi lengkap dengan banyak detail kreatif dan unik adalah yang terbaik!",
            difficulty: "hard"
        }
    ]
};


