import { NextResponse } from 'next/server';

// Ensure this route runs on the Node.js runtime so process.env is available
export const runtime = 'nodejs';

// Optional: Resend email service. Set RESEND_API_KEY in your environment to enable.
// npm i resend (only needed if you decide to switch to SDK usage)

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    // TEMP: diagnostic log to verify env visibility (remove after verifying)
    if (process.env.NODE_ENV !== 'production') {
      const len = (process.env.RESEND_API_KEY || '').length;
      console.log('Contact route env check - RESEND_API_KEY length:', len);
    }
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Basic email format check
    const emailOk = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
    if (!emailOk) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // If RESEND_API_KEY is present, send via Resend API (REST)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      const subject = `Portfolio contact from ${name}`;
      const to = process.env.CONTACT_TO || 'gm4175urjitupadhyay@gmail.com';
      const from = process.env.CONTACT_FROM || 'portfolio@upadhyay.dev';

      const html = `<div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>New message from portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      </div>`;

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ from, to, subject, html })
      });

      if (!res.ok) {
        const err = await res.text();
        console.error('Resend error:', err);
        return NextResponse.json({ error: 'Email service failed' }, { status: 502 });
      }

      return NextResponse.json({ ok: true });
    }

    // Fallback: no email service configured
    console.warn('RESEND_API_KEY not set; skipping email send.');
    return NextResponse.json({ ok: true, note: 'Email service not configured' });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
