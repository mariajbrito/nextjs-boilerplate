import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA } from '@/config/company';
import { generateOrganizationSchema } from '@/utils/schemaMarkup';

const BRANDS = ['SOLAMAGIC', 'COMFORTSUN', 'DUOTHERM', 'CLIMATECOATING', 'DRYMAT', 'HERKELL', 'CLAGE'];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="Sobre a Evoluimos Comércio | Especialistas em Conforto Térmico"
        description="Empresa fundada em 2018 por Eduardo Catarino, no Algarve. Distribuidor oficial de Solamagic, Drymat, ClimateCoating e Clage. Mais de 25 anos de experiência."
        canonical="/about"
        schemas={[generateOrganizationSchema()]}
      />
      <div className="min-h-screen bg-gray-50 pt-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Sobre Nós', path: '/about' }]} />

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">Sobre Nós</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-6 tracking-tight leading-tight">
                Eduardo Catarino<br />
                <span className="text-orange-600">Evoluimos Comércio</span>
              </h1>
              <p className="text-gray-700 leading-relaxed mb-5">
                Sou o Eduardo Catarino e dou rosto a este projeto que nasceu da vontade de trazer soluções eficazes, sustentáveis e acessíveis para o conforto térmico seja em casa, em esplanadas, jardins ou espaços comerciais.
              </p>
              <p className="text-gray-700 leading-relaxed mb-5">
                Trabalho com uma <strong>abordagem baseada na complementariedade</strong>. Os vários produtos criam sinergias entre si, para se otimizarem e, no seu total, oferecerem soluções completas de conforto térmico, do inverno ao verão.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Com um percurso ligado ao aconselhamento técnico e comercial, coloco o bem-estar e a saúde das pessoas como prioridade, acompanhando de perto as reais necessidades de clientes particulares e profissionais com o compromisso de apresentar equipamentos fiáveis, simples de aplicar e com apoio pós-venda próximo.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-600 rounded-r-2xl p-5 mb-8">
                <blockquote className="text-gray-800 italic text-base leading-relaxed">
                  "O que significa, quando uma microempresa tem clientes como McDonald's, Avillez, Sonae... Provavelmente é porque estamos a fazer algumas coisas certas."
                </blockquote>
                <div className="font-bold text-orange-600 mt-3">Eduardo Catarino</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  Falar com o Eduardo
                </a>
                <Link to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors">
                  Pedir Orçamento
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <div className="mb-6 flex justify-center">
                <img
                  src="/eduardocatarino.jpg"
                  alt="Eduardo Catarino"
                  className="w-64 h-64 rounded-full object-cover shadow-md"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { n: '2018', label: 'Ano de fundação' },
                  { n: '25+', label: 'Anos experiência' },
                  { n: '3', label: 'Clientes de referência' },
                  { n: '7', label: 'Marcas representadas' },
                ].map(s => (
                  <div key={s.n} className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-extrabold text-orange-600 mb-1">{s.n}</div>
                    <div className="text-gray-500 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-extrabold text-gray-900 mb-4">Os Nossos Valores</h3>
                <div className="space-y-3">
                  {[
                    'Soluções sustentáveis e ecológicas',
                    'Tecnologia alemã testada e certificada',
                    'Apoio pós-venda próximo e transparente',
                    'Entrega direta do fabricante',
                    'Análise gratuita sem compromisso',
                  ].map((v, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />{v}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Brands */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-gray-400 whitespace-nowrap">Marcas Representadas</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {BRANDS.map(b => (
                <div key={b} className="bg-white border border-gray-200 hover:border-orange-300 rounded-xl py-4 px-3 text-center font-extrabold text-gray-600 text-sm tracking-wide hover:text-orange-600 transition-colors">
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Cross-links */}
          <div className="mt-16 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Os Nossos Produtos', desc: 'Conheça todas as soluções de conforto térmico', path: '/products' },
              { label: 'Soluções por Necessidade', desc: 'Encontre a solução certa para o seu caso', path: '/solutions' },
              { label: 'Serviços Imobiliários', desc: 'Compra e venda de imóveis no Algarve', path: '/real-estate' },
            ].map(link => (
              <Link key={link.path} to={link.path}
                className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all group"
              >
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">{link.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{link.desc}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
