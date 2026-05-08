import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "E-Commerce Operations Specialist",
        subtitle: "Session 23: Behind the Digital Storefront",
        teacherNote: "Goal: Murid siap menghadapi interview E-Commerce Operations. Fokus: order fulfillment, seller support, logistics coordination, dan process optimization."
    },
    {
        type: 'concept',
        title: "The E-Commerce Operations Engine",
        subtitle: "WHERE THE MAGIC HAPPENS",
        content: [
            "E-commerce operations = backbone of online retail: fulfillment, logistics, seller onboarding 📦",
            "Indonesia e-commerce: $50B+ market, 150+ million online shoppers",
            "Key players: Shopee, Tokopedia, TikTok Shop, Lazada — all hiring operations talent",
            "Operations role: bridge antara sellers, logistics, dan customers",
            "English critical: regional coordination, SOP documentation, international sellers",
            "Growth path: Ops Specialist → Team Lead → Operations Manager → Head of Operations"
        ],
        teacherNote: "E-commerce operations adalah field yang growing rapidly. Mereka cari: detail-oriented, process-driven, dan problem-solving skills."
    },
    {
        type: 'comparison',
        title: "Operations vs Customer Service",
        comparison: [
            {
                wrong: "Operations sama saja dengan CS — beda nama doang.",
                right: "Operations focuses on systems, processes, and seller relationships — proactive optimization vs reactive support."
            },
            {
                wrong: "Saya suka kerja operations karena nggak perlu ngomong dengan customer.",
                right: "I'm drawn to operations because I enjoy optimizing processes and solving systemic issues that impact thousands of transactions."
            }
        ],
        teacherNote: "Operations adalah back-office yang proactive. Beda dari CS yang frontline reactive."
    },

    // ==================== PHASE 2: LOGIC & MECHANICS ====================
    {
        type: 'formula',
        title: "The Operations Excellence Formula",
        subtitle: "Process + Coordination + Optimization",
        formula: "PROCESS → COORDINATE → OPTIMIZE",
        content: [
            "PROCESS: Define, document, dan enforce SOPs untuk consistency",
            "COORDINATE: Bridge communication antara sellers, logistics, warehouse, dan CS",
            "OPTIMIZE: Identify bottlenecks, reduce errors, improve efficiency metrics"
        ],
        teacherNote: "Operations adalah tentang making things work smoothly at scale. Systems thinking adalah key."
    },
    {
        type: 'int-vocab',
        title: "E-Commerce Operations Vocabulary",
        subtitle: "Operations Must-Know Terms",
        interviewVocab: [
            { term: "Order fulfillment", meaning: "Pemenuhan pesanan", example: "I oversee fulfillment for 10K+ orders daily.", category: "Core" },
            { term: "Returns & refunds", meaning: "Pengembalian & refund", example: "I manage the returns process with <2% error rate.", category: "Process" },
            { term: "Marketplace policy", meaning: "Kebijakan marketplace", example: "I ensure all sellers comply with marketplace policies.", category: "Compliance" },
            { term: "Seller support", meaning: "Dukungan penjual", example: "I onboard and support 200+ new sellers monthly.", category: "Support" },
            { term: "Logistics coordination", meaning: "Koordinasi logistik", example: "I coordinate with 5 courier partners for last-mile delivery.", category: "Logistics" },
            { term: "Dispute resolution", meaning: "Penyelesaian sengketa", example: "I mediate buyer-seller disputes with 90% resolution rate.", category: "Resolution" },
            { term: "SOP compliance", meaning: "Kepatuhan SOP", example: "I audit operations for SOP compliance weekly.", category: "Process" },
            { term: "Cross-team communication", meaning: "Komunikasi lintas tim", example: "I bridge product, logistics, and CS for seamless ops.", category: "Coordination" }
        ],
        teacherNote: "E-commerce operations punya vocab yang unique. Fokus pada process, coordination, dan metrics."
    },
    {
        type: 'concept',
        title: "Key E-Commerce Metrics",
        subtitle: "NUMBERS THAT MATTER",
        content: [
            "📦 **Fulfillment**: Order processing time, pick-pack-ship accuracy, same-day dispatch %",
            "🚚 **Logistics**: On-time delivery rate, damage rate, return processing time",
            "🏪 **Seller**: Onboarding time, active seller rate, policy violation rate",
            "💰 **Financial**: Refund processing time, dispute resolution rate, fraud detection %",
            "⭐ **Quality**: Error rate, escalation rate, SOP adherence score"
        ],
        teacherNote: "Operations adalah metrics-driven role. Murid harus show comfort dengan numbers dan KPIs."
    },

    // ==================== PHASE 3: PRACTICE ====================
    {
        type: 'int-scenario',
        title: "Scenario: Flash Sale Surge",
        subtitle: "Pertanyaan: 'How would you handle a surge in orders?'",
        interviewScenario: {
            question: "A flash sale causes 10x normal order volume. How do you handle the surge?",
            starAnswer: {
                situation: "SITUATION: Our 12.12 flash sale generated 50,000 orders in 2 hours — 10x our normal daily volume. System alerts showed processing delays.",
                task: "TASK: I needed to ensure order fulfillment without compromising accuracy or seller satisfaction.",
                action: "ACTION: First, I activated our surge protocol: temporary staff reassignment to fulfillment. Second, I coordinated with logistics partners for additional pickup schedules. Third, I set up real-time dashboard for monitoring. Fourth, I communicated proactively with sellers about expected delays. Fifth, I prioritized orders by SLA tier.",
                result: "RESULT: We processed 98% of orders within SLA despite the surge. Seller satisfaction remained at 4.6/5. Post-event, I documented learnings and updated our surge SOP for future events."
            },
            tip: "Operations answers show: systematic approach, stakeholder communication, dan continuous improvement mindset."
        },
        teacherNote: "Highlight: protocol, coordination, communication, dan post-event improvement. Ini operations thinking."
    },
    {
        type: 'int-scenario',
        title: "Scenario: Seller Policy Violation",
        subtitle: "Pertanyaan: 'How do you handle policy violations?'",
        interviewScenario: {
            question: "A top seller is found selling counterfeit items. What do you do?",
            starAnswer: {
                situation: "SITUATION: A Platinum-tier seller with Rp500M monthly GMV was reported for counterfeit electronics.",
                task: "TASK: I needed to enforce policy while minimizing business impact and ensuring fair process.",
                action: "ACTION: First, I conducted due diligence: purchased sample for verification, documented evidence. Second, I suspended listings (not account) pending investigation. Third, I contacted seller for explanation per our 3-strike policy. Fourth, I briefed legal team for potential escalation. Fifth, I prepared communication for affected buyers.",
                result: "RESULT: Investigation confirmed counterfeit. Seller was downgraded and required compliance training. We processed refunds for 200+ affected buyers. Policy enforcement maintained platform integrity. I proposed enhanced detection algorithms to prevent recurrence."
            },
            tip: "Policy enforcement requires: evidence, due process, stakeholder management, dan proportional response."
        },
        teacherNote: "Operations often involves difficult decisions. Show balanced approach: firm on policy, fair in process."
    },
    {
        type: 'comparison',
        title: "Operations Language Upgrade",
        comparison: [
            {
                wrong: "I help sellers when they have problems.",
                right: "I manage seller onboarding and provide ongoing support to ensure policy compliance and operational excellence."
            },
            {
                wrong: "I check if orders are sent correctly.",
                right: "I oversee order fulfillment operations, ensuring SLA adherence and accuracy metrics."
            },
            {
                wrong: "I fix issues when they happen.",
                right: "I identify operational bottlenecks and implement process improvements to prevent recurring issues."
            }
        ],
        teacherNote: "Professional operations language: process-focused, metrics-driven, proactive."
    },

    // ==================== PHASE 4: WRAP-UP ====================
    {
        type: 'micro-drill',
        title: "Operations Thinking Drill",
        subtitle: "Process Improvement Scenarios",
        mission: [
            "Scenario: Return rate naik 20%. What data would you check? What actions?",
            "Scenario: Courier partner sering delay. How do you handle?",
            "Scenario: New seller onboarding takes 5 days. How to reduce to 2 days?"
        ],
        teacherNote: "Drill structured thinking. Operations adalah tentang diagnostic dan solution systematically."
    },
    {
        type: 'recap',
        title: "E-Commerce Operations Essentials",
        recap: [
            { context: "Process", sayThis: "SOPs, compliance, standardization", dontSayThis: "Asal jalan, bebas aja" },
            { context: "Coordination", sayThis: "Cross-team, stakeholder management", dontSayThis: "Kerja sendiri" },
            { context: "Optimization", sayThis: "Bottleneck analysis, continuous improvement", dontSayThis: "Sudah biasa aja" },
            { context: "Metrics", sayThis: "SLA, accuracy, efficiency rates", dontSayThis: "Lumayan, banyak, cepat" }
        ]
    },
    {
        type: 'mission',
        title: "Prep for E-Commerce Ops Mock",
        subtitle: "Session 24 Preparation",
        mission: [
            "Research: pelajari order fulfillment flow di e-commerce ( dari order sampai delivery)",
            "Pelajari marketplace policies: apa saja yang dilarang dan kenapa",
            "Pahami logistics ecosystem: courier partners, last-mile, warehousing",
            "Siapkan cerita: satu tentang process improvement, satu tentang handling crisis",
            "Practice: jelaskan complex process dengan simple language"
        ],
        teacherNote: "Persiapkan murid untuk mock interview di session 24. Operations interviews serangkum case-based."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Apa yang dimaksud dengan 'order fulfillment'?",
        options: [
            "Pemasaran produk untuk meningkatkan penjualan",
            "Proses dari order diterima sampai barang dikirim ke customer",
            "Layanan customer untuk menangani komplain",
            "Perekrutan seller baru ke marketplace"
        ],
        correctIndex: 1,
        explanation: "Order fulfillment adalah proses lengkap dari menerima order, memproses pembayaran, picking/packing barang, sampai pengiriman ke customer."
    },
    {
        question: "Mana yang paling penting dalam e-commerce operations?",
        options: [
            "Kreativitas marketing yang tinggi",
            "Process consistency dan SOP adherence",
            "Kecepatan beradaptasi tanpa standard",
            "Hubungan personal dengan setiap seller"
        ],
        correctIndex: 1,
        explanation: "E-commerce operations adalah tentang scale dan consistency. SOPs (Standard Operating Procedures) ensure quality dan efficiency pada volume tinggi."
    },
    {
        question: "Bagaimana approach yang tepat untuk policy violation oleh top seller?",
        options: [
            "Ignore karena mereka penting untuk revenue",
            "Evidence-based enforcement dengan due process",
            "Langsung tutup account tanpa warning",
            "Kasih warning tapi nggak ada consequence"
        ],
        correctIndex: 1,
        explanation: "Policy enforcement harus: berbasis bukti, mengikuti due process, dan konsisten — regardless of seller tier. Ini menjaga platform integrity."
    }
];
