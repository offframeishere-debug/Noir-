import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Wine, Clock, Sparkles, ArrowRight, Check } from 'lucide-react';
import { SIGNATURE_DISHES, TASTING_MENUS } from '../data/restaurantData';
import { Dish } from '../types';

interface MenuSectionProps {
  onOpenReservation: (preset?: { menu?: string }) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [viewMode, setViewMode] = useState<'dishes' | 'sequences'>('dishes');
  const [dietaryFilter, setDietaryFilter] = useState<string>('ALL');
  const [selectedSequenceId, setSelectedSequenceId] = useState<string>('nocturne');

  const filteredDishes = SIGNATURE_DISHES.filter((dish) => {
    if (dietaryFilter === 'ALL') return true;
    if (dietaryFilter === 'GF') return dish.dietary.includes('GF');
    if (dietaryFilter === 'V') return dish.dietary.includes('V') || dish.dietary.includes('VG');
    if (dietaryFilter === 'Caviar') return dish.dietary.includes('Caviar');
    if (dietaryFilter === 'Truffle') return dish.dietary.includes('Truffle');
    return true;
  });

  const currentSequence = TASTING_MENUS.find((m) => m.id === selectedSequenceId) || TASTING_MENUS[0];

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#c5a368] font-medium mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>Seasonal Gastronomy</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl text-[#f2f2f2] font-light mb-4">
            Signature <span className="italic gold-shimmer">Menu</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a3a3a3] font-light leading-relaxed">
            An evolving portfolio of botanical dishes cooked over fragrant white cedar embers and shaped by the current lunar micro-harvest.
          </p>

          {/* View Toggle: Individual Signature Dishes vs Tasting Sequences */}
          <div className="inline-flex p-1 bg-[#141414] rounded-full border border-white/10 mt-8">
            <button
              onClick={() => setViewMode('dishes')}
              className={`px-5 py-2 text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                viewMode === 'dishes'
                  ? 'bg-[#c5a368] text-[#0a0a0a] font-semibold shadow-md'
                  : 'text-[#a3a3a3] hover:text-[#f2f2f2]'
              }`}
            >
              Signature Dishes (8 Offerings)
            </button>
            <button
              onClick={() => setViewMode('sequences')}
              className={`px-5 py-2 text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                viewMode === 'sequences'
                  ? 'bg-[#c5a368] text-[#0a0a0a] font-semibold shadow-md'
                  : 'text-[#a3a3a3] hover:text-[#f2f2f2]'
              }`}
            >
              Tasting Sequences (3 Curations)
            </button>
          </div>
        </div>

        {/* View Mode 1: Signature Dishes (Grid of 8 Dishes) */}
        {viewMode === 'dishes' && (
          <div>
            {/* Dietary Filter Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              <span className="text-[11px] uppercase tracking-wider text-[#737373] mr-2">
                Filter:
              </span>
              {[
                { id: 'ALL', label: 'All Dishes' },
                { id: 'GF', label: 'Gluten-Free (GF)' },
                { id: 'V', label: 'Plant-Forward' },
                { id: 'Caviar', label: 'Caviar Dishes' },
                { id: 'Truffle', label: 'Truffle Features' }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setDietaryFilter(f.id)}
                  className={`px-4 py-1.5 text-xs rounded-full border transition-all cursor-pointer ${
                    dietaryFilter === f.id
                      ? 'bg-[#c5a368] text-[#0a0a0a] border-[#c5a368] font-medium'
                      : 'bg-[#141414] text-[#a3a3a3] border-white/10 hover:border-white/20'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Dishes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredDishes.map((dish, index) => (
                  <motion.div
                    key={dish.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="group bg-[#121212] rounded-xl border border-white/10 overflow-hidden hover:border-[#c5a368]/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Image at Top */}
                    <div className="h-44 w-full relative overflow-hidden bg-[#0a0a0a]">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                      
                      {/* Price Badge */}
                      <div className="absolute top-3 right-3 bg-[#0a0a0a]/85 backdrop-blur-md px-2.5 py-1 rounded border border-[#c5a368]/30 font-serif text-sm text-[#e8d4a8]">
                        {dish.price}
                      </div>

                      {/* Course Number */}
                      <div className="absolute top-3 left-3 bg-[#0a0a0a]/85 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[10px] font-mono text-[#c5a368]">
                        0{dish.courseNumber}
                      </div>
                    </div>

                    {/* Dish Info */}
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <h3 className="font-serif text-lg text-[#f2f2f2] font-normal leading-snug group-hover:text-[#e8d4a8] transition-colors">
                            {dish.name}
                          </h3>
                        </div>

                        {dish.frenchName && (
                          <span className="text-[11px] text-[#8c867d] italic block mb-3 font-serif">
                            {dish.frenchName}
                          </span>
                        )}

                        <p className="text-xs text-[#a3a3a3] font-light leading-relaxed mb-4">
                          {dish.description}
                        </p>

                        {/* Ingredients */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {dish.ingredients.map((ing) => (
                            <span
                              key={ing}
                              className="text-[9px] px-1.5 py-0.5 rounded bg-[#1a1a1a] text-[#8c867d] border border-white/5"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Sommelier Pairing */}
                      {dish.pairing && (
                        <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#c5a368]">
                          <Wine className="w-3.5 h-3.5 shrink-0" />
                          <span className="italic truncate">{dish.pairing}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* View Mode 2: Tasting Sequences */}
        {viewMode === 'sequences' && (
          <div>
            {/* Sequence Selector Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {TASTING_MENUS.map((menu) => {
                const isSelected = menu.id === selectedSequenceId;
                return (
                  <button
                    key={menu.id}
                    onClick={() => setSelectedSequenceId(menu.id)}
                    className={`relative p-6 text-left rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[#171717] border-[#c5a368] shadow-[0_10px_30px_rgba(197,163,104,0.15)]'
                        : 'bg-[#121212] border-white/5 hover:border-white/20'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest text-[#0a0a0a] bg-[#c5a368] px-2 py-0.5 rounded font-semibold">
                        Selected
                      </div>
                    )}
                    
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#a3a3a3] block mb-1">
                      {menu.frenchTitle}
                    </span>
                    <h3 className="font-serif text-2xl text-[#f2f2f2] font-normal mb-2">
                      {menu.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 text-xs text-[#c5a368] mb-3 font-medium">
                      <span className="font-serif text-lg text-[#f2f2f2]">{menu.price}</span>
                      <span className="text-[#666666]">•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {menu.duration}
                      </span>
                      <span className="text-[#666666]">•</span>
                      <span>{menu.coursesCount} Courses</span>
                    </div>

                    <p className="text-xs text-[#a3a3a3] line-clamp-2 leading-relaxed">
                      {menu.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Sequence Details */}
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase font-mono text-[#c5a368] tracking-wider block mb-1">
                    {currentSequence.highlightNote}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#f2f2f2]">
                    {currentSequence.title} — <span className="text-[#c5a368]">{currentSequence.price}</span> <span className="text-xs font-sans text-[#888888]">per guest</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a3a3a3] mt-2 max-w-3xl">
                    {currentSequence.description}
                  </p>
                </div>

                <button
                  onClick={() => onOpenReservation({ menu: currentSequence.title })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#c5a368] to-[#b38f52] text-[#0a0a0a] font-semibold text-xs uppercase tracking-[0.2em] rounded-lg hover:brightness-110 transition-all shrink-0 cursor-pointer shadow-lg"
                >
                  <span>Reserve {currentSequence.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#0a0a0a]" />
                </button>
              </div>

              {/* Course Sequence List */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentSequence.dishes.map((dish, i) => (
                  <div key={dish.id} className="p-4 rounded-lg bg-[#171717] border border-white/5 flex items-start gap-3">
                    <span className="font-mono text-xs text-[#c5a368] mt-0.5">0{i + 1}</span>
                    <div>
                      <h4 className="font-serif text-sm text-[#f2f2f2]">{dish.name}</h4>
                      <p className="text-xs text-[#8c867d] mt-0.5">{dish.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Booking Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#121212] border border-[#c5a368]/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-[10px] uppercase font-mono text-[#c5a368] tracking-widest block mb-1">
              Table & Counter Allocations
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-[#f2f2f2]">
              Experience the Full Nocturne Sequence
            </h4>
            <p className="text-xs text-[#a3a3a3] mt-1">
              Limited to 24 seats per evening to preserve the synchronous timing of each course.
            </p>
          </div>
          <button
            onClick={() => onOpenReservation({ menu: 'Menu Nocturne' })}
            className="px-6 py-3 bg-[#c5a368] hover:bg-[#dfc68e] text-[#0a0a0a] font-semibold text-xs uppercase tracking-[0.2em] rounded-lg transition-all shrink-0 cursor-pointer shadow-lg"
          >
            Reserve Table
          </button>
        </div>

      </div>
    </section>
  );
};
