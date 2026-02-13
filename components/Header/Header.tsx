'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-20 md:h-24 lg:h-28 bg-white/95 backdrop-blur-md border-b border-[#f1f3f5] z-[1000] flex items-center transition-all duration-300">
            <div className="container mx-auto px-4 md:px-6 lg:px-10 flex justify-between items-center w-full">

                {/* Branding Section: Logo + Business Name */}
                <Link href="/" className="flex items-center no-underline group">
                    {/* Logo Circular Container - Sized to match text height */}
                    <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] rounded-full border-2 border-brand-pink transition-all duration-500 group-hover:border-brand-mustard shadow-pink group-hover:shadow-mustard flex-shrink-0">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                            <img
                                src="/assets/logo.png"
                                alt="Mayon.eil Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Business Name & Tagline */}
                    <div className="ml-3 md:ml-5 lg:ml-6 flex flex-col justify-center">
                        <h1 className="font-serif text-[1.2rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] text-brand-pink tracking-[0.08em] leading-[0.9] font-bold transition-all duration-300">
                            M A Y O N . E I L
                        </h1>
                        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mt-1 md:mt-1.5 lg:mt-2">
                            <span className="text-[0.45rem] sm:text-[0.55rem] md:text-[0.65rem] lg:text-[0.75rem] font-bold text-brand-mustard tracking-[0.15em] md:tracking-[0.25em] uppercase whitespace-nowrap">
                                LUXURY NAIL EXTENSIONS
                            </span>
                            <span className="text-[0.5rem] md:text-[0.7rem] text-brand-pink/30 flex-shrink-0">|</span>
                            <span className="text-[0.45rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.7rem] font-medium text-brand-mustard tracking-[0.05em] md:tracking-[0.1em] italic whitespace-nowrap">
                                By B.N.Harini
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation - Hidden on Mobile */}
                <nav className="hidden lg:flex gap-6 xl:gap-10 items-center">
                    <Link href="/" className={`no-underline text-[0.75rem] xl:text-[0.85rem] font-bold tracking-widest transition-all duration-300 hover:text-brand-pink relative py-2 group/nav ${pathname === '/' ? 'text-brand-pink' : 'text-brand-charcoal'}`}>
                        HOME
                        <span className={`absolute bottom-0 h-0.5 bg-brand-pink transition-all duration-500 group-hover/nav:w-full group-hover/nav:left-0 ${pathname === '/' ? 'w-full left-0' : 'w-0 left-1/2'}`}></span>
                    </Link>
                    <Link href="/services" className={`no-underline text-[0.75rem] xl:text-[0.85rem] font-bold tracking-widest transition-all duration-300 hover:text-brand-pink relative py-2 group/nav ${pathname === '/services' ? 'text-brand-pink' : 'text-brand-charcoal'}`}>
                        SERVICES
                        <span className={`absolute bottom-0 h-0.5 bg-brand-pink transition-all duration-500 group-hover/nav:w-full group-hover/nav:left-0 ${pathname === '/services' ? 'w-full left-0' : 'w-0 left-1/2'}`}></span>
                    </Link>
                    <Link href="/contact" className={`no-underline text-[0.75rem] xl:text-[0.85rem] font-bold tracking-widest transition-all duration-300 hover:text-brand-pink relative py-2 group/nav ${pathname === '/contact' ? 'text-brand-pink' : 'text-brand-charcoal'}`}>
                        ENQUIRY
                        <span className={`absolute bottom-0 h-0.5 bg-brand-pink transition-all duration-500 group-hover/nav:w-full group-hover/nav:left-0 ${pathname === '/contact' ? 'w-full left-0' : 'w-0 left-1/2'}`}></span>
                    </Link>
                    <Link href="/gallery" className={`no-underline text-[0.75rem] xl:text-[0.85rem] font-bold tracking-widest transition-all duration-300 hover:text-brand-pink relative py-2 group/nav ${pathname === '/gallery' ? 'text-brand-pink' : 'text-brand-charcoal'}`}>
                        GALLERY
                        <span className={`absolute bottom-0 h-0.5 bg-brand-pink transition-all duration-500 group-hover/nav:w-full group-hover/nav:left-0 ${pathname === '/gallery' ? 'w-full left-0' : 'w-0 left-1/2'}`}></span>
                    </Link>
                    <a href="https://www.instagram.com/mayon.eil/" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:text-[#C13584] transition-colors duration-300 transform hover:scale-110">
                        <Instagram size={24} />
                    </a>
                </nav>

                {/* Mobile Menu Button - Visible on Mobile Only */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden text-brand-charcoal hover:text-brand-pink transition-colors duration-300 p-2"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <header-menu-container>
                {mobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-[#f1f3f5] shadow-v9 z-[2000]">
                        <nav className="flex flex-col px-6 py-4 gap-2">
                            <Link
                                href="/"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setMobileMenuOpen(false);
                                }}
                                className={`no-underline text-[0.9rem] font-bold tracking-widest transition-all duration-300 hover:text-brand-pink py-4 border-b border-brand-pink/10 ${pathname === '/' ? 'text-brand-pink' : 'text-brand-charcoal'}`}
                            >
                                HOME
                            </Link>
                            <Link
                                href="/services"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setMobileMenuOpen(false);
                                }}
                                className={`no-underline text-[0.9rem] font-bold tracking-widest transition-all duration-300 hover:text-brand-pink py-4 border-b border-brand-pink/10 ${pathname === '/services' ? 'text-brand-pink' : 'text-brand-charcoal'}`}
                            >
                                SERVICES
                            </Link>
                            <Link
                                href="/contact"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setMobileMenuOpen(false);
                                }}
                                className={`no-underline text-[0.9rem] font-bold tracking-widest transition-all duration-300 hover:text-brand-pink py-4 border-b border-brand-pink/10 ${pathname === '/contact' ? 'text-brand-pink' : 'text-brand-charcoal'}`}
                            >
                                ENQUIRY
                            </Link>
                            <Link
                                href="/gallery"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setMobileMenuOpen(false);
                                }}
                                className={`no-underline text-[0.9rem] font-bold tracking-widest transition-all duration-300 hover:text-brand-pink py-4 border-b border-brand-pink/10 ${pathname === '/gallery' ? 'text-brand-pink' : 'text-brand-charcoal'}`}
                            >
                                GALLERY
                            </Link>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    window.open("https://www.instagram.com/mayon.eil/", "_blank", "noopener,noreferrer");
                                    setMobileMenuOpen(false);
                                }}
                                className="flex items-center gap-3 text-[0.9rem] font-bold tracking-widest text-[#E4405F] hover:text-[#C13584] transition-colors duration-300 py-4 w-full text-left"
                            >
                                <Instagram size={24} />
                                FOLLOW ON INSTAGRAM
                            </button>
                        </nav>
                    </div>
                )}
            </header-menu-container>
        </header>
    );
}
