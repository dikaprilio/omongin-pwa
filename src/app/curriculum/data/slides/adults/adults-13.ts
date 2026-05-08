import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1: TITLE
    {
        type: 'title',
        title: "Agreeing & Disagreeing",
        subtitle: "Debating Without Fighting",
        teacherNote: "Goal: Dari 'I am agree' menjadi nuanced expressions untuk setuju dan tidak setuju dengan sopan.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920"
    },

    // SLIDE 2: THE PROBLEM
    {
        type: 'concept',
        title: "The 'I Am Agree' Error",
        subtitle: "Grammar dan nuansa yang sering salah.",
        content: [
            "'I am agree' adalah error paling umum. Correct: 'I agree' (no 'am').",
            "Orang Indonesia sering terlalu langsung saat tidak setuju.",
            "Atau terlalu pasif: tidak berani mengekspresikan ketidaksetujuan.",
            "Butuh balance: Jujur tapi diplomatic."
        ],
        teacherNote: "Koreksi: 'Agree' adalah verb, bukan adjective. Tidak perlu 'to be'."
    },

    // SLIDE 3: SIMPLE AGREEMENT
    {
        type: 'vocabulary',
        title: "Simple Agreement",
        subtitle: "Cara setuju yang natural.",
        vocabulary: [
            { term: "I agree.", meaning: "Basic agreement", example: "Yes, I agree with that point." },
            { term: "I think so too.", meaning: "Setuju dengan opini", example: "I think so too. That's a valid concern." },
            { term: "That's a good point.", meaning: "Appreciate argument", example: "That's a good point. I hadn't considered that." },
            { term: "Exactly! / Absolutely!", meaning: "Strong agreement", example: "Exactly! That's precisely what I mean." },
            { term: "I couldn't agree more.", meaning: "Total agreement", example: "I couldn't agree more. We need to act now." },
            { term: "You're right.", meaning: "Acknowledge correctness", example: "You're right about the timeline being tight." }
        ]
    },

    // SLIDE 4: ENTHUSIASTIC AGREEMENT
    {
        type: 'vocabulary',
        title: "Enthusiastic Agreement",
        subtitle: "Setuju dengan energy dan conviction.",
        vocabulary: [
            { term: "I'm with you on that.", meaning: "Solidarity", example: "I'm with you on that decision." },
            { term: "That makes sense.", meaning: "Logical agreement", example: "That makes sense from a business perspective." },
            { term: "My thoughts exactly!", meaning: "Setuju banget", example: "My thoughts exactly! You took the words out of my mouth." },
            { term: "No doubt about it.", meaning: "Pasti setuju", example: "No doubt about it - this is the right move." },
            { term: "I'm on the same page.", meaning: "Sepaham", example: "I'm on the same page regarding the budget." },
            { term: "Tell me about it!", meaning: "Iya kan! (colloquial)", example: "Tell me about it! I've been saying that for years." }
        ]
    },

    // SLIDE 5: PARTIAL AGREEMENT
    {
        type: 'vocabulary',
        title: "Partial Agreement",
        subtitle: "Setuju sebagian dengan nuansa.",
        vocabulary: [
            { term: "I see your point, but...", meaning: "Setuju sebagian", example: "I see your point, but I think we need more data." },
            { term: "I agree to some extent.", meaning: "Setuju tapi dengan reserve", example: "I agree to some extent, though there are risks." },
            { term: "That's true, however...", meaning: "Acknowledge lalu kontras", example: "That's true, however, we must consider the cost." },
            { term: "I partly agree with you.", meaning: "Setuju sebagian", example: "I partly agree with you on the strategy." },
            { term: "You have a point, but...", meaning: "Valid tapi incomplete", example: "You have a point, but there's another angle to consider." }
        ]
    },

    // SLIDE 6: POLITE DISAGREEMENT
    {
        type: 'vocabulary',
        title: "Polite Disagreement",
        subtitle: "Tidak setuju tanpa konfrontasi.",
        vocabulary: [
            { term: "I see your point, but...", meaning: "Soft disagreement", example: "I see your point, but I have a different view." },
            { term: "I understand where you're coming from...", meaning: "Empathy first", example: "I understand where you're coming from, however..." },
            { term: "I'm not sure I agree with that.", meaning: "Gentle disagreement", example: "I'm not sure I agree with that approach." },
            { term: "I take your point, but...", meaning: "Acknowledge lalu disagree", example: "I take your point, but the data suggests otherwise." },
            { term: "Wouldn't it be better to...?", meaning: "Suggest alternative", example: "Wouldn't it be better to wait until next quarter?" },
            { term: "Have you considered...?", meaning: "Challenge dengan question", example: "Have you considered the impact on our team?" }
        ]
    },

    // SLIDE 7: STRONG DISAGREEMENT
    {
        type: 'vocabulary',
        title: "Strong but Professional Disagreement",
        subtitle: "Tidak setuju dengan tegas tapi sopan.",
        vocabulary: [
            { term: "I have to disagree.", meaning: "Direct tapi professional", example: "I have to disagree on that point." },
            { term: "I can't agree with that.", meaning: "Firm disagreement", example: "I can't agree with that decision." },
            { term: "With respect, I think...", meaning: "Deferential but firm", example: "With respect, I think that's a mistake." },
            { term: "I'm afraid I don't agree.", meaning: "Polite but clear", example: "I'm afraid I don't agree with that assessment." },
            { term: "I disagree entirely.", meaning: "Strong disagreement", example: "I disagree entirely with that conclusion." }
        ],
        teacherNote: "Gunakan strong disagreement hanya saat benar-benar perlu. Prioritaskan polite disagreement."
    },

    // SLIDE 8: AVOIDING DIRECT DISAGREEMENT
    {
        type: 'vocabulary',
        title: "Avoiding Direct Disagreement",
        subtitle: "Tanya atau suggest sebagai alternatif.",
        vocabulary: [
            { term: "What about...?", meaning: "Alternative suggestion", example: "What about approaching it from a different angle?" },
            { term: "How about...?", meaning: "Alternative idea", example: "How about we delay the launch?" },
            { term: "Isn't there a risk that...?", meaning: "Highlight concern", example: "Isn't there a risk that customers will leave?" },
            { term: "Don't you think that...?", meaning: "Gentle challenge", example: "Don't you think that's a bit optimistic?" },
            { term: "We should also consider...", meaning: "Add perspective", example: "We should also consider the long-term effects." }
        ]
    },

    // SLIDE 9: ASKING FOR OPINION
    {
        type: 'vocabulary',
        title: "Asking for Opinion",
        subtitle: "Undang orang lain untuk berbagi pandangan.",
        vocabulary: [
            { term: "What do you think?", meaning: "Basic ask", example: "What do you think about this proposal?" },
            { term: "What's your take on this?", meaning: "Casual/informal", example: "What's your take on the new policy?" },
            { term: "How do you feel about...?", meaning: "Ask feeling/opinion", example: "How do you feel about extending the deadline?" },
            { term: "I'd like to hear your thoughts.", meaning: "Invite input", example: "I'd like to hear your thoughts on this matter." },
            { term: "Do you have any views on...?", meaning: "Formal ask", example: "Do you have any views on this approach?" },
            { term: "Where do you stand on...?", meaning: "Ask position", example: "Where do you stand on this issue?" }
        ]
    },

    // SLIDE 10: NEUTRAL RESPONSES
    {
        type: 'vocabulary',
        title: "Neutral Responses",
        subtitle: "Saat Anda butuh waktu berpikir atau netral.",
        vocabulary: [
            { term: "I see both sides.", meaning: "Neutral", example: "I see both sides of the argument." },
            { term: "There are pros and cons.", meaning: "Balanced view", example: "There are pros and cons to each option." },
            { term: "It's not that simple.", meaning: "Complex issue", example: "It's not that simple - we need to consider multiple factors." },
            { term: "It depends on...", meaning: "Context-dependent", example: "It depends on the timeline we're working with." },
            { term: "I'm on the fence.", meaning: "Undecided", example: "I'm on the fence about this decision." },
            { term: "That's one way to look at it.", meaning: "Acknowledge without agreeing", example: "That's one way to look at it, I suppose." }
        ]
    },

    // SLIDE 11: DEBATE PHRASES
    {
        type: 'vocabulary',
        title: "Debate and Discussion Phrases",
        subtitle: "Struktur diskusi yang konstruktif.",
        vocabulary: [
            { term: "Let's look at both sides.", meaning: "Balanced approach", example: "Let's look at both sides before deciding." },
            { term: "To play devil's advocate...", meaning: "Argue opposite untuk test", example: "To play devil's advocate, what if we do nothing?" },
            { term: "From my perspective...", meaning: "Personal view", example: "From my perspective, the benefits outweigh the risks." },
            { term: "In my experience...", meaning: "Based on experience", example: "In my experience, that approach rarely works." },
            { term: "The way I see it...", meaning: "Opinion statement", example: "The way I see it, we have two options." },
            { term: "Can we agree to disagree?", meaning: "End debate gracefully", example: "We seem to have different views. Can we agree to disagree?" }
        ]
    },

    // SLIDE 12: MICRO-DRILL
    {
        type: 'micro-drill',
        title: "Practice These Scenarios",
        subtitle: "Respons dengan phrase yang tepat.",
        mission: [
            "1. Someone says: 'We should cut the marketing budget.' You disagree.",
            "2. Someone says: 'Remote work is more productive.' You agree strongly.",
            "3. Someone says: 'We need to hire more people.' You partially agree.",
            "4. Someone says: 'The deadline is realistic.' You strongly disagree.",
            "Bonus: Practice asking for someone's opinion on a controversial topic."
        ],
        teacherNote: "Pastikan grammar benar ('I agree' bukan 'I am agree') dan tone sesuai."
    },

    // SLIDE 13: CULTURAL NOTES
    {
        type: 'concept',
        title: "Cultural Considerations",
        subtitle: "Agree/disagree dalam konteks Indonesia.",
        content: [
            "Budaya Indonesia: Harmony (rukun) sering diutamakan.",
            "Jangan takut untuk tidak setuju - asalkan dengan cara yang sopan.",
            "Gunakan 'softeners' dan acknowledge dulu sebelum disagree.",
            "With senior people: Gunakan lebih banyak deference ('With respect...')."
        ],
        teacherNote: "Kita bisa maintain harmony sambil tetap jujur. Itu mature communication."
    },

    // SLIDE 14: ROLEPLAY
    {
        type: 'roleplay',
        title: "Roleplay: The Team Debate",
        subtitle: "Practice agreeing and disagreeing.",
        roleplay: {
            scenario: "Your team is discussing whether to launch a new product now or wait 6 months. You have strong opinions. Practice using at least 2 agreement phrases, 2 disagreement phrases, and asking for others' opinions.",
            roles: [
                { role: "You", goal: "Express your position clearly. Agree with valid points. Disagree diplomatically when needed." },
                { role: "Partner", goal: "Take the opposite position. Challenge their arguments respectfully." }
            ]
        },
        teacherNote: "Dengarkan untuk: Grammar ('I agree'), softening phrases, dan balance argument."
    },

    // ============================================
    // NEW SLIDES ADDED HERE
    // ============================================

    // NEW SLIDE 15: GRAMMAR FIX - I AM AGREE VS I AGREE
    {
        type: 'comparison',
        title: "Grammar Fix: 'I Am Agree' vs 'I Agree'",
        subtitle: "Common mistake that sounds unprofessional.",
        comparison: [
            { wrong: "I am agree with you.", right: "I agree with you." },
            { wrong: "She is agree with the plan.", right: "She agrees with the plan." },
            { wrong: "We are agree on this point.", right: "We agree on this point." },
            { wrong: "They are disagree about the budget.", right: "They disagree about the budget." },
            { wrong: "I am not agree with that.", right: "I don't agree with that. / I disagree." }
        ],
        teacherNote: "Agree/disagree are verbs, not adjectives. No 'to be' needed! Same with 'I am understand' → 'I understand'."
    },

    // NEW SLIDE 16: SOFTENING PHRASES FOR DISAGREEMENT
    {
        type: 'vocabulary',
        title: "Softening Phrases for Disagreement",
        subtitle: "Make your disagreement more diplomatic and professional.",
        vocabulary: [
            { term: "I'm not entirely convinced that...", meaning: "Gentle doubt", example: "I'm not entirely convinced that this is the best approach." },
            { term: "I may be wrong, but...", meaning: "Humble disagreement", example: "I may be wrong, but I think we should reconsider." },
            { term: "Correct me if I'm wrong...", meaning: "Open to correction", example: "Correct me if I'm wrong, but didn't we try this before?" },
            { term: "I see it differently...", meaning: "Alternative view", example: "I see it differently - I believe the data shows otherwise." },
            { term: "I have some reservations about...", meaning: "Polite concern", example: "I have some reservations about the timeline." },
            { term: "That's a valid point, though...", meaning: "Acknowledge then pivot", example: "That's a valid point, though I wonder about the cost implications." }
        ]
    },

    // NEW SLIDE 17: TEAM CONSENSUS BUILDING
    {
        type: 'concept',
        title: "Team Consensus Building",
        subtitle: "Moving from disagreement to agreement as a team.",
        content: [
            "1. Summarize common ground: 'We all want what's best for the project...'",
            "2. Acknowledge different viewpoints fairly without judgment.",
            "3. Find the middle ground or creative compromise solutions.",
            "4. Use inclusive language: 'How can WE solve this together?'",
            "5. End with clear next steps everyone can support."
        ],
        teacherNote: "Consensus doesn't mean everyone loves the decision - it means everyone can support it."
    },

    // NEW SLIDE 18: PRACTICE DEBATE SCENARIOS
    {
        type: 'roleplay',
        title: "Practice Debate: Workplace Scenarios",
        subtitle: "Real-world situations requiring diplomatic disagreement.",
        roleplay: {
            scenario: "Practice these three scenarios with your partner. Focus on using softening phrases and finding common ground.",
            roles: [
                { role: "Scenario A: Budget Cut", goal: "Your manager wants to cut the training budget. You believe training is essential for team growth. Disagree respectfully." },
                { role: "Scenario B: Return to Office", goal: "Your CEO announces mandatory return-to-office 5 days/week. You want to suggest a hybrid model." },
                { role: "Scenario C: Project Timeline", goal: "A client demands an unrealistic deadline. Your team lead seems ready to accept. You need to push back." }
            ]
        },
        teacherNote: "Rotate roles. Listen for softening phrases, grammar accuracy, and whether they offer alternatives."
    },

    // NEW SLIDE 19: EMAIL DISAGREEMENT PHRASES
    {
        type: 'vocabulary',
        title: "Email Disagreement Phrases",
        subtitle: "Written communication requires extra care and formality.",
        vocabulary: [
            { term: "I would suggest reconsidering...", meaning: "Polite alternative", example: "I would suggest reconsidering the proposed timeline." },
            { term: "Upon reflection, I have concerns about...", meaning: "Thoughtful objection", example: "Upon reflection, I have concerns about the budget allocation." },
            { term: "While I appreciate your perspective...", meaning: "Acknowledge then disagree", example: "While I appreciate your perspective, I believe there's another angle to consider." },
            { term: "I'd like to respectfully challenge...", meaning: "Professional pushback", example: "I'd like to respectfully challenge the assumption that..." },
            { term: "Could we explore the possibility of...?", meaning: "Suggest alternative", example: "Could we explore the possibility of a phased approach?" },
            { term: "To ensure we're aligned...", meaning: "Clarification focus", example: "To ensure we're aligned, I wanted to share a different viewpoint." }
        ]
    },

    // NEW SLIDE 20: CULTURAL DIFFERENCES IN DISAGREEMENT
    {
        type: 'concept',
        title: "Cultural Differences in Disagreement",
        subtitle: "How different cultures handle disagreement in professional settings.",
        content: [
            "🇺🇸 American: Direct but polite. 'I disagree' is acceptable if respectful.",
            "🇬🇧 British: Very indirect. May use humor or heavy softening phrases.",
            "🇯🇵 Japanese: Often silent disagreement. 'That's difficult' might mean 'no'.",
            "🇩🇪 German: Direct and factual. Disagreement on ideas, not personal.",
            "🇮🇩 Indonesian: Values harmony. Disagreement often wrapped in suggestions.",
            "💡 Tip: Adapt your style based on who you're speaking with."
        ],
        teacherNote: "Help students understand that directness levels vary by culture. In international teams, clarity + kindness is key."
    },

    // SLIDE 21: RECAP (FIXED FORMAT)
    {
        type: 'recap',
        title: "Key Takeaways: Agreeing & Disagreeing",
        recap: [
            { context: "Grammar basics", sayThis: "I agree / I disagree", dontSayThis: "I am agree / I am disagree" },
            { context: "Simple agreement", sayThis: "I agree, Exactly, I couldn't agree more", dontSayThis: "Yes, I am agree with you" },
            { context: "Partial agreement", sayThis: "I see your point, but... / I agree to some extent", dontSayThis: "I don't agree with anything you said" },
            { context: "Polite disagreement", sayThis: "I'm not sure I agree... / I see it differently", dontSayThis: "You're wrong / That's stupid" },
            { context: "Strong but professional", sayThis: "With respect, I think... / I have to disagree", dontSayThis: "I totally disagree with everything!" },
            { context: "Written (email)", sayThis: "I would suggest reconsidering...", dontSayThis: "I don't like your idea" },
            { context: "Key principle", sayThis: "Acknowledge first, then disagree softly", dontSayThis: "Jump straight to 'No' without preamble" }
        ]
    },

    // SLIDE 22: MISSION
    {
        type: 'mission',
        title: "This Week's Mission",
        subtitle: "Practice expressing your views.",
        mission: [
            "Notice phrases orang gunakan saat agree/disagree",
            "Practice 'I agree' dan 'I disagree' dengan grammar benar",
            "Gunakan at least 3 new phrases di diskusi minggu ini",
            "Write responses to 5 controversial statements",
            "Practice polite disagreement - jangan cuma diam saat tidak setuju"
        ],
        teacherNote: "Mampu disagree dengan sopan adalah tanda komunikator yang matang dan confident."
    }
];

export const quiz: QuizQuestion[] = [];
