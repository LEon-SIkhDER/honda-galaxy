'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, ExternalLink, MessageCircle, Compass } from 'lucide-react';
import { SHOWROOM_INFO } from '@/lib/bikesData';

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#e60012] text-[11px] font-black uppercase tracking-widest shadow-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>Showroom Location</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            VISIT OUR <span className="text-[#e60012]">ASHULIA SHOWROOM</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Experience the latest Honda motorcycles in person, take a test ride, or bring your bike for certified 4S workshop servicing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Showroom Details & Schedule Dossier */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-xl shadow-slate-200/50"
          >
            <div className="space-y-6">
              
              {/* Address & Landmarks */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 text-[#e60012] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-slate-500 tracking-wider">
                    Physical Address
                  </h4>
                  <p className="text-base font-bold text-slate-900 mt-1 leading-snug">
                    {SHOWROOM_INFO.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-semibold">
                    বাংলা ঠিকানা: {SHOWROOM_INFO.addressBn}
                  </p>
                  <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#e60012] shrink-0" />
                    <span>Near Baipail Intersection & DEPZ Gateway, Savar</span>
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 text-[#e60012] flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-slate-500 tracking-wider">
                    Showroom Hours
                  </h4>
                  <div className="mt-1 space-y-1 text-xs">
                    <p className="text-slate-800 font-semibold">
                      {SHOWROOM_INFO.openingHours.weekdays}
                    </p>
                    <p className="text-slate-500 font-medium">
                      {SHOWROOM_INFO.openingHours.friday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Hotlines */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 text-[#e60012] flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-slate-500 tracking-wider">
                    Showroom Hotlines
                  </h4>
                  <div className="mt-1 space-y-1">
                    <p className="text-sm font-black text-slate-900">
                      <a href={`tel:${SHOWROOM_INFO.phone}`} className="hover:text-[#e60012] transition-colors">
                        {SHOWROOM_INFO.phone}
                      </a>
                    </p>
                    <p className="text-sm font-black text-slate-900">
                      <a href={`tel:${SHOWROOM_INFO.phone2}`} className="hover:text-[#e60012] transition-colors">
                        {SHOWROOM_INFO.phone2}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Direction CTAs */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <a
                href={SHOWROOM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#e60012] hover:bg-[#c00010] text-white font-black text-xs uppercase tracking-wider shadow-md shadow-red-600/25 transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps / Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={SHOWROOM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-white hover:bg-slate-100 text-emerald-700 border border-emerald-200 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat with Ashulia Showroom on WhatsApp</span>
              </a>
            </div>

          </motion.div>

          {/* Interactive Google Map Embed Frame */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50 min-h-[380px] relative bg-slate-100 flex flex-col"
          >
            <iframe
              title="Honda Galaxy Ashulia Showroom Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.140885148003!2d90.27270037590897!3d23.936195381842888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e90016423139%3A0xea511abdc5140960!2sHonda%20Galaxy!5e0!3m2!1sen!2sbd!4v1728710000000!5m2!1sen!2sbd"
              className="w-full h-full flex-1 border-0 min-h-[380px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
