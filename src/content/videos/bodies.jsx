/**
 * Associa cada video ao componente que tem o seu texto.
 *
 * Esta separacao existe pela mesma razao que no blogue: src/content/videos/
 * videos.js e lido pelo Node durante o build, e o Node nao sabe ler JSX. Os
 * metadados ficam la, o texto fica aqui, e a chave comum e o slug.
 *
 * Para publicar um video novo: criar o ficheiro do texto ao lado deste,
 * importa-lo e acrescentar uma linha a BODIES com o mesmo slug que foi usado em
 * videos.js. Nada mais precisa de ser tocado.
 */
import EstaAComparaOQueExatamente from './esta-a-comparar-o-que-exatamente.jsx';

export const BODIES = {
  'esta-a-comparar-o-que-exatamente': EstaAComparaOQueExatamente,
};
