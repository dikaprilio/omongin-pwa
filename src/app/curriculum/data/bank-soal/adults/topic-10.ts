/**
 * Topic 10: Telephoning & Zoom
 * -----------------------------
 * 30 questions covering phone etiquette, Zoom phrases,
 * handling technical issues, and professional virtual communication.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 10,
    path: 'speaking-adults',
    title: "Telephoning & Zoom",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "adult-10-001",
            question: "Cara membuka telepon yang profesional adalah:",
            options: [
                "Hello?",
                "This is [Name] from [Company].",
                "Who is this?",
                "What do you want?"
            ],
            correctIndex: 1,
            explanation: "'This is [Name] from [Company]' adalah cara profesional untuk identifikasi diri di telepon.",
            difficulty: "easy",
            tags: ["opening", "phone"]
        },
        {
            id: "adult-10-002",
            question: "Saat suara putus-putus di Zoom, Anda bilang:",
            options: [
                "Your voice is broken.",
                "You're breaking up.",
                "I cannot hear your voice.",
                "Sound is bad."
            ],
            correctIndex: 1,
            explanation: "'You're breaking up' adalah idiom untuk suara yang putus-putus (terdengar berpotong-potong).",
            difficulty: "easy",
            tags: ["technical", "phrases"]
        },
        {
            id: "adult-10-003",
            question: "Saat seseorang di Zoom tidak sadar mic-nya mati, Anda bilang:",
            options: [
                "You are silent.",
                "Your mic is dead.",
                "You're on mute.",
                "Speak louder!"
            ],
            correctIndex: 2,
            explanation: "'You're on mute' adalah cara standar memberitahu seseorang bahwa mereka belum unmute microphone.",
            difficulty: "easy",
            tags: ["zoom", "mute"]
        },
        {
            id: "adult-10-004",
            question: "Frasa untuk menyela dengan sopan:",
            options: [
                "Stop! I want to say something.",
                "Sorry to interrupt, but...",
                "Listen to me!",
                "Hey, my turn!"
            ],
            correctIndex: 1,
            explanation: "'Sorry to interrupt, but...' adalah cara yang polite untuk menyela percakapan.",
            difficulty: "easy",
            tags: ["interrupting", "polite"]
        },
        {
            id: "adult-10-005",
            question: "Saat meninggalkan voicemail, yang penting disebutkan:",
            options: [
                "Hanya nama",
                "Nama, purpose panggilan, dan nomor callback",
                "Hanya purpose",
                "Semua detail panjang lebar"
            ],
            correctIndex: 1,
            explanation: "Voicemail yang efektif: nama Anda, mengapa Anda menelepon, dan nomor untuk callback.",
            difficulty: "easy",
            tags: ["voicemail", "structure"]
        },
        {
            id: "adult-10-006",
            question: "Saat menutup call yang profesional:",
            options: [
                "Bye. (langsung tutup)",
                "I think that covers everything. Thanks for your time!",
                "I need to go now. Bye.",
                "(diam dan tutup)"
            ],
            correctIndex: 1,
            explanation: "Tutup dengan konfirmasi selesai dan appreciation untuk waktu mereka.",
            difficulty: "easy",
            tags: ["closing", "professional"]
        },
        {
            id: "adult-10-007",
            question: "Etika video call: Apa yang harus dilakukan saat tidak berbicara?",
            options: [
                "Biarkan mic tetap on",
                "Mute microphone",
                "Matikan kamera",
                "Chat dengan orang lain"
            ],
            correctIndex: 1,
            explanation: "Mute saat tidak berbicara untuk mengurangi background noise dan gangguan.",
            difficulty: "easy",
            tags: ["etiquette", "zoom"]
        },
        {
            id: "adult-10-008",
            question: "Frasa untuk meminta orang mengulang karena tidak mendengar:",
            options: [
                "What?",
                "Sorry, I didn't catch that. Could you say that again?",
                "Huh?",
                "I don't hear you."
            ],
            correctIndex: 1,
            explanation: "'Sorry, I didn't catch that' adalah cara polite untuk minta pengulangan.",
            difficulty: "easy",
            tags: ["clarifying", "phrases"]
        },
        {
            id: "adult-10-009",
            question: "Saat screen sharing, Anda bilang:",
            options: [
                "Look at my computer.",
                "I'm going to share my screen.",
                "See my screen now.",
                "Watch this."
            ],
            correctIndex: 1,
            explanation: "'I'm going to share my screen' adalah announcement standar sebelum screen sharing.",
            difficulty: "easy",
            tags: ["zoom", "screen-share"]
        },
        {
            id: "adult-10-010",
            question: "Cara bilang 'saya double-booked' dengan profesional:",
            options: [
                "I have two meetings.",
                "I'm double-booked at that time.",
                "I made a mistake with my schedule.",
                "I cannot come."
            ],
            correctIndex: 1,
            explanation: "'I'm double-booked' adalah istilah standar untuk scheduling conflict.",
            difficulty: "easy",
            tags: ["scheduling", "phrases"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "adult-10-011",
            question: "Mengapa 'I lost you for a moment' lebih baik daripada 'You're gone'?",
            options: [
                "Lebih pendek",
                "Lebih diplomatic - tidak menyalahkan",
                "Grammar-nya lebih mudah",
                "Lebih jelas"
            ],
            correctIndex: 1,
            explanation: "'I lost you' adalah pengakuan situasi tanpa menyalahkan technology atau orang.",
            difficulty: "medium",
            tags: ["phrases", "diplomatic"]
        },
        {
            id: "adult-10-012",
            question: "Saat connection buruk dan perlu telepon ulang:",
            options: [
                "Phone is bad. I call again.",
                "The connection is poor. I'll call you back.",
                "I cannot talk. Bye.",
                "Your phone has problem."
            ],
            correctIndex: 1,
            explanation: "'The connection is poor. I'll call you back' adalah cara profesional untuk handle technical issue.",
            difficulty: "medium",
            tags: ["technical", "professional"]
        },
        {
            id: "adult-10-013",
            question: "Frasa untuk konfirmasi pemahaman di call:",
            options: [
                "Okay.",
                "Just to make sure I understand...",
                "I think so.",
                "Probably."
            ],
            correctIndex: 1,
            explanation: "'Just to make sure I understand' memastikan clarity sebelum melanjutkan.",
            difficulty: "medium",
            tags: ["clarifying", "phrases"]
        },
        {
            id: "adult-10-014",
            question: "Mengapa eye contact penting di video call?",
            options: [
                "Tidak penting",
                "Karena membangun connection - lihat ke camera, bukan cuma screen",
                "Karena aturannya begitu",
                "Karena terlihat bagus"
            ],
            correctIndex: 1,
            explanation: "Look at the camera (bukan screen) menciptakan illusion of eye contact dan membangun rapport.",
            difficulty: "medium",
            tags: ["etiquette", "eye-contact"]
        },
        {
            id: "adult-10-015",
            question: "Cara handle interrupt yang profesional:",
            options: [
                "Quiet! I need to say something.",
                "Could I jump in here with a quick point?",
                "Wait, my turn!",
                "Stop talking."
            ],
            correctIndex: 1,
            explanation: "'Could I jump in here' adalah request yang polite untuk menyela.",
            difficulty: "medium",
            tags: ["interrupting", "polite"]
        },
        {
            id: "adult-10-016",
            question: "Frasa untuk 'transfer call' dengan sopan:",
            options: [
                "I give you to someone else.",
                "Let me transfer you to the appropriate department.",
                "You talk to other person.",
                "I cannot help. Change phone."
            ],
            correctIndex: 1,
            explanation: "'Let me transfer you to the appropriate department' adalah cara profesional.",
            difficulty: "medium",
            tags: ["transfer", "phrases"]
        },
        {
            id: "adult-10-017",
            question: "Saat Anda perlu meninggalkan meeting lebih awal:",
            options: [
                "(langsung leave tanpa kata-kata)",
                "I need to jump on another call, but let's continue this later.",
                "I have to go. Bye.",
                "Sorry, I leave now."
            ],
            correctIndex: 1,
            explanation: "Announce departure dengan reason brief dan commitment untuk continue later.",
            difficulty: "medium",
            tags: ["leaving", "professional"]
        },
        {
            id: "adult-10-018",
            question: "Mengapa 'ASAP' tidak selalu baik untuk digunakan?",
            options: [
                "Grammar-nya salah",
                "Dianggap pushy di banyak tempat - gunakan 'at your earliest convenience'",
                "Terlalu panjang",
                "Orang tidak mengerti"
            ],
            correctIndex: 1,
            explanation: "'ASAP' bisa terdengar demanding. 'At your earliest convenience' lebih respectful.",
            difficulty: "medium",
            tags: ["nuance", "phrases"]
        },
        {
            id: "adult-10-019",
            question: "Cara terbaik meminta orang mengeja nama:",
            options: [
                "Spell your name.",
                "Could you spell that for me, please?",
                "How to write your name?",
                "Your name letters?"
            ],
            correctIndex: 1,
            explanation: "'Could you spell that for me, please' adalah request yang polite dan clear.",
            difficulty: "medium",
            tags: ["spelling", "phrases"]
        },
        {
            id: "adult-10-020",
            question: "Frasa untuk menanyakan ketersediaan waktu:",
            options: [
                "Are you free?",
                "Do you have a few minutes to talk?",
                "Can you talk now?",
                "You available?"
            ],
            correctIndex: 1,
            explanation: "'Do you have a few minutes to talk' adalah cara yang respectful untuk check availability.",
            difficulty: "medium",
            tags: ["availability", "phrases"]
        },
        {
            id: "adult-10-021",
            question: "Etika Zoom: Background yang baik harus:",
            options: [
                "Menunjukkan kepribadian dengan banyak poster",
                "Clean dan tidak distracting",
                "Ada orang lain di belakang",
                "Bisa apa saja"
            ],
            correctIndex: 1,
            explanation: "Background yang clean dan professional tidak mengalihkan perhatian dari pembicaraan.",
            difficulty: "medium",
            tags: ["etiquette", "background"]
        },
        {
            id: "adult-10-022",
            question: "Mengapa 'I'll put it in the chat' sering digunakan di Zoom?",
            options: [
                "Karena chat lebih penting dari suara",
                "Untuk share links/informasi yang bisa dicopy tanpa interrupt flow",
                "Karena speaking tidak efektif",
                "Aturan Zoom"
            ],
            correctIndex: 1,
            explanation: "Chat memungkinkan sharing links/data tanpa interrupt verbal flow atau untuk referensi later.",
            difficulty: "medium",
            tags: ["zoom", "chat"]
        },

        // === HARD (8 questions) ===
        {
            id: "adult-10-023",
            question: "Analisis: 'Hello. Who this? What you want? I no understand. You speak bad.' Apa SEMUA masalahnya?",
            options: [
                "Tidak ada masalah",
                "Grammar error, rude, no identification, accusatory",
                "Terlalu pendek",
                "Hanya satu masalah"
            ],
            correctIndex: 1,
            explanation: "Masalah: tidak identifikasi diri, grammar broken, rude ('Who this?'), accusatory ('You speak bad').",
            difficulty: "hard",
            tags: ["analysis", "bad-example"]
        },
        {
            id: "adult-10-024",
            question: "Mengapa non-verbal cues penting di telepon/Zoom?",
            options: [
                "Tidak penting",
                "Karena tanpa body language, tone of voice dan word choice menjadi lebih kritis",
                "Karena orang harus melihat wajah",
                "Karena aturannya begitu"
            ],
            correctIndex: 1,
            explanation: "Di virtual communication, kita kehilangan body language. Tone, pacing, dan word choice harus mengompensasi.",
            difficulty: "hard",
            tags: ["non-verbal", "communication"]
        },
        {
            id: "adult-10-025",
            question: "Cara terbaik handle meeting Zoom yang chaotic (banyak yang talking over each other):",
            options: [
                "Ikut teriak juga",
                "'Let's take turns. John, you go first, then Sarah.'",
                "Mute semua orang",
                "Leave meeting"
            ],
            correctIndex: 1,
            explanation: "Take charge dengan calmly directing turn-taking menunjukkan leadership.",
            difficulty: "hard",
            tags: ["facilitation", "leadership"]
        },
        {
            id: "adult-10-026",
            question: "Mengapa 'Can everyone see my screen?' penting sebelum presentasi?",
            options: [
                "Formalitas saja",
                "Untuk memastikan technical setup bekerja sebelum melanjutkan",
                "Tidak penting",
                "Aturan Zoom"
            ],
            correctIndex: 1,
            explanation: "Confirm visibility memastikan audience bisa melihat sebelum Anda mulai presentasi.",
            difficulty: "hard",
            tags: ["presentation", "technical"]
        },
        {
            id: "adult-10-027",
            question: "Dalam bisnis global, mengapa etika video call mirip di berbagai budaya?",
            options: [
                "Karena semua budaya sama",
                "Karena professionalism dan respect adalah universal values",
                "Karena Zoom adalah perusahaan Amerika",
                "Tidak mirip"
            ],
            correctIndex: 1,
            explanation: "Meski ada nuansa budaya, core principles: punctuality, respect, preparation adalah universal.",
            difficulty: "hard",
            tags: ["global", "culture"]
        },
        {
            id: "adult-10-028",
            question: "Buat script lengkap untuk: Membuka Zoom call dengan client, masalah koneksi, dan reschedule dengan profesional.",
            options: [
                "Hello. Connection bad. We meet next time.",
                "Good morning, this is [Name] from [Company]. I wanted to discuss... I'm sorry, you're breaking up. The connection seems unstable. Would it be possible to reschedule this call for later today or tomorrow?",
                "Hi. Can you hear? No? Okay bye.",
                "Connection problem. I call again."
            ],
            correctIndex: 1,
            explanation: "Ini script yang lengkap: opening profesional, identify problem politely, offer solution dengan flexibility.",
            difficulty: "hard",
            tags: ["application", "script"]
        },
        {
            id: "adult-10-029",
            question: "Mengapa virtual communication skills semakin penting di era modern?",
            options: [
                "Karena tidak penting",
                "Karena remote work dan global teams membuat virtual communication menjadi primary mode",
                "Karena orang malas bertemu",
                "Karena teknologi"
            ],
            correctIndex: 1,
            explanation: "Remote work, global teams, dan digital transformation membuat virtual communication skill essential.",
            difficulty: "hard",
            tags: ["modern", "trends"]
        },
        {
            id: "adult-10-030",
            question: "Final Challenge: Elemen PALING kritis untuk professional presence di Zoom adalah:",
            options: [
                "Background virtual yang lucu",
                "Technical reliability + clear audio + engagement",
                "Kamera yang mahal",
                "Banyaknya peserta"
            ],
            correctIndex: 1,
            explanation: "Professional presence = reliable connection, clear audio (paling penting!), dan active engagement.",
            difficulty: "hard",
            tags: ["mastery", "presence"]
        }
    ]
};
