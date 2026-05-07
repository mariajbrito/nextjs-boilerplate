import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sun, TrendingUp, Euro, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateFAQSchema, generateServiceSchema, generatePtBreadcrumb } from '@/utils/schemaMarkup';
import { COMPANY } from '@/config/company';

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
    { question: 'Como aquecer uma esplanada de restaurante de forma eficiente?', answer: 'A solução mais eficiente são aquecedores por infravermelhos de onda curta. Aquecem pessoas e objetos diretamente, são imunes ao vento e ligam-se em segundos. Para uma esplanada típica de 30 a 50 m², bastam 2 a 4 aparelhos.' },
    { question: 'O aquecimento por infravermelhos funciona com vento?', answer: 'Sim. Ao contrário do aquecimento convencional, os infravermelhos aquecem objetos e pessoas diretamente, não o ar, pelo que o vento não afeta a eficiência.' },
    { question: 'Quanto aumenta a faturação com esplanadas aquecidas?', answer: 'Os nossos clientes em restauração reportam aumentos de 40 a 50% na utilização das esplanadas, com extensão da época de 3 a 4 meses por ano.' },
    { question: 'Os aquecedores são seguros para uso exterior e à chuva?', answer: 'Sim. Os modelos Solamagic têm certificação IP para uso exterior, proteção contra chuva e são seguros para espaços com clientes, mesmo crianças.' },
    { question: 'Qual o consumo elétrico dos aquecedores para esplanada?', answer: 'Os modelos variam entre 900W e 3000W. Com a tecnologia de carbono Solamagic, o consumo é até 30% inferior a aquecedores convencionais. Por isso, em ciclos de utilização típicos de restauração, o custo elétrico é compensado pelo aumento de faturação.' },
    { question: 'Cogumelo a gás ou aquecedor por infravermelhos?', answer: 'Os infravermelhos vencem em quase tudo: sem fumo, sem cheiros, sem botija de gás, ligar e desligar imediato, custos de operação mais baixos e maior segurança. O cogumelo a gás tem ainda problemas regulatórios em vários municípios.' },
    { question: 'Quanto tempo demora a instalação?', answer: 'Tipicamente entre 1 e 3 dias. A maioria dos modelos é fixada em parede, teto ou suporte, com ligação à rede elétrica padrão. Não há obras significativas.' },
    { question: 'Atendem em todo o Portugal?', answer: 'Sim. Estamos sediados no Algarve, com cobertura nacional. Para esplanadas no Algarve, fazemos visita técnica gratuita em 24 a 72 horas.' },
  ] : [
    { question: 'How to heat a restaurant patio efficiently?', answer: 'The most efficient solution is short-wave infrared heaters. They heat people and objects directly, are wind-immune and turn on in seconds. For a typical 30 to 50 m² patio, 2 to 4 units are enough.' },
    { question: 'Does infrared heating work in wind?', answer: 'Yes. Unlike conventional heating, infrared warms objects and people directly, not the air, so wind does not affect efficiency.' },
    { question: 'How much does revenue increase with heated patios?', answer: 'Our hospitality clients report 40 to 50% increases in patio usage, extending the season by 3 to 4 months per year.' },
    { question: 'Are the heaters safe for outdoor use and rain?', answer: 'Yes, Solamagic models have IP certification for outdoor use, rain protection and are safe for spaces with customers, including children.' },
    { question: 'What is the electrical consumption?', answer: 'Models range from 900W to 3000W. With Solamagic carbon technology, consumption is up to 30% lower than conventional heaters.' },
    { question: 'Gas mushroom or infrared heater?', answer: 'Infrared wins almost across the board: no smoke, no odors, no gas bottle, instant on/off, lower operating costs and better safety. Gas mushrooms also face regulatory restrictions in many municipalities.' },
    { question: 'How long does installation take?', answer: 'Typically 1 to 3 days. Most units mount on wall, ceiling or stand, with standard electrical connection. No major construction.' },
    { question: 'Do you serve all of Portugal?', answer: 'Yes. We are based in the Algarve and operate nationwide. For Algarve patios, we offer free technical visits within 24 to 72 hours.' },
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
        schemas={[
          generateFAQSchema(faqs),
          generateServiceSchema({
            name: isPt ? 'Aquecimento de Esplanadas e Terraços' : 'Patio and Terrace Heating',
            description: isPt
              ? 'Aquecimento por infravermelhos para esplanadas, terraços e espaços exteriores de restauração e hotelaria. Calor imediato, à prova de chuva.'
              : 'Infrared heating for patios, terraces and outdoor hospitality spaces. Instant warmth, rain-resistant.',
            url: `${COMPANY.baseUrl}/solutions/outdoor-comfort`,
            serviceType: isPt ? 'Aquecimento exterior' : 'Outdoor heating',
          }),
          generatePtBreadcrumb([
            { name: isPt ? 'Soluções' : 'Solutions', path: '/solutions' },
            { name: title, path: '/solutions/outdoor-comfort' },
          ]),
        ]}
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

              {/* Tipos de aquecimento exterior */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isPt ? 'Tipos de aquecimento para exterior' : 'Types of outdoor heating'}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  {isPt
                    ? 'Existem várias tecnologias para aquecer um espaço exterior. Cada uma tem aplicações ideais. Trabalhamos com as mais eficientes:'
                    : 'There are several technologies for heating outdoor spaces. Each has ideal applications. We work with the most efficient:'}
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 mb-1">{isPt ? 'Infravermelhos onda curta (Solamagic)' : 'Short-wave infrared (Solamagic)'}</h3>
                    <p className="text-sm text-gray-700">
                      {isPt
                        ? 'O premium de topo de gama. Calor imediato, 92% de eficiência, à prova de chuva. Ideal para esplanadas de restauração e hotelaria com clientela rotativa. Pode ter lâmpadas low glare para ambientes noturnos.'
                        : 'The premium top tier. Instant heat, 92% efficiency, rain-resistant. Ideal for hospitality patios with rotating customers. Available with low glare lamps for nighttime spaces.'}
                    </p>
                  </div>
                  <div className="border-l-4 border-amber-500 bg-amber-50 p-4 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 mb-1">{isPt ? 'Infravermelhos onda média (ComfortSun)' : 'Medium-wave infrared (ComfortSun)'}</h3>
                    <p className="text-sm text-gray-700">
                      {isPt
                        ? 'Polivalente. Aquece de forma menos intensa mas mais uniforme. Bom equilíbrio preço/desempenho para terraços, jardins, esplanadas pequenas e médias.'
                        : 'Versatile. Heats less intensely but more uniformly. Good price/performance balance for terraces, gardens, small and medium patios.'}
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 mb-1">{isPt ? 'Torres de aquecimento (ComfortSun Polivalente)' : 'Heating towers (ComfortSun Polivalente)'}</h3>
                    <p className="text-sm text-gray-700">
                      {isPt
                        ? 'Portáteis, sem instalação fixa. Ideais para eventos, casamentos, mercados, espaços onde a montagem é temporária ou se quer flexibilidade no layout.'
                        : 'Portable, no fixed installation. Ideal for events, weddings, markets and spaces where setup is temporary or layout flexibility matters.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Por setor */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isPt ? 'Soluções por setor' : 'Sector solutions'}
                </h2>
                <div className="space-y-4">
                  {(isPt ? [
                    { t: 'Restauração: cafés, restaurantes, gelatarias', d: 'Esplanadas com fluxo elevado e clientes que querem decidir rapidamente onde se sentar. Modelos Solamagic e ComfortSun Profissional, com calor imediato. ROI típico em 1 a 2 anos pelo aumento de faturação.' },
                    { t: 'Hotelaria: hotéis, resorts, alojamento local', d: 'Terraços de quarto, áreas de pequeno-almoço exterior, zonas de bar e piscina. Combinação de aquecedores fixos premium (Solamagic) com bioclimatizadores no verão.' },
                    { t: 'Eventos: casamentos, festas, mercados', d: 'Solução móvel com torres de aquecimento ComfortSun Polivalente. Sem instalação fixa, sem gás, sem fumo. Perfeito para casamentos e eventos corporativos exteriores.' },
                    { t: 'Imobiliário e habitação privada', d: 'Terraços, alpendres, jardins. Os Solamagic e ComfortSun aumentam a área útil da casa em meses frios sem necessidade de obras.' },
                  ] : [
                    { t: 'Hospitality F&B: cafes, restaurants, gelaterias', d: 'High-traffic patios with customers needing quick seating decisions. Solamagic and ComfortSun Professional models with instant heat. Typical ROI in 1 to 2 years.' },
                    { t: 'Hotels and resorts', d: 'Room terraces, outdoor breakfast areas, bar and pool zones. Mix of premium fixed heaters (Solamagic) with bioclimators for summer.' },
                    { t: 'Events: weddings, parties, markets', d: 'Portable solution with ComfortSun Polivalente towers. No fixed install, no gas, no smoke. Perfect for outdoor weddings and corporate events.' },
                    { t: 'Real estate and private homes', d: 'Terraces, porches, gardens. Solamagic and ComfortSun expand the usable area of the home in cold months with no construction.' },
                  ]).map((s, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                      <h3 className="font-bold text-gray-900 mb-1">{s.t}</h3>
                      <p className="text-sm text-gray-600">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Como funciona */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isPt ? 'Como dimensionamos a sua esplanada (passo a passo)' : 'How we dimension your patio (step by step)'}
                </h2>
                <ol className="space-y-3">
                  {(isPt ? [
                    { t: 'Visita gratuita ao espaço', d: 'Medimos a esplanada, observamos a exposição ao vento, identificamos pontos de instalação e tomada elétrica. Conversamos sobre o tipo de cliente e horário de utilização.' },
                    { t: 'Plano técnico personalizado', d: 'Calculamos a potência total necessária, número e disposição dos aquecedores, e estimamos consumo por mês.' },
                    { t: 'Estudo de retorno do investimento', d: 'Apresentamos uma estimativa de ROI baseada na ocupação atual da esplanada e no aumento esperado pela extensão da época.' },
                    { t: 'Instalação rápida', d: 'Em 1 a 3 dias, sem obras. Os aquecedores ficam fixados em parede, pilar ou suporte, com ligação elétrica padrão.' },
                    { t: 'Apoio pós-venda', d: 'Garantia, manutenção e substituição de lâmpadas. Estamos cá quando precisar.' },
                  ] : [
                    { t: 'Free site visit', d: 'We measure the patio, observe wind exposure, identify mounting points and electrical access. We discuss customer type and usage hours.' },
                    { t: 'Tailored technical plan', d: 'We calculate total power required, number and layout of heaters, and estimate monthly consumption.' },
                    { t: 'ROI study', d: 'We present an ROI estimate based on current patio occupancy and expected gain from extending the season.' },
                    { t: 'Fast installation', d: 'In 1 to 3 days, no construction. Heaters mount on wall, pillar or stand, standard electrical connection.' },
                    { t: 'After-sales support', d: 'Warranty, maintenance and lamp replacement. We are here when you need us.' },
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
                  {isPt ? 'Onde aquecemos esplanadas' : 'Where we heat patios'}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isPt
                    ? 'Trabalhamos com restaurantes, hotéis e espaços de eventos em todo o Portugal. Cobertura especial e visita gratuita imediata na zona do Algarve.'
                    : 'We work with restaurants, hotels and event venues throughout Portugal. Special coverage and immediate free visit in the Algarve.'}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                  {['Algarve', 'Lisboa', 'Porto', 'Cascais', 'Sintra', 'Setúbal', 'Comporta', 'Madeira', 'Açores'].map(r => (
                    <div key={r} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>
                {isPt && (
                  <p className="text-sm text-gray-600 mt-4">
                    Saiba mais sobre o nosso serviço no <Link to="/algarve" className="text-orange-600 font-bold hover:underline">Algarve</Link>.
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
