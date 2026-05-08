import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Mock Interview: ODP Banking",
        subtitle: "Session 16: The Banking Assessment Simulation",
        teacherNote: "Full mock interview untuk ODP banking. Simulasikan panel interview dengan case study dan behavioral questions."
    },
    {
        type: 'pres-mindset',
        title: "The Banking Professional Persona",
        subtitle: "What ODP Panels Look For",
        mindset: {
            before: "Saya mau jadi pegawai bank dengan gaji bagus.",
            after: "Saya ingin berkontribusi pada stabilitas finansial Indonesia sambil membangun karir di risk management.",
            bridgeText: "Banking is a trust business. Show integrity, diligence, and long-term thinking."
        },
        teacherNote: "ODP banking mencari candidates yang: trustworthy, detail-oriented, dan punya growth mindset."
    },
    {
        type: 'pres-checklist',
        title: "Pre-Mock Checklist",
        subtitle: "Banking Interview Ready?",
        checklist: {
            title: "ODP Ready",
            items: [
                "✅ Banking News: 1-2 berita terkini perbankan Indonesia",
                "✅ Company Research: Visi, misi, dan program ODP bank target",
                "✅ Risk Awareness: Bisa jelaskan credit risk dan compliance",
                "✅ Personal Stories: 2 STAR stories (academic/organisasi/kerja)"
            ]
        },
        teacherNote: "Final check sebelum mock. Banking interviews sangat memperhatikan preparation dan attention to detail."
    },

    // ==================== PHASE 2: MOCK SETUP ====================
    {
        type: 'int-mock',
        title: "Role Card: ODP Candidate",
        subtitle: "Company: Bank Mandiri (Fictional Assessment)",
        mockInterview: {
            jobTitle: "Officer Development Program (ODP)",
            company: "Bank Mandiri",
            context: "Kamu fresh graduate dari akuntansi/bisnis/management dengan IPK 3.5+. Ini panel interview dengan HR Business Partner dan Branch Manager. Mereka mencari: integrity, analytical skills, dan customer orientation.",
            questions: [
                "1. Why banking? Why Bank Mandiri specifically?",
                "2. Explain Indonesia's current banking landscape in 2 minutes.",
                "3. Tell me about a time you had to make a decision with incomplete information.",
                "4. How would you handle a priority client asking for a loan that doesn't meet our risk criteria?",
                "5. Where do you see yourself after completing the ODP program?"
            ]
        },
        teacherNote: "Jadilah interviewer yang profesional dan probing. Banking interviews cenderung formal dan structured."
    },
    {
        type: 'comparison',
        title: "ODP Answer Quality",
        comparison: [
            {
                wrong: "I want to join because Bank Mandiri is the biggest bank and ODP is a good program.",
                right: "I'm drawn to Bank Mandiri's leadership in digital transformation and financial inclusion. Your ODP program's rotation structure will give me the breadth to find my specialization while contributing to Indonesia's banking sector."
            },
            {
                wrong: "Saya akan jadi manager dalam 5 tahun.",
                right: "I see myself developing expertise in corporate banking or risk management, eventually leading a team that drives sustainable lending growth while maintaining portfolio quality."
            }
        ],
        teacherNote: "ODP panels mencari: specific company knowledge, realistic career expectations, dan genuine interest dalam banking industry."
    },

    // ==================== PHASE 3: SIMULATIONS ====================
    {
        type: 'simulation',
        title: "Round 1: Motivation & Industry Knowledge",
        subtitle: "Banking Fundamentals (8 Minutes)",
        simulation: {
            role: "ODP Candidate untuk Bank Mandiri",
            scenario: "Tutor menanyakan: 'Why banking?' dan 'Explain the current banking landscape in Indonesia.' Uji pengetahuan dan passion.",
            goal: "Tunjukkan industry awareness: digital banking trends, financial inclusion, mergers, dan regulatory changes",
            timeLimit: 480
        },
        teacherNote: "Banking interview sering mulai dengan industry knowledge. Murid harus show they read the news dan understand the landscape."
    },
    {
        type: 'concept',
        title: "Banking Landscape Talking Points",
        subtitle: "Current Issues to Know",
        content: [
            "📱 **Digital Banking**: Bank digital (Jago, Blu, SeaBank) disrupting traditional models",
            "🤝 **Consolidation**: Mergers bank (BRI-AGRO, dkk) untuk mencapai economies of scale",
            "🏘️ **SME Lending**: Fokus pada UMKM sebagai growth engine perekonomian",
            "🌿 **Sustainable Finance**: Green banking dan ESG-compliant lending",
            "📊 **NPL Management**: Managing credit quality post-pandemic"
        ],
        teacherNote: "Ini talking points yang bisa murid gunakan. Sesuaikan dengan berita terkini saat session berlangsung."
    },
    {
        type: 'simulation',
        title: "Round 2: Case & Ethics",
        subtitle: "Risk vs Relationship Dilemma (8 Minutes)",
        simulation: {
            role: "ODP Candidate",
            scenario: "Tutor: 'A priority client of 10 years asks for a Rp5B loan expansion. Your analysis shows cash flow risks. The client pressures you to approve. What do you do?'",
            goal: "Tunjukkan: integrity, risk awareness, diplomatic communication, dan problem-solving. Jangan cuma 'approve' atau 'reject'.",
            timeLimit: 480
        },
        teacherNote: "Ini ethics case. Jawaban terbaik: acknowledge relationship, explain risk objectively, offer alternative solutions."
    },
    {
        type: 'int-scenario',
        title: "Model Answer: The Ethics Dilemma",
        interviewScenario: {
            question: "A priority client asks for a loan that doesn't meet risk criteria. What do you do?",
            starAnswer: {
                situation: "SITUATION: A long-standing priority client requests a Rp5B expansion loan. My analysis identifies cash flow concerns due to seasonal business patterns.",
                task: "TASK: I need to balance maintaining the relationship with protecting the bank's interests and adhering to risk policies.",
                action: "ACTION: First, I would meet the client in person to understand their expansion plan in detail. Then, I would transparently explain my analysis — not as a rejection, but as risk awareness. I would propose alternatives: a smaller initial facility, structured drawdowns tied to milestones, or additional collateral. I would involve my supervisor early to ensure alignment.",
                result: "RESULT: This approach shows integrity and professionalism. The client respects the thoroughness, and we potentially structure a facility that works for both parties. Even if they proceed elsewhere, the relationship remains positive and our risk exposure is controlled."
            },
            tip: "Banking ethics: never compromise on risk, but always offer solutions. Show you can handle difficult conversations."
        },
        teacherNote: "Highlight: integritas + diplomacy. Banking adalah trust business — tidak bisa kompromi pada risk, tapi juga tidak bisa kehilangan relationship."
    },

    // ==================== PHASE 4: EVALUATION ====================
    {
        type: 'concept',
        title: "ODP Assessment Rubric",
        subtitle: "Your Performance Today",
        content: [
            "📚 **Industry Knowledge**: Apakah kamu paham landscape perbankan? (1-5)",
            "🧮 **Analytical Thinking**: Apakah case analysis-mu structured dan logical? (1-5)",
            "⚖️ **Integrity**: Apakah kamu show principled decision-making? (1-5)",
            "💬 **Communication**: Apakah kamu articulate dengan jelas dan profesional? (1-5)",
            "🎯 **Motivation**: Apakah passion kamu untuk banking genuine? (1-5)"
        ],
        teacherNote: "Beri score dan feedback. Banking ODP sangat kompetitif — murid perlu tahu di mana mereka stand."
    },
    {
        type: 'recap',
        title: "Banking Interview Success Factors",
        recap: [
            { context: "Preparation", sayThis: "Research company + industry news", dontSayThis: "Just wing it" },
            { context: "Risk Language", sayThis: "Credit analysis, compliance, mitigation", dontSayThis: "Aman, biasa aja" },
            { context: "Ethics", sayThis: "Principled decisions with diplomatic communication", dontSayThis: "Whatever the client wants" },
            { context: "Career View", sayThis: "Long-term growth in banking expertise", dontSayThis: "Just a stepping stone" }
        ]
    },
    {
        type: 'mission',
        title: "Continue Your Banking Prep",
        subtitle: "Action Items",
        mission: [
            "📰 Follow berita perbankan harian (Kontan, Bisnis Indonesia, OJK website)",
            "📊 Review laporan tahunan 1 bank besar (BCA/Mandiri) untuk understand structure",
            "🎤 Practice menjelaskan konsep banking dengan bahasa sederhana",
            "📝 Tulis essay: 'Why I want to join banking' — refine sampai convincing",
            "🤝 Network dengan alumni ODP untuk insight program"
        ],
        teacherNote: "Banking interview preparation adalah continuous process. Dorong murid untuk stay updated dengan industry."
    },
    {
        type: 'title',
        title: "ODP Banking: Ready to Apply! 🏦",
        subtitle: "You're Equipped for the Banking Assessment",
        teacherNote: "Apresiasi usaha murid. Tekankan: banking interview butuh preparation yang ongoing. Next: Startup Management Associate!"
    }
];

export const quiz: QuizQuestion[] = [];
