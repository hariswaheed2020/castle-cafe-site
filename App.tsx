import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Coffee, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  Facebook, 
  MessageSquare,
  ArrowRight,
  Filter
} from 'lucide-react';
import { 
  CATEGORIES, 
  MENU_ITEMS, 
  OPENING_HOURS, 
  WHATSAPP_LINK, 
  FACEBOOK_LINK, 
  CONTACT_EMAIL, 
  CONTACT_PHONE, 
  ADDRESS 
} from './constants';
import { Category, MenuItem } from './types';

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-charcoal/95 backdrop-blur-md shadow-2xl py-3 border-b border-gold/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Coffee size={24} className="text-charcoal" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tighter text-gold">CASTLE CAFE</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-offwhite/80 hover:text-gold transition-colors font-medium">Menu</a>
          <a href="#find-us" className="text-offwhite/80 hover:text-gold transition-colors font-medium">Find Us</a>
          <a href="#contact" className="text-offwhite/80 hover:text-gold transition-colors font-medium">Contact</a>
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gold text-charcoal px-6 py-2 rounded-full font-bold hover:bg-bronze transition-colors flex items-center gap-2"
          >
            <MessageSquare size={18} />
            Book a Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <MenuIcon size={32} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-charcoal border-b border-gold/20 flex flex-col items-center py-8 gap-6 shadow-2xl"
          >
            <a href="#menu" onClick={() => setIsOpen(false)} className="text-xl font-medium">Menu</a>
            <a href="#find-us" onClick={() => setIsOpen(false)} className="text-xl font-medium">Find Us</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-xl font-medium">Contact</a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold text-charcoal px-8 py-3 rounded-full font-bold w-64 text-center"
            >
              Book a Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal z-10" />
      <img 
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80" 
        className="w-full h-full object-cover scale-110" 
        alt="Cafe Interior" 
      />
    </div>

    <div className="container mx-auto px-6 relative z-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-gold font-medium tracking-[0.3em] uppercase mb-4 text-sm md:text-base">Experience the Heart of Wakefield</h2>
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-offwhite mb-8 leading-tight">
          Elegance in <span className="text-gold italic">Every Sip</span>
        </h1>
        <p className="max-w-2xl mx-auto text-offwhite/70 text-lg md:text-xl mb-12 leading-relaxed font-light">
          Discover artisanal coffee, freshly made sandwiches, and locally sourced delights in a setting that feels like home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#menu" 
            className="w-full sm:w-auto bg-gold text-charcoal px-10 py-4 rounded-full font-bold text-lg hover:bg-bronze transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            View Menu <ArrowRight size={20} />
          </a>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-gold/50 text-gold px-10 py-4 rounded-full font-bold text-lg hover:bg-gold/10 transition-all flex items-center justify-center gap-2"
          >
            Book Now
          </a>
        </div>
      </motion.div>
    </div>

    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
    >
      <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2">
        <div className="w-1 h-2 bg-gold rounded-full" />
      </div>
    </motion.div>
  </section>
);

// Fix: Use React.FC to explicitly type the component and allow standard props like 'key' in JSX calls
const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="group flex flex-col gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-white/[0.08] transition-all duration-300">
    <div className="relative h-48 overflow-hidden rounded-xl">
      <img 
        src={item.imageUrl} 
        alt={item.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-lg font-serif font-bold text-offwhite group-hover:text-gold transition-colors">{item.name}</h3>
        <span className="text-gold font-bold">{item.price}</span>
      </div>
      <p className="text-offwhite/50 text-sm leading-snug">{item.description}</p>
    </div>
  </div>
);

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Show All'>('Show All');
  const stickyRef = useRef<HTMLDivElement>(null);

  const filterMenu = (category: Category | 'Show All') => {
    setSelectedCategory(category);
    // Smooth scroll to top of menu when filtering
    const menuEl = document.getElementById('menu-start');
    if (menuEl) {
      const offset = 120; // sticky header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = menuEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="menu" className="py-24 bg-charcoal min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" id="menu-start">
          <h2 className="text-gold font-serif text-4xl md:text-5xl mb-4">Our Menu</h2>
          <p className="text-offwhite/40 italic font-light">Freshly prepared with love from our kitchen to your table.</p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </div>

        {/* Sticky Category Bar */}
        <div className="sticky top-[70px] z-40 bg-charcoal/90 backdrop-blur-lg py-6 -mx-6 px-6 mb-12 shadow-xl border-b border-gold/10">
          <div className="container mx-auto">
            <div className="flex items-center gap-4 mb-2 md:hidden overflow-x-auto no-scrollbar pb-2">
               <span className="text-gold flex items-center gap-2 shrink-0 text-xs uppercase tracking-widest font-bold">
                 <Filter size={14} /> Filters:
               </span>
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-3 justify-start md:justify-center">
              <button
                onClick={() => filterMenu('Show All')}
                className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-bold shrink-0 ${
                  selectedCategory === 'Show All' 
                  ? 'bg-gold border-gold text-charcoal' 
                  : 'border-gold/20 text-offwhite/50 hover:border-gold/50'
                }`}
              >
                All Items
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => filterMenu(cat)}
                  className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-bold shrink-0 ${
                    selectedCategory === cat 
                    ? 'bg-gold border-gold text-charcoal' 
                    : 'border-gold/20 text-offwhite/50 hover:border-gold/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {selectedCategory === 'Show All' ? (
              <motion.div
                key="all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-20"
              >
                {CATEGORIES.map((cat) => {
                  const items = MENU_ITEMS.filter(item => item.category === cat);
                  if (items.length === 0) return null;
                  return (
                    <div key={cat} className="space-y-8">
                      <div className="flex items-center gap-6">
                        <h3 className="text-2xl md:text-3xl font-serif text-gold shrink-0">{cat}</h3>
                        <div className="h-[1px] bg-gold/20 w-full" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {items.map(item => <MenuItemCard key={item.id} item={item} />)}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-6">
                  <h3 className="text-3xl md:text-4xl font-serif text-gold shrink-0">{selectedCategory}</h3>
                  <div className="h-[1px] bg-gold/20 w-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {MENU_ITEMS
                    .filter(item => item.category === selectedCategory)
                    .map(item => <MenuItemCard key={item.id} item={item} />)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const StatusBadge = () => {
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const dayIndex = now.getDay(); // 0 = Sunday
      const hour = now.getHours();
      const minute = now.getMinutes();
      const currentTime = hour * 100 + minute;

      // Adjust dayIndex for OPENING_HOURS array (Mon=0...Sun=6)
      const currentDayHours = OPENING_HOURS[dayIndex === 0 ? 6 : dayIndex - 1];
      
      if (currentDayHours.isClosed) {
        setIsOpenNow(false);
        return;
      }

      const [openH, openM] = currentDayHours.open.split(':').map(Number);
      const [closeH, closeM] = currentDayHours.close.split(':').map(Number);
      const openTime = openH * 100 + openM;
      const closeTime = closeH * 100 + closeM;

      setIsOpenNow(currentTime >= openTime && currentTime < closeTime);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${isOpenNow ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
      <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
      {isOpenNow ? 'Open Now' : 'Currently Closed'}
    </div>
  );
};

const InfoSection = () => (
  <section id="find-us" className="py-24 bg-charcoal/50 border-y border-white/5">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div>
            <h2 className="text-gold font-serif text-4xl mb-6">Visit Us</h2>
            <p className="text-offwhite/70 mb-8 max-w-md font-light leading-relaxed">
              Experience the finest tastes in Wakefield. Whether you're in for a quick breakfast sandwich or a leisurely cream tea, our doors are open.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold shrink-0 transition-colors group-hover:bg-gold group-hover:text-charcoal">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-offwhite text-lg">Location</h4>
                  <p className="text-offwhite/60">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold shrink-0 transition-colors group-hover:bg-gold group-hover:text-charcoal">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-offwhite text-lg">Contact</h4>
                  <p className="text-offwhite/60">{CONTACT_PHONE}</p>
                  <p className="text-offwhite/60 font-light italic">{CONTACT_EMAIL}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <h3 className="text-2xl font-serif text-offwhite flex items-center gap-3">
                <Clock className="text-gold" /> Opening Hours
              </h3>
              <StatusBadge />
            </div>
            <div className="grid grid-cols-1 gap-3">
              {OPENING_HOURS.map((oh) => (
                <div key={oh.day} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 group">
                  <span className={`font-medium transition-colors ${oh.day === new Date().toLocaleDateString('en-GB', {weekday: 'long'}) ? 'text-gold font-bold' : 'text-offwhite/60'}`}>{oh.day}</span>
                  <span className="text-offwhite/80 font-mono text-sm">{oh.isClosed ? <span className="text-red-400">Closed</span> : `${oh.open} - ${oh.close}`}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/20 relative group">
          <div className="absolute inset-0 bg-charcoal/20 pointer-events-none group-hover:bg-transparent transition-all" />
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2366.568461750567!2d-1.488665023253724!3d53.65485495208945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487968393e83921b%3A0xe5491f0340d34100!2sManygates%20Ln%2C%20Wakefield%20WF2%207DR!5e0!3m2!1sen!2suk!4v1709424102341!5m2!1sen!2suk" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="pt-24 pb-12 bg-charcoal">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <Coffee size={24} className="text-charcoal" />
            </div>
            <span className="text-3xl font-serif font-bold text-gold">CASTLE CAFE</span>
          </div>
          <p className="text-offwhite/50 leading-relaxed font-light">
            Wakefield's premier spot for handcrafted coffee and gourmet deli bites. Quality, tradition, and flavor in every bite.
          </p>
          <div className="flex items-center gap-4">
            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all text-offwhite/60">
              <Facebook size={20} />
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all text-offwhite/60">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-serif text-offwhite mb-8 border-b border-gold/20 pb-2">Explore</h4>
          <ul className="space-y-4 text-offwhite/60 font-light">
            <li><a href="#" className="hover:text-gold transition-colors flex items-center gap-2"><ChevronRight size={16} /> Home</a></li>
            <li><a href="#menu" className="hover:text-gold transition-colors flex items-center gap-2"><ChevronRight size={16} /> Our Menu</a></li>
            <li><a href="#find-us" className="hover:text-gold transition-colors flex items-center gap-2"><ChevronRight size={16} /> Location</a></li>
            <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-2"><ChevronRight size={16} /> Order / Book</a></li>
          </ul>
        </div>

        <div className="bg-white/5 p-8 rounded-3xl border border-gold/20">
          <h4 className="text-xl font-serif text-offwhite mb-4">Make a Reservation</h4>
          <p className="text-offwhite/50 mb-6 font-light">Planning a visit? We recommend booking a table via WhatsApp to ensure your spot.</p>
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-charcoal px-8 py-3 rounded-full font-bold hover:bg-bronze transition-all w-full justify-center group"
          >
            <MessageSquare size={20} />
            Book Your Table
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-offwhite/30 text-xs tracking-wider uppercase">
        <p>&copy; {new Date().getFullYear()} Castle Cafe Wakefield. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gold transition-colors">Privacy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-charcoal text-offwhite min-h-screen selection:bg-gold selection:text-charcoal">
      <Navbar />
      <Hero />
      <MenuSection />
      <InfoSection />
      <Footer />
    </div>
  );
}
