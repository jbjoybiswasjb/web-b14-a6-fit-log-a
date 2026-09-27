import { Workout } from "@/types/workout";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Full workouts data fetch.
export const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch(API_URL!);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts data.");
  }

//   console.log(response.json());

  return response.json();
};


// Just single workout data fetch.
export const getWorkout = async (
  id: string
): Promise<Workout> => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Workout not found.");
  }

  return response.json();
};