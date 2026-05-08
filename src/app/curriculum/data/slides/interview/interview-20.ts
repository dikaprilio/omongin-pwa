import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Mock Interview: Customer Support Representative",
        subtitle: "Session 20: The Live Roleplay Challenge",
        teacherNote: "Full mock interview dengan live roleplay. Simulasikan recorded call assessment ala BPO hiring process."
    },
    {
        type: 'pres-mindset',
        title: "The Live Assessment Mindset",
        subtitle: "You're On Stage",
        mindset: {
            before: "Interview adalah Q&A biasa. Saya tinggal jawab.",
            after: "Ini adalah performance assessment. Setiap word choice, tone, dan response dievaluasi.",
            bridgeText: "BPO and tech companies record these calls for quality review."
        },
        teacherNote: "CS interviews sering include recorded roleplay. Mereka evaluasi language, empathy, dan adherence ke process."
    },
    {
        type: 'pres-checklist',
        title: "Pre-Mock Checklist",
        subtitle: "CS Interview Ready?",
        checklist: {
            title: "CS Ready",
            items: [
                "✅ HEARD Framework: Hafal dan siap apply",
                "✅ Empathy Phrases: 5 phrases ready untuk digunakan natural",
                "✅ Metrics Knowledge: Bisa jelaskan CSAT, SLA, FCR",
                "✅ Voice Ready: Clear pronunciation, friendly tone, appropriate pace"
            ]
        },
        teacherNote: "CS interviews sangat praktikal. Murid harus demonstrate skills, bukan hanya talk about them."
    },

    // ==================== PHASE 2: MOCK SETUP ====================
    {
        type: 'int-mock',
        title: "Role Card: CS Candidate",
        subtitle: "Company: Shopee Customer Experience (Fictional)",
        mockInterview: {
            jobTitle: "Customer Support Representative",
            company: "Shopee Indonesia",
            context: "Kamu apply untuk posisi CS di e-commerce. Target: handle 40+ tickets/hari via chat dan email. Ini assessment dengan CS Team Lead. Ada live roleplay component.",
            questions: [
                "1. Why customer support? Why e-commerce specifically?",
                "2. How do you handle stress when dealing with angry customers?",
                "3. Tell me about a time you turned an angry customer into a happy one.",
                "4. What does good customer service mean to you?",
                "5. How do you prioritize when you have 10 open tickets with same SLA?"
            ]
        },
        teacherNote: "Jadilah interviewer yang supportive tapi challenging. CS lead akan test resilience dan attitude."
    },
    {
        type: 'comparison',
        title: "CS Interview Quality",
        comparison: [
            {
                wrong: "I want this job because I need money and I can type fast.",
                right: "I'm passionate about creating positive customer experiences. E-commerce moves fast, and I thrive in dynamic environments where I can solve problems daily."
            },
            {
                wrong: "I don't get stressed. I just ignore angry customers and follow script.",
                right: "I practice self-care outside work and use the HEARD framework to stay focused on solutions. I view angry customers as opportunities to turn things around."
            }
        ],
        teacherNote: "CS mencari: genuine service orientation, resilience, dan process adherence."
    },

    // ==================== PHASE 3: LIVE SIMULATIONS ====================
    {
        type: 'simulation',
        title: "Round 1: Behavioral Interview",
        subtitle: "Experience & Motivation (8 Minutes)",
        simulation: {
            role: "CS Candidate untuk Shopee",
            scenario: "Tutor menanyakan behavioral questions: 'Why CS?', 'How handle stress?', 'Tell me about difficult customer.' Cari attitude dan experience.",
            goal: "Tunjukkan: service orientation, resilience, dan specific examples dengan metrics",
            timeLimit: 480
        },
        teacherNote: "Behavioral round pertama. Cari consistency antara words dan attitude."
    },
    {
        type: 'simulation',
        title: "Round 2: Live Roleplay",
        subtitle: "The Refund Case (10 Minutes)",
        simulation: {
            role: "CS Agent untuk Shopee",
            scenario: "Tutor jadi angry customer: 'Barang saya rusak! Saya mau refund sekarang! Saya tidak mau dengar alasan!' Kamu harus de-escalate dan resolve.",
            goal: "Apply HEARD framework: Hear → Empathize → Apologize → Resolve → Diagnose. Stay calm, professional, solution-focused.",
            timeLimit: 600
        },
        teacherNote: "Ini inti dari assessment. Evaluasi: empathy, language, process adherence, dan resolution."
    },
    {
        type: 'int-scenario',
        title: "Model Answer: Live Roleplay",
        interviewScenario: {
            question: "Customer: 'Barang saya rusak! Saya mau refund sekarang! Saya tidak mau dengar alasan!'",
            starAnswer: {
                situation: "CUSTOMER: (Angry, speaking fast) 'Barang saya rusak! Saya mau refund sekarang!'",
                task: "AGENT RESPONSE STRATEGY",
                action: "AGENT: 'I completely understand your frustration, and I sincerely apologize that you received a damaged item. That is absolutely not the experience we want for you. My name is [Name], and I'm taking full ownership of resolving this right now. May I have your order number so I can immediately process your refund?' [Customer gives order number] 'Thank you. I'm confirming your refund of Rp[X] to your original payment method. This will process within 24 hours, and you'll receive confirmation via email. You don't need to return the damaged item. Is there anything else I can help you with today?'",
                result: "ASSESSMENT: Agent showed empathy immediately, took ownership, provided clear solution dengan timeline, dan closed dengan helpful attitude."
            },
            tip: "In live roleplay: speed matters, empathy is everything, dan clear next steps reduce anxiety."
        },
        teacherNote: "Review performance murid. Bandingkan dengan model. Highlight what worked dan what to improve."
    },
    {
        type: 'simulation',
        title: "Round 3: Process Knowledge",
        subtitle: "Metrics & Prioritization (5 Minutes)",
        simulation: {
            role: "CS Candidate",
            scenario: "Tutor: 'You have 15 open tickets. 5 are VIP customers, 3 are SLA-breach in 30 minutes, 7 are general. How do you prioritize?' Uji process thinking.",
            goal: "Show prioritization framework: SLA breach first → VIP customers → general. Explain reasoning.",
            timeLimit: 300
        },
        teacherNote: "Process knowledge penting. CS agents harus balance speed, quality, dan prioritization."
    },

    // ==================== PHASE 4: EVALUATION ====================
    {
        type: 'concept',
        title: "CS Assessment Rubric",
        subtitle: "Your Performance Today",
        content: [
            "💬 **Communication**: Clear English, appropriate tone, professional language (1-5)",
            "❤️ **Empathy**: Genuine care, validation of customer feelings, patience (1-5)",
            "🔧 **Problem-Solving**: Solution-oriented, creative within policy, ownership (1-5)",
            "⏱️ **Efficiency**: Appropriate pace, timely resolution, no unnecessary steps (1-5)",
            "📋 **Process Adherence**: Follows framework, knows when to escalate, documentation (1-5)"
        ],
        teacherNote: "Beri score dan feedback detail. CS adalah skill-based role — setiap aspek bisa diimprove dengan practice."
    },
    {
        type: 'recap',
        title: "CS Interview Success Factors",
        recap: [
            { context: "Attitude", sayThis: "Service-oriented, resilient, positive", dontSayThis: "Just a job, easy money" },
            { context: "Language", sayThis: "Empathy phrases, clear English, professional tone", dontSayThis: "Casual, defensive, robotic" },
            { context: "Process", sayThis: "HEARD framework, SLA awareness, escalation know-how", dontSayThis: "Wing it, no system" },
            { context: "Resolution", sayThis: "Ownership, clear timeline, follow-through", dontSayThis: "Pass to someone else, vague promises" }
        ]
    },
    {
        type: 'mission',
        title: "Continue Your CS Excellence Journey",
        subtitle: "Action Items",
        mission: [
            "🎧 Listen: Dengarkan call recordings CS yang excellent (banyak contoh online)",
            "📝 Journal: Catat 3 difficult scenarios per minggu dan practice response",
            "📊 Study: Pelajari lebih dalam tentang CS metrics dan industry best practices",
            "🗣️ Practice: Roleplay dengan teman — satu jadi angry customer, satu jadi agent",
            "🔍 Research: Understand differences antara CS di BPO vs tech vs e-commerce"
        ],
        teacherNote: "CS adalah skill yang develop over time. Dorong murid untuk continuous practice dan learning."
    },
    {
        type: 'title',
        title: "CS Representative: Interview Ready! 🎧",
        subtitle: "You're Equipped for Service Excellence",
        teacherNote: "Apresiasi effort murid. CS adalah foundational skill untuk banyak karir. Next: Contact Center Agent!"
    }
];

export const quiz: QuizQuestion[] = [];
