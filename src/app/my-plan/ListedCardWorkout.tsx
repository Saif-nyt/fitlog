"use client";

import Image from "next/image";
import Link from "next/link";
import MarkAsDone from '@/components/Buttons/markAsDone';
import { toast } from 'react-toastify';
import { ListedCardWorkoutProps } from "@/types/props";


const ListedCardWorkout = ({ workout, setPlan }: ListedCardWorkoutProps) => {
    
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-[#12151b] p-5 md:flex-row md:items-center">

      
      <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl md:w-48">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1">

        <h2 className="text-xl font-black uppercase">
          {workout.name}
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          {workout.equipment}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-zinc-400">

          <span className="flex items-center gap-2">
            <span className="text-lg text-[#ccff00]">◷</span>
            {workout.duration} min
          </span>

          <span className="flex items-center gap-2">
            <span className="text-lg text-[#ccff00]">♨</span>
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-2">
            <span className="text-lg text-[#ccff00]">☆</span>
            {workout.rating}
          </span>

        </div>

      </div>

      
      <div className="flex items-center gap-3">

        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-zinc-700 px-5 py-3 text-xs font-medium transition hover:border-white hover:text-white"
        >
          View Details
        </Link>

        <MarkAsDone workout={workout} />

       
       <button
          onClick={() => {
            setPlan((prev) => prev.filter((item) => item.id !== workout.id))
            toast.success("Removed from today's plan")
          }}
          className="px-2 text-2xl text-zinc-600 transition hover:text-red-500"
        >
          ×
        </button>

      </div>

    </div>
  );
};

export default ListedCardWorkout;