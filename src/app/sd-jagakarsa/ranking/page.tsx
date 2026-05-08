import { createClient } from "@/utils/supabase/server";
import ClientPage from "./ClientPage";

export const metadata = {
    title: "Leaderboard — ECC x SDN Jagakarsa 03",
    description: "Live ranking for SDN Jagakarsa 03 AI Speaking Assessment.",
};

export const dynamic = "force-dynamic";

export default async function Page() {
    const supabase = await createClient();
    const today = new Date().toISOString().split("T")[0];

    const { data } = await supabase
        .from("sd_jagakarsa_results")
        .select("absen, status, scores, average_score, created_at")
        .eq("event_date", today)
        .order("average_score", { ascending: false });

    return <ClientPage initialData={data ?? []} />;
}
