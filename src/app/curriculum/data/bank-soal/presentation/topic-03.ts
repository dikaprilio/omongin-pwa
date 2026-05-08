import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 3,
    path: 'presentation',
    title: "Impromptu Speaking",
    totalQuestions: 30,
    questions: [
        {
            id: "pres-03-001",
            question: "What is the primary goal of Impromptu Speaking?",
            options: ["To memorize a 10-minute speech", "To speak confidently without prior preparation", "To read from a teleprompter", "To avoid speaking at all"],
            correctIndex: 1,
            explanation: "Tujuan utamanya adalah mampu bicara secara logis dan tenang meskipun tanpa persiapan.",
            difficulty: 'easy'
        },
        {
            id: "pres-03-002",
            question: "What does the 'P' in PREP stand for?",
            options: ["Preparation", "Progress", "Point", "Perfect"],
            correctIndex: 2,
            explanation: "Selalu mulai dengan 'Point' atau inti jawaban Anda agar audiens langsung paham.",
            difficulty: 'easy'
        },
        {
            id: "pres-03-003",
            question: "In the PREP formula, what is the purpose of the 'Reason' (R) section?",
            options: ["To explain WHY your point is valid", "To tell a funny joke", "To repeat the question", "To say 'I don't know'"],
            correctIndex: 0,
            explanation: "Reason memberikan logika atau alasan di balik poin yang Anda sampaikan.",
            difficulty: 'easy'
        },
        {
            id: "pres-03-004",
            question: "What is 'Tactical Stalling'?",
            options: ["Running away from the room", "Using smart phrases to buy a few seconds to think", "Pretending to have a cough", "Ignoring the person who asked"],
            correctIndex: 1,
            explanation: "Ini adalah taktik untuk memberikan otak waktu 3-5 detik untuk menyusun struktur PREP.",
            difficulty: 'medium'
        },
        {
            id: "pres-03-005",
            question: "Instead of saying 'uhmm' or 'aaa', what is a more professional alternative?",
            options: ["Speaking faster", "A silent pause", "Shouting", "Clapping your hands"],
            correctIndex: 1,
            explanation: "Diam sejenak (pause) terlihat jauh lebih berwibawa daripada menggunakan filler words yang berlebihan.",
            difficulty: 'easy'
        },
        {
            id: "pres-03-006",
            question: "Which of these is a 'Buy Time' phrase?",
            options: ["I don't know the answer.", "That's a very interesting question, let me think...", "Can you ask someone else?", "Goodbye everyone."],
            correctIndex: 1,
            explanation: "Kalimat validasi seperti ini memberi Anda waktu untuk memproses jawaban.",
            difficulty: 'easy'
        },
        {
            id: "pres-03-007",
            question: "What should you do in the 'Example' (E) part of PREP?",
            options: ["Read a dictionary", "Provide a specific story, fact, or analogy", "List 10 different topics", "Repeat the 'Reason' 5 times"],
            correctIndex: 1,
            explanation: "Contoh nyata membuat argumen Anda lebih kredibel dan mudah diingat.",
            difficulty: 'medium'
        },
        {
            id: "pres-03-008",
            question: "Why does the PREP formula end with another 'Point' (P)?",
            options: ["To confuse the audience", "To summarize and reinforce your main message", "Because the speaker forgot the middle part", "To ask for money"],
            correctIndex: 1,
            explanation: "Mengulangi poin di akhir memastikan audiens pulang dengan pesan yang jelas.",
            difficulty: 'medium'
        },
        {
            id: "pres-03-009",
            question: "The 'Perfectionist Trap' in impromptu speaking means...",
            options: ["Being too good at speaking", "Thinking you must be perfect, which leads to 'freezing'", "Having perfect grammar", "Using a perfect microphone"],
            correctIndex: 1,
            explanation: "Terlalu terobsesi pada kesempurnaan justru sering membuat otak 'hang' atau 'freeze'.",
            difficulty: 'medium'
        },
        {
            id: "pres-03-010",
            question: "What is 'The Echo' technique for buying time?",
            options: ["Repeating the question back to the asker", "Shouting in a cave", "Singing your answer", "Talking very quietly"],
            correctIndex: 0,
            explanation: "Mengulangi pertanyaan membantu mengonfirmasi pemahaman sekaligus memberi waktu berpikir.",
            difficulty: 'medium'
        },
        {
            id: "pres-03-011",
            question: "When asked a sudden update, a professional focuses on...",
            options: ["Detailed technical complaints", "The main result or progress (The Point)", "Identifying who to blame", "The history of the company"],
            correctIndex: 1,
            explanation: "Fokus pada hasil (outcome) menunjukkan kompetensi dan ketegasan.",
            difficulty: 'easy'
        },
        {
            id: "pres-03-012",
            question: "A short pause of 2-3 seconds after a question makes you look...",
            options: ["Weak and scared", "Thoughtful and confident", "Like you're sleeping", "Rude"],
            correctIndex: 1,
            explanation: "Jeda menunjukkan bahwa Anda benar-benar memikirkan jawaban Anda, bukan sekadar bicara asal.",
            difficulty: 'medium'
        },
        {
            id: "pres-03-013",
            question: "If you forget your next point while speaking, you should...",
            options: ["Panic and run", "Take a breath and recap what you just said", "Scream loudly", "Start talking about your lunch"],
            correctIndex: 1,
            explanation: "Melakukan rekap kecil membantu otak memulihkan ingatan tentang poin berikutnya.",
            difficulty: 'hard'
        },
        {
            id: "pres-03-014",
            question: "Which of these is the MOST structured response?",
            options: ["It's fine, I think. Many things happening.", "Our sales are up (P) because of the new ads (R). For example, FB ads conversion rose by 10% (E). So, it's working well (P).", "I like the new project. It's fun. We are happy.", "Maybe we can talk about it later when I'm ready."],
            correctIndex: 1,
            explanation: "Ini adalah struktur PREP yang lengkap dan logis.",
            difficulty: 'medium'
        },
        {
            id: "pres-03-015",
            question: "What is 'Mental Oxygen' in impromptu speaking?",
            options: ["Literally breathing to calm your nervous system", "Reading a book during the talk", "Drinking coffee", "Closing your eyes"],
            correctIndex: 0,
            explanation: "Bernapas dalam-dalam mengirimkan sinyal tenang ke sistem saraf agar Anda tidak panik.",
            difficulty: 'easy'
        },
        {
            id: "pres-03-016",
            question: "The first Step of the 'Anti-Freeze Checklist' is...",
            options: ["Shouting", "Deep Breath + Smile", "Apologizing", "Checking your phone"],
            correctIndex: 1,
            explanation: "Ketenangan fisik adalah dasar dari ketenangan mental.",
            difficulty: 'easy'
        },
        {
            id: "pres-03-017",
            question: "In PREP, 'Point' should be...",
            options: ["A 5-minute explanation", "One clear and concise sentence", "A question back to the audience", "A secret"],
            correctIndex: 1,
            explanation: "'Point' harus sesingkat dan sejelas mungkin agar tidak bertele-tele.",
            difficulty: 'medium'
        },
        {
            id: "pres-03-018",
            question: "When you validate a difficult question, you say...",
            options: ["That's a very challenging but fair point...", "I don't like that question.", "You are wrong.", "Ask me something else."],
            correctIndex: 0,
            explanation: "Validasi menunjukkan sikap profesional dan menghargai lawan bicara.",
            difficulty: 'medium'
        },
        {
            id: "pres-03-019",
            question: "Why should you limit yourself to ONE main point in impromptu speaking?",
            options: ["Because you're lazy", "To prevent confusing yourself and the audience", "To save battery on the mic", "To make the talk as long as possible"],
            correctIndex: 1,
            explanation: "Lebih baik satu poin yang kuat daripada lima poin yang berantakan.",
            difficulty: 'hard'
        },
        {
            id: "pres-03-020",
            question: "An 'Analogy' in the Example section helps by...",
            options: ["Making the talk confusing", "Making a complex idea easier to visualize", "Showing off your vocabulary", "Replacing the Point"],
            correctIndex: 1,
            explanation: "Analogi menyederhanakan konsep yang rumit bagi audiens.",
            difficulty: 'hard'
        },
        {
            id: "pres-03-021",
            question: "If someone interrupts you, the best reaction is...",
            options: ["Shout at them", "Pause, acknowledge, and use PREP to resume", "Crying", "Giving them the microphone"],
            correctIndex: 1,
            explanation: "Ketangguhan (resilience) dalam bicara spontan diukur dari cara Anda kembali ke alur setelah interupsi.",
            difficulty: 'hard'
        },
        {
            id: "pres-03-022",
            question: "Which of these is a 'Transition' phrase?",
            options: ["Moving from the budget to the timeline...", "Stop talking now.", "Wait for me.", "I am tired."],
            correctIndex: 0,
            explanation: "Frasa transisi membantu audiens mengikuti perpindahan logika Anda.",
            difficulty: 'medium'
        },
        {
            id: "pres-03-023",
            question: "Eye contact during impromptu speaking should be...",
            options: ["Staring at the ceiling", "Steady and focused on one person at a time", "Rapidly looking everywhere", "Focused on your shoes"],
            correctIndex: 1,
            explanation: "Kontak mata menciptakan koneksi dan kepercayaan meskipun Anda sedang berpikir spontan.",
            difficulty: 'medium'
        },
        {
            id: "pres-03-024",
            question: "Common mistake in impromptu: 'The Rambling Trap'. This means...",
            options: ["Talking too fast", "Talking for too long without a clear point", "Not talking at all", "Singing"],
            correctIndex: 1,
            explanation: "Rambling (ngalor-ngidul) terjadi jika Anda bicara sebelum menentukan 'Point' (P) Anda.",
            difficulty: 'hard'
        },
        {
            id: "pres-03-025",
            question: "Your tone of voice in a sudden update should be...",
            options: ["Low and apologizing", "Steady and confident", "High-pitched and nervous", "Very quiet"],
            correctIndex: 1,
            explanation: "Nada suara (tone) seringkali lebih penting daripada kata-kata yang diucapkan.",
            difficulty: 'medium'
        },
        {
            id: "pres-03-026",
            question: "If you don't know the answer at all, what is the 'PREP' way?",
            options: ["Lie and make up facts", "P: I don't have that data right now. R: It's still being processed. E: Such as the Q4 numbers. P: I will email you by 5 PM.", "Just stare at them until they walk away", "Say 'I'm stupid'"],
            correctIndex: 1,
            explanation: "Gunakan PREP untuk menjelaskan 'ketidaktahuan' Anda secara profesional.",
            difficulty: 'hard'
        },
        {
            id: "pres-03-027",
            question: "The 'Mission: The PREP Ninja' encourages you to...",
            options: ["Join a martial arts class", "Use PREP in simple daily conversations to build muscle memory", "Watch ninja movies", "Only talk to ninjas"],
            correctIndex: 1,
            explanation: "Bicara spontan adalah otot; ia perlu dilatih di situasi berisiko rendah (low stakes).",
            difficulty: 'easy'
        },
        {
            id: "pres-03-028",
            question: "In public speaking, 'composure' means...",
            options: ["How fast you can talk", "The ability to remain calm and in control under pressure", "Having a lot of slides", "Wearing expensive clothes"],
            correctIndex: 1,
            explanation: "Composure adalah kunci agar otak tetap bisa mengakses struktur PREP saat terdesak.",
            difficulty: 'medium'
        },
        {
            id: "pres-03-029",
            question: "Why is 'Reason' (R) essential for influencing people?",
            options: ["It sounds like a poem", "People need to understand the logic behind your decision", "It fills the time", "It's optional"],
            correctIndex: 1,
            explanation: "Logika ('Reason') adalah jembatan menuju persetujuan audiens.",
            difficulty: 'hard'
        },
        {
            id: "pres-03-030",
            question: "Final test: You are asked 'How is the new colleague?'. Correct PREP is...",
            options: ["He is nice (P). He learns fast (R). For example, he mastered the software in 2 days (E). Great addition to the team (P).", "I think he is okay. Wears a blue shirt today. Seems friendly. Maybe he is smart.", "Ask the manager.", "I haven't talked to him much yet."],
            correctIndex: 0,
            explanation: "Ini adalah jawaban yang paling lengkap, terstruktur, dan memberikan bukti nyata.",
            difficulty: 'easy'
        }
    ]
};
