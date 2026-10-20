import type { Config } from "tailwindcss";

const config: Config = {
  // Escanea los archivos de la nueva app Next.js para el purge automático de clases.
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    // Class names also live in the data files (e.g. bar colours in informe.data.ts).
    "./services/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand purple: channels are defined once in app/globals.css (:root --brand-*-rgb).
        brand: {
          DEFAULT: "rgb(var(--brand-rgb) / <alpha-value>)",
          light: "rgb(var(--brand-light-rgb) / <alpha-value>)",
          dark: "rgb(var(--brand-dark-rgb) / <alpha-value>)",
        },
      },
      screens: {
        // Breakpoint personalizado heredado de la versión EJS.
        xs: "420px",
      },
    },
  },
  plugins: [],
};

export default config;
