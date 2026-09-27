import Image from "next/image";
import Link from "next/link";

import { Workout } from "@/types/workout";

interface WorkoutCardProps {
    workout: Workout;
}


const WorkoutCard = ({
    workout,
}: WorkoutCardProps) => {
    
    const {id, name, image, equipment, duration, caloriesBurned, rating, muscleGroups} = workout;

    return (
        <Link
            href={`/workout/${id}`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#151515] transition hover:-translate-y-1 hover:border-[#ccff00]"
        >

            {/* Image */}
            <div className="relative h-60 overflow-hidden">

                <Image
                    width= {500}
                    height={200}
                    src={image}
                    alt={name}
                    className="object-cover transition duration-500 group-hover:scale-105"
                />

            </div>

            {/* Content */}
            <div className="p-5">

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">

                    {muscleGroups?.map(
                        (muscleGroup) => (
                            <span
                                key={muscleGroup}
                                className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black text-black"
                            >
                                {muscleGroup}
                            </span>
                        )
                    )}

                </div>

                <h2 className="text-xl text-white font-black uppercase">
                    {name}
                </h2>

                <p className="mt-2 text-sm text-gray-300">
                    {equipment}
                </p>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-3 gap-1 border-t border-white/10 pt-4">

                    <div className="flex gap-2 items-center text-base text-gray-300 text-center">
                        <span className="text-xl  font-bold text-gray-300">
                            &#x23F1;
                        </span>

                        <div>
                            <span className="text-xs">
                                {duration} min
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center text-base text-gray-300 text-center">
                        <span className="text-xl  font-bold text-gray-300">
                            &#x1F525;
                        </span>

                        <div>
                            <span className="text-xs">
                                {caloriesBurned} kcal
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center text-base text-gray-300">
                        <span className="text-xl font-bold text-gray-300">
                            &#9734;
                        </span>

                        <div>
                            <span className="text-xs">
                                {rating}
                            </span>
                        </div>
                    </div>

                </div>

            </div>

        </Link>
    );
};

export default WorkoutCard;