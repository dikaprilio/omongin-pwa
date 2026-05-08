import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Management Associate: Startup Track",
        subtitle: "Session 17: The Startup Mindset & Language",
        teacherNote: "Goal: Murid siap menghadapi interview Management Associate/Leadership Program di startup Indonesia (Gojek, Tokopedia, Traveloka). Fokus: speed, ambiguity, dan growth mindset."
    },
    {
        type: 'concept',
        title: "Startup vs Corporate: The Key Differences",
        subtitle: "WHY STARTUP?",
        content: [
            "Speed: Decision-making dalam jam/hari, bukan minggu/bulan ⚡",
            "Ambiguity: Scope kerja tidak jelas, sering berubah, harus adaptable",
            "Impact: Kerja kamu langsung terlihat impact-nya ke product/company",
            "Growth: Learning curve curam, exposure ke multiple functions cepat",
            "English: Wajib fluent — investor calls, regional teams, documentation"
        ],
        teacherNote: "Startup mencari kandidat yang comfortable dengan chaos dan uncertainty. Bukan untuk yang suka struktur rigid."
    },
    {
        type: 'comparison',
        title: "The Startup Candidate Trap",
        comparison: [
            {
                wrong: "Saya mau kerja di startup karena dress code-nya santai dan ada free food.",
                right: "I'm drawn to startup environments where I can wear multiple hats and see direct impact from my work."
            },
            {
                wrong: "Saya suka kerja santai tanpa banyak aturan.",
                right: "I thrive in high-ownership environments where I can move fast and take initiative."
            }
        ],
        teacherNote: "Startup interviews mencari: ownership, speed, dan comfort dengan ambiguity. Bukan 'santai' atau 'tidak ada aturan'."
    },

    // ==================== PHASE 2: LOGIC & MECHANICS ====================
    {
        type: 'formula',
        title: "The Startup Answer Formula",
        subtitle: "Bias for Action + Data-Driven + Ownership",
        formula: "ACTION → LEARN → ITERATE",
        content: [
            "ACTION: Jangan nunggu perfect — lakukan sesuatu dengan resources yang ada",
            "LEARN: Measure results, gather feedback, identify what works",
            "ITERATE: Improve quickly based on learnings, repeat cycle"
        ],
        teacherNote: "Startup value speed of execution. 'Done is better than perfect' adalah mindset yang dicari."
    },
    {
        type: 'int-vocab',
        title: "Startup Essentials Vocabulary",
        subtitle: "MA Program Must-Know Terms",
        interviewVocab: [
            { term: "Ambiguity tolerance", meaning: "Toleransi ketidakpastian", example: "I thrive in ambiguous environments with shifting priorities.", category: "Mindset" },
            { term: "MRR / ARR", meaning: "Monthly/Annual Recurring Revenue", example: "I helped grow MRR from $50K to $200K in 6 months.", category: "Metrics" },
            { term: "CAC", meaning: "Customer Acquisition Cost", example: "I reduced CAC by 40% through organic growth strategies.", category: "Metrics" },
            { term: "Churn rate", meaning: "Tingkat kehilangan pelanggan", example: "I implemented retention programs that cut churn by 25%.", category: "Metrics" },
            { term: "Product-market fit", meaning: "Kesesuaian produk-pasar", example: "We validated product-market fit through 200 user interviews.", category: "Product" },
            { term: "OKR", meaning: "Objectives and Key Results", example: "I set quarterly OKRs aligned with company north-star metric.", category: "Framework" },
            { term: "Growth hacking", meaning: "Pertumbuhan cepat", example: "I ran growth experiments that doubled sign-ups in 3 weeks.", category: "Growth" },
            { term: "Lean methodology", meaning: "Metodologi ramping", example: "We follow lean methodology — build, measure, learn.", category: "Process" }
        ],
        teacherNote: "Startup punya vocab yang unique. Minta murid pahami MRR, CAC, churn — metrics yang sangat penting."
    },
    {
        type: 'concept',
        title: "Startup Metrics That Matter",
        subtitle: "KNOW YOUR NUMBERS",
        content: [
            "📈 **Growth Metrics**: MAU (Monthly Active Users), revenue growth %, market expansion",
            "💰 **Unit Economics**: CAC < LTV (Lifetime Value) — business model sustainability",
            "🔄 **Retention**: Churn rate, repeat purchase rate, NPS (Net Promoter Score)",
            "⚡ **Efficiency**: Burn rate, runway, payback period for CAC",
            "🎯 **Engagement**: DAU/MAU ratio, session duration, feature adoption"
        ],
        teacherNote: "Startup MA suka kandidat yang 'numbers-oriented'. Understanding metrics menunjukkan business sense."
    },

    // ==================== PHASE 3: PRACTICE ====================
    {
        type: 'int-scenario',
        title: "Scenario: Prioritization Under Chaos",
        subtitle: "Pertanyaan: 'How do you prioritize when everything is urgent?'",
        interviewScenario: {
            question: "In startups, everything seems urgent. How do you prioritize?",
            starAnswer: {
                situation: "SITUATION: During a product launch, I had to balance fixing critical bugs, preparing marketing materials, and onboarding a new team member — all with the same deadline.",
                task: "TASK: I needed to deliver maximum impact without burning out or compromising quality.",
                action: "ACTION: First, I aligned with my manager on the single most important metric for the week — user activation. I prioritized tasks that directly impacted activation (critical bugs > onboarding > marketing). I negotiated deadline extensions for non-critical items. I also delegated the onboarding documentation to a peer in exchange for helping them later.",
                result: "RESULT: We hit our activation target with zero critical bugs. The delayed marketing materials had no impact because the product quality drove organic sharing. My manager praised my ruthless prioritization."
            },
            tip: "Startup prioritization: align on north star metric, be willing to say no, and leverage your network."
        },
        teacherNote: "Key startup skill: ruthless prioritization. Murid harus tunjukkan mereka bisa focus pada what matters."
    },
    {
        type: 'int-scenario',
        title: "Scenario: Failure & Recovery",
        subtitle: "Pertanyaan: 'Tell me about a time you failed fast'",
        interviewScenario: {
            question: "Tell me about a time you failed and how you recovered quickly.",
            starAnswer: {
                situation: "SITUATION: I launched a referral program that I believed would drive 20% growth. After 2 weeks, sign-ups were only 2% higher than baseline.",
                task: "TASK: I needed to acknowledge the failure, understand why, and pivot quickly.",
                action: "ACTION: I immediately analyzed the data — the referral reward wasn't attractive enough compared to competitors. Within 48 hours, I proposed a new structure to my manager. We A/B tested 3 reward variants. I also interviewed 10 users who didn't refer to understand friction points.",
                result: "RESULT: The revised program achieved 35% growth. More importantly, I documented the learnings in a 'failure post-mortem' that helped other teams avoid similar mistakes. My manager appreciated the speed of iteration and transparency."
            },
            tip: "Startups celebrate 'intelligent failures' — quick experiments that generate learning. Show you fail fast and iterate."
        },
        teacherNote: "Startup culture: failing is okay if you learn fast. Murid harus comfort sharing failures dan showing growth."
    },
    {
        type: 'comparison',
        title: "Startup Language Upgrade",
        comparison: [
            {
                wrong: "I wait for my boss to tell me what to do.",
                right: "I take initiative and own outcomes, escalating only when blocked."
            },
            {
                wrong: "This is not my job description.",
                right: "I identify gaps and fill them, regardless of role boundaries."
            },
            {
                wrong: "We need more time to plan this perfectly.",
                right: "Let's ship an MVP and iterate based on user feedback."
            }
        ],
        teacherNote: "Startup values: ownership, initiative, speed. Hindari language yang terdengar passive atau rigid."
    },

    // ==================== PHASE 4: WRAP-UP ====================
    {
        type: 'micro-drill',
        title: "Startup Vocab Integration",
        subtitle: "Transform These Mindsets",
        mission: [
            "'Saya tunggu instruksi' → demonstrate 'bias for action'",
            "'Saya kerja di satu departemen' → explain 'cross-functional collaboration'",
            "'Saya suka kerja terstruktur' → reframe 'comfortable with ambiguity'",
            "'Saya mau hasil sempurna' → pivot 'iterate based on feedback'"
        ],
        teacherNote: "Latihan mengubah corporate mindset ke startup mindset. Ini penting untuk culture fit."
    },
    {
        type: 'recap',
        title: "Startup MA Interview Essentials",
        recap: [
            { context: "Mindset", sayThis: "Ownership, ambiguity tolerance, bias for action", dontSayThis: "Wait for instructions, need clear structure" },
            { context: "Metrics", sayThis: "MRR, CAC, churn, growth rate", dontSayThis: "Revenue naik, banyak pelanggan" },
            { context: "Approach", sayThis: "Experiment, learn fast, iterate", dontSayThis: "Plan everything, avoid mistakes" },
            { context: "Impact", sayThis: "Direct contribution to product/company", dontSayThis: "Just doing my job" }
        ]
    },
    {
        type: 'mission',
        title: "Prep for Startup MA Mock Interview",
        subtitle: "Session 18 Preparation",
        mission: [
            "Research 2 Indonesian startups: understand their product, business model, dan recent news",
            "Pelajari 1 startup metrics dashboard (contoh: apa itu 'healthy' CAC untuk e-commerce?)",
            "Siapkan cerita: satu tentang moving fast, satu tentang handling ambiguity",
            "Practice 'product critique': pilih 1 app, analyze what works and what doesn't",
            "Follow podcast/blog founders Indonesia untuk understand startup mindset"
        ],
        teacherNote: "Persiapkan murid untuk mock interview di session 18. Startup interviews sering include product case questions."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Apa yang dimaksud dengan 'product-market fit'?",
        options: [
            "Produk yang paling murah di pasaran",
            "Kesesuaian antara produk dan kebutuhan pasar yang terbukti oleh adoption",
            "Produk yang punya fitur paling banyak",
            "Produk yang dipasarkan di banyak channel"
        ],
        correctIndex: 1,
        explanation: "Product-market fit adalah kondisi di mana produk memenuhi kebutuhan pasar yang cukup besar dan terbukti oleh user adoption, retention, dan growth."
    },
    {
        question: "Dalam startup, mengapa 'failing fast' dianggap positif?",
        options: [
            "Karena failure tidak penting di startup",
            "Karena kegagalan cepat memungkinkan learning dan iteration yang lebih cepat",
            "Karena startup tidak punya standar kualitas",
            "Karena investor suka startup yang sering gagal"
        ],
        correctIndex: 1,
        explanation: "'Failing fast' berarti running quick experiments, learning from failures, dan iterating — menghindari waste of time pada ide yang tidak valid. Ini adalah core dari lean startup methodology."
    },
    {
        question: "Mana yang lebih sesuai untuk startup interview?",
        options: [
            "I prefer to have clear instructions before starting any task",
            "I thrive in ambiguous environments and take initiative to move things forward",
            "I believe in thorough planning before any execution",
            "I focus on my specific job description responsibilities"
        ],
        correctIndex: 1,
        explanation: "Startup mencari kandidat dengan 'ambiguity tolerance' dan 'bias for action' — yang bisa bergerak cepat meski scope tidak jelas."
    }
];
