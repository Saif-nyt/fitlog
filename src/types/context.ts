import { Dispatch, SetStateAction } from "react";
import { Workout } from "./workouttype";

export interface PlanContextValue {
  plan: Workout[];
  setPlan: Dispatch<SetStateAction<Workout[]>>;
  saved: Workout[];
  setSaved: Dispatch<SetStateAction<Workout[]>>;
  completed: Workout[];
  setCompleted: Dispatch<SetStateAction<Workout[]>>;
  markAsDone?: (workout: Workout) => void;
}

export const defaultPlanContextValue: PlanContextValue = {
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
  completed: [],
  setCompleted: () => {},
};

export interface WorkoutContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  saveWorkout: (workout: Workout) => void;
  removeSaved: (id: number) => void;
}
