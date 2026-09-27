import { getWorkout } from "@/lib/api";
import WorkoutDetailsClient from "./WorkoutDetailsClient";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutPage = async ({
  params,
}: PageProps) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <WorkoutDetailsClient
      workout={workout}
    />
  );
};

export default WorkoutPage;