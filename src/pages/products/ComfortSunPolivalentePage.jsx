import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import ComfortSunLineNav from '@/components/ComfortSunLineNav';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema } from '@/utils/schemaMarkup';

const MODELS = [
  {
    icon: Thermometer,
    name: 'Torre de Aquecimento 2000W',
    imgs: ['/ComfortSun/torreaquecimento1.webp', '/ComfortSun/torreaquecimento2.webp', '/ComfortSun/torreaquecimento3.webp'],
    watts: ['2000W'],
    coverage: 'Até 14 m²',
    ip: 'IP 65 (TÜV)',
    tag: 'Exterior',
    tagColor: 'bg-blue-600',
    colors: ['Nano Antracite', 'Titan'],
    features: [
      'Emite raios infravermelhos que aquecem diretamente pessoas e objetos',
      'Uso móvel sem instalação permanente',
      'Tecnologia Bluetooth com app móvel ou telecomando',
      'Lâmpada Low Glare incluída',
      'IP 65, resistência total a humidade e intempéries',
      'Materiais de qualidade alemã, baixa manutenção',
      'Ideal para esplanadas sem estrutura coberta',
      'Resistente ao vento, calor direto, não aquece o ar',
    ],
  },
];

export default function ComfortSunPolivalentePage() {
  return (
    <>
      <SEOHead
        title="Torres de Aquecimento para Esplanadas e Eventos | ComfortSun"
        description="Torres de aquecimento por infravermelhos 2000W para exterior (IP65, Bluetooth). Portáteis, ideais para esplanadas, terraços e eventos. A partir de 399€ + IVA."
        canonical="/products/comfortsun/polivalente"
        schemas={[generateProductSchema({ name: 'ComfortSun Polivalente', description: 'Torres de 2000W para exterior (IP65, Bluetooth). Portáteis, ideais para esplanadas, terraços e eventos ao ar livre.', image: `${COMPANY.baseUrl}/aquecimentopolivalente.webp`, brand: 'ComfortSun', url: `${COMPANY.baseUrl}/products/comfortsun/polivalente` })]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Compact dark header */}
        <div className="bg-gradient-to-br from-gray-950 via-blue-950/40 to-gray-900 pt-6 pb-10 px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              items={[
                { label: 'Início', path: '/' },
                { label: 'Produtos', path: '/products' },
                { label: 'ComfortSun', path: '/products/comfortsun' },
                { label: 'Polivalente', path: '/products/comfortsun/polivalente' },
              ]}
              dark
            />
            <div className="mt-6 text-center">
              <span className="inline-block bg-blue-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                ComfortSun · Aquecimento Polivalente
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Polivalente
              </h1>
              <p className="text-blue-300 mt-2 font-medium">
                Exterior · Torres · Bluetooth
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
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Interior e exterior sem compromissos</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A gama <strong>Polivalente ComfortSun</strong> adapta-se a múltiplos ambientes exteriores, desde esplanadas sem cobertura fixa a terraços e eventos.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As <strong>Torres de Aquecimento</strong> são portáteis, resistentes ao exterior (IP 65) e com Bluetooth para controlo remoto via app ou telecomando.
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
                      className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
                    >
                      {m.imgs && m.imgs.length > 0 && (
                        <div className="flex gap-3 justify-center bg-gray-50 px-4 pt-4 pb-2">
                          {m.imgs.map((img, j) => (
                            <img key={j} src={img} alt={m.name} className="h-28 object-contain" />
                          ))}
                        </div>
                      )}
                      <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <m.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="font-extrabold text-gray-900 text-lg">{m.name}</h3>
                        <span className={`${m.tagColor} text-white text-xs font-bold px-2.5 py-0.5 rounded-full`}>{m.tag}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {m.watts.map(w => (
                          <span key={w} className="bg-gray-100 text-gray-700 text-sm font-bold px-3 py-1 rounded-lg">{w}</span>
                        ))}
                        {m.ip && (
                          <span className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-lg">{m.ip}</span>
                        )}
                        <span className="bg-gray-50 text-gray-600 text-sm px-3 py-1 rounded-lg">{m.coverage}</span>
                        {m.colors.map(c => (
                          <span key={c} className="bg-gray-50 text-gray-500 text-xs px-3 py-1 rounded-lg">{c}</span>
                        ))}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-2 mb-4">
                        {m.features.map((f, j) => (
                          <div key={j} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
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
                  Diga-nos onde vai usar e o espaço disponível, sugerimos a solução certa.
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
                  className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-center transition-colors"
                >
                  Formulário de Contacto
                </Link>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-gray-600">
                <p className="font-bold text-gray-900 mb-1">Quer o máximo controlo?</p>
                <p className="mb-3">A Linha Deluxe inclui Bluetooth, app móvel e telecomando com dimmer contínuo.</p>
                <Link to="/products/comfortsun/deluxe" className="text-amber-600 font-bold hover:text-amber-700 text-xs">
                  Ver Linha Deluxe →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
