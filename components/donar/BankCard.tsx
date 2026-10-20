"use client";

import type { ReactNode } from "react";
import { CopyBadge } from "@/components/donar/CopyBadge";
import { toneCardClasses, toneIconClasses } from "@/components/ui/cardTones";
import { revealDelay } from "@/lib/scrollRevealStyle";
import type { BankAccount } from "@/types/bankAccount.types";
import type { CardTone } from "@/types/cardTone.types";

interface BankCardProps {
  bank: BankAccount;
  /** Etiqueta de orden que muestra el diseño, p. ej. "Opción 01". */
  optionLabel: string;
  /** Logo o inicial del banco (se pinta como ícono suelto, sin recuadro). */
  logo: ReactNode;
  /** Familia de color de la tarjeta (fondo, ícono y sombra). */
  tone: CardTone;
  revealDelayMs: number;
  onCopy: (value: string, label: string) => void;
}

const FIELD_LABEL_CLASSES = "mb-2 ml-2 block text-sm font-black text-gray-500";

export function BankCard({ bank, optionLabel, logo, tone, revealDelayMs, onCopy }: BankCardProps) {
  return (
    <div
      className={`${toneCardClasses(tone, "rounded-3xl")} flex flex-col p-7 scroll-reveal`}
      style={revealDelay(revealDelayMs)}
    >
      <div className="mb-6 flex items-center justify-between gap-3">
        <h3 className="flex items-center gap-3 text-2xl font-black text-brand">
          <span className={`pillar-icon text-3xl leading-none ${toneIconClasses(tone)}`}>{logo}</span>
          {bank.bankName}
        </h3>
        <span className={`rounded-full bg-white/80 px-3 py-1 text-sm font-black ring-1 ring-black/5 ${toneIconClasses(tone)}`}>
          {optionLabel}
        </span>
      </div>

      <div className="space-y-5">
        <div>
          <label className={FIELD_LABEL_CLASSES}>Número de Cuenta</label>
          <CopyBadge
            displayValue={bank.account.display}
            onCopy={() => onCopy(bank.account.raw, `Número de Cuenta (${bank.bankName})`)}
          />
        </div>
        <div>
          <label className={FIELD_LABEL_CLASSES}>CLABE Interbancaria</label>
          <CopyBadge
            displayValue={bank.clabe.display}
            onCopy={() => onCopy(bank.clabe.raw, `CLABE (${bank.bankName})`)}
          />
        </div>
      </div>
    </div>
  );
}
