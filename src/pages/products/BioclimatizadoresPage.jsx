import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Wind } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema, generatePtBreadcrumb } from '@/utils/schemaMarkup';

const MODELS = [
  { name: 'Elite 8', area: 'até 15 m²', desc: 'Compacto e silencioso. Ideal para escritórios, quartos e pequenas salas.' },
  { name: 'Elite 14', area: 'até 25 m²', desc: 'Para espaços médios. Inclui função antimosquitos e ionização do ar.' },
  { name: 'MF 60', area: 'até 35 m²', desc: 'Brumiventilador de exterior. Ideal para esplanadas e espaços de grande área.' },
];

export default function BioclimatizadoresPage() {
  return (
    <>
      <SEOHead
        title="Bioclimatizadores | Alternativa Saudável ao Ar Condicionado"
        description="Bioclimatizadores Elite e MF60 arrefecem por evaporação. Sem compressor, sem gases, até 80% menos consumo. Solução para casa, escritório, restaurante e esplanada."
        canonical="/products/bioclimatizadores"
        image="/Bioclimatizadores/bioclimatizadorquarto.png"
        schemas={[
          generateProductSchema({ name: 'Bioclimatizadores', description: 'Arrefecimento natural sem compressor, baixo consumo, sem gases. Alternativa saudável ao ar condicionado.', image: `${COMPANY.baseUrl}/Bioclimatizadores/bioclimatizadorquarto.png`, brand: 'Evoluimos Comércio', url: `${COMPANY.baseUrl}/products/bioclimatizadores` }),
          generatePtBreadcrumb([{ name: 'Produtos', path: '/products' }, { name: 'Bioclimatizadores', path: '/products/bioclimatizadores' }]),
        ]}
      />
      <div className="min-h-screen">
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img src="/Bioclimatizadores/bioclimatizadores.png" alt="Bioclimatizadores arrefecimento natural" className="w-full h-full object-cover object-[center_70%]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex justify-center pt-3 px-4">
            <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Produtos', path: '/products' }, { label: 'Bioclimatizadores', path: '/products/bioclimatizadores' }]} dark />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-8">
            <span className="inline-block bg-teal-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Arrefecimento Natural</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mt-4 tracking-tight drop-shadow-lg">Bioclimatizadores</h1>
            <p className="text-orange-400 font-semibold mt-2 text-base sm:text-lg drop-shadow px-2">Arrefecimento por Evaporação · Sem Compressor · Baixo Consumo</p>
          </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Arrefecimento Natural sem Compressor</h2>
                <div className="flex gap-5 items-start">
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Os bioclimatizadores são uma alternativa saudável ao ar condicionado convencional. O arrefecimento é produzido através da <strong>evaporação de água</strong> quanto mais calor fizer, maior o arrefecimento, com humidificação natural do ar.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      O consumo elétrico é baixíssimo limita-se à ventoinha que suga o ar quente e o impulsiona arrefecido para o ambiente. Os modelos Elite têm design moderno, comando remoto, 3 velocidades, função antimosquitos e ionização do ar.
                    </p>
                  </div>
                  <img src="/Bioclimatizadores/bioclimatizadores.png" alt="Bioclimatizadores" className="w-28 sm:w-36 flex-shrink-0 rounded-xl object-cover" style={{aspectRatio: '3/4'}} loading="lazy" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Modelos Disponíveis</h2>
                <div className="space-y-4">
                  {MODELS.map((m, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Wind className="w-5 h-5 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3 mb-1 flex-wrap">
                          <span className="font-extrabold text-gray-900">{m.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-semibold">{m.area}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">* Para funcionamento ideal, usar com janelas abertas em favor da corrente de ar.</p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Vantagens</h2>
                <div className="flex gap-5 items-start">
                  <div className="flex-1 min-w-0">
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {[
                        'Sem compressor, sem gases fluorados',
                        'Baixíssimo consumo elétrico',
                        'Humidifica o ar seco',
                        'Sem instalação plug & play',
                        'Função antimosquitos (Elite)',
                        'Ionização do ar (Elite)',
                        'Ideal para verão e esplanadas',
                        'Design moderno com comando',
                      ].map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />{b}
                        </div>
                      ))}
                    </div>
                  </div>
                  <img src="/Bioclimatizadores/mf60.png" alt="Bioclimatizador MF60" className="w-16 sm:w-20 flex-shrink-0 rounded-xl object-contain" style={{aspectRatio: '1/2'}} loading="lazy" />
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-900 rounded-3xl p-6 text-white">
                <h3 className="font-extrabold text-xl mb-2">Encomendar</h3>
                <p className="text-gray-400 text-sm mb-5">Entrega em Portugal continental.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3">
                  <MessageCircle className="w-5 h-5" />WhatsApp
                </a>
                <Link to="/contact" className="block w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center transition-colors">
                  Pedir Informação
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
