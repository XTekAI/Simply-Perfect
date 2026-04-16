"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-50 dark:bg-gray-950 pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-pink/40 dark:bg-brand-pink/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, -60, 0], x: [0, -50, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-turquoise/40 dark:bg-brand-turquoise/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-[80px]"
        />
      </div>

      <main className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <div className="text-center">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm mb-6 relative border border-pink-100 dark:border-pink-900 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-pink-600 dark:text-pink-400 text-xs font-bold tracking-widest uppercase relative z-10">
              Desde 2020 · Honduras
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 dark:text-pink-200 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creaciones Personalizadas &{" "}
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-teal-400"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Eventos Simplemente Perfectos
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-xl text-gray-600 dark:text-pink-200/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Ropa personalizada, regalos únicos y eventos inolvidables diseñados con cuidado y creatividad para Honduras.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <a href="#galeria" className="btn-custom">Ver Nuestros Trabajos</a>
            <a href="#contacto" className="btn-custom">Solicitar Cotización</a>
          </motion.div>
        </div>
      </main>

      {/* Rotating Badge */}
      <div className="absolute bottom-8 right-8 z-30 hidden md:block">
        <div className="relative w-24 h-24 flex items-center justify-center bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-full border border-white/50 dark:border-gray-700/50 shadow-lg">
          <div className="absolute inset-0 rounded-full border border-pink-200/50 dark:border-pink-800/50 m-1"></div>
          <motion.svg
            className="absolute inset-0 w-full h-full p-1"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-[10px] fill-gray-600 dark:fill-gray-300 font-medium uppercase tracking-widest">
              <textPath href="#circle" startOffset="0%">
                Simply Perfect • Honduras 2020 • Simply Perfect •
              </textPath>
            </text>
          </motion.svg>
          <div className="text-pink-500 dark:text-pink-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
