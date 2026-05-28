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
  'Porto', 'Vila Nova de Gaia', 'Matosinhos', 'Maia', 'Gondomar', 'Valongo',
  'Trofa', 'Paredes', 'Penafiel', 'Santo Tirso', 'Vila do Conde', 'Póvoa de Varzim',
  'Espinho', 'Braga', 'Guimarães', 'Famalicão', 'Coimbra', 'Aveiro',
];

const PROBLEMS = [
  {
    icon: Droplets,
    title: 'Humidade em casas antigas do Porto e Gaia',
    text: 'Casas em granito do centro histórico do Porto, Ribeira e Foz sofrem com humidade ascendente e condensação. Drymat e ClimateCoating tratam sem alterar a estrutura original.',
    link: '/humidade-nas-paredes',
  },
  {
    icon: Zap,
    title: 'Invernos frios e húmidos no Norte',
    text: 'O clima atlântico do Norte traz humidade constante e temperaturas baixas. Soluções por infravermelhos e isolamento ClimateCoating mantêm a casa quente e seca com menos consumo.',
    link: '/aquecimento-sem-obras',
  },
  {
    icon: Wind,
    title: 'Bolor e condensação em apartamentos',
    text: 'Apartamentos antigos do Porto, Gaia e Braga têm tipicamente problemas de condensação em casas de banho, cozinhas e dormitórios. ClimateCoating regula a humidade do ar.',
    link: '/humidade-nas-paredes',
  },
  {
    icon: Sun,
    title: 'Esplanadas do Norte abertas todo o ano',
    text: 'Restaurantes e bares em Matosinhos, Foz, Vila do Conde e centro do Porto aumentam faturação com aquecedores Solamagic e ComfortSun em esplanadas e varandas.',
    link: '/aquecimento-exterior',
  },
];

const FAQS = [
  {
    question: 'Trabalham em todo o Norte de Portugal?',
    answer: 'Sim. Servimos Porto, Vila Nova de Gaia, Matosinhos, Braga, Guimarães, Famalicão, Aveiro, Coimbra e zonas envolventes. Visitas técnicas gratuitas, agendadas por blocos semanais.',
  },
  {
    question: 'O clima húmido do Norte exige soluções diferentes?',
    answer: 'Sim. Recomendamos sempre tratar primeiro a humidade ascendente com Drymat antes de aplicar isolamento ou aquecimento. Em zonas atlânticas, a combinação Drymat + ClimateCoating é particularmente eficaz.',
  },
  {
    question: 'Quanto tempo demora a primeira visita?',
    answer: 'Tipicamente entre 5 e 10 dias úteis, dependendo da agenda de zona. Para situações urgentes, comerciais ou condomínios, conseguimos prioridade.',
  },
  {
    question: 'Tratam de habitações em centros históricos?',
    answer: 'Sim. Trabalhamos frequentemente em centros históricos do Porto (UNESCO) e Guimarães. Os nossos sistemas Drymat e ClimateCoating não exigem obras invasivas, sendo adequados a edifícios classificados.',
  },
];

export default function PortoPage() {
  const localBusiness = generateLocalBusinessSchema('pt');
  const localBusinessPorto = {
    ...localBusiness,
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Distrito do Porto' },
      { '@type': 'AdministrativeArea', 'name': 'Distrito de Braga' },
      { '@type': 'AdministrativeArea', 'name': 'Distrito de Aveiro' },
      { '@type': 'City', 'name': 'Porto' },
      { '@type': 'City', 'name': 'Vila Nova de Gaia' },
      { '@type': 'City', 'name': 'Braga' },
      { '@type': 'City', 'name': 'Guimarães' },
      { '@type': 'City', 'name': 'Coimbra' },
    ],
  };

  return (
    <>
      <SEOHead
        title="Aquecimento, Anti-Humidade e Isolamento Térmico no Porto | Evoluimos Comércio"
        description="Soluções de aquecimento, eliminação de humidade ascendente e isolamento térmico no Porto, Gaia, Braga, Guimarães, Coimbra e Aveiro. Análise gratuita ao imóvel."
        canonical="/porto"
        image="/Drymat/drymatcasa.png"
        schemas={[
          localBusinessPorto,
          generateFAQSchema(FAQS),
          generateServiceSchema({
            name: 'Soluções de Conforto Térmico no Norte de Portugal',
            description: 'Aquecimento, anti-humidade e isolamento térmico no Porto, Braga, Guimarães e Norte de Portugal.',
            url: `${COMPANY.baseUrl}/porto`,
            serviceType: 'Conforto térmico residencial e empresarial',
            areaServed: [
              { '@type': 'AdministrativeArea', 'name': 'Norte de Portugal' },
              { '@type': 'Country', 'name': 'Portugal' },
            ],
          }),
          generatePtBreadcrumb([{ name: 'Porto', path: '/porto' }]),
        ]}
      />

      <div className="min-h-screen bg-gray-50 pt-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Porto', path: '/porto' }]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm mt-6 mb-12"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-orange-600 text-xs font-extrabold uppercase tracking-widest mb-4">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  Porto e Norte
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  Aquecimento, Anti-Humidade e Isolamento Térmico <span className="text-orange-600">no Porto</span>
                </h1>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Servimos o Porto, Vila Nova de Gaia e todo o Norte de Portugal, incluindo Braga, Guimarães, Aveiro e Coimbra. Trabalhamos com habitação privada, centros históricos UNESCO, condomínios e estabelecimentos comerciais.
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
                <img src="/Drymat/drymatcasa.png" alt="Tratamento de humidade no Porto" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
              </div>
            </div>
          </motion.div>

          <section aria-label="Problemas comuns no Norte" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Problemas comuns no Norte de Portugal</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              O clima atlântico do Norte traz humidade constante, invernos frios e edificado em granito. Estas características exigem soluções específicas que sejam eficazes contra a humidade e que melhorem o conforto térmico durante longos meses frios.
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Servimos todo o Norte de Portugal</h2>
            <p className="text-gray-600 mb-6">
              Visitas técnicas gratuitas em todo o Porto, Vila Nova de Gaia, Matosinhos, Maia, Braga, Guimarães, Famalicão, Aveiro e Coimbra. Marcações por blocos semanais.
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Perguntas frequentes sobre o serviço no Porto</h2>
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
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Pedir análise gratuita ao imóvel no Porto e Norte</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
              Visita técnica gratuita em Porto, Gaia, Braga, Guimarães, Aveiro e Coimbra. Sem compromisso.
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
            Cobertura nacional a partir da nossa sede no <Link to="/algarve" className="underline hover:text-orange-600">Algarve</Link>. Servimos também <Link to="/lisboa" className="underline hover:text-orange-600">Lisboa e Margem Sul</Link> e <Link to="/madeira-acores" className="underline hover:text-orange-600">Madeira e Açores</Link>.
          </p>

        </div>
      </div>
    </>
  );
}
