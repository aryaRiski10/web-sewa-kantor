'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <nav className="bg-white max-md:fixed max-md:top-0 max-md:left-0 max-md:right-0 max-md:z-50">
            <div className="relative flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto px-6">
                <Link href="/">
                    <Image src="/assets/images/logos/logo.svg" alt="logo" className="max-md:w-30 w-auto h-auto" width={150} height={50} />
                </Link>
                <ul
                    className={`flex items-center md:gap-12.5 gap-5 w-auto md:relative max-md:absolute max-md:justify-center max-md:flex-col md:z-auto top-full left-0 right-0 bg-white max-md:py-6 md:py-0 px-5 md:px-0 z-50 max-md:transition-opacity max-md:duration-300 ${isMenuOpen ? "max-md:opacity-100 max-md:pointer-events-auto" : "max-md:opacity-0 max-md:pointer-events-none"}`}
                >
                    <li>
                        <Link href="/browse">Browse</Link>
                    </li>
                    <li>
                        <Link href="/popular">Popular</Link>
                    </li>
                    <li>
                        <Link href="/categories">Categories</Link>
                    </li>
                    <li>
                        <Link href="/events">Events</Link>
                    </li>
                    <li>
                        <Link href="/view-booking-details">My Booking</Link>
                    </li>
                </ul>
                <div className="flex items-center gap-5">

                    <a href="#" className="flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5 max-md:py-2 max-md:px-3">
                        <Image className="max-md:w-4" src="/assets/images/icons/call.svg" alt="icon" width={24} height={24} />
                        <span className="font-semibold max-md:text-sm/0">Contact Us</span>
                    </a>
                    <div className="humberger-menu md:hidden cursor-pointer" onClick={() => toggleMenu()}>
                        <Image src="/assets/images/icons/hamburger-menu.svg" alt="icon" width={24} height={24} />
                    </div>
                </div>
            </div>
        </nav>
    )
}