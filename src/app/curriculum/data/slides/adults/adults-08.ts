import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1: TITLE
    {
        type: 'title',
        title: "Expressing Reactions & Handling Compliments",
        subtitle: "Level: Business English",
        teacherNote: "Goal: Merespons dengan natural tanpa terdengar kaku atau terlalu merendah. Fokus pada ekspresi yang sering dipakai native speaker.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1920"
    },

    // SLIDE 2: THE PROBLEM
    {
        type: 'concept',
        title: "The Problem (Masalahnya Apa?)",
        content: [
            "Orang Indonesia cenderung MERENDAH saat dipuji: 'Ah biasa aja' → terdengar aneh di Barat.",
            "Respon kita sering FLAT: 'Oh, okay.' → tidak menunjukkan antusiasme.",
            "Kita kadang BERLEBIHAN: 'WAAAH REALLY?!' → terkesan tidak genuine."
        ],
        teacherNote: "Hari ini kita belajar respons yang natural: tidak terlalu datar, tidak terlalu lebay."
    },

    // SLIDE 3: WHY IT MATTERS
    {
        type: 'concept',
        title: "Why This Matters",
        subtitle: "Reaksi yang tepat = Koneksi yang lebih kuat.",
        content: [
            "1. Shows you're LISTENING: Orang merasa dihargai.",
            "2. Builds RAPPORT: Percakapan jadi lebih hidup.",
            "3. Makes you MEMORABLE: Kamu bukan 'robot English'."
        ]
    },

    // SLIDE 4: HANDLING COMPLIMENTS - THE WRONG WAY
    {
        type: 'comparison',
        title: "Handling Compliments: The Indo Way vs. Global Way",
        subtitle: "Merendah di Indo = Sopan. Di Barat = Awkward atau Rejecting.",
        comparison: [
            { wrong: '"No, no, I\'m not that good." (Menolak pujian)', right: '"Thank you, I appreciate that."' },
            { wrong: '"Ah, it was nothing." (Meremehkan diri)', right: '"Thanks! I worked hard on it."' },
            { wrong: '"You\'re just being nice." (Menuduh pujiannya palsu)', right: '"That\'s very kind of you to say."' }
        ],
        teacherNote: "Di budaya Barat, menolak pujian = menolak kebaikan orang. Terima saja dengan anggun."
    },

    // SLIDE 5: ACCEPTING COMPLIMENTS - FORMULAS
    {
        type: 'formula',
        title: "Accepting Compliments: 3 Power Formulas",
        subtitle: "Sederhana tapi efektif.",
        vocabulary: [
            { term: "Formula 1 (Basic)", meaning: "Thank you + (Short Add-on)", example: "\"Thank you, I really appreciate that!\"" },
            { term: "Formula 2 (Give Credit)", meaning: "Thanks + Acknowledge Others", example: "\"Thanks! My team helped a lot too.\"" },
            { term: "Formula 3 (Reciprocate)", meaning: "Thank you + Return Compliment", example: "\"Thank you! You're always so supportive.\"" }
        ],
        teacherNote: "Yang penting: TERIMA dulu, baru boleh tambahkan komentar."
    },

    // SLIDE 6: COMPLIMENT VOCABULARY
    {
        type: 'vocabulary',
        title: "Ways to Accept Compliments",
        subtitle: "Variasi ekspresi agar tidak repetitif.",
        vocabulary: [
            { term: "Thank you, that means a lot.", meaning: "Terima kasih, itu berarti banyak.", example: "\"Thank you, that means a lot coming from you.\"" },
            { term: "I'm glad you think so.", meaning: "Senang kamu berpikir begitu.", example: "\"I'm glad you liked the presentation.\"" },
            { term: "That's so kind of you.", meaning: "Baik sekali kamu.", example: "\"That's so kind of you to notice.\"" },
            { term: "I appreciate the feedback.", meaning: "Saya menghargai masukannya.", example: "\"I really appreciate the positive feedback.\"" },
            { term: "You made my day!", meaning: "Kamu membuat hariku!", example: "\"Wow, you just made my day!\"" }
        ]
    },

    // SLIDE 7: REACTING TO GOOD NEWS
    {
        type: 'vocabulary',
        title: "Reacting to Good News",
        subtitle: "Jangan cuma 'Oh, nice.' Tunjukkan antusiasme!",
        vocabulary: [
            { term: "That's amazing!", meaning: "Itu luar biasa!", example: "\"You got promoted? That's amazing!\"" },
            { term: "I'm so happy for you!", meaning: "Aku senang banget untukmu!", example: "\"I'm so happy for you, you deserve it!\"" },
            { term: "Congratulations!", meaning: "Selamat!", example: "\"Congratulations on the new job!\"" },
            { term: "That's fantastic news!", meaning: "Itu berita bagus sekali!", example: "\"That's fantastic news! Tell me more!\"" },
            { term: "Wow, that's incredible!", meaning: "Wow, luar biasa!", example: "\"Wow, that's incredible! How did it happen?\"" },
            { term: "You must be thrilled!", meaning: "Pasti kamu senang banget!", example: "\"You must be thrilled about the promotion!\"" }
        ],
        teacherNote: "Kunci: Ekspresi + Follow-up Question = Menunjukkan genuine interest."
    },

    // SLIDE 8: REACTING TO BAD NEWS
    {
        type: 'vocabulary',
        title: "Reacting to Bad News",
        subtitle: "Menunjukkan empati tanpa terdengar klise.",
        vocabulary: [
            { term: "I'm so sorry to hear that.", meaning: "Aku turut prihatin.", example: "\"I'm so sorry to hear about your loss.\"" },
            { term: "That must be really hard.", meaning: "Pasti itu berat banget.", example: "\"That must be really hard for you.\"" },
            { term: "I can't imagine how you feel.", meaning: "Aku gak bisa bayangin perasaanmu.", example: "\"I can't imagine how you must be feeling.\"" },
            { term: "Let me know if I can help.", meaning: "Kabari aku kalau aku bisa bantu.", example: "\"Let me know if there's anything I can do.\"" },
            { term: "I'm here for you.", meaning: "Aku ada untukmu.", example: "\"Whatever happens, I'm here for you.\"" }
        ],
        teacherNote: "Hindari: 'Everything happens for a reason' - ini sering terasa tidak tulus."
    },

    // SLIDE 9: REACTING TO SURPRISING NEWS
    {
        type: 'vocabulary',
        title: "Reacting to Surprising News",
        subtitle: "Ekspresi 'Masa sih?!' yang natural.",
        vocabulary: [
            { term: "Really? Are you serious?", meaning: "Serius? Beneran?", example: "\"Really? I had no idea!\"" },
            { term: "No way!", meaning: "Masa sih?!", example: "\"No way! That's unbelievable!\"" },
            { term: "You're kidding!", meaning: "Kamu bercanda!", example: "\"You're kidding! When did this happen?\"" },
            { term: "I can't believe it!", meaning: "Aku gak percaya!", example: "\"I can't believe they did that!\"" },
            { term: "That's unexpected.", meaning: "Itu tidak terduga.", example: "\"That's unexpected. What are you going to do?\"" },
            { term: "Wow, I didn't see that coming.", meaning: "Wow, gak nyangka.", example: "\"Wow, I didn't see that coming at all.\"" }
        ]
    },

    // SLIDE 10: FORMAL VS CASUAL REACTIONS
    {
        type: 'comparison',
        title: "Formal vs. Casual Reactions",
        subtitle: "Sesuaikan dengan konteksnya.",
        comparison: [
            { wrong: "\"OMG that's crazy!\" (In a meeting)", right: "\"That's quite surprising.\" (Formal)" },
            { wrong: "\"That is most unfortunate.\" (With friends)", right: "\"Man, that sucks.\" (Casual)" },
            { wrong: "\"I am delighted.\" (Coffee chat)", right: "\"I'm so happy for you!\" (Friendly)" }
        ],
        teacherNote: "Register matters! Casual dengan teman, professional di meeting."
    },

    // SLIDE 11: THE FOLLOW-UP TECHNIQUE
    {
        type: 'formula',
        title: "The Follow-Up Technique",
        subtitle: "Reaction + Question = Deeper Connection.",
        formula: "[Reaction] + [Follow-up Question]",
        vocabulary: [
            { term: "Good News Pattern", meaning: "React + Ask for details", example: "\"That's amazing! How did you manage that?\"" },
            { term: "Bad News Pattern", meaning: "React + Offer support", example: "\"I'm so sorry. Is there anything I can do?\"" },
            { term: "Surprise Pattern", meaning: "React + Ask for context", example: "\"No way! When did you find out?\"" }
        ],
        teacherNote: "Ini yang membedakan 'polite response' dari 'genuinely interested response'."
    },

    // SLIDE 12: AGREEING ENTHUSIASTICALLY
    {
        type: 'vocabulary',
        title: "Agreeing with Enthusiasm",
        subtitle: "Lebih dari sekadar 'I agree.'",
        vocabulary: [
            { term: "Exactly!", meaning: "Tepat sekali!", example: "\"Exactly! That's what I was thinking.\"" },
            { term: "Absolutely!", meaning: "Pasti!/Tentu!", example: "\"Absolutely, I couldn't agree more.\"" },
            { term: "You're so right.", meaning: "Kamu benar banget.", example: "\"You're so right about that.\"" },
            { term: "Tell me about it!", meaning: "Iya kan?! (Setuju banget)", example: "\"Tell me about it! I've been saying that for years.\"" },
            { term: "100%!", meaning: "100% setuju!", example: "\"100%! That's exactly the problem.\"" },
            { term: "I know, right?", meaning: "Iya kan?", example: "\"I know, right? It's frustrating.\"" }
        ],
        teacherNote: "'I know, right?' adalah cara modern untuk setuju dengan antusias."
    },

    // SLIDE 13: EXPRESSING RELIEF
    {
        type: 'vocabulary',
        title: "Expressing Relief",
        subtitle: "Saat sesuatu yang buruk TIDAK terjadi.",
        vocabulary: [
            { term: "Thank goodness!", meaning: "Syukurlah!", example: "\"Thank goodness you're okay!\"" },
            { term: "What a relief!", meaning: "Lega banget!", example: "\"What a relief! I was so worried.\"" },
            { term: "Phew! That was close.", meaning: "Fiuh! Hampir saja.", example: "\"Phew! That was a close call.\"" },
            { term: "I'm so relieved.", meaning: "Aku sangat lega.", example: "\"I'm so relieved the project got approved.\"" },
            { term: "That's a weight off my shoulders.", meaning: "Beban di pundakku terangkat.", example: "\"That's a huge weight off my shoulders.\"" }
        ]
    },

    // SLIDE 14: EXPRESSING DISAPPOINTMENT
    {
        type: 'vocabulary',
        title: "Expressing Disappointment",
        subtitle: "Kecewa tanpa terdengar marah.",
        vocabulary: [
            { term: "That's a shame.", meaning: "Sayang sekali.", example: "\"That's a shame. I was really looking forward to it.\"" },
            { term: "What a bummer.", meaning: "Yah, sayang banget.", example: "\"What a bummer! Maybe next time.\"" },
            { term: "I'm a bit disappointed.", meaning: "Aku agak kecewa.", example: "\"I'm a bit disappointed, to be honest.\"" },
            { term: "That's too bad.", meaning: "Sayang sekali.", example: "\"That's too bad. I hoped it would work out.\"" },
            { term: "I was hoping for better.", meaning: "Aku berharap lebih baik.", example: "\"I was hoping for better news, honestly.\"" }
        ],
        teacherNote: "'That's too bad' lebih sopan dari 'That sucks' di konteks formal."
    },

    // SLIDE 15: HANDLING AWKWARD COMPLIMENTS
    {
        type: 'concept',
        title: "Handling Awkward Compliments",
        subtitle: "Kadang pujian terasa aneh. Ini cara mengatasinya.",
        content: [
            "Situation 1: Compliment about appearance → 'Thank you, that's kind of you.'",
            "Situation 2: Exaggerated compliment → 'That's very generous, thank you!'",
            "Situation 3: Compliment you disagree with → 'I appreciate you saying that.'"
        ],
        teacherNote: "Intinya: Terima dengan anggun, tanpa harus setuju atau menjelaskan."
    },

    // SLIDE 16: GIVING COMPLIMENTS
    {
        type: 'formula',
        title: "Giving Genuine Compliments",
        subtitle: "Pujian yang tulus = Specific + Sincere.",
        comparison: [
            { wrong: "\"You're good.\" (Terlalu generik)", right: "\"You did a great job on that report.\"" },
            { wrong: "\"Nice.\" (Datar)", right: "\"I really like how you handled that client.\"" }
        ],
        vocabulary: [
            { term: "I'm impressed by...", meaning: "Aku terkesan oleh...", example: "\"I'm impressed by how quickly you learned.\"" },
            { term: "You're really good at...", meaning: "Kamu sangat bagus dalam...", example: "\"You're really good at explaining things.\"" },
            { term: "I love how you...", meaning: "Aku suka caramu...", example: "\"I love how you stay calm under pressure.\"" }
        ]
    },

    // SLIDE 17: CASE STUDY 1
    {
        type: 'case-study',
        title: "Case Study 1: The Compliment at Work",
        subtitle: "Skenario: Bos memuji presentasimu.",
        caseStudy: {
            scenario: "Your boss says: 'That was an excellent presentation, well done!'",
            template: "\"Thank you so much! I really appreciate the feedback. The team helped a lot with the visuals.\""
        },
        teacherNote: "Formula: Accept + Appreciate + (Optional: Share credit)"
    },

    // SLIDE 18: CASE STUDY 2
    {
        type: 'case-study',
        title: "Case Study 2: Friend's Good News",
        subtitle: "Skenario: Temanmu bilang dapat kenaikan gaji.",
        caseStudy: {
            scenario: "Your friend says: 'Guess what? I just got a 30% raise!'",
            template: "\"Wow, that's amazing! Congratulations! You totally deserve it. How did you negotiate that?\""
        },
        teacherNote: "Formula: Enthusiastic Reaction + Congrats + Follow-up Question"
    },

    // SLIDE 19: CASE STUDY 3
    {
        type: 'case-study',
        title: "Case Study 3: Colleague's Bad News",
        subtitle: "Skenario: Kolegamu bilang proyeknya dibatalkan.",
        caseStudy: {
            scenario: "Your colleague says: 'The project I've worked on for 3 months just got cancelled.'",
            template: "\"Oh no, I'm so sorry to hear that. That must be really frustrating after all your hard work. Is there anything I can do to help?\""
        },
        teacherNote: "Formula: Empathy + Acknowledge Feelings + Offer Support"
    },

    // SLIDE 20: ROLEPLAY SCENARIOS
    {
        type: 'roleplay',
        title: "Practice Time: React Naturally!",
        subtitle: "Latihan respons spontan.",
        roleplay: {
            scenario: "Practice reacting to different news and situations. Switch roles and try multiple scenarios.",
            roles: [
                { role: "Person A", goal: "Share the news (compliment, good news, bad news, surprise)" },
                { role: "Person B", goal: "React naturally using phrases learned today. Show genuine emotion!" }
            ]
        },
        teacherNote: "Minta murid bereaksi tanpa preparation. Fokus pada spontanitas."
    },

    // SLIDE 21: PRONUNCIATION CHECK
    {
        type: 'vocabulary',
        title: "Pronunciation Check",
        subtitle: "Kata-kata yang sering salah diucapkan.",
        pronunciations: [
            { word: "Appreciate", ipa: "/əˈpriːʃieɪt/", tip: "A-PRI-shi-eyt, bukan 'Ap-re-si-at'." },
            { word: "Congratulations", ipa: "/kənˌɡrætʃuˈleɪʃnz/", tip: "Kon-GRA-chu-LAY-shunz." },
            { word: "Disappointed", ipa: "/ˌdɪsəˈpɔɪntɪd/", tip: "Dis-a-POIN-ted, 4 syllables." },
            { word: "Relieved", ipa: "/rɪˈliːvd/", tip: "Ri-LEEVD, bukan 'Ri-li-fed'." }
        ]
    },

    // SLIDE 22: COMMON MISTAKES
    {
        type: 'comparison',
        title: "Common Mistakes to Avoid",
        subtitle: "Kesalahan yang sering dilakukan orang Indonesia.",
        comparison: [
            { wrong: "\"Thanks God\" (Salah grammar)", right: "\"Thank God\" atau \"Thank goodness\"" },
            { wrong: "\"I'm very happy for your success.\" (Formal/kaku)", right: "\"I'm so happy for you!\" (Natural)" },
            { wrong: "\"Ah, no, I'm not that good.\" (Menolak pujian)", right: "\"Thank you, I appreciate it.\"" },
            { wrong: "\"Oh really? Okay.\" (Flat)", right: "\"Really? That's amazing!\"" }
        ]
    },

    // SLIDE 23: QUICK RECAP
    {
        type: 'recap',
        title: "Quick Recap (Cheat Sheet)",
        recap: [
            { context: "Dipuji", sayThis: "Thank you, I appreciate it.", dontSayThis: "No, no, I'm not good." },
            { context: "Kabar baik", sayThis: "That's amazing! + Follow-up question", dontSayThis: "Oh, nice." },
            { context: "Kabar buruk", sayThis: "I'm so sorry. Is there anything I can do?", dontSayThis: "Oh, too bad." },
            { context: "Surprise", sayThis: "No way! Really?", dontSayThis: "Oh, okay." }
        ]
    },

    // SLIDE 24: MISSION
    {
        type: 'mission',
        title: "Mission (Action Item)",
        subtitle: "Praktik di dunia nyata!",
        mission: [
            "1. Compliment Challenge: Beri 3 pujian genuine ke teman/kolega hari ini. Use: 'I really like how you...'",
            "2. Reaction Journal: Catat 5 reaksi yang kamu dengar hari ini (dari film/meeting/percakapan). Apakah terdengar natural?",
            "3. Mirror Practice: Rekam diri sendiri merespons pujian. Dengarkan: Apakah terdengar tulus?"
        ],
        teacherNote: "See you in the next meeting!"
    }
];

export const quiz: QuizQuestion[] = [
    // TYPE 1: ACCEPTING COMPLIMENTS
    {
        question: 'Someone says "Your presentation was really good!" What\'s the best response?',
        options: ['"No, no, it wasn\'t that good."', '"Thank you, I appreciate that!"', '"You\'re just being nice."'],
        correctIndex: 1,
        explanation: 'Accepting compliments gracefully is important in Western culture. Just say thank you!'
    },
    {
        question: 'Which is NOT a good way to accept a compliment?',
        options: ['"Thanks, I worked hard on it."', '"That means a lot, thank you."', '"Ah, it was nothing really."'],
        correctIndex: 2,
        explanation: '"It was nothing" dismisses both your effort and the person\'s compliment.'
    },
    {
        question: 'Your boss compliments your work. A professional response is:',
        options: ['"Thank you! The team helped a lot too."', '"I know, I\'m good at this."', '"No, no, I just got lucky."'],
        correctIndex: 0,
        explanation: 'Accept the compliment and optionally share credit with your team.'
    },

    // TYPE 2: REACTING TO GOOD NEWS
    {
        question: 'Your friend tells you they got a promotion. The best reaction is:',
        options: ['"Oh, okay. Nice."', '"That\'s amazing! Congratulations!"', '"Finally! It took them long enough."'],
        correctIndex: 1,
        explanation: 'Show genuine enthusiasm! "That\'s amazing!" plus congratulations shows you care.'
    },
    {
        question: 'Complete: "I\'m so _____ for you!"',
        options: ['glad', 'happy', 'Both are correct'],
        correctIndex: 2,
        explanation: 'Both "I\'m so glad for you" and "I\'m so happy for you" are natural expressions.'
    },
    {
        question: 'After reacting to good news, what should you do?',
        options: ['Change the topic', 'Ask a follow-up question', 'Talk about yourself'],
        correctIndex: 1,
        explanation: 'A follow-up question like "How did it happen?" shows genuine interest.'
    },

    // TYPE 3: REACTING TO BAD NEWS
    {
        question: 'A colleague tells you their project was cancelled. You should say:',
        options: ['"That\'s life."', '"I\'m so sorry to hear that. That must be frustrating."', '"At least you have other projects."'],
        correctIndex: 1,
        explanation: 'Acknowledge their feelings first before offering any perspective.'
    },
    {
        question: 'Which phrase shows empathy?',
        options: ['"That must be really hard for you."', '"Well, things happen."', '"You should have been more careful."'],
        correctIndex: 0,
        explanation: '"That must be hard" acknowledges their feelings without judgment.'
    },
    {
        question: 'Which should you AVOID saying to someone who\'s upset?',
        options: ['"I\'m here for you if you need anything."', '"Everything happens for a reason!"', '"Let me know how I can help."'],
        correctIndex: 1,
        explanation: '"Everything happens for a reason" often feels dismissive when someone is hurting.'
    },

    // TYPE 4: EXPRESSING SURPRISE
    {
        question: 'Which expression means "Masa sih?!" in English?',
        options: ['"That\'s interesting."', '"No way!"', '"I understand."'],
        correctIndex: 1,
        explanation: '"No way!" expresses strong surprise or disbelief.'
    },
    {
        question: '"You\'re kidding!" is used when:',
        options: ['You think someone is funny', 'You\'re very surprised', 'You disagree with someone'],
        correctIndex: 1,
        explanation: '"You\'re kidding!" means you\'re so surprised you almost don\'t believe it.'
    },

    // TYPE 5: FORMAL VS CASUAL
    {
        question: 'In a business meeting, which is MORE appropriate?',
        options: ['"That\'s quite unexpected."', '"OMG, that\'s crazy!"', '"No way, dude!"'],
        correctIndex: 0,
        explanation: 'Use formal language in professional settings. Save casual expressions for friends.'
    },
    {
        question: 'Which is too casual for a work environment?',
        options: ['"That\'s a shame."', '"Man, that sucks."', '"I\'m sorry to hear that."'],
        correctIndex: 1,
        explanation: '"That sucks" is slang and not appropriate in professional settings.'
    },

    // TYPE 6: EXPRESSING RELIEF
    {
        question: '"Syukurlah!" in English is:',
        options: ['"Thanks God"', '"Thank goodness!"', '"Thankful!"'],
        correctIndex: 1,
        explanation: '"Thank goodness" or "Thank God" (not "Thanks God") express relief.'
    },
    {
        question: 'Complete: "What a _____! I was so worried."',
        options: ['relieve', 'relief', 'relieved'],
        correctIndex: 1,
        explanation: '"What a relief!" uses the noun form "relief."'
    },

    // TYPE 7: EXPRESSING DISAPPOINTMENT
    {
        question: 'Which politely expresses disappointment?',
        options: ['"That\'s terrible!"', '"That\'s a shame."', '"That\'s stupid."'],
        correctIndex: 1,
        explanation: '"That\'s a shame" expresses disappointment without being harsh.'
    },

    // TYPE 8: AGREEING ENTHUSIASTICALLY
    {
        question: '"Tell me about it!" means:',
        options: ['Please explain more.', 'I strongly agree with you!', 'I don\'t understand.'],
        correctIndex: 1,
        explanation: '"Tell me about it!" is an idiomatic way to strongly agree, like "Iya kan?!"'
    },
    {
        question: 'Which is an enthusiastic way to agree?',
        options: ['"I suppose so."', '"Absolutely! Couldn\'t agree more."', '"Maybe."'],
        correctIndex: 1,
        explanation: '"Absolutely!" shows strong, enthusiastic agreement.'
    },

    // TYPE 9: GIVING COMPLIMENTS
    {
        question: 'A genuine compliment should be:',
        options: ['Generic, like "You\'re nice."', 'Specific, like "You handled that client really well."', 'Exaggerated, like "You\'re the best person ever!"'],
        correctIndex: 1,
        explanation: 'Specific compliments feel more genuine and meaningful.'
    },
    {
        question: 'Which compliment is too vague?',
        options: ['"I\'m impressed by how you solved that problem."', '"Nice."', '"I love how you stay calm under pressure."'],
        correctIndex: 1,
        explanation: 'Just saying "Nice" doesn\'t tell the person what specifically was good.'
    }
];
