import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    {
        type: 'title',
        title: "Your Elevator Pitch",
        subtitle: "Perkenalan Diri 90 Detik yang Bikin HRD Tertarik",
        teacherNote: "Goal: Murid bisa jawab 'Tell me about yourself' dalam 60-90 detik. Ini slide #1 dari core interview skills."
    },
    {
        type: 'concept',
        title: "Kenapa Ini Penting?",
        subtitle: "FIRST IMPRESSIONS",
        content: [
            "93% HRD sudah menilai kamu di 5 menit pertama 😬",
            "'Tell me about yourself' = pertanyaan PALING SERING di interview",
            "Kebanyakan orang Indonesia curhat terlalu panjang atau malah bingung mulai dari mana",
            "Kamu akan punya formula — bukan asal ngomong, tapi STRATEGI 💡"
        ],
        teacherNote: "Tanya murid: 'Pernah ditanya ini? Jawab apa?' Biasanya mereka bilang 'Saya cerita hobi' atau 'Saya bingung mau ngomong apa.'"
    },
    {
        type: 'formula',
        title: "The Present-Past-Future Formula",
        subtitle: "Rumus Rahasia Elevator Pitch",
        formula: "PRESENT → PAST → FUTURE",
        content: [
            "PRESENT: Kamu sekarang ngapain (jabatan, skill utama)",
            "PAST: Background kamu (pengalaman, pencapaian penting)",
            "FUTURE: Kenapa kamu di sini (apa yang kamu cari + kenapa perusahaan ini)"
        ],
        teacherNote: "Tekankan: INI BUKAN cerita hidup dari lahir. Ini highlight reel 60-90 detik. Minta murid hitung waktu."
    },
    {
        type: 'int-vocab',
        title: "Elevator Pitch Vocabulary",
        interviewVocab: [
            { term: "I specialize in...", meaning: "Saya ahli di bidang...", example: "I specialize in digital marketing for e-commerce brands.", category: "Present" },
            { term: "I'm currently...", meaning: "Saat ini saya...", example: "I'm currently a junior developer at a fintech startup.", category: "Present" },
            { term: "I bring X years of experience in...", meaning: "Saya membawa pengalaman X tahun di...", example: "I bring 5 years of experience in supply chain optimization.", category: "Present" },
            { term: "My background is in...", meaning: "Latar belakang saya di...", example: "My background is in hospitality management.", category: "Past" },
            { term: "Over the past X years...", meaning: "Selama X tahun terakhir...", example: "Over the past 3 years, I've managed a team of 12 people.", category: "Past" },
            { term: "One of my proudest achievements...", meaning: "Salah satu pencapaian terbaik saya...", example: "One of my proudest achievements was increasing sales by 40%.", category: "Past" },
            { term: "I'm looking to...", meaning: "Saya ingin/mencari...", example: "I'm looking to grow into a leadership role in product management.", category: "Future" },
            { term: "What excites me about this role...", meaning: "Yang menarik dari posisi ini...", example: "What excites me about this role is the opportunity to work with cross-functional teams.", category: "Future" },
            { term: "I believe I can contribute to...", meaning: "Saya yakin bisa berkontribusi untuk...", example: "I believe I can contribute to your company's mission of sustainable growth.", category: "Future" },
            { term: "I'm passionate about...", meaning: "Saya sangat tertarik dengan...", example: "I'm passionate about making technology accessible to everyone.", category: "Future" }
        ],
        teacherNote: "Bahas satu per satu. Minta murid ulang dan bikin kalimat sendiri pakai tiap frasa. Koreksi pronunciation juga."
    },
    {
        type: 'comparison',
        title: "The Amateur vs The Professional",
        comparison: [
            {
                wrong: "My name is Rina. I am 24 years old. I am from Jakarta. My hobby is reading.",
                right: "I'm Rina, a marketing graduate with 2 years of digital campaign experience."
            },
            {
                wrong: "I study accounting in university. Then I work in a company.",
                right: "Over the past 3 years, I've managed financial reporting for a $2M portfolio."
            },
            {
                wrong: "I want big salary and good company.",
                right: "I'm excited about this role because your sustainability mission aligns with my values."
            }
        ]
    },
    {
        type: 'int-scenario',
        title: "Contoh Jawaban: Tell Me About Yourself",
        interviewScenario: {
            question: "Tell me about yourself.",
            starAnswer: {
                situation: "PRESENT: I'm a recent graduate in Information Systems from Binus University, where I specialized in UI/UX design.",
                task: "PAST: During my studies, I completed 3 internships — terakhir di startup fintech, di mana saya redesign onboarding flow yang mengurangi drop-off rate 35%.",
                action: "PAST: I also led a team of 4 designers untuk capstone project — healthcare app yang sudah dipakai 500+ users.",
                result: "FUTURE: I'm looking for a junior UX designer role where I can apply my research-driven approach. Yang bikin saya tertarik di perusahaan ini adalah fokusnya di inclusive design."
            },
            tip: "Keep it under 90 seconds. Senyum, kontak mata, dan akhiri dengan menghubungkan ke perusahaan."
        },
        teacherNote: "Baca model answer bareng, lalu minta murid bikin versi mereka SENDIRI. Hitung waktunya. Kasih feedback soal struktur, bukan cuma grammar."
    },
    {
        type: 'micro-drill',
        title: "Giliran Kamu: 90-Second Pitch",
        subtitle: "Berdiri. Lihat kamera. Sampaikan elevator pitch kamu dalam 90 detik.",
        mission: [
            "Pakai formula PRESENT → PAST → FUTURE",
            "Gunakan minimal 3 frasa dari vocab hari ini",
            "Akhiri dengan menghubungkan ke perusahaan atau posisi spesifik",
            "90 detik — tutormu akan menghitung waktu! ⏱️"
        ],
        teacherNote: "Hitung waktu murid. Setelah percobaan pertama, kasih 2 feedback spesifik (1 positif, 1 perbaikan). Biarkan mereka coba lagi."
    },
    {
        type: 'recap',
        title: "Rangkuman Frasa Penting",
        recap: [
            { context: "Opening (Present)", sayThis: "I'm a [title] with [X] years of experience in...", dontSayThis: "My name is... I am from... My hobby is..." },
            { context: "Background (Past)", sayThis: "Over the past [X] years, I've [achievement]...", dontSayThis: "I studied at university and then I work..." },
            { context: "Motivation (Future)", sayThis: "I'm excited about this role because...", dontSayThis: "I want good salary and big company" },
            { context: "Closing", sayThis: "I believe I can contribute to [specific goal].", dontSayThis: "That's all, thank you." }
        ]
    }
];

export const quiz: QuizQuestion[] = [];
