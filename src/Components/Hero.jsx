'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Wrench, 
  CreditCard, 
  ArrowRight,
  MapPin
} from 'lucide-react';
import { SHOWROOM_INFO, BIKES_DATA } from '@/lib/bikesData';

export default function Hero({ onOpenBooking }) {
  // Use only the official Facebook campaign banner twice in the carousel
  const bannerSlides = [
    {
      id: 'puja-offer-slide-1',
      image: '/campaigns/facebook-banner-puja-offer.png',
      alt: 'Honda Galaxy Ashulia Facebook Offer Banner - Slide 1',
      bike: BIKES_DATA.find(b => b.id === 'hornet-2-0')
    },
    {
      id: 'puja-offer-slide-2',
      image: '/campaigns/facebook-banner-puja-offer.png',
      alt: 'Honda Galaxy Ashulia Facebook Offer Banner - Slide 2',
      bike: BIKES_DATA.find(b => b.id === 'x-blade-160')
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const totalSlides = bannerSlides.length;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleSelect = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Auto-play timer: slides automatically every 4.8 seconds, pauses on hover / touch
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4800);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const activeSlide = bannerSlides[currentIndex];

  const handleSlideClick = () => {
    if (activeSlide?.bike) {
      onOpenBooking(activeSlide.bike);
    } else {
      onOpenBooking(null);
    }
  };

  return (
    <section 
      className="relative pt-24 sm:pt-28 pb-10 bg-slate-50 border-b border-slate-200"
      aria-label="Honda Galaxy Promotional Banner Carousel"
      role="region"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 mt-5">
        
        {/* Top Dealership Notification & Verification Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1 border-b border-slate-200/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e60012] animate-ping" />
            <span className="text-xs font-black uppercase tracking-wider text-slate-900">
              Honda Galaxy Ashulia • Authorized BHL 4S Showroom
            </span>
            <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200 text-[#e60012] text-[10px] font-black uppercase">
              <Sparkles className="w-3 h-3" />
              শারদীয় উৎসব অফার চলছে
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#e60012]" />
              বাইপাইল, আশুলিয়া
            </span>
            <span className="hidden sm:inline">•</span>
            <a 
              href={`tel:${SHOWROOM_INFO.phone}`}
              className="text-slate-800 hover:text-[#e60012] font-bold transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#e60012]" />
              {SHOWROOM_INFO.phone}
            </a>
          </div>
        </div>

        {/* 1. SEAMLESS WIDESCREEN HERO BANNER CAROUSEL */}
        <div 
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-xl shadow-slate-200/60 group select-none cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onClick={handleSlideClick}
        >
          {/* Natural 2.3:1 Aspect Ratio matching the 960x418 banner */}
          <div className="relative aspect-[16/9] sm:aspect-[2.3/1] w-full overflow-hidden bg-slate-100 flex items-center justify-center">
            
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeSlide.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x < -40 || velocity.x < -300) {
                    handleNext();
                  } else if (offset.x > 40 || velocity.x > 300) {
                    handlePrev();
                  }
                }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                <img
                  src={activeSlide.image}
                  alt={activeSlide.alt}
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Left Navigation Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous banner"
              className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-black shadow-lg border border-slate-200/80 flex items-center justify-center transition-all opacity-85 sm:opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#e60012]"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Navigation Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next banner"
              className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-black shadow-lg border border-slate-200/80 flex items-center justify-center transition-all opacity-85 sm:opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#e60012]"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Bottom Floating Indicator Dots */}
            <div 
              className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/20 shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              {bannerSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    currentIndex === idx
                      ? 'w-6 sm:w-8 bg-[#e60012]'
                      : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* 2. DEALERSHIP QUICK ACTIONS & 4S VERIFICATION STRIP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Quick CTA Actions (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 flex flex-col justify-between gap-3 shadow-xs">
            <div className="space-y-1">
              <p className="text-[11px] font-black uppercase tracking-wider text-[#e60012]">
                Instant Showroom Assistance
              </p>
              <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase">
                Ready to ride your dream Honda?
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="#models"
                className="px-4 py-2.5 rounded-xl bg-[#e60012] hover:bg-[#c00010] text-white text-xs font-black uppercase tracking-wider shadow-md shadow-red-600/20 transition-all flex items-center gap-1.5 flex-1 sm:flex-initial justify-center"
              >
                <span>Explore Bikes</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenBooking(activeSlide?.bike || null)}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 flex-1 sm:flex-initial justify-center"
              >
                <span>Book Test Ride</span>
              </button>

              <a
                href={`tel:${SHOWROOM_INFO.phone}`}
                className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-xs flex-1 sm:flex-initial justify-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#e60012]" />
                <span>Call Showroom</span>
              </a>
            </div>
          </div>

          {/* Official 4S Dealership Trust Highlights (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            
            {/* Feature 1: BHL Warranty */}
            <div className="rounded-2xl bg-white border border-slate-200 p-3.5 flex flex-col justify-between shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-[#e60012] mb-2">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Manufacturer</p>
                <p className="text-xs font-black text-slate-900">2 Yrs / 20k KM Warranty</p>
              </div>
            </div>

            {/* Feature 2: 4 Free Servicing */}
            <div className="rounded-2xl bg-white border border-slate-200 p-3.5 flex flex-col justify-between shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-[#e60012] mb-2">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Showroom 4S</p>
                <p className="text-xs font-black text-slate-900">৪টি ফ্রি সার্ভিসিং</p>
              </div>
            </div>

            {/* Feature 3: Bank EMI */}
            <div className="rounded-2xl bg-white border border-slate-200 p-3.5 flex flex-col justify-between shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-[#e60012] mb-2">
                <CreditCard className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Payment Facility</p>
                <p className="text-xs font-black text-slate-900">০% ইন্টারেস্ট EMI</p>
              </div>
            </div>

            {/* Feature 4: Genuine Parts */}
            <div className="rounded-2xl bg-white border border-slate-200 p-3.5 flex flex-col justify-between shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-[#e60012] mb-2">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Authenticity</p>
                <p className="text-xs font-black text-slate-900">১০০% জেনুইন পার্টস</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
