import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 23,
    path: 'speaking-kids',
    title: "The Super Salesman 💼",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-23-001",
            question: "Apa arti dari 'salesman'?",
            options: [
                "Penjual",
                "Pembeli",
                "Pengantar",
                "Peminjam"
            ],
            correctIndex: 0,
            explanation: "'Salesman' artinya penjual (orang yang menjual barang).",
            difficulty: "easy"
        },
        {
            id: "kids-23-002",
            question: "Pilih kata yang menunjukkan barang BAGUS:",
            options: ["terrible", "bad", "amazing", "broken"],
            correctIndex: 2,
            explanation: "'Amazing' (luar biasa) adalah kata positif untuk menjual barang.",
            difficulty: "easy"
        },
        {
            id: "kids-23-003",
            question: "Bahasa Indonesia dari 'Buy this now!' adalah:",
            options: [
                "Beli ini sekarang!",
                "Jual ini sekarang!",
                "Lihat ini sekarang!",
                "Ambil ini sekarang!"
            ],
            correctIndex: 0,
            explanation: "'Buy' artinya beli, 'now' artinya sekarang.",
            difficulty: "easy"
        },
        {
            id: "kids-23-004",
            question: "Pilih kalimat yang sopan untuk menawarkan barang:",
            options: [
                "Hey you, buy this!",
                "Would you like to try this?",
                "Give me money now!",
                "You must buy!"
            ],
            correctIndex: 1,
            explanation: "'Would you like to try this?' adalah cara sopan menawarkan barang.",
            difficulty: "easy"
        },
        {
            id: "kids-23-005",
            question: "Apa arti dari 'discount'?",
            options: [
                "Harga naik",
                "Harga turun/potongan harga",
                "Harga sama",
                "Harga mahal"
            ],
            correctIndex: 1,
            explanation: "'Discount' artinya potongan harga atau diskon.",
            difficulty: "easy"
        },
        {
            id: "kids-23-006",
            question: "Lengkapi: 'This toy is ___ fun!'",
            options: ["a", "so", "the", "an"],
            correctIndex: 1,
            explanation: "'So' digunakan untuk menekankan (so fun = sangat seru).",
            difficulty: "easy"
        },
        {
            id: "kids-23-007",
            question: "Bahasa Inggris dari 'Murah sekali!' adalah:",
            options: [
                "So expensive!",
                "So cheap!",
                "So big!",
                "So small!"
            ],
            correctIndex: 1,
            explanation: "'Cheap' artinya murah. 'So cheap' = murah sekali.",
            difficulty: "easy"
        },
        {
            id: "kids-23-008",
            question: "Pilih kata yang BUKAN kata sifat positif:",
            options: ["beautiful", "wonderful", "ugly", "fantastic"],
            correctIndex: 2,
            explanation: "'Ugly' artinya jelek (negatif), sedangkan lainnya positif.",
            difficulty: "easy"
        },
        {
            id: "kids-23-009",
            question: "Apa arti dari 'special offer'?",
            options: [
                "Penawaran khusus",
                "Harga normal",
                "Barang rusak",
                "Toko tutup"
            ],
            correctIndex: 0,
            explanation: "'Special offer' artinya penawaran khusus (biasanya harga bagus).",
            difficulty: "easy"
        },
        {
            id: "kids-23-010",
            question: "Pilih kalimat yang benar:",
            options: [
                "You will loves this!",
                "You will love this!",
                "You will loving this!",
                "You will loved this!"
            ],
            correctIndex: 1,
            explanation: "Setelah 'will', gunakan kata kerja dasar (love, play, eat).",
            difficulty: "easy"
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-23-011",
            question: "Pilih kalimat persuasif yang BAIK:",
            options: [
                "Buy this or else!",
                "This toy will make you the happiest kid in the world!",
                "You are poor if you don't buy!",
                "I don't care if you buy or not."
            ],
            correctIndex: 1,
            explanation: "Kalimat yang positif dan menggambarkan manfaat akan menarik pembeli.",
            difficulty: "medium"
        },
        {
            id: "kids-23-012",
            question: "Lengkapi: '___ you buy today, you ___ get a free gift!'",
            options: ["If / will", "When / are", "Because / can", "So / would"],
            correctIndex: 0,
            explanation: "'If you buy today, you will get...' (Jika kamu beli hari ini, kamu akan dapat...)",
            difficulty: "medium"
        },
        {
            id: "kids-23-013",
            question: "Bahasa Indonesia dari 'limited edition':",
            options: [
                "Edisi terbatas",
                "Edisi lengkap",
                "Edisi murah",
                "Edisi lama"
            ],
            correctIndex: 0,
            explanation: "'Limited edition' artinya edisi terbatas (jumlah sedikit, eksklusif).",
            difficulty: "medium"
        },
        {
            id: "kids-23-014",
            question: "Pilih kata yang menunjukkan barang langka:",
            options: ["common", "rare", "cheap", "old"],
            correctIndex: 1,
            explanation: "'Rare' artinya langka (sulit ditemukan, jadi berharga).",
            difficulty: "medium"
        },
        {
            id: "kids-23-015",
            question: "Apa arti dari 'guarantee'?",
            options: [
                "Jaminan",
                "Kerusakan",
                "Pembayaran",
                "Pengiriman"
            ],
            correctIndex: 0,
            explanation: "'Guarantee' artinya jaminan (misal: uang kembali jika tidak puas).",
            difficulty: "medium"
        },
        {
            id: "kids-23-016",
            question: "Lengkapi: 'This is the ___ toy ever!'",
            options: ["good", "better", "best", "well"],
            correctIndex: 2,
            explanation: "'The best' adalah superlatif dari good (terbaik).",
            difficulty: "medium"
        },
        {
            id: "kids-23-017",
            question: "Bahasa Inggris dari 'Gratis pengiriman' adalah:",
            options: [
                "Free shipping",
                "Free shopping",
                "Free saving",
                "Free giving"
            ],
            correctIndex: 0,
            explanation: "'Free shipping' = gratis pengiriman. 'Shipping' artinya pengiriman.",
            difficulty: "medium"
        },
        {
            id: "kids-23-018",
            question: "Pilih kalimat yang menggunakan kata 'because' dengan benar:",
            options: [
                "Buy this because.",
                "Buy this because it is high quality.",
                "Because buy this.",
                "Buy because this."
            ],
            correctIndex: 1,
            explanation: "Gunakan 'because' untuk memberikan alasan: 'Buy this because [alasan].'",
            difficulty: "medium"
        },
        {
            id: "kids-23-019",
            question: "Apa arti dari 'high quality'?",
            options: [
                "Kualitas rendah",
                "Kualitas tinggi",
                "Harga mahal",
                "Barang rusak"
            ],
            correctIndex: 1,
            explanation: "'High quality' artinya kualitas tinggi (bagus, tahan lama).",
            difficulty: "medium"
        },
        {
            id: "kids-23-020",
            question: "Pilih kata yang sinonim dengan 'excellent':",
            options: ["terrible", "poor", "outstanding", "bad"],
            correctIndex: 2,
            explanation: "'Outstanding' dan 'excellent' sama-sama artinya luar biasa/sangat bagus.",
            difficulty: "medium"
        },
        {
            id: "kids-23-021",
            question: "Lengkapi: 'Don't ___ out! Only 5 left!'",
            options: ["miss", "lose", "forget", "leave"],
            correctIndex: 0,
            explanation: "'Don't miss out' artinya 'Jangan sampai ketinggalan!'",
            difficulty: "medium"
        },
        {
            id: "kids-23-022",
            question: "Bahasa Indonesia dari 'Once in a lifetime deal':",
            options: [
                "Penawaran setiap hari",
                "Penawaran seumur hidup sekali",
                "Penawaran biasa saja",
                "Penawaran mahal"
            ],
            correctIndex: 1,
            explanation: "'Once in a lifetime' artinya sekali dalam seumur hidup (sangat istimewa).",
            difficulty: "medium"
        },

        // === HARD (8 questions) ===
        {
            id: "kids-23-023",
            question: "Susun kata menjadi kalimat persuasif: 'quality / this / has / highest / the / product'",
            options: [
                "This product has the highest quality.",
                "This has product the highest quality.",
                "The highest quality has this product.",
                "Product this has the highest quality."
            ],
            correctIndex: 0,
            explanation: "Struktur: This product (subjek) + has (kata kerja) + the highest quality (objek).",
            difficulty: "hard"
        },
        {
            id: "kids-23-024",
            question: "Pilih kalimat yang paling persuasif untuk menjual sepeda:",
            options: [
                "This is a bike.",
                "This amazing bike will help you explore the world, stay healthy, and have endless adventures with your friends!",
                "Buy this bike now.",
                "Bike is good."
            ],
            correctIndex: 1,
            explanation: "Kalimat yang menggambarkan manfaat emosional dan kegunaan lebih persuasif.",
            difficulty: "hard"
        },
        {
            id: "kids-23-025",
            question: "Apa arti dari 'satisfaction guaranteed'?",
            options: [
                "Kepuasan dijamin",
                "Kepuasan tidak penting",
                "Kepuasan mahal",
                "Kepuasan palsu"
            ],
            correctIndex: 0,
            explanation: "'Satisfaction guaranteed' artinya kepuasan dijamin/pasti puas.",
            difficulty: "hard"
        },
        {
            id: "kids-23-026",
            question: "Pilih kata yang BUKAN merupakan kata sifat superlatif:",
            options: ["best", "most amazing", "better", "greatest"],
            correctIndex: 2,
            explanation: "'Better' adalah komparatif (lebih baik), bukan superlatif (terbaik).",
            difficulty: "hard"
        },
        {
            id: "kids-23-027",
            question: "Lengkapi dengan ungkapan persuasif: 'Act ___! This offer ends today!'",
            options: ["slowly", "fast", "now", "later"],
            correctIndex: 2,
            explanation: "'Act now' artinya 'Tindakan sekarang!' (ajakan untuk segera membeli).",
            difficulty: "hard"
        },
        {
            id: "kids-23-028",
            question: "Bahasa Indonesia dari 'You won't regret it':",
            options: [
                "Kamu akan menyesal",
                "Kamu tidak akan menyesal",
                "Kamu harus menyesal",
                "Kamu mungkin menyesal"
            ],
            correctIndex: 1,
            explanation: "'You won't regret it' = Kamu tidak akan menyesal (janji kepuasan).",
            difficulty: "hard"
        },
        {
            id: "kids-23-029",
            question: "Pilih teknik penjualan terbaik:",
            options: [
                "Memaksa pembeli",
                "Menjelaskan manfaat dan membuat pembeli merasa istimewa",
                "Menghina produk lain",
                "Berdusta tentang produk"
            ],
            correctIndex: 1,
            explanation: "Penjualan yang baik fokus pada manfaat produk dan membuat pelanggan senang.",
            difficulty: "hard"
        },
        {
            id: "kids-23-030",
            question: "Buat penawaran lengkap:\n'Sebagai Super Salesman, bagaimana kamu menjual buku cerita?'",
            options: [
                "Buy this book.",
                "This magical book will take you on amazing adventures, expand your imagination, and become your best friend! Plus, with our special discount today only, you'll save 50%! Don't miss this once-in-a-lifetime offer!",
                "Book is cheap.",
                "I have a book."
            ],
            correctIndex: 1,
            explanation: "Penawaran terbaik menggabungkan manfaat emosional, imajinasi, dan penawaran spesial!",
            difficulty: "hard"
        }
    ]
};

