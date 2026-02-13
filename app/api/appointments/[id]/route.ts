import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { status } = await request.json();
        const { id } = params;

        const stmt = db.prepare('UPDATE appointments SET status = ? WHERE id = ?');
        stmt.run(status, id);

        return NextResponse.json({ message: 'Status updated' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
    }
}
