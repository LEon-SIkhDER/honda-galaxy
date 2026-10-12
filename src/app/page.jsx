'use client';

import { useState } from 'react';
import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import BikeGrid from '@/Components/BikeGrid';
import BikeModal from '@/Components/BikeModal';
import ServicesSection from '@/Components/ServicesSection';
import OffersBanner from '@/Components/OffersBanner';
import HappyCustomers from '@/Components/HappyCustomers';
import EMICalculator from '@/Components/EMICalculator';
import LocationSection from '@/Components/LocationSection';
import Footer from '@/Components/Footer';
import FloatingActions from '@/Components/FloatingActions';
import BookingModal from '@/Components/BookingModal';

export default function Home() {
  const [selectedBikeForModal, setSelectedBikeForModal] = useState(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialBike, setBookingInitialBike] = useState(null);

  const handleOpenBooking = (bike = null) => {
    setBookingInitialBike(bike);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setBookingInitialBike(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-[#e60012] selection:text-white">
      {/* Sticky Automotive Navigation */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Cinematic High-Impact Hero Section */}
        <Hero onOpenBooking={(bike) => handleOpenBooking(bike)} />

        {/* Official Bangladesh Honda Festive Campaigns & Facebook Bulletins */}
        <OffersBanner onOpenBooking={(bike) => handleOpenBooking(bike)} />

        {/* Curated Editorial Showroom Lineup with Interactive Carousel */}
        <BikeGrid
          onSelectBike={(bike) => setSelectedBikeForModal(bike)}
          onBookRide={(bike) => handleOpenBooking(bike)}
        />

        {/* Complete 4S Facility (Sales, Service, Spare Parts, Safety) */}
        <ServicesSection onOpenBooking={(bike) => handleOpenBooking(bike)} />

        {/* Real Showroom Handover Deliveries: Happy Customers */}
        <HappyCustomers onOpenBooking={() => handleOpenBooking()} />

        {/* Interactive Bank Credit Card EMI Estimator */}
        <EMICalculator onOpenBooking={(bike) => handleOpenBooking(bike)} />

        {/* Showroom Physical Location, Map, Schedule & Directions */}
        <LocationSection />
      </main>

      {/* Automotive Dealership Footer */}
      <Footer onSelectBike={(bike) => setSelectedBikeForModal(bike)} />

      {/* Floating Action Triggers (Call & WhatsApp) */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Bike Specification Sheet Modal */}
      <BikeModal
        bike={selectedBikeForModal}
        onClose={() => setSelectedBikeForModal(null)}
        onBookRide={(bike) => handleOpenBooking(bike)}
      />

      {/* Test Ride Booking & Showroom Inquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        initialBike={bookingInitialBike}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
