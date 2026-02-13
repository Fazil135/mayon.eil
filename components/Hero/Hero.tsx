'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Zap, Star } from 'lucide-react';

export default function Hero() {
    return (
        <section className="pt-[180px] pb-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                {/* Left Column: Content */}
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-2 bg-[#fff1f6] text-brand-pink px-4 py-2 rounded-full text-[0.75rem] font-extrabold tracking-wider w-fit mb-8 mx-auto lg:mx-0"
                    >
                        <span className="w-1.5 h-1.5 bg-brand-pink rounded-full"></span>
                        PREMIUM NAIL STUDIO
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[4.5rem] lg:text-[6rem] mb-8 text-brand-charcoal leading-[0.95] font-extrabold"
                    >
                        Artistry <br />
                        <span className="accent-serif">at your fingertips</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[1.15rem] text-brand-gray mb-12 max-w-[520px] leading-relaxed mx-auto lg:mx-0"
                    >
                        Experience premium nail extensions and bespoke nail art tailored to your unique style. We blend technique with creativity to make every set a masterpiece.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-5 mb-16 justify-center lg:justify-start"
                    >
                        <Link href="/book" className="bg-brand-pink text-white px-8 py-4 rounded-full text-[0.95rem] font-bold no-underline inline-flex items-center gap-2 transition-all duration-300 hover:bg-[#e02473] hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(255,45,133,0.25)]">
                            Book Appointment <ArrowRight size={18} />
                        </Link>
                        <Link href="/gallery" className="bg-white text-brand-charcoal px-8 py-4 rounded-full text-[0.95rem] font-bold no-underline inline-flex items-center transition-all duration-300 border border-[#e5e7eb] hover:bg-[#f9fafb] hover:border-brand-pink">
                            View Gallery
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center gap-4 justify-center lg:justify-start"
                    >
                        <div className="flex">
                            <img className="w-11 h-11 rounded-full border-4 border-white -ml-4 first:ml-0 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop" alt="User" />
                            <img className="w-11 h-11 rounded-full border-4 border-white -ml-4 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop" alt="User" />
                            <img className="w-11 h-11 rounded-full border-4 border-white -ml-4 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop" alt="User" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="#FFB800" color="#FFB800" />)}
                            </div>
                            <span className="text-[0.9rem] font-bold text-brand-charcoal">500+ Happy Clients</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Imagery with Floating Cards */}
                <div className="flex-1 relative w-full lg:w-auto">
                    <div className="relative w-full">
                        <img
                            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop"
                            alt="Premium Nail Art"
                            className="w-full h-[500px] lg:h-[650px] object-cover rounded-[30px] block"
                        />

                        {/* Custom Art Card */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="absolute top-[15%] -left-10 bg-white p-4 rounded-2xl shadow-lg flex gap-4 items-center z-10 hidden sm:flex"
                        >
                            <div className="w-11 h-11 bg-[#fff1f6] flex items-center justify-center rounded-xl">
                                <Palette size={20} color="#ff2d85" />
                            </div>
                            <div className="flex flex-col">
                                <strong className="text-[0.85rem] tracking-wider font-extrabold uppercase">CUSTOM ART</strong>
                                <span className="text-[0.8rem] text-brand-gray">Bespoke Designs</span>
                            </div>
                        </motion.div>

                        {/* Price Card */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="absolute bottom-[15%] -right-5 bg-white p-5 rounded-2xl shadow-lg flex flex-col items-start gap-2 min-w-[200px] z-10 hidden sm:flex"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center">
                                    <Zap size={14} className="text-brand-pink fill-brand-pink" />
                                </div>
                                <span className="text-[0.7rem] font-extrabold text-brand-pink uppercase tracking-wider">NEW TREND</span>
                            </div>
                            <strong className="text-[1rem] font-extrabold text-brand-charcoal">Crystal Ombre Extensions</strong>
                        </motion.div>

                        {/* Decorative Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_rgba(255,45,133,0.08)_0%,_transparent_70%)] pointer-events-none -z-10"></div>
                    </div>
                </div>
            </div >
        </section >
    );
}
