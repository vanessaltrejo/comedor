"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/types/navigation.types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <div
      id="mobile-menu"
      className={`lg:hidden fixed inset-0 z-[100] ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        id="mobile-menu-backdrop"
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
      <div
        id="mobile-menu-panel"
        className={`absolute top-14 sm:top-16 left-0 right-0 w-full max-h-[calc(100dvh-3.5rem)] sm:max-h-[calc(100dvh-4rem)] bg-white shadow-xl rounded-b-3xl border-x border-b border-purple-100/80 transition-all duration-200 ease-out overflow-y-auto overscroll-contain pb-[max(1rem,env(safe-area-inset-bottom))] ${
          isOpen ? "translate-y-0" : "-translate-y-full invisible"
        }`}
      >
        <nav className="flex flex-col px-4 pt-8 pb-4 gap-1" aria-label="Menú principal">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`mobile-nav-link py-3 px-4 rounded-xl text-sm font-bold ${
                  isActive
                    ? "text-purple-600 bg-purple-50 border-l-4 border-orange-500"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/donar"
            onClick={onClose}
            className="mt-4 mx-1 block py-3.5 text-center bg-orange-500 text-white rounded-2xl font-black text-sm hover:bg-orange-600 transition shadow-lg shadow-orange-200"
          >
            DONAR
          </Link>
        </nav>
      </div>
    </div>
  );
}
