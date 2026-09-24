'use client'


import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Plancontext } from '@/context/Plancontext';
import { MarkAsDoneProps } from '@/types/props';
import { Workout } from '@/types/workouttype';

const MarkAsDone = ({workout}: MarkAsDoneProps) => {
    const { setCompleted, setPlan }= useContext(Plancontext)
  const  handlemarkAsDone =()=>{

 
    setCompleted((previous) => {
    return [...previous, workout] as Workout[];
  });
   setPlan((previous) => {
    return previous.filter((item) => item.id !== workout.id);
  });
  toast.success("Marked as done")
  }

    return (
        <div>
            
                    <button onClick={()=>handlemarkAsDone()}
                      className="rounded-full bg-[#ccff00] px-5 py-3 text-xs font-black uppercase text-black transition hover:bg-white"
                    >
                      ✓ Mark as Done
                    </button>
        </div>
    );
};

export default MarkAsDone;