import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Mock Interview: Contact Center Agent",
        subtitle: "Session 22: The Live Call Simulation",
        teacherNote: "Full mock interview dengan live call simulation. Evaluasi voice, metrics knowledge, dan sales skills."
    },
    {
        type: 'pres-mindset',
        title: "The Voice Professional Persona",
        subtitle: "Every Call is a Performance",
        mindset: {
            before: "Saya tinggal jawab telepon dan bantu customer.",
            after: "Setiap panggilan adalah kesempatan untuk deliver excellence — voice, solution, dan experience.",
            bridgeText: "Your voice is your brand in Contact Center."
        },
        teacherNote: "Contact Center adalah performance role. Energy dan professionalism harus consistent di setiap call."
    },
    {
        type: 'pres-checklist',
        title: "Pre-Mock Checklist",
        subtitle: "Contact Center Ready?",
        checklist: {
            title: "Voice Agent Ready",
            items: [
                "✅ Voice Warm-Up: Clear pronunciation, no filler words ('um', 'uh')",
                "✅ Metrics Knowledge: AHT target, QA criteria, conversion goals",
                "✅ Sales Mindset: Consultative approach, not pushy",
                "✅ Resilience Ready: Bisa handle rejection dengan grace"
            ]
        },
        teacherNote: "Voice agents harus 'on' sepanjang waktu. Mental preparation sama pentingnya dengan knowledge."
    },

    // ==================== PHASE 2: MOCK SETUP ====================
    {
        type: 'int-mock',
        title: "Role Card: Contact Center Candidate",
        subtitle: "Company: Telkomsel Contact Center (Fictional)",
        mockInterview: {
            jobTitle: "Contact Center Agent (Inbound Sales & Support)",
            company: "Telkomsel",
            context: "Kamu apply untuk posisi blended agent (inbound support + upsell). Target: AHT under 5 min, QA score 90%+, upsell conversion 15%+. Ini assessment dengan Contact Center Supervisor.",
            questions: [
                "1. Why Contact Center? What attracts you to voice interactions?",
                "2. How do you handle back-to-back calls during peak hours?",
                "3. Tell me about a time you turned a complaint into a sale.",
                "4. What would you do if you're approaching your AHT target but the customer still has issues?",
                "5. How do you stay motivated on difficult days?"
            ]
        },
        teacherNote: "Jadilah interviewer yang menguji vocal skills dan resilience. Contact Center butuh agents yang tahan banting."
    },
    {
        type: 'comparison',
        title: "Contact Center Interview Quality",
        comparison: [
            {
                wrong: "I want this job because I like talking on the phone.",
                right: "I excel at building rapport through voice and I'm driven by measurable targets like AHT and conversion rates."
            },
            {
                wrong: "If time runs out, I'd rush to end the call.",
                right: "I'd acknowledge the time, provide immediate relief, and offer a callback or escalation to ensure complete resolution."
            }
        ],
        teacherNote: "Contact Center mencari: target-driven, customer-focused, dan process-oriented. Balance efficiency dengan quality."
    },

    // ==================== PHASE 3: LIVE SIMULATIONS ====================
    {
        type: 'simulation',
        title: "Round 1: Behavioral & Motivation",
        subtitle: "The Fit Interview (8 Minutes)",
        simulation: {
            role: "Contact Center Candidate untuk Telkomsel",
            scenario: "Tutor menanyakan motivation dan behavioral questions. Cari: drive, resilience, dan sales aptitude.",
            goal: "Tunjukkan: energy, target-orientation, dan customer focus. Gunakan specific examples.",
            timeLimit: 480
        },
        teacherNote: "Energy level penting. Contact Center mencari candidates yang vibrant dan motivated."
    },
    {
        type: 'simulation',
        title: "Round 2: Live Call Roleplay",
        subtitle: "Inbound Support + Upsell (10 Minutes)",
        simulation: {
            role: "Contact Center Agent untuk Telkomsel",
            scenario: "Tutor jadi customer: 'Halo, paket data saya cepat habis. Saya frustration karena tagihan selalu over.' Kamu harus resolve complaint DAN upsell plan yang lebih sesuai.",
            goal: "Apply CALL framework: Connect dengan empathy → Assess usage pattern → Lead to better plan → Leave dengan positive close. Target: resolve + upsell dalam 5 menit.",
            timeLimit: 600
        },
        teacherNote: "Ini real simulation. Evaluasi: voice quality, framework adherence, sales attempt, dan closing."
    },
    {
        type: 'int-scenario',
        title: "Model Answer: The Complaint-to-Sale Call",
        interviewScenario: {
            question: "Customer: 'Paket data saya cepat habis. Saya frustrasi tagihan over!'",
            starAnswer: {
                situation: "CUSTOMER: Frustrated about data overage charges",
                task: "AGENT: Resolve concern AND identify upsell opportunity",
                action: "AGENT: 'I completely understand your frustration, and I sincerely apologize for the bill shock. Let me pull up your usage pattern right now... I can see the issue — you consistently use 15GB but your plan only includes 10GB. The overage fees cost you Rp150K last month. Here's what I recommend: our MaxPlan gives you 20GB for only Rp75K more than your current plan. You'd save Rp75K monthly AND have extra data for peace of mind. Would you like me to switch you over?'",
                result: "ASSESSMENT: Agent showed empathy, diagnosed root cause, quantified value, made specific recommendation. This is consultative selling."
            },
            tip: "Complaint-to-sale: acknowledge, diagnose, solution-sell dengan clear value proposition."
        },
        teacherNote: "Review performance murid. Highlight: empathy, problem-solving, dan sales technique."
    },
    {
        type: 'concept',
        title: "AHT vs Quality Balance",
        subtitle: "THE ETERNAL TENSION",
        content: [
            "⚡ **Speed Matters**: AHT targets ensure efficiency dan customer wait times reasonable",
            "💎 **Quality Matters**: Rush calls create callbacks dan poor CSAT — lebih mahal long-term",
            "🎯 **The Balance**: First Call Resolution (FCR) adalah KPI utama — solve right the first time",
            "📊 **When to Escalate**: Complex issues shouldn't drag AHT — know when to transfer",
            "💡 **Efficiency Hacks**: Master CRM shortcuts, prepare common solutions, use hold time wisely"
        ],
        teacherNote: "Contact Center agents harus navigate trade-off antara speed dan quality. FCR adalah north star."
    },

    // ==================== PHASE 4: EVALUATION ====================
    {
        type: 'concept',
        title: "Contact Center Assessment Rubric",
        subtitle: "Your Performance Today",
        content: [
            "🗣️ **Voice & Delivery**: Clarity, pace, tone, energy, professionalism (1-5)",
            "👂 **Active Listening**: Understanding needs, asking right questions, acknowledgment (1-5)",
            "💰 **Sales Skills**: Identifying opportunities, consultative approach, closing (1-5)",
            "⏱️ **Efficiency**: Time management, process adherence, appropriate escalation (1-5)",
            "🛡️ **Resilience**: Handling rejection, staying positive, bounce-back rate (1-5)"
        ],
        teacherNote: "Beri score dan feedback. Contact Center adalah skill stack yang complex — acknowledge strengths dan identify improvement areas."
    },
    {
        type: 'recap',
        title: "Contact Center Success Factors",
        recap: [
            { context: "Voice", sayThis: "Clear, warm, energetic, professional", dontSayThis: "Monotone, unclear, tired" },
            { context: "Sales", sayThis: "Consultative, value-focused, natural", dontSayThis: "Pushy, aggressive, scripted" },
            { context: "Efficiency", sayThis: "Balance AHT dengan FCR", dontSayThis: "Rush calls atau take too long" },
            { context: "Attitude", sayThis: "Resilient, target-driven, positive", dontSayThis: "Easily discouraged, passive" }
        ]
    },
    {
        type: 'mission',
        title: "Level Up Your Voice Skills",
        subtitle: "Continuous Improvement",
        mission: [
            "🎤 Record daily: Baca artikel news dengan varied tone dan pace",
            "📝 Script practice: Tulis dan hafal 3 opening/closing variations",
            "📊 Track mock metrics: Time yourself, aim for consistent AHT practice",
            "🎧 Listen: Analyze great sales calls — what makes them effective?",
            "💪 Build resilience: Practice rejection recovery — 'Next call, fresh start'"
        ],
        teacherNote: "Voice skills develop dengan practice. Dorong murid untuk continuous improvement."
    },
    {
        type: 'title',
        title: "Contact Center Agent: Ready to Excel! 📞",
        subtitle: "Your Voice is Your Superpower",
        teacherNote: "Apresiasi effort murid. Contact Center adalah entry point yang solid untuk karir customer operations. Next: E-Commerce Operations!"
    }
];

export const quiz: QuizQuestion[] = [];
