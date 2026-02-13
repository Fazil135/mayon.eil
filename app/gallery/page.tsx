'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Sparkles, Eye } from 'lucide-react';

const categories = ['All', 'French Tips', 'Glam', 'Minimal', 'Bold Art'];

const galleryItems = [
    {
        src: '/gallery/0286d1568a35406232aa42a5a54d39d2.jpg',
        category: 'French Tips',
        title: 'Classic French',
        span: 'tall',
    },
    {
        src: '/gallery/034f5c98b01fea1dc8d12efdfe4be4a3.jpg',
        category: 'Glam',
        title: 'Glitter Ombre',
        span: 'normal',
    },
    {
        src: '/gallery/26d4d9e35cb9027c90cb7c7eaedd7aa7.jpg',
        category: 'Minimal',
        title: 'Nude Elegance',
        span: 'normal',
    },
    {
        src: '/gallery/26deb0bbf51788992161f4791deca47e.jpg',
        category: 'Bold Art',
        title: 'Abstract Swirls',
        span: 'tall',
    },
    {
        src: '/gallery/2d79b94ba0b558ef401d1fc476263922.jpg',
        category: 'French Tips',
        title: 'Rose Tip',
        span: 'normal',
    },
    {
        src: '/gallery/4caf4c5600ebe6c7e9f772d88fc0b5ee.jpg',
        category: 'Glam',
        title: 'Sunset Chrome',
        span: 'tall',
    },
    {
        src: '/gallery/7eac1e72716cdd38cc85cea5a9ac16d3.jpg',
        category: 'Minimal',
        title: 'Soft Blush',
        span: 'normal',
    },
    {
        src: '/gallery/9b3a629f1e95ae71ca17fa437ce304f2.jpg',
        category: 'Bold Art',
        title: 'Neon Mosaic',
        span: 'normal',
    },
    {
        src: '/gallery/170b993b8036c608d0ec2e565515765c.jpg',
        category: 'Glam',
        title: 'Crystal Luxe',
        span: 'tall',
    },
];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems =
        activeCategory === 'All'
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-brand-surface">
            {/* ─── Hero Banner ─── */}
            <section className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-white" style={{
                    backgroundImage: `
                        radial-gradient(ellipse at 20% 50%, rgba(217,160,145,0.12) 0%, transparent 55%),
                        radial-gradient(ellipse at 80% 30%, rgba(196,138,123,0.08) 0%, transparent 55%),
                        linear-gradient(to bottom, #ffffff, #fff7f5)
                    `
                }} />

                <div className="container mx-auto px-6 md:px-10 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="flex items-center gap-2 bg-[#fff1f6] text-brand-pink px-4 py-2 rounded-full text-[0.75rem] font-extrabold tracking-wider w-fit mx-auto mb-8">
                            <Sparkles size={14} />
                            OUR PORTFOLIO
                        </div>

                        <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-extrabold text-brand-charcoal leading-[1.1] md:leading-[0.9] mb-6 md:mb-8">
                            Nail Art <span className="accent-serif">Gallery</span>
                        </h1>

                        <p className="text-[1rem] md:text-[1.15rem] text-brand-gray leading-relaxed max-w-xl mx-auto px-4 sm:px-0">
                            A curated showcase of our finest nail art designs. Every set is hand-crafted with precision, passion, and premium materials.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── Filter Tabs ─── */}
            <section className="sticky top-[80px] md:top-[96px] lg:top-[112px] z-30 bg-white/80 backdrop-blur-xl border-b border-brand-pink/10">
                <div className="container mx-auto px-6 md:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center gap-3 py-5 overflow-x-auto scrollbar-hide"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-[0.8rem] font-extrabold uppercase tracking-widest whitespace-nowrap transition-all duration-300 cursor-pointer ${activeCategory === cat
                                    ? 'bg-brand-charcoal text-white shadow-lg scale-105'
                                    : 'bg-transparent text-brand-gray hover:bg-brand-pink/10 hover:text-brand-pink border border-brand-pink/15'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── Masonry Gallery Grid ─── */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-10">
                    <motion.div
                        layout
                        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
                    >
                        {filteredItems.map((item, i) => (
                            <motion.div
                                key={item.src}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="break-inside-avoid group relative overflow-hidden rounded-3xl cursor-pointer"
                            >
                                <div className={`overflow-hidden ${item.span === 'tall' ? 'aspect-[3/4]' : 'aspect-square'}`}>
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-7">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                    >
                                        <span className="inline-block px-3 py-1 rounded-full bg-brand-pink/20 text-brand-pink text-[0.65rem] font-extrabold uppercase tracking-widest mb-3">
                                            {item.category}
                                        </span>
                                        <h3 className="text-white text-[1.4rem] font-extrabold leading-tight">
                                            {item.title}
                                        </h3>
                                    </motion.div>

                                    <div className="absolute top-5 right-5 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                                        <Eye size={16} className="text-white" />
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-pink to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </motion.div>
                        ))}
                    </motion.div>

                    {filteredItems.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-32"
                        >
                            <p className="text-brand-gray text-[1.1rem]">No items in this category yet. Check back soon!</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* ─── Bottom CTA ─── */}
            <section className="pb-20 md:pb-32">
                <div className="container mx-auto px-6 md:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-brand-charcoal text-white text-center py-16 md:py-24 px-6 md:px-10"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-pink/15 rounded-full blur-[120px] pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-[1.8rem] md:text-[2.5rem] lg:text-[3.5rem] font-extrabold leading-tight mb-6">
                                Love what<br className="hidden sm:block" />you <span className="accent-serif text-brand-pink">see?</span>
                            </h2>
                            <p className="text-white/60 text-[1rem] mb-10 max-w-md mx-auto leading-relaxed">
                                Book your appointment today and let us create your dream nail art. Every design is fully customisable.
                            </p>
                            <a
                                href="/book"
                                className="inline-block px-10 py-4 bg-brand-pink text-white rounded-full font-bold uppercase tracking-widest text-[0.85rem] hover:shadow-[0_0_40px_rgba(217,160,145,0.4)] transition-all duration-500 hover:-translate-y-1"
                            >
                                Book Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
