import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA } from '@/config/company';

const ALL_PRODUCTS = [
  {
    name: 'Solamagic',
    tag: 'Made in Germany',
    badge: '⭐ Premium',
    badgeColor: 'bg-amber-500',
    desc: 'O topo da gama em infravermelhos de onda curta para exterior. Design versátil, alcance máximo, 92% de eficiência. A escolha dos melhores restaurantes e hotéis.',
    path: '/products/solamagic',
    img: '/Solamagic/aquecedorexterior.png',
    highlight: true,
  },
  {
    name: 'ComfortSun',
    tag: 'Made in Germany',
    badge: 'Polivalente',
    badgeColor: 'bg-orange-600',
    desc: 'Solução polivalente com 4 linhas: Aquecimento Infravermelhos, Polivalente, Profissional e Deluxe. Flexibilidade para cada necessidade e orçamento.',
    path: '/products/comfortsun',
    img: '/ComfortSun/esplanada.png',
    highlight: false,
    lines: ['Infravermelhos', 'Polivalente', 'Profissional', 'Deluxe'],
  },
  {
    name: 'Duotherm',
    tag: 'AQUECIMENTO RADIANTE',
    desc: 'Radiadores em pedra natural produzidos em Portugal. Calor saudável por infravermelhos, sem emissão de CO₂, com termostato e efeito decorativo único.',
    path: '/products/duotherm',
    img: '/Duotherm/pedraduotherm.jpeg',
  },
  {
    name: 'ClimateCoating',
    tag: 'REVESTIMENTO TÉRMICO',
    desc: 'Membrana cerâmica de nanotecnologia alemã. Aplica-se como tinta, isola termicamente, regula a humidade do ar e reduz custos de climatização.',
    path: '/products/climatecoating',
    img: '/ClimateCoating/baldestinta.webp',
  },
  {
    name: 'Drymat',
    tag: 'ELIMINAÇÃO DE HUMIDADE',
    desc: 'Tecnologia austríaca de frequência eletromagnética que elimina humidade ascendente sem obras. Instala-se numa parede e seca o imóvel em poucos meses.',
    path: '/products/drymat',
    img: 'https://images.unsplash.com/photo-1693594558979-aed4872ff156?w=700&q=80',
  },
  {
    name: 'Bioclimatizadores',
    tag: 'ARREFECIMENTO NATURAL',
    desc: 'Arrefecimento por evaporação sem compressor, sem gases, baixo consumo. Ideal para substituir ar condicionado convencional no verão.',
    path: '/products/bioclimatizadores',
    img: '/Bioclimatizadores/bioclimatizadorquarto.png',
    objectPosition: 'bottom',
  },
  {
    name: 'Esquentadores Clage',
    tag: 'MADE IN GERMANY',
    desc: 'Esquentadores instantâneos elétricos de alta eficiência. Sem depósito, sem esperas, sem desperdício. Tecnologia alemã Clage para água quente imediata.',
    path: '/products/esquentadores',
    img: '/Esquentadores/produto1.png',
  },
  {
    name: 'Biolareiras Herkell',
    tag: 'BIOLAREIRAS ECO',
    desc: 'Lareiras a bio-etanol e grelhadores a pellets. Conforto e estética sem chaminé, sem instalação de gás, totalmente ecológicos.',
    path: '/products/eco-fireplaces',
    img: '/biolareiras/biolareira.jpg',
  },
  {
    name: 'Piso Radiante Eléctrico',
    tag: 'PROTEÇÃO E CONFORTO',
    desc: 'Aquecimento de pavimento por resistência eléctrica. Conforto uniforme desde o chão, sem correntes de ar. Ideal para casas de banho, cozinhas e divisões interiores.',
    path: '/products/piso-radiante',
    img: '/Piso radiante/Pisoradianteahtcasadebanho.jpg',
  },
];

const ProductCard = ({ p }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="h-full"
  >
    <Link to={p.path}
      className={`group flex flex-col h-full bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 ${p.highlight ? 'border-amber-300 ring-2 ring-amber-200' : 'border-gray-200 hover:border-orange-200'}`}
    >
      <div className="relative overflow-hidden h-44">
        <img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ objectPosition: p.objectPosition || 'center' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {p.badge && (
          <span className={`absolute top-3 left-3 ${p.badgeColor} text-white text-xs font-extrabold px-2.5 py-1 rounded-full`}>
            {p.badge}
          </span>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-1">{p.tag}</div>
        <h3 className="text-xl font-extrabold text-gray-900 mb-2">{p.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{p.desc}</p>
        {p.lines && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {p.lines.map(l => (
              <span key={l} className="text-xs bg-orange-50 text-orange-700 border border-orange-200 px-2 py-0.5 rounded-full font-semibold">{l}</span>
            ))}
          </div>
        )}
        <div className="flex items-center gap-1 text-orange-600 font-bold text-sm mt-4 group-hover:gap-2 transition-all">
          Saber mais <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  </motion.div>
);

export default function ProductsHubPage() {
  return (
    <>
      <SEOHead
        title="Produtos de Aquecimento e Conforto Térmico | Evoluimos Comércio"
        description="Solamagic, ComfortSun, Duotherm, ClimateCoating, Drymat, Bioclimatizadores e Esquentadores Clage. Tecnologia alemã para aquecimento, arrefecimento e proteção térmica."
        canonical="/products"
      />

      <div className="min-h-screen bg-gray-50 pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Produtos', path: '/products' }]} />

          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">Portfólio Completo</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-4 tracking-tight">Os Nossos Produtos</h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              Alta tecnologia europeia para aquecimento, arrefecimento e proteção de edifícios.
            </p>
          </div>

          {/* Uniform product grid — 9 produtos em grelha 3×3 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ALL_PRODUCTS.map((p, i) => <ProductCard key={i} p={p} />)}
          </div>

          {/* CTA + Cross-links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center"
          >
            <h2 className="text-xl font-extrabold text-gray-900 mb-2">Não sabe qual o produto ideal?</h2>
            <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
              Descubra a solução certa para o seu caso, ou fale diretamente connosco para uma análise gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Falar por WhatsApp
              </a>
              <Link to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors">
                Pedir Orçamento
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/solutions" className="inline-flex items-center gap-1 text-orange-600 font-semibold text-sm hover:underline">
                Ver Soluções por Necessidade <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/faqs" className="inline-flex items-center gap-1 text-orange-600 font-semibold text-sm hover:underline">
                Perguntas Frequentes <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
