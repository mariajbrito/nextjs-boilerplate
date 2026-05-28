import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Phone, MapPin, Sun, Droplets, Wind, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateServiceSchema,
  generatePtBreadcrumb,
} from '@/utils/schemaMarkup';

const ISLANDS = [
  'Funchal', 'Câmara de Lobos', 'Santa Cruz', 'Machico', 'Calheta', 'Ribeira Brava',
  'Ponta Delgada', 'Ribeira Grande', 'Lagoa', 'Angra do Heroísmo', 'Praia da Vitória',
  'Horta', 'São Jorge', 'Pico', 'Santa Maria', 'Graciosa', 'Flores', 'Corvo',
];

const PROBLEMS = [
  {
    icon: Droplets,
    title: 'Humidade severa em casas insulares',
    text: 'A humidade atmosférica permanente de Madeira e Açores penetra paredes e degrada acabamentos. Drymat trata humidade ascendente, ClimateCoating regula o ar interior e impede condensação.',
    link: '/humidade-nas-paredes',
  },
  {
    icon: Wind,
    title: 'Salinidade e maresia agressiva',
    text: 'Casas junto à costa nas ilhas sofrem com salinidade que cristaliza nas paredes e acelera a deterioração. ClimateCoating ThermoProtect cria membrana impermeável e respirável.',
    link: '/isolamento-termico',
  },
  {
    icon: Zap,
    title: 'Aquecimento eléctrico caro',
    text: 'Nas ilhas o custo de energia eléctrica é elevado e o gás difícil de logística. Soluções eficientes por infravermelhos e isolamento térmico cortam consumo até 60%.',
    link: '/reduzir-custos-aquecimento',
  },
  {
    icon: Sun,
    title: 'Aquecimento de varandas e esplanadas',
    text: 'Hotelaria e restauração na Madeira e Açores prolongam estação turística com aquecedores Solamagic em esplanadas e varandas, mesmo em meses ventosos.',
    link: '/aquecimento-exterior',
  },
];

const FAQS = [
  {
    question: 'Trabalham em todas as ilhas da Madeira e dos Açores?',
    answer: 'Sim. Atendemos Madeira, Porto Santo e todas as ilhas dos Açores: São Miguel, Terceira, Faial, Pico, São Jorge, Graciosa, Santa Maria, Flores e Corvo. Logística agendada por blocos de instalação.',
  },
  {
    question: 'Como funciona a logística de instalação nas ilhas?',
    answer: 'Trabalhamos em blocos de instalação por ilha, agrupando vários clientes para optimizar deslocações de técnico e equipamento. Tipicamente entre 4 e 8 semanas após contacto.',
  },
  {
    question: 'A humidade nas ilhas é tratável apesar do clima atlântico?',
    answer: 'Sim. O sistema Drymat funciona independentemente da humidade atmosférica exterior. Trata a humidade ascendente do solo e, em combinação com ClimateCoating, controla também a condensação interior comum em ilhas.',
  },
  {
    question: 'Os equipamentos são adequados a casas junto ao mar?',
    answer: 'Sim. Os aquecedores Solamagic e ComfortSun têm versões para ambientes corrosivos (estrutura em alumínio e aço inox). O ClimateCoating é resistente à maresia e ao salitre, com garantia superior a 15 anos.',
  },
];

export default function MadeiraAcoresPage() {
  const localBusiness = generateLocalBusinessSchema('pt');
  const localBusinessIlhas = {
    ...localBusiness,
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Região Autónoma da Madeira' },
      { '@type': 'AdministrativeArea', 'name': 'Região Autónoma dos Açores' },
      { '@type': 'City', 'name': 'Funchal' },
      { '@type': 'City', 'name': 'Ponta Delgada' },
      { '@type': 'City', 'name': 'Angra do Heroísmo' },
      { '@type': 'City', 'name': 'Horta' },
    ],
  };

  return (
    <>
      <SEOHead
        title="Aquecimento, Anti-Humidade e Isolamento Térmico na Madeira e Açores | Evoluimos Comércio"
        description="Soluções de aquecimento, eliminação de humidade ascendente e isolamento térmico na Madeira e Açores. Tratamento adaptado ao clima atlântico e à maresia."
        canonical="/madeira-acores"
        image="/ClimateCoating/baldestinta.webp"
        schemas={[
          localBusinessIlhas,
          generateFAQSchema(FAQS),
          generateServiceSchema({
            name: 'Soluções de Conforto Térmico na Madeira e Açores',
            description: 'Aquecimento, anti-humidade e isolamento térmico nas Regiões Autónomas da Madeira e Açores.',
            url: `${COMPANY.baseUrl}/madeira-acores`,
            serviceType: 'Conforto térmico residencial e empresarial',
            areaServed: [
              { '@type': 'AdministrativeArea', 'name': 'Madeira' },
              { '@type': 'AdministrativeArea', 'name': 'Açores' },
              { '@type': 'Country', 'name': 'Portugal' },
            ],
          }),
          generatePtBreadcrumb([{ name: 'Madeira e Açores', path: '/madeira-acores' }]),
        ]}
      />

      <div className="min-h-screen bg-gray-50 pt-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Madeira e Açores', path: '/madeira-acores' }]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm mt-6 mb-12"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-orange-600 text-xs font-extrabold uppercase tracking-widest mb-4">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  Madeira e Açores
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  Aquecimento, Anti-Humidade e Isolamento Térmico <span className="text-orange-600">na Madeira e Açores</span>
                </h1>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Trabalhamos em todas as ilhas da Madeira e dos Açores. As nossas soluções estão adaptadas ao clima atlântico, à humidade permanente e à maresia agressiva que caracteriza o edificado insular.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors">
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a href={`tel:${COMPANY.phoneBare}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    {COMPANY.phone}
                  </a>
                </div>
              </div>
              <div className="relative h-64 md:h-auto min-h-[280px]">
                <img src="/ClimateCoating/baldestinta.webp" alt="Tratamento de humidade e isolamento na Madeira e Açores" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
              </div>
            </div>
          </motion.div>

          <section aria-label="Problemas comuns nas ilhas" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Problemas comuns nas ilhas</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              O clima atlântico das regiões autónomas combina humidade permanente, maresia, ventos fortes e variações térmicas suaves mas exigentes. Cada problema tem solução adaptada às especificidades insulares.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {PROBLEMS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-orange-600" aria-hidden="true" />
                    </div>
                    <h3 className="font-extrabold text-gray-900 mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.text}</p>
                    <Link to={p.link} className="inline-flex items-center gap-1 text-sm font-bold text-orange-600 hover:text-orange-700">
                      Ver solução <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section aria-label="Localidades servidas" className="mb-12 bg-white rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Atendemos todas as ilhas</h2>
            <p className="text-gray-600 mb-6">
              Cobertura em todas as ilhas da Madeira e dos Açores. Logística por blocos de instalação para optimizar deslocação de técnico e materiais. Marcação típica entre 4 e 8 semanas.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {ISLANDS.map(city => (
                <div key={city} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" aria-hidden="true" />
                  {city}
                </div>
              ))}
            </div>
          </section>

          <section aria-label="Perguntas frequentes" className="mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Perguntas frequentes sobre o serviço nas ilhas</h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.question} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{f.question}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-label="Pedir análise gratuita" className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Pedir análise gratuita na Madeira ou Açores</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
              Resposta inicial em 48 horas. Visita técnica agendada por bloco de instalação na ilha, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                WhatsApp
              </a>
              <Link to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors">
                Pedir Orçamento
              </Link>
            </div>
          </section>

          <p className="text-center text-xs text-gray-500 mt-10 leading-relaxed">
            Cobertura nacional a partir da nossa sede no <Link to="/algarve" className="underline hover:text-orange-600">Algarve</Link>. Servimos também <Link to="/lisboa" className="underline hover:text-orange-600">Lisboa e Margem Sul</Link> e <Link to="/porto" className="underline hover:text-orange-600">Porto e Norte</Link>.
          </p>

        </div>
      </div>
    </>
  );
}
