import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ===== PHASE 1: HOOK =====
    {
        type: 'title',
        title: "Salary, Benefits & Smart Questions",
        subtitle: "Negosiasi Gaji & Pertanyaan Cerdas yang Bikin HRD Respect",
        teacherNote: "Session 5 dari Core Interview Skills. Goal: Murid bisa negosiasi gaji dengan percaya diri dan tau pertanyaan apa yang harus ditanya ke perusahaan."
    },
    {
        type: 'concept',
        title: "The Money Taboo 😬",
        subtitle: "Kenapa Bahas Gaji Jadi Canggung?",
        content: [
            "Di Indonesia, bahas gaji = sering dianggap 'serakah' atau 'belum kerja sudah minta gaji'",
            "Padahal: Negosiasi gaji yang fair = PROFESSIONAL, bukan serakah",
            "70% fresh graduate Indonesia tidak nego gaji — padahal perusahaan EXPECT negosiasi",
            "Yang rugi: kamu! Gaji pertama = dasar kenaikan gaji selanjutnya 📈"
        ],
        teacherNote: "Ceritakan stigma ini. Banyak murid takut dianggap serakah kalau nego. Tekankan bahwa ini normal dan diharapkan di luar negeri/bagian perusahaan internasional."
    },
    {
        type: 'concept',
        title: "Why Negotiation Matters 💰",
        subtitle: "Dampak Jangka Panjang Gaji Pertama",
        content: [
            "Contoh: Fresh graduate di Jakarta — UMR Rp 5 juta vs Rp 8 juta",
            "Kenaikan tahunan 10%: Tahun 5 → Rp 8 juta jadi Rp 12.2 juta, Rp 5 juta jadi Rp 7.6 juta",
            "Selisih 5 tahun: **Rp 95 JUTA LEBIH BESAR** hanya dari gaji awal lebih tinggi",
            "Benefits lain: Asuransi kesehatan, WFH, bonus, development budget — semua bisa dinego!"
        ],
        teacherNote: "Hitung bareng murid. Buat mereka sadar dampak compound effect gaji awal. Ini powerful untuk motivasi."
    },

    // ===== PHASE 2: LOGIC =====
    {
        type: 'concept',
        title: "🔍 Phase 2: The Research Phase",
        subtitle: "Jangan Tebak — Data Dulu!",
        content: [
            "Sebelum interview: riset gaji untuk posisi dan level pengalamanmu",
            "Sumber Indonesia: Glassdoor, JobStreet Salary Report, Kitalulus, LinkedIn Salary",
            "Tips rahasia: Tanya ke karyawan lama di LinkedIn, gabung forum industri",
            "Catat: Range gaji, benefits standar, dan growth opportunity di industri tersebut"
        ],
        teacherNote: "Share praktik riset gaji. Contoh cara DM orang di LinkedIn: 'Hi, I'm researching salaries for X role. Would you mind sharing a rough range?'"
    },
    {
        type: 'formula',
        title: "The Salary Research Formula",
        subtitle: "Data yang Harus Kamu Kumpulkan",
        formula: "ROLE + LOCATION + EXPERIENCE + COMPANY SIZE",
        content: [
            "ROLE: Junior UX Designer ≠ Senior UX Designer (bisa 2-3x lipat)",
            "LOCATION: Jakarta/BDG/SBY punya UMR berbeda — adjus untuk living cost",
            "EXPERIENCE: Fresh grad vs 2 tahun vs 5 tahun — bandingkan apple to apple",
            "COMPANY SIZE: Startup (biasanya lebih rendah + equity) vs Korporasi (lebih tinggi + stabil)"
        ],
        teacherNote: "Beri contoh konkret. Misal: Junior Digital Marketing di startup Jakarta: Rp 5-7 juta. Di unicorn: Rp 8-12 juta. Di MNC: Rp 10-15 juta."
    },
    {
        type: 'concept',
        title: "The Anchoring Technique ⚓",
        subtitle: "Siapa yang Sebut Angka Dulu?",
        content: [
            "Anchoring = angka pertama yang disebut jadi 'patokan' negosiasi",
            "Idealnya: Kamu sebut duluan dengan angka TINGGI tapi REALISTIS",
            "Contoh: 'Berdasarkan riset saya, range untuk posisi ini adalah 10-12 juta'",
            "Jika mereka sebut duluan rendah: 'I was hoping for something closer to X based on my research'"
        ],
        teacherNote: "Jelaskan psikologi anchoring. Kalau HR sebut 6 juta duluan, susah naik ke 10 juta. Tapi kalau kamu sebut 12 juta, negosiasi akan di sekitar 10-11 juta."
    },
    {
        type: 'formula',
        title: "The Defer Strategy",
        subtitle: "Kalau Ditanya Terlalu Dini",
        formula: "DELAY + CONFIDENCE + MARKET REFERENCE",
        content: [
            "Jangan sebut angka di screening awal — kamu belum showcase value",
            "Script: 'I'm sure we can find something fair based on the market value'",
            "Atau: 'I'd like to learn more about the role first, but I'm looking for a competitive package'",
            "Fokus dulu: Tunjukkan kamu worth it — baru negosiasi!"
        ],
        teacherNote: "Latihan defer ini penting. Banyak HR tes kandidat dengan tanya gaji di awal. Jangan jebak! Tahan sampai final interview."
    },
    {
        type: 'concept',
        title: "Total Compensation Package 📦",
        subtitle: "Gaji Bukan Segalanya",
        content: [
            "Base salary: Gaji pokok yang masuk rekening setiap bulan",
            "THR & Bonus: Tahunan, kinerja, profit-sharing — tanyakan detailnya",
            "Benefits: BPJS Kesehatan/Ketenagakerjaan, asuransi tambahan, WFH policy",
            "Professional Development: Training budget, conference allowance, sertifikasi",
            "Long-term: ESOP (saham), career path, promotion timeline"
        ],
        teacherNote: "Ceritakan benefits krusial. Asuransi kesehatan kelas 1 bisa nilainya 5-10 juta/tahun. WFH 2x seminggu = penghematan waktu/transport."
    },
    {
        type: 'concept',
        title: "Questions YOU Should Ask 🤔",
        subtitle: "Interview Dua Arah — Evaluasi Mereka Juga!",
        content: [
            "Tanya ini menunjukkan kamu SERIUS dan STRATEGIS",
            "Team & Culture: 'Can you tell me about the team I'd be working with?'",
            "Growth: 'What does success look like in this role after 6 months?'",
            "Red flags: 'Why is this position open?' (Resignasi masal = warning)",
            "Next steps: 'What are the next steps in the hiring process?'"
        ],
        teacherNote: "Tekankan: Interview bukan cuma mereka nilai kamu. Kamu juga nilai apakah perusahaan ini cocok. Pertanyaan cerdas = kesan profesional."
    },
    {
        type: 'comparison',
        title: "Red Flags vs Green Flags 🚦",
        comparison: [
            {
                wrong: "'We don't discuss salary until after you accept the offer' — Terlalu secretive, potensi underpay",
                right: "'Our budget is X-Y, and we can discuss where you fit based on experience' — Transparan dan fair"
            },
            {
                wrong: "'Everyone works late here — it's just our culture' — Toxic work-life balance",
                right: "'We value work-life balance and have flexible hours' — Respect untuk karyawan"
            },
            {
                wrong: "'We need someone to start ASAP' — Desakan = desperation, mungkin turnover tinggi",
                right: "'We want to find the right fit, even if it takes time' — Quality over speed"
            }
        ],
        teacherNote: "Share pengalaman nyata. Red flags ini sering muncul. Murid harus confident untuk decline offer kalau too many red flags."
    },

    // ===== PHASE 3: PRACTICE =====
    {
        type: 'title',
        title: "Phase 3: Practice",
        subtitle: "Latihan Vocab & Skenario Negosiasi",
        teacherNote: "Mulai fase latihan dengan vocab dan skenario negosiasi."
    },
    {
        type: 'int-vocab',
        title: "Negotiation Vocabulary",
        interviewVocab: [
            { term: "Based on my research...", meaning: "Berdasarkan riset saya...", example: "Based on my research, the market rate for this position is 12-15 million.", category: "Opening" },
            { term: "I'm looking for a range of...", meaning: "Saya mencari range...", example: "I'm looking for a range of 10-12 million, depending on the total package.", category: "Opening" },
            { term: "Would you be open to...", meaning: "Apakah Anda terbuka untuk...", example: "Would you be open to discussing a higher base with a performance bonus?", category: "Negotiating" },
            { term: "Is there flexibility on...", meaning: "Apakah ada fleksibilitas untuk...", example: "Is there flexibility on the base salary given my certifications?", category: "Negotiating" },
            { term: "What does the benefits package include?", meaning: "Apa saja yang termasuk paket benefit?", example: "What does the benefits package include besides health insurance?", category: "Benefits" },
            { term: "Are there opportunities for...", meaning: "Apakah ada kesempatan untuk...", example: "Are there opportunities for professional development or training?", category: "Growth" },
            { term: "That sounds reasonable, but...", meaning: "Kedengarannya masuk akal, tapi...", example: "That sounds reasonable, but I was hoping for something closer to 12 million.", category: "Counter" },
            { term: "Could we revisit this after...", meaning: "Bisakah kita bahas lagi setelah...", example: "Could we revisit this after I've demonstrated my value in the first 3 months?", category: "Defer" }
        ],
        teacherNote: "Praktekkan pronunciation. Minta murid bikin kalimat dengan tiap frasa. Fokus pada nada percaya diri, tidak memohon."
    },
    {
        type: 'int-scenario',
        title: "Skenario: Salary Negotiation",
        interviewScenario: {
            question: "What are your salary expectations?",
            starAnswer: {
                situation: "Based on my research of market rates for Digital Marketing Specialist with 2 years experience in Jakarta...",
                task: "...and considering my track record of increasing engagement by 150% in my current role...",
                action: "...I'm looking for a base salary in the range of 9-11 million rupiah, with flexibility depending on the total compensation package including benefits and growth opportunities.",
                result: "I'm confident this reflects both the market value and the results I can bring to your team. I'm open to discussing how we can structure this to work for both of us."
            },
            tip: "Always back up your number with research and achievements. Confidence is key — jangan memohon, jelaskan value!"
        },
        teacherNote: "Analisis bareng murid. Kenapa jawaban ini kuat? Research + Achievement + Range + Flexibility. Latih delivery-nya."
    },
    {
        type: 'comparison',
        title: "Wrong Way vs Right Way 💬",
        comparison: [
            {
                wrong: "Berapa gajinya? (di awal interview)",
                right: "I'd like to understand the role better first, then we can discuss compensation."
            },
            {
                wrong: "Saya butuh minimal 10 juta soalnya banyak cicilan.",
                right: "Based on my research and experience, I'm looking for a range of 10-12 million."
            },
            {
                wrong: "Ya sudah, 7 juta juga gapapa lah.",
                right: "I appreciate the offer. Could we discuss if there's room to move closer to my target range?"
            },
            {
                wrong: "Gaji bisa dinego nggak? (terlalu blunt)",
                right: "Is there flexibility in the compensation package?"
            }
        ],
        teacherNote: "Diskusi nuansa bahasa Indonesia vs Inggris. Dalam bahasa Indonesia, kita sering terlalu langsung atau malah terlalu pasrah. Bahasa Inggris profesional = polite tapi firm."
    },
    {
        type: 'micro-drill',
        title: "Micro Drill: Deflect & Anchor",
        subtitle: "Latihan Cepat: Tahan Ditanya Gaji di Awal",
        mission: [
            "HR: 'So, what's your expected salary?' (di screening awal)",
            "Kamu: Praktekkan defer strategy — jangan sebut angka!",
            "Lalu: Anchoring dengan range yang sudah diresearch",
            "Contekan: 'I'm sure we can find something fair...' / 'I'm looking for a range of...'"
        ],
        teacherNote: "Roleplay cepat. Tutor sebagai HR yang agresif nanya gaji. Murid harus bisa nahan dan redirect. Ulangi 2-3x sampai natural."
    },
    {
        type: 'int-vocab',
        title: "Smart Questions to Ask",
        interviewVocab: [
            { term: "What does a typical day look like?", meaning: "Seperti apa hari kerja biasanya?", example: "What does a typical day look like for someone in this role?", category: "Role" },
            { term: "What are the biggest challenges?", meaning: "Apa tantangan terbesarnya?", example: "What are the biggest challenges someone in this position would face?", category: "Role" },
            { term: "How do you measure success?", meaning: "Bagaimana kesuksesan diukur?", example: "How do you measure success in this role, especially in the first 6 months?", category: "Success" },
            { term: "What opportunities for growth exist?", meaning: "Kesempatan berkembang seperti apa yang ada?", example: "What opportunities for professional growth exist within the company?", category: "Growth" },
            { term: "Can you tell me about the team?", meaning: "Ceritakan tentang timnya?", example: "Can you tell me about the team I'd be working with?", category: "Team" },
            { term: "What are the next steps?", meaning: "Langkah selanjutnya apa?", example: "What are the next steps in the hiring process?", category: "Process" },
            { term: "Why is this position open?", meaning: "Kenapa posisi ini terbuka?", example: "I'm curious — why is this position open? Is it a new role or a replacement?", category: "Insight" }
        ],
        teacherNote: "Penting: Murid harus punya 3-5 pertanyaan siap. Jangan sampai ditanya 'Ada pertanyaan?' terus jawab 'Nggak ada'. Itu kesan tidak tertarik."
    },

    // ===== PHASE 4: SIMULATION =====
    {
        type: 'title',
        title: "Phase 4: Simulation",
        subtitle: "Mock Interview: Negosiasi & Smart Questions",
        teacherNote: "Fase akhir: simulasi mock interview lengkap dengan negosiasi gaji."
    },
    {
        type: 'int-mock',
        title: "Mock Interview Setup",
        subtitle: "Skenario: Final Interview dengan HR Manager",
        mockInterview: {
            jobTitle: "Marketing Executive",
            company: "Tech Startup Indonesia (Series B, 150+ employees)",
            questions: [
                "Tell me about yourself and why you're interested in this role?",
                "What are your salary expectations for this position?",
                "Where do you see yourself in 3 years?",
                "Do you have any questions for us?"
            ],
            context: "Ini final interview. Kamu sudah lewati 2 putaran sebelumnya. Budget perusahaan: 8-12 juta. Research mu: posisi ini market rate-nya 10-13 juta untuk pengalaman 2 tahun. Tugas: Negosiasi dengan percaya diri dan tanya minimal 2 smart questions."
        },
        teacherNote: "Setup lengkap untuk mock interview 10-15 menit. Tutor mainkan HR yang professional tapi nanya gaji di pertanyaan kedua."
    },
    {
        type: 'simulation',
        title: "Final Simulation: The Offer Discussion",
        subtitle: "Roleplay dengan Tutor",
        simulation: {
            role: "Kandidat untuk posisi Digital Marketing (2 tahun pengalaman)",
            scenario: "HR bilang: 'Kami tertarik menawarkan posisi ini. Budget kami untuk role ini adalah 8 juta per bulan. Apa komentar kamu?'",
            goal: "Negosiasi gaji ke 10-11 juta dengan profesional. Gunakan research, anchoring, dan tunjukkan value. Jangan langsung accept atau reject!",
            timeLimit: 120
        },
        teacherNote: "Ini simulation intensif. HR akan pakai tactics: budget terbatas, 'ini sudah di atas market', etc. Murid harus tetap firm dan data-driven."
    },
    {
        type: 'concept',
        title: "When to Accept vs Walk Away 🚪",
        subtitle: "Bukan Semua Offer Harus Diterima",
        content: [
            "ACCEPT kalau: Dalam range yang masuk akal, benefits oke, growth opportunity jelas, culture cocok",
            "NEGO further kalau: Di bawah target tapi dekat, ada room untuk bonus/review 6 bulan",
            "WALK AWAY kalau: Terlalu jauh di bawah needs, red flags banyak, tidak ada flexibility sama sekali",
            "Remember: Rejecting an offer yang tidak cocok = self-respect, bukan kesalahan"
        ],
        teacherNote: "Empower murid untuk walk away kalau perlu. Ini skill penting. Banyak orang Indonesia stuck di pekerjaan underpaid karena takut menolak."
    },
    {
        type: 'recap',
        title: "Rangkuman: Salary & Benefits Negotiation",
        recap: [
            { context: "Research", sayThis: "Based on my research, the market rate is...", dontSayThis: "Berapa ya biasanya?" },
            { context: "Deferring", sayThis: "I'm sure we can find something fair based on market value", dontSayThis: "Gaji berapa? (di awal)" },
            { context: "Anchoring", sayThis: "I'm looking for a range of 10-12 million", dontSayThis: "Terserah, yang penting cukup" },
            { context: "Negotiating", sayThis: "Is there flexibility on the base salary?", dontSayThis: "Bisa naik nggak?" },
            { context: "Smart Questions", sayThis: "How do you measure success in this role?", dontSayThis: "Nggak ada pertanyaan" }
        ]
    },
    {
        type: 'mission',
        title: "Mission: Salary Research & Prep",
        subtitle: "Tugas Sebelum Interview Berikutnya",
        mission: [
            "Riset gaji untuk 3 posisi yang kamu targetkan pakai Glassdoor/JobStreet/LinkedIn",
            "Tulis 3 achievement mu yang bisa justify gaji lebih tinggi",
            "Latih 5 pertanyaan smart questions untuk ditanya ke interviewer",
            "Roleplay negosiasi gaji dengan teman/family — rekam dan review!",
            "Remember: You're not asking for a favor — you're negotiating a business deal 🤝"
        ],
        teacherNote: "Mission ini praktis dan actionable. Minta murid share hasil riset gaji mereka di sesi berikutnya. Buat ini jadi habit sebelum setiap interview."
    }
];

export const quiz: QuizQuestion[] = [];
