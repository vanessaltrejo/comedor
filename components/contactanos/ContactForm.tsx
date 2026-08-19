"use client";

import type { FormEvent } from "react";
import { revealDelay } from "@/lib/scrollRevealStyle";

const LABEL_CLASSES = "text-[10px] font-black text-gray-400 uppercase block mb-2 ml-1";

/**
 * Formulario de contacto sin backend todavía: el submit solo hace
 * preventDefault, igual que el original. Cuando exista el servicio real,
 * este es el único componente que necesita cambiar.
 */
export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <div className="contact-card scroll-reveal" style={revealDelay(100)}>
      <h2 className="text-2xl font-black text-purple-900 mb-8">Envía un mensaje</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
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

        <div>
          <label htmlFor="mensaje" className={LABEL_CLASSES}>
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            className="input-field h-40 resize-none"
            placeholder="Escribe aquí tus comentarios..."
            required
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-end gap-6 pt-4">
          <button
            type="submit"
            className="w-full md:w-auto px-10 py-4 bg-purple-600 text-white rounded-full font-black text-sm hover:bg-purple-700 transition shadow-xl shadow-purple-100 uppercase tracking-widest"
          >
            Enviar Formulario
          </button>
        </div>
      </form>
    </div>
  );
}
