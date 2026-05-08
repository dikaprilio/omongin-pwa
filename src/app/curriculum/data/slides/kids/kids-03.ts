import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "My Family Tree 👨‍👩‍👧‍👦",
        subtitle: "Describing Family Members",
        teacherNote: "Goal: Bisa cerita tentang Papa/Mama menggunakan 'He is...' dan 'She is...' dengan benar."
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about family! ❤️",
        content: [
            "👨‍👩‍👧 How many people are in your family? (Berapa orang di keluargamu?)",
            "🏠 Do you live with your grandparents? (Tinggal dengan kakek/nenek?)",
            "👶 Are you the oldest or youngest? (Kamu paling tua atau paling muda?)",
            "🐶 Do you have pets in your family? (Punya hewan peliharaan?)",
            "❤️ Who is your favorite family member? (Siapa anggota keluarga favoritmu?)"
        ],
        teacherNote: "Warming up! Be sensitive - not all families look the same. Keep it inclusive!"
    },
    // SLIDE 3 - FAMILY MEMBERS
    {
        type: 'vocabulary',
        title: "Family Members 👨‍👩‍👧‍👦",
        subtitle: "Anggota keluarga",
        vocabulary: [
            { term: "Mother / Mom / Mama", meaning: "Ibu", example: "My mom is kind." },
            { term: "Father / Dad / Papa", meaning: "Ayah", example: "My dad is strong." },
            { term: "Parents", meaning: "Orang tua", example: "My parents love me." },
            { term: "Brother", meaning: "Saudara laki-laki", example: "My brother is 10." },
            { term: "Sister", meaning: "Saudara perempuan", example: "My sister is cute." },
            { term: "Sibling(s)", meaning: "Saudara kandung", example: "I have two siblings." },
            { term: "Grandmother / Grandma", meaning: "Nenek", example: "My grandma cooks well." },
            { term: "Grandfather / Grandpa", meaning: "Kakek", example: "My grandpa tells stories." },
            { term: "Grandparents", meaning: "Kakek-nenek", example: "I visit my grandparents." }
        ],
        teacherNote: "Teach 'parents' and 'grandparents' as plural words. Match to family photos if kids have them!"
    },
    // SLIDE 4 - MORE FAMILY
    {
        type: 'vocabulary',
        title: "Extended Family 👨‍👩‍👧‍👦",
        subtitle: "Keluarga besar",
        vocabulary: [
            { term: "Uncle", meaning: "Paman / Om", example: "My uncle lives in Jakarta." },
            { term: "Aunt", meaning: "Bibi / Tante", example: "My aunt is a teacher." },
            { term: "Cousin", meaning: "Sepupu", example: "I play with my cousin." },
            { term: "Baby", meaning: "Bayi", example: "We have a new baby!" },
            { term: "Twins", meaning: "Kembar", example: "My cousins are twins." },
            { term: "Family", meaning: "Keluarga", example: "I love my family." },
            { term: "Relatives", meaning: "Kerabat", example: "We visit our relatives." }
        ],
        teacherNote: "Note: 'Cousin' is used for both male and female in English!"
    },
    // SLIDE 5 - DESCRIBING FAMILY
    {
        type: 'vocabulary',
        title: "Describing Words (Adjectives)",
        subtitle: "Kata sifat untuk keluarga",
        vocabulary: [
            { term: "Kind", meaning: "Baik hati", example: "My mom is kind." },
            { term: "Funny", meaning: "Lucu", example: "My dad is funny." },
            { term: "Strict", meaning: "Tegas / Galak", example: "My dad is strict." },
            { term: "Smart", meaning: "Pintar", example: "My sister is smart." },
            { term: "Tall", meaning: "Tinggi", example: "My brother is tall." },
            { term: "Short", meaning: "Pendek", example: "My grandma is short." },
            { term: "Young", meaning: "Muda", example: "My aunt is young." },
            { term: "Old", meaning: "Tua", example: "My grandpa is old." },
            { term: "Friendly", meaning: "Ramah", example: "My cousin is friendly." }
        ],
        teacherNote: "These adjectives help paint a picture of family members!"
    },
    // SLIDE 6 - FORMULA: HE IS / SHE IS
    {
        type: 'formula',
        title: "He is / She is",
        subtitle: "Dia adalah (laki-laki / perempuan)",
        formula: "He is [description] | She is [description]",
        vocabulary: [
            { term: "He is tall.", meaning: "Dia (laki) tinggi.", example: "My dad is tall." },
            { term: "She is kind.", meaning: "Dia (perempuan) baik.", example: "My mom is kind." },
            { term: "He is funny.", meaning: "Dia lucu.", example: "My brother is funny." },
            { term: "She is smart.", meaning: "Dia pintar.", example: "My sister is smart." },
            { term: "They are nice.", meaning: "Mereka baik.", example: "My parents are nice." }
        ],
        teacherNote: "IMPORTANT: He = male, She = female, They = plural. This is a key grammar point!"
    },
    // SLIDE 7 - FORMULA: FAMILY ACTIVITIES
    {
        type: 'formula',
        title: "What Does Your Family Do?",
        subtitle: "Apa yang keluargamu lakukan?",
        formula: "My family + verb / My [member] + verb + s",
        vocabulary: [
            { term: "My family likes to...", meaning: "Keluarga saya suka...", example: "My family likes to travel." },
            { term: "My mom cooks...", meaning: "Ibuku memasak...", example: "My mom cooks delicious food." },
            { term: "My dad works as...", meaning: "Ayahku bekerja sebagai...", example: "My dad works as a teacher." },
            { term: "We eat together...", meaning: "Kami makan bersama...", example: "We eat together every night." },
            { term: "My brother plays...", meaning: "Saudaraku bermain...", example: "My brother plays football." }
        ],
        teacherNote: "Don't forget the 'S' for He/She/It! My mom cookS, My dad workS."
    },
    // SLIDE 8 - COMPARISON: WRONG vs RIGHT
    {
        type: 'comparison',
        title: "Common Mistakes",
        subtitle: "Kesalahan umum",
        comparison: [
            { wrong: "He is my mom.", right: "She is my mom." },
            { wrong: "She is my dad.", right: "He is my dad." },
            { wrong: "My mom work in office.", right: "My mom works in an office." },
            { wrong: "My dad cook food.", right: "My dad cooks food." },
            { wrong: "He kind.", right: "He is kind." }
        ],
        teacherNote: "Common errors: Wrong gender (He/She) and missing 'is' or verb 'S'."
    },
    // SLIDE 9 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: Talking About Family 👨‍👩‍👧",
        subtitle: "Describing family members",
        caseStudy: {
            scenario: "Bercerita tentang keluarga sendiri.",
            template: "A: Tell me about your family!\nB: There are 4 people in my family.\nA: Who are they?\nB: My mom, my dad, my brother, and me.\nA: What is your mom like?\nB: She is kind and smart. She cooks delicious food!\nA: What about your dad?\nB: He is tall and funny. He works as an engineer."
        },
        teacherNote: "DEMO: Model using He/She correctly. Ask follow-up questions!"
    },
    // SLIDE 10 - CONVERSATION EXAMPLE 2
    {
        type: 'case-study',
        title: "Conversation 2: Family Activities 🏠",
        subtitle: "Talking about what families do together",
        caseStudy: {
            scenario: "Bercerita tentang kegiatan keluarga.",
            template: "A: What does your family like to do?\nB: We like to eat together. My mom cooks, and my dad helps.\nA: That sounds nice! What else?\nB: On weekends, we visit my grandparents.\nA: What do you do there?\nB: My grandma tells stories. My grandpa teaches me chess.\nA: Your family sounds fun!"
        },
        teacherNote: "Show how to talk about family activities and relationships."
    },
    // SLIDE 11 - ROLEPLAY 1: FAMILY INTRO
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Introduce Your Family 🏠",
        subtitle: "A = Friend | B = You",
        caseStudy: {
            scenario: "Memperkenalkan keluarga kepada teman.",
            template: "A: Tell me about your family!\nB: There are _____ people in my family.\nA: Who are they?\nB: _____.\nA: What is your mom/dad like?\nB: He/She is _____. He/She _____.\nA: Do you have siblings?\nB: Yes, I have _____. / No, I'm an only child."
        },
        teacherNote: "GILIRAN MURID: Practice He/She with real family descriptions."
    },
    // SLIDE 12 - ROLEPLAY 2: FAMILY GUESSING
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: Guess Who? 🕵️",
        subtitle: "A = Guesser | B = Describer",
        caseStudy: {
            scenario: "Tebak anggota keluarga dari deskripsi.",
            template: "B: I want to tell you about someone in my family.\nA: Okay!\nB: She is tall and kind. She cooks well.\nA: Is it your mom?\nB: Yes! Now you try.\nA: He is funny and works in an office..."
        },
        teacherNote: "GAME: Describe a family member without saying their name. Others guess!"
    },
    // SLIDE 13 - MICRO-DRILL: HE OR SHE?
    {
        type: 'micro-drill',
        title: "He or She Challenge! 🎯",
        subtitle: "Choose the correct pronoun",
        mission: [
            "1. _____ is my mom. (He/She)",
            "2. _____ is my dad. (He/She)",
            "3. _____ is my brother. (He/She)",
            "4. _____ is my sister. (He/She)",
            "5. _____ are my parents. (He/She/They)"
        ],
        teacherNote: "Rapid fire! Test He/She/They understanding. Speed round!"
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Ayah", sayThis: "He is my dad.", dontSayThis: "She is my dad." },
            { context: "Ibu", sayThis: "She is my mom.", dontSayThis: "He is my mom." },
            { context: "Dia tinggi (laki)", sayThis: "He is tall.", dontSayThis: "He tall." },
            { context: "Kerja dengan S", sayThis: "My mom works.", dontSayThis: "My mom work." },
            { context: "Jamak", sayThis: "They are my parents.", dontSayThis: "He is my parents." }
        ],
        teacherNote: "Review He/She/They and the S rule for verbs."
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Family Tree: Gambar pohon keluarga dan label dalam Inggris!",
            "2. Family Interview: Wawancara orang tuamu dalam Inggris, catat 3 fakta!",
            "3. Family Photo Description: Pilih foto keluarga, deskripsikan setiap orang!"
        ],
        teacherNote: "Family-themed homework connects learning to real life!"
    }
];

export const quiz: QuizQuestion[] = [
    // FAMILY VOCABULARY
    {
        question: "Who is the mother?",
        options: ["Dad", "Mom", "Brother"],
        correctIndex: 1,
        explanation: "Mom (or mother) is the female parent!"
    },
    {
        question: "Who is the father?",
        options: ["Mom", "Dad", "Sister"],
        correctIndex: 1,
        explanation: "Dad (or father) is the male parent!"
    },
    {
        question: "What do you call your father's mother?",
        options: ["Aunt", "Grandma", "Cousin"],
        correctIndex: 1,
        explanation: "Your father's mother is your grandma (grandmother)!"
    },
    {
        question: "What do you call your mother's brother?",
        options: ["Uncle", "Aunt", "Cousin"],
        correctIndex: 0,
        explanation: "Your mother's brother is your uncle!"
    },
    {
        question: "What do you call your uncle's child?",
        options: ["Brother", "Cousin", "Sister"],
        correctIndex: 1,
        explanation: "Your uncle's child is your cousin!"
    },
    // HE/SHE/THEY
    {
        question: "Complete: _____ is my dad.",
        options: ["He", "She", "They"],
        correctIndex: 0,
        explanation: "Use 'He' for males (dad)!"
    },
    {
        question: "Complete: _____ is my mom.",
        options: ["He", "She", "They"],
        correctIndex: 1,
        explanation: "Use 'She' for females (mom)!"
    },
    {
        question: "Complete: _____ are my parents.",
        options: ["He", "She", "They"],
        correctIndex: 2,
        explanation: "Use 'They' for plural (parents = 2 people)!"
    },
    {
        question: "Complete: _____ is my sister.",
        options: ["He", "She", "They"],
        correctIndex: 1,
        explanation: "Use 'She' for females (sister)!"
    },
    {
        question: "Complete: _____ is my brother.",
        options: ["He", "She", "They"],
        correctIndex: 0,
        explanation: "Use 'He' for males (brother)!"
    },
    // ADJECTIVES
    {
        question: "If someone is good-hearted, they are...",
        options: ["Strict", "Kind", "Funny"],
        correctIndex: 1,
        explanation: "Kind = baik hati!"
    },
    {
        question: "If someone makes you laugh, they are...",
        options: ["Strict", "Smart", "Funny"],
        correctIndex: 2,
        explanation: "Funny = lucu!"
    },
    {
        question: "The opposite of 'tall' is...",
        options: ["Young", "Short", "Old"],
        correctIndex: 1,
        explanation: "The opposite of tall (tinggi) is short (pendek)!"
    },
    // VERBS WITH S
    {
        question: "Complete: My mom _____ delicious food.",
        options: ["cook", "cooks", "cooking"],
        correctIndex: 1,
        explanation: "'My mom' = She → add S → 'cooks'!"
    },
    {
        question: "Complete: My dad _____ in an office.",
        options: ["work", "works", "working"],
        correctIndex: 1,
        explanation: "'My dad' = He → add S → 'works'!"
    },
    {
        question: "Complete: My sister _____ smart.",
        options: ["am", "is", "are"],
        correctIndex: 1,
        explanation: "'My sister' = She → use 'is'!"
    },
    // CORRECT SENTENCES
    {
        question: "Which is CORRECT?",
        options: ["He is my mom.", "She is my mom.", "They is my mom."],
        correctIndex: 1,
        explanation: "'She is my mom' - mom is female, use 'She'!"
    },
    {
        question: "Which is CORRECT?",
        options: ["She is my dad.", "He is my dad.", "They is my dad."],
        correctIndex: 1,
        explanation: "'He is my dad' - dad is male, use 'He'!"
    },
    {
        question: "Complete: My grandma _____ kind.",
        options: ["am", "is", "are"],
        correctIndex: 1,
        explanation: "'My grandma' = She → use 'is'!"
    }
];
