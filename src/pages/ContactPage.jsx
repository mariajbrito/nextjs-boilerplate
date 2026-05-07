import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import Breadcrumb from '@/components/Breadcrumb';
import { WA_URL as WA, COMPANY } from '@/config/company';
import { generateLocalBusinessSchema, generateContactSchema } from '@/utils/schemaMarkup';

const CONTACT_ITEMS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: COMPANY.phone,
    sub: 'A forma mais rápida',
    href: null, // handled separately as main CTA
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: COMPANY.phone,
    sub: 'Rede móvel nacional',
    href: `tel:${COMPANY.phoneBare}`,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    icon: Mail,
    label: 'Email',
    value: COMPANY.email,
    sub: 'Resposta em 24h úteis',
    href: `mailto:${COMPANY.email}`,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: COMPANY.address.city,
    sub: `${COMPANY.address.postalCode} · ${COMPANY.address.country}`,
    href: null,
    color: 'text-gray-400',
    bg: 'bg-gray-500/10',
  },
];

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    const subject = encodeURIComponent(form.subject || 'Contacto via site');
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\nTelefone: ${form.phone || 'Não indicado'}\n\n${form.message}`
    );
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 500);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all";

  return (
    <form onSubmit={handleSubmit} aria-label="Formulário de contacto" className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Nome <span className="text-red-500">*</span>
          </label>
          <input id="contact-name" name="name" type="text" required value={form.name}
            onChange={handleChange} placeholder="O seu nome" autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input id="contact-email" name="email" type="email" required value={form.email}
            onChange={handleChange} placeholder="email@exemplo.com" autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Telefone</label>
          <input id="contact-phone" name="phone" type="tel" value={form.phone}
            onChange={handleChange} placeholder="+351 900 000 000" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-subject" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Assunto <span className="text-red-500">*</span>
          </label>
          <select id="contact-subject" name="subject" required value={form.subject}
            onChange={handleChange} className={inputClass}>
            <option value="">Selecione...</option>
            <option value="Pedido de orçamento">Pedido de orçamento</option>
            <option value="Informações sobre produtos">Informações sobre produtos</option>
            <option value="Serviços imobiliários">Serviços imobiliários</option>
            <option value="Outro assunto">Outro assunto</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Mensagem <span className="text-red-500">*</span>
        </label>
        <textarea id="contact-message" name="message" required rows={5} value={form.message}
          onChange={handleChange} placeholder="Descreva o que procura, o espaço, ou a sua dúvida..."
          className={`${inputClass} resize-y`} />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
        <p className="text-xs text-gray-400">
          Dados tratados conforme a{' '}
          <Link to="/privacy-policy" className="text-orange-600 hover:underline">Política de Privacidade</Link>.
        </p>
        <button type="submit" disabled={status === 'sending'}
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors disabled:opacity-60 whitespace-nowrap">
          <Send className="w-4 h-4" />
          {status === 'sending' ? 'A enviar...' : 'Enviar Mensagem'}
        </button>
      </div>

      {status === 'sent' && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium" role="status">
          Mensagem preparada. Se o cliente de email não abriu automaticamente, contacte-nos via WhatsApp.
        </motion.div>
      )}
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Pedir Análise Gratuita ao Imóvel | Contactos"
        description="Análise gratuita ao seu projeto de aquecimento, humidade ou arrefecimento. Fale connosco por WhatsApp, telefone ou email. Atendimento em todo o Portugal."
        canonical="/contact"
        schemas={[generateLocalBusinessSchema(), generateContactSchema()]}
      />
      <div className="min-h-screen bg-gray-50 pt-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          <Breadcrumb items={[{ label: 'Início', path: '/' }, { label: 'Contactos', path: '/contact' }]} />

          {/* Page header */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">Contactos</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2 mb-3 tracking-tight">Fale Connosco</h1>
            <p className="text-gray-500 max-w-md">
              Respondemos rapidamente. A forma mais cómoda é via WhatsApp.
            </p>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* LEFT — Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-4"
            >
              {/* WhatsApp CTA */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-extrabold text-white">WhatsApp</div>
                    <div className="text-gray-400 text-xs">Resposta em minutos</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-5">
                  Envie fotos, vídeos ou descreva o seu caso, respondemos rapidamente.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Abrir WhatsApp
                </a>
              </div>

              {/* Other contact methods */}
              <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100 overflow-hidden">
                {CONTACT_ITEMS.slice(1).map((c, i) => {
                  const Icon = c.icon;
                  const inner = (
                    <div className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                      <div className={`w-9 h-9 ${c.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-4 h-4 ${c.color}`} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{c.label}</div>
                        <div className="font-semibold text-gray-900 text-sm truncate">{c.value}</div>
                        <div className="text-gray-500 text-xs">{c.sub}</div>
                      </div>
                    </div>
                  );
                  return c.href
                    ? <a key={i} href={c.href} aria-label={`${c.label}: ${c.value}`}>{inner}</a>
                    : <div key={i}>{inner}</div>;
                })}
              </div>

              {/* Quick links */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">Pode também interessar</p>
                <div className="space-y-2">
                  {[
                    { label: 'Perguntas Frequentes', path: '/faqs' },
                    { label: 'Os Nossos Produtos', path: '/products' },
                    { label: 'Sobre Nós', path: '/about' },
                  ].map(link => (
                    <Link key={link.path} to={link.path}
                      className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-orange-100 hover:border-orange-300 hover:shadow-sm transition-all group">
                      <span className="font-semibold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">{link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8"
            >
              <h2 className="text-xl font-extrabold text-gray-900 mb-1">Envie-nos uma mensagem</h2>
              <p className="text-gray-500 text-sm mb-6">Preencha o formulário e respondemos o mais breve possível.</p>
              <ContactForm />
            </motion.div>
          </div>

          {/* Footer info */}
          <p className="text-center text-gray-400 text-sm mt-10">
            {COMPANY.legalName} · NIF {COMPANY.nif}
          </p>
        </div>
      </div>
    </>
  );
}
