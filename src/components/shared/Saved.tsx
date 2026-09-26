'use client'

import { Plancontext } from '@/context/Plancontext';
import React, { useContext } from 'react';
import Link from 'next/link';

const Saved = () => {
    const { saved } = useContext(Plancontext);
    return (
        <Link
            href="/my-plan"
            className="flex items-center gap-1.5 rounded-full border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
        >
            <span>Saved</span>
            <span>{saved.length}</span>
        </Link>
    );
};

export default Saved;