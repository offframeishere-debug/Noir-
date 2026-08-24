import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Compass, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO, SERVICE_HOURS } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-20 pb-12 relative text-[#a3a3a3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Newsletter Banner */}
        <div className="pb-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#c5a368] block mb-2 font-semibold">
              The Atelier Gazette & Priority Releases
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#f2f2f2] font-light mb-3">
              Receive First Access to <br className="hidden sm:inline" />
              Seasonal Table Releases
            </h3>
            <p className="text-xs sm:text-sm text-[#8c867d] leading-relaxed max-w-md">
              Dispatches regarding seasonal equinox menus, rare cellar vintage pairings, and private salon releases are sent quarterly.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 rounded-xl bg-[#141414] border border-[#c5a368]/40 text-[#e8d4a8] flex items-center gap-3">
                <Check className="w-5 h-5 text-[#c5a368]" />
                <span className="text-xs">
                  Merci. You have been registered for our priority seasonal allocation letters.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#121212] border border-white/15 rounded-lg px-4 py-3.5 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368] flex-grow placeholder:text-[#525252]"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#c5a368] hover:bg-[#dfc68e] text-[#0a0a0a] font-semibold text-xs uppercase tracking-[0.2em] rounded-lg transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg"
                >
                  <span>Join Gazette</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0a0a0a]" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Navigation & Information Columns */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display-title text-2xl tracking-[0.25em] text-[#f2f2f2] font-semibold">
                NOIRÉ
              </span>
            </div>
            <p className="text-xs text-[#8c867d] leading-relaxed max-w-sm">
              An intimate temple of sensory gastronomy honoring botanical fermentation, cedar embers, and cold sea treasures.
            </p>
            <div className="text-[11px] font-mono text-[#c5a368]">
              {RESTAURANT_INFO.address}
            </div>
            <p className="text-[10px] text-[#525252] leading-relaxed italic">
              {RESTAURANT_INFO.conceptNotice}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-xs uppercase font-mono tracking-wider text-[#f2f2f2] block mb-3">
              Exploration
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#story" className="hover:text-[#c5a368] transition-colors">Restaurant Story</a></li>
              <li><a href="#menu" className="hover:text-[#c5a368] transition-colors">Signature Menu</a></li>
              <li><a href="#experience" className="hover:text-[#c5a368] transition-colors">The Experiences</a></li>
              <li><a href="#philosophy" className="hover:text-[#c5a368] transition-colors">Chef & Philosophy</a></li>
              <li><a href="#gallery" className="hover:text-[#c5a368] transition-colors">Visual Gallery</a></li>
              <li><a href="#guestbook" className="hover:text-[#c5a368] transition-colors">Imagined Guestbook</a></li>
            </ul>
          </div>

          {/* Service & Dining */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-xs uppercase font-mono tracking-wider text-[#f2f2f2] block mb-3">
              Opening Hours
            </span>
            <ul className="space-y-1.5 text-xs text-[#8c867d]">
              <li className="text-[#d4d4d4] font-medium">Tue – Thu: 18:00 – 23:00</li>
              <li className="text-[#d4d4d4] font-medium">Fri – Sat: 18:00 – 00:00</li>
              <li className="text-[#737373]">Sun – Mon: Closed</li>
              <li className="pt-2 text-[11px] text-[#a3a3a3]">
                Valet parking available on arrival.
              </li>
            </ul>
          </div>

          {/* Instant Action */}
          <div className="lg:col-span-2 space-y-3 flex flex-col justify-start">
            <span className="text-xs uppercase font-mono tracking-wider text-[#f2f2f2] block mb-1">
              Table Allocations
            </span>
            <button
              onClick={onOpenReservation}
              className="w-full py-3 bg-[#171717] border border-[#c5a368]/40 hover:border-[#c5a368] text-[#c5a368] hover:text-[#f2f2f2] text-xs uppercase tracking-[0.2em] font-medium rounded-lg transition-all text-center cursor-pointer"
            >
              Book a Table
            </button>
            <span className="text-[10px] text-[#737373] block text-center font-mono">
              Concierge Desk: 10:00 – 22:00
            </span>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#737373] gap-4">
          <div>
            © {new Date().getFullYear()} NOIRÉ ATELIER CULINAIRE. CONCEPT PORTFOLIO.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#story" className="hover:text-[#a3a3a3] transition-colors">Sanctuary Charter</a>
            <a href="#location" className="hover:text-[#a3a3a3] transition-colors">Dining Etiquette</a>
            <a href="mailto:concierge@noire-concept.fr" className="hover:text-[#a3a3a3] transition-colors">Inquiries</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
