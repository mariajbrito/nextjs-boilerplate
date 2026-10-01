/**
 * Configuração do simulador de custos de pintura.
 *
 * Este ficheiro contém apenas dados: preços, durabilidades e textos.
 * Para alterar valores ou copy, altere aqui e mais nada.
 *
 *   Lógica de cálculo .... src/lib/simulador.js
 *   Interface ............ src/pages/SimuladorPage.jsx
 *
 * Estrutura de um produto:
 *   precos.maoDeObra   €/m² de aplicação
 *   precos.primario    €/m² de primário (entra sempre no cálculo, mesmo a 0)
 *   precos.tinta       €/m² por acabamento (branco, corClara)
 *   durabilidadeAnos   anos até nova pintura (null = sem projeção)
 *   editavel           que campos o visitante pode alterar
 */

export const SIMULADOR_CONFIG = {
  /* ---------------------------------------------------------------- geral */
  horizonteAnos: 20,
  margemEstimativa: 0.1, // faixa de ±10% apresentada no resultado
  areaInicial: 220, // valor sugerido no campo de área, em m²
  areaMinima: 1,
  areaMaxima: 10000,

  acabamentos: [
    { id: 'branco', label: 'Branco' },
    { id: 'corClara', label: 'Cor clara' },
  ],
  acabamentoInicial: 'branco',

  avisoValores:
    'Valores indicativos, sem IVA, sujeitos a avaliação da superfície.',
  notaFaixa:
    'A faixa reflete variações normais de estado da parede, acessos e acabamento.',
  avisoTopo:
    'Este simulador serve para comparar e ter uma ideia dos valores antes da adjudicação. É sempre necessário um orçamento personalizado.',
  avisoResultado:
    'Valores indicativos. É sempre necessário um orçamento personalizado.',

  /* ------------------------------------------------------------- exterior */
  exterior: {
    id: 'exterior',
    label: 'Exterior',
    descricao: 'Fachadas e paredes exteriores',
    /* mostra a projeção de custo acumulado ao longo do horizonte */
    projecao: true,
    tituloResultado: 'O que vai gastar em 20 anos',
    /* texto de apoio da linha de mao de obra, igual nos dois produtos */
    notaMaoDeObra:
      'Inclui preparação, lavagem a alta pressão, reparação com materiais, uma demão de primário e duas demãos de pintura.',
    /* nota de rodape do asterisco na durabilidade de 20 anos */
    notaVidaUtil:
      '* Baseado na experiência dos nossos clientes em todo o mundo, em climas moderados como Portugal.',
    referencia: {
      id: 'thermoprotect',
      nome: 'ThermoProtect',
      etiqueta: 'ClimateCoating',
      precos: {
        maoDeObra: 15,
        primario: 0,
        tinta: { branco: 6.5, corClara: 7 },
      },
      /* texto mostrado no lugar do valor: o primário é necessário, mas o
         seu custo já está incluído no preço da tinta, por isso entra a 0 */
      primarioNota: 'Incluído no preço da tinta',
      durabilidadeAnos: 20,
      editavel: { precos: false, durabilidade: false },
      vantagens: null, // no exterior o resultado em euros já é a vantagem
      incluido: [
        'Aplicação por equipa especializada',
        'Membrana ThermoProtect em fachadas e paredes exteriores',
        'Durabilidade de 20 anos sem repintura*',
      ],
    },
    alternativa: {
      id: 'convencional-exterior',
      nome: 'Tinta convencional de qualidade',
      etiqueta: 'Referência de mercado',
      precos: {
        maoDeObra: 15,
        primario: 1,
        tinta: { branco: 3, corClara: 3.5 },
      },
      primarioNota: null,
      durabilidadeAnos: 10,
      editavel: { precos: true, durabilidade: true },
      notaDurabilidade: 'Valor indicativo. Ajuste se tiver outra referência.',
      vantagens: null,
      incluido: [
        'Aplicação por equipa especializada',
        'Primário de preparação da superfície',
        'Nova pintura sempre que a durabilidade termina',
      ],
    },
  },

  /* ------------------------------------------------------------- interior */
  interior: {
    id: 'interior',
    label: 'Interior',
    descricao: 'Paredes e tetos interiores',
    projecao: false,
    tituloResultado: 'O que vai gastar hoje',
    referencia: {
      id: 'thermovital',
      nome: 'ThermoVital',
      etiqueta: 'ClimateCoating',
      precos: {
        maoDeObra: 10,
        primario: 0,
        tinta: { branco: 3.5, corClara: 4 },
      },
      primarioNota: null,
      mostrarPrimario: false,
      durabilidadeAnos: null,
      editavel: { precos: false, durabilidade: false },
      vantagens: {
        titulo: 'O que o ThermoVital faz pela casa',
        texto:
          'ThermoVital, devido aos efeitos endotérmicos das microesferas cerâmicas com vácuo, seca as paredes, previne condensação, controla a humidade do ar, reduz o consumo da climatização e melhora o ambiente. Zero toxicidade, secagem rápida.',
      },
      incluido: [
        'Aplicação por equipa especializada',
        'Membrana ThermoVital em paredes e tetos',
      ],
    },
    alternativa: {
      id: 'convencional-interior',
      nome: 'Tinta convencional de qualidade',
      etiqueta: 'Referência de mercado',
      precos: {
        maoDeObra: 10,
        primario: 0,
        tinta: { branco: 2, corClara: 2.5 },
      },
      primarioNota: null,
      mostrarPrimario: false,
      durabilidadeAnos: null,
      editavel: { precos: true, durabilidade: false },
      vantagens: {
        titulo: 'O que uma tinta convencional faz',
        texto:
          'Uma boa tinta protege a parede e dá cor. Pode fazer outras coisas, normalmente devido a aditivos químicos.',
      },
      incluido: ['Aplicação por equipa especializada', 'Tinta de qualidade'],
    },
  },

  /* ---------------------------------------------- textos dos campos (UI) */
  rotulos: {
    maoDeObra: 'Mão de obra',
    primario: 'Primário',
    tinta: 'Tinta',
    durabilidade: 'Durabilidade',
    porM2: '€/m²',
    anos: 'anos',
  },
};

export default SIMULADOR_CONFIG;
