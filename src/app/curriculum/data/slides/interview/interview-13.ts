import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK (5-10 mins) ====================
    {
        type: 'title',
        title: "Management Trainee: FMCG Track",
        subtitle: "Session 13: Mastering the Language of Consumer Goods",
        teacherNote: "Goal: Murid familiar dengan vocab FMCG dan siap jawab pertanyaan leadership. Fokus: Unilever, P&G, Wings Group context."
    },
    {
        type: 'concept',
        title: "Why FMCG MT Programs?",
        subtitle: "THE FAST LANE TO LEADERSHIP",
        content: [
            "FMCG MT programs = pipeline CEO. Unilever: CEO DBS, CEO Gojek, CEO Grab — semua dari FMCG MT 💡",
            "English adalah bahasa operasional: meetings, presentations, case studies — semua dalam English",
            "Competition ketat: 10,000+ applicants untuk 20-50 spots. Bedanya? Communication skills.",
            "Kita akan equip kamu dengan vocab dan mindset yang bikin kamu stand out 🌟"
        ],
        teacherNote: "Motivasi murid dengan cerita sukses alumni FMCG. Tekankan: MT bukan cuma kerja, tujuan jadi future leader."
    },
    {
        type: 'comparison',
        title: "The FMCG Mindset Trap",
        subtitle: "Amateur vs Professional Candidate",
        comparison: [
            {
                wrong: "Saya mau ikut MT karena programnya terkenal dan gajinya bagus.",
                right: "I'm drawn to your MT program because of its cross-functional rotations and P&L ownership track record."
            },
            {
                wrong: "Saya suka marketing dan jualan.",
                right: "I'm passionate about understanding consumer insights to drive market share growth."
            }
        ],
        teacherNote: "Jelaskan: yang kanan pakai buzzwords FMCG (cross-functional, P&L, consumer insights, market share) — ini yang HRD cari."
    },

    // ==================== PHASE 2: LOGIC & MECHANICS (15-20 mins) ====================
    {
        type: 'formula',
        title: "The FMCG Answer Formula",
        subtitle: "Consumer Insight → Strategy → Commercial Impact",
        formula: "INSIGHT → STRATEGY → IMPACT",
        content: [
            "INSIGHT: Consumer behavior atau market trend yang kamu identifikasi",
            "STRATEGY: Tindakan atau campaign yang kamu desain",
            "IMPACT: Commercial result — market share, revenue growth, atau brand equity"
        ],
        teacherNote: "FMCG sangat commercially-driven. Semua jawaban harus kembali ke business impact: 'So what?'"
    },
    {
        type: 'int-vocab',
        title: "Essential FMCG Vocabulary",
        subtitle: "Speak Like a Brand Manager",
        interviewVocab: [
            { term: "Market share", meaning: "Pangsa pasar", example: "Our brand holds 35% market share in instant noodles.", category: "Commercial" },
            { term: "Consumer insights", meaning: "Wawasan konsumen", example: "I analyzed consumer insights to reposition the product.", category: "Research" },
            { term: "Cross-functional rotation", meaning: "Rotasi lintas divisi", example: "MT programs offer rotations across marketing, sales, and supply chain.", category: "Career" },
            { term: "Trade marketing", meaning: "Pemasaran perdagangan", example: "I managed trade marketing for 500 modern trade outlets.", category: "Marketing" },
            { term: "P&L ownership", meaning: "Tanggung jawab laba rugi", example: "I took P&L ownership for a Rp2B product line.", category: "Commercial" },
            { term: "Go-to-market strategy", meaning: "Strategi masuk pasar", example: "I developed the GTM strategy for 3 new SKUs.", category: "Strategy" },
            { term: "FMCG distribution", meaning: "Distribusi FMCG", example: "Our distribution covers 50,000 warung across Java.", category: "Operations" },
            { term: "Nielsen/Kantar data", meaning: "Data riset pasar", example: "I use Nielsen data to track competitive performance.", category: "Research" }
        ],
        teacherNote: "Minta murid ulang tiap istilah. Koreksi pronunciation: 'insights' (IN-sights), 'strategy' (STRA-te-jee)."
    },
    {
        type: 'micro-drill',
        title: "FMCG Vocab Integration",
        subtitle: "60-Second Practice",
        mission: [
            "Transform: 'Saya jualan sabun ke warung' → use 'distribution' dan 'trade marketing'",
            "Transform: 'Saya analisa apa yang pelanggan suka' → use 'consumer insights'",
            "Transform: 'Saya tanggung jawab untung rugi produk' → use 'P&L ownership'"
        ],
        teacherNote: "Drill cepat. Murid harus bisa pakai vocab dalam konteks kalimat lengkap."
    },

    // ==================== PHASE 3: UPGRADE & PRACTICE (15-20 mins) ====================
    {
        type: 'int-scenario',
        title: "Scenario: Launching a New Product",
        subtitle: "Pertanyaan: 'How would you launch a new SKU in a saturated market?'",
        interviewScenario: {
            question: "How would you launch a new SKU in a saturated market?",
            starAnswer: {
                situation: "SITUATION: The instant noodle market is dominated by 3 major players with 80% combined market share.",
                task: "TASK: I needed to find a differentiated positioning for our new spicy variant that could capture 5% share in Year 1.",
                action: "ACTION: First, I conducted consumer immersions in 10 cities to identify unmet needs. I discovered that Gen Z wanted 'authentic street food taste' at home. I developed a go-to-market strategy targeting university dorms and late-night snacking occasions. We partnered with 5,000 warungs for sampling and created TikTok challenges.",
                result: "RESULT: We achieved 7% market share in 8 months, exceeding our target by 40%. The product became the #1 choice for consumers aged 18-25 in our Nielsen tracker."
            },
            tip: "FMCG answers need specific numbers: market share percentages, distribution points, timeframes."
        },
        teacherNote: "Highlight: ada consumer insight (Gen Z), ada strategy (TikTok, warung sampling), ada numbers (7%, 5,000 warungs)."
    },
    {
        type: 'int-scenario',
        title: "Scenario: Influencing Without Authority",
        subtitle: "Pertanyaan: 'Tell me about a time you influenced without formal authority'",
        interviewScenario: {
            question: "Tell me about a time you influenced without formal authority.",
            starAnswer: {
                situation: "SITUATION: As a junior in my student organization, I noticed our event sponsorship strategy was outdated — we kept getting rejected by the same companies.",
                task: "TASK: I needed to convince the senior leadership to try a new approach, even though I had no decision-making power.",
                action: "ACTION: I researched 10 successful student events and compiled a data-backed proposal showing FMCG companies now prefer digital partnerships over logo placements. I presented a pilot plan to my supervisor and volunteered to lead a small trial with one brand.",
                result: "RESULT: The pilot secured Rp50M in sponsorship — 3x our previous average. The approach was adopted organization-wide, and I was promoted to Partnership Lead the following semester."
            },
            tip: "FMCG MT requires influencing skills — show you can lead without relying on your title."
        },
        teacherNote: "Penting untuk MT: leadership potential, bukan cuma technical skills."
    },
    {
        type: 'comparison',
        title: "Weak vs Strong FMCG Language",
        comparison: [
            {
                wrong: "We did a promotion and many people bought our product.",
                right: "We executed a trade marketing campaign that drove 15% volume growth in modern trade channels."
            },
            {
                wrong: "I learned a lot from working in different departments.",
                right: "My cross-functional rotations gave me end-to-end supply chain visibility and customer-centric thinking."
            },
            {
                wrong: "The product became popular among young people.",
                right: "We captured significant mindshare with Gen Z, achieving top-of-mind awareness in our target segment."
            }
        ],
        teacherNote: "Strong answers pakai istilah bisnis: volume growth, modern trade, mindshare, top-of-mind awareness."
    },

    // ==================== PHASE 4: SIMULATION & WRAP-UP (5-10 mins) ====================
    {
        type: 'micro-drill',
        title: "Your Turn: 90-Second Pitch",
        subtitle: "Answer: 'Why should we hire you for our MT program?'",
        mission: [
            "Buka dengan hook yang memorable",
            "Sebutkan 2-3 relevant experiences pakai vocab FMCG",
            "Connect your motivation ke company values",
            "90 detik — padat dan powerful! ⏱️"
        ],
        teacherNote: "Ini latihan elevator pitch khusus FMCG. Hitung waktu, kasih feedback spesifik."
    },
    {
        type: 'recap',
        title: "FMCG Interview Essentials",
        subtitle: "Key Phrases to Remember",
        recap: [
            { context: "Commercial Mindset", sayThis: "Market share, P&L ownership, revenue growth", dontSayThis: "Jualan banyak, untung besar" },
            { context: "Consumer Focus", sayThis: "Consumer insights, market research, brand equity", dontSayThis: "Pelanggan suka, produk bagus" },
            { context: "Leadership", sayThis: "Cross-functional, influence without authority, stakeholder management", dontSayThis: "Bekerja sama tim, pinjem orang" },
            { context: "Results", sayThis: "Volume growth up X%, distribution expanded to Y outlets", dontSayThis: "Naik banyak, sudah di banyak tempat" }
        ]
    },
    {
        type: 'mission',
        title: "Prep for Mock Interview",
        subtitle: "Homework Sebelum Session 14",
        mission: [
            "Research 1 FMCG company (Unilever/P&G/Wings) — products, market position, recent campaigns",
            "Prepare 2 STAR stories: one on leadership, one on commercial impact",
            "Practice using 5 FMCG vocab words in natural sentences",
            "Watch 1 YouTube video dari 'A Day in the Life' FMCG Brand Manager"
        ],
        teacherNote: "Persiapkan murid untuk mock interview lengkap di session 14. Mereka harus research company dulu."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Apa arti 'P&L ownership' dalam konteks FMCG MT?",
        options: [
            "Memiliki saham perusahaan",
            "Tanggung jawab atas laba rugi produk/business unit",
            "Memimpin tim penjualan",
            "Mengelola gaji karyawan"
        ],
        correctIndex: 1,
        explanation: "P&L (Profit & Loss) ownership berarti kamu bertanggung jawab atas financial performance sebuah product line atau business unit — revenue, costs, dan profitability."
    },
    {
        question: "Mana yang lebih baik untuk FMCG interview?",
        options: [
            "Our product sold well to young people",
            "We achieved 15% market share growth among Gen Z consumers",
            "Many customers liked our new variant",
            "The promotion was successful"
        ],
        correctIndex: 1,
        explanation: "FMCG interview menghargai commercial awareness dan specific numbers. '15% market share growth among Gen Z' menunjukkan business acumen yang kuat."
    },
    {
        question: "Apa yang dimaksud dengan 'consumer insights'?",
        options: [
            "Data penjualan bulanan",
            "Wawasan mendalam tentang perilaku dan motivasi konsumen",
            "Jumlah pelanggan yang membeli produk",
            "Harga produk kompetitor"
        ],
        correctIndex: 1,
        explanation: "Consumer insights adalah pemahaman mendalam tentang WHY konsumen berperilaku tertentu — motivations, pain points, dan unmet needs yang bisa dijadikan strategi."
    }
];
