import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Flame, Sprout, Compass, Droplet, ArrowRight } from 'lucide-react';

interface PhilosophyProps {
  onOpenReservation: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ onOpenReservation }) => {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#c5a368] font-medium mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Culinary Philosophy & Direction</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl text-[#f2f2f2] font-light leading-tight">
            Chef Arnaud de Noir & <br className="hidden sm:inline" />
            <span className="italic gold-shimmer">The Craft of Elemental Fire</span>
          </h2>
        </div>

        {/* 2-Column Grid: Left Chef Portrait / Action Image, Right Philosophy Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Chef Image & Bio Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#121212] aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
                alt="Chef Arnaud de Noir culinary craftsmanship"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
              
              {/* Chef Name Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#c5a368] block mb-1">
                  Head Chef & Co-Founder
                </span>
                <h3 className="font-serif text-2xl text-[#f2f2f2] font-normal">
                  Arnaud de Noir
                </h3>
                <p className="text-xs text-[#a3a3a3] font-light mt-1">
                  Dedicated to northern botanical gastronomy and live fire techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Breakdown */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Lead Narrative */}
            <div className="space-y-4 text-[#a3a3a3] font-light text-sm sm:text-base leading-relaxed">
              <p className="font-serif text-xl sm:text-2xl text-[#f2f2f2] font-light leading-snug">
                “Every ingredient carries a memory of soil, season, and rain. Our duty in the kitchen is not to mask this identity, but to elevate it through precision, heat, and time.”
              </p>
              <p>
                Trained in both classic French reduction techniques and Nordic preservation traditions, Chef Arnaud approaches the menu not as a series of static recipes, but as a seasonal journal that shifts with each rainfall and forest foraging cycle.
              </p>
            </div>

            {/* 3 Core Tenets */}
            <div className="space-y-4 pt-2">
              
              <div className="p-5 rounded-xl bg-[#121212] border border-white/5 flex gap-4 items-start">
                <div className="p-2.5 rounded-lg bg-[#1a1a1a] text-[#c5a368] shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#f2f2f2] mb-1">
                    White Cedar Embers & Binchotan
                  </h4>
                  <p className="text-xs text-[#8c867d] leading-relaxed">
                    Direct thermal contact over fragrant hardwoods imparts subtle wood aromatics without overpowering delicate marine and vegetable proteins.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#121212] border border-white/5 flex gap-4 items-start">
                <div className="p-2.5 rounded-lg bg-[#1a1a1a] text-[#c5a368] shrink-0">
                  <Sprout className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#f2f2f2] mb-1">
                    Botanical Extractions & Fermentation
                  </h4>
                  <p className="text-xs text-[#8c867d] leading-relaxed">
                    Lacto-fermented pinecones, birch sap vinegars, and aged miso pastes provide vibrant acidity and natural umami depth across our courses.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#121212] border border-white/5 flex gap-4 items-start">
                <div className="p-2.5 rounded-lg bg-[#1a1a1a] text-[#c5a368] shrink-0">
                  <Droplet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#f2f2f2] mb-1">
                    Cold Sea Salinity & Foraged Flora
                  </h4>
                  <p className="text-xs text-[#8c867d] leading-relaxed">
                    Direct partnerships with sustainable divers in Brittany and Hokkaido ensure pristine sea urchin, scallops, and kombu arrive with oceanic vitality.
                  </p>
                </div>
              </div>

            </div>

            {/* Philosophy CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] hover:bg-[#c5a368] text-[#c5a368] hover:text-[#0a0a0a] border border-[#c5a368]/30 font-medium text-xs uppercase tracking-[0.2em] rounded-lg transition-all cursor-pointer"
              >
                <span>Reserve at the Chef’s Hearth Counter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
