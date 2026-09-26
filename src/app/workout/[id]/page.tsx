import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AddtodaysPlan from '@/components/Buttons/AddtodaysPlan';
import SaveforLater from '@/components/Buttons/SaveforLater';
import { Workout } from '@/types/workouttype';
import { WorkoutPageParams } from '@/types/pages';

const BookdetailsPage = async ({params}: WorkoutPageParams) => {
    const {id}= await params

    const getData = async (): Promise<Workout[]> => {
    const response = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );

    const data = await response.json();

    return data;
};
const Workoutdetails= await getData()
const workout= Workoutdetails.find((workout: Workout)=> workout.id === Number(id))

if (!workout) notFound()


    return (
        <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <Image src={workout.image} alt={workout.name} width={500} height={500} className="w-full h-auto rounded-2xl object-cover" priority />
       
      </div>
      <div>
        <h1 className="text-3xl font-extrabold uppercase mb-2">{workout.name}</h1>
        <p className="text-zinc-400 mb-4">{workout.description}</p>
        
        <div className="flex gap-2 mb-6">
          {workout.muscleGroups?.map((group) => (
            <span key={group} className="bg-zinc-800 text-xs px-3 py-1 rounded text-zinc-300">
              {group}
            </span>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg mb-6 space-y-2 text-sm">
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-500">EQUIPMENT</span>
            <span>{workout.equipment}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-500">DIFFICULTY</span>
            <span>{workout.difficulty}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-500">SETS</span>
            <span>{workout.sets}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-500">REPS</span>
            <span>{workout.reps}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-500">DURATION</span>
            <span>{workout.duration} min</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-500">CALORIES</span>
            <span>{workout.caloriesBurned} kcal</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">RATING</span>
            <span>⭐ {workout.rating}</span>
          </div>
        </div>

        <h3 className="font-bold mb-2">INSTRUCTIONS</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-400 mb-6">
          {workout.instructions?.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>

        <div className="flex gap-4">
          <AddtodaysPlan workout={workout}/>
         <SaveforLater workout={workout}/>
        </div>
      </div>
    </div>
    );
};

export default BookdetailsPage;