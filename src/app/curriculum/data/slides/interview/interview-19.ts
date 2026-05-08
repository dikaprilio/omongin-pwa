import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Customer Support Representative",
        subtitle: "Session 19: The Language of Service Excellence",
        teacherNote: "Goal: Murid siap menghadapi interview Customer Support Representative di BPO dan tech companies. Fokus: empathy, problem-solving, dan communication skills."
    },
    {
        type: 'concept',
        title: "The BPO & Customer Service Boom",
        subtitle: "MASSIVE OPPORTUNITY IN INDONESIA",
        content: [
            "BPO industry Indonesia tumbuh 15%+ per tahun: Teleperformance, Concentrix, Sitel 📈",
            "E-commerce global butuh agent bilingual: Shopee, Lazada, Amazon handle complaints internasional",
            "Tech companies invest in CX: Gojek, Grab, Traveloka — CS adalah competitive advantage",
            "Tes speaking ketat: recorded calls, live roleplay, grammar assessment",
            "Career path: Agent → Team Lead → Supervisor → Manager dalam 3-5 tahun"
        ],
        teacherNote: "Context: CS/BPO adalah entry point yang solid untuk karir customer-centric. English fluency adalah must-have."
    },
    {
        type: 'comparison',
        title: "The CS Mindset Check",
        comparison: [
            {
                wrong: "Saya mau kerja CS karena gampang dan nggak perlu skill khusus.",
                right: "I'm passionate about turning frustrated customers into brand advocates through empathetic problem-solving."
            },
            {
                wrong: "Saya suka chatting dan bales pesan.",
                right: "I excel at de-escalating tense situations and finding win-win solutions."
            }
        ],
        teacherNote: "CS interviews mencari: empathy, patience, problem-solving orientation. Bukan 'gampang' atau 'ngobrol doang'."
    },

    // ==================== PHASE 2: LOGIC & MECHANICS ====================
    {
        type: 'formula',
        title: "The HEARD Framework",
        subtitle: "De-escalation & Problem Resolution",
        formula: "HEAR → EMPATHIZE → APOLOGIZE → RESOLVE → DIAGNOSE",
        content: [
            "HEAR: Dengarkan keluhan sepenuhnya tanpa interrupt — customer wants to feel heard",
            "EMPATHIZE: Validasi perasaan — 'I understand how frustrating this must be'",
            "APOLOGIZE: Minta maaf untuk pengalaman buruk, bukan untuk kesalahan (jika belum jelas)",
            "RESOLVE: Tawarkan solusi konkret dengan timeline yang jelas",
            "DIAGNOSE: Setelah resolve, investigate root cause untuk mencegah recurrence"
        ],
        teacherNote: "HEARD framework dari Disney — gold standard untuk customer service. Latih sampai natural."
    },
    {
        type: 'int-vocab',
        title: "Essential CS Vocabulary",
        subtitle: "Support Excellence Terms",
        interviewVocab: [
            { term: "Ticket handling", meaning: "Penanganan tiket", example: "I resolve 50+ tickets daily with 95% satisfaction.", category: "Operations" },
            { term: "SLA", meaning: "Service Level Agreement", example: "I maintain 98% SLA compliance for first-response time.", category: "Metrics" },
            { term: "De-escalation", meaning: "Peredaan konflik", example: "I use empathy-first de-escalation to calm frustrated users.", category: "Skills" },
            { term: "CSAT", meaning: "Customer Satisfaction Score", example: "My average CSAT score is 4.8 out of 5.", category: "Metrics" },
            { term: "First Contact Resolution", meaning: "Penyelesaian kontak pertama", example: "I achieve 80% FCR by thoroughly diagnosing issues upfront.", category: "Metrics" },
            { term: "Empathy language", meaning: "Bahasa empati", example: "I always acknowledge the customer's frustration first.", category: "Skills" },
            { term: "Escalation process", meaning: "Proses eskalasi", example: "I follow a clear escalation matrix for complex issues.", category: "Process" },
            { term: "Knowledge base", meaning: "Basis pengetahuan", example: "I contribute to our knowledge base with 20+ new articles.", category: "Resources" }
        ],
        teacherNote: "CS punya metrics yang spesifik: SLA, CSAT, FCR. Murid harus pahami dan bisa articulate."
    },
    {
        type: 'concept',
        title: "The Language of Empathy",
        subtitle: "PHRASES THAT DE-ESCALATE",
        content: [
            "✅ 'I completely understand how frustrating this must be for you.'",
            "✅ 'Thank you for bringing this to my attention.'",
            "✅ 'I would feel the same way in your situation.'",
            "✅ 'Let me take ownership of this and find a solution.'",
            "✅ 'Here's what I can do for you right now...'",
            "❌ Avoid: 'Calm down', 'That's our policy', 'There's nothing I can do'"
        ],
        teacherNote: "Empathy language adalah skill yang bisa dipelajari. Latih pronunciation dan intonation-nya."
    },

    // ==================== PHASE 3: PRACTICE ====================
    {
        type: 'int-scenario',
        title: "Scenario: Angry Customer Refund",
        subtitle: "Pertanyaan: 'How would you handle an angry customer demanding a refund?'",
        interviewScenario: {
            question: "A customer is yelling about a defective product and demanding immediate refund. How do you handle it?",
            starAnswer: {
                situation: "SITUATION: Customer received a defective item after waiting 5 days. They're frustrated and threatening to post negative reviews.",
                task: "TASK: I need to de-escalate, show empathy, and resolve within company policy while retaining the customer.",
                action: "ACTION: First, I let them vent completely without interrupting. Then: 'I sincerely apologize for this experience — receiving a defective item after waiting is absolutely unacceptable. I take full ownership of resolving this. I'm issuing an immediate refund to your original payment method, which will process within 24 hours. Additionally, I'm sending a replacement with express shipping at no charge. You'll receive tracking within 2 hours.'",
                result: "RESULT: The customer calmed down and thanked me for the quick resolution. They updated their review to mention excellent customer service. This approach turned a detractor into a promoter."
            },
            tip: "Speed of resolution + empathy = customer retention. Never make customer feel like they're being difficult."
        },
        teacherNote: "Highlight: acknowledge, apologize, take ownership, offer solution. Jangan defensive atau blame customer."
    },
    {
        type: 'int-scenario',
        title: "Scenario: When You Can't Solve",
        subtitle: "Pertanyaan: 'What if you don't know the answer?'",
        interviewScenario: {
            question: "How do you handle a question you don't know the answer to?",
            starAnswer: {
                situation: "SITUATION: A customer asks about a complex technical integration that is beyond my knowledge base.",
                task: "TASK: I need to be honest about my limitations while ensuring the customer gets accurate information.",
                action: "ACTION: I say: 'That's an excellent question about our API integration. I want to give you the most accurate information, so I'm going to connect you with our technical specialist who can walk you through this in detail. Let me brief them on your specific use case first so you don't have to repeat yourself. Can I place you on a brief 2-minute hold while I arrange this?'",
                result: "RESULT: Customers appreciate honesty and efficiency. I followed up to ensure the handoff was smooth and the customer was satisfied. I also added this scenario to my personal notes for future reference."
            },
            tip: "It's okay not to know everything. What matters is how you handle it — honesty, efficiency, and follow-through."
        },
        teacherNote: "Key: honesty + action. Jangan bluff atau keep customer waiting tanpa update."
    },
    {
        type: 'comparison',
        title: "CS Language Upgrade",
        comparison: [
            {
                wrong: "I don't know. You have to wait.",
                right: "Let me find that information for you. I'll have an update within 5 minutes."
            },
            {
                wrong: "That's not my job. Call someone else.",
                right: "I'd be happy to connect you with the right team. Let me transfer you now."
            },
            {
                wrong: "Calm down. It's not that serious.",
                right: "I completely understand your frustration, and I'm here to make this right."
            }
        ],
        teacherNote: "Professional CS language: positive, solution-oriented, dan mengambil ownership."
    },

    // ==================== PHASE 4: WRAP-UP ====================
    {
        type: 'micro-drill',
        title: "Empathy Phrase Practice",
        subtitle: "Transform These Responses",
        mission: [
            "'Nggak bisa refund' → pakai empathy + alternative solution",
            "'Itu bukan salah kami' → pakai acknowledge + ownership",
            "'Anda harus tunggu' → pakai specific timeline + proactive update"
        ],
        teacherNote: "Drill cepat. CS adalah tentang language framing — same message, different delivery = different outcome."
    },
    {
        type: 'recap',
        title: "CS Interview Essentials",
        recap: [
            { context: "Empathy", sayThis: "I understand, I apologize, Let me help", dontSayThis: "Calm down, That's policy, Not my job" },
            { context: "Metrics", sayThis: "CSAT, SLA, FCR, ticket resolution time", dontSayThis: "Banyak customer, cepat selesai" },
            { context: "Resolution", sayThis: "Ownership, clear timeline, follow-up", dontSayThis: "Wait, someone else will handle" },
            { context: "Attitude", sayThis: "Patience, resilience, customer-first", dontSayThis: "Easy job, just chatting" }
        ]
    },
    {
        type: 'mission',
        title: "Prep for CS Mock Interview",
        subtitle: "Session 20 Preparation",
        mission: [
            "Practice HEARD framework dengan 3 skenario berbeda (refund, delay, defect)",
            "Pelajari CS metrics: apa itu CSAT, NPS, FCR, dan kenapa penting",
            "Research 2 BPO companies atau tech CS teams (Gojek, Grab, Shopee)",
            "Latih pronunciation empathy phrases sampai natural",
            "Siapkan cerita: satu tentang difficult customer yang kamu turn around"
        ],
        teacherNote: "Persiapkan murid untuk mock interview lengkap di session 20. Roleplay akan sangat intensif."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Apa arti 'First Contact Resolution' (FCR)?",
        options: [
            "Waktu respon pertama ke customer",
            "Persentase masalah yang terselesaikan dalam kontak pertama tanpa follow-up",
            "Jumlah tiket yang ditangani per hari",
            "Rating kepuasan customer"
        ],
        correctIndex: 1,
        explanation: "FCR (First Contact Resolution) adalah persentase kasus yang terselesaikan dalam interaksi pertama tanpa perlu eskalasi atau follow-up. FCR tinggi = efisiensi CS yang baik."
    },
    {
        question: "Dalam HEARD framework, apa yang dilakukan di tahap 'Empathize'?",
        options: [
            "Menjelaskan kebijakan perusahaan",
            "Meminta maaf untuk kesalahan yang terjadi",
            "Mengakui dan memvalidasi perasaan customer",
            "Menawarkan solusi konkret"
        ],
        correctIndex: 2,
        explanation: "Empathize berarti mengakui dan memvalidasi perasaan customer — membuat mereka feel heard dan understood sebelum masuk ke problem-solving."
    },
    {
        question: "Mana yang lebih baik untuk de-escalation?",
        options: [
            "Please calm down and listen to me",
            "I completely understand how frustrating this must be for you",
            "That's our policy, I can't help you",
            "You need to be more patient"
        ],
        correctIndex: 1,
        explanation: "'I completely understand how frustrating this must be' adalah empathy statement yang menunjukkan kamu acknowledge perasaan customer tanpa being defensive."
    }
];
