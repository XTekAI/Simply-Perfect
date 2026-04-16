'use client'
import { motion } from 'motion/react';

const links = [
  {
    label: 'Visita nuestro sitio web',
    sublabel: 'simplyperfecthn.com',
    href: 'https://simplyperfecthn.com',
    iconBg: 'bg-pink-400/30',
    iconColor: '#f9a8d4',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: 'Síguenos en Instagram',
    sublabel: '@simplyperf_lce',
    href: 'https://www.instagram.com/simplyperf_lce/',
    iconBg: 'bg-fuchsia-400/30',
    iconColor: '#e879f9',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Escríbenos por WhatsApp',
    sublabel: 'Chatea con nosotros',
    href: 'https://wa.link/okweei',
    iconBg: 'bg-teal-400/30',
    iconColor: '#5eead4',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'Encuéntranos en Facebook',
    sublabel: 'Simply Perfect HN',
    href: 'https://www.facebook.com/share/1DMj7je36M/?mibextid=wwXIfr',
    iconBg: 'bg-sky-400/30',
    iconColor: '#7dd3fc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'Envíanos un correo',
    sublabel: 'Simplyperfect.lce@gmail.com',
    href: 'mailto:Simplyperfect.lce@gmail.com',
    iconBg: 'bg-rose-400/30',
    iconColor: '#fda4af',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function QRLinktree() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1a0a14 0%, #2d1225 40%, #0f1f20 100%)' }}
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-[-120px] left-[-80px] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-120px] right-[-80px] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-[40%] left-[60%] w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-sm flex flex-col items-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-5"
        >
          <div
            className="w-24 h-24 rounded-full border-2 flex items-center justify-center overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.10)',
              borderColor: 'rgba(249,168,212,0.4)',
              boxShadow: '0 0 40px rgba(236,72,153,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
          >
            <img
              src="/logo-principal.png"
              alt="Simply Perfect"
              className="w-20 h-16 object-contain"
            />
          </div>
          <div
            className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full border-2 border-[#1a0a14] flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #2dd4bf, #14b8a6)' }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </motion.div>

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="font-serif font-bold text-3xl tracking-tight mb-1"
          style={{ color: '#fdf2f8' }}
        >
          Simply Perfect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-xs uppercase tracking-[0.25em] mb-10"
          style={{ color: 'rgba(249,168,212,0.6)' }}
        >
          Custom Gifts &amp; Events
        </motion.p>

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.1 }}
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.975 }}
              className="relative flex items-center gap-4 w-full px-4 py-3.5 rounded-2xl transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.10)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,168,212,0.25)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)';
              }}
            >
              {/* Icon */}
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${link.iconBg}`}
                style={{ color: link.iconColor }}
              >
                {link.icon}
              </div>

              {/* Text */}
              <div className="flex-1 text-left min-w-0">
                <span className="block text-sm font-semibold leading-tight" style={{ color: '#fdf2f8' }}>
                  {link.label}
                </span>
                <span className="block text-xs mt-0.5 truncate" style={{ color: 'rgba(249,168,212,0.55)' }}>
                  {link.sublabel}
                </span>
              </div>

              {/* Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="flex-shrink-0"
                style={{ color: 'rgba(249,168,212,0.4)' }}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-10 text-xs"
          style={{ color: 'rgba(249,168,212,0.3)' }}
        >
          © 2026 Simply Perfect · Est. 2020
        </motion.p>
      </motion.div>
    </div>
  );
}
