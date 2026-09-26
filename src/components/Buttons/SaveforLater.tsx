
'use client'
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { SaveforLaterProps } from '@/types/props';
import { Workout } from '@/types/workouttype';
import { Plancontext } from '@/context/Plancontext';



const SaveforLater = ({workout}: SaveforLaterProps) => {
    const {saved, setSaved}= useContext(Plancontext)
    const handleSaveforLater = ()=>{
if (saved.some((item) => item.id === workout.id)) {
  toast.warning("Already saved for later")
  return
}
setSaved((previousSaved)=>[...previousSaved, workout] as Workout[])
toast.success("Saved for later")}
    return (
     <div>
             <button
           onClick={()=>handleSaveforLater()}
            className="border border-zinc-700 font-bold px-6 py-3 rounded flex-1 hover:bg-zinc-800 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z" />
            </svg>
            Save for later
          </button></div>
      
    );
};

export default SaveforLater;