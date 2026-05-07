import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown, MessageCircle, HelpCircle, ArrowRight, Search,
  Sun, Droplets, Home, Flame, ShieldCheck, ShoppingCart, X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateFAQSchema } from '@/utils/schemaMarkup';
import { WA_URL as WA } from '@/config/company';

/* ─── Categories ─── */
const CATEGORIES = [
  { id: 'all',          label: 'Todas',                    icon: HelpCircle },
  { id: 'infrared',     label: 'Aquecimento Infravermelho', icon: Sun },
  { id: 'moisture',     label: 'Humidade e Isolamento',     icon: Droplets },
  { id: 'interior',     label: 'Aquecimento Interior',      icon: Home },
  { id: 'comfort',      label: 'Climatização e Conforto',   icon: Flame },
  { id: 'safety',       label: 'Segurança e Saúde',         icon: ShieldCheck },
  { id: 'purchase',     label: 'Compra e Garantia',         icon: ShoppingCart },
];

/* ─── FAQ Data ─── */
const FAQS = [
  // ── Aquecimento Infravermelho ──
  {
    cat: 'infrared',
    q: 'Como funcionam os aquecedores por infravermelhos?',
    a: 'Emitem ondas de calor semelhantes às do sol, aquecendo diretamente superfícies e pessoas sem necessitar de aquecer o ar ambiente. Isto torna o aquecimento mais rápido, eficiente e sem perdas de energia por convecção.',
  },
  {
    cat: 'infrared',
    q: 'O que distingue os aquecedores por infravermelhos dos convencionais?',
    a: 'Os aquecedores convencionais aquecem o ar (convecção), que sobe e se dissipa facilmente. Os infravermelhos transferem calor diretamente para objetos e pessoas (radiação), eliminando perdas e proporcionando conforto imediato, mesmo ao ar livre com vento.',
  },
  {
    cat: 'infrared',
    q: 'Com que rapidez os aquecedores ComfortSun e Solamagic aquecem?',
    a: 'O aquecimento é praticamente imediato. Como o calor é emitido diretamente para superfícies e pessoas, sente-se a diferença em segundos, ao contrário dos sistemas tradicionais que demoram a aquecer todo o volume de ar.',
  },
  {
    cat: 'infrared',
    q: 'Posso usar aquecedores por infravermelhos no exterior?',
    a: 'Sim, são a solução ideal para esplanadas, jardins e terraços. O calor não é disperso pelo vento, proporcionando conforto mesmo em dias frios e ventosos. Modelos como o Solamagic e ComfortSun têm certificação IP25 para uso ao ar livre.',
  },
  {
    cat: 'infrared',
    q: 'Posso usar aquecedores por infravermelhos no interior?',
    a: 'Sim. Os painéis AHT e as pedras da Duotherm são concebidos especificamente para interiores, sem ruído, sem odores, sem circulação de poeiras. São particularmente indicados para pessoas com alergias ou sensibilidades respiratórias.',
  },
  {
    cat: 'infrared',
    q: 'Por que o calor infravermelho é comparado à luz solar?',
    a: 'Tanto o sol como os aquecedores por infravermelhos utilizam radiação infravermelha para aquecer diretamente. É o mesmo tipo de calor natural que sentimos ao sol, imediato, confortável e sem ressecar o ambiente. A diferença é que os nossos equipamentos não emitem radiação UV prejudicial.',
  },
  {
    cat: 'infrared',
    q: 'Qual a diferença entre ComfortSun e Solamagic?',
    a: 'O Solamagic é a nossa gama premium de infravermelhos de onda curta, com 92% de eficiência e design alemão de topo, ideal para espaços de luxo. O ComfortSun oferece excelente relação qualidade-preço com múltiplas linhas (Polivalente, Professional, Deluxe, Especializado) adaptadas a diferentes necessidades e orçamentos.',
  },
  {
    cat: 'infrared',
    q: 'Qual a diferença entre as linhas Professional e Deluxe da ComfortSun?',
    a: 'A linha Professional prioriza potência e durabilidade para uso intensivo em espaços comerciais. A linha Deluxe apresenta design sofisticado, com controlo remoto, conectividade Bluetooth e app móvel, e lâmpadas Low Glare para menor brilho.',
  },
  {
    cat: 'infrared',
    q: 'O que é a linha Especializado da ComfortSun?',
    a: 'A linha Especializado da ComfortSun destina-se a ambientes com requisitos específicos. Inclui o aquecedor CSB para casa de banho, certificado IP25 (proteção contra salpicos) e aprovado pelo TÜV, disponível em 1000W, 1200W e 1400W, com telecomando e timer programável. Inclui também um aquecedor para fraldário de bebé com lâmpada Low Glare de iluminação suave e proteção de dupla camada para máxima segurança.',
  },
  {
    cat: 'infrared',
    q: 'O que são os painéis AHT?',
    a: 'Os painéis AHT são aquecedores de infravermelhos para interior. Funcionam com infravermelhos de onda longa, ideais para aquecimento de divisões interiores. Incluem ecrã LED touchscreen, conectividade Wi-Fi com app de controlo, timer programável, duplo termostato de segurança e temperatura ajustável entre 16°C e 37°C. São silenciosos, sem emissão de gases e sem circulação de poeiras.',
  },
  {
    cat: 'infrared',
    q: 'O que são lâmpadas HeLeN e Low Glare?',
    a: 'As lâmpadas HeLeN são tecnologia patenteada alemã que converte quase 100% da energia em calor. As lâmpadas Low Glare emitem calor com um brilho visual muito reduzido, ideais para ambientes onde a luminosidade dos aquecedores seria indesejada, como restaurantes e espaços de relaxamento.',
  },
  {
    cat: 'infrared',
    q: 'Quais são as opções de instalação para infravermelhos?',
    a: 'Podem ser instalados no teto, na parede ou em suportes móveis (como as torres Polivalente), dependendo do modelo e das necessidades do espaço. Os modelos de teto são os mais eficientes pois distribuem o calor de cima para baixo. A nossa equipa aconselha a solução mais adequada a cada caso.',
  },

  // ── Humidade e Isolamento ──
  {
    cat: 'moisture',
    q: 'O que é o sistema Drymat e como funciona?',
    a: 'O Drymat é um sistema alemão que utiliza tecnologia de frequência eletromagnética para eliminar a humidade ascendente nas paredes. Altera a polaridade da água dentro das paredes, fazendo-a descer de volta ao solo. Não necessita de obras nem de intervenção invasiva.',
  },
  {
    cat: 'moisture',
    q: 'Quanto tempo demora o Drymat a secar as paredes?',
    a: 'Os resultados visíveis surgem entre 2 a 6 meses, dependendo da espessura das paredes e do grau de humidade.',
  },
  {
    cat: 'moisture',
    q: 'Como sei se tenho problemas de humidade ascendente?',
    a: 'Os sintomas mais comuns são: manchas escuras na base das paredes, cheiro a mofo, eflorescências (depósitos de sal branco), tinta a descascar, paredes frias e húmidas ao toque, e problemas respiratórios dos ocupantes. Oferecemos análise e avaliação gratuita no local.',
  },
  {
    cat: 'moisture',
    q: 'O que é o ClimateCoating e como funciona?',
    a: 'É um revestimento cerâmico de nanotecnologia alemã que se aplica como tinta normal mas funciona como uma membrana térmica inteligente. Regula a humidade do ar (~55%), seca paredes húmidas e pode reduzir custos de climatização entre 10% e 40%, de acordo com estudos efetuados. Disponível para interiores (ThermoVital/ThermoPlus), exteriores (ThermoProtect) e coberturas (ThermoActive).',
  },
  {
    cat: 'moisture',
    q: 'O ClimateCoating substitui o isolamento tradicional?',
    a: 'Em muitos casos, sim. Funciona como mais do que uma tinta, substitui tanto a pintura como sistemas de isolamento convencional. A membrana cerâmica cria um efeito endotérmico que regula a temperatura e humidade, com resultados validados por estudos internacionais.',
  },
  {
    cat: 'moisture',
    q: 'Posso usar ClimateCoating no exterior do edifício?',
    a: 'Sim. A versão ThermoProtect é uma membrana impermeável que protege contra chuva e humidade, ao mesmo tempo que reflete o calor solar no verão. A versão ThermoActive é específica para coberturas planas e inclinadas, reduzindo drasticamente o ganho de calor no verão.',
  },

  // ── Aquecimento Interior ──
  {
    cat: 'interior',
    q: 'O que são os radiadores Duotherm?',
    a: 'São sistemas de aquecimento por radiação infravermelha integrados em pedra natural. Fabricados com tecnologia alemã e produção portuguesa, funcionam como elemento decorativo e de aquecimento.',
  },
  {
    cat: 'interior',
    q: 'Os radiadores Duotherm são difíceis de instalar?',
    a: 'Não. Não requerem instalação invasiva, basta fixar na parede e ligar à corrente. Incluem termostato para controlo preciso de temperatura. Não necessitam de manutenção (apenas ligar/desligar) e têm garantia de fábrica de 10 anos.',
  },
  {
    cat: 'interior',
    q: 'Os radiadores Duotherm ajudam com problemas de humidade?',
    a: 'Sim. Ao aquecer as paredes por radiação, ajudam a secar as superfícies e a prevenir a formação de condensação e bolores. É um benefício adicional ao conforto térmico que proporcionam.',
  },

  // ── Climatização e Conforto ──
  {
    cat: 'comfort',
    q: 'O que são os bioclimatizadores e como funcionam?',
    a: 'São sistemas de arrefecimento por evaporação natural de água, uma alternativa saudável ao ar condicionado. Não usam compressor nem gases fluorados, consomem muito pouca eletricidade e humidificam o ar em climas secos. Funcionam melhor com ventilação (janelas abertas).',
  },
  {
    cat: 'comfort',
    q: 'Qual bioclimatizador devo escolher?',
    a: 'Para espaços até 15 m², o Elite 8 é compacto e silencioso. Para espaços até 25 m², o Elite 14 inclui função anti-mosquitos e ionização do ar. Para espaços grandes ou exteriores até 35 m², o MF 60 é um ventilador com nebulização.',
  },
  {
    cat: 'comfort',
    q: 'O que são as biolareiras Herkell?',
    a: 'São lareiras ecológicas que funcionam com bioetanol (derivado de plantas renováveis). Não necessitam de chaminé, ligação a gás nem obras de instalação, basta colocar onde desejar. Produzem chama real, emitindo apenas vapor de água e CO₂ mínimo (equivalente à respiração).',
  },
  {
    cat: 'comfort',
    q: 'As biolareiras são seguras para usar em interior?',
    a: 'Sim. O bioetanol é um combustível limpo que produz apenas vapor de água e uma quantidade mínima de CO₂. Não produzem fumo, cinza nem cheiros desagradáveis. São adequadas para interiores e exteriores, mas recomenda-se ventilação normal do espaço.',
  },

  // ── Segurança e Saúde ──
  {
    cat: 'safety',
    q: 'Os aquecedores por infravermelhos são seguros?',
    a: 'Sim. Não emitem gases, não levantam poeiras nem ressecam o ar. Incluem proteção contra sobreaquecimento e sistemas de segurança certificados (TÜV). Os modelos ComfortSun Especializado têm certificação IP24 para uso em ambientes húmidos como casas de banho.',
  },
  {
    cat: 'safety',
    q: 'Os aquecedores por infravermelhos são benéficos para a saúde?',
    a: 'Sim. Ao contrário dos aquecedores convencionais, não ressecam o ar nem levantam poeiras. São ideais para pessoas com alergias, asma, problemas respiratórios ou pele sensível. O calor radiante é semelhante ao do sol, natural e confortável.',
  },
  {
    cat: 'safety',
    q: 'Os aquecedores são resistentes às intempéries?',
    a: 'Os modelos para exterior são concebidos para resistir a condições adversas. Modelos com classificação IP25 (ComfortSun, Solamagic) são resistentes à água e poeiras. Modelos com certificação TÜV podem permanecer expostos à chuva.',
  },
  {
    cat: 'safety',
    q: 'Os aquecedores por infravermelhos são sustentáveis?',
    a: 'Sim. Consomem menos energia que os sistemas tradicionais, com quase 100% de conversão em calor. Não produzem emissões de CO₂ nem gases nocivos durante o funcionamento. Combinados com energia solar, tornam-se uma solução de aquecimento com pegada ecológica zero.',
  },

  // ── Compra e Garantia ──
  {
    cat: 'purchase',
    q: 'Os aquecedores por infravermelhos são económicos a longo prazo?',
    a: 'Sim. Aquecem diretamente sem perdas energéticas, o que resulta em faturas de eletricidade mais baixas. Não têm peças móveis nem filtros, logo a manutenção é praticamente zero. Os custos operacionais são significativamente inferiores aos dos sistemas tradicionais de aquecimento.',
  },
  {
    cat: 'purchase',
    q: 'Que garantias oferecem os vossos produtos?',
    a: 'As garantias variam por produto: a Duotherm oferece 10 anos de garantia de fábrica, e os produtos ComfortSun e Solamagic têm 3 anos de garantia.',
  },

  {
    cat: 'purchase',
    q: 'Devo consultar um profissional antes de comprar?',
    a: 'Recomendamos sempre uma consulta prévia gratuita. A orientação profissional permite selecionar o modelo ideal tendo em conta a potência necessária, o local de instalação e o tipo de uso. Contacte-nos sem compromisso, ajudamos a encontrar a solução certa para o seu caso.',
  },
  {
    cat: 'purchase',
    q: 'Posso tornar-me revendedor dos vossos produtos?',
    a: 'Sim. Oferecemos programas de parceria e revenda para profissionais e empresas. Contacte-nos diretamente para conhecer as condições, que incluem preços especiais, suporte técnico e formação sobre os produtos.',
  },
  {
    cat: 'purchase',
    q: 'Oferecem avaliações gratuitas no local?',
    a: 'Sim. Para soluções de humidade (Drymat, ClimateCoating) e projetos de aquecimento, realizamos avaliações e diagnósticos gratuitos no local, para recomendar a solução mais eficaz e adequada ao seu espaço.',
  },
  {
    cat: 'purchase',
    q: 'Os aquecedores por infravermelhos precisam de manutenção?',
    a: 'Não. São equipamentos de baixa manutenção, não possuem peças móveis, filtros nem consumíveis. Basta manter a superfície emissora limpa com um pano seco para garantir o desempenho ideal ao longo de muitos anos.',
  },
];

/* ─── FAQ Item ─── */
function FAQItem({ item, globalIndex, isOpen, onToggle }) {
  const panelId = `faq-panel-${globalIndex}`;
  const buttonId = `faq-button-${globalIndex}`;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-shadow hover:shadow-sm">
      <h3>
        <button
          id={buttonId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50/80 transition-colors"
        >
          <span className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">{item.q}</span>
          <ChevronDown
            className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Page ─── */
export default function FAQPage() {
  const [activeCat, setActiveCat] = useState('all');
  const [search, setSearch] = useState('');
  const [openItems, setOpenItems] = useState({});

  const normalize = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  const filtered = useMemo(() => {
    let items = FAQS;
    if (activeCat !== 'all') items = items.filter(f => f.cat === activeCat);
    if (search.trim()) {
      const term = normalize(search);
      items = items.filter(f => normalize(f.q).includes(term) || normalize(f.a).includes(term));
    }
    return items;
  }, [activeCat, search]);

  const toggleItem = (idx) => setOpenItems(prev => ({ ...prev, [idx]: !prev[idx] }));

  const allOpen = filtered.length > 0 && filtered.every((_, i) => openItems[`${activeCat}-${i}`]);
  const toggleAll = () => {
    const next = {};
    filtered.forEach((_, i) => { next[`${activeCat}-${i}`] = !allOpen; });
    setOpenItems(prev => ({ ...prev, ...next }));
  };

  const faqSchema = generateFAQSchema(
    FAQS.map(f => ({ question: f.q, answer: f.a }))
  );

  const resultCount = filtered.length;
  const catLabel = CATEGORIES.find(c => c.id === activeCat)?.label;

  return (
    <>
      <SEOHead
        title="Perguntas Frequentes sobre Aquecimento e Humidade | FAQ"
        description="Respostas sobre aquecedores infravermelhos, eliminação de humidade ascendente, isolamento térmico, esquentadores elétricos, bioclimatizadores e biolareiras."
        canonical="/faqs"
        schemas={[faqSchema]}
      />
      <div className="min-h-screen bg-gray-50 pt-10 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Perguntas Frequentes', path: '/faqs' }]} />

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-2xl mb-4">
              <HelpCircle className="w-6 h-6 text-orange-600" />
            </div>
            <span className="block text-orange-600 text-xs font-bold uppercase tracking-widest mb-2">Centro de Ajuda</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Encontre respostas sobre os nossos produtos e soluções de conforto térmico, aquecimento e eliminação de humidade.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" aria-hidden="true" />
              <input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Pesquisar perguntas..."
                aria-label="Pesquisar perguntas frequentes"
                className="w-full pl-12 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-shadow shadow-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  aria-label="Limpar pesquisa"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8"
          >
            <div className="flex gap-2 pb-1 flex-wrap justify-center" role="tablist" aria-label="Categorias FAQ">
              {CATEGORIES.map(cat => {
                const Icon = cat.icon;
                const isActive = activeCat === cat.id;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => { setActiveCat(cat.id); setOpenItems({}); }}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-orange-600 text-white shadow-md shadow-orange-200'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">
              {search ? (
                <>
                  <span className="font-semibold text-gray-700">{resultCount}</span>{' '}
                  {resultCount === 1 ? 'resultado' : 'resultados'} para &ldquo;{search}&rdquo;
                </>
              ) : (
                <>
                  <span className="font-semibold text-gray-700">{resultCount}</span>{' '}
                  {resultCount === 1 ? 'pergunta' : 'perguntas'} em {catLabel}
                </>
              )}
            </p>
            {filtered.length > 1 && (
              <button
                onClick={toggleAll}
                className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                {allOpen ? 'Fechar todas' : 'Abrir todas'}
              </button>
            )}
          </div>

          {/* FAQ list */}
          <div className="space-y-3 mb-14" role="tabpanel">
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                filtered.map((item, i) => {
                  const key = `${activeCat}-${item.q}`;
                  const stateKey = `${activeCat}-${i}`;
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ delay: i * 0.03 }}
                      layout
                    >
                      <FAQItem
                        item={item}
                        globalIndex={`${activeCat}-${i}`}
                        isOpen={!!openItems[stateKey]}
                        onToggle={() => toggleItem(stateKey)}
                      />
                    </motion.div>
                  );
                })
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 font-medium">Nenhum resultado encontrado</p>
                  <p className="text-gray-400 text-sm mt-1">Tente pesquisar com outros termos ou selecione outra categoria.</p>
                  <button
                    onClick={() => { setSearch(''); setActiveCat('all'); }}
                    className="mt-4 text-sm text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Limpar filtros
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center"
          >
            <h2 className="text-xl font-extrabold text-gray-900 mb-2">Ainda tem dúvidas?</h2>
            <p className="text-gray-600 text-sm mb-6">
              Fale connosco diretamente, respondemos rapidamente e sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Falar por WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors"
              >
                Pedir Orçamento
              </Link>
            </div>
          </motion.div>

          {/* Cross-links */}
          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            {[
              { label: 'Ver Todos os Produtos', desc: 'Conheça as nossas soluções', path: '/products' },
              { label: 'Soluções por Necessidade', desc: 'Encontre a resposta certa', path: '/solutions' },
              { label: 'Contacte-nos', desc: 'Avaliação gratuita no local', path: '/contact' },
            ].map(link => (
              <Link key={link.path} to={link.path}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all group"
              >
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">{link.label}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{link.desc}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
