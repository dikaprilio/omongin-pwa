import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Mock Interview: Management Associate (Startup)",
        subtitle: "Session 18: The Startup Challenge",
        teacherNote: "Full mock interview untuk Startup MA/Leadership Program. Simulasikan interview yang fast-paced dan challenging."
    },
    {
        type: 'pres-mindset',
        title: "The Startup Interview Persona",
        subtitle: "What They're Really Looking For",
        mindset: {
            before: "Interview adalah formalitas untuk show qualifications.",
            after: "Interview adalah preview bagaimana saya akan perform di startup — show energy, curiosity, dan problem-solving.",
            bridgeText: "Startup interviews are designed to simulate the actual work environment."
        },
        teacherNote: "Startup interviews sering tidak formal. Mereka cari chemistry dan cara berpikir, bukan hanya jawaban 'benar'."
    },
    {
        type: 'pres-checklist',
        title: "Pre-Mock Checklist",
        subtitle: "Startup Interview Ready?",
        checklist: {
            title: "MA Startup Ready",
            items: [
                "✅ Company Deep Dive: Product, competitors, recent pivot/funding news",
                "✅ Metrics Ready: Bisa jelaskan CAC, churn, MRR dengan confident",
                "✅ Product Sense: 1 product critique siap sampaikan",
                "✅ Energy Level: Startup suka kandidat yang enthusiastic dan curious"
            ]
        },
        teacherNote: "Startup interviews highly conversational. Murid perlu show genuine interest, bukan hanya prepared answers."
    },

    // ==================== PHASE 2: MOCK SETUP ====================
    {
        type: 'int-mock',
        title: "Role Card: MA Candidate",
        subtitle: "Company: Gojek (Fictional Assessment)",
        mockInterview: {
            jobTitle: "Management Associate Program",
            company: "Gojek",
            context: "Kamu fresh graduate dengan pengalaman organisasi dan 1 internship di e-commerce. Ini interview dengan Hiring Manager dan seorang Associate Product Manager. Gojek cari: speed of learning, ownership, dan product sense.",
            questions: [
                "1. Why Gojek? Why not Grab or Shopee?",
                "2. Tell me about a time you had to learn something completely new quickly.",
                "3. How would you improve GoFood's user experience?",
                "4. Describe a situation where you had to make a decision with 70% information.",
                "5. What metrics would you track if you were PM for GoRide?"
            ]
        },
        teacherNote: "Jadilah interviewer yang conversational tapi probing. Startup interviews seperti brainstorming session — challenge ideas."
    },
    {
        type: 'comparison',
        title: "MA Answer Quality",
        comparison: [
            {
                wrong: "I want to join Gojek because it's a big startup and MA program is prestigious.",
                right: "I'm excited about Gojek's mission of solving everyday problems for Indonesians. Your super-app strategy fascinates me — I'd love to contribute to the next innovation."
            },
            {
                wrong: "GoFood is good but sometimes slow. Maybe add more drivers?",
                right: "I'd analyze the funnel: drop-off at checkout might be due to payment friction. A/B test one-tap payment or split bill feature. Measure impact on conversion rate and order frequency."
            }
        ],
        teacherNote: "Startup mencari: specific company knowledge, structured thinking, dan data-driven approach."
    },

    // ==================== PHASE 3: SIMULATIONS ====================
    {
        type: 'simulation',
        title: "Round 1: Motivation & Speed Learning",
        subtitle: "The Gojek Fit (8 Minutes)",
        simulation: {
            role: "MA Candidate untuk Gojek",
            scenario: "Tutor menanyakan: 'Why us?' dan 'Tell me about learning something new quickly.' Cari genuine passion dan learning agility.",
            goal: "Tunjukkan: deep company knowledge, authentic motivation, dan evidence of fast learning",
            timeLimit: 480
        },
        teacherNote: "Why Gojek? Harus spesifik — mission, product, culture. Bukan generic 'big startup'."
    },
    {
        type: 'simulation',
        title: "Round 2: Product Case",
        subtitle: "Product Thinking Challenge (10 Minutes)",
        simulation: {
            role: "MA Candidate",
            scenario: "Tutor: 'How would you improve GoFood for first-time users?' Ini uji product sense dan structured thinking.",
            goal: "Gunakan framework: User Problem → Solution → Metrics → Trade-offs. Show data-driven mindset.",
            timeLimit: 600
        },
        teacherNote: "Product case adalah core dari startup MA interview. Murid harus think out loud dan show framework."
    },
    {
        type: 'concept',
        title: "Product Case Framework",
        subtitle: "CIRCLES Method",
        content: [
            "🎯 **Comprehend**: Clarify scope dan objectives dengan interviewer",
            "👤 **Identify**: Who is the user? What are their pain points?",
            "💡 **Report**: Prioritize 1-2 problems to solve based on impact",
            "🔧 **Cut**: List solutions, prioritize by effort vs impact",
            "📊 **List**: Define metrics to measure success",
            "⚖️ **Evaluate**: Discuss trade-offs dan next steps"
        ],
        teacherNote: "Framework ini membantu murid structure product thinking. Practice dengan berbagai produk."
    },
    {
        type: 'int-scenario',
        title: "Model Answer: Product Case",
        interviewScenario: {
            question: "How would you improve GoFood for first-time users?",
            starAnswer: {
                situation: "SITUATION: First-time users often abandon during onboarding or first order. High drop-off = lost acquisition spend.",
                task: "TASK: I need to identify friction points dan propose solutions to improve activation rate.",
                action: "ACTION: First, I'd analyze the funnel: where do users drop off? Hypothesis: too many steps to first order. Solutions: (1) Simplified onboarding with pre-filled preferences, (2) First-order discount prominently displayed, (3) Curated 'popular near you' to reduce decision fatigue. I'd A/B test each with 10% of new users.",
                result: "RESULT: Success metrics: activation rate (first order completion), time-to-first-order, and 7-day retention. If tests show +15% activation, roll out to 100%. Trade-off: discounts reduce margin, so I'd cap at first 3 orders only."
            },
            tip: "Good product answers: user-focused, data-driven, measurable, dan acknowledge trade-offs."
        },
        teacherNote: "Highlight: user problem first, then solution, then metrics. Ini structured product thinking."
    },

    // ==================== PHASE 4: EVALUATION ====================
    {
        type: 'concept',
        title: "Startup MA Assessment Rubric",
        subtitle: "Your Performance Today",
        content: [
            "🧠 **Product Sense**: Apakah kamu identify right problems dan propose feasible solutions? (1-5)",
            "⚡ **Speed of Thought**: Apakah kamu berpikir cepat dan articulate dengan jelas? (1-5)",
            "📊 **Data Orientation**: Apakah kamu consider metrics dan measurement? (1-5)",
            "🔥 **Energy & Curiosity**: Apakah kamu show genuine interest dan enthusiasm? (1-5)",
            "🎯 **Culture Fit**: Apakah kamu demonstrate startup values (ownership, speed, learning)? (1-5)"
        ],
        teacherNote: "Beri score dan feedback. Startup MA sangat selektif — butuh kombinasi IQ dan EQ yang tinggi."
    },
    {
        type: 'recap',
        title: "Startup Interview Success Factors",
        recap: [
            { context: "Preparation", sayThis: "Deep company research + product practice", dontSayThis: "Generic answers" },
            { context: "Product Thinking", sayThis: "User problem → solution → metrics", dontSayThis: "Feature ideas without reasoning" },
            { context: "Communication", sayThis: "Think out loud, structured, data-driven", dontSayThis: "Silent thinking, vague answers" },
            { context: "Energy", sayThis: "Enthusiastic, curious, proactive", dontSayThis: "Flat, passive, waiting for prompts" }
        ]
    },
    {
        type: 'mission',
        title: "Level Up Your Startup Game",
        subtitle: "Continue Building",
        mission: [
            "📝 Practice 1 product case per hari: pick an app, find improvement, structure your answer",
            "📊 Learn 1 new metric concept: cohort analysis, retention curves, funnel optimization",
            "🎧 Listen: podcast founders Indonesia atau Y Combinator startup school",
            "💼 Build: bikin mini-analysis dari 1 startup Indonesia — business model, metrics, challenges",
            "🤝 Network: ikuti startup community events atau webinar"
        ],
        teacherNote: "Startup prep adalah continuous learning. Dorong murid untuk stay curious dan keep practicing."
    },
    {
        type: 'title',
        title: "Startup MA: Ready to Disrupt! 🚀",
        subtitle: "You're Equipped for the Startup World",
        teacherNote: "Apresiasi usaha murid. Tekankan: startup interview adalah dua arah — mereka evaluate kamu, kamu evaluate culture fit. Next: BPO & Customer Service!"
    }
];

export const quiz: QuizQuestion[] = [];
