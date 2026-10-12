'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { SHOWROOM_INFO } from '@/lib/bikesData';

export default function FloatingActions() {
  return (
    <aside aria-label="Quick contact options" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp One-Tap Floating Pill */}
      <a
        href={SHOWROOM_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Honda Galaxy Ashulia"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 hover:scale-108 active:scale-95 transition-all group relative border-2 border-white"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-16 bg-white border border-slate-200 text-slate-800 text-xs font-bold py-1.5 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          Chat on WhatsApp
        </span>
      </a>

      {/* Direct Phone Call Floating Pill */}
      <a
        href={`tel:${SHOWROOM_INFO.phone}`}
        aria-label="Call Honda Galaxy Ashulia Showroom Hotline"
        className="w-13 h-13 rounded-full bg-[#e60012] hover:bg-[#c00010] text-white flex items-center justify-center shadow-xl shadow-red-600/30 hover:scale-108 active:scale-95 transition-all group relative border-2 border-white"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-16 bg-white border border-slate-200 text-slate-800 text-xs font-bold py-1.5 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          Call: {SHOWROOM_INFO.phone}
        </span>
      </a>
    </aside>
  );
}
