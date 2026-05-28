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
  'Lisboa', 'Cascais', 'Estoril', 'Oeiras', 'Sintra', 'Mafra',
  'Loures', 'Odivelas', 'Amadora', 'Almada', 'Setúbal', 'Sesimbra',
  'Palmela', 'Montijo', 'Alcochete', 'Vila Franca de Xira',
];

const PROBLEMS = [
  {
    icon: Droplets,
    title: 'Humidade ascendente em prédios antigos do centro',
    text: 'Edifícios do Bairro Alto, Alfama, Mouraria, Estrela e Campo de Ourique sofrem com humidade ascendente. O Drymat seca paredes sem obras, preservando a estrutura original.',
    link: '/humidade-nas-paredes',
  },
  {
    icon: Zap,
    title: 'Casas frias com aquecimento caro',
    text: 'Lisboa tem invernos amenos mas húmidos. Casas sem isolamento ficam frias e o aquecimento eléctrico convencional dispara a fatura. Soluções por infravermelhos e ClimateCoating cortam custos.',
    link: '/reduzir-custos-aquecimento',
  },
  {
    icon: Wind,
    title: 'Apartamentos quentes no verão',
    text: 'Últimos andares e fachadas a sul ou oeste atingem temperaturas extremas. Bioclimatizadores e ClimateCoating ThermoProtect reduzem o calor sem ar condicionado.',
    link: '/casa-quente-no-verao',
  },
  {
    icon: Sun,
    title: 'Esplanadas de Lisboa o ano inteiro',
    text: 'Bares e restaurantes em Belém, Príncipe Real, Cais do Sodré e Marvila aumentam a faturação com aquecedores Solamagic e ComfortSun nas esplanadas.',
    link: '/aquecimento-exterior',
  },
];

const FAQS = [
  {
    question: 'Trabalham em todo o distrito de Lisboa?',
    answer: 'Sim. Servimos Lisboa, Cascais, Estoril, Oeiras, Sintra, Mafra, Loures, Odivelas, Amadora, Almada e toda a margem sul incluindo Setúbal. Visitas técnicas gratuitas.',
  },
  {
    question: 'É possível tratar humidade em prédios antigos de Lisboa?',
    answer: 'Sim. Trabalhamos frequentemente em edifícios pombalinos e gaioleiros em Alfama, Bairro Alto, Mouraria e Estrela. O sistema Drymat não exige demolições, sendo adequado a estruturas históricas.',
  },
  {
    question: 'Quanto tempo demora a primeira visita?',
    answer: 'Tipicamente entre 48 e 96 horas após contacto. Como temos sede no Algarve, a marcação para Lisboa é semanal e agendada por zonas.',
  },
  {
    question: 'Tratam de condomínios e edifícios com várias frações?',
    answer: 'Sim. Apresentamos planos faseados para condomínios em Lisboa, com possibilidade de tratamento por fração ou intervenção integrada na envolvente do edifício.',
  },
];

export default function LisboaPage() {
  const localBusiness = generateLocalBusinessSchema('pt');
  const localBusinessLisboa = {
    ...localBusiness,
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Distrito de Lisboa' },
      { '@type': 'City', 'name': 'Lisboa' },
      { '@type': 'City', 'name': 'Cascais' },
      { '@type': 'City', 'name': 'Oeiras' },
      { '@type': 'City', 'name': 'Sintra' },
      { '@type': 'City', 'name': 'Almada' },
      { '@type': 'City', 'name': 'Setúbal' },
    ],
  };

  return (
    <>
      <SEOHead
        title="Aquecimento, Anti-Humidade e Isolamento Térmico em Lisboa | Evoluimos Comércio"
        description="Soluções de aquecimento, eliminação de humidade ascendente e isolamento térmico em Lisboa, Cascais, Sintra, Almada e Setúbal. Análise gratuita ao imóvel."
        canonical="/lisboa"
        image="/ClimateCoating/bannermarketing.png"
        schemas={[
          localBusinessLisboa,
          generateFAQSchema(FAQS),
          generateServiceSchema({
            name: 'Soluções de Conforto Térmico em Lisboa',
            description: 'Aquecimento, anti-humidade e isolamento térmico em Lisboa e área metropolitana.',
            url: `${COMPANY.baseUrl}/lisboa`,
            serviceType: 'Conforto térmico residencial e empresarial',
            areaServed: [
              { '@type': 'AdministrativeArea', 'name': 'Distrito de Lisboa' },
              { '@type': 'Country', 'name': 'Portugal' },
            ],
          }),
          generatePtBreadcrumb([{ name: 'Lisboa', path: '/lisboa' }]),
        ]}
      />

      <div className="min-h-screen bg-gray-50 pt-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Lisboa', path: '/lisboa' }]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm mt-6 mb-12"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-orange-600 text-xs font-extrabold uppercase tracking-widest mb-4">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  Lisboa
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  Aquecimento, Anti-Humidade e Isolamento Térmico <span className="text-orange-600">em Lisboa</span>
                </h1>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Servimos toda a área metropolitana de Lisboa, do litoral atlântico à península de Setúbal. Trabalhamos com habitação privada, prédios antigos do centro histórico, condomínios e estabelecimentos comerciais.
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
                <img src="/eduardoexp3.webp" alt="Aquecimento e anti-humidade em Lisboa" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
              </div>
            </div>
          </motion.div>

          <section aria-label="Problemas comuns em Lisboa" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Problemas comuns em Lisboa</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              O parque habitacional de Lisboa combina edifícios pombalinos, gaioleiros, modernismo e prédios contemporâneos. Cada tipologia traz desafios térmicos próprios. Para cada um há uma solução comprovada e instalada sem obras pesadas.
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

          <section aria-label="Cidades servidas" className="mb-12 bg-white rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Servimos toda a área metropolitana</h2>
            <p className="text-gray-600 mb-6">
              Visitas técnicas gratuitas em Lisboa, Cascais, Sintra, Oeiras, Almada e toda a margem sul até Setúbal. Marcações agrupadas semanalmente por zona.
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

          <section aria-label="Perguntas frequentes" className="mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Perguntas frequentes sobre o serviço em Lisboa</h2>
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Pedir análise gratuita ao imóvel em Lisboa</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
              Resposta entre 48 e 96 horas. Visita técnica gratuita em Lisboa e área metropolitana, sem compromisso.
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
            Cobertura nacional a partir da nossa sede no <Link to="/algarve" className="underline hover:text-orange-600">Algarve</Link>. Servimos também o <Link to="/porto" className="underline hover:text-orange-600">Porto e Norte</Link> e <Link to="/madeira-acores" className="underline hover:text-orange-600">Madeira e Açores</Link>.
          </p>

        </div>
      </div>
    </>
  );
}
