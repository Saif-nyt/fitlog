
import Logo from "@/assets/logo.png"
import React from 'react';  
import Link from 'next/link';
import Image from 'next/image';

import Plan from './plan';
import Saved from './Saved';

const Navbar = () => {
    
    return (
        <nav className="border-b border-zinc-800 bg-[#0f0f11] sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
    <div className="flex items-center gap-2 font-bold text-lg"><Image alt="FitLog" src={Logo} width={28} height={28} />FITLOG</div> 

      <div className="flex gap-6 font-semibold">
        <Link
          href="/"
 
        >
          Workout
        </Link>
        <Link
          href="/my-plan"
        
        >
          My Plan
        </Link>
      </div>

      <Link href="/my-plan" className="flex gap-3">
       

        <Plan />
        <Saved/>
       
      </Link>
    </nav>
    );
};

export default Navbar;