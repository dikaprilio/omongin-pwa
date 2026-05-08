import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1: TITLE
    {
        type: 'title',
        title: "Giving Opinions",
        subtitle: "Brainstorming and Advising Colleagues",
        teacherNote: "Goal: Dari 'I think...' yang generic menjadi varied, nuanced expressions untuk berbagi pandangan dan advice.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920"
    },

    // SLIDE 2: THE PROBLEM
    {
        type: 'concept',
        title: "The 'I Think' Habit",
        subtitle: "Mengapa overusing 'I think' melemahkan opini Anda?",
        content: [
            "Orang Indonesia sering overuse 'I think' di setiap kalimat.",
            "Hasilnya: Opini terdengar tidak confident atau terlalu tentative.",
            "Terkadang terlalu directive: 'You must...' 'You should...' (terdengar bossy).",
            "Butuh variety: Strong opinions vs. tentative suggestions."
        ],
        teacherNote: "Challenge: Buat paragraf tanpa menggunakan 'I think' sama sekali."
    },

    // SLIDE 3: BASIC OPINIONS
    {
        type: 'vocabulary',
        title: "Basic Opinion Phrases",
        subtitle: "Alternatif dari 'I think'.",
        vocabulary: [
            { term: "In my opinion...", meaning: "Standard formal", example: "In my opinion, we should prioritize quality." },
            { term: "I believe that...", meaning: "Stronger than 'think'", example: "I believe that this is the right decision." },
            { term: "From my point of view...", meaning: "Personal perspective", example: "From my point of view, the risks are too high." },
            { term: "As I see it...", meaning: "Direct observation", example: "As I see it, we have two viable options." },
            { term: "It seems to me that...", meaning: "Tentative/observational", example: "It seems to me that we're missing the bigger picture." },
            { term: "My view is that...", meaning: "Direct statement", example: "My view is that we need more time." }
        ]
    },

    // SLIDE 4: STRONG OPINIONS
    {
        type: 'vocabulary',
        title: "Strong Opinions",
        subtitle: "Ekspresikan dengan conviction.",
        vocabulary: [
            { term: "I'm convinced that...", meaning: "Very certain", example: "I'm convinced that this will succeed." },
            { term: "I strongly believe that...", meaning: "Emphatic", example: "I strongly believe we need to act now." },
            { term: "I have no doubt that...", meaning: "Absolute certainty", example: "I have no doubt that he's the right person." },
            { term: "It's obvious that...", meaning: "Clear to everyone", example: "It's obvious that this approach works better." },
            { term: "I'm certain that...", meaning: "Confident", example: "I'm certain this investment will pay off." },
            { term: "There's no question that...", meaning: "Undeniable", example: "There's no question that quality matters." }
        ]
    },

    // SLIDE 5: TENTATIVE OPINIONS
    {
        type: 'vocabulary',
        title: "Tentative Opinions",
        subtitle: "Saat Anda tidak 100% yakin.",
        vocabulary: [
            { term: "I tend to think that...", meaning: "Lean towards", example: "I tend to think that waiting is better." },
            { term: "I'm inclined to think that...", meaning: "Gentle leaning", example: "I'm inclined to think we should decline." },
            { term: "I get the feeling that...", meaning: "Intuition", example: "I get the feeling that they're not interested." },
            { term: "If you ask me...", meaning: "Casual opinion", example: "If you ask me, it's not worth the risk." },
            { term: "I suppose...", meaning: "Hesitant", example: "I suppose we could try that approach." },
            { term: "I guess...", meaning: "Uncertain (casual)", example: "I guess that might work." }
        ]
    },

    // SLIDE 6: GIVING ADVICE
    {
        type: 'vocabulary',
        title: "Giving Advice Softly",
        subtitle: "Dari 'You should' menjadi lebih diplomatic.",
        vocabulary: [
            { term: "You might want to...", meaning: "Gentle suggestion", example: "You might want to consider the timing." },
            { term: "Have you thought about...?", meaning: "Suggest indirectly", example: "Have you thought about approaching them first?" },
            { term: "It might be a good idea to...", meaning: "Tentative advice", example: "It might be a good idea to get a second opinion." },
            { term: "I'd recommend...", meaning: "Personal recommendation", example: "I'd recommend waiting until next quarter." },
            { term: "If I were you, I'd...", meaning: "Hypothetical advice", example: "If I were you, I'd focus on the basics first." },
            { term: "One option would be to...", meaning: "Present choice", example: "One option would be to outsource this." }
        ]
    },

    // SLIDE 7: STRONGER ADVICE
    {
        type: 'vocabulary',
        title: "Stronger Advice",
        subtitle: "Saat situasi memerlukan urgency.",
        vocabulary: [
            { term: "I strongly advise you to...", meaning: "Urgent advice", example: "I strongly advise you to reconsider." },
            { term: "You really ought to...", meaning: "Moral obligation", example: "You really ought to tell them the truth." },
            { term: "I'd urge you to...", meaning: "Strong encouragement", example: "I'd urge you to accept this offer." },
            { term: "Whatever you do, don't...", meaning: "Strong warning", example: "Whatever you do, don't sign without reading." },
            { term: "You can't afford to...", meaning: "Highlight risk", example: "You can't afford to ignore this problem." },
            { term: "Make sure you...", meaning: "Important reminder", example: "Make sure you get everything in writing." }
        ]
    },

    // SLIDE 8: SUGGESTING IDEAS
    {
        type: 'vocabulary',
        title: "Making Suggestions",
        subtitle: "Brainstorming dengan tim.",
        vocabulary: [
            { term: "What if we...?", meaning: "Hypothetical suggestion", example: "What if we tried a different approach?" },
            { term: "How about...?", meaning: "Casual suggestion", example: "How about extending the deadline?" },
            { term: "Why don't we...?", meaning: "Invitational", example: "Why don't we ask for feedback first?" },
            { term: "Perhaps we could...", meaning: "Tentative", example: "Perhaps we could split the project into phases." },
            { term: "I suggest we...", meaning: "Direct suggestion", example: "I suggest we postpone the meeting." },
            { term: "Let's consider...", meaning: "Open exploration", example: "Let's consider all the options first." }
        ]
    },

    // SLIDE 9: SPECULATING
    {
        type: 'vocabulary',
        title: "Speculating and Hypothesizing",
        subtitle: "Membicarakan kemungkinan.",
        vocabulary: [
            { term: "It's likely that...", meaning: "High probability", example: "It's likely that sales will increase." },
            { term: "There's a chance that...", meaning: "Possibility", example: "There's a chance that they'll say no." },
            { term: "I wouldn't be surprised if...", meaning: "Expectation", example: "I wouldn't be surprised if he resigned." },
            { term: "It looks like...", meaning: "Observation", example: "It looks like we're going to miss the deadline." },
            { term: "Chances are...", meaning: "Probability", example: "Chances are they won't agree." },
            { term: "I doubt that...", meaning: "Skepticism", example: "I doubt that will happen anytime soon." }
        ]
    },

    // SLIDE 10: PRIORITIZING
    {
        type: 'vocabulary',
        title: "Expressing Priorities",
        subtitle: "Menyatakan apa yang paling penting.",
        vocabulary: [
            { term: "The most important thing is...", meaning: "Top priority", example: "The most important thing is customer satisfaction." },
            { term: "Our priority should be...", meaning: "Team focus", example: "Our priority should be fixing the bugs." },
            { term: "We need to focus on...", meaning: "Concentration", example: "We need to focus on quality over speed." },
            { term: "The key issue here is...", meaning: "Main concern", example: "The key issue here is budget constraints." },
            { term: "What matters most is...", meaning: "Essential element", example: "What matters most is getting it right." },
            { term: "Above all...", meaning: "Supreme priority", example: "Above all, we must maintain our reputation." }
        ]
    },

    // SLIDE 11: EXPRESSING CONCERN
    {
        type: 'vocabulary',
        title: "Expressing Concern or Doubt",
        subtitle: "Kekhawatiran tanpa terdengar negatif.",
        vocabulary: [
            { term: "I'm concerned that...", meaning: "Gentle worry", example: "I'm concerned that we might be moving too fast." },
            { term: "I have reservations about...", meaning: "Formal doubt", example: "I have reservations about this approach." },
            { term: "To be honest, I'm not sure...", meaning: "Frank doubt", example: "To be honest, I'm not sure this will work." },
            { term: "I'm worried that...", meaning: "Direct concern", example: "I'm worried that we're overlooking something." },
            { term: "That raises a red flag for me.", meaning: "Warning signal", example: "The lack of experience raises a red flag." },
            { term: "I have mixed feelings about...", meaning: "Ambivalence", example: "I have mixed feelings about this merger." }
        ]
    },

    // SLIDE 12: MICRO-DRILL
    {
        type: 'micro-drill',
        title: "Rewrite Without 'I Think'",
        subtitle: "Gunakan variasi phrases.",
        mission: [
            "1. 'I think we should hire more people.' → _______________________________",
            "2. 'I think this is a bad idea.' → _______________________________",
            "3. 'I think the deadline is unrealistic.' → _______________________________",
            "4. 'I think we need to change strategy.' → _______________________________",
            "Bonus: Write one strong opinion and one tentative opinion about your industry."
        ],
        teacherNote: "Contoh: 'In my view, we should hire more people.' / 'I'm inclined to think this might not work.'"
    },

    // SLIDE 13: CASE STUDY
    {
        type: 'case-study',
        title: "Case Study: Strategic Decision",
        subtitle: "Beri opini dan advice.",
        caseStudy: {
            scenario: "SITUATION: Your company is considering acquiring a competitor. Target has great technology but is struggling financially. Deal cost: $5M. Some board members are excited; others are worried.",
            template: "OPINION FRAMEWORK:\n1. Strong opinion in favor: 'I'm convinced this acquisition would give us a significant technological edge. The IP alone is worth the investment.'\n2. Diplomatic reservation: 'I see the potential, but I have reservations about the financial liabilities we're inheriting.'\n3. Advice to CEO: 'I'd recommend conducting deeper due diligence on their debt structure before proceeding.'\n4. Alternative: 'What if we consider a strategic partnership instead of a full acquisition? This would reduce our risk exposure.'"
        },
        teacherNote: "Ini latihan real-world yang sering terjadi di level executive."
    },

    // SLIDE 14: ROLEPLAY
    {
        type: 'roleplay',
        title: "Roleplay: Brainstorming Session",
        subtitle: "Practice giving varied opinions.",
        roleplay: {
            scenario: "Your team is brainstorming ideas for a new marketing campaign. Practice using at least 3 different opinion phrases, 2 suggestion phrases, and 2 advice phrases. Express both support and concerns for different ideas.",
            roles: [
                { role: "You", goal: "Contribute ideas. Give opinions using variety. Advise on feasibility." },
                { role: "Partner", goal: "Pitch ideas. Ask for your opinion. Challenge you to defend your views." }
            ]
        },
        teacherNote: "Dengarkan untuk: Variasi phrases, balance tentativeness vs. conviction, diplomatic delivery."
    },

    // SLIDE 15: I THINK ALTERNATIVES CHART
    {
        type: 'vocabulary',
        title: "'I Think' Alternatives Chart",
        subtitle: "Pilih expression berdasarkan tingkat kekuatan opini.",
        vocabulary: [
            { term: "Formal & Neutral", meaning: "In my opinion / From my point of view", example: "In my opinion, this is the best approach." },
            { term: "Strong & Confident", meaning: "I'm convinced / I strongly believe", example: "I'm convinced this strategy will work." },
            { term: "Tentative & Cautious", meaning: "I tend to think / I'm inclined to think", example: "I tend to think we need more data." },
            { term: "Observational", meaning: "It seems to me / As I see it", example: "It seems to me that we're rushing this." },
            { term: "Personal Belief", meaning: "I believe / I feel that", example: "I believe this is the right direction." },
            { term: "Casual & Conversational", meaning: "If you ask me / The way I see it", example: "If you ask me, it's not worth the risk." }
        ],
        teacherNote: "Matching strength dengan situasi adalah keterampilan komunikasi yang matang."
    },

    // SLIDE 16: HEDGING LANGUAGE
    {
        type: 'concept',
        title: "Hedging Language",
        subtitle: "Cara melembutkan opini tanpa melemahkannya.",
        content: [
            "Hedging memungkinkan Anda berbagi opini tanpa terdengar terlalu absolut.",
            "Penggunaan: Saat Anda ingin terbuka terhadap diskusi atau belum punya semua data.",
            "Contoh hedging words: 'perhaps', 'possibly', 'seems', 'appears', 'suggests'.",
            "Contoh phrases: 'It could be argued that...', 'One might say that...', 'It appears that...'",
            "Balance adalah kunci: Terlalu banyak hedging = tidak confident. Terlalu sedikit = terdengar arogan."
        ],
        teacherNote: "Hedging adalah skill advanced - menunjukkan intellectual humility sambil tetap berkontribusi."
    },

    // SLIDE 17: OPINION IN WRITING VS SPEAKING
    {
        type: 'comparison',
        title: "Opinion: Writing vs Speaking",
        subtitle: "Bedanya ekspresi opini di email dan percakapan.",
        comparison: [
            { wrong: "I think this is wrong. (Email - too blunt)", right: "I would argue that this approach may not be optimal." },
            { wrong: "You should change this. (Email - too direct)", right: "You may wish to consider revising this section." },
            { wrong: "This is bad. (Speaking - too harsh)", right: "I'm not entirely convinced this is the best way forward." },
            { wrong: "I'm sure about this. (Writing - needs softening)", right: "I am fairly confident that this is the case." }
        ],
        teacherNote: "Writing memerlukan lebih banyak softening karena tidak ada tone of voice atau body language."
    },

    // SLIDE 18: BRAINSTORMING FACILITATION
    {
        type: 'concept',
        title: "Brainstorming Facilitation",
        subtitle: "Cara mengelola diskusi tim dengan efektif.",
        content: [
            "Rule #1: No judgment pada fase ideation. Gunakan phrases seperti 'That's interesting...'",
            "Rule #2: Build on ideas. Gunakan 'Yes, and...' bukan 'Yes, but...'",
            "Rule #3: Invite quiet members. 'Sarah, what's your take on this?'",
            "Rule #4: Summarize periodically. 'So far I'm hearing three main ideas...'",
            "Rule #5: Manage dominant voices. 'Thanks John, let's hear from others too.'"
        ],
        teacherNote: "Good facilitators make everyone feel heard while keeping discussion productive."
    },

    // SLIDE 19: PRACTICE GIVING OPINIONS
    {
        type: 'micro-drill',
        title: "Practice: Give Your Opinion",
        subtitle: "Respond to these statements with appropriate opinion phrases.",
        mission: [
            "Statement: 'Remote work is more productive than office work.' (Give a tentative opinion)",
            "Statement: 'We should increase the marketing budget by 50%.' (Give a strong opinion against)",
            "Statement: 'AI will replace most jobs in 10 years.' (Express concern diplomatically)",
            "Statement: 'We need to launch this product immediately.' (Give advice softly)",
            "Bonus: Create one original statement and respond to it with 3 different opinion strengths."
        ],
        teacherNote: "Variety adalah tanda sophistication. Dengarkan apakah student bisa menyesuaikan strength dengan konteks."
    },

    // SLIDE 20: HANDLING PUSHBACK
    {
        type: 'vocabulary',
        title: "Handling Pushback on Your Opinion",
        subtitle: "Cara merespons ketika opini Anda ditantang.",
        vocabulary: [
            { term: "I see your point, and...", meaning: "Acknowledge then defend", example: "I see your point, and I'd add that..." },
            { term: "That's a fair objection.", meaning: "Validate their concern", example: "That's a fair objection. Let me clarify..." },
            { term: "You may be right, but...", meaning: "Partial concession", example: "You may be right, but consider this..." },
            { term: "I understand your concern.", meaning: "Show empathy", example: "I understand your concern. Here's another angle..." },
            { term: "Can you tell me more about...?", meaning: "Ask for elaboration", example: "Can you tell me more about your hesitation?" },
            { term: "Let's agree to disagree.", meaning: "End debate gracefully", example: "We have different views. Let's agree to disagree." }
        ],
        teacherNote: "Kemampuan mempertahankan opini dengan grace adalah tanda komunikator yang matang."
    },

    // SLIDE 21: RECAP
    {
        type: 'recap',
        title: "Key Takeaways: Giving Opinions",
        recap: [
            { context: "Variety", sayThis: "Use In my opinion / I'm convinced / I tend to think", dontSayThis: "Overusing 'I think' repeatedly" },
            { context: "Strong Opinion", sayThis: "I'm convinced that / I strongly believe / There's no question", dontSayThis: "I think maybe probably this is good" },
            { context: "Tentative Opinion", sayThis: "I tend to think / I'm inclined to think / It seems to me", dontSayThis: "I don't know, maybe, I'm not sure but..." },
            { context: "Giving Advice", sayThis: "You might want to / I'd recommend / Have you thought about", dontSayThis: "You should / You must / You have to" },
            { context: "Making Suggestions", sayThis: "What if we / How about / Perhaps we could", dontSayThis: "We must do this / Do this now" },
            { context: "Handling Pushback", sayThis: "I see your point / That's fair / Can you tell me more", dontSayThis: "No, you're wrong / That's not right" }
        ]
    },

    // SLIDE 22: MISSION
    {
        type: 'mission',
        title: "This Week's Mission",
        subtitle: "Expand your opinion vocabulary.",
        mission: [
            "Count how many times you say 'I think' - then reduce it",
            "Use 3 new opinion phrases setiap hari",
            "Give advice menggunakan 'You might want to' alih-alih 'You should'",
            "Practice expressing strong conviction on something you care about",
            "Notice how leaders express opinions - what phrases do they use?"
        ],
        teacherNote: "Opinion expression adalah core leadership skill. Variasi menunjukkan sophistication."
    }
];

export const quiz: QuizQuestion[] = [];
