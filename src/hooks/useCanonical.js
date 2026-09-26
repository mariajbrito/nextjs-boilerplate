import { useLocation } from 'react-router-dom';
import { alternatesFor } from '@/config/routes';

/**
 * Canonical e par de traducao da pagina atual.
 *
 * Uma pagina bilingue nao pode ter o canonical fixo no caminho portugues: em
 * /en/... isso diria ao Google que a versao inglesa e uma copia da portuguesa e
 * ela deixaria de aparecer nos resultados. O canonical tem de ser sempre o
 * proprio URL, e as duas versoes declaram-se uma a outra por hreflang.
 *
 * @returns {{canonical: string, alternates: {pt: string, en: string}|null}}
 */
export function useCanonical() {
  const { pathname } = useLocation();
  const canonical =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  return { canonical, alternates: alternatesFor(canonical) };
}
