import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            event_date,
            absen,
            status,
            scores,
            accuracy_scores,
            fluency_scores,
            words,
            feedback,
        } = body;

        if (!event_date || !absen || !status) {
            return NextResponse.json(
                { error: "Missing required fields: event_date, absen, status" },
                { status: 400 }
            );
        }

        const supabase = await createAdminClient();

        const { error } = await supabase
            .from("sd_jagakarsa_results")
            .upsert(
                {
                    event_date,
                    absen,
                    status,
                    scores: (scores ?? []).map((s: any) => Math.round(Number(s))),
                    accuracy_scores: (accuracy_scores ?? []).map((s: any) => Math.round(Number(s))),
                    fluency_scores: (fluency_scores ?? []).map((s: any) => Math.round(Number(s))),
                    words: words ?? [],
                    feedback: feedback ?? [],
                },
                { onConflict: "event_date,absen" }
            );

        if (error) {
            console.error("Supabase upsert error:", error);
            return NextResponse.json(
                { error: "Failed to save result", detail: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Save API error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
