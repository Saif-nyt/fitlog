
'use client'
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Workout } from '@/types/workouttype';
import { Plancontext } from '@/context/Plancontext';
import { AddtodaysPlanProps } from '@/types/props';

const AddtodaysPlan = ({workout}: AddtodaysPlanProps) => {
    const {plan, setPlan}= useContext(Plancontext)
    const handleAddtoplan = ()=>{
if (plan.some((item) => item.id === workout.id)) {
  toast.warning("Already in today's plan")
  return
}
setPlan((previousplan)=>[...previousplan, workout] as Workout[])
toast.success("Added to today's plan")
    }
    return (
        <div>
            <button
            onClick={()=>handleAddtoplan()}
            className="bg-[#ccff00] text-black font-bold px-6 py-3 rounded flex-1 hover:bg-lime-400 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
            </svg>
            Add to today&apos;s plan
          </button>
        </div>
    );
};

export default AddtodaysPlan;