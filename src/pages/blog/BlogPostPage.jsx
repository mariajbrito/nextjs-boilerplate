import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, MessageCircle, Phone, User } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import ShareButtons from '@/components/blog/ShareButtons';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateBlogPostingSchema, generatePtBreadcrumb } from '@/utils/schemaMarkup';
import {
  BLOG_BASE, findPost, formatDate, postPath, postSeoTitle, postsByDate,
} from '@/content/blog/posts';
import { BODIES } from '@/content/blog/bodies';

/**
 * Pagina de um artigo. O slug vem do URL, os metadados de posts.js e o texto de
 * bodies.jsx. Nenhum artigo precisa de uma pagina propria.
 */
export default function BlogPostPage() {
  const { slug } = useParams();
  const post = findPost(slug);
  const Corpo = post ? BODIES[post.slug] : null;

  // Acontece se alguem seguir uma ligacao antiga ou escrever o endereco a mao.
  // Nao e pre-renderizado, porque so os artigos existentes entram nas rotas.
  if (!post || !Corpo) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Artigo não encontrado</h1>
        <p className="text-gray-600 mb-8">
          Este artigo pode ter mudado de endereço ou já não estar disponível.
        </p>
        <Link
          to={BLOG_BASE}
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Ver todos os artigos
        </Link>
      </div>
    );
  }

  const canonical = postPath(post.slug);
  const urlAbsoluto = `${COMPANY.baseUrl}${canonical}`;
  const outros = postsByDate().filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <SEOHead
        title={postSeoTitle(post)}
        description={post.description}
        canonical={canonical}
        image={post.image}
        imageWidth={post.imageW}
        imageHeight={post.imageH}
        type="article"
        schemas={[
          generateBlogPostingSchema(post, urlAbsoluto),
          generatePtBreadcrumb([
            { name: 'Blogue', path: BLOG_BASE },
            { name: post.title, path: canonical },
          ]),
        ]}
      />

      <article className="min-h-screen">
        {/* Cabeçalho escuro, com o título e a ficha do artigo */}
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
                { label: 'Blogue', path: BLOG_BASE },
                { label: post.title, path: canonical },
              ]}
              dark
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8"
            >
              {post.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400 mt-6">
                <span className="inline-flex items-center gap-2">
                  {post.authorImage ? (
                    <img
                      src={post.authorImage}
                      alt=""
                      width={32}
                      height={32}
                      className="w-7 h-7 rounded-full object-cover bg-white/10"
                      loading="lazy"
                    />
                  ) : (
                    <User className="w-4 h-4" aria-hidden="true" />
                  )}
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4" aria-hidden="true" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  {post.readingMin} min de leitura
                </span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Imagem de destaque, com a proporção original preservada */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
          <motion.figure
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="m-0 rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-100"
          >
            <img
              src={post.image}
              alt={post.imageAlt}
              width={post.imageW}
              height={post.imageH}
              className="w-full aspect-[3/2] object-cover block"
              loading="eager"
            />
          </motion.figure>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <ShareButtons url={canonical} title={post.title} className="pb-8 border-b border-gray-200" />

          {/* O texto do artigo. A formatação vem de .artigo-corpo, em index.css */}
          <div className="artigo-corpo mt-10">
            <Corpo />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <ShareButtons url={canonical} title={post.title} />
          </div>

          {/* Apelo ao contacto, no mesmo registo do resto do site */}
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

          {/* Outros artigos, só quando já existe mais do que um */}
          {outros.length > 0 && (
            <div className="mt-14">
              <h2 className="text-xl font-extrabold text-gray-900 mb-5">Outros artigos</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {outros.map((p) => (
                  <Link
                    key={p.slug}
                    to={postPath(p.slug)}
                    className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 hover:border-orange-300 transition-colors"
                  >
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      width={p.imageW}
                      height={p.imageH}
                      className="w-full aspect-[3/2] object-cover"
                      loading="lazy"
                    />
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 leading-snug group-hover:text-orange-700 transition-colors">
                        {p.title}
                      </h3>
                      <time dateTime={p.date} className="block text-xs text-gray-500 mt-2">
                        {formatDate(p.date)}
                      </time>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <Link
              to={BLOG_BASE}
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
