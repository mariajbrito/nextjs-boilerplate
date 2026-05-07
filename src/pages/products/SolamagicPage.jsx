import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Star, Zap, Shield, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema, generatePtBreadcrumb } from '@/utils/schemaMarkup';

const SPECS = [
  { label: 'Tecnologia', value: 'Infravermelhos onda curta' },
  { label: 'Eficiência', value: '92% convertido em calor' },
  { label: 'Origem', value: 'Made in Germany' },
  { label: 'Proteção', value: 'À prova de chuva (IP)' },
  { label: 'Luminosidade', value: 'Opção Low Glare' },
  { label: 'Aplicação', value: 'Interior e exterior' },
];

const BENEFITS = [
  { icon: Zap, title: 'Calor Imediato', text: 'Ativação instantânea. Sem tempo de espera ideal para esplanadas com clientela rotativa.' },
  { icon: Shield, title: 'Segurança Total', text: 'Lâmpada HeLeN patenteada com refletor de alto rendimento. Sem risco de incêndio.' },
  { icon: Droplets, title: 'À Prova de Chuva', text: 'Isolamento impermeável certificado. Funciona mesmo com chuva no exterior.' },
  { icon: Star, title: 'Design Versátil', text: 'Múltiplos modelos e cores. Integra-se discretamente em qualquer ambiente.' },
];

export default function SolamagicPage() {
  return (
    <>
      <SEOHead
        title="Aquecedores Infravermelhos para Esplanadas | Solamagic Portugal"
        description="Aquecedores Solamagic para esplanadas, terraços e restaurantes. Calor imediato à prova de chuva, 92% de eficiência, made in Germany. Análise gratuita."
        canonical="/products/solamagic"
        image="/Solamagic/aquecedorexterior.png"
        schemas={[
          generateProductSchema({ name: 'Solamagic', description: 'Aquecedores infravermelhos de onda curta para exterior. Calor imediato, 92% eficiência, made in Germany.', image: `${COMPANY.baseUrl}/Solamagic/aquecedorexterior.png`, brand: 'Solamagic', url: `${COMPANY.baseUrl}/products/solamagic` }),
          generatePtBreadcrumb([{ name: 'Produtos', path: '/products' }, { name: 'Solamagic', path: '/products/solamagic' }]),
        ]}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img
            src="/Solamagic/paisagem.png"
            alt="Solamagic Infravermelhos Premium"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex justify-center pt-3 px-4">
            <Breadcrumb
              items={[{ label: 'Início', path: '/' }, { label: 'Produtos', path: '/products' }, { label: 'Solamagic', path: '/products/solamagic' }]}
              dark
            />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-8">
            <div className="flex items-center justify-center gap-3">
              <span className="bg-amber-500 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">⭐ Premium</span>
              <span className="text-white/70 text-sm">Representante Nacional em Portugal</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight drop-shadow-lg">Solamagic</h1>
            <p className="text-orange-400 font-semibold mt-2 text-lg drop-shadow">Infravermelhos de Onda Curta · Made in Germany</p>
          </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* Intro */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">O Premium das Esplanadas</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A Evoluimos Comércio é o <strong>representante nacional da marca Solamagic em Portugal</strong>. Trazemos diretamente do fabricante alemão a mais alta tecnologia em aquecimento de exterior.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Os radiadores Solamagic de infravermelhos de onda curta convertem <strong>92% da potência em calor</strong> e apenas 8% em luz (com opção de lâmpadas low glare para ambientes noturnos). O aquecimento é imediato, localizado e resistente ao vento porque aquece diretamente as pessoas e os objetos, não o ar.
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Porquê Solamagic?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {BENEFITS.map((b, i) => {
                    const Icon = b.icon;
                    return (
                      <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                          <p className="text-sm text-gray-600">{b.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Product image */}
              <div className="rounded-2xl overflow-hidden border border-gray-100">
                <img
                  src="/Solamagic/aquecedorexterior.png"
                  alt="Solamagic aquecedor exterior"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Use cases */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Aplicações</h2>
                <div className="grid grid-cols-2 gap-3">
                  {['Esplanadas de restaurante', 'Terraços de hotel', 'Jardins privados', 'Igrejas e capelas', 'Eventos ao ar livre', 'Espaços industriais'].map(u => (
                    <div key={u} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      {u}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Especificações</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {SPECS.map(s => (
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
                <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-extrabold text-xl mb-2">Pedir Informação</h3>
                <p className="text-gray-400 text-sm mb-5">Análise gratuita para a sua esplanada ou espaço exterior.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <Link to="/contact"
                  className="block w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center transition-colors">
                  Pedir Orçamento
                </Link>
                <div className="mt-4 pt-4 border-t border-gray-700 space-y-1.5 text-sm text-gray-400">
                  <div>✓ Representante nacional</div>
                  <div>✓ Entrega direta do fabricante</div>
                  <div>✓ Apoio pós-venda</div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Comparação</p>
                <p className="text-sm text-gray-700 font-semibold mb-1">Solamagic vs ComfortSun</p>
                <p className="text-xs text-gray-500">Solamagic é o posicionamento premium de topo de gama. ComfortSun é a alternativa polivalente de volume.</p>
                <Link to="/products/comfortsun" className="inline-flex items-center gap-1 text-xs text-orange-600 font-bold mt-3 hover:text-orange-700">
                  Ver ComfortSun <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
