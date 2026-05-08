import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // ===== TITLE SLIDE =====
    {
        type: 'title',
        title: "Structure: The 'Rule of Three'",
        subtitle: "Menyusun isi materi menjadi tiga poin utama agar mudah diingat otak manusia.",
        teacherNote: "Fokus: Membantu murid yang 'berantakan' pola pikirnya. 3 adalah jumlah maksimal yang bisa diingat audiens secara instan."
    },

    // ===== PHASE 1: THE MINDSET =====
    {
        type: 'pres-phase',
        phaseNumber: 1,
        title: "The Brain's Limit",
        subtitle: "Mengapa audiens Anda tidak akan ingat 10 poin penting Anda"
    },
    {
        type: 'pres-mindset',
        title: "The Information Overload",
        subtitle: "Less is actually more memorable.",
        mindset: {
            before: "I must share every detail to show that I am comprehensive.",
            after: "I must group my ideas into 3 pillars so the audience can remember them.",
            bridgeText: "Clarity over Complexity"
        },
        teacherNote: "Jelaskan konsep 'Working Memory'. Manusia paling mudah mengingat dalam pola bertiga (Small, Medium, Large | Past, Present, Future)."
    },
    {
        type: 'pres-impact',
        title: "The Magic Number",
        subtitle: "Prinsip Utama Struktur (Rule of 3)",
        impact: {
            quote: "TRIADS ARE THE STRONGEST STRUCTURE IN LANGUAGE.",
            author: "Presentation Rule #4",
            accentColor: "#10b981"
        },
        teacherNote: "Berikan contoh: 'Life, Liberty, Pursuit of Happiness' atau 'Blood, Sweat, and Tears'."
    },

    // ===== PHASE 2: LOGIC & MECHANICS =====
    {
        type: 'pres-phase',
        phaseNumber: 2,
        title: "Grouping into Three",
        subtitle: "Cara merapikan pikiran yang berantakan"
    },
    {
        type: 'pres-technique',
        title: "The Pillar Formula",
        technique: {
            name: "The 3 Pillars",
            description: "Ambil semua poin Anda, lalu paksa masuk ke dalam 3 kategori besar (buckets).",
            steps: [
                "List all your points (Brainstorming).",
                "Find common themes (Categorizing).",
                "Select the top 3 categories (Prioritizing).",
                "Rename them with catchy labels (Pillar 1, 2, 3)."
            ],
            whyItWorks: "Struktur ini memberikan 'mental map' bagi audiens agar tidak tersesat.",
            icon: "🏛️"
        },
        teacherNote: "Latihan: Jika murid punya 7 tips, suruh mereka gabungkan menjadi 3 kategori besar."
    },
    {
        type: 'comparison',
        title: "The List vs The Pillars",
        subtitle: "Perbedaan cara penyampaian materi",
        comparison: [
            {
                wrong: "I have 10 updates: budget, team, office, chairs, laptop, internet, coffee, recruitment, and strategy.",
                right: "I have three main updates: Infrastructure, Team, and Strategy. (Grouped into 3)"
            },
            {
                wrong: "Our app is fast, has blue buttons, is easy to use, secure, cheap, and has 100 features.",
                right: "Our app is defined by three things: Speed, Security, and Simplicity. (Rule of Three)"
            }
        ],
        teacherNote: "Perhatikan betapa jauh lebih 'pro' dan 'berwibawa' versi yang dikelompokkan (Right)."
    },

    // ===== PHASE 3: THE UPGRADE =====
    {
        type: 'pres-phase',
        phaseNumber: 3,
        title: "Catchy Triads",
        subtitle: "Membuat 3 poin Anda lebih 'ngaruh'"
    },
    {
        type: 'pres-technique',
        title: "Alliteration & Rhyme",
        technique: {
            name: "Sticky Pillars",
            description: "Gunakan rima atau huruf depan yang sama agar 3 poin Anda sulit dilupakan.",
            steps: [
                "Alliteration: 'Plan, Prepare, Perform.'",
                "Rhyme: 'Stop, Look, Proceed.'",
                "Comparison: 'The Good, the Bad, and the Future.'"
            ],
            whyItWorks: "Otak menyukai pola ritme (rhythmic patterns).",
            icon: "🧬"
        },
        teacherNote: "Di kantor, gunakan ini di judul slide utama atau di slide 'Summary'."
    },
    {
        type: 'pres-checklist',
        title: "The 3-Pillar Checklist",
        subtitle: "Pastikan struktur Anda solid",
        checklist: {
            title: "Triad Checklist",
            items: [
                "Are there EXACTLY three main points? (Not 2, not 4)",
                "Do they all have a similar weight/importance?",
                "Are the labels short (1-3 words)?",
                "Did you announce them at the beginning? ('I have 3 points...')",
                "Do they together cover the Big Idea?"
            ]
        }
    },

    // ===== PHASE 4: PRACTICE & SIMULATION =====
    {
        type: 'pres-phase',
        phaseNumber: 4,
        title: "Simulation: The Content Filter",
        subtitle: "Latihan menyederhanakan materi sulit"
    },
    {
        type: 'pres-script',
        title: "The Road Map Script",
        subtitle: "Bagaimana cara mengumumkan Rule of 3 di awal",
        scriptSteps: [
            {
                label: "The Announcement",
                action: "Hold up 3 fingers, use a structured hand gesture.",
                script: "To make things simple, I've divided my presentation into three parts."
            },
            {
                label: "The Pillars",
                action: "Nod slightly as you say each one.",
                script: "First, the Problem. Second, the Solution. And third, the Timeline."
            }
        ],
        teacherNote: "Mengumumkan jumlah poin di awal memberikan rasa 'aman' bagi audiens."
    },
    {
        type: 'simulation',
        title: "The Boardroom Cleanup",
        simulation: {
            role: "Operations Manager",
            scenario: "Anda punya list 12 masalah di gudang yang harus dilaporkan ke Bos.",
            goal: "Jangan baca satu per satu. Kelompokkan 12 masalah itu menjadi 3 pilar (misal: People, Process, Tools).",
            timeLimit: 45
        }
    },

    // ===== MISSION =====
    {
        type: 'mission',
        title: "Mission: The Triad Master",
        subtitle: "Latih otak Anda melihat dunia dalam angka 3",
        mission: [
            "Ubah list agenda meeting Anda besok menjadi 3 pilar.",
            "Tulis Bio profil Anda menggunakan Rule of Three (misal: 'Marketer, Traveler, Dreamer').",
            "Saat ditanya kabar, jawab dengan 3 hal (Work, Family, Health).",
            "Sederhanakan satu slide presentasi yang punya banyak bullet points."
        ]
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Why is the number 'three' effective in presentations?",
        options: ["Because it is a lucky number", "Because the human brain processes and remembers patterns of three easily", "Because it makes the presentation shorter", "Because slides only have room for three words"],
        correctIndex: 1,
        explanation: "Otak manusia menyukai pola (patterns), dan 3 adalah pola terkecil yang bisa dianggap sebagai struktur yang lengkap."
    },
    {
        question: "What is the 'Pillar Formula'?",
        options: ["Building a house", "Grouping many points into three main categories", "Talking to the walls", "Using exactly three slides"],
        correctIndex: 1,
        explanation: "Pillar Formula membantu menyederhanakan banyak informasi menjadi 3 'ember' (buckets) besar."
    },
    {
        question: "Which of these is an example of an 'Alliterative' triad?",
        options: ["Red, Blue, Green", "Fast, Cheap, Good", "Practice, Patience, Persistence", "One, Two, Three"],
        correctIndex: 2,
        explanation: "Alliteration menggunakan huruf depan yang sama (P, P, P) agar lebih mudah diingat (sticky)."
    },
    {
        question: "Why should you announce 'I have three points' at the beginning?",
        options: ["To show you can count", "To provide a mental map for the audience", "To warn the audience it will be long", "To hide the data"],
        correctIndex: 1,
        explanation: "Ini memberikan rasa tenang kepada audiens karena mereka tahu persis berapa lama mereka harus fokus."
    },
    {
        question: "What should you do if you have 5 or 6 important points?",
        options: ["Show them all on one slide", "Group them into 3 larger themes/categories", "Delete 3 points randomly", "Read them as fast as possible"],
        correctIndex: 1,
        explanation: "Selalu prioritaskan kemudahan audiens untuk mengingat daripada kelengkapan data yang berlebihan."
    }
];
