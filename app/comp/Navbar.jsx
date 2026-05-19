 
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-blue-200/95 backdrop-blur-md shadow-lg border-b border-blue-100">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-5 md:px-8 py-3">

                {/* Logo Section */}
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">

                    <Link href="/">
                        <Image
                            src="/blood.png"
                            alt="Logo"
                            width={45}
                            height={45}
                            className="rounded-full object-cover border-2 border-blue-500 shadow-md w-10 h-10 sm:w-12 sm:h-12"
                        />
                    </Link>

                    <h1 className="text-sm sm:text-lg md:text-2xl font-bold text-blue-700 tracking-wide whitespace-nowrap">
                        Save One Life+
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium text-base lg:text-lg">

                    <Link
                        href="/addYour"
                        className="hover:text-blue-600 transition-all duration-300 relative group text-blue-500"
                    >
                        Add
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                        href="/navlink/view"
                        className="hover:text-blue-600 transition-all duration-300 relative group"
                    >
                        View
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                        href="/navlink/about"
                        className="hover:text-blue-600 transition-all duration-300 relative group"
                    >
                        About
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                        href="/navlink/contact"
                        className="hover:text-blue-600 transition-all duration-300 relative group"
                    >
                        Contact
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                        href="/navlink/insurance"
                        className="bg-blue-600 text-white px-4 lg:px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:scale-105 text-sm lg:text-base"
                    >
                        Health Insurance
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-2xl sm:text-3xl font-bold text-blue-700 transition-all duration-300"
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="md:hidden bg-white shadow-lg border-t border-blue-100 px-4 py-5 flex flex-col gap-4 text-gray-700 font-medium text-base sm:text-lg animate-slideDown">

                    <Link
                        href="/addYour"
                        onClick={() => setOpen(false)}
                        className="hover:text-blue-600 transition"
                    >
                        Add Your Info
                    </Link>

                    <Link
                        href="/navlink/view"
                        onClick={() => setOpen(false)}
                        className="hover:text-blue-600 transition"
                    >
                        View
                    </Link>

                    <Link
                        href="/navlink/about"
                        onClick={() => setOpen(false)}
                        className="hover:text-blue-600 transition"
                    >
                        About
                    </Link>

                    <Link
                        href="/navlink/contact"
                        onClick={() => setOpen(false)}
                        className="hover:text-blue-600 transition"
                    >
                        Contact
                    </Link>

                    <Link
                        href="/navlink/insurance"
                        onClick={() => setOpen(false)}
                        className="bg-blue-600 text-white px-4 py-3 rounded-full text-center hover:bg-blue-700 transition-all duration-300"
                    >
                        Health Insurance
                    </Link>
                </div>
            )}
        </nav>
    );
}