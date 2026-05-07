import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Flame } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema, generatePtBreadcrumb } from '@/utils/schemaMarkup';

export default function EcoFireplacesPage() {
  return (
    <>
      <SEOHead
        title="Biolareiras a Bio-Etanol Sem Chaminé | Herkell"
        description="Biolareiras Herkell a bio-etanol e grelhadores a pellets. Sem chaminé, sem gás, 100% ecológico. Conforto e estética para qualquer espaço interior ou exterior."
        canonical="/products/eco-fireplaces"
        image="/biolareiras/biolareira.jpg"
        schemas={[
          generateProductSchema({ name: 'Biolareiras Herkell', description: 'Biolareiras a bio-etanol e grelhadores a pellets. Sem chaminé, sem gás, 100% ecológico.', image: `${COMPANY.baseUrl}/biolareiras/biolareira.jpg`, brand: 'Herkell', url: `${COMPANY.baseUrl}/products/eco-fireplaces` }),
          generatePtBreadcrumb([{ name: 'Produtos', path: '/products' }, { name: 'Biolareiras', path: '/products/eco-fireplaces' }]),
        ]}
      />
      <div className="min-h-screen">
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img src="/biolareiras/lareiraherkell.jpeg" alt="Biolareiras Herkell bio-etanol e pellets" className="w-full h-full object-cover object-center" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex justify-center pt-3 px-4">
            <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Produtos', path: '/products' }, { label: 'Biolareiras', path: '/products/eco-fireplaces' }]} dark />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-8">
            <span className="inline-block bg-red-700 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Biolareiras Eco</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mt-4 tracking-tight drop-shadow-lg">Biolareiras Herkell</h1>
            <p className="text-orange-400 font-semibold mt-2 text-base sm:text-lg drop-shadow px-2">Bio-Etanol & Pellets · Sem Chaminé · 100% Ecológico</p>
          </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Lareiras sem Obras nem Chaminé</h2>
                <div className="flex gap-5 items-start mb-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      As biolareiras Herkell a bio-etanol oferecem todo o conforto e estética de uma lareira tradicional sem necessidade de chaminé, instalação de gás ou obras de qualquer tipo.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      O bio-etanol é um combustível renovável derivado de plantas. A combustão produz apenas vapor de água e CO₂ em quantidades mínimas equivalente ao que expiramos ao respirar.
                    </p>
                  </div>
                  <img src="/biolareiras/biolareirasalaestar.jpg" alt="Biolareira Herkell em sala de estar" className="w-28 sm:w-36 flex-shrink-0 rounded-xl object-cover" style={{aspectRatio: '3/4'}} loading="lazy" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Vantagens</h2>
                <div className="flex gap-5 items-start">
                  <div className="flex-1 min-w-0">
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {[
                        'Sem chaminé nem instalação de gás',
                        'Sem obras coloca onde quiser',
                        'Combustível renovável (bio-etanol)',
                        'Chama real visível',
                        '100% ecológico',
                        'Design moderno e elegante',
                        'Grelhadores a pellets disponíveis',
                        'Ideal para interior e exterior',
                      ].map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />{b}
                        </div>
                      ))}
                    </div>
                  </div>
                  <img src="/biolareiras/biolareira.jpg" alt="Biolareira Herkell" className="w-28 sm:w-36 flex-shrink-0 rounded-xl object-cover" style={{aspectRatio: '3/4'}} loading="lazy" />
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-900 rounded-3xl p-6 text-white">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-extrabold text-xl mb-2">Pedir Informação</h3>
                <p className="text-gray-400 text-sm mb-5">Modelos, medidas e preços disponíveis via WhatsApp.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3">
                  <MessageCircle className="w-5 h-5" />WhatsApp
                </a>
                <Link to="/contact" className="block w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center transition-colors">
                  Pedir Orçamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
