import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { videoPath } from '@/content/videos/videos';

/**
 * Caixa discreta a convidar para o video «Está a comparar o quê exatamente?».
 *
 * Vive nas paginas dos dois produtos de que o video fala, o Duotherm e o
 * ClimateCoating, e e um componente em vez de marcacao repetida para que o
 * texto e o aspeto sejam os mesmos nas duas e mudem nos dois sitios de uma so
 * vez.
 *
 * E deliberadamente mais calma do que os apelos que a rodeiam: fundo cinzento
 * claro e botao branco, para nao competir com o convite ao simulador nem com o
 * pedido de orcamento, que sao os apelos principais destas paginas.
 */
const SLUG = 'esta-a-comparar-o-que-exatamente';

export default function ConviteVideo() {
  return (
    <aside className="flex flex-col sm:flex-row sm:items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <span
        aria-hidden="true"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 border border-orange-200 flex-shrink-0"
      >
        <Play className="w-4 h-4 text-orange-700 translate-x-[1px]" fill="currentColor" />
      </span>
      <p className="text-sm text-gray-700 leading-relaxed flex-grow">
        Está a comparar orçamentos? Veja o que o Eduardo Catarino explica
      </p>
      <Link
        to={videoPath(SLUG)}
        className="inline-flex items-center justify-center px-5 py-2.5 bg-white border border-gray-300 hover:border-orange-300 hover:text-orange-700 text-gray-900 rounded-xl font-bold text-sm transition-colors whitespace-nowrap flex-shrink-0"
      >
        Ver o vídeo
      </Link>
    </aside>
  );
}
