/**
 * Lista unica das rotas publicas do site.
 *
 * Serve tres consumidores, para que nunca fiquem dessincronizados:
 *  - scripts/prerender.mjs, que gera um ficheiro HTML por rota
 *  - scripts/sitemap.mjs, que gera o public/sitemap.xml
 *  - as ligacoes internas que precisem de percorrer as paginas por tema
 *
 * Ao adicionar uma rota nova em src/AppShell.jsx, acrescentar aqui tambem.
 * priority e changefreq existem so para o sitemap.
 */
export const ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },

  // Paginas orientadas ao problema que a pessoa escreve no Google
  { path: '/humidade-nas-paredes', priority: '0.95', changefreq: 'monthly' },
  { path: '/aquecimento-sem-obras', priority: '0.95', changefreq: 'monthly' },
  { path: '/casa-quente-no-verao', priority: '0.95', changefreq: 'monthly' },
  { path: '/reduzir-custos-aquecimento', priority: '0.95', changefreq: 'monthly' },
  { path: '/aquecimento-exterior', priority: '0.95', changefreq: 'monthly' },
  { path: '/isolamento-termico', priority: '0.95', changefreq: 'monthly' },

  // Produtos
  { path: '/products', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/piso-radiante', priority: '0.95', changefreq: 'monthly' },
  { path: '/products/esquentadores', priority: '0.95', changefreq: 'monthly' },
  { path: '/products/climatecoating', priority: '0.9', changefreq: 'monthly' },
  { path: '/products/drymat', priority: '0.9', changefreq: 'monthly' },
  { path: '/products/duotherm', priority: '0.9', changefreq: 'monthly' },
  { path: '/products/bioclimatizadores', priority: '0.85', changefreq: 'monthly' },
  { path: '/products/solamagic', priority: '0.85', changefreq: 'monthly' },
  { path: '/products/comfortsun', priority: '0.85', changefreq: 'monthly' },
  { path: '/products/comfortsun/professional', priority: '0.7', changefreq: 'monthly' },
  { path: '/products/comfortsun/deluxe', priority: '0.7', changefreq: 'monthly' },
  { path: '/products/comfortsun/especializado', priority: '0.7', changefreq: 'monthly' },
  { path: '/products/comfortsun/polivalente', priority: '0.7', changefreq: 'monthly' },
  { path: '/products/eco-fireplaces', priority: '0.7', changefreq: 'monthly' },

  // Solucoes, orientadas a empresas e prescritores
  { path: '/solutions', priority: '0.75', changefreq: 'monthly' },
  { path: '/solutions/eliminate-moisture', priority: '0.8', changefreq: 'monthly' },
  { path: '/solutions/reduce-heating-costs', priority: '0.8', changefreq: 'monthly' },
  { path: '/solutions/outdoor-comfort', priority: '0.8', changefreq: 'monthly' },
  { path: '/solutions/sustainable-business', priority: '0.8', changefreq: 'monthly' },
  { path: '/solutions/natural-cooling', priority: '0.8', changefreq: 'monthly' },

  // Versao inglesa das solucoes, para procura internacional e residentes
  // estrangeiros. Prioridade mais baixa: o mercado principal e Portugal.
  { path: '/en/solutions', priority: '0.6', changefreq: 'monthly' },
  { path: '/en/solutions/eliminate-moisture', priority: '0.6', changefreq: 'monthly' },
  { path: '/en/solutions/reduce-heating-costs', priority: '0.6', changefreq: 'monthly' },
  { path: '/en/solutions/outdoor-comfort', priority: '0.6', changefreq: 'monthly' },
  { path: '/en/solutions/sustainable-business', priority: '0.6', changefreq: 'monthly' },
  { path: '/en/solutions/natural-cooling', priority: '0.6', changefreq: 'monthly' },

  // Ferramentas
  { path: '/simulador', priority: '0.9', changefreq: 'monthly' },

  // Regioes
  { path: '/algarve', priority: '0.8', changefreq: 'monthly' },
  { path: '/lisboa', priority: '0.8', changefreq: 'monthly' },
  { path: '/porto', priority: '0.8', changefreq: 'monthly' },
  { path: '/madeira-acores', priority: '0.8', changefreq: 'monthly' },

  // Institucional
  { path: '/about', priority: '0.6', changefreq: 'yearly' },
  { path: '/contact', priority: '0.7', changefreq: 'yearly' },
  { path: '/real-estate', priority: '0.7', changefreq: 'monthly' },
  { path: '/faqs', priority: '0.6', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
];

export const ROUTE_PATHS = ROUTES.map((r) => r.path);

/**
 * Pares de paginas equivalentes em portugues e ingles.
 *
 * Cada pagina de um par declara as duas versoes ao Google com hreflang, para
 * que nao sejam tratadas como conteudo duplicado e para que a versao inglesa
 * apareca a quem pesquisa em ingles.
 */
export const ALTERNATES = {
  '/solutions': { pt: '/solutions', en: '/en/solutions' },
  '/solutions/eliminate-moisture': { pt: '/solutions/eliminate-moisture', en: '/en/solutions/eliminate-moisture' },
  '/solutions/reduce-heating-costs': { pt: '/solutions/reduce-heating-costs', en: '/en/solutions/reduce-heating-costs' },
  '/solutions/outdoor-comfort': { pt: '/solutions/outdoor-comfort', en: '/en/solutions/outdoor-comfort' },
  '/solutions/sustainable-business': { pt: '/solutions/sustainable-business', en: '/en/solutions/sustainable-business' },
  '/solutions/natural-cooling': { pt: '/solutions/natural-cooling', en: '/en/solutions/natural-cooling' },
};

/** Devolve o par de traducao de um caminho, ou null se a pagina for so em portugues. */
export function alternatesFor(path) {
  const chave = path.startsWith('/en/') ? path.slice(3) : path;
  return ALTERNATES[chave] || null;
}
