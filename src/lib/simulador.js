/**
 * Lógica de cálculo do simulador de custos de pintura.
 *
 * Funções puras, sem React e sem textos de interface.
 * Os valores vêm de src/config/simulador.js.
 *
 * Regras:
 *   custo por pintura = área × (mão de obra + primário + tinta)
 *   nº de pinturas no horizonte = arredondar para cima (horizonte ÷ durabilidade)
 *   o primário entra sempre no cálculo, mesmo quando é 0
 */

const formatadorEuros = new Intl.NumberFormat('pt-PT', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: 'always',
});

const formatadorEurosRedondos = new Intl.NumberFormat('pt-PT', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
  useGrouping: 'always',
});

/** "1 234,50 €" (ou sem decimais quando decimais: 0) */
export function formatarEuros(valor, { decimais = 2 } = {}) {
  if (!Number.isFinite(valor)) return '';
  const f = decimais === 0 ? formatadorEurosRedondos : formatadorEuros;
  return f.format(valor);
}

/** "220 m²" com separador de milhares pt-PT */
export function formatarNumero(valor, decimais = 0) {
  if (!Number.isFinite(valor)) return '';
  return new Intl.NumberFormat('pt-PT', {
    minimumFractionDigits: decimais,
    maximumFractionDigits: decimais,
    useGrouping: 'always',
  }).format(valor);
}

/** Percentagem inteira, ex.: "43%" */
export function formatarPercentagem(fracao) {
  if (!Number.isFinite(fracao)) return '';
  return `${Math.round(fracao * 100)}%`;
}

/**
 * Preços efetivos de um produto: os da configuração com as alterações
 * do visitante aplicadas por cima (apenas as permitidas por `editavel`).
 */
export function precosEfetivos(produto, alteracoes = {}) {
  const base = produto.precos;
  const podeEditarPrecos = Boolean(produto.editavel?.precos);
  const p = podeEditarPrecos ? alteracoes : {};

  return {
    maoDeObra: numeroOuBase(p.maoDeObra, base.maoDeObra),
    primario: numeroOuBase(p.primario, base.primario),
    tinta: {
      branco: numeroOuBase(p.tinta?.branco, base.tinta.branco),
      corClara: numeroOuBase(p.tinta?.corClara, base.tinta.corClara),
    },
  };
}

/** Durabilidade efetiva, em anos (null quando o produto não tem projeção). */
export function durabilidadeEfetiva(produto, alteracoes = {}) {
  if (produto.durabilidadeAnos == null) return null;
  if (!produto.editavel?.durabilidade) return produto.durabilidadeAnos;
  const valor = Number(alteracoes.durabilidadeAnos);
  return Number.isFinite(valor) && valor > 0 ? valor : produto.durabilidadeAnos;
}

function numeroOuBase(valor, base) {
  /* campo vazio ou não preenchido volta ao valor de configuração */
  if (valor === '' || valor === null || valor === undefined) return base;
  const n = Number(valor);
  return Number.isFinite(n) && n >= 0 ? n : base;
}

/** Preço por m² = mão de obra + primário + tinta do acabamento escolhido. */
export function precoPorM2(precos, acabamento) {
  return precos.maoDeObra + precos.primario + (precos.tinta[acabamento] ?? 0);
}

/** Custo de uma pintura completa. */
export function custoPorPintura(precos, area, acabamento) {
  return precoPorM2(precos, acabamento) * area;
}

/** Nº de pinturas necessárias no horizonte, arredondado para cima. */
export function numeroDePinturas(horizonteAnos, durabilidadeAnos) {
  if (!durabilidadeAnos || durabilidadeAnos <= 0) return 1;
  return Math.max(1, Math.ceil(horizonteAnos / durabilidadeAnos));
}

/**
 * Anos em que há pintura: a primeira no ano 0, as seguintes a cada
 * `durabilidadeAnos`. Ex.: 10 anos em 20 → [0, 10].
 */
export function anosDePintura(horizonteAnos, durabilidadeAnos) {
  const total = numeroDePinturas(horizonteAnos, durabilidadeAnos);
  const passo = durabilidadeAnos && durabilidadeAnos > 0 ? durabilidadeAnos : horizonteAnos;
  return Array.from({ length: total }, (_, i) => i * passo);
}

/**
 * Custo acumulado ao longo do horizonte, em degraus.
 * Devolve os pontos do gráfico e os eventos de pintura.
 */
export function serieAcumulada({ custoUnitario, horizonteAnos, durabilidadeAnos }) {
  const anos = anosDePintura(horizonteAnos, durabilidadeAnos);
  const eventos = anos.map((ano, i) => ({
    ano,
    custo: custoUnitario,
    acumulado: custoUnitario * (i + 1),
  }));

  const pontos = [];
  eventos.forEach((evento, i) => {
    if (i > 0) pontos.push({ ano: evento.ano, valor: eventos[i - 1].acumulado });
    pontos.push({ ano: evento.ano, valor: evento.acumulado });
  });
  const ultimo = eventos[eventos.length - 1];
  pontos.push({ ano: horizonteAnos, valor: ultimo.acumulado });

  return { eventos, pontos, total: ultimo.acumulado };
}

/** Valor acumulado num determinado ano (inclui a pintura feita nesse ano). */
export function acumuladoNoAno(eventos, ano) {
  return eventos.reduce((soma, e) => (e.ano <= ano ? e.acumulado : soma), 0);
}

/** Faixa de estimativa, ex.: ±10%. */
export function faixaEstimativa(valor, margem) {
  return { minimo: valor * (1 - margem), maximo: valor * (1 + margem) };
}

/**
 * Resultado completo de um produto.
 * `horizonteAnos` só é usado quando o produto tem durabilidade.
 */
export function calcularProduto(produto, { area, acabamento, horizonteAnos, alteracoes }) {
  const precos = precosEfetivos(produto, alteracoes);
  const durabilidade = durabilidadeEfetiva(produto, alteracoes);
  const porM2 = precoPorM2(precos, acabamento);
  const custoUnitario = porM2 * area;

  const temProjecao = durabilidade != null;
  const serie = temProjecao
    ? serieAcumulada({ custoUnitario, horizonteAnos, durabilidadeAnos: durabilidade })
    : null;

  const total = temProjecao ? serie.total : custoUnitario;

  return {
    produto,
    precos,
    durabilidade,
    precoPorM2: porM2,
    custoPorPintura: custoUnitario,
    numeroDePinturas: temProjecao ? serie.eventos.length : 1,
    serie,
    total,
    custoPorAno: temProjecao ? total / horizonteAnos : null,
  };
}

/** Poupança da referência face à alternativa, em euros e em percentagem. */
export function calcularPoupanca(referencia, alternativa) {
  const valor = alternativa.total - referencia.total;
  const percentagem = alternativa.total > 0 ? valor / alternativa.total : 0;
  return { valor, percentagem };
}

/**
 * Resultado de uma zona (exterior ou interior): os dois produtos,
 * a poupança e a faixa de estimativa.
 */
export function calcularZona(zona, { area, acabamento, horizonteAnos, margem, alteracoes = {} }) {
  const opcoes = { area, acabamento, horizonteAnos };
  const referencia = calcularProduto(zona.referencia, {
    ...opcoes,
    alteracoes: alteracoes[zona.referencia.id],
  });
  const alternativa = calcularProduto(zona.alternativa, {
    ...opcoes,
    alteracoes: alteracoes[zona.alternativa.id],
  });

  return {
    zona,
    referencia,
    alternativa,
    poupanca: calcularPoupanca(referencia, alternativa),
    faixas: {
      [zona.referencia.id]: faixaEstimativa(referencia.total, margem),
      [zona.alternativa.id]: faixaEstimativa(alternativa.total, margem),
    },
  };
}

/** Área a partir de largura × altura × pisos. */
export function areaEstimada({ largura, altura, pisos }) {
  const l = Number(largura);
  const a = Number(altura);
  const p = Number(pisos);
  if (![l, a, p].every((v) => Number.isFinite(v) && v > 0)) return null;
  return Math.round(l * a * p);
}
