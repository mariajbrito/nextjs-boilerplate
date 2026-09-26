import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Thermometer, Zap, Shield, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema, generatePtBreadcrumb, generateFAQSchema } from '@/utils/schemaMarkup';

const FEATURES = [
  'Aquecimento uniforme por toda a superfície do piso',
  'Conforto térmico desde o chão, sem correntes de ar',
  'Instalação simples sob qualquer tipo de revestimento',
  'Compatível com cerâmica, porcelânico, pedra e vinyl',
  'Termostato programável com controlo de temperatura',
  'Funcionamento silencioso e sem manutenção',
  'Alta eficiência energética com baixo consumo',
  'Ideal para casas de banho, cozinhas e divisões interiores',
];

const SPECS = [
  { label: 'Aplicação', value: 'Interior' },
  { label: 'Revestimentos', value: 'Cerâmica, pedra, vinyl' },
  { label: 'Controlo', value: 'Termostato programável' },
  { label: 'Alimentação', value: 'Elétrica (220V)' },
  { label: 'Instalação', value: 'Sob o revestimento' },
  { label: 'Marca', value: 'AHT' },
];

// Perguntas que as pessoas escrevem no Google antes de pedir orcamento. Alem de
// aparecerem na pagina, alimentam o FAQPage do schema.org, o que faz o resultado
// ocupar mais espaco na pesquisa.
const FAQS = [
  {
    question: 'Quanto custa instalar piso radiante elétrico?',
    answer: 'O custo depende da área a aquecer, do tipo de revestimento e da potência necessária. Numa casa de banho típica de 4 a 6 m2 o investimento situa-se na gama de algumas centenas de euros, material e termostato incluídos. Como o sistema AHT tem apenas 1 mm de espessura e é aplicado sob o revestimento, não há custos de demolição nem de elevação do pavimento. Pedimos sempre as medidas da divisão para dar um valor fechado.',
  },
  {
    question: 'Qual é o consumo de um piso radiante elétrico?',
    answer: 'O consumo depende da potência instalada por metro quadrado e das horas de funcionamento. Com termostato programável, o sistema só trabalha nos períodos definidos e desliga ao atingir a temperatura, pelo que o consumo real é muito inferior à potência nominal. Em divisões bem isoladas o piso radiante é dos sistemas elétricos mais eficientes, porque aquece as superfícies e não o ar.',
  },
  {
    question: 'Qual a diferença entre piso radiante elétrico e a água?',
    answer: 'O piso radiante elétrico usa uma resistência ligada à corrente e instala-se sob o revestimento, sem caldeira, sem tubagem e sem obras. O piso radiante a água exige caldeira ou bomba de calor, circuito hidráulico e betonilha, o que implica obra e subida do nível do pavimento. Para remodelações e divisões isoladas, a versão elétrica é bastante mais simples e mais rápida.',
  },
  {
    question: 'Pode ser instalado em obra de remodelação?',
    answer: 'Sim. É esse o caso mais comum. O sistema AHT em metal amorfo tem 1 mm de espessura, o que permite aplicá-lo sobre o pavimento existente e assentar a cerâmica por cima, sem levantar o piso antigo e sem perder altura útil na divisão.',
  },
  {
    question: 'Serve para casa de banho e zonas húmidas?',
    answer: 'Sim, é a aplicação mais procurada. Mantém o pavimento seco e quente, o que reduz a condensação e o risco de bolor nas zonas húmidas. A instalação é feita por eletricista com as proteções exigidas para estes espaços.',
  },
];

const BENEFITS = [
  {
    icon: Thermometer,
    title: 'Calor por toda a superfície',
    desc: 'O calor distribui-se de forma homogénea por todo o pavimento, eliminando zonas frias e garantindo conforto imediato.',
  },
  {
    icon: Zap,
    title: 'Eficiência energética',
    desc: 'Tecnologia de resistência elétrica de alta eficiência, com consumo controlado pelo termostato programável.',
  },
  {
    icon: Shield,
    title: 'Sem manutenção',
    desc: 'Sistema sem peças móveis nem fluidos. Uma vez instalado, não requer qualquer manutenção ao longo dos anos.',
  },
  {
    icon: Droplets,
    title: 'Ideal para casas de banho',
    desc: 'Especialmente indicado para zonas húmidas. Mantém o piso seco e quente, aumentando o conforto no dia a dia.',
  },
];

export default function PisoRadiantePage() {
  return (
    <>
      <SEOHead
        title="Piso Radiante Elétrico: Preço, Consumo e Instalação | AHT"
        description="Piso radiante elétrico ultrafino de 1 mm, aplicado sem obras sob cerâmica, pedra ou vinyl. Saiba o preço, o consumo real e onde instalar chão ou pavimento radiante elétrico."
        canonical="/products/piso-radiante"
        image="/Piso radiante/Pisoradianteahtcasadebanho.jpg"
        schemas={[
          generateProductSchema({ name: 'Piso Radiante Elétrico AHT', description: 'Piso radiante elétrico ultrafino de 1 mm em metal amorfo, para aquecimento de pavimento sob cerâmica, pedra ou vinyl. Termostato programável, instalação sem obras.', image: `${COMPANY.baseUrl}/Piso radiante/Pisoradianteahtcasadebanho.jpg`, brand: 'AHT', url: `${COMPANY.baseUrl}/products/piso-radiante` }),
          generateFAQSchema(FAQS),
          generatePtBreadcrumb([{ name: 'Produtos', path: '/products' }, { name: 'Piso Radiante Elétrico', path: '/products/piso-radiante' }]),
        ]}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <div className="relative h-80 md:h-[520px] overflow-hidden">
          <img
            src="/Piso radiante/Pisoradianteahtcasadebanho.jpg"
            alt="Piso radiante eléctrico AHT em casa de banho"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex justify-center pt-3 px-4">
              <Breadcrumb
                items={[
                  { label: 'Início', path: '/' },
                  { label: 'Produtos', path: '/products' },
                  { label: 'Piso Radiante Eléctrico', path: '/products/piso-radiante' },
                ]}
                dark
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-8">
              <span className="inline-block bg-orange-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Proteção e Conforto</span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight drop-shadow-lg">Piso Radiante Elétrico</h1>
              <p className="text-orange-400 font-semibold mt-2 text-lg drop-shadow">Chão e Pavimento Radiante · 1 mm de Espessura · Sem Obras</p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* Intro */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Conforto a partir do chão</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O <strong>piso radiante eléctrico AHT</strong> é uma solução de aquecimento por pavimento que transforma qualquer divisão num espaço acolhedor e confortável. A resistência eléctrica, instalada sob o revestimento, aquece de forma homogénea toda a superfície do chão, sem correntes de ar, sem pó em suspensão e sem ruído.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ao contrário do aquecimento tradicional, que aquece o ar e deixa o pavimento frio, o piso radiante cria uma sensação de calor natural e envolvente, semelhante à do sol. Ideal para casas de banho, cozinhas, quartos e corredores.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Esta solução aparece com vários nomes: <strong>chão radiante elétrico</strong>, <strong>pavimento radiante elétrico</strong>, piso aquecido ou soalho radiante. Trata-se sempre do mesmo princípio, uma resistência elétrica sob o revestimento que aquece toda a superfície do pavimento.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Com o termostato programável incluído, é possível definir horários e temperaturas para cada divisão, maximizando o conforto e a eficiência energética.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  A Evoluimos Comércio disponibiliza igualmente <strong>piso radiante da marca Duotherm</strong>. O que distingue o AHT dos restantes pisos radiantes elétricos é o facto de ser ultrafino, em metal amorfo, e de aquecimento rápido, com apenas 1 mm de espessura e 15 anos de garantia do fabricante.
                </p>
              </div>

              {/* Photo in text */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/Piso radiante/pisoradianteaht.jpg"
                  alt="Sistema de piso radiante eléctrico AHT instalado"
                  className="w-full object-cover"
                  style={{ maxHeight: '340px', objectPosition: 'center' }}
                  loading="lazy"
                />
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Vantagens</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {BENEFITS.map((b, i) => {
                    const Icon = b.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="flex gap-4 bg-orange-50 border border-orange-100 rounded-xl p-4"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm mb-1">{b.title}</div>
                          <div className="text-gray-500 text-sm leading-relaxed">{b.desc}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Características</h2>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {FEATURES.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 rounded-xl p-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Especificações</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {SPECS.map(s => (
                    <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4">
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">{s.label}</div>
                      <div className="font-bold text-gray-900 text-sm">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preço e consumo: as duas perguntas que travam a decisão */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Preço e consumo</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O preço de um piso radiante elétrico depende de três coisas: a área a aquecer, a potência necessária para essa divisão e o tipo de revestimento que vai por cima. Não há valor único, mas há uma vantagem clara em relação ao piso radiante a água: como o sistema AHT tem 1 mm de espessura e assenta sobre o pavimento existente, não entra na conta nenhum custo de demolição, de betonilha nova ou de ajuste de portas.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Quanto ao consumo, o número que interessa não é a potência instalada mas as horas em que o sistema trabalha de facto. Com o termostato programável, o piso aquece nos períodos definidos e desliga ao atingir a temperatura. Numa divisão com isolamento razoável, os ciclos de funcionamento são curtos. Em casas sem isolamento, o consumo sobe muito, e nesse caso vale a pena tratar primeiro o isolamento.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/simulador" className="inline-flex items-center px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-sm transition-colors">
                    Simular custos
                  </Link>
                  <Link to="/isolamento-termico" className="inline-flex items-center px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl font-bold text-sm transition-colors">
                    Ver isolamento térmico
                  </Link>
                </div>
              </div>

              {/* Perguntas frequentes, espelho do FAQPage no schema */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Perguntas frequentes</h2>
                <div className="space-y-3">
                  {FAQS.map((f) => (
                    <div key={f.question} className="bg-white border border-gray-200 rounded-2xl p-5">
                      <h3 className="font-bold text-gray-900 mb-2">{f.question}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aplicações */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Onde aplicar</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  O piso radiante eléctrico é especialmente indicado para divisões onde o conforto térmico junto ao solo faz toda a diferença. A instalação é feita sob qualquer tipo de revestimento cerâmico, em porcelânico, pedra natural ou materiais vinílicos compatíveis.
                </p>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  {['Casas de banho e zonas húmidas', 'Cozinhas', 'Quartos e suites', 'Corredores e halls de entrada', 'Espaços de trabalho e escritórios'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-6 text-white">
                <h3 className="font-extrabold text-xl mb-2">Pedir Informação</h3>
                <p className="text-gray-400 text-sm mb-5">Indicamos a solução certa para a sua divisão e tipo de revestimento.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <Link to="/contact"
                  className="block w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center transition-colors">
                  Pedir Orçamento
                </Link>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Proteção e Conforto</p>
                <p className="text-sm text-gray-700 mb-3">Conheça outras soluções da gama Proteção e Conforto da Evoluimos Comércio.</p>
                <Link to="/products/climatecoating" className="block text-xs text-orange-600 font-bold hover:text-orange-700 mb-1">
                  ClimateCoating →
                </Link>
                <Link to="/products/drymat" className="block text-xs text-orange-600 font-bold hover:text-orange-700 mb-1">
                  Drymat Anti-Humidade →
                </Link>
                <Link to="/products/bioclimatizadores" className="block text-xs text-orange-600 font-bold hover:text-orange-700">
                  Bioclimatizadores →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Marca</p>
                <p className="text-lg font-extrabold text-gray-900 mb-1">AHT</p>
                <p className="text-sm text-gray-500">Tecnologia de aquecimento de pavimento de alta eficiência.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
