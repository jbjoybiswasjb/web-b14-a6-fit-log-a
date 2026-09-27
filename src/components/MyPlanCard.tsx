"use client";

import Image from "next/image";
import Link from "next/link";

import { Workout } from "@/types/workout";

interface MyPlanCardProps {
    workout: Workout;
    saved?: boolean;

    onDone?: (id: string) => void;
    onRemove: (id: string) => void;
}

const MyPlanCard = ({
    workout,
    saved = false,
    onDone,
    onRemove,
}: MyPlanCardProps) => {
    return (
        <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#151515] p-4 sm:flex-row">

            {/* Image */}
            <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-48">

                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                />

            </div>

            {/* Content */}
            <div className="flex flex-1 justify-center flex-col">

                <div className="flex flex-col justify-between gap-3 sm:flex-row">

                    <div>

                        <h3 className="text-xl font-black uppercase">
                            {workout.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            {workout.equipment}
                        </p>

                    </div>

                    {/* Buttons */}
                    <div className="mt-5 flex flex-wrap gap-3">

                        <Link
                            href={`/workout/${workout.id}`}
                            className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold"
                        >
                            View Details
                        </Link>

                        {!saved && onDone && (
                            <button
                                type="button"
                                onClick={() => onDone(workout.id)}
                                className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black text-black"
                            >
                                ✓ Mark as Done
                            </button>
                        )}

                        {/* Remove button. */}
                        <button
                            type="button"
                            onClick={() => onRemove(workout.id)}
                            className="self-start text-xl text-gray-500 transition hover:text-red-400"
                        >
                            ×
                        </button>

                    </div>

                </div>

                {/* Stats */}
                <div className="mt-5 flex flex-wrap gap-5 text-sm text-gray-400">

                    <span>
                        ⏱ {workout.duration} min
                    </span>

                    <span>
                        🔥 {workout.caloriesBurned} kcal
                    </span>

                    <span>
                        ★ {workout.rating}
                    </span>

                </div>



            </div>

        </div>
    );
};

export default MyPlanCard;