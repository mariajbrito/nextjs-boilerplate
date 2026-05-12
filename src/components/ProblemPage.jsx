import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone, AlertTriangle, CheckCircle2, HelpCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';
import {
  generateFAQSchema,
  generateServiceSchema,
  generatePtBreadcrumb,
  generateHowToSchema,
} from '@/utils/schemaMarkup';

/**
 * Componente partilhado para páginas SEO orientadas a problemas reais.
 *
 * Estrutura: problema -> causas -> consequências -> solução -> benefícios -> FAQs.
 * Cada página passa dados, este shell renderiza com layout consistente para Google e IA.
 */
export default function ProblemPage({
  slug,
  pageTitle,
  metaTitle,
  metaDescription,
  heroImage,
  heroImageAlt,
  introParagraph,
  searchKeywords = [],
  problem,
  causes = [],
  consequences = [],
  solution,
  benefits = [],
  process = [],
  faqs = [],
  relatedProducts = [],
  relatedSolutions = [],
  serviceName,
  serviceType,
  cities = ['Algarve', 'Lisboa', 'Porto', 'Setúbal', 'Coimbra', 'Braga', 'Madeira', 'Açores'],
  ctaTitle = 'Pedir análise gratuita',
  ctaText = 'Visita técnica gratuita ao seu imóvel, sem compromisso. Resposta entre 24 e 72 horas.',
}) {
  const canonical = `/${slug}`;

  const schemas = [
    generateFAQSchema(faqs),
    generateServiceSchema({
      name: serviceName || pageTitle,
      description: metaDescription,
      url: `${COMPANY.baseUrl}${canonical}`,
      serviceType: serviceType || pageTitle,
      areaServed: [{ '@type': 'Country', 'name': 'Portugal' }],
    }),
    generatePtBreadcrumb([{ name: pageTitle, path: canonical }]),
  ];

  if (process && process.length > 0) {
    schemas.push(
      generateHowToSchema({
        name: `Como resolver: ${pageTitle}`,
        description: metaDescription,
        steps: process.map((p) => ({ name: p.title, text: p.text })),
      })
    );
  }

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonical}
        image={heroImage}
        schemas={schemas}
      />

      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Hero */}
        <div className="relative h-72 md:h-[440px] overflow-hidden">
          <img
            src={heroImage}
            alt={heroImageAlt || pageTitle}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/80" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex justify-center pt-3 px-4">
              <Breadcrumb
                items={[
                  { label: 'Início', path: '/' },
                  { label: pageTitle, path: canonical },
                ]}
                dark
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-10">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl leading-tight drop-shadow-lg">
                {pageTitle}
              </h1>
              {introParagraph && (
                <p className="mt-5 text-white/85 max-w-2xl text-sm md:text-base leading-relaxed">
                  {introParagraph}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl mt-10">
          {/* Search keywords chips, visual context for users (no SEO stuffing) */}
          {searchKeywords.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {searchKeywords.map((k) => (
                <span
                  key={k}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-orange-700"
                >
                  <Sparkles className="w-3 h-3" aria-hidden="true" /> {k}
                </span>
              ))}
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">
              {/* Problema */}
              {problem && (
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0" aria-hidden="true" />
                    <h2 className="text-2xl font-extrabold text-gray-900">O problema</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{problem}</p>
                </section>
              )}

              {/* Causas */}
              {causes.length > 0 && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Causas mais comuns</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {causes.map((c) => (
                      <div
                        key={c.title}
                        className="bg-white rounded-2xl p-5 border border-gray-200"
                      >
                        <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{c.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Consequências */}
              {consequences.length > 0 && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Consequências de não tratar</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ignorar o problema agrava custos, conforto e saúde. Os sinais começam discretos mas o impacto acumula com o tempo.
                  </p>
                  <ul className="space-y-2">
                    {consequences.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-2" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Solução */}
              {solution && (
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" aria-hidden="true" />
                    <h2 className="text-2xl font-extrabold text-gray-900">A solução</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{solution}</p>
                </section>
              )}

              {/* Benefícios */}
              {benefits.length > 0 && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Benefícios</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {benefits.map((b) => (
                      <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm text-gray-700 leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Processo passo a passo */}
              {process.length > 0 && (
                <section>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Como funciona, passo a passo</h2>
                  <ol className="space-y-3">
                    {process.map((p, i) => (
                      <li key={p.title} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                        <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{p.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {/* Onde atendemos */}
              <section>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Onde prestamos serviço</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cobertura nacional, com sede no Algarve. Visitas técnicas gratuitas em todo o continente e ilhas. Tempo de resposta tipicamente entre 24 e 72 horas.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
                  {cities.map((c) => (
                    <div key={c} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" aria-hidden="true" />
                      {c}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Veja a página dedicada ao{' '}
                  <Link to="/algarve" className="text-orange-600 font-bold hover:underline">Algarve</Link>
                  ,{' '}
                  <Link to="/lisboa" className="text-orange-600 font-bold hover:underline">Lisboa</Link>
                  ,{' '}
                  <Link to="/porto" className="text-orange-600 font-bold hover:underline">Porto</Link>
                  {' ou '}
                  <Link to="/madeira-acores" className="text-orange-600 font-bold hover:underline">Madeira e Açores</Link>
                  .
                </p>
              </section>

              {/* FAQ */}
              {faqs.length > 0 && (
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <HelpCircle className="w-6 h-6 text-orange-600 flex-shrink-0" aria-hidden="true" />
                    <h2 className="text-2xl font-extrabold text-gray-900">Perguntas frequentes</h2>
                  </div>
                  <div className="space-y-3">
                    {faqs.map((f) => (
                      <details
                        key={f.question}
                        className="group bg-white border border-gray-200 rounded-xl p-5"
                      >
                        <summary className="cursor-pointer font-semibold text-gray-900 list-none flex items-center justify-between gap-3">
                          {f.question}
                          <ArrowRight className="w-4 h-4 text-orange-600 transition-transform group-open:rotate-90" aria-hidden="true" />
                        </summary>
                        <p className="mt-3 text-sm text-gray-700 leading-relaxed">{f.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="bg-orange-600 rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-bold text-xl mb-3">{ctaTitle}</h3>
                <p className="text-orange-100 text-sm mb-5 leading-relaxed">{ctaText}</p>
                <div className="flex flex-col gap-3">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-green-700 rounded-xl font-bold hover:bg-orange-50 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${COMPANY.phoneBare}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-orange-700 hover:bg-orange-800 text-white rounded-xl font-bold transition-colors"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    {COMPANY.phone}
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-4 py-3 bg-transparent border border-white/40 text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    Pedir orçamento
                  </Link>
                </div>
                <div className="mt-5 pt-4 border-t border-orange-500 space-y-2 text-sm text-orange-100">
                  <div>Resposta em 24 a 72 horas</div>
                  <div>Análise técnica sem compromisso</div>
                  <div>Tecnologia europeia certificada</div>
                </div>
              </div>

              {relatedProducts.length > 0 && (
                <div className="border border-gray-200 rounded-2xl p-5 bg-white">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Produtos relacionados</h4>
                  <div className="space-y-2">
                    {relatedProducts.map((p) => (
                      <Link
                        key={p.path}
                        to={p.path}
                        className="flex items-center justify-between text-sm text-gray-700 hover:text-orange-600 py-2 border-b border-gray-100 last:border-0 transition-colors"
                      >
                        {p.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {relatedSolutions.length > 0 && (
                <div className="border border-gray-200 rounded-2xl p-5 bg-white">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Soluções relacionadas</h4>
                  <div className="space-y-2">
                    {relatedSolutions.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        className="flex items-center justify-between text-sm text-gray-700 hover:text-orange-600 py-2 border-b border-gray-100 last:border-0 transition-colors"
                      >
                        {s.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
