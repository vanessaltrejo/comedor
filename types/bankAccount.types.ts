export interface BankAccountNumber {
  /** Valor con el formato visual del diseño (con espacios o guiones). */
  display: string;
  /** Solo dígitos, sin separadores: es lo que se copia al portapapeles. */
  raw: string;
}

export interface BankAccount {
  bankName: string;
  account: BankAccountNumber;
  clabe: BankAccountNumber;
}
