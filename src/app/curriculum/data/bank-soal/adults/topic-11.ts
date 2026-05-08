/**
 * Topic 11: Presentation Basics
 * ------------------------------
 * 30 questions covering presentation structure, signposting phrases,
 * handling Q&A, and avoiding common mistakes.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 11,
    path: 'speaking-adults',
    title: "Presentation Basics",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "adult-11-001",
            question: "Struktur presentasi yang klasik adalah:",
            options: [
                "Langsung ke data",
                "Opening → Body (3 main points) → Closing",
                "Acak sesuai mood",
                "Hanya closing"
            ],
            correctIndex: 1,
            explanation: "Struktur klasik: Opening (hook + preview) → Body (3 poin) → Closing (summary + CTA).",
            difficulty: "easy",
            tags: ["structure", "basics"]
        },
        {
            id: "adult-11-002",
            question: "Apa fungsi 'signposting' dalam presentasi?",
            options: [
                "Membuat presentasi lebih panjang",
                "Memandu audience melewati struktur presentasi",
                "Hiasan saja",
                "Tidak penting"
            ],
            correctIndex: 1,
            explanation: "Signposting phrases (First, Next, In conclusion) membantu audience mengikuti alur presentasi.",
            difficulty: "easy",
            tags: ["signposting", "function"]
        },
        {
            id: "adult-11-003",
            question: "Frasa untuk membuka presentasi dengan agenda:",
            options: [
                "Let's start.",
                "Today, I'll be talking about... Here's what we'll cover...",
                "Okay, listen to me.",
                "I'm going to present now."
            ],
            correctIndex: 1,
            explanation: "State topic dan preview agenda di opening agar audience tahu what to expect.",
            difficulty: "easy",
            tags: ["opening", "phrases"]
        },
        {
            id: "adult-11-004",
            question: "Frasa transisi ke poin berikutnya:",
            options: [
                "Next.",
                "Let's move on to the next point...",
                "Now this.",
                "After that thing."
            ],
            correctIndex: 1,
            explanation: "'Let's move on to the next point' adalah transisi yang clear dan professional.",
            difficulty: "easy",
            tags: ["transitions", "phrases"]
        },
        {
            id: "adult-11-005",
            question: "10-20-30 Rule oleh Guy Kawasaki adalah:",
            options: [
                "10 speakers, 20 minutes, 30 slides",
                "10 slides, 20 minutes, 30-point font",
                "10 minutes, 20 slides, 30 people",
                "10 points, 20 words, 30 seconds"
            ],
            correctIndex: 1,
            explanation: "10 slides, 20 minutes, 30-point font minimum - formula untuk presentasi yang concise.",
            difficulty: "easy",
            tags: ["10-20-30", "rule"]
        },
        {
            id: "adult-11-006",
            question: "Cara terbaik untuk menekankan poin penting:",
            options: [
                "Bicara lebih cepat",
                "The key takeaway here is...",
                "Ulangi 10 kali",
                "Tulis kecil di slide"
            ],
            correctIndex: 1,
            explanation: "'The key takeaway here is...' adalah phrase yang signal importance.",
            difficulty: "easy",
            tags: ["emphasis", "phrases"]
        },
        {
            id: "adult-11-007",
            question: "Saat menutup presentasi dan membuka Q&A:",
            options: [
                "That's all. Any questions?",
                "That concludes my presentation. I'm happy to take any questions now.",
                "Finished. Questions?",
                "The end."
            ],
            correctIndex: 1,
            explanation: "'That concludes my presentation. I'm happy to take any questions now' adalah closing yang professional.",
            difficulty: "easy",
            tags: ["closing", "q&a"]
        },
        {
            id: "adult-11-008",
            question: "Kesalahan paling umum dalam presentasi:",
            options: [
                "Presentasi terlalu pendek",
                "Reading directly from slides",
                "Terlalu banyak gestur",
                "Bicara terlalu keras"
            ],
            correctIndex: 1,
            explanation: "Reading slides adalah kesalahan #1. Audience bisa baca sendiri - mereka butuh value tambahan dari speaker.",
            difficulty: "easy",
            tags: ["mistakes", "common"]
        },
        {
            id: "adult-11-009",
            question: "Frasa untuk merujuk ke visual/chart:",
            options: [
                "Look at this picture.",
                "As you can see here...",
                "This is a graph.",
                "See this?"
            ],
            correctIndex: 1,
            explanation: "'As you can see here' adalah cara yang smooth untuk direct attention ke visual.",
            difficulty: "easy",
            tags: ["visuals", "phrases"]
        },
        {
            id: "adult-11-010",
            question: "Cara handle pertanyaan yang tidak tahu jawabannya:",
            options: [
                "Pura-pura tahu",
                "That's a great question. Let me check and get back to you.",
                "I don't know.",
                "Next question."
            ],
            correctIndex: 1,
            explanation: "Admit dengan grace dan commit untuk follow up. Ini lebih credible daripada bluffing.",
            difficulty: "easy",
            tags: ["q&a", "unknown"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "adult-11-011",
            question: "Mengapa 'rule of 3' efektif dalam presentasi?",
            options: [
                "Karena 3 adalah angka keberuntungan",
                "Otak manusia mudah mengingat 3 poin; lebih dari itu = cognitive overload",
                "Tidak ada alasannya",
                "Karena pendek"
            ],
            correctIndex: 1,
            explanation: "Research menunjukkan otak menangkap pola '3' dengan baik. Lebih dari 3 = harder to remember.",
            difficulty: "medium",
            tags: ["rule-of-3", "psychology"]
        },
        {
            id: "adult-11-012",
            question: "Frasa untuk stall saat memikirkan jawaban:",
            options: [
                "Umm... uhh...",
                "That's a great question.",
                "(Diam panjang)",
                "I don't understand."
            ],
            correctIndex: 1,
            explanation: "'That's a great question' memberikan waktu untuk berpikir sambil tetap terdengar positive.",
            difficulty: "medium",
            tags: ["stalling", "technique"]
        },
        {
            id: "adult-11-013",
            question: "Mengapa terlalu banyak text di slide itu buruk?",
            options: [
                "Karena terlalu mudah",
                "Karena audience akan membaca, bukan mendengarkan Anda",
                "Karena terlalu panjang",
                "Tidak ada masalah"
            ],
            correctIndex: 1,
            explanation: "Slide dengan banyak text membuat audience split attention: membaca vs listening. Gunakan keywords saja.",
            difficulty: "medium",
            tags: ["slides", "design"]
        },
        {
            id: "adult-11-014",
            question: "Frasa untuk menghubungkan ke poin selanjutnya:",
            options: [
                "Okay, next.",
                "This leads us to our next point...",
                "Now the other thing.",
                "Moving."
            ],
            correctIndex: 1,
            explanation: "'This leads us to...' membuat logical connection antara poin sebelumnya dan selanjutnya.",
            difficulty: "medium",
            tags: ["transitions", "logical"]
        },
        {
            id: "adult-11-015",
            question: "Cara terbaik untuk recap/summary di akhir:",
            options: [
                "So yeah, that's it.",
                "To summarize, we've covered three key areas: X, Y, and Z.",
                "I talked about many things.",
                "You all remember, right?"
            ],
            correctIndex: 1,
            explanation: "Structured recap dengan numbered points membantu retention dan clarity.",
            difficulty: "medium",
            tags: ["recap", "summary"]
        },
        {
            id: "adult-11-016",
            question: "Mengapa font 30-point minimum direkomendasikan?",
            options: [
                "Karena terlihat besar",
                "Untuk memaksa Anda menggunakan fewer words per slide",
                "Karena orang tua butuh besar",
                "Tidak ada alasan"
            ],
            correctIndex: 1,
            explanation: "Font besar memaksa constraint: hanya keywords yang bisa masuk. Ini membuat slide lebih effective.",
            difficulty: "medium",
            tags: ["font", "design"]
        },
        {
            id: "adult-11-017",
            question: "Frasa untuk mengundang interaksi selama presentasi:",
            options: [
                "Don't interrupt me.",
                "Feel free to interrupt if you have questions.",
                "Listen only.",
                "No questions until the end."
            ],
            correctIndex: 1,
            explanation: "'Feel free to interrupt' membuat presentasi lebih conversational dan engaging.",
            difficulty: "medium",
            tags: ["interaction", "phrases"]
        },
        {
            id: "adult-11-018",
            question: "Apa yang dimaksud dengan 'rambling' dalam presentasi?",
            options: [
                "Berjalan-jalan saat bicara",
                "Berbicara tanpa struktur yang jelas, melompat-lompat",
                "Bicara dengan cepat",
                "Presentasi dengan gambar"
            ],
            correctIndex: 1,
            explanation: "Rambling = berbicara tanpa clear direction atau struktur, membuat audience bingung.",
            difficulty: "medium",
            tags: ["rambling", "structure"]
        },
        {
            id: "adult-11-019",
            question: "Cara terbaik untuk meningkatkan confidence saat presentasi:",
            options: [
                "Membaca dari script",
                "Opening yang kuat + eye contact + strong closing",
                "Bicara dengan cepat",
                "Tidak prepare"
            ],
            correctIndex: 1,
            explanation: "Strong opening builds momentum, eye contact builds connection, strong closing leaves impact.",
            difficulty: "medium",
            tags: ["confidence", "technique"]
        },
        {
            id: "adult-11-020",
            question: "Frasa untuk 'bottom line' atau kesimpulan akhir:",
            options: [
                "So...",
                "The bottom line is... / In conclusion...",
                "Finally...",
                "Last thing..."
            ],
            correctIndex: 1,
            explanation: "'The bottom line is' atau 'In conclusion' signal final takeaway yang penting.",
            difficulty: "medium",
            tags: ["closing", "phrases"]
        },
        {
            id: "adult-11-021",
            question: "Mengapa preparation adalah kunci presentasi?",
            options: [
                "Tidak penting",
                "Karena confidence datang dari preparation; Anda bisa fokus pada delivery",
                "Karena audience mengharuskan",
                "Karena wajib"
            ],
            correctIndex: 1,
            explanation: "Preparation memungkinkan Anda internalize content sehingga bisa fokus pada audience engagement.",
            difficulty: "medium",
            tags: ["preparation", "key"]
        },
        {
            id: "adult-11-022",
            question: "Saat presentasi melebihi waktu, yang terbaik adalah:",
            options: [
                "Lanjutkan sampai selesai semua slide",
                "Skip ke poin penting atau offer to continue via email",
                "Bicara lebih cepat",
                "Abaikan time limit"
            ],
            correctIndex: 1,
            explanation: "Respect audience's time. Skip non-essential atau offer follow-up untuk detail.",
            difficulty: "medium",
            tags: ["time", "management"]
        },

        // === HARD (8 questions) ===
        {
            id: "adult-11-023",
            question: "Analisis: Presentasi yang berisi 20 slide padat text, speaker membaca setiap kata, tidak ada transisi, dan berakhir dengan 'That's all.' Apa masalahnya?",
            options: [
                "Tidak ada masalah",
                "Semua: too much text, reading slides, no signposting, weak closing",
                "Hanya terlalu banyak slide",
                "Hanya closing-nya saja"
            ],
            correctIndex: 1,
            explanation: "Ini contoh presentasi yang buruk di semua aspek: design, delivery, structure, dan closing.",
            difficulty: "hard",
            tags: ["analysis", "bad-example"]
        },
        {
            id: "adult-11-024",
            question: "Mengapa storytelling lebih efektif daripada pure data dalam presentasi?",
            options: [
                "Karena data tidak penting",
                "Karena otak manusia lebih engage dengan narrative dan emotion",
                "Karena lebih mudah",
                "Karena lebih pendek"
            ],
            correctIndex: 1,
            explanation: "Neuroscience: Stories activate multiple brain areas, create emotional connection, dan improve retention.",
            difficulty: "hard",
            tags: ["storytelling", "science"]
        },
        {
            id: "adult-11-025",
            question: "Cara terbaik untuk handle hostile question di Q&A:",
            options: [
                "Defensive dan argumentatif",
                "Stay calm, acknowledge concern, address professionally",
                "Ignore pertanyaan",
                "End presentation immediately"
            ],
            correctIndex: 1,
            explanation: "Stay professional. Acknowledge emotion tanpa defensive. Address concern dengan facts.",
            difficulty: "hard",
            tags: ["hostile", "q&a"]
        },
        {
            id: "adult-11-026",
            question: "Apa perbedaan antara 'good presenter' dan 'great presenter'?",
            options: [
                "Tidak ada bedanya",
                "Great presenter membawa transformasi, bukan cuma informasi; mereka connect dan inspire",
                "Great presenter lebih lama presentasinya",
                "Great presenter lebih banyak slide"
            ],
            correctIndex: 1,
            explanation: "Good presenter delivers information. Great presenter transforms thinking, connects emotionally, inspires action.",
            difficulty: "hard",
            tags: ["greatness", "difference"]
        },
        {
            id: "adult-11-027",
            question: "Mengapa eye contact penting dalam presentasi?",
            options: [
                "Karena aturannya",
                "Karena build trust, engagement, dan connection dengan audience",
                "Karena terlihat bagus di foto",
                "Tidak penting"
            ],
            correctIndex: 1,
            explanation: "Eye contact adalah non-verbal signal of confidence, honesty, dan engagement dengan audience.",
            difficulty: "hard",
            tags: ["eye-contact", "psychology"]
        },
        {
            id: "adult-11-028",
            question: "Buat outline presentasi 3 menit yang efektif:",
            options: [
                "Data → Data → Data",
                "Hook + Problem → 3 Solutions dengan examples → Call to Action",
                "Cerita panjang lebar tanpa struktur",
                "Slide demi slide dibaca"
            ],
            correctIndex: 1,
            explanation: "Structure yang efektif: Hook audience, present problem, offer 3 solutions, end dengan CTA.",
            difficulty: "hard",
            tags: ["outline", "structure"]
        },
        {
            id: "adult-11-029",
            question: "Mengapa 'authenticity' lebih penting daripada 'perfection' dalam presentasi?",
            options: [
                "Tidak benar",
                "Karena audience connect dengan human being, bukan robot sempurna",
                "Karena perfection tidak mungkin",
                "Karena lebih mudah"
            ],
            correctIndex: 1,
            explanation: "Audience forgive mistakes tapi tidak forgive inauthenticity. Being genuine builds trust.",
            difficulty: "hard",
            tags: ["authenticity", "connection"]
        },
        {
            id: "adult-11-030",
            question: "Final Challenge: Elemen PALING penting untuk presentasi yang memorable adalah:",
            options: [
                "Slide yang bagus",
                "Clear message + emotional connection + call to action",
                "Bicara dengan cepat",
                "Lama presentasi"
            ],
            correctIndex: 1,
            explanation: "Memorable presentations have: one clear message, emotional resonance, dan clear next steps (CTA).",
            difficulty: "hard",
            tags: ["mastery", "memorable"]
        }
    ]
};
