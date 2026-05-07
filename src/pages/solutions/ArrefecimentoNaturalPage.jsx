import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Wind, Leaf, Zap, ThermometerSnowflake } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateFAQSchema } from '@/utils/schemaMarkup';
import { WA_URL as WA } from '@/config/company';

const ArrefecimentoNaturalPage = () => {
  const { language = 'pt', t = {} } = useLanguage() || {};
  const isPt = language === 'pt';

  const title = isPt ? 'Arrefecimento Natural sem Ar Condicionado' : 'Natural Cooling Without Air Conditioning';
  const metaTitle = isPt
    ? 'Casa Fresca sem Ar Condicionado | Arrefecimento Natural'
    : 'Cool Home Without Air Conditioning | Natural Cooling';
  const desc = isPt
    ? 'Arrefecimento ecológico por evaporação, sem compressor e sem gases. Até 80% menos consumo do que o ar condicionado, ideal para esplanadas, lojas, armazéns e habitação.'
    : 'Eco-friendly evaporative cooling, no compressor or gases. Up to 80% less consumption than air conditioning, ideal for patios, shops, warehouses and homes.';

  const faqs = isPt ? [
    { question: 'Como funciona o arrefecimento por evaporação?', answer: 'A água evapora ao passar por painéis alveolares, absorvendo o calor do ar e reduzindo a temperatura ambiente em 5 a 15 °C. É o mesmo princípio da brisa junto ao mar ou de um rio.' },
    { question: 'Os bioclimatizadores funcionam em espaços fechados?', answer: 'Funcionam melhor em espaços semi-abertos ou com ventilação cruzada, como armazéns, esplanadas cobertas, ginásios e pavilhões. Em divisões totalmente fechadas, é recomendável manter uma abertura para renovação do ar.' },
    { question: 'Quanto poupa face ao ar condicionado?', answer: 'O consumo é até 80% inferior ao de um sistema de ar condicionado convencional. Um bioclimatizador consome entre 100W e 300W, enquanto um A/C equivalente consome 1500W a 3000W.' },
    { question: 'É necessária instalação complexa?', answer: 'Não. Os modelos portáteis ligam-se a uma tomada e necessitam apenas de água. Os modelos fixos podem ser instalados em parede ou teto com tubagem de água simples.' },
    { question: 'Os bioclimatizadores aumentam a humidade do ar?', answer: 'Sim, ligeiramente. Em climas secos como o Algarve e o Alentejo, isso é uma vantagem adicional. Em zonas muito húmidas, o efeito de arrefecimento é menor.' },
  ] : [
    { question: 'How does evaporative cooling work?', answer: 'Water evaporates through honeycomb panels, absorbing heat from the air and reducing ambient temperature by 5 to 15°C. It is the same principle as the breeze near the sea or a river.' },
    { question: 'Do bioclimatic coolers work indoors?', answer: 'They work best in semi-open or cross-ventilated spaces, such as warehouses, covered patios, gyms and pavilions. In fully enclosed rooms, it is recommended to keep an opening for air renewal.' },
    { question: 'How much do you save compared to AC?', answer: 'Consumption is up to 80% lower than a conventional air conditioning system. A bioclimatic cooler uses 100-300W, while an equivalent AC uses 1500-3000W.' },
    { question: 'Is complex installation required?', answer: 'No. Portable models plug into a socket and only need water. Fixed models can be wall or ceiling mounted with simple water piping.' },
    { question: 'Do they increase air humidity?', answer: 'Slightly, yes. In dry climates like the Algarve and Alentejo, this is an additional benefit. In very humid areas, the cooling effect is reduced.' },
  ];

  const benefits = [
    { icon: Zap,                   value: '-80%',  label: isPt ? 'Consumo vs A/C' : 'Consumption vs AC' },
    { icon: ThermometerSnowflake,  value: '-5 a -15°C', label: isPt ? 'Redução temp.' : 'Temp. reduction' },
    { icon: Leaf,                  value: '0',     label: isPt ? 'Gases / CO₂' : 'Gases / CO₂' },
    { icon: Wind,                  value: '100%',  label: isPt ? 'Natural' : 'Natural' },
  ];

  const useCases = isPt
    ? [
        { title: 'Restaurantes e Esplanadas', desc: 'Arrefeça esplanadas cobertas e salas de refeição no verão sem o ruído e custos do ar condicionado.' },
        { title: 'Armazéns e Indústria', desc: 'Grandes volumes de ar arrefecidos de forma económica. Ideal para naves industriais, oficinas e logística.' },
        { title: 'Ginásios e Pavilhões', desc: 'Arrefecimento eficaz em espaços amplos de desporto e lazer, com renovação constante do ar.' },
        { title: 'Habitação e Escritórios', desc: 'Alternativa ecológica ao ar condicionado em casa ou no trabalho. Sem gases, sem manutenção complexa.' },
      ]
    : [
        { title: 'Restaurants & Patios', desc: 'Cool covered patios and dining areas in summer without the noise and cost of air conditioning.' },
        { title: 'Warehouses & Industry', desc: 'Large air volumes cooled economically. Ideal for industrial halls, workshops and logistics.' },
        { title: 'Gyms & Pavilions', desc: 'Effective cooling in large sports and leisure spaces, with constant air renewal.' },
        { title: 'Homes & Offices', desc: 'Eco-friendly alternative to air conditioning at home or work. No gases, no complex maintenance.' },
      ];

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={desc}
        canonical="/solutions/natural-cooling"
        schemas={[generateFAQSchema(faqs)]}
        language={language}
        image="/Bioclimatizadores/bioclimatizadorquarto.png"
      />

      <div className="min-h-screen pb-16">
        {/* Hero */}
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img
            src="/arrefecimentonatural.png"
            alt={title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          <div className="absolute top-20 left-0 right-0 flex justify-center px-4">
            <Breadcrumb
              items={[
                { label: t?.nav?.home || 'Início', path: '/' },
                { label: t?.nav?.solutions || 'Soluções', path: '/solutions' },
                { label: isPt ? 'Arrefecimento Natural' : 'Natural Cooling', path: '/solutions/natural-cooling' },
              ]}
              dark
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                {title}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-white/80 text-lg max-w-xl">
                {isPt
                  ? 'Arrefecimento ecológico por evaporação. Sem compressor, sem gases, com até 80% menos consumo.'
                  : 'Eco-friendly evaporative cooling. No compressor, no gases, up to 80% less consumption.'}
              </motion.p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-8 relative z-10 mb-16">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.07 }}
                  className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 text-center">
                  <Icon className="w-6 h-6 text-blue-500 mx-auto mb-2" aria-hidden="true" />
                  <div className="text-2xl font-extrabold text-gray-900">{b.value}</div>
                  <div className="text-gray-500 text-xs mt-1">{b.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                  {isPt ? 'O Problema do Calor no Verão' : 'The Summer Heat Problem'}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {isPt
                    ? 'O ar condicionado convencional é caro, consome muita energia e utiliza gases refrigerantes prejudiciais ao ambiente. Em espaços amplos ou semi-abertos, é ineficiente e insuficiente. Portugal, com verões que ultrapassam os 40 °C no interior e Algarve, precisa de alternativas inteligentes.'
                    : 'Conventional air conditioning is expensive, consumes a lot of energy and uses refrigerant gases harmful to the environment. In large or semi-open spaces, it is inefficient and insufficient. Portugal, with summers exceeding 40°C in the interior and Algarve, needs smart alternatives.'}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {isPt
                    ? 'Os bioclimatizadores resolvem este problema: arrefecem o ar por evaporação natural da água, sem compressor, sem gases e com um consumo elétrico até 80% inferior ao do ar condicionado tradicional.'
                    : 'Bioclimatic coolers solve this problem: they cool the air through natural water evaporation, without a compressor, without gases, and with electrical consumption up to 80% lower than traditional air conditioning.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                  {isPt ? 'Como Funciona' : 'How It Works'}
                </h2>
                <div className="space-y-3">
                  {(isPt ? [
                    'O ar quente exterior é aspirado e atravessa painéis alveolares saturados de água',
                    'A evaporação da água absorve o calor, reduzindo a temperatura do ar em 5 a 15 °C',
                    'O ar fresco e filtrado é distribuído pelo espaço a arrefecer',
                    'O processo é 100% natural, sem compressor e sem gases refrigerantes',
                    'Funciona melhor em climas secos e quentes como o Algarve e Alentejo',
                  ] : [
                    'Hot outside air is drawn in through water-saturated honeycomb panels',
                    'Water evaporation absorbs heat, reducing air temperature by 5 to 15°C',
                    'Fresh, filtered air is distributed throughout the space',
                    'The process is 100% natural, with no compressor and no refrigerant gases',
                    'Works best in dry, hot climates like the Algarve and Alentejo',
                  ]).map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Use Cases */}
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                  {isPt ? 'Aplicações Ideais' : 'Ideal Applications'}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {useCases.map((uc, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">{uc.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{uc.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                  {isPt ? 'Perguntas Frequentes' : 'FAQ'}
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <details key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                      <summary className="px-5 py-4 font-semibold text-gray-900 text-sm cursor-pointer hover:bg-gray-50 transition-colors list-none flex items-center justify-between gap-3">
                        {faq.question}
                        <span className="text-orange-500 text-lg leading-none flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 sticky top-24">
                <h3 className="font-extrabold text-gray-900 mb-2">
                  {isPt ? 'Simulação Gratuita' : 'Free Simulation'}
                </h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {isPt
                    ? 'Analisamos o seu espaço e recomendamos a solução de arrefecimento ideal, sem compromisso.'
                    : 'We analyze your space and recommend the ideal cooling solution, with no obligation.'}
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-sm transition-colors mb-3">
                  WhatsApp
                </a>
                <Link to="/contact"
                  className="flex items-center justify-center w-full px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-sm transition-colors">
                  {isPt ? 'Pedir Orçamento' : 'Request Quote'}
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 text-sm mb-3">
                  {isPt ? 'Produto Relacionado' : 'Related Product'}
                </h3>
                <Link to="/products/bioclimatizadores" className="flex items-center gap-3 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wind className="w-5 h-5 text-blue-500" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">Bioclimatizadores</div>
                    <div className="text-gray-500 text-xs">{isPt ? 'Ver ficha completa' : 'View full details'}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-orange-400" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArrefecimentoNaturalPage;
