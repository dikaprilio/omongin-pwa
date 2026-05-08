import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Contact Center Agent",
        subtitle: "Session 21: Voice & Performance Excellence",
        teacherNote: "Goal: Murid siap menghadapi interview Contact Center Agent. Fokus: phone skills, call metrics (AHT, QA), upselling, dan CRM proficiency."
    },
    {
        type: 'concept',
        title: "The Contact Center World",
        subtitle: "VOICE IS YOUR SUPERPOWER",
        content: [
            "Contact Center = voice-based customer interaction: inbound calls, outbound sales, support 📞",
            "Key difference dari CS: real-time, no text buffer, voice tone is everything",
            "Metrics ketat: AHT (Average Handle Time), QA scores, upsell conversion rates",
            "Inbound: handling complaints, tech support, order inquiries",
            "Outbound: sales calls, retention, surveys — requires thicker skin",
            "Career path: Agent → Quality Analyst → Team Lead → Operations Manager"
        ],
        teacherNote: "Contact Center lebih challenging karena real-time voice. Mereka cari: vocal clarity, resilience, dan sales aptitude."
    },
    {
        type: 'comparison',
        title: "Contact Center vs Digital CS",
        comparison: [
            {
                wrong: "CS dan Contact Center sama saja — beda channel doang.",
                right: "Contact Center requires real-time thinking, vocal control, and handling pressure without text buffers."
            },
            {
                wrong: "Saya pilih voice karena nggak perlu ngetik cepat.",
                right: "I'm drawn to voice interactions because I excel at building rapport through tone and active listening."
            }
        ],
        teacherNote: "Contact Center lebih demanding secara vocal dan mental. Murid harus paham ini bukan 'easier option'."
    },

    // ==================== PHASE 2: LOGIC & MECHANICS ====================
    {
        type: 'formula',
        title: "The CALL Framework",
        subtitle: "Voice Interaction Excellence",
        formula: "CONNECT → ASSESS → LEAD → LEAVE",
        content: [
            "CONNECT: Build rapport dalam 10 detik pertama — tone, greeting, acknowledgment",
            "ASSESS: Diagnose need dengan active listening dan probing questions",
            "LEAD: Guide customer to solution atau sales offer dengan confidence",
            "LEAVE: Close dengan recap, next steps, dan positive final impression"
        ],
        teacherNote: "CALL framework untuk voice. Setiap fase punya time target: Connect (10s), Assess (30%), Lead (50%), Leave (10%)."
    },
    {
        type: 'int-vocab',
        title: "Contact Center Essentials",
        subtitle: "Voice Agent Must-Know Terms",
        interviewVocab: [
            { term: "AHT", meaning: "Average Handle Time", example: "I maintain a 4-minute AHT across all call types.", category: "Metrics" },
            { term: "Call script", meaning: "Skrip panggilan", example: "I adapt scripts naturally to match each caller's tone.", category: "Process" },
            { term: "Quality monitoring", meaning: "Pemantauan kualitas", example: "I consistently score 95%+ on QA evaluations.", category: "Metrics" },
            { term: "Upselling", meaning: "Penjualan tambahan", example: "I exceeded upsell targets by 110% last quarter.", category: "Sales" },
            { term: "CRM tools", meaning: "Alat manajemen pelanggan", example: "I'm proficient in Salesforce, Zendesk, and Freshdesk.", category: "Tools" },
            { term: "Call recording", meaning: "Rekaman panggilan", example: "I review my call recordings weekly for self-improvement.", category: "Development" },
            { term: "Hold/Wrap time", meaning: "Waktu tunggu/akhir", example: "I keep hold time under 30 seconds by preparing resources.", category: "Efficiency" },
            { term: "Inbound/Outbound", meaning: "Panggilan masuk/keluar", example: "I handle both inbound support and outbound follow-up calls.", category: "Types" }
        ],
        teacherNote: "Contact Center punya metrics yang ketat. AHT, QA scores, dan conversion rates adalah KPI utama."
    },
    {
        type: 'concept',
        title: "Voice Techniques for Call Success",
        subtitle: "YOUR VOICE IS THE PRODUCT",
        content: [
            "🎵 **Pace**: Not too fast (nervous) or too slow (bored) — 120-150 words/minute ideal",
            "📢 **Volume**: Clear and audible — adjust for elderly customers",
            "🎭 **Tone**: Warm, professional, energetic — smile while talking (it shows!)",
            "⏸️ **Pauses**: Strategic pauses after key points for comprehension",
            "👂 **Active Listening**: Verbal nods ('I see', 'Understood') to show engagement",
            "💪 **Confidence**: Avoid uptalk (rising intonation pada statements)"
        ],
        teacherNote: "Voice techniques bisa dipelajari dan dipractice. Latih dengan record diri sendiri."
    },

    // ==================== PHASE 3: PRACTICE ====================
    {
        type: 'int-scenario',
        title: "Scenario: The Upsell Opportunity",
        subtitle: "Pertanyaan: 'How do you approach upselling?'",
        interviewScenario: {
            question: "A customer calls to inquire about their basic plan. How would you approach upselling?",
            starAnswer: {
                situation: "SITUATION: Customer calls about their basic mobile plan. They're not complaining — just asking about data usage.",
                task: "TASK: I need to identify if an upgraded plan would genuinely benefit them, then present it naturally.",
                action: "ACTION: First, I acknowledge their inquiry warmly. Then I ask probing questions: 'May I review your usage pattern?' I discover they regularly exceed their data limit. I explain: 'I see you hit your data cap by week 3 each month. Our Pro plan would give you 50% more data for only Rp50K more — and you'd avoid overage charges which cost you Rp120K last month.' I let them decide without pressure.",
                result: "RESULT: Customer upgraded because the value was clear. They appreciated that I focused on their needs, not just selling. My approach maintains trust while hitting upsell targets."
            },
            tip: "Great upselling: diagnose first, offer solution (not just product), quantify value, no pressure."
        },
        teacherNote: "Upselling adalah skill penting. Yang dicari: consultative approach, bukan pushy sales."
    },
    {
        type: 'int-scenario',
        title: "Scenario: Handling Rejection",
        subtitle: "Pertanyaan: 'How do you handle difficult callers?'",
        interviewScenario: {
            question: "Tell me about a time you dealt with an abusive caller.",
            starAnswer: {
                situation: "SITUATION: A caller was yelling and using abusive language about a billing error. The call was escalated to me as a senior agent.",
                task: "TASK: I needed to de-escalate while maintaining my professionalism and not tolerating abuse.",
                action: "ACTION: I used the 'broken record' technique calmly: 'I understand you're frustrated, and I'm here to help. However, I need you to speak respectfully so I can assist you effectively.' I gave them a moment to compose. When they continued, I warned: 'If the abusive language continues, I'll need to end this call, but you can call back when ready.' They calmed down.",
                result: "RESULT: We resolved the billing issue. The customer apologized for their behavior and thanked me for my patience. I documented the interaction per protocol."
            },
            tip: "It's okay to set boundaries with abusive callers. Professional doesn't mean doormat."
        },
        teacherNote: "Contact Center agents perlu resilience. Interview akan test apakah mereka bisa handle rejection dan abuse."
    },
    {
        type: 'comparison',
        title: "Voice Script vs Natural",
        comparison: [
            {
                wrong: "Thank you for calling. My name is John. How may I help you today? (Monotone, robotic)",
                right: "Thank you for calling [Company]! This is John. How can I make your day better? (Warm, energetic)"
            },
            {
                wrong: "Your concern has been noted and will be processed accordingly.",
                right: "I've got this handled for you — you'll receive confirmation within 2 hours."
            }
        ],
        teacherNote: "Scripts are guidelines, not shackles. Great agents personalize while staying professional."
    },

    // ==================== PHASE 4: WRAP-UP ====================
    {
        type: 'micro-drill',
        title: "Voice Practice Drill",
        subtitle: "Openers & Closers",
        mission: [
            "Practice opener: Greeting dengan energy dan warmth dalam 10 detik",
            "Practice transition: 'Let me pull up your account...' dengan smooth delivery",
            "Practice closer: Recap + next steps + positive closing dalam 20 detik"
        ],
        teacherNote: "Voice practice penting. Record murid dan beri feedback pada pace, tone, dan clarity."
    },
    {
        type: 'recap',
        title: "Contact Center Interview Essentials",
        recap: [
            { context: "Voice Quality", sayThis: "Clear, warm, confident, appropriate pace", dontSayThis: "Monotone, rushed, timid" },
            { context: "Metrics", sayThis: "AHT, QA scores, conversion rates, CSAT", dontSayThis: "Lama atau cepat, bagus aja" },
            { context: "Sales", sayThis: "Consultative upselling, value-focused", dontSayThis: "Pushy, aggressive, no care" },
            { context: "Resilience", sayThis: "Handle rejection, stay professional", dontSayThis: "Take it personally, give up" }
        ]
    },
    {
        type: 'mission',
        title: "Prep for Contact Center Mock",
        subtitle: "Session 22 Preparation",
        mission: [
            "Practice voice exercises: record diri membaca script, evaluate pace dan tone",
            "Pelajari CRM tools: apa itu Salesforce, Zendesk, dan fitur utama mereka",
            "Research: bedanya inbound, outbound, blended contact center",
            "Siapkan cerita: satu tentang successful upsell, satu tentang handling rejection",
            "Latih phone etiquette: hold, transfer, conference call protocols"
        ],
        teacherNote: "Persiapkan murid untuk mock interview di session 22. Akan ada live call simulation."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Apa yang dimaksud dengan AHT (Average Handle Time)?",
        options: [
            "Waktu tunggu customer sebelum dijawab",
            "Rata-rata waktu menangani satu panggilan dari start to finish",
            "Waktu istirahat antar panggilan",
            "Waktu training untuk agent baru"
        ],
        correctIndex: 1,
        explanation: "AHT (Average Handle Time) adalah rata-rata waktu yang dibutuhkan untuk menangani satu panggilan, termasuk talk time, hold time, dan wrap-up time."
    },
    {
        question: "Apa approach yang tepat untuk upselling?",
        options: [
            "Push produk mahal sejak awal panggilan",
            "Diagnose kebutuhan dulu, offer solution dengan value yang jelas",
            "Beri diskon besar untuk close deal cepat",
            "Sebutkan semua produk yang tersedia"
        ],
        correctIndex: 1,
        explanation: "Consultative upselling berarti memahami kebutuhan customer dulu, kemudian menawarkan solution yang genuinely membantu mereka — dengan value proposition yang clear."
    },
    {
        question: "Bagaimana handle caller yang abusive?",
        options: [
            "Tetap diam dan tunggu mereka selesai",
            "Set boundary dengan professional: minta respect atau end call",
            "Serang balik dengan argument",
            "Langsung tutup telepon tanpa warning"
        ],
        correctIndex: 1,
        explanation: "Professional boundary-setting adalah key: acknowledge frustration, but require respectful communication. If abuse continues, warn then end call per protocol."
    }
];
