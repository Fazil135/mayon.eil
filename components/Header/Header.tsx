'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram } from 'lucide-react';

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="fixed top-0 left-0 w-full h-32 bg-white/95 backdrop-blur-md border-b border-[#f1f3f5] z-1000 flex items-center transition-all duration-300">
            <div className="container mx-auto px-10 flex justify-between items-center w-full">

                {/* Branding Section: Logo + Business Name */}
                <Link href="/" className="flex items-center no-underline group">
                    {/* Logo Circular Container */}
                    <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full border-2 border-brand-pink transition-all duration-500 group-hover:border-brand-mustard shadow-pink group-hover:shadow-mustard">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                            <img
                                src="/assets/logo.png"
                                alt="Mayon.eil Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Business Name & Tagline - RESTORED & VIBRANT */}
                    <div className="ml-8 flex flex-col justify-center">
                        <h1 className="font-serif text-[2.2rem] lg:text-[2.8rem] text-brand-pink tracking-[0.08em] leading-[0.9] font-bold transition-all duration-300">
                            M A Y O N . E I L
                        </h1>
                        <span className="text-[0.75rem] lg:text-[0.85rem] font-bold text-brand-mustard tracking-[0.35em] uppercase mt-2 opacity-100">
                            LUXURY NAIL EXTENSIONS
                        </span>
                        <span className="text-[0.65rem] lg:text-[0.75rem] font-medium text-brand-mustard tracking-[0.15em] mt-1 italic">
                            By B.N.Harini
                        </span>
                    </div>
                </Link>

                {/* Navigation Section */}
                <nav className="flex gap-10 items-center">
                    <Link href="/" className={`no-underline text-[0.85rem] font-bold tracking-widest transition-all duration-300 hover:text-brand-pink relative py-2 group/nav ${pathname === '/' ? 'text-brand-pink' : 'text-brand-charcoal'}`}>
                        HOME
                        <span className={`absolute bottom-0 h-0.5 bg-brand-pink transition-all duration-500 group-hover/nav:w-full group-hover/nav:left-0 ${pathname === '/' ? 'w-full left-0' : 'w-0 left-1/2'}`}></span>
                    </Link>
                    <Link href="/services" className={`no-underline text-[0.85rem] font-bold tracking-widest transition-all duration-300 hover:text-brand-pink relative py-2 group/nav ${pathname === '/services' ? 'text-brand-pink' : 'text-brand-charcoal'}`}>
                        SERVICES
                        <span className={`absolute bottom-0 h-0.5 bg-brand-pink transition-all duration-500 group-hover/nav:w-full group-hover/nav:left-0 ${pathname === '/services' ? 'w-full left-0' : 'w-0 left-1/2'}`}></span>
                    </Link>
                    <Link href="/contact" className={`no-underline text-[0.85rem] font-bold tracking-widest transition-all duration-300 hover:text-brand-pink relative py-2 group/nav ${pathname === '/contact' ? 'text-brand-pink' : 'text-brand-charcoal'}`}>
                        ENQUIRY
                        <span className={`absolute bottom-0 h-0.5 bg-brand-pink transition-all duration-500 group-hover/nav:w-full group-hover/nav:left-0 ${pathname === '/contact' ? 'w-full left-0' : 'w-0 left-1/2'}`}></span>
                    </Link>
                    <Link href="/gallery" className={`no-underline text-[0.85rem] font-bold tracking-widest transition-all duration-300 hover:text-brand-pink relative py-2 group/nav ${pathname === '/gallery' ? 'text-brand-pink' : 'text-brand-charcoal'}`}>
                        GALLERY
                        <span className={`absolute bottom-0 h-0.5 bg-brand-pink transition-all duration-500 group-hover/nav:w-full group-hover/nav:left-0 ${pathname === '/gallery' ? 'w-full left-0' : 'w-0 left-1/2'}`}></span>
                    </Link>
                    <Link href="https://www.instagram.com/mayon.eil/" target="_blank" className="text-[#E4405F] hover:text-[#C13584] transition-colors duration-300 transform hover:scale-110">
                        <Instagram size={28} />
                    </Link>
                </nav>
            </div>
        </header>
    );
}
