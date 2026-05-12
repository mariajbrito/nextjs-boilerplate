/**
 * Configuração centralizada da empresa.
 * Alterar aqui propaga para todo o site.
 */

export const COMPANY = {
  name: 'Evoluimos Comércio',
  legalName: 'Evoluimos Comércio Lda',
  nif: 'PT513000461',
  phone: '+351 965 026 603',
  phoneBare: '+351965026603',
  email: 'evolucom@gmail.com',
  address: {
    street: 'Vila Nova de Cacela',
    postalCode: '8900-057',
    city: 'Vila Nova de Cacela',
    region: 'Algarve',
    country: 'Portugal',
    countryCode: 'PT',
  },
  geo: { lat: 37.1669, lng: -7.5374 },
  founded: '2018',
  founder: 'Eduardo Catarino',
  baseUrl: 'https://www.evolucom.pt',
  social: {
    facebook: 'https://facebook.com/evoluimoscomercio',
    linkedin: 'https://linkedin.com/company/evoluimoscomercio',
  },
};

/** URL do WhatsApp pronto a usar */
export const WA_URL = `https://wa.me/${COMPANY.phoneBare.replace(/\s/g, '')}`;
