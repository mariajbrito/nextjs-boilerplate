import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sun, TrendingUp, Euro, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateFAQSchema } from '@/utils/schemaMarkup';

const OutdoorComfortPage = () => {
  const { language = 'pt', t = {} } = useLanguage() || {};
  const isPt = language === 'pt';

  const title = isPt ? 'Conforto em Esplanadas e Terraços' : 'Outdoor Patio & Terrace Comfort';
  const metaTitle = isPt
    ? 'Como Aquecer Esplanadas e Terraços no Inverno'
    : 'How to Heat Patios and Terraces in Winter';
  const desc = isPt
    ? 'Aumente a faturação da esplanada em 40 a 50% com aquecedores por infravermelhos. Calor imediato à prova de chuva, sem fumo nem odores. Solução para restaurantes e hotéis.'
    : 'Boost patio revenue by 40 to 50% with infrared heating. Instant warmth, rain-resistant, no smoke or odors. Solution for restaurants and hotels.';

  const faqs = isPt ? [
    { question: 'O aquecimento por infravermelhos funciona com vento?', answer: 'Sim. Ao contrário do aquecimento convencional, os infravermelhos aqueciam os objetos e pessoas diretamente, não o ar, pelo que o vento não afeta a eficiência.' },
    { question: 'Quanto aumenta a faturação com esplanadas aquecidas?', answer: 'Os nossos clientes reportam aumentos de 40-50% na utilização das esplanadas, com extensão da época de 3-4 meses extra por ano.' },
    { question: 'Os aquecedores são seguros para uso exterior?', answer: 'Sim, os modelos Solamagic têm certificação IP para uso exterior, proteção contra chuva e são seguros para espaços com clientes.' },
    { question: 'Qual o consumo elétrico dos aquecedores?', answer: 'Os modelos variam entre 900W e 3000W. Com a tecnologia de carbono Solamagic, o consumo é até 30% inferior a aquecedores convencionais.' },
  ] : [
    { question: 'Does infrared heating work in wind?', answer: 'Yes. Unlike conventional heating, infrared warms objects and people directly, not the air, so wind does not affect efficiency.' },
    { question: 'How much does revenue increase with heated patios?', answer: 'Our clients report 40-50% increases in patio usage, extending the season by 3-4 extra months per year.' },
    { question: 'Are the heaters safe for outdoor use?', answer: 'Yes, Solamagic models have IP certification for outdoor use, rain protection and are safe for spaces with customers.' },
    { question: 'What is the electrical consumption?', answer: 'Models range from 900W to 3000W. With Solamagic carbon technology, consumption is up to 30% lower than conventional heaters.' },
  ];

  const benefits = [
    { icon: TrendingUp, value: '+40-50%', label: isPt ? 'Mais ocupação' : 'More occupancy' },
    { icon: Euro,       value: '+3-4',    label: isPt ? 'Meses de época' : 'Season months' },
    { icon: Sun,        value: '100%',    label: isPt ? 'Eficiência infra.' : 'Infrared efficiency' },
    { icon: Users,      value: '0',       label: isPt ? 'Fumo / odores' : 'Smoke / odors' },
  ];

  const useCases = isPt
    ? [
        { title: 'Restaurantes e Cafés', desc: 'Estenda a época de esplanada e aumente a capacidade exterior durante todo o ano.' },
        { title: 'Hotéis e Spas', desc: 'Crie zonas de conforto outdoor premium para os seus hóspedes em qualquer estação.' },
        { title: 'Eventos e Espaços', desc: 'Aquecimento temporário para eventos ao ar livre, casamentos, festas corporativas.' },
        { title: 'Retalho Exterior', desc: 'Mantenha os clientes confortáveis em áreas de espera e entrance ao ar livre.' },
      ]
    : [
        { title: 'Restaurants & Cafes', desc: 'Extend the patio season and increase outdoor capacity throughout the year.' },
        { title: 'Hotels & Spas', desc: 'Create premium outdoor comfort zones for your guests in any season.' },
        { title: 'Events & Venues', desc: 'Temporary heating for outdoor events, weddings, corporate parties.' },
        { title: 'Outdoor Retail', desc: 'Keep customers comfortable in outdoor waiting areas and entrances.' },
      ];

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={desc}
        canonical="/solutions/outdoor-comfort"
        schemas={[generateFAQSchema(faqs)]}
        language={language}
        image="/ComfortSun/aquecimentoesplanada.jpg"
      />

      <div className="min-h-screen pb-16">
        {/* Hero */}
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img
            src="/ComfortSun/aquecimentoesplanada.jpg"
            alt={title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex justify-center pt-3 px-4">
            <Breadcrumb
              items={[
                { label: t?.nav?.home || 'Início', path: '/' },
                { label: t?.nav?.solutions || 'Soluções', path: '/solutions' },
                { label: title, path: '/solutions/outdoor-comfort' }
              ]}
              dark
            />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">{title}</h1>
          </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl mt-10">
          {/* Results */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {benefits.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-orange-50 border border-orange-100 rounded-2xl p-5 text-center"
                >
                  <Icon className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600 mb-1">{r.value}</div>
                  <div className="text-xs text-gray-600">{r.label}</div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* Why */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isPt ? 'Esplanadas que Rendem o Ano Todo' : 'Patios That Earn All Year'}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isPt
                    ? 'Em Portugal, as esplanadas e terraços representam uma enorme oportunidade de negócio mas apenas se estiverem confortáveis durante a época fria. Com aquecimento por infravermelhos Solamagic, transforma o exterior num espaço utilizável 12 meses por ano.'
                    : 'In Portugal, patios and terraces represent a huge business opportunity but only if they are comfortable during the cold season. With Solamagic infrared heating, you transform the exterior into a usable space 12 months a year.'}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isPt
                    ? 'Ao contrário de braseiras a gás (com fumo e custos de consumíveis), os infravermelhos são limpos, eficientes e instantâneos. Aquecem as pessoas diretamente, sem desperdiçar energia a aquecer o ar.'
                    : 'Unlike gas braziers (with smoke and consumable costs), infrared is clean, efficient and instant. It heats people directly, without wasting energy heating the air.'}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isPt
                    ? 'Complementando a gama Solamagic, os aquecedores de exterior da ComfortSun e os aquecedores polivalentes da ComfortSun oferecem mais opções para aquecer esplanadas e terraços, com tecnologia alemã TÜV certificada.'
                    : 'Complementing the Solamagic range, ComfortSun outdoor heaters and ComfortSun multipurpose heaters offer more options for heating patios and terraces, with certified German TÜV technology.'}
                </p>
              </div>

              {/* Use cases */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  {isPt ? 'Casos de Uso' : 'Use Cases'}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {useCases.map((uc, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">{uc.title}</h3>
                        <p className="text-xs text-gray-600">{uc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">FAQ</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl p-5">
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-orange-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-3">
                  {isPt ? 'Estudo de Viabilidade' : 'Feasibility Study'}
                </h3>
                <p className="text-orange-100 text-sm mb-5">
                  {isPt
                    ? 'Calculamos o retorno do investimento para a sua esplanada. Grátis.'
                    : 'We calculate the return on investment for your patio. Free.'}
                </p>
                <Link to="/contact" className="block w-full py-3 bg-white text-orange-600 rounded-xl text-center font-bold hover:bg-orange-50 transition-colors">
                  {isPt ? 'Pedir Estudo' : 'Request Study'}
                </Link>
                <div className="mt-4 pt-4 border-t border-orange-500 space-y-2 text-sm text-orange-100">
                  <div>✓ {isPt ? 'Instalação rápida' : 'Quick installation'}</div>
                  <div>✓ {isPt ? 'Sem obras' : 'No construction'}</div>
                  <div>✓ {isPt ? 'ROI em 1-2 anos' : 'ROI in 1-2 years'}</div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h4 className="font-bold text-gray-900 mb-3">
                  {isPt ? 'Produto recomendado' : 'Recommended product'}
                </h4>
                <Link to="/products/solamagic" className="flex items-center justify-between text-sm text-gray-600 hover:text-orange-600 py-2 transition-colors">
                  Solamagic {isPt ? 'Infravermelhos' : 'Infrared'} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/products/comfortsun" className="flex items-center justify-between text-sm text-gray-600 hover:text-orange-600 py-2 border-t border-gray-100 transition-colors">
                  ComfortSun <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutdoorComfortPage;
