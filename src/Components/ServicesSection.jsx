'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag,
  Wrench,
  Settings,
  ShieldCheck,
  Check,
  Phone,
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { SHOWROOM_INFO } from '@/lib/bikesData';

export default function ServicesSection({ onOpenBooking }) {
  const [activePillarId, setActivePillarId] = useState('sales');

  const pillars = [
    {
      id: 'sales',
      code: '1S',
      pillarTag: '1ST S',
      name: 'SALES',
      sLetter: 'S',
      sRest: 'ALES',
      subtitle: 'Official Showroom Experience',
      icon: ShoppingBag,
      summary: 'Direct factory-authorized showroom presenting the complete Bangladesh Honda motorcycle lineup with authentic stock, test rides, and exchange support.',
      highlights: [
        'Complete Bangladesh Honda (BHL) motorcycle lineup on display',
        'Transparent official pricing with zero hidden surcharges',
        'Official test ride facility on appointment',
        'Fair market valuation for old motorcycle exchange',
        'Dedicated BRTA registration, smart card & number plate desk'
      ],
      deliverables: [
        { label: 'Inventory', value: '100% Factory-Fresh Stock' },
        { label: 'Documentation', value: 'Official BHL Invoice & Tax Docs' },
        { label: 'Financing', value: 'Bank Credit Card EMI (6-36 Mos)' }
      ],
      badge: 'Authorized BHL Showroom',
      guarantee: 'Official Manufacturer Documentation',
      ctaLabel: 'Book Test Ride / Consult Sales',
      ctaType: 'booking'
    },
    {
      id: 'service',
      code: '2S',
      pillarTag: '2ND S',
      name: 'SERVICE',
      sLetter: 'S',
      sRest: 'ERVICE',
      subtitle: 'Certified Diagnostic Workshop',
      icon: Wrench,
      summary: 'Modern authorized service center staffed by BHL-trained mechanics using official Honda diagnostic scanners, specialized tools, and factory protocols.',
      highlights: [
        'Official 2-Year / 20,000 km manufacturer warranty servicing',
        'Full redemption of all factory-issued free service vouchers',
        'Computerized diagnostic scanner & ultrasonic FI injector cleaner',
        'Routine periodic maintenance, engine tuning & valve calibration',
        'Dedicated hydraulic service bays adhering to Japanese standards'
      ],
      deliverables: [
        { label: 'Technicians', value: 'BHL Factory Certified' },
        { label: 'Diagnostics', value: 'Computerized Honda FI System' },
        { label: 'Warranty', value: '2-Year / 20,000 KM Honored' }
      ],
      badge: 'BHL-Certified Workshop',
      guarantee: 'Authentic Diagnostic Protocols',
      ctaLabel: 'Schedule Workshop Service',
      ctaType: 'booking'
    },
    {
      id: 'spare-parts',
      code: '3S',
      pillarTag: '3RD S',
      name: 'SPARE PARTS',
      sLetter: 'S',
      sRest: 'PARE PARTS',
      subtitle: '100% Genuine OEM Inventory',
      icon: Settings,
      summary: 'Direct factory supply of sealed, authentic Honda OEM spare parts and recommended Honda 4T motorcycle lubricants sourced straight from BHL.',
      highlights: [
        '100% genuine BHL packaged parts with verifiable hologram labels',
        'Factory-specified Honda 4T engine lubricants & suspension fluids',
        'Authentic brake pads, drive chains, cables, spark plugs & air filters',
        'Strict zero-counterfeit policy protecting engine longevity',
        'Computerized part catalog matching exact chassis & engine codes'
      ],
      deliverables: [
        { label: 'Authenticity', value: '100% BHL Hologram Sealed' },
        { label: 'Lubricants', value: 'Honda 4T Factory Grade' },
        { label: 'Warranty', value: 'Zero Imitation Guarantee' }
      ],
      badge: '100% Genuine OEM Supply',
      guarantee: 'Strict Anti-Counterfeit Policy',
      ctaLabel: 'Inquire OEM Parts on WhatsApp',
      ctaType: 'whatsapp'
    },
    {
      id: 'safety',
      code: '4S',
      pillarTag: '4TH S',
      name: 'SAFETY',
      sLetter: 'S',
      sRest: 'AFETY',
      subtitle: 'PDI Standards & Rider Support',
      icon: ShieldCheck,
      summary: 'Safety is central to Honda’s global engineering. Every motorcycle undergoes a rigorous multi-point Pre-Delivery Inspection (PDI) before customer handover.',
      highlights: [
        'Mandatory 32-point Pre-Delivery Inspection (PDI) protocol',
        'CBS & Single-Channel ABS brake pressure & wheel calibration',
        'Tire pressure, chassis alignment & optical headlight beam setup',
        'Hands-on operational briefing & control walk-through for owners',
        'Certified motorcycle helmet & protective riding gear advisory'
      ],
      deliverables: [
        { label: 'Inspection', value: '32-Point Pre-Delivery Protocol' },
        { label: 'Calibration', value: 'ABS / CBS Brake Setup' },
        { label: 'Guidance', value: 'Rider Briefing & Safety Manual' }
      ],
      badge: '32-Point PDI Inspection',
      guarantee: 'Strict Pre-Delivery Safety Check',
      ctaLabel: 'Contact Safety Desk',
      ctaType: 'phone'
    }
  ];

  const activePillar = pillars.find(p => p.id === activePillarId) || pillars[0];

  const handleCtaClick = (pillar) => {
    if (pillar.ctaType === 'booking') {
      if (onOpenBooking) {
        onOpenBooking();
      } else {
        window.location.href = `tel:${SHOWROOM_INFO.phone}`;
      }
    } else if (pillar.ctaType === 'whatsapp') {
      window.open(SHOWROOM_INFO.whatsappUrl, '_blank');
    } else {
      window.location.href = `tel:${SHOWROOM_INFO.phone}`;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative border-b border-slate-200 overflow-hidden">
      
      {/* Background Ambience Subtle Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#e60012] text-[11px] font-black uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Authorized BHL Facility Standard</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            COMPLETE <span className="text-[#e60012]">4S DEALERSHIP</span>
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            The globally recognized Honda 4S standard integrates every phase of motorcycle ownership under one authorized roof in Ashulia: <strong className="text-slate-900 font-bold"><span className="text-[#e60012]">S</span>ALES</strong>, <strong className="text-slate-900 font-bold"><span className="text-[#e60012]">S</span>ERVICE</strong>, <strong className="text-slate-900 font-bold"><span className="text-[#e60012]">S</span>PARE PARTS</strong>, and <strong className="text-slate-900 font-bold"><span className="text-[#e60012]">S</span>AFETY</strong>.
          </p>
        </motion.div>

        {/* 1. VISUALIZE WHAT 4S MEANS: THE 4S LIFECYCLE FLOW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#e60012]">
                Ecosystem Architecture
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight uppercase mt-0.5">
                HOW THE <span className="text-[#e60012]">4S</span> SYSTEM PROTECTS YOUR MOTORCYCLE
              </h3>
            </div>
            <p className="text-xs text-slate-600 max-w-md">
              From the day you select your motorcycle through every scheduled service and spare replacement, all four pillars work together as an integrated lifecycle guarantee. Tap any pillar below to inspect standards & actions.
            </p>
          </div>

          {/* Connected 4-Stage Lifecycle Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              const isActive = activePillarId === pillar.id;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-[#e60012] shadow-md shadow-red-600/10 ring-1 ring-[#e60012]'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-md ${
                        isActive
                          ? 'bg-[#e60012] text-white'
                          : 'bg-slate-100 text-slate-600 group-hover:text-slate-900'
                      }`}>
                        {pillar.pillarTag}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        STAGE 0{idx + 1}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-red-50 text-[#e60012]'
                          : 'bg-slate-100 text-slate-700 group-hover:text-[#e60012]'
                      }`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black tracking-tight text-slate-900 uppercase">
                          <span className="text-[#e60012] font-black">{pillar.sLetter}</span>
                          {pillar.sRest}
                        </h4>
                        <span className="text-[11px] text-slate-500 line-clamp-1">
                          {pillar.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                    <span>{pillar.deliverables[0].label}: {pillar.deliverables[0].value}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                      isActive ? 'text-[#e60012] translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 2. 4S SPOTLIGHT & DIRECT ACTION DESK */}
        <motion.div
          layout
          className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800"
        >
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/15 blur-[120px] pointer-events-none rounded-full" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10"
            >
              {/* Left Column: Deep Dive Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-[#e60012] text-white text-[10px] font-black uppercase tracking-widest">
                    ACTIVE SPOTLIGHT: {activePillar.pillarTag}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold uppercase tracking-wider border border-slate-700">
                    {activePillar.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl font-black tracking-tight uppercase text-white">
                    <span className="text-[#e60012] font-black">{activePillar.sLetter}</span>{activePillar.sRest}
                    <span className="text-slate-400 text-xl sm:text-2xl font-light ml-2">
                      — {activePillar.subtitle}
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
                    {activePillar.summary}
                  </p>
                </div>

                {/* 3 Value Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {activePillar.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {item.label}
                      </span>
                      <span className="text-xs font-black text-white block mt-0.5">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Direct Action Triggers */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleCtaClick(activePillar)}
                    className="px-6 py-3.5 rounded-xl bg-[#e60012] hover:bg-[#c00010] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>{activePillar.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`tel:${SHOWROOM_INFO.phone}`}
                    className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#e60012]" />
                    <span>Call Showroom: {SHOWROOM_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Full Official Protocols Checklist */}
              <div className="lg:col-span-5 bg-slate-800/60 rounded-2xl p-6 border border-slate-700/80 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <span className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e60012]" />
                    <span>Official BHL Standards & Checklist</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#e60012] font-black uppercase">
                    {activePillar.code} STANDARDS
                  </span>
                </div>

                <ul className="space-y-3">
                  {activePillar.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-red-600/20 text-[#e60012] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#e60012]" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-700 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#e60012]" />
                    <span>Ashulia, Savar Dealership Desk</span>
                  </div>
                  <span className="text-slate-300 font-bold">10 AM – 8 PM</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
