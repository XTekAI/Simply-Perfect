import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Star, Gift, Calendar, Palette, Shirt, Coffee, PartyPopper, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import Hero from './components/ui/hero-alternative';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-pink-100 to-teal-100 rounded-full border border-white shadow-sm group-hover:shadow-md transition-all duration-300">
            <span className="font-serif font-bold text-xl text-pink-500 italic">S</span>
            <span className="font-serif font-bold text-xl text-teal-500 italic absolute left-4 top-1 opacity-80">P</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl text-gray-800 dark:text-white tracking-tight leading-none group-hover:text-pink-500 transition-colors">Simply Perfect</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium leading-none mt-1 group-hover:text-teal-400 transition-colors">Est. 2020</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="gumroad-btn"
            >
              {link.name}
            </a>
          ))}
          
          {/* Dark Mode Toggle */}
          <div className="checkbox-wrapper-5 ml-4">
            <div className="check">
              <input 
                id="check-5" 
                type="checkbox" 
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
              />
              <label htmlFor="check-5"></label>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <div className="checkbox-wrapper-5">
            <div className="check">
              <input 
                id="check-5-mobile" 
                type="checkbox" 
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
              />
              <label htmlFor="check-5-mobile"></label>
            </div>
          </div>
          <button
            className="text-gray-600 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
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
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 py-2 block font-medium"
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
    <section id="about" className="py-24 pattern-background dark:opacity-90">
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
                src="https://picsum.photos/seed/elisa/800/1000" 
                alt="Elisa López" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
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
            <h2 className="text-4xl font-serif font-bold mb-6 dark:text-white">Meet Elisa López</h2>
            <h3 className="text-xl text-pink-500 font-medium mb-6">Founder & Creative Director</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                With over 10 years of experience as a graphic designer, I founded Simply Perfect in 2020 with a simple mission: to help clients celebrate life’s special moments with personalized creations that truly speak from the heart.
              </p>
              <p>
                What started as a passion for bringing ideas to life has grown into a full-service boutique for custom products and event planning. I believe that every detail matters, and that the best designs are the ones that tell a story.
              </p>
              <p>
                Whether it's a custom mug for a best friend, personalized shirts for a family reunion, or the complete decoration for your dream wedding, I pour my heart into every project to ensure it is, quite simply, perfect.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 grid grid-cols-3 gap-8 text-center">
              <div>
                <span className="block text-3xl font-serif font-bold text-gray-900 dark:text-white">10+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Years Exp</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-gray-900 dark:text-white">2020</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Founded</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-gray-900 dark:text-white">500+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const products = [
    { icon: <Coffee size={32} />, title: "Custom Mugs", desc: "Start your day with a personalized touch." },
    { icon: <Shirt size={32} />, title: "Custom Apparel", desc: "T-shirts, caps, and hoodies designed for you." },
    { icon: <Gift size={32} />, title: "Unique Gifts", desc: "Thoughtful personalized items for any occasion." },
  ];

  const events = [
    { icon: <Calendar size={32} />, title: "Event Planning", desc: "Full coordination for stress-free celebrations." },
    { icon: <Palette size={32} />, title: "Decoration Design", desc: "Stunning visual concepts tailored to your theme." },
    { icon: <PartyPopper size={32} />, title: "Party Favors", desc: "Memorable keepsakes for your guests." },
  ];

  return (
    <section id="services" className="py-24 bg-stone-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4 dark:text-white">Our Services & Products</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From tangible gifts to intangible memories, we craft everything with precision and love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Products Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-semibold mb-8 text-center flex items-center justify-center gap-3 dark:text-white">
              <span className="w-8 h-px bg-pink-300"></span>
              Custom Products
              <span className="w-8 h-px bg-pink-300"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {products.map((item, idx) => (
                <div key={idx} className="service-card group">
                  <div className="service-card-new-filter"><p>NEW</p></div>
                  <div className="service-card-bright-filter"></div>
                  <div className="service-card-top">
                    <div className="scale-150 text-pink-500">
                      {item.icon}
                    </div>
                  </div>
                  <div className="service-card-bottom">
                    <div>
                      <p className="service-card-bottom-title">{item.title}</p>
                      <p className="service-card-bottom-desc">{item.desc}</p>
                    </div>
                    <div className="text-right text-xs font-bold uppercase tracking-wider mt-2 opacity-60">
                      View Details
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Events Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif font-semibold mb-8 text-center flex items-center justify-center gap-3 dark:text-white">
              <span className="w-8 h-px bg-teal-300"></span>
              Event Services
              <span className="w-8 h-px bg-teal-300"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {events.map((item, idx) => (
                <div key={idx} className="service-card group">
                  <div className="service-card-new-filter bg-teal-400!"><p>NEW</p></div>
                  <div className="service-card-bright-filter"></div>
                  <div className="service-card-top text-teal-500!">
                    <div className="scale-150">
                      {item.icon}
                    </div>
                  </div>
                  <div className="service-card-bottom text-teal-500!">
                    <div>
                      <p className="service-card-bottom-title">{item.title}</p>
                      <p className="service-card-bottom-desc">{item.desc}</p>
                    </div>
                    <div className="text-right text-xs font-bold uppercase tracking-wider mt-2 opacity-60">
                      View Details
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: "Sarah Jenkins", text: "Elisa turned our vision into reality. Everything was beautiful and perfectly organized!", rating: 5 },
    { name: "Maria Rodriguez", text: "The custom shirts for our family reunion were a hit! Great quality and fast service.", rating: 5 },
    { name: "Jessica & Tom", text: "Simply Perfect made our wedding day stress-free. The decor was breathtaking.", rating: 5 },
    { name: "Emily Chen", text: "I ordered personalized mugs for my team. They loved them! Highly recommend.", rating: 5 },
    { name: "Amanda Lewis", text: "Professional, creative, and reliable. Elisa is amazing to work with.", rating: 5 },
  ];

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 dark:text-white">Client Love</h2>
          <p className="text-gray-600 dark:text-gray-400">Don't just take our word for it.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
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
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-4">Hover to read review</p>
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
    <section id="contact" className="py-24 bg-stone-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6 dark:text-white">Let’s Make Your Vision Simply Perfect</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Ready to start planning your event or designing your custom product? Fill out the form, and we'll get back to you shortly.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="uiverse-tooltip-container">
                <span className="uiverse-tooltip-trigger">
                  <div className="p-2 bg-pink-50 rounded-full text-pink-500">
                    <Mail size={20} />
                  </div>
                  <span className="text-sm font-medium dark:text-gray-300">Email</span>
                </span>
                <span className="uiverse-tooltip-content">hello@simplyperfect.com</span>
              </div>

              <div className="uiverse-tooltip-container">
                <span className="uiverse-tooltip-trigger">
                  <div className="p-2 bg-teal-50 rounded-full text-teal-500">
                    <Phone size={20} />
                  </div>
                  <span className="text-sm font-medium dark:text-gray-300">Phone</span>
                </span>
                <span className="uiverse-tooltip-content">(555) 123-4567</span>
              </div>

              <div className="uiverse-tooltip-container">
                <span className="uiverse-tooltip-trigger">
                  <div className="p-2 bg-blue-50 rounded-full text-blue-600">
                    <Facebook size={20} />
                  </div>
                  <span className="text-sm font-medium dark:text-gray-300">Facebook</span>
                </span>
                <span className="uiverse-tooltip-content">@SimplyPerfectEvents</span>
              </div>

              <div className="uiverse-tooltip-container">
                <span className="uiverse-tooltip-trigger">
                  <div className="p-2 bg-pink-50 rounded-full text-pink-600">
                    <Instagram size={20} />
                  </div>
                  <span className="text-sm font-medium dark:text-gray-300">Instagram</span>
                </span>
                <span className="uiverse-tooltip-content">@SimplyPerfectOfficial</span>
              </div>
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all" placeholder="your@email.com" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all" placeholder="(555) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Event Date (Optional)</label>
                <input type="date" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Service Type</label>
              <select className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all">
                <option>Custom Apparel</option>
                <option>Event Planning</option>
                <option>Unique Gifts</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="w-full btn-custom justify-center">
              Send Message
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
          <h3 className="text-2xl font-serif font-bold mb-2">Simply Perfect</h3>
          <p className="text-gray-400 text-sm">© 2026 Simply Perfect. All rights reserved.</p>
        </div>
        <div className="flex gap-4 text-sm text-gray-400">
          <a href="#" className="gumroad-btn">Privacy Policy</a>
          <a href="#" className="gumroad-btn">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans selection:bg-pink-200 selection:text-pink-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
