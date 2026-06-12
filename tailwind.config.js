/** @type {import('tailwindcss').Config} */
module.exports = {
    // Escanea todos los templates EJS para detectar clases usadas (purging automático)
    content: [
        './views/**/*.ejs',
    ],
    theme: {
        extend: {
            screens: {
                // Breakpoint personalizado que usaban los templates
                xs: '420px',
            },
        },
    },
    plugins: [],
};
