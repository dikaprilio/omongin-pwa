import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1: TITLE
    {
        type: 'title',
        title: "Asking Better Questions",
        subtitle: "Keeping Conversations Alive",
        teacherNote: "Goal: Transformasi dari interviewer (yes/no questions) menjadi conversationalist (open-ended questions).",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1920"
    },

    // SLIDE 2: THE PROBLEM
    {
        type: 'concept',
        title: "The Conversation Killer",
        subtitle: "Mengapa obrolan sering mati?",
        content: [
            "Kita terlalu sering bertanya yes/no → Jawabannya pendek → Dead end.",
            "Contoh: 'Do you like Jakarta?' → 'Yes.' (Silence)",
            "Seharusnya: 'What do you think about Jakarta?' → Cerita panjang.",
            "Kunci: Gunakan WH- questions (What, Why, How) bukan Do/Are/Can."
        ],
        teacherNote: "Demo: Tanya murid 'Are you busy?' (Yes/No) vs 'What are you working on?' (Cerita)."
    },

    // SLIDE 3: THE YES/NO TRAP
    {
        type: 'comparison',
        title: "Yes/No Questions vs Open Questions",
        subtitle: "Perbedaan yang membuat percakapan hidup atau mati.",
        comparison: [
            { wrong: "Do you like your job?", right: "What do you enjoy most about your job?" },
            { wrong: "Are you from Jakarta?", right: "Where are you originally from?" },
            { wrong: "Did you have a good weekend?", right: "How was your weekend? What did you get up to?" },
            { wrong: "Can you speak English?", right: "How long have you been learning English?" }
        ],
        teacherNote: "WH- questions memaksa jawaban panjang. Yes/No questions memudahkan jawaban singkat."
    },

    // SLIDE 4: THE FOLLOW-UP FORMULA
    {
        type: 'formula',
        title: "The Follow-Up Formula",
        subtitle: "Cara menggali lebih dalam setelah jawaban pertama.",
        formula: "[React] + [Follow-up Question]",
        vocabulary: [
            { term: "That's interesting. Why...?", meaning: "Menunjukkan interest + gali lebih dalam", example: "That's interesting. Why did you choose marketing?" },
            { term: "How did that happen?", meaning: "Minta cerita/detail", example: "You moved to Bali? How did that happen?" },
            { term: "What was that like?", meaning: "Minta deskripsi/pengalaman", example: "You studied abroad? What was that like?" },
            { term: "How do you feel about...?", meaning: "Minta opini/emosi", example: "How do you feel about the new policy?" }
        ],
        teacherNote: "Ini teknik 'Ping Pong' yang sebenarnya: bukan cuma tanya, tapi reaksi dulu baru tanya lagi."
    },

    // SLIDE 5: MICRO-DRILL 1
    {
        type: 'micro-drill',
        title: "Drill: Transform Yes/No to Open",
        subtitle: "Ubah pertanyaan ini menjadi open-ended.",
        mission: [
            "1. 'Do you travel often?' → _______________________________",
            "2. 'Is this your first time here?' → _______________________________",
            "3. 'Do you like spicy food?' → _______________________________",
            "4. 'Are you busy with work?' → _______________________________",
            "Bonus: Buat 2 follow-up questions untuk setiap jawaban."
        ],
        teacherNote: "Contoh jawaban: 1. Where's the most interesting place you've traveled to? 2. What brings you here today?"
    },

    // SLIDE 6: THE TED TECHNIQUE
    {
        type: 'concept',
        title: "The TED Technique",
        subtitle: "Tell me more. Explain. Describe.",
        content: [
            "Tell me more about that. (Minta elaborasi)",
            "Explain how that works. (Minta proses/detail)",
            "Describe what that was like. (Minta pengalaman/sensasi)",
            "Teknik ini bekerja untuk SEMUA topik obrolan."
        ],
        teacherNote: "TED adalah jaring pengaman saat Anda kehabisan ide. Hampir semua jawaban bisa di-TED."
    },

    // SLIDE 7: EMOTIONAL QUESTIONS
    {
        type: 'vocabulary',
        title: "Questions That Spark Emotion",
        subtitle: "Orang suka cerita tentang perasaan dan pengalaman.",
        vocabulary: [
            { term: "What's the best/worst...?", meaning: "Minta superlatif/emosi kuat", example: "What's the best meal you've had this month?" },
            { term: "What's your favorite...?", meaning: "Personal preference", example: "What's your favorite way to relax?" },
            { term: "What are you passionate about?", meaning: "Topik yang mereka cintai", example: "Work aside, what are you passionate about?" },
            { term: "What made you decide to...?", meaning: "Minta cerita decision-making", example: "What made you decide to move here?" },
            { term: "What's something most people don't know about you?", meaning: "Fun fact/personal", example: "Great for breaking the ice!" }
        ],
        teacherNote: "Questions tentang emosi/memori = jawaban yang lebih engaging dan memorable."
    },

    // SLIDE 8: AVOIDING INTERVIEW MODE
    {
        type: 'concept',
        title: "⚠️ Avoiding 'Interview Mode'",
        subtitle: "Jangan jadi polisi yang interogasi.",
        content: [
            "Salah: Tanya terus tanpa sharing apa-apa (20 Questions game).",
            "Benar: Share 1, Ask 1. Balance between giving and taking.",
            "Contoh: 'I just tried this new cafe. Have you been?' (Share + Ask)",
            "Kunci: Obrolan adalah exchange, bukan interrogation."
        ],
        teacherNote: "Demo: 30 detik interogasi murni vs 30 detik exchange yang natural. Murid akan rasakan bedanya."
    },

    // SLIDE 9: TRANSITION PHRASES
    {
        type: 'vocabulary',
        title: "Smooth Transition Phrases",
        subtitle: "Cara pindah topik tanpa terdengar putus.",
        vocabulary: [
            { term: "That reminds me...", meaning: "Menghubungkan dengan topik baru", example: "That reminds me, have you heard about...?" },
            { term: "Speaking of which...", meaning: "Berdasarkan topik yang dibicarakan", example: "Speaking of which, what do you think about...?" },
            { term: "On a different note...", meaning: "Pindah ke topik berbeda", example: "On a different note, how's your project going?" },
            { term: "By the way...", meaning: "Menambahkan/beralih santai", example: "By the way, are you coming to the event?" },
            { term: "While we're on the topic...", meaning: "Maksimalkan topik sekarang", example: "While we're on the topic, I wanted to ask..." }
        ]
    },

    // SLIDE 10: QUESTIONS BY CONTEXT
    {
        type: 'vocabulary',
        title: "Questions for Different Contexts",
        subtitle: "Sesuaikan pertanyaan dengan situasi.",
        vocabulary: [
            { term: "At work", meaning: "Professional", example: "What projects are you working on these days?" },
            { term: "Networking", meaning: "Building connection", example: "How did you get started in this industry?" },
            { term: "Social/Casual", meaning: "Friends/relaxed", example: "What have you been up to lately?" },
            { term: "Breaking the ice", meaning: "Strangers/small talk", example: "How do you know [host's name]?" },
            { term: "Deep conversation", meaning: "Meaningful", example: "What's something you're looking forward to?" }
        ],
        teacherNote: "Penting: Jangan tanya deep questions ke stranger. Match depth dengan relationship level."
    },

    // SLIDE 11: RECOVERY PHRASES
    {
        type: 'vocabulary',
        title: "Recovery Phrases",
        subtitle: "Saat pertanyaan Anda kurang tepat atau awkward.",
        vocabulary: [
            { term: "Sorry, that came out wrong.", meaning: "Koreksi diri", example: "Sorry, that came out wrong. What I meant was..." },
            { term: "I hope that wasn't too personal.", meaning: "Check boundaries", example: "I hope that wasn't too personal. You don't have to answer." },
            { term: "Forget I asked!", meaning: "Batalkan pertanyaan", example: "Forget I asked! Let's talk about something else." },
            { term: "I'm just curious, you don't have to answer.", meaning: "Give out", example: "I'm just curious, you don't have to answer." }
        ],
        teacherNote: "Jangan panik saat salah. Recovery dengan grace justru menunjukkan emotional intelligence."
    },

    // SLIDE 12: ROLEPLAY SCENARIOS
    {
        type: 'roleplay',
        title: "Roleplay: Networking Event",
        subtitle: "Practice asking engaging questions.",
        roleplay: {
            scenario: "You meet a Marketing Director at a business event. Start with small talk, then use at least 3 open-ended questions to keep the conversation flowing.",
            roles: [
                { role: "You", goal: "Ask engaging questions, find common ground, avoid interview mode" },
                { role: "Partner", goal: "Play the Marketing Director. Give short answers initially - make them work for the conversation!" }
            ]
        },
        teacherNote: "Beri feedback: Apakah mereka menggunakan WH- questions? Apakah ada balance share-ask?"
    },

    // SLIDE 13: CASE STUDY
    {
        type: 'case-study',
        title: "Case Study: The Dead Conversation",
        subtitle: "Diagnosis dan perbaiki percakapan ini.",
        caseStudy: {
            scenario: "Percakapan: A: 'Hi, I'm Budi.' B: 'Hi, I'm Sarah.' A: 'Do you work here?' B: 'Yes.' A: 'Do you like it?' B: 'It's okay.' A: 'Is the food good?' B: 'Yeah.' (Awkward silence)",
            template: "ANALYSIS QUESTIONS:\n1. What went wrong? (Yes/no questions = interview mode)\n2. Better questions: 'What do you do here?' 'How do you find working here?'\n3. Follow-up: Ask about their experience, share about yourself\n4. Fix: Share 1, Ask 1 - create exchange, not interrogation"
        },
        teacherNote: "Kesimpulan: Yes/no questions = interview mode. Perlu share + follow-up yang meaningful."
    },

    // SLIDE 14: LISTENING FOR CUES
    {
        type: 'concept',
        title: "Listening for Cues",
        subtitle: "Pertanyaan terbaik datang dari apa yang mereka katakan.",
        content: [
            "Dengarkan kata-kata yang bisa digali lebih dalam.",
            "Contoh: 'I just got back from a business trip.' → Cue: business trip.",
            "Follow-up: 'Oh, where did you go? How was it? For work or pleasure?'",
            "Setiap kalimat mengandung 2-3 potential follow-up questions."
        ],
        teacherNote: "Latih 'active listening' - bukan cuma nunggu giliran bicara."
    },

    // SLIDE 15: COMMON MISTAKES
    {
        type: 'comparison',
        title: "Common Question Mistakes to Avoid",
        subtitle: "Kesalahan yang sering mematikan percakapan.",
        comparison: [
            { wrong: "Asking too many questions in a row (interview mode)", right: "Share 1, Ask 1 - keep it balanced" },
            { wrong: "Asking 'Why?' too aggressively", right: "Use 'What made you...?' or 'How did you...?'" },
            { wrong: "Jumping to deep/personal questions too fast", right: "Match question depth with relationship level" },
            { wrong: "Not listening - just waiting to ask next question", right: "Active listening for cues in their answers" }
        ],
        teacherNote: "Kesadaran akan kesalahan ini akan membantu murid menghindari jebakan umum."
    },

    // SLIDE 16: THE POWER OF SILENCE
    {
        type: 'concept',
        title: "The Power of Silence",
        subtitle: "Jangan takut dengan jeda.",
        content: [
            "Setelah bertanya, berikan waktu untuk berpikir.",
            "Silence ≠ awkward. It shows you're giving them space to think.",
            "Jangan langsung mengisi silence dengan pertanyaan lain.",
            "Sometimes the best follow-up is a nod and eye contact, waiting."
        ],
        teacherNote: "Praktekkan comfortable silence. Banyak orang merasa harus mengisi setiap jeda."
    },

    // SLIDE 17: QUESTION INTONATION
    {
        type: 'vocabulary',
        title: "Question Intonation Tips",
        subtitle: "Cara mengucapkan pertanyaan yang benar.",
        vocabulary: [
            { term: "Rising intonation (?)", meaning: "Untuk yes/no questions", example: "Do you like it? ↗" },
            { term: "Falling intonation", meaning: "Untuk WH- questions", example: "What do you think? ↘" },
            { term: "Tag questions", meaning: "Konfirmasi dengan ekspresi", example: "It's great, isn't it? ↗" },
            { term: "Voice goes up at the end", meaning: "Tunjukkan curiosity", example: "Really? Tell me more! ↗" }
        ],
        teacherNote: "Intonation yang tepat membuat pertanyaan terdengar lebih natural dan engaging."
    },

    // SLIDE 18: MICRO-DRILL 2
    {
        type: 'micro-drill',
        title: "Drill: Follow-Up Practice",
        subtitle: "Buat follow-up untuk jawaban ini.",
        mission: [
            "1. 'I just started a new job last month.' → _______________________________",
            "2. 'I went hiking in the mountains.' → _______________________________",
            "3. 'I'm learning to play the guitar.' → _______________________________",
            "4. 'I moved here from Surabaya.' → _______________________________",
            "Bonus: Gunakan TED technique untuk satu jawaban."
        ],
        teacherNote: "Contoh: 'How's the new job going?' 'What was the highlight of the hike?'"
    },

    // SLIDE 19: REAL WORLD APPLICATION
    {
        type: 'concept',
        title: "Real World Application",
        subtitle: "Kapan dan di mana menggunakan skill ini?",
        content: [
            "Networking events → Build professional connections.",
            "Job interviews → Show interest and stand out as a candidate.",
            "Client meetings → Build rapport and understand needs better.",
            "Social gatherings → Make new friends and deepen relationships.",
            "Team meetings → Encourage participation and collaboration."
        ],
        teacherNote: "Skill ini transferable ke semua area kehidupan - personal dan professional."
    },

    // SLIDE 20: RECAP
    {
        type: 'recap',
        title: "Key Takeaways: Asking Better Questions",
        recap: [
            { context: "Starting conversations", sayThis: "What do you think about...? / What brings you here?", dontSayThis: "Do you like...? / Are you from here?" },
            { context: "Following up", sayThis: "That's interesting. Why...? / How did that happen?", dontSayThis: "Oh. / Okay. / (No follow-up)" },
            { context: "Going deeper", sayThis: "Tell me more / Explain / Describe (TED)", dontSayThis: "Changing topic abruptly" },
            { context: "Balancing conversation", sayThis: "Share 1, Ask 1", dontSayThis: "20 Questions mode (ask only)" },
            { context: "Recovering from mistakes", sayThis: "Sorry, that came out wrong...", dontSayThis: "Pretending nothing happened" }
        ]
    },

    // SLIDE 21: MISSION
    {
        type: 'mission',
        title: "This Week's Mission",
        subtitle: "Practice makes natural.",
        mission: [
            "Have 3 real conversations using WH- questions",
            "Practice the TED technique at least once",
            "Notice when you fall into 'interview mode' and fix it",
            "Use at least 2 transition phrases",
            "Come back with stories of conversations that flowed better!"
        ],
        teacherNote: "Motivasi: Obrolan yang baik = relationships yang baik = opportunities."
    }
];

export const quiz: QuizQuestion[] = [];
