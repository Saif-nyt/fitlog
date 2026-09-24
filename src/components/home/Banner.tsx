

import React from 'react';
import Hero from '@/assets/banner.png'
import Image from 'next/image';
const Banner = () => {
    return (
     
    <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-[#ccff00] font-bold text-sm tracking-widest mb-2">WORKOUT LIBRARY</p>
        <h1 className="text-4xl md:text-6xl font-black uppercase mb-4 leading-tight">
          Train with intent. <br /> Log every set.
        </h1>
        <p className="text-zinc-400 mb-6">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <a
          href="#library"
          className="bg-[#ccff00] text-black font-extrabold px-6 py-3 rounded hover:bg-lime-400 transition inline-block"
        >
          BROWSE WORKOUTS ↓
        </a>
      </div>
      <div>
        <Image src={Hero} alt="FitLog banner" width={334} height={334} className="w-full h-auto max-w-md mx-auto" priority />
      </div>
    </section>
  );
}
 

export default Banner;