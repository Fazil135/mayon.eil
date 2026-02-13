'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Appointment {
    id: number;
    name: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    status: string;
}

export default function AdminDashboard() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin !== 'true') {
            router.push('/admin/login');
            return;
        }

        fetchAppointments();
    }, [router]);

    const fetchAppointments = async () => {
        try {
            const res = await fetch('/api/appointments');
            const data = await res.json();
            setAppointments(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: number, status: string) => {
        try {
            await fetch(`/api/appointments/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status })
            });
            fetchAppointments();
        } catch (err) {
            console.error(err);
        }
    };

    const today = new Date().toISOString().split('T')[0];
    const todayBookings = appointments.filter(a => a.date === today).length;

    return (
        <div className="pt-32 pb-24 min-h-screen bg-brand-surface">
            <div className="container mx-auto px-10">
                <div className="flex justify-between items-center mb-10 pb-5 border-b border-[#e5e7eb]">
                    <h1 className="text-[2rem] font-extrabold text-brand-charcoal">Admin Dashboard</h1>
                    <button
                        onClick={() => { localStorage.removeItem('isAdmin'); router.push('/admin/login'); }}
                        className="bg-brand-charcoal text-white px-6 py-2 rounded-lg font-bold text-[0.85rem] transition-all hover:bg-black"
                    >
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#f1f3f5]">
                        <h3 className="text-brand-gray text-[0.85rem] font-bold uppercase tracking-widest mb-2">Total Bookings</h3>
                        <p className="text-[2.5rem] font-extrabold text-brand-charcoal">{appointments.length}</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#f1f3f5]">
                        <h3 className="text-brand-gray text-[0.85rem] font-bold uppercase tracking-widest mb-2">Today's Bookings</h3>
                        <p className="text-[2.5rem] font-extrabold text-brand-pink">{todayBookings}</p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-[#f1f3f5] overflow-hidden">
                    <div className="p-8 border-b border-[#f1f3f5]">
                        <h2 className="text-[1.25rem] font-extrabold text-brand-charcoal">All Appointments</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-brand-surface text-brand-gray text-[0.75rem] font-bold uppercase tracking-widest">
                                <tr>
                                    <th className="p-5">Date</th>
                                    <th className="p-5">Time</th>
                                    <th className="p-5">Customer</th>
                                    <th className="p-5">Service</th>
                                    <th className="p-5">Status</th>
                                    <th className="p-5">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f1f3f5]">
                                {appointments.map(a => (
                                    <tr key={a.id} className="hover:bg-brand-surface/50 transition-colors">
                                        <td className="p-5 font-semibold text-[0.9rem]">{a.date}</td>
                                        <td className="p-5 font-semibold text-[0.9rem]">{a.time}</td>
                                        <td className="p-5">
                                            <strong className="text-brand-charcoal block">{a.name}</strong>
                                            <small className="text-brand-gray font-medium">{a.phone}</small>
                                        </td>
                                        <td className="p-5 font-medium text-brand-gray">{a.service}</td>
                                        <td className="p-5">
                                            <span className={`px-3 py-1 rounded-full text-[0.75rem] font-bold uppercase ${a.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                                                    a.status === 'Cancelled' ? 'bg-red-50 text-red-600' :
                                                        'bg-blue-50 text-blue-600'
                                                }`}>
                                                {a.status}
                                            </span>
                                        </td>
                                        <td className="p-5">
                                            <select
                                                value={a.status}
                                                onChange={(e) => updateStatus(a.id, e.target.value)}
                                                className="p-2 border border-[#e5e7eb] rounded-lg text-[0.85rem] font-bold focus:outline-none focus:border-brand-pink"
                                            >
                                                <option value="Booked">Booked</option>
                                                <option value="Completed">Completed</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {loading && <div className="p-10 text-center text-brand-gray font-bold">Loading appointments...</div>}
                </div>
            </div>
        </div>
    );
}
