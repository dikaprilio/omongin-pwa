import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "My Feelings (Emotions) 😊",
        subtitle: "Expressing How You Feel",
        teacherNote: "Goal: Anak bisa bilang 'I am excited!' atau 'I am bored' sesuai perasaan asli, bukan cuma 'happy' dan 'sad'."
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about feelings! 🎭",
        content: [
            "😊 How are you feeling right now? (Sekarang kamu merasa gimana?)",
            "😢 Do you ever feel sad? When? (Pernah sedih? Kapan?)",
            "😡 What makes you angry? (Apa yang bikin kamu marah?)",
            "🎉 When do you feel excited? (Kapan kamu merasa excited?)",
            "😴 Are you ever bored in class? (Pernah bosen di kelas? 😄)"
        ],
        teacherNote: "Warming up! Make it safe to share feelings. Validate all emotions - they're all okay!"
    },
    // SLIDE 3 - BASIC EMOTIONS
    {
        type: 'vocabulary',
        title: "Basic Emotions 😊😢",
        subtitle: "Perasaan dasar",
        vocabulary: [
            { term: "Happy", meaning: "Senang", example: "I am happy today!" },
            { term: "Sad", meaning: "Sedih", example: "I feel sad when it rains." },
            { term: "Angry", meaning: "Marah", example: "He is angry because he lost." },
            { term: "Scared / Afraid", meaning: "Takut", example: "I am scared of the dark." },
            { term: "Surprised", meaning: "Terkejut", example: "She was surprised by the gift." },
            { term: "Tired", meaning: "Lelah", example: "I am tired after playing." }
        ],
        teacherNote: "Start with basics. Do TPR - make the faces together!"
    },
    // SLIDE 4 - MORE EMOTIONS
    {
        type: 'vocabulary',
        title: "More Feelings 🎭",
        subtitle: "Perasaan lainnya",
        vocabulary: [
            { term: "Excited", meaning: "Bersemangat / Antusias", example: "I am excited for my birthday!" },
            { term: "Bored", meaning: "Bosan", example: "I feel bored when it rains." },
            { term: "Confused", meaning: "Bingung", example: "I am confused by this question." },
            { term: "Nervous", meaning: "Gugup", example: "I feel nervous before a test." },
            { term: "Proud", meaning: "Bangga", example: "I am proud of my drawing." },
            { term: "Embarrassed", meaning: "Malu", example: "I felt embarrassed when I fell." },
            { term: "Worried", meaning: "Khawatir", example: "My mom is worried about me." },
            { term: "Grumpy", meaning: "Moody / Pemarah", example: "He is grumpy this morning." }
        ],
        teacherNote: "Expand vocabulary beyond happy/sad. These are feelings kids actually experience!"
    },
    // SLIDE 5 - FORMULA: I FEEL...
    {
        type: 'formula',
        title: "How to Express Feelings",
        subtitle: "Cara mengungkapkan perasaan",
        formula: "I am / I feel + [emotion]",
        vocabulary: [
            { term: "I am happy.", meaning: "Saya senang.", example: "I am happy to see you!" },
            { term: "I feel sad.", meaning: "Saya merasa sedih.", example: "I feel sad today." },
            { term: "I am excited!", meaning: "Saya bersemangat!", example: "I am excited for the party!" },
            { term: "I feel tired.", meaning: "Saya merasa lelah.", example: "I feel tired after school." },
            { term: "I am angry.", meaning: "Saya marah.", example: "I am angry right now." },
            { term: "I feel nervous.", meaning: "Saya merasa gugup.", example: "I feel nervous about the test." }
        ],
        teacherNote: "'I am' and 'I feel' are both correct. Let kids choose what feels natural!"
    },
    // SLIDE 6 - FORMULA: WHY?
    {
        type: 'formula',
        title: "Why Do You Feel That Way?",
        subtitle: "Kenapa kamu merasa begitu?",
        formula: "I feel [emotion] because...",
        vocabulary: [
            { term: "because it's my birthday", meaning: "karena ini ulang tahunku", example: "I am happy because it's my birthday!" },
            { term: "because I won", meaning: "karena saya menang", example: "I am excited because I won!" },
            { term: "because it's raining", meaning: "karena hujan", example: "I feel sad because it's raining." },
            { term: "because I'm tired", meaning: "karena saya lelah", example: "I am grumpy because I'm tired." },
            { term: "because I don't understand", meaning: "karena saya tidak mengerti", example: "I feel confused because I don't understand." }
        ],
        teacherNote: "The 'because' is important! It helps express the reason for feelings."
    },
    // SLIDE 7 - ASKING ABOUT FEELINGS
    {
        type: 'formula',
        title: "Asking About Feelings",
        subtitle: "Menanyakan perasaan orang lain",
        formula: "How are you? / How do you feel?",
        vocabulary: [
            { term: "How are you?", meaning: "Apa kabar?", example: "How are you today?" },
            { term: "How do you feel?", meaning: "Bagaimana perasaanmu?", example: "How do you feel right now?" },
            { term: "Are you okay?", meaning: "Apa kamu baik-baik saja?", example: "You look sad. Are you okay?" },
            { term: "What's wrong?", meaning: "Ada apa?", example: "What's wrong? You look upset." },
            { term: "Why are you [emotion]?", meaning: "Kenapa kamu...?", example: "Why are you angry?" }
        ],
        teacherNote: "Teach empathy - asking about feelings shows you care!"
    },
    // SLIDE 8 - COMPARISON: BORING vs EXPRESSIVE
    {
        type: 'comparison',
        title: "Boring vs Expressive",
        subtitle: "Membosankan vs Ekspresif",
        comparison: [
            { wrong: "I am happy.", right: "I am excited because we're going to the zoo!" },
            { wrong: "I am sad.", right: "I feel sad because my friend is sick." },
            { wrong: "I am angry.", right: "I am angry because my brother broke my toy." },
            { wrong: "Good.", right: "I feel great today!" },
            { wrong: "Fine.", right: "I feel a little tired but I'm okay!" }
        ],
        teacherNote: "Encourage adding 'because' - it makes feelings more meaningful and understandable!"
    },
    // SLIDE 9 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: Checking on a Friend 💝",
        subtitle: "Menanyakan kabar teman",
        caseStudy: {
            scenario: "Melihat teman yang kelihatan sedih dan menanyakan kabarnya.",
            template: "A: Hi! You look sad. Are you okay?\nB: Not really. I feel sad today.\nA: Why do you feel sad?\nB: Because I lost my favorite pencil.\nA: Oh no! I understand. I would feel sad too.\nB: Thanks for asking. I feel a little better now."
        },
        teacherNote: "DEMO: Show empathy in action. Asking and listening are caring behaviors!"
    },
    // SLIDE 10 - CONVERSATION EXAMPLE 2
    {
        type: 'case-study',
        title: "Conversation 2: Sharing Good News 🎉",
        subtitle: "Berbagi kabar baik",
        caseStudy: {
            scenario: "Bercerita tentang perasaan bersemangat.",
            template: "A: You look very happy today! What's up?\nB: I am so excited!\nA: Why are you excited?\nB: Because tomorrow is my birthday! I'm going to have a party!\nA: Wow! That's awesome! I would be excited too!\nB: Thank you! I can't wait!"
        },
        teacherNote: "Show how to respond to good news with enthusiasm and support!"
    },
    // SLIDE 11 - ROLEPLAY 1: FEELING CHECK
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Feeling Check 🎭",
        subtitle: "A = Caring Friend | B = You",
        caseStudy: {
            scenario: "Teman menanyakan perasaanmu.",
            template: "A: How are you feeling today?\nB: I feel _____.\nA: Why do you feel _____?\nB: Because _____.\nA: I understand. Would you like to talk about it? / That's great!\nB: Yes, thank you! / No thanks, I'm okay."
        },
        teacherNote: "GILIRAN MURID: Practice expressing real feelings with reasons."
    },
    // SLIDE 12 - ROLEPLAY 2: EMOTION CHARADES
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: Guess My Feeling 🤔",
        subtitle: "A = Detective | B = Actor",
        caseStudy: {
            scenario: "Bermain tebak emosi.",
            template: "A: You look _____. Are you _____?\nB: Yes! / No, not quite.\nA: Hmm, do you feel _____?\nB: Yes, that's right! I feel _____ because _____.\nA: Now I understand! Thank you for sharing."
        },
        teacherNote: "FUN GAME: Kids can use facial expressions and body language to show emotions!"
    },
    // SLIDE 13 - EMOTION FACES ACTIVITY
    {
        type: 'micro-drill',
        title: "Emotion Faces Challenge! 😄",
        subtitle: "Show me that emotion!",
        mission: [
            "1. Show me HAPPY! Big smile! 😊",
            "2. Show me SAD! Frown and droopy eyes. 😢",
            "3. Show me ANGRY! Furrow your brows! 😠",
            "4. Show me SURPRISED! Open mouth wide! 😲",
            "5. Show me TIRED! Yawn and droop! 😴",
            "6. Show me EXCITED! Big eyes and smile! 🤩"
        ],
        teacherNote: "TPR TIME! Kids make faces at the camera. Laugh together!"
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Senang", sayThis: "I am happy!", dontSayThis: "Happy." },
            { context: "Dengan alasan", sayThis: "I feel sad because it's raining.", dontSayThis: "Sad." },
            { context: "Bertanya", sayThis: "How are you feeling?", dontSayThis: "You okay?" },
            { context: "Respons lengkap", sayThis: "I feel excited because...", dontSayThis: "Good." },
            { context: "Menunjukkan empati", sayThis: "I understand. I'm here for you.", dontSayThis: "So what?" }
        ],
        teacherNote: "Review together. Validate all emotions - there's no 'wrong' feeling!"
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Emotion Diary: Buat diary perasaan 3 hari - tulis 'I feel _____ because _____'!",
            "2. Family Check-in: Tanya keluargamu 'How are you feeling today?' dalam Inggris!",
            "3. Emotion Art: Gambar 4 wajah berbeda dengan label emosi dalam Inggris!"
        ],
        teacherNote: "Encourage emotional awareness. All feelings are valid and worth expressing!"
    }
];

export const quiz: QuizQuestion[] = [
    // BASIC EMOTIONS
    {
        question: "How do you say 'Senang'?",
        options: ["Sad", "Happy", "Angry"],
        correctIndex: 1,
        explanation: "Happy = Senang!"
    },
    {
        question: "How do you say 'Sedih'?",
        options: ["Happy", "Sad", "Tired"],
        correctIndex: 1,
        explanation: "Sad = Sedih!"
    },
    {
        question: "How do you say 'Marah'?",
        options: ["Scared", "Angry", "Surprised"],
        correctIndex: 1,
        explanation: "Angry = Marah!"
    },
    {
        question: "How do you say 'Takut'?",
        options: ["Scared", "Sad", "Bored"],
        correctIndex: 0,
        explanation: "Scared = Takut!"
    },
    // MORE EMOTIONS
    {
        question: "What does 'Excited' mean?",
        options: ["Bosan", "Bersemangat", "Malu"],
        correctIndex: 1,
        explanation: "Excited = Bersemangat / Antusias!"
    },
    {
        question: "What does 'Bored' mean?",
        options: ["Bosan", "Lelah", "Gugup"],
        correctIndex: 0,
        explanation: "Bored = Bosan!"
    },
    {
        question: "What does 'Nervous' mean?",
        options: ["Bangga", "Gugup", "Marah"],
        correctIndex: 1,
        explanation: "Nervous = Gugup / Grogi!"
    },
    {
        question: "What does 'Confused' mean?",
        options: ["Bingung", "Senang", "Sedih"],
        correctIndex: 0,
        explanation: "Confused = Bingung!"
    },
    // EXPRESSING FEELINGS
    {
        question: "Complete: I _____ happy.",
        options: ["am", "is", "are"],
        correctIndex: 0,
        explanation: "'I am happy' - use 'am' with I."
    },
    {
        question: "Complete: I feel _____ today.",
        options: ["good", "sad", "both are correct"],
        correctIndex: 2,
        explanation: "Both 'I feel good' and 'I feel sad' are correct! Any emotion works."
    },
    {
        question: "Complete: I am excited _____ it's my birthday!",
        options: ["so", "because", "and"],
        correctIndex: 1,
        explanation: "'Because' gives the reason: 'I am excited because it's my birthday!'"
    },
    // ASKING ABOUT FEELINGS
    {
        question: "How do you ask someone's feelings?",
        options: ["How are you?", "What is your name?", "How old are you?"],
        correctIndex: 0,
        explanation: "'How are you?' asks about feelings and well-being."
    },
    {
        question: "What do you say if someone looks upset?",
        options: ["Go away!", "Are you okay?", "I don't care."],
        correctIndex: 1,
        explanation: "'Are you okay?' shows care and concern."
    },
    // FULL SENTENCES
    {
        question: "Which is the MOST expressive?",
        options: [
            "I am happy.",
            "I am excited because today is my birthday!",
            "Happy."
        ],
        correctIndex: 1,
        explanation: "Adding 'because' with a reason makes it more expressive!"
    },
    {
        question: "Complete: She _____ sad.",
        options: ["am", "is", "are"],
        correctIndex: 1,
        explanation: "'She is sad' - use 'is' with she/he/it."
    },
    {
        question: "Complete: They _____ tired.",
        options: ["am", "is", "are"],
        correctIndex: 2,
        explanation: "'They are tired' - use 'are' with they/we/you."
    },
    {
        question: "What does 'Proud' mean?",
        options: ["Malu", "Bangga", "Khawatir"],
        correctIndex: 1,
        explanation: "Proud = Bangga (feeling good about something you did)"
    },
    // BONUS QUESTIONS
    {
        question: "Complete: I feel _____ because I won!",
        options: ["sad", "happy", "tired"],
        correctIndex: 1,
        explanation: "You feel happy when you win!"
    },
    {
        question: "What do you say when someone looks sad?",
        options: ["Go away!", "Are you okay?", "I don't care."],
        correctIndex: 1,
        explanation: "'Are you okay?' shows you care about their feelings."
    },
    {
        question: "Complete: She _____ excited for the party.",
        options: ["am", "is", "are"],
        correctIndex: 1,
        explanation: "'She is excited' - use 'is' with she/he/it."
    },
    {
        question: "What does 'grumpy' mean?",
        options: ["Senang", "Moody/Pemarah", "Bersemangat"],
        correctIndex: 1,
        explanation: "Grumpy = Moody/Pemarah (bad mood)."
    },
    {
        question: "Complete: They _____ happy today.",
        options: ["am", "is", "are"],
        correctIndex: 2,
        explanation: "'They are happy' - use 'are' with they."
    },
    {
        question: "When do you feel nervous?",
        options: ["Before a test", "After winning", "When eating ice cream"],
        correctIndex: 0,
        explanation: "Many people feel nervous before a test!"
    },
    {
        question: "What does 'worried' mean?",
        options: ["Khawatir", "Senang", "Marah"],
        correctIndex: 0,
        explanation: "Worried = Khawatir (concerned about something)."
    },
    {
        question: "Complete: We _____ tired after playing.",
        options: ["am", "is", "are"],
        correctIndex: 2,
        explanation: "'We are tired' - use 'are' with we."
    },
    {
        question: "What do you say when you feel sick?",
        options: ["I am happy!", "I don't feel well.", "I am excited!"],
        correctIndex: 1,
        explanation: "'I don't feel well' is what you say when sick."
    },
    {
        question: "Complete: I feel bored _____ it's raining.",
        options: ["so", "because", "and"],
        correctIndex: 1,
        explanation: "'Because' gives the reason for feeling bored."
    },
    {
        question: "What does 'embarrassed' mean?",
        options: ["Bangga", "Malu", "Senang"],
        correctIndex: 1,
        explanation: "Embarrassed = Malu (uncomfortable in a social situation)."
    },
    {
        question: "How do you ask about feelings politely?",
        options: ["What?!", "How are you feeling?", "Why you sad?"],
        correctIndex: 1,
        explanation: "'How are you feeling?' is the polite way to ask."
    },
    {
        question: "Complete: He looks _____. (sad)",
        options: ["happy", "sad", "excited"],
        correctIndex: 1,
        explanation: "'He looks sad' - describing his appearance/emotion."
    }
];
