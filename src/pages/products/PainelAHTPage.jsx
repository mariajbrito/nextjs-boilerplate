import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema } from '@/utils/schemaMarkup';

const FEATURES = [
  'Ecrã LED touchscreen integrado no painel',
  'Temperatura ajustável: 16°C a 37°C',
  'Conectividade Wi-Fi com app de controlo',
  'Timer programável até 9 horas',
  'Timer semanal programável',
  'Duplo termostato interno contra sobreaquecimento',
  'Telecomando incluído',
  'Montagem em parede, teto ou suporte móvel',
];

export default function PainelAHTPage() {
  return (
    <>
      <SEOHead
        title="Painel de Aquecimento Interior com Wi-Fi | AHT ComfortSun"
        description="Painel AHT ComfortSun para aquecimento interior com infravermelhos. Touchscreen, Wi-Fi, timer programável e duplo termostato. Solução elegante para salas."
        canonical="/products/painel-aht"
        image="/ComfortSun/painelaht.jpg"
        schemas={[generateProductSchema({ name: 'Painel AHT ComfortSun', description: 'Painel de aquecimento interior por infravermelhos. Touchscreen, Wi-Fi, timer programável e duplo termostato.', image: `${COMPANY.baseUrl}/ComfortSun/painelaht.jpg`, brand: 'ComfortSun', url: `${COMPANY.baseUrl}/products/painel-aht` })]}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img
            src="/ComfortSun/painelaht.jpg"
            alt="Painel AHT aquecimento interior"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex justify-center pt-3 px-4">
            <Breadcrumb
              items={[
                { label: 'Início', path: '/' },
                { label: 'Produtos', path: '/products' },
                { label: 'Painel AHT', path: '/products/painel-aht' },
              ]}
              dark
            />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-8">
            <span className="inline-block bg-indigo-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Aquecimento Interior</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight drop-shadow-lg">Painel AHT</h1>
            <p className="text-orange-400 font-semibold mt-2 text-lg drop-shadow">Aquecimento Interior · Wi-Fi · Touchscreen</p>
          </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* Intro */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Aquecimento Interior Inteligente</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O <strong>Painel AHT</strong> é a solução elegante da gama ComfortSun para aquecimento de espaços interiores. Com tecnologia de infravermelhos, aquece diretamente pessoas e superfícies sem circular ar, garantindo conforto saudável e eficiente.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  O painel integra um <strong>ecrã LED touchscreen</strong>, conectividade Wi-Fi com app de controlo remoto, timer semanal programável e duplo termostato de segurança. Pode ser montado em parede, teto ou em suporte móvel.
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Características</h2>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {FEATURES.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 rounded-xl p-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Especificações</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Aplicação', value: 'Interior' },
                    { label: 'Temperatura', value: '16°C a 37°C' },
                    { label: 'Conectividade', value: 'Wi-Fi + App' },
                    { label: 'Timer', value: 'Até 9h / Semanal' },
                    { label: 'Cor', value: 'Branco PET' },
                    { label: 'Montagem', value: 'Parede, teto ou suporte' },
                  ].map(s => (
                    <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4">
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">{s.label}</div>
                      <div className="font-bold text-gray-900 text-sm">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-6 text-white">
                <h3 className="font-extrabold text-xl mb-2">Pedir Informação</h3>
                <p className="text-gray-400 text-sm mb-5">Indicamos o modelo certo para o seu espaço interior.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <Link to="/contact"
                  className="block w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center transition-colors">
                  Pedir Orçamento
                </Link>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">Gama ComfortSun</p>
                <p className="text-sm text-gray-700 mb-3">Explore as outras linhas ComfortSun para exterior.</p>
                <Link to="/products/comfortsun" className="text-xs text-orange-600 font-bold hover:text-orange-700">
                  Ver ComfortSun →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
