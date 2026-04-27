import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { WA_URL as WA, COMPANY } from '@/config/company';

const PRODUCTS = [
  { label: 'Solamagic Premium', path: '/products/solamagic' },
  { label: 'ComfortSun Polivalente', path: '/products/comfortsun' },
  { label: 'Duotherm Radiante', path: '/products/duotherm' },
  { label: 'ClimateCoating', path: '/products/climatecoating' },
  { label: 'Drymat Anti-Humidade', path: '/products/drymat' },
  { label: 'Bioclimatizadores', path: '/products/bioclimatizadores' },
];

const SOLUTIONS = [
  { label: 'Aquecer Esplanadas', path: '/solutions/outdoor-comfort' },
  { label: 'Eliminar Humidade', path: '/solutions/eliminate-moisture' },
  { label: 'Reduzir Custos', path: '/solutions/reduce-heating-costs' },
  { label: 'Arrefecimento Natural', path: '/solutions/natural-cooling' },
  { label: 'Soluções para Empresas', path: '/solutions/sustainable-business' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#09090B', color: '#9A9490', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Top CTA strip */}
      <div style={{ background: '#131316', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px' }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h2 style={{ fontWeight: 800, fontSize: '26px', color: '#F0EBE3', marginBottom: '6px', lineHeight: 1.2 }}>
              Evoluimos <span style={{ color: '#B84500' }}>Comércio</span>
            </h2>
            <p style={{ fontSize: '15px', color: '#6A6460', lineHeight: 1.6, maxWidth: '340px' }}>
              Soluções de alta tecnologia europeia para aquecimento, arrefecimento e proteção de edifícios.
            </p>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Contactar via WhatsApp"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#16A34A', color: '#fff', padding: '13px 22px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 0 24px rgba(22,163,74,0.2)' }}>
            <MessageCircle style={{ width: '18px', height: '18px' }} aria-hidden="true" />
            Contactar via WhatsApp
          </a>
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ padding: '52px 24px' }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Contactos */}
          <div className="col-span-2 lg:col-span-1">
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B84500', marginBottom: '20px' }}>Contactos</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: Phone, text: COMPANY.phone, href: `tel:${COMPANY.phoneBare}` },
                { icon: Mail, text: COMPANY.email, href: `mailto:${COMPANY.email}` },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <li key={i}>
                    <a href={c.href} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#8A8480', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#F0EBE3'}
                      onMouseLeave={e => e.currentTarget.style.color = '#8A8480'}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(184,69,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon style={{ width: '14px', height: '14px', color: '#F0A020' }} aria-hidden="true" />
                      </div>
                      {c.text}
                    </a>
                  </li>
                );
              })}
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#8A8480' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(184,69,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                  <MapPin style={{ width: '14px', height: '14px', color: '#F0A020' }} aria-hidden="true" />
                </div>
                <span style={{ lineHeight: 1.6 }}>{COMPANY.address.street}<br />{COMPANY.address.postalCode} · {COMPANY.address.country}</span>
              </li>
            </ul>
            <p style={{ marginTop: '20px', fontSize: '12px', color: '#6A6460' }}>NIF: {COMPANY.nif}</p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
              <a href="https://www.facebook.com/evoluimoscomercio/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(184,69,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8A8480', textDecoration: 'none', transition: 'color 0.2s, background 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#F0EBE3'; e.currentTarget.style.background = 'rgba(184,69,0,0.22)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#8A8480'; e.currentTarget.style.background = 'rgba(184,69,0,0.12)'; }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/evoluimos_edu?igsh=MW10ZmltZ3FrNXAwaA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(184,69,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8A8480', textDecoration: 'none', transition: 'color 0.2s, background 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#F0EBE3'; e.currentTarget.style.background = 'rgba(184,69,0,0.22)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#8A8480'; e.currentTarget.style.background = 'rgba(184,69,0,0.12)'; }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Produtos */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B84500', marginBottom: '20px' }}>Produtos</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {PRODUCTS.map(l => (
                <li key={l.path}>
                  <Link to={l.path} style={{ color: '#7A7470', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s', lineHeight: 1.5 }}
                    onMouseEnter={e => e.target.style.color = '#F0EBE3'}
                    onMouseLeave={e => e.target.style.color = '#7A7470'}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B84500', marginBottom: '20px' }}>Soluções</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {SOLUTIONS.map(l => (
                <li key={l.path}>
                  <Link to={l.path} style={{ color: '#7A7470', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#F0EBE3'}
                    onMouseLeave={e => e.target.style.color = '#7A7470'}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B84500', marginBottom: '20px' }}>Empresa</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {[
                { label: 'Sobre Nós', path: '/about' },
                { label: 'Serviços Imobiliários', path: '/real-estate' },
                { label: 'Contactos', path: '/contact' },
                { label: 'Política de Privacidade', path: '/privacy-policy' },
              ].map(l => (
                <li key={l.path}>
                  <Link to={l.path} style={{ color: '#7A7470', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#F0EBE3'}
                    onMouseLeave={e => e.target.style.color = '#7A7470'}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6A6460', marginBottom: '10px' }}>Marcas</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
              {['Solamagic', 'ComfortSun', 'Duotherm', 'ClimateCoating', 'Drymat', 'Herkell'].map(b => (
                <span key={b} style={{ fontSize: '11px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px', padding: '3px 8px', color: '#8A8480' }}>{b}</span>
              ))}
            </div>
            <a href="https://www.knoch-infrarot.de/" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6A6460', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#F0A020'}
              onMouseLeave={e => e.currentTarget.style.color = '#6A6460'}>
              <span style={{ fontSize: '10px' }}>↗</span> Site do Fabricante
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '18px 24px' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontSize: '13px', color: '#6A6460' }}>© {year} {COMPANY.legalName}. Todos os direitos reservados.</p>
          <a href="https://digitaldetails.pt/" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '12px', color: '#4A4440', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#6A6460'}
            onMouseLeave={e => e.currentTarget.style.color = '#4A4440'}>
            Website desenvolvido por Digital Details
          </a>
          <div style={{ display: 'flex', gap: '20px' }}>
            {[
              { l: 'Sobre', p: '/about' },
              { l: 'Contactos', p: '/contact' },
              { l: 'Privacidade', p: '/privacy-policy' },
            ].map(x => (
              <Link key={x.p} to={x.p} style={{ color: '#6A6460', fontSize: '13px', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#8A8480'}
                onMouseLeave={e => e.target.style.color = '#3A3430'}>{x.l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
