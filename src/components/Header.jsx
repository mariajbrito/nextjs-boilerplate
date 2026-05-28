import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WA_URL as WA } from '@/config/company';

const NAV = [
  {
    label: 'Produtos',
    path: '/products',
    children: [
      { label: 'Todos os Produtos', path: '/products' },
      { group: 'Infravermelhos Exterior' },
      { label: 'Solamagic', path: '/products/solamagic', badge: 'Premium' },
      { label: 'ComfortSun', path: '/products/comfortsun', badge: 'Polivalente' },
      { group: 'Aquecimento Interior' },
      { label: 'Duotherm Radiante', path: '/products/duotherm' },
      { group: 'Proteção e Conforto' },
      { label: 'ClimateCoating', path: '/products/climatecoating' },
      { label: 'Drymat Anti-Humidade', path: '/products/drymat' },
      { label: 'Bioclimatizadores', path: '/products/bioclimatizadores' },
      { label: 'Biolareiras Herkell', path: '/products/eco-fireplaces' },
      { label: 'Piso radiante eléctrico', path: '/products/piso-radiante' },
      { group: 'Água Quente' },
      { label: 'Esquentadores Clage', path: '/products/esquentadores' },
    ]
  },
  {
    label: 'Soluções',
    path: '/solutions',
    children: [
      { label: 'Todas as Soluções', path: '/solutions' },
      { group: 'Problemas e Intenção' },
      { label: 'Humidade nas Paredes', path: '/humidade-nas-paredes' },
      { label: 'Aquecimento Sem Obras', path: '/aquecimento-sem-obras' },
      { label: 'Casa Quente no Verão', path: '/casa-quente-no-verao' },
      { label: 'Reduzir Custos de Aquecimento', path: '/reduzir-custos-aquecimento' },
      { label: 'Aquecimento Exterior', path: '/aquecimento-exterior' },
      { label: 'Isolamento Térmico', path: '/isolamento-termico' },
      { group: 'Por Categoria' },
      { label: 'Aquecer Esplanadas e Terraços', path: '/solutions/outdoor-comfort' },
      { label: 'Eliminar Humidade nas Paredes', path: '/solutions/eliminate-moisture' },
      { label: 'Arrefecimento Natural', path: '/solutions/natural-cooling' },
      { label: 'Soluções para Empresas', path: '/solutions/sustainable-business' },
    ]
  },
  {
    label: 'Regiões',
    path: '/lisboa',
    children: [
      { label: 'Lisboa e Margem Sul', path: '/lisboa' },
      { label: 'Porto e Norte', path: '/porto' },
      { label: 'Madeira e Açores', path: '/madeira-acores' },
    ]
  },
  { label: 'Imobiliário', path: '/real-estate' },
  { label: 'Sobre', path: '/about' },
  { label: 'FAQ', path: '/faqs' },
  { label: 'Contacto', path: '/contact' },
];

const DropItem = ({ item, onClose }) => {
  const location = useLocation();
  if (item.group) return (
    <div style={{ padding: '10px 14px 4px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B84500', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {item.group}
    </div>
  );
  const active = location.pathname === item.path;
  return (
    <Link to={item.path} onClick={onClose}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 14px', margin: '1px 6px', borderRadius: '8px',
        fontSize: '14px', fontWeight: active ? 600 : 400,
        color: active ? '#F0A020' : '#B0A8A0',
        background: active ? 'rgba(184,69,0,0.1)' : 'transparent',
        textDecoration: 'none', transition: 'all 0.15s',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#F0EBE3'; }}}
      onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#B0A8A0'; }}}>
      {item.label}
      {item.badge && <span style={{ fontSize: '10px', background: '#B84500', color: '#fff', padding: '2px 8px', borderRadius: '999px', fontWeight: 700 }}>{item.badge}</span>}
    </Link>
  );
};

const DesktopDrop = ({ item }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const active = item.children?.some(c => c.path && location.pathname === c.path) || (item.path && location.pathname === item.path);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => item.path && navigate(item.path)}
        style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 12px', borderRadius: '8px', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '14px', fontWeight: 500, color: active ? '#F0A020' : '#A09890', transition: 'color 0.15s', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#F0EBE3'; }}
        onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#A09890'; }}>
        {item.label}
        <ChevronDown style={{ width: '14px', height: '14px', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:8 }} transition={{ duration: 0.15 }}
            style={{ position: 'absolute', top: '100%', left: 0, marginTop: '8px', width: '248px', background: '#1A1816', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '8px 0', zIndex: 100, boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }}>
            {item.children.map((c, i) => <DropItem key={i} item={c} onClose={() => setOpen(false)} />)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); setExpanded(null); }, [location.pathname]);

  return (
    <>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: '64px', background: scrolled ? 'rgba(13,13,15,0.96)' : 'rgba(13,13,15,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.3s', fontFamily: "'Plus Jakarta Sans', sans-serif", boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none' }}>
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link to="/" aria-label="Evoluimos Comércio página inicial" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <img src="/logobranco.png" alt="Evoluimos Comércio" style={{ height: '40px', width: 'auto', display: 'block' }} />
          </Link>

          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {NAV.map((item, i) => item.children
              ? <DesktopDrop key={i} item={item} />
              : (
                <Link key={i} to={item.path}
                  style={{ padding: '8px 12px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, color: location.pathname === item.path ? '#F0A020' : '#A09890', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color 0.15s' }}
                  onMouseEnter={e => { if (location.pathname !== item.path) e.currentTarget.style.color = '#F0EBE3'; }}
                  onMouseLeave={e => { if (location.pathname !== item.path) e.currentTarget.style.color = '#A09890'; }}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a href="https://www.facebook.com/evoluimoscomercio/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '34px', height: '34px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.04)', color: '#8A8490', textDecoration: 'none', transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#F0EBE3'; e.currentTarget.style.background = 'rgba(255,255,255,0.10)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#8A8490'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/evoluimos_edu?igsh=MW10ZmltZ3FrNXAwaA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '34px', height: '34px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.04)', color: '#8A8490', textDecoration: 'none', transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#F0EBE3'; e.currentTarget.style.background = 'rgba(255,255,255,0.10)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#8A8490'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Contactar via WhatsApp"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 15px', background: '#16A34A', color: '#fff', borderRadius: '10px', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
              <MessageCircle style={{ width: '16px', height: '16px' }} aria-hidden="true" />
              WhatsApp
            </a>
            <Link to="/contact"
              style={{ padding: '9px 15px', background: '#B84500', color: '#fff', borderRadius: '10px', fontWeight: 600, fontSize: '14px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Pedir Orçamento
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            style={{ padding: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '8px', cursor: 'pointer', flexShrink: 0 }}>
            {mobileOpen
              ? <X style={{ width: '18px', height: '18px', color: '#F0EBE3' }} aria-hidden="true" />
              : <Menu style={{ width: '18px', height: '18px', color: '#A09890' }} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              className="fixed inset-0 lg:hidden" style={{ background: 'rgba(0,0,0,0.65)', zIndex: 40, backdropFilter: 'blur(4px)' }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true" />
            <motion.nav
              id="mobile-menu"
              aria-label="Menu mobile"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 lg:hidden"
              style={{ width: '85vw', maxWidth: '360px', background: '#111114', zIndex: 50, display: 'flex', flexDirection: 'column', boxShadow: '-8px 0 48px rgba(0,0,0,0.6)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px', height: '64px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <span style={{ fontWeight: 800, color: '#B84500', fontSize: '16px' }}>Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Fechar menu"
                  style={{ background: 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '8px', padding: '7px', cursor: 'pointer' }}>
                  <X style={{ width: '16px', height: '16px', color: '#A09890' }} aria-hidden="true" />
                </button>
              </div>

              <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
                {NAV.map((item, i) => item.children ? (
                  <div key={i}>
                    <button onClick={() => setExpanded(expanded === i ? null : i)}
                      aria-expanded={expanded === i}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '13px 12px', borderRadius: '10px', background: 'transparent', border: 'none', cursor: 'pointer', color: '#D5D0C8', fontWeight: 600, fontSize: '15px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {item.label}
                      <ChevronDown style={{ width: '16px', height: '16px', transition: 'transform 0.2s', transform: expanded === i ? 'rotate(180deg)' : 'none' }} aria-hidden="true" />
                    </button>
                    <AnimatePresence>
                      {expanded === i && (
                        <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} style={{ overflow: 'hidden', paddingLeft: '8px' }}>
                          {item.children.map((c, j) => <DropItem key={j} item={c} onClose={() => setMobileOpen(false)} />)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={i} to={item.path}
                    style={{ display: 'block', padding: '13px 12px', borderRadius: '10px', color: location.pathname === item.path ? '#F0A020' : '#D5D0C8', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>
                    {item.label}
                  </Link>
                ))}
              </div>

              <div style={{ padding: '14px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', paddingBottom: '4px' }}>
                  <a href="https://www.facebook.com/evoluimoscomercio/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.04)', color: '#8A8490', textDecoration: 'none' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/evoluimos_edu?igsh=MW10ZmltZ3FrNXAwaA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.04)', color: '#8A8490', textDecoration: 'none' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Contactar via WhatsApp"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', background: '#16A34A', color: '#fff', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
                  <MessageCircle style={{ width: '18px', height: '18px' }} aria-hidden="true" />
                  Contactar via WhatsApp
                </a>
                <Link to="/contact"
                  style={{ display: 'block', padding: '14px', background: '#B84500', color: '#fff', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textAlign: 'center', textDecoration: 'none' }}>
                  Pedir Orçamento
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
