import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // ===== TITLE SLIDE =====
    {
        type: 'title',
        title: "Structure: Storytelling for Business",
        subtitle: "Menggunakan struktur 'Hero's Journey' yang disederhanakan agar presentasi jadi seru.",
        teacherNote: "Fokus: Mengubah 'Data yang membosankan' menjadi 'Perjuangan yang emosional'. Manusia diprogram untuk mencatat cerita, bukan angka."
    },

    // ===== PHASE 1: THE MINDSET =====
    {
        type: 'pres-phase',
        phaseNumber: 1,
        title: "Facts vs Stories",
        subtitle: "Mengapa angka-angka Anda tidak pernah cukup"
    },
    {
        type: 'pres-mindset',
        title: "The Robot Trap",
        subtitle: "Facts tell, but stories sell.",
        mindset: {
            before: "I should only use facts and numbers to look professional.",
            after: "I must wrap my facts in a human story to make them memorable.",
            bridgeText: "Connection over Precision"
        },
        teacherNote: "Ceritakan bahwa data tanpa narasi adalah tumpukan sampah. Narasi memberikan ARTI pada data tersebut."
    },
    {
        type: 'pres-impact',
        title: "The Emotional Anchor",
        subtitle: "Prinsip Utama Cerita (Storytelling)",
        impact: {
            quote: "PEOPLE FORGET WHAT YOU SAID, BUT THEY REMEMBER HOW YOU MADE THEM FEEL.",
            author: "Maya Angelou / Presentation Rule #6",
            accentColor: "#f97316"
        },
        teacherNote: "Gunakan cerita untuk membangun empati. Jika klien merasa Anda paham masalah mereka, mereka akan lebih percaya solusi Anda."
    },

    // ===== PHASE 2: LOGIC & MECHANICS =====
    {
        type: 'pres-phase',
        phaseNumber: 2,
        title: "The 3-Act Business Story",
        subtitle: "Struktur cerita paling aman untuk kantor"
    },
    {
        type: 'pres-technique',
        title: "The Hero's Journey (Light)",
        technique: {
            name: "The Problem-Conflict-Solution Arc",
            description: "Jangan mulai dengan Solusi. Mulailah dengan Siapa yang punya Masalah.",
            steps: [
                "The Hero (Siapa/Apa?): Pelanggan atau tim yang sedang berjuang.",
                "The Villain (Apa hambatannya?): Masalah ekonomi, bug sistem, atau kompetitor.",
                "The Mentor (Siapa penolongnya?): Produk Anda atau Ide Anda.",
                "The Victory (Hasilnya apa?): Perubahan hidup setelah solusi Anda."
            ],
            whyItWorks: "Struktur ini menciptakan ketegangan (tension) yang membuat orang penasaran menunggu akhir ceritanya.",
            icon: "🎭"
        },
        teacherNote: "Contoh: Jangan bilang 'Fitur baru adalah X'. Bilang 'Budi biasanya butuh 5 jam buat laporan (Problem), terus dia stres banget (Conflict), lalu dia pakai fitur kita (Solution), sekarang dia bisa pulang jemput anaknya (Victory).'"
    },
    {
        type: 'comparison',
        title: "Case Study vs Story",
        subtitle: "Beda penyampaian studi kasus",
        comparison: [
            {
                wrong: "Client X used our software and increased revenue by 20%. They are happy.",
                right: "Client X was near bankruptcy six months ago. They tried everything but failed. Then, we implemented a new strategy. Today, they are opening their 5th branch."
            },
            {
                wrong: "Our team worked hard and finished the project on time last Friday.",
                right: "Last month, we hit a wall. A major bug delayed us for two weeks. The team worked through the weekend, found the fix, and we delivered a perfect product."
            }
        ],
        teacherNote: "Perhatikan bagaimana versi 'Right' menunjukkan PERJUANGAN. Tanpa perjuangan, tidak ada cerita yang menarik."
    },

    // ===== PHASE 3: THE UPGRADE =====
    {
        type: 'pres-phase',
        phaseNumber: 3,
        title: "The 'Before vs After' Visual",
        subtitle: "Memperjelas dampak lewat kontras"
    },
    {
        type: 'pres-technique',
        title: "The Emotional Contrast",
        technique: {
            name: "Contrast Strategy",
            description: "Tekankan betapa buruknya masa lalu agar masa kini terlihat jauh lebih hebat.",
            steps: [
                "Description of pain (Dulu pusing, mahal, lambat).",
                "Description of pleasure (Sekarang tenang, hemat, cepat).",
                "The bridge (Berkat Ide/Produk saya)."
            ],
            whyItWorks: "Otak manusia memproses nilai lewat perbandingan (comparison).",
            icon: "⚖️"
        },
        teacherNote: "Gunakan kata sifat yang kontras: 'Chaos' vs 'Clarity', 'Manual' vs 'Automatic'."
    },
    {
        type: 'pres-checklist',
        title: "The Storyteller Checklist",
        subtitle: "Cek apakah cerita Anda 'ngaruh'",
        checklist: {
            title: "Story Checklist",
            items: [
                "Is there a clear 'Hero' (someone to care about)?",
                "Is there a real 'Conflict' (a difficult obstacle)?",
                "Is the story short (under 2 minutes)?",
                "Does it lead directly to your data/point?",
                "Did you use specific names or details instead of 'someone'?"
            ]
        }
    },

    // ===== PHASE 4: PRACTICE & SIMULATION =====
    {
        type: 'pres-phase',
        phaseNumber: 4,
        title: "Simulation: The Project Turnaround",
        subtitle: "Latihan bercerita tentang kegagalan yang jadi sukses"
    },
    {
        type: 'pres-script',
        title: "The 'Customer Success' Script",
        subtitle: "Script menceritakan keberhasilan klien",
        scriptSteps: [
            {
                label: "The Setup",
                action: "Use an empathetic, low voice.",
                script: "Let me tell you about a small bakery we worked with in Bandung."
            },
            {
                label: "The Struggle",
                action: "Broaden your eyes, show the conflict.",
                script: "They were losing customers every day because their delivery was too slow."
            },
            {
                label: "The Resolution",
                action: "Smile, use a more energetic tone.",
                script: "Once they integrated our logistics app, their delivery time dropped by 50% in just one week."
            }
        ],
        teacherNote: "Hati-hati: Jangan terlalu panjang di pembukaan. Langsung masuk ke 'Struggle'-nya."
    },
    {
        type: 'simulation',
        title: "The Internal Win",
        simulation: {
            role: "Team Leader",
            scenario: "Anda harus presentasi di depan bos tentang kesuksesan tim Anda menyelesaikan tugas sulit.",
            goal: "Jangan cuma bilang 'Tugas beres'. Ceritakan satu momen sulit di mana tim hampir menyerah lalu berhasil bangkit berkat ide brilian Anda.",
            timeLimit: 60
        }
    },

    // ===== MISSION =====
    {
        type: 'mission',
        title: "Mission: The Human Brand",
        subtitle: "Jadilah pembawa cerita di setiap kesempatan",
        mission: [
            "Cari satu 'Testimoni' sukses dari pekerjaan Anda dan ubah jadi cerita 30 detik.",
            "Gunakan satu cerita pendek untuk menjawab pertanyaan di interview atau meeting.",
            "Tonton iklan di YouTube dan identifikasi siapa Hero dan Villain-nya.",
            "Tulis ulang slide 'About Us' perusahaan Anda menjadi sebuah narasi singkat."
        ]
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "What is the 'Robot Trap' in business speaking?",
        options: ["Building actual robots", "Using only facts and numbers without any human connection", "Talking too loudly", "Using too many slides"],
        correctIndex: 1,
        explanation: "Hanya menyajikan data tanpa konteks manusia membuat presentasi sulit diingat dan dingin."
    },
    {
        question: "In a business story, who is usually the 'Villain'?",
        options: ["The boss", "The competitor", "The problem, obstacle, or inefficient system", "The person sitting in front"],
        correctIndex: 2,
        explanation: "Villain (musuh) adalah tantangan atau hambatan yang sedang dihadapi."
    },
    {
        question: "Why should you start with the 'Problem' rather than the 'Solution'?",
        options: ["To be negative", "To create tension and make the solution more valuable", "To waste time", "Because you don't have a solution yet"],
        correctIndex: 1,
        explanation: "Tanpa memahami rasa sakit (pain) dari masalah, audiens tidak akan menghargai nilai dari solusi Anda."
    },
    {
        question: "What makes a 'Before vs After' comparison effective?",
        options: ["The number of words used", "The emotional contrast between the old struggle and the new success", "The colors of the slides", "The font size"],
        correctIndex: 1,
        explanation: "Kontras emosional membantu audiens memvisualisasikan perubahan nyata yang Anda tawarkan."
    },
    {
        question: "What is a key quality of a good business story?",
        options: ["It is 10 minutes long", "It is concise and directly related to the main message", "It contains many fictional characters", "It has no ending"],
        correctIndex: 1,
        explanation: "Cerita bisnis harus singkat dan memiliki tujuan yang jelas untuk mendukung poin utama."
    }
];
