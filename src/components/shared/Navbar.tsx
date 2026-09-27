"use client";

import Image from "next/image";
import Logo from "../../../public/images/logo.png";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavbarProps {
    planCount: number;
    savedCount: number;
}

const Navbar = ({ planCount = 0, savedCount = 0 }: NavbarProps) => {
    const pathname = usePathname();

    const isWorkoutActive = pathname === "/";
    const isPlanActive = pathname === "/my-plan";

    // Nave Links.
    const links = <>
        <li>
            <Link
                href="/"
                className={`rounded-full px-5 py-2 text-sm font-bold transition ${isWorkoutActive
                    ? "bg-[#ccff00] text-black"
                    : "text-gray-400 hover:text-white"
                    }`}
            >
                Workout
            </Link>
        </li>
        <li>
            <Link
                href="/my-plan"
                className={`rounded-full px-5 py-2 text-sm font-bold transition ${isPlanActive
                    ? "bg-[#ccff00] text-black"
                    : "text-gray-400 hover:text-white"
                    }`}
            >
                My Plan
            </Link>
        </li>
    </>

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 navbar shadow-sm">
                <div className="navbar-start">

                    {/* Dropdown. */}
                    <div className="dropdown bg-amber-50 rounded-xl">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <nav>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </nav>
                    </div>

                    {/* Left Nav. */}
                    <div>
                        <Link href="/">
                            <div className="flex gap-1 items-center">
                                <Image
                                    src={Logo}
                                    alt="Workout"
                                />
                                <span className="btn font-extrabold btn-ghost text-xl text-white">FIT
                                    <span className="text-[#ccff00]">LOG</span>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Navigation. Middle Nav links. */}
                <div className="navbar-center hidden lg:flex">
                    <nav className="hidden items-center gap-2 md:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </nav>
                </div>

                {/* Counters. Right nav. */}
                <div className="flex items-center gap-2 navbar-end">
                    <Link
                        href="/my-plan"
                        className="rounded-full bg-[#ccff00] px-3 py-2 text-xs font-black text-black sm:px-4 sm:text-sm"
                    >
                        Plan <span>{planCount}</span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full border border-white/30 px-3 py-2 text-xs font-black text-white sm:px-4 sm:text-sm"
                    >
                        Saved <span>{savedCount}</span>
                    </Link>
                </div>

            </div>
        </header>
    );
};

export default Navbar;