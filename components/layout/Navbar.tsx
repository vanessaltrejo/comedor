"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import type { NavLink } from "@/types/navigation.types";

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/comedores", label: "Comedores" },
  { href: "/informe", label: "Informe" },
  { href: "/contactanos", label: "Contáctanos" },
];

export function Navbar() {
  const pathname = usePathname();
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <>
      <nav className="navbar-brand-bg fixed inset-x-0 top-0 z-[110]">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex justify-between items-center gap-3">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
              <Image
                src="/imagenes/logomorado-navbar.png"
                alt="Logo"
                width={40}
                height={40}
                priority
                unoptimized
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-[19px] text-white">
                Juan XXIII
              </span>
              <span className="text-[10px] text-orange-300 font-bold tracking-wide">
                Comedor de los Pobres
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-bold ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donar"
              className="px-6 py-2.5 bg-orange-500 text-white rounded-lg font-black text-sm hover:bg-orange-600 transition cursor-pointer inline-flex items-center active:scale-95 duration-200"
            >
              Donar
            </Link>
          </div>

          <button
            type="button"
            onClick={toggle}
            className="lg:hidden relative z-[120] p-2 -mr-2 rounded-xl text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? (
              <i className="fas fa-times text-2xl" aria-hidden="true" />
            ) : (
              <i className="fas fa-bars text-2xl" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      <div aria-hidden="true" className="h-[67px] sm:h-[73px]" />

      <MobileMenu isOpen={isOpen} onClose={close} navLinks={NAV_LINKS} />
    </>
  );
}
