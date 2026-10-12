'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ExternalLink,
  Phone,
  MoveHorizontal
} from 'lucide-react';
import { CUSTOMER_DELIVERIES, SHOWROOM_INFO } from '@/lib/bikesData';
import { useDraggableCarousel } from '@/lib/useDraggableCarousel';

export default function HappyCustomers({ onOpenBooking }) {
  const {
    carouselRef,
    isDragging,
    canScrollLeft,
    canScrollRight,
    currentSlideIndex: activeSlide,
    scrollCarousel,
    scrollToSlide,
    dragProps
  } = useDraggableCarousel(CUSTOMER_DELIVERIES);

  return (
    <section id="customers" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      
      {/* Background Decorative Tech Grid */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#e60012] text-[11px] font-black uppercase tracking-widest shadow-xs">
              <Heart className="w-3.5 h-3.5 fill-[#e60012] text-[#e60012]" />
              <span>Real Deliveries • আমাদের সন্তুষ্ট গ্রাহকবৃন্দ</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
              HAPPY RIDERS OF <span className="text-[#e60012]">HONDA GALAXY</span>
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl font-normal leading-relaxed flex items-center gap-1.5 flex-wrap">
              <span>হোন্ডা গ্যালাক্সি আশুলিয়া শোরুমে বাইক ডেলিভারি ও চাবি হস্তান্তরের বাস্তব চিত্র। শত শত সন্তুষ্ট রাইডারের আস্থা এবং জেনুইন বিএইচএল সার্ভিসের অবিচল প্রতিশ্রুতি।</span>
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start lg:self-end">
            <button
              onClick={() => scrollCarousel('left')}
              disabled={!canScrollLeft}
              aria-label="Previous customer delivery"
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
              aria-label="Next customer delivery"
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'bg-white border-slate-300 text-slate-800 hover:bg-[#e60012] hover:text-white hover:border-[#e60012] shadow-xs cursor-pointer'
                  : 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Draggable Customer Deliveries Carousel Track */}
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
          {CUSTOMER_DELIVERIES.map((customer, idx) => (
            <motion.article
              key={customer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="shrink-0 w-[84vw] sm:w-[340px] lg:w-[360px] snap-start bg-white rounded-3xl border border-slate-200/90 hover:border-[#e60012]/60 overflow-hidden shadow-md shadow-slate-200/50 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Delivery Photo Container */}
              <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden border-b border-slate-100">
                <img
                  src={customer.image}
                  alt={`${customer.model} delivery at Honda Galaxy Ashulia`}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 pointer-events-none select-none"
                  loading="lazy"
                  draggable="false"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[#e60012] text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                    {customer.badge}
                  </span>
                </div>
              </div>

              {/* Caption & Metadata */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                      Official Delivery
                    </span>
                    <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">
                      {customer.color}
                    </span>
                  </div>

                  <h4 className="text-base font-black text-slate-900 group-hover:text-[#e60012] transition-colors">
                    {customer.model}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {customer.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 font-semibold text-emerald-700">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    BHL Warranty Active
                  </span>
                  <span>Baipail, Savar</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-1">
          {CUSTOMER_DELIVERIES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to customer slide ${idx + 1}`}
              className={`h-2 transition-all rounded-full ${
                activeSlide === idx
                  ? 'w-8 bg-[#e60012]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Deliveries Assurance & Call-to-Action Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight">
              Ready To Become Our Next Proud Rider?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Visit Honda Galaxy Ashulia today for instant quotations, exchange evaluation, or test rides.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#e60012] hover:bg-[#c00010] text-white font-black text-xs uppercase tracking-wider shadow-md shadow-red-600/25 transition-all text-center"
            >
              Book Test Ride Today
            </button>
            <a
              href={`tel:${SHOWROOM_INFO.phone}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors border border-slate-200 text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#e60012]" />
              <span>Call: {SHOWROOM_INFO.phone}</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
