'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  { id: 'todos',    label: 'Todos' },
  { id: 'eventos',  label: 'Eventos' },
  { id: 'regalos',  label: 'Regalos y Detalles' },
];

type GalleryItem = {
  id: number;
  category: string;
  src: string;
  title: string;
  desc: string;
};

const galleryItems: GalleryItem[] = [
  // ── EVENTOS ──────────────────────────────────────────────────
  {
    id: 1,
    category: 'eventos',
    src: '/galeria/evento-01.png',
    title: 'Mesa en la Playa',
    desc: 'Decoración frente al mar · Cumpleaños Ana\'s 20',
  },
  {
    id: 3,
    category: 'eventos',
    src: '/galeria/evento-03.jpg',
    title: 'Mesa con Girasoles',
    desc: 'Decoración en tonos amarillos y rosa',
  },
  {
    id: 4,
    category: 'eventos',
    src: '/galeria/evento-04.jpg',
    title: 'Detalle Mesa Floral',
    desc: 'Centro de mesa con girasoles y baby\'s breath',
  },
  {
    id: 7,
    category: 'eventos',
    src: '/galeria/evento-07.jpg',
    title: 'Banquete Frente al Mar',
    desc: 'Mesa larga decorada con flores rosadas en la playa',
  },
  {
    id: 8,
    category: 'eventos',
    src: '/galeria/evento-08.jpg',
    title: 'Decoración Interior Elegante',
    desc: 'Gerberas rosas y blancas · Sillas Chiavari doradas',
  },
  {
    id: 9,
    category: 'eventos',
    src: '/galeria/evento-09.jpg',
    title: 'Centro de Mesa Premium',
    desc: 'Arreglo floral en tonos rosados y blancos',
  },
  {
    id: 10,
    category: 'eventos',
    src: '/galeria/evento-10.jpg',
    title: 'Bienvenida K & G',
    desc: 'Caballete con iniciales y flores para boda',
  },
  {
    id: 11,
    category: 'eventos',
    src: '/galeria/evento-11.jpg',
    title: 'Salón de Boda K & G',
    desc: 'Vista completa del montaje · Salón y bienvenida',
  },
  {
    id: 12,
    category: 'eventos',
    src: '/galeria/evento-12.jpg',
    title: 'Mesa Romántica',
    desc: 'Gerberas y flores silvestres en tonos rosas',
  },
  {
    id: 13,
    category: 'eventos',
    src: '/galeria/evento-13.jpg',
    title: 'Instalación Hello Pretty',
    desc: 'Montaje de letras decorativas para evento',
  },
  {
    id: 14,
    category: 'eventos',
    src: '/galeria/evento-14.jpg',
    title: 'Mesa Piso Boho',
    desc: 'Estilo pallet con cojines y flores rosas',
  },
  {
    id: 15,
    category: 'eventos',
    src: '/galeria/evento-15.jpg',
    title: 'Tessa\'s 22 Birthday',
    desc: 'Mesa picnic con globos Happy Birthday',
  },
  // ── REGALOS Y DETALLES ───────────────────────────────────────
  {
    id: 2,
    category: 'regalos',
    src: '/galeria/evento-02.jpg',
    title: 'Menú Personalizado',
    desc: 'Tarjeta especial · Isa\'s Last Twenties',
  },
  {
    id: 5,
    category: 'regalos',
    src: '/galeria/evento-05.jpg',
    title: 'Detalle de Cumpleaños',
    desc: 'Tarjeta personalizada · Ana\'s 20 Birthday',
  },
  {
    id: 6,
    category: 'regalos',
    src: '/galeria/evento-06.jpg',
    title: 'Platos con Tarjeta',
    desc: 'Souvenirs personalizados para cada invitado',
  },
  {
    id: 16,
    category: 'regalos',
    src: '/galeria/regalo-01.jpg',
    title: 'Tarjetas San Valentín',
    desc: 'Tarjetas personalizadas con crayones · Whale & Dino',
  },
  {
    id: 17,
    category: 'regalos',
    src: '/galeria/regalo-02.jpg',
    title: 'Stickers Personalizados',
    desc: 'Diseño de Crocs con control · "You Rock My World"',
  },
  {
    id: 18,
    category: 'regalos',
    src: '/galeria/regalo-03.jpg',
    title: 'Canasta San Valentín',
    desc: 'Caja kraft con flores y golosinas · "Will You Be My Valentine?"',
  },
  {
    id: 19,
    category: 'regalos',
    src: '/galeria/regalo-04.jpg',
    title: 'Gift Box Romántico',
    desc: 'Caja decorada con fotos y productos · "You & Me"',
  },
  {
    id: 20,
    category: 'regalos',
    src: '/galeria/regalo-05.jpg',
    title: 'Caja "You & Me"',
    desc: 'Caja kraft con moño rojo y foto polaroid personalizada',
  },
  {
    id: 21,
    category: 'regalos',
    src: '/galeria/regalo-06.jpg',
    title: 'Box "Love You" Completo',
    desc: 'Caja abierta con fotos, cervezas y snacks personalizados',
  },
  {
    id: 22,
    category: 'regalos',
    src: '/galeria/regalo-07.jpg',
    title: 'Botella con Flores',
    desc: 'Botella personalizada con arreglo floral y foto',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = activeCategory === 'todos'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeCategory);

  return (
    <section id="galeria" className="py-24 bg-stone-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold mb-4 dark:text-pink-300">Nuestra Galería</h2>
          <p className="text-gray-600 dark:text-pink-200/70 max-w-xl mx-auto">
            Una muestra de los trabajos que hacemos con amor para cada cliente. Cada pieza es única.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-pink-500 border-pink-500 text-white shadow-md shadow-pink-200 dark:shadow-pink-900/40'
                  : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-pink-300 hover:border-pink-400 hover:text-pink-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md cursor-pointer bg-gray-100 dark:bg-gray-800 mb-4"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-serif font-bold text-sm leading-tight">{item.title}</p>
                  <p className="text-white/70 text-xs mt-0.5">{item.desc}</p>
                </div>
                {/* Category pill */}
                <div className="absolute top-3 left-3 bg-white/85 dark:bg-gray-900/85 backdrop-blur-sm text-pink-500 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {categories.find(c => c.id === item.category)?.label}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 dark:text-pink-300/70 mb-4 text-sm">¿Te gustó algún trabajo? Podemos hacer algo único para ti.</p>
          <a href="#contacto" className="btn-custom">Pedir Cotización</a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="relative max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full object-cover max-h-[80vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-serif font-bold text-xl">{lightbox.title}</h3>
                <p className="text-white/70 text-sm mt-1">{lightbox.desc}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors text-lg"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
