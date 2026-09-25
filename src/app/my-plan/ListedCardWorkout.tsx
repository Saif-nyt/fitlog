"use client";

import Image from "next/image";
import Link from "next/link";
import MarkAsDone from '@/components/Buttons/markAsDone';
import { toast } from 'react-toastify';
import { ListedCardWorkoutProps } from "@/types/props";

const ListedCardWorkout = ({ workout, setPlan }: ListedCardWorkoutProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-zinc-800/80 bg-[#111319] p-4 transition hover:border-zinc-700">
      
     
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-lg font-extrabold uppercase tracking-tight text-white">
            {workout.name}
          </h2>

          <p className="text-xs text-zinc-400 mt-0.5">
            {workout.equipment}
          </p>

          <div className="mt-2 flex items-center gap-4 text-xs font-medium text-zinc-400">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 23c-4.97 0-9-3.58-9-8 0-4.06 3.12-7.38 7.15-7.92.54-.07.95.42.82.95-.44 1.76.16 3.58 1.5 4.67 1.15.93 2.76 1.13 4.09.48.49-.24 1.05.12 1.02.67C17.3 18.9 14.94 23 12 23z" />
              </svg>
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1.5">
              <span className="text-zinc-400">☆</span>
              {workout.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto justify-end mt-2 sm:mt-0">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-zinc-700 bg-transparent px-5 py-2.5 text-xs font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-800"
        >
          View Details
        </Link>

        <MarkAsDone workout={workout} />

        <button
          onClick={() => {
            setPlan((prev) => prev.filter((item) => item.id !== workout.id));
            toast.success("Removed from today's plan");
          }}
          className="p-2 text-zinc-500 transition hover:text-zinc-300"
          aria-label="Remove workout"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default ListedCardWorkout;