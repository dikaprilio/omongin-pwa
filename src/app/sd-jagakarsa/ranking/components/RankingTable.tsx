"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Trophy, ArrowUpDown, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RankingItem {
    absen: number;
    status: string;
    scores: number[];
    average_score: number;
    created_at: string;
}

type SortKey = "average" | "absen" | "q1" | "q2" | "q3";
type FilterStatus = "all" | "done" | "absent";

interface RankingTableProps {
    data: RankingItem[];
}

export default function RankingTable({ data }: RankingTableProps) {
    const [sortKey, setSortKey] = useState<SortKey>("average");
    const [filter, setFilter] = useState<FilterStatus>("all");

    const filtered = useMemo(() => {
        let items = [...data];
        if (filter === "done") items = items.filter((d) => d.status === "done");
        if (filter === "absent") items = items.filter((d) => d.status === "absent");

        items.sort((a, b) => {
            if (sortKey === "average") {
                if (b.average_score !== a.average_score) return b.average_score - a.average_score;
                return a.absen - b.absen;
            }
            if (sortKey === "absen") return a.absen - b.absen;
            if (sortKey === "q1") return (b.scores[0] ?? 0) - (a.scores[0] ?? 0);
            if (sortKey === "q2") return (b.scores[1] ?? 0) - (a.scores[1] ?? 0);
            if (sortKey === "q3") return (b.scores[2] ?? 0) - (a.scores[2] ?? 0);
            return 0;
        });

        return items;
    }, [data, sortKey, filter]);

    const topThree = filtered.filter((d) => d.status === "done").slice(0, 3);

    const toggleSort = (key: SortKey) => {
        setSortKey((prev) => (prev === key ? "average" : key));
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                    🏆 Leaderboard
                </h1>
                <p className="text-gray-500 mt-1">ECC x SDN Jagakarsa 03 — Speaking Assessment</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-xs text-green-600 font-medium">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    Live — auto refresh
                </div>
            </div>

            {/* Podium */}
            {topThree.length > 0 && (
                <div className="flex items-end justify-center gap-3 mb-8">
                    {topThree[1] && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-black text-gray-600 mb-2 border-4 border-gray-300">
                                {topThree[1].absen}
                            </div>
                            <div className="w-20 md:w-24 h-24 bg-gray-200 rounded-t-xl flex flex-col items-center justify-end pb-3">
                                <Trophy className="w-5 h-5 text-gray-400 mb-1" />
                                <span className="text-lg font-black text-gray-700">{topThree[1].average_score}</span>
                            </div>
                        </motion.div>
                    )}
                    {topThree[0] && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-2xl font-black text-amber-700 mb-2 border-4 border-amber-300 shadow-lg">
                                {topThree[0].absen}
                            </div>
                            <div className="w-24 md:w-28 h-32 bg-amber-100 rounded-t-xl flex flex-col items-center justify-end pb-3 border-t-4 border-x-4 border-amber-300">
                                <Trophy className="w-6 h-6 text-amber-500 mb-1" />
                                <span className="text-2xl font-black text-amber-700">{topThree[0].average_score}</span>
                            </div>
                        </motion.div>
                    )}
                    {topThree[2] && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-xl font-black text-orange-700 mb-2 border-4 border-orange-300">
                                {topThree[2].absen}
                            </div>
                            <div className="w-20 md:w-24 h-20 bg-orange-100 rounded-t-xl flex flex-col items-center justify-end pb-3">
                                <Trophy className="w-5 h-5 text-orange-400 mb-1" />
                                <span className="text-lg font-black text-orange-700">{topThree[2].average_score}</span>
                            </div>
                        </motion.div>
                    )}
                </div>
            )}

            {/* Filters */}
            <div className="flex items-center justify-center gap-2 mb-4">
                {(["all", "done", "absent"] as FilterStatus[]).map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={cn(
                            "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                            filter === f
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                        )}
                    >
                        {f === "all" && "Semua"}
                        {f === "done" && "Hadir"}
                        {f === "absent" && "Absen"}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Rank</th>
                                <th
                                    className="px-4 py-3 text-left font-semibold text-gray-600 cursor-pointer hover:text-blue-600"
                                    onClick={() => toggleSort("absen")}
                                >
                                    <span className="flex items-center gap-1">
                                        Absen
                                        <ArrowUpDown className="w-3 h-3" />
                                    </span>
                                </th>
                                <th className="px-4 py-3 text-left font-semibold text-gray-600">Status</th>
                                <th
                                    className="px-4 py-3 text-center font-semibold text-gray-600 cursor-pointer hover:text-blue-600"
                                    onClick={() => toggleSort("q1")}
                                >
                                    <span className="flex items-center justify-center gap-1">
                                        Q1
                                        <ArrowUpDown className="w-3 h-3" />
                                    </span>
                                </th>
                                <th
                                    className="px-4 py-3 text-center font-semibold text-gray-600 cursor-pointer hover:text-blue-600"
                                    onClick={() => toggleSort("q2")}
                                >
                                    <span className="flex items-center justify-center gap-1">
                                        Q2
                                        <ArrowUpDown className="w-3 h-3" />
                                    </span>
                                </th>
                                <th
                                    className="px-4 py-3 text-center font-semibold text-gray-600 cursor-pointer hover:text-blue-600"
                                    onClick={() => toggleSort("q3")}
                                >
                                    <span className="flex items-center justify-center gap-1">
                                        Q3
                                        <ArrowUpDown className="w-3 h-3" />
                                    </span>
                                </th>
                                <th
                                    className="px-4 py-3 text-center font-semibold text-gray-600 cursor-pointer hover:text-blue-600"
                                    onClick={() => toggleSort("average")}
                                >
                                    <span className="flex items-center justify-center gap-1">
                                        Rata-rata
                                        <ArrowUpDown className="w-3 h-3" />
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((item, index) => (
                                <motion.tr
                                    key={item.absen}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.02 }}
                                    className={cn(
                                        "border-b border-gray-100 hover:bg-gray-50 transition-colors",
                                        index % 2 === 0 && "bg-white",
                                        index % 2 === 1 && "bg-gray-50/50"
                                    )}
                                >
                                    <td className="px-4 py-3 font-bold text-gray-400">
                                        {item.status === "done" ? index + 1 : "—"}
                                    </td>
                                    <td className="px-4 py-3 font-bold text-gray-900">
                                        {item.absen}
                                    </td>
                                    <td className="px-4 py-3">
                                        {item.status === "done" ? (
                                            <span className="inline-flex items-center gap-1 text-green-600 text-xs font-medium bg-green-50 px-2 py-0.5 rounded-full">
                                                <CheckCircle2 className="w-3 h-3" /> Hadir
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 text-red-500 text-xs font-medium bg-red-50 px-2 py-0.5 rounded-full">
                                                <XCircle className="w-3 h-3" /> Absen
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        {item.status === "done" ? (
                                            <span
                                                className={cn(
                                                    "font-bold",
                                                    (item.scores[0] ?? 0) >= 80 && "text-green-600",
                                                    (item.scores[0] ?? 0) >= 50 && (item.scores[0] ?? 0) < 80 && "text-yellow-600",
                                                    (item.scores[0] ?? 0) < 50 && "text-red-500"
                                                )}
                                            >
                                                {item.scores[0] ?? "—"}
                                            </span>
                                        ) : (
                                            <span className="text-gray-300">—</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        {item.status === "done" ? (
                                            <span
                                                className={cn(
                                                    "font-bold",
                                                    (item.scores[1] ?? 0) >= 80 && "text-green-600",
                                                    (item.scores[1] ?? 0) >= 50 && (item.scores[1] ?? 0) < 80 && "text-yellow-600",
                                                    (item.scores[1] ?? 0) < 50 && "text-red-500"
                                                )}
                                            >
                                                {item.scores[1] ?? "—"}
                                            </span>
                                        ) : (
                                            <span className="text-gray-300">—</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        {item.status === "done" ? (
                                            <span
                                                className={cn(
                                                    "font-bold",
                                                    (item.scores[2] ?? 0) >= 80 && "text-green-600",
                                                    (item.scores[2] ?? 0) >= 50 && (item.scores[2] ?? 0) < 80 && "text-yellow-600",
                                                    (item.scores[2] ?? 0) < 50 && "text-red-500"
                                                )}
                                            >
                                                {item.scores[2] ?? "—"}
                                            </span>
                                        ) : (
                                            <span className="text-gray-300">—</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        {item.status === "done" ? (
                                            <span
                                                className={cn(
                                                    "font-black text-base",
                                                    item.average_score >= 80 && "text-green-600",
                                                    item.average_score >= 50 && item.average_score < 80 && "text-yellow-600",
                                                    item.average_score < 50 && "text-red-500"
                                                )}
                                            >
                                                {item.average_score}
                                            </span>
                                        ) : (
                                            <span className="text-gray-300">—</span>
                                        )}
                                    </td>
                                </motion.tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="px-4 py-12 text-center text-gray-400">
                                        Belum ada data untuk filter ini.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
                Data diperbarui otomatis setiap 10 detik
            </p>
        </div>
    );
}
