import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';

import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema } from '@/utils/schemaMarkup';

export default function DuothermPage() {
  const benefits = [
    'Sem emissão de CO₂ 100% ecológico',
    'Sem manutenção apenas ligar/desligar',
    'Calor saudável por radiação (como o sol)',
    'Aquece também as paredes ficam secas',
    'Fácil de instalar, sem obras invasivas',
    'Elemento decorativo personalizável',
    'Termostato incluído controlo preciso',
    'Versão DELUXE com placa de vidro nanotecnológica',
    '10 anos de garantia do fabricante',
  ];

  return (
    <>
      <SEOHead
        title="Duotherm Aquecimento Radiante em Pedra Natural | Evoluimos Comércio"
        description="Radiadores Duotherm em pedra natural. Sistema de aquecimento por infravermelhos produzido em Portugal, tecnologia alemã. Sem CO₂, sem manutenção."
        canonical="/products/duotherm"
        image="/Duotherm/saladeestar.png"
        schemas={[generateProductSchema({ name: 'Duotherm', description: 'Radiadores em pedra natural com aquecimento por infravermelhos. Produzido em Portugal, tecnologia alemã. Sem CO2, sem manutenção.', image: `${COMPANY.baseUrl}/Duotherm/saladeestar.png`, brand: 'Duotherm', url: `${COMPANY.baseUrl}/products/duotherm` })]}
      />
      <div className="min-h-screen">
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img src="/Duotherm/pedraduotherm.jpeg" alt="Duotherm Aquecimento Radiante em pedra natural" className="w-full h-full object-cover object-top" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex justify-center pt-3 px-4">
            <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Produtos', path: '/products' }, { label: 'Duotherm', path: '/products/duotherm' }]} dark />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-8">
            <span className="inline-block bg-stone-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Aquecimento Radiante</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight drop-shadow-lg">Duotherm</h1>
            <p className="text-orange-400 font-semibold mt-2 text-lg drop-shadow">Radiadores em Pedra Natural · Tecnologia Alemã · Produzido em Portugal</p>
          </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">O Que É o Duotherm?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O Duotherm® é um sistema de aquecimento por infravermelhos em pedra natural, desenvolvido na Alemanha e produzido em Portugal. Os radiadores superam os sistemas clássicos de aquecimento em todos os aspetos: baixo consumo energético, fácil instalação sem obras, silencioso e completamente limpo.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Na versão <strong>DELUXE</strong>, a pedra natural é aquecida através de uma placa de vidro que integra a resistência elétrica à base de nanotecnologia. Esta alta tecnologia permite maior aproveitamento térmico com menor potência elétrica mais acumulação de calor e menor consumo.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Vantagens</h2>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 rounded-xl p-3">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="font-extrabold text-gray-900 mb-2">Calor Saudável por Radiação</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  O aquecimento por radiação funciona como o sol aquece os corpos e as superfícies diretamente, sem circular ar ou criar correntes. Resultado: sem poeiras em suspensão, sem ressecamento do ar, melhor para alergias e vias respiratórias.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Tanto os aquecedores da Duotherm como o painel AHT funcionam por calor radiante (infravermelhos). A diferença está no tipo de onda utilizada, sendo distinta do aquecimento de exterior da ComfortSun / Solamagic.
                </p>
              </div>

              <div className="bg-stone-800 rounded-2xl p-6 text-white flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">🏆</div>
                <div>
                  <h3 className="font-extrabold text-lg mb-1">10 Anos de Garantia do Fabricante</h3>
                  <p className="text-stone-300 text-sm leading-relaxed">A qualidade do Duotherm é comprovada por 10 anos de garantia direta do fabricante, sem necessidade de qualquer manutenção. Instala-se uma vez e funciona durante décadas.</p>
                </div>
              </div>

              {/* AHT Panels — economic alternative */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block bg-indigo-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Alternativa Económica</span>
                </div>
                <h3 className="font-extrabold text-gray-900 text-xl mb-2">Painel AHT ComfortSun</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Para quem procura aquecimento por infravermelhos interior a um preço mais acessível, o <strong>Painel AHT</strong> é a alternativa económica às pedras naturais Duotherm. Com tecnologia de infravermelhos de onda longa, aquece diretamente pessoas e superfícies sem circular ar, num formato discreto e moderno.
                </p>
                <div className="grid sm:grid-cols-2 gap-2 mb-4">
                  {[
                    'Ecrã LED touchscreen integrado',
                    'Temperatura ajustável: 16°C a 37°C',
                    'Conectividade Wi-Fi com app de controlo',
                    'Timer programável até 9 horas e semanal',
                    'Duplo termostato interno de segurança',
                    'Telecomando incluído',
                    'Montagem em parede, teto ou suporte móvel',
                    'Sem emissão de gases, sem circulação de poeiras',
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700 bg-white rounded-xl p-3">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Aplicação', value: 'Interior' },
                    { label: 'Temperatura', value: '16°C a 37°C' },
                    { label: 'Conectividade', value: 'Wi-Fi + App' },
                    { label: 'Timer', value: 'Até 9h / Semanal' },
                    { label: 'Cor', value: 'Branco PET' },
                    { label: 'Montagem', value: 'Parede, teto ou suporte' },
                  ].map(s => (
                    <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-3">
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">{s.label}</div>
                      <div className="font-bold text-gray-900 text-sm">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo gallery */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Duotherm em Ambiente Real</h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { src: '/Duotherm/sala.png', alt: 'Duotherm em sala' },
                    { src: '/Duotherm/salatv.png', alt: 'Duotherm em sala de TV' },
                    { src: '/Duotherm/parede.png', alt: 'Duotherm montado em parede' },
                    { src: '/Duotherm/saladeestar.png', alt: 'Duotherm em sala de estar' },
                  ].map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden aspect-[4/3]">
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-6 text-white">
                <h3 className="font-extrabold text-xl mb-2">Pedir Informação</h3>
                <p className="text-gray-400 text-sm mb-5">Calculamos a potência ideal para o seu espaço.</p>
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
