'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Check, ChevronDown, ArrowRight } from 'lucide-react';

export default function EnquiryPage() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedTime, setSelectedTime] = useState('Afternoon');
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const dialPad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '⌫'];

    const handleDial = (key: string) => {
        if (key === '⌫') {
            setPhoneNumber(prev => prev.slice(0, -1));
        } else if (phoneNumber.length < 15) {
            setPhoneNumber(prev => prev + key);
        }
    };

    return (
        <div className="min-h-screen pt-32 md:pt-40 pb-16 md:pb-24 bg-brand-surface relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-white to-transparent pointer-events-none" />
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-mustard/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <span className="inline-block px-5 py-2 mb-6 rounded-full bg-white border border-brand-pink/20 text-brand-pink font-extrabold uppercase tracking-widest text-[0.7rem] md:text-[0.75rem]">Get in Touch</span>
                    <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-extrabold text-brand-charcoal leading-[0.9] px-4">
                        Start Your <br className="hidden sm:block" /><span className="accent-serif italic text-brand-gray/80">Journey</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7 bg-white rounded-3xl md:rounded-4xl p-6 md:p-10 lg:p-14 shadow-sm border border-brand-charcoal/5"
                    >
                        <h2 className="text-2xl md:text-3xl font-serif italic font-bold text-brand-charcoal mb-2">Send a Message</h2>
                        <p className="text-brand-gray mb-8 md:mb-10 text-[0.9rem] md:text-[0.95rem]">Fill out the form below and our team will get back to you within 24 hours.</p>

                        <form className="space-y-6" onSubmit={async (e) => {
                            e.preventDefault();
                            setStatus({ type: null, message: 'Sending...' });

                            const formData = new FormData(e.currentTarget);
                            const data = {
                                name: formData.get('name'),
                                email: formData.get('email'),
                                service: formData.get('service'),
                                message: formData.get('message'),
                            };

                            try {
                                const res = await fetch('/api/send-email', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ type: 'enquiry', data }),
                                });

                                if (res.ok) {
                                    setStatus({ type: 'success', message: 'Message sent! We will contact you shortly.' });
                                    (e.target as HTMLFormElement).reset();
                                } else {
                                    setStatus({ type: 'error', message: 'Failed to send. Please try again.' });
                                }
                            } catch (err) {
                                setStatus({ type: 'error', message: 'Connection Error.' });
                            }
                        }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-brand-charcoal uppercase tracking-widest">Full Name</label>
                                    <input name="name" type="text" required placeholder="Jane Doe" className="w-full bg-brand-surface border-none rounded-xl p-4 text-brand-charcoal placeholder-brand-gray/40 focus:ring-2 focus:ring-brand-pink/20 transition-all outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-brand-charcoal uppercase tracking-widest">Email Address</label>
                                    <input name="email" type="email" required placeholder="jane@example.com" className="w-full bg-brand-surface border-none rounded-xl p-4 text-brand-charcoal placeholder-brand-gray/40 focus:ring-2 focus:ring-brand-pink/20 transition-all outline-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-brand-charcoal uppercase tracking-widest">Service Interest</label>
                                <div className="relative">
                                    <select name="service" required className="w-full bg-brand-surface border-none rounded-xl p-4 text-brand-charcoal appearance-none focus:ring-2 focus:ring-brand-pink/20 transition-all outline-none cursor-pointer">
                                        <option value="">Select a service...</option>
                                        <option value="Bridal Couture">Bridal Couture</option>
                                        <option value="Sculpted Extensions">Sculpted Extensions</option>
                                        <option value="Nail Artistry">Nail Artistry</option>
                                        <option value="Other Inquiry">Other Inquiry</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none" size={18} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-brand-charcoal uppercase tracking-widest">Your Message</label>
                                <textarea name="message" required rows={5} placeholder="Tell us about your vision..." className="w-full bg-brand-surface border-none rounded-xl p-4 text-brand-charcoal placeholder-brand-gray/40 focus:ring-2 focus:ring-brand-pink/20 transition-all outline-none resize-none" />
                            </div>

                            <button type="submit" disabled={status.type === 'success' || (status.message === 'Sending...')} className="w-full bg-brand-pink text-white font-bold uppercase tracking-widest text-sm py-5 rounded-xl hover:bg-brand-mustard transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:opacity-50">
                                {status.message === 'Sending...' ? 'Sending...' : 'Send Enquiry'}
                            </button>
                        </form>

                        <div className="mt-14 pt-10 border-t border-brand-charcoal/5">
                            <h3 className="font-serif italic font-bold text-brand-charcoal text-xl mb-6">Why Choose Mayon.eil?</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check size={14} className="text-brand-pink" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-charcoal text-sm uppercase tracking-wider mb-1">Bespoke Artistry</h4>
                                        <p className="text-brand-gray text-sm leading-relaxed">Every set is a custom masterpiece, tailored to your style.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check size={14} className="text-brand-pink" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-charcoal text-sm uppercase tracking-wider mb-1">Premium Products</h4>
                                        <p className="text-brand-gray text-sm leading-relaxed">We use only high-end, non-toxic gels and ethically sourced materials.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check size={14} className="text-brand-pink" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-charcoal text-sm uppercase tracking-wider mb-1">Private Studio</h4>
                                        <p className="text-brand-gray text-sm leading-relaxed">Enjoy a relaxing, one-on-one session in our exclusive Mayfair studio.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column: Callback & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        {/* Callback Request Card */}
                        <div className="bg-white rounded-3xl md:rounded-4xl p-6 md:p-10 shadow-sm border border-brand-charcoal/5">
                            <h2 className="text-2xl font-serif italic font-bold text-brand-charcoal mb-6">Request Callback</h2>

                            <div className="bg-brand-surface rounded-2xl p-6 mb-6 text-center">
                                <span className="block text-xs font-extrabold text-brand-pink uppercase tracking-widest mb-2">Number to Call</span>
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="+91 98765 43210"
                                    className="w-full bg-transparent text-2xl font-mono text-brand-charcoal tracking-wider text-center focus:outline-none placeholder-brand-gray/30"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {dialPad.map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => handleDial(key)}
                                        className="h-14 rounded-xl bg-brand-surface hover:bg-brand-pink/10 hover:text-brand-pink text-brand-charcoal font-bold text-lg transition-colors duration-200"
                                    >
                                        {key}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {['Morning', 'Afternoon', 'Evening'].map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wide transition-all duration-300 ${selectedTime === time
                                            ? 'bg-brand-pink text-white shadow-lg shadow-brand-pink/30'
                                            : 'bg-brand-surface text-brand-gray hover:bg-brand-charcoal/5'
                                            }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={async () => {
                                    if (!phoneNumber) {
                                        setStatus({ type: 'error', message: 'Please enter a phone number.' });
                                        return;
                                    }

                                    setStatus({ type: null, message: 'Requesting...' });
                                    try {
                                        const res = await fetch('/api/send-email', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({
                                                type: 'callback',
                                                data: { phone: phoneNumber, time: selectedTime }
                                            }),
                                        });

                                        if (res.ok) {
                                            setStatus({ type: 'success', message: 'Callback requested!' });
                                            setPhoneNumber('');
                                        } else {
                                            setStatus({ type: 'error', message: 'Failed to request. Try again.' });
                                        }
                                    } catch (err) {
                                        setStatus({ type: 'error', message: 'Connection Error.' });
                                    }
                                }}
                                disabled={status.type === 'success' || status.message === 'Requesting...'}
                                className="w-full flex items-center justify-center gap-3 bg-brand-pink text-white font-bold uppercase tracking-widest text-sm py-4 rounded-xl hover:bg-brand-mustard transition-all duration-300 shadow-pink hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                                <Phone size={16} /> {status.message === 'Requesting...' ? 'Requesting...' : 'Request Call'}
                            </button>
                        </div>

                        {/* Contact Info Card */}
                        {/* Stylish Instagram Card */}
                        {/* Stylish Instagram Card - Light & Elegant */}
                        <a
                            href="https://www.instagram.com/mayon.eil/"
                            target="_blank"
                            className="block bg-white rounded-3xl md:rounded-4xl p-8 md:p-10 lg:p-12 text-brand-charcoal relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-brand-pink/20 hover:-translate-y-2 border border-brand-charcoal/5"
                        >
                            {/* Decorative Backgrounds */}
                            <div className="absolute top-0 right-0 w-[120%] h-[120%] bg-linear-to-br from-brand-pink/5 via-transparent to-brand-mustard/5 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                                <div className="w-24 h-24 rounded-full bg-linear-to-tr from-[#fd5949] to-[#d6249f] p-[3px] shadow-xl group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center border-4 border-transparent">
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <img src="/assets/logo.png" alt="Mayon.eil" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <h4 className="font-serif text-3xl md:text-4xl font-bold text-brand-charcoal tracking-wide">@mayon.eil</h4>
                                    <p className="text-brand-mustard text-xs md:text-sm font-bold tracking-widest uppercase">Luxury Nail Artistry</p>
                                </div>

                                <p className="text-brand-gray text-lg leading-relaxed max-w-xs mx-auto italic font-serif">
                                    "Follow our journey and explore the art of elegance."
                                </p>

                                <span className="inline-flex items-center gap-3 text-white bg-brand-pink px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs mt-4 group-hover:bg-brand-mustard transition-colors duration-300 shadow-lg shadow-brand-pink/30">
                                    Follow on Instagram <ArrowRight size={16} />
                                </span>
                            </div>
                        </a>

                    </motion.div>
                </div>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {status.type === 'success' && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-4xl p-10 max-w-md w-full text-center shadow-2xl relative overflow-hidden"
                        >
                            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check size={40} className="text-emerald-500" strokeWidth={3} />
                            </div>
                            <h3 className="text-3xl font-serif italic font-bold text-brand-charcoal mb-4">Thank You!</h3>
                            <p className="text-brand-gray mb-8 text-lg">
                                {status.message}
                            </p>
                            <button
                                onClick={() => setStatus({ type: null, message: '' })}
                                className="bg-brand-pink text-white font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-xl hover:bg-brand-mustard transition-all duration-300 shadow-lg hover:-translate-y-1"
                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
