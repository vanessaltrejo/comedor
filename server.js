/**
 * @fileoverview Main entry point for the Express application.
 */

require('dotenv').config();
const express = require('express');
const path = require('path');
const { Resend } = require('resend');

// Usamos un string de fallback para que no crashee todo el servidor si olvidas poner la variable en Cloud Run
const resend = new Resend(process.env.RESEND_API_KEY || 're_missing_key');

/** @type {import('express').Application} */
const app = express();

/** @type {number | string} */
const port = process.env.PORT || 8080;

// ----- View Engine Setup -----
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ----- Static Middleware -----
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// ----- Core Routes -----
app.get('/', (req, res) => res.render('index', { activePage: 'index' }));
app.get('/index.html', (req, res) => res.render('index', { activePage: 'index' }));

/** @type {string[]} */
const pageRoutes = [
    'contactanos',
    'cuentas',
    'donar',
    'informe',
    'nosotros',
    'comedores'
];

pageRoutes.forEach((page) => {
    app.get(`/${page}`, (req, res) => res.render(page, { activePage: page }));
    app.get(`/${page}.html`, (req, res) => res.render(page, { activePage: page }));
});

// ----- Contact Form Route -----
app.post('/enviar-contacto', async (req, res) => {
    const { nombre, correo, asunto, mensaje } = req.body;
    try {
        const data = await resend.emails.send({
            from: 'Comedor de los Pobres <onboarding@resend.dev>',
            to: 'vanessalt08@gmail.com',
            subject: `Nuevo mensaje web: ${asunto}`,
            html: `
                <h2>Nuevo mensaje desde la web</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Correo:</strong> ${correo}</p>
                <p><strong>Asunto:</strong> ${asunto}</p>
                <p><strong>Mensaje:</strong><br/> ${mensaje}</p>
            `
        });
        
        if (data.error) {
            console.error('Error de Resend:', data.error);
            return res.render('contactanos', { activePage: 'contactanos', status: 'error' });
        }
        
        res.render('contactanos', { activePage: 'contactanos', status: 'success' });
    } catch (error) {
        console.error('Error enviando correo:', error);
        res.render('contactanos', { activePage: 'contactanos', status: 'error' });
    }
});

// ----- Error Handler Middleware -----
app.use((req, res) => {
    res.status(404).render('index', { activePage: 'index' });
});

// ----- Server Initialization -----
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
