import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle, Droplet, Shield, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateFAQSchema } from '@/utils/schemaMarkup';

const EliminateWallMoisturePage = () => {
  const { language = 'pt', t = {} } = useLanguage() || {};

  const isPt = language === 'pt';
  const title = isPt ? 'Eliminar Humidade nas Paredes' : 'Eliminate Wall Moisture';
  const metaTitle = isPt
    ? 'Como Eliminar Humidade Ascendente nas Paredes Sem Obras'
    : 'How to Eliminate Ascending Wall Moisture Without Renovation';
  const desc = isPt
    ? 'Solução para humidade ascendente, salitre e condensação nas paredes sem obras. Drymat reduz 80 a 100% da humidade em 2 a 6 meses. ClimateCoating regula o ar interior.'
    : 'Solution for ascending moisture, saltpeter and condensation without renovation. Drymat reduces wall moisture by 80 to 100% in 2 to 6 months, with ClimateCoating support.';

  const faqs = isPt ? [
    { question: 'Quanto tempo demora a eliminar a humidade?', answer: 'Em 2 a 6 meses observa-se uma redução de 80 a 100% da humidade nas paredes.' },
    { question: 'O DRYMAT funciona em edifícios antigos?', answer: 'Sim, é especialmente eficaz em edifícios históricos e de reabilitação, sem obras invasivas.' },
    { question: 'É necessário fazer obras?', answer: 'Não. O sistema DRYMAT é instalado sem demolição e o ClimateCoating é aplicado como tinta normal.' },
    { question: 'Qual é a garantia?', answer: 'O sistema DRYMAT tem garantia de 10 anos e a Climate Coating tem garantia superior a 15 anos.' },
  ] : [
    { question: 'How long does it take to eliminate moisture?', answer: 'In 2 to 6 months you will see an 80 to 100% reduction in wall moisture.' },
    { question: 'Does DRYMAT work in old buildings?', answer: 'Yes, it is especially effective in historic and rehabilitation buildings, without invasive works.' },
    { question: 'Is construction work needed?', answer: 'No. The DRYMAT system is installed without demolition and ClimateCoating is applied like normal paint.' },
    { question: 'What is the warranty?', answer: 'The DRYMAT system has a 10-year warranty and ClimateCoating has a warranty of over 15 years.' },
  ];

  const symptoms = isPt
    ? ['Manchas escuras nas paredes', 'Cheiro a bolor e humidade', 'Tinta a descascar', 'Saúde prejudicada (alergias, asma)', 'Degradação da estrutura', 'Custos energéticos elevados']
    : ['Dark stains on walls', 'Mold and dampness smell', 'Peeling paint', 'Health issues (allergies, asthma)', 'Structural degradation', 'High energy costs'];

  const results = [
    { icon: TrendingDown, value: '80-100%', label: isPt ? 'Redução humidade' : 'Moisture reduction' },
    { icon: Shield,       value: '10 anos', label: isPt ? 'Garantia DRYMAT' : 'DRYMAT warranty' },
    { icon: Droplet,      value: '2-6 meses', label: isPt ? 'Resultados visíveis' : 'Visible results' },
    { icon: CheckCircle2, value: '0 obras', label: isPt ? 'Sem demolição' : 'No demolition' },
  ];

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={desc}
        canonical="/solutions/eliminate-moisture"
        schemas={[generateFAQSchema(faqs)]}
        language={language}
        image="/ClimateCoating/bannermarketing.png"
      />

      <div className="min-h-screen pb-16">
        {/* Hero */}
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img
            src="/semhumidade.png"
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
                { label: title, path: '/solutions/eliminate-moisture' }
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

          {/* Results row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {results.map((r, i) => {
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

              {/* Problem */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {isPt ? 'O Problema da Humidade' : 'The Moisture Problem'}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-5">
                  {isPt
                    ? 'A humidade ascendente é um dos problemas mais comuns em habitações e comércio portugueses, especialmente em edifícios antigos. A água sobe pelas paredes por capilaridade, causando danos estruturais, problemas de saúde e perda de valor do imóvel.'
                    : 'Ascending moisture is one of the most common problems in Portuguese homes and businesses, especially in older buildings. Water rises through walls by capillary action, causing structural damage, health problems, and loss of property value.'}
                </p>
                <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                  <p className="text-sm font-semibold text-red-700 mb-3">
                    {isPt ? 'Sinais de alerta:' : 'Warning signs:'}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {symptoms.map(s => (
                      <div key={s} className="flex items-center gap-2 text-sm text-red-600">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {isPt ? 'A Nossa Solução' : 'Our Solution'}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {isPt
                    ? 'Combinamos o sistema DRYMAT (eliminação da humidade ascendente por frequência eletromagnética) com o ClimateCoating (revestimento térmico cerâmico) para uma solução completa e duradoura.'
                    : 'We combine the DRYMAT system (ascending moisture elimination via electromagnetic frequency) with ClimateCoating (ceramic thermal coating) for a complete and lasting solution.'}
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Droplet className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">DRYMAT</h3>
                      <p className="text-sm text-gray-600">
                        {isPt
                          ? 'Sistema austríaco de frequência eletromagnética que inverte o movimento capilar da água nas paredes. Sem obras, sem demolições.'
                          : 'Austrian electromagnetic frequency system that reverses capillary water movement in walls. No construction, no demolition.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">ClimateCoating</h3>
                      <p className="text-sm text-gray-600">
                        {isPt
                          ? 'Revestimento cerâmico que isola termicamente e impede a condensação. Reduz custos energéticos em até 30%.'
                          : 'Ceramic coating that provides thermal insulation and prevents condensation. Reduces energy costs by up to 30%.'}
                      </p>
                    </div>
                  </div>
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
                  {isPt ? 'Avaliação Gratuita' : 'Free Assessment'}
                </h3>
                <p className="text-orange-100 text-sm mb-5">
                  {isPt
                    ? 'Peça uma avaliação gratuita ao seu espaço. Sem compromisso.'
                    : 'Request a free assessment for your space. No commitment.'}
                </p>
                <Link to="/contact" className="block w-full py-3 bg-white text-orange-600 rounded-xl text-center font-bold hover:bg-orange-50 transition-colors">
                  {isPt ? 'Pedir Avaliação' : 'Request Assessment'}
                </Link>
                <div className="mt-4 pt-4 border-t border-orange-500 space-y-2 text-sm text-orange-100">
                  <div>✓ {isPt ? 'Resposta em 24h' : 'Response in 24h'}</div>
                  <div>✓ {isPt ? 'Orçamento sem obras' : 'Quote without construction'}</div>
                  <div>✓ {isPt ? 'Garantia de 10 anos' : '10-year warranty'}</div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h4 className="font-bold text-gray-900 mb-3">
                  {isPt ? 'Produtos relacionados' : 'Related products'}
                </h4>
                <div className="space-y-2">
                  <Link to="/products/drymat" className="flex items-center justify-between text-sm text-gray-600 hover:text-orange-600 py-2 border-b border-gray-100 transition-colors">
                    DRYMAT <ArrowRight className="w-3.5 h-3.5" />
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

export default EliminateWallMoisturePage;
