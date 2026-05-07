import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Wind } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema } from '@/utils/schemaMarkup';

export default function ClimateCoatingPage() {
  const products = [
    { name: 'ThermoVital / ThermoPlus', zone: 'Interior', desc: 'Regula a humidade do ar (≈55%), funciona como esponja. Ideal para todas as paredes e tetos interiores.' },
    { name: 'ThermoProtect', zone: 'Exterior', desc: 'Membrana impermeável para fachadas. Reflete o calor solar e protege contra chuva e humidade.' },
    { name: 'ThermoActive', zone: 'Coberturas', desc: 'Aplicação em coberturas planas e telhados. Reduz drasticamente a temperatura no verão, graças à reflexão de 92% da radiação UV.' },
  ];

  return (
    <>
      <SEOHead
        title="Tinta Isolante Térmica e Anti-Humidade | ClimateCoating"
        description="Membrana cerâmica ClimateCoating: isola termicamente fachadas, regula humidade interior, aplica-se como tinta. 30 a 40% menos custos de climatização, garantia 15 anos."
        canonical="/products/climatecoating"
        image="/ClimateCoating/bannermarketing.png"
        schemas={[generateProductSchema({ name: 'ClimateCoating', description: 'Membrana cerâmica de nanotecnologia alemã. Isola termicamente, regula humidade, aplica-se como tinta. Economias de 30-40% em climatização.', image: `${COMPANY.baseUrl}/ClimateCoating/bannermarketing.png`, brand: 'ClimateCoating', url: `${COMPANY.baseUrl}/products/climatecoating` })]}
      />
      <div className="min-h-screen">
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img src="/ClimateCoating/climatecoatingbalde.jpg" alt="ClimateCoating revestimento térmico cerâmico" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex justify-center pt-3 px-4">
            <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Produtos', path: '/products' }, { label: 'ClimateCoating', path: '/products/climatecoating' }]} dark />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-8">
            <span className="inline-block bg-blue-700 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Revestimento Térmico</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mt-4 tracking-tight drop-shadow-lg">ClimateCoating®</h1>
            <p className="text-orange-400 font-semibold mt-2 text-base sm:text-lg drop-shadow px-2">Nanotecnologia Cerâmica · Made in Germany · Mais do que uma tinta</p>
          </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Muito Mais do que uma Tinta</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O ClimateCoating® é a marca alemã original de produtos com base em nanotecnologia que formam uma <strong>membrana cerâmica com microesferas de vácuo</strong>. Aplica-se exatamente como uma tinta normal mas os efeitos são radicalmente diferentes.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Esta membrana produz <strong>efeitos endotérmicos</strong> que promovem a secagem de paredes e aumentam o conforto térmico. Estudos internacionais registam economias de <strong>30 a 40%</strong> nos custos de climatização apenas por pintar com estes produtos.
                </p>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Climate Coating é aplicado como se fosse uma tinta, mas tecnicamente trata-se de um revestimento líquido altamente respirável, que forma uma membrana flexível e resistente com propriedades endotérmicas. Com base em resultados globais, verifica-se uma poupança energética entre 15% e 40%, dependendo de vários fatores.
                </p>
                <blockquote className="border-l-4 border-blue-600 bg-blue-50 rounded-r-2xl px-5 py-4">
                  <p className="text-gray-800 font-bold text-base leading-snug">
                    "Não é uma tinta normal e não é um sistema de isolamento. Mas substitui ambos!"
                  </p>
                </blockquote>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Linhas de Produto</h2>
                <div className="space-y-4">
                  {products.map((p, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Wind className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-extrabold text-gray-900 text-sm">{p.name}</span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{p.zone}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real photos */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">A Nossa Equipa em Ação</h2>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl overflow-hidden aspect-square">
                    <img src="/ClimateCoating/eduardo.png" alt="Eduardo Catarino — ClimateCoating" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-square">
                    <img src="/ClimateCoating/eduardoacompanhado.png" alt="Demonstração ClimateCoating" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-square">
                    <img src="/ClimateCoating/expositor.png" alt="Expositor ClimateCoating" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Benefícios</h2>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    'Economias de 30-40% em climatização',
                    'Regula humidade do ar (≈55%)',
                    'Seca paredes húmidas',
                    'Aplica-se como tinta convencional',
                    'Proteção exterior contra chuva',
                    'Reduz ganho de calor no verão',
                    'Produtos para interior, exterior e cobertura, aplicações industriais, madeiras e muito mais.',
                    'Nanotecnologia testada internacionalmente',
                  ].map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />{b}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-6 text-white">
                <h3 className="font-extrabold text-xl mb-2">Pedir Informação</h3>
                <p className="text-gray-400 text-sm mb-5">Indicamos o produto certo para interior, exterior ou cobertura.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3">
                  <MessageCircle className="w-5 h-5" />WhatsApp
                </a>
                <Link to="/contact" className="block w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center transition-colors">
                  Pedir Orçamento
                </Link>
              </div>
              <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-5">
                <p className="text-sm font-bold text-gray-900 mb-2">Combo recomendado</p>
                <p className="text-xs text-gray-600 mb-3">ClimateCoating + Drymat = proteção total contra humidade e perda térmica.</p>
                <Link to="/products/drymat" className="text-xs text-orange-600 font-bold hover:text-orange-700">Ver Drymat →</Link>
              </div>
              <div className="border border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Site oficial</p>
                <a href="https://www.climatecoating.com/pt-pt/" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-blue-700 font-semibold hover:text-blue-900 break-all">
                  climatecoating.com/pt-pt →
                </a>
                <p className="text-xs text-gray-500 mt-1">Informação técnica completa, estudos e certificações</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
