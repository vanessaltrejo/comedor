import type { Config } from "tailwindcss";

const config: Config = {
  // Escanea los archivos de la nueva app Next.js para el purge automático de clases.
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // Breakpoint personalizado heredado de la versión EJS.
        xs: "420px",
      },
    },
  },
  plugins: [],
};

export default config;
