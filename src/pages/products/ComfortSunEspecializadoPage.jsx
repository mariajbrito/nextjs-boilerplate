import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Baby, Bath } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import ComfortSunLineNav from '@/components/ComfortSunLineNav';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema, generatePtBreadcrumb } from '@/utils/schemaMarkup';

const MODELS = [
  {
    icon: Bath,
    name: 'CSB, Aquecedor de Casa de Banho',
    watts: ['1000W', '1200W', '1400W'],
    ip: 'IP 24',
    coverage: 'Até 10 m²',
    weight: '2,1 kg',
    cable: '1,8 m · 230V 50Hz',
    tagColor: 'bg-teal-600',
    tag: 'Casa de Banho',
    features: [
      'Proteção contra pingos de água (IP 24)',
      'Aprovação TÜV',
      'Caixa de alumínio tratado, anti-ferrugem',
      'Lâmpada Golden Glare (opção Low Glare disponível)',
      'Telecomando infravermelho incluído',
      'Timer programável para desligamento automático',
      'Interruptor profissional opcional',
      'Instalação simples, baixo peso (2,1 kg)',
    ],
  },
  {
    icon: Baby,
    name: 'Aquecedor para Fraldário',
    watts: ['750W'],
    ip: 'IP 24',
    coverage: '90% calor direcionado para a área do bebé',
    weight: null,
    cable: null,
    tagColor: 'bg-pink-500',
    tag: 'Bebé',
    features: [
      'Lâmpada de dupla camada protetora (sem fragmentos)',
      'Aprovação TÜV',
      'Lâmpada especial Low Glare com iluminação suave',
      'Telecomando incluído',
      'Timer on/off ajustável',
      'IP 24, proteção contra salpicos',
      'Montagem: teto, parede ou tripé',
      '"Made in Germany"',
    ],
  },
];

export default function ComfortSunEspecializadoPage() {
  return (
    <>
      <SEOHead
        title="Aquecedor para Casa de Banho e Fraldário | ComfortSun"
        description="Aquecedores infravermelhos ComfortSun para casa de banho (IP24, TÜV) e fraldário de bebé. Aquecimento instantâneo seguro em ambientes húmidos."
        canonical="/products/comfortsun/especializado"
        schemas={[
          generateProductSchema({ name: 'ComfortSun Especializado', description: 'Aquecedores para casa de banho (IP24, TÜV) e fraldário para bebés. Segurança e conforto em ambientes húmidos.', image: `${COMPANY.baseUrl}/ComfortSun/aquecedorwc.jpg`, brand: 'ComfortSun', url: `${COMPANY.baseUrl}/products/comfortsun/especializado` }),
          generatePtBreadcrumb([{ name: 'Produtos', path: '/products' }, { name: 'ComfortSun', path: '/products/comfortsun' }, { name: 'Especializado', path: '/products/comfortsun/especializado' }]),
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Compact dark header */}
        <div className="bg-gradient-to-br from-gray-950 via-teal-950/40 to-gray-900 pt-6 pb-10 px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { label: 'Início', path: '/' },
                { label: 'Produtos', path: '/products' },
                { label: 'ComfortSun', path: '/products/comfortsun' },
                { label: 'Especializado', path: '/products/comfortsun/especializado' },
              ]}
              dark
            />
            <div className="mt-6 text-center">
              <span className="inline-block bg-teal-500 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                ComfortSun · Aquecimento Especializado
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Especializado
              </h1>
              <p className="text-teal-300 mt-2 font-medium">
                Casa de Banho · Fraldário · IP 24 · TÜV
              </p>
            </div>
            <div className="mt-6">
              <ComfortSunLineNav />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* Intro */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Soluções para ambientes específicos</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A gama de <strong>Aquecimento Especializado ComfortSun</strong> foi desenvolvida para contextos que exigem equipamentos certificados para ambientes húmidos e de alta segurança. Todos os modelos são aprovados pela <strong>TÜV</strong> e concebidos para instalações permanentes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Do aquecimento confortável de casas de banho ao calor seguro para fraldários, esta linha combina engenharia alemã com funcionalidades práticas como telecomando, timer e proteção IP certificada.
                </p>
              </div>

              {/* Models */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Produtos</h2>
                <div className="space-y-6">
                  {MODELS.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white border border-gray-200 rounded-2xl p-6"
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                          <m.icon className="w-5 h-5 text-teal-600" />
                        </div>
                        <h3 className="font-extrabold text-gray-900 text-lg">{m.name}</h3>
                        <span className={`${m.tagColor} text-white text-xs font-bold px-2.5 py-0.5 rounded-full`}>{m.tag}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {m.watts.map(w => (
                          <span key={w} className="bg-gray-100 text-gray-700 text-sm font-bold px-3 py-1 rounded-lg">{w}</span>
                        ))}
                        <span className="bg-teal-50 text-teal-700 text-sm font-medium px-3 py-1 rounded-lg">{m.ip}</span>
                        <span className="bg-gray-50 text-gray-600 text-sm px-3 py-1 rounded-lg">{m.coverage}</span>
                        {m.weight && (
                          <span className="bg-gray-50 text-gray-500 text-xs px-3 py-1 rounded-lg">{m.weight}</span>
                        )}
                        {m.cable && (
                          <span className="bg-gray-50 text-gray-500 text-xs px-3 py-1 rounded-lg">{m.cable}</span>
                        )}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-2">
                        {m.features.map((f, j) => (
                          <div key={j} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Safety note */}
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">Segurança certificada</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Todos os modelos desta linha são aprovados pelo <strong>TÜV</strong>, o organismo de certificação alemão de referência. A certificação IP garante a proteção adequada contra humidade e salpicos de água em cada produto.
                </p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-6 text-white sticky top-24">
                <h3 className="font-extrabold text-xl mb-1">Pedir Informação</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Diga-nos a aplicação pretendida, orientamos na escolha certa.
                </p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="block w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-center transition-colors"
                >
                  Formulário de Contacto
                </Link>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-sm text-gray-600">
                <p className="font-bold text-gray-900 mb-1">Para uso em esplanada?</p>
                <p className="mb-3">A Linha Profissional e Deluxe são as escolhas certas para exterior.</p>
                <Link to="/products/comfortsun/professional" className="text-orange-600 font-bold hover:text-orange-700 text-xs">
                  Ver Linha Profissional →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
