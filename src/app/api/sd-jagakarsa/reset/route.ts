import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { event_date } = body;

        if (!event_date) {
            return NextResponse.json(
                { error: "Missing event_date" },
                { status: 400 }
            );
        }

        const supabase = await createAdminClient();

        const { error } = await supabase
            .from("sd_jagakarsa_results")
            .delete()
            .eq("event_date", event_date);

        if (error) {
            console.error("Supabase delete error:", error);
            return NextResponse.json(
                { error: "Failed to reset data", detail: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, deleted: true });
    } catch (err) {
        console.error("Reset API error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
