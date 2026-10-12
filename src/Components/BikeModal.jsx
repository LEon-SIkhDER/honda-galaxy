'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Phone,
  ChevronRight,
  Zap,
  Gauge,
  Fuel,
  Disc,
  Calculator,
  Palette,
  Sparkles,
  Tag
} from 'lucide-react';
import { SHOWROOM_INFO } from '@/lib/bikesData';

export default function BikeModal({ bike, onClose, onBookRide }) {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!bike) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Pause Lenis smooth scroll while modal is open so it doesn't hijack wheel events
    if (typeof window !== 'undefined' && window.lenis) {
      window.lenis.stop();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || 'unset';
      if (typeof window !== 'undefined' && window.lenis) {
        window.lenis.start();
      }
    };
  }, [bike, onClose]);

  return (
    <AnimatePresence>
      {bike && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-bike-title"
          data-lenis-prevent="true"
        >
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
            className="relative w-full max-w-4xl bg-white border border-slate-200/90 rounded-3xl shadow-2xl shadow-slate-900/20 overflow-hidden flex flex-col h-[90vh] max-h-[90dvh] z-10"
          >
            {/* 1. Sticky Header Bar */}
            <div className="px-5 sm:px-6 py-4 border-b border-slate-200 bg-white/95 backdrop-blur-md flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <img
                  src="/honda-galaxy-logo-light.png"
                  alt="Honda Galaxy"
                  className="h-7 sm:h-8 w-auto object-contain"
                />
                <div className="h-4 w-px bg-slate-300 hidden sm:block" />
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200 text-[#e60012] text-[10px] font-black uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Official BHL Technical Dossier
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">ESC to close</span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black transition-colors border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e60012]"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 2. Scrollable Body Content */}
            <div
              data-lenis-prevent="true"
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 sm:px-8 py-6 space-y-8"
            >
              
              {/* Motorcycle Showcase Hero & Title Header */}
              <div className="space-y-4">
                {/* Title & Pricing Top Row */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="bg-[#e60012] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow-xs">
                        {bike.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
                        {bike.cc}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Official BHL Warranty
                      </span>
                    </div>

                    <h2
                      id="modal-bike-title"
                      className="text-2xl sm:text-4xl font-black text-slate-900 mt-1.5 uppercase tracking-tight"
                    >
                      {bike.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 italic">
                      "{bike.tagline}"
                    </p>
                  </div>

                  <div className="text-left sm:text-right bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-2xl border sm:border-0 border-slate-200">
                    {bike.retailPriceBDT ? (
                      <>
                        <span className="text-[11px] text-slate-400 line-through block font-medium">
                          খুচরা মূল্য: {bike.retailPriceBDT}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-[#e60012] tracking-widest block">
                          শারদীয় অফার মূল্য
                        </span>
                        <span className="text-2xl sm:text-3xl font-black text-slate-950 block">
                          {bike.priceBDT}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest block">
                          Official Showroom Price
                        </span>
                        <span className="text-2xl sm:text-3xl font-black text-slate-950 block">
                          {bike.priceBDT}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Motorcycle Photography Display Stage */}
                <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-gradient-to-b from-slate-100 to-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center p-4 sm:p-8 overflow-hidden group shadow-inner">
                  {/* Subtle Red Radial Stage Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,0,18,0.06),transparent_70%)] pointer-events-none" />
                  
                  {/* High Quality Centered Motorcycle Image */}
                  <img
                    src={bike.image}
                    alt={`${bike.name} - Bangladesh Honda Private Limited`}
                    className="relative z-10 max-h-full max-w-full object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.15)] transform group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                {/* Available Color Finishes */}
                {bike.colors && bike.colors.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mr-1">
                      <Palette className="w-3.5 h-3.5 text-[#e60012]" />
                      <span>Available Colors:</span>
                    </span>
                    {bike.colors.map((color, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Categorized Specifications Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase text-slate-900 tracking-widest flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-[#e60012]" />
                    <span>Technical Specifications</span>
                  </h3>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Official BHL Standard
                  </span>
                </div>

                {/* 2-Column Structured Specs Dossier */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Group 1: Powertrain & Performance */}
                  <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-4 space-y-3">
                    <h4 className="text-[11px] font-black uppercase text-[#e60012] tracking-wider flex items-center gap-1.5 pb-2 border-b border-slate-200">
                      <Zap className="w-3.5 h-3.5 text-[#e60012]" />
                      <span>Powertrain & Performance</span>
                    </h4>

                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-center justify-between py-1 border-b border-slate-200/50">
                        <span className="text-slate-600">Displacement</span>
                        <span className="font-bold text-slate-900">{bike.cc}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-200/50">
                        <span className="text-slate-600">Maximum Power</span>
                        <span className="font-bold text-slate-900 text-right">{bike.power}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-200/50">
                        <span className="text-slate-600">Maximum Torque</span>
                        <span className="font-bold text-slate-900 text-right">{bike.torque}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-200/50">
                        <span className="text-slate-600">Fuel Delivery System</span>
                        <span className="font-bold text-slate-800 text-right">{bike.fuelSystem}</span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="text-slate-600">Transmission</span>
                        <span className="font-bold text-slate-800 text-right">{bike.transmission}</span>
                      </div>
                    </div>
                  </div>

                  {/* Group 2: Chassis, Braking & Dynamics */}
                  <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-4 space-y-3">
                    <h4 className="text-[11px] font-black uppercase text-[#e60012] tracking-wider flex items-center gap-1.5 pb-2 border-b border-slate-200">
                      <Disc className="w-3.5 h-3.5 text-[#e60012]" />
                      <span>Chassis, Safety & Dynamics</span>
                    </h4>

                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-center justify-between py-1 border-b border-slate-200/50">
                        <span className="text-slate-600">Braking System</span>
                        <span className="font-bold text-slate-900 text-right">{bike.brakes}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-200/50">
                        <span className="text-slate-600">Front Suspension</span>
                        <span className="font-bold text-slate-800 text-right">{bike.frontSuspension}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-200/50">
                        <span className="text-slate-600">Estimated Fuel Mileage</span>
                        <span className="font-bold text-emerald-600">{bike.mileage}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-200/50">
                        <span className="text-slate-600">Official Warranty</span>
                        <span className="font-bold text-slate-800">2-Year / 20,000 km</span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="text-slate-600">Free Workshop Services</span>
                        <span className="font-bold text-slate-800">4 Certified Free Services</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Key Features & Engineering Highlights */}
              {bike.features && bike.features.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-black uppercase text-slate-900 tracking-widest flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#e60012]" />
                    <span>Key Features & Technologies</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {bike.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#e60012] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Genuine Showroom Assurance Notice */}
              <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-100 text-[#e60012] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 uppercase tracking-wide">
                      100% Genuine Bangladesh Honda Product
                    </p>
                    <p className="text-slate-600 text-[11px] mt-0.5">
                      Available at Honda Galaxy Ashulia with official BHL paperwork, warranty card, and BRTA registration assistance.
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${SHOWROOM_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-800 text-xs font-bold shrink-0 self-start sm:self-auto border border-slate-200 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#e60012]" />
                  <span>Call {SHOWROOM_INFO.phone}</span>
                </a>
              </div>

            </div>

            {/* 3. Sticky Bottom Action Bar */}
            <div className="px-5 sm:px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                    {bike.retailPriceBDT ? 'Offer Price' : 'Official Price'}
                  </span>
                  <span className="text-xl font-black text-slate-900 block">
                    {bike.priceBDT}
                  </span>
                </div>

                <a
                  href="#emi"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <Calculator className="w-3.5 h-3.5 text-[#e60012]" />
                  <span>Estimate EMI</span>
                </a>
              </div>

              <div className="w-full sm:w-auto flex items-center gap-2">
                <a
                  href={`tel:${SHOWROOM_INFO.phone}`}
                  className="py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 justify-center flex-1 sm:flex-initial shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#e60012]" />
                  <span>Call Showroom</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onBookRide(bike);
                  }}
                  className="py-3 px-5 rounded-xl bg-[#e60012] hover:bg-[#c00010] text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
                >
                  <span>Book Test Ride</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
