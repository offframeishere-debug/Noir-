import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Users, Utensils, Wine, CheckCircle2, ShieldCheck, Download, Sparkles, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { ReservationBooking } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPreset?: {
    guests?: number;
    date?: string;
    menu?: string;
  };
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialPreset
}) => {
  const [step, setStep] = useState<number>(1);
  const [booking, setBooking] = useState<ReservationBooking>({
    guests: initialPreset?.guests || 2,
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    timeSlot: '19:30',
    seatingArea: 'Main Dining',
    menuChoice: initialPreset?.menu || 'Menu Nocturne ($295)',
    winePairing: true,
    fullName: '',
    email: '',
    phone: '',
    dietaryNotes: '',
    specialOccasion: 'None'
  });

  const [bookingRef, setBookingRef] = useState<string>('');
  const [confirmedDate, setConfirmedDate] = useState<string>('');

  useEffect(() => {
    if (initialPreset?.menu) {
      setBooking((prev) => ({ ...prev, menuChoice: initialPreset.menu || prev.menuChoice }));
    }
    if (initialPreset?.guests) {
      setBooking((prev) => ({ ...prev, guests: initialPreset.guests || prev.guests }));
    }
  }, [initialPreset]);

  // Reset when opening
  useEffect(() => {
    if (isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  const availableTimeSlots = [
    { time: '18:00', status: 'Available' },
    { time: '18:45', status: 'Available' },
    { time: '19:30', status: 'Few Seats Left' },
    { time: '20:15', status: 'Popular' },
    { time: '21:00', status: 'Available' },
    { time: '21:30', status: 'Late Tasting' }
  ];

  const seatingAreas = [
    {
      name: 'Main Dining' as const,
      desc: 'Minimalist obsidian room bathed in soft candlelight',
      badge: 'Classic Experience'
    },
    {
      name: 'The Hearth Counter' as const,
      desc: 'Front row seats overlooking the live binchotan fire & open atelier',
      badge: 'Chef Interaction'
    },
    {
      name: 'Glasshouse Courtyard' as const,
      desc: 'Framed by illuminated bonsai and vertical moss garden architecture',
      badge: 'Romantic'
    },
    {
      name: 'Sommelier Private Salon' as const,
      desc: 'Intimate vaulted stone room with private cellar sommelier',
      badge: 'Parties of 4-8'
    }
  ];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      // Generate booking reference
      const randomCode = 'NOIRÉ-' + Math.floor(1000 + Math.random() * 9000) + '-PAX';
      setBookingRef(randomCode);
      setConfirmedDate(booking.date);
      setStep(4);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0a0a]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-2xl bg-[#121212] border border-[#c5a368]/40 rounded-2xl shadow-2xl overflow-hidden my-8"
      >
        {/* Modal Top Banner */}
        <div className="bg-gradient-to-r from-[#171717] via-[#1f1f1f] to-[#171717] px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#c5a368]/20 border border-[#c5a368]/40 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#c5a368]" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#c5a368] block">
                Atelier Concierge • Table Reservation
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#f2f2f2] font-normal">
                {step === 4 ? 'Reservation Confirmed' : 'Reserve an Atelier Experience'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#a3a3a3] hover:text-[#f2f2f2] hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close reservation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step Progress Indicator (Steps 1-3) */}
        {step < 4 && (
          <div className="px-6 pt-4 pb-2 bg-[#0a0a0a] border-b border-white/5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${step >= 1 ? 'bg-[#c5a368] text-[#0a0a0a] font-bold' : 'bg-white/10 text-white/50'}`}>1</span>
              <span className={step >= 1 ? 'text-[#f2f2f2]' : 'text-[#737373]'}>Seating & Party</span>
            </div>
            <div className="h-[1px] w-8 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${step >= 2 ? 'bg-[#c5a368] text-[#0a0a0a] font-bold' : 'bg-white/10 text-white/50'}`}>2</span>
              <span className={step >= 2 ? 'text-[#f2f2f2]' : 'text-[#737373]'}>Date & Menu</span>
            </div>
            <div className="h-[1px] w-8 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${step >= 3 ? 'bg-[#c5a368] text-[#0a0a0a] font-bold' : 'bg-white/10 text-white/50'}`}>3</span>
              <span className={step >= 3 ? 'text-[#f2f2f2]' : 'text-[#737373]'}>Details & Pairing</span>
            </div>
          </div>
        )}

        {/* Modal Form Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Party Size & Seating Zone */}
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-[#c5a368] mb-3">
                  Number of Guests
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setBooking({ ...booking, guests: num })}
                      className={`py-3 rounded-lg border text-sm font-serif transition-all cursor-pointer ${
                        booking.guests === num
                          ? 'bg-[#c5a368] text-[#0a0a0a] border-[#c5a368] font-semibold shadow-lg'
                          : 'bg-[#171717] text-[#f2f2f2] border-white/5 hover:border-white/20'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-[#c5a368] mb-3">
                  Select Seating Ambiance
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {seatingAreas.map((area) => {
                    const isSelected = booking.seatingArea === area.name;
                    return (
                      <button
                        key={area.name}
                        type="button"
                        onClick={() => setBooking({ ...booking, seatingArea: area.name })}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#171717] border-[#c5a368] shadow-[0_0_15px_rgba(197,163,104,0.2)]'
                            : 'bg-[#141414] border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-sm font-medium ${isSelected ? 'text-[#f2f2f2]' : 'text-[#d4d4d4]'}`}>
                            {area.name}
                          </span>
                          <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/5 text-[#c5a368]">
                            {area.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#8c867d] leading-relaxed">
                          {area.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#c5a368] to-[#b38f52] text-[#0a0a0a] font-semibold text-xs uppercase tracking-[0.2em] rounded-lg hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Select Date & Time</span>
                  <ArrowRight className="w-4 h-4 text-[#0a0a0a]" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Date, Time & Menu Experience */}
          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="reservation-date-input" className="block text-xs uppercase font-mono tracking-wider text-[#c5a368] mb-2">
                    Date of Reservation
                  </label>
                  <div className="relative">
                    <input
                      id="reservation-date-input"
                      type="date"
                      value={booking.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                      required
                      className="w-full bg-[#171717] border border-white/10 rounded-lg px-4 py-3 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368] cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#c5a368] mb-2">
                    Experience Sequence
                  </label>
                  <select
                    value={booking.menuChoice}
                    onChange={(e) => setBooking({ ...booking, menuChoice: e.target.value })}
                    className="w-full bg-[#171717] border border-white/10 rounded-lg px-4 py-3 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368] cursor-pointer"
                  >
                    <option value="Menu Nocturne ($295)" className="bg-[#141414] text-[#f2f2f2]">Menu Nocturne — 8 Courses ($295)</option>
                    <option value="Menu Éphémère ($410)" className="bg-[#141414] text-[#f2f2f2]">Menu Éphémère — 12 Courses ($410)</option>
                    <option value="Menu Botanique & Jardin ($240)" className="bg-[#141414] text-[#f2f2f2]">Menu Botanique — 8 Courses ($240)</option>
                    <option value="Chef's Hearth Counter Tasting ($360)" className="bg-[#141414] text-[#f2f2f2]">Hearth Counter Tasting ($360)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-[#c5a368] mb-3">
                  Available Service Times ({booking.guests} Guests)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {availableTimeSlots.map((slot) => {
                    const isSelected = booking.timeSlot === slot.time;
                    return (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => setBooking({ ...booking, timeSlot: slot.time })}
                        className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#c5a368] text-[#0a0a0a] border-[#c5a368] font-semibold'
                            : 'bg-[#171717] text-[#f2f2f2] border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-mono">{slot.time}</span>
                          <Clock className={`w-3.5 h-3.5 ${isSelected ? 'text-[#0a0a0a]' : 'text-[#8c867d]'}`} />
                        </div>
                        <span className={`text-[9px] uppercase tracking-wider block mt-1 ${isSelected ? 'text-[#0a0a0a]/80 font-bold' : 'text-[#8c867d]'}`}>
                          {slot.status}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 text-xs uppercase tracking-wider text-[#a3a3a3] hover:text-[#f2f2f2] flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#c5a368] to-[#b38f52] text-[#0a0a0a] font-semibold text-xs uppercase tracking-[0.2em] rounded-lg hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Guest Information</span>
                  <ArrowRight className="w-4 h-4 text-[#0a0a0a]" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Contact info, wine pairing toggle & dietary requirements */}
          {step === 3 && (
            <form onSubmit={handleNextStep} className="space-y-5">
              
              {/* Wine Pairing Add-on card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#171717] to-[#141414] border border-[#c5a368]/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Wine className="w-5 h-5 text-[#c5a368] shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-[#f2f2f2] block">
                      Include Grand Sommelier Reserve Wine Pairing
                    </span>
                    <span className="text-[11px] text-[#a3a3a3]">
                      7 curated vintage pairings per guest (+ $185 / guest)
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setBooking({ ...booking, winePairing: !booking.winePairing })}
                  className={`px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    booking.winePairing
                      ? 'bg-[#c5a368] text-[#0a0a0a] font-bold shadow'
                      : 'bg-[#171717] text-[#a3a3a3] border border-white/10'
                  }`}
                >
                  {booking.winePairing ? 'Added ✓' : 'Add Pairing'}
                </button>
              </div>

              {/* Guest Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="guest-full-name" className="block text-[10px] uppercase font-mono tracking-wider text-[#c5a368] mb-1">
                    Full Name *
                  </label>
                  <input
                    id="guest-full-name"
                    type="text"
                    required
                    placeholder="e.g. Lord Julian Sterling"
                    value={booking.fullName}
                    onChange={(e) => setBooking({ ...booking, fullName: e.target.value })}
                    className="w-full bg-[#171717] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368]"
                  />
                </div>

                <div>
                  <label htmlFor="guest-email-input" className="block text-[10px] uppercase font-mono tracking-wider text-[#c5a368] mb-1">
                    Email Address (For Pass Confirmation) *
                  </label>
                  <input
                    id="guest-email-input"
                    type="email"
                    required
                    placeholder="julian@sterling.co.uk"
                    value={booking.email}
                    onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                    className="w-full bg-[#171717] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="guest-phone-input" className="block text-[10px] uppercase font-mono tracking-wider text-[#c5a368] mb-1">
                    Mobile Phone (For SMS Concierge) *
                  </label>
                  <input
                    id="guest-phone-input"
                    type="tel"
                    required
                    placeholder="+33 6 12 34 56 78"
                    value={booking.phone}
                    onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                    className="w-full bg-[#171717] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368]"
                  />
                </div>

                <div>
                  <label htmlFor="special-occasion-select" className="block text-[10px] uppercase font-mono tracking-wider text-[#c5a368] mb-1">
                    Special Occasion
                  </label>
                  <select
                    id="special-occasion-select"
                    value={booking.specialOccasion}
                    onChange={(e) => setBooking({ ...booking, specialOccasion: e.target.value })}
                    className="w-full bg-[#171717] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368]"
                  >
                    <option value="None" className="bg-[#141414] text-[#f2f2f2]">Dining for Pleasure</option>
                    <option value="Anniversary" className="bg-[#141414] text-[#f2f2f2]">Anniversary Celebration</option>
                    <option value="Birthday" className="bg-[#141414] text-[#f2f2f2]">Birthday Milestone</option>
                    <option value="Business Entertaining" className="bg-[#141414] text-[#f2f2f2]">Executive Entertaining</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="dietary-notes-input" className="block text-[10px] uppercase font-mono tracking-wider text-[#c5a368] mb-1">
                  Dietary Restrictions & Allergies (e.g. Shellfish, Gluten, Tree Nuts)
                </label>
                <textarea
                  id="dietary-notes-input"
                  rows={2}
                  placeholder="Please state any severe allergies or dietary preferences for your party..."
                  value={booking.dietaryNotes}
                  onChange={(e) => setBooking({ ...booking, dietaryNotes: e.target.value })}
                  className="w-full bg-[#171717] border border-white/10 rounded-lg px-4 py-2 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 text-xs uppercase tracking-wider text-[#a3a3a3] hover:text-[#f2f2f2] flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#c5a368] via-[#dfc68e] to-[#b38f52] text-[#0a0a0a] font-semibold text-xs uppercase tracking-[0.2em] rounded-lg hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer shadow-xl"
                >
                  <ShieldCheck className="w-4 h-4 text-[#0a0a0a]" />
                  <span>Confirm Reservation Pass</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Luxury Digital Reservation Pass & Confirmation */}
          {step === 4 && (
            <div className="space-y-6 text-center">
              
              {/* Luxury Boarding Pass / Ticket Card */}
              <div className="relative rounded-2xl bg-[#141414] border border-[#c5a368]/50 p-6 sm:p-8 text-left shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#c5a368]/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Pass Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div>
                    <span className="font-display-title text-xl text-[#f2f2f2] tracking-[0.2em] font-semibold">
                      NOIRÉ
                    </span>
                    <span className="text-[9px] uppercase font-mono text-[#c5a368] block mt-0.5">
                      Atelier Gastronomique Pass
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono text-[#8c867d] block">Booking Ref:</span>
                    <span className="text-xs font-mono font-bold text-[#e8d4a8]">{bookingRef}</span>
                  </div>
                </div>

                {/* Key Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div>
                    <span className="text-[9px] uppercase font-mono text-[#8c867d] block">Guest Name</span>
                    <span className="text-xs font-medium text-[#f2f2f2] truncate block mt-0.5">
                      {booking.fullName || 'Valued Guest'}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase font-mono text-[#8c867d] block">Party Size</span>
                    <span className="text-xs font-medium text-[#f2f2f2] block mt-0.5">
                      {booking.guests} Guests
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase font-mono text-[#8c867d] block">Date & Time</span>
                    <span className="text-xs font-medium text-[#f2f2f2] block mt-0.5">
                      {confirmedDate} • {booking.timeSlot}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase font-mono text-[#8c867d] block">Seating Area</span>
                    <span className="text-xs font-medium text-[#c5a368] block mt-0.5">
                      {booking.seatingArea}
                    </span>
                  </div>
                </div>

                {/* Selected Sequence & Pairing */}
                <div className="p-3 bg-[#0a0a0a] rounded-lg border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
                  <div>
                    <span className="text-[#8c867d] text-[10px] uppercase font-mono block">Selected Menu:</span>
                    <span className="text-[#f2f2f2] font-serif text-sm">{booking.menuChoice}</span>
                  </div>
                  {booking.winePairing && (
                    <div className="text-right">
                      <span className="text-[#c5a368] text-[10px] uppercase font-mono">Grand Sommelier Pairing Included ✓</span>
                    </div>
                  )}
                </div>

                {/* Location & Dress Code reminder */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-[#8c867d]">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#c5a368]" />
                    <span>14 Rue de la Paix, Place Vendôme, Paris</span>
                  </div>
                  <span>Dress Code: Elegant Attire</span>
                </div>
              </div>

              <div className="text-xs text-[#a3a3a3]">
                A formal digital invitation and calendar pass have been dispatched to <span className="text-[#f2f2f2] font-mono">{booking.email || 'your email'}</span>.
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 bg-[#c5a368] text-[#0a0a0a] font-semibold text-xs uppercase tracking-[0.2em] rounded-lg hover:bg-[#dfc68e] transition-all cursor-pointer"
                >
                  Done & Return to Atelier
                </button>
                <button
                  onClick={() => alert(`Reservation ${bookingRef} downloaded to your device!`)}
                  className="w-full sm:w-auto px-5 py-3 bg-[#171717] border border-white/10 hover:border-white/30 text-[#f2f2f2] text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#c5a368]" />
                  <span>Download Pass PDF</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
};
