import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageCircle, Phone, Mail, MapPin, Star, Award, Globe,
  CheckCircle2, ArrowRight, ExternalLink, Home, Thermometer, Droplets,
  Search, ClipboardList, ShieldCheck, Handshake, KeyRound, Wrench,
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';

const LANGUAGES = [
  { code: 'PT', name: 'Português', native: true },
  { code: 'EN', name: 'Inglês', native: false },
  { code: 'DE', name: 'Alemão', native: false },
  { code: 'ES', name: 'Espanhol', native: false },
  { code: 'FR', name: 'Francês', native: false },
];

const SERVICES = [
  {
    icon: Home,
    title: 'Compra e Venda de Imóveis',
    desc: 'Serviço completo e personalizado no Algarve e em Portugal. Acompanhamento em todo o processo, da pesquisa à escritura, com total transparência.',
  },
  {
    icon: Thermometer,
    title: 'Diagnóstico Técnico Incluído',
    desc: 'Avaliação gratuita do estado do imóvel com foco em humidade, eficiência térmica e conforto. Identificação de problemas antes da compra ou venda.',
  },
  {
    icon: Droplets,
    title: 'Sugestões de Reabilitação',
    desc: 'Propostas de melhoria com produtos inovadores, sem obras invasivas. Focadas em humidade ascendente, isolamento térmico e valorização do imóvel.',
  },
  {
    icon: Globe,
    title: 'Atendimento Multilingue',
    desc: 'Poliglota com experiência internacional. Atendimento em português, inglês, alemão, espanhol e francês, ideal para clientes estrangeiros no mercado imobiliário português.',
  },
];

const BUYER_STEPS = [
  {
    icon: Search,
    title: 'Pesquisa qualificada',
    desc: 'Pesquisa online com ferramentas profissionais e offline através de networking entre colegas. Partilha apenas de resultados compatíveis e qualificados com o cliente.',
  },
  {
    icon: ClipboardList,
    title: 'Análise e visita ao imóvel',
    desc: 'Contacto para apurar mais informações, avaliação dos valores de mercado, visita ao imóvel com verificação de patologias e soluções, apresentação de relatório ao potencial comprador.',
  },
  {
    icon: ShieldCheck,
    title: 'Due diligence',
    desc: 'Verificação da documentação do imóvel, confirmação da legalidade do processo e, se necessário, nova visita com o comprador antes de avançar.',
  },
  {
    icon: Handshake,
    title: 'Proposta e negociação',
    desc: 'Apresentação de proposta e apoio ativo na negociação para que todas as partes fechem um bom negócio.',
  },
  {
    icon: KeyRound,
    title: 'CPCV até à escritura',
    desc: 'Acompanhamento em todo o processo, do contrato-promessa à escritura, com o apoio do departamento jurídico da EXP Portugal.',
  },
  {
    icon: Wrench,
    title: 'Pós-escritura',
    desc: 'Apoio na resolução do que for necessário, humidade, pintura, climatização e muito mais. Soluções fornecidas diretamente pela Evoluimos Comércio.',
  },
];

const ACHIEVEMENTS = [
  {
    year: '2025',
    title: 'Certificação CAP',
    desc: 'Certified Agent Professional pela EXP Portugal, obtida após a venda bem-sucedida de uma quinta que permanecia no mercado há vários anos.',
  },
  {
    year: '2025',
    title: 'Transações Complexas',
    desc: 'Conclusão da venda de uma moradia geminada de difícil colocação, reforçando um historial de sucesso em transações desafiantes.',
  },
  {
    year: '25+',
    title: 'Anos de Empreendedorismo',
    desc: 'Décadas de atividade no setor do conforto térmico, com representação de marcas europeias e clientes de referência nacional.',
  },
];

const FB_SVG = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const IG_SVG = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
  </svg>
);

const LI_SVG = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function RealEstatePage() {
  return (
    <>
      <SEOHead
        title="Eduardo Catarino · Consultor Imobiliário no Algarve | EXP Portugal"
        description="Eduardo Catarino, agente CAP certificado pela EXP Portugal. Compra e venda de imóveis no Algarve com diagnóstico técnico integrado. Atendimento em PT, EN e DE."
        canonical="/real-estate"
        image="/eduardoexp1.webp"
      />

      {/* ── HERO ── dark, split layout */}
      <section
        style={{ background: 'linear-gradient(135deg, #0D0A00 0%, #1A1000 50%, #0F0F11 100%)', minHeight: 'calc(100svh - 64px)', position: 'relative', overflow: 'hidden' }}
        aria-label="Eduardo Catarino Consultor Imobiliário"
      >
        {/* subtle grain texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(184,69,0,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="absolute top-6 left-0 right-0 flex justify-center px-4 z-10">
          <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Imobiliário', path: '/real-estate' }]} dark />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-full" style={{ display: 'flex', alignItems: 'center', minHeight: 'calc(100svh - 64px)' }}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-20 lg:py-0">

            {/* Left: Text */}
            <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(184,69,0,0.18)', border: '1px solid rgba(184,69,0,0.35)', color: '#F0A020', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px' }}>
                  EXP Portugal
                </span>
                <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#A09890', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Award style={{ width: '11px', height: '11px' }} /> CAP Certified 2025
                </span>
                <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#A09890', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '999px' }}>
                  AMI 18470
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                Eduardo Catarino
              </h1>
              <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 600, color: '#B84500', marginBottom: '24px', letterSpacing: '0.01em' }}>
                Consultor Imobiliário · Sotavento Algarvio
              </p>
              <p style={{ fontSize: '17px', color: '#B0AAA6', lineHeight: 1.8, marginBottom: '36px', maxWidth: '480px' }}>
                Agente imobiliário e empreendedor no setor do conforto térmico. Uma combinação única que oferece ao cliente muito mais do que a mediação tradicional.
              </p>

              {/* Language pills */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '36px', flexWrap: 'wrap' }}>
                {LANGUAGES.map(l => (
                  <span key={l.code} style={{ background: l.native ? 'rgba(184,69,0,0.15)' : 'rgba(255,255,255,0.05)', border: `1px solid ${l.native ? 'rgba(184,69,0,0.3)' : 'rgba(255,255,255,0.1)'}`, color: l.native ? '#F0A020' : '#7A7470', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px' }}>
                    {l.code} · {l.name}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#16A34A', color: '#fff', padding: '13px 22px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', boxShadow: '0 0 28px rgba(22,163,74,0.25)' }}>
                  <MessageCircle style={{ width: '18px', height: '18px' }} />WhatsApp
                </a>
                <a href="mailto:eduardo.catarino@expportugal.com"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(184,69,0,0.15)', color: '#F0A020', border: '1px solid rgba(184,69,0,0.3)', padding: '13px 22px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
                  <Mail style={{ width: '18px', height: '18px' }} />Email
                </a>
                <a href={`tel:${COMPANY.phoneBare}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.06)', color: '#D5D0C8', border: '1px solid rgba(255,255,255,0.1)', padding: '13px 22px', borderRadius: '12px', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>
                  <Phone style={{ width: '18px', height: '18px' }} />{COMPANY.phone}
                </a>
              </div>

              {/* Social row */}
              <div style={{ display: 'flex', gap: '14px', marginTop: '28px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#7A7470', fontWeight: 500 }}>Redes sociais</span>
                {[
                  { href: 'https://www.facebook.com/EduardoCatarinoConsultor', icon: FB_SVG, label: 'Facebook' },
                  { href: 'https://www.instagram.com/eduardocatarino_consultor_exp', icon: IG_SVG, label: 'Instagram' },
                  { href: 'https://www.linkedin.com/in/eduardocatarinoevoluimos/', icon: LI_SVG, label: 'LinkedIn' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A8A29E', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(184,69,0,0.15)'; e.currentTarget.style.color = '#F0A020'; e.currentTarget.style.borderColor = 'rgba(184,69,0,0.3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#7A7470'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right: Photo */}
            <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '440px' }}>
                {/* Decorative ring */}
                <div style={{ position: 'absolute', inset: '-16px', borderRadius: '32px', border: '1px solid rgba(184,69,0,0.2)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', inset: '-32px', borderRadius: '40px', border: '1px solid rgba(184,69,0,0.08)', pointerEvents: 'none' }} />
                <img
                  src="/eduardoexp1.webp"
                  alt="Eduardo Catarino, Consultor Imobiliário Algarve"
                  style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', borderRadius: '24px', display: 'block', boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}
                  loading="eager"
                />
                {/* Floating badge */}
                <div style={{ position: 'absolute', bottom: '24px', left: '-20px', background: '#1A1000', border: '1px solid rgba(184,69,0,0.3)', borderRadius: '16px', padding: '14px 18px', boxShadow: '0 16px 40px rgba(0,0,0,0.5)' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F0A020', marginBottom: '4px' }}>Algarve e eXp Portugal</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: '#111114', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '28px 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: '25+', label: 'Anos de experiência' },
              { value: '5', label: 'Línguas faladas' },
              { value: 'CAP', label: 'Certificação EXP' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#F0A020', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '12px', color: '#7A7470', fontWeight: 500, marginTop: '6px', letterSpacing: '0.02em' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / DIFFERENTIATOR ── */}
      <section style={{ background: '#17171A', padding: 'clamp(64px, 8vw, 96px) 0' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Photo 2 */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ position: 'relative', order: 2 }} className="lg:order-1">
              <img
                src="/eduardoexp2.webp"
                alt="Eduardo Catarino em atividade"
                style={{ width: '100%', borderRadius: '20px', display: 'block', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}
                loading="lazy"
              />
              <div style={{ position: 'absolute', top: '20px', right: '-12px', background: 'linear-gradient(135deg, #8B3200 0%, #B84500 100%)', borderRadius: '14px', padding: '16px 20px', boxShadow: '0 12px 32px rgba(184,69,0,0.35)' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '2px' }}>Especialidade única</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Imobiliário + Conforto Térmico</div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              style={{ order: 1 }} className="lg:order-2">
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#F0A020', marginBottom: '16px' }}>O que distingue Eduardo Catarino</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.15, marginBottom: '20px' }}>
                Muito mais do que<br />mediação imobiliária.
              </h2>
              <p style={{ fontSize: '16px', color: '#A8A29E', lineHeight: 1.8, marginBottom: '16px' }}>
                Eduardo Catarino é empreendedor de longa data no setor do conforto térmico e, em simultâneo, agente imobiliário certificado pela EXP Portugal. Esta combinação única permite oferecer um serviço que vai muito além da mediação tradicional.
              </p>
              <p style={{ fontSize: '16px', color: '#A8A29E', lineHeight: 1.8, marginBottom: '16px' }}>
                Eduardo acompanha o cliente desde a decisão inicial de comprar ou vender até ao fecho do negócio. Da pesquisa qualificada ao contrato-promessa e à escritura, cada etapa é conduzida com transparência e rigor.
              </p>
              <p style={{ fontSize: '16px', color: '#A8A29E', lineHeight: 1.8, marginBottom: '28px' }}>
                Em cada visita ao imóvel, avalia gratuitamente o estado das paredes, o isolamento térmico e a eficiência energética, identificando problemas e apresentando soluções concretas sem obras invasivas.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Diagnóstico gratuito de humidade e eficiência térmica',
                  'Comissionamento apenas em caso de sucesso',
                  'Rede de contactos em toda a região do Algarve',
                  'Atendimento em português, inglês, alemão, espanhol e francês',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 style={{ width: '16px', height: '16px', color: '#B84500', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#B8B2AE' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: '#141417', padding: 'clamp(64px, 8vw, 96px) 0' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '52px' }}>
            <div style={{ width: '36px', height: '3px', background: '#B84500', borderRadius: '2px', marginBottom: '20px' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#F5F0E8', marginBottom: '12px', lineHeight: 1.1 }}>O que Eduardo Catarino oferece</h2>
            <p style={{ fontSize: '16px', color: '#A8A29E', lineHeight: 1.7, maxWidth: '480px' }}>Um serviço integrado que cobre todas as fases da transação imobiliária, com um diferenciador técnico único no mercado.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ background: '#1A1A1E', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '28px 22px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(184,69,0,0.12)', border: '1px solid rgba(184,69,0,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon style={{ width: '22px', height: '22px', color: '#F0A020' }} />
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#EDE8E0', lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontSize: '13px', color: '#908A86', lineHeight: 1.7 }}>{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BUYER PROCESS ── */}
      <section style={{ background: '#17171A', padding: 'clamp(64px, 8vw, 96px) 0' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '52px' }}>
            <div style={{ width: '36px', height: '3px', background: '#B84500', borderRadius: '2px', marginBottom: '20px' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#F5F0E8', marginBottom: '12px', lineHeight: 1.1 }}>
              Como trabalho para o comprador
            </h2>
            <p style={{ fontSize: '16px', color: '#A8A29E', lineHeight: 1.7, maxWidth: '520px' }}>
              O que faz um bom agente imobiliário? O que for preciso para encontrar o imóvel certo e fechar um bom negócio.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BUYER_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  style={{ background: '#1A1A1E', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '36px', fontWeight: 800, color: 'rgba(184,69,0,0.08)', lineHeight: 1 }}>{i + 1}</div>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(184,69,0,0.12)', border: '1px solid rgba(184,69,0,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon style={{ width: '22px', height: '22px', color: '#F0A020' }} />
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#EDE8E0', lineHeight: 1.3 }}>{step.title}</h3>
                  <p style={{ fontSize: '13px', color: '#908A86', lineHeight: 1.7 }}>{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section style={{ background: '#141417', padding: 'clamp(64px, 8vw, 96px) 0' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#F0A020', marginBottom: '16px' }}>Percurso e conquistas</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.15, marginBottom: '36px' }}>
                Resultados que<br /><span style={{ color: '#B84500' }}>falam por si.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {ACHIEVEMENTS.map((a, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    style={{ display: 'flex', gap: '20px', paddingBottom: i < ACHIEVEMENTS.length - 1 ? '28px' : 0, borderBottom: i < ACHIEVEMENTS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', marginBottom: i < ACHIEVEMENTS.length - 1 ? '28px' : 0 }}>
                    <div style={{ flexShrink: 0, width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(184,69,0,0.1)', border: '1px solid rgba(184,69,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                      <span style={{ fontSize: '12px', fontWeight: 800, color: '#F0A020', lineHeight: 1 }}>{a.year}</span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#EDE8E0', marginBottom: '6px' }}>{a.title}</h3>
                      <p style={{ fontSize: '13px', color: '#908A86', lineHeight: 1.7 }}>{a.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img
                src="/eduardoexp3.webp"
                alt="Eduardo Catarino consultor"
                style={{ width: '100%', borderRadius: '20px', display: 'block', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}
                loading="lazy"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── EC PRODUCTS SYNERGY ── */}
      <section style={{ background: 'linear-gradient(135deg, #130800 0%, #1A1000 100%)', padding: 'clamp(56px, 7vw, 80px) 0', borderTop: '1px solid rgba(184,69,0,0.15)', borderBottom: '1px solid rgba(184,69,0,0.15)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#F0A020', marginBottom: '14px' }}>Sinergia exclusiva</p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.15, marginBottom: '14px' }}>
              Diagnóstico integrado com as soluções Evoluimos Comércio
            </h2>
            <p style={{ fontSize: '16px', color: '#A8A29E', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto' }}>
              Na compra ou venda de um imóvel, Eduardo Catarino avalia gratuitamente o estado das paredes (humidade ascendente), o isolamento térmico e o sistema de aquecimento. Se existirem problemas, são apresentadas soluções concretas, sem obras invasivas.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Drymat Anti-Humidade', path: '/products/drymat', desc: 'Elimina humidade ascendente sem obras' },
              { label: 'ClimateCoating', path: '/products/climatecoating', desc: 'Isolamento cerâmico de nanotecnologia' },
              { label: 'Duotherm Aquecimento', path: '/products/duotherm', desc: 'Radiadores em pedra natural, sem CO₂' },
            ].map((p, i) => (
              <motion.div key={p.path} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={p.path}
                  style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '22px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,69,0,0.18)', borderRadius: '16px', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(184,69,0,0.08)'; e.currentTarget.style.borderColor = 'rgba(184,69,0,0.35)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(184,69,0,0.18)'; }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#EDE8E0' }}>{p.label}</span>
                  <span style={{ fontSize: '12px', color: '#7A7470' }}>{p.desc}</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#F0A020', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                    Ver produto <ArrowRight style={{ width: '12px', height: '12px' }} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── full width, premium */}
      <section style={{ background: '#17171A', padding: 'clamp(72px, 10vw, 112px) 0' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Left */}
              <div>
                <div style={{ width: '36px', height: '3px', background: '#B84500', borderRadius: '2px', marginBottom: '20px' }} />
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.1, marginBottom: '16px' }}>
                  Pronto para comprar,<br />vender ou avaliar?
                </h2>
                <p style={{ fontSize: '16px', color: '#A8A29E', lineHeight: 1.8, marginBottom: '28px' }}>
                  Contacte Eduardo Catarino diretamente. Resposta rápida, sem compromisso. Atendimento em português, inglês e alemão.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <MapPin style={{ width: '16px', height: '16px', color: '#B84500', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#A8A29E' }}>Algarve · Vila Nova de Cacela · Todo o território nacional</span>
                </div>
                <a href="https://sites.google.com/view/eduardocatarino-exp" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#F0A020', textDecoration: 'none', marginTop: '8px' }}>
                  <ExternalLink style={{ width: '13px', height: '13px' }} />
                  Ver perfil EXP Portugal completo
                </a>
              </div>

              {/* Right: contact cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#16A34A', borderRadius: '14px', padding: '16px 20px', textDecoration: 'none', transition: 'filter 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}>
                  <MessageCircle style={{ width: '20px', height: '20px', color: '#fff', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>WhatsApp</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>Resposta rápida</div>
                  </div>
                </a>

                <a href="mailto:eduardo.catarino@expportugal.com"
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'rgba(184,69,0,0.12)', border: '1px solid rgba(184,69,0,0.25)', borderRadius: '14px', padding: '16px 20px', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(184,69,0,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(184,69,0,0.12)'; }}>
                  <Mail style={{ width: '20px', height: '20px', color: '#F0A020', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#EDE8E0' }}>eduardo.catarino@expportugal.com</div>
                    <div style={{ fontSize: '12px', color: '#908A86' }}>Email profissional</div>
                  </div>
                </a>

                <a href={`tel:${COMPANY.phoneBare}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px 20px', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}>
                  <Phone style={{ width: '20px', height: '20px', color: '#A8A29E', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#EDE8E0' }}>{COMPANY.phone}</div>
                    <div style={{ fontSize: '12px', color: '#908A86' }}>Chamada direta</div>
                  </div>
                </a>

                <Link to="/contact"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#B84500', borderRadius: '14px', padding: '16px 20px', textDecoration: 'none', fontWeight: 700, fontSize: '15px', color: '#fff', transition: 'filter 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.15)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}>
                  Formulário de Contacto <ArrowRight style={{ width: '16px', height: '16px' }} />
                </Link>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
