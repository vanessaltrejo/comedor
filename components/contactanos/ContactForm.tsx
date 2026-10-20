"use client";

import { useState, type FormEvent } from "react";
import { Toast } from "@/components/ui/Toast";
import { useToast } from "@/hooks/useToast";
import { revealDelay } from "@/lib/scrollRevealStyle";
import type { ContactFormData } from "@/types/contactForm.types";

const LABEL_CLASSES = "mb-1.5 ml-1 block text-sm font-black text-gray-500";

function readFormData(form: HTMLFormElement): ContactFormData {
  const formData = new FormData(form);
  return {
    nombre: String(formData.get("nombre") ?? ""),
    correo: String(formData.get("correo") ?? ""),
    asunto: String(formData.get("asunto") ?? ""),
    mensaje: String(formData.get("mensaje") ?? ""),
  };
}

export function ContactForm() {
  const { toast, showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const form = event.currentTarget;
    const data = readFormData(form);

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("La respuesta del servidor no fue exitosa.");
      }

      showToast("¡Mensaje enviado!", "Gracias por escribirnos, te responderemos pronto.");
      form.reset();
    } catch (error) {
      // console.warn (no console.error) a propósito: el servidor ya registra el
      // detalle real del fallo, y este catch ya lo muestra al usuario con el
      // toast. Usar console.error aquí dispararía el overlay rojo de Next.js
      // en modo desarrollo para un error que ya está controlado.
      console.warn("Error al enviar el formulario de contacto: ", error);
      showToast("No se pudo enviar", "Intenta de nuevo o escríbenos por WhatsApp.", "error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div
        className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-100 p-6 shadow-xl md:p-8 scroll-reveal"
        style={revealDelay(100)}
      >
        <h2 className="mb-5 flex items-center gap-3 text-2xl font-black text-brand">
          <i className="pillar-icon fas fa-paper-plane text-3xl text-brand" aria-hidden="true" />
          Envía un mensaje
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="nombre" className={LABEL_CLASSES}>
                Nombre Completo
              </label>
              <input
                id="nombre"
                type="text"
                name="nombre"
                className="input-field"
                placeholder="Ej. Juan Pérez"
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label htmlFor="correo" className={LABEL_CLASSES}>
                Correo Electrónico
              </label>
              <input
                id="correo"
                type="email"
                name="correo"
                className="input-field"
                placeholder="ejemplo@correo.com"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="asunto" className={LABEL_CLASSES}>
              Asunto
            </label>
            <input
              id="asunto"
              type="text"
              name="asunto"
              className="input-field"
              placeholder="¿En qué podemos ayudarte?"
              required
            />
          </div>

          <div className="flex flex-1 flex-col">
            <label htmlFor="mensaje" className={LABEL_CLASSES}>
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              className="input-field min-h-32 flex-1 resize-none"
              placeholder="Escribe aquí tus comentarios..."
              required
            />
          </div>

          <div className="flex flex-col items-center justify-end md:flex-row">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-10 py-3.5 bg-brand text-white rounded-lg font-black text-sm hover:bg-brand-dark transition shadow-xl shadow-purple-100 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar Formulario"}
            </button>
          </div>
        </form>
      </div>

      <Toast title={toast.title} message={toast.message} isVisible={toast.isVisible} variant={toast.variant} />
    </>
  );
}
