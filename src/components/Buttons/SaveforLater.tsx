
'use client'
import React, { useContext } from 'react';
import { SaveforLaterProps } from '@/types/props';
import { Workout } from '@/types/workouttype';
import { Plancontext } from '@/context/Plancontext';



const SaveforLater = ({workout}: SaveforLaterProps) => {
    const {saved, setSaved}= useContext(Plancontext)
    const handleSaveforLater = ()=>{
console.log("button triggerd", workout)
setSaved((previousplan)=>[...previousplan, workout] as Workout[])}
    return (
     <div>
             <button
           onClick={()=>handleSaveforLater()}
            className="border border-zinc-700 font-bold px-6 py-3 rounded flex-1 hover:bg-zinc-800"
          >
            Save for later
          </button></div>
      
    );
};

export default SaveforLater;