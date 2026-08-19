import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada - Comedor de los Pobres",
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-20">
      <div className="max-w-xl text-center">
        <span className="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-4 block">
          Error 404
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-purple-900 mb-6">
          Esta página no{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500">
            existe
          </span>
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-10">
          Es posible que la dirección haya cambiado o que el enlace esté incompleto. Te invitamos a
          volver al inicio para seguir conociendo nuestra labor.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-4 bg-purple-600 text-white rounded-full font-black text-sm hover:bg-purple-700 transition shadow-lg shadow-purple-200 uppercase tracking-widest"
          >
            Ir al Inicio
          </Link>
          <Link
            href="/contactanos"
            className="px-8 py-4 bg-white text-purple-600 rounded-full border border-purple-200 font-black text-sm hover:bg-purple-50/50 transition uppercase tracking-widest"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </main>
  );
}
