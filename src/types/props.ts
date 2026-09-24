import { Workout } from "./workouttype";

export interface LibrarycardProps {
  workout: Workout;
}

export interface AddtodaysPlanProps {
  workout: Workout;
}

export interface SaveforLaterProps {
  workout: Workout;
}

export interface MarkAsDoneProps {
  workout: Workout;
}

export interface PlanProviderProps {
  children: React.ReactNode;
}
