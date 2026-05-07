import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, TrendingDown, Euro, Zap, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateFAQSchema, generateServiceSchema, generatePtBreadcrumb } from '@/utils/schemaMarkup';
import { COMPANY } from '@/config/company';

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
    { question: 'Qual é a diferença entre Duotherm e caldeira tradicional?', answer: 'O Duotherm aquece por irradiação, sem perder energia por tubagens e circulação de água. Isto resulta em 40% mais eficiência e menor desperdício. A caldeira tradicional aquece o ar que se dispersa facilmente.' },
    { question: 'O aquecimento infravermelhos é seguro para crianças e animais?', answer: 'Completamente seguro. Os radiadores Duotherm não emitem raio ultravioleta nocivo, apenas infravermelhos que imitam o calor do sol. Não há riscos de queimadura por contato breve.' },
    { question: 'Posso usar Duotherm apenas no inverno?', answer: 'Sim. Como não requerem manutenção e são plug-and-play, pode guardá-los no verão e instalar apenas quando necessário. Isto torna a solução ainda mais eficiente economicamente.' },
  ] : [
    { question: 'How much can I save on my energy bill?', answer: 'Our clients record savings of 30 to 40% in heating costs, depending on existing insulation and usage habits.' },
    { question: 'How long until I recover my investment?', answer: 'Typically 3 to 5 years, based on monthly energy savings. After that period, all savings are pure gain.' },
    { question: 'Does Duotherm work in all rooms?', answer: 'Yes. There is a wide range of models in different sizes and natural stone finishes, suitable for any room and decorative style.' },
    { question: 'Does ClimateCoating replace traditional insulation?', answer: 'It complements existing insulation. The ceramic membrane reduces thermal losses in walls and ceilings, working alongside other systems.' },
    { question: 'Do I need construction work to install Duotherm?', answer: 'No. Duotherm radiators are plug-and-play they connect to a regular electrical socket, with no pipe installation or construction needed.' },
    { question: 'What is the difference between Duotherm and traditional boiler?', answer: 'Duotherm heats by radiation without losing energy through piping and water circulation. This results in 40% more efficiency and less waste. Traditional boilers heat air which disperses easily.' },
    { question: 'Is infrared heating safe for children and pets?', answer: 'Completely safe. Duotherm radiators do not emit harmful ultraviolet radiation, only infrared that mimics heat from the sun. There is no risk of burns from brief contact.' },
    { question: 'Can I use Duotherm only in winter?', answer: 'Yes. Since they require no maintenance and are plug-and-play, you can store them in summer and install only when needed. This makes the solution even more economically efficient.' },
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
        schemas={[
          generateFAQSchema(faqs),
          generateServiceSchema({
            name: isPt ? 'Redução de Custos de Aquecimento' : 'Heating Cost Reduction',
            description: isPt
              ? 'Redução de 30 a 40% nos custos de aquecimento com radiadores Duotherm em pedra natural e revestimento ClimateCoating. Análise gratuita.'
              : 'Cut heating costs by 30 to 40% with Duotherm natural stone radiators and ClimateCoating. Free assessment.',
            url: `${COMPANY.baseUrl}/solutions/reduce-heating-costs`,
            serviceType: isPt ? 'Eficiência energética em aquecimento' : 'Heating energy efficiency',
          }),
          generatePtBreadcrumb([
            { name: isPt ? 'Soluções' : 'Solutions', path: '/solutions' },
            { name: title, path: '/solutions/reduce-heating-costs' },
          ]),
        ]}
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

              {/* Tipos de redução */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  {isPt ? 'Tipos de Redução de Custos' : 'Types of Cost Reduction'}
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {isPt ? 'Substituição por Duotherm' : 'Duotherm Replacement'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {isPt
                          ? 'Trocar caldeira ou radiadores ineficientes por Duotherm reduz consumo 30-40%. Sem obras, ligação direta à corrente. Mais seguro, saudável e silencioso.'
                          : 'Replacing inefficient boiler or radiators with Duotherm reduces consumption by 30-40%. No construction, direct electrical connection. Safer, healthier and quieter.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {isPt ? 'Isolamento com ClimateCoating' : 'Insulation with ClimateCoating'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {isPt
                          ? 'Aplicar membrana cerâmica em paredes e tetos reduz perdas de 30%. Melhora o isolamento existente e impede pontes térmicas. ROI em 4-6 anos.'
                          : 'Applying ceramic membrane to walls and ceilings reduces losses by 30%. Improves existing insulation and prevents thermal bridges. ROI in 4-6 years.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {isPt ? 'Solução Combinada' : 'Combined Solution'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {isPt
                          ? 'Duotherm + ClimateCoating juntos potenciam eficiência a até 60%. Aquecimento eficiente com melhor isolamento. Poupança máxima em 3-4 anos.'
                          : 'Duotherm + ClimateCoating together maximize efficiency up to 60%. Efficient heating with better insulation. Maximum savings in 3-4 years.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Soluções por setor */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  {isPt ? 'Soluções por Setor' : 'Solutions by Sector'}
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Habitação Unifamiliar</h3>
                      <p className="text-sm text-gray-600">
                        {isPt
                          ? 'Casas e apartamentos beneficiam de redução imediata sem obras. Duotherm aquece divisões seletivamente, ClimateCoating melhora paredes. ROI: 3-5 anos.'
                          : 'Houses and apartments benefit from immediate reduction with no construction. Duotherm selectively heats rooms, ClimateCoating improves walls. ROI: 3-5 years.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Espaços Comerciais</h3>
                      <p className="text-sm text-gray-600">
                        {isPt
                          ? 'Lojas, escritórios e restaurantes reduzem fatura mensal significativamente. Controlo por zona permite aquecimento apenas de áreas ocupadas. ROI: 2-3 anos.'
                          : 'Shops, offices and restaurants significantly reduce monthly bills. Zone control allows heating only occupied areas. ROI: 2-3 years.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Edifícios Antigos</h3>
                      <p className="text-sm text-gray-600">
                        {isPt
                          ? 'Edifícios históricos com isolamento deficiente beneficiam de Duotherm + ClimateCoating. Sem danificar fachadas, melhoram eficiência 50%. ROI: 4-6 anos.'
                          : 'Historic buildings with poor insulation benefit from Duotherm + ClimateCoating. Without damaging facades, improve efficiency 50%. ROI: 4-6 years.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Indústria Ligeira</h3>
                      <p className="text-sm text-gray-600">
                        {isPt
                          ? 'Fábricas e oficinas com grandes áreas aquecidas reduzem consumo com Duotherm modular. Aquecimento por zonas otimiza custos. ROI: 2-4 anos.'
                          : 'Factories and workshops with large heated areas reduce consumption with modular Duotherm. Zone heating optimizes costs. ROI: 2-4 years.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processo */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  {isPt ? 'Como Reduzimos Custos (Passo a Passo)' : 'How We Reduce Costs (Step by Step)'}
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      num: 1,
                      title: isPt ? 'Diagnóstico Energético Gratuito' : 'Free Energy Audit',
                      desc: isPt
                        ? 'Analisamos consumo atual, sistemas existentes, isolamento das paredes, janelas e hábitos de uso.'
                        : 'We analyze current consumption, existing systems, wall insulation, windows and usage habits.',
                    },
                    {
                      num: 2,
                      title: isPt ? 'Plano Personalizado de Redução' : 'Personalized Reduction Plan',
                      desc: isPt
                        ? 'Recomendamos solução (Duotherm, ClimateCoating ou combinada) com simulação de poupança anual e ROI específico.'
                        : 'We recommend solution (Duotherm, ClimateCoating or combined) with annual savings simulation and specific ROI.',
                    },
                    {
                      num: 3,
                      title: isPt ? 'Orçamento Transparente' : 'Transparent Budget',
                      desc: isPt
                        ? 'Apresentamos custo total, poupança estimada mensal/anual, prazo de retorno do investimento e garantias.'
                        : 'We present total cost, estimated monthly/annual savings, investment payback period and warranties.',
                    },
                    {
                      num: 4,
                      title: isPt ? 'Instalação Rápida' : 'Quick Installation',
                      desc: isPt
                        ? 'Se Duotherm: ligação à corrente em 1 hora. Se ClimateCoating: aplicação sem obras, em 2-5 dias conforme área.'
                        : 'If Duotherm: plug in within 1 hour. If ClimateCoating: application without construction, in 2-5 days depending on area.',
                    },
                    {
                      num: 5,
                      title: isPt ? 'Suporte Pós-Venda' : 'After-Sales Support',
                      desc: isPt
                        ? 'Monitoramento de poupança, manutenção gratuita dos primeiros 2 anos, assistência técnica telefónica 24/7.'
                        : 'Savings monitoring, free maintenance for first 2 years, 24/7 technical phone support.',
                    },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                      <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {step.num}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cobertura geográfica */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  {isPt ? 'Onde Reduzimos Custos de Aquecimento' : 'Where We Reduce Heating Costs'}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    'Algarve', 'Lisboa', 'Porto', 'Cascais', 'Sintra',
                    'Setúbal', 'Comporta', 'Madeira', 'Açores'
                  ].map((region, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{region}</span>
                    </div>
                  ))}
                </div>
                <div className="p-5 bg-orange-50 border border-orange-200 rounded-xl">
                  <p className="text-sm text-gray-700">
                    {isPt
                      ? 'Operamos em todo o território português continental e ilhas, com equipe técnica especializada, garantia de serviço e suporte local em cada região.'
                      : 'We operate throughout mainland Portugal and islands, with specialized technical team, service warranty and local support in each region.'}
                  </p>
                  <Link to="/algarve" className="text-orange-600 font-semibold mt-3 inline-flex items-center gap-2 hover:text-orange-700 transition-colors">
                    {isPt ? 'Ver soluções no Algarve' : 'View Algarve solutions'} <ArrowRight className="w-4 h-4" />
                  </Link>
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
