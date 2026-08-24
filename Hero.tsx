import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ChevronDown, Calendar, Utensils, Flame, Compass } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStory = (e: React.MouseEvent) => {
    e.preventDefault();
    const storyEl = document.getElementById('story');
    if (storyEl) {
      storyEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Layer 1: Cinematic Ambient Background with deep vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2400&q=85"
          alt="NOIRÉ atmospheric hearth ambiance"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.22] contrast-[1.2] transition-transform duration-10000 ease-out"
        />
        {/* Deep Dark Gradients and Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-[#0a0a0a]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0a_80%)]" />
        
        {/* Subtle Warm Amber Glow in bottom corner for depth */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#c5a368]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c5a368]/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Layer 2: Main Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full flex-grow flex flex-col justify-center">
        
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Subtle Philosophy Pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a368]/30 bg-[#121212]/80 backdrop-blur-md mb-6 shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-[#c5a368]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#e8d4a8] font-medium">
              A culinary experience shaped by nature, fire & seasonality
            </span>
          </motion.div>

          {/* Dominant Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#f2f2f2] font-light leading-[1.08] mb-5 max-w-4xl"
          >
            An Ode to <span className="italic font-normal gold-shimmer">Shadow</span> & <br className="hidden sm:inline" />
            Botanical Gastronomy
          </motion.h1>

          {/* Quieter Secondary Text */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-xs sm:text-sm md:text-base text-[#a3a3a3] font-light max-w-2xl leading-relaxed mb-8 tracking-wide"
          >
            An intimate dining experience inspired by northern landscapes, wild seasonal ingredients, and the quiet drama of the natural world.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center gap-3.5 mb-10 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <button
              onClick={onOpenReservation}
              id="hero-primary-reserve-cta"
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#c5a368] via-[#dfc68e] to-[#b38f52] hover:brightness-110 active:scale-[0.98] text-[#0a0a0a] font-semibold text-xs uppercase tracking-[0.2em] rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(197,163,104,0.25)] hover:shadow-[0_12px_30px_rgba(197,163,104,0.4)] cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0a0a0a]" />
              <span>Reserve a Table</span>
            </button>

            {/* Secondary CTA */}
            <a
              href="#menu"
              onClick={scrollToMenu}
              id="hero-secondary-menu-cta"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#141414]/90 hover:bg-[#1f1f1f] active:scale-[0.98] text-[#f2f2f2] hover:text-[#c5a368] border border-white/15 hover:border-[#c5a368]/50 font-medium text-xs uppercase tracking-[0.2em] rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <Utensils className="w-3.5 h-3.5 text-[#c5a368]" />
              <span>Explore the Menu</span>
            </a>
          </motion.div>

        </div>

        {/* Cinematic Visual Feature Strip - High-end Botanical & Hearth Imagery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="w-full max-w-5xl mx-auto mt-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 p-3 rounded-2xl bg-[#121212]/60 border border-white/10 backdrop-blur-xl shadow-2xl">
            
            {/* Visual 1: Fine-Dining Plating Artwork */}
            <div className="group relative h-40 sm:h-44 rounded-xl overflow-hidden bg-[#0e0e0e] border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                alt="NOIRÉ Botanical Plating Craft"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                <span className="text-[11px] font-serif text-[#f2f2f2] tracking-wide">
                  Wild Lichen & Glacial Scallop
                </span>
                <span className="text-[9px] font-mono text-[#c5a368] uppercase tracking-wider">
                  Course 03
                </span>
              </div>
            </div>

            {/* Visual 2: Binchotan Live Hearth */}
            <div className="group relative h-40 sm:h-44 rounded-xl overflow-hidden bg-[#0e0e0e] border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="White Cedar Embers & Hearth"
                className="w-full h-full object-cover object-center filter brightness-85 contrast-115 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                <span className="text-[11px] font-serif text-[#f2f2f2] tracking-wide flex items-center gap-1.5">
                  <Flame className="w-3 h-3 text-[#c5a368]" />
                  Cedar Embers & Smoked Venison
                </span>
                <span className="text-[9px] font-mono text-[#c5a368] uppercase tracking-wider">
                  Live Fire
                </span>
              </div>
            </div>

            {/* Visual 3: Intimate Parisian Atelier */}
            <div className="group relative h-40 sm:h-44 rounded-xl overflow-hidden bg-[#0e0e0e] border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="24-Seat Intimate Dining Sanctuary"
                className="w-full h-full object-cover object-center filter brightness-85 contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                <span className="text-[11px] font-serif text-[#f2f2f2] tracking-wide flex items-center gap-1.5">
                  <Compass className="w-3 h-3 text-[#c5a368]" />
                  24-Seat Atelier Sanctuary
                </span>
                <span className="text-[9px] font-mono text-[#c5a368] uppercase tracking-wider">
                  Paris 1er
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Layer 3: Bottom Proof Bar & Subtle Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full mt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between pt-5 border-t border-white/10 text-xs text-[#8c867d] gap-3">
          
          <div className="flex items-center gap-6 text-[10px] uppercase font-mono tracking-widest text-[#a3a3a3]">
            <span>Place Vendôme, Paris</span>
            <span className="text-[#525252]">•</span>
            <span>8 & 12 Course Sequences</span>
            <span className="hidden md:inline text-[#525252]">•</span>
            <span className="hidden md:inline">Tuesday – Saturday</span>
          </div>

          <a
            href="#story"
            onClick={scrollToStory}
            id="hero-scroll-link"
            aria-label="Scroll down to restaurant story"
            className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-mono text-[#8c867d] hover:text-[#c5a368] transition-colors"
          >
            <span>The Origin Story</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#c5a368]" />
          </a>

        </div>
      </div>

    </section>
  );
};
