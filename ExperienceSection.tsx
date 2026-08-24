import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, Users, ArrowRight, Check } from 'lucide-react';
import { EXPERIENCES } from '../data/restaurantData';

interface ExperienceSectionProps {
  onOpenReservation: (preset?: { menu?: string }) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#0d0d0d] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#c5a368] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Encounters</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl text-[#f2f2f2] font-light mb-4">
            Curated <span className="italic gold-shimmer">Experiences</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a3a3a3] font-light leading-relaxed">
            Three distinct formats to experience NOIRÉ—from synchronous salon seatings to private glasshouse salon dining.
          </p>
        </div>

        {/* 3 Premium Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-[#121212] rounded-2xl border border-white/10 overflow-hidden hover:border-[#c5a368]/50 transition-all duration-400 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Visual Header */}
                <div className="h-56 relative overflow-hidden bg-[#0a0a0a]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                  
                  {/* Badge */}
                  {exp.badge && (
                    <div className="absolute top-4 left-4 bg-[#0a0a0a]/85 backdrop-blur-md px-3 py-1 rounded border border-[#c5a368]/40 text-[10px] uppercase font-mono tracking-widest text-[#e8d4a8]">
                      {exp.badge}
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 bg-[#0a0a0a]/90 backdrop-blur-md px-3 py-1 rounded border border-white/10 font-serif text-sm text-[#e8d4a8]">
                    {exp.price}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-7">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8c867d] block mb-1">
                    {exp.frenchTitle}
                  </span>
                  <h3 className="font-serif text-2xl text-[#f2f2f2] font-normal mb-2 group-hover:text-[#e8d4a8] transition-colors">
                    {exp.title}
                  </h3>

                  {/* Meta Strip */}
                  <div className="flex items-center gap-3 text-xs text-[#c5a368] mb-4 pb-4 border-b border-white/5 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    {exp.capacity && (
                      <>
                        <span className="text-[#525252]">•</span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {exp.capacity}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#a3a3a3] font-light leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 mb-6">
                    {exp.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#b3b3b3]">
                        <Check className="w-3.5 h-3.5 text-[#c5a368] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-7 pt-0">
                <button
                  onClick={() => onOpenReservation({ menu: exp.title })}
                  className="w-full py-3.5 bg-[#171717] hover:bg-[#c5a368] text-[#f2f2f2] hover:text-[#0a0a0a] border border-white/10 hover:border-[#c5a368] text-xs uppercase tracking-[0.2em] font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Book Experience</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
