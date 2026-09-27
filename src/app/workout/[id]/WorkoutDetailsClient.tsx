"use client";

import { useRouter } from "next/navigation";

import { useFitLog } from "@/context/FitLogContext";
import { Workout } from "@/types/workout";
import WorkoutDetails from "@/components/WorkoutDetails";

const WorkoutDetailsClient = ({
    workout,
}: {
    workout: Workout;
}) => {
    const router = useRouter();

    const { addToPlan, saveWorkout, } = useFitLog();

    const handleAddToPlan = () => {
        addToPlan(workout);
    };

    const handleSave = () => {
        saveWorkout(workout);
    };

    return (
        <WorkoutDetails
            workout={workout}
            onAddToPlan={handleAddToPlan}
            onSaveForLater={handleSave}
        />
    );
};

export default WorkoutDetailsClient;