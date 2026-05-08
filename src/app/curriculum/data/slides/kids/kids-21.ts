import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "Show & Tell 🎤",
        subtitle: "Public Speaking for Kids",
        teacherNote: "Goal: Anak bisa melakukan presentasi sederhana selama 1 menit dengan opening, isi, dan closing yang baik. Public speaking dasar dengan percaya diri!"
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about presenting! 🌟",
        content: [
            "🎤 Have you ever spoken in front of class? (Pernah bicara di depan kelas?)",
            "😊 How did you feel? Nervous? Excited? (Gimana rasanya?)",
            "👀 Do you like showing your favorite things to friends? (Suka nunjukin barang favorit?)",
            "💪 What makes a good presentation? (Apa yang bikin presentasi bagus?)",
            "🎯 Do you want to be more confident? (Mau lebih percaya diri?)"
        ],
        teacherNote: "Warming up! Acknowledge that public speaking can be scary. Encourage and support!"
    },
    // SLIDE 3 - WHAT IS SHOW & TELL
    {
        type: 'concept',
        title: "What is Show & Tell? 📦",
        subtitle: "Apa itu Show & Tell?",
        content: [
            "📦 SHOW = Tunjukkan benda favoritmu",
            "🗣️ TELL = Ceritakan tentang benda itu",
            "⏱️ TIME = 1 menit saja!",
            "🎯 GOAL = Latih berbicara di depan umum",
            "😊 HAVE FUN = Jangan tegang, enjoy!"
        ],
        teacherNote: "Explain the concept. It's about sharing something you love, not a test!"
    },
    // SLIDE 4 - THE 3-PART STRUCTURE
    {
        type: 'concept',
        title: "The 3-Part Structure 📝",
        subtitle: "Struktur 3 bagian",
        content: [
            "1️⃣ OPENING (15 detik): Sapa dan perkenalkan",
            "    → 'Hi everyone! Today I want to show you my...'",
            "",
            "2️⃣ BODY (30 detik): Ceritakan 3 hal tentang benda",
            "    → What is it? Why is it special? When did you get it?",
            "",
            "3️⃣ CLOSING (15 detik): Selesai dan ucap terima kasih",
            "    → 'That's all. Thank you for listening!'"
        ],
        teacherNote: "This simple structure makes it easy for kids to organize their thoughts."
    },
    // SLIDE 5 - OPENING PHRASES
    {
        type: 'formula',
        title: "Opening: How to Start",
        subtitle: "Memulai presentasi",
        formula: "Greeting + Introduction + Topic",
        vocabulary: [
            { term: "Hi everyone!", meaning: "Hai semua!", example: "Hi everyone! I'm [name]." },
            { term: "Good morning/afternoon!", meaning: "Selamat pagi/siang!", example: "Good morning, friends!" },
            { term: "Today I want to show you...", meaning: "Hari ini saya mau tunjukkan...", example: "Today I want to show you my favorite toy." },
            { term: "I'd like to tell you about...", meaning: "Saya ingin cerita tentang...", example: "I'd like to tell you about my pet." },
            { term: "This is my...", meaning: "Ini adalah...", example: "This is my favorite book." },
            { term: "I brought...", meaning: "Saya bawa...", example: "I brought something special today." }
        ],
        teacherNote: "Practice the opening until it's smooth. A good start builds confidence!"
    },
    // SLIDE 6 - BODY PHRASES
    {
        type: 'formula',
        title: "Body: What to Say",
        subtitle: "Isi presentasi",
        formula: "Description + Story + Feelings",
        vocabulary: [
            { term: "This is a...", meaning: "Ini adalah...", example: "This is a robot toy." },
            { term: "I got it from...", meaning: "Saya dapat ini dari...", example: "I got it from my mom." },
            { term: "I got it when...", meaning: "Saya dapat ini saat...", example: "I got it when I was 7." },
            { term: "It's special because...", meaning: "Ini spesial karena...", example: "It's special because it's my first toy." },
            { term: "I like it because...", meaning: "Saya suka ini karena...", example: "I like it because it's fun to play with." },
            { term: "I use it for...", meaning: "Saya pakai ini untuk...", example: "I use it for drawing pictures." }
        ],
        teacherNote: "Encourage 3 main points about the object. Keep it simple and personal!"
    },
    // SLIDE 7 - CLOSING PHRASES
    {
        type: 'formula',
        title: "Closing: How to Finish",
        subtitle: "Menutup presentasi",
        formula: "Signal ending + Thank you + Invite questions",
        vocabulary: [
            { term: "That's all.", meaning: "Itu saja.", example: "That's all I want to share." },
            { term: "Thank you for listening.", meaning: "Terima kasih sudah mendengarkan.", example: "Thank you for listening!" },
            { term: "Thank you for your attention.", meaning: "Terima kasih atas perhatiannya.", example: "Thank you for your attention." },
            { term: "Any questions?", meaning: "Ada pertanyaan?", example: "Any questions? I'd be happy to answer." },
            { term: "I hope you like it.", meaning: "Semoga kalian suka.", example: "I hope you like my presentation." },
            { term: "Have a great day!", meaning: "Semoga harimu menyenangkan!", example: "Thank you! Have a great day!" }
        ],
        teacherNote: "A strong closing leaves a good impression. Practice the thank you!"
    },
    // SLIDE 8 - PRESENTATION TIPS
    {
        type: 'vocabulary',
        title: "Presentation Tips 💡",
        subtitle: "Tips presentasi",
        vocabulary: [
            { term: "Speak clearly", meaning: "Bicara dengan jelas", example: "Speak clearly so everyone can hear." },
            { term: "Make eye contact", meaning: "Kontak mata", example: "Look at your audience, not just your object." },
            { term: "Smile", meaning: "Senyum", example: "Smile! It makes you look confident." },
            { term: "Hold your object up", meaning: "Angkat benda tinggi-tinggi", example: "Hold your object up so everyone can see." },
            { term: "Speak loud enough", meaning: "Bicara cukup keras", example: "Speak loud enough for the last person to hear." },
            { term: "Don't rush", meaning: "Jangan terburu-buru", example: "Take your time. Don't rush." },
            { term: "Practice before", meaning: "Latihan dulu", example: "Practice at home before presenting." }
        ],
        teacherNote: "These tips make a HUGE difference. Demonstrate good vs bad examples!"
    },
    // SLIDE 9 - AUDIENCE ETIQUETTE
    {
        type: 'vocabulary',
        title: "Audience Etiquette 👂",
        subtitle: "Etika penonton",
        vocabulary: [
            { term: "Listen carefully", meaning: "Dengarkan dengan saksama", example: "Listen carefully to your friend." },
            { term: "Look at the speaker", meaning: "Lihat ke pembicara", example: "Look at the speaker, not your phone." },
            { term: "Clap after", meaning: "Tepuk tangan setelah selesai", example: "Clap to show appreciation." },
            { term: "Ask questions politely", meaning: "Tanya dengan sopan", example: "Can I ask something?" },
            { term: "Be respectful", meaning: "Bersikap hormat", example: "Be respectful to everyone presenting." },
            { term: "Don't interrupt", meaning: "Jangan menyela", example: "Wait until they finish, don't interrupt." }
        ],
        teacherNote: "Teach kids to be good audience members too. Respect goes both ways!"
    },
    // SLIDE 10 - EXAMPLE PRESENTATION 1
    {
        type: 'case-study',
        title: "Example: My Favorite Toy 🧸",
        subtitle: "Contoh presentasi lengkap",
        caseStudy: {
            scenario: "Contoh Show & Tell tentang mainan favorit.",
            template: "OPENING:\n'Hi everyone! My name is Budi. Today I want to show you my favorite toy.'\n\nBODY:\n'This is a robot toy. I got it from my dad on my birthday last year. It's special because it can transform into a car. I like it because I can play with it for hours. The colors are blue and red, my favorite colors!'\n\nCLOSING:\n'That's all about my robot. Thank you for listening! Do you have any questions?'"
        },
        teacherNote: "MODEL: Present this example yourself. Show timing, tone, and energy!"
    },
    // SLIDE 11 - EXAMPLE PRESENTATION 2
    {
        type: 'case-study',
        title: "Example: My Pet 🐕",
        subtitle: "Contoh presentasi tentang hewan peliharaan",
        caseStudy: {
            scenario: "Contoh Show & Tell tentang hewan peliharaan.",
            template: "OPENING:\n'Good morning, friends! I'd like to tell you about my pet.'\n\nBODY:\n'This is a photo of my dog. His name is Rocky. He is 3 years old. Rocky is brown and very fluffy. I like him because he is friendly and always happy to see me. We play together every afternoon!'\n\nCLOSING:\n'Thank you for your attention. I hope you like hearing about Rocky. Have a great day!'"
        },
        teacherNote: "Another example showing variety. Photos work great for Show & Tell too!"
    },
    // SLIDE 12 - PRACTICE ACTIVITY
    {
        type: 'micro-drill',
        title: "Practice Time! 🎤",
        subtitle: "Let's practice the structure",
        mission: [
            "1. Choose your object: Benda apa yang mau kamu tunjukkan?",
            "2. Write 3 points: Apa 3 hal yang mau kamu ceritakan?",
            "3. Practice opening: Ucapkan pembukaanmu 3 kali!",
            "4. Practice closing: Ucapkan penutupmu 3 kali!",
            "5. Time yourself: Cobalah presentasi selama 1 menit!"
        ],
        teacherNote: "Preparation time! Let kids choose and prepare. Give them time to think."
    },
    // SLIDE 13 - FEEDBACK PHRASES
    {
        type: 'vocabulary',
        title: "Giving Feedback 👍",
        subtitle: "Memberikan umpan balik",
        vocabulary: [
            { term: "Great job!", meaning: "Kerja bagus!", example: "Great job speaking clearly!" },
            { term: "Well done!", meaning: "Bagus sekali!", example: "Well done on your presentation!" },
            { term: "I liked when you...", meaning: "Saya suka saat kamu...", example: "I liked when you smiled." },
            { term: "You did a good job of...", meaning: "Kamu melakukan dengan baik...", example: "You did a good job of holding your object up." },
            { term: "Maybe next time you can...", meaning: "Mungkin lain kali kamu bisa...", example: "Maybe next time you can speak louder." }
        ],
        teacherNote: "Teach constructive feedback. Always start with positive! The sandwich method: Good → Improve → Good."
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Memulai", sayThis: "Hi everyone! Today I want to show you...", dontSayThis: "Umm... this is... umm..." },
            { context: "Isi", sayThis: "I like it because... I got it from...", dontSayThis: "It's nice. Yeah. Good." },
            { context: "Menutup", sayThis: "That's all. Thank you for listening!", dontSayThis: "Okay... done... bye..." },
            { context: "Kontak mata", sayThis: "Look at your audience while speaking", dontSayThis: "Look down the whole time" },
            { context: "Suara", sayThis: "Speak clearly and loud enough", dontSayThis: "Mumble quietly" }
        ],
        teacherNote: "Review the key points. Confidence comes from practice!"
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Your Show & Tell Challenge!",
        mission: [
            "1. Pick Your Object: Pilih 1 benda favorit untuk Show & Tell minggu depan!",
            "2. Prepare Notes: Tulis catatan: Opening, 3 poin, Closing!",
            "3. Practice at Home: Latihan di rumah dengan timer 1 menit!",
            "4. Film Yourself: Rekam dirimu latihan, lihat apa yang bisa diperbaiki!",
            "5. Present with Confidence: Tunjukkan yang terbaik di kelas!"
        ],
        teacherNote: "This is a BIG mission! Give plenty of time to prepare. Celebrate every attempt!"
    }
];

export const quiz: QuizQuestion[] = [
    // SHOW & TELL CONCEPT
    {
        question: "What does 'Show' in Show & Tell mean?",
        options: ["Bercerita", "Menunjukkan benda", "Menonton"],
        correctIndex: 1,
        explanation: "'Show' means to show your object, 'Tell' means to talk about it!"
    },
    {
        question: "How long should a Show & Tell be?",
        options: ["5 minutes", "1 minute", "10 minutes"],
        correctIndex: 1,
        explanation: "Show & Tell is usually about 1 minute - short and sweet!"
    },
    // STRUCTURE
    {
        question: "What comes FIRST in a presentation?",
        options: ["Closing", "Opening", "Body"],
        correctIndex: 1,
        explanation: "Opening comes first - you greet and introduce your topic!"
    },
    {
        question: "What comes LAST in a presentation?",
        options: ["Opening", "Body", "Closing"],
        correctIndex: 2,
        explanation: "Closing comes last - you say thank you and finish!"
    },
    {
        question: "What is the main part of the presentation called?",
        options: ["Opening", "Body", "Closing"],
        correctIndex: 1,
        explanation: "The Body is the main part where you share information!"
    },
    // OPENING PHRASES
    {
        question: "Which is a good way to start?",
        options: ["Umm... yeah...", "Hi everyone! Today I want to show you...", "Okay, done."],
        correctIndex: 1,
        explanation: "'Hi everyone! Today I want to show you...' is a confident opening!"
    },
    {
        question: "How do you greet your audience?",
        options: ["Hey you!", "Hi everyone!", "What's up?"],
        correctIndex: 1,
        explanation: "'Hi everyone!' is a friendly, appropriate greeting."
    },
    // CLOSING PHRASES
    {
        question: "Which is a good way to finish?",
        options: ["Okay, bye.", "That's all. Thank you for listening!", "Umm... finished..."],
        correctIndex: 1,
        explanation: "'That's all. Thank you for listening!' is a polite closing!"
    },
    {
        question: "What do you say to thank your audience?",
        options: ["Go away!", "Thank you for listening!", "I'm done!"],
        correctIndex: 1,
        explanation: "Always say 'Thank you for listening!' to show appreciation!"
    },
    // PRESENTATION TIPS
    {
        question: "Should you look at your audience?",
        options: ["No, look at the floor", "Yes, make eye contact", "No, close your eyes"],
        correctIndex: 1,
        explanation: "Yes! Make eye contact with your audience. It shows confidence!"
    },
    {
        question: "Should you speak clearly?",
        options: ["No, mumble quietly", "Yes, speak clearly", "No, speak very fast"],
        correctIndex: 1,
        explanation: "Yes! Speak clearly so everyone can understand you!"
    },
    {
        question: "Should you smile during your presentation?",
        options: ["No, look serious", "Yes, smile!", "No, look angry"],
        correctIndex: 1,
        explanation: "Yes! Smiling makes you look confident and friendly!"
    },
    {
        question: "How should you hold your object?",
        options: ["Hide it behind your back", "Hold it up so everyone can see", "Keep it in your bag"],
        correctIndex: 1,
        explanation: "Hold your object up so everyone in the room can see it!"
    },
    // AUDIENCE ETIQUETTE
    {
        question: "As an audience member, should you listen carefully?",
        options: ["No, talk to friends", "Yes, listen carefully", "No, play games"],
        correctIndex: 1,
        explanation: "Yes! Good audience members listen carefully to the speaker!"
    },
    {
        question: "What should you do after someone finishes presenting?",
        options: ["Ignore them", "Clap", "Boo"],
        correctIndex: 1,
        explanation: "Clap to show appreciation and support for the speaker!"
    },
    // CONTENT
    {
        question: "How many main points should you share about your object?",
        options: ["10 points", "3 points", "No points"],
        correctIndex: 1,
        explanation: "About 3 main points is perfect for a 1-minute presentation!"
    },
    {
        question: "What can you say to tell why you like your object?",
        options: ["It's bad.", "I like it because...", "I hate it."],
        correctIndex: 1,
        explanation: "'I like it because...' explains your feelings about the object!"
    },
    // FEEDBACK
    {
        question: "What do you say to praise someone's presentation?",
        options: ["That was terrible!", "Great job!", "Boring!"],
        correctIndex: 1,
        explanation: "'Great job!' is a kind way to give positive feedback!"
    },
    {
        question: "Should you practice before presenting?",
        options: ["No, just wing it", "Yes, practice at home", "Practice is not important"],
        correctIndex: 1,
        explanation: "Yes! Practicing at home helps you feel more confident!"
    },
    // CONFIDENCE
    {
        question: "Is it okay to feel nervous before presenting?",
        options: ["Yes, everyone feels nervous sometimes", "No, you should never be nervous", "Nervous means you can't do it"],
        correctIndex: 0,
        explanation: "Yes! It's totally normal to feel nervous. Even adults do!"
    }
];
