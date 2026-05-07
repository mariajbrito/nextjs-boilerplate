import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, ArrowRight, Zap, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import ComfortSunLineNav from '@/components/ComfortSunLineNav';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema } from '@/utils/schemaMarkup';

const MODELS = [
  {
    watts: '1400W',
    img: '/ComfortSun/ComfortSun25_1400.webp',
    desc: 'O modelo mais popular. Ideal para esplanadas médias, bares e restaurantes com espaços moderados.',
    uses: ['Restaurantes', 'Cafés', 'Esplanadas'],
    highlight: true,
  },
  {
    watts: '2000W',
    img: null,
    desc: 'Máxima potência para grandes espaços comerciais. Hotéis, spas e terraços de grande dimensão.',
    uses: ['Hotéis', 'Spas', 'Terraços amplos'],
    highlight: false,
  },
];

const FEATURES = [
  'Potência de 1400W e 2000W, as mais utilizadas em ambiente comercial',
  'Cores disponíveis: branco, antracite nano e titan',
  'Qualquer cor RAL disponível sob encomenda',
  'Opções elétricas: ficha simples, interruptor ou cabo integrado',
  'Resistente ao vento, calor direto, não aquece o ar',
  'Sem peças móveis, sem manutenção regular',
  'Não emite gases nem queima oxigénio',
  'Entrega direta da fábrica na Alemanha',
];

const ACCESSORIES = [
  {
    name: 'Suporte de Braçadeira para Chapéu de Sol',
    desc: 'Fixação robusta por aperto para montagem em tubo. Ajustável para secções até 40 mm. Compatível com modelos 1400W e 2000W.',
    icon: Wrench,
  },
  {
    name: 'Suporte Móvel Telescópico',
    desc: 'Suporte de chão para aquecedores 1400W ou 2000W. Tubo telescópico até 210 cm de altura. Base redonda reforçada em aço para estabilidade máxima.',
    icon: Zap,
  },
];

export default function ComfortSunProfessionalPage() {
  return (
    <>
      <SEOHead
        title="Aquecimento para Restaurantes, Hotéis e Spas | ComfortSun Pro"
        description="Aquecedores infravermelhos profissionais ComfortSun 1400W e 2000W para esplanadas, hotéis, restaurantes e spas. Tecnologia alemã, instalação rápida."
        canonical="/products/comfortsun/professional"
        image="/ComfortSun/esplanada.png"
        schemas={[generateProductSchema({ name: 'ComfortSun Linha Profissional', description: 'Aquecedores infravermelhos de 1400W e 2000W para hotéis, restaurantes, spas e esplanadas. Tecnologia alemã.', image: `${COMPANY.baseUrl}/ComfortSun/esplanada.png`, brand: 'ComfortSun', url: `${COMPANY.baseUrl}/products/comfortsun/professional` })]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Compact dark header */}
        <div className="bg-gradient-to-br from-gray-950 via-gray-800/60 to-gray-900 pt-6 pb-10 px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { label: 'Início', path: '/' },
                { label: 'Produtos', path: '/products' },
                { label: 'ComfortSun', path: '/products/comfortsun' },
                { label: 'Linha Profissional', path: '/products/comfortsun/professional' },
              ]}
              dark
            />
            <div className="mt-6 text-center">
              <span className="inline-block bg-gray-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                ComfortSun · Linha Profissional
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Profissional
              </h1>
              <p className="text-gray-300 mt-2 font-medium">
                1400W &amp; 2000W · Hotéis, Restaurantes &amp; Spas
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

            {/* Main */}
            <div className="lg:col-span-2 space-y-10">

              {/* Intro */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Para uso comercial intensivo</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A <strong>Linha Profissional ComfortSun</strong> foi desenvolvida para instalações comerciais exigentes. Potência, robustez e durabilidade são as prioridades desta gama, pensada para quem precisa de um aquecimento fiável e eficiente dia após dia.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Com modelos de <strong>1400W e 2000W</strong>, os mais utilizados em ambiente comercial, e disponibilidade em diversas acabamentos de cor, esta linha adapta-se facilmente ao ambiente de qualquer espaço, sem comprometer a performance.
                </p>
              </div>

              {/* Models */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Modelos disponíveis</h2>
                <div className="space-y-4">
                  {MODELS.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`border rounded-2xl overflow-hidden ${m.highlight ? 'bg-orange-50 border-orange-200' : 'bg-gray-50 border-gray-200'}`}
                    >
                      <div className="flex items-stretch gap-0">
                        {m.img && (
                          <div className="w-28 flex-shrink-0 bg-white">
                            <img src={m.img} alt={`ComfortSun ${m.watts}`} className="w-full h-full object-contain p-2" />
                          </div>
                        )}
                        <div className="p-5 flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-white text-sm font-extrabold px-3 py-1.5 rounded-xl ${m.highlight ? 'bg-orange-600' : 'bg-gray-700'}`}>
                              {m.watts}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed mb-2">{m.desc}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {m.uses.map(u => (
                              <span key={u} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{u}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3">Consulte-nos para orçamento personalizado.</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Características</h2>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {FEATURES.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Accessories */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Acessórios</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {ACCESSORIES.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white border border-gray-200 rounded-2xl p-5"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <a.icon className="w-4 h-4 text-orange-500" />
                        <h3 className="font-bold text-gray-900 text-sm">{a.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
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
                  Diga-nos o seu espaço e volume de utilização, recomendamos a solução certa.
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
                  className="block w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center transition-colors"
                >
                  Formulário de Contacto
                </Link>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Quer design premium?</p>
                <p className="text-sm text-gray-700 mb-3">
                  A Linha Deluxe tem controlo remoto, Bluetooth e lâmpadas HeLeN de baixa luminosidade.
                </p>
                <Link
                  to="/products/comfortsun"
                  className="inline-flex items-center gap-1 text-xs text-orange-600 font-bold hover:text-orange-700"
                >
                  Ver toda a gama ComfortSun <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
