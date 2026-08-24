import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Plating', 'Ambiance', 'Cellar', 'Craft'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0d0d0d] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#c5a368] font-medium mb-3">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Visual Chronology</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl text-[#f2f2f2] font-light">
              Atmosphere & <span className="italic gold-shimmer">Artistry</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded-full border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#c5a368] text-[#0a0a0a] border-[#c5a368] font-semibold'
                    : 'bg-[#141414] text-[#a3a3a3] border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const globalIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  onClick={() => setLightboxIndex(globalIndex)}
                  className="group relative h-72 sm:h-80 rounded-xl overflow-hidden border border-white/10 bg-[#121212] cursor-pointer hover:border-[#c5a368]/50 transition-all duration-300 shadow-lg"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700"
                  />
                  
                  {/* Subtle Dark Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] uppercase font-mono tracking-widest px-2 py-0.5 rounded bg-[#0a0a0a]/80 backdrop-blur-md text-[#c5a368] border border-[#c5a368]/20">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Indicator Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md flex items-center justify-center text-[#f2f2f2] opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                    <Maximize2 className="w-3.5 h-3.5 text-[#c5a368]" />
                  </div>

                  {/* Caption & Metadata */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-serif text-lg text-[#f2f2f2] font-normal leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#a3a3a3] font-light line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                    {item.details && (
                      <span className="text-[9px] font-mono text-[#c5a368] block mt-1">
                        {item.details}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-[#171717] text-[#f2f2f2] hover:text-[#c5a368] hover:bg-[#262626] border border-white/10 transition-colors cursor-pointer z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null));
              }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#171717] text-[#f2f2f2] hover:text-[#c5a368] hover:bg-[#262626] border border-white/10 transition-colors cursor-pointer z-50"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
              }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#171717] text-[#f2f2f2] hover:text-[#c5a368] hover:bg-[#262626] border border-white/10 transition-colors cursor-pointer z-50"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <div className="max-w-5xl max-h-[90vh] flex flex-col items-center justify-center">
              <motion.img
                key={GALLERY_ITEMS[lightboxIndex].id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={GALLERY_ITEMS[lightboxIndex].imageUrl}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="max-h-[65vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-lg border border-white/15 shadow-2xl"
              />

              <div className="text-center mt-4 max-w-2xl px-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c5a368] block mb-1">
                  {GALLERY_ITEMS[lightboxIndex].category} • {lightboxIndex + 1} of {GALLERY_ITEMS.length}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#f2f2f2] font-normal mb-1">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a3a3a3] font-light">
                  {GALLERY_ITEMS[lightboxIndex].caption}
                </p>
                {GALLERY_ITEMS[lightboxIndex].details && (
                  <p className="text-xs font-mono text-[#c5a368]/80 mt-1">
                    {GALLERY_ITEMS[lightboxIndex].details}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
