"use client";

import Image from "next/image";
import { Workout } from "@/types/workout";
import { CalendarPlus, Bookmark } from 'lucide-react';

interface WorkOutDetailsProps {
    workout: Workout;
    onAddToPlan: () => void;
    onSaveForLater: () => void;
}

const WorkOutDetails = ({ 
    workout,
    onAddToPlan,
    onSaveForLater,
}: WorkOutDetailsProps) => {


    return (
        <section className="min-h-screen bg-[#080808] px-4 py-12 text-white md:px-6 lg:py-20">

            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

                {/* Image */}
                <div className="relative min-h-[450px] overflow-hidden rounded-2xl lg:min-h-[650px]">

                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />

                </div>

                {/* Content */}
                <div>

                    <p className="text-xs font-black tracking-[0.3em] text-[#ccff00]">
                        WORKOUT DETAILS
                    </p>

                    <h1 className="mt-4 text-4xl font-black uppercase leading-none md:text-6xl">
                        {workout.name}
                    </h1>

                    <p className="mt-6 leading-7 text-gray-400">
                        {workout.description}
                    </p>

                    {/* Categories */}
                    <div className="mt-6 flex flex-wrap gap-2">

                        {workout.muscleGroups.map(
                            (muscleGroup) => (
                                <span
                                    key={muscleGroup}
                                    className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black uppercase text-black"
                                >
                                    {muscleGroup}
                                </span>
                            )
                        )}

                    </div>

                    {/* Specs */}
                    <div className="mt-8 rounded-2xl border border-white/10 bg-[#151515] p-6">

                        <h2 className="mb-6 font-black">
                            KEY SPECS
                        </h2>

                        <div className="grid grid-cols-2 gap-5">

                            <Spec
                                label="Equipment"
                                value={workout.equipment}
                            />

                            <Spec
                                label="Difficulty"
                                value={workout.difficulty}
                            />

                            <Spec
                                label="Sets"
                                value={String(workout.sets)}
                            />

                            <Spec
                                label="Reps"
                                value={workout.reps}
                            />

                            <Spec
                                label="Duration"
                                value={`${workout.duration} min`}
                            />

                            <Spec
                                label="Calories"
                                value={`${workout.caloriesBurned} kcal`}
                            />

                            <Spec
                                label="Rating"
                                value={`★ ${workout.rating}`}
                            />

                        </div>

                    </div>

                    {/* Instructions */}
                    <div className="mt-8">

                        <h2 className="font-black">
                            INSTRUCTIONS
                        </h2>

                        <ol className="mt-5 space-y-4">

                            {workout.instructions.map(
                                (instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-4 text-gray-400"
                                    >

                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-black text-black">
                                            {index + 1}
                                        </span>

                                        <span>
                                            {instruction}
                                        </span>

                                    </li>
                                )
                            )}

                        </ol>

                    </div>

                    <div className="flex items-center gap-3 bg-[#0a0a0a] px-4 mt-10"> {/* Dark background container */}

                        {/* Add to today's plan Button */}
                        <button
                            onClick={onAddToPlan}
                            className="flex items-center gap-2 rounded-2xl bg-[#ccff00] px-6 py-3.5 text-sm font-semibold text-black transition hover:opacity-90 active:scale-[0.98]"
                        >
                            <CalendarPlus className="h-4 w-4 stroke-[2.5]" />
                            <span>Add to todays plan</span>
                        </button>

                        {/* Save for later Button */}
                        <button
                            onClick={onSaveForLater}
                            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5 active:scale-[0.98]"
                        >
                            <Bookmark className="h-4 w-4 stroke-[2]" />
                            <span>Save for later</span>
                        </button>

                    </div>


                </div>

            </div>

        </section>
    );
};

const Spec = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => {
    return (
        <div className="border-b border-white/10 pb-3">

            <p className="text-[10px] font-bold uppercase text-gray-500">
                {label}
            </p>

            <p className="mt-1 text-sm font-bold">
                {value}
            </p>

        </div>
    );
};

export default WorkOutDetails;