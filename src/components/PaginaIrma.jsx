import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Ligacao explicita entre duas paginas que tratam o mesmo tema com intencoes
 * diferentes: as /solutions/* respondem ao "como funciona" e as paginas em
 * portugues respondem a quem quer resolver o problema e pedir orcamento.
 *
 * Existe para o Google perceber que sao complementares e nao duplicados. Sem
 * esta ligacao, as duas competiam pelo mesmo resultado de pesquisa e nenhuma
 * ganhava: era o caso de /solutions/eliminate-moisture contra
 * /humidade-nas-paredes, ambas paradas na pagina dois.
 */
export default function PaginaIrma({ to, label, texto }) {
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-gray-700 leading-relaxed mb-4">{texto}</p>
        <Link
          to={to}
          className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-bold text-sm transition-colors"
        >
          {label}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
