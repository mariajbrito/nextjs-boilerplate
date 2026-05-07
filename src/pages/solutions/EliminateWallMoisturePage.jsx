import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle, Droplet, Shield, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateFAQSchema, generateServiceSchema, generatePtBreadcrumb } from '@/utils/schemaMarkup';
import { COMPANY } from '@/config/company';

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
    { question: 'O que é a humidade ascendente?', answer: 'É a água que sobe pelas paredes a partir do solo, por capilaridade. É o tipo de humidade mais difícil de tratar e o mais frequente em edifícios antigos ou em zonas húmidas como o litoral.' },
    { question: 'Como sei que tenho humidade ascendente e não condensação?', answer: 'A humidade ascendente aparece sempre na zona inferior das paredes (até cerca de 1,5 metros), com manchas, salitre, tinta a descascar e cheiro a bolor. Já a condensação aparece nos cantos e tetos, perto de janelas, e tipicamente desaparece com ventilação adequada.' },
    { question: 'Quanto tempo demora a eliminar a humidade nas paredes?', answer: 'Em 2 a 6 meses observa-se uma redução de 80 a 100% da humidade nas paredes. O Drymat atua continuamente e a parede vai secando progressivamente.' },
    { question: 'O Drymat funciona em edifícios antigos e casas em reabilitação?', answer: 'Sim, é especialmente eficaz em edifícios históricos e em reabilitação, porque não exige demolição nem injeções químicas que poderiam danificar a estrutura.' },
    { question: 'É necessário fazer obras para instalar o Drymat?', answer: 'Não. O sistema Drymat é instalado numa parede em poucas horas, sem demolição. O ClimateCoating, quando aplicado posteriormente, funciona como uma tinta normal.' },
    { question: 'Como elimino o salitre e o cheiro a mofo nas paredes?', answer: 'A causa do salitre e do cheiro a mofo é a humidade. Eliminada a humidade ascendente com Drymat, o salitre deixa de aparecer e o cheiro desaparece em poucos meses.' },
    { question: 'Qual é a garantia do tratamento?', answer: 'O sistema Drymat tem garantia de 10 anos. O ClimateCoating tem garantia superior a 15 anos.' },
    { question: 'Atendem no Algarve, Lisboa e Porto?', answer: 'Sim. Estamos sediados no Algarve, com cobertura nacional. Fazemos visitas técnicas gratuitas e instalações em todo o Portugal continental e ilhas.' },
  ] : [
    { question: 'What is ascending moisture?', answer: 'It is water rising through walls from the ground, by capillary action. It is the most difficult type of moisture to treat and the most common in older buildings or coastal areas.' },
    { question: 'How do I know if I have ascending moisture and not condensation?', answer: 'Ascending moisture appears in the lower part of walls (up to about 1.5 metres), with stains, saltpeter, peeling paint and mold smell. Condensation appears in corners and ceilings, near windows, and usually disappears with proper ventilation.' },
    { question: 'How long does it take to eliminate wall moisture?', answer: 'In 2 to 6 months you will see an 80 to 100% reduction. Drymat acts continuously and the wall dries progressively.' },
    { question: 'Does Drymat work in old buildings under rehabilitation?', answer: 'Yes, it is especially effective in historic and rehabilitation buildings, with no demolition or chemical injections that could damage the structure.' },
    { question: 'Is construction work needed?', answer: 'No. The Drymat system is installed in a few hours without demolition. ClimateCoating is then applied like a normal paint.' },
    { question: 'How do I eliminate saltpeter and mold smell?', answer: 'Saltpeter and mold smell are caused by moisture. Once moisture is eliminated, both disappear within a few months.' },
    { question: 'What is the warranty?', answer: 'The Drymat system has a 10-year warranty. ClimateCoating has a warranty of over 15 years.' },
    { question: 'Do you serve all of Portugal?', answer: 'Yes. We are based in the Algarve and operate nationwide, including mainland Portugal, Madeira and the Azores.' },
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
        schemas={[
          generateFAQSchema(faqs),
          generateServiceSchema({
            name: isPt ? 'Eliminação de Humidade Ascendente' : 'Ascending Moisture Elimination',
            description: isPt
              ? 'Serviço de eliminação de humidade ascendente em paredes sem obras, com Drymat e ClimateCoating. Análise gratuita ao imóvel.'
              : 'Service to eliminate ascending wall moisture without renovation, using Drymat and ClimateCoating. Free property analysis.',
            url: `${COMPANY.baseUrl}/solutions/eliminate-moisture`,
            serviceType: isPt ? 'Tratamento de humidade nas paredes' : 'Wall moisture treatment',
          }),
          generatePtBreadcrumb([
            { name: isPt ? 'Soluções' : 'Solutions', path: '/solutions' },
            { name: title, path: '/solutions/eliminate-moisture' },
          ]),
        ]}
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

              {/* Tipos de humidade */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isPt ? 'Tipos de humidade nas paredes' : 'Types of wall moisture'}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  {isPt
                    ? 'Nem toda a humidade é igual. Identificar corretamente o tipo é essencial para escolher o tratamento certo. Trabalhamos os três tipos mais frequentes em Portugal:'
                    : 'Not all moisture is the same. Correct identification is essential to choose the right treatment. We address the three most common types in Portugal:'}
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 mb-1">{isPt ? 'Humidade ascendente' : 'Ascending moisture'}</h3>
                    <p className="text-sm text-gray-700">
                      {isPt
                        ? 'Sobe do solo pelas paredes por capilaridade. Manchas até 1,5 metros de altura, salitre, tinta a descascar. É a mais comum em casas antigas e edifícios à beira-mar. Resolvida pelo Drymat.'
                        : 'Rises from the ground by capillary action. Stains up to 1.5m, saltpeter, peeling paint. Most common in old houses and seaside buildings. Solved by Drymat.'}
                    </p>
                  </div>
                  <div className="border-l-4 border-cyan-500 bg-cyan-50 p-4 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 mb-1">{isPt ? 'Condensação' : 'Condensation'}</h3>
                    <p className="text-sm text-gray-700">
                      {isPt
                        ? 'Vapor de água que condensa em paredes frias, sobretudo no inverno. Manchas escuras nos cantos, tetos e atrás de móveis. Resolvida com ClimateCoating, que regula a humidade do ar interior para cerca de 55%.'
                        : 'Water vapor condensing on cold walls, especially in winter. Dark stains in corners, ceilings and behind furniture. Solved with ClimateCoating, which regulates indoor humidity to around 55%.'}
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 mb-1">{isPt ? 'Infiltrações' : 'Infiltrations'}</h3>
                    <p className="text-sm text-gray-700">
                      {isPt
                        ? 'Água que entra do exterior por fissuras, telhados ou fachadas. Resolvida com ClimateCoating ThermoProtect na fachada, que cria uma membrana impermeável e respirável.'
                        : 'Water entering from outside through cracks, roofs or facades. Solved with ClimateCoating ThermoProtect on the facade, creating a waterproof and breathable membrane.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Como funciona o processo */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isPt ? 'Como funciona o tratamento (passo a passo)' : 'How the treatment works (step by step)'}
                </h2>
                <ol className="space-y-3">
                  {(isPt ? [
                    { t: 'Diagnóstico gratuito', d: 'Visita ao imóvel, medição de humidade nas paredes e identificação do tipo de problema. Apresentamos um plano e orçamento personalizado, sem compromisso.' },
                    { t: 'Instalação do Drymat', d: 'Em poucas horas, sem obras. O equipamento é fixado a uma parede e ligado à corrente. Não há fios pelas divisões nem demolições.' },
                    { t: 'Secagem progressiva', d: 'Durante 2 a 6 meses, o Drymat inverte a capilaridade e a água deixa de subir. Acompanhamos a evolução com medições.' },
                    { t: 'Aplicação de ClimateCoating (opcional)', d: 'Quando a parede já está seca, aplica-se ClimateCoating como tinta interior para regular a humidade do ar e reforçar o isolamento térmico.' },
                    { t: 'Acompanhamento e garantia', d: 'Apoio técnico durante 10 anos no Drymat e 15 anos no ClimateCoating. Se a humidade voltar, voltamos.' },
                  ] : [
                    { t: 'Free diagnosis', d: 'On-site visit, wall moisture measurement and problem identification. We deliver a tailored plan and quote, no commitment.' },
                    { t: 'Drymat installation', d: 'A few hours, no construction. The device is mounted on a wall and connected to power. No wires across rooms, no demolition.' },
                    { t: 'Progressive drying', d: 'Over 2 to 6 months, Drymat reverses capillary action. We monitor progress with measurements.' },
                    { t: 'ClimateCoating application (optional)', d: 'Once the wall is dry, ClimateCoating is applied as interior paint to regulate humidity and reinforce thermal insulation.' },
                    { t: 'Follow-up and warranty', d: '10-year Drymat warranty and 15-year ClimateCoating warranty. If moisture returns, we return.' },
                  ]).map((s, i) => (
                    <li key={i} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{s.t}</h3>
                        <p className="text-sm text-gray-600">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Onde atendemos */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {isPt ? 'Onde tratamos humidade nas paredes' : 'Where we treat wall moisture'}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isPt
                    ? 'O problema da humidade é particularmente comum em zonas costeiras e em edifícios antigos. Trabalhamos em todo o Portugal, com sede no Algarve.'
                    : 'Wall moisture is particularly common in coastal areas and older buildings. We operate throughout Portugal, headquartered in the Algarve.'}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                  {['Algarve', 'Lisboa', 'Porto', 'Setúbal', 'Coimbra', 'Madeira', 'Açores', 'Évora', 'Faro'].map(r => (
                    <div key={r} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>
                {isPt && (
                  <p className="text-sm text-gray-600 mt-4">
                    Cobertura especial no <Link to="/algarve" className="text-orange-600 font-bold hover:underline">Algarve</Link>, com visita gratuita em 24 a 72 horas.
                  </p>
                )}
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
