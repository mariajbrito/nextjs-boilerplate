import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import VideoPlayer from '@/components/videos/VideoPlayer';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateVideoObjectSchema, generatePtBreadcrumb } from '@/utils/schemaMarkup';
import {
  VIDEOS_BASE, findVideo, formatDate, videoCover, videoPath, videoSeoTitle, videosByDate,
} from '@/content/videos/videos';
import { BODIES } from '@/content/videos/bodies';

/**
 * Pagina de um video. O slug vem do URL, os metadados de videos.js e o texto de
 * bodies.jsx. Nenhum video precisa de uma pagina propria.
 */
export default function VideoPage() {
  const { slug } = useParams();
  const video = findVideo(slug);
  const Corpo = video ? BODIES[video.slug] : null;

  // Acontece se alguem seguir uma ligacao antiga ou escrever o endereco a mao.
  // Nao e pre-renderizado, porque so os videos existentes entram nas rotas.
  if (!video || !Corpo) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Vídeo não encontrado</h1>
        <p className="text-gray-600 mb-8">
          Este vídeo pode ter mudado de endereço ou já não estar disponível.
        </p>
        <Link
          to={VIDEOS_BASE}
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Ver todos os vídeos
        </Link>
      </div>
    );
  }

  const canonical = videoPath(video.slug);
  const links = video.links || [];
  const [principal, ...secundarias] = links;
  const outros = videosByDate().filter((v) => v.slug !== video.slug).slice(0, 2);

  return (
    <>
      <SEOHead
        title={videoSeoTitle(video)}
        description={video.description}
        canonical={canonical}
        /* A capa serve de og:image, exatamente como nos artigos do blogue. */
        image={videoCover(video)}
        {...(video.imageW ? { imageWidth: video.imageW, imageHeight: video.imageH } : {})}
        type="video.other"
        schemas={[
          generateVideoObjectSchema(video),
          generatePtBreadcrumb([
            { name: 'Vídeos', path: VIDEOS_BASE },
            { name: video.title, path: canonical },
          ]),
        ]}
      />

      <article className="min-h-screen">
        {/* Cabeçalho escuro, com o título e a data */}
        <header style={{ background: '#0D0D0F' }} className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(60% 60% at 70% 20%, rgba(240,160,32,0.14), transparent 70%)' }}
          />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-12">
            <Breadcrumb
              items={[
                { label: 'Início', path: '/' },
                { label: 'Vídeos', path: VIDEOS_BASE },
                { label: video.title, path: canonical },
              ]}
              dark
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {video.title}
              </h1>

              <p className="text-gray-400 leading-relaxed mt-5">
                {video.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400 mt-6">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4" aria-hidden="true" />
                  <time dateTime={video.date}>{formatDate(video.date)}</time>
                </span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* O leitor, a subir sobre o cabeçalho como a capa dos artigos */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <VideoPlayer video={video} />
          </motion.div>
          <p className="text-xs text-gray-500 text-center mt-3">
            O vídeo só é carregado quando clicar. Até lá, o YouTube não recebe nada.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          {/* O texto do vídeo. A formatação vem de .artigo-corpo, em index.css,
              a mesma folha que formata os artigos do blogue. */}
          <div className="artigo-corpo">
            <Corpo />
          </div>

          {/* As ligações do vídeo. A primeira é a principal e sai em destaque. */}
          {principal && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Link
                  to={principal.url}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors"
                >
                  {principal.text}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                {secundarias.map((l) => (
                  <Link
                    key={l.url}
                    to={l.url}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 hover:border-orange-300 hover:text-orange-700 text-gray-800 rounded-xl font-bold transition-colors"
                  >
                    {l.text}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Apelo ao contacto, no mesmo registo do blogue */}
          <div className="bg-gray-900 rounded-3xl p-7 sm:p-8 text-white mt-12">
            <h2 className="font-extrabold text-xl sm:text-2xl mb-3">
              Quer falar sobre o seu caso?
            </h2>
            <p className="text-gray-400 text-sm mb-6 max-w-xl">
              Aconselhamento gratuito e sem compromisso. Diga-nos o que o incomoda na sua casa
              ou no seu espaço e dizemos-lhe honestamente o que faz sentido fazer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
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
                Pedir Orçamento
              </Link>
              <a
                href={`tel:${COMPANY.phoneBare}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-200 rounded-xl font-bold transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* Outros vídeos, só quando já existe mais do que um */}
          {outros.length > 0 && (
            <div className="mt-14">
              <h2 className="text-xl font-extrabold text-gray-900 mb-5">Outros vídeos</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {outros.map((v) => (
                  <Link
                    key={v.slug}
                    to={videoPath(v.slug)}
                    className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 hover:border-orange-300 transition-colors"
                  >
                    <img
                      src={videoCover(v)}
                      alt={v.imageAlt || v.title}
                      width={v.imageW}
                      height={v.imageH}
                      style={{ aspectRatio: '16 / 9' }}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 leading-snug group-hover:text-orange-700 transition-colors">
                        {v.title}
                      </h3>
                      <time dateTime={v.date} className="block text-xs text-gray-500 mt-2">
                        {formatDate(v.date)}
                      </time>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <Link
              to={VIDEOS_BASE}
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Ver todos os vídeos
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
