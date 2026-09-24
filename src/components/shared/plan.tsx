'use client'

import { Plancontext } from '@/context/Plancontext';
import React, { useContext } from 'react';
import Link from 'next/link';

const Plan = () => {
    const { plan } = useContext(Plancontext);
    return (
        <Link href="../my-plan" className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
            <span className="text-sm font-medium">Plan</span>
            <span className="bg-[#d4ff00] text-black font-bold h-6 w-6 rounded-full text-xs flex items-center justify-center">
                {plan.length}
            </span>
        </Link>
    );
};

export default Plan;