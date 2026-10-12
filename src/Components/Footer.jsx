'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { SHOWROOM_INFO, BIKES_DATA } from '@/lib/bikesData';

export default function Footer({ onSelectBike }) {
  return (
    <footer className="bg-slate-100 text-slate-600 border-t border-slate-200 pt-16 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-200">
          
          {/* Brand & Dealership Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3.5">
              <img
                src="/honda-galaxy-logo-light.png"
                alt="Honda Galaxy Ashulia"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Official Authorized 4S Dealership of <strong className="text-slate-900">Bangladesh Honda Private Limited (BHL)</strong>. Providing genuine motorcycle sales, certified maintenance, and OEM spare parts.
            </p>

            {/* Facebook Page Official Link */}
            <div className="pt-2">
              <a
                href={SHOWROOM_INFO.fbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider hover:bg-blue-100 transition-colors shadow-xs"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-600">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase text-slate-900 tracking-widest">
              Showroom Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><a href="#offers" className="text-[#e60012] hover:underline">শারদীয় উৎসব অফার</a></li>
              <li><a href="#models" className="hover:text-[#e60012] transition-colors">Motorcycles Lineup</a></li>
              <li><a href="#services" className="hover:text-[#e60012] transition-colors">4S Workshop & Services</a></li>
              <li><a href="#customers" className="hover:text-[#e60012] transition-colors">Happy Riders (Deliveries)</a></li>
              <li><a href="#emi" className="hover:text-[#e60012] transition-colors">Bank EMI Calculator</a></li>
              <li><a href="#location" className="hover:text-[#e60012] transition-colors">Showroom & Map</a></li>
            </ul>
          </div>

          {/* Popular Models */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase text-slate-900 tracking-widest">
              Popular Motorcycles
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {BIKES_DATA.slice(0, 6).map((bike) => (
                <li key={bike.id}>
                  <button
                    onClick={() => onSelectBike && onSelectBike(bike)}
                    className="hover:text-[#e60012] transition-colors text-left"
                  >
                    {bike.name} ({bike.priceBDT})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Showroom Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase text-slate-900 tracking-widest">
              Showroom Contact
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e60012] shrink-0 mt-0.5" />
                <span>Shah Alam Tower, Bogabari, Baipail, Ashulia, Savar, Dhaka-1349</span>
              </p>
              <div className="space-y-1">
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#e60012] shrink-0" />
                  <a href={`tel:${SHOWROOM_INFO.phone}`} className="text-slate-900 font-bold hover:underline">
                    {SHOWROOM_INFO.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#e60012] shrink-0" />
                  <a href={`tel:${SHOWROOM_INFO.phone2}`} className="text-slate-900 font-bold hover:underline">
                    {SHOWROOM_INFO.phone2}
                  </a>
                </p>
              </div>
              <p className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <a
                  href={SHOWROOM_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline font-bold"
                >
                  WhatsApp: +8801711-777525
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Honda Galaxy - Ashulia. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Authorized 4S Dealership of Bangladesh Honda Private Limited (BHL). Honda® is a registered trademark of Honda Motor Co., Ltd.
          </p>
        </div>

      </motion.div>
    </footer>
  );
}
