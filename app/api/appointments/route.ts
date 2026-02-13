import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { name, phone, service, date, time } = data;

        // Basic validation
        if (!name || !phone || !service || !date || !time) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        if (!/^\d{10}$/.test(phone)) {
            return NextResponse.json({ error: 'Phone number must be 10 digits' }, { status: 400 });
        }

        const stmt = db.prepare('INSERT INTO appointments (name, phone, service, date, time) VALUES (?, ?, ?, ?, ?)');
        stmt.run(name, phone, service, date, time);

        // Send email notification
        await resend.emails.send({
            from: 'Glam Nails Studio <onboarding@resend.dev>',
            to: ['fazilahamed135@gmail.com'],
            subject: `New Appointment: ${name} - ${date} @ ${time}`,
            html: `
                <h1>New Appointment Request</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
            `,
        });

        return NextResponse.json({ message: 'Appointment booked successfully!' });
    } catch (error) {
        console.error('Booking error:', error);
        return NextResponse.json({ error: 'Failed to book appointment' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const appointments = db.prepare('SELECT * FROM appointments ORDER BY date ASC, time ASC').all();
        return NextResponse.json(appointments);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
    }
}
