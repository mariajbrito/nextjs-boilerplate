import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema, generatePtBreadcrumb } from '@/utils/schemaMarkup';

const LINES = [
  {
    name: 'Polivalente',
    desc: 'Torres portáteis para exterior (IP 65, Bluetooth) para esplanadas, terraços e eventos ao ar livre.',
    uses: ['Exterior', 'Torres', 'Bluetooth'],
    color: 'bg-blue-50 border-blue-200',
    tag: 'bg-blue-600',
    path: '/products/comfortsun/polivalente',
  },
  {
    name: 'Profissional',
    desc: 'Concebida para instalações comerciais intensivas, hotéis, spas e restauração de volume. Maior potência e robustez.',
    uses: ['Hotéis', 'Spas', 'Restauração'],
    color: 'bg-gray-50 border-gray-300',
    tag: 'bg-gray-700',
    path: '/products/comfortsun/professional',
  },
  {
    name: 'Deluxe',
    desc: 'O topo da gama ComfortSun. Bluetooth, app móvel, telecomando e lâmpadas Low Glare para o máximo conforto.',
    uses: ['Bluetooth', 'App móvel', 'Low Glare'],
    color: 'bg-amber-50 border-amber-200',
    tag: 'bg-amber-600',
    path: '/products/comfortsun/deluxe',
  },
  {
    name: 'Especializado',
    desc: 'Aquecedores certificados para ambientes húmidos: casa de banho (IP 24, TÜV) e fraldário para bebés.',
    uses: ['Casa de Banho', 'Fraldário', 'IP 24'],
    color: 'bg-teal-50 border-teal-200',
    tag: 'bg-teal-600',
    path: '/products/comfortsun/especializado',
  },
];

const WHY = [
  'Convertem quase 100% da energia em calor útil',
  'Tecnologia de lâmpadas HeLeN criada por engenheiro alemão',
  'Aquecimento imediato, aquece pessoas, não o ar',
  'Resistente ao vento: calor direto sem dispersão',
  'Não emite gases, não queima oxigénio, não levanta poeiras',
  'Certificados TÜV para uso exterior com exposição à chuva',
  'Sem peças móveis, sem manutenção',
  'Opções Bluetooth e app para controlo remoto',
];

const SITUATIONS = [
  {
    label: 'Hotéis, Restaurantes e Cafés',
    img: '/ComfortSun/cafeaquecedor.png',
    path: '/products/comfortsun/professional',
  },
  {
    label: 'Terraços e Jardins',
    img: '/ComfortSun/terracosejardins.jpg',
    path: '/products/comfortsun/polivalente',
  },
  {
    label: 'Esplanadas',
    img: '/ComfortSun/esplanada.png',
    path: '/products/comfortsun/professional',
  },
  {
    label: 'Aquecimento Polivalente',
    img: '/aquecimentopolivalente.webp',
    path: '/products/comfortsun/polivalente',
  },
  {
    label: 'Igrejas, Massagem e Bem-Estar',
    img: '/ComfortSun/igrejas.webp',
    path: '/contact',
  },
  {
    label: 'Chapéus-de-sol',
    img: '/ComfortSun/praia.png',
    path: '/products/comfortsun/polivalente',
  },
];

export default function ComfortSunPage() {
  return (
    <>
      <SEOHead
        title="Aquecedores Infravermelhos Interior e Exterior | ComfortSun"
        description="Quatro linhas ComfortSun para aquecer qualquer espaço sem obras: torres exterior, painéis interior, casa de banho. Tecnologia alemã com TÜV. Pedir orçamento."
        canonical="/products/comfortsun"
        image="/ComfortSun/esplanada.png"
        schemas={[
          generateProductSchema({ name: 'ComfortSun', description: 'Gama de aquecedores infravermelhos para esplanadas, hotéis, jardins e interior. Tecnologia alemã TÜV.', image: `${COMPANY.baseUrl}/ComfortSun/esplanada.png`, brand: 'ComfortSun', url: `${COMPANY.baseUrl}/products/comfortsun` }),
          generatePtBreadcrumb([{ name: 'Produtos', path: '/products' }, { name: 'ComfortSun', path: '/products/comfortsun' }]),
        ]}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <img
            src="/ComfortSun/aquecedorrua.png"
            alt="ComfortSun — aquecedores infravermelhos em esplanada"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex justify-center pt-3 px-4">
            <Breadcrumb
              items={[{ label: 'Início', path: '/' }, { label: 'Produtos', path: '/products' }, { label: 'ComfortSun', path: '/products/comfortsun' }]}
              dark
            />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-8">
            <span className="inline-block bg-orange-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Tecnologia Alemã</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight drop-shadow-lg">ComfortSun</h1>
            <p className="text-orange-400 font-semibold mt-2 text-lg drop-shadow leading-snug">4 Linhas · Interior & Exterior<br />TÜV&nbsp;Certificado</p>
          </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* Intro */}
              <div className="flex gap-6 items-start">
                <div className="flex-1">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Aquecimento que imita o sol</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A ComfortSun foi fundada por um engenheiro alemão que desenvolveu os radiadores com a tecnologia de lâmpadas <strong>HeLeN</strong>. O representante da <strong>ComfortSun</strong> para Portugal e Espanha distribui diretamente para o mercado ibérico com fornecimento da fábrica alemã.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ao contrário dos aquecedores convencionais, os modelos ComfortSun <strong>não aquecem o ar</strong>, emitem radiação infravermelha que aquece diretamente pessoas e superfícies, como faz o sol. O resultado é um calor saudável, eficaz e resistente ao vento.
                  </p>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mt-5">
                    {[
                      { n: '>90%', label: 'Energia convertida em calor' },
                      { n: 'TÜV', label: 'Certificação alemã' },
                      { n: '4', label: 'Linhas especializadas' },
                    ].map(s => (
                      <div key={s.n} className="bg-orange-50 border border-orange-100 rounded-xl p-3 text-center">
                        <div className="text-xl font-extrabold text-orange-600">{s.n}</div>
                        <div className="text-xs text-gray-500 mt-0.5 leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product image */}
                <div className="flex-shrink-0 hidden sm:block" style={{ width: '180px' }}>
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '3/4' }}>
                    <img
                      src="/ComfortSun/esplanada.png"
                      alt="ComfortSun aquecedor infravermelhos em esplanada"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* 4 Lines */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">As 4 Linhas ComfortSun</h2>
                <div className="space-y-4">
                  {LINES.map((l, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link
                        to={l.path}
                        className={`border rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow group ${l.color}`}
                      >
                        <span className={`${l.tag} text-white text-xs font-extrabold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 mt-0.5`}>
                          {l.name}
                        </span>
                        <div className="flex-1">
                          <p className="text-gray-700 text-sm leading-relaxed">{l.desc}</p>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {l.uses.map(u => (
                              <span key={u} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{u}</span>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1 group-hover:text-gray-600 transition-colors" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Why infrared */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Porquê Infravermelhos?</h2>
                <p className="text-gray-500 text-sm mb-4">Os aquecedores infravermelhos são a forma mais eficiente e saudável de aquecer espaços abertos ou fechados.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {WHY.map((w, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {w}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lamps image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/ComfortSun/lampadas.webp"
                  alt="Tipos de lâmpadas ComfortSun: Dark Glow, Low Glow, Low Glare"
                  className="w-full object-contain"
                  loading="lazy"
                />
                <div className="bg-gray-50 border border-t-0 border-gray-200 rounded-b-2xl px-4 py-3">
                  <p className="text-xs text-gray-500">Os quatro tipos de lâmpadas são: <strong>Golden Glare</strong> (standard), <strong>Low Glare</strong> (baixa luminosidade), <strong>White Glare</strong> (luz branca) e <strong>Dark Glare</strong> (quase sem luz, ideal para ambientes fechados).</p>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-6 text-white">
                <h3 className="font-extrabold text-xl mb-2">Pedir Informação</h3>
                <p className="text-gray-400 text-sm mb-5">Diga-nos onde quer aplicar, recomendamos a linha certa.</p>
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

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Quer o topo de gama?</p>
                <p className="text-sm text-gray-700 mb-3">A Solamagic é o nosso produto premium para esplanadas de alto nível.</p>
                <Link to="/products/solamagic" className="inline-flex items-center gap-1 text-xs text-orange-600 font-bold hover:text-orange-700">
                  Ver Solamagic <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Situations section — full width */}
        <div className="bg-white border-t border-gray-100 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-600 text-center mb-10">
              Onde quer aplicar o seu aquecedor?
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {SITUATIONS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col"
                >
                  <p className="text-xs font-extrabold uppercase tracking-widest text-gray-700 mb-3 leading-tight">
                    {s.label}
                  </p>
                  <div className="flex-1 overflow-hidden rounded-xl mb-3 aspect-[4/3]">
                    <img
                      src={s.img}
                      alt={s.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <Link
                    to={s.path}
                    className="block w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold text-center rounded-lg transition-colors"
                  >
                    SABER MAIS
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
