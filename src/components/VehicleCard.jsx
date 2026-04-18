import React from 'react';
import { Users, Zap } from 'lucide-react';

export default function VehicleCard({ vehicle }) {
  const handleBook = () => {
    const text = `Hi, I'd like to book the ${vehicle.name} (${vehicle.category}) from Padma Priya Enterprises.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  const categoryColors = {
    Hatchback: { bg: '#EFF6FF', text: '#1D4ED8', dot: '#3B82F6' },
    Sedan:     { bg: '#F0FDF4', text: '#15803D', dot: '#22C55E' },
    SUV:       { bg: '#FFF7ED', text: '#C2410C', dot: '#F97316' },
    MUV:       { bg: '#FDF4FF', text: '#7E22CE', dot: '#A855F7' },
  };
  const color = categoryColors[vehicle.category] || { bg: '#F8FAFC', text: '#0F172A', dot: '#64748B' };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">

      {/* Top: colored background with car icon */}
      <div className="h-40 flex items-center justify-center relative" style={{ backgroundColor: color.bg }}>
        <span
          className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full"
          style={{ color: color.text, backgroundColor: color.bg, border: `1px solid ${color.dot}30` }}
        >
          {vehicle.category}
        </span>

        {/* Stylized car top-down using simple CSS */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
            <ellipse cx="40" cy="42" rx="22" ry="30" fill={color.dot} opacity="0.15" />
            <rect x="20" y="18" width="40" height="48" rx="12" fill={color.dot} opacity="0.9" />
            <rect x="24" y="26" width="32" height="22" rx="6" fill="white" opacity="0.3" />
            <circle cx="22" cy="28" r="6" fill={color.dot} opacity="0.8" />
            <circle cx="58" cy="28" r="6" fill={color.dot} opacity="0.8" />
            <circle cx="22" cy="58" r="6" fill={color.dot} opacity="0.8" />
            <circle cx="58" cy="58" r="6" fill={color.dot} opacity="0.8" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-[#0F172A] text-base">{vehicle.name}</h3>
          <div className="text-right">
            <span className="block font-bold text-lg text-[#0F172A] leading-none">₹{vehicle.price}</span>
            <span className="text-[10px] text-[#94A3B8] font-medium uppercase tracking-wider">/ day</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-[#64748B] mb-5 pb-4 border-b border-gray-100">
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            {vehicle.seats} Seats
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" />
            {vehicle.ac ? 'Air Conditioned' : 'Non A/C'}
          </span>
        </div>

        <button
          onClick={handleBook}
          className="mt-auto w-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-bold py-3 rounded-xl transition-colors"
        >
          Book via WhatsApp
        </button>
      </div>
    </div>
  );
}
