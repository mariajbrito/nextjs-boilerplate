import React from 'react';
import { Helmet } from 'react-helmet';
import { COMPANY } from '@/config/company';

const SEOHead = ({
  title = COMPANY.name,
  description = 'Aquecimento, arrefecimento e proteção de edifícios com tecnologia europeia de alta eficiência.',
  canonical,
  schemas = [],
  language = 'pt',
  image = '/logo.png',
  type = 'website',
}) => {
  const fullCanonical = canonical ? `${COMPANY.baseUrl}${canonical}` : COMPANY.baseUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${COMPANY.baseUrl}${image}`;
  const locale = language === 'pt' ? 'pt_PT' : 'en_US';

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* hreflang: o site serve PT como idioma principal. Quando existirem URLs separados em /es ou /en, ativar tags individuais aqui. */}
      <link rel="alternate" hreflang="pt-PT" href={fullCanonical} />
      <link rel="alternate" hreflang="x-default" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={COMPANY.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Schema.org structured data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
