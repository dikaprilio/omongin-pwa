"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import RankingTable from "./components/RankingTable";
import { Loader2, RefreshCw } from "lucide-react";

interface RankingItem {
    absen: number;
    status: string;
    scores: number[];
    average_score: number;
    created_at: string;
}

export default function ClientPage({ initialData }: { initialData: RankingItem[] }) {
    const [data, setData] = useState<RankingItem[]>(initialData);
    const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchData = async () => {
        setIsRefreshing(true);
        try {
            const supabase = createClient();
            const today = new Date().toISOString().split("T")[0];
            const { data: results, error } = await supabase
                .from("sd_jagakarsa_results")
                .select("absen, status, scores, average_score, created_at")
                .eq("event_date", today)
                .order("average_score", { ascending: false });

            if (!error && results) {
                setData(results);
                setLastUpdated(new Date());
            }
        } finally {
            setIsRefreshing(false);
        }
    };

    useEffect(() => {
        const interval = setInterval(fetchData, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="flex items-center justify-end px-4 pt-4 gap-2">
                <span className="text-xs text-gray-400">
                    Update: {lastUpdated.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
                </span>
                <button
                    onClick={fetchData}
                    disabled={isRefreshing}
                    className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                    {isRefreshing ? (
                        <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                    ) : (
                        <RefreshCw className="w-4 h-4 text-gray-500" />
                    )}
                </button>
            </div>
            <RankingTable data={data} />
        </div>
    );
}
