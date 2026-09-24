'use client'

import {useState, createContext} from 'react'
import React from 'react';
import { Workout } from '@/types/workouttype';
import { PlanContextValue, defaultPlanContextValue } from '@/types/context';
import { PlanProviderProps } from '@/types/props';

export const Plancontext = createContext<PlanContextValue>(defaultPlanContextValue)
const PlanProvider = ({children}: PlanProviderProps) => {

    const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
const [completed, setCompleted] = useState<Workout[]>([]);
  const sharedata= {
    plan,
    setPlan,
    saved,
    setSaved,
    completed,
    setCompleted

  }
  
    return (
        <Plancontext.Provider value ={sharedata} >{children}</Plancontext.Provider>
    );
};

export default PlanProvider;