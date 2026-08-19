import type { BankAccount } from "@/types/bankAccount.types";

/**
 * Fuente única de los datos bancarios. Cada número guarda junto su formato
 * visual (`display`) y su versión copiable (`raw`), para que no puedan
 * quedar desincronizados: se muestra y se copia siempre el mismo número.
 */
export const BANBAJIO_ACCOUNT: BankAccount = {
  bankName: "BanBajío",
  account: { display: "014 597 637 0201", raw: "0145976370201" },
  clabe: { display: "030 580 9000 0628 1824", raw: "030580900006281824" },
};

export const AFIRME_ACCOUNT: BankAccount = {
  bankName: "AFIRME",
  account: { display: "101-118-754", raw: "101118754" },
  clabe: { display: "062 580 0010 1118 7547", raw: "062580001011187547" },
};
