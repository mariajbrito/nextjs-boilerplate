/**
 * Registo dos artigos do blogue.
 *
 * Este ficheiro e propositadamente JavaScript simples, sem JSX e sem o alias
 * "@/": alem do browser, e importado diretamente pelo Node em
 * scripts/sitemap.mjs e scripts/prerender.mjs, atraves de src/config/routes.js.
 * Meter JSX aqui partia o build.
 *
 * O texto de cada artigo vive num componente proprio em src/content/blog/,
 * associado ao slug pelo registo em src/content/blog/bodies.jsx.
 *
 * PARA PUBLICAR UM ARTIGO NOVO, bastam dois passos:
 *   1. acrescentar uma entrada no inicio de POSTS, aqui em baixo
 *   2. criar o ficheiro com o texto em src/content/blog/ e regista-lo em
 *      src/content/blog/bodies.jsx, com o mesmo slug
 *
 * A rota, o sitemap, a pagina pre-renderizada, a listagem e os dados
 * estruturados passam a existir sozinhos.
 *
 * Campos de cada artigo:
 *   slug         parte final do URL, /blogue/<slug>. So minusculas e hifens.
 *   title        titulo do artigo, usado no <h1> e na listagem
 *   seoTitle     titulo para o separador e para o Google. Ate 60 caracteres,
 *                acima disso o resultado de pesquisa corta. Omitir usa title.
 *   description  meta description, entre 120 e 160 caracteres
 *   excerpt      resumo mostrado no cartao da listagem
 *   date         data de publicacao em AAAA-MM-DD
 *   updated      data da ultima revisao, opcional
 *   author       nome do autor
 *   authorImage  retrato do autor, mostrado em pequeno junto ao nome
 *   image        imagem de destaque, caminho a partir de /public
 *   imageAlt     texto alternativo da imagem, descritivo e nao decorativo
 *   imageW/imageH  dimensoes reais do ficheiro, em pixeis. Servem para o
 *                browser reservar o espaco certo antes de a imagem carregar.
 *                Erradas, a pagina salta durante o carregamento, o que conta
 *                como Cumulative Layout Shift e penaliza o SEO.
 *   tags         etiquetas curtas mostradas no cartao e no artigo
 *   readingMin   tempo de leitura estimado, em minutos
 */

export const BLOG_BASE = '/blogue';

export const POSTS = [
  {
    slug: 'mais-um-blogue-e-este-fazia-mesmo-falta',
    title: 'Mais um blogue, e este fazia mesmo falta!',
    seoTitle: 'Mais um blogue, e este fazia mesmo falta',
    description:
      'Trinta anos de experiência comercial com produtos fora da caixa. Seis soluções inovadoras e pouco conhecidas para aquecer, arrefecer e proteger a sua casa.',
    excerpt:
      'Porque é que mais um blogue faz falta? Porque há soluções que existem há vinte ou trinta anos, funcionam, e continuam desconhecidas da maioria das pessoas. Aqui ficam seis delas.',
    date: '2026-11-02',
    author: 'Eduardo Catarino',
    authorImage: '/eduardocatarino.jpg',
    image: '/aquecimentopolivalente.webp',
    imageAlt:
      'Sala de estar clara com janela para o jardim e um aquecedor de infravermelhos junto ao sofá',
    imageW: 1024,
    imageH: 1024,
    tags: ['Soluções inovadoras', 'Conforto térmico', 'Eficiência energética'],
    readingMin: 3,
  },
];

/** Caminho publico de um artigo, por exemplo /blogue/o-meu-artigo */
export function postPath(slug) {
  return `${BLOG_BASE}/${slug}`;
}

/** Artigos do mais recente para o mais antigo. */
export function postsByDate() {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/** Um artigo pelo slug, ou undefined se nao existir. */
export function findPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}

/** Titulo a usar nos metadados, que pode ser mais curto do que o do <h1>. */
export function postSeoTitle(post) {
  return post.seoTitle || post.title;
}

/**
 * Data por extenso em portugues, por exemplo "2 de novembro de 2026".
 *
 * Escrita a mao em vez de Intl.DateTimeFormat porque a pre-renderizacao corre
 * em Node, onde a locale pt-PT pode nao estar instalada, e o resultado tem de
 * ser igual no servidor e no browser para nao haver salto de hidratacao.
 */
const MESES = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
];

export function formatDate(iso) {
  const [ano, mes, dia] = iso.split('-').map(Number);
  return `${dia} de ${MESES[mes - 1]} de ${ano}`;
}
