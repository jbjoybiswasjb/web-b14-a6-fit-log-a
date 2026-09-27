import { Workout } from "@/types/workout";

const API_URL_FOR_WORKOUTS = "https://api.api-store.workers.dev/api/fitlog";
const API_URL_FOR_WORKOUT = "https://api.api-store.workers.dev/api/fitlog/:id";


// Full workouts data fetch.
export const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch(API_URL_FOR_WORKOUTS);

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
  const response = await fetch(`${API_URL_FOR_WORKOUT}/${id}`);

  if (!response.ok) {
    throw new Error("Workout not found.");
  }

  return response.json();
};