/**
 * Gera public/sitemap.xml a partir de src/config/routes.js.
 *
 * Antes o sitemap era escrito a mao e tinha de ser lembrado a cada pagina nova.
 * Passando a ser gerado, uma rota nova entra no sitemap sozinha.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { ROUTES } = await import(pathToFileURL(path.join(root, 'src', 'config', 'routes.js')).href);

const BASE = 'https://www.evolucom.pt';
const lastmod = new Date().toISOString().slice(0, 10);

const body = ROUTES.map(({ path: p, priority, changefreq }) => {
  const loc = p === '/' ? `${BASE}/` : `${BASE}${p}`;
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Gerado por scripts/sitemap.mjs a partir de src/config/routes.js. Nao editar a mao. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

await fs.writeFile(path.join(root, 'public', 'sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml gerado com ${ROUTES.length} URLs`);
