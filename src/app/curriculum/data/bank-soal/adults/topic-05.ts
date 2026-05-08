/**
 * Topic 05: Asking Better Questions
 * ----------------------------------
 * 30 questions covering open-ended questions, follow-up techniques,
 * WH- questions, and conversation flow.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 5,
    path: 'speaking-adults',
    title: "Asking Better Questions",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "adult-05-001",
            question: "Mana pertanyaan yang BUKAN yes/no question?",
            options: [
                "Do you like your job?",
                "Are you from Jakarta?",
                "What do you enjoy about your work?",
                "Did you have a good weekend?"
            ],
            correctIndex: 2,
            explanation: "'What do you enjoy...' adalah WH- question yang memaksa jawaban elaboratif, bukan yes/no.",
            difficulty: "easy",
            tags: ["questions", "grammar"]
        },
        {
            id: "adult-05-002",
            question: "Transformasi terbaik untuk 'Do you travel often?' adalah:",
            options: [
                "Are you a traveler?",
                "Where's the most interesting place you've traveled to?",
                "Do you like traveling?",
                "Is traveling your hobby?"
            ],
            correctIndex: 1,
            explanation: "WH- question tentang 'most interesting place' akan menghasilkan cerita panjang, bukan yes/no.",
            difficulty: "easy",
            tags: ["questions", "conversation"]
        },
        {
            id: "adult-05-003",
            question: "Follow-up terbaik setelah 'I just got back from Bali' adalah:",
            options: [
                "Do you like Bali?",
                "Oh, nice.",
                "How was it? What did you do there?",
                "Is Bali in Indonesia?"
            ],
            correctIndex: 2,
            explanation: "'How was it? What did you do?' adalah follow-up yang menunjukkan interest dan menggali cerita.",
            difficulty: "easy",
            tags: ["follow-up", "conversation"]
        },
        {
            id: "adult-05-004",
            question: "Apa fungsi dari TED technique (Tell me more, Explain, Describe)?",
            options: [
                "Mengakhiri percakapan",
                "Menggali lebih dalam dari jawaban",
                "Memulai percakapan",
                "Mengganti topik"
            ],
            correctIndex: 1,
            explanation: "TED adalah teknik follow-up untuk meminta elaborasi dan menggali lebih dalam dari jawaban sederhana.",
            difficulty: "easy",
            tags: ["technique", "conversation"]
        },
        {
            id: "adult-05-005",
            question: "Pertanyaan mana yang paling engaging untuk small talk?",
            options: [
                "Is this your first time here?",
                "Are you enjoying the event?",
                "What brings you to this event?",
                "Do you come here often?"
            ],
            correctIndex: 2,
            explanation: "'What brings you...' adalah WH- question yang meminta cerita dan menunjukkan genuine interest.",
            difficulty: "easy",
            tags: ["small-talk", "questions"]
        },
        {
            id: "adult-05-006",
            question: "Apa yang dimaksud dengan 'interview mode'?",
            options: [
                "Bertanya dengan profesional",
                "Tanya terus tanpa sharing apa-apa",
                "Mengajukan pertanyaan sulit",
                "Mewawancarai untuk pekerjaan"
            ],
            correctIndex: 1,
            explanation: "Interview mode = tanya terus tanpa balance. Seharusnya ada exchange: Share 1, Ask 1.",
            difficulty: "easy",
            tags: ["conversation", "balance"]
        },
        {
            id: "adult-05-007",
            question: "Frasa terbaik untuk transisi ke topik baru adalah:",
            options: [
                "Stop talking about that.",
                "That reminds me...",
                "I don't care about that.",
                "Let's change topic now."
            ],
            correctIndex: 1,
            explanation: "'That reminds me...' adalah transisi yang smooth dan natural.",
            difficulty: "easy",
            tags: ["transitions", "phrases"]
        },
        {
            id: "adult-05-008",
            question: "Contoh 'Share 1, Ask 1' yang baik:",
            options: [
                "What's your name? Where do you work?",
                "I just tried this new cafe. Have you been?",
                "Do you like coffee? Do you like tea?",
                "Tell me about yourself."
            ],
            correctIndex: 1,
            explanation: "'I just tried this new cafe' (share) + 'Have you been?' (ask) = balance yang baik.",
            difficulty: "easy",
            tags: ["technique", "conversation"]
        },
        {
            id: "adult-05-009",
            question: "Pertanyaan mana yang spark emotion/memori?",
            options: [
                "Do you like traveling?",
                "What's the best trip you've ever taken?",
                "Have you been abroad?",
                "Is traveling expensive?"
            ],
            correctIndex: 1,
            explanation: "'Best trip you've ever taken' meminta superlatif dan akan menghasilkan cerita emotional.",
            difficulty: "easy",
            tags: ["questions", "emotional"]
        },
        {
            id: "adult-05-010",
            question: "Saat recovery dari pertanyaan yang awkward, gunakan:",
            options: [
                "Whatever.",
                "Sorry, that came out wrong.",
                "Forget it.",
                "Never mind."
            ],
            correctIndex: 1,
            explanation: "'Sorry, that came out wrong' adalah recovery yang graceful dan professional.",
            difficulty: "easy",
            tags: ["recovery", "phrases"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "adult-05-011",
            question: "Pertanyaan mana yang paling dalam untuk networking?",
            options: [
                "What do you do?",
                "How did you get started in this industry?",
                "Do you like your job?",
                "Where do you work?"
            ],
            correctIndex: 1,
            explanation: "'How did you get started...' meminta cerita journey, bukan cuma factual info.",
            difficulty: "medium",
            tags: ["networking", "questions"]
        },
        {
            id: "adult-05-012",
            question: "Follow-up terbaik setelah jawaban pendek 'It was good':",
            options: [
                "Okay.",
                "What was the highlight?",
                "Good to hear.",
                "I'm glad."
            ],
            correctIndex: 1,
            explanation: "'What was the highlight?' memaksa elaborasi dan menunjukkan interest lebih.",
            difficulty: "medium",
            tags: ["follow-up", "conversation"]
        },
        {
            id: "adult-05-013",
            question: "Apa yang salah dengan percakapan: 'Hi.' 'Hi.' 'How are you?' 'Good.' 'What do you do?' 'I'm a manager.'",
            options: [
                "Terlalu pendek",
                "Interview mode - tanya terus tanpa sharing",
                "Pertanyaannya salah",
                "Tidak ada masalah"
            ],
            correctIndex: 1,
            explanation: "Ini interview mode murni - tidak ada sharing, hanya tanya-tanya. Perlu balance.",
            difficulty: "medium",
            tags: ["analysis", "conversation"]
        },
        {
            id: "adult-05-014",
            question: "Saat mendengar 'I've been learning guitar', cue terbaik untuk digali adalah:",
            options: [
                "Oh, nice.",
                "How long have you been playing? What made you start?",
                "Do you like it?",
                "Can you play a song?"
            ],
            correctIndex: 1,
            explanation: "'How long' dan 'What made you start' menggali experience dan motivation.",
            difficulty: "medium",
            tags: ["cues", "listening"]
        },
        {
            id: "adult-05-015",
            question: "Pertanyaan mana yang paling personal/tidak cocok untuk stranger?",
            options: [
                "What do you think about this event?",
                "How do you know the host?",
                "What's something most people don't know about you?",
                "Where are you from?"
            ],
            correctIndex: 2,
            explanation: "'Something most people don't know about you' terlalu personal untuk stranger. Match depth dengan relationship level.",
            difficulty: "medium",
            tags: ["context", "boundaries"]
        },
        {
            id: "adult-05-016",
            question: "Frasa mana yang menunjukkan active listening sebelum follow-up?",
            options: [
                "Okay, next question.",
                "That's interesting. Why did you decide to do that?",
                "I see. Anyway...",
                "Right. So..."
            ],
            correctIndex: 1,
            explanation: "'That's interesting' menunjukkan listening + validation sebelum follow-up question.",
            difficulty: "medium",
            tags: ["listening", "follow-up"]
        },
        {
            id: "adult-05-017",
            question: "Saat kehabisan topik, teknik terbaik adalah:",
            options: [
                "End the conversation",
                "Use TED: Tell me more, Explain, Describe",
                "Keep asking random questions",
                "Talk about yourself"
            ],
            correctIndex: 1,
            explanation: "TED technique adalah jaring pengaman untuk menggali lebih dalam dari apa pun yang baru diucapkan.",
            difficulty: "medium",
            tags: ["technique", "recovery"]
        },
        {
            id: "adult-05-018",
            question: "Pertanyaan mana yang menggunakan WH- words dengan benar untuk menghindari yes/no?",
            options: [
                "Do you enjoy working here?",
                "Are you happy with your job?",
                "What do you find most rewarding about your work?",
                "Can you tell me about your job?"
            ],
            correctIndex: 2,
            explanation: "'What do you find most rewarding' memaksa jawaban elaboratif tentang values dan experience.",
            difficulty: "medium",
            tags: ["wh-questions", "grammar"]
        },
        {
            id: "adult-05-019",
            question: "Apa yang dimaksud dengan 'listening for cues'?",
            options: [
                "Mendengarkan dengan telinga",
                "Mencari kata-kata yang bisa digali lebih dalam",
                "Menunggu giliran bicara",
                "Mencatat semua yang dikatakan"
            ],
            correctIndex: 1,
            explanation: "Listening for cues = mendengarkan kata-kata yang bisa dijadikan follow-up questions.",
            difficulty: "medium",
            tags: ["listening", "technique"]
        },
        {
            id: "adult-05-020",
            question: "Frasa transisi mana yang paling smooth untuk beralih ke topik berbeda?",
            options: [
                "Stop. New topic.",
                "Speaking of which...",
                "I don't want to talk about that anymore.",
                "Anyway, whatever."
            ],
            correctIndex: 1,
            explanation: "'Speaking of which' menghubungkan dengan topik yang dibicarakan sebelum beralih.",
            difficulty: "medium",
            tags: ["transitions", "phrases"]
        },
        {
            id: "adult-05-021",
            question: "Dalam networking, urutan pertanyaan yang terbaik adalah:",
            options: [
                "Pertanyaan pribadi → Pertanyaan kerja",
                "Pertanyaan umum → Pertanyaan yang lebih spesifik/deep",
                "Pertanyaan sulit → Pertanyaan mudah",
                "Tanya semua sekaligus"
            ],
            correctIndex: 1,
            explanation: "Dari umum ke spesifik membangun rapport dulu sebelum masuk ke topik yang lebih meaningful.",
            difficulty: "medium",
            tags: ["networking", "strategy"]
        },
        {
            id: "adult-05-022",
            question: "Saat seseorang memberikan jawaban yang tidak Anda mengerti, respons terbaik adalah:",
            options: [
                "Pura-pura mengerti dan ganti topik",
                "Could you explain what you mean by that?",
                "Diam saja",
                "Katakan 'I don't care'"
            ],
            correctIndex: 1,
            explanation: "'Could you explain...' menunjukkan interest untuk mengerti dan memberikan kesempatan elaborasi.",
            difficulty: "medium",
            tags: ["clarifying", "questions"]
        },

        // === HARD (8 questions) ===
        {
            id: "adult-05-023",
            question: "Analisis: 'Do you like your job? Yes. Do you travel for work? Sometimes. Is it stressful? Not really.' Apa yang perlu diperbaiki?",
            options: [
                "Tidak ada yang salah",
                "Semua pertanyaan adalah yes/no questions yang mematikan percakapan",
                "Jawabannya terlalu singkat",
                "Orangnya tidak ramah"
            ],
            correctIndex: 1,
            explanation: "Masalahnya adalah SEMUA pertanyaan yes/no. Harus diubah ke WH- questions untuk menghidupkan percakapan.",
            difficulty: "hard",
            tags: ["analysis", "conversation"]
        },
        {
            id: "adult-05-024",
            question: "Mengapa 'What do you do?' bisa jadi conversation killer di beberapa konteks?",
            options: [
                "Pertanyaannya terlalu sulit",
                "Itu adalah stereotypical networking question yang membosankan",
                "Grammar-nya salah",
                "Tidak ada yang salah dengan pertanyaan ini"
            ],
            correctIndex: 1,
            explanation: "'What do you do?' adalah cliché. Alternatif yang lebih engaging: 'What projects are you working on?' atau 'What are you passionate about?'",
            difficulty: "hard",
            tags: ["nuance", "networking"]
        },
        {
            id: "adult-05-025",
            question: "Saat deep conversation, mengapa 'Why' questions bisa berbahaya?",
            options: [
                "Grammar-nya sulit",
                "Bisa terdengar seperti interrogasi/defensive",
                "Orang tidak tahu jawabannya",
                "Terlalu mudah"
            ],
            correctIndex: 1,
            explanation: "'Why' bisa terdengar challenging. Alternatif yang lebih soft: 'What made you...?' atau 'How did you come to...?'",
            difficulty: "hard",
            tags: ["nuance", "why-questions"]
        },
        {
            id: "adult-05-026",
            question: "Susun strategi percakapan yang baik dari awal:",
            options: [
                "Tanya nama → Tanya pekerjaan → Tanya gaji",
                "Opening + light observation → WH- question → React + Follow-up → Share 1",
                "Langsung tanya yang pribadi",
                "Tanya terus sampai mereka capek"
            ],
            correctIndex: 1,
            explanation: "Struktur yang baik: buka dengan observation, tanya WH- question, reaksi + follow-up, lalu share sesuatu tentang diri.",
            difficulty: "hard",
            tags: ["strategy", "structure"]
        },
        {
            id: "adult-05-027",
            question: "Apa keunggulan 'What was that like?' dibanding 'Did you like it?'",
            options: [
                "Lebih pendek",
                "Meminta deskripsi/pengalaman lengkap, bukan cuma yes/no",
                "Grammar-nya lebih mudah",
                "Lebih formal"
            ],
            correctIndex: 1,
            explanation: "'What was that like?' meminta deskripsi sensory dan emosional. 'Did you like it?' hanya yes/no.",
            difficulty: "hard",
            tags: ["analysis", "questions"]
        },
        {
            id: "adult-05-028",
            question: "Dalam konteks profesional, mengapa penting untuk avoid 'interview mode'?",
            options: [
                "Karena membosankan untuk interviewer",
                "Karena menunjukkan lack of social skills dan tidak membangun rapport",
                "Karena terlalu banyak pertanyaan",
                "Karena tidak professional"
            ],
            correctIndex: 1,
            explanation: "Interview mode menunjukkan lack of social awareness dan tidak membangun koneksi yang genuine.",
            difficulty: "hard",
            tags: ["professional", "rapport"]
        },
        {
            id: "adult-05-029",
            question: "Final Challenge: Percakapan paling engaging akan menggunakan:",
            options: [
                "Banyak pertanyaan",
                "Banyak cerita tentang diri sendiri",
                "Balance antara share dan ask, dengan follow-up yang thoughtful",
                "Hanya topik yang aman"
            ],
            correctIndex: 2,
            explanation: "Conversational excellence = balance antara sharing dan asking, dengan follow-up yang menunjukkan genuine interest.",
            difficulty: "hard",
            tags: ["strategy", "mastery"]
        },
        {
            id: "adult-05-030",
            question: "Identifikasi SEMUA elemen yang baik dalam: 'I just got back from Bali actually. [Share] It was amazing - the temples were breathtaking. [Elaborate] Have you been?' [Ask + Check cue]",
            options: [
                "Hanya share",
                "Share + Elaborate + Ask yang terhubung dengan cue",
                "Hanya ask",
                "Tidak ada yang istimewa"
            ],
            correctIndex: 1,
            explanation: "Ini contoh sempurna: Share tentang diri, elaborate dengan descriptive words, lalu ask yang terhubung dengan cue.",
            difficulty: "hard",
            tags: ["analysis", "mastery"]
        }
    ]
};
