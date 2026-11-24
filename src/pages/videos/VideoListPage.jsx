import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, MessageCircle, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateVideosCollectionSchema, generatePtBreadcrumb } from '@/utils/schemaMarkup';
import {
  VIDEOS_BASE, formatDate, videoCover, videoPath, videosByDate,
} from '@/content/videos/videos';

/**
 * Listagem dos videos.
 *
 * Le os videos de src/content/videos/videos.js, por isso um video novo aparece
 * aqui sem ser preciso tocar nesta pagina.
 */
export default function VideoListPage() {
  const videos = videosByDate();
  const primeiro = videos[0];
  const canonical = VIDEOS_BASE;

  return (
    <>
      <SEOHead
        title="Vídeos | Evoluimos Comércio"
        description="Vídeos curtos sobre aquecimento, humidade, isolamento e conforto térmico, explicados por quem trabalha com estas soluções há trinta anos."
        canonical={canonical}
        image={primeiro ? videoCover(primeiro) : '/logo.png'}
        {...(primeiro && primeiro.imageW ? { imageWidth: primeiro.imageW, imageHeight: primeiro.imageH } : {})}
        schemas={[
          generateVideosCollectionSchema(videos, `${COMPANY.baseUrl}${canonical}`),
          generatePtBreadcrumb([{ name: 'Vídeos', path: VIDEOS_BASE }]),
        ]}
      />

      <div className="min-h-screen">
        {/* Cabeçalho escuro, igual ao do blogue e ao das páginas de produto */}
        <section style={{ background: '#0D0D0F' }} className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(60% 60% at 70% 20%, rgba(240,160,32,0.14), transparent 70%)' }}
          />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-12 lg:pb-16">
            <Breadcrumb
              items={[
                { label: 'Início', path: '/' },
                { label: 'Vídeos', path: VIDEOS_BASE },
              ]}
              dark
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8"
            >
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Vídeos
              </h1>
              <p className="text-amber-400 font-semibold mt-3 text-lg">
                Explicações curtas, em dois minutos
              </p>
              <p className="text-gray-400 leading-relaxed mt-5 max-w-2xl">
                Há perguntas que aparecem vezes sem conta nos orçamentos e nas visitas.
                Estes vídeos respondem a uma de cada vez, sem rodeios e com o texto por
                baixo para quem preferir ler.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          {videos.length === 0 ? (
            <p className="text-gray-600">
              Ainda não há vídeos publicados. Volte em breve.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {videos.map((video, i) => (
                <motion.article
                  key={video.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(i, 4) * 0.05 }}
                  className="group"
                >
                  <Link
                    to={videoPath(video.slug)}
                    className="flex flex-col h-full rounded-2xl overflow-hidden border border-gray-200 hover:border-orange-300 transition-colors"
                  >
                    {/* A capa é sempre mostrada a 16/9, mesmo quando o vídeo é
                        ao alto: é a proporção das capas e das miniaturas do
                        YouTube, e manter todos os cartões iguais evita uma
                        grelha aos saltos. O vídeo ao alto aparece na sua
                        proporção própria na página dele. */}
                    <div className="relative bg-gray-900 overflow-hidden">
                      <img
                        src={videoCover(video)}
                        alt={video.imageAlt || video.title}
                        width={video.imageW}
                        height={video.imageH}
                        style={{ aspectRatio: '16 / 9' }}
                        className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                      {/* Sinal de que o cartão leva a um vídeo e não a um texto */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-black/45 backdrop-blur-sm border border-white/25 transition-transform duration-300 group-hover:scale-110">
                          <Play className="w-5 h-5 text-white translate-x-[1px]" fill="currentColor" />
                        </span>
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h2 className="text-lg font-extrabold text-gray-900 leading-snug group-hover:text-orange-700 transition-colors">
                        {video.title}
                      </h2>
                      <p className="text-sm text-gray-600 mt-3 leading-relaxed flex-grow">
                        {video.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mt-4">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
                          <time dateTime={video.date}>{formatDate(video.date)}</time>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}

          {/* Apelo final ao contacto, igual ao do blogue */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center mt-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 mb-2">
              Tem uma dúvida sobre a sua casa?
            </h2>
            <p className="text-gray-600 text-sm mb-6 max-w-lg mx-auto">
              Diga-nos o que o incomoda, frio, humidade, contas altas ou calor no verão, e
              dizemos-lhe honestamente o que faz sentido no seu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Falar por WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors"
              >
                Pedir Informação
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
