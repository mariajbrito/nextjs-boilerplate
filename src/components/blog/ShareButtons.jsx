import React, { useState } from 'react';
import { Check, Link2, MessageCircle } from 'lucide-react';
import { COMPANY } from '@/config/company';

/**
 * Partilha de um artigo nas redes sociais.
 *
 * As redes sao abertas por URL de partilha em vez de widget oficial: nao carrega
 * JavaScript de terceiros, nao instala cookies e nao atrasa a pagina, o que
 * tambem evita ter de declarar mais um rastreador no banner de cookies.
 */

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.5c0-1.31-.02-3-1.9-3-1.9 0-2.19 1.42-2.19 2.9V21H9z" />
  </svg>
);

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23zm-1.16 17.52h1.83L7.03 4.13H5.06z" />
  </svg>
);

const EmailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const ShareButtons = ({ url, title, className = '' }) => {
  const [copiado, setCopiado] = useState(false);

  const fullUrl = url.startsWith('http') ? url : `${COMPANY.baseUrl}${url}`;
  const u = encodeURIComponent(fullUrl);
  const t = encodeURIComponent(title);

  const redes = [
    {
      nome: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      Icon: FacebookIcon,
    },
    {
      nome: 'WhatsApp',
      href: `https://wa.me/?text=${t}%20${u}`,
      Icon: MessageCircle,
    },
    {
      nome: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      Icon: LinkedInIcon,
    },
    {
      nome: 'X',
      href: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
      Icon: XIcon,
    },
    {
      nome: 'Email',
      href: `mailto:?subject=${t}&body=${t}%0A%0A${u}`,
      Icon: EmailIcon,
      sameTab: true,
    },
  ];

  // navigator.clipboard so existe em contexto seguro. Sem ele, o botao de copiar
  // nao aparece, em vez de aparecer e nao fazer nada.
  const podeCopiar =
    typeof navigator !== 'undefined' && typeof navigator.clipboard !== 'undefined';

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // Se o browser recusar, nao ha nada util a dizer ao visitante: o URL
      // continua visivel na barra de endereco.
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mr-1">
        Partilhar
      </span>

      {redes.map(({ nome, href, Icon, sameTab }) => (
        <a
          key={nome}
          href={href}
          {...(sameTab ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
          aria-label={`Partilhar no ${nome}`}
          title={`Partilhar no ${nome}`}
          className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-500 hover:text-orange-700 hover:border-orange-300 hover:bg-orange-50 transition-colors"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}

      {podeCopiar && (
        <button
          type="button"
          onClick={copiar}
          aria-label="Copiar ligação do artigo"
          title="Copiar ligação do artigo"
          className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-500 hover:text-orange-700 hover:border-orange-300 hover:bg-orange-50 transition-colors"
        >
          {copiado
            ? <Check className="w-4 h-4 text-green-600" aria-hidden="true" />
            : <Link2 className="w-4 h-4" aria-hidden="true" />}
          <span className="sr-only" role="status">
            {copiado ? 'Ligação copiada' : ''}
          </span>
        </button>
      )}
    </div>
  );
};

export default ShareButtons;
