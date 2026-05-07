import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone, Sun, Droplets, Wind, Thermometer, Zap, Flame, Snowflake } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateLocalBusinessSchema, generateOrganizationSchema } from '@/utils/schemaMarkup';

/* ── Animated SVG Hero (interactive) ──────────────────────────────── */
function HeroGraphic() {
  const CX = 810, CY = 345, OR = 190;
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(-1);
  const [centerHov, setCenterHov] = useState(false);
  const [orbitAngle, setOrbitAngle] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 35, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 25 });

  useEffect(() => {
    let raf;
    let start = null;
    const DURATION = 40000;
    const tick = (t) => {
      if (!start) start = t;
      setOrbitAngle(((t - start) % DURATION) / DURATION * 360);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const orbitals = [
    { angle: -90,    Icon: Sun,         label: 'Solar' },
    { angle: -38.57, Icon: Zap,         label: 'Energia' },
    { angle:  12.86, Icon: Thermometer, label: 'Aquecimento' },
    { angle:  64.29, Icon: Flame,       label: 'Lareira Eco' },
    { angle: 115.71, Icon: Droplets,    label: 'Humidade' },
    { angle: 167.14, Icon: Wind,        label: 'Ventilação' },
    { angle: 218.57, Icon: Snowflake,   label: 'Arrefecimento' },
  ];

  useEffect(() => {
    const onMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 22);
      mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 22);
    };
    const onLeave = () => { mouseX.set(0); mouseY.set(0); };
    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ pointerEvents: 'none' }}
    >
      <motion.svg viewBox="0 0 1200 700"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        style={{ x: springX, y: springY, pointerEvents: 'none' }}
      >
        <defs>
          <filter id="hglow"><feGaussianBlur stdDeviation="32" /></filter>
          <filter id="cglow"><feGaussianBlur stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="orbglow"><feGaussianBlur stdDeviation="8" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="hg1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B84500" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#B84500" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hg2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D07000" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#D07000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Warm ambient hazes */}
        <ellipse cx={CX} cy={CY} rx="380" ry="320" fill="url(#hg1)" filter="url(#hglow)" />
        <ellipse cx="200" cy="180" rx="260" ry="200" fill="url(#hg2)" filter="url(#hglow)" />
        <ellipse cx="400" cy="620" rx="300" ry="160" fill="url(#hg2)" filter="url(#hglow)" />

        {/* Expanding pulse rings */}
        {[0, 1, 2].map(i => (
          <motion.circle key={i} cx={CX} cy={CY} stroke="#D07000" strokeWidth="0.8" fill="none"
            animate={{ r: [OR * 0.4, OR + 180], strokeOpacity: [0.25, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeOut', delay: i * 1.83 }}
          />
        ))}

        {/* Static concentric rings */}
        {[66, 110, OR, 235, 280].map((r, i) => (
          <circle key={i} cx={CX} cy={CY} r={r} stroke="#D07000"
            strokeWidth={i === 2 ? 1.1 : 0.5}
            strokeOpacity={[0.18, 0.10, 0.18, 0.08, 0.05][i]}
            fill="none" />
        ))}
        <circle cx={CX} cy={CY} r="306" stroke="#B84500" strokeWidth="0.4"
          strokeOpacity="0.06" fill="none" strokeDasharray="5 12" />

        {/* ── Ferris wheel: positions computed directly, no CSS group transforms ── */}
        {orbitals.map((o, i) => {
          const rad = ((o.angle + orbitAngle) * Math.PI) / 180;
          const x = CX + Math.cos(rad) * OR;
          const y = CY + Math.sin(rad) * OR;
          const isHov = hovered === i;
          // Only interactive on the right half (not overlapping hero text)
          const interactive = x > 650;
          return (
            <g key={i}
              onMouseEnter={interactive ? () => setHovered(i) : undefined}
              onMouseLeave={interactive ? () => setHovered(-1) : undefined}
              style={{ cursor: interactive ? 'pointer' : 'default', pointerEvents: interactive ? 'all' : 'none' }}
            >
              {/* Dashed spoke */}
              <line
                x1={CX + Math.cos(rad) * 70} y1={CY + Math.sin(rad) * 70}
                x2={x - Math.cos(rad) * 32} y2={y - Math.sin(rad) * 32}
                stroke="#D07000" strokeWidth="0.6" strokeDasharray="3 7"
                strokeOpacity={isHov ? 0.55 : 0.18}
                style={{ transition: 'stroke-opacity 0.3s' }}
              />
              {/* Outer glow ring */}
              <circle cx={x} cy={y}
                r={isHov ? 44 : 28}
                fill="none" stroke="#F0A020" strokeWidth="0.8" filter="url(#orbglow)"
                strokeOpacity={isHov ? 0.4 : 0}
                style={{ transition: 'r 0.2s, stroke-opacity 0.2s' }}
              />
              {/* Main circle */}
              <circle cx={x} cy={y}
                r={isHov ? 36 : 28}
                stroke="#D07000"
                fill={isHov ? 'rgba(184,69,0,0.20)' : 'rgba(184,69,0,0.08)'}
                strokeWidth={isHov ? 1.5 : 1}
                strokeOpacity={isHov ? 0.70 : 0.35}
                style={{ transition: 'r 0.2s, fill 0.2s, stroke-opacity 0.2s' }}
              />
              <circle cx={x} cy={y}
                r={isHov ? 28 : 22}
                fill="rgba(208,112,0,0.05)"
                style={{ transition: 'r 0.2s' }}
              />
              {/* Icon */}
              <foreignObject x={x - 12} y={y - 12} width="24" height="24">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                  <o.Icon size={15} color="#F0A020" strokeWidth={2} />
                </div>
              </foreignObject>
              {/* Label on hover */}
              <text
                x={x} y={y + 44}
                textAnchor="middle"
                fill="#F0A020"
                fontSize="12"
                fontWeight="600"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                opacity={isHov ? 1 : 0}
                style={{ transition: 'opacity 0.2s' }}
              >
                {o.label}
              </text>
            </g>
          );
        })}

        {/* ── Central circle (INTERACTIVE) ── */}
        <g
          onMouseEnter={() => setCenterHov(true)}
          onMouseLeave={() => setCenterHov(false)}
          style={{ cursor: 'pointer', pointerEvents: 'all' }}
        >
          <motion.circle cx={CX} cy={CY}
            fill="rgba(184,69,0,0.06)" stroke="#D07000" strokeWidth="2"
            animate={{
              r: centerHov ? 72 : 66,
              strokeOpacity: centerHov ? 0.65 : 0.40,
              fill: centerHov ? 'rgba(184,69,0,0.14)' : 'rgba(184,69,0,0.06)',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 16 }}
          />
          <motion.circle cx={CX} cy={CY}
            fill="rgba(208,112,0,0.04)"
            animate={{ r: centerHov ? 65 : 60 }}
            transition={{ type: 'spring', stiffness: 200, damping: 16 }}
          />
          {/* House walls */}
          <path d={`M ${CX-24} ${CY-7} L ${CX-24} ${CY+29} L ${CX+24} ${CY+29} L ${CX+24} ${CY-7}`}
            fill="none" stroke="#F0A020" strokeWidth="1.7" strokeLinejoin="round" strokeOpacity="0.7" />
          {/* Roof */}
          <path d={`M ${CX-30} ${CY-5} L ${CX} ${CY-36} L ${CX+30} ${CY-5}`}
            fill="none" stroke="#F0A020" strokeWidth="1.7" strokeLinejoin="round" strokeOpacity="0.7" />
          {/* Door */}
          <rect x={CX-8} y={CY+11} width="16" height="18" rx="2" fill="none" stroke="#F0A020" strokeWidth="1.3" strokeOpacity="0.6" />
          {/* Window */}
          <rect x={CX+10} y={CY-1} width="11" height="11" rx="1.5" fill="none" stroke="#F0A020" strokeWidth="1.3" strokeOpacity="0.6" />
          {/* Label */}
          <motion.text
            x={CX} y={CY + 56}
            textAnchor="middle"
            fill="#F0A020"
            fontSize="13"
            fontWeight="700"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            animate={{ opacity: centerHov ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            Conforto Térmico
          </motion.text>
        </g>

        {/* Small bright core */}
        <circle cx={CX} cy={CY-16} r="4" fill="#F0A020" fillOpacity="0.35" filter="url(#cglow)" style={{ pointerEvents:'none' }} />

        {/* Outer pulsing dots */}
        {orbitals.map((o, i) => {
          const rad = (o.angle * Math.PI) / 180;
          return (
            <motion.circle key={i}
              cx={CX + Math.cos(rad) * 280} cy={CY + Math.sin(rad) * 280}
              r={2} fill="#D07000" style={{ pointerEvents:'none' }}
              animate={{ fillOpacity: [0.2, 0.55, 0.2], r: [2, 3, 2] }}
              transition={{ duration: 2.4 + i * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            />
          );
        })}

        {/* Floating warm particles */}
        {[
          { x: 480, y: 520 }, { x: 580, y: 560 }, { x: 700, y: 500 },
          { x: 850, y: 540 }, { x: 950, y: 490 }, { x: 380, y: 480 },
          { x: 1060, y: 530 }, { x: 660, y: 580 },
        ].map((p, i) => (
          <motion.circle key={`p${i}`} cx={p.x} cy={p.y} r={1.5 + (i % 3) * 0.5}
            fill={i % 2 === 0 ? '#F0A020' : '#D07000'}
            style={{ pointerEvents:'none' }}
            animate={{ cy: [p.y, p.y - 130], fillOpacity: [0.5, 0] }}
            transition={{ duration: 4 + i * 0.35, repeat: Infinity, ease: 'easeOut', delay: i * 0.5 }}
          />
        ))}
      </motion.svg>
    </div>
  );
}

/* ── Count up ──────────────────────────────────────────────────────── */
function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = target / 90;
    const t = setInterval(() => {
      n += step;
      if (n >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(n));
    }, 1000/60);
    return () => clearInterval(t);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Data ──────────────────────────────────────────────────────────── */
const PRODUCTS = [
  { name: 'Solamagic', tag: 'Premium', icon: Sun, desc: 'Infravermelhos de onda curta para esplanadas. Calor imediato, 92% de eficiência. Made in Germany.', path: '/products/solamagic', img: '/Solamagic/aquecedorexterior.png' },
  { name: 'ComfortSun', tag: 'Polivalente', icon: Zap, desc: 'Quatro linhas de aquecedores infravermelhos para qualquer espaço e orçamento.', path: '/products/comfortsun', img: '/ComfortSun/esplanada.png' },
  { name: 'Duotherm', tag: 'Radiante', icon: Thermometer, desc: 'Radiadores em pedra natural. Calor saudável por infravermelhos, sem CO2.', path: '/products/duotherm', img: '/Duotherm/saladeestar.png' },
  { name: 'ClimateCoating', tag: 'Revestimento', icon: Wind, desc: 'Membrana cerâmica de nanotecnologia. Isola termicamente e regula humidade.', path: '/products/climatecoating', img: '/ClimateCoating/baldestinta.webp' },
  { name: 'Drymat', tag: 'Anti-Humidade', icon: Droplets, desc: 'Elimina humidade ascendente sem obras. Tecnologia eletromagnética austríaca.', path: '/products/drymat', img: 'https://images.unsplash.com/photo-1693594558979-aed4872ff156?w=700&q=80' },
  { name: 'Bioclimatizadores', tag: 'Arrefecimento', icon: Wind, desc: 'Arrefecimento natural por evaporação. Sem compressor. Ideal para o verão.', path: '/products/bioclimatizadores', img: '/Bioclimatizadores/bioclimatizadorquarto.png', objectPosition: 'bottom' },
];

const SOLUTIONS = [
  { label: 'Aquecer Esplanadas', path: '/solutions/outdoor-comfort', icon: Sun, desc: 'Mantenha a esplanada aberta o ano todo. Mais ocupação, mais faturação.' },
  { label: 'Eliminar Humidade', path: '/solutions/eliminate-moisture', icon: Droplets, desc: 'Paredes com humidade ascendente? O Drymat resolve sem obras, em poucos meses.' },
  { label: 'Reduzir Custos', path: '/solutions/reduce-heating-costs', icon: Zap, desc: 'Aquecimento inteligente que consome menos e dura mais. Retorno real do investimento.' },
  { label: 'Arrefecimento Natural', path: '/solutions/natural-cooling', icon: Wind, desc: 'Alternativa ao ar condicionado. Até 80% menos consumo, sem gases, 100% ecológico.' },
  { label: 'Soluções para Empresas', path: '/solutions/sustainable-business', icon: Flame, desc: 'Soluções ecológicas para empresas que querem poupar e ser responsáveis.' },
];

/* ── Component ─────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div style={{ background: '#0F0F11', color: '#EDE8E0' }}>
      <style>{`
        .pjs { font-family: 'Plus Jakarta Sans', sans-serif !important; }
        .ec-tag {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: rgba(184,69,0,0.12);
          border: 1px solid rgba(184,69,0,0.32);
          color: #F0A020;
        }
        .prod-card {
          display: block;
          position: relative;
          height: 300px;
          border-radius: 20px;
          overflow: hidden;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .prod-card:hover { transform: translateY(-5px); box-shadow: 0 24px 48px rgba(0,0,0,0.5); }
        .prod-card:hover img { transform: scale(1.06); }
        .prod-card img { transition: transform 0.5s ease; }
      `}</style>

      <SEOHead
        title="Aquecimento, Anti-Humidade e Conforto Térmico | Evoluimos Comércio"
        description="Soluções de aquecimento exterior e interior, eliminação de humidade nas paredes e arrefecimento natural. Tecnologia alemã, instalação sem obras, no Algarve e em Portugal."
        canonical="/"
        schemas={[generateLocalBusinessSchema(), generateOrganizationSchema()]}
      />

      {/* ── HERO ── */}
      <section
        aria-label="Apresentação"
        className="relative flex flex-col overflow-hidden"
        style={{ height: 'calc(100svh - 64px)', minHeight: '600px', background: 'radial-gradient(ellipse 85% 70% at 68% 32%, #1C0E00 0%, #120800 38%, #0C0500 65%, #0F0F11 100%)' }}
      >
        <HeroGraphic />
        <div className="relative z-10 flex flex-col justify-between h-full px-6 sm:px-12 lg:px-20 py-10 sm:py-14">
          <div className="flex flex-col items-center justify-center flex-1 text-center max-w-3xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
              <span className="ec-tag pjs mb-6 inline-block">Tecnologia Alemã</span>
              <h1 className="pjs" style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '20px' }}>
                Conforto Térmico<br /><span style={{ color: '#B84500' }}>Sustentável</span>
              </h1>
              <p className="pjs" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', color: '#B8B0A5', lineHeight: 1.75, marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
                Aquecimento, arrefecimento e proteção de edifícios. Soluções de alta tecnologia europeia para habitação e negócio.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="pjs" aria-label="Contactar via WhatsApp"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#16A34A', color: '#fff', padding: '14px 24px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', boxShadow: '0 0 28px rgba(22,163,74,0.3)' }}>
                  <MessageCircle style={{ width: '18px', height: '18px' }} aria-hidden="true" />WhatsApp
                </a>
                <Link to="/products" className="pjs"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#B84500', color: '#fff', padding: '14px 24px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', boxShadow: '0 0 28px rgba(184,69,0,0.35)' }}>
                  Ver Produtos<ArrowRight style={{ width: '18px', height: '18px' }} aria-hidden="true" />
                </Link>
                <Link to="/solutions" className="pjs"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.07)', color: '#EDE8E0', padding: '14px 24px', borderRadius: '12px', fontWeight: 600, fontSize: '15px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)' }}>
                  Soluções
                </Link>
              </div>
              <a href="tel:+351965026603" className="pjs" aria-label="Ligar para +351 965 026 603"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '11px 18px', textDecoration: 'none' }}>
                <div style={{ width: '38px', height: '38px', background: '#B84500', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone style={{ width: '18px', height: '18px', color: '#fff' }} aria-hidden="true" />
                </div>
                <span style={{ fontSize: '20px', fontWeight: 700, color: '#F0EBE3', letterSpacing: '0.02em' }}>+351 965 026 603</span>
              </a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '18px' }}>
            <p className="pjs" style={{ color: '#5A5450', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '10px' }}>Clientes de referência</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              {["McDonald's", "Grupo Avillez", "Sonae"].map(c => (
                <span key={c} className="pjs" style={{ color: '#6A6460', fontWeight: 700, fontSize: '14px' }}>{c}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── APPROACH + STATS ── */}
      <section aria-label="A nossa abordagem" style={{ background: 'linear-gradient(180deg, #111114 0%, #130900 55%, #111114 100%)', padding: 'clamp(64px, 9vw, 104px) 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

            {/* Label with lines */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px', justifyContent: 'center' }}>
              <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'rgba(184,69,0,0.4)' }} />
              <p className="pjs" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0A020', whiteSpace: 'nowrap' }}>A nossa abordagem</p>
              <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'rgba(184,69,0,0.4)' }} />
            </div>

            {/* Heading + text */}
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
              <h2 className="pjs" style={{ fontSize: 'clamp(1.55rem, 5vw, 2.8rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.15, marginBottom: '18px' }}>
                Complementaridade <span style={{ color: '#B84500' }}>é a chave.</span>
              </h2>
              <p className="pjs" style={{ fontSize: '16px', color: '#9A9490', lineHeight: 1.85 }}>
                Aquecer bem um espaço não depende só do aquecedor. Paredes húmidas, pontes térmicas e falta de isolamento triplicam os custos. Por isso reunimos soluções que trabalham juntas: eliminação de humidade, revestimento térmico, aquecimento eficiente e arrefecimento natural.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { n: 25, suffix: '+', label: 'Anos de\nexperiência' },
                { n: 10, suffix: '+', label: 'Grandes clientes\nnacionais' },
                { n: 7, suffix: '', label: 'Marcas\neuropeias' },
              ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  style={{ textAlign: 'center', padding: 'clamp(22px, 3vw, 36px) 12px', background: 'rgba(184,69,0,0.07)', border: '1px solid rgba(184,69,0,0.18)', borderRadius: '20px' }}>
                  <div className="pjs" style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)', fontWeight: 800, color: '#F0A020', lineHeight: 1, letterSpacing: '-0.02em' }}>
                    <CountUp target={s.n} suffix={s.suffix} />
                  </div>
                  <div className="pjs" style={{ fontSize: '13px', color: '#9A9490', marginTop: '10px', fontWeight: 500, lineHeight: 1.5, whiteSpace: 'pre-line' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── PRODUCTS overlay image cards ── */}
      <section aria-label="Os Nossos Produtos" style={{ background: '#0F0F11', padding: 'clamp(64px, 8vw, 100px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom: '48px' }}>
            <div style={{ width: '36px', height: '3px', background: '#B84500', borderRadius: '2px', marginBottom: '20px' }} />
            <h2 className="pjs" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.1, marginBottom: '12px' }}>
              Os Nossos Produtos
            </h2>
            <p className="pjs" style={{ color: '#9A9490', fontSize: '17px', lineHeight: 1.7, maxWidth: '480px' }}>
              Alta tecnologia europeia para aquecimento, arrefecimento e proteção de edifícios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.path} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.07 }}>
                  <Link to={p.path} className="prod-card" aria-label={`Ver produto ${p.name}`}>
                    <img src={p.img} alt={`${p.name} ${p.desc}`} loading="lazy"
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.objectPosition || 'center' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,7,0.95) 0%, rgba(5,5,7,0.55) 48%, rgba(5,5,7,0.08) 100%)' }} aria-hidden="true" />
                    <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#B84500', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon style={{ width: '16px', height: '16px', color: '#fff' }} aria-hidden="true" />
                      </div>
                      <span className="pjs" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>{p.tag}</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
                      <h3 className="pjs" style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '6px', lineHeight: 1.2 }}>{p.name}</h3>
                      <p className="pjs" style={{ color: 'rgba(255,255,255,0.72)', fontSize: '13px', lineHeight: 1.6, marginBottom: '14px' }}>{p.desc}</p>
                      <span className="pjs" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#F0A020', fontSize: '13px', fontWeight: 700 }}>
                        Saber mais <ArrowRight style={{ width: '14px', height: '14px' }} aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS 4 cards com descrição ── */}
      <section aria-label="Soluções" style={{ background: '#141417', padding: 'clamp(64px, 8vw, 100px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom: '52px', maxWidth: '640px' }}>
            <div style={{ width: '36px', height: '3px', background: '#B84500', borderRadius: '2px', marginBottom: '20px' }} />
            <h2 className="pjs" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#F5F0E8', lineHeight: 1.1, marginBottom: '16px' }}>
              Do frio ao calor,<br />
              <span style={{ color: '#B84500' }}>temos a solução certa</span>
            </h2>
            <p className="pjs" style={{ color: '#9A9490', fontSize: '17px', lineHeight: 1.75 }}>
              Aquecemos dentro e fora de casa, de forma sustentável, simples e económica. Cada problema tem um produto feito para o resolver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SOLUTIONS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.path} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.08 }}>
                  <Link to={s.path}
                    style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '26px 22px', background: '#1A1A1E', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '18px', textDecoration: 'none', transition: 'all 0.25s ease', height: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(184,69,0,0.45)'; e.currentTarget.style.background = '#1E1E24'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = '#1A1A1E'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(184,69,0,0.12)', border: '1px solid rgba(184,69,0,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon style={{ width: '22px', height: '22px', color: '#F0A020' }} aria-hidden="true" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="pjs" style={{ fontSize: '17px', fontWeight: 700, color: '#EDE8E0', marginBottom: '8px', lineHeight: 1.3 }}>{s.label}</h3>
                      <p className="pjs" style={{ fontSize: '14px', color: '#7A7470', lineHeight: 1.7 }}>{s.desc}</p>
                    </div>
                    <span className="pjs" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#F0A020', fontSize: '13px', fontWeight: 700 }}>
                      Saber mais <ArrowRight style={{ width: '14px', height: '14px' }} aria-hidden="true" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section aria-label="Contacto" style={{ background: 'linear-gradient(135deg, #8B3200 0%, #B84500 100%)', padding: 'clamp(60px, 7vw, 88px) 0' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <h2 className="pjs" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
              Pronto para começar?
            </h2>
            <p className="pjs" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '36px', fontSize: '17px', lineHeight: 1.6 }}>
              Análise gratuita, sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="pjs" aria-label="Contactar via WhatsApp"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#fff', color: '#14532D', padding: '15px 28px', borderRadius: '14px', fontWeight: 800, fontSize: '16px', textDecoration: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
                <MessageCircle style={{ width: '19px', height: '19px' }} aria-hidden="true" />
                WhatsApp
              </a>
              <a href="tel:+351965026603" className="pjs" aria-label="Ligar para +351 965 026 603"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'rgba(0,0,0,0.18)', color: '#fff', padding: '15px 28px', borderRadius: '14px', fontWeight: 700, fontSize: '16px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>
                <Phone style={{ width: '19px', height: '19px' }} aria-hidden="true" />
                +351 965 026 603
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
