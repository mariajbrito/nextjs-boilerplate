/**
 * Registo dos videos.
 *
 * Gemeo de src/content/blog/posts.js e pelas mesmas razoes: e JavaScript
 * simples, sem JSX e sem o alias "@/", porque alem do browser e importado
 * diretamente pelo Node em scripts/sitemap.mjs e scripts/prerender.mjs,
 * atraves de src/config/routes.js. Meter JSX aqui partia o build.
 *
 * O texto de cada video vive num componente proprio em src/content/videos/,
 * associado ao slug pelo registo em src/content/videos/bodies.jsx.
 *
 * PARA PUBLICAR UM VIDEO NOVO, bastam dois passos:
 *   1. acrescentar uma entrada no inicio de VIDEOS, aqui em baixo
 *   2. criar o ficheiro com o texto em src/content/videos/ e regista-lo em
 *      src/content/videos/bodies.jsx, com o mesmo slug
 *
 * A rota, o sitemap de videos, a pagina pre-renderizada, a listagem e os dados
 * estruturados passam a existir sozinhos.
 *
 * Campos de cada video:
 *   youtubeId    identificador do video no YouTube, a parte que vem depois de
 *                /shorts/ ou de ?v= no endereco
 *   slug         parte final do URL, /videos/<slug>. So minusculas e hifens.
 *   title        titulo do video, usado no <h1> e na listagem
 *   seoTitle     titulo para o separador e para o Google. Ate 60 caracteres,
 *                acima disso o resultado de pesquisa corta. Omitir usa title.
 *   description  meta description, entre 120 e 160 caracteres
 *   excerpt      descricao curta, mostrada no cartao da listagem e por baixo do
 *                titulo na pagina do video
 *   date         data de publicacao em AAAA-MM-DD
 *   format       'vertical' para os Shorts, que o leitor mostra a 9/16 e
 *                centrados, ou 'horizontal' para os restantes, a 16/9
 *   image        capa propria, caminho a partir de /public. Opcional: sem ela,
 *                a capa passa a ser a miniatura do YouTube. Serve tambem de
 *                og:image na partilha, como a capa dos artigos do blogue.
 *   imageAlt     texto alternativo da capa, descritivo e nao decorativo
 *   imageW/imageH  dimensoes reais do ficheiro, em pixeis. Servem para o
 *                browser reservar o espaco certo antes de a capa carregar e
 *                para anunciar a medida certa ao Facebook e ao LinkedIn.
 *   links        ligacoes mostradas por baixo do texto, cada uma
 *                { text, url }. A primeira sai em destaque, as outras ficam
 *                em botao secundario. Lista vazia ou ausente nao mostra nada.
 */

export const VIDEOS_BASE = '/videos';

export const VIDEOS = [
  {
    youtubeId: 'jBz9XapVwkQ',
    slug: 'esta-a-comparar-o-que-exatamente',
    title: 'Está a comparar o quê exatamente?',
    description:
      'Recebeu um orçamento mais barato e acha que o outro foi caro? Pode não estar a comparar o mesmo produto. Eduardo Catarino explica porquê.',
    excerpt:
      'Recebeu um orçamento mais barato e acha que o outro foi caro? Pode não estar a comparar o mesmo produto. O Eduardo Catarino explica porquê, com o Duotherm e o ClimateCoating.',
    date: '2026-11-24',
    format: 'vertical',
    image: '/capa-videos-evoluimos.webp',
    imageAlt:
      'Eduardo Catarino sentado no carro a falar para a câmara, ao lado do título «Está a comparar o quê exatamente?»',
    imageW: 1280,
    imageH: 720,
    links: [
      { text: 'Ver o aquecimento Duotherm', url: '/products/duotherm' },
      { text: 'Ver o ClimateCoating', url: '/products/climatecoating' },
    ],
  },
];

/** Caminho publico de um video, por exemplo /videos/o-meu-video */
export function videoPath(slug) {
  return `${VIDEOS_BASE}/${slug}`;
}

/** Videos do mais recente para o mais antigo. */
export function videosByDate() {
  return [...VIDEOS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/** Um video pelo slug, ou undefined se nao existir. */
export function findVideo(slug) {
  return VIDEOS.find((v) => v.slug === slug);
}

/** Titulo a usar nos metadados, que pode ser mais curto do que o do <h1>. */
export function videoSeoTitle(video) {
  return video.seoTitle || video.title;
}

/**
 * Miniatura do YouTube, usada quando o video nao traz capa propria.
 *
 * O dominio i.ytimg.com serve so imagens e nao poe cookies, por isso mostrar a
 * miniatura antes do clique nao quebra a promessa de nao contactar o YouTube
 * com dados de quem visita.
 */
export function youtubeThumb(video, quality = 'maxresdefault') {
  return `https://i.ytimg.com/vi/${video.youtubeId}/${quality}.jpg`;
}

/** Capa a mostrar: a do video se existir, senao a miniatura do YouTube. */
export function videoCover(video) {
  return video.image || youtubeThumb(video);
}

/** Endereco do leitor, sempre no dominio sem cookies do YouTube. */
export function videoEmbedUrl(video) {
  return `https://www.youtube-nocookie.com/embed/${video.youtubeId}`;
}

/** Endereco publico do video no YouTube. */
export function videoWatchUrl(video) {
  return `https://www.youtube.com/watch?v=${video.youtubeId}`;
}

/**
 * Data com hora, no formato que o sitemap de video e o VideoObject esperam.
 *
 * O campo date so tem o dia. O Google quer uma data completa com fuso, por isso
 * e acrescentado meio-dia UTC, que nao muda o dia em nenhum fuso portugues.
 */
export function videoIsoDate(video) {
  return `${video.date}T12:00:00+00:00`;
}

/**
 * Data por extenso em portugues, por exemplo "24 de novembro de 2026".
 *
 * Escrita a mao, e nao com Intl.DateTimeFormat, pela mesma razao de
 * src/content/blog/posts.js: a pre-renderizacao corre em Node, onde a locale
 * pt-PT pode nao estar instalada, e o resultado tem de ser igual no servidor e
 * no browser para nao haver salto de hidratacao.
 */
const MESES = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
];

export function formatDate(iso) {
  const [ano, mes, dia] = iso.split('-').map(Number);
  return `${dia} de ${MESES[mes - 1]} de ${ano}`;
}
