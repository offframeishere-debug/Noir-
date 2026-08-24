import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Compass, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['story', 'menu', 'experience', 'philosophy', 'gallery', 'guestbook', 'location', 'reservation'];
      const scrollPos = window.scrollY + 250;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a]/92 backdrop-blur-xl border-b border-[#c5a368]/20 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo - Clean, No Fake Stars */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          id="brand-logo-link"
          className="group flex flex-col items-start focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <span className="font-display-title text-2xl sm:text-3xl tracking-[0.24em] text-[#f2f2f2] font-semibold group-hover:text-[#c5a368] transition-colors duration-300">
              NOIRÉ
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#a3a3a3] font-light mt-0.5">
            Botanical Gastronomy • Paris
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.18em] transition-all duration-300 relative py-1 ${
                  isActive
                    ? 'text-[#c5a368] font-medium'
                    : 'text-[#b3b3b3] hover:text-[#f2f2f2]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c5a368]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Area */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            id="btn-nav-reserve"
            onClick={onOpenReservation}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0a0a0a] bg-gradient-to-r from-[#c5a368] via-[#dfc68e] to-[#b38f52] hover:brightness-110 rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(197,163,104,0.25)] hover:shadow-[0_0_25px_rgba(197,163,104,0.45)] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#0a0a0a]" />
            <span>Reserve Table</span>
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            id="btn-mobile-quick-reserve"
            onClick={onOpenReservation}
            className="px-3.5 py-1.5 text-[10px] uppercase tracking-wider font-semibold text-[#0a0a0a] bg-[#c5a368] rounded-sm cursor-pointer hover:bg-[#dfc68e] transition-colors"
          >
            Reserve
          </button>
          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#f2f2f2] hover:text-[#c5a368] focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#f2f2f2]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0e0e0e]/98 backdrop-blur-2xl border-b border-[#c5a368]/20 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs uppercase tracking-[0.2em] text-[#d4d4d4] hover:text-[#c5a368] py-2.5 border-b border-white/5 flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  <Compass className="w-3.5 h-3.5 text-[#c5a368]/60" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0a0a0a] bg-gradient-to-r from-[#c5a368] to-[#b38f52] rounded-sm text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Calendar className="w-4 h-4 text-[#0a0a0a]" />
                  <span>Reserve an Atelier Table</span>
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-[#a3a3a3] pt-1">
                  <Phone className="w-3.5 h-3.5 text-[#c5a368]" />
                  <span>Concierge: +33 (0)1 42 68 55 00</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
