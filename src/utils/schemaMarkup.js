import { COMPANY } from '@/config/company';

export const generateLocalBusinessSchema = (language = 'pt') => {
  const isPortuguese = language === 'pt';
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': COMPANY.name,
    'image': `${COMPANY.baseUrl}/logo.png`,
    'description': isPortuguese
      ? 'Soluções inteligentes de aquecimento interior e exterior, conforto térmico, isolamento, eliminação de humidade, água quente e eficiência energética. Instalação em todo o Portugal: Algarve, Lisboa, Porto, Madeira e Açores.'
      : 'Intelligent heating, thermal comfort, insulation, moisture elimination, hot water and energy efficiency solutions. Service across Portugal: Algarve, Lisbon, Porto, Madeira and Azores.',
    '@id': COMPANY.baseUrl,
    'url': COMPANY.baseUrl,
    'telephone': COMPANY.phoneBare,
    'email': COMPANY.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': COMPANY.address.street,
      'addressLocality': COMPANY.address.city,
      'addressRegion': COMPANY.address.region,
      'postalCode': COMPANY.address.postalCode,
      'addressCountry': COMPANY.address.countryCode,
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': COMPANY.geo.lat,
      'longitude': COMPANY.geo.lng,
    },
    'areaServed': [
      { '@type': 'Country', 'name': 'Portugal' },
      { '@type': 'AdministrativeArea', 'name': 'Algarve' },
      { '@type': 'AdministrativeArea', 'name': 'Lisboa e Vale do Tejo' },
      { '@type': 'AdministrativeArea', 'name': 'Norte de Portugal' },
      { '@type': 'AdministrativeArea', 'name': 'Região Autónoma da Madeira' },
      { '@type': 'AdministrativeArea', 'name': 'Região Autónoma dos Açores' },
    ],
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '09:00',
      'closes': '18:00',
    },
    'priceRange': '€€',
    'taxID': COMPANY.nif,
  };
};

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': COMPANY.name,
    'legalName': COMPANY.legalName,
    'url': COMPANY.baseUrl,
    'logo': `${COMPANY.baseUrl}/logo.png`,
    'foundingDate': COMPANY.founded,
    'founder': {
      '@type': 'Person',
      'name': COMPANY.founder,
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': COMPANY.phoneBare,
      'contactType': 'customer service',
      'email': COMPANY.email,
      'availableLanguage': ['Portuguese', 'English'],
    },
    'sameAs': Object.values(COMPANY.social),
  };
};

export const generateProductSchema = (product) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'description': product.description,
    'image': product.image,
    'brand': {
      '@type': 'Brand',
      'name': product.brand || COMPANY.name,
    },
    'offers': {
      '@type': 'Offer',
      'availability': 'https://schema.org/InStock',
      'priceCurrency': 'EUR',
      'url': product.url,
    },
  };
};

export const generateFAQSchema = (faqs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };
};

export const generateHowToSchema = (howTo) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': howTo.name,
    'description': howTo.description,
    'step': howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      'position': index + 1,
      'name': step.name,
      'text': step.text,
    })),
  };
};

export const generateBreadcrumbSchema = (items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url,
    })),
  };
};

export const generateArticleSchema = (article) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'image': article.image,
    'author': {
      '@type': 'Organization',
      'name': COMPANY.name,
    },
    'publisher': {
      '@type': 'Organization',
      'name': COMPANY.name,
      'logo': {
        '@type': 'ImageObject',
        'url': `${COMPANY.baseUrl}/logo.png`,
      },
    },
    'datePublished': new Date().toISOString().split('T')[0],
    'description': article.description,
  };
};

export const generateReviewSchema = (review) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'Organization',
      'name': COMPANY.name,
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': review.rating || '5',
      'bestRating': '5',
    },
    'author': {
      '@type': 'Person',
      'name': review.author,
    },
    'reviewBody': review.text,
  };
};

export const generateContactSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': `Contacto ${COMPANY.name}`,
    'description': 'Contacte-nos para orçamentos, aconselhamento técnico e avaliações gratuitas.',
    'url': `${COMPANY.baseUrl}/contact`,
  };
};

export const generateServiceSchema = (service) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.name,
    'description': service.description,
    'provider': {
      '@type': 'Organization',
      'name': COMPANY.name,
      'url': COMPANY.baseUrl,
    },
    'areaServed': service.areaServed || [
      { '@type': 'Country', 'name': 'Portugal' },
    ],
    'serviceType': service.serviceType || service.name,
    'url': service.url,
  };
};

export const generatePtBreadcrumb = (items) => {
  const built = [{ name: 'Início', url: COMPANY.baseUrl + '/' }, ...items.map(i => ({
    name: i.name,
    url: i.path ? `${COMPANY.baseUrl}${i.path}` : i.url,
  }))];
  return generateBreadcrumbSchema(built);
};
