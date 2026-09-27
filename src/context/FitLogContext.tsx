"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

import { toast } from "react-toastify";
import { Workout } from "@/types/workout";

interface FitLogContextType {
    plan: Workout[];
    saved: Workout[];

    addToPlan: (workout: Workout) => void;
    removeFromPlan: (id: string) => void;

    saveWorkout: (workout: Workout) => void;
    removeFromSaved: (id: string) => void;

    markAsDone: (id: string) => void;

    isInPlan: (id: string) => boolean;
    isSaved: (id: string) => boolean;
}

const FitLogContext =
    createContext<FitLogContextType | undefined>(undefined);

export const FitLogProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [plan, setPlan] = useState<Workout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const storedPlan = localStorage.getItem("fitlog-plan");
        const storedSaved = localStorage.getItem("fitlog-saved");
        queueMicrotask(() => {
            if (storedPlan) {
                setPlan(JSON.parse(storedPlan));
            }

            if (storedSaved) {
                setSaved(JSON.parse(storedSaved));
            }

            setMounted(true);
        });
    }, []);

    useEffect(() => {
        if (!mounted) return;

        localStorage.setItem(
            "fitlog-plan",
            JSON.stringify(plan)
        );
    }, [plan, mounted]);

    useEffect(() => {
        if (!mounted) return;

        localStorage.setItem(
            "fitlog-saved",
            JSON.stringify(saved)
        );
    }, [saved, mounted]);

    const addToPlan = (workout: Workout) => {
        if (plan.length >= 5) {
            toast.warning("Today's plan can contain only 5 lifts.");
            return;
        }

        if (plan.some((item) => item.id === workout.id)) {
            toast.info("This workout is already in today's plan.");
            return;
        }

        setPlan((previous) => [
            ...previous,
            workout,
        ]);

        toast.success("Added to today's plan");
    };

    const removeFromPlan = (id: string) => {
        setPlan((previous) =>
            previous.filter((item) => item.id !== id)
        );

        toast.success("Workout removed from today's plan");
    };

    const saveWorkout = (workout: Workout) => {
        if (saved.some((item) => item.id === workout.id)) {
            toast.info("Workout is already saved.");
            return;
        }

        setSaved((previous) => [
            ...previous,
            workout,
        ]);

        toast.success("Workout saved for later");
    };

    const removeFromSaved = (id: string) => {
        setSaved((previous) =>
            previous.filter((item) => item.id !== id)
        );

        toast.success("Workout removed from saved");
    };

    const markAsDone = (id: string) => {
        setPlan((previous) =>
            previous.filter((item) => item.id !== id)
        );

        toast.success("Workout marked as done!");
    };

    const isInPlan = (id: string) =>
        plan.some((item) => item.id === id);

    const isSaved = (id: string) =>
        saved.some((item) => item.id === id);

    return (
        <FitLogContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                removeFromPlan,
                saveWorkout,
                removeFromSaved,
                markAsDone,
                isInPlan,
                isSaved,
            }}
        >
            {children}
        </FitLogContext.Provider>
    );
};

export const useFitLog = () => {
    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error(
            "useFitLog must be used inside FitLogProvider"
        );
    }

    return context;
};