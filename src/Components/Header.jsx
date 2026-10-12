'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin, ChevronRight, Clock, ShieldCheck } from 'lucide-react';
import { SHOWROOM_INFO } from '@/lib/bikesData';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md shadow-slate-200/50'
      : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 shadow-xs'
      }`}>
      {/* Top Dealer Status Banner */}
      <div className="bg-[#b3000e] text-white text-[11px] py-1.5 px-4 hidden sm:block border-b border-red-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="bg-white text-[#b3000e] px-1.5 py-0.5 rounded font-black text-[9px] tracking-widest uppercase">
              Official 4S Dealer
            </span>
            <span className="font-semibold text-white">
              Bangladesh Honda Private Limited (BHL) — Ashulia, Savar
            </span>
          </div>
          <div className="flex items-center space-x-5 text-red-100">
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3 text-white" />
              <span>Sat – Thu: 10 AM – 8 PM</span>
            </div>
            <span className="text-red-300/60">|</span>
            <div className="flex items-center space-x-3 text-white font-bold">
              <a href={`tel:${SHOWROOM_INFO.phone}`} className="hover:underline flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>{SHOWROOM_INFO.phone}</span>
              </a>
              <span className="text-red-300/60">•</span>
              <a href={`tel:${SHOWROOM_INFO.phone2}`} className="hover:underline">
                <span>{SHOWROOM_INFO.phone2}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Dealership Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group py-1" aria-label="Honda Galaxy Ashulia Home">
            <img
              src="/honda-galaxy-logo-light.png"
              alt="Honda Galaxy Ashulia"
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-102 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-slate-700">
            <a href="#offers" className="hover:text-[#e60012] transition-colors py-1 flex items-center gap-1 text-[#e60012]">
              <span className="w-2 h-2 rounded-full bg-[#e60012] animate-pulse" />
              Festive Offers
            </a>
            <a href="#models" className="hover:text-[#e60012] transition-colors py-1">
              Motorcycles
            </a>
            <a href="#services" className="hover:text-[#e60012] transition-colors py-1">
              4S Workshop
            </a>
            <a href="#customers" className="hover:text-[#e60012] transition-colors py-1">
              Happy Riders
            </a>
            <a href="#emi" className="hover:text-[#e60012] transition-colors py-1">
              Bank EMI
            </a>
          </nav>

          {/* Actions & Enquiry CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center space-x-1.5 px-4.5 py-2.5 rounded-xl bg-[#e60012] hover:bg-[#c00010] text-white font-black text-xs tracking-wider uppercase shadow-md shadow-red-600/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book Test Ride</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-[#e60012] text-white font-black text-xs uppercase tracking-wider"
            >
              Book Ride
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-black hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2 text-xs font-bold uppercase tracking-wider text-slate-800">
            <a
              href="#offers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg bg-red-50 text-[#e60012] hover:bg-red-100 transition-colors flex items-center justify-between"
            >
              <span>শারদীয় উৎসব অফার</span>
              <span className="text-[10px] bg-[#e60012] text-white px-2 py-0.5 rounded font-black">SAVE 8K</span>
            </a>
            <a
              href="#models"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Motorcycles
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              4S Facility & Services
            </a>
            <a
              href="#customers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Happy Riders (Deliveries)
            </a>
            <a
              href="#emi"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Bank EMI Calculator
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Showroom Location & Hours
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-200 flex flex-col space-y-2">
            <a
              href={`tel:${SHOWROOM_INFO.phone}`}
              className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider border border-slate-200"
            >
              <Phone className="w-4 h-4 text-[#e60012]" />
              <span>Call: {SHOWROOM_INFO.phone} / {SHOWROOM_INFO.phone2}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
