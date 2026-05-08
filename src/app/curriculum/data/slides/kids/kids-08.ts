import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "Let's Go Shopping! 🛒",
        subtitle: "Roleplay Jual Beli",
        teacherNote: "Goal: Anak-anak bisa melakukan roleplay jual beli sederhana dengan kalimat yang benar dan sopan."
    },
    // SLIDE 2 - ICEBREAKING: BEFORE WE BEGIN
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about shopping! 🛍️",
        content: [
            "🤔 Do you like shopping? (Kamu suka belanja?)",
            "🏪 Where do you usually go shopping? (Biasanya belanja di mana?)",
            "🎁 What do you like to buy? (Suka beli apa?)",
            "💰 Have you ever bought something by yourself? (Pernah beli sendiri?)",
            "🗣️ Do you know how to say 'Berapa harganya?' in English?"
        ],
        teacherNote: "Warming up! Tanya anak-anak satu per satu. Biarkan mereka jawab dalam Bahasa Indonesia dulu. Ini untuk membangun konteks dan engagement sebelum masuk materi."
    },
    // SLIDE 3 - VOCABULARY TABLE 1: SHOPPING NOUNS (Places, Things, People, Items)
    {
        type: 'vocabulary',
        title: "Shopping Words (Nouns)",
        subtitle: "Kata benda saat berbelanja",
        vocabulary: [
            // Places
            { term: "Supermarket", meaning: "Supermarket", example: "I buy milk at the supermarket." },
            { term: "Mall", meaning: "Pusat perbelanjaan", example: "Let's go to the mall!" },
            { term: "Market", meaning: "Pasar", example: "My mom goes to the market." },
            { term: "Toy Store", meaning: "Toko mainan", example: "I want to go to the toy store." },
            { term: "Bookstore", meaning: "Toko buku", example: "I buy books at the bookstore." },
            { term: "Bakery", meaning: "Toko roti", example: "The bakery sells yummy bread." },
            { term: "Candy Shop", meaning: "Toko permen", example: "I love the candy shop!" },
            // Things
            { term: "Toys", meaning: "Mainan", example: "I want to buy new toys." },
            { term: "Snacks", meaning: "Camilan", example: "Can I have some snacks?" },
            { term: "Candy", meaning: "Permen", example: "I love candy!" },
            { term: "Chocolate", meaning: "Cokelat", example: "Can I buy chocolate?" },
            { term: "Ice cream", meaning: "Es krim", example: "I want ice cream!" },
            { term: "Fruits", meaning: "Buah-buahan", example: "I buy apples and oranges." },
            { term: "Clothes", meaning: "Baju", example: "I need new clothes." },
            { term: "Shoes", meaning: "Sepatu", example: "These shoes are nice!" },
            // People
            { term: "Seller", meaning: "Penjual", example: "The seller sells fruits." },
            { term: "Buyer", meaning: "Pembeli", example: "I am the buyer." },
            { term: "Customer", meaning: "Pelanggan", example: "The customer wants to buy a book." },
            { term: "Cashier", meaning: "Kasir", example: "I pay money to the cashier." },
            // Items & Money
            { term: "Money", meaning: "Uang", example: "I have money in my pocket." },
            { term: "Price", meaning: "Harga", example: "What is the price?" },
            { term: "Change", meaning: "Uang kembalian", example: "Here is your change." },
            { term: "Wallet", meaning: "Dompet", example: "My money is in my wallet." },
            { term: "Shopping bag", meaning: "Tas belanja", example: "I carry a shopping bag." },
            { term: "Receipt", meaning: "Struk/Nota", example: "Here is your receipt." },
            { term: "Shopping cart", meaning: "Troli belanja", example: "Put items in the cart." },
            { term: "Price tag", meaning: "Label harga", example: "Look at the price tag!" }
        ],
        teacherNote: "Bagi ke kategori: Places (tempat), Things (barang), People (orang), Items (benda). Latihan: tunjuk gambar, minta anak menyebut kata Inggrisnya."
    },
    // SLIDE 4 - VOCABULARY TABLE 2: ACTIONS + ADJECTIVES + NUMBERS
    {
        type: 'vocabulary',
        title: "Shopping Words (Actions & Descriptions)",
        subtitle: "Kata kerja, sifat, dan angka saat berbelanja",
        vocabulary: [
            // Verbs
            { term: "Buy", meaning: "Membeli", example: "I want to buy this toy." },
            { term: "Sell", meaning: "Menjual", example: "The shopkeeper sells fruits." },
            { term: "Pay", meaning: "Membayar", example: "I pay with money." },
            { term: "Choose", meaning: "Memilih", example: "I choose the red one." },
            { term: "Look", meaning: "Melihat", example: "I'm looking at the toys." },
            { term: "Give", meaning: "Memberi", example: "Give me the bag, please." },
            { term: "Take", meaning: "Mengambil", example: "I take two apples." },
            { term: "Find", meaning: "Menemukan", example: "I found the toy I want!" },
            { term: "Try", meaning: "Mencoba (baju/sepatu)", example: "Can I try these shoes?" },
            { term: "Carry", meaning: "Membawa", example: "I carry the shopping bag." },
            // Adjectives
            { term: "Cheap", meaning: "Murah", example: "This toy is cheap!" },
            { term: "Expensive", meaning: "Mahal", example: "This bag is expensive." },
            { term: "Free", meaning: "Gratis", example: "This sticker is free!" },
            { term: "Big", meaning: "Besar", example: "I want the big one." },
            { term: "Small", meaning: "Kecil", example: "This is too small." },
            { term: "New", meaning: "Baru", example: "I want a new toy." },
            { term: "Pretty / Nice", meaning: "Cantik / Bagus", example: "This dress is pretty!" },
            { term: "Yummy", meaning: "Enak", example: "This cake looks yummy!" },
            // Numbers
            { term: "One thousand (1,000)", meaning: "Seribu", example: "This pencil is one thousand rupiah." },
            { term: "Five thousand (5,000)", meaning: "Lima ribu", example: "Ice cream is five thousand." },
            { term: "Ten thousand (10,000)", meaning: "Sepuluh ribu", example: "This book is ten thousand." },
            { term: "Twenty thousand (20,000)", meaning: "Dua puluh ribu", example: "The toy is twenty thousand." },
            { term: "Fifty thousand (50,000)", meaning: "Lima puluh ribu", example: "The shirt costs fifty thousand." },
            { term: "One hundred thousand (100,000)", meaning: "Seratus ribu", example: "The shoes are one hundred thousand." }
        ],
        teacherNote: "Latihan action words: minta anak buat kalimat 'I want to [verb]...'. Latihan numbers: tunjuk angka, minta anak ucapkan."
    },
    // SLIDE 5 - FORMULA: ASKING FOR PRICE
    {
        type: 'formula',
        title: "How to Ask for Price",
        subtitle: "Cara bertanya harga",
        formula: "How much is this? / How much does this cost?",
        vocabulary: [
            { term: "How much is this?", meaning: "Berapa harga ini?", example: "How much is this toy?" },
            { term: "How much does it cost?", meaning: "Berapa biayanya?", example: "How much does it cost?" },
            { term: "What's the price?", meaning: "Berapa harganya?", example: "What's the price of this book?" },
            { term: "Is this expensive?", meaning: "Apakah ini mahal?", example: "Is this bag expensive?" },
            { term: "Is there a discount?", meaning: "Ada diskon?", example: "Is there a discount?" }
        ],
        teacherNote: "Drill dengan berbagai barang: 'How much is this [item]?'"
    },
    // SLIDE 6 - FORMULA: HOW TO BUY SOMETHING (BUYER)
    {
        type: 'formula',
        title: "How to Buy Something",
        subtitle: "Cara membeli sesuatu dengan sopan",
        formula: "Can I have ___? / I would like ___.",
        vocabulary: [
            { term: "Can I have...?", meaning: "Boleh saya minta...?", example: "Can I have this toy, please?" },
            { term: "I would like...", meaning: "Saya ingin...", example: "I would like two apples." },
            { term: "I want to buy...", meaning: "Saya mau beli...", example: "I want to buy this book." },
            { term: "I'll take this.", meaning: "Saya ambil ini.", example: "I'll take this one, please." },
            { term: "Do you have...?", meaning: "Apakah ada...?", example: "Do you have a blue one?" },
            { term: "I'm looking for...", meaning: "Saya mencari...", example: "I'm looking for a bag." }
        ],
        teacherNote: "Ajarkan bahwa 'Can I have' lebih sopan daripada 'Give me'."
    },
    // SLIDE 7 - FORMULA: SELLER'S PHRASES
    {
        type: 'formula',
        title: "What the Seller Says",
        subtitle: "Kalimat-kalimat penjual",
        formula: "Here you go! / That will be ___.",
        vocabulary: [
            { term: "Can I help you?", meaning: "Ada yang bisa saya bantu?", example: "Hello! Can I help you?" },
            { term: "What would you like?", meaning: "Kamu mau apa?", example: "What would you like to buy?" },
            { term: "Here you go!", meaning: "Ini dia!", example: "Here you go! One ice cream." },
            { term: "That will be...", meaning: "Harganya...", example: "That will be five thousand rupiah." },
            { term: "Anything else?", meaning: "Ada lagi?", example: "Anything else?" },
            { term: "Thank you for buying!", meaning: "Terima kasih sudah membeli!", example: "Thank you! Come again!" }
        ],
        teacherNote: "Minta beberapa anak berperan sebagai seller dan latih kalimat ini."
    },
    // SLIDE 8 - FORMULA: PAYING & RESPONDING
    {
        type: 'formula',
        title: "How to Pay",
        subtitle: "Cara membayar dan merespons",
        formula: "Here is the money. / Here you go!",
        vocabulary: [
            { term: "Here is the money.", meaning: "Ini uangnya.", example: "Here is the money, ten thousand." },
            { term: "Here you go!", meaning: "Ini!", example: "Here you go! Twenty thousand." },
            { term: "Keep the change.", meaning: "Simpan kembaliannya.", example: "Keep the change!" },
            { term: "Can I have my change?", meaning: "Boleh minta kembalian?", example: "Can I have my change, please?" },
            { term: "Thank you!", meaning: "Terima kasih!", example: "Thank you! Goodbye!" },
            { term: "You're welcome!", meaning: "Sama-sama!", example: "You're welcome! Come again!" }
        ],
        teacherNote: "Latihan dengan uang mainan untuk membuat roleplay lebih nyata."
    },
    // SLIDE 9 - COMPARISON: POLITE VS RUDE
    {
        type: 'comparison',
        title: "Polite vs Not Polite",
        subtitle: "Sopan vs Tidak Sopan",
        comparison: [
            { wrong: "Give me this!", right: "Can I have this, please?" },
            { wrong: "How much?!", right: "How much is this, please?" },
            { wrong: "I want that!", right: "I would like that, please." },
            { wrong: "No! Too expensive!", right: "That's a bit expensive. Do you have a cheaper one?" },
            { wrong: "Bye.", right: "Thank you! Goodbye!" }
        ],
        teacherNote: "Tekankan pentingnya kata 'please' dan 'thank you' saat berbelanja."
    },
    // SLIDE 10 - CONVERSATION EXAMPLE 1: BUYING A TOY (Teacher Demo)
    {
        type: 'case-study',
        title: "Conversation 1: Buying a Toy 🧸",
        subtitle: "A = Seller (Teacher) | B = Buyer (Student)",
        caseStudy: {
            scenario: "Di toko mainan. Teacher jadi Seller (A), Student jadi Buyer (B).",
            template: "A: Hello! Can I help you?\nB: Hello! How much is this robot?\nA: It's twenty thousand rupiah.\nB: I would like to buy it, please.\nA: Sure! Here you go.\nB: Here is the money. Thank you!\nA: Thank you! Come again!\nB: Goodbye!"
        },
        teacherNote: "DEMO PERTAMA: Teacher jadi A (Seller), pilih satu murid jadi B (Buyer). Peragakan percakapan ini dengan jelas dan perlahan. Ulangi 2x jika perlu."
    },
    // SLIDE 11 - CONVERSATION EXAMPLE 2: BUYING SNACKS (Teacher Demo)
    {
        type: 'case-study',
        title: "Conversation 2: Buying Snacks 🍭",
        subtitle: "A = Seller (Teacher) | B = Buyer (Student)",
        caseStudy: {
            scenario: "Di toko snack. Teacher jadi Seller (A), Student jadi Buyer (B).",
            template: "A: Hello! What would you like?\nB: Can I have one ice cream and two candies, please?\nA: Sure! Anything else?\nB: No, thank you.\nA: That will be fifteen thousand rupiah.\nB: Here you go. Twenty thousand.\nA: Here is your change, five thousand.\nB: Thank you! Goodbye!\nA: Thank you! Come again!"
        },
        teacherNote: "DEMO KEDUA: Percakapan ini lebih panjang, ada 'change' (kembalian). Setelah demo, ajak murid lain untuk mencoba."
    },
    // SLIDE 12 - ROLEPLAY PRACTICE: AT THE TOY STORE
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: At the Toy Store 🎮",
        subtitle: "A = Seller | B = Buyer",
        caseStudy: {
            scenario: "Giliran kalian! Satu jadi Seller (A), satu jadi Buyer (B). Pilih mainan dan tentukan harganya!",
            template: "A: Hello! Can I help you?\nB: Hello! How much is this [toy name]?\nA: It's [price] rupiah.\nB: I would like to buy it, please.\nA: Here you go!\nB: Here is the money. Thank you!\nA: Thank you! Come again!"
        },
        teacherNote: "GILIRAN MURID: Pair up students. Satu jadi A (Seller), satu jadi B (Buyer). Swap roles setelah selesai."
    },
    // SLIDE 13 - ROLEPLAY PRACTICE: AT THE SNACK SHOP
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: At the Snack Shop 🍦",
        subtitle: "A = Seller | B = Buyer",
        caseStudy: {
            scenario: "Beli snack! Pilih 2-3 item dan hitung total harganya.",
            template: "A: Hello! What would you like?\nB: Can I have [item 1] and [item 2], please?\nA: Sure! Anything else?\nB: No, thank you.\nA: That will be [total] rupiah.\nB: Here you go. [amount].\nA: Here is your change, [change].\nB: Thank you! Goodbye!"
        },
        teacherNote: "VARIASI: Minta murid membeli lebih dari 1 item. Latih menghitung total dan kembalian."
    },
    // SLIDE 14 - ROLEPLAY PRACTICE: ASKING FOR DIFFERENT SIZE/COLOR
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 3: Asking for a Different One 👕",
        subtitle: "A = Seller | B = Buyer",
        caseStudy: {
            scenario: "Latihan meminta warna atau ukuran yang berbeda.",
            template: "A: Hello! Can I help you?\nB: Do you have this shirt in blue?\nA: Yes, here is the blue one.\nB: Thank you! I'll take this one.\nA: Great! That will be [price].\nB: Here is the money. Thank you!\nA: Thank you! Come again!"
        },
        teacherNote: "ADVANCED: Latih frasa 'Do you have this in [color/size]?'"
    },
    // SLIDE 15 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Bertanya Harga", sayThis: "How much is this?", dontSayThis: "How much this?" },
            { context: "Membeli", sayThis: "Can I have this, please?", dontSayThis: "Give me this!" },
            { context: "Sebagai Seller", sayThis: "Here you go!", dontSayThis: "Take it!" },
            { context: "Membayar", sayThis: "Here is the money.", dontSayThis: "Money!" },
            { context: "Terima Kasih", sayThis: "Thank you! Goodbye!", dontSayThis: "Bye." }
        ],
        teacherNote: "Review bersama-sama dan cek pemahaman anak."
    },
    // SLIDE 16 - MISSION
    {
        type: 'mission',
        title: "Mission Time!",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Shopping Roleplay: Main jual-beli sama teman atau keluarga di rumah!",
            "2. Real Practice: Kalau pergi ke toko, coba bilang 'Thank you!' ke kasir dalam Bahasa Inggris!",
            "3. Mini Shop: Buat toko-tokoan di rumah pakai barang yang ada, lalu latihan jual-beli!"
        ],
        teacherNote: "Encourage anak untuk praktek di rumah dengan keluarga. See you next time!"
    }
];

export const quiz: QuizQuestion[] = [
    // VOCABULARY - PLACES
    {
        question: "Where do we buy books?",
        options: ["Toy store", "Bookstore", "Bakery"],
        correctIndex: 1,
        explanation: "A bookstore is a shop that sells books!"
    },
    {
        question: "Where can we buy bread and cake?",
        options: ["Pet shop", "Shoe store", "Bakery"],
        correctIndex: 2,
        explanation: "A bakery is a shop that sells bread, cakes, and other baked goods!"
    },
    // VOCABULARY - THINGS
    {
        question: "What is the English word for 'mainan'?",
        options: ["Snacks", "Toys", "Fruits"],
        correctIndex: 1,
        explanation: "Toys are things we play with, like dolls, cars, and robots!"
    },
    {
        question: "What is the English word for 'permen'?",
        options: ["Candy", "Bread", "Milk"],
        correctIndex: 0,
        explanation: "Candy is a sweet treat that kids love!"
    },
    // VOCABULARY - MONEY
    {
        question: "If something is 'expensive', it means...",
        options: ["Harganya murah", "Harganya mahal", "Gratis"],
        correctIndex: 1,
        explanation: "Expensive means the price is high or 'mahal'."
    },
    {
        question: "What is 'uang kembalian' in English?",
        options: ["Price", "Change", "Wallet"],
        correctIndex: 1,
        explanation: "Change is the money you get back when you pay more than the price."
    },
    // VOCABULARY - PEOPLE
    {
        question: "A person who buys things is called a...",
        options: ["Seller", "Buyer", "Cashier"],
        correctIndex: 1,
        explanation: "A buyer is someone who buys things from a shop."
    },
    {
        question: "A person who works at the cash register is called a...",
        options: ["Shopkeeper", "Customer", "Cashier"],
        correctIndex: 2,
        explanation: "A cashier takes your money and gives you change at the store."
    },
    // FORMULAS - ASKING PRICE
    {
        question: "What is the polite way to ask for price?",
        options: ["How much?!", "Give me the price!", "How much is this, please?"],
        correctIndex: 2,
        explanation: "Always say 'please' to be polite!"
    },
    // FORMULAS - BUYING
    {
        question: "Which sentence is POLITE to buy something?",
        options: ["Give me that toy!", "I want that NOW!", "Can I have that toy, please?"],
        correctIndex: 2,
        explanation: "'Can I have..., please?' is the polite way to ask for something."
    },
    {
        question: "Complete: 'I _____ like two apples, please.'",
        options: ["want", "would", "give"],
        correctIndex: 1,
        explanation: "'I would like...' is a polite way to say you want something."
    },
    // SELLER PHRASES
    {
        question: "What does the seller say when giving you the item?",
        options: ["Take it!", "Here you go!", "Get out!"],
        correctIndex: 1,
        explanation: "'Here you go!' is a friendly way to give something to someone."
    },
    {
        question: "What does 'Anything else?' mean?",
        options: ["Pergi sana!", "Ada lagi?", "Sampai jumpa!"],
        correctIndex: 1,
        explanation: "The seller asks 'Anything else?' to see if you want to buy more."
    },
    // POLITE VS RUDE
    {
        question: "Which ending is MORE polite?",
        options: ["Bye.", "Thank you! Goodbye!", "Whatever."],
        correctIndex: 1,
        explanation: "Always say 'Thank you' and 'Goodbye' to be polite!"
    },
    // NUMBERS
    {
        question: "'Lima ribu rupiah' in English is...",
        options: ["Fifty thousand rupiah", "Five thousand rupiah", "Five hundred rupiah"],
        correctIndex: 1,
        explanation: "Five thousand = Lima ribu (5,000)."
    },
    // DESCRIPTIONS
    {
        question: "If you want the blue one, you say...",
        options: ["I want blue.", "I want the blue one.", "Blue give me."],
        correctIndex: 1,
        explanation: "'I want the blue one' is the correct sentence."
    },
    // USEFUL PHRASES
    {
        question: "'I'm looking for a bag' means...",
        options: ["Saya mau beli tas", "Saya mencari tas", "Saya tidak suka tas"],
        correctIndex: 1,
        explanation: "Say 'I'm looking for...' when you are searching for something."
    },
    {
        question: "If you want to try shoes, you say...",
        options: ["Try this!", "Can I try these shoes?", "Shoes now!"],
        correctIndex: 1,
        explanation: "'Can I try...?' is the polite way to ask permission."
    },
    // ACTION WORDS
    {
        question: "What is the English word for 'membeli'?",
        options: ["Sell", "Buy", "Pay"],
        correctIndex: 1,
        explanation: "Buy means 'membeli'. We buy things at the store!"
    },
    {
        question: "What is the English word for 'membayar'?",
        options: ["Sell", "Buy", "Pay"],
        correctIndex: 2,
        explanation: "Pay means 'membayar'. We pay money to the cashier!"
    }
];
