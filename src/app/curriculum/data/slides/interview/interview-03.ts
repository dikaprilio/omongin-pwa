import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Strengths & Weaknesses",
        subtitle: "Cara Jawab Pertanyaan Jebakan yang Paling Ditakuti 😰",
        teacherNote: "Goal: Murid mengerti kenapa pertanyaan ini berbahaya dan sering jadi 'make or break' di interview. Ini Session 3 dari Core Interview Skills, ID 183."
    },
    {
        type: 'concept',
        title: "The Trap: Kenapa Pertanyaan Ini Berbahaya?",
        subtitle: "HATI-HATI! ⚠️",
        content: [
            "Ini pertanyaan PALING sulit di interview — bukan karena jawabannya, tapi karena JEBAKANNYA",
            "Jawab terlalu sok: 'Saya paling hebat!' → Kelihatan arrogant 🤢",
            "Jawab terlalu jujur: 'Saya malas bangun pagi' → Auto reject ❌",
            "Jawab fake: 'Saya perfectionist' → HRD udah bosan dengerin (cliché)",
            "Goal: Tunjukkan self-awareness + growth mindset — bukan cari simpati atau pamer"
        ],
        teacherNote: "Cerita ke murid: HRD punya 'radar' khusus untuk detek jawaban bohong. Mereka interview ratusan orang, mereka tahu mana yang authentic."
    },
    {
        type: 'comparison',
        title: "Amateur vs Professional: Strengths",
        comparison: [
            {
                wrong: "My strength is I work hard and I'm a fast learner.",
                right: "One of my core strengths is analytical thinking. For example, I spotted a pattern in our sales data that others missed, which led to a 15% revenue increase."
            },
            {
                wrong: "I'm good at everything, really. I can do any task.",
                right: "I excel at cross-functional collaboration. I recently coordinated between the marketing and tech teams to launch a campaign 2 weeks ahead of schedule."
            },
            {
                wrong: "Saya orangnya rajin dan tidak pernah menyerah.",
                right: "I'm particularly strong at staying calm under pressure. During the Q4 rush at my previous company in Jakarta, I managed a 3x increase in customer tickets without compromising quality."
            }
        ],
        teacherNote: "Tekankan perbedaan: Amateur kasih claim tanpa bukti (work hard, fast learner). Pro kasih specific skill + bukti konkret."
    },
    {
        type: 'comparison',
        title: "Amateur vs Professional: Weaknesses",
        comparison: [
            {
                wrong: "My weakness is I'm a perfectionist. I always want everything to be perfect.",
                right: "I tend to over-research before making decisions. I've learned to set a 2-hour time limit for initial research to keep projects moving."
            },
            {
                wrong: "I don't have any weaknesses. I'm very confident in my abilities.",
                right: "I used to struggle with delegating tasks because I wanted to ensure quality. Now I use detailed briefs and check-ins to maintain standards while empowering my team."
            },
            {
                wrong: "Saya susah bangun pagi dan suka telat.",
                right: "I can be overly eager to help colleagues, which sometimes affects my own deadlines. I've started blocking 'focus time' on my calendar to balance both."
            }
        ],
        teacherNote: "Bahas kenapa 'perfectionist' adalah jawaban terburuk — HRD dengar ini 100x sehari. Murid harus kasih weakness yang REAL tapi tidak critical untuk pekerjaan."
    },

    // ==================== PHASE 2: LOGIC ====================
    {
        type: 'formula',
        title: "The Strength Formula",
        subtitle: "Humble Confidence + Concrete Evidence",
        formula: "SKILL → PROOF → IMPACT",
        content: [
            "SKILL: Pilih 1-2 kekuatan yang RELEVAN dengan job description",
            "PROOF: Beri contoh spesifik — kapan? di mana? berapa lama?",
            "IMPACT: Tunjukkan hasilnya — angka, metrik, atau outcome positif",
            "Tips: Pilih strength yang beda dari kandidat lain. Jangan 'hard working' — semua orang bilang begitu."
        ],
        teacherNote: "Contohkan: Kalau apply jadi Data Analyst, strength-nya bisa 'pattern recognition' atau 'attention to detail' — bukan 'team player'."
    },
    {
        type: 'formula',
        title: "The Weakness Sandwich 🥪",
        subtitle: "Teknik Rahasia untuk Jawab Weakness dengan Aman",
        formula: "REAL WEAKNESS → IMPACT CONTROL → IMPROVEMENT ACTIONS",
        content: [
            "REAL WEAKNESS: Akui weakness yang sebenarnya (bukan yang palsu/manis)",
            "IMPACT CONTROL: Jelaskan cara kamu meminimalisir dampaknya sekarang",
            "IMPROVEMENT ACTIONS: Tunjukkan apa yang sudah dan sedang kamu lakukan untuk memperbaiki",
            "Rule: Weakness-nya jangan yang critical untuk role tersebut (contoh: 'attention to detail' untuk QC Inspector)"
        ],
        teacherNote: "Weakness Sandwich ini penting — murid harus latihan sampai hafal strukturnya. Jangan biarkan mereka 'wing it'."
    },
    {
        type: 'concept',
        title: "Weakness yang AMAN vs BERBAHAYA",
        subtitle: "Pilih dengan Bijak! 🎯",
        content: [
            "✅ AMAN: Kelebihan yang belum terarahkan (eager to help → time management)",
            "✅ AMAN: Skill yang sedang dipelajari (public speaking, data visualization)",
            "✅ AMAN: Preferensi kerja yang bisa diadjust (over-researching, delegating)",
            "❌ BERBAHAYA: Integrity issues (bohong, mencuri, tidak bisa dipercaya)",
            "❌ BERBAHAYA: Skill fundamental yang wajib dimiliki (attention to detail untuk accountant)",
            "❌ BERBAHAYA: Attitude problem (tidak bisa terima kritik, susah kerja sama orang)"
        ],
        teacherNote: "Beri contoh konkret: Kalau apply jadi Customer Service, jangan bilang 'I get frustrated with difficult people' — itu fatal."
    },
    {
        type: 'concept',
        title: "The Perfectionist Trap 🪤",
        subtitle: "Kenapa Jawaban Ini Bikin HRD Mengelus Dada",
        content: [
            "'I'm a perfectionist' = jawaban #1 paling overused di interview Indonesia",
            "HRD dengar ini → auto eye roll 🙄",
            "Kenapa buruk? Bisa jadi code untuk: 'I work slowly' atau 'I can't delegate'",
            "Kalau memang perfectionist, kasih context dan solusi yang spesifik",
            "Contoh better: 'I hold myself to high standards, so I sometimes spend extra time reviewing my work. I've started using checklists to be more efficient.'"
        ],
        teacherNote: "Tekankan: Better untuk pilih weakness lain yang lebih authentic. Perfectionist terlalu cliché dan sering dianggap red flag tersembunyi."
    },
    {
        type: 'concept',
        title: "Strengths Disguised as Weaknesses 🎭",
        subtitle: "Jebakan Klasik yang Harus Dihindari",
        content: [
            "'I care too much' → Sebenarnya mau bilang 'I'm passionate' (bukan weakness)",
            "'I work too hard' → Semua orang kerja keras, ini bukan weakness",
            "'I'm too honest' → Bisa diartikan sebagai 'I say things without thinking'",
            "'I can't say no' → Bisa jadi red flag untuk time management",
            "HRD bisa sniff ini dari 1 km — mereka tahu kamu cuma avoid pertanyaan",
            "Rule: Jujur itu lebih impressive daripada 'pintar' tapi terlihat manipulatif"
        ],
        teacherNote: "Cerita ke murid: Authenticity sells. HRD lebih respect orang yang berani vulnerable dengan cerdas daripada yang cover-up dengan jawaban 'manis'."
    },

    // ==================== PHASE 3: PRACTICE ====================
    {
        type: 'int-vocab',
        title: "Vocabulary: Frasa untuk Strengths",
        interviewVocab: [
            { term: "I excel at...", meaning: "Saya unggul dalam...", example: "I excel at breaking down complex problems into manageable steps.", category: "Opening" },
            { term: "One of my key strengths is...", meaning: "Salah satu kekuatan utama saya adalah...", example: "One of my key strengths is building relationships with difficult clients.", category: "Opening" },
            { term: "I'm particularly strong in...", meaning: "Saya sangat kuat di bidang...", example: "I'm particularly strong in data analysis and visualization.", category: "Opening" },
            { term: "I bring a proven track record in...", meaning: "Saya punya rekam jejak terbukti di...", example: "I bring a proven track record in increasing operational efficiency.", category: "Evidence" },
            { term: "For example, I recently...", meaning: "Contohnya, saya baru-baru ini...", example: "For example, I recently reduced processing time by 30%.", category: "Evidence" },
            { term: "This resulted in...", meaning: "Ini menghasilkan...", example: "This resulted in cost savings of Rp 500 million annually.", category: "Impact" },
            { term: "My colleagues often rely on me for...", meaning: "Rekan saya sering mengandalkan saya untuk...", example: "My colleagues often rely on me for troubleshooting technical issues.", category: "Social Proof" },
            { term: "I received recognition for...", meaning: "Saya mendapat pengakuan untuk...", example: "I received recognition for maintaining 99% accuracy in reporting.", category: "Social Proof" }
        ],
        teacherNote: "Minta murid praktikkan satu per satu. Pastikan mereka tidak cuma baca, tapi paham kapan pakai masing-masing frasa."
    },
    {
        type: 'int-vocab',
        title: "Vocabulary: Frasa untuk Weaknesses",
        interviewVocab: [
            { term: "An area I'm working on is...", meaning: "Area yang sedang saya kembangkan adalah...", example: "An area I'm working on is my public speaking confidence.", category: "Opening" },
            { term: "I tend to...", meaning: "Saya cenderung...", example: "I tend to over-research before making decisions.", category: "Acknowledgment" },
            { term: "I've noticed that I sometimes...", meaning: "Saya perhatikan bahwa kadang saya...", example: "I've noticed that I sometimes take on too much to help others.", category: "Acknowledgment" },
            { term: "To address this, I've started...", meaning: "Untuk mengatasi ini, saya mulai...", example: "To address this, I've started using time-blocking techniques.", category: "Solution" },
            { term: "I've made progress by...", meaning: "Saya sudah membuat progres dengan...", example: "I've made progress by setting stricter deadlines for myself.", category: "Progress" },
            { term: "I'm currently taking steps to...", meaning: "Saya sedang mengambil langkah untuk...", example: "I'm currently taking steps to improve my technical writing skills.", category: "Action" },
            { term: "This hasn't impacted my work because...", meaning: "Ini tidak mempengaruhi kerja saya karena...", example: "This hasn't impacted my work because I use detailed checklists.", category: "Control" },
            { term: "I'm now more aware of...", meaning: "Saya sekarang lebih sadar akan...", example: "I'm now more aware of when I'm over-committing.", category: "Awareness" }
        ],
        teacherNote: "Latih murid untuk selalu tutup weakness dengan frasa solusi. Jangan biarkan weakness menggantung tanpa improvement plan."
    },
    {
        type: 'int-scenario',
        title: "Contoh Jawaban: What Are Your Strengths?",
        interviewScenario: {
            question: "What are your greatest strengths?",
            starAnswer: {
                situation: "Saya apply untuk posisi Marketing Manager di perusahaan e-commerce.",
                task: "Saya perlu tunjukkan strength yang relevan dengan digital marketing dan team leadership.",
                action: "I excel at data-driven storytelling. At my previous role at Tokopedia seller, I analyzed customer behavior data and turned insights into campaigns. For example, I noticed our audience engaged more with educational content than promotional posts.",
                result: "I pivoted our strategy to focus on value-first content, which increased our engagement rate by 45% in three months. My second strength is mentoring junior team members — I developed a training program that reduced onboarding time from 4 weeks to 2 weeks."
            },
            tip: "Selalu pilih strength yang bisa di-back up dengan cerita konkret. Jangan cuma list tanpa konteks."
        },
        teacherNote: "Analisis bareng murid: Kenapa jawaban ini kuat? Karena ada angka (45%, 4→2 weeks), ada specific example, dan strength-nya relevan dengan role."
    },
    {
        type: 'int-scenario',
        title: "Contoh Jawaban: What Is Your Weakness?",
        interviewScenario: {
            question: "What is your greatest weakness?",
            starAnswer: {
                situation: "Saya apply untuk posisi Project Manager di startup fintech.",
                task: "Saya perlu tunjukkan self-awareness tanpa mengurangi kredibilitas untuk role ini.",
                action: "An area I'm actively working on is saying 'no' when my plate is full. I genuinely enjoy helping colleagues, and sometimes I take on additional tasks that stretch me thin. To address this, I've started using a priority matrix and blocking 'focus time' on my calendar.",
                result: "This hasn't impacted my project delivery — I maintain a 95% on-time completion rate. I'm now more aware of my capacity and communicate boundaries earlier. It's still a work in progress, but I've seen significant improvement in my work-life balance."
            },
            tip: "Weakness ini AMAN karena: (1) Real tapi tidak fatal, (2) Sudah ada sistem kontrol, (3) Ada bukti improvement, (4) Tidak kritis untuk Project Manager."
        },
        teacherNote: "Diskusi: Kenapa weakness ini aman untuk PM? Karena PM harus bisa delegate dan manage workload — weakness ini justru nunjukkan concern untuk quality."
    },
    {
        type: 'comparison',
        title: "Before vs After: Transformasi Jawaban",
        comparison: [
            {
                wrong: "My strength is I'm a hard worker. I always finish my tasks on time.",
                right: "I excel at time management under pressure. During the Lebaran sale rush at my previous company, I coordinated 12 product launches simultaneously while maintaining zero stockout incidents."
            },
            {
                wrong: "My weakness is I'm not good with computers.",
                right: "I'm currently strengthening my advanced Excel skills. I've completed an online course and now use pivot tables for monthly reporting, which has cut my analysis time in half."
            },
            {
                wrong: "I'm a perfectionist. I want everything to be 100% perfect.",
                right: "I hold myself to high standards, which sometimes means I spend extra time reviewing my work. I've learned to use checklists to ensure quality while meeting deadlines."
            },
            {
                wrong: "My strength is I can speak English.",
                right: "I leverage my bilingual skills to bridge communication gaps. I've translated training materials for our Indonesian team, improving compliance understanding by 60%."
            }
        ],
        teacherNote: "Ajak murid identifikasi: Apa yang membedakan 'before' vs 'after'? (Specificity, metrics, relevance, growth mindset)"
    },
    {
        type: 'micro-drill',
        title: "Drill: Reframe Your Strength",
        subtitle: "Ubah strength generik jadi spesifik dan memorable dalam 2 menit",
        mission: [
            "Pikirkan 1 kekuatan yang sering kamu sebut (contoh: 'hard working')",
            "Tanya: Skill SPESIFIK apa yang membuatku 'hard working'?",
            "Cari bukti: Kapan saya membuktikan ini? Angka/metriknya?",
            "Reframe jadi: 'I excel at [specific skill], proven by [specific result]'",
            "Sampaikan dengan percaya diri — no hesitation! 💪"
        ],
        teacherNote: "Setiap murid harus coba. Beri feedback: Apakah strength-nya memorable? Ada bukti konkretnya? Relevan dengan pekerjaan impian mereka?"
    },
    {
        type: 'micro-drill',
        title: "Drill: Build Your Weakness Sandwich",
        subtitle: "Latih struktur 3-layer untuk weakness-mu",
        mission: [
            "Layer 1 - The Weakness: Tulis 1 weakness yang REAL tapi tidak fatal",
            "Layer 2 - Impact Control: Bagaimana kamu memastikan ini tidak mengganggu kerja?",
            "Layer 3 - Improvement: Apa yang sedang kamu lakukan untuk memperbaiki?",
            "Gabungkan jadi 1 paragraf alami — bukan robot yang menghafal",
            "Latih sampai lancar tanpa terdengar scripted! 🎯"
        ],
        teacherNote: "Ini latihan krusial. Banyak murid gagal karena weakness-nya tidak authentic atau tidak ada improvement plan. Bantu mereka polish."
    },

    // ==================== PHASE 4: SIMULATION ====================
    {
        type: 'int-mock',
        title: "Mock Interview: Strengths & Weaknesses",
        mockInterview: {
            jobTitle: "Business Development Executive",
            company: "Sea Ltd / Shopee",
            questions: [
                "What would you say are your top three strengths?",
                "Tell me about a weakness you're working to improve.",
                "How do your strengths help you in sales situations?",
                "Give me an example of when your weakness caused a challenge — how did you handle it?",
                "If we ask your previous manager about your strengths and weaknesses, what would they say?"
            ],
            context: "Kamu apply untuk posisi BD di e-commerce giant. Mereka cari orang yang confident tapi tidak arrogant, self-aware tapi tidak insecure. Siapkan jawaban yang ada datanya."
        },
        teacherNote: "Simulasi ini menantang karena ada follow-up question. Latih murid untuk tidak panik kalau ditanya lebih dalam tentang weakness mereka."
    },
    {
        type: 'simulation',
        title: "Simulation: The Tough Follow-Up",
        simulation: {
            role: "Candidate for Financial Analyst Position",
            scenario: "HRD mendengar weakness-mu dan menantang: 'You said you tend to over-research. How do we know that won't slow you down in our fast-paced environment?'",
            goal: "Defend your weakness dengan elegan — tunjukkan bahwa kamu sudah punya sistem untuk manage itu, dan weakness itu justru bisa jadi strength di konteks tertentu.",
            timeLimit: 90
        },
        teacherNote: "Ini advanced drill. Banyak kandidat crumble kalau weakness-nya di-challenge. Latih murid untuk tetap calm dan pivot ke solution."
    },
    {
        type: 'concept',
        title: "When They Ask for 3 Strengths & 3 Weaknesses",
        subtitle: "Strategi untuk Pertanyaan Ekstrem 🎯",
        content: [
            "Beberapa HRD (terutama perusahaan consulting/banking) minta list 3 strengths & 3 weaknesses",
            "Strategy: Pilih 2 'safe' weaknesses dan 1 'medium' weakness yang sedang kamu perbaiki",
            "Jangan kasih 3 fatal weaknesses — itu suicide 🚫",
            "Untuk strengths: 1 technical skill, 1 soft skill, 1 unique trait yang bedakan kamu",
            "Contoh: Data analysis (technical) + Cross-functional collaboration (soft) + Resilience under pressure (unique)",
            "Selalu siapkan cerita untuk masing-masing — jangan cuma list!"
        ],
        teacherNote: "Warning murid: Kalau diminta 3 weakness, mereka harus pilih dengan sangat hati-hati. Jangan sampai kelihatan seperti orang yang penuh masalah."
    },
    {
        type: 'recap',
        title: "Rangkuman: The Dos and Don'ts",
        recap: [
            { context: "Strength Opening", sayThis: "One of my key strengths is... (spesifik)", dontSayThis: "I'm good at everything / I work hard" },
            { context: "Strength Evidence", sayThis: "For example, I achieved... (angka/metrik)", dontSayThis: "Trust me, I'm really good at this" },
            { context: "Weakness Opening", sayThis: "An area I'm working on is...", dontSayThis: "My weakness is perfectionism / I work too hard" },
            { context: "Weakness Solution", sayThis: "To address this, I've started... (action konkret)", dontSayThis: "But I'm trying to be better" },
            { context: "Weakness Impact", sayThis: "This hasn't affected my work because...", dontSayThis: "It sometimes causes problems but yeah..." },
            { context: "Overall Attitude", sayThis: "Self-aware, growth mindset, confident", dontSayThis: "Arrogant, insecure, defensive, scripted" }
        ]
    },
    {
        type: 'mission',
        title: "Mission: Your Strengths & Weaknesses Blueprint",
        subtitle: "Bikin dokumen ini sebelum interview berikutnya! 📝",
        mission: [
            "Tulis 2 strengths dengan formula SKILL → PROOF → IMPACT",
            "Tulis 2 weaknesses dengan Weakness Sandwich (REAL → CONTROL → IMPROVE)",
            "Rekam diri kamu menjawab — dengarkan ulang. Apakah terdengar authentic?",
            "Tanyakan ke 1 teman: 'Apa strength dan weakness-ku menurutmu?' — compare dengan jawabanmu",
            "Latih 5x sampai jawaban mengalir natural, tidak seperti robot menghafal",
            "Ingat: Goal-nya adalah jadi AUTHENTIC, bukan PERFECT ✨"
        ],
        teacherNote: "Mission ini penting untuk retention. Murid harus apply segera kalau tidak mau lupa. Tawarkan untuk review jawaban mereka di sesi berikutnya."
    }
];

export const quiz: QuizQuestion[] = [];
