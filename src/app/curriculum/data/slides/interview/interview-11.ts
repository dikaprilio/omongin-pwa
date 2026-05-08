import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ========== PHASE 1: HOOK (slides 1-3) ==========
    {
        type: "title",
        title: "Data Analyst: Decoding Business Value",
        subtitle: "Session 11: Data Vocabulary & Insight Delivery",
        teacherNote: "Selamat datang di dunia Data! Poin utamanya bukan cuma 'Coding', tapi 'Storytelling'. HRD mau tau: Bisakah murid jelasin angka rumit ke orang Marketing atau Sales?"
    },
    {
        type: "concept",
        title: "Why English for Data Analysts?",
        subtitle: "Bridging the Gap",
        content: [
            "1. **Explaining Data Quality**: Menjelaskan kenapa data 'kotor' ke non-tech team.",
            "2. **Presenting Insights**: Menjelaskan 'Why revenue dropped' tanpa membuat panik.",
            "3. **Global Alignment**: Data team di Indonesia sering report ke stakeholder luar negeri."
        ],
        teacherNote: "Tekankan bahwa Data Analyst adalah 'Translator' antara data mentah dan keputusan bisnis."
    },
    {
        type: "comparison",
        title: "Amateur vs Professional Intro",
        comparison: [
            {
                wrong: "I am a data person. I like SQL and Python. I use Excel to make charts.",
                right: "I'm a Data Analyst focused on business intelligence. I use SQL and Python to build automated dashboards that identify key growth drivers."
            }
        ],
        teacherNote: "Bandingkan: Kiri terlalu pasif. Kanan menggunakan 'Focused', 'Automated', dan 'Growth drivers'."
    },

    // ========== PHASE 2: LOGIC & MECHANICS (slides 4-8) ==========
    {
        type: "int-vocab",
        title: "Industry Vocab: Tech & Metrics",
        interviewVocab: [
            { term: "ETL Pipeline", meaning: "Proses tarik-ubah-muat data", example: "I optimized our ETL pipeline to handle real-time data.", category: "infrastructure" },
            { term: "Conversion Rate", meaning: "Persentase user yang melakukan 'action'", example: "The A/B test led to a 5% increase in conversion rate.", category: "metrics" },
            { term: "Churn Rate", meaning: "Persentase user yang berhenti pakai app", example: "I performed an analysis to find out why our churn rate spiked.", category: "metrics" },
            { term: "Cohort Analysis", meaning: "Analisa perilaku kelompok user", example: "Cohort analysis revealed that Q1 users have higher LTV.", category: "method" },
            { term: "Dashboarding", meaning: "Pembuatan visualisasi metrik", example: "I built interactive dashboards in Tableau for the Sales team.", category: "process" }
        ],
        teacherNote: "Metric adalah 'bahasa' CEO/PM. Murid harus sangat lancar menyebutkan Churn dan Conversion."
    },
    {
        type: "formula",
        title: "The Data Storytelling Formula",
        subtitle: "Observation + Impact + Action",
        formula: "The Metric Change + Why it matters to Business + What we should do",
        teacherNote: "Contoh: 'Revenue dropped 10% (Observation) due to a technical bug (Impact). We need to fix the checkout flow immediately (Action).'"
    },
    {
        type: "comparison",
        title: "Explaining Technical Concepts",
        comparison: [
            {
                wrong: "Saya pakai SQL JOIN buat dapet datanya terus saya group by.",
                right: "I consolidated data from multiple tables using SQL to get a holistic view of the customer journey."
            }
        ],
        teacherNote: "Kanan terdengar lebih strategis. Kata 'Holistic' dan 'Consolidated' sangat powerful."
    },
    {
        type: "concept",
        title: "Must-Know Jargon: Data Quality",
        subtitle: "When things go wrong",
        content: [
            "**Data Integrity**: Keutuhan dan akurasi data.",
            "**Anomaly Detection**: Menemukan data 'aneh' (outliers).",
            "**Single Source of Truth (SSOT)**: 1 database yang paling valid.",
            "**Granularity**: Tingkat kedetailan data (Hourly vs Monthly)."
        ],
        teacherNote: "Gunakan terminologi ini saat menjawab pertanyaan 'What's your biggest challenge?' (Membersihkan data kotor)."
    },
    {
        type: "micro-drill",
        title: "The 'So What?' Challenge",
        subtitle: "Connecting Numbers to Money",
        mission: [
            "Tutor: 'Conversion rate kita naik 2%.'",
            "Murid: Jelaskan kenapa ini bagus buat bisnis dalam English.",
            "Kata kunci: 'Revenue', 'User Growth', 'Marketing Efficiency'."
        ],
        teacherNote: "Ini latihan mental agar murid selalu bertanya 'So What?' ke setiap angka yang mereka hitung."
    },

    // ========== PHASE 3: PRACTICE (slides 9-11) ==========
    {
        type: "int-scenario",
        title: "Scenario: Presenting to Non-Tech",
        interviewScenario: {
            question: "How do you explain a complex model to a non-technical Marketing Head?",
            starAnswer: {
                situation: "I had to explain a churn prediction model to the Sales team.",
                task: "Make the concept accessible without losing its significance.",
                action: "I used a 'Leaky Bucket' analogy to explain churn. I focused on the 'Who' and 'Why', not the 'Math'.",
                result: "They understood immediately and changed their customer follow-up strategy."
            },
            tip: "Use analogies. Focus on the 'Actionable Insight', not the Python code."
        },
        teacherNote: "Analogi 'Leaky Bucket' sangat populer untuk menjelaskan Churn Rate."
    },
    {
        type: "int-scenario",
        title: "Scenario: Data Integrity Issue",
        interviewScenario: {
            question: "What do you do if you find a major error in a report you've already sent?",
            starAnswer: {
                situation: "I realized my revenue calculation was off by 5% after the sync meeting.",
                task: "Take accountability and fix the error without losing trust.",
                action: "I immediately notified the team, explained the anomaly, and sent the corrected version within an hour.",
                result: "Stakeholders appreciated my transparency. We now have a peer-review step."
            },
            tip: "Honesty > Saving face. In data, trust is everything."
        },
        teacherNote: "Interviewer cari 'Integrity'. Data salah bisa diperbaiki, tapi trust yang hilang susah balik."
    },
    {
        type: "micro-drill",
        title: "Metric Recommendation",
        subtitle: "The Business Strategist",
        mission: [
            "Aplikasi e-commerce baru mau buka.",
            "Sebutkan 3 KPI yang harus dipantau paling awal dalam English.",
            "Contoh: 'DAU (Daily Active Users)', 'CAC (Customer Acquisition Cost)', 'Retention'."
        ],
        teacherNote: "Latihan 'Strategic Thinking'. Analyst bukan cuma disuruh narik data, tapi juga merekomendasikan."
    },

    // ========== PHASE 4: SIMULATION (slides 12-13) ==========
    {
        type: "simulation",
        title: "The 'Briefing' Simulation",
        subtitle: "Dashboard Presentation",
        simulation: {
            role: "Product Manager",
            scenario: "Tutor: 'I see a dip in our checkout conversion last Friday. Can you explain why based on your analysis?'.",
            goal: "Murid harus menceritakan flow: Data source → Finding → Potential Root Cause → Actionable Recommendation.",
            timeLimit: 180
        },
        teacherNote: "Cek apakah murid menggunakan logical connectors yang profesional (Firstly, Consequently, Therefore)."
    },
    {
        type: "recap",
        title: "Mission for Material 12",
        subtitle: "The Data Mock Interview",
        recap: [
            { context: "Accuracy", sayThis: "Data integrity, Validation, Anomaly detection", dontSayThis: "Cek angkanya bener apa nggak" },
            { context: "Communication", sayThis: "Actionable insights, Explaining 'Why'", dontSayThis: "Saya cuma kasih tabel Excelnya" },
            { context: "Business Value", sayThis: "LTV, CAC, Retention, Conversion", dontSayThis: "Biar untung dan banyak yang pake" }
        ],
        teacherNote: "Sesi depan adalah Full Mock Interview untuk Data Analyst. Ingatkan murid siapkan 1 project portofolio."
    }
];

export const quiz: QuizQuestion[] = [];
