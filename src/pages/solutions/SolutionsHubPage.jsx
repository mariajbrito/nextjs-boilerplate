import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, TrendingDown, Sun, Building2, MessageCircle, Wind } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA } from '@/config/company';

const SolutionsHubPage = () => {
  const { language = 'pt', t = {} } = useLanguage() || {};

  const title = language === 'pt' ? 'Soluções de Conforto Térmico e Anti-Humidade' : 'Thermal Comfort and Anti-Moisture Solutions';
  const metaTitle = language === 'pt'
    ? 'Soluções de Conforto Térmico e Anti-Humidade | Evoluimos Comércio'
    : 'Thermal Comfort and Anti-Moisture Solutions | Evoluimos Comércio';
  const desc = language === 'pt'
    ? 'Eliminar humidade nas paredes, aquecer esplanadas, reduzir custos de aquecimento, arrefecer sem ar condicionado. Soluções por problema, com tecnologia europeia.'
    : 'Eliminate wall moisture, heat patios, reduce heating costs, cool without air conditioning. Problem-driven solutions with European technology.';

  const solutions = [
    {
      id: 'outdoor-comfort',
      name: language === 'pt' ? 'Melhorar Conforto em Esplanadas' : 'Improve Outdoor Comfort',
      desc: language === 'pt' ? 'Aumente a rentabilidade do seu espaço exterior.' : 'Increase profitability of your outdoor space.',
      icon: Sun,
      image: '/ComfortSun/almocoaquecedor.jpg'
    },
    {
      id: 'eliminate-moisture',
      name: language === 'pt' ? 'Eliminar Humidade nas Paredes' : 'Eliminate Wall Moisture',
      desc: language === 'pt' ? 'Soluções definitivas sem obras.' : 'Definitive solutions without renovation.',
      icon: Droplets,
      image: '/semhumidade.png'
    },
    {
      id: 'reduce-heating-costs',
      name: language === 'pt' ? 'Reduzir Custos de Aquecimento' : 'Reduce Heating Costs',
      desc: language === 'pt' ? 'Aumente a eficiência energética.' : 'Increase energy efficiency.',
      icon: TrendingDown,
      image: '/reduzircustos.png'
    },
    {
      id: 'natural-cooling',
      name: language === 'pt' ? 'Arrefecimento Natural' : 'Natural Cooling',
      desc: language === 'pt' ? 'Alternativa ecológica ao ar condicionado. Até 80% menos consumo.' : 'Eco-friendly alternative to air conditioning. Up to 80% less consumption.',
      icon: Wind,
      image: '/arrefecimentonatural.png'
    },
    {
      id: 'sustainable-business',
      name: language === 'pt' ? 'Soluções para Empresas' : 'Business Solutions',
      desc: language === 'pt' ? 'Soluções corporativas e ESG. Reduza emissões e pague menos energia.' : 'Corporate and ESG solutions. Reduce emissions and lower energy costs.',
      icon: Building2,
      image: '/soluçõesparaempresas.png'
    }
  ];

  return (
    <>
      <SEOHead title={metaTitle} description={desc} canonical="/solutions" language={language} image="/semhumidade.png" />
      <div className="min-h-screen pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: t?.nav?.home || 'Home', path: '/' }, { label: t?.nav?.solutions || 'Solutions', path: '/solutions' }]} />
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </motion.h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <motion.div key={sol.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={sol.image} alt={sol.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-8">
                    <Icon className="w-8 h-8 text-orange-600 mb-4" aria-hidden="true" />
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{sol.name}</h2>
                    <p className="text-gray-600 mb-6">{sol.desc}</p>
                    <Link to={`/solutions/${sol.id}`} className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                      {language === 'pt' ? 'Ver Solução' : 'View Solution'} <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center"
          >
            <h2 className="text-xl font-extrabold text-gray-900 mb-2">
              {language === 'pt' ? 'Precisa de ajuda a escolher?' : 'Need help choosing?'}
            </h2>
            <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
              {language === 'pt'
                ? 'Fazemos uma análise gratuita e sem compromisso ao seu espaço. Fale connosco.'
                : 'We offer a free, no-obligation analysis of your space. Get in touch.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                WhatsApp
              </a>
              <Link to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors">
                {language === 'pt' ? 'Pedir Orçamento' : 'Request Quote'}
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/products" className="inline-flex items-center gap-1 text-orange-600 font-semibold text-sm hover:underline">
                {language === 'pt' ? 'Ver Todos os Produtos' : 'View All Products'} <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/faqs" className="inline-flex items-center gap-1 text-orange-600 font-semibold text-sm hover:underline">
                {language === 'pt' ? 'Perguntas Frequentes' : 'FAQ'} <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SolutionsHubPage;