import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // ===== TITLE SLIDE =====
    {
        type: 'title',
        title: "Structure: The Strong Close",
        subtitle: "Cara menutup dengan 'ledakan' dan Call to Action jelas. Stop 'Ya, itu saja, terima kasih.'",
        teacherNote: "Fokus: Menghindari 'The Awkward Ending'. Kalimat terakhir Anda adalah apa yang akan dibawa pulang audiens."
    },

    // ===== PHASE 1: THE MINDSET =====
    {
        type: 'pres-phase',
        phaseNumber: 1,
        title: "The Recency Effect",
        subtitle: "Mengapa kalimat terakhir Anda adalah yang paling diingat"
    },
    {
        type: 'pres-mindset',
        title: "The Fading Trap",
        subtitle: "Don't let your energy die at the end.",
        mindset: {
            before: "I can just stop talking when I'm tired, they know I'm finished.",
            after: "I must lead the audience to a specific ACTION and leave them with a powerful thought.",
            bridgeText: "Confidence until the Silence"
        },
        teacherNote: "Banyak murid energinya drop di akhir karena merasa tugas sudah selesai. Padahal akhir adalah saatnya 'menjual' kesimpulan."
    },
    {
        type: 'pres-impact',
        title: "The Last Impression",
        subtitle: "Prinsip Utama Penutupan (The Conclusion)",
        impact: {
            quote: "A SPEECH WITHOUT A CTA IS JUST A CONVERSATION.",
            author: "Presentation Rule #7",
            accentColor: "#4f46e5"
        },
        teacherNote: "Jangan biarkan mereka tanya 'Terus saya harus ngapain?'. Beri instruksi yang jelas."
    },

    // ===== PHASE 2: LOGIC & MECHANICS =====
    {
        type: 'pres-phase',
        phaseNumber: 2,
        title: "The 3-Part Close",
        subtitle: "Struktur penutupan yang berwibawa"
    },
    {
        type: 'pres-technique',
        title: "The CTA Framework",
        technique: {
            name: "Summary-CTA-Zinger",
            description: "Kerangka tiga langkah untuk menutup presentasi secara profesional.",
            steps: [
                "The Summary: 'To recap, we've looked at A, B, and C.'",
                "The CTA (Call to Action): 'I invite you to sign the proposal by tomorrow.'",
                "The Zinger: Sebuah kalimat penutup yang kuat (quote atau visi masa depan)."
            ],
            whyItWorks: "Memberikan rasa penyelesaian (closure) yang memuaskan dan arah yang jelas.",
            icon: "🎆"
        },
        teacherNote: "Zinger tidak harus panjang. 'Let's build the future together' lebih baik daripada 'I think that's all'."
    },
    {
        type: 'comparison',
        title: "The Awkward vs Power Close",
        subtitle: "Beda cara mengakhiri bicara",
        comparison: [
            {
                wrong: "Uhh, yeah. I guess that's the end. Any questions? No? Okay, thank you. *walks away*",
                right: "In summary, we have the tools and the team. My only request is for your approval today. Let's make this project a reality. Thank you."
            },
            {
                wrong: "So, that's my report. I hope you liked it. Thanks.",
                right: "We've seen the data. Now it's time for action. If we start today, we save 20% by next month. The choice is ours."
            }
        ],
        teacherNote: "Perhatikan betapa 'Right' memberikan tanggung jawab atau langkah selanjutnya (CTA) kepada audiens."
    },

    // ===== PHASE 3: THE UPGRADE =====
    {
        type: 'pres-phase',
        phaseNumber: 3,
        title: "The Question Trap",
        subtitle: "Kapan sebaiknya melakukan tanya jawab?"
    },
    {
        type: 'pres-technique',
        title: "Q&A Sandwich",
        technique: {
            name: "The Final-After-Q&A",
            description: "Jangan tutup presentasi dengan 'Ada pertanyaan?'. Tutuplah SETELAH sesi tanya jawab selesai.",
            steps: [
                "Finish your material.",
                "Have the Q&A session.",
                "Deliver your 'Strong Close' (CTA + Zinger) AFTER the last question."
            ],
            whyItWorks: "Ini memastikan Anda-lah orang yang memberikan kalimat terakhir di ruangan, bukan penanya yang acak.",
            icon: "🥪"
        },
        teacherNote: "Banyak orang membiarkan presentasi mereka berakhir anti-klimaks gara-gara pertanyaan yang aneh. Rebut kembali kendali di menit terakhir."
    },
    {
        type: 'pres-checklist',
        title: "The Closing Checklist",
        subtitle: "Pastikan Anda keluar panggung dengan kepala tegak",
        checklist: {
            title: "Strong Close Qualities",
            items: [
                "Defined Call to Action (Apa yang harus audiens lakukan?)",
                "Recap of the 3 main pillars",
                "No 'uhm' in the final sentence",
                "Prolonged eye contact after the last word",
                "Clear 'Thank You' with a confident nod"
            ]
        }
    },

    // ===== PHASE 4: PRACTICE & SIMULATION =====
    {
        type: 'pres-phase',
        phaseNumber: 4,
        title: "Simulation: The Sales Close",
        subtitle: "Latihan 'Closing the Deal'"
    },
    {
        type: 'pres-script',
        title: "The 'Investment' Script",
        subtitle: "Script untuk meminta budget atau persetujuan",
        scriptSteps: [
            {
                label: "The Summary",
                action: "Use a slow, deliberate pace.",
                script: "So, as we've seen, this strategy reduces costs and increases reach."
            },
            {
                label: "The CTA",
                action: "Lean forward slightly, increase eye contact.",
                script: "I'd like to ask for your signatures on the contract by Friday."
            },
            {
                label: "The Zinger",
                action: "Pause before and after. Stand still.",
                script: "Let's not just watch the market change; let's be the ones who change it. Thank you."
            }
        ],
        teacherNote: "Jeda setelah 'Thank You' sangat penting. Jangan langsung kabur dari panggung."
    },
    {
        type: 'simulation',
        title: "The Project Wrap-up",
        simulation: {
            role: "Marketing Manager",
            scenario: "Anda baru saja mempresentasikan strategi baru yang cukup kontroversial.",
            goal: "Wrap up everything with a focus on 'Safety' and 'Growth' (the benefits). Berikan instruksi jelas bagi mereka yang ingin tahu lebih detail.",
            timeLimit: 45
        }
    },

    // ===== MISSION =====
    {
        type: 'mission',
        title: "Mission: The Closer",
        subtitle: "Berikan akhir yang tak terlupakan",
        mission: [
            "Tulis satu 'Zinger' (kalimat penutup) untuk presentasi Anda berikutnya.",
            "Terapkan teknik 'Q&A Sandwich' di meeting Anda besok.",
            "Haramkan kata 'I guess that's all' selamanya dari kosa kata Anda.",
            "Rekam diri Anda melakukan 30-second strong close."
        ]
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "What is a 'Call to Action' (CTA)?",
        options: ["A phone call from the boss", "A clear instruction on what the audience should do next", "A type of slide animation", "Ending with a joke"],
        correctIndex: 1,
        explanation: "CTA memastikan presentasi Anda memiliki dampak nyata (actionable) bagi audiens."
    },
    {
        question: "Why should you deliver your 'Strong Close' AFTER the Q&A session?",
        options: ["Because you forget it otherwise", "To ensure you provide the final thought and maintain authority", "Because people leave during Q&A", "To make the talk longer"],
        correctIndex: 1,
        explanation: "Sesi tanya jawab bisa berakhir dengan energi rendah; Strong Close mengembalikan energi dan fokus ke pesan Anda."
    },
    {
        question: "What is a 'Zinger'?",
        options: ["A type of spicy burger", "A powerful final sentence or thought that lingers with the audience", "The title of the first slide", "A technical malfunction"],
        correctIndex: 1,
        explanation: "Zinger adalah 'ledakan' terakhir yang membuat poin Anda membekas di benak audiens."
    },
    {
        question: "What is 'The Fading Trap'?",
        options: ["Your slides turning white", "Losing energy and confidence at the very end of the talk", "The lights in the room going out", "The audience falling asleep in the middle"],
        correctIndex: 1,
        explanation: "Banyak pembicara 'layu' di akhir. Pembicara pro menjaga intensitas sampai kata terakhir."
    },
    {
        question: "In the 3-part close, what comes first?",
        options: ["The Zinger", "The Summary", "The CTA", "The Greeting"],
        correctIndex: 1,
        explanation: "Mulailah dengan merangkum (Summary) agar audiens ingat kembali pilar-pilar utama Anda."
    }
];
