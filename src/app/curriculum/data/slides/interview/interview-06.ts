import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ========== PHASE 1: HOOK ==========
    {
        type: 'title',
        title: "Full Mock Interview",
        subtitle: "Session 6: The Final Challenge — Integrasi Semua Skill Interview",
        teacherNote: "Ini adalah sesi terakhir dari Core Interview Skills. Murid akan melakukan full mock interview yang menggabungkan semua yang dipelajari dari Session 1-5. Pastikan mereka merasa siap dan percaya diri."
    },
    {
        type: 'concept',
        title: "Apa yang Menanti Hari Ini?",
        subtitle: "THE FULL MOCK EXPERIENCE",
        content: [
            "🎯 3 Mock Interview Scenarios: Marketing, Tech, dan Finance",
            "📋 Pre-Interview Checklist: Persiapan matang sebelum D-Day",
            "🔄 Review Cepat: Elevator Pitch + STAR + Strengths/Weaknesses + Body Language + Negotiation",
            "⚡ Final Challenge: Simulasi interview lengkap dengan debrief",
            "🚀 Next Steps: Rencana latihan mandiri setelah sesi ini"
        ],
        teacherNote: "Jelaskan roadmap hari ini. Tekankan bahwa ini adalah 'graduation' dari core skills — setelah ini, mereka punya fondasi kuat untuk interview apapun."
    },
    {
        type: 'pres-mindset',
        title: "The 'I'm Ready' Mindset",
        subtitle: "Shift dari 'Saya takut gagal' ke 'Saya siap perform'",
        mindset: {
            before: "Saya masih belum sempurna. Saya pasti akan grogi dan salah.",
            after: "Saya sudah punya toolbox lengkap. Setiap 'salah' adalah feedback, bukan kegagalan.",
            bridgeText: "Confidence datang dari persiapan, bukan dari kesempurnaan."
        },
        teacherNote: "Ingatkan murid: interview adalah conversation, bukan interrogation. Mereka juga menilai apakah perusahaan ini cocok untuk mereka."
    },
    {
        type: 'pres-checklist',
        title: "The Pre-Interview Checklist",
        subtitle: "Lakukan ini 24 jam sebelum interview",
        checklist: {
            title: "24-Hour Preparation Checklist",
            items: [
                "✅ Research perusahaan: Mission, values, recent news, culture",
                "✅ Review job description: Highlight 3 key requirements yang match dengan skillmu",
                "✅ Siapkan 3 STAR stories: Satu untuk leadership, satu problem-solving, satu teamwork",
                "✅ Latihan elevator pitch: Rekam diri sendiri, pastikan 60-90 detik",
                "✅ Siapkan 5 pertanyaan untuk interviewer: Jangan tanya yang bisa Googling!",
                "✅ Cek teknis: Test kamera, microphone, internet (untuk virtual)",
                "✅ Outfit ready: Professional, comfortable, sudah dicoba",
                "✅ Tidur cukup: 7-8 jam — otak butuh istirahat untuk perform optimal"
            ]
        },
        teacherNote: "Diskusikan tiap poin. Tanya murid: 'Mana yang paling sering kamu skip?' Biasanya mereka skip research atau tidak siap pertanyaan untuk interviewer."
    },
    {
        type: 'pres-checklist',
        title: "The D-Day Checklist",
        subtitle: "Lakukan ini 1 jam sebelum interview",
        checklist: {
            title: "1-Hour Countdown Checklist",
            items: [
                "✅ Power pose 2 menit: Dada terbuka, tangan di pinggang — boost confidence hormone",
                "✅ Box breathing: 4 detik in — 4 detik tahan — 4 detik out (3x)",
                "✅ Review cheat sheet: 3 key points yang ingin disampaikan",
                "✅ Cek penampilan: Rambut, baju, makeup (kamera test untuk virtual)",
                "✅ Siapkan notes: Portfolio, CV, pertanyaan untuk interviewer",
                "✅ Minum air: Hidrasikan — tapi jangan terlalu banyak (avoid bathroom break)",
                "✅ Posisi setup: Lighting dari depan, background bersih, noise minimal",
                "✅ Positive self-talk: 'Saya sudah prepare. Saya punya value. Saya siap.'"
            ]
        },
        teacherNote: "Ini adalah 'pre-game routine'. Seperti atlet sebelum pertandingan. Ajak murid untuk membuat ritual sendiri yang bikin mereka merasa confident."
    },

    // ========== PHASE 2: REVIEW ==========
    {
        type: 'title',
        title: "Core Skills Review",
        subtitle: "Quick recap 5 skill utama yang sudah dipelajari",
        teacherNote: "Review singkat semua skill yang sudah dipelajari dari sesi 1-5."
    },
    {
        type: 'recap',
        title: "Skill 1: Elevator Pitch",
        subtitle: "Present → Past → Future Formula",
        recap: [
            { context: "Present", sayThis: "I'm a [role] with [X years] experience in [skill]...", dontSayThis: "My name is... I am from... My hobby is..." },
            { context: "Past", sayThis: "Over the past [X years], I've achieved [specific result]...", dontSayThis: "I studied at university and then I worked..." },
            { context: "Future", sayThis: "What excites me about this role is [specific alignment]...", dontSayThis: "I want good salary and big company..." },
            { context: "Duration", sayThis: "Keep it 60-90 seconds with confident tone", dontSayThis: "Curhat panjang lebih dari 2 menit..." }
        ],
        teacherNote: "Minta murid praktikkan elevator pitch mereka dalam 30 detik. Quick refresher sebelum lanjut ke skill berikutnya."
    },
    {
        type: 'recap',
        title: "Skill 2: STAR Method",
        subtitle: "Situation → Task → Action → Result",
        recap: [
            { context: "Situation", sayThis: "Set the scene: When/where did this happen?", dontSayThis: "Cerita panjang lebar tentang background..." },
            { context: "Task", sayThis: "What was YOUR specific responsibility?", dontSayThis: "Tim kami harus... (fokus pada tim, bukan kamu)" },
            { context: "Action", sayThis: "What did YOU do? Use 'I', not 'we'", dontSayThis: "Kita melakukan... (vague, no ownership)" },
            { context: "Result", sayThis: "Quantify: 'increased by X%', 'reduced by Y hours'", dontSayThis: "It was good... (no specific outcome)" }
        ],
        teacherNote: "STAR adalah backbone untuk behavioral questions. Ingatkan murid untuk selalu siapkan 3-4 stories dengan metrics yang konkret."
    },
    {
        type: 'recap',
        title: "Skill 3: Strengths & Weaknesses",
        subtitle: "Positioning diri dengan otentik tapi strategis",
        recap: [
            { context: "Strength", sayThis: "Pick strength yang RELEVAN dengan job + kasih bukti konkret", dontSayThis: "Saya pekerja keras... (too generic)" },
            { context: "Weakness", sayThis: "Pilih 'recoverable weakness' + tunjukkan improvement efforts", dontSayThis: "Saya perfectionist... (cliché)" },
            { context: "Formula", sayThis: "Weakness + Context + Action to Improve + Progress", dontSayThis: "Saya tidak punya kelemahan... (unrealistic)" },
            { context: "Delivery", sayThis: "Confident but humble — jangan defensive", dontSayThis: "Banyak bacot soal kelemahan, membuat diri terlihat buruk" }
        ],
        teacherNote: "Bahas contoh weakness yang baik: 'I used to struggle with public speaking, so I joined Toastmasters and now I'm comfortable presenting to 50+ people.'"
    },
    {
        type: 'recap',
        title: "Skill 4: Body Language",
        subtitle: "Non-verbal cues yang membangun kredibilitas",
        recap: [
            { context: "Posture", sayThis: "Duduk tegak, bahu terbuka — sinyal confidence", dontSayThis: "Nyender, bersila, atau posisi tertutup..." },
            { context: "Eye Contact", sayThis: "70% eye contact — looking at camera untuk virtual", dontSayThis: "Lihat layar/notes terus, jarang kontak mata..." },
            { context: "Hand Gestures", sayThis: "Open palms, occasional gestures untuk emphasis", dontSayThis: "Tangan di bawah meja atau crossed arms..." },
            { context: "Facial Expression", sayThis: "Senyum natural, ekspresi yang engage dengan pembicaraan", dontSayThis: "Wajah datar/kaku sepanjang interview..." }
        ],
        teacherNote: "Ingatkan: 55% komunikasi adalah non-verbal. Body language bisa memperkuat atau merusak apa yang kita ucapkan."
    },
    {
        type: 'recap',
        title: "Skill 5: Salary & Questions",
        subtitle: "Closing strong dengan negotiation skills",
        recap: [
            { context: "Salary Research", sayThis: "Know your market value: Glassdoor, Jobstreet, LinkedIn Salary", dontSayThis: "Tebak-tebakan atau terlalu rendah..." },
            { context: "Salary Script", sayThis: "'Based on my research, the range for this role is X-Y. Given my experience in [skill], I'm targeting [number].'", dontSayThis: "Berapa yang Anda berikan? (pasrah)" },
            { context: "Questions to Ask", sayThis: "Ask about team culture, success metrics, growth opportunities", dontSayThis: "Tanya gaji/benefit terlalu dini..." },
            { context: "Final Impression", sayThis: "Close dengan enthusiasm: 'I'm excited about this opportunity!'", dontSayThis: "Yaudah gitu aja, terima kasih..." }
        ],
        teacherNote: "Negosiasi bukan tentang 'menang', tapi win-win. Murid harus tau value mereka dan communicate dengan confidence."
    },
    {
        type: 'int-vocab',
        title: "Key Phrases Bank",
        subtitle: "Frasa ampuh untuk tiap fase interview",
        interviewVocab: [
            { term: "I'd like to highlight...", meaning: "Saya ingin menyoroti...", example: "I'd like to highlight my experience in project management.", category: "Opening" },
            { term: "To give you a concrete example...", meaning: "Untuk memberi contoh konkret...", example: "To give you a concrete example, let me share a project I led last year.", category: "STAR Setup" },
            { term: "The key takeaway is...", meaning: "Poin pentingnya adalah...", example: "The key takeaway is that we increased efficiency by 30%.", category: "Closing STAR" },
            { term: "That's a great question...", meaning: "Pertanyaan yang bagus...", example: "That's a great question. Let me think about the best example.", category: "Buy Time" },
            { term: "I appreciate the opportunity to...", meaning: "Saya menghargai kesempatan untuk...", example: "I appreciate the opportunity to discuss this role with you.", category: "Closing" },
            { term: "What does success look like in this role?", meaning: "Seperti apa sukses di posisi ini?", example: "What does success look like in this role after 6 months?", category: "Question" }
        ],
        teacherNote: "Ini adalah 'arsenal' frasa yang bisa dipakai kapan saja. Minta murid pilih 3 favorit mereka dan praktikkan."
    },

    // ========== PHASE 3: THE FULL MOCK ==========
    {
        type: 'title',
        title: "Mock Interview Scenarios",
        subtitle: "Latihan dengan 3 industri berbeda",
        teacherNote: "Tiga skenario mock interview untuk berbagai industri."
    },
    {
        type: 'int-mock',
        title: "Mock Scenario #1: Marketing",
        subtitle: "Digital Marketing Specialist di E-commerce Company",
        mockInterview: {
            jobTitle: "Digital Marketing Specialist",
            company: "GlowBeauty (E-commerce Skincare Brand)",
            context: "Kamu apply untuk posisi Digital Marketing Specialist di GlowBeauty, brand skincare lokal yang baru dapat funding Series A. Mereka cari someone yang bisa handle social media strategy dan influencer partnerships.",
            questions: [
                "1. Tell me about yourself and why you're interested in this role.",
                "2. Describe a successful campaign you've managed. What was your strategy?",
                "3. Tell me about a time when a campaign underperformed. How did you handle it?",
                "4. How do you stay updated with the latest digital marketing trends?",
                "5. What are your salary expectations for this role?",
                "6. Do you have any questions for us?"
            ]
        },
        teacherNote: "Ini adalah mock interview lengkap. Murid harus menjawab semua pertanyaan menggunakan skill yang sudah dipelajari. Berikan feedback setelah tiap jawaban."
    },
    {
        type: 'int-mock',
        title: "Mock Scenario #2: Tech",
        subtitle: "Software Engineer di Startup Fintech",
        mockInterview: {
            jobTitle: "Junior Software Engineer",
            company: "PayFast (Fintech Payment Gateway)",
            context: "Kamu fresh graduate dari bootcamp/CS degree, apply untuk posisi Junior Software Engineer. PayFast sedang scale up tim engineering mereka untuk build new payment features.",
            questions: [
                "1. Walk me through your background and what got you into software engineering.",
                "2. Tell me about a challenging bug you had to solve. What was your approach?",
                "3. Describe a situation where you had to learn a new technology quickly.",
                "4. How do you handle disagreements with team members about technical decisions?",
                "5. Where do you see yourself in 3-5 years?",
                "6. Why should we hire you over other candidates?"
            ]
        },
        teacherNote: "Fokus pada technical problem-solving dan growth mindset. Untuk tech interviews, jelaskan thinking process dengan jelas, bukan cuma jawaban final."
    },
    {
        type: 'int-mock',
        title: "Mock Scenario #3: Finance",
        subtitle: "Financial Analyst di Multinational Bank",
        mockInterview: {
            jobTitle: "Financial Analyst",
            company: "GlobalBank Indonesia (Investment Banking Division)",
            context: "Kamu apply untuk posisi Financial Analyst di divisi Investment Banking. Mereka cari someone dengan strong analytical skills dan attention to detail untuk financial modeling dan client presentations.",
            questions: [
                "1. Tell me about yourself and your experience in financial analysis.",
                "2. Describe a complex financial model you built. What was the outcome?",
                "3. Tell me about a time when you identified a significant error in data. What did you do?",
                "4. How do you prioritize multiple deadlines with competing priorities?",
                "5. What are your strengths and weaknesses as an analyst?",
                "6. What questions do you have about the team or the role?"
            ]
        },
        teacherNote: "Finance interviews menghargai precision dan analytical thinking. Perhatikan bagaimana murid structure jawaban mereka dan gunakan data/numbers."
    },
    {
        type: 'int-scenario',
        title: "Killer Question: 'Why Should We Hire You?'",
        subtitle: "Jawaban yang membedakan kamu dari kandidat lain",
        interviewScenario: {
            question: "Why should we hire you over other candidates?",
            starAnswer: {
                situation: "Pahami bahwa pertanyaan ini bukan soal arrogance, tapi soal value proposition yang jelas.",
                task: "Tugasmu adalah connect 3 hal: skill yang mereka butuhkan + bukti konkret + cultural fit.",
                action: "Jawab dengan: 'Based on what you've shared, you're looking for someone who can [skill 1], [skill 2], and [skill 3]. In my previous role, I [specific achievement with metrics]. Additionally, [cultural fit point].'",
                result: "Ini membuktikan kamu dengar dengan baik, punya track record, dan genuinely excited tentang opportunity ini."
            },
            tip: "Jangan bilang 'Karena saya kerja keras' — semua orang bilang gitu. Gunakan specifics dari job description."
        },
        teacherNote: "Ini adalah 'closing argument' murid. Ajak mereka latihan menjawab dengan confidence tapi tidak terdengar arrogant."
    },
    {
        type: 'int-scenario',
        title: "Killer Question: 'Where Do You See Yourself in 5 Years?'",
        subtitle: "Menunjukkan ambition tanpa mengancam interviewer",
        interviewScenario: {
            question: "Where do you see yourself in 5 years?",
            starAnswer: {
                situation: "Interviewer ingin tau: Apakah kamu ambisius? Apakah kamu akan stay? Apakah goals-mu aligned dengan company growth?",
                task: "Tunjukkan growth mindset yang aligned dengan career path di perusahaan tersebut.",
                action: "Jawab dengan: 'In the next few years, I want to deepen my expertise in [specific skill]. I see this role as a great foundation because [specific reason]. Eventually, I'd love to grow into [realistic next step] where I can [broader impact].'",
                result: "Ini menunjukkan kamu punya rencana, tapi juga flexible dan committed untuk kontribusi jangka panjang."
            },
            tip: "Hindari jawaban yang terlalu specific (e.g., 'Saya mau jadi CEO') atau terlalu vague (e.g., 'Saya belum mikir that far ahead')."
        },
        teacherNote: "Balancing act antara menunjukkan ambition dan tidak mengancam interviewer. Latihan membuat jawaban terdengar natural, bukan scripted."
    },
    {
        type: 'micro-drill',
        title: "Speed Round Practice",
        subtitle: "10 pertanyaan cepat, jawaban singkat & padat",
        mission: [
            "1. 'What's your greatest strength?' — Jawab dalam 30 detik dengan contoh.",
            "2. 'What's your greatest weakness?' — Jawab dalam 30 detik dengan improvement plan.",
            "3. 'Why do you want to leave your current job?' — Jawab positive, jangan complain.",
            "4. 'Tell me about a time you failed.' — Gunakan STAR, fokus pada lessons learned.",
            "5. 'How do you handle stress?' — Beri contoh konkret situasi stressful.",
            "6. 'What motivates you?' — Connect dengan role yang diapply.",
            "7. 'Describe your work style.' — Highlight collaboration + independence.",
            "8. 'How do you handle criticism?' — Show growth mindset.",
            "9. 'What do you know about our company?' — Tunjukkan research depth.",
            "10. 'Do you have any questions?' — ALWAYS say yes, ask 2-3 questions."
        ],
        teacherNote: "Speed drill untuk melatih spontaneity. Jangan biarkan murid overthink — latihan untuk respond dengan natural tapi structured."
    },

    // ========== PHASE 4: FINAL CHALLENGE & NEXT STEPS ==========
    {
        type: 'title',
        title: "Final Challenge & Next Steps",
        subtitle: "Debrief, self-evaluation, dan rencana latihan mandiri",
        teacherNote: "Fase akhir: tantangan final dan persiapan untuk interview sesungguhnya."
    },
    {
        type: 'simulation',
        title: "Final Simulation: The 20-Minute Interview",
        subtitle: "Full mock interview dengan semua elemen",
        simulation: {
            role: "Candidate",
            scenario: "Kamu akan menjalani mock interview lengkap 20 menit. Tutor akan jadi interviewer dan menggabungkan semua tipe pertanyaan: opening, behavioral (STAR), strengths/weaknesses, technical, dan closing. Gunakan semua skill yang sudah dipelajari: elevator pitch, STAR method, body language awareness, dan negotiation phrases.",
            goal: "Dapatkan passing score di self-evaluation rubric (minimal 3/5 di semua kategori)",
            timeLimit: 1200
        },
        teacherNote: "Ini adalah 'final exam' sesi ini. Berikan komprehensif feedback setelah simulasi selesai. Fokus pada 1 strength dan 2 area of improvement."
    },
    {
        type: 'concept',
        title: "Self-Evaluation Rubric",
        subtitle: "Nilai diri sendiri setelah setiap mock interview",
        content: [
            "📊 CONTENT (1-5): Apakah jawaban relevan, structured, dan ada bukti konkret?",
            "🗣️ DELIVERY (1-5): Apakah pace, tone, dan clarity sudah oke?",
            "👁️ BODY LANGUAGE (1-5): Apakah eye contact, posture, dan gesture mendukung?",
            "⚡ CONFIDENCE (1-5): Apakah terdengar yakin tanpa arrogant?",
            "🎯 FIT (1-5): Apakah jawaban menunjukkan alignment dengan role/company?",
            "",
            "Total Score: ___/25",
            "Target: Minimal 18/25 (rata-rata 3.6 per kategori)"
        ],
        teacherNote: "Ajarkan murid untuk self-evaluate dengan objektif. Ini akan membantu mereka track progress dan identify weak spots untuk latihan mandiri."
    },
    {
        type: 'pres-checklist',
        title: "Post-Interview Debrief Guide",
        subtitle: "Analisis performa untuk improvement berkelanjutan",
        checklist: {
            title: "Immediately After Interview (Within 1 Hour)",
            items: [
                "📝 Catat pertanyaan yang diajukan: Apa yang unexpected?",
                "✅ Nilai setiap jawabanmu: Mana yang strong? Mana yang bisa lebih baik?",
                "📧 Kirim thank-you email: Within 24 hours, personalized untuk tiap interviewer",
                "🔄 Review self-evaluation rubric: Isi dengan jujur",
                "🎯 Identify 2 improvement areas: Fokus untuk latihan berikutnya",
                "📚 Research jawaban yang kurang oke: Siapkan untuk interview berikutnya",
                "⏳ Follow-up timeline: Kapan harus follow up kalau belum ada kabar?"
            ]
        },
        teacherNote: "Debrief adalah bagian penting dari learning process. Tanpa refleksi, murid akan mengulang kesalahan yang sama."
    },
    {
        type: 'recap',
        title: "Core Interview Skills — Final Recap",
        subtitle: "Everything you need to remember",
        recap: [
            { context: "Elevator Pitch", sayThis: "Present-Past-Future, 60-90 detik, connect ke company", dontSayThis: "Curhat panjang lebar tentang hidupmu" },
            { context: "STAR Method", sayThis: "Specific story dengan metrics, fokus pada 'I' bukan 'we'", dontSayThis: "Vague, no numbers, blame others" },
            { context: "Strengths/Weaknesses", sayThis: "Relevant strength + recoverable weakness dengan improvement", dontSayThis: "Generic clichés atau claim 'no weakness'" },
            { context: "Body Language", sayThis: "Eye contact 70%, posture terbuka, senyum natural", dontSayThis: "Closed posture, no eye contact, fidgeting" },
            { context: "Negotiation", sayThis: "Research market value, ask smart questions, close dengan enthusiasm", dontSayThis: "Underprice diri atau terlalu aggressive" }
        ],
        teacherNote: "Rangkuman akhir. Ini adalah 'cheat sheet' yang bisa mereka bawa ke interview. Highlight bahwa mereka sekarang punya complete toolkit."
    },
    {
        type: 'mission',
        title: "Your Mission: Continued Practice",
        subtitle: "Latihan interview adalah marathon, bukan sprint",
        mission: [
            "🎥 Rekam 3 elevator pitch versi berbeda (untuk industri berbeda), pilih yang terbaik",
            "📚 Siapkan 5 STAR stories: Leadership, Problem-solving, Teamwork, Failure, Innovation",
            "🤝 Practice dengan partner: Teman, keluarga, atau komunitas job seeker",
            "🎯 Apply ke 5 jobs per minggu: Practice makes perfect, dan interview beneran adalah practice terbaik",
            "📖 Keep a 'Interview Journal': Catat pertanyaan, jawabanmu, dan feedback",
            "🔄 Review session ini: Ulangi mock interview scenario minimal 1x per minggu",
            "💪 Stay confident: Setiap 'no' adalah step closer to 'yes'. You're ready!"
        ],
        teacherNote: "Ending dengan encouragement dan concrete action items. Murid harus merasa empowered dan punya roadmap untuk continue improvement setelah sesi ini berakhir."
    },
    {
        type: 'pres-impact',
        title: "You're Interview-Ready!",
        subtitle: "Final words of encouragement",
        impact: {
            quote: "Success is where preparation and opportunity meet.",
            author: "Bobby Unser",
            accentColor: "#4F46E5"
        },
        teacherNote: "Celebrate completion of core interview skills. Ingatkan murid bahwa interview adalah skill yang bisa dipelajari, dan mereka sudah punya fondasi yang kuat. Selamatkan mereka!"
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Berapa durasi ideal untuk elevator pitch?",
        options: [
            "30-45 detik",
            "60-90 detik",
            "2-3 menit",
            "5 menit (untuk detail lengkap)"
        ],
        correctIndex: 1,
        explanation: "Elevator pitch yang ideal adalah 60-90 detik. Cukup lama untuk memberi overview yang meaningful, tapi cukup singkat untuk maintain attention."
    },
    {
        question: "Dalam STAR method, apa yang paling sering dilupakan kandidat?",
        options: [
            "Situation (lupa setup konteks)",
            "Task (fokus pada tim, bukan individu)",
            "Action (kurang spesifik tentang yang dilakukan)",
            "Result (tidak ada outcome yang terukur)"
        ],
        correctIndex: 3,
        explanation: "Kandidat sering lupa menutup dengan Result yang konkret dan terukur. 'The project was successful' tidak cukup — gunakan metrics seperti 'increased sales by 25%'."
    },
    {
        question: "Apa yang SALAH tentang body language saat interview virtual?",
        options: [
            "Menatap kamera saat berbicara (bukan layar)",
            "Duduk dengan postur terbuka dan bahu relax",
            "Melihat notes/catatan sepanjang waktu",
            "Menggunakan hand gestures yang natural"
        ],
        correctIndex: 2,
        explanation: "Melihat notes terus-menerus membuat eye contact terputus dan membuatmu terlihat tidak prepared. Siapkan outline singkat, tapi tetap engage dengan camera."
    },
    {
        question: "Bagaimana cara terbaik menjawab 'What's your greatest weakness?'?",
        options: [
            "Mengatakan 'Saya perfectionist' (cliché)",
            "Mengatakan 'Saya tidak punya kelemahan'",
            "Memilih 'recoverable weakness' + tunjukkan improvement efforts",
            "Menceritakan kelemahan yang fatal untuk role tersebut"
        ],
        correctIndex: 2,
        explanation: "Jawaban terbaik adalah honest weakness yang sedang diperbaiki dengan evidence of improvement. Contoh: 'I used to struggle with delegation, but I've been working on trusting my team more.'"
    },
    {
        question: "Kapan waktu yang tepat untuk negosiasi salary?",
        options: [
            "Di awal interview saat first impression",
            "Setelah mereka tunjukkan interest (biasanya di akhir atau follow-up interview)",
            "Di email application sebelum interview",
            "Tidak perlu negosiasi, terima saja apa yang ditawarkan"
        ],
        correctIndex: 1,
        explanation: "Negosiasi salary paling efektif dilakukan setelah interviewer menunjukkan strong interest dan kamu sudah demonstrate value-mu. Biasanya di akhir interview atau saat offer stage."
    }
];
