import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1: TITLE
    {
        type: 'title',
        title: "Describing Data & Trends",
        subtitle: "Explaining Graphs, Charts, and Numbers",
        teacherNote: "Goal: Dari 'the sales is up' menjadi 'Sales have increased by 15% quarter-over-quarter'.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920"
    },

    // SLIDE 2: THE PROBLEM
    {
        type: 'concept',
        title: "The 'Sales is Up' Problem",
        subtitle: "Mengapa deskripsi data sering kurang profesional?",
        content: [
            "Orang Indonesia sering menggunakan grammar yang salah: 'The sales is up' (should be: Sales HAVE increased).",
            "Kurang spesifik: 'Up' aja, tanpa angka atau persentase.",
            "Tidak ada konteks: Naik dibanding kapan? Berapa lama?",
            "Hasilnya: Data tidak impactful, credibility menurun."
        ],
        teacherNote: "Demo: Bandingkan 'Sales is up' vs 'Sales have increased by 15% compared to Q2'."
    },

    // SLIDE 3: GRAMMAR FIX
    {
        type: 'comparison',
        title: "Grammar: Singular vs Plural",
        subtitle: "Kesalahan umum dengan kata-kata data.",
        comparison: [
            { wrong: "The sales is up.", right: "Sales HAVE increased." },
            { wrong: "The number of customers are growing.", right: "The number of customers IS growing." },
            { wrong: "Revenues was higher last year.", right: "Revenue WAS higher last year." },
            { wrong: "Statistics shows positive trend.", right: "Statistics SHOW a positive trend." }
        ],
        teacherNote: "Sales, revenues, statistics = plural. Revenue, the number = singular."
    },

    // SLIDE 4: TREND VERBS
    {
        type: 'vocabulary',
        title: "Verbs for Trends",
        subtitle: "Kata kerja yang tepat untuk pergerakan data.",
        vocabulary: [
            { term: "Increased / Rose / Grew", meaning: "Naik (formal)", example: "Sales increased by 20% last quarter." },
            { term: "Decreased / Fell / Dropped", meaning: "Turun (formal)", example: "Costs fell by 5% this month." },
            { term: "Remained steady / Stable", meaning: "Tetap stabil", example: "The market remained steady throughout the year." },
            { term: "Fluctuated", meaning: "Berfluktuasi naik-turun", example: "Prices fluctuated between $50 and $70." },
            { term: "Peaked at", meaning: "Mencapai puncak", example: "Revenue peaked at $2M in December." },
            { term: "Bottomed out at", meaning: "Mencapai terendah", example: "Sales bottomed out at $100K in February." }
        ]
    },

    // SLIDE 5: ADVERBS FOR TRENDS
    {
        type: 'vocabulary',
        title: "Adverbs: Speed and Degree",
        subtitle: "Seberapa cepat dan seberapa besar perubahan.",
        vocabulary: [
            { term: "Significantly / Substantially", meaning: "Sangat besar", example: "Profits increased significantly." },
            { term: "Slightly / Marginally", meaning: "Sedikit saja", example: "Costs rose slightly by 2%." },
            { term: "Sharply / Dramatically", meaning: "Drastis/mendadak", example: "Demand dropped sharply." },
            { term: "Gradually / Steadily", meaning: "Pelan-pelan/konsisten", example: "Growth has been steady." },
            { term: "Rapidly", meaning: "Cepat", example: "The user base grew rapidly." },
            { term: "Plateaued", meaning: "Mendatar setelah naik", example: "After initial growth, sales plateaued." }
        ]
    },

    // SLIDE 6: DESCRIBING GRAPHS
    {
        type: 'vocabulary',
        title: "Describing Graphs",
        subtitle: "Frasa untuk berbagai jenis chart.",
        vocabulary: [
            { term: "Line graph", meaning: "Grafik garis (trend over time)", example: "The line graph shows revenue growth from 2020-2024." },
            { term: "Bar chart", meaning: "Grafik batang (comparison)", example: "The bar chart compares sales by region." },
            { term: "Pie chart", meaning: "Grafik lingkaran (proportion)", example: "The pie chart represents market share distribution." },
            { term: "Upward trend", meaning: "Tren naik", example: "We see a clear upward trend in customer satisfaction." },
            { term: "Downward trend", meaning: "Tren turun", example: "There's been a downward trend in employee retention." },
            { term: "All-time high/low", meaning: "Tertinggi/terendah sepanjang waktu", example: "Stock prices hit an all-time high." }
        ]
    },

    // SLIDE 7: COMPARING DATA
    {
        type: 'vocabulary',
        title: "Making Comparisons",
        subtitle: "Bandingkan data dengan tepat.",
        vocabulary: [
            { term: "Compared to / Versus", meaning: "Dibandingkan dengan", example: "Q3 sales increased 15% compared to Q2." },
            { term: "In contrast", meaning: "Sebaliknya", example: "In contrast, our competitors saw a decline." },
            { term: "Similarly / Likewise", meaning: "Sama seperti", example: "Similarly, the Asian market showed growth." },
            { term: "Whereas / While", meaning: "Sementara itu (kontras)", example: "Online sales rose, whereas in-store sales fell." },
            { term: "On the other hand", meaning: "Di sisi lain", example: "Costs are up. On the other hand, revenue is higher too." },
            { term: "Ranked first/second/last", meaning: "Peringkat", example: "Tokyo ranked first in customer satisfaction." }
        ]
    },

    // SLIDE 8: THE FORMULA
    {
        type: 'formula',
        title: "The Data Description Formula",
        subtitle: "Struktur yang jelas dan profesional.",
        formula: "[Subject] + [Trend Verb] + [Adverb] + [Percentage/Amount] + [Time Period] + [Comparison]",
        vocabulary: [
            { term: "Example 1", meaning: "Full formula", example: "Sales have increased significantly by 25% in Q3 compared to Q2." },
            { term: "Example 2", meaning: "Variation", example: "Customer numbers rose steadily throughout the year." },
            { term: "Example 3", meaning: "With peak", example: "Website traffic peaked at 10,000 visitors in December." },
            { term: "Example 4", meaning: "Negative trend", example: "Profit margins have fallen slightly by 3% this quarter." }
        ],
        teacherNote: "Latih formula ini sampai natural. Ini akan membuat deskripsi data Anda sangat profesional."
    },

    // SLIDE 9: MAKING PREDICTIONS
    {
        type: 'vocabulary',
        title: "Predicting Future Trends",
        subtitle: "Forecast dengan tepat.",
        vocabulary: [
            { term: "Is projected to / Is forecast to", meaning: "Diproyeksikan", example: "Revenue is projected to reach $5M by year-end." },
            { term: "Is expected to", meaning: "Diharapkan", example: "Growth is expected to continue into next quarter." },
            { term: "Is likely to / Is predicted to", meaning: "Kemungkinan besar", example: "The trend is likely to continue." },
            { term: "Is anticipated that", meaning: "Diantisipasi", example: "It is anticipated that demand will rise." },
            { term: "Barring any unforeseen circumstances", meaning: "Asalkan tidak ada hal tak terduga", example: "Barring any unforeseen circumstances, we'll hit our target." }
        ]
    },

    // SLIDE 10: EXPLAINING REASONS
    {
        type: 'vocabulary',
        title: "Explaining the 'Why'",
        subtitle: "Jelaskan faktor di balik data.",
        vocabulary: [
            { term: "This can be attributed to...", meaning: "Disebabkan oleh", example: "This growth can be attributed to our new marketing campaign." },
            { term: "The main driver behind this is...", meaning: "Faktor utama", example: "The main driver behind this increase is higher demand." },
            { term: "As a result of...", meaning: "Sebagai hasil dari", example: "As a result of cost-cutting, profits rose." },
            { term: "This was driven by...", meaning: "Didorong oleh", example: "This was driven by strong performance in Asia." },
            { term: "Several factors contributed to...", meaning: "Beberapa faktor", example: "Several factors contributed to this decline." },
            { term: "Despite...", meaning: "Meskipun", example: "Despite the economic downturn, we saw growth." }
        ]
    },

    // SLIDE 11: MICRO-DRILL
    {
        type: 'micro-drill',
        title: "Describe These Scenarios",
        subtitle: "Gunakan formula lengkap.",
        mission: [
            "1. Sales: Jan $100K → Feb $120K → Mar $150K",
            "2. Users: Started at 1000, grew slowly, peaked at 5000, now declining",
            "3. Costs: $50K last year, $55K this year (slight increase)",
            "4. Compare: Region A sales $200K, Region B sales $180K",
            "Bonus: Make a prediction for next quarter based on the trends"
        ],
        teacherNote: "Pastikan grammar benar dan angka spesifik disebutkan."
    },

    // SLIDE 12: CASE STUDY
    {
        type: 'case-study',
        title: "Case Study: The Quarterly Report",
        subtitle: "Presentasikan data ini.",
        caseStudy: {
            scenario: "Q3 DATA: Revenue: $2M (up from $1.6M in Q2). Customer acquisition cost: $50 (down from $65). Churn rate: 5% (stable). Customer satisfaction: 4.2/5 (up from 3.8). Market share: 15% (up from 12%).",
            template: "PRESENTATION SCRIPT:\n1. Open: 'Q3 has shown strong performance across all key metrics.'\n2. Revenue: 'Revenue has increased significantly by 25% compared to Q2, reaching $2M.'\n3. Efficiency: 'Customer acquisition cost has fallen by 23%, showing improved efficiency.'\n4. Retention: 'Churn rate remains stable at 5%, while satisfaction rose to 4.2/5.'\n5. Market: 'Our market share has grown from 12% to 15%, outpacing competitors.'"
        },
        teacherNote: "Ini latihan real-world yang sering terjadi di meeting bisnis."
    },

    // SLIDE 13: COMMON PHRASES TO AVOID
    {
        type: 'comparison',
        title: "Phrases to Avoid vs. Professional Alternatives",
        subtitle: "Upgrade your data vocabulary.",
        comparison: [
            { wrong: "The sales is up.", right: "Sales have increased by X%." },
            { wrong: "It went up a lot.", right: "It rose significantly/substantially." },
            { wrong: "It's better than before.", right: "It has improved compared to the previous period." },
            { wrong: "The chart shows many things.", right: "The chart illustrates several key trends." },
            { wrong: "I think it will be good.", right: "It is projected to show positive growth." }
        ],
        teacherNote: "Ingat: Data = facts. Hindari 'I think' saat presentasi data."
    },

    // SLIDE 14: ROLEPLAY
    {
        type: 'roleplay',
        title: "Roleplay: The Board Meeting",
        subtitle: "Present data to executives.",
        roleplay: {
            scenario: "Present a 2-minute data summary to the board. Use at least 3 trend verbs, 2 adverbs, specific percentages, and 2 comparison phrases. The data shows mixed results: revenue up but costs also up, some regions doing better than others.",
            roles: [
                { role: "Presenter", goal: "Present data clearly and confidently. Use proper grammar. Explain implications." },
                { role: "Board Member", goal: "Listen for clarity. Ask: 'Why did costs increase?' and 'Which region performed best?'" }
            ]
        },
        teacherNote: "Beri feedback: Grammar benar? Angka spesifik? Terdengar confident?"
    },

    // SLIDE 15: COMMON DATA MISTAKES
    {
        type: 'comparison',
        title: "Common Data Mistakes to Avoid",
        subtitle: "Fix these errors for professional credibility.",
        comparison: [
            { wrong: "The data is very good.", right: "The data shows positive growth." },
            { wrong: "Sales went up big.", right: "Sales increased significantly by 25%." },
            { wrong: "We have more customers than last time.", right: "Customer acquisition has increased compared to Q2." },
            { wrong: "The chart goes up and down.", right: "The figures fluctuated throughout the period." },
            { wrong: "I think next month will be better.", right: "We project continued growth next month." }
        ],
        teacherNote: "These are real mistakes heard in corporate settings. Emphasize specificity and formality."
    },

    // SLIDE 16: FORECASTING PHRASES
    {
        type: 'vocabulary',
        title: "Forecasting Phrases",
        subtitle: "Language for predicting future trends.",
        vocabulary: [
            { term: "Based on current trends...", meaning: "Berdasarkan tren saat ini", example: "Based on current trends, we expect a 10% increase." },
            { term: "Looking ahead...", meaning: "Melihat ke depan", example: "Looking ahead, we anticipate steady growth." },
            { term: "If this trend continues...", meaning: "Jika tren ini berlanjut", example: "If this trend continues, we'll exceed our target." },
            { term: "Conservative estimate", meaning: "Estimasi konservatif", example: "Our conservative estimate is 5% growth." },
            { term: "Optimistic scenario", meaning: "Skenario optimis", example: "In an optimistic scenario, we could see 20% growth." },
            { term: "Worst-case scenario", meaning: "Skenario terburuk", example: "Even in a worst-case scenario, we'll break even." }
        ]
    },

    // SLIDE 17: CHART TYPES OVERVIEW
    {
        type: 'vocabulary',
        title: "Chart Types Overview",
        subtitle: "Know your visuals for different data stories.",
        vocabulary: [
            { term: "Line graph", meaning: "Best for trends over time", example: "Use a line graph to show monthly revenue changes." },
            { term: "Bar chart", meaning: "Best for comparing categories", example: "A bar chart compares sales across different regions." },
            { term: "Pie chart", meaning: "Best for proportions/percentages", example: "Use a pie chart to show market share distribution." },
            { term: "Scatter plot", meaning: "Shows correlations between variables", example: "The scatter plot reveals the price-demand relationship." },
            { term: "Area chart", meaning: "Emphasizes volume/magnitude over time", example: "An area chart highlights total cumulative growth." },
            { term: "Stacked bar", meaning: "Shows parts of a whole across categories", example: "A stacked bar breaks down revenue by product line." }
        ]
    },

    // SLIDE 18: COMPLEX CHART PRACTICE (MICRO-DRILL)
    {
        type: 'micro-drill',
        title: "Describe This Complex Chart",
        subtitle: "Practice with multiple data series.",
        mission: [
            "Chart shows: Product A (steady growth from $100K to $180K over 12 months)",
            "Product B (rapid growth from $50K to $150K, then plateaued at $150K)",
            "Product C (declined from $120K to $80K, then recovered to $100K)",
            "Overall market grew 15% during the same period",
            "Task: Describe all three trends with proper verbs, adverbs, and comparisons"
        ],
        teacherNote: "Challenge students to use vocabulary from previous slides. Look for specific numbers and trend verbs."
    },

    // SLIDE 19: BUSINESS REPORT STRUCTURE
    {
        type: 'concept',
        title: "Business Report Structure",
        subtitle: "How to organize your data presentation.",
        content: [
            "1. OVERVIEW: Start with the big picture - 'Overall, revenue increased by 12% this quarter.'",
            "2. KEY HIGHLIGHTS: Mention 2-3 most important data points with specific numbers.",
            "3. TRENDS: Describe patterns - growth, decline, stability, fluctuations.",
            "4. COMPARISONS: Contrast with previous periods or competitors.",
            "5. EXPLANATIONS: Briefly state reasons using 'attributed to' or 'driven by'.",
            "6. OUTLOOK: End with forecast - projections and expectations for next period."
        ],
        teacherNote: "This structure works for emails, presentations, or formal reports. Practice the flow."
    },

    // SLIDE 20: MORE COMPARISON PHRASES
    {
        type: 'vocabulary',
        title: "Advanced Comparison Phrases",
        subtitle: "Elevate your data comparisons.",
        vocabulary: [
            { term: "Outperformed / Underperformed", meaning: "Perform better/worse than", example: "Region A outperformed Region B by 20%." },
            { term: "Narrowed the gap", meaning: "Mengurangi jarak", example: "We've narrowed the gap with our main competitor." },
            { term: "Widened the lead", meaning: "Memperlebar keunggulan", example: "We widened our lead in the Asian market." },
            { term: "On par with", meaning: "Setara dengan", example: "Our results are on par with industry standards." },
            { term: "Significantly ahead of", meaning: "Jauh di depan", example: "We're significantly ahead of last year's figures." },
            { term: "Lagging behind", meaning: "Tertinggal di belakang", example: "Q3 is lagging behind our projections." }
        ]
    },

    // SLIDE 21: RECAP
    {
        type: 'recap',
        title: "Key Takeaways: Describing Data",
        recap: [
            { context: "Grammar basics", sayThis: "Sales HAVE increased, Revenue HAS grown, The number IS rising", dontSayThis: "The sales is up, The revenue have grown" },
            { context: "Trend verbs", sayThis: "Sales rose significantly, Costs fell slightly", dontSayThis: "Sales went up big, Costs went down a little" },
            { context: "Specific numbers", sayThis: "Increased by 25% compared to Q2", dontSayThis: "Increased a lot compared to before" },
            { context: "Forecasting", sayThis: "Revenue is projected to reach $5M", dontSayThis: "I think revenue will be good" },
            { context: "Explaining reasons", sayThis: "This growth can be attributed to...", dontSayThis: "This happened because..." },
            { context: "Comparisons", sayThis: "Region A outperformed Region B", dontSayThis: "Region A is better than Region B" }
        ]
    },

    // SLIDE 22: MISSION
    {
        type: 'mission',
        title: "This Week's Mission",
        subtitle: "Master data description.",
        mission: [
            "Find a chart/graph online and describe it aloud",
            "Rewrite 3 'sales is up' statements dengan grammar benar",
            "Practice the full formula dengan data nyata",
            "Notice how professionals describe trends di news/business shows",
            "Prepare a 1-minute data presentation untuk next class"
        ],
        teacherNote: "Data literacy = career advancement. Skill ini sangat dicari di corporate world."
    }
];

export const quiz: QuizQuestion[] = [];
