'use client';

import { Gauge, Fuel, Disc, ChevronRight, Zap, Info, Tag } from 'lucide-react';

export default function BikeCard({ bike, onSelectBike, onBookRide }) {
  return (
    <article className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-[#e60012]/60 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-slate-300/60 h-full">
      
      {/* Top Banner & Vehicle Photography */}
      <div className="relative aspect-[16/10] bg-gradient-to-b from-slate-100/80 to-slate-50 overflow-hidden flex items-center justify-center p-4 border-b border-slate-100">
        {/* Subtle radial lighting behind motorcycle */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(230,0,18,0.06),transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_60%,rgba(230,0,18,0.12),transparent_70%)] transition-colors duration-500" />
        
        <img
          src={bike.image}
          alt={`${bike.name} - Bangladesh Honda Private Limited at Honda Galaxy Ashulia`}
          className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 filter drop-shadow-md pointer-events-none select-none"
          loading="lazy"
          draggable="false"
        />

        {/* Category / Performance Badge */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-1 items-start">
          <span className="bg-[#e60012] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
            {bike.badge}
          </span>
          {bike.hasOffer && (
            <span className="bg-amber-500 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
              <Tag className="w-2.5 h-2.5" />
              <span>{bike.cashback}</span>
            </span>
          )}
        </div>

        {/* Engine CC Pill */}
        <div className="absolute top-3 right-3 z-20">
          <span className="bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200 text-[11px] font-mono font-bold px-2 py-0.5 rounded shadow-xs">
            {bike.cc}
          </span>
        </div>
      </div>

      {/* Card Content & Telemetry */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-lg font-black text-slate-900 group-hover:text-[#e60012] transition-colors uppercase tracking-tight">
              {bike.name}
            </h3>
          </div>
          <p className="text-xs text-slate-500 italic mt-0.5 line-clamp-1">
            "{bike.tagline}"
          </p>
        </div>

        {/* Technical Specs Trio */}
        <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center text-[11px]">
          <div>
            <span className="text-[9px] uppercase font-bold text-slate-500 block tracking-wider">Power</span>
            <span className="font-bold text-slate-800 mt-0.5 truncate block">
              {bike.power ? bike.power.split('@')[0] : 'N/A'}
            </span>
          </div>
          <div className="border-x border-slate-200">
            <span className="text-[9px] uppercase font-bold text-slate-500 block tracking-wider">Mileage</span>
            <span className="font-bold text-emerald-600 mt-0.5 truncate block">
              {bike.mileage}
            </span>
          </div>
          <div>
            <span className="text-[9px] uppercase font-bold text-slate-500 block tracking-wider">Brakes</span>
            <span className="font-bold text-slate-800 mt-0.5 truncate block">
              {bike.brakes.includes('ABS') ? 'ABS' : 'CBS'}
            </span>
          </div>
        </div>

        {/* Price & Action Triggers */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            {bike.retailPriceBDT ? (
              <div>
                <span className="text-[10px] text-slate-400 line-through block font-medium">
                  খুচরা: {bike.retailPriceBDT}
                </span>
                <span className="text-base sm:text-lg font-black text-[#e60012]">
                  {bike.priceBDT}
                </span>
              </div>
            ) : (
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Official Price</span>
                <span className="text-base sm:text-lg font-black text-slate-900">{bike.priceBDT}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onSelectBike(bike)}
              className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black border border-slate-200 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1"
              aria-label={`View full technical specs for ${bike.name}`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>Specs</span>
            </button>

            <button
              onClick={() => onBookRide(bike)}
              className="px-3.5 py-2 rounded-lg bg-[#e60012] hover:bg-[#c00010] text-white text-xs font-black uppercase tracking-wider transition-colors shadow-md shadow-red-600/20 flex items-center gap-1"
              aria-label={`Book test ride for ${bike.name}`}
            >
              <span>Book</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </article>
  );
}
