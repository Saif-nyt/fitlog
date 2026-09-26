'use client'

import Logo from "@/assets/logo.png"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Plan from './plan';
import Saved from './Saved';

const Navbar = () => {
    const pathname = usePathname();

    const linkClass = (href: string) => {
        const isActive = href === "/" ? pathname === "/" || pathname.startsWith("/workout") : pathname.startsWith(href);
        return isActive
            ? "text-[#d4ff00] bg-[#1a2203] rounded-full px-3 sm:px-6 py-3 transition-colors"
            : "text-zinc-400 rounded-full px-3 sm:px-6 py-3 hover:text-white transition-colors";
    };

    return (
        <nav className="border-b border-zinc-800 bg-[#0f0f11] sticky top-0 z-50 px-4 sm:px-6 py-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-y-3">
            <div className="flex items-center gap-2 font-bold text-sm text-white">
                <Image alt="FitLog" src={Logo} width={24} height={24} />
                FITLOG
            </div> 

            <div className="flex gap-2 font-semibold text-xs items-center">
                <Link
                  href="/"
                  className={linkClass("/")}
                >
                  Workout
                </Link>
                <Link
                  href="/my-plan"
                  className={linkClass("/my-plan")}
                >
                  My Plan
                </Link>
            </div>

            <div className="flex gap-3">
                <Plan />
                <Saved />
            </div>
        </nav>
    );
};

export default Navbar;