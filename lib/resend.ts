import { Resend } from "resend";

let resendClient: Resend | undefined;

/**
 * Devuelve el cliente único de Resend, creándolo hasta el primer uso real
 * (no al importar el módulo) para que la ausencia de RESEND_API_KEY nunca
 * pueda romper el build, solo la petición que de verdad intente enviar
 * un correo.
 */
export function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Falta la variable de entorno RESEND_API_KEY.");
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}
