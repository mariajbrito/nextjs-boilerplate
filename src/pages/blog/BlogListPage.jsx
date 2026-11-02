import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateBlogSchema, generatePtBreadcrumb } from '@/utils/schemaMarkup';
import { BLOG_BASE, formatDate, postsByDate, postPath } from '@/content/blog/posts';

/**
 * Listagem dos artigos do blogue.
 *
 * Le os artigos de src/content/blog/posts.js, por isso um artigo novo aparece
 * aqui sem ser preciso tocar nesta pagina.
 */
export default function BlogListPage() {
  const posts = postsByDate();
  const [destaque, ...restantes] = posts;
  const canonical = BLOG_BASE;

  return (
    <>
      <SEOHead
        title="Blogue | Evoluimos Comércio"
        description="Artigos sobre conforto térmico, eficiência energética e soluções para aquecer, arrefecer e proteger edifícios. Trinta anos de experiência partilhados sem jargão."
        canonical={canonical}
        image={destaque ? destaque.image : '/logo.png'}
        {...(destaque ? { imageWidth: destaque.imageW, imageHeight: destaque.imageH } : {})}
        schemas={[
          generateBlogSchema(posts, `${COMPANY.baseUrl}${canonical}`),
          generatePtBreadcrumb([{ name: 'Blogue', path: BLOG_BASE }]),
        ]}
      />

      <div className="min-h-screen">
        {/* Cabeçalho escuro, igual ao das páginas de produto */}
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
                { label: 'Blogue', path: BLOG_BASE },
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
                Blogue
              </h1>
              <p className="text-amber-400 font-semibold mt-3 text-lg">
                Conhecimento partilhado, sem jargão
              </p>
              <p className="text-gray-400 leading-relaxed mt-5 max-w-2xl">
                Trinta anos a trabalhar com quem quer uma casa mais confortável ensinaram-nos
                muito sobre o que funciona e sobre o que apenas parece funcionar. É isso que
                escrevemos aqui.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          {posts.length === 0 ? (
            <p className="text-gray-600">
              Ainda não há artigos publicados. Volte em breve.
            </p>
          ) : (
            <>
              {/* Artigo mais recente, em destaque e com a imagem maior */}
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <Link
                  to={postPath(destaque.slug)}
                  className="block rounded-3xl overflow-hidden border border-gray-200 hover:border-orange-300 transition-colors"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="bg-gray-100 overflow-hidden">
                      <img
                        src={destaque.image}
                        alt={destaque.imageAlt}
                        width={destaque.imageW}
                        height={destaque.imageH}
                        className="w-full h-full object-cover aspect-[3/2] md:aspect-auto md:min-h-[320px] group-hover:scale-[1.02] transition-transform duration-500"
                        loading="eager"
                      />
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col justify-center">
                      <span className="inline-flex self-start items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-700 mb-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                        Mais recente
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight group-hover:text-orange-700 transition-colors">
                        {destaque.title}
                      </h2>
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {destaque.excerpt}
                      </p>
                      <PostMeta post={destaque} className="mt-5" />
                      <span className="inline-flex items-center gap-1 text-sm text-orange-600 font-bold mt-5 group-hover:text-orange-700">
                        Ler o artigo <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>

              {/* Restantes artigos, em grelha de cartões */}
              {restantes.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-6 mt-10">
                  {restantes.map((post) => (
                    <article key={post.slug} className="group">
                      <Link
                        to={postPath(post.slug)}
                        className="flex flex-col h-full rounded-2xl overflow-hidden border border-gray-200 hover:border-orange-300 transition-colors"
                      >
                        <div className="bg-gray-100 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.imageAlt}
                            width={post.imageW}
                            height={post.imageH}
                            className="w-full aspect-[3/2] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <h2 className="text-lg font-extrabold text-gray-900 leading-snug group-hover:text-orange-700 transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-sm text-gray-600 mt-3 leading-relaxed flex-grow">
                            {post.excerpt}
                          </p>
                          <PostMeta post={post} className="mt-4" />
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Apelo final ao contacto, igual ao das páginas de produto */}
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

/** Data e tempo de leitura, repetidos no destaque e nos cartões. */
function PostMeta({ post, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 text-xs text-gray-500 ${className}`}>
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
        {post.readingMin} min de leitura
      </span>
    </div>
  );
}
