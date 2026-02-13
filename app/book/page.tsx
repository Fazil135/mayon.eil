'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white w-full max-w-md rounded-3xl p-8 text-center shadow-2xl overflow-hidden"
                    >
                        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-10 h-10 text-emerald-500" strokeWidth={3} />
                        </div>

                        <h3 className="text-2xl font-bold text-brand-charcoal mb-3">Booking Requested!</h3>
                        <p className="text-brand-gray mb-8">
                            We have received your appointment request. We will review it and send you a confirmation email shortly.
                        </p>

                        <button
                            onClick={onClose}
                            className="w-full py-3.5 bg-brand-pink text-white font-bold rounded-xl hover:bg-[#e02473] transition-colors"
                        >
                            Done
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default function BookAppointment() {
    const [formData, setFormData] = useState({
        name: '', phone: '', service: '', date: '', time: '', notes: ''
    });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
    const [loading, setLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                // setStatus({ type: 'success', message: 'Appointment Requested! We will contact you shortly.' });
                setShowSuccessModal(true);
                setFormData({ name: '', phone: '', service: '', date: '', time: '', notes: '' });
            } else {
                setStatus({ type: 'error', message: 'Failed to request. Please try again.' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Connection Error.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-44 pb-24 bg-brand-surface min-h-screen">
            <div className="container mx-auto px-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-[800px] mx-auto bg-white p-10 lg:p-20 rounded-[24px] shadow-v9"
                >
                    <div className="text-center mb-15">
                        <h1 className="text-[3.5rem] font-extrabold leading-tight mb-5 text-brand-charcoal">Reserve Your <br /> <span className="accent-serif">Session</span></h1>
                        <p className="text-brand-gray text-[1.1rem]">Join the 500+ happy clients who trust mayon.eil for their nail artistry.</p>
                    </div>

                    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-3">
                                <label className="text-[0.85rem] font-bold text-brand-charcoal">Full Name</label>
                                <input type="text" required placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="p-[14px_20px] bg-[#fdfdfd] border border-[#e5e7eb] rounded-xl text-[1rem] font-inherit transition-all focus:outline-none focus:border-brand-pink focus:shadow-[0_0_0_4px_rgba(255,45,133,0.1)]" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-[0.85rem] font-bold text-brand-charcoal">Contact Number</label>
                                <input type="tel" required placeholder="+91" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="p-[14px_20px] bg-[#fdfdfd] border border-[#e5e7eb] rounded-xl text-[1rem] font-inherit transition-all focus:outline-none focus:border-brand-pink focus:shadow-[0_0_0_4px_rgba(255,45,133,0.1)]" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="text-[0.85rem] font-bold text-brand-charcoal">Service Treatment</label>
                            <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="p-[14px_20px] bg-[#fdfdfd] border border-[#e5e7eb] rounded-xl text-[1rem] font-inherit transition-all focus:outline-none focus:border-brand-pink focus:shadow-[0_0_0_4px_rgba(255,45,133,0.1)]">
                                <option value="">Select Treatment</option>
                                <option value="Acrylics">Acrylics</option>
                                <option value="Gel-X">Gel-X</option>
                                <option value="BIAB">BIAB</option>
                                <option value="Nail Art">Nail Art</option>
                                <option value="Pedicure">Pedicure</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-3">
                                <label className="text-[0.85rem] font-bold text-brand-charcoal">Preferred Date</label>
                                <input type="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="p-[14px_20px] bg-[#fdfdfd] border border-[#e5e7eb] rounded-xl text-[1rem] font-inherit transition-all focus:outline-none focus:border-brand-pink focus:shadow-[0_0_0_4px_rgba(255,45,133,0.1)]" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-[0.85rem] font-bold text-brand-charcoal">Time Slot</label>
                                <select required value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="p-[14px_20px] bg-[#fdfdfd] border border-[#e5e7eb] rounded-xl text-[1rem] font-inherit transition-all focus:outline-none focus:border-brand-pink focus:shadow-[0_0_0_4px_rgba(255,45,133,0.1)]">
                                    <option value="">Select Time</option>
                                    {['10:00 AM', '01:00 PM', '04:00 PM', '07:00 PM'].map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>
                        </div>

                        <button type="submit" disabled={loading} className="bg-brand-pink text-white py-4 rounded-full font-bold text-[0.95rem] shadow-[0_4px_14px_rgba(255,45,133,0.25)] transition-all duration-300 hover:bg-[#e02473] hover:-translate-y-0.5 disabled:opacity-50">
                            {loading ? 'Processing...' : 'Request Reservation'}
                        </button>

                        {status.message && (
                            <div className={`p-5 rounded-xl font-bold text-center ${status.type === 'success' ? 'bg-emerald-50 text-emerald-500' : 'bg-red-50 text-red-500'}`}>
                                {status.message}
                            </div>
                        )}
                    </form>
                </motion.div>
            </div>
            <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
        </div>
    );
}
