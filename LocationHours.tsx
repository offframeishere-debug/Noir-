import React from 'react';
import { MapPin, Clock, Compass, Phone, Mail, Car, ShieldAlert, Sparkles, Navigation, Calendar } from 'lucide-react';
import { SERVICE_HOURS, RESTAURANT_INFO } from '../data/restaurantData';

interface LocationHoursProps {
  onOpenReservation: () => void;
}

export const LocationHours: React.FC<LocationHoursProps> = ({ onOpenReservation }) => {
  return (
    <section id="location" className="py-24 sm:py-32 bg-[#0d0d0d] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#c5a368] font-medium mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Sanctuary & Schedule</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl text-[#f2f2f2] font-light mb-4">
            Location & <span className="italic gold-shimmer">Opening Hours</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a3a3a3] font-light leading-relaxed">
            Positioned near Place Vendôme in Paris, behind an unassuming bronze facade.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Exact Service Times */}
          <div className="lg:col-span-4 bg-[#121212] rounded-xl border border-white/10 p-7 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#c5a368] tracking-wider mb-5">
                <Clock className="w-4 h-4" />
                <span>Service Schedule</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="pb-3 border-b border-white/5">
                  <span className="text-[#a3a3a3] uppercase font-mono block text-[10px]">Tuesday – Thursday</span>
                  <span className="text-[#f2f2f2] font-medium text-sm block mt-0.5">18:00 – 23:00</span>
                  <span className="text-[#737373] text-[11px]">Evening tasting seatings from 18:00 to 20:30</span>
                </div>

                <div className="pb-3 border-b border-white/5">
                  <span className="text-[#a3a3a3] uppercase font-mono block text-[10px]">Friday – Saturday</span>
                  <span className="text-[#f2f2f2] font-medium text-sm block mt-0.5">18:00 – 00:00</span>
                  <span className="text-[#737373] text-[11px]">Extended nocturnal seatings & salon pairings</span>
                </div>

                <div className="pb-3 border-b border-white/5">
                  <span className="text-[#c5a368] uppercase font-mono block text-[10px]">Sunday – Monday</span>
                  <span className="text-[#8c867d] text-sm font-medium block mt-0.5">Closed</span>
                  <span className="text-[#737373] text-[11px]">Reserved for botanical foraging & cellar resting</span>
                </div>

                <div>
                  <span className="text-[#a3a3a3] uppercase font-mono block text-[10px]">Reservation Allocations</span>
                  <p className="text-[11px] text-[#8c867d] mt-1">
                    {SERVICE_HOURS.serviceNotice}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenReservation}
              className="mt-6 w-full py-3.5 bg-[#171717] hover:bg-[#c5a368] text-[#c5a368] hover:text-[#0a0a0a] border border-[#c5a368]/40 hover:border-[#c5a368] text-xs uppercase tracking-[0.2em] font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Time Slot</span>
            </button>
          </div>

          {/* Column 2: Location, Access & Concierge */}
          <div className="lg:col-span-4 bg-[#121212] rounded-xl border border-white/10 p-7 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#c5a368] tracking-wider mb-5">
                <Compass className="w-4 h-4" />
                <span>The Address & Access</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="pb-3 border-b border-white/5">
                  <span className="text-[#a3a3a3] uppercase font-mono block text-[10px]">Physical Atelier</span>
                  <p className="text-[#f2f2f2] font-medium text-sm mt-0.5">
                    {RESTAURANT_INFO.address}
                  </p>
                  <span className="text-[#737373] text-[11px] block mt-1">
                    Metro: Opéra (Lines 3, 7, 8) • Tuileries (Line 1)
                  </span>
                </div>

                <div className="pb-3 border-b border-white/5">
                  <span className="text-[#a3a3a3] uppercase font-mono block text-[10px]">Valet Parking</span>
                  <p className="text-[#b3b3b3] mt-0.5">
                    {RESTAURANT_INFO.valet}
                  </p>
                </div>

                <div>
                  <span className="text-[#a3a3a3] uppercase font-mono block text-[10px]">Direct Inquiries</span>
                  <div className="flex flex-col gap-1.5 mt-1">
                    <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#c5a368] hover:underline flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{RESTAURANT_INFO.phone}</span>
                    </a>
                    <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-[#a3a3a3] hover:text-[#f2f2f2] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" />
                      <span>{RESTAURANT_INFO.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=14+Rue+de+la+Paix+75002+Paris"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3.5 bg-[#171717] border border-white/10 hover:border-white/30 text-[#f2f2f2] text-xs uppercase tracking-[0.2em] font-medium rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-3.5 h-3.5 text-[#c5a368]" />
              <span>Google Maps Directions</span>
            </a>
          </div>

          {/* Column 3: Etiquette & Concept Notice */}
          <div className="lg:col-span-4 bg-[#121212] rounded-xl border border-white/10 p-7 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#c5a368] tracking-wider mb-5">
                <ShieldAlert className="w-4 h-4" />
                <span>Etiquette & Concept</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="pb-3 border-b border-white/5">
                  <span className="text-[#a3a3a3] uppercase font-mono block text-[10px]">Dress Code</span>
                  <p className="text-[#b3b3b3] mt-0.5 leading-relaxed">
                    {RESTAURANT_INFO.dressCode}
                  </p>
                </div>

                <div className="pb-3 border-b border-white/5">
                  <span className="text-[#a3a3a3] uppercase font-mono block text-[10px]">Children & Families</span>
                  <p className="text-[#b3b3b3] mt-0.5 leading-relaxed">
                    Due to the sensory focus and multi-hour nature of our tasting menus, we welcome guests aged 12 and above.
                  </p>
                </div>

                <div>
                  <span className="text-[#c5a368] uppercase font-mono block text-[10px]">Concept Statement</span>
                  <p className="text-[#8c867d] text-[11px] mt-0.5 leading-relaxed">
                    {RESTAURANT_INFO.conceptNotice}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-lg bg-[#0a0a0a] border border-white/5 text-[11px] text-[#8c867d]">
              <span className="text-[#c5a368] font-semibold block mb-0.5">Atmosphere:</span>
              <span>Subdued lighting, acoustic quietude, and synchronized service across all tables.</span>
            </div>
          </div>

        </div>

        {/* Atmospheric Map Visual Element */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#121212] h-64 sm:h-72 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80"
            alt="Paris Place Vendôme and Opéra architecture"
            className="w-full h-full object-cover object-center filter brightness-40 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/65 to-[#0a0a0a]/85" />
          
          <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-between p-8 sm:p-12">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <span className="text-xs uppercase font-mono text-[#c5a368] tracking-widest block mb-1">
                Atelier Location • 1er Arrondissement
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f2f2f2] font-normal">
                14 Rue de la Paix, Place Vendôme
              </h3>
              <p className="text-xs text-[#a3a3a3] mt-1">
                Discreet private entrance marked by aged bronze sconce lights.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=14+Rue+de+la+Paix+75002+Paris"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#c5a368] hover:bg-[#dfc68e] text-[#0a0a0a] font-semibold text-xs uppercase tracking-[0.2em] rounded-lg transition-all flex items-center gap-2 shadow-lg shrink-0"
            >
              <Navigation className="w-4 h-4 text-[#0a0a0a]" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
