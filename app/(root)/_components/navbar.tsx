"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, Menu, MessageCircleMore, X } from "lucide-react"; // Import icons from lucide-react

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev); // Toggle menu visibility
    };

    return (
        <header className="header_section">
            <div className="w-full pr-[15px] pl-[15px] mr-auto ml-auto">
                <nav className="pt-3 flex items-center md:justify-around justify-between">
                    <a className="navbar-brand" href="#">
                        <Image
                            src={"/Anna.png"}
                            alt="novus-logo"
                            height={50}
                            width={100}
                        />
                    </a>
                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white">
                            {isMenuOpen ? <X size={30} /> : <Menu size={30} />} {/* Toggle between Menu and Close icon */}
                        </button>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:flex uppercase text-white font-semibold items-center gap-x-[6rem]">
                        <Link href="/" className="hover:text-purple-600 transition">Accueil</Link>
                        <Link href="#about" className="hover:text-purple-600 transition">A Propos </Link>
                        <Link href="#heritage" className="hover:text-purple-600 transition">Nos Produits</Link>
                        <Link href="#contact" className="hover:text-purple-600 transition">Contact</Link>
                    </div>
                    <div className="md:flex hidden gap-8 ">
                            <Link href={"https://www.instagram.com/novus.technologies/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"} target="_blank">
                                <InstagramIcon className="text-white"/>
                            </Link>
                            <Link href={""} className="text-white">
                                <MessageCircleMore/>
                            </Link>
                        </div>

                </nav>
                {/* Additional style for the mobile menu with animation */}
                <div 
                    className={`md:hidden flex flex-col gap-4 text-center text-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                    <Link href="/" className="hover:text-purple-600 transition">Accueil</Link>
                        <Link href="#about" className="hover:text-purple-600 transition">A Propos </Link>
                        <Link href="#heritage" className="hover:text-purple-600 transition">Nos Produits</Link>
                        <Link href="#contact" className="hover:text-purple-600 transition">Contact</Link>
                        <div className="md:hidden flex items-center justify-center gap-8 ">
                            <Link href={"https://www.instagram.com/novus.technologies/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"} target="_blank">
                                <InstagramIcon className="text-white"/>
                            </Link>
                            <Link href={""} className="text-white">
                                <MessageCircleMore/>
                            </Link>
                        </div>
                </div>
                
            </div>
        </header>
    );
}

export default NavigationBar;