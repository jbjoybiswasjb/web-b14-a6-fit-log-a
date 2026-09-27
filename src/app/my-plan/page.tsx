"use client";

import { useState } from "react";

import EmptyState from "@/components/EmptyState";
import MyPlanCard from "@/components/MyPlanCard";

import { useFitLog } from "@/context/FitLogContext";
import SortDropdown from "@/components/SortDropdown";

const MyPlanPage = () => {
    const {
        plan,
        saved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
    } = useFitLog();

    const [sortBy, setSortBy] =
        useState("duration");

    const [activeTab, setActiveTab] =
        useState<"plan" | "saved">("plan");

    const currentList =
        activeTab === "plan"
            ? plan
            : saved;

    const minutes = plan.reduce(
        (total, workout) =>
            total + workout.duration,
        0
    );

    const caloriesBurned = plan.reduce(
        (total, workout) =>
            total + workout.caloriesBurned,
        0
    );

    const sortedCurrentList = [...currentList].sort(
        (a, b) => {
            if (sortBy === "duration") {
                return a.duration - b.duration;
            }

            if (sortBy === "calories") {
                return a.caloriesBurned - b.caloriesBurned;
            }

            if (sortBy === "rating") {
                return b.rating - a.rating;
            }

            return 0;
        }
    );

    return (
        <main className="min-h-screen bg-[#080808] px-4 py-16 text-white md:px-6 lg:py-24">

            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div>

                    <p className="text-xs font-black tracking-[0.3em] text-[#ccff00]">
                        YOUR LOG
                    </p>

                    <h1 className="mt-3 text-5xl font-black uppercase">
                        MY PLAN
                    </h1>

                    <p className="mt-3 text-gray-500">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>

                </div>

                {/* Metrics */}
                <div className="mt-10 grid gap-4 sm:grid-cols-3">

                    <Metric
                        label="Exercises"
                        value={plan.length}
                    />

                    <Metric
                        label="Minutes"
                        value={minutes}
                    />

                    <Metric
                        label="Calories"
                        value={caloriesBurned}
                    />

                </div>


                {/* Tabs. */}
                <div className="mt-12 flex justify-between border-b border-white/10">

                    <div className="flex">
                        <button
                            onClick={() =>
                                setActiveTab("plan")
                            }
                            className={`px-6 py-4 text-sm font-black ${activeTab === "plan"
                                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                                : "text-gray-500"
                                }`}
                        >
                            TODAYS PLAN
                        </button>

                        <button
                            onClick={() =>
                                setActiveTab("saved")
                            }
                            className={`px-6 py-4 text-sm font-black ${activeTab === "saved"
                                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                                : "text-gray-500"
                                }`}
                        >
                            SAVED
                        </button>
                    </div>


                    {/* Sort Drop Down Added. */}
                    <div className="flex gap-3 items-center">
                        <p className="text-sm md:text-xl font-bold uppercase text-gray-300">
                            Sort By
                        </p>

                        <div>
                            <SortDropdown
                                value={sortBy}
                                onChange={setSortBy}
                            />
                        </div>
                    </div>

                </div>




                {/* List */}
                <div className="mt-8 space-y-4">

                    {currentList.length === 0 ? (
                        <EmptyState />
                    ) : (
                        sortedCurrentList.map(
                            (workout) => (
                                <MyPlanCard
                                    key={workout.id}
                                    workout={workout}
                                    saved={activeTab === "saved"}
                                    onDone={
                                        activeTab === "plan"
                                            ? markAsDone
                                            : undefined
                                    }
                                    onRemove={
                                        activeTab === "plan"
                                            ? removeFromPlan
                                            : removeFromSaved
                                    }
                                />
                            )
                        )
                    )}

                </div>

            </div>

        </main>
    );
};

const Metric = ({
    label,
    value,
}: {
    label: string;
    value: number;
}) => {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#151515] p-6">

            <p className="text-xs font-bold uppercase text-gray-500">
                {label}
            </p>

            <p className="mt-2 text-4xl font-black text-[#ccff00]">
                {value}
            </p>

        </div>
    );
};

export default MyPlanPage;