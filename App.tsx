import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { MenuSection } from './components/MenuSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Philosophy } from './components/Philosophy';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationHours } from './components/LocationHours';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [reservationPreset, setReservationPreset] = useState<{
    guests?: number;
    date?: string;
    menu?: string;
  }>({});

  const handleOpenReservation = (preset?: { guests?: number; date?: string; menu?: string }) => {
    if (preset) {
      setReservationPreset(preset);
    }
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f2f2f2] selection:bg-[#c5a368] selection:text-[#0a0a0a] relative overflow-x-hidden font-sans">
      
      {/* 1. Sticky Editorial Navigation */}
      <Navbar onOpenReservation={() => handleOpenReservation()} />

      {/* Main Ordered Atmospheric Sections */}
      <main id="main-content">
        
        {/* 2. Hero Section */}
        <Hero onOpenReservation={() => handleOpenReservation()} />

        {/* 3. Restaurant Story Section */}
        <StorySection onOpenReservation={() => handleOpenReservation()} />

        {/* 4. Signature Menu Section (6-8 Curated Dishes + Tasting Sequences) */}
        <MenuSection onOpenReservation={handleOpenReservation} />

        {/* 5. The Experience Section (3 Premium Cards) */}
        <ExperienceSection onOpenReservation={handleOpenReservation} />

        {/* 6. Chef / Culinary Philosophy Section (Chef Arnaud de Noir) */}
        <Philosophy onOpenReservation={() => handleOpenReservation()} />

        {/* 7. Gallery Section (Atmosphere, Plating, Cellar, Craft + Lightbox) */}
        <GallerySection />

        {/* 8. Guest Testimonials Section (An Imagined Guestbook) */}
        <TestimonialsSection />

        {/* 9. Location & Opening Hours Section */}
        <LocationHours onOpenReservation={() => handleOpenReservation()} />

        {/* 10. Reservation CTA Section (In-Page Luxury Booking) */}
        <ReservationSection onOpenModal={handleOpenReservation} />

      </main>

      {/* 11. Luxury Editorial Footer */}
      <Footer onOpenReservation={() => handleOpenReservation()} />

      {/* Interactive Modal Booking Experience */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={handleCloseReservation}
        initialPreset={reservationPreset}
      />

    </div>
  );
}
