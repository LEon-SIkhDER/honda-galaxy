'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BikeCard from './BikeCard';
import { BIKES_DATA, SHOWROOM_INFO } from '@/lib/bikesData';
import { useDraggableCarousel } from '@/lib/useDraggableCarousel';
import {
  PhoneCall,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Flame,
  MoveHorizontal
} from 'lucide-react';

export default function BikeGrid({ onSelectBike, onBookRide }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredBikes = activeCategory === 'all'
    ? BIKES_DATA
    : activeCategory === 'offers'
    ? BIKES_DATA.filter((b) => b.hasOffer)
    : BIKES_DATA.filter((bike) => bike.category === activeCategory);

  const {
    carouselRef,
    isDragging,
    canScrollLeft,
    canScrollRight,
    currentSlideIndex,
    scrollCarousel,
    scrollToSlide,
    dragProps
  } = useDraggableCarousel(filteredBikes);

  return (
    <section id="models" className="py-20 bg-slate-50 relative border-b border-slate-200">
      
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#e60012] text-[11px] font-black uppercase tracking-widest shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Bangladesh Honda Lineup</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
              SHOWROOM <span className="text-[#e60012]">MOTORCYCLES</span>
            </h2>
            <p className="text-sm text-slate-600 max-w-xl font-normal leading-relaxed">
              Explore authentic Bangladesh Honda motorcycles available at Honda Galaxy Ashulia. Every model is backed by official BHL manufacturer warranty and certified 4S workshop support.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-xs">
            <button
              onClick={() => { setActiveCategory('all'); scrollToSlide(0); }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#e60012] text-white shadow-sm shadow-red-600/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Models ({BIKES_DATA.length})
            </button>
            <button
              onClick={() => { setActiveCategory('offers'); scrollToSlide(0); }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeCategory === 'offers'
                  ? 'bg-[#e60012] text-white shadow-sm shadow-red-600/30'
                  : 'text-red-600 hover:bg-red-50'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Festive Offers</span>
            </button>
            <button
              onClick={() => { setActiveCategory('sports'); scrollToSlide(0); }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'sports'
                  ? 'bg-[#e60012] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Sports & Naked
            </button>
            <button
              onClick={() => { setActiveCategory('commuter'); scrollToSlide(0); }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'commuter'
                  ? 'bg-[#e60012] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Commuter
            </button>
            <button
              onClick={() => { setActiveCategory('scooter'); scrollToSlide(0); }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'scooter'
                  ? 'bg-[#e60012] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Scooters
            </button>
          </div>
        </motion.div>

        {/* MOTORCYCLE CAROUSEL SHOWCASE */}
        <div className="space-y-6">
          {/* Carousel Header & Controls */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                <span>Motorcycles Showcase Carousel</span>
                <span className="text-xs bg-slate-200 text-slate-700 font-mono font-bold px-2 py-0.5 rounded-full hidden sm:inline-block">
                  {filteredBikes.length} Models
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                <MoveHorizontal className="w-3.5 h-3.5 text-[#e60012]" />
                <span>Click and drag or swipe horizontally to explore models. Click Specs to view details.</span>
              </p>
            </div>

            {/* Navigation Buttons for Carousel */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={!canScrollLeft}
                aria-label="Previous motorcycle"
                className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? 'bg-white border-slate-300 text-slate-800 hover:bg-[#e60012] hover:text-white hover:border-[#e60012] shadow-xs cursor-pointer'
                    : 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollCarousel('right')}
                disabled={!canScrollRight}
                aria-label="Next motorcycle"
                className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
                  canScrollRight
                    ? 'bg-white border-slate-300 text-slate-800 hover:bg-[#e60012] hover:text-white hover:border-[#e60012] shadow-xs cursor-pointer'
                    : 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Draggable & Swipeable Carousel Track */}
          <div
            ref={carouselRef}
            {...dragProps}
            className={`flex gap-6 overflow-x-auto pb-6 pt-2 select-none no-scrollbar ${
              isDragging
                ? 'cursor-grabbing snap-none scroll-auto'
                : 'cursor-grab snap-x snap-mandatory scroll-smooth'
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredBikes.map((bike, idx) => (
              <div
                key={bike.id}
                className="shrink-0 w-[84vw] sm:w-[350px] lg:w-[370px] snap-start"
              >
                <BikeCard
                  bike={bike}
                  onSelectBike={onSelectBike}
                  onBookRide={onBookRide}
                />
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {filteredBikes.map((bike, idx) => (
              <button
                key={bike.id}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 transition-all rounded-full ${
                  currentSlideIndex === idx
                    ? 'w-8 bg-[#e60012]'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dealership Hotline Advisory Banner (Light Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-slate-200/50"
        >
          <div className="flex items-center gap-4">
            <div className="w-13 h-13 rounded-2xl bg-red-50 text-[#e60012] border border-red-200 flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base font-black text-slate-900 uppercase tracking-wide">
                Need Help Choosing The Right Honda Motorcycle?
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Visit Honda Galaxy Ashulia at Shah Alam Tower, Baipail or contact our certified sales consultants directly for real-time stock and color availability.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${SHOWROOM_INFO.phone}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#e60012] hover:bg-[#c00010] text-white font-black text-xs uppercase tracking-wider transition-all shrink-0 shadow-md shadow-red-600/25 text-center"
            >
              Hotline: {SHOWROOM_INFO.phone}
            </a>
            <a
              href={`tel:${SHOWROOM_INFO.phone2}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all shrink-0 border border-slate-200 text-center"
            >
              {SHOWROOM_INFO.phone2}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
