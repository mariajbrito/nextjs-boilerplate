/**
 * Associa cada artigo ao componente que tem o seu texto.
 *
 * Esta separacao existe porque src/content/blog/posts.js e lido pelo Node
 * durante o build, e o Node nao sabe ler JSX. Os metadados ficam la, o texto
 * fica aqui, e a chave comum e o slug.
 *
 * Para publicar um artigo novo: criar o ficheiro do texto ao lado deste,
 * importa-lo e acrescentar uma linha a BODIES com o mesmo slug que foi usado em
 * posts.js. Nada mais precisa de ser tocado.
 */
import MaisUmBlogueEEsteFaziaMesmoFalta from './mais-um-blogue-e-este-fazia-mesmo-falta.jsx';

export const BODIES = {
  'mais-um-blogue-e-este-fazia-mesmo-falta': MaisUmBlogueEEsteFaziaMesmoFalta,
};
