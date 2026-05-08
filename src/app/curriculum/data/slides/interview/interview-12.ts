import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ========== PHASE 1: HOOK (slides 1-3) ==========
    {
        type: 'title',
        title: "Mock Interview: Data Analyst",
        subtitle: "Session 12: The Insight & Logic Simulation",
        teacherNote: "Hari ini adalah ujian pembuktian para Analyst. Fokus utama simulasi ini: Apakah murid bisa mengubah data mentah menjadi rekomendasi bisnis yang actionable? Jangan biarkan murid hanya bicara kode tanpa bicara impact."
    },
    {
        type: 'pres-mindset',
        title: "Mindset: The Business Partner",
        subtitle: "Shift dari 'Mesin Penarik Data' ke 'Pemberi Saran'",
        mindset: {
            before: "Tugas saya adalah menyiapkan dashboard agar bos bisa melihat angkanya.",
            after: "Tugas saya adalah menemukan insight agar perusahaan bisa mengambil keputusan lebih baik.",
            bridgeText: "Data without a story is just noise."
        },
        teacherNote: "Ingatkan murid: Mereka dinilai dari seberapa besar 'Commercial Awareness' mereka, bukan hanya seberapa jago mereka pakai fungsi SQL."
    },
    {
        type: 'pres-checklist',
        title: "Presentation Checklist",
        subtitle: "Persiapan Share Screen Data Study",
        checklist: {
            title: "Virtual Dashboard Ready",
            items: [
                "✅ Dashboard / Report: Link sudah siap dibuka (Tableau, Looker, dsb).",
                "✅ The 'So What?': Tahu persis 1 kesimpulan utama dari visualisasi tersebut.",
                "✅ Technical Simplicity: Siapkan analogi kalau Interviewer bertanya soal model statistik yang dipakai."
            ]
        },
        teacherNote: "Beri waktu 1 menit untuk murid setup tab browser mereka sebelum simulasi dimulai."
    },

    // ========== PHASE 2: LOGIC & MECHANICS (slides 4-8) ==========
    {
        type: 'int-mock',
        title: "Role Card: Data Analyst",
        subtitle: "Company: 'FinTechKu' (Digital Payment App)",
        mockInterview: {
            jobTitle: "Mid-level Data Analyst",
            company: "FinTechKu Indonesia",
            context: "FinTechKu sedang mengalami stagnasi user aktif bulanan (MAU). Tim Growth meminta bantuanmu mencari tahu alasannya. Kamu akan di-interview oleh Head of Data.",
            questions: [
                "1. Walk me through a project where your analysis directly influenced a business decision.",
                "2. Tell me about a time you found an error in your own data or report. How did you handle it?",
                "3. Suppose the CEO wants a dashboard built by tomorrow, but the data is messy. What do you do?",
                "4. Explain the difference between 'LEFT JOIN' and 'INNER JOIN' to a Sales Manager."
            ]
        },
        teacherNote: "Jadilah Head of Data yang pragmatis. Incar jawaban yang efisien secara waktu dan berdampak secara finansial."
    },
    {
        type: 'comparison',
        title: "Explaining Impact",
        comparison: [
            {
                wrong: "Saya membersihkan data pelanggan yang error pakai Python lalu saya masukkan ke database.",
                right: "I automated the data cleaning pipeline, which reduced manual reporting time by 10 hours a week and ensured 99% accuracy for the marketing team's weekly campaigns."
            }
        ],
        teacherNote: "Kanan menyebutkan angka nyata ('10 hours a week', '99% accuracy'). Itulah bahasa Analyst sejati."
    },
    {
        type: 'concept',
        title: "The Logic Test",
        subtitle: "Handling 'Guesstimate' Questions",
        content: [
            "1. **Clarify assumptions**: 'Is this calculation per day or per month?'",
            "2. **Break it down**: 'I will estimate the number of users, multiply by average transaction...'",
            "3. **Think out loud**: Jangan kerjakan di otak (diam). Kerjakan dengan bersuara (English).",
            "4. **Don't panic over exact math**: Interviewer menilai 'Logic'-mu, bukan kalkulatormu."
        ],
        teacherNote: "Pertanyaan Guesstimate (Brainteaser) sangat sering muncul di Tech Company besar (Berapa banyak bola pingpong yang muat di dalam bus?)."
    },
    {
        type: 'int-scenario',
        title: "Handling the Disbelieving Stakeholder",
        interviewScenario: {
            question: "What if the Marketing Director says your data is wrong because their 'gut feeling' says otherwise?",
            starAnswer: {
                situation: "The Sales Head didn't believe my report showing that Promo A was losing money.",
                task: "Prove the data accuracy politely but firmly.",
                action: "I walked them through the data sources step-by-step to show transparency. Then, I suggested running a small live A/B test to prove the initial findings.",
                result: "The test confirmed the data. They appreciated my collaborative approach and stopped doubting the metrics."
            },
            tip: "Never say 'You are wrong'. Say 'Let's validate this together'."
        },
        teacherNote: "Ini uji mental. Analyst sering kali membawa 'Kabar Buruk' ke departemen lain."
    },
    {
        type: 'micro-drill',
        title: "Metric Prioritization",
        subtitle: "Think Fast!",
        mission: [
            "Tutor: 'Kita mau launch fitur Investasi Emas di aplikasi ini.'",
            "Murid: Sebutkan 2 KPI paling penting untuk memantau kesuksesan peluncuran ini.",
            "Jawaban yang bagus: 'First-time depositors', 'Daily Trading Volume'."
        ],
        teacherNote: "Latih insting bisnis murid."
    },

    // ========== PHASE 3: THE SIMULATION (slides 9-11) ==========
    {
        type: 'simulation',
        title: "Mock Phase: The Dashboard Review",
        subtitle: "10 Minutes of Deep Diving",
        simulation: {
            role: "Senior Data Interviewer",
            scenario: "Murid share screen portfolionya. Tutor tanya: 'What was the biggest data quality issue here?' dan 'If I only had 30 seconds, what is the one insight I should take from this chart?'.",
            goal: "Murid harus mampu mengerucutkan informasi kompleks menjadi 1 kalimat Business Insight.",
            timeLimit: 600
        },
        teacherNote: "Potong murid jika mereka terlalu lama membahas technical setup (seperti query SQL-nya panjang). Minta mereka fokus ke 'Hasil'."
    },
    {
        type: 'simulation',
        title: "Mock Phase: The Technical Behavioral",
        subtitle: "Pressure Test (5 Minutes)",
        simulation: {
            role: "Engineering Manager",
            scenario: "Tutor: 'Our data warehouse broke last night. The CEO needs the monthly report in 1 hour. What is your action plan?'",
            goal: "Melihat apakah murid bisa mencari jalan pintas (misal: menarik data kasar dari backup/CSV sementara) atau malah panik.",
            timeLimit: 300
        },
        teacherNote: "Jawaban terbaik adalah komunikasi (lapor atasan) lalu memberikan 'Estimasi Minimal' bukan 'Kesempurnaan'."
    },
    {
        type: 'int-scenario',
        title: "Killer Question: Analytics Tooling",
        interviewScenario: {
            question: "Why do you prefer Python over SQL for this specific task?",
            starAnswer: {
                situation: "Interviewer is testing if you use tools blindly or strategically.",
                task: "Show that you pick tools based on the problem, not preference.",
                action: "I used SQL for the initial heavy lifting to extract the core dataset efficiently. However, I switched to Python (Pandas) because I needed to run complex predictive algorithms that SQL couldn't handle elegantly.",
                result: "This hybrid approach saved processing power and delivered the prediction model 2 days early."
            },
            tip: "There are no 'Best' tools, only 'Best Fits'."
        },
        teacherNote: "Murid dilarang menjelek-jelekkan suatu bahasa pemrograman/tool."
    },

    // ========== PHASE 4: EVALUATION & MISSION (slides 12-13) ==========
    {
        type: 'concept',
        title: "The Data Analyst Evaluation Rubric",
        subtitle: "How you were graded today",
        content: [
            "📊 **Actionable Insight**: Apakah kesimpulanmu bisa dibuat 'Bahan Keputusan' (Score 1-5).",
            "💬 **Simplicity**: Pintar menyederhanakan jargon teknis (Score 1-5).",
            "🛡️ **Data Integrity Defense**: Cara menangani data error/hilang dengan jujur (Score 1-5).",
            "📈 **Business Metric Awareness**: Paham CAC, LTV, Churn, dll (Score 1-5)."
        ],
        teacherNote: "Berikan score yang adil. Fokus pada kelancaran English saat menjelaskan angka."
    },
    {
        type: 'mission',
        title: "Your Professional Journey",
        subtitle: "The Next Steps",
        mission: [
            "1. Rapikan 1 project di Github/Portfolio berdasarkan feedback mock hari ini.",
            "2. Biasakan membaca 'Tech Blog' dari perusahaan Gojek/Grab/Netflix (Data Engineering section).",
            "3. Pertahankan konsistensi latihan English-mu di dunia karir!"
        ],
        teacherNote: "Beri ucapan selamat yang luar biasa! Ini adalah materi karir spesifik terakhir. Persiapkan mereka untuk menaklukkan dunia Tech!"
    }
];

export const quiz: QuizQuestion[] = [];
