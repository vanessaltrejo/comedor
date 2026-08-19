import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const DEFAULT_TITLE = "Comedor de los Pobres";
const DEFAULT_DESCRIPTION =
  "Asociación Juan XXIII - Comedor de los Pobres P. Roberto Infante en Nuevo León.";
const DEFAULT_OG_IMAGE = "/imagenes/logomorado.png";

/**
 * URL base para resolver las imágenes de OpenGraph/Twitter a URLs absolutas.
 * Sin esto, al compartir el sitio la vista previa apuntaría a localhost.
 * En Vercel se toma del dominio de producción automáticamente; en local
 * cae a localhost. Para un dominio propio, definir NEXT_PUBLIC_SITE_URL.
 */
function resolveSiteUrl(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }
  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: resolveSiteUrl(),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: "/imagenes/logomorado.png",
  },
  openGraph: {
    type: "website",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Preconnect: acelera DNS lookup de iconos (fuente ya autohospedada por next/font) */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        {/* Font Awesome (se conserva vía CDN para mantener paridad visual exacta) */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
