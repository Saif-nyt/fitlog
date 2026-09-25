'use client'

import Link from 'next/link';
import { Plancontext } from '@/context/Plancontext';
import React, { useContext, useState } from 'react';
import ListedCardWorkout from './ListedCardWorkout';
import SavedCard from './SavedCard';

const Page = () => {
  const { plan, saved, setPlan } = useContext(Plancontext);
  const [sortBy, setSortBy] = useState<'duration' | 'calories' | 'rating'>('duration');

  const totalExercises = plan.length;
  const totalMinutes = plan.reduce((sum, item) => sum + Number(item.duration), 0);
  const totalCalories = plan.reduce((sum, item) => sum + Number(item.caloriesBurned), 0);

  plan.forEach((item) => {
    console.log(
      item.name,
      "duration:",
      item.duration,
      "calories:",
      item.caloriesBurned
    );
  });

  
  const sortList = <T extends { duration?: number | string; caloriesBurned?: number | string; rating?: number | string }>(list: T[]) => {
    return [...list].sort((a, b) => {
      if (sortBy === 'duration') return Number(b.duration || 0) - Number(a.duration || 0);
      if (sortBy === 'calories') return Number(b.caloriesBurned || 0) - Number(a.caloriesBurned || 0);
      if (sortBy === 'rating') return Number(b.rating || 0) - Number(a.rating || 0);
      return 0;
    });
  };

  const sortedPlan = sortList(plan);
  const sortedSaved = sortList(saved);

  return (
    <div className="min-h-screen bg-[#090a0f] text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
       
        <div className="mb-8">
          <h1 className="text-3xl font-black uppercase tracking-wide text-white">MY PLAN</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

       
        <div className="bg-[#111319] border border-zinc-800/80 rounded-2xl p-6 md:p-8 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80">
          <div className="flex flex-col justify-center">
            <p className="text-xs text-zinc-400 font-medium mb-2">Exercises</p>
            <p className="text-4xl font-extrabold text-[#ccff00]">{totalExercises}</p>
          </div>

          <div className="flex flex-col justify-center pt-4 sm:pt-0 sm:pl-8">
            <p className="text-xs text-zinc-400 font-medium mb-2">Minutes</p>
            <p className="text-4xl font-extrabold text-white">{totalMinutes}</p>
          </div>

          <div className="flex flex-col justify-center pt-4 sm:pt-0 sm:pl-8">
            <p className="text-xs text-zinc-400 font-medium mb-2">Calories</p>
            <p className="text-4xl font-extrabold text-white">{totalCalories}</p>
          </div>
        </div>

        
        <div className="relative">
          
          <div className="hidden sm:flex absolute right-0 top-1.5 items-center gap-2 text-xs text-zinc-400 z-10">
            <span>Sort By</span>
            <div className="relative inline-block">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'duration' | 'calories' | 'rating')}
                className="appearance-none bg-[#111319] border border-zinc-800/80 text-white pl-4 pr-8 py-2 rounded-xl text-xs font-medium cursor-pointer hover:border-zinc-700 focus:outline-none"
              >
                <option value="duration" className="bg-[#111319]">Duration</option>
                <option value="calories" className="bg-[#111319]">Calories</option>
                <option value="rating" className="bg-[#111319]">Rating</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-zinc-400">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          
          <div className="tabs tabs-lift">
            <input 
              type="radio" 
              name="my_tabs_3" 
              className="tab !bg-[#111319] !border-zinc-800/80 text-zinc-400 checked:!text-white checked:!bg-zinc-800 font-semibold rounded-xl text-sm" 
              aria-label="Today's Plan" 
              defaultChecked
            />
            <div className="tab-content bg-transparent border-none p-0 mt-6">
              {sortedPlan.length === 0 ? (
                <div className="border border-dashed border-zinc-800/80 rounded-2xl py-24 px-6 text-center bg-[#0d0e14]">
                  <h3 className="text-xl font-extrabold uppercase tracking-wide mb-2 text-white">NOTHING HERE YET</h3>
                  <p className="text-zinc-400 text-sm mb-6">
                    Browse the library and add a lift to get today moving.
                  </p>
                  <Link
                    href="/"
                    className="bg-[#ccff00] text-black font-extrabold px-8 py-3.5 rounded-full hover:bg-[#b8e600] transition text-sm uppercase inline-block"
                  >
                    Go to workouts
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {sortedPlan.map((workout) => (
                    <ListedCardWorkout
                      key={workout.id}
                      workout={workout}
                      setPlan={setPlan}
                    />
                  ))}
                </div>
              )}
            </div>

            <input 
              type="radio" 
              name="my_tabs_3" 
              className="tab !bg-[#111319] !border-zinc-800/80 text-zinc-400 checked:!text-white checked:!bg-zinc-800 font-semibold rounded-xl text-sm" 
              aria-label="Saved" 
            />
            <div className="tab-content bg-transparent border-none p-0 mt-6">
              {sortedSaved.length === 0 ? (
                <div className="border border-dashed border-zinc-800/80 rounded-2xl py-24 px-6 text-center bg-[#0d0e14]">
                  <h3 className="text-xl font-extrabold uppercase tracking-wide mb-2 text-white">NOTHING HERE YET</h3>
                  <p className="text-zinc-400 text-sm mb-6">
                    Browse the library and add a lift to get today moving.
                  </p>
                  <Link
                    href="/"
                    className="bg-[#ccff00] text-black font-extrabold px-8 py-3.5 rounded-full hover:bg-[#b8e600] transition text-sm uppercase inline-block"
                  >
                    Go to workouts
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {sortedSaved.map((workout) => (
                    <SavedCard key={workout.id} workout={workout} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;