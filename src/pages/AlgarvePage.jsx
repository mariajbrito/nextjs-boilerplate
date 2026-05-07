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

const CITIES = [
  'Faro', 'Tavira', 'Vila Nova de Cacela', 'Vila Real de Santo António',
  'Lagos', 'Portimão', 'Albufeira', 'Vilamoura', 'Loulé', 'Quarteira',
  'Olhão', 'Lagoa', 'Silves', 'Castro Marim', 'Monchique',
];

const PROBLEMS = [
  {
    icon: Droplets,
    title: 'Humidade nas paredes em casas à beira-mar',
    text: 'Salinidade, salitre e humidade ascendente são problemas comuns no Algarve. O sistema Drymat seca paredes sem obras, com 80 a 100% de redução em 2 a 6 meses.',
    link: '/products/drymat',
  },
  {
    icon: Sun,
    title: 'Aquecimento de esplanadas no inverno',
    text: 'O Algarve mantém turismo o ano inteiro. Aquecedores Solamagic e ComfortSun aumentam a faturação da esplanada em 40 a 50%, mesmo nos meses mais frios.',
    link: '/products/solamagic',
  },
  {
    icon: Wind,
    title: 'Calor excessivo no verão',
    text: 'Bioclimatizadores e revestimento ClimateCoating reduzem a temperatura interior em 5 a 10 graus, sem ar condicionado e com baixo consumo elétrico.',
    link: '/products/bioclimatizadores',
  },
  {
    icon: Zap,
    title: 'Reabilitação de casas antigas',
    text: 'Casas antigas em Tavira, Olhão, Lagos ou Faro precisam de soluções não invasivas. Drymat e ClimateCoating preservam a estrutura e melhoram conforto.',
    link: '/solutions/eliminate-moisture',
  },
];

const FAQS = [
  {
    question: 'Atendem em todo o Algarve?',
    answer: 'Sim. Estamos sediados em Vila Nova de Cacela e fazemos análise gratuita ao imóvel em todo o distrito de Faro, incluindo Algarve barlavento e sotavento.',
  },
  {
    question: 'Quanto tempo demora a primeira visita?',
    answer: 'Tipicamente entre 24 e 72 horas após contacto. A análise técnica ao imóvel é gratuita e sem compromisso.',
  },
  {
    question: 'Trabalham com casas antigas em zonas históricas?',
    answer: 'Sim. Trabalhamos frequentemente em centros históricos de Tavira, Olhão, Lagos e Faro. Os sistemas Drymat e ClimateCoating não exigem obras invasivas.',
  },
  {
    question: 'Há clientes de referência no Algarve?',
    answer: 'Sim. Servimos restaurantes, hotéis e condomínios no Algarve. Apresentamos casos de referência com autorização do cliente, durante a visita.',
  },
];

export default function AlgarvePage() {
  const localBusiness = generateLocalBusinessSchema('pt');
  const localBusinessAlgarve = {
    ...localBusiness,
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Algarve' },
      { '@type': 'City', 'name': 'Faro' },
      { '@type': 'City', 'name': 'Tavira' },
      { '@type': 'City', 'name': 'Vila Real de Santo António' },
      { '@type': 'City', 'name': 'Lagos' },
      { '@type': 'City', 'name': 'Portimão' },
      { '@type': 'City', 'name': 'Albufeira' },
      { '@type': 'City', 'name': 'Loulé' },
      { '@type': 'City', 'name': 'Olhão' },
    ],
  };

  return (
    <>
      <SEOHead
        title="Aquecimento e Anti-Humidade no Algarve | Evoluimos Comércio"
        description="Soluções de aquecimento, eliminação de humidade ascendente e arrefecimento natural em todo o Algarve. Análise gratuita ao imóvel em Faro, Tavira, Lagos, Portimão."
        canonical="/algarve"
        image="/eduardoexp1.webp"
        schemas={[
          localBusinessAlgarve,
          generateFAQSchema(FAQS),
          generateServiceSchema({
            name: 'Soluções de Conforto Térmico no Algarve',
            description: 'Aquecimento, anti-humidade e arrefecimento natural com instalação em todo o Algarve. Análise gratuita ao imóvel.',
            url: `${COMPANY.baseUrl}/algarve`,
            serviceType: 'Conforto térmico residencial e empresarial',
            areaServed: [
              { '@type': 'AdministrativeArea', 'name': 'Algarve' },
              { '@type': 'Country', 'name': 'Portugal' },
            ],
          }),
          generatePtBreadcrumb([{ name: 'Algarve', path: '/algarve' }]),
        ]}
      />

      <div className="min-h-screen bg-gray-50 pt-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Algarve', path: '/algarve' }]} />

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm mt-6 mb-12"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-orange-600 text-xs font-extrabold uppercase tracking-widest mb-4">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  Algarve
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  Aquecimento, Anti-Humidade e Arrefecimento <span className="text-orange-600">no Algarve</span>
                </h1>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Sediados em Vila Nova de Cacela, fazemos visitas gratuitas a imóveis em todo o Algarve, do barlavento ao sotavento. Trabalhamos com habitação privada, restauração, hotelaria e reabilitação de edifícios.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors">
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a href="tel:+351965026603"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    +351 965 026 603
                  </a>
                </div>
              </div>
              <div className="relative h-64 md:h-auto min-h-[280px]">
                <img src="/eduardoexp2.webp" alt="Conforto térmico no Algarve" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
              </div>
            </div>
          </motion.div>

          {/* Problems */}
          <section aria-label="Problemas comuns no Algarve" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Problemas comuns no Algarve</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              O clima do Algarve traz desafios específicos. Salinidade junto ao mar, oscilação de temperatura, pressão turística sazonal. Para cada problema, há uma solução comprovada.
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

          {/* Cities */}
          <section aria-label="Cidades servidas" className="mb-12 bg-white rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Servimos todo o Algarve</h2>
            <p className="text-gray-600 mb-6">
              Visitas técnicas gratuitas em qualquer concelho do distrito de Faro. Tempo de resposta tipicamente entre 24 e 72 horas.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {CITIES.map(city => (
                <div key={city} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" aria-hidden="true" />
                  {city}
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section aria-label="Perguntas frequentes" className="mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Perguntas frequentes sobre o serviço no Algarve</h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.question} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{f.question}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section aria-label="Pedir análise gratuita" className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Pedir análise gratuita ao imóvel</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
              Resposta em 24 a 72 horas. Visita técnica gratuita em todo o Algarve, sem compromisso.
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

        </div>
      </div>
    </>
  );
}
