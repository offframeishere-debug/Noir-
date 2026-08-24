import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, Utensils, Wine, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Mail, Phone, User, RotateCcw } from 'lucide-react';
import { RESTAURANT_INFO, SERVICE_HOURS } from '../data/restaurantData';

interface ReservationSectionProps {
  onOpenModal?: (preset?: { menu?: string }) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = () => {
  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState<string>('2026-09-18');
  const [timeSlot, setTimeSlot] = useState<string>('19:30');
  const [experience, setExperience] = useState<string>('Menu Nocturne (8 Courses)');
  const [winePairing, setWinePairing] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [dietaryNotes, setDietaryNotes] = useState<string>('');
  const [specialOccasion, setSpecialOccasion] = useState<string>('Celebration');

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const timeOptions = ['18:00', '18:30', '19:15', '19:30', '20:00', '20:45', '21:15'];
  const experienceOptions = [
    'Menu Nocturne (8 Courses — $295)',
    'Menu Éphémère (12 Courses — $410)',
    'Menu Botanique & Jardin (8 Courses — $240)',
    'The Chef’s Hearth Counter Seating',
    'Private Glasshouse Salon (Custom Party)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    const ref = `NOIR-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setDietaryNotes('');
  };

  return (
    <section id="reservation" className="py-24 sm:py-32 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#c5a368] font-medium mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Table Allocations</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl text-[#f2f2f2] font-light mb-4">
            Request a <span className="italic gold-shimmer">Reservation</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a3a3a3] font-light leading-relaxed">
            Reserve your seat for our synchronous evening dining ritual. Seating is strictly limited to 24 guests per evening.
          </p>
        </div>

        {/* Main Reservation Card Container */}
        <div className="max-w-4xl mx-auto bg-[#121212] rounded-2xl border border-[#c5a368]/30 shadow-2xl overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="p-8 sm:p-12 space-y-8"
              >
                
                {/* Step 1: Party Size & Seating */}
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#c5a368] mb-3">
                    1. Select Party Size
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                    {[1, 2, 3, 4, 6, 8].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGuests(num)}
                        className={`py-3 rounded-lg text-xs font-mono font-medium border transition-all cursor-pointer ${
                          guests === num
                            ? 'bg-[#c5a368] text-[#0a0a0a] border-[#c5a368] shadow-md font-bold'
                            : 'bg-[#171717] text-[#f2f2f2] border-white/10 hover:border-white/20'
                        }`}
                      >
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Date & Time Slot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#c5a368] mb-2">
                      2. Date of Evening
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#171717] border border-white/15 rounded-lg px-4 py-3 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368]"
                    />
                    <span className="text-[10px] text-[#737373] mt-1 block">
                      Services: Tuesday – Saturday
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#c5a368] mb-2">
                      3. Synchronous Seating Slot
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeOptions.slice(0, 4).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTimeSlot(t)}
                          className={`py-2.5 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                            timeSlot === t
                              ? 'bg-[#c5a368] text-[#0a0a0a] border-[#c5a368] font-bold'
                              : 'bg-[#171717] text-[#f2f2f2] border-white/10 hover:border-white/20'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 3: Experience Choice & Wine Pairing */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#c5a368] mb-2">
                      4. Desired Culinary Sequence
                    </label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full bg-[#171717] border border-white/15 rounded-lg px-4 py-3 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368] cursor-pointer"
                    >
                      {experienceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#171717] text-[#f2f2f2]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sommelier Pairing Checkbox */}
                  <label className="flex items-center gap-3 p-3.5 rounded-lg bg-[#171717] border border-white/5 cursor-pointer hover:border-[#c5a368]/30 transition-colors">
                    <input
                      type="checkbox"
                      checked={winePairing}
                      onChange={(e) => setWinePairing(e.target.checked)}
                      className="w-4 h-4 accent-[#c5a368] rounded cursor-pointer"
                    />
                    <div className="text-xs">
                      <span className="text-[#f2f2f2] font-medium block">
                        Include Curated Sommelier Cellar Pairing
                      </span>
                      <span className="text-[#8c867d] text-[11px]">
                        Grand Reserve and Biodynamic cru pairings curated course-by-course.
                      </span>
                    </div>
                  </label>
                </div>

                {/* Step 4: Guest Information */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#c5a368]">
                    5. Guest Details
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-[11px] text-[#a3a3a3] block mb-1">Full Name</span>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-[#171717] border border-white/15 rounded-lg px-4 py-2.5 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368] placeholder:text-[#525252]"
                      />
                    </div>

                    <div>
                      <span className="text-[11px] text-[#a3a3a3] block mb-1">Email Address</span>
                      <input
                        type="email"
                        required
                        placeholder="e.g. eleanor@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#171717] border border-white/15 rounded-lg px-4 py-2.5 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368] placeholder:text-[#525252]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-[11px] text-[#a3a3a3] block mb-1">Phone Number</span>
                      <input
                        type="tel"
                        placeholder="e.g. +33 6 12 34 56 78"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#171717] border border-white/15 rounded-lg px-4 py-2.5 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368] placeholder:text-[#525252]"
                      />
                    </div>

                    <div>
                      <span className="text-[11px] text-[#a3a3a3] block mb-1">Occasion (Optional)</span>
                      <select
                        value={specialOccasion}
                        onChange={(e) => setSpecialOccasion(e.target.value)}
                        className="w-full bg-[#171717] border border-white/15 rounded-lg px-4 py-2.5 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368]"
                      >
                        <option value="Celebration">Celebration / Anniversary</option>
                        <option value="Gastronomy Journey">Culinary Exploration</option>
                        <option value="Business Entertaining">Private Entertaining</option>
                        <option value="Casual Evening">Intimate Dinner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] text-[#a3a3a3] block mb-1">
                      Dietary Allergies & Notes
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. Shellfish allergy, Gluten-Free, Non-alcoholic pairing..."
                      value={dietaryNotes}
                      onChange={(e) => setDietaryNotes(e.target.value)}
                      className="w-full bg-[#171717] border border-white/15 rounded-lg px-4 py-2.5 text-xs text-[#f2f2f2] focus:outline-none focus:border-[#c5a368] placeholder:text-[#525252]"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#8c867d]">
                    <ShieldCheck className="w-4 h-4 text-[#c5a368]" />
                    <span>Concept demo reservation confirmation</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#c5a368] via-[#dfc68e] to-[#b38f52] hover:brightness-110 text-[#0a0a0a] font-semibold text-xs uppercase tracking-[0.2em] rounded-lg transition-all flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(197,163,104,0.25)] cursor-pointer"
                  >
                    <span>Request Reservation</span>
                    <ArrowRight className="w-4 h-4 text-[#0a0a0a]" />
                  </button>
                </div>

              </motion.form>
            ) : (
              /* Confirmation Screen Card */
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 sm:p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#c5a368]/15 border border-[#c5a368]/40 flex items-center justify-center text-[#c5a368] mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <span className="text-xs uppercase font-mono tracking-widest text-[#c5a368] block mb-2">
                  Reservation Request Recorded
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#f2f2f2] font-normal mb-3">
                  Merci, {fullName || 'Honored Guest'}
                </h3>
                <p className="text-xs sm:text-sm text-[#a3a3a3] max-w-md mx-auto mb-8">
                  Your reservation inquiry for NOIRÉ has been documented in this portfolio prototype.
                </p>

                {/* Digital Guest Pass Card */}
                <div className="max-w-md mx-auto p-6 rounded-xl bg-[#171717] border border-[#c5a368]/30 text-left mb-8 shadow-2xl">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                    <span className="font-display-title text-lg tracking-[0.2em] text-[#f2f2f2] font-semibold">
                      NOIRÉ
                    </span>
                    <span className="font-mono text-xs text-[#c5a368]">
                      Ref: {bookingRef}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[10px] text-[#737373] uppercase font-mono block">Guests</span>
                      <span className="text-[#f2f2f2] font-medium">{guests} Guests</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#737373] uppercase font-mono block">Date & Time</span>
                      <span className="text-[#f2f2f2] font-medium">{date} at {timeSlot}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[10px] text-[#737373] uppercase font-mono block">Experience</span>
                      <span className="text-[#c5a368] font-medium">{experience}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#737373] uppercase font-mono block">Pairing</span>
                      <span className="text-[#f2f2f2]">{winePairing ? 'Grand Reserve Cellar' : 'Artisanal Non-Alcoholic'}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#737373] uppercase font-mono block">Contact Email</span>
                      <span className="text-[#f2f2f2] truncate block">{email}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-[#171717] hover:bg-[#262626] text-[#f2f2f2] border border-white/10 text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-[#c5a368]" />
                    <span>Create Another Request</span>
                  </button>
                  <a
                    href="#menu"
                    className="px-6 py-3 bg-[#c5a368] text-[#0a0a0a] font-semibold text-xs uppercase tracking-wider rounded-lg hover:brightness-110 transition-all"
                  >
                    Explore Menu Offerings
                  </a>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
