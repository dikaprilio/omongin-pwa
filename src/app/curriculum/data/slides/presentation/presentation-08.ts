import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // ===== TITLE SLIDE =====
    {
        type: 'title',
        title: "Structure: Signposting & Transitions",
        subtitle: "Menggunakan 'Kata Jembatan' untuk memandu audiens dengan mulus.",
        teacherNote: "Fokus: Menghilangkan kebiasaan lompat topik tanpa peringatan. Pembicara yang baik adalah 'GPS' bagi audiensnya."
    },

    // ===== PHASE 1: THE MINDSET =====
    {
        type: 'pres-phase',
        phaseNumber: 1,
        title: "The GPS Mindset",
        subtitle: "Audiens Anda tidak bisa membaca pikiran Anda"
    },
    {
        type: 'pres-mindset',
        title: "The Jump-Cut Trap",
        subtitle: "Don't leave your audience behind.",
        mindset: {
            before: "I can just move to the next slide because they can see the picture.",
            after: "I must use verbal bridges so they follow my logic, not just my eyes.",
            bridgeText: "Connection over Motion"
        },
        teacherNote: "Banyak murid langsung pencet tombol Next tanpa menjelaskan kaitan antara Slide A dan Slide B. Ini bikin audiens capek mikir."
    },
    {
        type: 'pres-impact',
        title: "Guidance is Trust",
        subtitle: "Prinsip Utama Alur (Flow)",
        impact: {
            quote: "IF THE AUDIENCE GETS LOST, IT'S THE SPEAKER'S FAULT.",
            author: "Presentation Rule #5",
            accentColor: "#8b5cf6"
        },
        teacherNote: "Signposting memberikan rasa kendali. Orang merasa aman kalau tahu mereka ada di mana dan mau ke mana."
    },

    // ===== PHASE 2: LOGIC & MECHANICS =====
    {
        type: 'pres-phase',
        phaseNumber: 2,
        title: "Verbal Signposts",
        subtitle: "Rambu-rambu jalan bahasa Inggris"
    },
    {
        type: 'pres-technique',
        title: "The Bridge Arsenal",
        technique: {
            name: "Types of Bridges",
            description: "Gunakan kata-kata ini untuk 'menghubungkan' ide-ide Anda.",
            steps: [
                "Moving on: 'Moving on to our next point...'",
                "Adding Info: 'In addition to that...'",
                "Contrasting: 'However, looking at it from another angle...'",
                "Summarizing: 'So, that brings us to the end of...'",
                "Highlighting: 'The most important thing to remember is...'"
            ],
            whyItWorks: "Frasa ini berfungsi sebagai 'lem' (glue) yang menyatukan potongan informasi.",
            icon: "🌉"
        },
        teacherNote: "Signposting paling penting dilakukan SAAT menekan tombol 'Next' di klikker."
    },
    {
        type: 'comparison',
        title: "Abrupt vs Smooth Flow",
        subtitle: "Perbandingan perpindahan topik",
        comparison: [
            {
                wrong: "(Click) Next slide. This is our budget. (Click) Next. This is the timeline.",
                right: "Now that we've seen the budget, let's explore how it affects our timeline."
            },
            {
                wrong: "I think we finished the UI. (Silent long pause) Okay, next is marketing.",
                right: "We've covered the design side. However, the real challenge lies in marketing."
            }
        ],
        teacherNote: "Versi 'Right' menghubungkan 'apa yang baru saja dibahas' dengan 'apa yang akan dibahas'."
    },

    // ===== PHASE 3: THE UPGRADE =====
    {
        type: 'pres-phase',
        phaseNumber: 3,
        title: "Visual Signposting",
        subtitle: "Memberi kode visual untuk progres Anda"
    },
    {
        type: 'pres-technique',
        title: "The Roadmap Recap",
        technique: {
            name: "Internal Summary",
            description: "Sesekali berhentilah dan rangkum apa yang sudah dibahas sebelum lanjut ke pilar berikutnya.",
            steps: [
                "Stop at the end of a section.",
                "Recap: 'So far, we've looked at A and B...'",
                "Forecast: 'Next, we will focus on C.'",
                "Check for questions: 'Before I move on, any questions?'"
            ],
            whyItWorks: "Ini membantu audiens yang sempat 'ngelamun' untuk kembali fokus.",
            icon: "🗺️"
        },
        teacherNote: "Audit: Jangan pernah 'Next' sebelum Anda membungkus poin sebelumnya."
    },
    {
        type: 'pres-checklist',
        title: "The Flow Checklist",
        subtitle: "Cek apakah transisi Anda halus",
        checklist: {
            title: "Signposting Check",
            items: [
                "Did you use a 'Bridge Sentence' between every slide?",
                "Are you using varied transitions (not just 'Next' or 'And')?",
                "Do you announce when you are starting the final section?",
                "Is your tone changing slightly during a transition?",
                "Can a listener follow you WITHOUT looking at the screen?"
            ]
        }
    },

    // ===== PHASE 4: PRACTICE & SIMULATION =====
    {
        type: 'pres-phase',
        phaseNumber: 4,
        title: "Simulation: The Smooth GPS",
        subtitle: "Latihan menghubungkan pilar presentasi"
    },
    {
        type: 'pres-script',
        title: "The 'Bridge' Script",
        subtitle: "Script untuk berpindah dari Masalah ke Solusi",
        scriptSteps: [
            {
                label: "The Recap",
                action: "Lower your voice slightly, look at the audience.",
                script: "So, that's the current problem we are facing with our current system."
            },
            {
                label: "The Pivot",
                action: "Press 'Next' button, increase energy/volume.",
                script: "Now, this leads us to the most exciting part of today: The Solution."
            }
        ],
        teacherNote: "Perpindahan 'Masalah' ke 'Solusi' harus diiringi perubahan energi (dari serius ke semangat)."
    },
    {
        type: 'simulation',
        title: "The Zoom Navigation",
        simulation: {
            role: "Software Consultant",
            scenario: "Anda sedang demo aplikasi di Zoom. Layar Anda ganti tab beberapa kali.",
            goal: "Jangan biarkan audiens melihat layar kosong atau loading tanpa suara. Gunakan 'filler transition' untuk menjelaskan apa yang sedang Anda lakukan.",
            timeLimit: 45
        }
    },

    // ===== MISSION =====
    {
        type: 'mission',
        title: "Mission: The GPS Speaker",
        subtitle: "Jadilah pandu jalan yang handal",
        mission: [
            "Haramkan kata 'Next' selama satu hari saat presentasi. Ganti dengan kalimat penghubung.",
            "Gunakan rincian 'Firstly, Secondly, Finally' di setiap penjelasan panjang.",
            "Praktikkan 'Internal Summary' di tengah rapat besok.",
            "Tonton video berita (BBC/CNN) dan catat bagaimana presenter pindah topik."
        ]
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "What is the primary function of 'Signposting'?",
        options: ["To show where the exits are", "To guide the audience through the structure of the talk", "To sign your name on the slides", "To make the text bigger"],
        correctIndex: 1,
        explanation: "Signposting bertindak seperti GPS verbal yang memberi tahu audiens posisi mereka dalam alur presentasi."
    },
    {
        question: "Which of these is a 'Bridge' phrase for adding more information?",
        options: ["In conclusion...", "However...", "Furthermore...", "I'm done."],
        correctIndex: 2,
        explanation: "Furthermore (lebih jauh lagi) atau In addition digunakan untuk menambah info pendukung."
    },
    {
        question: "When is the BEST time to use a transition sentence?",
        options: ["In the middle of a sentence", "At the very end of the presentation", "While moving from one slide or topic to the next", "Only if someone asks a question"],
        correctIndex: 2,
        explanation: "Titik transisi antar slide adalah momen krusial untuk menjaga logika audiens tetap menyambung."
    },
    {
        question: "What should you avoid doing when moving to a new topic?",
        options: ["Using a pause", "Changing your voice tone", "Silently clicking 'Next' without saying anything", "Looking at the audience"],
        correctIndex: 2,
        explanation: "Next yang hening (silent jump) sering membuat audiens bingung tentang hubungan antar topik."
    },
    {
        question: "What is an 'Internal Summary'?",
        options: ["A summary of your internal organs", "Reviewing key points of a section before moving to the next one", "A secret note for the teacher", "The menu of the office canteen"],
        correctIndex: 1,
        explanation: "Internal Summary membantu 'mengunci' pemahaman audiens sebelum Anda membanjiri mereka dengan informasi baru."
    }
];
