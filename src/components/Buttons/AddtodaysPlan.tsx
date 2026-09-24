
'use client'
import React, { useContext } from 'react';
import { Workout } from '@/types/workouttype';
import { Plancontext } from '@/context/Plancontext';
import { AddtodaysPlanProps } from '@/types/props';

const AddtodaysPlan = ({workout}: AddtodaysPlanProps) => {
    const {plan, setPlan}= useContext(Plancontext)
    const handleAddtoplan = ()=>{
console.log("button triggerd", workout)
setPlan((previousplan)=>[...previousplan, plan] as Workout[])
    }
    return (
        <div>
            <button
            onClick={()=>handleAddtoplan()}
            className="bg-[#ccff00] text-black font-bold px-6 py-3 rounded flex-1 hover:bg-lime-400"
          >
            Add to todays plan
          </button>
        </div>
    );
};

export default AddtodaysPlan;