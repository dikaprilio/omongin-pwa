import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 7,
    path: 'presentation',
    title: "The 'Rule of Three'",
    totalQuestions: 30,
    questions: [
        {
            id: "pres-07-001",
            question: "Why is the number 'three' effective in presentations?",
            options: ["Because it is a lucky number", "Because the human brain processes and remembers patterns of three easily", "Because it makes the presentation shorter", "Because slides only have room for three words"],
            correctIndex: 1,
            explanation: "Otak manusia menyukai pola (patterns), dan 3 adalah pola terkecil yang dianggap sebagai struktur lengkap.",
            difficulty: 'easy'
        },
        {
            id: "pres-07-002",
            question: "What is the 'Pillar Formula'?",
            options: ["Building a house", "Grouping many points into three main categories", "Talking to the walls", "Using exactly three slides"],
            correctIndex: 1,
            explanation: "Pillar Formula membantu menyederhanakan informasi yang berantakan menjadi 3 'ember' (buckets) besar.",
            difficulty: 'easy'
        },
        {
            id: "pres-07-003",
            question: "Which of these is an example of an 'Alliterative' triad?",
            options: ["Red, Blue, Green", "Fast, Cheap, Good", "Practice, Patience, Persistence", "One, Two, Three"],
            correctIndex: 2,
            explanation: "Alliteration menggunakan huruf depan yang sama (P, P, P) agar lebih mudah diingat (sticky).",
            difficulty: 'medium'
        },
        {
            id: "pres-07-004",
            question: "Why should you announce 'I have three points' at the beginning?",
            options: ["To show you can count", "To provide a mental map for the audience", "To warn the audience it will be long", "To hide the data"],
            correctIndex: 1,
            explanation: "Memberikan jumlah poin di awal memberikan rasa tenang kepada audiens karena mereka tahu arah pembicaraan.",
            difficulty: 'easy'
        },
        {
            id: "pres-07-005",
            question: "What should you do if you have 5 or 6 important points?",
            options: ["Show them all on one slide", "Group them into 3 larger themes/categories", "Delete 3 points randomly", "Read them as fast as possible"],
            correctIndex: 1,
            explanation: "Prioritaskan kemudahan audiens untuk mengingat daripada kelengkapan data yang berlebihan.",
            difficulty: 'medium'
        },
        {
            id: "pres-07-006",
            question: "Working memory refers to...",
            options: ["Memory of your co-workers", "The limited amount of information the brain can hold at one time", "Doing work in your dreams", "A computer hard drive"],
            correctIndex: 1,
            explanation: "Karena working memory sangat terbatas, pengelompokan (chunking) menjadi 3 sangatlah membantu.",
            difficulty: 'hard'
        },
        {
            id: "pres-07-007",
            question: "Which of these famous phrases uses the Rule of Three?",
            options: ["I came, I saw, I conquered.", "Just do it.", "To be or not to be.", "Have a nice day."],
            correctIndex: 0,
            explanation: "Kutipan klasik ini bertahan berabad-abad salah satunya karena struktur ritme bertiganya.",
            difficulty: 'medium'
        },
        {
            id: "pres-07-008",
            question: "A 'Triad' in speech refers to...",
            options: ["A group of three related words or ideas", "A type of microphone", "The three minutes of a break", "Three different presenters"],
            correctIndex: 0,
            explanation: "Triad (tiga serangkai) menciptakan ritme yang enak didengar telinga manusia.",
            difficulty: 'medium'
        },
        {
            id: "pres-07-009",
            question: "What is the 'Magic Number' for information retention?",
            options: ["Seven", "Three", "Ten", "One"],
            correctIndex: 1,
            explanation: "Dalam konteks komunikasi instan, 3 adalah angka tersakti untuk daya ingat.",
            difficulty: 'easy'
        },
        {
            id: "pres-07-010",
            question: "In the 'Pillar Formula', what do you do after brainstorming all your points?",
            options: ["Read them out loud", "Find common themes and group them", "Delete everything", "Pick the longest sentence"],
            correctIndex: 1,
            explanation: "Kategorisasi adalah kunci dari struktur yang rapi (Logic & Mechanics phase).",
            difficulty: 'medium'
        },
        {
            id: "pres-07-011",
            question: "Which structure is better for a 'Pro' presentation?",
            options: ["A list of 12 bullet points", "Three main pillars with sub-points", "One long paragraph", "Talking without any structure"],
            correctIndex: 1,
            explanation: "Pilar memberikan hierarki informasi yang jelas.",
            difficulty: 'easy'
        },
        {
            id: "pres-07-012",
            question: "The 'Past, Present, Future' technique is a type of...",
            options: ["Time travel", "Triad or Rule of Three structure", "Greeting", "Closing"],
            correctIndex: 1,
            explanation: "Ini adalah pengelompokan waktu yang sangat logis dan mudah diikuti audiens.",
            difficulty: 'medium'
        },
        {
            id: "pres-07-013",
            question: "What is an 'Alliteration'?",
            options: ["Using different colors", "Repeating the same sound or letter at the beginning of words", "Using long sentences", "Shouting while speaking"],
            correctIndex: 1,
            explanation: "Huruf depan yang sama (misal: 'Plan, Prepare, Perform') menciptakan efek 'sticky' di memori.",
            difficulty: 'hard'
        },
        {
            id: "pres-07-014",
            question: "Should the 3 pillars have equal weight?",
            options: ["No, only the first one matters", "Yes, as much as possible to maintain balance", "No, the middle one should be the longest", "It doesn't matter"],
            correctIndex: 1,
            explanation: "Keseimbangan pilar membuat presentasi Anda terasa adil dan komprehensif.",
            difficulty: 'hard'
        },
        {
            id: "pres-07-015",
            question: "Which of these is a 'Sticky Pillar' label?",
            options: ["The update on the budget from last week", "Budget, Team, Vision", "Miscellaneous items of importance", "A list of things to do next Monday"],
            correctIndex: 1,
            explanation: "Label pendek (1-3 kata) jauh lebih membekas daripada kalimat yang bertele-tele.",
            difficulty: 'medium'
        },
        {
            id: "pres-07-016",
            question: "If your topic is 'Strategy', which triad is best?",
            options: ["Planning, Execution, Results", "Monday, Tuesday, Wednesday", "A, B, C", "First, Second, Third"],
            correctIndex: 0,
            explanation: "Ini menggambarkan siklus kerja yang logis (Phase 2: Logic).",
            difficulty: 'easy'
        },
        {
            id: "pres-07-017",
            question: "What is the 'Information Overload' trap?",
            options: ["Not giving enough info", "Giving too much info until the audience shuts down", "Using a broken projector", "Talking in your sleep"],
            correctIndex: 1,
            explanation: "Memberi terlalu banyak poin justru membuat audiens tidak ingat satu poin pun.",
            difficulty: 'easy'
        },
        {
            id: "pres-07-018",
            question: "The 'Rule of Three' is used in?",
            options: ["Public speaking only", "Writing, marketing, and design too", "Only for children's stories", "Only for math"],
            correctIndex: 1,
            explanation: "Ini adalah prinsip komunikasi universal.",
            difficulty: 'medium'
        },
        {
            id: "pres-07-019",
            question: "When should you decide on your 3 pillars?",
            options: ["After the slides are finished", "During the planning/structuring stage", "When you are on stage", "Never"],
            correctIndex: 1,
            explanation: "Tiga pilar ini adalah pondasi utama dari isi presentasi Anda.",
            difficulty: 'medium'
        },
        {
            id: "pres-07-020",
            question: "Which describes the 'Rule of Three' energy?",
            options: ["Boring", "Chaotic", "Complete and satisfying", "Unfinished"],
            correctIndex: 2,
            explanation: "Tiga terasa seperti awal, tengah, dan akhir yang utuh.",
            difficulty: 'hard'
        },
        {
            id: "pres-07-021",
            question: "How do you handle 15 agenda items?",
            options: ["Spend 1 minute on each", "Categorize those 15 items into 3 main buckets of 5 items each", "Skip 12 items", "Say them all in one breath"],
            correctIndex: 1,
            explanation: "Pengelompokan (Bucketing) adalah rahasia para pembicara pro.",
            difficulty: 'hard'
        },
        {
            id: "pres-07-022",
            question: "A triad like 'Clarity, Connection, Control' is effective because...",
            options: ["It sounds long", "It uses alliteration with the letter 'C'", "It has many words", "It is hard to say"],
            correctIndex: 1,
            explanation: "Penggunaan huruf depan yang sama sangat membantu daya ingat jangka pendek.",
            difficulty: 'medium'
        },
        {
            id: "pres-07-023",
            question: "Which part of the presentation uses Rule of Three most?",
            options: ["The title", "The body/content", "The greeting", "The snacks"],
            correctIndex: 1,
            explanation: "Body presentasi adalah tempat Anda membangun argumen utama lewat pilar-pilar.",
            difficulty: 'easy'
        },
        {
            id: "pres-07-024",
            question: "What is 'Mental Map' in presentations?",
            options: ["A literal map of the mind", "An understanding by the audience of where they are in the talk", "A GPS device", "A list of fonts"],
            correctIndex: 1,
            explanation: "Rule of Three memberikan 'Peta Mental' yang sangat jelas bagi audiens.",
            difficulty: 'hard'
        },
        {
            id: "pres-07-025",
            question: "If you use 4 points instead of 3, is it okay?",
            options: ["Yes, but it's less memorable", "No, it's illegal", "Yes, 4 is better than 3", "Only if you say it fast"],
            correctIndex: 0,
            explanation: "4 masih oke, tapi daya ingat audiens mulai menurun tajam setelah poin ke-3.",
            difficulty: 'medium'
        },
        {
            id: "pres-07-026",
            question: "A triad for a 'Problem' could be:",
            options: ["Old, Broken, Expensive", "New, Fixed, Cheap", "Monday, June, Rain", "Coffee, Tea, Water"],
            correctIndex: 0,
            explanation: "Ini membangun urgensi (pain point) lewat 3 pilar masalah.",
            difficulty: 'medium'
        },
        {
            id: "pres-07-027",
            question: "Who is the focus of the Rule of Three?",
            options: ["The speaker's ego", "The audience's brain and memory limit", "The company's history", "The slides"],
            correctIndex: 1,
            explanation: "Semua struktur ditujukan untuk mempermudah audiens, bukan sekadar gaya pembicara.",
            difficulty: 'easy'
        },
        {
            id: "pres-07-028",
            question: "What is 'Rhythmic Pattern'?",
            options: ["Dancing", "A satisfying sound flow produced by groups of three", "Talking like a robot", "Fast talking"],
            correctIndex: 1,
            explanation: "Pola ritme bertiga terasa harmonis bagi pendengar.",
            difficulty: 'hard'
        },
        {
            id: "pres-07-029",
            question: "The 'Triad Checklist' helps you to...",
            options: ["Count to ten", "Audit if your structure is balanced and catchy", "Choose colors", "Check your grammar"],
            correctIndex: 1,
            explanation: "Auditing struktur sangat penting agar pilar Anda tidak timpang.",
            difficulty: 'medium'
        },
        {
            id: "pres-07-030",
            question: "Final test: You have 30 minutes to talk. How many main points?",
            options: ["10 points", "30 points", "3 points", "None"],
            correctIndex: 2,
            explanation: "Terlepas dari durasinya, 3 pilar tetap menjadi batas aman untuk daya ingat audiens.",
            difficulty: 'easy'
        }
    ]
};
