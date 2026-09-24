'use client'

import { Plancontext } from '@/context/Plancontext';
import React, { useContext } from 'react';
import ListedCardWorkout from './ListedCardWorkout';

const Page = () => {
  const {plan, saved, setPlan}=useContext(Plancontext)
  const totalExercises = plan.length;
  const totalMinutes = plan.reduce((sum, item) => sum + Number(item.duration ), 0);
  const totalCalories = plan.reduce((sum, item) => sum + Number(item.caloriesBurned), 0);
 
  console.log('plaaaan =',plan,'saveeeed=', saved, totalCalories, totalExercises, totalMinutes )

  console.log("PLAN:", plan);

plan.forEach((item) => {
  console.log(
    item.name,
    "duration:",
    item.duration,
    "calories:",
    item.caloriesBurned
  );
});
  return (
    <div>
      



      <div className="mb-8">
        <h1 className="text-3xl font-black uppercase tracking-wide">MY PLAN</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-lg flex items-center gap-4">
          <div className="bg-zinc-800 p-3 rounded-lg text-[#ccff00]">
           
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase font-bold">Exercises</p>
            <p className="text-2xl font-black">{totalExercises}</p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-lg flex items-center gap-4">
          <div className="bg-zinc-800 p-3 rounded-lg text-[#ccff00]">
           
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase font-bold">Minutes</p>
            <p className="text-2xl font-black">{totalMinutes}</p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-lg flex items-center gap-4">
          <div className="bg-zinc-800 p-3 rounded-lg text-[#ccff00]">
           
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase font-bold">Calories</p>
            <p className="text-2xl font-black">{totalCalories}</p>
          </div>
        </div>
      </div>







<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Today's Plan" />
  <div className="tab-content bg-base-100 border-base-300 p-6">

{plan.map((workout) => (
  <ListedCardWorkout
    key={workout.id}
    workout={workout}
    setPlan={setPlan}
  />
))}


  </div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 2" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

</div>
    </div>
  );
};

export default Page;