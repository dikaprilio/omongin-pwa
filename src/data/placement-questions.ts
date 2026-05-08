export type QuestionType = 'mcq' | 'pronunciation';

export interface PlacementQuestion {
    id: string;
    type: QuestionType;
    difficulty: 1 | 2 | 3 | 4 | 5; // 1=Beginner, 5=Advanced
    category: 'grammar' | 'vocabulary' | 'reading' | 'speaking' | 'listening' | 'critical_thinking';

    // MCQ specific
    question?: string;
    questionIndo?: string; // Optional translation for lower levels
    options?: { id: string; text: string }[];
    correctAnswer?: string;
    explanation?: string; // For review/learning
    passage?: string; // For reading comprehension/critical thinking
    passageTitle?: string;

    // Pronunciation specific
    sentence?: string;
    sentenceIndo?: string;
    focusPhonemes?: string[]; // e.g., ['th', 'v', 'r']
}

export const placementQuestions: PlacementQuestion[] = [
    // ==========================================
    // LEVEL 1: BEGINNER (A1)
    // ==========================================
    {
        id: 'g-1-1',
        type: 'mcq',
        difficulty: 1,
        category: 'grammar',
        question: "I ______ to the market yesterday.",
        questionIndo: "Saya ______ ke pasar kemarin.",
        options: [
            { id: 'a', text: 'go' },
            { id: 'b', text: 'gone' },
            { id: 'c', text: 'went' },
            { id: 'd', text: 'going' }
        ],
        correctAnswer: 'c',
        explanation: "Use 'went' (Past Tense) because the time 'yesterday' is specified."
    },
    {
        id: 'v-1-1',
        type: 'mcq',
        difficulty: 1,
        category: 'vocabulary',
        question: "My brother's daughter is my ______.",
        questionIndo: "Anak perempuan saudara laki-laki saya adalah ______ saya.",
        options: [
            { id: 'a', text: 'nephew' },
            { id: 'b', text: 'niece' },
            { id: 'c', text: 'cousin' },
            { id: 'd', text: 'aunt' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'g-1-2',
        type: 'mcq',
        difficulty: 1,
        category: 'grammar',
        question: "She ______ a book right now.",
        questionIndo: "Dia ______ buku sekarang.",
        options: [
            { id: 'a', text: 'read' },
            { id: 'b', text: 'is reading' },
            { id: 'c', text: 'reads' },
            { id: 'd', text: 'reading' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'v-1-2',
        type: 'mcq',
        difficulty: 1,
        category: 'vocabulary',
        question: "A person who treats sick people is a ______.",
        questionIndo: "Orang yang mengobati orang sakit adalah ______.",
        options: [
            { id: 'a', text: 'teacher' },
            { id: 'b', text: 'farmer' },
            { id: 'c', text: 'doctor' },
            { id: 'd', text: 'pilot' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 'g-1-3',
        type: 'mcq',
        difficulty: 1,
        category: 'grammar',
        question: "______ they like coffee?",
        questionIndo: "______ mereka suka kopi?",
        options: [
            { id: 'a', text: 'Do' },
            { id: 'b', text: 'Does' },
            { id: 'c', text: 'Are' },
            { id: 'd', text: 'Is' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 'v-1-3',
        type: 'mcq',
        difficulty: 1,
        category: 'vocabulary',
        question: "What is the opposite of 'hot'?",
        options: [
            { id: 'a', text: 'cold' },
            { id: 'b', text: 'warm' },
            { id: 'c', text: 'wet' },
            { id: 'd', text: 'dry' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 'g-1-4',
        type: 'mcq',
        difficulty: 1,
        category: 'grammar',
        question: "There ______ two apples on the table.",
        options: [
            { id: 'a', text: 'is' },
            { id: 'b', text: 'am' },
            { id: 'c', text: 'are' },
            { id: 'd', text: 'be' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 'v-1-4',
        type: 'mcq',
        difficulty: 1,
        category: 'vocabulary',
        question: "We eat breakfast in the ______.",
        options: [
            { id: 'a', text: 'morning' },
            { id: 'b', text: 'afternoon' },
            { id: 'c', text: 'evening' },
            { id: 'd', text: 'night' }
        ],
        correctAnswer: 'a'
    },

    // ==========================================
    // LEVEL 2: ELEMENTARY (A2)
    // ==========================================
    {
        id: 'g-2-1',
        type: 'mcq',
        difficulty: 2,
        category: 'grammar',
        question: "If I ______ you, I would study harder.",
        questionIndo: "Jika saya jadi kamu, saya akan belajar lebih giat.",
        options: [
            { id: 'a', text: 'was' },
            { id: 'b', text: 'am' },
            { id: 'c', text: 'were' },
            { id: 'd', text: 'be' }
        ],
        correctAnswer: 'c',
        explanation: "Conditional Type 2 uses 'were' for all subjects."
    },
    {
        id: 'v-2-1',
        type: 'mcq',
        difficulty: 2,
        category: 'vocabulary',
        question: "Please ______ your shoes before entering the house.",
        options: [
            { id: 'a', text: 'take out' },
            { id: 'b', text: 'take off' },
            { id: 'c', text: 'put off' },
            { id: 'd', text: 'put away' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'g-2-2',
        type: 'mcq',
        difficulty: 2,
        category: 'grammar',
        question: "He ______ lived here for five years.",
        options: [
            { id: 'a', text: 'is' },
            { id: 'b', text: 'has' },
            { id: 'c', text: 'have' },
            { id: 'd', text: 'was' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'v-2-2',
        type: 'mcq',
        difficulty: 2,
        category: 'vocabulary',
        question: "I'm looking forward ______ you again.",
        options: [
            { id: 'a', text: 'to see' },
            { id: 'b', text: 'seeing' },
            { id: 'c', text: 'to seeing' },
            { id: 'd', text: 'see' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 'g-2-3',
        type: 'mcq',
        difficulty: 2,
        category: 'grammar',
        question: "This is the restaurant ______ we met last year.",
        options: [
            { id: 'a', text: 'which' },
            { id: 'b', text: 'where' },
            { id: 'c', text: 'that' },
            { id: 'd', text: 'when' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'v-2-3',
        type: 'mcq',
        difficulty: 2,
        category: 'vocabulary',
        question: "Can you ______ the volume? It's too loud.",
        options: [
            { id: 'a', text: 'turn up' },
            { id: 'b', text: 'turn down' },
            { id: 'c', text: 'turn on' },
            { id: 'd', text: 'turn off' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'g-2-4',
        type: 'mcq',
        difficulty: 2,
        category: 'grammar',
        question: "I ______ coffee, but I prefer tea.",
        options: [
            { id: 'a', text: 'like' },
            { id: 'b', text: 'likes' },
            { id: 'c', text: 'liking' },
            { id: 'd', text: 'am liking' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 'v-2-4',
        type: 'mcq',
        difficulty: 2,
        category: 'vocabulary',
        question: "We ran ______ of gas on the highway.",
        options: [
            { id: 'a', text: 'away' },
            { id: 'b', text: 'out' },
            { id: 'c', text: 'over' },
            { id: 'd', text: 'into' }
        ],
        correctAnswer: 'b'
    },

    // ==========================================
    // LEVEL 3: INTERMEDIATE (B1)
    // ==========================================
    {
        id: 'g-3-1',
        type: 'mcq',
        difficulty: 3,
        category: 'grammar',
        question: "______ the rain, we went for a walk.",
        options: [
            { id: 'a', text: 'Despite' },
            { id: 'b', text: 'Although' },
            { id: 'c', text: 'Even' },
            { id: 'd', text: 'In spite' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 'v-3-1',
        type: 'mcq',
        difficulty: 3,
        category: 'vocabulary',
        question: "The meeting was ______ until next week.",
        options: [
            { id: 'a', text: 'called off' },
            { id: 'b', text: 'put off' },
            { id: 'c', text: 'taken off' },
            { id: 'd', text: 'gone off' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'g-3-2',
        type: 'mcq',
        difficulty: 3,
        category: 'grammar',
        question: "I wish I ______ more money last year.",
        options: [
            { id: 'a', text: 'save' },
            { id: 'b', text: 'saved' },
            { id: 'c', text: 'had saved' },
            { id: 'd', text: 'would save' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 'v-3-2',
        type: 'mcq',
        difficulty: 3,
        category: 'vocabulary',
        question: "He had to ______ the match due to an injury.",
        options: [
            { id: 'a', text: 'give up' },
            { id: 'b', text: 'give in' },
            { id: 'c', text: 'give away' },
            { id: 'd', text: 'give back' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 'g-3-3',
        type: 'mcq',
        difficulty: 3,
        category: 'grammar',
        question: "She asked me where ______.",
        options: [
            { id: 'a', text: 'was I going' },
            { id: 'b', text: 'I was going' },
            { id: 'c', text: 'am I going' },
            { id: 'd', text: 'I am going' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'reading-3-1',
        type: 'mcq',
        difficulty: 3,
        category: 'reading',
        passageTitle: "The Daily Commute",
        passage: "Commuting to work in a big city can be stressful. Trains are often delayed, and buses are overcrowded. However, many people use this time productively by reading books or listening to podcasts. Some even claim it is the only time of day they have to themselves.",
        question: "What is the main advantage of commuting mentioned in the text?",
        options: [
            { id: 'a', text: 'It is a stress-free experience.' },
            { id: 'b', text: 'It allows people to travel quickly.' },
            { id: 'c', text: 'It provides personal time for activities.' },
            { id: 'd', text: 'It is a cheap way to travel.' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 'reading-3-2',
        type: 'mcq',
        difficulty: 3,
        category: 'reading',
        passageTitle: "Email Etiquette",
        passage: "When writing a professional email, it is important to be concise. Avoid using slang or overly casual language. Always check for spelling errors before clicking send, as mistakes can make you appear careless.",
        question: "Why should you check for spelling errors?",
        options: [
            { id: 'a', text: 'To avoid being rude.' },
            { id: 'b', text: 'To maintain a professional image.' },
            { id: 'c', text: 'Because email software requires it.' },
            { id: 'd', text: 'To make the email longer.' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'logic-3-1',
        type: 'mcq',
        difficulty: 3,
        category: 'critical_thinking',
        question: "If all doctors are educated, and John is a doctor, then...",
        options: [
            { id: 'a', text: 'John is smart.' },
            { id: 'b', text: 'John is educated.' },
            { id: 'c', text: 'John is rich.' },
            { id: 'd', text: 'John likes medicine.' }
        ],
        correctAnswer: 'b'
    },

    // ==========================================
    // LEVEL 4: UPPER INTERMEDIATE (B2)
    // ==========================================
    {
        id: 'g-4-1',
        type: 'mcq',
        difficulty: 4,
        category: 'grammar',
        question: "Not only ______ the competition, but he also broke the record.",
        options: [
            { id: 'a', text: 'he won' },
            { id: 'b', text: 'did he win' },
            { id: 'c', text: 'he did win' },
            { id: 'd', text: 'won he' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'v-4-1',
        type: 'mcq',
        difficulty: 4,
        category: 'vocabulary',
        question: "His ______ response was unexpected given the situation.",
        options: [
            { id: 'a', text: 'flippant' },
            { id: 'b', text: 'resplendent' },
            { id: 'c', text: 'innocuous' },
            { id: 'd', text: 'redundant' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 'g-4-2',
        type: 'mcq',
        difficulty: 4,
        category: 'grammar',
        question: "It is essential that every student ______ on time.",
        options: [
            { id: 'a', text: 'is' },
            { id: 'b', text: 'be' },
            { id: 'c', text: 'are' },
            { id: 'd', text: 'was' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'g-4-3',
        type: 'mcq',
        difficulty: 4,
        category: 'grammar',
        question: "By the time we arrived, the movie ______.",
        options: [
            { id: 'a', text: 'already started' },
            { id: 'b', text: 'had already started' },
            { id: 'c', text: 'has already started' },
            { id: 'd', text: 'would already start' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'v-4-2',
        type: 'mcq',
        difficulty: 4,
        category: 'vocabulary',
        question: "The jury ______ the defendant of all charges.",
        options: [
            { id: 'a', text: 'acquitted' },
            { id: 'b', text: 'convicted' },
            { id: 'c', text: 'indicted' },
            { id: 'd', text: 'sentenced' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 'reading-4-1',
        type: 'mcq',
        difficulty: 4,
        category: 'reading',
        passageTitle: "Remote Work Trends",
        passage: "The shift to remote work has fundamentally altered the corporate landscape. While employees cite flexibility and lack of commute as major benefits, employers are increasingly concerned about the erosion of company culture. A recent survey suggests that a hybrid model, combining in-office collaboration with remote focus time, may be the optimal solution, though implementation remains a logistical hurdle for many legacy firms.",
        question: "According to the passage, what is the main challenge employers associate with remote work?",
        options: [
            { id: 'a', text: 'Decreased employee productivity.' },
            { id: 'b', text: 'Technical difficulties with software.' },
            { id: 'c', text: 'Weakening of shared organizational values.' },
            { id: 'd', text: 'Logistical costs of office space.' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 'reading-4-2',
        type: 'mcq',
        difficulty: 4,
        category: 'reading',
        passageTitle: "Urban Planning",
        passage: "Proponents of the new urban policy argue that if we ban cars in the city center to reduce local pollution, eventually the government will find an excuse to ban us from leaving our homes at all. They claim this is a clear sign of overreach, and therefore, we should not ban cars to protect our fundamental freedoms.",
        question: "The argument against banning cars relies primarily on which logical fallacy?",
        options: [
            { id: 'a', text: 'Slippery Slope: suggesting a small step leads to an extreme outcome.' },
            { id: 'b', text: 'Ad Hominem: attacking the character of the urban planners.' },
            { id: 'c', text: 'Straw Man: misrepresenting the pollution statistics.' },
            { id: 'd', text: 'Circular Reasoning: assuming the conclusion in the premise.' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 'reading-4-3',
        type: 'mcq',
        difficulty: 4,
        category: 'reading',
        passageTitle: "Cognitive Bias",
        passage: "Confirmation bias is the tendency to search for, interpret, favor, and recall information in a way that confirms or supports one's prior beliefs or values. People display this bias when they gather or remember information selectively, or when they interpret it in a biased way. The effect is stronger for desired outcomes, for emotionally charged issues, and for deeply entrenched beliefs.",
        question: "Based on the text, confirmation bias is most likely to occur when:",
        options: [
            { id: 'a', text: 'A person is presented with neutral statistical data.' },
            { id: 'b', text: 'An individual encounters an opinion that challenges their core political views.' },
            { id: 'c', text: 'Someone is learning a completely new skill from scratch.' },
            { id: 'd', text: 'A scientist conducts a double-blind experiment.' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'logic-4-1',
        type: 'mcq',
        difficulty: 4,
        category: 'critical_thinking',
        question: "All Swans are white. This bird is black. Therefore...",
        options: [
            { id: 'a', text: 'This bird is a swan.' },
            { id: 'b', text: 'This bird is not a swan.' },
            { id: 'c', text: 'Swans can be black.' },
            { id: 'd', text: 'Birds are colorful.' }
        ],
        correctAnswer: 'b'
    },

    // ==========================================
    // LEVEL 5: ADVANCED (C1/C2)
    // ==========================================
    {
        id: 'g-5-1',
        type: 'mcq',
        difficulty: 5,
        category: 'grammar',
        question: "Had I known about the traffic, I ______ earlier.",
        options: [
            { id: 'a', text: 'would leave' },
            { id: 'b', text: 'would have left' },
            { id: 'c', text: 'will have left' },
            { id: 'd', text: 'left' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'v-5-1',
        type: 'mcq',
        difficulty: 5,
        category: 'vocabulary',
        question: "Her argument was quite ______, lacking any real substance.",
        options: [
            { id: 'a', text: 'vacuous' },
            { id: 'b', text: 'meticulous' },
            { id: 'c', text: 'tenacious' },
            { id: 'd', text: 'fortuitous' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 'g-5-2',
        type: 'mcq',
        difficulty: 5,
        category: 'grammar',
        question: "Little ______ that the police were already watching him.",
        options: [
            { id: 'a', text: 'he knew' },
            { id: 'b', text: 'did he know' },
            { id: 'c', text: 'he had known' },
            { id: 'd', text: 'was he knowing' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'v-5-2',
        type: 'mcq',
        difficulty: 5,
        category: 'vocabulary',
        question: "The CEO's ______ behavior led to his resignation.",
        options: [
            { id: 'a', text: 'unscrupulous' },
            { id: 'b', text: 'invincible' },
            { id: 'c', text: 'tenuous' },
            { id: 'd', text: 'magnanimous' }
        ],
        correctAnswer: 'a'
    },
    {
        id: 'g-5-3',
        type: 'mcq',
        difficulty: 5,
        category: 'grammar',
        question: "______ for your help, I wouldn't have finished on time.",
        options: [
            { id: 'a', text: 'Were it not' },
            { id: 'b', text: 'Had it not been' },
            { id: 'c', text: 'If it were not' },
            { id: 'd', text: 'But for' }
        ],
        correctAnswer: 'b'
    },
    {
        id: 'reading-5-1',
        type: 'mcq',
        difficulty: 5,
        category: 'reading',
        passageTitle: "Scientific Paradigms",
        passage: "In his seminal work, Thomas Kuhn argued that scientific advancement is not merely a cumulative accumulation of facts, but rather a series of peaceful interludes punctuated by intellectually violent revolutions. During these 'paradigm shifts', the entire worldview of a scientific discipline is transformed, rendering previous theories obsolete or fundamentally reinterpreted.",
        question: "Which of the following best characterizes Kuhn's view of scientific progress?",
        options: [
            { id: 'a', text: 'A steady, linear progression of knowledge building upon past discoveries.' },
            { id: 'b', text: 'A cyclical process where old theories are constantly recycled.' },
            { id: 'c', text: 'A discontinuous process characterized by periods of stability disrupted by radical conceptual changes.' },
            { id: 'd', text: 'A random series of discoveries with no underlying structure or pattern.' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 'reading-5-2',
        type: 'mcq',
        difficulty: 5,
        category: 'reading',
        passageTitle: "Economic Theory",
        passage: "The concept of 'rational expectations' posits that individuals base their decisions on three primary factors: their human rationality, the information available to them, and their past experiences. Consequently, this theory suggests that current expectations in an economy are equivalent to what the future state of the economy will likely be, effectively rendering systematic monetary policy errors short-lived.",
        question: "What is a key implication of the 'rational expectations' theory described in the text?",
        options: [
            { id: 'a', text: 'People are generally irrational and emotional in their economic choices.' },
            { id: 'b', text: 'Government intervention is always necessary to correct market failures.' },
            { id: 'c', text: 'Economic policies based on fooling the public will likely fail because people adapt their expectations.' },
            { id: 'd', text: 'Past experiences are irrelevant to future economic decision-making.' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 'reading-5-3',
        type: 'mcq',
        difficulty: 5,
        category: 'reading',
        passageTitle: "Literary Analysis",
        passage: "The author's tone throughout the piece is largely celebratory and optimistic about future progress, yet he cannot help but include a few acerbic comments regarding the previous administration's catastrophic failures in policy execution. This juxtaposition serves to underscore the fragility of the newfound success.",
        question: "How does the author use the 'acerbic comments' mentioned in the text?",
        options: [
            { id: 'a', text: 'To fully denounce the current progress.' },
            { id: 'b', text: 'To provide a balanced, purely objective historical account.' },
            { id: 'c', text: 'To contrast with the optimistic tone and highlight potential risks.' },
            { id: 'd', text: 'To show support for the previous administration.' }
        ],
        correctAnswer: 'c'
    },
    {
        id: 'logic-5-1',
        type: 'mcq',
        difficulty: 5,
        category: 'critical_thinking',
        passageTitle: "Medical Diagnosis",
        passage: "Despite displaying a complete loss of motor function in his lower limbs, all detailed neurological studies of the patient consistently showed perfectly normal brain activity and nerve conductivity. Consequently, the team of doctors concluded that the primary cause of his condition was likely psychological rather than physical.",
        question: "What assumption underlies the doctors' conclusion?",
        options: [
            { id: 'a', text: 'Psychological conditions can cause physical symptoms.' },
            { id: 'b', text: 'All physical paralysis shows up in neurological studies.' },
            { id: 'c', text: 'The patient is faking the symptoms.' },
            { id: 'd', text: 'Motor function is unrelated to nerve conductivity.' }
        ],
        correctAnswer: 'b',
        explanation: "The conclusion relies on the assumption that IF it were physical, it WOULD have shown up in the tests. Since it didn't, and assuming the tests are perfect (assumption), it must be non-physical."
    },
    {
        id: 'vocab-5-3',
        type: 'mcq',
        difficulty: 5,
        category: 'vocabulary',
        question: "The diplomat's speech was so ______ that both sides interpreted it as support for their opposing positions.",
        options: [
            { id: 'a', text: 'unequivocal' },
            { id: 'b', text: 'ambiguous' },
            { id: 'c', text: 'didactic' },
            { id: 'd', text: 'polemical' }
        ],
        correctAnswer: 'b'
    },

    // ==========================================
    // PRONUNCIATION QUESTIONS (For Speaking Phase)
    // ==========================================
    {
        id: 'p-1',
        type: 'pronunciation',
        difficulty: 1,
        category: 'speaking',
        sentence: "The big blue balloon flew over the bright green trees in the park.",
        sentenceIndo: "Balon biru besar itu terbang di atas pohon-pohon hijau cerah di taman.",
        focusPhonemes: ['b', 'gr']
    },
    {
        id: 'p-1-2',
        type: 'pronunciation',
        difficulty: 1,
        category: 'speaking',
        sentence: "Seven small silver spoons were sitting steadily on the small wooden table.",
        sentenceIndo: "Tujuh sendok perak kecil diletakkan dengan stabil di atas meja kayu kecil.",
        focusPhonemes: ['s', 'v']
    },
    {
        id: 'p-2',
        type: 'pronunciation',
        difficulty: 2,
        category: 'speaking',
        sentence: "She sells many colorful sea shells by the quiet sea shore every Saturday morning.",
        sentenceIndo: "Dia menjual banyak kerang laut warna-warni di tepi pantai yang tenang setiap Sabtu pagi.",
        focusPhonemes: ['s', 'sh']
    },
    {
        id: 'p-2-2',
        type: 'pronunciation',
        difficulty: 2,
        category: 'speaking',
        sentence: "The experienced pilot flew the private plane perfectly through the stormy weather.",
        focusPhonemes: ['p', 'f']
    },
    {
        id: 'p-2-3',
        type: 'pronunciation',
        difficulty: 2,
        category: 'speaking',
        sentence: "I would like to order a large coffee with milk and sugar, please.",
        focusPhonemes: ['l', 'k']
    },
    {
        id: 'p-3',
        type: 'pronunciation',
        difficulty: 3,
        category: 'speaking',
        sentence: "The mountain weather is very pleasant during the spring season, making it perfect for long hikes.",
        focusPhonemes: ['th', 'v', 's']
    },
    {
        id: 'p-3-2',
        type: 'pronunciation',
        difficulty: 3,
        category: 'speaking',
        sentence: "Despite several challenges, the young engineer successfully designed a revolutionary new bridge.",
        focusPhonemes: ['r', 'j', 'd']
    },
    {
        id: 'p-4',
        type: 'pronunciation',
        difficulty: 4,
        category: 'speaking',
        sentence: "The environmental scientist observed that Arthur's brother gathered the rare feathers together with exceptional care.",
        focusPhonemes: ['th', 'r', 'v']
    },
    {
        id: 'p-4-2',
        type: 'pronunciation',
        difficulty: 4,
        category: 'speaking',
        sentence: "Psychologists believe that a purely peaceful presence prevents significant psychological pressure in stressful workplaces.",
        focusPhonemes: ['p', 's']
    },
    {
        id: 'p-5',
        type: 'pronunciation',
        difficulty: 5,
        category: 'speaking',
        sentence: "The statistician's sophisticated strategy seemed substantially more suspicious than his colleagues initially anticipated during the preliminary review.",
        focusPhonemes: ['s', 'st', 'sh', 'th']
    },
    {
        id: 'p-5-2',
        type: 'pronunciation',
        difficulty: 5,
        category: 'speaking',
        sentence: "Ingenious inventors inevitably implement impressive ideas that fundamentally transform how modern societies communicate and prosper.",
        focusPhonemes: ['i', 'n', 'm', 'v']
    }
];
