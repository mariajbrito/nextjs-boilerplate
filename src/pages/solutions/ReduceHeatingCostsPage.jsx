import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, TrendingDown, Euro, Zap, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateFAQSchema } from '@/utils/schemaMarkup';

const ReduceHeatingCostsPage = () => {
  const { language = 'pt', t = {} } = useLanguage() || {};
  const isPt = language === 'pt';

  const title = isPt ? 'Reduzir Custos de Aquecimento' : 'Reduce Heating Costs';
  const metaTitle = isPt
    ? 'Como Reduzir Custos de Aquecimento até 40%'
    : 'How to Reduce Heating Costs by up to 40%';
  const desc = isPt
    ? 'Reduza a fatura de aquecimento entre 30 e 40% com radiadores Duotherm em pedra natural e revestimento cerâmico ClimateCoating. Retorno do investimento em 3 a 5 anos.'
    : 'Cut heating bills by 30 to 40% with Duotherm natural stone radiators and ClimateCoating ceramic coating. Return on investment in 3 to 5 years.';

  const faqs = isPt ? [
    { question: 'Quanto posso poupar na fatura de energia?', answer: 'Os nossos clientes registam poupanças de 30 a 40% nos custos de aquecimento, dependendo do isolamento existente e dos hábitos de uso.' },
    { question: 'Em quanto tempo recupero o investimento?', answer: 'Tipicamente entre 3 a 5 anos, com base nas poupanças mensais em energia. Após esse período, o ganho é total.' },
    { question: 'O Duotherm funciona em todas as divisões?', answer: 'Sim. Existe uma gama ampla de modelos em diferentes tamanhos e acabamentos em pedra natural, adequados a qualquer divisão e estilo de decoração.' },
    { question: 'O ClimateCoating substitui o isolamento tradicional?', answer: 'Complementa o isolamento existente. A membrana cerâmica reduz as perdas térmicas em paredes e tetos, funcionando em conjunto com outros sistemas.' },
    { question: 'Preciso de obras para instalar o Duotherm?', answer: 'Não. Os radiadores Duotherm são plug-and-play ligam à tomada elétrica normal, sem necessidade de instalação de tubagens ou obras.' },
  ] : [
    { question: 'How much can I save on my energy bill?', answer: 'Our clients record savings of 30 to 40% in heating costs, depending on existing insulation and usage habits.' },
    { question: 'How long until I recover my investment?', answer: 'Typically 3 to 5 years, based on monthly energy savings. After that period, all savings are pure gain.' },
    { question: 'Does Duotherm work in all rooms?', answer: 'Yes. There is a wide range of models in different sizes and natural stone finishes, suitable for any room and decorative style.' },
    { question: 'Does ClimateCoating replace traditional insulation?', answer: 'It complements existing insulation. The ceramic membrane reduces thermal losses in walls and ceilings, working alongside other systems.' },
    { question: 'Do I need construction work to install Duotherm?', answer: 'No. Duotherm radiators are plug-and-play they connect to a regular electrical socket, with no pipe installation or construction needed.' },
  ];

  const stats = [
    { icon: TrendingDown, value: '30-40%', label: isPt ? 'Redução na fatura' : 'Bill reduction' },
    { icon: Euro,         value: '3-5',    label: isPt ? 'Anos de ROI' : 'Years to ROI' },
    { icon: Zap,          value: '100%',   label: isPt ? 'Energia elétrica' : 'Electric energy' },
    { icon: CheckCircle2, value: '0',      label: isPt ? 'Obras necessárias' : 'Works needed' },
  ];

  const tips = isPt ? [
    { title: 'Aquecimento por zonas', desc: 'Aqueça apenas as divisões em uso. Os radiadores Duotherm permitem controlo independente por divisão.' },
    { title: 'Temperatura de conforto mais baixa', desc: 'A sensação de calor dos infravermelhos é igual à de ar aquecido 2-3°C mais alto o que significa menos consumo.' },
    { title: 'Isolamento das paredes', desc: 'O ClimateCoating retém até 30% do calor que normalmente se perde pelas paredes e tetos.' },
    { title: 'Programação inteligente', desc: 'Vários modelos Duotherm incluem termostato e temporizador, evitando gastos desnecessários.' },
  ] : [
    { title: 'Zone heating', desc: 'Heat only rooms in use. Duotherm radiators allow independent control per room.' },
    { title: 'Lower comfort temperature', desc: 'The warmth of infrared feels the same as air heated 2-3°C higher which means less consumption.' },
    { title: 'Wall insulation', desc: 'ClimateCoating retains up to 30% of the heat normally lost through walls and ceilings.' },
    { title: 'Smart scheduling', desc: 'Several Duotherm models include a thermostat and timer, avoiding unnecessary spending.' },
  ];

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={desc}
        canonical="/solutions/reduce-heating-costs"
        schemas={[generateFAQSchema(faqs)]}
        language={language}
        image="/Duotherm/saladeestar.png"
      />

      <div className="min-h-screen pb-16">
        {/* Hero */}
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img
            src="/reduzircustos.png"
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
                { label: title, path: '/solutions/reduce-heating-costs' }
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-orange-50 border border-orange-100 rounded-2xl p-5 text-center"
                >
                  <Icon className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600 mb-1">{s.value}</div>
                  <div className="text-xs text-gray-600">{s.label}</div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* Problem */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isPt ? 'O Problema dos Custos Energéticos' : 'The Energy Cost Problem'}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isPt
                    ? 'Com a escalada dos preços da energia na Europa, o aquecimento doméstico e comercial tornou-se um dos maiores encargos fixos. Sistemas ineficientes, paredes sem isolamento e hábitos de uso inadequados podem triplicar os custos reais face ao necessário.'
                    : 'With rising energy prices across Europe, domestic and commercial heating has become one of the biggest fixed costs. Inefficient systems, uninsulated walls and improper usage habits can triple actual costs compared to what is necessary.'}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isPt
                    ? 'A boa notícia: com a tecnologia certa, é possível reduzir entre 30% e 40% da fatura, sem sacrificar conforto, com um retorno do investimento em poucos anos.'
                    : 'The good news: with the right technology, it is possible to reduce the bill by 30% to 40% without sacrificing comfort, with a return on investment in a few years.'}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isPt ? 'A Nossa Abordagem' : 'Our Approach'}
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Duotherm</h3>
                      <p className="text-sm text-gray-600">
                        {isPt
                          ? 'Radiadores em pedra natural com tecnologia de infravermelhos. Aquecem por irradiação direta, sem circular ar mais saudável e até 40% mais eficiente que convecção.'
                          : 'Natural stone radiators with infrared technology. They heat by direct radiation without circulating air healthier and up to 40% more efficient than convection.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">ClimateCoating</h3>
                      <p className="text-sm text-gray-600">
                        {isPt
                          ? 'Membrana cerâmica aplicada em paredes e tetos que retém o calor no interior e impede pontes térmicas reduz perdas energéticas em até 30%.'
                          : 'Ceramic membrane applied to walls and ceilings that retains heat inside and prevents thermal bridges reduces energy losses by up to 30%.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  {isPt ? '4 Formas de Poupar Mais' : '4 Ways to Save More'}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tips.map((tip, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">{tip.title}</h3>
                        <p className="text-xs text-gray-600">{tip.desc}</p>
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
                  {isPt ? 'Simulação Gratuita' : 'Free Simulation'}
                </h3>
                <p className="text-orange-100 text-sm mb-5">
                  {isPt
                    ? 'Calculamos a poupança estimada para o seu espaço. Grátis e sem compromisso.'
                    : 'We calculate the estimated savings for your space. Free and no commitment.'}
                </p>
                <Link to="/contact" className="block w-full py-3 bg-white text-orange-600 rounded-xl text-center font-bold hover:bg-orange-50 transition-colors">
                  {isPt ? 'Pedir Simulação' : 'Request Simulation'}
                </Link>
                <div className="mt-4 pt-4 border-t border-orange-500 space-y-2 text-sm text-orange-100">
                  <div>✓ {isPt ? 'Sem obras' : 'No construction'}</div>
                  <div>✓ {isPt ? 'ROI em 3-5 anos' : 'ROI in 3-5 years'}</div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h4 className="font-bold text-gray-900 mb-3">
                  {isPt ? 'Produtos relacionados' : 'Related products'}
                </h4>
                <div className="space-y-2">
                  <Link to="/products/duotherm" className="flex items-center justify-between text-sm text-gray-600 hover:text-orange-600 py-2 border-b border-gray-100 transition-colors">
                    Duotherm <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/products/climatecoating" className="flex items-center justify-between text-sm text-gray-600 hover:text-orange-600 py-2 transition-colors">
                    ClimateCoating <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReduceHeatingCostsPage;
