'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, CreditCard, AlertCircle, ChevronRight, Phone } from 'lucide-react';
import { BIKES_DATA, SHOWROOM_INFO } from '@/lib/bikesData';

export default function EMICalculator({ onOpenBooking }) {
  const [selectedBikeId, setSelectedBikeId] = useState(BIKES_DATA[0].id);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [tenureMonths, setTenureMonths] = useState(12);

  const selectedBike = BIKES_DATA.find((b) => b.id === selectedBikeId) || BIKES_DATA[0];
  const totalPrice = selectedBike.priceRaw;
  const downPayment = Math.round((totalPrice * downPaymentPercent) / 100);
  const principal = totalPrice - downPayment;

  // Approximate standard commercial bank processing interest rate (~9% flat p.a. for estimation)
  const interestRate = 0.09;
  const totalInterest = principal * interestRate * (tenureMonths / 12);
  const totalPayable = principal + totalInterest;
  const monthlyEMI = Math.round(totalPayable / tenureMonths);

  return (
    <section id="emi" className="py-24 bg-slate-50 relative border-b border-slate-200">
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
            <Calculator className="w-3.5 h-3.5" />
            <span>Bank Financing Assistant</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            ESTIMATE YOUR <span className="text-[#e60012]">MONTHLY EMI</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Calculate your approximate monthly installment for eligible commercial bank credit cards available at Honda Galaxy Ashulia.
          </p>
        </motion.div>

        {/* Calculator Cockpit Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">

              {/* Select Model */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Select Honda Motorcycle
                </label>
                <select
                  value={selectedBikeId}
                  onChange={(e) => setSelectedBikeId(e.target.value)}
                  data-theme="light"
                  className="select  w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-10 text-sm text-slate-900 font-bold focus:outline-none focus:border-[#e60012] shadow-xs h-12"
                >
                  {BIKES_DATA.map((bike) => (
                    <option key={bike.id} value={bike.id}>
                      {bike.name} — {bike.priceBDT} {bike.retailPriceBDT ? `(অফার মূল্য)` : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Down Payment Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Down Payment ({downPaymentPercent}%)
                  </label>
                  <span className="text-sm font-black text-slate-900">
                    ৳{downPayment.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#e60012] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>10% (Min)</span>
                  <span>30% (Standard)</span>
                  <span>60% (High)</span>
                </div>
              </div>

              {/* Tenure Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Repayment Tenure (Months)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[6, 12, 18, 24].map((m) => (
                    <button
                      key={m}
                      onClick={() => setTenureMonths(m)}
                      className={`py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border ${tenureMonths === m
                          ? 'bg-[#e60012] text-white border-[#e60012] shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                    >
                      {m} Months
                    </button>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500">
                <AlertCircle className="w-4 h-4 text-[#e60012] shrink-0 mt-0.5" />
                <p>
                  * Estimation only. Final installment rates, processing fees, and credit limits are subject to issuing bank approval (SCB, City Bank, BRAC, Eastern Bank, etc.).
                </p>
              </div>

            </div>

            {/* Output Cockpit Box */}
            <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-6 text-white space-y-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Selected Model
                  </span>
                  <span className="text-xs font-black text-red-400">
                    {selectedBike.name}
                  </span>
                </div>

                <div className="pt-4 space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Showroom Price:</span>
                    <span className="font-bold text-white">৳{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Down Payment ({downPaymentPercent}%):</span>
                    <span className="font-bold text-white">৳{downPayment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Financed Principal:</span>
                    <span className="font-bold text-white">৳{principal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block">
                    Estimated Monthly EMI
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-[#e60012]">
                      ৳{monthlyEMI.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400">/ month</span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    For {tenureMonths} monthly installments
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onOpenBooking(selectedBike)}
                  className="w-full py-3.5 rounded-xl bg-[#e60012] hover:bg-[#c00010] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Apply for Financing</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${SHOWROOM_INFO.phone}`}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {SHOWROOM_INFO.phone}</span>
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
