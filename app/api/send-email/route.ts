import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, data } = body;

        let subject = '';
        let htmlContent = '';

        if (type === 'enquiry') {
            subject = `New Enquiry from ${data.name}`;
            htmlContent = `
                <h1>New Enquiry</h1>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Service Interest:</strong> ${data.service}</p>
                <p><strong>Message:</strong></p>
                <p>${data.message}</p>
            `;
        } else if (type === 'callback') {
            subject = `Callback Request: ${data.phone}`;
            htmlContent = `
                <h1>New Callback Request</h1>
                <p><strong>Phone Number:</strong> ${data.phone}</p>
                <p><strong>Preferred Time:</strong> ${data.time}</p>
            `;
        } else {
            return NextResponse.json({ error: 'Invalid request type' }, { status: 400 });
        }

        const dataRes = await resend.emails.send({
            from: 'Mayon.eil <onboarding@resend.dev>', // Update this if you have a custom domain
            to: ['fazilahamed135@gmail.com'],
            subject: subject,
            html: htmlContent,
        });

        if (dataRes.error) {
            return NextResponse.json({ error: dataRes.error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data: dataRes.data });

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
