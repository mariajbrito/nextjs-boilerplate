import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Smartphone, Wifi, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import ComfortSunLineNav from '@/components/ComfortSunLineNav';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema } from '@/utils/schemaMarkup';

const MODELS = [
  {
    name: 'CS 2000BT / 2800BT',
    watts: ['2000W', '2800W'],
    imgs: ['/ComfortSun/ComfortSun25BT_2000.webp', '/ComfortSun/ComfortSun25BT2800.webp'],
    coverage: 'Até 14 m²',
    ip: 'IP 25 (TÜV)',
    tag: 'Esplanada',
    tagColor: 'bg-amber-500',
    features: [
      'Controlo por botões, telecomando infravermelho e app móvel',
      'Regulação em 5 níveis via telecomando',
      'Dimmer contínuo via app',
      'App controla até 8 dispositivos em simultâneo',
      'Timer programável via app',
      'Lâmpada Low Glare (opção Dark Glare disponível)',
      'Mais de 90% de eficiência térmica',
      'Calor emitido em segundos',
    ],
  },
  {
    name: 'Torre de Aquecimento Deluxe',
    watts: ['2000W'],
    imgs: ['/ComfortSun/torreaquecimento1.webp', '/ComfortSun/torreaquecimento2.webp'],
    coverage: 'Até 14 m²',
    ip: 'IP 65 (TÜV)',
    tag: 'Portátil',
    tagColor: 'bg-orange-500',
    features: [
      'Uso móvel sem instalação fixa',
      'Tecnologia Bluetooth com app móvel',
      'Lâmpada Low Glare incluída',
      'Cores: Nano Antracite e Titan',
      'IP 65, resistência total à humidade',
      'Ideal para residências e espaços sem estrutura permanente',
      'Design moderno e compacto',
    ],
  },
];

const APP_FEATURES = [
  { icon: Smartphone, text: 'Disponível para iOS e Android' },
  { icon: Wifi, text: 'Controlo de até 8 aquecedores em simultâneo' },
  { icon: Zap, text: 'Intensidades diferentes por aparelho' },
  { icon: Shield, text: 'Timer automático programável' },
];

export default function ComfortSunDeluxePage() {
  return (
    <>
      <SEOHead
        title="Aquecedor Infravermelhos com Bluetooth e App | ComfortSun Deluxe"
        description="Aquecedores ComfortSun Deluxe 2000W e 2800W com Bluetooth, app e telecomando. Calor imediato para esplanadas e uso portátil. A partir de 412€ + IVA."
        canonical="/products/comfortsun/deluxe"
        schemas={[generateProductSchema({ name: 'ComfortSun Linha Deluxe', description: 'Aquecedores infravermelhos com Bluetooth, app móvel e telecomando. 2000W e 2800W para esplanadas e uso portátil.', image: `${COMPANY.baseUrl}/ComfortSun/aquecedorestelecomandados.png`, brand: 'ComfortSun', url: `${COMPANY.baseUrl}/products/comfortsun/deluxe` })]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Compact dark header — distinctive from other product pages */}
        <div className="bg-gradient-to-br from-gray-950 via-amber-950/40 to-gray-900 pt-6 pb-10 px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { label: 'Início', path: '/' },
                { label: 'Produtos', path: '/products' },
                { label: 'ComfortSun', path: '/products/comfortsun' },
                { label: 'Deluxe', path: '/products/comfortsun/deluxe' },
              ]}
              dark
            />
            <div className="mt-6 text-center">
              <span className="inline-block bg-amber-500 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                ComfortSun · Linha Deluxe
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Deluxe
              </h1>
              <p className="text-amber-300 mt-2 font-medium">
                Bluetooth · App Móvel · Telecomando · Até 2800W
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
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3">O topo da gama ComfortSun</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A <strong>Linha Deluxe</strong> distingue-se pela regulação de calor via telecomando infravermelho, app móvel ou diretamente no aparelho. É a escolha certa para quem quer o máximo de conforto e controlo, seja numa esplanada de hotel ou numa esplanada residencial.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Toda a gama Deluxe inclui <strong>lâmpadas Low Glare</strong> para um conforto visual superior, e os modelos BT contam com <strong>Bluetooth integrado</strong> para controlo total via smartphone.
                </p>
              </div>

              {/* App highlight */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-extrabold text-gray-900 mb-4 text-lg">App ComfortSun</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {APP_FEATURES.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                        <f.icon className="w-4 h-4 text-amber-600" />
                      </div>
                      {f.text}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">Disponível na App Store (iOS) e Google Play (Android).</p>
              </div>

              {/* Models */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Modelos</h2>
                <div className="space-y-6">
                  {MODELS.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
                    >
                      {/* Product images row */}
                      {m.imgs && m.imgs.length > 0 && (
                        <div className="flex gap-2 bg-gray-50 px-4 pt-4 pb-2 justify-center">
                          {m.imgs.map((img, j) => (
                            <img key={j} src={img} alt={`${m.name} ${m.watts[j] || ''}`}
                              className="h-28 object-contain" />
                          ))}
                        </div>
                      )}
                      <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h3 className="font-extrabold text-gray-900 text-lg">{m.name}</h3>
                        <span className={`${m.tagColor} text-white text-xs font-bold px-2.5 py-0.5 rounded-full`}>{m.tag}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {m.watts.map(w => (
                          <span key={w} className="bg-gray-100 text-gray-700 text-sm font-bold px-3 py-1 rounded-lg">{w}</span>
                        ))}
                        <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-lg">{m.coverage}</span>
                        <span className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-lg">{m.ip}</span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2 mb-4">
                        {m.features.map((f, j) => (
                          <div key={j} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                            {f}
                          </div>
                        ))}
                      </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-6 text-white sticky top-24">
                <h3 className="font-extrabold text-xl mb-1">Pedir Orçamento</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Indique o espaço e o uso pretendido, recomendamos o modelo certo.
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
                  className="block w-full py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-center transition-colors"
                >
                  Formulário de Contacto
                </Link>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-sm text-gray-600">
                <p className="font-bold text-gray-900 mb-1">Precisa de menos potência?</p>
                <p className="mb-3">A Linha Profissional oferece robustez e durabilidade para uso comercial intensivo.</p>
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
