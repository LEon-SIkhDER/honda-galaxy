'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Flame, ExternalLink } from 'lucide-react';
import { SHOWROOM_INFO, FESTIVE_CAMPAIGNS, BIKES_DATA } from '@/lib/bikesData';

export default function OffersBanner({ onOpenBooking }) {
  const postCards = FESTIVE_CAMPAIGNS.filter(c => c.id !== 'puja-cover-offer');

  return (
    <section id="offers" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden border-b border-slate-200">
      
      {/* Subtle Light Dot Grid Background */}
      <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 pb-2 border-b border-slate-200/80"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#e60012] text-[10px] sm:text-[11px] font-black uppercase tracking-widest shadow-xs">
              <Flame className="w-3.5 h-3.5 text-[#e60012]" />
              <span>হোন্ডা গ্যালাক্সি আশুলিয়া — ভেরিফায়েড অফার ও আপডেট</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase break-words">
              SEASONAL OFFERS & <span className="text-[#e60012]">NEW ARRIVALS</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-normal leading-relaxed">
              Honda Galaxy Ashulia — Active Promotions & Showroom Updates. শারদীয় উৎসবের বিশেষ ক্যাশব্যাক সেভিংস, নতুন মডেলের আগমন এবং শোরুমের ভেরিফায়েড সার্ভিস সুবিধা।
            </p>
          </div>

          <a
            href={SHOWROOM_INFO.fbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 text-xs font-bold uppercase tracking-wider transition-all self-stretch sm:self-start lg:self-end shadow-xs shrink-0"
          >
            <span>Visit Official Facebook Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Campaign Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {postCards.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="w-full max-w-sm sm:max-w-none mx-auto bg-white rounded-2xl border border-slate-200/90 hover:border-[#e60012]/60 overflow-hidden shadow-md shadow-slate-200/50 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Post Image Container */}
              <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden border-b border-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#e60012] text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                    {post.badge}
                  </span>
                </div>
              </div>

              {/* Post Caption & Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <h4 className="text-sm font-black text-slate-900 leading-snug group-hover:text-[#e60012] transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>
                </div>

                {/* Pricing / Meta if available */}
                {post.offerPrice && (
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 line-through block">
                        খুচরা: {post.retailPrice}
                      </span>
                      <span className="font-black text-slate-900 block">
                        অফার: {post.offerPrice}
                      </span>
                    </div>
                    <span className="text-[10px] font-black bg-red-100 text-[#e60012] px-2 py-0.5 rounded">
                      সেভ {post.savings}
                    </span>
                  </div>
                )}

                {/* Action Button */}
                <div className="pt-2 border-t border-slate-100">
                  <button
                    onClick={() => {
                      const targetBike = post.bikeId ? BIKES_DATA.find(b => b.id === post.bikeId) : null;
                      onOpenBooking(targetBike);
                    }}
                    className="w-full py-2.5 sm:py-3 rounded-xl bg-slate-100 hover:bg-[#e60012] text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 active:scale-[0.99]"
                  >
                    <span>{post.bikeId ? 'Inquire / Book Now' : 'Contact Showroom'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
