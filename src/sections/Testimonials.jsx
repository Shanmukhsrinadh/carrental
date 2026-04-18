import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const scrollItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <p className="text-[#F59E0B] font-bold text-sm uppercase tracking-widest mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">What Our Customers Say</h2>
        <p className="text-[#64748B] max-w-xl mx-auto text-sm leading-relaxed">
          Honest feedback from people who have traveled with us across Vizag and beyond.
        </p>
      </div>

      {/* Scrolling row */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee w-max gap-5 px-4 hover:[animation-play-state:paused]">
          {scrollItems.map((t, i) => (
            <div
              key={i}
              className="w-[320px] flex-shrink-0 bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className={`w-4 h-4 ${si < t.rating ? 'fill-[#F59E0B] text-[#F59E0B]' : 'fill-gray-200 text-gray-200'}`} />
                ))}
              </div>
              <p className="text-[#374151] text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#0F172A] text-sm">{t.name}</div>
                  <div className="text-xs text-[#94A3B8]">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
