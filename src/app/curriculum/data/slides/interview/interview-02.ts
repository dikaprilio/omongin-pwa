import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK/WARM-UP ====================
    {
        type: 'title',
        title: "The STAR Method",
        subtitle: "Rahasia Menjawab Behavioral Questions dengan Tepat dan Meyakinkan",
        teacherNote: "Goal: Murid paham cara pakai STAR method untuk jawab pertanyaan behavioral. Ini slide #2 dari core interview skills — foundational!"
    },
    {
        type: 'concept',
        title: "Apa Itu Behavioral Questions?",
        subtitle: "PERTANYAAN PALING MENAKUTKAN",
        content: [
            '"Tell me about a time when you..." = pertanyaan behavioral 🎯',
            '"Describe a situation where you had to..." = behavioral juga',
            'HRD pakai ini untuk lihat: bagaimana kamu handle situation di masa lalu = predictor untuk masa depan',
            'Tanpa struktur: jawabanmu jadi ngalor-ngidul, kurang impact, HRD bingung'
        ],
        teacherNote: "Tanya murid: 'Pernah ditanya gini? Tell me about a conflict with coworker? Tell me about failure?' Biasanya mereka jawab panjang lebar tanpa arah."
    },
    {
        type: 'comparison',
        title: "The Trap: Jawaban yang Meander",
        subtitle: "Kenapa Banyak Kandidat Gagal?",
        comparison: [
            {
                wrong: "Ummm... ada sih waktu itu di kantor lama... kita lagi project sama vendor... terus ada masalah... lama banget ngurusnya... pokoknya stressful deh... tapi akhirnya selesai juga sih.",
                right: "In my previous role at Tokopedia, our vendor missed a critical deadline (Situation). I needed to deliver the project on time without compromising quality (Task). I immediately arranged an emergency meeting, renegotiated the timeline, and personally supervised the revised deliverables (Action). We delivered 2 days early and the client renewed their contract (Result)."
            },
            {
                wrong: "Saya tuh orangnya teamwork banget. Suka bantu orang. Waktu itu temen saya ada masalah, saya bantuin. Terus semua senang.",
                right: "When a team member at Gojek struggled with the new CRM system (Situation), I took initiative to create a simplified training manual (Task). I spent 3 evenings documenting workflows and conducted a 30-minute hands-on session (Action). Her productivity increased 40% and she nominated me for the quarterly team player award (Result)."
            }
        ],
        teacherNote: "Jelaskan: yang kiri itu jawaban 90% kandidat Indonesia. Banyak 'kita', detail samar, nggak ada outcome. Yang kanan? Structure yang bikin HRD langsung notice."
    },

    // ==================== PHASE 2: LOGIC & MECHANICS ====================
    {
        type: 'formula',
        title: "The STAR Formula",
        subtitle: "Struktur Jawaban yang Bikin HRD Mengangguk",
        formula: "SITUATION → TASK → ACTION → RESULT",
        content: [
            "SITUATION: Set the scene. Context singkat — where, when, what was happening? (10-15%)",
            "TASK: Your specific responsibility. What did YOU need to accomplish? (10%)",
            "ACTION: The meat of your answer. What steps did YOU take? Use 'I' not 'we'! (60-70%) 🔥",
            "RESULT: Quantify the outcome. What happened? What did you learn? (15-20%)"
        ],
        teacherNote: "Ini formula paling penting di interview. Ulangi berkali-kali: SITUATION → TASK → ACTION → RESULT. Tekankan: ACTION paling gede, pakai 'I' bukan 'we'."
    },
    {
        type: 'concept',
        title: "The Golden Ratio",
        subtitle: "PROPORSI YANG SEMPURNA",
        content: [
            '📊 Situation: 10-15% — Cukup untuk HRD paham context',
            '📋 Task: 10% — Spesifikkan your responsibility',
            '⚡ Action: 60-70% — Ini yang HRD cari! Detailkan your contribution',
            '🏆 Result: 15-20% — Quantify! Numbers, percentages, outcomes',
            '❌ Kesalahan umum: Situation 50%, Action cuma 20%, Result nggak ada'
        ],
        teacherNote: "Gambarkan dengan tangan: 'Kalau 100 detik jawaban, 60-70 detik di ACTION. Situation? 10-15 detik cukup!'"
    },
    {
        type: 'micro-drill',
        title: "I vs We Drill",
        subtitle: "Latihan 60 Detik: Transformasikan Kalimat",
        mission: [
            "Ubah: 'We decided to change the strategy' → pakai 'I'",
            "Ubah: 'Our team improved the process' → sebutkan YOUR specific action",
            "Ubah: 'They gave me the project' → aktifkan: 'I volunteered for...' atau 'I was assigned to...'",
            "Ubah: 'The problem was solved' → spesifikkan YOUR contribution to solving it"
        ],
        teacherNote: "Ini drill cepat. Baca kalimat kiri, minta murid ubah ke kanan. Koreksi yang masih pakai 'we' atau passive voice."
    },

    // ==================== PHASE 3: UPGRADE/PRACTICE ====================
    {
        type: 'int-vocab',
        title: "STAR Method Vocabulary",
        subtitle: "Power Words untuk Setiap Komponen",
        interviewVocab: [
            { term: "In my previous role at...", meaning: "Di peran saya sebelumnya di...", example: "In my previous role at BCA, I managed a portfolio of 50 corporate clients.", category: "Situation" },
            { term: "During my time at...", meaning: "Selama saya di...", example: "During my time at Unilever, I encountered a situation where...", category: "Situation" },
            { term: "I was responsible for...", meaning: "Saya bertanggung jawab untuk...", example: "I was responsible for reducing operational costs by 20%.", category: "Task" },
            { term: "My objective was to...", meaning: "Tujuan saya adalah...", example: "My objective was to launch the product within 3 months.", category: "Task" },
            { term: "I initiated...", meaning: "Saya memulai/menginisiasi...", example: "I initiated a weekly review process to track progress.", category: "Action" },
            { term: "I analyzed...", meaning: "Saya menganalisis...", example: "I analyzed the data and identified three key bottlenecks.", category: "Action" },
            { term: "I coordinated with...", meaning: "Saya berkoordinasi dengan...", example: "I coordinated with the marketing team to align our messaging.", category: "Action" },
            { term: "I presented to...", meaning: "Saya mempresentasikan ke...", example: "I presented the proposal to senior management and secured approval.", category: "Action" },
            { term: "As a result...", meaning: "Sebagai hasilnya...", example: "As a result, we exceeded our target by 35%.", category: "Result" },
            { term: "This led to...", meaning: "Ini mengarah ke...", example: "This led to a 25% increase in customer satisfaction.", category: "Result" },
            { term: "I learned that...", meaning: "Saya belajar bahwa...", example: "I learned that proactive communication prevents 80% of conflicts.", category: "Result" },
            { term: "The outcome was...", meaning: "Hasilnya adalah...", example: "The outcome was recognized with the Employee of the Month award.", category: "Result" }
        ],
        teacherNote: "Minta murid pilih 4-5 frasa favorite dan praktikkan pakai pengalaman mereka sendiri. Koreksi pronunciation juga ya."
    },
    {
        type: 'comparison',
        title: "Weak Verbs vs Strong Verbs",
        subtitle: "Upgrade Kata Kerja Kamu!",
        comparison: [
            {
                wrong: "I helped the team finish the project.",
                right: "I spearheaded the project completion by reallocating resources and establishing daily stand-ups."
            },
            {
                wrong: "I talked to the client about the problem.",
                right: "I negotiated with the client, presented three solutions, and secured a 6-month contract extension."
            },
            {
                wrong: "I did some research.",
                right: "I conducted comprehensive market research analyzing 15 competitors and identified a $2M opportunity."
            },
            {
                wrong: "I fixed the error.",
                right: "I diagnosed the root cause, implemented a debugging protocol, and reduced system errors by 90%."
            },
            {
                wrong: "I worked on the presentation.",
                right: "I crafted a compelling 20-slide deck that convinced the board to approve the $500K budget."
            }
        ],
        teacherNote: "Weak verbs = helped, did, worked, talked, made. Strong verbs = spearheaded, negotiated, conducted, diagnosed, crafted, orchestrated, optimized."
    },
    {
        type: 'int-scenario',
        title: "Contoh STAR: Conflict Resolution",
        subtitle: "Pertanyaan: 'Tell me about a time you had a conflict with a coworker'",
        interviewScenario: {
            question: "Tell me about a time you had a conflict with a coworker.",
            starAnswer: {
                situation: "SITUATION: At my previous company, a senior colleague and I disagreed on the approach for a client presentation. He wanted a technical deep-dive; I believed we needed high-level business impact. The tension was affecting our team's morale.",
                task: "TASK: I needed to resolve this conflict professionally while ensuring we delivered a compelling presentation that met the client's needs.",
                action: "ACTION: I requested a private coffee chat. I started by acknowledging his expertise and asked for his perspective first. Then I shared my reasoning with data — showing that 70% of C-level executives prefer business outcomes over technical details. I proposed we combine both approaches: he covers the technical foundation, I handle the ROI section. We rehearsed together twice.",
                result: "RESULT: The client approved our proposal within 24 hours. My colleague later told me it was the best presentation he'd been part of. We went on to collaborate on 3 more successful projects, and I learned that conflicts often hide opportunities for better solutions."
            },
            tip: "Notice the specific details: 70%, 24 hours, 3 projects. Always quantify when possible!"
        },
        teacherNote: "Highlight: ini jawaban 60-90 detik. Action-nya panjang dan detail. Result-nya ada numbers dan learning."
    },
    {
        type: 'int-scenario',
        title: "Contoh STAR: Handling Failure",
        subtitle: "Pertanyaan: 'Tell me about a time you failed'",
        interviewScenario: {
            question: "Tell me about a time you failed.",
            starAnswer: {
                situation: "SITUATION: In my first year at Bukalapak, I was tasked with launching a new feature. I was confident and didn't conduct enough user testing before the rollout.",
                task: "TASK: I needed to own the mistake and fix it quickly without losing user trust.",
                action: "ACTION: I immediately convened a post-mortem with my team. I took full responsibility in the meeting with stakeholders — no excuses. I personally interviewed 50 users to understand the pain points. Then I worked overtime for two weeks to redesign the flow based on their feedback. I also implemented a beta testing protocol for all future launches.",
                result: "RESULT: The redesigned feature achieved 85% user satisfaction — 20% higher than our target. The beta protocol I created is now company-wide standard. My manager praised my accountability, and I was promoted to lead the next major product launch. Most importantly, I learned that humility and user empathy are non-negotiable."
            },
            tip: "Showing failure + learning + growth = actually IMPRESSIVE. Don't be afraid to share real failures!"
        },
        teacherNote: "Ini contoh bagus untuk 'failure' question. Note: nggak defensive, focus on action dan learning. Murid sering takut ngomong failure, padahal ini opportunity show growth."
    },
    {
        type: 'int-scenario',
        title: "Contoh STAR: Leadership/Motivation",
        subtitle: "Pertanyaan: 'Tell me about a time you led without authority'",
        interviewScenario: {
            question: "Tell me about a time you led without formal authority.",
            starAnswer: {
                situation: "SITUATION: At Shopee, I was the most junior member of a 6-person team assigned to migrate our database. The project was 2 weeks behind schedule, but no one was stepping up to coordinate.",
                task: "TASK: I saw we needed direction, so I took initiative to create structure without being asked — or having the official title to do so.",
                action: "ACTION: I created a simple project tracker and proposed a 15-minute daily sync. I volunteered to own the documentation and set up automated reminders. I also identified quick wins to build momentum — we cleared the backlog of 200 pending entries in 3 days. I made sure to credit everyone's contributions publicly.",
                result: "RESULT: We completed the migration 5 days ahead of the revised deadline. The project manager specifically thanked me for 'unofficially leading' the team. I was formally promoted to project coordinator 2 months later. This experience taught me that leadership is about action, not titles."
            },
            tip: "Leading without authority shows initiative — highly valued in startup and tech environments!"
        },
        teacherNote: "Contoh ini untuk fresh graduates atau junior yang belum punya title 'lead'. Tunjukkan leadership bisa dari mana aja."
    },
    {
        type: 'concept',
        title: "Common STAR Mistakes",
        subtitle: "HINDARI INI!",
        content: [
            '❌ Situation terlalu panjang — HRD nggak perlu sejarah perusahaan dari 1998',
            '❌ Task tidak jelas — HRD bingung: sebenarnya kamu ngapain?',
            '❌ Action pake "we" terus — HRD nggak bisa bedain YOUR contribution',
            '❌ Action kurang detail — "I worked hard" = vague, useless',
            '❌ Result nggak ada numbers — "It went well" = evidence lemah',
            '❌ Result nggak ada learning — untuk failure questions, growth is key',
            '❌ Jawaban terlalu lama — target 60-90 detik, maksimal 2 menit'
        ],
        teacherNote: "Minta murid ceklist: pernah ngelakuin yang mana? Ini self-awareness penting."
    },

    // ==================== PHASE 4: SIMULATION/WRAP-UP ====================
    {
        type: 'int-mock',
        title: "Mock Interview: STAR Practice",
        subtitle: "Persiapkan Jawaban STAR-mu",
        mockInterview: {
            jobTitle: "Marketing Manager",
            company: "Tokopedia",
            questions: [
                "Tell me about a time you had to meet a tight deadline.",
                "Describe a situation where you had to persuade someone to see things your way.",
                "Tell me about a time you made a mistake at work. How did you handle it?",
                "Give me an example of a time you had to learn something quickly.",
                "Tell me about a time you went above and beyond for a customer or client."
            ],
            context: "Kamu baru lulus dari Binus, punya 2 tahun pengalaman di agency digital. Ini interview untuk posisi Marketing Manager di Tokopedia. Siapkan 2-3 stories yang bisa dipakai untuk multiple questions."
        },
        teacherNote: "Berikan murid 3 menit untuk pilih 1 pertanyaan dan outline STAR answer-nya. Lalu praktik bareng."
    },
    {
        type: 'simulation',
        title: "STAR Challenge: Live Simulation",
        subtitle: "90-Detik STAR Answer",
        simulation: {
            role: "Kandidat untuk posisi Product Manager di Gojek",
            scenario: "HRD akan tanya behavioral question. Kamu harus jawab dengan struktur STAR lengkap dalam waktu 60-90 detik. HRD akan kasih feedback.",
            goal: "Deliver a compelling STAR answer dengan: clear situation, specific task, detailed action (pakai 'I'), dan quantified result",
            timeLimit: 90
        },
        teacherNote: "Ini simulation lengkap. Kamu jadi HRD, kasih pertanyaan random dari list. Hitung waktu 90 detik. Beri feedback struktural: S-T-A-R balance-nya gimana?"
    },
    {
        type: 'concept',
        title: "Building Your Story Bank",
        subtitle: "SIAPKAN SEBELUM INTERVIEW",
        content: [
            '📝 List 5-7 pengalaman kerja/organisasi yang paling impactful',
            '🎯 Setiap story harus bisa dipakai untuk 2-3 jenis pertanyaan',
            '🔥 Cover these categories: Leadership, Teamwork, Problem-solving, Failure/Learning, Conflict, Achievement',
            '✍️ Tulis outline STAR untuk masing-masing — jangan hafal script!',
            '🎤 Practice out loud — 3x sampai natural',
            '📊 Always prepare numbers: percentages, amounts, time saved'
        ],
        teacherNote: "Ini homework strategis. Suruh murid mulai list 5-7 stories dari pengalaman mereka. Nggak perlu lengkap hari ini, tapi mulai list."
    },
    {
        type: 'recap',
        title: "Rangkuman: The STAR Method",
        subtitle: "Cheatsheet untuk Interview-mu",
        recap: [
            { context: "Structure", sayThis: "SITUATION → TASK → ACTION → RESULT", dontSayThis: "Ngomong ngalor-ngidul tanpa struktur" },
            { context: "Situation (10-15%)", sayThis: "Context singkat: where, when, what", dontSayThis: "Sejarah panjang lebar perusahaan" },
            { context: "Task (10%)", sayThis: "Your specific responsibility", dontSayThis: "'Kita harus...' (unclear who did what)" },
            { context: "Action (60-70%)", sayThis: "'I initiated... I analyzed... I presented...'", dontSayThis: "'We did... We made...' (pasif)" },
            { context: "Result (15-20%)", sayThis: "'Increased by 40%... Saved $50K... 3 days early'", dontSayThis: "'It went well... Everyone happy...' (vague)" },
            { context: "Time", sayThis: "60-90 detik, padat dan powerful", dontSayThis: "3 menit curhat tanpa arah" }
        ]
    },
    {
        type: 'mission',
        title: "Your Mission: Build 3 STAR Stories",
        subtitle: "Homework Sebelum Session Berikutnya",
        mission: [
            "📝 List 5 pengalaman kerja/organisasi/project yang paling bangga kamu lakukan",
            "⭐ Pilih 3 yang paling versatile (bisa dipakai untuk berbagai jenis pertanyaan)",
            "✍️ Tulis outline STAR lengkap untuk masing-masing — pakai template dari slide",
            "🔢 Pastikan ada minimal 1 number/percentage di setiap Result",
            "🎤 Practice out loud — rekam di HP, dengar ulang, perbaiki",
            "📧 Kirim outline ke tutor untuk feedback sebelum session berikutnya"
        ],
        teacherNote: "Ini PR konkret dan actionable. Beri deadline: sebelum session 3, kirim 3 STAR outlines. Ini akan dipakai untuk mock interview di session berikutnya."
    },
    {
        type: 'concept',
        title: "Final Tips: The STAR Mindset",
        subtitle: "BEYOND THE FORMULA",
        content: [
            '💡 STAR bukan template kaku — itu storytelling framework',
            '🎯 HRD ingin lihat: critical thinking, problem-solving, self-awareness',
            '🔥 Action adalah jantung jawaban — 60-70% waktu di sini!',
            '📊 Numbers matter — "improved sales" vs "improved sales by 35%" = beda dunia',
            '🌟 Failure stories yang bagus > Success stories yang mediocre',
            '⏱️ 60-90 detik adalah sweet spot — practice dengan timer!'
        ],
        teacherNote: "Closing motivation. Ingatkan: STAR adalah skill yang bisa dipelajari. Dengan practice, murid akan jauh lebih confident di interview."
    },
    {
        type: 'title',
        title: "STAR Method: MASTERED",
        subtitle: "You're Now Ready to Answer Any Behavioral Question 🌟",
        teacherNote: "Session selesai. Beri apresiasi, ingatkan untuk kirim homework, dan tease: 'Next session kita akan practice mock interview pake STAR stories kalian!'"
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Dalam struktur STAR, berapa persen waktu yang seharusnya dihabiskan di bagian ACTION?",
        options: [
            "10-15%",
            "20-30%",
            "40-50%",
            "60-70%"
        ],
        correctIndex: 3,
        explanation: "Bagian ACTION adalah yang paling penting dan seharusnya memakan waktu 60-70% dari jawaban kamu. Di sinilah kamu mendetailkan kontribusi spesifik yang kamu lakukan."
    },
    {
        question: "Manakah yang merupakan kesalahan umum dalam menggunakan STAR method?",
        options: [
            "Menggunakan 'I' untuk menjelaskan kontribusi pribadi",
            "Menceritakan situasi terlalu panjang dan detail",
            "Memberikan hasil yang terukur dengan angka",
            "Menjelaskan task dengan spesifik"
        ],
        correctIndex: 1,
        explanation: "Situasi (Situation) seharusnya singkat (10-15% waktu). Kesalahan umum adalah menceritakan sejarah panjang lebar yang membuat HRD bosan sebelum sampai ke bagian Action."
    },
    {
        question: "Kalimat mana yang lebih baik untuk bagian ACTION dalam STAR?",
        options: [
            "We worked together to finish the project",
            "We decided to change our strategy",
            "I analyzed the data and presented three solutions to the board",
            "The team helped me complete the task"
        ],
        correctIndex: 2,
        explanation: "Bagian ACTION harus menggunakan 'I' bukan 'we' dan spesifik tentang apa yang KAMU lakukan. 'I analyzed the data and presented three solutions' menunjukkan kontribusi pribadi yang jelas."
    },
    {
        question: "Berapa lama idealnya sebuah jawaban STAR?",
        options: [
            "30-45 detik",
            "60-90 detik",
            "2-3 menit",
            "5 menit dengan detail lengkap"
        ],
        correctIndex: 1,
        explanation: "60-90 detik adalah sweet spot untuk jawaban STAR. Cukup panjang untuk memberikan detail, cukup singkat untuk tetap engaging dan fokus."
    },
    {
        question: "Apa yang seharusnya ada di bagian RESULT dari jawaban STAR?",
        options: [
            "Penjelasan panjang tentang proses yang dilalui",
            "Curhat tentang kesulitan yang dihadapi",
            "Outcome terukur: angka, persentase, atau pencapaian konkret",
            "Rincian tentang rekan kerja yang membantu"
        ],
        correctIndex: 2,
        explanation: "Bagian RESULT harus berisi outcome yang terukur — numbers, percentages, atau pencapaian konkret. Contoh: 'increased sales by 35%', 'saved 20 hours per week', 'awarded Employee of the Month'."
    }
];
