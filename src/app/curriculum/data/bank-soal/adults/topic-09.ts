/**
 * Topic 09: Constructive Feedback
 * --------------------------------
 * 30 questions covering polite feedback, the sandwich method,
 * SBI model, and receiving feedback gracefully.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 9,
    path: 'speaking-adults',
    title: "Constructive Feedback",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "adult-09-001",
            question: "Pendekatan terbaik untuk memberikan kritik adalah:",
            options: [
                "Langsung katakan ini salah",
                "Fokus pada pekerjaan, bukan personality",
                "Kritik di depan umum agar mereka belajar",
                "Biarkan saja, nanti mereka sadar"
            ],
            correctIndex: 1,
            explanation: "Feedback harus fokus pada pekerjaan/behavior, bukan personal attack. Ini membuat orang lebih terbuka.",
            difficulty: "easy",
            tags: ["feedback", "approach"]
        },
        {
            id: "adult-09-002",
            question: "Frasa yang paling softening untuk saran adalah:",
            options: [
                "You must change this.",
                "Have you considered a different approach?",
                "This is wrong.",
                "You did this badly."
            ],
            correctIndex: 1,
            explanation: "'Have you considered...' adalah cara yang diplomatic untuk menyuggest perubahan tanpa memerintah.",
            difficulty: "easy",
            tags: ["softening", "phrases"]
        },
        {
            id: "adult-09-003",
            question: "Sandwich Method terdiri dari:",
            options: [
                "Kritik - positif - kritik",
                "Positif - perbaikan - positif/encouragement",
                "Kritik saja",
                "Positif saja"
            ],
            correctIndex: 1,
            explanation: "Sandwich: Bread 1 (Positif) → Filling (Area perbaikan) → Bread 2 (Encouragement).",
            difficulty: "easy",
            tags: ["sandwich", "method"]
        },
        {
            id: "adult-09-004",
            question: "SBI Model adalah singkatan dari:",
            options: [
                "Say Be Inform",
                "Situation - Behavior - Impact",
                "Speak Boldly Immediately",
                "See Believe Improve"
            ],
            correctIndex: 1,
            explanation: "SBI = Situation (konteks) - Behavior (apa yang terlihat) - Impact (dampaknya).",
            difficulty: "easy",
            tags: ["sbi", "model"]
        },
        {
            id: "adult-09-005",
            question: "Saat menerima feedback, respons pertama yang baik adalah:",
            options: [
                "Membuat alasan",
                "Mendengarkan dan mengucapkan 'Thank you for the feedback'",
                "Membela diri",
                "Mengabaikan"
            ],
            correctIndex: 1,
            explanation: "Terima feedback dengan grace. Listen fully, ucapkan thanks, baru tanya clarifying questions.",
            difficulty: "easy",
            tags: ["receiving", "feedback"]
        },
        {
            id: "adult-09-006",
            question: "Frasa mana yang BUKAN softening phrase?",
            options: [
                "Have you considered...?",
                "I was wondering if...",
                "You must...",
                "One thing to consider..."
            ],
            correctIndex: 2,
            explanation: "'You must' adalah directive yang kuat. Softening phrases membuat saran lebih gentle dan tidak memerintah.",
            difficulty: "easy",
            tags: ["softening", "phrases"]
        },
        {
            id: "adult-09-007",
            question: "Contoh feedback yang spesifik:",
            options: [
                "You're not good at this.",
                "I've noticed the report was submitted 2 days late, which affected the team's timeline.",
                "You always make mistakes.",
                "Your work is bad."
            ],
            correctIndex: 1,
            explanation: "Feedback spesifik menyebutkan behavior observable (submitted 2 days late) dan impactnya.",
            difficulty: "easy",
            tags: ["specific", "feedback"]
        },
        {
            id: "adult-09-008",
            question: "Saat feedback di email, cara membuka yang baik adalah:",
            options: [
                "Your work is terrible.",
                "Overall good work, but I'd suggest a few changes:",
                "This needs to be redone.",
                "I'm disappointed with this."
            ],
            correctIndex: 1,
            explanation: "Mulai dengan positif dan gunakan 'suggest' untuk membuat feedback lebih collaborative.",
            difficulty: "easy",
            tags: ["email", "feedback"]
        },
        {
            id: "adult-09-009",
            question: "Mengapa private feedback lebih baik daripada public criticism?",
            options: [
                "Karena lebih mudah",
                "Karena saving face - menghormati dignity orang",
                "Karena tidak ada yang perlu tahu",
                "Karena public criticism dilarang"
            ],
            correctIndex: 1,
            explanation: "Private feedback menghormati dignity dan memungkinkan orang menerima tanpa shame/embarrassment.",
            difficulty: "easy",
            tags: ["private", "culture"]
        },
        {
            id: "adult-09-010",
            question: "Frasa mana yang menunjukkan Anda mendengarkan feedback dengan terbuka?",
            options: [
                "That's not true.",
                "That's a fair point.",
                "I don't agree.",
                "You're wrong."
            ],
            correctIndex: 1,
            explanation: "'That's a fair point' menunjukkan acknowledgment dan openness, meski belum tentu full agreement.",
            difficulty: "easy",
            tags: ["receiving", "phrases"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "adult-09-011",
            question: "SBI Example yang benar:",
            options: [
                "You're always late and it's annoying.",
                "In this morning's meeting (S), you arrived 15 minutes late (B), and we had to delay the client presentation (I).",
                "I don't like your attitude.",
                "You need to improve your time management."
            ],
            correctIndex: 1,
            explanation: "Ini contoh SBI yang sempurna: Situation spesifik, Behavior observable, Impact jelas.",
            difficulty: "medium",
            tags: ["sbi", "example"]
        },
        {
            id: "adult-09-012",
            question: "Apa yang salah dengan sandwich method yang tidak authentic?",
            options: [
                "Tidak ada yang salah",
                "Positif yang dipaksakan terdengar tidak tulus",
                "Terlalu panjang",
                "Tidak efektif"
            ],
            correctIndex: 1,
            explanation: "Sandwich bisa terdengar manipulative kalau positif-nya tidak genuine. Authenticity matters.",
            difficulty: "medium",
            tags: ["sandwich", "authenticity"]
        },
        {
            id: "adult-09-013",
            question: "Cara terbaik menangani 'awkward compliments' atau pujian yang tidak nyata:",
            options: [
                "Menolak dengan keras",
                "Terima dengan anggun dan redirect",
                "Menerima dengan berlebihan",
                "Mengabaikan"
            ],
            correctIndex: 1,
            explanation: "Terima dengan 'Thank you' dan redirect ke tim atau topik lain dengan grace.",
            difficulty: "medium",
            tags: ["compliments", "handling"]
        },
        {
            id: "adult-09-014",
            question: "Mengapa 'You always' dan 'You never' harus dihindari dalam feedback?",
            options: [
                "Grammar-nya salah",
                "Sifatnya absolut dan terdengar seperti personal attack",
                "Terlalu panjang",
                "Tidak sopan"
            ],
            correctIndex: 1,
            explanation: "'Always' dan 'never' adalah generalization yang terdengar accusatory. Fokus pada specific instance.",
            difficulty: "medium",
            tags: ["generalization", "avoid"]
        },
        {
            id: "adult-09-015",
            question: "Feedback untuk pembayaran yang sensitif:",
            options: [
                "You haven't paid yet.",
                "I just wanted to follow up on the outstanding invoice.",
                "Give me the money.",
                "Pay now."
            ],
            correctIndex: 1,
            explanation: "'Follow up on outstanding invoice' adalah professional dan tidak confrontational.",
            difficulty: "medium",
            tags: ["sensitive", "payment"]
        },
        {
            id: "adult-09-016",
            question: "Saat memberi feedback positif, yang terbaik adalah:",
            options: [
                "Good job!",
                "You did a great job with the presentation visuals - they really clarified the data.",
                "Nice work.",
                "Well done."
            ],
            correctIndex: 1,
            explanation: "Specific praise ('presentation visuals', 'clarified the data') menunjukkan Anda benar-benar memperhatikan.",
            difficulty: "medium",
            tags: ["positive", "specific"]
        },
        {
            id: "adult-09-017",
            question: "Cultural consideration untuk feedback di Indonesia:",
            options: [
                "Feedback harus selalu langsung dan keras",
                "Gunakan bahasa yang lebih indirect dan private untuk saving face",
                "Feedback harus di depan umum",
                "Tidak perlu ada cultural consideration"
            ],
            correctIndex: 1,
            explanation: "Budaya Indonesia menghargai harmony dan saving face. Indirect + private approach lebih efektif.",
            difficulty: "medium",
            tags: ["culture", "indonesia"]
        },
        {
            id: "adult-09-018",
            question: "Respons terbaik saat Anda tidak setuju dengan feedback:",
            options: [
                "Argue immediately",
                "I appreciate the feedback. Let me think about it.",
                "Ignore it",
                "Defend yourself"
            ],
            correctIndex: 1,
            explanation: "Terima dengan grace, minta waktu untuk refleksi. Ini menunjukkan maturity.",
            difficulty: "medium",
            tags: ["disagree", "response"]
        },
        {
            id: "adult-09-019",
            question: "Frasa untuk minta clarification saat menerima feedback:",
            options: [
                "I don't understand.",
                "Can you give me a specific example of when this happened?",
                "Whatever.",
                "That's not me."
            ],
            correctIndex: 1,
            explanation: "Minta specific example membantu Anda mengerti dan memperbaiki dengan tepat.",
            difficulty: "medium",
            tags: ["clarification", "questions"]
        },
        {
            id: "adult-09-020",
            question: "Mengapa fokus pada 'impact' di SBI model itu penting?",
            options: [
                "Untuk membuat orang merasa bersalah",
                "Untuk membantu mereka mengerti kenapa behavior tersebut matters",
                "Untuk menunjukkan siapa bosnya",
                "Tidak penting"
            ],
            correctIndex: 1,
            explanation: "Impact membantu orang mengerti stakes dan kenapa perubahan diperlukan. Ini contextualizes feedback.",
            difficulty: "medium",
            tags: ["sbi", "impact"]
        },
        {
            id: "adult-09-021",
            question: "Feedback yang constructive harus bersifat:",
            options: [
                "Vague dan umum",
                "Specific, actionable, dan focused on behavior",
                "Personal dan judgmental",
                "Delayed dan tidak jelas"
            ],
            correctIndex: 1,
            explanation: "Constructive = specific (apa yang terjadi), actionable (bisa diperbaiki), behavior-focused (bukan personality).",
            difficulty: "medium",
            tags: ["constructive", "principles"]
        },
        {
            id: "adult-09-022",
            question: "Cara terbaik menutup percakapan feedback:",
            options: [
                "That's all.",
                "Thanks for listening. Looking forward to seeing your progress.",
                "You can go now.",
                "I hope you fix this."
            ],
            correctIndex: 1,
            explanation: "Tutup dengan appreciation dan forward-looking statement yang supportive.",
            difficulty: "medium",
            tags: ["closing", "phrases"]
        },

        // === HARD (8 questions) ===
        {
            id: "adult-09-023",
            question: "Analisis: 'You're lazy and your work is always messy. You need to change your attitude.' Apa SEMUA masalahnya?",
            options: [
                "Hanya satu masalah",
                "Personal attack, generalization ('always'), tidak specific, tidak actionable",
                "Terlalu pendek",
                "Tidak ada masalah"
            ],
            correctIndex: 1,
            explanation: "Ini personal attack ('lazy'), generalization ('always'), tidak specific (apa yang 'messy'?), dan tidak actionable.",
            difficulty: "hard",
            tags: ["analysis", "bad-example"]
        },
        {
            id: "adult-09-024",
            question: "Mengapa 'With respect, I disagree' lebih baik daripada 'You're wrong'?",
            options: [
                "Lebih panjang",
                "Menunjukkan deference sambil tetap firm - tidak confrontational",
                "Grammar-nya lebih baik",
                "Lebih formal"
            ],
            correctIndex: 1,
            explanation: "'With respect' menunjukkan you value the relationship sambil tetap standing your ground.",
            difficulty: "hard",
            tags: ["disagree", "diplomatic"]
        },
        {
            id: "adult-09-025",
            question: "Skenario: Team member selalu terlambat. Gunakan SBI:",
            options: [
                "You're always late. You need to fix this.",
                "In the past two weeks (S), you've been more than 10 minutes late to three team meetings (B), which has caused us to delay our discussions and finish late (I).",
                "You're not punctual.",
                "I don't like your lateness."
            ],
            correctIndex: 1,
            explanation: "Ini SBI yang sempurna: Situation (past two weeks), Behavior (10 mins late, 3 meetings), Impact (delay discussions).",
            difficulty: "hard",
            tags: ["sbi", "application"]
        },
        {
            id: "adult-09-026",
            question: "Apa perbedaan antara feedback dan criticism?",
            options: [
                "Tidak ada bedanya",
                "Feedback adalah constructive dengan tujuan improvement; criticism adalah negative judgment tanpa solution",
                "Feedback lebih keras",
                "Criticism lebih baik"
            ],
            correctIndex: 1,
            explanation: "Feedback = constructive, specific, actionable, future-focused. Criticism = negative, judgmental, past-focused.",
            difficulty: "hard",
            tags: ["concept", "difference"]
        },
        {
            id: "adult-09-027",
            question: "Dalam konteks Indonesia, mengapa indirect feedback bisa lebih efektif?",
            options: [
                "Karena orang Indonesia tidak pintar",
                "Karena menghormati konsep 'face' dan menjaga harmony dalam relasi",
                "Karena bahasa Inggris tidak langsung",
                "Karena tidak penting"
            ],
            correctIndex: 1,
            explanation: "Budaya Indonesia menghargai rukun dan saving face. Indirect approach menghormati nilai-nilai ini sambil tetap communicating the message.",
            difficulty: "hard",
            tags: ["culture", "effectiveness"]
        },
        {
            id: "adult-09-028",
            question: "Buat constructive feedback untuk: 'Presentasi kurang persiapan, slide berantakan, tapi ada insight yang bagus'",
            options: [
                "Your presentation was bad.",
                "Your presentation was terrible and unprepared.",
                "I really appreciated the insights you shared about the market trend. One thing to consider for next time is organizing the slides to flow more logically. Overall, great potential!",
                "The slides were messy. Fix it next time."
            ],
            correctIndex: 2,
            explanation: "Ini sandwich yang baik: Positif (insights) → Improvement (organize slides) → Encouragement (great potential).",
            difficulty: "hard",
            tags: ["application", "sandwich"]
        },
        {
            id: "adult-09-029",
            question: "Mengapa receiving feedback dengan baik adalah skill leadership?",
            options: [
                "Karena leaders tidak pernah salah",
                "Karena mature leaders tahu growth comes dari menerima input dan modeling humility",
                "Karena leaders harus mendengar semua orang",
                "Tidak penting untuk leaders"
            ],
            correctIndex: 1,
            explanation: "Leaders yang bisa menerima feedback dengan grace menunjukkan humility dan growth mindset - ini inspiring untuk tim.",
            difficulty: "hard",
            tags: ["leadership", "growth"]
        },
        {
            id: "adult-09-030",
            question: "Final Challenge: Elemen mana yang PALING penting dalam constructive feedback?",
            options: [
                "Panjang feedback",
                "Specificity + focus on behavior + actionable suggestion",
                "Tone yang keras",
                "Waktu yang tepat"
            ],
            correctIndex: 1,
            explanation: "Specificity (apa yang terjadi), behavior focus (bukan personality), dan actionable (bisa diperbaiki) adalah core dari constructive feedback.",
            difficulty: "hard",
            tags: ["mastery", "core"]
        }
    ]
};
