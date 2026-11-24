/**
 * Gera public/sitemap.xml a partir de src/config/routes.js e
 * public/sitemap-videos.xml a partir de src/content/videos/videos.js.
 *
 * Antes o sitemap era escrito a mao e tinha de ser lembrado a cada pagina nova.
 * Passando a ser gerado, uma rota nova entra no sitemap sozinha.
 *
 * O sitemap de videos e um segundo ficheiro, e nao mais umas linhas no
 * primeiro, porque o Google so le os campos de video (miniatura, leitor,
 * duracao) num sitemap que declare o espaco de nomes de video. As paginas dos
 * videos continuam tambem no sitemap normal: um URL em dois sitemaps nao e
 * problema, e assim nenhum dos dois fica com um buraco.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { ROUTES } = await import(pathToFileURL(path.join(root, 'src', 'config', 'routes.js')).href);
const videos = await import(pathToFileURL(path.join(root, 'src', 'content', 'videos', 'videos.js')).href);

const BASE = 'https://www.evolucom.pt';
const lastmod = new Date().toISOString().slice(0, 10);

/** Escapa o que nao pode ir cru dentro de um elemento XML. */
const esc = (texto) =>
  String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

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

/* ---------------------------------------------------------------------------
   Sitemap de videos
   --------------------------------------------------------------------------- */

const { VIDEOS, videoPath, videoCover, videoEmbedUrl, videoIsoDate } = videos;

const corpoVideos = VIDEOS.map((v) => {
  const capa = videoCover(v);
  return [
    '  <url>',
    `    <loc>${BASE}${videoPath(v.slug)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    '    <video:video>',
    `      <video:thumbnail_loc>${esc(capa.startsWith('http') ? capa : BASE + capa)}</video:thumbnail_loc>`,
    `      <video:title>${esc(v.title)}</video:title>`,
    `      <video:description>${esc(v.description)}</video:description>`,
    `      <video:player_loc>${esc(videoEmbedUrl(v))}</video:player_loc>`,
    `      <video:publication_date>${videoIsoDate(v)}</video:publication_date>`,
    '      <video:family_friendly>yes</video:family_friendly>',
    '      <video:requires_subscription>no</video:requires_subscription>',
    '      <video:live>no</video:live>',
    `      <video:platform relationship="allow">web mobile tv</video:platform>`,
    '    </video:video>',
    '  </url>',
  ].join('\n');
}).join('\n');

const xmlVideos = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Gerado por scripts/sitemap.mjs a partir de src/content/videos/videos.js. Nao editar a mao. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${corpoVideos}
</urlset>
`;

await fs.writeFile(path.join(root, 'public', 'sitemap-videos.xml'), xmlVideos, 'utf8');
console.log(`sitemap-videos.xml gerado com ${VIDEOS.length} videos`);
