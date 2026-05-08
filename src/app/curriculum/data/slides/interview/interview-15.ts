import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Officer Development Program: Banking Track",
        subtitle: "Session 15: Mastering Finance Interview Language",
        teacherNote: "Goal: Murid siap menghadapi interview ODP/MT perbankan. Fokus: BCA, Mandiri, BNI, BRI, dan bank digital seperti Bank Jago."
    },
    {
        type: 'concept',
        title: "The Banking Landscape in Indonesia",
        subtitle: "WHY BANKING? WHY NOW?",
        content: [
            "Perbankan Indonesia tumbuh pesat: digital banking, SME lending, wealth management 📈",
            "ODP programs = fast track ke managerial positions dalam 2-3 tahun",
            "English skills critical: regulatory reports, international partnerships, investor presentations",
            "Tahun ini competition meningkat dengan masuknya bank digital (Jago, Blu, SeaBank)"
        ],
        teacherNote: "Context setting: banking di Indonesia sedang transformasi. Digitalisasi membutuhkan talent yang bisa bridge traditional banking dan tech."
    },
    {
        type: 'comparison',
        title: "The Banking Mindset Check",
        comparison: [
            {
                wrong: "Saya mau kerja di bank karena gajinya stabil dan kerjaannya enak.",
                right: "I'm excited about the opportunity to contribute to financial inclusion while developing expertise in risk management and corporate banking."
            },
            {
                wrong: "Saya suka hitung-hitungan dan uang.",
                right: "I'm passionate about analyzing financial data to support sound lending decisions and help businesses grow."
            }
        ],
        teacherNote: "Banking interviews mencari: risk awareness, customer focus, dan long-term career commitment. Bukan cuma 'gaji stabil'."
    },

    // ==================== PHASE 2: LOGIC & MECHANICS ====================
    {
        type: 'formula',
        title: "The Banking Answer Framework",
        subtitle: "Risk Awareness + Customer Focus + Regulatory Compliance",
        formula: "RISK → CUSTOMER → COMPLIANCE",
        content: [
            "RISK: Identifikasi, assess, dan mitigasi risiko finansial dan operasional",
            "CUSTOMER: Pahami kebutuhan customer untuk solusi yang tepat",
            "COMPLIANCE: Pastikan semua proses sesuai regulasi OJK, BI, dan internal policy"
        ],
        teacherNote: "Banking adalah industry yang highly regulated. Setiap jawaban harus show risk awareness dan compliance mindset."
    },
    {
        type: 'int-vocab',
        title: "Essential Banking Vocabulary",
        subtitle: "ODP Must-Know Terms",
        interviewVocab: [
            { term: "Credit analysis", meaning: "Analisis kelayakan kredit", example: "I performed credit analysis for corporate loan applications.", category: "Core" },
            { term: "Risk management", meaning: "Manajemen risiko", example: "Our risk framework follows Basel III standards.", category: "Core" },
            { term: "Compliance", meaning: "Kepatuhan regulasi", example: "I ensure all processes comply with OJK regulations.", category: "Regulatory" },
            { term: "Portfolio management", meaning: "Manajemen portofolio", example: "I managed a client portfolio worth Rp50B.", category: "Wealth" },
            { term: "Non-performing loan (NPL)", meaning: "Kredit bermasalah", example: "I reduced NPL ratio from 3.2% to 1.8%.", category: "Risk" },
            { term: "Financial product", meaning: "Produk keuangan", example: "I cross-sell 5 financial products to priority clients.", category: "Sales" },
            { term: "Due diligence", meaning: "Uji tuntas", example: "I conducted due diligence for a Rp100B acquisition.", category: "Corporate" },
            { term: "Capital adequacy", meaning: "Kecukupan modal", example: "Our CAR remains above the 12% regulatory minimum.", category: "Regulatory" }
        ],
        teacherNote: "ODP banking butuh vocab yang solid. Minta murid practice pronunciation: 'portfolio', 'compliance', 'adequacy'."
    },
    {
        type: 'concept',
        title: "Indonesia Banking Regulators",
        subtitle: "KNOW YOUR STAKEHOLDERS",
        content: [
            "🇮🇳 **OJK (Otoritas Jasa Keuangan)**: Regulator utama perbankan — licensing, supervision, consumer protection",
            "🏦 **BI (Bank Indonesia)**: Sistem pembayaran, monetary policy, financial stability",
            "📋 **LPS (Lembaga Penjamin Simpanan)**: Deposit insurance untuk nasabah",
            "📊 **KBMI (Kategori Bank)**: BUKU 1, 2, 3, 4 — menentukan scope of business",
            "💡 Knowing these shows you're serious about the industry"
        ],
        teacherNote: "Basic knowledge tentang regulator penting untuk show industry awareness. Murid harus tahu OJK dan BI."
    },

    // ==================== PHASE 3: PRACTICE ====================
    {
        type: 'int-scenario',
        title: "Scenario: Credit Analysis Case",
        subtitle: "Pertanyaan: 'Walk me through your credit analysis process'",
        interviewScenario: {
            question: "Walk me through how you would analyze a corporate loan application.",
            starAnswer: {
                situation: "SITUATION: A manufacturing company applies for a Rp10B working capital loan to expand production capacity.",
                task: "TASK: I need to assess creditworthiness while balancing business growth opportunity with risk exposure.",
                action: "ACTION: First, I conduct financial analysis — reviewing 3-year financial statements, cash flow patterns, and debt service coverage ratio. Second, I perform industry analysis to understand sector risks. Third, I evaluate collateral and guarantor strength. Fourth, I meet the management to assess their capability and integrity. Finally, I prepare a credit memo with risk rating and recommendation.",
                result: "RESULT: My analysis identified strong cash flow but seasonal volatility. I recommended approval with conditions: quarterly financial reporting and maximum 70% of credit line utilization during off-peak seasons."
            },
            tip: "Banking case answers need to show thoroughness, risk awareness, dan balanced decision-making."
        },
        teacherNote: "Highlight struktur yang systematic. Banking suka process-oriented answers."
    },
    {
        type: 'int-scenario',
        title: "Scenario: Handling Pressure",
        subtitle: "Pertanyaan: 'How do you handle tight deadlines in banking?'",
        interviewScenario: {
            question: "Banking often involves tight deadlines. How do you handle pressure?",
            starAnswer: {
                situation: "SITUATION: At my previous internship, I had to process 50+ loan applications in one week due to a promotional campaign deadline.",
                task: "TASK: I needed to maintain accuracy and compliance while meeting the deadline.",
                action: "ACTION: I prioritized applications by completeness and risk level. I created a checklist to ensure no compliance steps were skipped. I communicated proactively with my supervisor about potential bottlenecks. I worked efficiently but never sacrificed thoroughness for speed.",
                result: "RESULT: I completed all applications on time with 98% accuracy — the highest in my batch. My supervisor commended my balance of efficiency and risk awareness."
            },
            tip: "Banking values accuracy over speed. Show you can deliver both without cutting corners."
        },
        teacherNote: "Banking: risk management adalah priority. Murid harus tunjukkan mereka tidak akan 'skip steps' demi kecepatan."
    },
    {
        type: 'comparison',
        title: "Banking Language Upgrade",
        comparison: [
            {
                wrong: "I checked if the customer could pay back the loan.",
                right: "I assessed the borrower's debt service capacity and cash flow stability."
            },
            {
                wrong: "We have to follow the rules from the government.",
                right: "We maintain strict compliance with OJK regulations and internal risk policies."
            },
            {
                wrong: "I help rich people manage their money.",
                right: "I provide tailored wealth management solutions for high-net-worth individuals."
            }
        ],
        teacherNote: "Professional banking language: debt service capacity, compliance, high-net-worth, tailored solutions."
    },

    // ==================== PHASE 4: WRAP-UP ====================
    {
        type: 'micro-drill',
        title: "Banking Vocab in Action",
        subtitle: "Transform These Statements",
        mission: [
            "'Saya cek laporan keuangan perusahaan' → use 'financial statement analysis'",
            "'Saya jual tabungan dan deposito' → use 'cross-sell financial products'",
            "'Nasabah saya orang kaya' → use 'priority/HNW clients'",
            "'Saya ikuti aturan' → use 'compliance and risk management'"
        ],
        teacherNote: "Latihan mengubah bahasa casual ke professional banking language."
    },
    {
        type: 'recap',
        title: "ODP Banking Interview Essentials",
        recap: [
            { context: "Risk Awareness", sayThis: "Risk assessment, mitigation, NPL management", dontSayThis: "Aman-aman aja, nggak ada masalah" },
            { context: "Regulatory Knowledge", sayThis: "OJK compliance, BI regulations, CAR ratio", dontSayThis: "Ikuti aturan perusahaan" },
            { context: "Customer Focus", sayThis: "Financial solutions, relationship management, cross-selling", dontSayThis: "Jual produk bank" },
            { context: "Professionalism", sayThis: "Due diligence, credit analysis, portfolio management", dontSayThis: "Kerjaan bank biasa" }
        ]
    },
    {
        type: 'mission',
        title: "Prep for Banking Mock Interview",
        subtitle: "Session 16 Preparation",
        mission: [
            "Research 2 banks: 1 conventional (BCA/Mandiri/BNI) dan 1 digital (Jago/Blu/SeaBank)",
            "Pelajari struktur ODP program dan career path-nya",
            "Siapkan jawaban untuk: 'Why banking?' dan 'Why our bank?'",
            "Review berita terkini perbankan Indonesia (merger, digital banking, dll)",
            "Practice menjelaskan konsep: credit risk, liquidity, financial inclusion"
        ],
        teacherNote: "Persiapkan murid untuk mock interview lengkap di session 16. Research bank spesifik sangat penting."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Apa fungsi utama OJK dalam perbankan Indonesia?",
        options: [
            "Mengatur suku bunga bank",
            "Regulasi dan supervisi industri jasa keuangan",
            "Menyediakan deposit insurance",
            "Mengelola cadangan devisa negara"
        ],
        correctIndex: 1,
        explanation: "OJK (Otoritas Jasa Keuangan) adalah regulator utama yang melakukan regulasi, supervisi, dan consumer protection untuk industri jasa keuangan termasuk perbankan."
    },
    {
        question: "Apa yang dimaksud dengan NPL (Non-Performing Loan)?",
        options: [
            "Pinjaman baru yang disetujui",
            "Kredit yang bermasalah/tidak lancar",
            "Pinjaman dengan bunga tinggi",
            "Kredit untuk perusahaan asing"
        ],
        correctIndex: 1,
        explanation: "NPL adalah kredit bermasalah atau non-performing loan — pinjaman yang pembayarannya tertunggak atau tidak lancar. NPL ratio yang tinggi berarti risiko kredit bank besar."
    },
    {
        question: "Mana yang lebih profesional untuk banking interview?",
        options: [
            "I help rich people manage money",
            "I provide wealth management solutions for high-net-worth clients",
            "I sell banking products to rich customers",
            "I work with people who have lots of money"
        ],
        correctIndex: 1,
        explanation: "'Provide wealth management solutions for high-net-worth clients' adalah bahasa professional banking yang menunjukkan expertise dan customer-centric approach."
    }
];
