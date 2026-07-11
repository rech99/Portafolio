import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

export async function POST(req: Request) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: 'El servicio de correo no está configurado. Por favor, configure la variable de entorno RESEND_API_KEY.' },
        { status: 500 }
      );
    }

    const { name, email, message } = await req.json();

    // Validaciones de Backend
    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'El nombre es obligatorio.' }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ error: 'El correo electrónico es obligatorio.' }, { status: 400 });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'El correo electrónico ingresado no es válido.' }, { status: 400 });
    }

    if (!message || !message.trim()) {
      return NextResponse.json({ error: 'El mensaje no puede estar vacío.' }, { status: 400 });
    }

    // Envío del correo usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['rech_99@hotmail.com'],
      subject: `Nuevo mensaje de contacto de ${name}`,
      replyTo: email,
      text: `Nombre: ${name}\nCorreo de contacto: ${email}\n\nMensaje:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Error interno del servidor al procesar el mensaje.' },
      { status: 500 }
    );
  }
}
