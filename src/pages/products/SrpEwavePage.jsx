import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, EyeOff, MessageCircle, Phone,
  Ruler, ShieldCheck, Waves, Wind, Wrench,
} from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateProductSchema, generatePtBreadcrumb } from '@/utils/schemaMarkup';

/* Dados confirmados na documentacao do fabricante (Superior Radiant Products,
   brochura dos modelos eWAVE de onda media). As medidas originais estao
   em polegadas e libras, aqui convertidas. */
const BENEFITS = [
  {
    icon: EyeOff,
    title: 'Sem luz visível',
    text: 'A onda média aquece sem brilho nem clarão alaranjado. O ambiente noturno mantém-se exatamente como foi pensado.',
  },
  {
    icon: Waves,
    title: 'Calor suave e uniforme',
    text: 'Alta absorção e baixa reflexão. O emissor é mais espesso junto às resistências e mais estreito nas extremidades, para espalhar o calor por toda a largura.',
  },
  {
    icon: Wind,
    title: 'Sem correntes de ar',
    text: 'Aquece as pessoas e as superfícies em vez do ar. Não cria correntes nem levanta poeiras.',
  },
  {
    icon: ShieldCheck,
    title: 'Preparado para o exterior',
    text: 'Classificação IP55, certificado para interior e exterior, com caixa de ligação estanque já integrada no corpo do aparelho.',
  },
  {
    icon: Ruler,
    title: 'Perfil discreto',
    text: 'Apenas 7,6 cm de altura, em alumínio anodizado negro. Fixa-se em parede ou teto e integra-se sem dominar o espaço.',
  },
  {
    icon: Wrench,
    title: 'Manutenção mínima',
    text: 'Anodização espessa e resistente à corrosão, com garantia premium de substituição completa do aparelho.',
  },
];

const APLICACOES = [
  'Esplanadas com cobertura',
  'Pérgolas e alpendres',
  'Varandas e marquises',
  'Jardins de inverno',
  'Terraços de hotel resguardados',
  'Zonas de entrada e receção',
  'Estúdios de yoga e ginásios',
  'Espaços de eventos cobertos',
];

const SPECS = [
  { label: 'Tecnologia', value: 'Infravermelhos de onda média' },
  { label: 'Emissão de luz', value: 'Nenhuma luz visível' },
  { label: 'Potência', value: '1500 W a 4500 W' },
  { label: 'Alimentação', value: 'Monofásica ou trifásica' },
  { label: 'Proteção', value: 'IP55, interior e exterior' },
  { label: 'Emissor', value: 'Alumínio anodizado negro' },
  { label: 'Altura', value: '7,6 cm' },
  { label: 'Largura', value: '20 cm a 25 cm' },
  { label: 'Comprimento', value: '1,45 m a 2,44 m' },
  { label: 'Peso', value: '7,5 kg a 16,3 kg' },
  { label: 'Fixação', value: 'Parede ou teto, inclinação regulável' },
  { label: 'Ligação', value: 'Caixa estanque integrada' },
];

/** Selo de novidade. Discreto: contorno suave em vez de bloco de cor cheia. */
const NovidadeBadge = ({ dark = false }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${
      dark
        ? 'border border-amber-400/30 bg-amber-400/10 text-amber-300'
        : 'border border-amber-300 bg-amber-50 text-amber-700'
    }`}
  >
    <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-amber-400' : 'bg-amber-500'}`} aria-hidden="true" />
    Novidade
  </span>
);

export default function SrpEwavePage() {
  return (
    <>
      <SEOHead
        title="SRP eWave | Aquecedor Infravermelhos de Onda Média"
        description="Aquecedores SRP eWave de infravermelhos de onda média, sem emissão de luz visível. Para esplanadas cobertas, pérgolas e varandas. IP55. Peça aconselhamento."
        canonical="/products/srp-ewave"
        image="/srp-eWave2.webp"
        schemas={[
          generateProductSchema({
            name: 'SRP eWave',
            description:
              'Aquecedores elétricos de infravermelhos de onda média, sem emissão de luz visível. Emissor em alumínio anodizado negro, IP55, certificados para interior e exterior. Indicados para espaços exteriores cobertos ou protegidos.',
            image: `${COMPANY.baseUrl}/srp-eWave2.webp`,
            brand: 'SRP',
            url: `${COMPANY.baseUrl}/products/srp-ewave`,
          }),
          generatePtBreadcrumb([
            { name: 'Produtos', path: '/products' },
            { name: 'SRP eWave', path: '/products/srp-ewave' },
          ]),
        ]}
      />

      <div className="min-h-screen">

        {/* Hero. Sem recorte da imagem: coluna de texto e coluna de imagem, que
            mantem a proporcao original do ficheiro. */}
        <section style={{ background: '#0D0D0F' }} className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(60% 60% at 70% 20%, rgba(240,160,32,0.14), transparent 70%)' }}
          />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12 lg:pb-16">
            <Breadcrumb
              items={[
                { label: 'Início', path: '/' },
                { label: 'Produtos', path: '/products' },
                { label: 'SRP eWave', path: '/products/srp-ewave' },
              ]}
              dark
            />

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mt-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <NovidadeBadge dark />
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-5 tracking-tight">
                  SRP eWave
                </h1>
                <p className="text-amber-400 font-semibold mt-3 text-lg">
                  Infravermelhos de Onda Média · Sem Luz Visível
                </p>
                <p className="text-gray-400 leading-relaxed mt-5 max-w-lg">
                  Aquecedores elétricos de infravermelhos que aquecem sem brilhar. Pensados
                  para esplanadas cobertas, pérgolas, varandas e outros espaços exteriores
                  protegidos, onde o calor se mantém junto das pessoas.
                </p>

                <div className="flex flex-wrap gap-2 mt-7">
                  {['Sem luz visível', 'IP55 exterior', '1500 W a 4500 W'].map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-300"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
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

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src="/srp-eWave2.webp"
                  alt="Aquecedores SRP eWave suspensos na estrutura envidraçada de uma esplanada coberta, ao fim da tarde"
                  width={1280}
                  height={960}
                  className="w-full h-auto block"
                  loading="eager"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">

              {/* Introducao */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                  Calor que se sente, luz que não se vê
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A gama <strong>SRP eWave de onda média</strong> é a mais recente novidade no nosso
                  portefólio de aquecimento exterior. São aquecedores elétricos de infravermelhos
                  com emissor em alumínio anodizado negro e extrusões parabólicas, desenvolvido em
                  conjunto com o Departamento de Engenharia da Universidade de Modena Enzo Ferrari.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ao contrário dos aquecedores de onda curta, que trabalham com uma lâmpada
                  incandescente, a onda média aquece <strong>sem qualquer emissão de luz visível</strong>.
                  O aparelho não brilha e não cria um clarão alaranjado sobre a mesa, pelo que a
                  iluminação pensada para o espaço se mantém intacta.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A radiação de onda média tem elevada absorção e baixa reflexão, o que se traduz
                  numa sensação de calor suave e envolvente sobre a pele. E, como aquece diretamente
                  as pessoas e as superfícies em vez do ar, não gera correntes nem levanta poeiras.
                </p>
              </div>

              {/* Beneficios */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
                  O que distingue a onda média
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {BENEFITS.map((b) => {
                    const Icon = b.icon;
                    return (
                      <div key={b.title} className="flex gap-4 p-5 bg-gray-50 rounded-2xl">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-amber-600" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                          <p className="text-sm text-gray-600">{b.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Imagem de produto, proporcao original preservada */}
              <figure className="m-0">
                <div className="rounded-2xl overflow-hidden border border-gray-100">
                  <img
                    src="/srp-eWave1.webp"
                    alt="Aquecedor SRP eWave suspenso sob um teto de madeira, com o perfil de alumínio anodizado negro visível"
                    width={1280}
                    height={852}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
                <figcaption className="text-xs text-gray-500 mt-3">
                  Perfil de alumínio anodizado negro, com apenas 7,6 cm de altura. Em funcionamento
                  não emite qualquer luz visível.
                </figcaption>
              </figure>

              {/* Espacos cobertos ou protegidos */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                  Pensado para espaços exteriores cobertos
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A onda média trabalha a temperaturas de superfície mais baixas do que a onda curta
                  e entrega um calor mais difuso e envolvente. É nos espaços exteriores cobertos ou
                  protegidos que essa qualidade se nota melhor, porque o calor permanece junto das
                  pessoas em vez de se dispersar.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Esplanadas com cobertura, pérgolas, alpendres, varandas, marquises, jardins de
                  inverno e terraços resguardados do vento são o terreno natural desta gama. O
                  aparelho é <strong>certificado IP55 para instalação no exterior</strong>, por isso a
                  chuva e a humidade não são um problema.
                </p>

                <figure className="m-0 mb-6">
                  <div className="rounded-2xl overflow-hidden border border-gray-100">
                    <img
                      src="/srp-eWave3.webp"
                      alt="Vários aquecedores SRP eWave instalados no teto de madeira de uma esplanada coberta de montanha, com neve no exterior"
                      width={1280}
                      height={960}
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="text-xs text-gray-500 mt-3">
                    Instalação em esplanada coberta. Os aparelhos acompanham a linha da estrutura e
                    aquecem as mesas sem alterar a luz do espaço.
                  </figcaption>
                </figure>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {APLICACOES.map((u) => (
                    <div key={u} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" aria-hidden="true" />
                      {u}
                    </div>
                  ))}
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
                  <p className="text-sm text-gray-700">
                    Em espaços totalmente abertos e muito expostos ao vento, a onda curta costuma ser
                    a resposta mais eficaz. Nesses casos aconselhamos a gama{' '}
                    <Link to="/products/solamagic" className="text-orange-700 font-semibold hover:underline">
                      Solamagic
                    </Link>
                    , ou um estudo prévio connosco para escolher a solução certa para o seu espaço.
                  </p>
                </div>
              </div>

              {/* Especificacoes */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Especificações</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {SPECS.map((s) => (
                    <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4">
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">
                        {s.label}
                      </div>
                      <div className="font-bold text-gray-900 text-sm">{s.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                  As potências, tensões e comprimentos disponíveis variam consoante o modelo. A
                  Evoluimos Comércio confirma consigo a configuração adequada à sua instalação antes
                  de apresentar qualquer proposta.
                </p>
              </div>
            </div>

            {/* Barra lateral */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-6 text-white">
                <NovidadeBadge dark />
                <h3 className="font-extrabold text-xl mb-2 mt-4">Falar connosco</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Aconselhamento gratuito para o seu espaço exterior coberto. Ajudamos a definir a
                  potência, o número de aparelhos e a melhor posição de instalação.
                </p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors mb-3"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="block w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center transition-colors mb-3"
                >
                  Pedir Orçamento
                </Link>
                <a
                  href={`tel:${COMPANY.phoneBare}`}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-gray-700 hover:border-gray-500 text-gray-200 rounded-xl font-bold transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {COMPANY.phone}
                </a>
                <div className="mt-4 pt-4 border-t border-gray-700 space-y-1.5 text-sm text-gray-400">
                  <div>✓ Aconselhamento técnico</div>
                  <div>✓ Apoio na escolha da potência</div>
                  <div>✓ Acompanhamento pós-venda</div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
                  Qual escolher
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>eWave</strong>, onda média, sem luz visível, para espaços cobertos ou
                  protegidos.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Solamagic</strong>, onda curta, calor imediato e de maior alcance, para
                  espaços abertos.
                </p>
                <Link
                  to="/products/solamagic"
                  className="inline-flex items-center gap-1 text-xs text-orange-600 font-bold mt-3 hover:text-orange-700"
                >
                  Ver Solamagic <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Apelo final ao contacto */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center"
          >
            <h2 className="text-xl font-extrabold text-gray-900 mb-2">
              Quer saber se a gama eWave serve o seu espaço?
            </h2>
            <p className="text-gray-600 text-sm mb-6 max-w-lg mx-auto">
              Fale com a Evoluimos Comércio. Analisamos o seu espaço exterior coberto, explicamos o
              que esperar da onda média e indicamos a configuração certa, sem compromisso.
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
                Pedir Orçamento
              </Link>
              <a
                href={`tel:${COMPANY.phoneBare}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-orange-300 text-orange-700 hover:bg-orange-100 rounded-xl font-bold transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
