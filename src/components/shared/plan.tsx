'use client'

import { Plancontext } from '@/context/Plancontext';
import React, { useContext } from 'react';
import Link from 'next/link';

const Plan = () => {
    const { plan } = useContext(Plancontext);
    return (
        <Link
            href="/my-plan"
            className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-bold text-black transition-colors hover:bg-lime-300"
        >
            <span>Plan</span>
            <span>{plan.length}</span>
        </Link>
    );
};

export default Plan;