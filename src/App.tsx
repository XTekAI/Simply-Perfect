'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Star, Gift, Calendar, Palette, Shirt, Coffee, PartyPopper, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import Hero from './components/ui/hero-alternative';
import Gallery from './components/ui/Gallery';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Inicio',    href: '#inicio' },
    { name: 'Nosotros',  href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería',   href: '#galeria' },
    { name: 'Reseñas',   href: '#resenas' },
    { name: 'Contacto',  href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <img
            src="/logo-principal.png"
            alt="Simply Perfect Honduras"
            className="h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="gumroad-btn">
              {link.name}
            </a>
          ))}
          <div className="checkbox-wrapper-5 ml-4">
            <div className="check">
              <input id="check-5" type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
              <label htmlFor="check-5"></label>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <div className="checkbox-wrapper-5">
            <div className="check">
              <input id="check-5-mobile" type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
              <label htmlFor="check-5-mobile"></label>
            </div>
          </div>
          <button className="text-gray-600 dark:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-pink-300 hover:text-pink-500 dark:hover:text-pink-400 py-2 block font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const About = () => {
  return (
    <section id="nosotros" className="py-24 pattern-background dark:opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 relative z-10">
              <img
                src="/elisa.jpeg"
                alt="Elisa López — Fundadora de Simply Perfect Honduras"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-brand-pink rounded-2xl -z-0" />
            <div className="absolute -top-6 -left-6 w-2/3 h-2/3 bg-brand-turquoise rounded-2xl -z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6 dark:text-pink-300">Conoce a Elisa López</h2>
            <h3 className="text-xl text-pink-500 dark:text-pink-400 font-medium mb-6">Fundadora y Directora Creativa</h3>
            <div className="space-y-4 text-gray-600 dark:text-pink-200/80 leading-relaxed">
              <p>
                Con más de 10 años de experiencia como diseñadora gráfica, fundé Simply Perfect en 2020 con una misión sencilla: ayudar a mis clientes a celebrar los momentos especiales de la vida con creaciones personalizadas que realmente hablen desde el corazón.
              </p>
              <p>
                Lo que comenzó como una pasión por hacer realidad las ideas se ha convertido en una boutique de servicio completo en Honduras, especializada en productos personalizados y organización de eventos. Creo que cada detalle importa y que los mejores diseños son los que cuentan una historia.
              </p>
              <p>
                Ya sea una taza para tu mejor amigo, camisetas para la reunión familiar o la decoración completa de tu boda soñada, pongo todo mi corazón en cada proyecto para asegurarme de que sea, simplemente, perfecto.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-pink-900/40 grid grid-cols-3 gap-8 text-center">
              <div>
                <span className="block text-3xl font-serif font-bold text-gray-900 dark:text-pink-300">10+</span>
                <span className="text-sm text-gray-500 dark:text-pink-400/70 uppercase tracking-wider">Años de Exp.</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-gray-900 dark:text-pink-300">2020</span>
                <span className="text-sm text-gray-500 dark:text-pink-400/70 uppercase tracking-wider">Fundada</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-gray-900 dark:text-pink-300">150+</span>
                <span className="text-sm text-gray-500 dark:text-pink-400/70 uppercase tracking-wider">Clientes Felices</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

type ServiceDetail = {
  title: string;
  icon: React.ReactNode;
  accent: string;
  tagline: string;
  description: string;
  includes: string[];
  note?: string;
};

const serviceDetails: ServiceDetail[] = [
  {
    title: 'Tazas Personalizadas',
    icon: <Coffee size={36} />,
    accent: 'pink',
    tagline: 'Comienza el día con tu toque especial',
    description:
      'Diseñamos tazas únicas con tu foto, nombre, mensaje o arte personalizado. Perfectas para regalar en cumpleaños, graduaciones, San Valentín, Navidad o como detalle corporativo. Cada taza es impresa con técnica de sublimación de alta calidad que garantiza colores vivos y durables.',
    includes: [
      'Diseño personalizado incluido',
      'Sublimación en cerámica de alta calidad',
      'Disponible en tazas individuales o sets',
      'Ideal para regalos, empresas y eventos',
      'Empaque especial a solicitud',
    ],
    note: '⚠️ Se requiere el pago del 100% por adelantado para confirmar y comenzar tu pedido.',
  },
  {
    title: 'Ropa Personalizada',
    icon: <Shirt size={36} />,
    accent: 'pink',
    tagline: 'Tu estilo, tu diseño, tu identidad',
    description:
      'Camisetas, gorras, sudaderas y más, diseñados exclusivamente para ti, tu familia, equipo o empresa. Usamos técnicas de sublimación y DTF para garantizar diseños nítidos, colores intensos y larga durabilidad. Ideales para reuniones familiares, equipos deportivos, eventos empresariales y regalos especiales.',
    includes: [
      'Camisetas, gorras, sudaderas y más',
      'Impresión por sublimación o DTF',
      'Sin mínimo de piezas para pedidos personales',
      'Descuentos por volumen para pedidos corporativos',
      'Diseño personalizado incluido',
    ],
    note: '⚠️ Se requiere el pago del 100% por adelantado para confirmar y comenzar tu pedido.',
  },
  {
    title: 'Regalos Únicos',
    icon: <Gift size={36} />,
    accent: 'pink',
    tagline: 'El regalo perfecto siempre tiene un toque personal',
    description:
      'Creamos artículos personalizados para cada ocasión especial: cumpleaños, bodas, baby showers, graduaciones, San Valentín y más. Desde almohadas y portarretratos hasta sets de regalo completos, cada detalle es pensado con cuidado para que la persona que lo recibe se sienta verdaderamente especial.',
    includes: [
      'Almohadas, marcos, portarretratos y más',
      'Sets de regalo personalizados',
      'Empaque y presentación incluida',
      'Personalización con fotos, nombres y fechas',
      'Ideal para cualquier celebración',
    ],
    note: '⚠️ Se requiere el pago del 100% por adelantado para confirmar y comenzar tu pedido.',
  },
  {
    title: 'Organización de Eventos',
    icon: <Calendar size={36} />,
    accent: 'teal',
    tagline: 'Tú disfruta, nosotros nos encargamos de todo',
    description:
      'Planificamos y coordinamos tu evento de principio a fin para que solo tengas que disfrutar. Desde cumpleaños íntimos hasta celebraciones grandes, nos encargamos de cada detalle: logística, decoración, proveedores y montaje. Trabajamos contigo para hacer realidad la celebración exacta que imaginaste.',
    includes: [
      'Coordinación completa del evento',
      'Selección y gestión de proveedores',
      'Diseño y montaje de decoración',
      'Acompañamiento el día del evento',
      'Asesoría personalizada desde el primer contacto',
    ],
    note: '⚠️ Para confirmar la fecha de tu evento se requiere el pago del 100% por adelantado.',
  },
  {
    title: 'Diseño de Decoración',
    icon: <Palette size={36} />,
    accent: 'teal',
    tagline: 'Ambientes que cuentan tu historia',
    description:
      'Creamos conceptos visuales únicos adaptados a tu temática, colores y estilo. Diseñamos la decoración completa para tu evento: centros de mesa, fondos fotográficos, arreglos florales, mesas de dulces y más. Cada espacio es pensado como una experiencia visual que complementa la celebración.',
    includes: [
      'Concepto y moodboard personalizado',
      'Centros de mesa y arreglos florales',
      'Fondos y backdrops decorativos',
      'Letreros, caballetes y elementos de bienvenida',
      'Mesas de dulces y postres decoradas',
    ],
    note: '⚠️ Para confirmar la fecha de tu evento se requiere el pago del 100% por adelantado.',
  },
  {
    title: 'Souvenirs y Detalles',
    icon: <PartyPopper size={36} />,
    accent: 'teal',
    tagline: 'Recuerdos que tus invitados guardarán para siempre',
    description:
      'Diseñamos y producimos los souvenirs y detalles personalizados que harán que tu evento sea inolvidable. Menús, tarjetas de lugar, etiquetas, bolsas de regalo y más, todos coordinados con la temática de tu celebración. Cada pieza es un recuerdo tangible de un momento especial.',
    includes: [
      'Menús y tarjetas de lugar personalizadas',
      'Etiquetas y stickers para detalles',
      'Bolsas y cajas de regalo decoradas',
      'Coordinados con la temática del evento',
      'Disponible en distintas cantidades',
    ],
    note: '⚠️ Para confirmar la fecha de tu evento se requiere el pago del 100% por adelantado.',
  },
];

const ServiceModal = ({ service, onClose }: { service: ServiceDetail; onClose: () => void }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.28 }}
        className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`px-8 pt-8 pb-6 ${service.accent === 'teal' ? 'bg-teal-50 dark:bg-teal-950/40' : 'bg-pink-50 dark:bg-pink-950/40'}`}>
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${service.accent === 'teal' ? 'bg-teal-100 dark:bg-teal-900/60 text-teal-500' : 'bg-pink-100 dark:bg-pink-900/60 text-pink-500'}`}>
            {service.icon}
          </div>
          <h3 className="font-serif font-bold text-2xl text-gray-900 dark:text-pink-200 mb-1">{service.title}</h3>
          <p className={`text-sm font-medium ${service.accent === 'teal' ? 'text-teal-500' : 'text-pink-500'}`}>{service.tagline}</p>
        </div>

        {/* Body */}
        <div className="px-8 py-6 space-y-5 max-h-[55vh] overflow-y-auto">
          <p className="text-gray-600 dark:text-pink-200/80 leading-relaxed text-sm">{service.description}</p>

          <div>
            <p className="font-semibold text-gray-800 dark:text-pink-300 text-sm mb-3">¿Qué incluye?</p>
            <ul className="space-y-2">
              {service.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-pink-200/70">
                  <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold ${service.accent === 'teal' ? 'bg-teal-400' : 'bg-pink-400'}`}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {service.note && (
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 rounded-xl p-4">
              <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">{service.note}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 pb-7 pt-2 flex gap-3">
          <a href="#contacto" onClick={onClose} className="flex-1 btn-custom text-center text-sm py-3">
            Solicitar Cotización
          </a>
          <button
            onClick={onClose}
            className="px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-pink-300 hover:border-pink-300 transition-colors text-sm font-medium"
          >
            Cerrar
          </button>
        </div>

        {/* Close X */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors shadow-sm"
        >
          <X size={16} />
        </button>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const Services = () => {
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);

  const products = [
    { icon: <Coffee size={32} />, title: "Tazas Personalizadas",    desc: "Comienza tu día con un toque único y personal." },
    { icon: <Shirt size={32} />,  title: "Ropa Personalizada",      desc: "Camisetas, gorras y sudaderas diseñadas para ti." },
    { icon: <Gift size={32} />,   title: "Regalos Únicos",          desc: "Artículos personalizados para cualquier ocasión." },
  ];

  const events = [
    { icon: <Calendar size={32} />,    title: "Organización de Eventos",  desc: "Coordinación completa para celebraciones sin estrés." },
    { icon: <Palette size={32} />,     title: "Diseño de Decoración",     desc: "Conceptos visuales únicos adaptados a tu temática." },
    { icon: <PartyPopper size={32} />, title: "Souvenirs y Detalles",     desc: "Recuerdos especiales e inolvidables para tus invitados." },
  ];

  const openService = (title: string) => {
    const detail = serviceDetails.find(s => s.title === title);
    if (detail) setActiveService(detail);
  };

  return (
    <section id="servicios" className="py-24 bg-stone-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4 dark:text-pink-300">Nuestros Servicios y Productos</h2>
          <p className="text-gray-600 dark:text-pink-200/70 max-w-2xl mx-auto">
            Desde regalos tangibles hasta recuerdos inolvidables, creamos todo con precisión y amor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-semibold mb-8 text-center flex items-center justify-center gap-3 dark:text-pink-300">
              <span className="w-8 h-px bg-pink-300"></span>
              Productos Personalizados
              <span className="w-8 h-px bg-pink-300"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {products.map((item, idx) => (
                <div key={idx} className="service-card group cursor-pointer" onClick={() => openService(item.title)}>
                  <div className="service-card-new-filter"><p>NUEVO</p></div>
                  <div className="service-card-bright-filter"></div>
                  <div className="service-card-top">
                    <div className="scale-150 text-pink-500">{item.icon}</div>
                  </div>
                  <div className="service-card-bottom">
                    <div>
                      <p className="service-card-bottom-title">{item.title}</p>
                      <p className="service-card-bottom-desc">{item.desc}</p>
                    </div>
                    <div className="text-right text-xs font-bold uppercase tracking-wider mt-2 opacity-60">Ver Detalles →</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif font-semibold mb-8 text-center flex items-center justify-center gap-3 dark:text-pink-300">
              <span className="w-8 h-px bg-teal-300"></span>
              Servicios de Eventos
              <span className="w-8 h-px bg-teal-300"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {events.map((item, idx) => (
                <div key={idx} className="service-card group cursor-pointer" onClick={() => openService(item.title)}>
                  <div className="service-card-new-filter bg-teal-400!"><p>NUEVO</p></div>
                  <div className="service-card-bright-filter"></div>
                  <div className="service-card-top text-teal-500!">
                    <div className="scale-150">{item.icon}</div>
                  </div>
                  <div className="service-card-bottom text-teal-500!">
                    <div>
                      <p className="service-card-bottom-title">{item.title}</p>
                      <p className="service-card-bottom-desc">{item.desc}</p>
                    </div>
                    <div className="text-right text-xs font-bold uppercase tracking-wider mt-2 opacity-60">Ver Detalles →</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {activeService && <ServiceModal service={activeService} onClose={() => setActiveService(null)} />}
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "María García",
      text: "Elisa convirtió nuestra visión en realidad. Todo estuvo hermoso y perfectamente organizado. ¡La mejor en Honduras!",
      rating: 5,
    },
    {
      name: "Carlos Hernández",
      text: "Las camisetas para la reunión familiar fueron un éxito total. Excelente calidad y servicio rápido. Los recomiendo al 100%.",
      rating: 5,
    },
    {
      name: "Sofía & Roberto",
      text: "Simply Perfect hizo nuestro día de bodas completamente sin estrés. La decoración fue impresionante. ¡Gracias Elisa!",
      rating: 5,
    },
  ];

  return (
    <section id="resenas" className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 dark:text-pink-300">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-600 dark:text-pink-200/70">No solo lo decimos nosotros — lo dicen ellos.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="review-card"
              data-review={`"${review.text}"`}
            >
              <div className="flex flex-col items-center gap-4 p-6 z-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-100 to-teal-100 flex items-center justify-center text-pink-500 font-bold text-xl shadow-inner">
                  {review.name.charAt(0)}
                </div>
                <div className="text-center">
                  <h3 className="font-serif font-bold text-xl mb-1">{review.name}</h3>
                  <div className="flex text-yellow-400 justify-center">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-4">Pasa el cursor para leer</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-stone-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6 dark:text-pink-300">Hagamos tu Visión Simplemente Perfecta</h2>
            <p className="text-gray-600 dark:text-pink-200/70 mb-8">
              ¿Listo para comenzar a planificar tu evento o diseñar tu producto personalizado? Escríbenos y te respondemos a la brevedad.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="uiverse-tooltip-container">
                <span className="uiverse-tooltip-trigger">
                  <a href="mailto:Simplyperfect.lce@gmail.com" className="p-2 bg-pink-50 rounded-full text-pink-500 block"><Mail size={20} /></a>
                  <span className="text-sm font-medium dark:text-pink-300">Correo</span>
                </span>
                <span className="uiverse-tooltip-content">Simplyperfect.lce@gmail.com</span>
              </div>

              <div className="uiverse-tooltip-container">
                <span className="uiverse-tooltip-trigger">
                  <a href="https://wa.link/4ylqr2" target="_blank" rel="noopener noreferrer" className="p-2 bg-teal-50 rounded-full text-teal-500 block"><Phone size={20} /></a>
                  <span className="text-sm font-medium dark:text-pink-300">WhatsApp</span>
                </span>
                <span className="uiverse-tooltip-content">Escríbenos por WhatsApp</span>
              </div>

              <div className="uiverse-tooltip-container">
                <span className="uiverse-tooltip-trigger">
                  <a href="https://www.facebook.com/share/1DMj7je36M/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-50 rounded-full text-blue-600 block"><Facebook size={20} /></a>
                  <span className="text-sm font-medium dark:text-pink-300">Facebook</span>
                </span>
                <span className="uiverse-tooltip-content">Simply Perfect HN</span>
              </div>

              <div className="uiverse-tooltip-container">
                <span className="uiverse-tooltip-trigger">
                  <a href="https://www.instagram.com/simplyperf_lce/" target="_blank" rel="noopener noreferrer" className="p-2 bg-pink-50 rounded-full text-pink-600 block"><Instagram size={20} /></a>
                  <span className="text-sm font-medium dark:text-pink-300">Instagram</span>
                </span>
                <span className="uiverse-tooltip-content">@simplyperf_lce</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8">
              <a
                href="https://wa.link/4ylqr2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-colors shadow-md shadow-emerald-200 dark:shadow-emerald-900/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                Escríbenos por WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-pink-300 mb-2">Nombre</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all text-base" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-pink-300 mb-2">Correo</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all text-base" placeholder="Simplyperfect.lce@gmail.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-pink-300 mb-2">Teléfono / WhatsApp</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all text-base" placeholder="+504 0000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-pink-300 mb-2">Fecha del Evento (Opcional)</label>
                <input type="date" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all text-base" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-pink-300 mb-2">Tipo de Servicio</label>
              <select className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all text-base">
                <option>Ropa Personalizada</option>
                <option>Organización de Eventos</option>
                <option>Regalos Únicos</option>
                <option>Tazas Personalizadas</option>
                <option>Souvenirs y Detalles</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-pink-300 mb-2">Mensaje</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all text-base" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
            </div>
            <button className="w-full btn-custom justify-center">
              Enviar Mensaje
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif font-bold mb-2 dark:text-pink-300">Simply Perfect</h3>
          <p className="text-gray-400 dark:text-pink-400/60 text-sm">Honduras · © 2026 Simply Perfect. Todos los derechos reservados.</p>
        </div>
        <div className="flex gap-4 text-sm text-gray-400 dark:text-pink-400/60">
          <a href="/privacidad" target="_blank" rel="noopener noreferrer" className="gumroad-btn">Privacidad</a>
          <a href="/terminos" target="_blank" rel="noopener noreferrer" className="gumroad-btn">Términos</a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-800 text-center">
        <a
          href="https://www.xtekai.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200"
        >
          <span>Diseñado y desarrollado por</span>
          <span className="font-semibold tracking-wide text-gray-400 hover:text-white transition-colors">XTekAI</span>
        </a>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-gray-950 text-gray-800 dark:text-pink-100 font-sans selection:bg-pink-200 selection:text-pink-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
