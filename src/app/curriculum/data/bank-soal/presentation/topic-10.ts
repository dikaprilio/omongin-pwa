import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 10,
    path: 'presentation',
    title: "The Strong Close (CTA)",
    totalQuestions: 30,
    questions: [
        {
            id: "pres-10-001",
            question: "What is a 'Call to Action' (CTA)?",
            options: ["A phone call from the boss", "A clear instruction on what the audience should do next", "A type of slide animation", "Ending with a joke"],
            correctIndex: 1,
            explanation: "CTA memastikan presentasi Anda memiliki dampak nyata dan instruksi yang jelas bagi audiens.",
            difficulty: 'easy'
        },
        {
            id: "pres-10-002",
            question: "Why is the end of a presentation critical according to the 'Recency Effect'?",
            options: ["Because people are hungry", "Because audiences remember the last thing they heard most clearly", "Because it is the shortest part", "Because you get to sit down"],
            correctIndex: 1,
            explanation: "Kalimat penutup Anda seringkali menjadi satu-satunya hal yang diingat audiens saat pulang.",
            difficulty: 'medium'
        },
        {
            id: "pres-10-003",
            question: "What should you avoid saying as your final sentence?",
            options: ["Thank you for your time.", "I guess that's all, thank you.", "Let's build this together.", "Our goal is clarity."],
            correctIndex: 1,
            explanation: "'I guess that's all' (kayaknya itu aja) adalah penutupan yang lemah, ragu-ragu, dan anti-klimaks.",
            difficulty: 'easy'
        },
        {
            id: "pres-10-004",
            question: "What are the three parts of the 'Close' framework mentioned in Module 10?",
            options: ["Intro-Body-Conclusion", "Summary-CTA-Zinger", "Greeting-Names-Bye", "Data-Graphs-Quotes"],
            correctIndex: 1,
            explanation: "Summary (rangkuman), CTA (lanjutan), dan Zinger (kesan akhir) adalah paket penutup yang solid.",
            difficulty: 'medium'
        },
        {
            id: "pres-10-005",
            question: "Should you do your final closing BEFORE or AFTER the Q&A session?",
            options: ["Before Q&A", "After Q&A (The 'Q&A Sandwich')", "During Q&A", "Never"],
            correctIndex: 1,
            explanation: "Tutup setelah Q&A agar Anda yang memegang kendali atas kalimat terakhir di ruangan tersebut.",
            difficulty: 'medium'
        },
        {
            id: "pres-10-006",
            question: "What is a 'Zinger' in a presentation?",
            options: ["A type of snack", "A powerful final thought or quote that lingers in the mind", "A technical glitch", "A very fast slide"],
            correctIndex: 1,
            explanation: "Zinger adalah 'bom' terakhir untuk memastikan pesan Anda membekas (sticky).",
            difficulty: 'easy'
        },
        {
            id: "pres-10-007",
            question: "What happens in the 'Summary' part of the close?",
            options: ["Repeating every single slide", "Briefly recapping the 3 main pillars/points mentioned earlier", "Saying your name again", "A list of everyone's names"],
            correctIndex: 1,
            explanation: "Summary mengingatkan audiens akan poin-poin utama Anda sebelum mereka diminta bertindak (CTA).",
            difficulty: 'easy'
        },
        {
            id: "pres-10-008",
            question: "The 'Fading Trap' refers to...?",
            options: ["The colors of your shirt changing", "Losing energy and volume at the very end of your talk", "People leaving the room early", "The lights being turned off"],
            correctIndex: 1,
            explanation: "Banyak pembicara 'layu' di akhir. Pembicara pro menjaga intensitas suara dan postur sampai kata terakhir.",
            difficulty: 'medium'
        },
        {
            id: "pres-10-009",
            question: "A Call to Action should be...?",
            options: ["Vague and polite", "Clear, specific, and actionable", "A secret", "A joke"],
            correctIndex: 1,
            explanation: "CTA yang tidak jelas (vague) tidak akan menghasilkan tindakan nyata dari audiens.",
            difficulty: 'easy'
        },
        {
            id: "pres-10-010",
            question: "Which of these is a Zinger example?",
            options: ["I'm done now.", "Let's not just predict the future; let's create it.", "Here is my email.", "Maybe we can meet again."],
            correctIndex: 1,
            explanation: "Ini adalah kalimat inspiratif yang menutup presentasi dengan visi yang kuat.",
            difficulty: 'medium'
        },
        {
            id: "pres-10-011",
            question: "The 'Confidence until the Silence' mindset means...?",
            options: ["Screaming in the silence", "Maintaining eye contact and posture for 2 seconds after your last word", "Leaving as fast as possible", "Checking your phone"],
            correctIndex: 1,
            explanation: "Hening setelah penutup adalah momen 'penyerapan' pesan oleh audiens; jangan langsung kabur.",
            difficulty: 'hard'
        },
        {
            id: "pres-10-012",
            question: "What should you do during the 2-second pause after your last word?",
            options: ["Smile and nod slightly while maintaining eye contact", "Sigh in relief", "Look at your watch", "Drink water immediately"],
            correctIndex: 0,
            explanation: "Ini menunjukkan wibawa (stature) dan membuktikan Anda percaya dengan apa yang baru saja Anda katakan.",
            difficulty: 'hard'
        },
        {
            id: "pres-10-013",
            question: "Which is a 'Specific' CTA?",
            options: ["Think about this.", "Please sign the contract by 5 PM tomorrow.", "Maybe give us a call.", "Google some more info."],
            correctIndex: 1,
            explanation: "Ada batas waktu (deadline) dan tindakan (task) yang jelas.",
            difficulty: 'easy'
        },
        {
            id: "pres-10-014",
            question: "Why should you THANK the audience at the very end?",
            options: ["To show you are polite and professional", "To ask for money", "Because you have to", "To make them happy"],
            correctIndex: 0,
            explanation: "Terima kasih yang tulus adalah tanda apresiasi atas waktu dan perhatian (attention currency) mereka.",
            difficulty: 'easy'
        },
        {
            id: "pres-10-015",
            question: "The 'Q&A Sandwich' method helps to...?",
            options: ["Get free lunch", "Maintain control and ensure your message is the final impression", "Make the talk longer", "Avoid questions"],
            correctIndex: 1,
            explanation: "Sandwich: Materi - Q&A - Strong Close. Ini teknik pengunci pesan yang paling ampuh.",
            difficulty: 'hard'
        },
        {
            id: "pres-10-016",
            question: "What is an 'Anti-climax' ending?",
            options: ["Finding out the slides are broken", "Ending on a boring, weak, or insignificant note after a good talk", "Asking a question", "Standing still"],
            correctIndex: 1,
            explanation: "Anti-klimaks membatalkan kesan hebat yang sudah Anda bangun selama presentasi.",
            difficulty: 'medium'
        },
        {
            id: "pres-10-017",
            question: "A Zinger using a 'Quote' works best if...?",
            options: ["It is by your grandmother", "It is 20 lines long", "It perfectly summarizes your Big Idea", "It's about something else"],
            correctIndex: 2,
            explanation: "Kutipan harus menjadi penegas (anchor) dari seluruh ide besar Anda.",
            difficulty: 'medium'
        },
        {
            id: "pres-10-018",
            question: "Should you introduce NEW information in the Closing?",
            options: ["Yes, to surprise them", "No, it confuses the audience and ruins the summary", "Only if it's a joke", "Only the price"],
            correctIndex: 1,
            explanation: "Penutupan adalah untuk mengunci (finalize), bukan untuk membuka topik baru.",
            difficulty: 'hard'
        },
        {
            id: "pres-10-019",
            question: "The tone during 'The Summary' should be...?",
            options: ["Fast and loud", "Slower, deliberate, and authoritative", "Very soft", "High-pitched"],
            correctIndex: 1,
            explanation: "Nada bicara yang melambat (deliberate) memberi tanda bahwa kesimpulan penting sedang dibacakan.",
            difficulty: 'medium'
        },
        {
            id: "pres-10-020",
            question: "What is a 'Vocal Drop' at the end of a sentence?",
            options: ["Losing your voice", "Dropping your pitch to sound more final and certain", "Shouting while speaking", "Whispering"],
            correctIndex: 1,
            explanation: "Menurunkan nada di akhir kalimat memberikan kesan ketegasan (certainty).",
            difficulty: 'hard'
        },
        {
            id: "pres-10-021",
            question: "If there are NO questions during Q&A, you should...?",
            options: ["Look sad and leave", "Directly move to your Strong Close", "Force someone to ask", "Ask a question yourself"],
            correctIndex: 1,
            explanation: "Jangan terpaku pada ketiadaan penanya; langsung berikan penutup Anda yang sudah direncanakan.",
            difficulty: 'medium'
        },
        {
            id: "pres-10-022",
            question: "A Call to Action 'Invites' the audience to. Is it a demand?",
            options: ["Yes, you are the boss", "No, it should be phrased as a powerful invitation or request", "Maybe", "It's a secret"],
            correctIndex: 1,
            explanation: "Undangan atau permintaan profesional lebih persuasif daripada perintah kasar.",
            difficulty: 'medium'
        },
        {
            id: "pres-10-023",
            question: "Which of these is a 'Summary' phrase?",
            options: ["Moving on to...", "Let's begin with...", "To wrap everything up, we've discussed...", "I have a question."],
            correctIndex: 2,
            explanation: "Wrap up (membungkus) adalah sinyal transisi menuju kesimpulan.",
            difficulty: 'easy'
        },
        {
            id: "pres-10-024",
            question: "What should you do with your hands after the final word?",
            options: ["Put them in your pockets", "Hide them behind your back", "Keep them open and still, or at your sides, with confidence", "Scratch your head"],
            correctIndex: 2,
            explanation: "Bahasa tubuh yang tenang di akhir menunjukkan kontrol diri yang luar biasa (composure).",
            difficulty: 'hard'
        },
        {
            id: "pres-10-025",
            question: "The goal of Module 10 is to help you...",
            options: ["Breathe better", "Exit with a 'bang' and a clear purpose", "Make longer slides", "Use better colors"],
            correctIndex: 1,
            explanation: "Tujuannya adalah daya ingat tinggi dan instruksi yang jelas (CTA).",
            difficulty: 'easy'
        },
        {
            id: "pres-10-026",
            question: "If you say 'Any questions?' as your last words, why is it bad?",
            options: ["It's not bad", "It leaves the audience thinking of the question, not your message", "It's too loud", "It's a long sentence"],
            correctIndex: 1,
            explanation: "Selalu akhiri dengan pesan ANDA, bukan pertanyaan orang lain.",
            difficulty: 'hard'
        },
        {
            id: "pres-10-027",
            question: "A Zinger using 'Future Vision' sounds like:",
            options: ["Next year is 2025.", "Imagine our company leading the industry because of today's choice.", "I am tired of working.", "Please check the data again."],
            correctIndex: 1,
            explanation: "Ini menghubungkan tindakan saat ini dengan hasil gemilang di masa depan.",
            difficulty: 'medium'
        },
        {
            id: "pres-10-028",
            question: "Should you practice your closing more than your intro?",
            options: ["No, only intro", "Both are equally important, but closing is the last memory", "No, closing should be spontaneous", "Only the middle part"],
            correctIndex: 1,
            explanation: "Intro menarik mereka masuk, Closing membuat mereka bertindak. Keduanya krusial.",
            difficulty: 'medium'
        },
        {
            id: "pres-10-029",
            question: "What is 'Closure' in communication?",
            options: ["Closing the door", "A satisfying feeling of completeness and resolution", "The end of a relationship", "A type of font"],
            correctIndex: 1,
            explanation: "Audiens merasa puas jika presentasi ditutup dengan struktur yang teratur.",
            difficulty: 'hard'
        },
        {
            id: "pres-10-030",
            question: "Final test: You finished the Q&A. Choose the best last sentence:",
            options: ["Yeah, that's it. Thanks guys.", "I hope my answers were okay.", "Small steps lead to great changes. Let's take that first step together. Thank you.", "Goodbye everyone."],
            correctIndex: 2,
            explanation: "Ini adalah Zinger + CTA + Final Thank You yang sempurna.",
            difficulty: 'medium'
        }
    ]
};
