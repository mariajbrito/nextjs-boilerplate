import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Thermometer, Zap, Shield, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';

const FEATURES = [
  'Aquecimento uniforme por toda a superfície do piso',
  'Conforto térmico desde o chão, sem correntes de ar',
  'Instalação simples sob qualquer tipo de revestimento',
  'Compatível com cerâmica, porcelânico, pedra e vinyl',
  'Termostato programável com controlo de temperatura',
  'Funcionamento silencioso e sem manutenção',
  'Alta eficiência energética com baixo consumo',
  'Ideal para casas de banho, cozinhas e divisões interiores',
];

const SPECS = [
  { label: 'Aplicação', value: 'Interior' },
  { label: 'Revestimentos', value: 'Cerâmica, pedra, vinyl' },
  { label: 'Controlo', value: 'Termostato programável' },
  { label: 'Alimentação', value: 'Elétrica (220V)' },
  { label: 'Instalação', value: 'Sob o revestimento' },
  { label: 'Marca', value: 'AHT' },
];

const BENEFITS = [
  {
    icon: Thermometer,
    title: 'Calor por toda a superfície',
    desc: 'O calor distribui-se de forma homogénea por todo o pavimento, eliminando zonas frias e garantindo conforto imediato.',
  },
  {
    icon: Zap,
    title: 'Eficiência energética',
    desc: 'Tecnologia de resistência elétrica de alta eficiência, com consumo controlado pelo termostato programável.',
  },
  {
    icon: Shield,
    title: 'Sem manutenção',
    desc: 'Sistema sem peças móveis nem fluidos. Uma vez instalado, não requer qualquer manutenção ao longo dos anos.',
  },
  {
    icon: Droplets,
    title: 'Ideal para casas de banho',
    desc: 'Especialmente indicado para zonas húmidas. Mantém o piso seco e quente, aumentando o conforto no dia a dia.',
  },
];

export default function PisoRadiantePage() {
  return (
    <>
      <SEOHead
        title="Piso Radiante Eléctrico AHT | Aquecimento de Pavimento | Evoluimos Comércio"
        description="Piso radiante eléctrico AHT para aquecimento de pavimento interior. Instalação simples, conforto uniforme e eficiência energética. Ideal para casas de banho e cozinhas."
        canonical="/products/piso-radiante"
        image="/Piso radiante/Pisoradianteahtcasadebanho.jpg"
      />

      <div className="min-h-screen">
        {/* Hero */}
        <div className="relative h-80 md:h-[520px] overflow-hidden">
          <img
            src="/Piso radiante/Pisoradianteahtcasadebanho.jpg"
            alt="Piso radiante eléctrico AHT em casa de banho"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex justify-center pt-3 px-4">
              <Breadcrumb
                items={[
                  { label: 'Início', path: '/' },
                  { label: 'Produtos', path: '/products' },
                  { label: 'Piso Radiante Eléctrico', path: '/products/piso-radiante' },
                ]}
                dark
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-8">
              <span className="inline-block bg-orange-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Proteção e Conforto</span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight drop-shadow-lg">Piso Radiante Eléctrico</h1>
              <p className="text-orange-400 font-semibold mt-2 text-lg drop-shadow">Aquecimento de Pavimento · AHT · Alta Eficiência</p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* Intro */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Conforto a partir do chão</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O <strong>piso radiante eléctrico AHT</strong> é uma solução de aquecimento por pavimento que transforma qualquer divisão num espaço acolhedor e confortável. A resistência eléctrica, instalada sob o revestimento, aquece de forma homogénea toda a superfície do chão, sem correntes de ar, sem pó em suspensão e sem ruído.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ao contrário do aquecimento tradicional, que aquece o ar e deixa o pavimento frio, o piso radiante cria uma sensação de calor natural e envolvente, semelhante à do sol. Ideal para casas de banho, cozinhas, quartos e corredores.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Com o termostato programável incluído, é possível definir horários e temperaturas para cada divisão, maximizando o conforto e a eficiência energética.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  A Evoluimos Comércio disponibiliza igualmente piso radiante da marca Duotherm. O que distingue o AHT dos restantes pisos radiantes elétricos é o facto de ser ultrafino, em metal amorfo, e de aquecimento rápido, com apenas 1 mm de espessura e 15 anos de garantia do fabricante.
                </p>
              </div>

              {/* Photo in text */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/Piso radiante/pisoradianteaht.jpg"
                  alt="Sistema de piso radiante eléctrico AHT instalado"
                  className="w-full object-cover"
                  style={{ maxHeight: '340px', objectPosition: 'center' }}
                  loading="lazy"
                />
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Vantagens</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {BENEFITS.map((b, i) => {
                    const Icon = b.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="flex gap-4 bg-orange-50 border border-orange-100 rounded-xl p-4"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm mb-1">{b.title}</div>
                          <div className="text-gray-500 text-sm leading-relaxed">{b.desc}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
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
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </motion.div>
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

              {/* Aplicações */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Onde aplicar</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  O piso radiante eléctrico é especialmente indicado para divisões onde o conforto térmico junto ao solo faz toda a diferença. A instalação é feita sob qualquer tipo de revestimento cerâmico, em porcelânico, pedra natural ou materiais vinílicos compatíveis.
                </p>
                <ul className="text-sm text-gray-600 space-y-1.5">
                  {['Casas de banho e zonas húmidas', 'Cozinhas', 'Quartos e suites', 'Corredores e halls de entrada', 'Espaços de trabalho e escritórios'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-6 text-white">
                <h3 className="font-extrabold text-xl mb-2">Pedir Informação</h3>
                <p className="text-gray-400 text-sm mb-5">Indicamos a solução certa para a sua divisão e tipo de revestimento.</p>
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

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Proteção e Conforto</p>
                <p className="text-sm text-gray-700 mb-3">Conheça outras soluções da gama Proteção e Conforto da Evoluimos Comércio.</p>
                <Link to="/products/climatecoating" className="block text-xs text-orange-600 font-bold hover:text-orange-700 mb-1">
                  ClimateCoating →
                </Link>
                <Link to="/products/drymat" className="block text-xs text-orange-600 font-bold hover:text-orange-700 mb-1">
                  Drymat Anti-Humidade →
                </Link>
                <Link to="/products/bioclimatizadores" className="block text-xs text-orange-600 font-bold hover:text-orange-700">
                  Bioclimatizadores →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Marca</p>
                <p className="text-lg font-extrabold text-gray-900 mb-1">AHT</p>
                <p className="text-sm text-gray-500">Tecnologia de aquecimento de pavimento de alta eficiência.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
