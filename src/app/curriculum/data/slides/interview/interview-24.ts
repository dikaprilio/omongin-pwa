import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Mock Interview: E-Commerce Operations",
        subtitle: "Session 24: The Operations Challenge",
        teacherNote: "Full mock interview untuk E-Commerce Operations. Simulasikan case-based interview dengan focus pada process thinking dan problem-solving."
    },
    {
        type: 'pres-mindset',
        title: "The Operations Professional Persona",
        subtitle: "Systems Thinker & Problem Solver",
        mindset: {
            before: "Operations adalah kerja administrasi yang repetitif.",
            after: "Operations adalah optimasi sistem yang impact ribuan transaksi dan pengalaman customer.",
            bridgeText: "Behind every seamless e-commerce experience is a well-run operations team."
        },
        teacherNote: "Operations mencari candidates yang enjoy solving complex logistical challenges."
    },
    {
        type: 'pres-checklist',
        title: "Pre-Mock Checklist",
        subtitle: "Operations Interview Ready?",
        checklist: {
            title: "Operations Ready",
            items: [
                "✅ Process Knowledge: Fulfillment flow, logistics, SOPs",
                "✅ Case Practice: Siap untuk problem-solving scenarios",
                "✅ Systems Thinking: Bisa identify root cause, not just symptoms",
                "✅ Stakeholder Awareness: Understand multiple parties (sellers, logistics, CS)"
            ]
        },
        teacherNote: "Operations interviews case-heavy. Murid harus demonstrate structured thinking."
    },

    // ==================== PHASE 2: MOCK SETUP ====================
    {
        type: 'int-mock',
        title: "Role Card: Operations Specialist",
        subtitle: "Company: Tokopedia Operations (Fictional)",
        mockInterview: {
            jobTitle: "E-Commerce Operations Specialist",
            company: "Tokopedia",
            context: "Kamu apply untuk posisi operations yang handle seller onboarding dan fulfillment optimization. Target: onboard 100 sellers/month dengan <5% error rate. Ini interview dengan Operations Manager.",
            questions: [
                "1. Why operations? Why e-commerce specifically?",
                "2. Walk me through how you'd design a seller onboarding process from scratch.",
                "3. How would you handle a logistics partner that consistently misses SLAs?",
                "4. Tell me about a time you improved a process. What was the impact?",
                "5. A flash sale is coming. What's your preparation checklist?"
            ]
        },
        teacherNote: "Jadilah interviewer yang test analytical skills. Operations interviews adalah problem-solving sessions."
    },
    {
        type: 'comparison',
        title: "Operations Interview Quality",
        comparison: [
            {
                wrong: "I want operations because I like organizing things and making lists.",
                right: "I'm drawn to operations because I enjoy optimizing systems that impact business outcomes at scale."
            },
            {
                wrong: "If logistics partner is bad, I'd just find a new one.",
                right: "I'd analyze root causes, negotiate improvements, and only escalate to replacement if performance doesn't improve."
            }
        ],
        teacherNote: "Operations mencari: analytical thinking, stakeholder management, dan measured responses."
    },

    // ==================== PHASE 3: LIVE SIMULATIONS ====================
    {
        type: 'simulation',
        title: "Round 1: Process Design",
        subtitle: "Seller Onboarding Case (10 Minutes)",
        simulation: {
            role: "Operations Specialist untuk Tokopedia",
            scenario: "Tutor: 'Design a seller onboarding process that gets new sellers to first sale within 48 hours.' Uji process thinking dan practicality.",
            goal: "Show structured approach: identify steps → eliminate friction → set milestones → define metrics. Think end-to-end.",
            timeLimit: 600
        },
        teacherNote: "Process design question adalah classic untuk operations. Cari structure, practicality, dan metrics."
    },
    {
        type: 'simulation',
        title: "Round 2: Problem-Solving Case",
        subtitle: "Logistics SLA Issue (8 Minutes)",
        simulation: {
            role: "Operations Specialist",
            scenario: "Tutor: 'One of your courier partners has 30% late delivery rate for 2 weeks. Other partners are at capacity. What do you do?' Uji crisis management.",
            goal: "Show root cause analysis, stakeholder negotiation, temporary solutions, dan long-term planning.",
            timeLimit: 480
        },
        teacherNote: "Real operations problem. Cari: diagnostic approach, creative solutions, dan calm under pressure."
    },
    {
        type: 'int-scenario',
        title: "Model Answer: Process Design Case",
        interviewScenario: {
            question: "Design seller onboarding to first sale within 48 hours.",
            starAnswer: {
                situation: "CHALLENGE: New sellers often abandon before first sale due to complex setup",
                task: "DESIGN 48-HOUR ONBOARDING PROCESS",
                action: "STEP 1: Simplified registration (15 mins) — auto-KYC where possible. STEP 2: Product listing wizard with templates (30 mins). STEP 3: Pricing guidance tool with competitive analysis (15 mins). STEP 4: Shipping setup with recommended partners (10 mins). STEP 5: 'First Sale Checklist' dashboard. STEP 6: New seller badge for visibility. STEP 7: Automated tips at 6, 12, 24, 36 hours post-onboarding.",
                result: "SUCCESS METRICS: % sellers with first sale within 48h, time-to-first-sale, activation rate. PILOT: Test with 100 sellers, iterate, then scale."
            },
            tip: "Great process design: simple steps, clear milestones, supporting tools, dan measurement plan."
        },
        teacherNote: "Review murid's answer vs model. Highlight: structure, practicality, dan metrics."
    },
    {
        type: 'simulation',
        title: "Round 3: Stakeholder Management",
        subtitle: "Flash Sale Prep (7 Minutes)",
        simulation: {
            role: "Operations Specialist",
            scenario: "Tutor: '9.9 Mega Sale is 2 weeks away. List your preparation and coordination activities.' Uji planning dan cross-functional thinking.",
            goal: "Show comprehensive checklist: capacity planning, seller communication, logistics prep, system monitoring, escalation protocols.",
            timeLimit: 420
        },
        teacherNote: "Operations adalah tentang coordination. Cari: comprehensiveness, proactiveness, dan risk awareness."
    },

    // ==================== PHASE 4: EVALUATION ====================
    {
        type: 'concept',
        title: "Operations Assessment Rubric",
        subtitle: "Your Performance Today",
        content: [
            "🧠 **Analytical Thinking**: Root cause analysis, structured problem-solving (1-5)",
            "📋 **Process Orientation**: SOP mindset, attention to detail, standardization (1-5)",
            "🤝 **Stakeholder Management**: Communication, negotiation, coordination (1-5)",
            "⚡ **Practicality**: Solutions that work at scale, not just theory (1-5)",
            "📊 **Metrics Awareness**: Defining and tracking KPIs (1-5)"
        ],
        teacherNote: "Beri score dan feedback. Operations adalah combination of analytical dan practical skills."
    },
    {
        type: 'recap',
        title: "E-Commerce Operations Success Factors",
        recap: [
            { context: "Problem-Solving", sayThis: "Root cause analysis, structured approach", dontSayThis: "Quick fixes, band-aid solutions" },
            { context: "Process", sayThis: "SOPs, standardization, continuous improvement", dontSayThis: "Ad-hoc, inconsistent" },
            { context: "Coordination", sayThis: "Cross-functional, proactive communication", dontSayThis: "Siloed, reactive" },
            { context: "Scale", sayThis: "Solutions that work at volume", dontSayThis: "Works for small cases only" }
        ]
    },
    {
        type: 'mission',
        title: "Build Your Operations Career",
        subtitle: "Next Steps",
        mission: [
            "📚 Learn: Supply chain fundamentals (coursera, youtube)",
            "🔍 Analyze: Pick 1 e-commerce company, map their operations flow",
            "📊 Practice: Create process maps untuk common operations scenarios",
            "🤝 Network: Connect dengan professionals di e-commerce operations",
            "📈 Track: Follow e-commerce industry news dan operational challenges"
        ],
        teacherNote: "Operations adalah field yang dalam. Dorong murid untuk continuous learning."
    },
    {
        type: 'title',
        title: "E-Commerce Operations: Ready to Optimize! 📦",
        subtitle: "You're Equipped for the Operations Challenge",
        teacherNote: "Apresiasi effort murid. Operations adalah backbone of e-commerce — skill yang sangat valuable. Next: Marketing & Creative!"
    }
];

export const quiz: QuizQuestion[] = [];
