'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'glamnails2026') {
            localStorage.setItem('isAdmin', 'true');
            router.push('/admin');
        } else {
            setError('Invalid password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-brand-surface p-10">
            <div className="bg-white p-10 lg:p-14 rounded-[24px] shadow-v9 w-full max-w-[440px]">
                <h1 className="text-[2rem] font-extrabold text-brand-charcoal text-center mb-10">Admin Access</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2.5">
                        <label className="text-[0.85rem] font-bold text-brand-charcoal tracking-wide">Admin Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                            className="p-4 bg-[#fdfdfd] border border-[#e5e7eb] rounded-xl text-[1rem] transition-all focus:outline-none focus:border-brand-pink focus:shadow-[0_0_0_4px_rgba(255,45,133,0.1)]"
                        />
                    </div>
                    {error && <p className="text-red-500 text-[0.85rem] font-bold text-center mt-[-10px]">{error}</p>}
                    <button type="submit" className="bg-brand-pink text-white py-4 rounded-full font-bold text-[0.95rem] shadow-pink transition-all duration-300 hover:bg-[#e02473] hover:-translate-y-0.5">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
