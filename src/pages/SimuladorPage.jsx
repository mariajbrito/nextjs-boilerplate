import React, { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Home,
  Info,
  MessageCircle,
  Ruler,
  SlidersHorizontal,
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import CustoAcumuladoChart from '@/components/simulador/CustoAcumuladoChart';
import { SIMULADOR_CONFIG as CONFIG } from '@/config/simulador';
import {
  areaEstimada,
  calcularZona,
  formatarEuros,
  formatarNumero,
  formatarPercentagem,
} from '@/lib/simulador';
import { WA_URL, COMPANY } from '@/config/company';
import { generatePtBreadcrumb, generateFAQSchema } from '@/utils/schemaMarkup';

// A ferramenta em si nao da texto para o Google indexar, e a secao de resultados
// so existe depois de a pessoa interagir. Este bloco de conteudo esta sempre
// presente no HTML e cobre as perguntas de custo que trazem as pesquisas.
const FAQS_SIMULADOR = [
  {
    question: 'Quanto custa pintar a fachada de uma casa?',
    answer: 'O custo divide-se em três parcelas: o preço da tinta por metro quadrado, a mão de obra de preparação e aplicação, e o andaime ou meio de elevação quando a fachada tem mais de um piso. A parcela que quase nunca entra na conta é a repintura: uma tinta convencional pede nova aplicação a cada 5 a 8 anos, e é aí que o custo real se decide. O simulador desta página compara o custo a 20 anos em vez do custo do primeiro balde.',
  },
  {
    question: 'Porque é que comparar o preço por litro engana?',
    answer: 'Porque o que interessa é o custo por metro quadrado por ano de vida útil. Uma tinta mais barata por litro que precise de ser reaplicada três vezes no período em que outra dura uma só acaba mais caro, contando material, mão de obra e andaime de cada repintura. É esse cálculo que o simulador faz.',
  },
  {
    question: 'O ClimateCoating é tinta ou isolamento?',
    answer: 'É um revestimento cerâmico de base aquosa, com microesferas ocas, que se aplica como tinta mas atua na transferência de calor e na regulação do vapor de água da parede. Não substitui um cápoto em termos de resistência térmica, mas melhora o comportamento térmico da fachada sem obras, sem andaimes permanentes e sem alterar a espessura da parede, o que é decisivo em fachadas que não podem receber ETICS.',
  },
  {
    question: 'Os valores do simulador são um orçamento?',
    answer: 'Não. São uma estimativa baseada em faixas de preço de mercado e serve para comparar cenários, não para contratar. O valor fechado depende do estado da superfície, da acessibilidade e da área real medida no local, que confirmamos em visita.',
  },
];

/* Cores das séries do gráfico. Azul para ClimateCoating (como no resto do site),
   laranja para a tinta convencional. Par validado para daltonismo. */
const COR_REFERENCIA = '#1d4ed8';
const COR_ALTERNATIVA = '#ea580c';

const PASSOS = [
  { numero: 1, label: 'Área' },
  { numero: 2, label: 'Resultado' },
  { numero: 3, label: 'Contacto' },
];

const classeCampo =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all';

export default function SimuladorPage() {
  const [passo, setPasso] = useState(1);
  const [zonaId, setZonaId] = useState('exterior');
  const [area, setArea] = useState(String(CONFIG.areaInicial));
  const [acabamento, setAcabamento] = useState(CONFIG.acabamentoInicial);
  const [ajudaAberta, setAjudaAberta] = useState(false);
  const [medidas, setMedidas] = useState({ largura: '', altura: '', pisos: '1' });
  const [alteracoes, setAlteracoes] = useState({});
  const [erro, setErro] = useState('');
  const resultadoRef = useRef(null);
  const passo1Ref = useRef(null);

  const zona = CONFIG[zonaId];
  const areaNumero = Number(area);
  const areaValida =
    Number.isFinite(areaNumero) && areaNumero >= CONFIG.areaMinima && areaNumero <= CONFIG.areaMaxima;

  const resultado = useMemo(() => {
    if (!areaValida) return null;
    return calcularZona(zona, {
      area: areaNumero,
      acabamento,
      horizonteAnos: CONFIG.horizonteAnos,
      margem: CONFIG.margemEstimativa,
      alteracoes,
    });
  }, [zona, areaNumero, areaValida, acabamento, alteracoes]);

  const series = useMemo(() => {
    if (!resultado || !zona.projecao) return null;
    return [
      {
        id: resultado.referencia.produto.id,
        nome: resultado.referencia.produto.nome,
        cor: COR_REFERENCIA,
        pontos: resultado.referencia.serie.pontos,
        eventos: resultado.referencia.serie.eventos,
        total: resultado.referencia.total,
      },
      {
        id: resultado.alternativa.produto.id,
        nome: resultado.alternativa.produto.nome,
        cor: COR_ALTERNATIVA,
        pontos: resultado.alternativa.serie.pontos,
        eventos: resultado.alternativa.serie.eventos,
        total: resultado.alternativa.total,
      },
    ];
  }, [resultado, zona.projecao]);

  const usarMedidas = () => {
    const estimada = areaEstimada(medidas);
    if (!estimada) {
      setErro('Preencha largura, altura e número de pisos para calcular a área.');
      return;
    }
    setArea(String(estimada));
    setAjudaAberta(false);
    setErro('');
  };

  const verResultado = () => {
    if (!areaValida) {
      setErro(`Indique uma área entre ${CONFIG.areaMinima} e ${formatarNumero(CONFIG.areaMaxima)} m².`);
      return;
    }
    setErro('');
    setPasso(2);
    window.requestAnimationFrame(() => {
      resultadoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  /* Sobe primeiro e só depois esconde o resultado. Se fosse pela ordem
     inversa, a página encurtava com o visitante lá em baixo e o browser
     deixava-o no rodapé. */
  const voltarAoPasso1 = () => {
    passo1Ref.current?.scrollIntoView({ behavior: 'auto', block: 'start' });
    setPasso(1);
    setErro('');
  };

  const alterarPreco = (produtoId, campo, valor) => {
    setAlteracoes((anterior) => ({
      ...anterior,
      [produtoId]: { ...anterior[produtoId], [campo]: valor },
    }));
  };

  const alterarPrecoTinta = (produtoId, valor) => {
    setAlteracoes((anterior) => ({
      ...anterior,
      [produtoId]: {
        ...anterior[produtoId],
        tinta: { ...anterior[produtoId]?.tinta, [acabamento]: valor },
      },
    }));
  };

  const valorCampo = (produtoId, campo, base) => {
    const guardado = alteracoes[produtoId]?.[campo];
    return guardado === undefined ? String(base) : guardado;
  };

  const valorCampoTinta = (produtoId, base) => {
    const guardado = alteracoes[produtoId]?.tinta?.[acabamento];
    return guardado === undefined ? String(base) : guardado;
  };

  return (
    <>
      <SEOHead
        title="Simulador: Quanto Custa Pintar a Fachada | Grátis"
        description="Calcule em 30 segundos quanto vai gastar a pintar a sua casa com ClimateCoating ou com tinta convencional. Custo a 20 anos, custo por ano e poupança em euros."
        canonical="/simulador"
        image="/ClimateCoating/bannermarketing.png"
        schemas={[
          generateFAQSchema(FAQS_SIMULADOR),
          generatePtBreadcrumb([
            { name: 'ClimateCoating', path: '/products/climatecoating' },
            { name: 'Simulador de custos', path: '/simulador' },
          ]),
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-16">
          <Breadcrumb
            items={[
              { label: 'Início', path: '/' },
              { label: 'ClimateCoating', path: '/products/climatecoating' },
              { label: 'Simulador', path: '/simulador' },
            ]}
          />

          <header className="mt-6 mb-7">
            <span className="inline-block bg-blue-700 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Simulador
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
              Quanto vai gastar a pintar?
            </h1>
            <p className="text-gray-600 mt-2 text-base">
              Indique a área. Mostramos o custo com ClimateCoating e com tinta convencional de
              qualidade, sem pedir os seus dados.
            </p>
          </header>

          {/* aviso de enquadramento, antes de qualquer campo */}
          <div className="flex items-start gap-2.5 mb-6 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
            <Info aria-hidden="true" className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700 leading-relaxed">{CONFIG.avisoTopo}</p>
          </div>

          {/* indicador de passos */}
          <ol className="flex items-center gap-2 mb-6 list-none p-0">
            {PASSOS.map((p) => {
              const ativo = p.numero === passo;
              const concluido = p.numero < passo;
              return (
                <li key={p.numero} className="flex items-center gap-2">
                  <span
                    className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-extrabold ${
                      ativo
                        ? 'bg-orange-600 text-white'
                        : concluido
                          ? 'bg-blue-700 text-white'
                          : 'bg-gray-200 text-gray-500'
                    }`}
                    aria-current={ativo ? 'step' : undefined}
                  >
                    {p.numero}
                  </span>
                  <span className={`text-sm font-semibold ${ativo ? 'text-gray-900' : 'text-gray-500'}`}>
                    {p.label}
                  </span>
                  {p.numero < PASSOS.length ? (
                    <span aria-hidden="true" className="w-4 h-px bg-gray-300 ml-1" />
                  ) : null}
                </li>
              );
            })}
          </ol>

          {/* ---------------------------------------------------- passo 1 */}
          <section
            ref={passo1Ref}
            className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-7 scroll-mt-20"
            aria-label="Passo 1: zona e área"
          >
            <h2 className="text-lg font-extrabold text-gray-900 mb-4">O que vai pintar?</h2>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {['exterior', 'interior'].map((id) => {
                const opcao = CONFIG[id];
                const selecionado = zonaId === id;
                const Icone = id === 'exterior' ? Building2 : Home;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setZonaId(id)}
                    aria-pressed={selecionado}
                    className={`text-left p-4 rounded-2xl border-2 transition-colors ${
                      selecionado
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <Icone className={`w-5 h-5 mb-2 ${selecionado ? 'text-orange-600' : 'text-gray-400'}`} />
                    <span className="block font-extrabold text-gray-900 text-sm">{opcao.label}</span>
                    <span className="block text-xs text-gray-500 mt-0.5">{opcao.descricao}</span>
                  </button>
                );
              })}
            </div>

            <label htmlFor="sim-area" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Área a pintar, em m²
            </label>
            <div className="flex gap-2">
              <input
                id="sim-area"
                type="number"
                inputMode="decimal"
                min={CONFIG.areaMinima}
                max={CONFIG.areaMaxima}
                step="1"
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                  setErro('');
                }}
                className={classeCampo}
                placeholder="220"
                aria-describedby="sim-area-ajuda"
              />
              <span className="flex items-center px-3 text-sm font-bold text-gray-500 bg-gray-100 rounded-xl">
                m²
              </span>
            </div>
            <p id="sim-area-ajuda" className="text-xs text-gray-500 mt-1.5">
              Some as paredes que quer pintar. Não precisa de ser exato.
            </p>

            <button
              type="button"
              onClick={() => setAjudaAberta((v) => !v)}
              aria-expanded={ajudaAberta}
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold text-blue-700 hover:text-blue-900"
            >
              <Ruler className="w-4 h-4" />
              {ajudaAberta ? 'Fechar' : 'Não sei a área'}
            </button>

            {ajudaAberta ? (
              <div className="mt-3 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                <p className="text-sm text-gray-700 mb-3">
                  Largura × altura × número de pisos. Dá uma boa aproximação.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'largura', label: 'Largura (m)', placeholder: '10' },
                    { id: 'altura', label: 'Altura (m)', placeholder: '2,7' },
                    { id: 'pisos', label: 'Pisos', placeholder: '1' },
                  ].map((campo) => (
                    <div key={campo.id}>
                      <label htmlFor={`sim-${campo.id}`} className="block text-xs font-semibold text-gray-600 mb-1">
                        {campo.label}
                      </label>
                      <input
                        id={`sim-${campo.id}`}
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.1"
                        value={medidas[campo.id]}
                        onChange={(e) => setMedidas({ ...medidas, [campo.id]: e.target.value })}
                        placeholder={campo.placeholder}
                        className={`${classeCampo} px-3 py-2.5`}
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={usarMedidas}
                  className="mt-3 w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold text-sm transition-colors"
                >
                  Usar esta área
                </button>
              </div>
            ) : null}

            {erro ? (
              <p role="alert" className="mt-3 text-sm font-semibold text-red-600">
                {erro}
              </p>
            ) : null}

            <button
              type="button"
              onClick={verResultado}
              className="mt-5 w-full flex items-center justify-center gap-2 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-extrabold text-base transition-colors"
            >
              Ver quanto vou gastar
              <ArrowRight className="w-5 h-5" />
            </button>
          </section>

          {/* ---------------------------------------------------- passo 2 */}
          {passo >= 2 && resultado ? (
            <section ref={resultadoRef} className="mt-6 scroll-mt-20" aria-label="Passo 2: resultado">
              <div className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
                  <h2 className="text-lg font-extrabold text-gray-900">{zona.tituloResultado}</h2>
                  <p className="text-sm text-gray-500">
                    {zona.label}, {formatarNumero(areaNumero)} m²
                  </p>
                </div>

                {/* seletor de acabamento */}
                <div className="mb-6">
                  <span className="block text-sm font-semibold text-gray-700 mb-2">Acabamento</span>
                  <div className="inline-flex p-1 bg-gray-100 rounded-xl" role="group" aria-label="Acabamento">
                    {CONFIG.acabamentos.map((a) => (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => setAcabamento(a.id)}
                        aria-pressed={acabamento === a.id}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                          acabamento === a.id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* destaque: poupança no exterior, diferença no interior */}
                {zona.projecao ? (
                  <div className="bg-blue-700 rounded-2xl p-5 sm:p-6 text-white mb-3">
                    <p className="text-sm font-semibold text-blue-100">
                      Poupança com {resultado.referencia.produto.nome} em {CONFIG.horizonteAnos} anos
                    </p>
                    <p className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-1 tabular-nums">
                      {formatarEuros(resultado.poupanca.valor, { decimais: 0 })}
                    </p>
                    <p className="text-blue-100 text-sm mt-1">
                      {formatarPercentagem(resultado.poupanca.percentagem)} menos do que pintar com tinta
                      convencional de qualidade.
                    </p>
                  </div>
                ) : (
                  <div className="bg-gray-100 rounded-2xl p-5 mb-3">
                    <p className="text-sm font-semibold text-gray-600">Diferença hoje</p>
                    <p className="text-3xl font-extrabold text-gray-900 tracking-tight mt-1 tabular-nums">
                      {formatarEuros(Math.abs(resultado.poupanca.valor), { decimais: 0 })}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      {resultado.poupanca.valor >= 0
                        ? `${resultado.referencia.produto.nome} fica mais barato hoje.`
                        : `${resultado.referencia.produto.nome} custa mais hoje. O que recebe em troca está descrito abaixo.`}
                    </p>
                  </div>
                )}

                <p className="text-xs text-gray-500 mb-6">{CONFIG.avisoResultado}</p>

                {/* totais dos dois produtos */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[resultado.referencia, resultado.alternativa].map((r, indice) => {
                    const cor = indice === 0 ? COR_REFERENCIA : COR_ALTERNATIVA;
                    const faixa = resultado.faixas[r.produto.id];
                    return (
                      <div key={r.produto.id} className="border border-gray-200 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            aria-hidden="true"
                            className="inline-block w-4 h-1 rounded-full flex-shrink-0"
                            style={{ background: cor }}
                          />
                          <span className="font-extrabold text-gray-900 text-sm">{r.produto.nome}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-3">{r.produto.etiqueta}</p>

                        <p className="text-2xl font-extrabold text-gray-900 tabular-nums">
                          {formatarEuros(r.total)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {zona.projecao
                            ? `Total em ${CONFIG.horizonteAnos} anos, ${r.numeroDePinturas} ${
                                r.numeroDePinturas === 1 ? 'pintura' : 'pinturas'
                              }`
                            : 'Custo de hoje'}
                        </p>

                        <dl className="mt-4 pt-4 border-t border-gray-100 space-y-1.5 text-sm">
                          <div className="flex justify-between gap-3">
                            <dt className="text-gray-500">Preço por m²</dt>
                            <dd className="font-bold text-gray-900 tabular-nums">
                              {formatarEuros(r.precoPorM2)}
                            </dd>
                          </div>
                          {zona.projecao ? (
                            <>
                              <div className="flex justify-between gap-3">
                                <dt className="text-gray-500">Cada pintura</dt>
                                <dd className="font-bold text-gray-900 tabular-nums">
                                  {formatarEuros(r.custoPorPintura)}
                                </dd>
                              </div>
                              <div className="flex justify-between gap-3">
                                <dt className="text-gray-500">Custo por ano</dt>
                                <dd className="font-bold text-gray-900 tabular-nums">
                                  {formatarEuros(r.custoPorAno)}
                                </dd>
                              </div>
                            </>
                          ) : null}
                          <div className="flex justify-between gap-3">
                            <dt className="text-gray-500">
                              Faixa de estimativa (±{Math.round(CONFIG.margemEstimativa * 100)}%)
                            </dt>
                            <dd className="font-semibold text-gray-700 text-right tabular-nums">
                              {formatarEuros(faixa.minimo, { decimais: 0 })} a{' '}
                              {formatarEuros(faixa.maximo, { decimais: 0 })}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    );
                  })}
                </div>

                <p className="text-xs text-gray-500 mt-3">{CONFIG.notaFaixa}</p>
              </div>

              {/* campos editáveis da tinta convencional */}
              {resultado.alternativa.produto.editavel.precos ? (
                <details className="group mt-6 bg-white rounded-3xl border-2 border-dashed border-gray-300 p-5 sm:p-7 open:border-solid open:border-gray-200">
                  <summary className="flex items-center gap-3 cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 flex-shrink-0">
                      <SlidersHorizontal className="w-4 h-4 text-orange-600" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-extrabold text-gray-900 text-base">
                        Tem outros valores? Ajuste a tinta convencional
                      </span>
                      <span className="block text-xs text-gray-500 mt-0.5 group-open:hidden">
                        Toque para abrir e usar os seus preços
                      </span>
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="text-sm text-gray-600 mt-4 mb-4">
                    Os valores do {resultado.referencia.produto.nome} são os nossos e são fixos. Os da tinta
                    convencional são uma referência de mercado, por isso pode alterá-los.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <CampoEuros
                      id="sim-mao-obra"
                      label={CONFIG.rotulos.maoDeObra}
                      valor={valorCampo(
                        resultado.alternativa.produto.id,
                        'maoDeObra',
                        resultado.alternativa.produto.precos.maoDeObra,
                      )}
                      onChange={(v) => alterarPreco(resultado.alternativa.produto.id, 'maoDeObra', v)}
                    />
                    {resultado.alternativa.produto.mostrarPrimario === false ? null : (
                      <CampoEuros
                        id="sim-primario"
                        label={CONFIG.rotulos.primario}
                        valor={valorCampo(
                          resultado.alternativa.produto.id,
                          'primario',
                          resultado.alternativa.produto.precos.primario,
                        )}
                        onChange={(v) => alterarPreco(resultado.alternativa.produto.id, 'primario', v)}
                      />
                    )}
                    <CampoEuros
                      id="sim-tinta"
                      label={`${CONFIG.rotulos.tinta}, ${CONFIG.acabamentos
                        .find((a) => a.id === acabamento)
                        .label.toLowerCase()}`}
                      valor={valorCampoTinta(
                        resultado.alternativa.produto.id,
                        resultado.alternativa.produto.precos.tinta[acabamento],
                      )}
                      onChange={(v) => alterarPrecoTinta(resultado.alternativa.produto.id, v)}
                    />
                    {resultado.alternativa.produto.editavel.durabilidade ? (
                      <div>
                        <label htmlFor="sim-durabilidade" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          {CONFIG.rotulos.durabilidade}
                        </label>
                        <div className="flex gap-2">
                          <input
                            id="sim-durabilidade"
                            type="number"
                            inputMode="numeric"
                            min="1"
                            max={CONFIG.horizonteAnos}
                            step="1"
                            value={valorCampo(
                              resultado.alternativa.produto.id,
                              'durabilidadeAnos',
                              resultado.alternativa.produto.durabilidadeAnos,
                            )}
                            onChange={(e) =>
                              alterarPreco(resultado.alternativa.produto.id, 'durabilidadeAnos', e.target.value)
                            }
                            className={classeCampo}
                          />
                          <span className="flex items-center px-3 text-sm font-bold text-gray-500 bg-gray-100 rounded-xl">
                            {CONFIG.rotulos.anos}
                          </span>
                        </div>
                        {resultado.alternativa.produto.notaDurabilidade ? (
                          <p className="text-xs text-gray-500 mt-1.5">
                            {resultado.alternativa.produto.notaDurabilidade}
                          </p>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </details>
              ) : null}

              {/* gráfico, só quando há projeção */}
              {series ? (
                <div className="mt-6 bg-white rounded-3xl border border-gray-200 p-5 sm:p-7">
                  <CustoAcumuladoChart
                    series={series}
                    horizonteAnos={CONFIG.horizonteAnos}
                    titulo={`Custo acumulado em ${CONFIG.horizonteAnos} anos`}
                    descricao="A linha sobe de cada vez que é preciso pintar outra vez."
                  />
                </div>
              ) : null}

              {/* textos qualitativos */}
              {[resultado.referencia, resultado.alternativa].some((r) => r.produto.vantagens) ? (
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {[resultado.referencia, resultado.alternativa].map((r) =>
                    r.produto.vantagens ? (
                      <div
                        key={r.produto.id}
                        className={`rounded-2xl p-5 border ${
                          r.produto.id === resultado.referencia.produto.id
                            ? 'bg-cyan-50 border-cyan-200'
                            : 'bg-white border-gray-200'
                        }`}
                      >
                        <h3 className="font-extrabold text-gray-900 text-sm mb-2">
                          {r.produto.vantagens.titulo}
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{r.produto.vantagens.texto}</p>
                      </div>
                    ) : null,
                  )}
                </div>
              ) : null}

              {/* o que está incluído */}
              <div className="mt-6 bg-white rounded-3xl border border-gray-200 p-5 sm:p-7">
                <h3 className="font-extrabold text-gray-900 text-base mb-4">O que está incluído</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[resultado.referencia, resultado.alternativa].map((r, indice) => (
                    <div key={r.produto.id}>
                      <div className="flex items-center gap-2 mb-2.5">
                        <span
                          aria-hidden="true"
                          className="inline-block w-4 h-1 rounded-full flex-shrink-0"
                          style={{ background: indice === 0 ? COR_REFERENCIA : COR_ALTERNATIVA }}
                        />
                        <span className="font-bold text-gray-900 text-sm">{r.produto.nome}</span>
                      </div>
                      <ul className="space-y-2 list-none p-0">
                        {r.produto.incluido.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                        {r.produto.mostrarPrimario === false ? null : (
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            {CONFIG.rotulos.primario}:{' '}
                            {r.produto.primarioNota
                              ? r.produto.primarioNota
                              : `${formatarEuros(r.precos.primario)}/m²`}
                          </li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>

                {zona.notaVidaUtil ? (
                  <p className="text-xs text-gray-500 mt-4 leading-relaxed">{zona.notaVidaUtil}</p>
                ) : null}

                <p className="flex items-start gap-2 text-xs text-gray-500 mt-5 pt-4 border-t border-gray-100">
                  <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  {CONFIG.avisoValores}
                </p>
              </div>

              <button
                type="button"
                onClick={voltarAoPasso1}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4" />
                Alterar área ou zona
              </button>

              {/* -------------------------------------------------- passo 3
                  Placeholder de CTA. O texto e a oferta ficam por definir
                  com o cliente. Para já usa os canais habituais do site. */}
              <div className="mt-6 bg-gray-900 rounded-3xl p-6 sm:p-7 text-white">
                <h2 className="text-xl font-extrabold mb-2">Quer um valor para a sua casa?</h2>
                <p className="text-gray-400 text-sm mb-5">
                  Avaliamos a superfície e confirmamos a área. Diga-nos onde fica e falamos consigo.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center py-3.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors"
                  >
                    Pedir orçamento
                  </Link>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  {COMPANY.phone} · {CONFIG.avisoValores}
                </p>
              </div>

              <p className="mt-6 text-sm text-gray-600">
                Quer saber como funciona a membrana cerâmica?{' '}
                <Link to="/products/climatecoating" className="font-bold text-blue-700 hover:text-blue-900">
                  Ver o ClimateCoating
                </Link>
              </p>
            </section>
          ) : null}

          {/* Conteudo permanente: existe no HTML pre-renderizado, ao contrario
              da secao de resultados, que depende de interacao. */}
          <section className="mt-14 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              O que pesa no preço de pintar uma fachada
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Quase todos os orçamentos de pintura são comparados pelo preço do material. É o
              critério mais fácil e o que leva a decisões mais caras. Numa fachada, o material
              raramente passa de um terço do custo total: o resto é preparação da superfície,
              mão de obra e acesso, seja andaime, plataforma ou trabalhos verticais.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              É por isso que a durabilidade manda mais no custo do que o preço por litro. Cada
              repintura repete tudo: o material, a mão de obra e o acesso. Duas fachadas com o
              mesmo orçamento inicial podem ter custos muito diferentes ao fim de vinte anos,
              dependendo apenas de quantas vezes foram repintadas nesse período.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              O simulador acima faz essa conta. Indica a área, escolhe o cenário e compara o
              custo acumulado do ClimateCoating com o de uma tinta convencional de qualidade,
              incluindo as repinturas de cada um. Não pede dados pessoais.
            </p>

            <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Perguntas frequentes</h2>
            <div className="space-y-3">
              {FAQS_SIMULADOR.map((f) => (
                <div key={f.question} className="bg-white border border-gray-200 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{f.question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-gray-600">
              Ver também{' '}
              <Link to="/products/climatecoating" className="font-bold text-blue-700 hover:text-blue-900">
                o revestimento ClimateCoating
              </Link>
              ,{' '}
              <Link to="/isolamento-termico" className="font-bold text-blue-700 hover:text-blue-900">
                isolamento térmico sem obras
              </Link>
              {' '}e{' '}
              <Link to="/casa-quente-no-verao" className="font-bold text-blue-700 hover:text-blue-900">
                como baixar a temperatura no verão
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

function CampoEuros({ id, label, valor, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}
      </label>
      <div className="flex gap-2">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min="0"
          step="0.1"
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          className={classeCampo}
        />
        <span className="flex items-center px-3 text-sm font-bold text-gray-500 bg-gray-100 rounded-xl whitespace-nowrap">
          {CONFIG.rotulos.porM2}
        </span>
      </div>
    </div>
  );
}
