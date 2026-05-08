import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1: TITLE
    {
        type: 'title',
        title: "Constructive Feedback",
        subtitle: "Critiquing Work Without Offending",
        teacherNote: "Goal: Belajar memberikan kritik yang membangun tanpa membuat orang defensif atau tersinggung.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920"
    },

    // SLIDE 2: THE PROBLEM
    {
        type: 'concept',
        title: "The Feedback Dilemma",
        subtitle: "Menyampaikan yang salah tanpa merusak relasi.",
        content: [
            "Orang Indonesia sering menghindar dari konfrontasi → feedback tidak tersampaikan.",
            "Atau terlalu langsung: 'Ini salah' → membuat orang defensive.",
            "Keduanya buruk: Masalah tidak terselesaikan atau relasi rusak.",
            "Butuh balance: Jujur tapi diplomatic."
        ],
        teacherNote: "Tanyakan: 'Pernahkah Anda mendapat feedback yang membuat Anda marah? Apa yang salah dengan caranya?'"
    },

    // SLIDE 3: WRONG VS RIGHT
    {
        type: 'comparison',
        title: "Wrong vs. Right Approach",
        subtitle: "Perbedaan subtle yang besar dampaknya.",
        comparison: [
            { wrong: "This is bad. You need to fix it.", right: "Have you considered a different approach here?" },
            { wrong: "You always make this mistake.", right: "I've noticed this happens sometimes. Let's look at why." },
            { wrong: "This doesn't work at all.", right: "This works, but I think it could be even stronger if..." },
            { wrong: "Why did you do it this way?", right: "What was your thinking behind this approach?" }
        ],
        teacherNote: "Kiri = personal attack. Kanan = focus on the work, not the person."
    },

    // SLIDE 4: THE SANDWICH METHOD
    {
        type: 'concept',
        title: "The Sandwich Method",
        subtitle: "Struktur klasik yang masih efektif.",
        content: [
            "Bread 1 (Positive): Mulai dengan apa yang berhasil.",
            "Filling (Improvement): Sampaikan area yang perlu diperbaiki.",
            "Bread 2 (Encouragement): Tutup dengan support dan keyakinan.",
            "Contoh: 'Great effort on the research. One thing to consider... Overall, solid work!'"
        ],
        teacherNote: "Warning: Sandwich bisa terdengar tidak tulus kalau positif-nya dipaksakan. Authenticity matters."
    },

    // SLIDE 5: THE SBI MODEL
    {
        type: 'formula',
        title: "The SBI Model",
        subtitle: "Situation-Behavior-Impact: Struktur yang jelas.",
        formula: "When [Situation], I noticed [Behavior], and it [Impact].",
        vocabulary: [
            { term: "Situation", meaning: "Konteks spesifik", example: "In this morning's meeting..." },
            { term: "Behavior", meaning: "Apa yang terlihat/dilakukan", example: "...you interrupted the client three times..." },
            { term: "Impact", meaning: "Efeknya", example: "...and they seemed frustrated." }
        ],
        teacherNote: "SBI menghindari judgment. Fokus pada fakta dan dampak, bukan personality."
    },

    // SLIDE 6: SOFTENING PHRASES
    {
        type: 'vocabulary',
        title: "Softening Phrases",
        subtitle: "Kata-kata yang melembutkan kritik.",
        vocabulary: [
            { term: "Have you considered...?", meaning: "Sar tanpa memerintah", example: "Have you considered adding more data here?" },
            { term: "I was wondering if...", meaning: "Tanya dengan soft", example: "I was wondering if this section could be clearer." },
            { term: "One thing to consider...", meaning: "Gentle suggestion", example: "One thing to consider is the timeline." },
            { term: "It might be worth...", meaning: "Rekomendasi ringan", example: "It might be worth double-checking the numbers." },
            { term: "Correct me if I'm wrong...", meaning: "Humble approach", example: "Correct me if I'm wrong, but wasn't the deadline Friday?" },
            { term: "I'm not sure if...", meaning: "Tentative feedback", example: "I'm not sure if this approach aligns with our goal." }
        ]
    },

    // SLIDE 7: POSITIVE FEEDBACK
    {
        type: 'vocabulary',
        title: "Giving Positive Feedback",
        subtitle: "Pujian yang spesifik lebih berarti.",
        vocabulary: [
            { term: "I really appreciated...", meaning: "Appreciate spesifik", example: "I really appreciated how you handled that difficult client." },
            { term: "You did a great job with...", meaning: "Praise spesifik", example: "You did a great job with the presentation visuals." },
            { term: "That was impressive.", meaning: "Admiration", example: "Your analysis was really impressive." },
            { term: "I noticed that you...", meaning: "Recognition", example: "I noticed that you stayed late to finish this. Thank you." },
            { term: "You've really improved in...", meaning: "Acknowledge growth", example: "You've really improved in your public speaking." },
            { term: "That was a clever way to...", meaning: "Praise creativity", example: "That was a clever way to solve the problem." }
        ],
        teacherNote: "Pujian yang spesifik menunjukkan Anda benar-benar memperhatikan."
    },

    // SLIDE 8: RECEIVING FEEDBACK
    {
        type: 'concept',
        title: "Receiving Feedback Gracefully",
        subtitle: "Cara menerima kritik tanpa defensif.",
        content: [
            "Listen fully tanpa memotong atau membuat alasan.",
            "Terima dengan 'Thank you for the feedback' (meski sulit).",
            "Ask clarifying questions: 'Can you give me a specific example?'",
            "Jangan take it personally - feedback tentang pekerjaan, bukan Anda sebagai orang."
        ],
        teacherNote: "Roleplay: Beri feedback sulit dan latih mereka untuk menerima dengan grace."
    },

    // SLIDE 9: RESPONSE PHRASES
    {
        type: 'vocabulary',
        title: "Responding to Feedback",
        subtitle: "Frasa untuk menerima dan bertindak.",
        vocabulary: [
            { term: "Thank you for pointing that out.", meaning: "Acknowledge", example: "Thank you for pointing that out. I'll fix it." },
            { term: "That's a fair point.", meaning: "Agree dengan valid", example: "That's a fair point. I hadn't considered that." },
            { term: "I'll work on that.", meaning: "Commit to improve", example: "I'll work on being more concise in meetings." },
            { term: "Can you clarify what you mean by...?", meaning: "Minta detail", example: "Can you clarify what you mean by 'more professional'?" },
            { term: "I see what you're saying.", meaning: "Acknowledge understanding", example: "I see what you're saying. Let me revise it." },
            { term: "Do you have any suggestions?", meaning: "Minta solusi", example: "Do you have any suggestions for improvement?" }
        ]
    },

    // SLIDE 10: EMAIL FEEDBACK
    {
        type: 'vocabulary',
        title: "Email Feedback Phrases",
        subtitle: "Tulis feedback dengan tepat.",
        vocabulary: [
            { term: "Overall good work, but...", meaning: "Mulai positif", example: "Overall good work, but I'd suggest a few changes." },
            { term: "A couple of points to consider:", meaning: "List feedback", example: "A couple of points to consider: 1... 2..." },
            { term: "Please see my comments below.", meaning: "Refer to annotations", example: "Please see my comments below and let me know if you have questions." },
            { term: "Let's discuss this further.", meaning: "Invite conversation", example: "This section needs work. Let's discuss this further." },
            { term: "Looking forward to the revision.", meaning: "Close dengan positif", example: "Looking forward to seeing your revision." }
        ]
    },

    // SLIDE 11: CASE STUDY
    {
        type: 'case-study',
        title: "Case Study: The Bad Report",
        subtitle: "Beri feedback pada situasi ini.",
        caseStudy: {
            scenario: "Your team member Rina submitted a report with factual errors, formatting issues, and missed the main point. She worked hard and seems proud. You need to give constructive feedback.",
            template: "FEEDBACK APPROACH:\n1. Open: 'Thank you for your effort. I can see you put a lot of work into this.'\n2. Specific: 'One area to strengthen is data accuracy. Could you double-check figures on page 3?'\n3. Use SBI: 'In the summary (Situation), the conclusion differs from data (Behavior), which might confuse stakeholders (Impact).'\n4. Close: 'Let's discuss how I can support you. Would a template help?'"
        },
        teacherNote: "Bandingkan pendekatan berbeda. Mana yang paling efektif dan diplomatic?"
    },

    // SLIDE 12: MICRO-DRILL
    {
        type: 'micro-drill',
        title: "Rewrite These Feedback Statements",
        subtitle: "Ubah dari harsh menjadi constructive.",
        mission: [
            "1. 'Your presentation was boring.' → _______________________________",
            "2. 'You never listen to instructions.' → _______________________________",
            "3. 'This design is terrible.' → _______________________________",
            "4. 'You're always late.' → _______________________________",
            "Bonus: Write a sandwich feedback for a decent but imperfect piece of work."
        ],
        teacherNote: "Contoh: 'The presentation covered good points, but adding more visuals could make it more engaging.'"
    },

    // SLIDE 13: CULTURAL CONSIDERATIONS
    {
        type: 'concept',
        title: "Cultural Considerations",
        subtitle: "Feedback di konteks Indonesia.",
        content: [
            "Budaya Indonesia: Saving face itu penting.",
            "Jangan beri feedback di depan umum - private is better.",
            "Gunakan bahasa yang lebih indirect dan lembut.",
            "Tetap jujur, tapi dengan consideration untuk perasaan."
        ],
        teacherNote: "Balance: Kita perlu adaptasi budaya lokal tapi tetap efektif dalam komunikasi bisnis global."
    },

    // SLIDE 14: ROLEPLAY
    {
        type: 'roleplay',
        title: "Roleplay: Performance Review",
        subtitle: "Practice giving balanced feedback.",
        roleplay: {
            scenario: "You're a manager giving a quarterly review to your employee. They've done well overall but need to improve their time management and communication with the team. Use the SBI model and sandwich method.",
            roles: [
                { role: "Manager", goal: "Give specific, balanced feedback using SBI. Be supportive but clear about improvements needed." },
                { role: "Employee", goal: "Listen openly. Ask questions if unclear. Practice receiving feedback gracefully." }
            ]
        },
        teacherNote: "Listen for: Apakah mereka menggunakan softening phrases? Apakah feedback spesifik?"
    },

    // NEW SLIDE 15: COMMON MISTAKES TO AVOID
    {
        type: 'comparison',
        title: "Feedback Mistakes to Avoid",
        subtitle: "Kesalahan umum yang merusak komunikasi.",
        comparison: [
            { wrong: "The 'Feedback Sandwich' yang dipaksakan", right: "Be genuine - jangan forced positivity" },
            { wrong: "Feedback di depan orang lain", right: "Private conversations build trust" },
            { wrong: "Vague: 'Be better next time'", right: "Specific: 'Add more data to support your claim'" },
            { wrong: "Attacking personality: 'You're careless'", right: "Focus on behavior: 'This error occurred twice'" }
        ],
        teacherNote: "Diskusikan: Pernahkah mereka mengalami/melakukan kesalahan ini?"
    },

    // NEW SLIDE 16: FEEDBACK TEMPLATES
    {
        type: 'formula',
        title: "Ready-to-Use Feedback Templates",
        subtitle: "Formula yang bisa langsung dipakai.",
        formula: "I appreciate [strength]. One area to develop is [specific improvement]. I believe you can [encouragement].",
        vocabulary: [
            { term: "Appreciation Template", meaning: "Untuk praise", example: "I want to highlight how well you handled..." },
            { term: "Improvement Template", meaning: "Untuk constructive", example: "I've noticed [behavior]. How can we work on this together?" },
            { term: "Check-in Template", meaning: "Follow-up", example: "How are you feeling about the changes we discussed?" }
        ],
        teacherNote: "Encourage students to adapt these templates to their own voice."
    },

    // NEW SLIDE 17: PRACTICE SCENARIOS - MICRO DRILL
    {
        type: 'micro-drill',
        title: "Quick Feedback Scenarios",
        subtitle: "Beri feedback dalam 30 detik.",
        mission: [
            "Scenario 1: Your colleague submitted sloppy work with many typos.",
            "Scenario 2: Your teammate missed an important deadline.",
            "Scenario 3: Someone gave a confusing presentation to clients.",
            "Scenario 4: Your peer interrupts others frequently in meetings."
        ],
        teacherNote: "Time them! Quick thinking under pressure is key skill. Use SBI model."
    },

    // NEW SLIDE 18: CULTURAL CONSIDERATIONS FOR INDONESIA
    {
        type: 'concept',
        title: "Navigating Indonesian Workplace Culture",
        subtitle: "Feedback strategies that work locally.",
        content: [
            "Gunakan 'kita' instead of 'kamu/kamu' untuk mengurangi blame: 'Mungkin kita bisa...'",
            "Beri feedback setelah acara formal selesai, bukan saat berlangsung.",
            "Pahami hierarki - feedback ke senior memerlukan lebih banyak softening.",
            "Baca non-verbal cues: diam bisa berarti disagreement atau discomfort."
        ],
        teacherNote: "Share real examples: How do they currently give feedback in their workplace?"
    },

    // NEW SLIDE 19: MORE SOFTENING PHRASES
    {
        type: 'vocabulary',
        title: "Advanced Softening Phrases",
        subtitle: "Ekspresi tambahan untuk kritik yang halus.",
        vocabulary: [
            { term: "What do you think about...?", meaning: "Invite their opinion first", example: "What do you think about approaching it this way?" },
            { term: "I might suggest...", meaning: "Humble recommendation", example: "I might suggest breaking this into smaller sections." },
            { term: "Just a thought...", meaning: "Casual suggestion", example: "Just a thought - have we considered the budget impact?" },
            { term: "Perhaps we could...", meaning: "Collaborative tone", example: "Perhaps we could review this together?" },
            { term: "Small tweak suggestion...", meaning: "Minimize the criticism", example: "Small tweak suggestion: the font size could be larger." },
            { term: "From my perspective...", meaning: "Personalize without attacking", example: "From my perspective, this point needs more evidence." }
        ]
    },

    // NEW SLIDE 20: EMAIL FEEDBACK EXAMPLES
    {
        type: 'concept',
        title: "Email Feedback: Full Examples",
        subtitle: "Pelajari struktur email yang efektif.",
        content: [
            "Subject: Feedback on [Project Name] - Great Foundation, Minor Tweaks",
            "Open: Thanks for your hard work on this. The research is solid.",
            "Body: A couple of areas to strengthen: 1) [specific point] 2) [specific point]",
            "Close: Let me know if you'd like to discuss. Looking forward to the next version!"
        ],
        teacherNote: "Compare: Email yang ramah vs terlalu formal. Tone matters in written feedback."
    },

    // NEW SLIDE 21: WHEN FEEDBACK GOES WRONG
    {
        type: 'case-study',
        title: "Case Study: Defensive Reaction",
        subtitle: "When your feedback triggers defensiveness.",
        caseStudy: {
            scenario: "You gave feedback about a missed deadline. Your colleague became defensive: 'You don't understand how busy I am!' and 'No one else complained!' The conversation became tense.",
            template: "DE-ESCALATION:\n1. Immediate: 'I hear you. I know you're working hard.'\n2. Reset: 'Let's take a step back. My goal is to support you, not criticize.'\n3. Solution: 'How can we ensure the next deadline is manageable?'\n4. Pause: 'Maybe we can continue this tomorrow when we're less pressed?'"
        },
        teacherNote: "Practice de-escalation phrases: 'I hear you' and 'Let's find a solution together.'"
    },

    // NEW SLIDE 22: ROLEPLAY - PEER FEEDBACK
    {
        type: 'roleplay',
        title: "Roleplay: Peer-to-Peer Feedback",
        subtitle: "Giving feedback sideways, not downward.",
        roleplay: {
            scenario: "You're working on a group project. One peer isn't pulling their weight and their contributions are low quality. You need to address this without damaging the working relationship or sounding bossy.",
            roles: [
                { role: "Concerned Peer", goal: "Address the issue diplomatically. Focus on team success, not blame." },
                { role: "Defensive Peer", goal: "Feel attacked initially, then open up when approached correctly." }
            ]
        },
        teacherNote: "Peer feedback is hardest because there's no authority. Emphasize 'we' language."
    },

    // SLIDE 23: RECAP (FIXED)
    {
        type: 'recap',
        title: "Key Takeaways: Constructive Feedback",
        recap: [
            { context: "Saat memberi kritik", sayThis: "Focus pada pekerjaan, bukan personality", dontSayThis: "'You're wrong' atau personal attacks" },
            { context: "Menyampaikan masalah spesifik", sayThis: "Gunakan SBI: Situation-Behavior-Impact", dontSayThis: "General criticism tanpa contoh" },
            { context: "Melembutkan kritik", sayThis: "'Have you considered...?' atau 'One thing to consider...'", dontSayThis: "Direct commands atau harsh language" },
            { context: "Struktur feedback", sayThis: "Sandwich method: Positive-Improvement-Encouragement", dontSayThis: "Hanya fokus pada yang salah" },
            { context: "Menerima feedback", sayThis: "'Thank you' dan ask clarifying questions", dontSayThis: "Defensive atau making excuses" },
            { context: "Konteks Indonesia", sayThis: "Private, indirect, consider saving face", dontSayThis: "Public criticism atau too direct" }
        ]
    },

    // SLIDE 24: MISSION
    {
        type: 'mission',
        title: "This Week's Mission",
        subtitle: "Practice the art of feedback.",
        mission: [
            "Give one piece of positive feedback setiap hari (spesifik!)",
            "Practice giving constructive feedback dalam situasi aman",
            "Terima feedback tanpa defensif - notice your reaction",
            "Write an email giving feedback on a document/project",
            "Reflect: Bagaimana feedback style Anda berubah?"
        ],
        teacherNote: "Feedback adalah skill leadership. Semakin baik Anda memberikannya, semakin baik Anda sebagai leader."
    }
];

export const quiz: QuizQuestion[] = [];
