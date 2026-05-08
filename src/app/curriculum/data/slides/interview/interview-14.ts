import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Mock Interview: FMCG Management Trainee",
        subtitle: "Session 14: The Assessment Center Simulation",
        teacherNote: "Hari ini full mock interview. Fokus: simulasi panel interview ala FMCG MT assessment. Persiapkan mental dan penilaian ketat."
    },
    {
        type: 'pres-mindset',
        title: "The Assessment Center Mindset",
        subtitle: "You're Being Watched From All Angles",
        mindset: {
            before: "Interview adalah percakapan biasa. Saya tinggal jawab pertanyaan.",
            after: "Setiap interaksi adalah assessment. Bagaimana saya berpikir, berkomunikasi, dan berkolaborasi.",
            bridgeText: "FMCG MT panels evaluate leadership potential, not just answers."
        },
        teacherNote: "Jelaskan: MT assessment center meliputi panel interview, group discussion, dan case presentation. Semua dievaluasi."
    },
    {
        type: 'pres-checklist',
        title: "Pre-Interview Checklist",
        subtitle: "Siapkan Dirimu Sekarang",
        checklist: {
            title: "FMCG MT Ready",
            items: [
                "✅ Company Research: 3 produk utama, market position, recent campaigns",
                "✅ STAR Stories: 2 cerita siap pakai (leadership + commercial)",
                "✅ Vocab Refresh: 5 FMCG terms untuk digunakan natural",
                "✅ Energy Level: FMCG suka kandidat yang vibrant dan confident"
            ]
        },
        teacherNote: "Beri murid 2 menit untuk final prep. Cek apakah mereka sudah research company."
    },

    // ==================== PHASE 2: MOCK SETUP ====================
    {
        type: 'int-mock',
        title: "Role Card: MT Candidate",
        subtitle: "Company: Unilever Indonesia (Fictional Assessment)",
        mockInterview: {
            jobTitle: "Management Trainee - Marketing Track",
            company: "Unilever Indonesia",
            context: "Kamu fresh graduate dari UI/Binus/ITB dengan pengalaman organisasi dan 1 internship di agency. Ini panel interview dengan 2 assessors: HR Manager dan Brand Director. Mereka mencari commercial acumen dan leadership potential.",
            questions: [
                "1. Why Unilever? Why this MT program specifically?",
                "2. Tell me about a time you led a team under pressure.",
                "3. How would you launch our new tea variant targeting Gen Z?",
                "4. Describe a time you had to change someone's mind.",
                "5. Where do you see yourself in 5 years within FMCG?"
            ]
        },
        teacherNote: "Jadilah assessor yang challenging tapi fair. FMCG panels biasanya friendly tapi probing."
    },
    {
        type: 'comparison',
        title: "Answer Quality: What Panels Look For",
        comparison: [
            {
                wrong: "I want to join Unilever because it's a big company with good benefits.",
                right: "I'm drawn to Unilever's purpose-driven brands and the MT program's P&L ownership track. Your sustainability mission aligns with my values."
            },
            {
                wrong: "I led my team by telling them what to do and making sure they did it.",
                right: "I facilitated a collaborative environment where each member could contribute their strengths. I focused on removing blockers and celebrating small wins."
            }
        ],
        teacherNote: "Panel FMCG mencari: purpose alignment, collaborative leadership, dan growth mindset."
    },

    // ==================== PHASE 3: SIMULATIONS ====================
    {
        type: 'simulation',
        title: "Panel Interview: Round 1",
        subtitle: "Motivation & Leadership (10 Minutes)",
        simulation: {
            role: "MT Candidate untuk Unilever",
            scenario: "Tutor sebagai panelist menanyakan: 'Why this company?' dan 'Tell me about your leadership experience.' Evaluasi struktur jawaban dan penggunaan vocab.",
            goal: "Jawab dengan struktur STAR yang jelas, pakai FMCG vocabulary, tunjukkan passion untuk industry",
            timeLimit: 600
        },
        teacherNote: "Simulasi pertama. Fokus pada clarity dan struktur. Jangan kasih feedback dulu, biarkan flow."
    },
    {
        type: 'simulation',
        title: "Case Question: Product Launch",
        subtitle: "Commercial Thinking Under Pressure (8 Minutes)",
        simulation: {
            role: "MT Candidate",
            scenario: "Tutor: 'We want to launch a new variant of our soap targeting young professionals in Jakarta. Walk me through your approach.' Ini uji commercial acumen.",
            goal: "Tunjukkan structured thinking: consumer insight → strategy → execution → metrics. Pakai framework yang jelas.",
            timeLimit: 480
        },
        teacherNote: "Dengarkan cara murid berpikir: apakah mereka mulai dari consumer? Apakah mereka consider competition? Apakah mereka punya metrics?"
    },
    {
        type: 'int-scenario',
        title: "Model Answer: Product Launch Case",
        interviewScenario: {
            question: "How would you launch a new soap variant targeting young professionals in Jakarta?",
            starAnswer: {
                situation: "SITUATION: The personal care market in Jakarta is saturated with 15+ soap brands. Young professionals (25-35) are increasingly health-conscious but time-poor.",
                task: "TASK: I need to develop a go-to-market strategy that differentiates our new variant and captures 3% market share in Year 1.",
                action: "ACTION: First, I'd conduct consumer immersions to understand their shower routines and pain points. Based on insights, I'd position the variant as 'The 2-Minute Spa Experience' — premium quality, quick usage. Channel strategy: focus on e-commerce (Tokopedia, Shopee) for convenience + sampling at gyms and co-working spaces. Marketing: influencer partnerships with fitness and productivity creators.",
                result: "RESULT: This approach targets the right consumer at the right touchpoints. I'd track awareness via brand tracking studies, trial rates via sampling redemption, and ultimately market share via Nielsen data. I project 3-4% share in Year 1 with strong retention."
            },
            tip: "Good case answers show: consumer understanding, clear strategy, specific tactics, dan measurement plan."
        },
        teacherNote: "Setelah murid mencoba, bandingkan dengan model answer. Highlight struktur dan commercial thinking."
    },
    {
        type: 'micro-drill',
        title: "Quick Thinking Drill",
        subtitle: "Handling Follow-up Questions",
        mission: [
            "Follow-up: 'What if your strategy fails in Month 3?' → Show adaptability",
            "Follow-up: 'How is this different from what Brand X is doing?' → Show competitive awareness",
            "Follow-up: 'What metrics matter most?' → Show commercial focus"
        ],
        teacherNote: "Latihan respons cepat. FMCG panels suka nanya follow-up untuk test critical thinking."
    },

    // ==================== PHASE 4: EVALUATION & WRAP-UP ====================
    {
        type: 'concept',
        title: "The FMCG MT Evaluation Rubric",
        subtitle: "How You Were Graded Today",
        content: [
            "🎯 **Commercial Acumen**: Apakah jawabanmu show business understanding? (Score 1-5)",
            "🗣️ **Communication Clarity**: Apakah struktur jelas dan vocab tepat? (Score 1-5)",
            "💡 **Problem-Solving**: Apakah approach-mu structured dan logical? (Score 1-5)",
            "🔥 **Leadership Presence**: Apakah kamu confident dan engaging? (Score 1-5)",
            "❤️ **Purpose Alignment**: Apakah kamu genuinely passionate tentang company/mission? (Score 1-5)"
        ],
        teacherNote: "Beri murid score untuk tiap kategori. Fokus pada 2 strength dan 2 improvement areas."
    },
    {
        type: 'recap',
        title: "MT Interview Success Tips",
        subtitle: "Your Action Plan",
        recap: [
            { context: "Company Knowledge", sayThis: "Research products, competitors, recent campaigns", dontSayThis: "Just read the website homepage" },
            { context: "Leadership Stories", sayThis: "Use STAR with specific team size and outcomes", dontSayThis: "Vague stories without metrics" },
            { context: "Case Questions", sayThis: "Start with consumer insight, end with metrics", dontSayThis: "Jump straight to tactics without strategy" },
            { context: "Energy Level", sayThis: "Vibrant, engaged, asking smart questions back", dontSayThis: "Flat, passive, just answering" }
        ]
    },
    {
        type: 'mission',
        title: "Your Post-Mock Action Items",
        subtitle: "Continue Building Your Edge",
        mission: [
            "📝 Reflect: Tulis 3 hal yang berhasil dan 3 yang perlu improvement dari mock hari ini",
            "🔍 Research: Pilih 2 FMCG companies dan pelajari MT program-nya detail",
            "📊 Case Practice: Coba jawab 1 case question per hari selama seminggu",
            "🎤 Record: Rekam diri menjawab 'Why you?' dan evaluasi delivery-mu",
            "📚 Read: Baca annual report atau sustainability report dari target company"
        ],
        teacherNote: "Beri murid PR konkret. FMCG MT preparation adalah marathon, bukan sprint."
    },
    {
        type: 'title',
        title: "FMCG MT: Interview Ready! 🌟",
        subtitle: "You're Equipped for the Assessment Center",
        teacherNote: "Apresiasi effort murid. Tekankan: dengan practice yang konsisten, mereka bisa lolos MT program impian mereka. Next: Banking ODP!"
    }
];

export const quiz: QuizQuestion[] = [];
