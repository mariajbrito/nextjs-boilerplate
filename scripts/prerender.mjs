/**
 * Gera um ficheiro HTML real por rota, a partir do build de cliente (dist/) e do
 * build de servidor (dist-ssr/).
 *
 * Porque isto existe: o site e uma SPA, e sem este passo o Vercel devolvia o
 * mesmo dist/index.html para os 40 URLs, com o title, a description e o
 * canonical da homepage. O Google indexava paginas internas com os metadados
 * errados. Com um HTML por rota, cada URL passa a responder com o seu conteudo
 * e os seus metadados sem depender de JavaScript.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');

// import() em Windows exige URL file://, nao um caminho absoluto com letra de unidade
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);
const { ROUTES } = await import(pathToFileURL(path.join(root, 'src', 'config', 'routes.js')).href);

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

const HEAD_START = '<!--app-head-start-->';
const HEAD_END = '<!--app-head-end-->';
const BODY_MARK = '<!--app-html-->';

for (const mark of [HEAD_START, HEAD_END, BODY_MARK]) {
  if (!template.includes(mark)) {
    // Acontece ao correr este script isolado: a passagem anterior ja substituiu
    // os marcadores em dist/index.html pelas tags da homepage. E preciso deixar o
    // vite build reescrever o template a partir do index.html da raiz.
    throw new Error(
      `dist/index.html sem o marcador ${mark}. Corre "npm run build", que reconstroi o template antes de pre-renderizar.`
    );
  }
}

/** Substitui a regiao entre os marcadores de head pelas tags da pagina. */
function injectHead(html, head) {
  const from = html.indexOf(HEAD_START);
  const to = html.indexOf(HEAD_END) + HEAD_END.length;
  return html.slice(0, from) + head + html.slice(to);
}

/** '/' -> 'index.html'; '/products/drymat' -> 'products/drymat/index.html' */
function outputFile(routePath) {
  if (routePath === '/') return 'index.html';
  return path.join(routePath.replace(/^\//, ''), 'index.html');
}

const failures = [];
const avisos = [];
let written = 0;

for (const { path: routePath } of ROUTES) {
  let result;
  try {
    result = await render(routePath);
  } catch (err) {
    failures.push(`${routePath}: erro a renderizar (${err.message})`);
    continue;
  }

  // Uma rota que caia no NotFoundPage esta em src/config/routes.js mas nao em
  // src/AppShell.jsx. Falhar aqui evita publicar uma pagina vazia sem se notar.
  if (result.head.includes('Página não encontrada')) {
    failures.push(`${routePath}: caiu na pagina 404, falta a rota em src/AppShell.jsx`);
    continue;
  }
  if (!result.head.includes('rel="canonical"')) {
    failures.push(`${routePath}: sem canonical, falta o SEOHead na pagina`);
    continue;
  }

  // Um title com mais de 60 caracteres e cortado no resultado de pesquisa, e o
  // que fica de fora e normalmente o termo que trazia as impressoes.
  const titleText = (result.head.match(/<title[^>]*>([^]*?)<\/title>/) || [])[1] || "";
  if (titleText.length > 62) {
    avisos.push(`${routePath}: title com ${titleText.length} caracteres, sera cortado na pesquisa`);
  }

  const outFile = path.join(distDir, outputFile(routePath));
  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(
    outFile,
    injectHead(template, result.head).replace(BODY_MARK, result.html),
    'utf8'
  );
  written += 1;
  console.log(`  ${routePath.padEnd(42)} -> ${path.relative(root, outFile)}`);
}

// Rede de seguranca da SPA: qualquer URL sem ficheiro proprio cai aqui pelo
// rewrite do vercel.json. A app continua a funcionar no browser, mas a pagina
// vai marcada como noindex para o Google nunca indexar um canonical errado.
const ROBOTS_GLOBAL =
  '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />';
if (!template.includes(ROBOTS_GLOBAL)) {
  throw new Error('index.html sem a meta robots global, o app-shell ficaria indexavel');
}

// Substituir a diretiva global em vez de acrescentar uma segunda: duas metas
// robots contraditorias no mesmo documento sao ambiguas para o Google.
const shell = injectHead(template, '<title>Evoluimos Comércio</title>')
  .replace(ROBOTS_GLOBAL, '<meta name="robots" content="noindex, nofollow" />')
  .replace(BODY_MARK, '');
await fs.writeFile(path.join(distDir, 'app-shell.html'), shell, 'utf8');

console.log(`\npre-renderizadas ${written}/${ROUTES.length} rotas, mais app-shell.html`);

if (avisos.length) {
  console.warn("");
  console.warn("avisos de SEO:");
  avisos.forEach((a) => console.warn("  " + a));
}

if (failures.length) {
  console.error('\nfalhas:');
  failures.forEach((f) => console.error('  ' + f));
  process.exit(1);
}
