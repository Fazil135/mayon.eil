import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'mayon.eil | Luxury Nail Extensions at Home',
    description: 'mayon.eil - Soft pink, nude beige, white, and gold aesthetic nail studio.',
};

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
