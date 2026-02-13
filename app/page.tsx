'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import Hero from '@/components/Hero/Hero';

export default function Home() {
    const featuredServices = ["Acrylics", "Gel-X", "BIAB", "Nail Art", "Pedicure"];

    return (
        <main className="bg-white">
            <Hero />

            {/* Featured Services Section: Infinite Moving Banner - REFINED */}
            <section className="py-12 md:py-20 border-y border-[#f1f3f5] overflow-hidden relative">
                {/* Elite Studio "Luxury Satin" Background Layer */}
                <div className="absolute inset-0 z-0 bg-white" style={{
                    backgroundImage: `
                        radial-gradient(circle at 30% 50%, rgba(217, 160, 145, 0.05) 0%, transparent 60%),
                        radial-gradient(circle at 70% 50%, rgba(196, 138, 123, 0.05) 0%, transparent 60%),
                        linear-gradient(to bottom, #ffffff, #fffaf9, #ffffff)
                    `
                }} />

                <div className="container mx-auto px-6 md:px-10 mb-8 relative z-10 text-center">
                    <h4 className="inline-block text-[0.7rem] md:text-[0.85rem] uppercase tracking-[0.4em] text-brand-gray/60 font-bold border-b border-brand-pink/20 pb-1">FEATURED SERVICES</h4>
                </div>

                {/* Scroller Container with Softer Seamless Fade */}
                <div className="relative z-10 flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-40 before:bg-gradient-to-r before:from-white/80 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-40 after:bg-gradient-to-l after:from-white/80 after:to-transparent">
                    <motion.div
                        className="flex whitespace-nowrap gap-16 py-6 items-center"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {/* More copies for extra seamless high-speed feel */}
                        {[...featuredServices, ...featuredServices, ...featuredServices, ...featuredServices, ...featuredServices, ...featuredServices].map((service, i) => (
                            <div key={i} className="flex items-center gap-8">
                                <span className="text-brand-gray/80 font-serif text-[1.8rem] lg:text-[2.2rem] tracking-widest italic font-medium">
                                    {service}
                                </span>
                                <div className="w-2 h-2 rounded-full bg-brand-pink/30 flex-shrink-0" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 md:py-24 lg:py-32">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12 lg:gap-20">
                        <div className="flex-[1.5] text-center lg:text-left">
                            <h2 className="text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] mb-6 md:mb-8 text-brand-charcoal leading-tight font-extrabold">Redefining the <br className="hidden sm:block" /> <span className="accent-serif">Studio Experience</span></h2>
                            <p className="text-[1rem] md:text-[1.15rem] text-brand-gray max-w-[600px] leading-relaxed mx-auto lg:mx-0">We believe that nail care is more than just a service—it's an artistic expression. At mayon.eil, we bring the premium salon experience to the privacy and comfort of your home.</p>
                        </div>
                        <div className="flex-1 flex justify-around sm:justify-between border-t lg:border-t-0 lg:border-l border-[#e5e7eb] pt-8 md:pt-10 lg:pt-0 lg:pl-16">
                            <div className="flex flex-col items-center lg:items-start">
                                <strong className="text-[1.8rem] md:text-[2.5rem] text-brand-pink mb-1 md:mb-2 font-extrabold">10+</strong>
                                <span className="text-[0.7rem] md:text-[0.85rem] font-bold text-brand-gray uppercase tracking-widest">Years Exp.</span>
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <strong className="text-[1.8rem] md:text-[2.5rem] text-brand-pink mb-1 md:mb-2 font-extrabold">2k+</strong>
                                <span className="text-[0.7rem] md:text-[0.85rem] font-bold text-brand-gray uppercase tracking-widest">Sets Done</span>
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <strong className="text-[1.8rem] md:text-[2.5rem] text-brand-pink mb-1 md:mb-2 font-extrabold">5/5</strong>
                                <span className="text-[0.7rem] md:text-[0.85rem] font-bold text-brand-gray uppercase tracking-widest">Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Instagram CTA Section */}
            <section className="py-16 md:py-24 bg-[#fffaf9] border-t border-[#f1f3f5]">
                <div className="container mx-auto px-6 md:px-10 text-center">
                    <a
                        href="https://www.instagram.com/mayon.eil/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-col items-center group"
                    >
                        <div className="mb-4 md:mb-6 relative">
                            <div className="absolute inset-0 bg-brand-pink/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                            <Instagram size={48} className="text-[#E4405F] md:w-[64px] md:h-[64px] relative z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                        </div>
                        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-brand-charcoal mb-2 md:mb-3 group-hover:text-brand-pink transition-colors duration-300">
                            Follow us on Instagram
                        </h3>
                        <p className="text-brand-mustard font-bold tracking-[0.2em] text-base md:text-lg uppercase relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-brand-mustard after:transition-all after:duration-500 group-hover:after:w-full">
                            @mayon.eil
                        </p>
                    </a>
                </div>
            </section>
        </main>
    );
}
