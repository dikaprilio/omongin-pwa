import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ============ PHASE 1: HOOK ============
    {
        type: 'title',
        title: "Body Language & First Impressions",
        subtitle: "Kesan Pertama yang Membuat HRD Langsung Percaya",
        teacherNote: "Goal: Murid sadar bahwa 93% komunikasi adalah non-verbal. Sesinya akan fokus pada eye contact, posture, handshake, dan voice tone."
    },
    {
        type: 'concept',
        title: "The 7-Second Rule",
        subtitle: "KAMU HANYA PUNYA 7 DETIK",
        content: [
            "Dalam 7 detik pertama, interviewer sudah membuat keputusan unconscious tentang kamu",
            "Sebelum kamu bicara, body language kamu sudah 'berbicara' duluan",
            "Kesan pertama susah diubah -- lebih baik bikin BENAR dari awal",
            "Ini bukan soal penampilan fisik, tapi CARA kamu membawa diri 💼"
        ],
        teacherNote: "Tanya murid: 'Menurutmu, dalam 7 detik orang bisa menilai apa?' Biasanya mereka jawab 'penampilan', arahkan ke energy dan confidence."
    },
    {
        type: 'comparison',
        title: "Before vs After: The Power of Body Language",
        comparison: [
            {
                wrong: "Mendekat meja dengan kepala menunduk, tangan di saku, suara pelan 'Halo...'",
                right: "Masuk dengan punggung tegak, senyum hangat, jabat tangan firm, 'Good morning, thank you for having me'"
            },
            {
                wrong: "Duduk menyempit di kursi, tangan di pangkuan, kontak mata ke lantai",
                right: "Duduk tegak, tangan di meja/dada terbuka, eye contact 3-detik, anggukan saat interviewer bicara"
            },
            {
                wrong: "Jawaban monoton tanpa variasi suara, kecepatan ngombor terus-menerus",
                right: "Suara variasi pitch, strategic pause sebelum poin penting, energi yang terkontrol"
            }
        ],
        teacherNote: "Baca dengan intonasi yang BERBEDA untuk before dan after. Minta murid rasakan bedanya."
    },
    {
        type: 'formula',
        title: "The First Impression Formula",
        subtitle: "Rumus Kesan Pertama yang Kuat",
        formula: "7% Words + 38% Voice + 55% Body Language",
        content: [
            "7% Words: Apa yang kamu katakan (content)",
            "38% Voice: Cara kamu mengatakannya (tone, pace, pause)",
            "55% Body Language: Ekspresi, posture, gesture, eye contact"
        ],
        teacherNote: "Ini Mehrabian's Rule. Penekanan: semua elemen penting, tapi body language sering diabaikan padahal paling terlihat."
    },

    // ============ PHASE 2: LOGIC ============
    {
        type: 'concept',
        title: "Eye Contact: The 3-Second Rule",
        subtitle: "MENATAP, BUKAN MENATAP-NATAP",
        content: [
            "🎯 The 3-Second Rule: Tahan eye contact 3 detik, lalu boleh berpindah sebentar",
            "Jangan STARE (menatap terus-menerus) -- itu bikin interviewer uncomfortable",
            "Jangan lihat ke bawah/lantai — terlihat kurang percaya diri atau menghindar",
            "Sweet spot: Mata interviewer (bukan dahi, bukan hidung -- TETAPI MATA)"
        ],
        teacherNote: "Praktekkan bareng: hitung 'satu-dua-tiga' sambil tahan kontak mata. Jelaskan kalau nervous, fokus ke alis interviewer — tetap terlihat seperti eye contact."
    },
    {
        type: 'concept',
        title: "Posture: Own Your Space",
        subtitle: "POWER POSE & SITTING POSITION",
        content: [
            "Power Pose sebelum interview: 2 menit di kamar kecil/meeting room (bukan di depan interviewer!)",
            "Sitting position: Duduk tegak, punggung menyentuh sandaran, bahu terbuka",
            "Jangan mengerucut! Buka chest, jangan lipat tangan ketat (defensive)",
            "Leaning forward slightly = shows interest dan engagement"
        ],
        teacherNote: "Jelaskan Power Pose Amy Cuddy. Praktekkan posture duduk yang benar: bahu lebar, tangan terbuka di meja (bukan di pangkuan)."
    },
    {
        type: 'formula',
        title: "The Perfect Handshake",
        subtitle: "JABAT TANGAN PROFESIONAL",
        formula: "FIRM + BRIEF + EYE CONTACT + SMILE",
        content: [
            "FIRM: Kencangkan grip, tapi jangan CRUSH (2-3 detik cukup)",
            "BRIEF: 2-3 goncangan, lalu lepas — jangan terlalu lama",
            "EYE CONTACT: Selama jabat tangan, tatap mata interviewer",
            "SMILE: Senyum hangat dan tulus -- bukan senyum dipaksakan"
        ],
        teacherNote: "Bahas kesalahan orang Indonesia: terlalu lembek (dead fish handshake) atau malah terlalu keras. Demo yang benar."
    },
    {
        type: 'concept',
        title: "Facial Expressions & Smile",
        subtitle: "EKSPRESI WAJAH YANG TEPAT",
        content: [
            "😊 The Duchenne Smile: Senyum yang sampai ke mata, bukan cuma bibir",
            "Ekspresi yang terlalu datar = terlihat tidak tertarik atau sombong",
            "Nodding: Anak-angguk sesekali saat interviewer bicara — tunjukkan listening",
            "Eyebrow flash: Saat greeting, alis naik sebentar = sinyal friendliness"
        ],
        teacherNote: "Senyum palsu vs senyum asli: senyum asli ada 'crow's feet' di sudut mata. Minta murid praktek senyum tulus."
    },
    {
        type: 'formula',
        title: "Voice: Pace, Pause, Power",
        subtitle: "SUARA YANG MENYAKSIKAN",
        formula: "PACE ↓ + PAUSE ✋ + POWER 💪",
        content: [
            "PACE: Perlambat 20% dari kecepatan normal — clarity over speed",
            "PAUSE: Pause 1-2 detik sebelum jawaban penting — bikin interviewer nunggu",
            "POWER: Variasi volume dan pitch — highlight kata-kata kunci",
            "Breathing: Nafas perut (diaphragmatic) — suara lebih stabil dan dalam"
        ],
        teacherNote: "Orang Indonesia sering ngombor cepat saat nervous. Praktekkan: 'Good... [pause]... morning' — tunjukkan power dari pause."
    },
    {
        type: 'concept',
        title: "What to Wear: Business Professional",
        subtitle: "DRESS FOR SUCCESS",
        content: [
            "👔 Formal: Setelan jas + kemeja + dasi/sepatu kulit (banking, law, consulting)",
            "👕 Business Casual: Kemeja berkerah + celana bahan/chinos (tech, creative, startup)",
            "⚠️ Hindari: Sneakers, kaos oblong, jeans robek, warna terlalu terang/neon",
            "Saat ragu: Lebih formal lebih baik daripada terlalu casual"
        ],
        teacherNote: "Jelaskan beda industri. Tech/startup lebih casual, banking/law lebih formal. Intinya: rapi, bersih, dan pas di badan."
    },
    {
        type: 'concept',
        title: "Online Interview Etiquette",
        subtitle: "BODY LANGUAGE DI LAYAR",
        content: [
            "📷 Camera Position: Eye level — jangan dari bawah (double chin) atau terlalu tinggi",
            "💡 Lighting: Sumber cahaya di DEPAN kamu (window/best), bukan di belakang",
            "🖼️ Background: Clean dan professional — blur/virtual background kalau perlu",
            "👁️ Look at camera, bukan layar — baru terlihat seperti eye contact"
        ],
        teacherNote: "Demo posisi kamera yang salah vs benar. Jelaskan kalau lihat layar = kelihatan seperti lihat ke bawah. Trick: letakkan note dekat kamera."
    },
    {
        type: 'concept',
        title: "Common Mistakes: Indonesian Style",
        subtitle: "KESALAHAN YANG SERING TERJADI",
        content: [
            "🙇 Terlalu 'humble': Posture mengerucut, suara pelan, kurang eye contact",
            "👀 Menunduk saat berpikir: Terlihat tidak percaya diri atau tidak siap",
            "🤝 Handshake lembek: 'Dead fish handshake' = kesan tidak professional",
            "🔇 Suara terlalu soft: Di ruang AC/interview besar, suara pelan tidak terdengar"
        ],
        teacherNote: "Ini PENTING untuk murid Indonesia. Kita diajar 'rendah hati', tapi di interview internasional itu sering dimisinterpretasi. Balance humility dengan confidence."
    },

    // ============ PHASE 3: PRACTICE ============
    {
        type: 'int-vocab',
        title: "Body Language Vocabulary",
        interviewVocab: [
            { term: "maintain eye contact", meaning: "menjaga kontak mata", example: "It's important to maintain eye contact throughout the interview.", category: "Eye Contact" },
            { term: "firm handshake", meaning: "jabat tangan yang kuat/tegas", example: "She greeted me with a firm handshake and a warm smile.", category: "Greeting" },
            { term: "open posture", meaning: "postur tubuh terbuka", example: "Open posture shows confidence and approachability.", category: "Posture" },
            { term: "power pose", meaning: "pose kuat (expansive posture)", example: "Two minutes of power pose before the interview boosts confidence.", category: "Preparation" },
            { term: "lean in", meaning: "mencondongkan tubuh ke depan", example: "Lean in slightly when the interviewer speaks to show interest.", category: "Engagement" },
            { term: "nod in agreement", meaning: "mengangguk setuju", example: "Nod in agreement occasionally to show you're actively listening.", category: "Listening" },
            { term: "diaphragmatic breathing", meaning: "pernapasan perut/diafragma", example: "Use diaphragmatic breathing to keep your voice steady.", category: "Voice" },
            { term: "strategic pause", meaning: "jeda strategis", example: "A strategic pause before answering shows thoughtfulness.", category: "Speaking" },
            { term: "dress appropriately", meaning: "berpakaian sesuai", example: "Always dress appropriately for the company culture.", category: "Attire" },
            { term: "command presence", meaning: "kehadiran yang memerintah (auroritas)", example: "Enter the room with command presence from the first step.", category: "Entrance" }
        ],
        teacherNote: "Mint murid praktekkan tiap frasa. Perhatikan pronunciation 'diaphragmatic' (dai-uh-frag-MAT-ik) dan 'appropriately' (uh-PROH-pree-it-lee)."
    },
    {
        type: 'int-scenario',
        title: "Scenario: Transforming Your Entrance",
        interviewScenario: {
            question: "Demonstrasikan cara masuk ruangan interview dengan body language yang tepat.",
            starAnswer: {
                situation: "Kamu baru sampai di ruang interview. Pintu terbuka, interviewer berdiri menunggu.",
                task: "Kamu harus membuat first impression yang confident dan professional dalam 10 detik.",
                action: "Masuk dengan 3 langkah: (1) Senyum + eye contact + sapa 'Good morning', (2) Jalan dengan bahu terbuka dan tempo sedang, (3) Jabat tangan dengan firm grip + ulangi nama 'I'm Andi, nice to meet you'.",
                result: "Interviewer merasa kamu confident, prepared, dan professional — interview dimulai dengan energy yang positif."
            },
            tip: "Latih di rumah: Rekam diri masuk ruangan sampai terlihat natural dan confident."
        },
        teacherNote: "Ini scenario 'before/after'. Minta murid demo versi SALAH dulu (capek, tunduk), lalu versi BENAR (energik, confident)."
    },
    {
        type: 'comparison',
        title: "Virtual Interview: Setup Do's & Don'ts",
        comparison: [
            {
                wrong: "Kamera dari bawah, lighting gelap di belakang, background berantakan",
                right: "Kamera eye level, lighting di depan, background clean/buram"
            },
            {
                wrong: "Lihat ke layar saat bicara, headset bluetooth low battery",
                right: "Lihat ke kamera (eye contact virtual), headphone kabel untuk kualitas audio"
            },
            {
                wrong: "Dada ke bawah setengah frame, gesture terlalu banyak (keluar frame)",
                right: "Head and shoulders visible, minimal gesture yang terlihat di frame"
            }
        ],
        teacherNote: "Banyak interview sekarang hybrid/online. Setup yang benar = separuh battle sudah menang."
    },
    {
        type: 'micro-drill',
        title: "Micro Drill: The Power Pose",
        subtitle: "2 Menit untuk Mengubah Chemistry Tubuh",
        mission: [
            "Berdiri dengan kaki selebar bahu",
            "Tangan di pinggang atau diangkat ke atas dalam V-shape",
            "Dada terbuka, dagak sedikit terangkat",
            "Tahan 2 menit sambil napas dalam-dalam",
            "Rasakan perubahan energi dan confidence level 🦸"
        ],
        teacherNote: "Lakukan bareng murid (kalau online). Jelaskan ini based on Amy Cuddy's research dari Harvard. Jangan lakukan IN FRONT OF interviewer!"
    },
    {
        type: 'micro-drill',
        title: "Micro Drill: Voice Power",
        subtitle: "Latih Suara yang Berwibawa",
        mission: [
            "Baca kalimat: 'I am confident and ready for this opportunity'",
            "Ulangi dengan 20% lebih LAMBAT",
            "Ulangi dengan STRATEGIC PAUSE: 'I am... [pause]... confident'",
            "Ulangi dengan POWER di kata kunci: 'I AM confident and READY'",
            "Record dan dengar perbedaannya 🎤"
        ],
        teacherNote: "Praktekkan variasi ini. Orang Indonesia sering flat monotone — latih variasi pitch dan pause."
    },
    {
        type: 'concept',
        title: "Mirror Neurons: Why It Works",
        subtitle: "ILMU DI BALIK BODY LANGUAGE",
        content: [
            "🧠 Mirror neurons: Otak interviewer akan 'meniru' energy yang kamu tunjukkan",
            "Kalau kamu nervous dan mengerucut → interviewer ikut merasa awkward",
            "Kalau kamu confident dan terbuka → interviewer ikut merasa nyaman",
            "Ini science: Your body language literally changes the interviewer's perception 💡"
        ],
        teacherNote: "Jelaskan dengan simple: kita punya 'cermin' di otak. Kalau senyum, orang ikut senyum. Kalau tegang, orang ikut tegang."
    },

    // ============ PHASE 4: SIMULATION ============
    {
        type: 'int-mock',
        title: "Mock Interview: Body Language Focus",
        mockInterview: {
            jobTitle: "Marketing Associate",
            company: "Global Tech Solutions",
            questions: [
                "Tell me about yourself.",
                "Why do you want to work here?",
                "Describe a time you handled a difficult situation.",
                "Where do you see yourself in 5 years?",
                "Do you have any questions for us?"
            ],
            context: "Ini mock interview dengan FOKUS BODY LANGUAGE. Interviewer akan menilai: eye contact (3-second rule), posture (terbuka/tidak mengerucut), handshake (kalau in-person), voice (pace/pause/power), dan overall presence. Kamu juga akan mendapat feedback spesifik tentang body language."
        },
        teacherNote: "Selama mock interview, catat body language murid. Feedback SPESIFIK: 'Eye contact bagus tapi tangan kamu di pangkuan terus' — bukan cuma 'bagus' atau 'kurang'."
    },
    {
        type: 'simulation',
        title: "Full Simulation: The Complete Entrance",
        simulation: {
            role: "Job Candidate",
            scenario: "Kamu baru tiba di kantor untuk interview. Resepsionis menunjuk ke ruang meeting. Interviewer berdiri di dalam menunggu. Ini momen 7-detik pertama.",
            goal: "Lakukan entrance yang sempurna: posture, eye contact, greeting, handshake (kalau in-person), dan posisi duduk yang professional.",
            timeLimit: 120
        },
        teacherNote: "Simulasi ini fokus ENTRANCE dan SETUP. Dari berdiri sampai duduk. Ini momen paling krusial untuk first impression."
    },
    {
        type: 'micro-drill',
        title: "Final Drill: The 30-Second Power Intro",
        subtitle: "Gabungkan Elevator Pitch + Body Language",
        mission: [
            "Berdiri dengan power pose sebelum mulai",
            "Mulai dengan eye contact + smile + greeting firm",
            "Sampaikan elevator pitch 30 detik dengan voice variation",
            "Gunakan strategic pause sebelum poin penting",
            "Akhiri dengan anggukan dan terbuka untuk pertanyaan",
            "Tutor akan nilai: verbal + non-verbal integration 💯"
        ],
        teacherNote: "Ini integrasi dari Session 1 (elevator pitch) dengan Session 4 (body language). Murid harus bisa kombinasi keduanya seamless."
    },
    {
        type: 'recap',
        title: "Rangkuman: The Complete First Impression",
        recap: [
            { context: "Entrance (7 detik pertama)", sayThis: "Posture tegak, eye contact, smile, firm handshake", dontSayThis: "Mendekat sambil tunduk, suara pelan, handshake lembek" },
            { context: "Eye Contact", sayThis: "3-second rule: tahan, pindah, kembali", dontSayThis: "Stare tanpa henti atau lihat ke bawah terus" },
            { context: "Posture (Sitting)", sayThis: "Duduk tegak, bahu terbuka, lean in slightly", dontSayThis: "Mengerucut, tangan ketat, jauh dari meja" },
            { context: "Voice", sayThis: "Pace ↓ + Pause ✋ + Power 💪 (variasi)", dontSayThis: "Ngobor cepat, monotone, volume kecil" },
            { context: "Online", sayThis: "Camera eye level, lighting depan, lihat kamera", dontSayThis: "Kamera dari bawah, backlight, lihat layar" }
        ]
    },
    {
        type: 'mission',
        title: "Mission: 7-Day Body Language Challenge",
        subtitle: "Latih Setiap Hari untuk Internalisasi",
        mission: [
            "📅 Day 1-2: Praktek power pose 2 menit setiap pagi",
            "📅 Day 3-4: Rekam video elevator pitch + self-assess body language",
            "📅 Day 5-6: Mock interview dengan teman/keluarga, minta feedback non-verbal",
            "📅 Day 7: Gabungan sempurna — rekam full entrance to exit",
            "🎯 Goal: Body language yang confident jadi NATURAL, bukan dipaksakan"
        ],
        teacherNote: "Tantangan ini membangun habit. Body language yang baik harus jadi second nature, bukan acting. Check-in minggu depan."
    },
    {
        type: 'concept',
        title: "Final Thought: Authentic Confidence",
        subtitle: "BUKAN ACTING, TAPI PREPARATION",
        content: [
            "⚠️ Body language bukan tentang 'acting' confident padahal nervous",
            "✅ Body language adalah hasil dari PREPARATION yang matang + MINDSET yang benar",
            "Kamu nervous karena kurang siap — prepare lebih baik, confidence akan mengikuti",
            "Practice makes permanent — latih sampai menjadi natural 💪"
        ],
        teacherNote: "Tutup dengan pesan: body language yang terbaik datang dari confidence yang genuine. Dan confidence itu datang dari persiapan."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Berapa lama kita harus mempertahankan eye contact sebelum boleh berpindah?",
        options: [
            "1 detik",
            "3 detik (3-second rule)",
            "10 detik",
            "Sebisa mungkin jangan lepas eye contact"
        ],
        correctIndex: 1,
        explanation: "The 3-second rule: Tahan eye contact sekitar 3 detik, lalu boleh berpindah sebentar. Jangan stare terus-menerus karena itu membuat interviewer uncomfortable."
    },
    {
        question: "Apa kombinasi yang tepat untuk handshake profesional?",
        options: [
            "Lembut + lama + tanpa eye contact",
            "Keras banget + banyak goncangan + senyum dipaksakan",
            "Firm + brief (2-3 detik) + eye contact + smile",
            "Santai + satu goncangan + lihat ke bawah"
        ],
        correctIndex: 2,
        explanation: "Formula yang benar: FIRM (tapi bukan crush) + BRIEF (2-3 detik) + EYE CONTACT + SMILE. Kombinasi ini menunjukkan confidence dan professionalism."
    },
    {
        question: "Kesalahan body language apa yang paling sering dilakukan orang Indonesia saat interview?",
        options: [
            "Troppo banyak gesture dengan tangan",
            "Posture yang terlalu 'humble' (mengerucut, suara pelan, kurang eye contact)",
            "Handshake yang terlalu keras",
            "Bicara terlalu cepat dan keras"
        ],
        correctIndex: 1,
        explanation: "Orang Indonesia sering terlalu 'humble' dalam artian posture mengerucut, suara pelan, dan kurang eye contact. Padahal di konteks interview internasional, ini sering dimisinterpretasi sebagai kurang percaya diri."
    },
    {
        question: "Untuk online interview, di mana sebaiknya kita menatap saat berbicara?",
        options: [
            "Ke layar (wajah interviewer)",
            "Ke keyboard",
            "Ke kamera (agar terlihat seperti eye contact)",
            "Ke dinding di belakang"
        ],
        correctIndex: 2,
        explanation: "Untuk online interview, tatap KAMERA (bukan layar) agar terlihat seperti eye contact. Kalau lihat layar, kita terlihat seperti menunduk. Trick: letakkan note/sticky note dekat kamera."
    },
    {
        question: "Menurut Mehrabian's Rule, berapa persen komunikasi adalah body language?",
        options: [
            "7%",
            "38%",
            "55%",
            "93%"
        ],
        correctIndex: 2,
        explanation: "Mehrabian's Rule: 7% words + 38% voice + 55% body language. Meskipun konteks penting, ini menunjukkan bahwa non-verbal communication sangat signifikan dalam membentuk kesan."
    }
];
