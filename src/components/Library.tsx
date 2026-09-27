"use client";

import { useEffect, useState } from "react";

import WorkoutCard from "@/components/WorkoutCard";
import SortDropdown from "@/components/SortDropdown";

import { getWorkouts } from "@/lib/api";
import { Workout } from "@/types/workout";

const Library = () => {
  const [workouts, setWorkouts] =
    useState<Workout[]>([]);

  const [sortBy, setSortBy] =
    useState("duration");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const data = await getWorkouts();

        setWorkouts(data);
      } catch {
        setError(
          "Failed to load workouts."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const sortedWorkouts = [...workouts].sort(
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
    <section
      id="library"
      className="bg-[#080808] px-4 py-16 md:px-6 lg:py-24"
    >

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="text-xs font-black tracking-[0.3em] text-[#ccff00]">
              TRAIN SMART
            </p>

            <h2 className="mt-3 text-4xl font-black text-white uppercase md:text-5xl">
              THE LIBRARY
            </h2>

            <p className="mt-3 text-gray-300 text-base">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {/* Sort */}
          <div className="flex gap-3 items-center">
            <p className="text-xl font-bold uppercase text-gray-300">
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

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-[#ccff00]" />
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="py-20 text-center text-red-400">
            {error}
          </div>
        )}

        {/* Cards */}
        {!loading && !error && (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedWorkouts.map(
              (workout) => (
                <WorkoutCard
                  key={workout.id}
                  workout={workout}
                />
              )
            )}
          </div>
        )}

      </div>

    </section>
  );
};

export default Library;