import React, { useEffect, useMemo, useRef, useState } from 'react';
import { acumuladoNoAno, formatarEuros } from '@/lib/simulador';

/**
 * Gráfico de custo acumulado ao longo do horizonte, em degraus.
 * Cada degrau é uma nova pintura. Só interface, sem regras de negócio.
 */

const MARGENS = { topo: 28, direita: 16, fundo: 34, esquerda: 56 };
const COR_GRELHA = '#e5e7eb';
const COR_TEXTO = '#6b7280';
const COR_TEXTO_FORTE = '#111827';
const SUPERFICIE = '#ffffff';

function escalaBonita(maximo) {
  if (maximo <= 0) return { limite: 1000, passo: 250 };
  const bruto = maximo / 4;
  const magnitude = 10 ** Math.floor(Math.log10(bruto));
  const passo = [1, 2, 2.5, 5, 10].map((m) => m * magnitude).find((v) => v >= bruto) || magnitude * 10;
  return { limite: Math.ceil(maximo / passo) * passo, passo };
}

export default function CustoAcumuladoChart({ series, horizonteAnos, titulo, descricao }) {
  const containerRef = useRef(null);
  const [largura, setLargura] = useState(640);
  const [anoAtivo, setAnoAtivo] = useState(null);
  const [verTabela, setVerTabela] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const observador = new ResizeObserver(([entrada]) => {
      setLargura(Math.max(260, Math.round(entrada.contentRect.width)));
    });
    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  const altura = largura < 420 ? 240 : 300;

  const { limite, passo } = useMemo(
    () => escalaBonita(Math.max(...series.map((s) => s.total))),
    [series],
  );

  const interior = {
    x0: MARGENS.esquerda,
    x1: largura - MARGENS.direita,
    y0: MARGENS.topo,
    y1: altura - MARGENS.fundo,
  };

  const escalaX = (ano) => interior.x0 + (ano / horizonteAnos) * (interior.x1 - interior.x0);
  const escalaY = (valor) => interior.y1 - (valor / limite) * (interior.y1 - interior.y0);

  const marcasY = useMemo(() => {
    const valores = [];
    for (let v = 0; v <= limite + 0.001; v += passo) valores.push(v);
    return valores;
  }, [limite, passo]);

  const marcasX = useMemo(() => {
    const espacamento = horizonteAnos <= 10 ? 2 : 5;
    const anos = [];
    for (let a = 0; a <= horizonteAnos; a += espacamento) anos.push(a);
    if (anos[anos.length - 1] !== horizonteAnos) anos.push(horizonteAnos);
    return anos;
  }, [horizonteAnos]);

  const desenhos = series.map((s) => {
    const linha = s.pontos
      .map((p, i) => (i === 0 ? 'M' : 'L') + escalaX(p.ano) + ',' + escalaY(p.valor))
      .join(' ');
    const area = linha
      + ' L' + escalaX(horizonteAnos) + ',' + escalaY(0)
      + ' L' + escalaX(0) + ',' + escalaY(0) + ' Z';
    return { ...s, linha, area };
  });

  /* Etiquetas diretas no fim da linha, mas só quando não se sobrepõem.
     Quando ficam juntas, a legenda, os cartões de total e a tabela
     garantem que nenhum valor fica inacessível. */
  const fimY = desenhos.map((s) => escalaY(s.total));
  const etiquetasDiretas = desenhos.length < 2 || Math.abs(fimY[0] - fimY[1]) >= 20;

  const leitura = useMemo(() => {
    if (anoAtivo == null) return null;
    return {
      ano: anoAtivo,
      valores: series.map((s) => ({
        id: s.id,
        nome: s.nome,
        cor: s.cor,
        valor: acumuladoNoAno(s.eventos, anoAtivo),
      })),
    };
  }, [anoAtivo, series]);

  const anoMaisProximo = (clientX) => {
    const caixa = containerRef.current?.getBoundingClientRect();
    if (!caixa) return null;
    const fracao = (clientX - caixa.left - interior.x0) / (interior.x1 - interior.x0);
    return Math.min(horizonteAnos, Math.max(0, Math.round(fracao * horizonteAnos)));
  };

  const aoMover = (evento) => setAnoAtivo(anoMaisProximo(evento.clientX));

  const aoTeclado = (evento) => {
    if (evento.key === 'ArrowRight' || evento.key === 'ArrowLeft') {
      evento.preventDefault();
      const delta = evento.key === 'ArrowRight' ? 1 : -1;
      setAnoAtivo((anterior) => {
        const base = anterior == null ? 0 : anterior;
        return Math.min(horizonteAnos, Math.max(0, base + delta));
      });
    }
    if (evento.key === 'Escape') setAnoAtivo(null);
  };

  const resumoAcessivel = series
    .map((s) => s.nome + ': ' + formatarEuros(s.total, { decimais: 0 }) + ' em ' + horizonteAnos
      + ' anos, ' + s.eventos.length + (s.eventos.length === 1 ? ' pintura' : ' pinturas'))
    .join('. ');

  const xLeitura = anoAtivo == null ? 0 : escalaX(anoAtivo);
  const tooltipAEsquerda = xLeitura > largura * 0.6;

  const anosDaTabela = [...new Set(series.flatMap((s) => s.eventos.map((e) => e.ano)).concat(horizonteAnos))]
    .sort((a, b) => a - b);

  return (
    <figure className="m-0">
      <figcaption className="mb-4">
        <h3 className="text-base font-extrabold text-gray-900">{titulo}</h3>
        {descricao ? <p className="text-sm text-gray-600 mt-0.5">{descricao}</p> : null}
      </figcaption>

      {/* Legenda sempre presente: a identidade nunca depende só da cor */}
      <ul className="flex flex-wrap gap-x-5 gap-y-1.5 mb-2 list-none p-0">
        {series.map((s) => (
          <li key={s.id} className="flex items-center gap-2 text-sm text-gray-700">
            <span aria-hidden="true" className="inline-block w-5 h-0.5 rounded-full" style={{ background: s.cor }} />
            <span className="font-semibold">{s.nome}</span>
          </li>
        ))}
      </ul>

      <div ref={containerRef} className="relative w-full select-none">
        <svg
          width={largura}
          height={altura}
          role="img"
          aria-label={'Custo acumulado ao longo de ' + horizonteAnos + ' anos. ' + resumoAcessivel}
          tabIndex={0}
          className="block outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-orange-300"
          onPointerMove={aoMover}
          onPointerDown={aoMover}
          onPointerLeave={() => setAnoAtivo(null)}
          onKeyDown={aoTeclado}
          onBlur={() => setAnoAtivo(null)}
        >
          {marcasY.map((valor) => (
            <g key={valor}>
              <line
                x1={interior.x0}
                x2={interior.x1}
                y1={escalaY(valor)}
                y2={escalaY(valor)}
                stroke={COR_GRELHA}
                strokeWidth="1"
              />
              <text x={interior.x0 - 10} y={escalaY(valor) + 4} textAnchor="end" fontSize="11" fill={COR_TEXTO}>
                {valor === 0 ? '0' : formatarEuros(valor, { decimais: 0 }).replace(/\s?€/, '')}
              </text>
            </g>
          ))}

          {marcasX.map((ano) => (
            <text
              key={ano}
              x={escalaX(ano)}
              y={interior.y1 + 20}
              textAnchor={ano === 0 ? 'start' : ano === horizonteAnos ? 'end' : 'middle'}
              fontSize="11"
              fill={COR_TEXTO}
            >
              {ano === 0 ? 'hoje' : ano}
            </text>
          ))}
          <text x={interior.x1} y={altura - 2} textAnchor="end" fontSize="10" fill={COR_TEXTO}>
            anos
          </text>

          {desenhos.map((s) => (
            <path key={'area-' + s.id} d={s.area} fill={s.cor} fillOpacity="0.1" />
          ))}

          {anoAtivo != null ? (
            <line
              x1={xLeitura}
              x2={xLeitura}
              y1={interior.y0}
              y2={interior.y1}
              stroke={COR_TEXTO_FORTE}
              strokeOpacity="0.25"
              strokeWidth="1"
            />
          ) : null}

          {desenhos.map((s) => (
            <path
              key={'linha-' + s.id}
              d={s.linha}
              fill="none"
              stroke={s.cor}
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ))}

          {/* um marcador por nova pintura, com anel na cor da superfície */}
          {desenhos.map((s) => s.eventos.map((evento) => (
            <circle
              key={s.id + '-' + evento.ano}
              cx={escalaX(evento.ano)}
              cy={escalaY(evento.acumulado)}
              r="5"
              fill={s.cor}
              stroke={SUPERFICIE}
              strokeWidth="2"
            />
          )))}

          {leitura ? leitura.valores.map((v) => (
            <circle
              key={'ativo-' + v.id}
              cx={xLeitura}
              cy={escalaY(v.valor)}
              r="5"
              fill={v.cor}
              stroke={SUPERFICIE}
              strokeWidth="2"
            />
          )) : null}

          {etiquetasDiretas && anoAtivo == null ? desenhos.map((s) => (
            <text
              key={'fim-' + s.id}
              x={interior.x1}
              y={escalaY(s.total) - 12}
              textAnchor="end"
              fontSize="12"
              fontWeight="700"
              fill={COR_TEXTO_FORTE}
            >
              {formatarEuros(s.total, { decimais: 0 })}
            </text>
          )) : null}
        </svg>

        {leitura ? (
          <div
            className="absolute top-1 pointer-events-none bg-white border border-gray-200 rounded-xl shadow-lg px-3 py-2 min-w-[150px]"
            style={{
              left: tooltipAEsquerda ? undefined : xLeitura + 12,
              right: tooltipAEsquerda ? largura - xLeitura + 12 : undefined,
            }}
          >
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
              {leitura.ano === 0 ? 'Hoje' : 'Ano ' + leitura.ano}
            </p>
            {leitura.valores.map((v) => (
              <div key={v.id} className="flex items-center gap-2 mb-1 last:mb-0">
                <span aria-hidden="true" className="inline-block w-4 h-0.5 rounded-full flex-shrink-0" style={{ background: v.cor }} />
                <span className="text-sm font-extrabold text-gray-900 tabular-nums">
                  {formatarEuros(v.valor, { decimais: 0 })}
                </span>
                <span className="text-xs text-gray-500 truncate">{v.nome}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Passe o dedo ou o rato sobre o gráfico para ver o valor de cada ano. Cada ponto é uma nova pintura.
      </p>

      <div className="mt-3">
        <button
          type="button"
          onClick={() => setVerTabela((v) => !v)}
          className="text-xs font-bold text-gray-600 hover:text-gray-900 underline underline-offset-2"
          aria-expanded={verTabela}
        >
          {verTabela ? 'Esconder tabela' : 'Ver os valores em tabela'}
        </button>
        {verTabela ? (
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <caption className="sr-only">Custo acumulado por ano</caption>
              <thead>
                <tr>
                  <th scope="col" className="text-left font-bold text-gray-500 text-xs uppercase tracking-wider py-2 pr-4">
                    Ano
                  </th>
                  {series.map((s) => (
                    <th key={s.id} scope="col" className="text-right font-bold text-gray-500 text-xs uppercase tracking-wider py-2 pl-4">
                      {s.nome}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {anosDaTabela.map((ano) => (
                  <tr key={ano} className="border-t border-gray-100">
                    <th scope="row" className="text-left font-semibold text-gray-700 py-2 pr-4">
                      {ano === 0 ? 'Hoje' : 'Ano ' + ano}
                    </th>
                    {series.map((s) => (
                      <td key={s.id} className="text-right text-gray-900 tabular-nums py-2 pl-4">
                        {formatarEuros(acumuladoNoAno(s.eventos, ano))}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </figure>
  );
}
