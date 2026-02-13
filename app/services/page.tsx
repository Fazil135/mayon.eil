'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Gem, Sparkles, Paintbrush, Fingerprint, Feather, Droplets } from 'lucide-react';

import Link from 'next/link';

const services = [
    {
        category: "Enhancements",
        items: [
            {
                name: 'Bridal Couture Nails',
                desc: 'A complete luxury experience for your special day. Includes personalized consultation, skin prep, and intricate hand-painted artistry or crystal embellishments tailored to your gown.',
                icon: Gem,
                color: 'text-rose-400',
                bg: 'bg-rose-50',
            },
            {
                name: 'Luxe Sculpted Set',
                desc: 'Our signature method. Forms are used to sculpt extensions that perfectly fit your natural nail bed, creating a lightweight yet durable enhancement with a glass-like finish.',
                icon: Sparkles,
                color: 'text-amber-400',
                bg: 'bg-amber-50',
            },
            {
                name: 'Structured Gel Overlay',
                desc: 'Perfect for growing out natural nails. A strengthening layer of builder gel is applied to correct structure and add resilience without adding length.',
                icon: Droplets,
                color: 'text-blue-400',
                bg: 'bg-blue-50',
            }
        ]
    },
    {
        category: "Maintenance & Care",
        items: [
            {
                name: 'Precision Rebalance',
                desc: 'Essential maintenance to rebalance the apex and structure of your grown-out extensions, ensuring structural integrity and a fresh appearance.',
                icon: Fingerprint,
                color: 'text-emerald-400',
                bg: 'bg-emerald-50',
            },
            {
                name: 'Safe Removal Protocol',
                desc: 'A gentle, patient-focused removal process that prioritizes the health of your natural keratin, finishing with a nourishing oil treatment.',
                icon: Feather,
                color: 'text-slate-400',
                bg: 'bg-slate-50',
            }
        ]
    },
    {
        category: "Artistry",
        items: [
            {
                name: 'Bespoke Nail Art',
                desc: 'From delicate linework and negative space to 3D sculpting and texture. We specialize in bringing complex concepts to life on a miniature canvas.',
                icon: Paintbrush,
                color: 'text-purple-400',
                bg: 'bg-purple-50',
            }
        ]
    }
];

export default function Services() {
    return (
        <div className="pt-32 md:pt-40 pb-20 md:pb-32 bg-brand-surface min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="inline-block px-5 py-2 mb-6 rounded-full bg-white border border-brand-pink/20 text-brand-pink font-extrabold uppercase tracking-widest text-[0.7rem] md:text-[0.75rem]">Professional Services</span>
                    <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-extrabold text-brand-charcoal leading-tight">
                        Curated <span className="accent-serif italic text-brand-gray/80">Treatments</span>
                    </h1>
                    <p className="mt-6 text-brand-gray max-w-xl mx-auto text-base md:text-lg leading-relaxed px-4 sm:px-0">
                        Experience bespoke nail architecture and artistry, tailored to your unique style and natural nail health.
                    </p>
                </motion.div>

                {/* Categories & Cards */}
                <div className="space-y-16 md:space-y-20">
                    {services.map((section, idx) => (
                        <div key={idx}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-xl md:text-2xl font-serif italic text-brand-charcoal mb-8 md:mb-10 pl-4 border-l-4 border-brand-pink/30"
                            >
                                {section.category}
                            </motion.h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {section.items.map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1, duration: 0.5 }}
                                            className="group bg-white rounded-3xl md:rounded-4xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-charcoal/5 hover:border-brand-pink/20 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                                        >
                                            <Link href="/book" className="block h-full w-full">
                                                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                                    <Icon size={28} className={item.color} strokeWidth={1.5} />
                                                </div>

                                                <h4 className="text-xl font-extrabold text-brand-charcoal mb-4 group-hover:text-brand-pink transition-colors duration-300">
                                                    {item.name}
                                                </h4>

                                                <p className="text-brand-gray leading-relaxed text-[0.95rem] mb-8">
                                                    {item.desc}
                                                </p>

                                                <div className="flex items-center text-[0.8rem] font-bold uppercase tracking-widest text-brand-charcoal group-hover:text-brand-pink transition-colors duration-300 gap-2">
                                                    Book This Service
                                                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                                                </div>

                                                {/* Decorative gradient overlay */}
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-brand-pink/5 to-transparent rounded-bl-4xl -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150" />
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 text-center"
                >
                    <p className="text-brand-gray/60 text-sm uppercase tracking-widest font-bold">
                        Prices available upon consultation
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
