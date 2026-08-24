import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Star, Sparkles, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="guestbook" className="py-24 sm:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#c5a368] font-medium mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Atmospheric Impressions</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl text-[#f2f2f2] font-light mb-4">
            An Imagined <span className="italic gold-shimmer">Guestbook</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a3a3a3] font-light leading-relaxed">
            Simulated chronicles of an evening in the atelier—capturing the sensory resonance of smoke, botanicals, and quiet shadows.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#121212] rounded-2xl border border-white/10 p-7 sm:p-8 hover:border-[#c5a368]/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#c5a368]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#c5a368]/30" />
                </div>

                <p className="font-serif text-base sm:text-lg text-[#f2f2f2] font-light leading-relaxed mb-6 italic">
                  “{t.quote}”
                </p>
              </div>

              {/* Author & Context */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-serif text-[#f2f2f2] font-normal">
                    {t.author}
                  </h3>
                  <span className="text-[10px] font-mono text-[#8c867d]">{t.date}</span>
                </div>
                <span className="text-xs text-[#c5a368] block">
                  {t.title}
                </span>
                <span className="text-[10px] font-mono text-[#737373] block mt-0.5">
                  Experience: {t.experienceType}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle Concept Note Banner */}
        <div className="mt-12 text-center">
          <p className="text-[11px] font-mono text-[#737373] max-w-xl mx-auto">
            * Note: NOIRÉ is a creative gastronomy concept. Entries above represent artistic vignettes created for this design portfolio.
          </p>
        </div>

      </div>
    </section>
  );
};
