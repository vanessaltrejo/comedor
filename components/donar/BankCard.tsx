"use client";

import type { ReactNode } from "react";
import { CopyBadge } from "@/components/donar/CopyBadge";
import { revealDelay } from "@/lib/scrollRevealStyle";
import type { BankAccount } from "@/types/bankAccount.types";

interface BankCardProps {
  bank: BankAccount;
  /** Etiqueta de orden que muestra el diseño, p. ej. "Opción 01". */
  optionLabel: string;
  /** Logo o inicial del banco. */
  logo: ReactNode;
  /** Clases Tailwind que definen el acento de color de la tarjeta. */
  accentClasses: {
    topBorder: string;
    corner: string;
    logoBox: string;
    badge: string;
  };
  revealDelayMs: number;
  onCopy: (value: string, label: string) => void;
}

export function BankCard({
  bank,
  optionLabel,
  logo,
  accentClasses,
  revealDelayMs,
  onCopy,
}: BankCardProps) {
  return (
    <div
      className={`bank-card-premium p-8 relative overflow-hidden border-t-8 ${accentClasses.topBorder} flex flex-col justify-between scroll-reveal`}
      style={revealDelay(revealDelayMs)}
    >
      <div
        className={`absolute top-0 right-0 w-24 h-24 ${accentClasses.corner} rounded-bl-full pointer-events-none`}
      />
      <div>
        <div className="flex justify-between items-start mb-6">
          <div
            className={`w-12 h-12 ${accentClasses.logoBox} rounded-2xl flex items-center justify-center shadow-inner`}
          >
            {logo}
          </div>
          <span
            className={`text-[10px] font-black ${accentClasses.badge} px-2.5 py-1 rounded-full uppercase tracking-widest`}
          >
            {optionLabel}
          </span>
        </div>

        <h3 className="text-2xl font-black text-purple-900 mb-6">{bank.bankName}</h3>

        <div className="space-y-6">
          <div>
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">
              Número de Cuenta
            </label>
            <CopyBadge
              displayValue={bank.account.display}
              onCopy={() => onCopy(bank.account.raw, `Número de Cuenta (${bank.bankName})`)}
            />
          </div>
          <div>
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">
              CLABE Interbancaria
            </label>
            <CopyBadge
              displayValue={bank.clabe.display}
              onCopy={() => onCopy(bank.clabe.raw, `CLABE (${bank.bankName})`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
