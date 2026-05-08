"use server";

import { createClient } from "@/utils/supabase/server";

export interface ReadingDrill {
    id: string;
    content: string;
    level: string;
}

export interface ReadingProgress {
    count: number;
    completedDrillIds: string[];
    locked: boolean;
}

// Deterministic shuffling/selection based on days since epoch
const getDayIndex = () => {
    const now = new Date();
    // Use a fixed timezone offset or UTC to ensure consistency across users if needed.
    // Ideally, this should use the user's local day, but for shared "Daily Game" usually server time or UTC is safer.
    // Let's use UTC days since epoch.
    const oneDay = 24 * 60 * 60 * 1000;
    const start = new Date(Date.UTC(2025, 0, 1)); // Anchor date
    const diff = now.getTime() - start.getTime();
    return Math.floor(diff / oneDay);
};

export async function getDailyDrills(): Promise<ReadingDrill[]> {
    const supabase = await createClient();
    const dayIndex = getDayIndex();
    const cycleLength = 10; // We have content for 10 days (10 Easy, 20 Medium -> 1+2 per day)
    const dayInCycle = dayIndex % cycleLength;

    // Fetch all Easy drills sorted by ID or Creation to ensure deterministic order
    const { data: easyDrills, error: easyError } = await supabase
        .from("reading_drills")
        .select("*")
        .eq("level", "Easy")
        .order("content", { ascending: true }); // Ordering by content as it's stable

    if (easyError || !easyDrills) throw new Error("Failed to fetch easy drills");

    // Fetch all Medium drills
    const { data: mediumDrills, error: mediumError } = await supabase
        .from("reading_drills")
        .select("*")
        .eq("level", "Medium")
        .order("content", { ascending: true });

    if (mediumError || !mediumDrills) throw new Error("Failed to fetch medium drills");

    // Select 1 Easy
    const selectedEasy = easyDrills[dayInCycle % easyDrills.length];

    // Select 2 Medium
    // Logic: 20 medium drills. 
    // Day 0: 0, 1
    // Day 1: 2, 3
    // ...
    // Day 9: 18, 19
    const mediumIndex1 = (dayInCycle * 2) % mediumDrills.length;
    const mediumIndex2 = (dayInCycle * 2 + 1) % mediumDrills.length;

    const selectedMedium1 = mediumDrills[mediumIndex1];
    const selectedMedium2 = mediumDrills[mediumIndex2];

    return [selectedEasy, selectedMedium1, selectedMedium2];
}

export async function getDailyStatus(): Promise<ReadingProgress> {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return { count: 0, completedDrillIds: [], locked: true }; // Should be handled by middleware/auth check

    // Get today's start and end in UTC to match database timestamps or just filter by date
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const { data: progress, error } = await supabase
        .from("user_reading_progress")
        .select("drill_id")
        .eq("user_id", user.id)
        .gte("completed_at", today.toISOString())
        .lt("completed_at", tomorrow.toISOString());

    if (error) {
        console.error("Error fetching progress:", error);
        return { count: 0, completedDrillIds: [], locked: false };
    }

    const count = progress.length;
    const completedDrillIds = progress.map(p => p.drill_id);

    return {
        count,
        completedDrillIds,
        locked: count >= 3
    };
}

export async function submitDrillResult(drillId: string, wpm: number, success: boolean) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) throw new Error("User not authenticated");

    const { error } = await supabase.from("user_reading_progress").insert({
        user_id: user.id,
        drill_id: drillId,
        wpm,
        success
    });

    if (error) throw error;
    return { success: true };
}
