import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Leaf, TrendingDown, Award, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { generateFAQSchema, generateServiceSchema, generatePtBreadcrumb } from '@/utils/schemaMarkup';
import { COMPANY } from '@/config/company';

const SustainableBusinessPage = () => {
  const { language = 'pt', t = {} } = useLanguage() || {};
  const isPt = language === 'pt';

  const title = isPt ? 'Negócios Sustentáveis' : 'Sustainable Business';
  const metaTitle = isPt
    ? 'Soluções de Aquecimento Sustentável para Empresas'
    : 'Sustainable Heating Solutions for Businesses';
  const desc = isPt
    ? 'Reduza emissões de CO2 e custos energéticos em até 40% com soluções de aquecimento e arrefecimento ecológicas. Para restauração, hotelaria, escritórios e reabilitação.'
    : 'Reduce CO2 emissions and energy costs by up to 40% with eco-friendly heating and cooling. For restaurants, hotels, offices and building rehabilitation.';

  const faqs = isPt ? [
    { question: 'Como é que os produtos contribuem para objetivos ESG?', answer: 'Os equipamentos não emitem CO2 no ponto de uso (são elétricos), têm vida útil longa e contribuem para metas de eficiência energética e bem-estar dos colaboradores.' },
    { question: 'Os produtos têm certificações ambientais?', answer: 'Sim. A maioria dos produtos tem certificações de eficiência energética europeias (ErP, CE) e alguns têm certificações específicas de baixa emissão.' },
    { question: 'Que tipo de empresas beneficiam mais?', answer: 'Restaurantes, hotéis, escritórios, comércio e indústria ligeira. Qualquer empresa com espaços de aquecimento/arrefecimento regulares.' },
    { question: 'É possível obter apoios ou incentivos fiscais?', answer: 'Sim. Investimentos em eficiência energética podem ser elegíveis para apoios do Portugal 2030 e outros programas. Podemos ajudá-lo a identificar as opções.' },
    { question: 'Qual é a pegada de carbono dos produtos?', answer: 'Utilizando energia elétrica (incluindo renovável), estes sistemas têm emissão operacional zero de CO2 e CO. Alguns produtos, como as biolareiras Herkell, usam bioetanol com emissão mínima.' },
    { question: 'Qual é o impacto na fatura energética anual de uma empresa?', answer: 'Em média, empresas reduzem 30-40% dos custos de aquecimento/arrefecimento. Para uma empresa com despesa anual de 10 mil euros, a poupança anual é 3-4 mil euros, com ROI em 3-5 anos.' },
    { question: 'Como reportamos o impacto de sustentabilidade para relatórios ESG?', answer: 'Fornecemos métricas de emissões evitadas, consumo reduzido e certificações ambientais. Estes dados são diretos para relatórios GRI, TCFD e outras frameworks de sustentabilidade.' },
    { question: 'Oferece consultoria para candidaturas a financiamento de eficiência energética?', answer: 'Sim. Apoiamos empresas na identificação de fundos Portugal 2030, programas de eficiência energética e incentivos fiscais. Temos expertise em desenho de projetos elegíveis.' },
  ] : [
    { question: 'How do the products contribute to ESG goals?', answer: 'The equipment emits no CO2 at point of use (they are electric), has a long lifespan, and contributes to energy efficiency and employee wellbeing targets.' },
    { question: 'Do the products have environmental certifications?', answer: 'Yes. Most products have European energy efficiency certifications (ErP, CE) and some have specific low-emission certifications.' },
    { question: 'What type of businesses benefit most?', answer: 'Restaurants, hotels, offices, retail, and light industry. Any business with regular heating/cooling spaces.' },
    { question: 'Are there grants or tax incentives available?', answer: 'Yes. Energy efficiency investments may be eligible for Portugal 2030 support and other programs. We can help you identify the options.' },
    { question: 'What is the carbon footprint of the products?', answer: 'Using electrical energy (including renewable), these systems have zero operational CO2 and CO emissions. Some products, like Herkell biofireplaces, use bioethanol with minimal emission.' },
    { question: 'What is the impact on a company\'s annual energy bill?', answer: 'On average, companies reduce heating/cooling costs by 30-40%. For a company with annual expense of 10,000 euros, annual savings are 3-4 thousand euros, with ROI in 3-5 years.' },
    { question: 'How do we report sustainability impact for ESG reports?', answer: 'We provide metrics on avoided emissions, reduced consumption and environmental certifications. This data goes directly into GRI, TCFD and other sustainability frameworks.' },
    { question: 'Do you provide consulting for energy efficiency financing applications?', answer: 'Yes. We support companies in identifying Portugal 2030 funds, energy efficiency programs and tax incentives. We have expertise in designing eligible projects.' },
  ];

  const stats = [
    { icon: TrendingDown, value: '0 CO₂', label: isPt ? 'Emissão operacional' : 'Operational emission' },
    { icon: Leaf,         value: '30-40%', label: isPt ? 'Poupança energia' : 'Energy saving' },
    { icon: Award,        value: 'ErP+CE', label: isPt ? 'Certificações EU' : 'EU certifications' },
    { icon: Building2,    value: 'ESG',    label: isPt ? 'Relatório melhorado' : 'Improved report' },
  ];

  const solutions = isPt ? [
    {
      title: 'Restauração e Hotelaria',
      desc: 'Esplanadas aquecidas com Solamagic, salas com Duotherm e zonas de verão com Bioclimatizadores. Conforto total, 12 meses por ano.',
      products: ['/products/solamagic', 'Solamagic'],
    },
    {
      title: 'Escritórios e Coworking',
      desc: 'Aquecimento por divisão com Duotherm, sem poeira, sem ruído. Melhora a qualidade do ar interior e o bem-estar dos colaboradores.',
      products: ['/products/duotherm', 'Duotherm'],
    },
    {
      title: 'Reabilitação de Edifícios',
      desc: 'Impermeabilização e isolamento térmico com ClimateCoating e eliminação de humidade com Drymat sem obras invasivas.',
      products: ['/products/climatecoating', 'ClimateCoating'],
    },
    {
      title: 'Eventos e Espaços ao Ar Livre',
      desc: 'Aquecimento temporário para eventos com Solamagic, arrefecimento de verão com Bioclimatizadores.',
      products: ['/products/bioclimatizadores', 'Bioclimatizadores'],
    },
  ] : [
    {
      title: 'Restaurants & Hospitality',
      desc: 'Heated patios with Solamagic, rooms with Duotherm and summer zones with Bioclimatizadores. Total comfort, 12 months a year.',
      products: ['/products/solamagic', 'Solamagic'],
    },
    {
      title: 'Offices & Coworking',
      desc: 'Room-by-room heating with Duotherm, no dust, no noise. Improves indoor air quality and employee wellbeing.',
      products: ['/products/duotherm', 'Duotherm'],
    },
    {
      title: 'Building Rehabilitation',
      desc: 'Waterproofing and thermal insulation with ClimateCoating and damp elimination with Drymat no invasive construction.',
      products: ['/products/climatecoating', 'ClimateCoating'],
    },
    {
      title: 'Events & Outdoor Spaces',
      desc: 'Temporary heating for events with Solamagic, summer cooling with Bioclimatizadores.',
      products: ['/products/bioclimatizadores', 'Bioclimatizadores'],
    },
  ];

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={desc}
        canonical="/solutions/sustainable-business"
        schemas={[
          generateFAQSchema(faqs),
          generateServiceSchema({
            name: isPt ? 'Soluções de Aquecimento Sustentável para Empresas' : 'Sustainable Heating Solutions for Businesses',
            description: isPt
              ? 'Soluções térmicas ecológicas para restauração, hotelaria, escritórios e reabilitação de edifícios. Reduza emissões e custos energéticos até 40%.'
              : 'Eco-friendly thermal solutions for restaurants, hotels, offices and building rehabilitation. Reduce emissions and energy costs by up to 40%.',
            url: `${COMPANY.baseUrl}/solutions/sustainable-business`,
            serviceType: isPt ? 'Aquecimento sustentável B2B' : 'B2B sustainable heating',
          }),
          generatePtBreadcrumb([
            { name: isPt ? 'Soluções' : 'Solutions', path: '/solutions' },
            { name: title, path: '/solutions/sustainable-business' },
          ]),
        ]}
        language={language}
        image="/ClimateCoating/bannermarketing.png"
      />

      <div className="min-h-screen pb-16">
        {/* Hero */}
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img
            src="/soluçõesparaempresas.png"
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
                { label: title, path: '/solutions/sustainable-business' }
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
                  className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center"
                >
                  <Icon className="w-6 h-6 text-green-700 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-700 mb-1">{s.value}</div>
                  <div className="text-xs text-gray-600">{s.label}</div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* Why */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isPt ? 'Sustentabilidade com Resultado Financeiro' : 'Sustainability with Financial Results'}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isPt
                    ? 'As empresas enfrentam hoje uma dupla pressão: reduzir a pegada ambiental e controlar os custos operacionais. Com as soluções Evoluimos Comércio, estas duas metas são alcançadas em simultâneo sem compromissos.'
                    : 'Businesses today face dual pressure: reduce their environmental footprint and control operating costs. With Evoluimos Comércio solutions, both goals are achieved simultaneously without compromise.'}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isPt
                    ? 'Os nossos produtos são 100% elétricos, sem combustão e sem emissões diretas. Usados com energia renovável, a pegada de carbono operacional é zero o que contribui diretamente para relatórios de sustentabilidade ESG e certificações energéticas dos edifícios.'
                    : 'Our products are 100% electric, combustion-free and emission-free. Used with renewable energy, the operational carbon footprint is zero directly contributing to ESG sustainability reports and building energy certifications.'}
                </p>
              </div>

              {/* Tipos de Sustentabilidade */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  {isPt ? 'Três Pilares da Sustentabilidade' : 'Three Pillars of Sustainability'}
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {isPt ? 'Redução de Emissões' : 'Emissions Reduction'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {isPt
                          ? 'Equipamentos 100% elétricos sem combustão direta. Usados com energia renovável, emissão operacional zero. Contribuem para descarbonização de empresas e cumprimento de metas de neutralidade carbónica até 2050.'
                          : '100% electric equipment with no direct combustion. Used with renewable energy, zero operational emissions. Contribute to corporate decarbonization and net-zero targets by 2050.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {isPt ? 'Eficiência Energética' : 'Energy Efficiency'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {isPt
                          ? 'Redução de 30-40% no consumo energético. Sistemas com alta eficiência certificados pela UE (ErP). Otimização de custos operacionais e melhoria de performance em relatórios energéticos do edifício.'
                          : 'Reduction of 30-40% in energy consumption. High-efficiency systems certified by EU (ErP). Cost optimization and improved building energy reports.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {isPt ? 'Bem-Estar e Saúde' : 'Wellbeing & Health'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {isPt
                          ? 'Aquecimento sem poeira, sem ruído, sem emissões internas. Melhora qualidade do ar interior, reduz doenças respiratórias e aumenta produtividade dos colaboradores. Contribui para certificações WELL e Leed.'
                          : 'Heating without dust, noise, or indoor emissions. Improves indoor air quality, reduces respiratory diseases and increases employee productivity. Contributes to WELL and LEED certifications.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use cases */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  {isPt ? 'Soluções por Setor' : 'Solutions by Sector'}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {solutions.map((sol, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">{sol.title}</h3>
                        <p className="text-xs text-gray-600 mb-2">{sol.desc}</p>
                        <Link to={sol.products[0]} className="text-xs text-orange-600 font-semibold hover:underline">
                          {sol.products[1]} →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Processo */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  {isPt ? 'Como Implementamos Sustentabilidade' : 'How We Implement Sustainability'}
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      num: 1,
                      title: isPt ? 'Diagnóstico de Sustentabilidade' : 'Sustainability Audit',
                      desc: isPt
                        ? 'Análise completa de consumos energéticos, emissões atuais, certificações possíveis e oportunidades de eficiência.'
                        : 'Complete analysis of energy consumption, current emissions, possible certifications and efficiency opportunities.',
                    },
                    {
                      num: 2,
                      title: isPt ? 'Plano de Implementação' : 'Implementation Plan',
                      desc: isPt
                        ? 'Recomendações personalizadas com tecnologias, cronograma e custo-benefício. Compatibilidade com objetivos ESG da empresa.'
                        : 'Personalized recommendations with technologies, timeline and cost-benefit. Alignment with company ESG objectives.',
                    },
                    {
                      num: 3,
                      title: isPt ? 'Apoio a Financiamento' : 'Financing Support',
                      desc: isPt
                        ? 'Identificação de programas Portugal 2030, fundos de eficiência energética e incentivos fiscais. Suporte na candidatura.'
                        : 'Identification of Portugal 2030 programs, energy efficiency funds and tax incentives. Application support.',
                    },
                    {
                      num: 4,
                      title: isPt ? 'Instalação e Certificação' : 'Installation & Certification',
                      desc: isPt
                        ? 'Implementação profissional com garantias. Emissão de certificados de eficiência energética e documentação ESG.'
                        : 'Professional implementation with warranties. Issue of energy efficiency certificates and ESG documentation.',
                    },
                    {
                      num: 5,
                      title: isPt ? 'Monitoramento e Relatório' : 'Monitoring & Reporting',
                      desc: isPt
                        ? 'Acompanhamento contínuo de poupanças, emissões evitadas e métricas ESG. Relatórios para stakeholders e reguladores.'
                        : 'Continuous monitoring of savings, avoided emissions and ESG metrics. Reports for stakeholders and regulators.',
                    },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
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
                  {isPt ? 'Onde Trabalhamos com Empresas' : 'Where We Work with Businesses'}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    'Algarve', 'Lisboa', 'Porto', 'Cascais', 'Sintra',
                    'Setúbal', 'Comporta', 'Madeira', 'Açores'
                  ].map((region, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{region}</span>
                    </div>
                  ))}
                </div>
                <div className="p-5 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-sm text-gray-700">
                    {isPt
                      ? 'Operamos em todo o país, com expertise em restauração, hotelaria, escritórios, comércio e indústria ligeira. Consultoria em sustentabilidade corporativa e candidaturas a financiamento europeu.'
                      : 'We operate nationwide, with expertise in restaurants, hotels, offices, retail and light industry. Corporate sustainability consulting and European financing applications.'}
                  </p>
                  <Link to="/algarve" className="text-green-600 font-semibold mt-3 inline-flex items-center gap-2 hover:text-green-700 transition-colors">
                    {isPt ? 'Soluções sustentáveis no Algarve' : 'Sustainable solutions in Algarve'} <ArrowRight className="w-4 h-4" />
                  </Link>
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
              <div className="bg-green-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-3">
                  {isPt ? 'Auditoria Energética' : 'Energy Audit'}
                </h3>
                <p className="text-green-100 text-sm mb-5">
                  {isPt
                    ? 'Analisamos o seu espaço e identificamos onde pode poupar mais. Grátis e sem compromisso.'
                    : 'We analyze your space and identify where you can save the most. Free and no commitment.'}
                </p>
                <Link to="/contact" className="block w-full py-3 bg-white text-green-700 rounded-xl text-center font-bold hover:bg-green-50 transition-colors">
                  {isPt ? 'Pedir Auditoria' : 'Request Audit'}
                </Link>
                <div className="mt-4 pt-4 border-t border-green-600 space-y-2 text-sm text-green-100">
                  <div>✓ {isPt ? 'Relatório detalhado' : 'Detailed report'}</div>
                  <div>✓ {isPt ? 'Sem obras invasivas' : 'No invasive works'}</div>
                  <div>✓ {isPt ? 'Elegível apoios PT2030' : 'Eligible PT2030 grants'}</div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h4 className="font-bold text-gray-900 mb-3">
                  {isPt ? 'Produtos sustentáveis' : 'Sustainable products'}
                </h4>
                <div className="space-y-2">
                  {[
                    { label: 'Solamagic', path: '/products/solamagic' },
                    { label: 'Duotherm', path: '/products/duotherm' },
                    { label: 'ClimateCoating', path: '/products/climatecoating' },
                    { label: 'Biolareiras Herkell', path: '/products/eco-fireplaces' },
                  ].map((p, i, arr) => (
                    <Link
                      key={p.path}
                      to={p.path}
                      className="flex items-center justify-between text-sm text-gray-600 hover:text-orange-600 py-2 transition-colors"
                      style={{ borderBottom: i < arr.length - 1 ? '1px solid #f3f4f6' : 'none' }}
                    >
                      {p.label} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SustainableBusinessPage;
