'use client'

import { Plancontext } from '@/context/Plancontext';
import React, { useContext } from 'react';
import Link from 'next/link';
const Plan = () => {
    const {plan}=useContext(Plancontext)
    return (
       <Link href="../my-plan">
             <span className="bg-[#ccff00] text-black font-bold px-3 py-1 rounded-full text-xs flex items-center">
          Plan {plan.length}
        </span>
       </Link>
    );
};

export default Plan;