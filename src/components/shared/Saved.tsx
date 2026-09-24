'use client'

import { Plancontext } from '@/context/Plancontext';
import React, { useContext } from 'react';
import Link from 'next/link';

const Saved = () => {
    const { saved } = useContext(Plancontext);
    return (
        <Link href="../my-plan" className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
            <span className="text-sm font-medium">Saved</span>
            <span className="border border-zinc-700 text-zinc-300 font-medium h-6 w-6 rounded-full text-xs flex items-center justify-center">
                {saved.length}
            </span>
        </Link>
    );
};

export default Saved;