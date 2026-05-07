import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Droplets, Zap, FileText, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema } from '@/utils/schemaMarkup';

const FEATURES = [
  'Aquecimento instantâneo sem depósito',
  'Sem esperas, sem desperdício de água',
  'Instalação compacta e discreta',
  'Tecnologia de regulação eletrónica de precisão',
  'Economia de energia, sem perdas por standby',
  'Longa durabilidade, baixa manutenção',
  'Certificação e qualidade Made in Germany',
  'Adequados para habitação, cozinha e pontos de uso',
];

const CATALOGS = [
  { label: 'Catálogo Clage 1', url: 'https://jumpshare.com/v/C0i89LsYBKCpl2L7bpW2' },
  { label: 'Catálogo Clage 2', url: 'https://jumpshare.com/v/7iVPezJFdJFAyx8HqnS2' },
];

export default function EsquentadoresPage() {
  return (
    <>
      <SEOHead
        title="Esquentador Elétrico Instantâneo Sem Gás | Clage"
        description="Esquentadores elétricos Clage com água quente imediata, sem depósito e sem gás. Alta eficiência, alternativa segura ao termoacumulador. Made in Germany."
        canonical="/products/esquentadores"
        schemas={[generateProductSchema({ name: 'Esquentadores Clage', description: 'Esquentadores elétricos instantâneos sem depósito. Água quente imediata, alta eficiência energética. Tecnologia alemã.', image: `${COMPANY.baseUrl}/Esquentadores/produto1.png`, brand: 'Clage', url: `${COMPANY.baseUrl}/products/esquentadores` })]}
      />
      <div className="min-h-screen">

        {/* ── Hero ── */}
        <div className="relative h-80 md:h-[480px] overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
          <img
            src="/Esquentadores/poster.jpg"
            alt="Esquentadores Clage"
            className="w-full h-full object-cover opacity-50"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/85" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex justify-center pt-3 px-4">
            <Breadcrumb
              items={[
                { label: 'Início', path: '/' },
                { label: 'Produtos', path: '/products' },
                { label: 'Esquentadores', path: '/products/esquentadores' },
              ]}
              dark
            />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-8">
            <span className="inline-block bg-blue-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Made in Germany
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
              Esquentadores Clage
            </h1>
            <p className="text-blue-200 font-semibold mt-3 text-base sm:text-lg drop-shadow px-2">
              Água Quente Instantânea · Sem Depósito · Alta Eficiência
            </p>
          </div>
          </div>
        </div>

        {/* ── Section 1: Intro + product image ── */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Tecnologia alemã</span>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-5 leading-tight">
                  Água quente<br />quando precisa, sem esperas
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ao contrário dos esquentadores tradicionais a gás, este produto é totalmente elétrico, tornando-se mais económico.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Em comparação com os termoacumuladores elétricos com reservatório, os modelos Clage aquecem a água apenas no momento em que é necessária, de forma descentralizada, eliminando perdas de energia e garantindo água quente imediata com maior higiene.
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { icon: Zap, text: 'Água quente imediata, sem tempo de espera' },
                    { icon: Droplets, text: 'Sem depósito, sem perdas de energia' },
                    { icon: ShieldCheck, text: 'Certificado e produzido na Alemanha' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-blue-600" />
                        </div>
                        {item.text}
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <img
                  src="/Esquentadores/produto1.png"
                  alt="Esquentador Clage"
                  className="w-full max-h-96 object-contain rounded-2xl bg-gray-50 p-6"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Use cases — full-width atmospheric ── */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6">

              {/* Card com imagem na casa de banho */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden h-72 group"
              >
                <img
                  src="/Esquentadores/nacasadebanho.jpg"
                  alt="Esquentador Clage na casa de banho"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">Aplicação</span>
                  <h3 className="text-white font-extrabold text-xl mt-1">Casa de Banho</h3>
                  <p className="text-white/75 text-sm mt-1">Solução compacta para banho instantâneo sem espera</p>
                </div>
              </motion.div>

              {/* Card com imagem aplicações especiais */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden h-72 group"
              >
                <img
                  src="/Esquentadores/paraaplicacoesespeciais.jpg"
                  alt="Esquentador Clage para aplicações especiais"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">Aplicação</span>
                  <h3 className="text-white font-extrabold text-xl mt-1">Múltiplos Pontos de Uso</h3>
                  <p className="text-white/75 text-sm mt-1">Cozinha, lavabos e aplicações especiais</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Features + mini-instant image ── */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img
                  src="/Esquentadores/mini-instant-water-heaters.png"
                  alt="Mini esquentadores instantâneos Clage"
                  className="w-full max-h-80 object-contain rounded-2xl bg-blue-50 p-6"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Características</span>
                <h2 className="text-2xl font-extrabold text-gray-900 mt-2 mb-6">Pensado para durar e poupar</h2>
                <div className="space-y-3">
                  {FEATURES.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Section 4: Catalogs + CTA ── */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Documentação</span>
                <h2 className="text-2xl font-extrabold text-white mt-2 mb-3">Consulte os catálogos</h2>
                <p className="text-gray-400 text-sm mb-6">
                  Conheça todos os modelos, especificações técnicas e opções disponíveis nos catálogos oficiais Clage.
                </p>
                <div className="flex flex-col gap-3">
                  {CATALOGS.map((c, i) => (
                    <a key={i} href={c.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-5 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all text-sm">
                      <FileText className="w-4 h-4 text-blue-400" />
                      {c.label}
                      <ExternalLink className="w-3 h-3 opacity-50 ml-auto" />
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="bg-white/05 border border-white/10 rounded-2xl p-6">
                  <Droplets className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-extrabold text-xl text-white mb-2">Pedir Informação</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Diga-nos a sua aplicação, o caudal necessário e o ponto de instalação, recomendamos o modelo certo.
                  </p>
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <Link to="/contact"
                    className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-center transition-colors text-sm">
                    Formulário de Contacto
                  </Link>
                  <p className="text-gray-500 text-xs text-center mt-3">Análise gratuita e sem compromisso</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
