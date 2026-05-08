/**
 * Curriculum Phases & Meeting Metadata
 * -------------------------------------
 * Defines 6 distinct curriculums.
 * IDs are global to maintain routing simplicity.
 *
 * ID RANGES:
 * 1.  Speaking Pro (Adults) : 1 - 30
 * 2.  Speaking Super (Kids) : 31 - 60
 * 3.  Basic English (Adults): 61 - 90
 * 4.  Basic English (Kids)  : 121 - 150
 * 5.  Presentation Skills   : 151 - 180
 * 6.  Career Prep (Interview): 181 - 240 (60 sessions)
 */

import type { Phase } from './types';

// ========================================
// 1. SPEAKING PRO (ADULTS) - IDs: 1-30
// ========================================
export const speakingAdultPhases: Phase[] = [
    {
        id: 1,
        title: "Phase 1: Building Confidence",
        goal: "Sounding natural in everyday conversation.",
        meetings: [
            { id: 1, title: "Professional Introduction", skill: 'Professional "Elevator Pitch" vs. Casual Chat.', fix: '"My hobby is..." → "I work as..." ' },
            { id: 2, title: "Small Talk Strategy", skill: 'The "Ping Pong" technique.', fix: 'One-word answers.' },
            { id: 3, title: "Storytelling Strategy", skill: "Sharing past experiences and anecdotes.", fix: 'V2 past tense errors.' },
            { id: 4, title: "Daily Routines", skill: "Describing routines (Present Tense).", fix: 'Confusing "I am work" vs "I work."' },
            { id: 5, title: "Asking Better Questions", skill: "Keeping conversations alive.", fix: "Intonation." },
            { id: 6, title: 'The "Rasa" Class', skill: "Descriptive English.", fix: 'Overusing generic adjectives.' }
        ]
    },
    {
        id: 2,
        title: "Phase 2: The Professional Toolkit",
        goal: "Politeness, hierarchy, and clarity in business.",
        meetings: [
            { id: 7, title: "Polite Requests & Favors", skill: "Asking for things without sounding bossy.", fix: '"Requesting money" → "Could you please process the payment?"' },
            { id: 8, title: "Reactions & Compliments", skill: "Responding naturally without sounding flat or awkward.", fix: '"Ah, no I\'m not good" → "Thank you, I appreciate it."' },
            { id: 9, title: "Constructive Feedback", skill: "Critiquing work politely without offending.", fix: '"This is bad" -> "Have you considered..."' },
            { id: 10, title: "Telephoning & Zoom", skill: "Handling bad connections and interruptions.", fix: '"I close the camera" → "I\'m going to turn off my camera."' },
            { id: 11, title: "Presentation Basics", skill: 'Signposting ("First," "Moving on," "In conclusion").', fix: "Rambling without structure." },
            { id: 12, title: "Describing Data & Trends", skill: "Explaining graphs/charts.", fix: '"The sales is up" → "Sales have increased."' }
        ]
    },
    {
        id: 3,
        title: "Phase 3: Nuance & Socializing",
        goal: 'Moving beyond "Robot English" to express personality.',
        meetings: [
            { id: 13, title: "Agreeing & Disagreeing", skill: "Debating without fighting.", fix: '"I am agree" → "I agree" / "I see your point, but..."' },
            { id: 14, title: "Giving Opinions", skill: "Brainstorming and advising colleagues.", fix: '"You must..." → "You might want to..."' },
            { id: 15, title: "Making Plans", skill: "Scheduling and canceling politely.", fix: '"Join with us" → "Join us."' },
            { id: 16, title: "Travel Survival", skill: "Solving problems abroad.", fix: 'Panic when things go wrong.' },
            { id: 17, title: "Ordering & Dining", skill: "Customizing orders and paying.", fix: '"I want this." → "I\'ll have the..."' },
            { id: 18, title: "Directions & Locations", skill: "Explaining how to get somewhere.", fix: "Prepositions (In/At/On)." }
        ]
    },
    {
        id: 4,
        title: "Phase 4: Complex Thoughts",
        goal: 'Handling abstract concepts and "What if" scenarios.',
        meetings: [
            { id: 19, title: "Comparing & Contrasting", skill: "Explaining differences (Product A vs. Product B / Jakarta vs. Bali).", fix: '"More better" → "Much better." ' },
            { id: 20, title: "Future Plans", skill: "Discussing strategy and probability.", fix: "Will vs. Going to vs. Might." },
            { id: 21, title: "Hypotheticals", skill: 'Talking about "If I were..."', fix: '"If I am you" → "If I were you."' },
            { id: 22, title: "Reported Speech", skill: 'Relaying messages.', fix: "Tense shifting when reporting." },
            { id: 23, title: "Apologizing", skill: "Owning mistakes professionally.", fix: '"Sorry my bad." → "I apologize for the oversight."' },
            { id: 24, title: 'Explaining "Why"', skill: "Using connecting words.", fix: '"Because... so..." (double connector).' }
        ]
    },
    {
        id: 5,
        title: "Phase 5: Simulation & Mastery",
        goal: "Real-world stress testing.",
        meetings: [
            { id: 25, title: "Job Interview Simulation", skill: 'The "Strengths & Weaknesses" trap.', fix: "" },
            { id: 26, title: "Angry Client Roleplay", skill: "De-escalating conflict.", fix: "" },
            { id: 27, title: "Explaining Indonesian Culture", skill: 'Explaining "Gotong Royong" to foreigners.', fix: "" },
            { id: 28, title: "Leading Effective Meetings", skill: "Setting agendas and managing time.", fix: '"Okay start now" -> "Let\'s call this meeting to order."' },
            { id: 29, title: "Free Talk / Debate", skill: "Discussing controversial topics.", fix: "" },
            { id: 30, title: "Thinking on Your Feet", skill: "Responding confidently to unexpected questions.", fix: '"Umm..." -> "That is an interesting perspective..."' }
        ]
    }
];

// ========================================
// 2. SPEAKING SUPER (KIDS) - IDs: 31-60
// ========================================
export const speakingKidsPhases: Phase[] = [
    {
        id: 1,
        title: "Level 1: Me & My World",
        goal: "Kenalan dengan percaya diri dan ceritakan tentang diri sendiri.",
        meetings: [
            { id: 31, title: "Super Introduction 🦸", skill: "Cara kenalan yang asik. Bukan cuma 'My name is...', tapi cerita hobi dan fakta unik.", fix: "Stop jawab cuma 'Budi' atau 'Senang'. Pakai kalimat lengkap: 'My name is Budi dan saya suka bermain!'" },
            { id: 32, title: "My Feelings 😊", skill: "Belajar ekspresi selain 'Happy' dan 'Sad'. Akting wajah marah, kaget, bosan, excited.", fix: "Jangan cuma bilang 'happy' atau 'sad'. Gunakan: excited, bored, nervous, proud dengan alasan." },
            { id: 33, title: "My Family Tree 👨‍👩‍👧‍👦", skill: "Mendeskripsikan anggota keluarga (tinggi/pendek, lucu/tegas) dan kegiatannya.", fix: "Beda pakai He vs She. Ayah = He, Ibu = She. Jangan sampai tertukar!" },
            { id: 34, title: "My Room Tour 🏠", skill: "Belajar preposisi (In, On, Under) dengan menunjukkan mainan asli di kamar mereka.", fix: "Stop bingung bedanya 'On the table' dan 'In the box'. On = di atas, In = di dalam." },
            { id: 35, title: "Simon Says 🖐️", skill: "Games gerak tubuh. Belajar nama anggota tubuh dan kata kerja (Touch, Shake, Move).", fix: "" },
            { id: 36, title: "The Spy 🕵️", skill: "Mencari benda berwarna dan berbentuk di rumah. Melatih observasi dalam bahasa Inggris.", fix: "" },
            { id: 37, title: "My Perfect Day ⏰", skill: "Belajar jam dan rutinitas. Merancang jadwal liburan impian mereka.", fix: "Jangan lupa pakai 'at' sebelum waktu: 'I wake up AT 6 AM', bukan 'I wake up 6 AM'." }
        ]
    },
    {
        id: 2,
        title: "Level 2: Life Skills",
        goal: "Gunakan bahasa Inggris dalam kehidupan sehari-hari.",
        meetings: [
            { id: 38, title: "Let's Go Shopping 🛒", skill: "Roleplay jual-beli. Menggunakan uang mainan, tawar menawar, dan frasa sopan.", fix: "" },
            { id: 39, title: "Tastebuds 👅", skill: "Review makanan. Belajar rasa (Sweet, Sour, Spicy, Salty) dan tekstur.", fix: "" },
            { id: 40, title: "Transportation 🚌", skill: "Cara pergi ke suatu tempat (By bus, on foot) dan suara kendaraan.", fix: "" },
            { id: 41, title: "Nature & Activities 🌲", skill: "Kosakata alam (Mountain, Beach) dan aktivitas outdoor (Camping, Hiking).", fix: "" },
            { id: 42, title: "School Life 🏫", skill: "Cerita pelajaran favorit dan yang tidak disukai. Menggunakan 'I like...' dan 'I don't like...'.", fix: "Jawab dengan kalimat lengkap: 'I like Math because it's fun', bukan cuma 'Math'." },
            { id: 43, title: "Hobbies & Games 🎮", skill: "Diskusi tentang Game (Roblox/Minecraft) atau Olahraga. Fokus pada Action Verbs + S.", fix: "Jangan lupa tambahkan S untuk He/She: 'He plays', 'She likes', bukan 'He play'." },
            { id: 44, title: "Clothes & Costumes 👕", skill: "Mendeskripsikan pakaian yang dipakai orang lain (baju, warna, aksesoris).", fix: "Pakai 'wear' untuk pakaian, bukan 'use'. 'I wear a shirt', bukan 'I use a shirt'." }
        ]
    },
    {
        id: 3,
        title: "Level 3: Storyteller",
        goal: "Bercerita dan mendeskripsikan dunia dengan bahasa Inggris.",
        meetings: [
            { id: 45, title: "Amazing Animals 🦁", skill: "Mendeskripsikan hewan (belalai, ekor, sayap) dan kemampuannya (Can fly/Can swim).", fix: "Setelah 'can', gunakan kata kerja dasar: 'Birds can fly', bukan 'Birds can flying'." },
            { id: 46, title: "The Weather Reporter ☀️", skill: "Roleplay jadi pembawa berita cuaca (Sunny, Rainy, Windy) dan baju yang cocok.", fix: "" },
            { id: 47, title: "My Last Holiday 🏖️", skill: "Pengenalan Past Tense (V2) simpel. Cerita liburan yang sudah lewat.", fix: "Kalau sudah lewat, pakai V2: 'I went to Bali', bukan 'I go to Bali'. Lock the timeline!" },
            { id: 48, title: "Doctor, Help! 🏥", skill: "Belajar bilang sakit (Headache, Stomachache) dan memberi saran simpel.", fix: "" },
            { id: 49, title: "When I Grow Up 👨‍⚕️", skill: "Diskusi cita-cita (Jobs). Apa yang dilakukan Polisi, Dokter, YouTuber, dll.", fix: "Pakai 'a' atau 'an': 'I want to be a doctor', 'I want to be an engineer'." },
            { id: 50, title: "Superheroes 🦸", skill: "Membuat superhero sendiri. Menjelaskan kekuatan supernya dengan can/can't.", fix: "Can selalu diikuti kata kerja dasar, tanpa -ing atau -s." },
            { id: 51, title: "Show & Tell 🎤", skill: "Anak membawa 1 benda favorit dan mempresentasikannya selama 1 menit.", fix: "" }
        ]
    },
    {
        id: 4,
        title: "Level 4: Future Leader",
        goal: "Berlatih berpikir kritis dan berkomunikasi tingkat lanjut.",
        meetings: [
            { id: 52, title: "Would You Rather? 🤔", skill: "Memilih di antara dua opsi sulit/seru dan memberi alasan dengan 'I would rather...'.", fix: "" },
            { id: 53, title: "The Super Salesman 💼", skill: "Guru memegang benda random. Anak harus 'menjualnya' dengan fungsi ajaib.", fix: "" },
            { id: 54, title: "Kid vs Parent Debate 🗣️", skill: "Debat terstruktur tentang topik anak. Belajar tidak setuju dengan sopan.", fix: "" },
            { id: 55, title: "Two Truths & A Lie 🎭", skill: "Anak membuat 3 pernyataan (2 jujur, 1 bohong). Melatih storytelling meyakinkan.", fix: "" },
            { id: 56, title: "Problem Solvers 💡", skill: "Menjadi 'Agony Aunt'. Memberi saran untuk teman fiktif yang sedang masalah.", fix: "" },
            { id: 57, title: "Design Your Dream School 🏫", skill: "Merancang sekolah impian dan membuat peraturan sekolahnya.", fix: "" },
            { id: 58, title: "Movie Critic 🎬", skill: "Review film/kartun favorit. Membahas plot, karakter, dan rating bintang.", fix: "" },
            { id: 59, title: "The Desert Island 🏝️", skill: "Kamu terdampar di pulau. Pilih 3 benda untuk bertahan hidup! Diskusi prioritas.", fix: "" },
            { id: 60, title: "The Graduation Show 🎓", skill: "Presentasi akhir tentang 'My Best Skill' atau 'My Dream'. Perayaan kelulusan!", fix: "" }
        ]
    }
];

// ========================================
// 3. Basic English (ADULTS) - IDs: 61-100
// ========================================
export const basicAdultPhases: Phase[] = [
    {
        id: 1,
        title: "Module 1: Sentence Logic",
        goal: "Memahami logika dasar kalimat bahasa Inggris.",
        meetings: [
            { id: 61, title: "The \"S-P-O\" Rule 🧩", skill: "Logika dasar kalimat Inggris (Subjek-Predikat-Objek). Kenapa tidak boleh \"I chicken eat\".", fix: "Susun kalimat dengan benar: Subject dulu, lalu Verb, baru Object." },
            { id: 62, title: "To Be vs Verb 🔤", skill: "Musuh abadi: Kapan pakai \"Am/Is/Are\" vs Kata Kerja. Stop \"I am agree\" atau \"She is work\".", fix: "\"I am agree\" → \"I agree\". To Be untuk keadaan, Verb untuk aksi." },
            { id: 63, title: "Question Words (5W1H) ❓", skill: "Membuat pertanyaan: Who, What, Where, When, Why, How.", fix: "Jangan lupa kata kerja bantu (Do/Does/Did) di awal pertanyaan." },
            { id: 64, title: "Pronouns & Possession 👥", skill: "I/Me/My/Mine. Bedanya \"I love she\" (salah) vs \"I love her\" (benar).", fix: "\"I love she\" → \"I love her\". Gunakan objek pronoun setelah kata kerja." },
            { id: 65, title: "Plural & Articles 🔢", skill: "A, An, The, dan akhiran -s/-es. Konsep Countable vs Uncountable.", fix: "A untuk Countable tunggal, The untuk spesifik, -s/-es untuk jamak." }
        ]
    },
    {
        id: 2,
        title: "Module 2: The Present",
        goal: "Menguasai tenses untuk kebiasaan dan aksi berlangsung.",
        meetings: [
            { id: 66, title: "Present Simple (Habits) 📅", skill: "Menjelaskan fakta dan kebiasaan. Rumus \"Do/Does\".", fix: "He/She/It pakai Does + S/-es di kata kerja. I/You/We/They pakai Do tanpa S." },
            { id: 67, title: "The \"S\" Ending Rule 🐍", skill: "Kenapa \"She eats\" tapi \"I eat\". Subject-Verb Agreement.", fix: "Subject he/she/it → tambahkan -s/-es pada kata kerja." },
            { id: 68, title: "Present Continuous ⏯️", skill: "Kejadian yang sedang berlangsung (Now). Rumus \"To Be + V-ing\".", fix: "Jangan lupa tambahkan -ing pada kata kerja untuk aksi sedang berjalan." },
            { id: 69, title: "Adjectives & Adverbs ✨", skill: "Membedakan \"Quick\" (Sifat) vs \"Quickly\" (Keterangan).", fix: "Adjective untuk kata benda, Adverb untuk kata kerja." },
            { id: 70, title: "Comparative/Superlative 📊", skill: "Membandingkan hal: Better, Best, More Expensive.", fix: "Pendek = -er/-est, Panjang = more/most. Jangan pakai keduanya!" }
        ]
    },
    {
        id: 3,
        title: "Module 3: The Past",
        goal: "Menguasai tenses untuk cerita masa lampau.",
        meetings: [
            { id: 71, title: "Past Tense (To Be) ⏮️", skill: "Was vs Were. Cerita masa lalu tanpa kata kerja aksi.", fix: "I/He/She/It pakai Was. You/We/They pakai Were." },
            { id: 72, title: "Regular Verbs (-ed) 📚", skill: "Menambahkan -ed untuk masa lampau. Fokus pelafalan (T, D, ID).", fix: "Kata kerja regular selalu pakai akhiran -ed di masa lampau." },
            { id: 73, title: "Irregular Verbs (V2) 🔄", skill: "Daftar kata kerja tak beraturan wajib hafal (Go-Went, Eat-Ate).", fix: "Hafalkan V2 irregular verbs, tidak pakai -ed!" },
            { id: 74, title: "Did vs Didn't ❓❌", skill: "Membuat pertanyaan dan kalimat negatif lampau.", fix: "Sudah pakai Did, kata kerja kembali ke bentuk dasar (V1)." },
            { id: 75, title: "Used To 🕰️", skill: "Menceritakan kebiasaan masa lalu yang sudah tidak dilakukan lagi.", fix: "Used To untuk kebiasaan lama, Be Used To untuk terbiasa." }
        ]
    },
    {
        id: 4,
        title: "Module 4-8: Advanced Topics",
        goal: "Topik lanjutan untuk menguasai bahasa Inggris.",
        meetings: Array.from({ length: 25 }, (_, i) => ({
            id: 76 + i,
            title: `Basic Adult Meeting ${i + 16}`,
            skill: "Grammar and Structure.",
            fix: ""
        }))
    }
];

// ========================================
// 4. CAREER PREP (INTERVIEW) - IDs: 181-240
// ========================================
export const interviewPhases: Phase[] = [
    {
        id: 1,
        title: "Phase 1: Core Interview Skills",
        goal: "Skill interview universal yang wajib dikuasai semua kandidat.",
        meetings: [
            { id: 181, title: "Your Elevator Pitch", skill: 'Crafting a concise "Tell me about yourself" using the Present-Past-Future formula.', fix: '"I am Rina, I study marketing..." → "I\'m a marketing graduate with 2 years of experience in..."' },
            { id: 182, title: "The STAR Method", skill: "Answering behavioral questions with Situation-Task-Action-Result structure.", fix: "Rambling stories → Structured, impactful answers with measurable results." },
            { id: 183, title: "Strengths & Weaknesses", skill: "Framing weaknesses positively, backing strengths with evidence.", fix: '"My weakness is perfectionism" → "I tend to over-research. I now set time limits to stay on track."' },
            { id: 184, title: "Body Language & First Impressions", skill: "Eye contact, handshake culture, posture, Zoom etiquette.", fix: "Stiff/nervous body → Confident, approachable presence." },
            { id: 185, title: "Salary, Benefits & Smart Questions", skill: "Negotiating politely + preparing insightful questions for the interviewer.", fix: '"I want Rp10 million" → "Based on industry standards, the range for this role is..."' },
            { id: 186, title: "Full Mock Interview", skill: "End-to-end simulation with real-time feedback. Bridge to career-specific modules.", fix: "Putting all core skills together in a pressure scenario." }
        ]
    },
    {
        id: 2,
        title: "Phase 2: Tech, Product & Data",
        goal: "Perusahaan teknologi dan startup dengan lingkungan kerja lintas negara. Posisi teknis sering dites bahasa Inggris untuk presentasi hasil kerja ke stakeholder global.",
        meetings: [
            { id: 187, title: "Software Engineer — Vocab & Q&A", skill: "Explaining technical skills to non-tech HR. REST APIs, agile, git, deployment.", fix: '"I built an API" → "I created a system that connects our app to payment services, serving 10K users."' },
            { id: 188, title: "Software Engineer — Mock Interview", skill: "Full simulation: HR screening + technical behavioral round.", fix: "" },
            { id: 189, title: "UI/UX Designer — Vocab & Q&A", skill: "User research, wireframing, prototyping, usability testing, design systems.", fix: '"I designed an app" → "I led the redesign that improved user retention by 25%."' },
            { id: 190, title: "UI/UX Designer — Mock Interview", skill: "Full simulation: Portfolio walkthrough + design challenge.", fix: "" },
            { id: 191, title: "Data Analyst — Vocab & Q&A", skill: "SQL, dashboards, data visualization, KPIs, insights vs raw data.", fix: '"I make reports" → "I built automated dashboards that reduced reporting time by 60%."' },
            { id: 192, title: "Data Analyst — Mock Interview", skill: "Full simulation: Presenting a past data-driven decision.", fix: "" }
        ]
    },
    {
        id: 3,
        title: "Phase 3: Management Trainee / ODP",
        goal: "Program percepatan karier di bank BUMN/Swasta dan perusahaan FMCG. Interview-nya sering full bahasa Inggris untuk menguji kepemimpinan dan komunikasi profesional.",
        meetings: [
            { id: 193, title: "MT FMCG — Vocab & Q&A", skill: "Leadership potential, cross-functional rotations, market analysis, consumer insights.", fix: '"I want to be a manager" → "I\'m drawn to MT programs because I thrive in fast-paced, cross-functional environments."' },
            { id: 194, title: "MT FMCG — Mock Interview", skill: "Full simulation: Leaderless group discussion + individual panel interview.", fix: "" },
            { id: 195, title: "ODP Banking — Vocab & Q&A", skill: "Risk management, credit analysis, compliance, customer portfolio, financial products.", fix: '"I like banking" → "I was drawn to banking because I enjoy analyzing risk and building client relationships."' },
            { id: 196, title: "ODP Banking — Mock Interview", skill: "Full simulation: Case study presentation + stress interview.", fix: "" },
            { id: 197, title: "Management Associate (Startup) — Vocab & Q&A", skill: "Growth mindset, ambiguity tolerance, rapid execution, startup metrics (MRR, CAC, churn).", fix: '"I want to work at a startup" → "I thrive in ambiguity — at my last internship I shipped 3 features in 2 weeks."' },
            { id: 198, title: "Management Associate (Startup) — Mock Interview", skill: "Full simulation: Culture fit interview + product thinking exercise.", fix: "" }
        ]
    },
    {
        id: 4,
        title: "Phase 4: BPO & Customer Service",
        goal: "Lowongan Customer Support dan Contact Center di perusahaan BPO sedang sangat masif. Role ini menangani keluhan user global, jadi tes speaking-nya sangat ketat.",
        meetings: [
            { id: 199, title: "Customer Support Rep — Vocab & Q&A", skill: "Ticket handling, SLA, empathy language, de-escalation, CSAT metrics.", fix: '"I help customers" → "I resolve 50+ daily tickets with a 95% CSAT score, specializing in billing and account issues."' },
            { id: 200, title: "Customer Support Rep — Mock Interview", skill: "Full simulation: Live phone call roleplay + complaint handling.", fix: "" },
            { id: 201, title: "Contact Center Agent — Vocab & Q&A", skill: "Call scripts, AHT (Average Handle Time), quality monitoring, upselling, CRM tools.", fix: '"I answer phones" → "I maintain 4-minute AHT while achieving 110% of quarterly upsell targets."' },
            { id: 202, title: "Contact Center Agent — Mock Interview", skill: "Full simulation: Recorded mock call + post-call analysis.", fix: "" },
            { id: 203, title: "E-Commerce Operations — Vocab & Q&A", skill: "Order fulfillment, returns, marketplace policies, seller support, logistics coordination.", fix: '"I work in e-commerce" → "I manage end-to-end order operations for a marketplace handling 10K orders daily."' },
            { id: 204, title: "E-Commerce Operations — Mock Interview", skill: "Full simulation: Escalation scenario + cross-team communication.", fix: "" }
        ]
    },
    {
        id: 5,
        title: "Phase 5: Digital Marketing & SEO",
        goal: "Digital marketer harus paham tren global dan membuat copywriting bahasa Inggris. Wawancara sering pakai bahasa Inggris untuk mengukur keakraban dengan metrik pemasaran global.",
        meetings: [
            { id: 205, title: "Digital Marketing Specialist — Vocab & Q&A", skill: "Campaign strategy, CTR, CPC, conversion funnel, A/B testing, Google Ads.", fix: '"I do digital marketing" → "I manage multi-channel campaigns with a 3.5x ROAS across Google and Meta."' },
            { id: 206, title: "Digital Marketing Specialist — Mock Interview", skill: "Full simulation: Presenting a campaign strategy for a new product launch.", fix: "" },
            { id: 207, title: "SEO Specialist — Vocab & Q&A", skill: "On-page/off-page SEO, keyword research, backlinks, Core Web Vitals, GA4.", fix: '"I do SEO" → "I grew organic traffic 200% in 6 months through technical SEO audits and content strategy."' },
            { id: 208, title: "SEO Specialist — Mock Interview", skill: "Full simulation: SEO audit presentation + strategy discussion.", fix: "" },
            { id: 209, title: "Content Writer / Copywriter — Vocab & Q&A", skill: "Brand voice, editorial calendar, SEO writing, content funnel, headline optimization.", fix: '"I write articles" → "I create SEO-optimized content that drives 50K monthly organic visitors."' },
            { id: 210, title: "Content Writer / Copywriter — Mock Interview", skill: "Full simulation: Live writing test + portfolio discussion.", fix: "" }
        ]
    },
    {
        id: 6,
        title: "Phase 6: EXIM & Supply Chain",
        goal: "Posisi EXIM, Purchasing, dan Custom Clearance mengharuskan korespondensi dan negosiasi dengan supplier luar negeri secara rutin setiap hari.",
        meetings: [
            { id: 211, title: "EXIM Supervisor — Vocab & Q&A", skill: "Incoterms, customs clearance, Letter of Credit, HS code, shipping documents.", fix: '"I handle exports" → "I manage end-to-end export documentation ensuring 100% customs compliance across 5 markets."' },
            { id: 212, title: "EXIM Supervisor — Mock Interview", skill: "Full simulation: Negotiating with a foreign supplier + resolving shipment delay.", fix: "" },
            { id: 213, title: "Purchasing / Procurement — Vocab & Q&A", skill: "RFQ, vendor evaluation, lead time, MOQ, cost reduction, contract negotiation.", fix: '"I buy materials" → "I negotiated vendor contracts that reduced procurement costs by 15% while maintaining quality."' },
            { id: 214, title: "Purchasing / Procurement — Mock Interview", skill: "Full simulation: Vendor negotiation roleplay + cost analysis presentation.", fix: "" },
            { id: 215, title: "Logistics Coordinator — Vocab & Q&A", skill: "Freight forwarding, WMS, last-mile delivery, fleet management, KPI tracking.", fix: '"I manage deliveries" → "I coordinate cross-border logistics for 500+ shipments monthly with 98% on-time delivery."' },
            { id: 216, title: "Logistics Coordinator — Mock Interview", skill: "Full simulation: Resolving a shipment crisis + client communication.", fix: "" }
        ]
    },
    {
        id: 7,
        title: "Phase 7: Hospitality & Pariwisata",
        goal: "Staf hotel bintang 5, steward/stewardess maskapai, dan guest relation officer wajib interview bahasa Inggris karena berinteraksi langsung dengan tamu asing.",
        meetings: [
            { id: 217, title: "Hotel Front Desk / Guest Relations — Vocab & Q&A", skill: "Check-in/out, guest complaints, upselling, reservation systems, concierge.", fix: '"I work at the front desk" → "I deliver personalized guest experiences and manage 200+ check-ins daily."' },
            { id: 218, title: "Hotel Front Desk / Guest Relations — Mock Interview", skill: "Full simulation: Handling an angry guest scenario + upselling suite.", fix: "" },
            { id: 219, title: "Tour Guide / Travel Agent — Vocab & Q&A", skill: "Itinerary planning, cultural narration, safety briefing, group management.", fix: '"I show tourists around" → "I curate immersive cultural experiences for groups of up to 30 international guests."' },
            { id: 220, title: "Tour Guide / Travel Agent — Mock Interview", skill: "Full simulation: Delivering a sample tour opening + emergency handling.", fix: "" },
            { id: 221, title: "Airline Crew — Vocab & Q&A", skill: "Safety procedures, service protocol, conflict resolution, multicultural teams.", fix: '"I work on planes" → "I ensure passenger safety while delivering premium in-flight service across 15 routes."' },
            { id: 222, title: "Airline Crew — Mock Interview", skill: "Full simulation: Group discussion + individual panel interview.", fix: "" }
        ]
    },
    {
        id: 8,
        title: "Phase 8: Healthcare",
        goal: "Rumah sakit internasional dan klinik global membutuhkan tenaga medis yang bisa berkomunikasi dengan pasien dan tim medis asing.",
        meetings: [
            { id: 223, title: "Nurse — Vocab & Q&A", skill: "Patient care, triage, vital signs, shift handover, bedside manner.", fix: '"I take care of patients" → "I provide patient-centered care, specializing in post-operative recovery."' },
            { id: 224, title: "Nurse — Mock Interview", skill: "Full simulation: Scenario-based questions about patient emergencies.", fix: "" },
            { id: 225, title: "Pharmacist — Vocab & Q&A", skill: "Drug interactions, dispensing, patient counseling, regulatory compliance.", fix: '"I give medicine" → "I counsel patients on medication adherence and manage drug interaction screening."' },
            { id: 226, title: "Pharmacist — Mock Interview", skill: "Full simulation: Handling a prescription conflict scenario.", fix: "" },
            { id: 227, title: "Medical Lab Tech — Vocab & Q&A", skill: "Specimen collection, lab equipment, quality control, test interpretation.", fix: '"I work in the lab" → "I conduct diagnostic testing with 99.5% accuracy across hematology and biochemistry."' },
            { id: 228, title: "Medical Lab Tech — Mock Interview", skill: "Full simulation: Discussing lab safety and result discrepancy.", fix: "" }
        ]
    },
    {
        id: 9,
        title: "Phase 9: Engineering & Manufacturing",
        goal: "Perusahaan manufaktur multinasional dan konstruksi besar sering melakukan interview bahasa Inggris untuk posisi engineering dan quality.",
        meetings: [
            { id: 229, title: "Mechanical Engineer — Vocab & Q&A", skill: "CAD, tolerances, material science, SOP, process optimization.", fix: '"I fix machines" → "I optimized the production line, reducing downtime by 20% through predictive maintenance."' },
            { id: 230, title: "Mechanical Engineer — Mock Interview", skill: "Full simulation: Discussing a technical improvement project.", fix: "" },
            { id: 231, title: "Quality Control — Vocab & Q&A", skill: "ISO standards, non-conformance, root cause analysis, SPC, lean manufacturing.", fix: '"I check products" → "I implement quality assurance protocols aligned with ISO 9001 standards."' },
            { id: 232, title: "Quality Control — Mock Interview", skill: "Full simulation: Handling a product recall scenario.", fix: "" },
            { id: 233, title: "Project Manager — Vocab & Q&A", skill: "Gantt charts, stakeholder alignment, risk mitigation, agile vs waterfall.", fix: '"I manage projects" → "I led cross-functional teams to deliver a $500K infrastructure project on time."' },
            { id: 234, title: "Project Manager — Mock Interview", skill: "Full simulation: Resolving a project delay with stakeholder.", fix: "" }
        ]
    },
    {
        id: 10,
        title: "Phase 10: Education & Social Impact",
        goal: "Lembaga pendidikan internasional, NGO, dan organisasi global memerlukan kemampuan bahasa Inggris untuk pengajaran, program, dan komunikasi publik.",
        meetings: [
            { id: 235, title: "English Teacher — Vocab & Q&A", skill: "Pedagogy, lesson planning, differentiated instruction, classroom management.", fix: '"I teach English" → "I design communicative lesson plans using the CEFR framework for B1-B2 learners."' },
            { id: 236, title: "English Teacher — Mock Interview", skill: "Full simulation: Teaching demo + philosophy discussion.", fix: "" },
            { id: 237, title: "NGO Program Officer — Vocab & Q&A", skill: "Program design, monitoring & evaluation, donor reporting, community engagement.", fix: '"I work at an NGO" → "I design community development programs impacting 5,000 beneficiaries annually."' },
            { id: 238, title: "NGO Program Officer — Mock Interview", skill: "Full simulation: Presenting program impact to a donor.", fix: "" },
            { id: 239, title: "Public Relations — Vocab & Q&A", skill: "Media relations, press releases, crisis communication, brand reputation.", fix: '"I handle PR" → "I manage media relations and crisis communications for a public institution."' },
            { id: 240, title: "Public Relations — Mock Interview", skill: "Full simulation: Drafting a response to a PR crisis scenario.", fix: "" }
        ]
    }
];

// ========================================
// 5. Basic English (KIDS) - IDs: 121-150
// ========================================
export const basicKidsPhases: Phase[] = [
    {
        id: 1,
        title: "Phase 1: Kids Grammar Foundation",
        goal: "Fun grammar for young learners.",
        meetings: Array.from({ length: 30 }, (_, i) => ({
            id: 121 + i,
            title: `Kids Grammar ${i + 1}`,
            skill: "Grammar through play.",
            fix: ""
        }))
    }
];

// ========================================
// 6. PRESENTATION SKILLS - IDs: 151-180
// ========================================
export const presentationPhases: Phase[] = [
    {
        id: 1,
        title: "Phase 1: Foundation",
        goal: "Mental preparation and core concept of impactful speaking.",
        meetings: [
            { id: 151, title: "Overcoming Stage Fright", skill: 'Trik psikologis dan teknik pernapasan untuk mengatasi adrenalin di "3 menit pertama".', fix: "Hilangkan tangan/suara gemetar. Ubah rasa gugup menjadi energi positif." },
            { id: 152, title: 'The "Big Idea" Framework', skill: "Cara merangkum presentasi 30 menit yang bertele-tele menjadi satu pesan inti yang kuat.", fix: "Buat presentasi yang punya satu poin jelas, bukan sekadar daftar data membosankan." },
            { id: 153, title: "Impromptu Speaking", skill: 'Latihan bicara spontan saat diminta "memberikan sepatah dua patah kata" tanpa persiapan.', fix: "Tidak akan pernah freeze lagi saat diminta update dadakan." },
            { id: 154, title: "Audience Analysis", skill: "Teknik menyesuaikan bahasa dan nada bicara berdasarkan siapa pendengarnya (Bos vs Klien vs Tim).", fix: 'Belajar bicara dengan bahasa "mereka" agar ide Anda benar-benar didengar.' },
            { id: 155, title: "The Charisma Check", skill: "Audit gaya bicara alami Anda. Apakah Anda tipe Otoritatif, Bersahabat, atau Energetik?", fix: "Temukan gaya bicara personal Anda supaya tidak terlihat palsu atau dibuat-buat." }
        ]
    },
    {
        id: 2,
        title: "Phase 2: Structure",
        goal: "Building a logical and engaging flow.",
        meetings: [
            { id: 156, title: "The Killer Opening (Hook)", skill: '5 metode membuka presentasi (Pertanyaan, Data, Cerita) selain "Selamat pagi, terima kasih sudah datang."', fix: "Curi perhatian audiens di 30 detik pertama. Stop pembukaan yang membosankan." },
            { id: 157, title: 'The "Rule of Three"', skill: "Menyusun isi materi menjadi tiga poin utama agar mudah diingat otak manusia.", fix: "Ubah pikiran yang berantakan menjadi struktur yang rapi dan logis." },
            { id: 158, title: "Signposting & Transitions", skill: 'Menggunakan "Kata Jembatan" (Moving on, Consequently) untuk memandu audiens dengan mulus.', fix: "Stop lompat topik sembarangan. Buat alur bicara Anda mengalir lancar." },
            { id: 159, title: "Storytelling for Business", skill: 'Menggunakan struktur "Hero\'s Journey" yang disederhanakan untuk membuat studi kasus jadi seru.', fix: "Ubah studi kasus membosankan menjadi cerita menarik yang menjual." },
            { id: 160, title: "The Strong Close (CTA)", skill: 'Cara menutup dengan \'ledakan\' dan Call to Action jelas, bukan cuma "Ya, itu saja, terima kasih."', fix: "Belajar menutup presentasi dengan wibawa dan langkah selanjutnya yang jelas." }
        ]
    },
    {
        id: 3,
        title: "Phase 3: Delivery",
        goal: "Mastering voice and body language.",
        meetings: [
            { id: 161, title: "Voice Projection & Power", skill: "Latihan diafragma agar suara lebih lantang dan bulat tanpa perlu berteriak.", fix: "Stop bergumam (mumbling). Pastikan suara Anda terdengar jelas sampai belakang ruangan." },
            { id: 162, title: "Intonation & Pausing", skill: 'Menguasai "Jeda Efektif" dan variasi nada bicara untuk menghindari "Robot Voice".', fix: "Perbaiki nada monoton yang bikin audiens ngantuk." },
            { id: 163, title: "Eliminating Filler Words", skill: 'Latihan membuang "Emm," "Anu," "Like," dan "Basically" dari ucapan Anda.', fix: "Terdengar lebih cerdas dan poles dengan mengganti 'filler' menjadi hening sejenak." },
            { id: 164, title: "Body Language (Zoom)", skill: "Menguasai kontak mata kamera, postur, dan framing untuk presentasi online.", fix: "Tampil percaya diri di layar, bukan cuma kepala melayang yang baca naskah." },
            { id: 165, title: "Hand Gestures Mastery", skill: "Menggunakan gerakan tangan yang bertujuan untuk menekankan poin, bukan menyembunyikan tangan.", fix: "Tampil natural dan dinamis, tidak kaku seperti patung." }
        ]
    },
    {
        id: 4,
        title: "Phase 4: Visuals",
        goal: "Creating slides that support your message.",
        meetings: [
            { id: 166, title: "Slide Design: Less is More", skill: 'Aturan "10/20/30" dan cara memangkas teks hingga 80% sambil meningkatkan dampak visual.', fix: "Stop jadikan slide sebagai teleprompter. Buat visual yang mendukung Anda." },
            { id: 167, title: "Presenting Data", skill: "Kosakata untuk mendeskripsikan grafik/bagan (Skyrocketed, Plateaued) dengan hidup.", fix: "Jelaskan data rumit dengan simpel tanpa membosankan audiens." },
            { id: 168, title: 'The "Steve Jobs" Style', skill: "Storytelling visual tingkat lanjut menggunakan gambar berkualitas tinggi dan teks minimal.", fix: "Buat estetika presentasi yang premium ala Apple." },
            { id: 169, title: "Screen Sharing Smoothness", skill: "Etika teknis untuk ganti tab, putar video, dan atur jendela aplikasi secara profesional.", fix: 'Hindari momen canggih "Kelihatan gak layarnya?" dan gaptek di depan klien.' }
        ]
    },
    {
        id: 5,
        title: "Phase 5: Engagement",
        goal: "Keeping the audience interested and active.",
        meetings: [
            { id: 170, title: "Handling Q&A Like a Pro", skill: 'Strategi menjawab pertanyaan sulit, jawaban "Saya tidak tahu", dan membeli waktu berpikir.', fix: "Jangan pernah takut sesi Q&A lagi. Tangani kritik dengan elegan." },
            { id: 171, title: "Managing Interruptions", skill: 'Cara sopan "memarkir" pertanyaan ("Let\'s discuss offline") atau mengambil alih kendali ruangan.', fix: "Hadapi orang yang suka memotong atau mendominasi tanpa terlihat kasar." },
            { id: 172, title: "Engaging a Bored Room", skill: "Teknik membangunkan audiens pasif (Polling, Pertanyaan Retoris, Gerakan Fisik).", fix: "Deteksi wajah bosan dan tarik kembali perhatian mereka secara instan." },
            { id: 173, title: "Humor & Icebreakers", skill: "Cara aman dan profesional menggunakan humor untuk mencairkan suasana tanpa garing.", fix: "Mulai meeting dengan energi positif dan koneksi yang baik." },
            { id: 174, title: "Interactive Elements", skill: "Menggunakan alat (Mentimeter, Zoom Polls) atau pancingan verbal untuk dialog dua arah.", fix: "Ubah kuliah satu arah menjadi percakapan interaktif." }
        ]
    },
    {
        id: 6,
        title: "Phase 6: Scenarios",
        goal: "Applying skills to real-world business situations.",
        meetings: [
            { id: 175, title: "The Sales Pitch", skill: "Pola bahasa persuasif untuk menjual produk, jasa, atau ide kepada orang skeptis.", fix: "Close the deal. Fokus pada manfaat (benefit), bukan sekadar fitur." },
            { id: 176, title: "The Monthly Report", skill: "Melaporkan progres rutin tanpa terdengar seperti robot atau membosankan. Highlight kemenangan dengan efektif.", fix: "Buat update rutin terdengar penting dan berorientasi pada progres." },
            { id: 177, title: "Teaching & Training", skill: "Skill menjelaskan konsep rumit secara sederhana kepada audiens pemula.", fix: "Ajarkan skill sampai orang benar-benar paham dan ingat." },
            { id: 178, title: "MC & Moderating", skill: "Cara membuka acara, memperkenalkan pembicara, dan menjaga energi sebagai tuan rumah.", fix: "Pimpin rapat atau acara dengan mulus sebagai moderator yang percaya diri." },
            { id: 179, title: 'The "Bad News" Deck', skill: "Menyampaikan hasil buruk atau penundaan secara jujur namun tetap menjaga kepercayaan diri.", fix: "Sampaikan kabar buruk tanpa menghancurkan reputasi Anda." },
            { id: 180, title: "The Final Keynote", skill: "Simulasi puncak: Membawakan bicara 5 menit lengkap dengan slide, bahasa tubuh, and Q&A.", fix: "Gabungkan semua skill dalam satu performa final berisiko tinggi." }
        ]
    }
];

/**
 * Global Metadata Accessor
 */
export const allPhases = [
    ...speakingAdultPhases,
    ...speakingKidsPhases,
    ...basicAdultPhases,
    ...interviewPhases,
    ...basicKidsPhases,
    ...presentationPhases
];

/**
 * Find a meeting by ID across all curriculums
 */
export function findMeetingById(id: number) {
    for (const phase of allPhases) {
        const meeting = phase.meetings.find(m => m.id === id);
        if (meeting) {
            return { phase, meeting };
        }
    }
    return null;
}

/**
 * Get all meeting IDs
 */
export function getAllMeetingIds(): number[] {
    return allPhases.flatMap(p => p.meetings.map(m => m.id));
}

export type CurriculumCategory = 'speaking-adults' | 'speaking-kids' | 'basic-adults' | 'basic-kids' | 'interview' | 'presentation';

/**
 * Get meeting IDs for a specific curriculum
 */
export function getIdsByCurriculum(curriculum: CurriculumCategory): number[] {
    let phases: Phase[] = [];
    switch (curriculum) {
        case 'speaking-adults': phases = speakingAdultPhases; break;
        case 'speaking-kids': phases = speakingKidsPhases; break;
        case 'basic-adults': phases = basicAdultPhases; break;
        case 'interview': phases = interviewPhases; break;
        case 'basic-kids': phases = basicKidsPhases; break;
        case 'presentation': phases = presentationPhases; break;
    }
    return phases.flatMap(p => p.meetings.map(m => m.id));
}
