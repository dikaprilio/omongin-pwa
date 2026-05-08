import HomeScreen from "@/components/mobile/HomeScreen";
import MobileBottomNav from "@/components/mobile/MobileBottomNav";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-50 md:bg-white">
            {/* Mobile view: show new HomeScreen with bottom nav */}
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
                <h1 className="text-4xl font-black mb-4 text-blue-600">Omongin</h1>
                <p className="text-xl text-slate-600 mb-8">Belajar Bahasa Inggris Santai & Fleksibel</p>
                <p className="text-slate-400">Gunakan perangkat mobile untuk pengalaman terbaik.</p>
            </div>
        </div>
    );
}
