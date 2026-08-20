/**
 * URL base de producción del sitio. En Vercel se toma del dominio de
 * producción automáticamente; en local cae a localhost. Para un dominio
 * propio distinto, definir NEXT_PUBLIC_SITE_URL.
 */
export function resolveSiteUrl(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }
  return new URL("http://localhost:3000");
}
