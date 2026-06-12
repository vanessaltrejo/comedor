/**
 * @fileoverview Script de optimización de imágenes para producción.
 * Convierte imágenes pesadas a formato WebP con redimensionado máximo.
 *
 * Uso: node scripts/optimize-images.js
 *
 * NOTA: Después de ejecutar y verificar, los originales pueden eliminarse.
 * Los archivos .webp son el formato canónico del proyecto (WebP es
 * Baseline Widely Available desde 2023, soportado por todos los navegadores modernos).
 */

'use strict';

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'imagenes');

/**
 * Imágenes a optimizar.
 * - src: ruta relativa desde IMAGES_DIR
 * - maxWidth: ancho máximo en píxeles (se mantiene proporción, sin upscaling)
 * - quality: calidad WebP (0–100). 82 es un buen balance calidad/tamaño.
 */
const TARGETS = [
    // ── Hero / LCP image ──────────────────────────────────────────
    { src: 'fotoportada.png',               maxWidth: 1200, quality: 85 },

    // ── Video thumbnails (section "Acciones que Dejan Huella") ────
    { src: 'video-institucional.png',       maxWidth: 1200, quality: 82 },
    { src: 'nuestra-directora.png',         maxWidth: 1200, quality: 82 },
    { src: 'comedor-unidad-escobedo.png',   maxWidth: 1200, quality: 82 },

    // ── Carousel slides ───────────────────────────────────────────
    { src: 'correyalimenta.png',            maxWidth: 900,  quality: 82 },
    { src: 'informeactividades.png',        maxWidth: 900,  quality: 82 },

    // ── Informe page ──────────────────────────────────────────────
    { src: 'programa-pet.png',              maxWidth: 900,  quality: 82 },
    { src: 'apoyo-comunidad.png',           maxWidth: 900,  quality: 82 },

    // ── Galería Comedor Escobedo (solo la pesada) ─────────────────
    { src: 'Comedor Escobedo/CE.6.jpg',     maxWidth: 900,  quality: 82 },

    // ── Galería Comedor Juárez (archivos pesados) ─────────────────
    { src: 'Comedor Juarez/CJ.3.jpg',       maxWidth: 900,  quality: 82 },
    { src: 'Comedor Juarez/CJ.4.jpg',       maxWidth: 900,  quality: 82 },
    { src: 'Comedor Juarez/CJ.5.png',       maxWidth: 900,  quality: 82 },
];

/**
 * Convierte una imagen a WebP y la guarda junto al original.
 * @param {{ src: string, maxWidth: number, quality: number }} target
 * @returns {Promise<void>}
 */
async function convertToWebP(target) {
    const inputPath = path.join(IMAGES_DIR, target.src);
    const ext = path.extname(target.src);
    const outputPath = path.join(IMAGES_DIR, target.src.replace(ext, '.webp'));

    if (!fs.existsSync(inputPath)) {
        console.warn(`  ⚠  No encontrada: ${target.src} — omitiendo`);
        return;
    }

    const before = fs.statSync(inputPath).size;

    await sharp(inputPath)
        .resize({ width: target.maxWidth, withoutEnlargement: true })
        .webp({ quality: target.quality })
        .toFile(outputPath);

    const after = fs.statSync(outputPath).size;
    const saved = (((before - after) / before) * 100).toFixed(1);

    console.log(
        `  ✓  ${target.src}\n` +
        `     ${(before / 1024 / 1024).toFixed(2)} MB → ${(after / 1024).toFixed(0)} KB  (−${saved}%)`
    );
}

async function main() {
    console.log('\n🖼  Iniciando optimización de imágenes...\n');

    for (const target of TARGETS) {
        await convertToWebP(target);
    }

    console.log('\n✅  Optimización completada.\n');
}

main().catch((err) => {
    console.error('\n❌  Error durante la optimización:', err);
    process.exit(1);
});
