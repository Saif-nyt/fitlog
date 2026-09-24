'use client'

import { Plancontext } from '@/context/Plancontext';
import React, { useContext } from 'react';
import Link from 'next/link';
const Saved = () => {
    const {saved}=useContext(Plancontext)
    return (
        <Link href="../my-plan">
            <span className="border border-zinc-700 text-zinc-300 font-bold px-3 py-1 rounded-full text-xs flex items-center">
          Saved {saved.length}
        </span>
        </Link>
    );
};

export default Saved;