'use client';

import { useState, useEffect } from 'react';
import { X, Phone, User, Send, ChevronRight, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';
import { BIKES_DATA, SHOWROOM_INFO } from '@/lib/bikesData';

export default function BookingModal({ isOpen, initialBike, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bike: initialBike ? initialBike.name : BIKES_DATA[0].name,
    inquiryType: 'Test Ride',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (typeof window !== 'undefined' && window.lenis) {
      window.lenis.stop();
    }

    return () => {
      document.body.style.overflow = originalOverflow || 'unset';
      if (typeof window !== 'undefined' && window.lenis) {
        window.lenis.start();
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const activeBike = initialBike ? initialBike.name : formData.bike;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error('Please enter your Name and Mobile Number.');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Thank you, ${formData.name}! Your request has been sent to Honda Galaxy Ashulia.`);

      // WhatsApp direct forward
      const text = encodeURIComponent(
        `Hello Honda Galaxy Ashulia,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested Motorcycle: ${activeBike}\nRequest Type: ${formData.inquiryType}\nNote: ${formData.notes || 'N/A'}`
      );
      window.open(`https://wa.me/8801711777525?text=${text}`, '_blank');

      onClose();
    }, 500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
    >
      <div
        data-lenis-prevent="true"
        className="relative w-full max-w-lg bg-white border border-slate-200/90 rounded-3xl shadow-2xl p-6 sm:p-8 my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 text-slate-500 hover:text-black hover:bg-slate-200 transition-colors border border-slate-200"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6 space-y-2">
          <img
            src="/honda-galaxy-logo-light.png"
            alt="Honda Galaxy Ashulia"
            className="h-9 w-auto mx-auto object-contain"
          />
          <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#e60012] text-[10px] font-black uppercase tracking-widest inline-block shadow-xs">
            Showroom Direct Request
          </span>
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
            BOOK A TEST RIDE / INQUIRE
          </h3>
          <p className="text-xs text-slate-500">
            Our Ashulia showroom team will get in touch with you shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="e.g. Tanvir Ahmed"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#e60012] transition-colors shadow-xs"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Mobile Number (Bangladesh) *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                required
                placeholder="017XXXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#e60012] transition-colors shadow-xs"
              />
            </div>
          </div>

          {/* Selected Motorcycle */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Selected Motorcycle
            </label>
            <select
              value={activeBike}
              onChange={(e) => setFormData({ ...formData, bike: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#e60012] transition-colors font-semibold shadow-xs"
            >
              {BIKES_DATA.map((bike) => (
                <option key={bike.id} value={bike.name}>
                  {bike.name} ({bike.priceBDT}) {bike.hasOffer ? `— [${bike.cashback}]` : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Purpose of Request */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Purpose of Request
            </label>
            <select
              value={formData.inquiryType}
              onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#e60012] transition-colors font-medium shadow-xs"
            >
              <option value="Test Ride">Book a Test Ride</option>
              <option value="Festive Offer Inquiry">Sharodiya Festive Offer Booking</option>
              <option value="Price & Purchase">Price Quotation & Availability</option>
              <option value="Bank Credit Card EMI">Bank Credit Card EMI Inquiries</option>
              <option value="Old Bike Exchange">Old Bike Exchange / Trade-In</option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Preferred Date / Notes (Optional)
            </label>
            <textarea
              rows="2"
              placeholder="e.g. Planning to visit this Saturday around 3 PM..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#e60012] transition-colors shadow-xs"
            />
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl bg-[#e60012] hover:bg-[#c00010] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 mt-2"
          >
            {isSubmitting ? (
              <span>Submitting Request...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit & Forward to WhatsApp</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-slate-500 pt-1">
            Or call showroom hotline directly: <a href={`tel:${SHOWROOM_INFO.phone}`} className="text-[#e60012] font-bold hover:underline">{SHOWROOM_INFO.phone}</a> / <a href={`tel:${SHOWROOM_INFO.phone2}`} className="text-[#e60012] font-bold hover:underline">{SHOWROOM_INFO.phone2}</a>
          </p>

        </form>

      </div>
    </div>
  );
}
