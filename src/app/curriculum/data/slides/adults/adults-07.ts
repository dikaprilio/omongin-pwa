import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1
    {
        type: 'title',
        title: "Polite Requests & Favors",
        subtitle: "Level: Business English",
        teacherNote: "Goal: Meminta sesuatu dengan bahasa yang sopan, tidak terdengar bossy, dan tetap profesional.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1920"
    },
    // SLIDE 2
    {
        type: 'concept',
        title: "The Problem: Direct Translation",
        content: [
            "Orang Indonesia sering menerjemahkan langsung dari Bahasa Indonesia ke Inggris.",
            "Hasilnya: Terdengar kasar, demanding, atau seperti perintah.",
            "Di budaya Barat, cara minta tolong menentukan apakah orang mau membantu atau tidak."
        ],
        teacherNote: "Jelaskan bahwa 'directness' berbeda di tiap budaya. Indo = sopan kalau to the point. Barat = sopan kalau ada buffer."
    },
    // SLIDE 3
    {
        type: 'comparison',
        title: "The Gap: Indo Style vs. Global Style",
        subtitle: "Perhatikan perbedaan 'nada' dalam kalimat ini.",
        comparison: [
            { wrong: '"I want you to send the report."', right: '"Could you please send the report?"' },
            { wrong: '"You must finish this today."', right: '"Would it be possible to finish this today?"' },
            { wrong: '"Give me the file."', right: '"Would you mind sharing the file with me?"' },
            { wrong: '"I need this now."', right: '"I was wondering if you could help me with this."' }
        ],
        teacherNote: "Kiri = Direct Command (seperti atasan ke bawahan). Kanan = Professional Request (setara)."
    },
    // SLIDE 4
    {
        type: 'concept',
        title: "The Politeness Scale",
        subtitle: "Semakin panjang, semakin sopan (biasanya).",
        content: [
            "Level 1 (Direct): 'Send the report.' — Untuk bawahan/situasi darurat.",
            "Level 2 (Neutral): 'Can you send the report?' — Untuk rekan kerja.",
            "Level 3 (Polite): 'Could you please send the report?' — Standar profesional.",
            "Level 4 (Very Polite): 'Would you mind sending the report?' — Untuk permintaan besar/atasan.",
            "Level 5 (Ultra Polite): 'I was wondering if you might be able to send the report?' — Untuk situasi sensitif."
        ],
        teacherNote: "Gunakan level yang sesuai. Terlalu sopan ke bawahan = terdengar aneh. Kurang sopan ke atasan = rude."
    },
    // SLIDE 5
    {
        type: 'formula',
        title: "Formula 1: Could you (please) + Verb?",
        subtitle: "Formula paling serbaguna untuk request standar.",
        formula: "Could you (please) + [base verb] + [object]?",
        vocabulary: [
            { term: "Could you send", meaning: "Bisakah kamu kirimkan", example: "Could you send me the invoice?" },
            { term: "Could you please check", meaning: "Bisakah tolong dicek", example: "Could you please check the attachment?" },
            { term: "Could you help", meaning: "Bisakah kamu bantu", example: "Could you help me with this presentation?" },
            { term: "Could you let me know", meaning: "Bisakah kamu kabari", example: "Could you let me know when you're free?" }
        ],
        teacherNote: "'Please' bisa sebelum verb atau di akhir kalimat: 'Could you send me the file, please?'"
    },
    // SLIDE 6
    {
        type: 'formula',
        title: "Formula 2: Would you mind + V-ing?",
        subtitle: "Lebih sopan, cocok untuk permintaan yang sedikit merepotkan.",
        formula: "Would you mind + [V-ing] + [object]?",
        comparison: [
            { wrong: '"Would you mind to send the file?"', right: '"Would you mind sending the file?"' }
        ],
        vocabulary: [
            { term: "Would you mind waiting", meaning: "Apakah keberatan menunggu", example: "Would you mind waiting for a few minutes?" },
            { term: "Would you mind reviewing", meaning: "Apakah keberatan mereview", example: "Would you mind reviewing my proposal?" },
            { term: "Would you mind sharing", meaning: "Apakah keberatan berbagi", example: "Would you mind sharing your screen?" }
        ],
        teacherNote: "PENTING: Jawaban 'No' artinya 'Saya tidak keberatan' = YES, I will help. Ini sering membingungkan!"
    },
    // SLIDE 7
    {
        type: 'concept',
        title: "⚠️ The 'Would You Mind' Trap",
        subtitle: "Jawaban yang membingungkan banyak orang.",
        content: [
            "Q: 'Would you mind closing the door?'",
            "A: 'No, not at all.' = Saya TIDAK keberatan. (Akan saya tutup)",
            "A: 'Of course not.' = Tentu saya tidak keberatan. (Akan saya tutup)",
            "A: 'Actually, I'd rather leave it open.' = Maaf, saya tidak mau. (Politely declining)"
        ],
        teacherNote: "Latih murid untuk merespons 'Would you mind?' dengan benar. Banyak yang salah jawab 'Yes' padahal maksudnya mau bantu."
    },
    // SLIDE 8
    {
        type: 'formula',
        title: "Formula 3: Would it be possible to...?",
        subtitle: "Untuk permintaan yang mungkin sulit atau butuh approval.",
        formula: "Would it be possible to + [base verb]?",
        vocabulary: [
            { term: "Would it be possible to reschedule", meaning: "Apakah mungkin untuk reschedule", example: "Would it be possible to reschedule our meeting to Friday?" },
            { term: "Would it be possible to extend", meaning: "Apakah mungkin untuk perpanjang", example: "Would it be possible to extend the deadline by one day?" },
            { term: "Would it be possible to get", meaning: "Apakah mungkin untuk mendapat", example: "Would it be possible to get an early approval?" }
        ],
        teacherNote: "Formula ini bagus karena tidak menekan orang. Kamu memberi mereka 'out' untuk menolak."
    },
    // SLIDE 9
    {
        type: 'formula',
        title: "Formula 4: I was wondering if...",
        subtitle: "Formula paling halus. Cocok untuk atasan atau klien penting.",
        formula: "I was wondering if you could + [base verb]...",
        vocabulary: [
            { term: "I was wondering if you could", meaning: "Saya ingin tahu apakah Anda bisa", example: "I was wondering if you could spare a few minutes for a quick call?" },
            { term: "I was wondering if it would be okay to", meaning: "Saya ingin tahu apakah boleh", example: "I was wondering if it would be okay to leave early today?" },
            { term: "I was wondering if you might", meaning: "Saya ingin tahu apakah mungkin Anda", example: "I was wondering if you might have time to review this?" }
        ],
        teacherNote: "Gunakan 'was wondering' (Past Tense) bukan 'am wondering'. Ini membuat permintaan terdengar lebih tentative."
    },
    // SLIDE 10
    {
        type: 'vocabulary',
        title: "Softeners: Kata-kata Pelembut",
        subtitle: "Tambahkan kata-kata ini untuk membuat request lebih halus.",
        vocabulary: [
            { term: "Just", meaning: "Hanya/Sebentar", example: "Could you just check this for me?" },
            { term: "Quickly", meaning: "Sebentar", example: "Could you quickly review this email?" },
            { term: "When you have a chance", meaning: "Kalau sempat", example: "Could you send me the file when you have a chance?" },
            { term: "If it's not too much trouble", meaning: "Kalau tidak merepotkan", example: "Could you help me, if it's not too much trouble?" },
            { term: "If possible", meaning: "Kalau memungkinkan", example: "Could you finish this by Friday, if possible?" },
            { term: "By any chance", meaning: "Mungkinkah", example: "Do you by any chance have the client's number?" }
        ]
    },
    // SLIDE 11
    {
        type: 'vocabulary',
        title: "Time Softeners",
        subtitle: "Memberi orang waktu = lebih sopan.",
        vocabulary: [
            { term: "At your earliest convenience", meaning: "Sesegera mungkin (tapi tidak memaksa)", example: "Please reply at your earliest convenience." },
            { term: "When you get a chance", meaning: "Kalau ada waktu", example: "Could you look at this when you get a chance?" },
            { term: "No rush", meaning: "Tidak buru-buru", example: "Could you send me the data? No rush." },
            { term: "Whenever you're free", meaning: "Kapanpun kamu sempat", example: "Let's discuss this whenever you're free." },
            { term: "By [day] if possible", meaning: "Kalau bisa sebelum [hari]", example: "Could you finish this by Friday if possible?" }
        ],
        teacherNote: "Jangan pakai 'ASAP' terlalu sering. Itu sudah dianggap pushy di banyak tempat."
    },
    // SLIDE 12
    {
        type: 'comparison',
        title: "Asking for Money/Payment",
        subtitle: "Topik paling sensitif. Harus ekstra sopan.",
        comparison: [
            { wrong: '"I need you to pay now."', right: '"Could you please process the payment at your earliest convenience?"' },
            { wrong: '"You haven\'t paid yet."', right: '"I just wanted to follow up on the outstanding invoice."' },
            { wrong: '"Give me the money."', right: '"Would it be possible to arrange the payment this week?"' },
            { wrong: '"Pay me."', right: '"I was wondering if we could discuss the payment schedule."' }
        ],
        teacherNote: "Jangan pernah terdengar menagih secara langsung. Gunakan kata 'invoice', 'payment', 'process', bukan 'money'."
    },
    // SLIDE 13
    {
        type: 'vocabulary',
        title: "Payment Vocabulary",
        subtitle: "Kata-kata profesional untuk urusan uang.",
        vocabulary: [
            { term: "Process the payment", meaning: "Memproses pembayaran", example: "Could you process the payment by Friday?" },
            { term: "Outstanding invoice", meaning: "Invoice yang belum dibayar", example: "I'm following up on the outstanding invoice." },
            { term: "Settle the balance", meaning: "Melunaskan saldo", example: "Would it be possible to settle the balance this month?" },
            { term: "Remittance", meaning: "Pengiriman uang", example: "We haven't received the remittance yet." },
            { term: "Advance payment / Deposit", meaning: "DP / Uang muka", example: "We require a 30% advance payment." },
            { term: "Reimbursement", meaning: "Penggantian biaya", example: "Could you help me with the reimbursement process?" }
        ]
    },
    // SLIDE 14
    {
        type: 'formula',
        title: "Asking to Borrow Something",
        subtitle: "Meminjam barang dari rekan kerja.",
        formula: "Could I (possibly) borrow your [item] for [duration]?",
        vocabulary: [
            { term: "Could I borrow", meaning: "Boleh saya pinjam", example: "Could I borrow your charger for a bit?" },
            { term: "Would you mind if I used", meaning: "Apakah keberatan kalau saya pakai", example: "Would you mind if I used your laptop for a minute?" },
            { term: "Is it okay if I take", meaning: "Boleh tidak kalau saya ambil", example: "Is it okay if I take this pen?" },
            { term: "Do you mind if I grab", meaning: "Keberatan tidak kalau saya ambil", example: "Do you mind if I grab a chair from here?" }
        ],
        teacherNote: "'Borrow' untuk barang yang dikembalikan. 'Take' untuk barang yang tidak dikembalikan (misal: pen, tissue)."
    },
    // SLIDE 15
    {
        type: 'formula',
        title: "Asking for Permission",
        subtitle: "Minta izin ke atasan atau HR.",
        formula: "Would it be alright if I + [past verb]?",
        vocabulary: [
            { term: "Would it be alright if I left early", meaning: "Bolehkah saya pulang lebih awal", example: "Would it be alright if I left early today?" },
            { term: "Would it be okay if I worked from home", meaning: "Bolehkah saya WFH", example: "Would it be okay if I worked from home tomorrow?" },
            { term: "Do you mind if I took", meaning: "Apakah keberatan kalau saya ambil", example: "Do you mind if I took my lunch break now?" },
            { term: "Is it possible for me to", meaning: "Apakah mungkin saya bisa", example: "Is it possible for me to take Friday off?" }
        ],
        teacherNote: "Perhatikan: 'Would it be alright if I LEFT' (past tense) – ini membuat permintaan lebih hypothetical/sopan."
    },
    // SLIDE 16
    {
        type: 'formula',
        title: "Asking for Help",
        subtitle: "Cara minta tolong yang tidak memaksa.",
        vocabulary: [
            { term: "Could you give me a hand with", meaning: "Bisa bantu saya dengan", example: "Could you give me a hand with these boxes?" },
            { term: "I could really use some help with", meaning: "Saya butuh bantuan untuk", example: "I could really use some help with this report." },
            { term: "Would you be able to help me", meaning: "Bisakah kamu membantu saya", example: "Would you be able to help me set up the meeting room?" },
            { term: "Do you have a minute to", meaning: "Ada waktu sebentar untuk", example: "Do you have a minute to look at this?" },
            { term: "I hate to bother you, but", meaning: "Maaf mengganggu, tapi", example: "I hate to bother you, but could you proofread this?" }
        ]
    },
    // SLIDE 17
    {
        type: 'comparison',
        title: "Asking for Feedback",
        subtitle: "Meminta input atau review dari orang lain.",
        comparison: [
            { wrong: '"Check my work."', right: '"Could you take a look at my work when you have a moment?"' },
            { wrong: '"Tell me if this is wrong."', right: '"I\'d appreciate your feedback on this."' },
            { wrong: '"Is this okay?"', right: '"Would you mind giving me your thoughts on this?"' }
        ],
        vocabulary: [
            { term: "I'd appreciate your feedback", meaning: "Saya menghargai feedback Anda", example: "I'd appreciate your feedback on the proposal." },
            { term: "I'd value your input", meaning: "Saya menghargai masukan Anda", example: "I'd value your input on this decision." },
            { term: "What do you think about", meaning: "Bagaimana pendapat Anda tentang", example: "What do you think about this approach?" }
        ]
    },
    // SLIDE 18
    {
        type: 'vocabulary',
        title: "Responding to Requests",
        subtitle: "Cara menjawab permintaan orang lain.",
        vocabulary: [
            { term: "Sure, no problem.", meaning: "Tentu, tidak masalah.", example: "Q: Could you send the file? A: Sure, no problem." },
            { term: "Of course.", meaning: "Tentu saja.", example: "Q: Could you help me? A: Of course." },
            { term: "I'd be happy to.", meaning: "Dengan senang hati.", example: "Q: Would you mind reviewing this? A: I'd be happy to." },
            { term: "Consider it done.", meaning: "Akan saya kerjakan.", example: "Q: Could you book the room? A: Consider it done." },
            { term: "Leave it with me.", meaning: "Serahkan pada saya.", example: "Q: Can you handle this? A: Leave it with me." },
            { term: "I'll get right on it.", meaning: "Akan saya kerjakan sekarang.", example: "Q: Could you fix this? A: I'll get right on it." }
        ]
    },
    // SLIDE 19
    {
        type: 'vocabulary',
        title: "Declining Politely",
        subtitle: "Cara menolak tanpa menyinggung.",
        vocabulary: [
            { term: "I'm afraid I can't", meaning: "Maaf, saya tidak bisa", example: "I'm afraid I can't make it to the meeting." },
            { term: "I wish I could, but", meaning: "Saya ingin sekali, tapi", example: "I wish I could help, but I'm swamped right now." },
            { term: "Unfortunately, that won't be possible", meaning: "Sayangnya, itu tidak memungkinkan", example: "Unfortunately, extending the deadline won't be possible." },
            { term: "I'm sorry, but I'm not able to", meaning: "Maaf, saya tidak bisa", example: "I'm sorry, but I'm not able to take on more work." },
            { term: "I'd love to, but", meaning: "Saya ingin sekali, tapi", example: "I'd love to join, but I have another commitment." },
            { term: "Perhaps another time?", meaning: "Mungkin lain waktu?", example: "I can't today. Perhaps another time?" }
        ],
        teacherNote: "Selalu berikan alasan singkat saat menolak. Jangan hanya bilang 'No'."
    },
    // SLIDE 20
    {
        type: 'case-study',
        title: "Case Study 1: Asking for Deadline Extension",
        subtitle: "Skenario: Kamu tidak bisa selesaikan tepat waktu.",
        caseStudy: {
            scenario: "Your report is due tomorrow, but you need 2 more days.",
            template: '"Hi [Name], I wanted to discuss the report deadline. I\'ve made good progress, but I\'ve run into some unexpected issues. Would it be possible to extend the deadline by two days? I want to make sure I deliver quality work. I\'d really appreciate your understanding."'
        },
        teacherNote: "Key: Acknowledge the deadline, explain briefly, propose a solution, show commitment."
    },
    // SLIDE 21
    {
        type: 'case-study',
        title: "Case Study 2: Following Up on Payment",
        subtitle: "Skenario: Invoice sudah 2 minggu belum dibayar.",
        caseStudy: {
            scenario: "Your client hasn't paid their invoice from 2 weeks ago.",
            template: '"Dear [Name], I hope this email finds you well. I\'m writing to follow up on Invoice #123, dated [Date], which appears to be outstanding. I understand things can get busy, so I just wanted to check if there are any issues with the payment. Please let me know if you need any additional information from our end. Thank you for your attention to this matter."'
        },
        teacherNote: "Key: Friendly opener, reference the invoice, give them an 'out', offer to help."
    },
    // SLIDE 22
    {
        type: 'case-study',
        title: "Case Study 3: Asking Boss for Time Off",
        subtitle: "Skenario: Mau izin cuti untuk acara keluarga.",
        caseStudy: {
            scenario: "You need to take Friday off for a family event.",
            template: '"Hi [Boss Name], I was hoping to take this Friday off for a family commitment. I\'ve checked my calendar and there are no urgent meetings. I\'ll make sure to hand over any pending tasks to [Colleague] before I leave. Would that be alright with you?"'
        },
        teacherNote: "Key: State your request, show you've planned ahead, offer a solution for coverage."
    },
    // SLIDE 23
    {
        type: 'case-study',
        title: "Case Study 4: Asking Colleague to Cover Your Shift",
        subtitle: "Skenario: Minta tolong rekan untuk gantikan shift.",
        caseStudy: {
            scenario: "You need someone to cover your Monday shift.",
            template: '"Hey [Name], I\'m in a bit of a bind. I have a doctor\'s appointment on Monday that I can\'t reschedule. Would you be able to cover my shift? I\'d be happy to return the favor anytime. Let me know if that works for you. Thanks so much!"'
        },
        teacherNote: "Key: Explain briefly, make the request, offer to reciprocate."
    },
    // SLIDE 24
    {
        type: 'vocabulary',
        title: "Pronunciation Check",
        subtitle: "Kata-kata yang sering salah diucapkan.",
        pronunciations: [
            { word: "Could", ipa: "/kʊd/", tip: "Bunyi 'D' hampir tidak terdengar. 'Cud'." },
            { word: "Would", ipa: "/wʊd/", tip: "Bunyi 'L' tidak ada! Bukan 'Wuld'. 'Wud'." },
            { word: "Appreciate", ipa: "/əˈpriːʃieɪt/", tip: "A-PRI-shi-ate. 4 suku kata." },
            { word: "Convenience", ipa: "/kənˈviːniəns/", tip: "Kon-VEE-nee-ens. Stress di 'VEE'." }
        ]
    },
    // SLIDE 25
    {
        type: 'recap',
        title: "Quick Recap (Cheat Sheet)",
        recap: [
            { context: "Standard Request", sayThis: "Could you please...", dontSayThis: "I want you to..." },
            { context: "Bigger Request", sayThis: "Would you mind...", dontSayThis: "You must..." },
            { context: "Permission", sayThis: "Would it be alright if I...", dontSayThis: "I will..." },
            { context: "Very Polite", sayThis: "I was wondering if...", dontSayThis: "Give me..." }
        ]
    },
    // SLIDE 26
    {
        type: 'mission',
        title: "Mission (Action Item)",
        subtitle: "Praktikkan hari ini juga!",
        mission: [
            "1. Email Challenge: Tulis email ke rekan kerja menggunakan salah satu formula (Could you please / Would you mind / Would it be possible).",
            "2. Upgrade Challenge: Ambil 1 request yang biasa kamu tulis dengan 'Can you...' dan upgrade ke 'Could you please...' atau 'Would you mind...'",
            "3. Practice Response: Latih 3 cara untuk menjawab 'Sure, no problem' / 'I'd be happy to' / 'I'll get right on it'."
        ],
        teacherNote: "See you in the next meeting."
    }
];

export const quiz: QuizQuestion[] = [
    // TYPE 1: FORMULA IDENTIFICATION
    {
        question: 'Which is the most polite way to ask someone to send a file?',
        options: ['"Send me the file."', '"Can you send the file?"', '"Would you mind sending the file?"'],
        correctIndex: 2,
        explanation: '"Would you mind + V-ing" is more polite than direct commands or simple "Can you" questions.'
    },
    {
        question: 'Complete the formula: "Would you mind ___ the door?"',
        options: ['to close', 'closing', 'close'],
        correctIndex: 1,
        explanation: 'After "Would you mind", we use the V-ing (gerund) form, not infinitive or base verb.'
    },
    {
        question: 'If someone asks "Would you mind helping me?", how do you say YES (you will help)?',
        options: ['"Yes, I would mind."', '"No, not at all."', '"Yes, please."'],
        correctIndex: 1,
        explanation: '"No, not at all" means "I don\'t mind = I will help." This confuses many learners!'
    },
    {
        question: 'Which formula is best for asking your boss for permission to leave early?',
        options: ['"I\'m leaving early today."', '"Would it be alright if I left early today?"', '"I want to leave early."'],
        correctIndex: 1,
        explanation: '"Would it be alright if I + past verb" is respectful and gives the boss room to say no.'
    },
    {
        question: 'What makes "I was wondering if you could help me" more polite than "Can you help me?"',
        options: ['It uses past tense, making it more tentative.', 'It is longer.', 'It uses "wondering" which is magic.'],
        correctIndex: 0,
        explanation: 'Using past tense ("was wondering") creates psychological distance, making the request feel less direct.'
    },

    // TYPE 2: ERROR CORRECTION
    {
        question: 'Which sentence has a grammar error?',
        options: ['"Could you please check this?"', '"Would you mind to review this?"', '"Would it be possible to reschedule?"'],
        correctIndex: 1,
        explanation: '"Would you mind" is followed by V-ing, not "to + verb". Correct: "Would you mind reviewing this?"'
    },
    {
        question: 'How should you correct: "Give me the report by Friday"?',
        options: ['"I need the report by Friday."', '"Could you please send me the report by Friday?"', '"You must give me the report by Friday."'],
        correctIndex: 1,
        explanation: 'Adding "Could you please" transforms a command into a polite request.'
    },
    {
        question: '"I want you to pay now" is problematic because:',
        options: ['It is too short.', 'It sounds demanding and rude.', 'It is grammatically incorrect.'],
        correctIndex: 1,
        explanation: 'Direct demands for money are considered rude in professional settings. Use "Could you please process the payment?"'
    },
    {
        question: 'Which is the professional way to say "You haven\'t paid yet"?',
        options: ['"Where is my money?"', '"I just wanted to follow up on the outstanding invoice."', '"Pay me now."'],
        correctIndex: 1,
        explanation: 'Use neutral language like "follow up" and "outstanding invoice" instead of accusatory statements.'
    },
    {
        question: 'What\'s wrong with: "Check my work"?',
        options: ['It\'s too polite.', 'It\'s a command, not a request.', 'It\'s grammatically wrong.'],
        correctIndex: 1,
        explanation: 'Commands are appropriate only in certain contexts. A request like "Could you take a look at my work?" is more professional.'
    },

    // TYPE 3: VOCABULARY & SOFTENERS
    {
        question: 'What does "at your earliest convenience" mean?',
        options: ['RIGHT NOW!', 'As soon as you have time (no pressure).', 'Never.'],
        correctIndex: 1,
        explanation: 'This phrase politely asks for promptness without being pushy or demanding.'
    },
    {
        question: 'Which softener makes a request feel less urgent?',
        options: ['"I need this ASAP."', '"Could you do this when you get a chance?"', '"Do this immediately."'],
        correctIndex: 1,
        explanation: '"When you get a chance" removes pressure and shows respect for the other person\'s time.'
    },
    {
        question: '"I hate to bother you, but..." is used to:',
        options: ['Express annoyance.', 'Soften a request that might interrupt someone.', 'Refuse a request.'],
        correctIndex: 1,
        explanation: 'This phrase acknowledges you\'re aware you might be interrupting, making your request more polite.'
    },
    {
        question: 'What is a "remittance"?',
        options: ['A type of invoice.', 'A payment/transfer of money.', 'A deadline.'],
        correctIndex: 1,
        explanation: 'Remittance refers to the transfer of money, often used in international payments.'
    },
    {
        question: '"Outstanding invoice" means:',
        options: ['An excellent invoice.', 'An invoice that hasn\'t been paid yet.', 'A cancelled invoice.'],
        correctIndex: 1,
        explanation: '"Outstanding" in financial context means unpaid or remaining to be settled.'
    },

    // TYPE 4: RESPONDING TO REQUESTS
    {
        question: 'If your colleague asks "Could you help me?", which is the most enthusiastic positive response?',
        options: ['"Okay."', '"I\'d be happy to!"', '"Maybe."'],
        correctIndex: 1,
        explanation: '"I\'d be happy to!" shows genuine willingness and is more professional than just "Okay."'
    },
    {
        question: 'How do you politely decline a request?',
        options: ['"No."', '"I wish I could, but I\'m swamped right now."', '"That\'s not my job."'],
        correctIndex: 1,
        explanation: 'Use softening phrases like "I wish I could, but..." and give a brief reason when declining.'
    },
    {
        question: '"Consider it done" means:',
        options: ['"I will definitely do it."', '"I might do it."', '"I refuse to do it."'],
        correctIndex: 0,
        explanation: 'This confident phrase assures the requester that the task will be completed.'
    },
    {
        question: 'If asked "Would you mind waiting?", and you\'re okay with waiting, you say:',
        options: ['"Yes, I would mind."', '"No, not at all."', '"Yes, I don\'t mind."'],
        correctIndex: 1,
        explanation: '"No, not at all" = "I don\'t mind waiting" = Yes, I\'ll wait. Remember: "No" is the positive answer here!'
    },
    {
        question: 'What does "I\'ll get right on it" mean?',
        options: ['"I\'ll think about it."', '"I\'ll do it immediately."', '"I can\'t do it."'],
        correctIndex: 1,
        explanation: 'This phrase shows urgency and commitment—you\'ll start working on it right away.'
    }
];
