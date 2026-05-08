"use client";

import { useState, useEffect } from "react";
import HomeScreen from "@/components/mobile/HomeScreen";
import MobileBottomNav from "@/components/mobile/MobileBottomNav";
import OnboardingScreen from "@/components/mobile/OnboardingScreen";

export default function LandingPage() {
    const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);

    useEffect(() => {
        const completed = localStorage.getItem("onboardingComplete");
        setShowOnboarding(completed !== "true");
    }, []);

    const handleOnboardingComplete = () => {
        setShowOnboarding(false);
    };

    // Prevent hydration mismatch - show nothing while checking localStorage
    if (showOnboarding === null) {
        return (
            <div className="min-h-screen bg-white md:bg-white flex items-center justify-center">
                <div className="w-8 h-8 border-[3px] border-blue-200 border-t-blue-500 rounded-full animate-spin" />
            </div>
        );
    }

    if (showOnboarding) {
        return <OnboardingScreen onComplete={handleOnboardingComplete} />;
    }

    return (
        <div className="min-h-screen bg-slate-50 md:bg-white">
            {/* Mobile view: show HomeScreen with bottom nav */}
            <div className="md:hidden">
                <HomeScreen />
                <MobileBottomNav />
            </div>

            {/* Desktop view: keep existing landing page content */}
            <div className="hidden md:block">
                <DesktopLanding />
            </div>
        </div>
    );
}

function DesktopLanding() {
    return (
        <div className="min-h-screen font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
                <img src="/omongin-logo.svg" alt="Omongin" className="w-24 h-24 mb-6 object-contain" />
                <h1 className="text-4xl font-black mb-4 text-blue-600">Omongin</h1>
                <p className="text-xl text-slate-600 mb-8">Belajar Bahasa Inggris Santai & Fleksibel</p>
                <p className="text-slate-400">Gunakan perangkat mobile untuk pengalaman terbaik.</p>
            </div>
        </div>
    );
}
