import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Flame, Sprout, Wind, ArrowRight } from 'lucide-react';

interface StorySectionProps {
  onOpenReservation: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#0d0d0d] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header Tag */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#c5a368] font-medium mb-3">
            <Sprout className="w-3.5 h-3.5" />
            <span>The Concept & Origin</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl text-[#f2f2f2] font-light leading-tight">
            Born from the silence of <br className="hidden sm:inline" />
            <span className="italic gold-shimmer">forests, fire & tides</span>.
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#121212] aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
                alt="NOIRÉ dining sanctuary atmosphere"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              
              {/* Floating Quote Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#0a0a0a]/85 backdrop-blur-md border border-[#c5a368]/20">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#c5a368] block mb-1">
                  Atelier Philosophy
                </span>
                <p className="font-serif text-sm sm:text-base text-[#f2f2f2] italic leading-relaxed">
                  “We do not decorate the plate; we distill the landscape until only its quiet soul remains.”
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-6 space-y-6 text-[#a3a3a3] font-light text-sm sm:text-base leading-relaxed">
            <p className="text-lg text-[#f2f2f2] font-serif leading-relaxed">
              NOIRÉ was conceived as an antidote to culinary noise. Hidden in an unassuming Parisian quarter, our 24-seat atelier is a sanctuary where the quiet drama of the wild takes center stage.
            </p>

            <p>
              Our culinary vocabulary is rooted in botanical gastronomy—foraged yarrow, cold-pressed birch sap, lacto-fermented wildflowers, and maritime lichen harvested at their peak. We balance these delicate botanicals against the elemental fury of Japanese binchotan charcoal and fragrant white cedar embers.
            </p>

            <p>
              Every evening unfolds as a synchronous tasting ritual. As darkness settles outside, each course is served simultaneously across the dining room, allowing all guests to experience the harmonic shift of textures, aromas, and vintage cellar pairings in real-time.
            </p>

            {/* 3 Pillars Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="p-4 rounded-xl bg-[#121212] border border-white/5">
                <Flame className="w-4 h-4 text-[#c5a368] mb-2" />
                <h3 className="text-xs font-serif text-[#f2f2f2] uppercase tracking-wider mb-1">Cedar Embers</h3>
                <p className="text-[11px] text-[#8c867d]">Charcoal flame preservation and slow smoking techniques.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#121212] border border-white/5">
                <Sprout className="w-4 h-4 text-[#c5a368] mb-2" />
                <h3 className="text-xs font-serif text-[#f2f2f2] uppercase tracking-wider mb-1">Wild Botanicals</h3>
                <p className="text-[11px] text-[#8c867d]">Micro-season harvests of foraged forest flora and herbs.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#121212] border border-white/5">
                <Wind className="w-4 h-4 text-[#c5a368] mb-2" />
                <h3 className="text-xs font-serif text-[#f2f2f2] uppercase tracking-wider mb-1">Intimate Calm</h3>
                <p className="text-[11px] text-[#8c867d]">24 synchronized seats designed for deep sensory focus.</p>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-4">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-[0.2em] text-[#c5a368] hover:text-[#e8d4a8] transition-colors cursor-pointer group"
              >
                <span>Experience the Atelier Sanctuary</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
