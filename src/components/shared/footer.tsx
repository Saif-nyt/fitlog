

import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/logo.png'
const Footer = () => {
    return (
        <div>
           
    <footer className="bg-black border-t border-white/10 mt-auto">
      <div className=" px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="alt" width={15} height={15} />
            FITLOG
          </div>
          <p className="text-zinc-500 text-sm">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  
     </div>
    );
};

export default Footer;