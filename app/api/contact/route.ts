import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";
import type { ContactFormData } from "@/types/contactForm.types";

// El remitente debe pertenecer al dominio ya verificado en Resend.
const FROM_ADDRESS = "Comedor de los Pobres <unete@comedordelospobres.org>";
const TO_ADDRESS = "carlos.lopez@comedordelospobres.org";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseContactFormData(body: unknown): ContactFormData | null {
  if (typeof body !== "object" || body === null) return null;

  const { nombre, correo, asunto, mensaje } = body as Record<string, unknown>;

  if (
    typeof nombre !== "string" ||
    typeof correo !== "string" ||
    typeof asunto !== "string" ||
    typeof mensaje !== "string"
  ) {
    return null;
  }

  const trimmed: ContactFormData = {
    nombre: nombre.trim(),
    correo: correo.trim(),
    asunto: asunto.trim(),
    mensaje: mensaje.trim(),
  };

  if (!trimmed.nombre || !trimmed.asunto || !trimmed.mensaje || !EMAIL_REGEX.test(trimmed.correo)) {
    return null;
  }

  return trimmed;
}

function buildEmailHtml(data: ContactFormData): string {
  return `
    <div style="font-family: sans-serif; font-size: 15px; color: #1f2937;">
      <h2 style="color: #7c3aed;">Nuevo mensaje desde comedordelospobres.org</h2>
      <p><strong>Nombre:</strong> ${data.nombre}</p>
      <p><strong>Correo:</strong> ${data.correo}</p>
      <p><strong>Asunto:</strong> ${data.asunto}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="white-space: pre-wrap;">${data.mensaje}</p>
    </div>
  `;
}

export async function POST(request: Request): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo de la petición inválido." }, { status: 400 });
  }

  const data = parseContactFormData(body);
  if (!data) {
    return NextResponse.json({ error: "Faltan campos o el correo no es válido." }, { status: 400 });
  }

  try {
    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: data.correo,
      subject: `[Contacto] ${data.asunto}`,
      html: buildEmailHtml(data),
    });

    if (error) {
      console.error("Error al enviar correo con Resend:", error);
      return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error inesperado al enviar el formulario de contacto:", error);
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 500 });
  }
}
