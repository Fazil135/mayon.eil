'use client';

import Link from 'next/link';
import { Instagram, MessageCircle, MapPin, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-charcoal text-white pt-24 pb-12 relative overflow-hidden">
            {/* Elegant Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-mustard/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* 1. Brand & Vision */}
                    <div className="lg:col-span-4 space-y-8 pr-0 lg:pr-12">
                        <Link href="/" className="inline-block group">
                            <h2 className="font-serif text-4xl text-brand-pink tracking-widest leading-none transition-colors group-hover:text-white">
                                MAYON.EIL
                            </h2>
                            <span className="block text-xs font-bold text-white/40 tracking-[0.4em] uppercase mt-3">
                                Luxury Nail Extensions
                            </span>
                        </Link>
                        <p className="text-white/60 text-base leading-relaxed font-light">
                            Where artistry meets architecture. We craft bespoke extensions that are as durable as they are exquisite, tailored to reflect your unique style and essence.
                        </p>
                    </div>

                    {/* 2. Navigation */}
                    <div className="lg:col-span-2 lg:col-start-6 space-y-8">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-mustard">Menu</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-white/70 hover:text-white transition-colors text-sm font-medium hover:tracking-wide duration-300 inline-block">Home</Link></li>
                            <li><Link href="/services" className="text-white/70 hover:text-white transition-colors text-sm font-medium hover:tracking-wide duration-300 inline-block">Our Services</Link></li>
                            <li><Link href="/gallery" className="text-white/70 hover:text-white transition-colors text-sm font-medium hover:tracking-wide duration-300 inline-block">Portfolio</Link></li>
                            <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm font-medium hover:tracking-wide duration-300 inline-block">Contact</Link></li>
                        </ul>
                    </div>

                    {/* 3. Stylish Instagram Section (Replaces Opening Hours) */}
                    <div className="lg:col-span-3 lg:col-start-9 space-y-8">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-mustard">Connect</h3>
                        <Link
                            href="https://www.instagram.com/mayon.eil/"
                            target="_blank"
                            className="group block p-6 rounded-2xl bg-linear-to-br from-white/10 to-transparent border border-white/10 hover:border-brand-pink/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-brand-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                            <div className="relative z-10 flex items-center gap-5">
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#E4405F] shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    <Instagram size={28} />
                                </div>
                                <div>
                                    <span className="block text-white font-serif text-xl mb-1">@mayon.eil</span>
                                    <span className="text-brand-pink text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                                        Follow for Art <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <div className="flex flex-col items-start space-y-4 pt-2">
                            <Link href="/book" className="text-white/60 hover:text-white text-sm border-b border-transparent hover:border-white transition-colors pb-0.5">
                                Book an Appointment &rarr;
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Refined Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 font-light tracking-wide">
                    <p>&copy; {new Date().getFullYear()} Mayon.eil. Elevating Beauty.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-brand-pink transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-brand-pink transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
