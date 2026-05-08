import type { Metadata, Viewport } from "next";
import { Poppins, Inter, Lilita_One } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next"
import SplashScreen from "@/components/mobile/SplashScreen";


const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lilitaOne = Lilita_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Omongin | Belajar Bahasa Inggris Santai & Fleksibel",
  description: "Platform belajar bahasa Inggris yang santai, fleksibel, dan fokus pada hasil nyata. Dari daily conversation sampai interview prep.",
  keywords: ["kursus bahasa inggris", "belajar bahasa inggris", "english course", "toefl", "ielts", "conversation", "omongin", "les inggris santai"],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Omongin",
  },
  openGraph: {
    title: "Omongin | Belajar Bahasa Inggris Santai",
    description: "Platform belajar bahasa Inggris yang santai, fleksibel, dan fokus pada hasil nyata.",
    url: "https://englishchillcourse.site",
    siteName: "Omongin",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omongin",
    description: "Belajar Bahasa Inggris Santai & Fleksibel",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} ${lilitaOne.variable} font-sans antialiased relative`}>
        {/* Global Background Pattern */}
        <div className="fixed inset-0 -z-50 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
            backgroundColor: '#f8fafc'
          }}
        />
        <SplashScreen>
          {children}
        </SplashScreen>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
