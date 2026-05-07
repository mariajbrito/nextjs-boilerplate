import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Droplets, AlertTriangle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema } from '@/utils/schemaMarkup';

export default function DrymatPage() {
  const symptoms = ['Manchas escuras nas paredes', 'Cheiro a bolor', 'Salitre e eflorescências', 'Tinta a descascar', 'Paredes frias e húmidas', 'Problemas respiratórios'];
  const how = [
    { step: '1', title: 'Instalação', text: 'O aparelho é colocado estrategicamente numa das paredes com humidade ascendente. Sem obras, sem demolições.' },
    { step: '2', title: 'Ação', text: 'O equipamento altera a polaridade da água existente dentro das paredes. Como resultado dessa mudança, a humidade que subia começa a descer e volta para a terra. Após alguns meses, as paredes ficam secas.' },
    { step: '3', title: 'Resultado', text: 'Após alguns meses as paredes ficam progressivamente secas. Redução de 80 a 100% da humidade ascendente. Em Portugal existem mais de 500 casos de sucesso!' },
  ];

  return (
    <>
      <SEOHead
        title="Eliminar Humidade Ascendente nas Paredes Sem Obras | Drymat"
        description="Drymat seca paredes com humidade ascendente sem obras. Tecnologia alemã, redução de 80 a 100% em 2 a 6 meses, garantia 10 anos. Análise gratuita ao imóvel."
        canonical="/products/drymat"
        image="/Drymat/Eliminarhumidadeparedes.png"
        schemas={[generateProductSchema({ name: 'Drymat', description: 'Elimina humidade ascendente sem obras. Tecnologia alemã de frequência eletromagnética. Análise gratuita ao imóvel.', image: `${COMPANY.baseUrl}/Drymat/Eliminarhumidadeparedes.png`, brand: 'Drymat', url: `${COMPANY.baseUrl}/products/drymat` })]}
      />
      <div className="min-h-screen">
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img src="/Drymat/Eliminarhumidadeparedes.png" alt="Drymat eliminação de humidade ascendente em paredes" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex justify-center pt-3 px-4">
            <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Produtos', path: '/products' }, { label: 'Drymat', path: '/products/drymat' }]} dark />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-8">
            <span className="inline-block bg-cyan-700 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Eliminação de Humidade</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight drop-shadow-lg">Drymat®</h1>
            <p className="text-cyan-300 font-semibold mt-2 text-lg drop-shadow">A solução eficaz e definitiva para humidade ascendente sem obras</p>
          </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">O Que É o Drymat?</h2>
                <p className="text-gray-700 leading-relaxed mb-5">
                  O Drymat® é um aparelho desenvolvido e produzido na Alemanha, que se instala <strong>sem obras</strong> numa das paredes com humidade ascendente para resolver esse problema na casa inteira. É uma das poucas soluções no mercado que realmente elimina a causa da humidade ascendente e seca as paredes de forma eficaz. Sem água nas paredes, o salitre deixa de surgir.
                </p>
                <div className="rounded-xl overflow-hidden aspect-[4/3] mb-2 max-w-xs">
                  <img src="/Drymat/drymat.jpg" alt="Aparelho Drymat instalado" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>

              {/* Symptoms */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <h3 className="font-extrabold text-gray-900">Reconhece estes sinais?</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {symptoms.map(s => (
                    <div key={s} className="flex items-center gap-2 text-sm text-red-700">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">Se sim, pode ter humidade ascendente. Contacte-nos para uma análise gratuita.</p>
              </div>

              {/* How it works */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Como Funciona</h2>
                <div className="space-y-4">
                  {how.map(h => (
                    <div key={h.step} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-2xl">
                      <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-extrabold">
                        {h.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{h.title}</h3>
                        <p className="text-sm text-gray-600">{h.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 text-center">
                {[
                  { n: '80-100%', label: 'Redução da humidade' },
                  { n: '2-6', label: 'Meses para resultado' },
                  { n: '0', label: 'Obras necessárias' },
                ].map(s => (
                  <div key={s.n} className="bg-cyan-50 border border-cyan-100 rounded-2xl p-5">
                    <div className="text-3xl font-extrabold text-cyan-700 mb-1">{s.n}</div>
                    <div className="text-xs text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-6 text-white">
                <Droplets className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-extrabold text-xl mb-2">Visita e Análise Gratuitas</h3>
                <p className="text-gray-400 text-sm mb-2">Deslocamo-nos ao seu imóvel para confirmar se o problema é humidade ascendente e avaliar a solução ideal.</p>
                <p className="text-gray-400 text-sm mb-4">Serviço gratuito, sujeito a consulta prévia consoante a localização/distância. Sem compromisso.</p>
                <div className="space-y-1.5 mb-5 text-sm text-gray-300">
                  <div>✓ Relatório detalhado</div>
                  <div>✓ Sem obras invasivas</div>
                  <div>✓ Elegível apoios PT2030</div>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3">
                  <MessageCircle className="w-5 h-5" />WhatsApp
                </a>
                <Link to="/contact" className="block w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center transition-colors">
                  Pedir Análise
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
