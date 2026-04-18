import React from 'react';
import { Users, Fuel, Settings } from 'lucide-react';

const categoryColors = {
  Hatchback: { bg: '#EFF6FF', text: '#1D4ED8', dot: '#3B82F6' },
  Sedan:     { bg: '#F0FDF4', text: '#15803D', dot: '#22C55E' },
  SUV:       { bg: '#FFF7ED', text: '#C2410C', dot: '#F97316' },
  MUV:       { bg: '#FDF4FF', text: '#7E22CE', dot: '#A855F7' },
};

export default function VehicleCard({ vehicle, onClick }) {
  const color = categoryColors[vehicle.category] || { bg: '#F8FAFC', text: '#0F172A', dot: '#64748B' };

  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer group"
      onClick={onClick}
    >
      {/* Visual */}
      <div className="h-44 relative flex items-center justify-center overflow-hidden" style={{ backgroundColor: color.bg }}>
        <span
          className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-0.5 rounded-full"
          style={{ color: color.text, backgroundColor: `${color.dot}18`, border: `1px solid ${color.dot}30` }}
        >
          {vehicle.category}
        </span>

        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 h-28 group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
        >
          <ellipse cx="80" cy="88" rx="46" ry="60" fill={color.dot} opacity="0.12" />
          <rect x="34" y="36" width="92" height="100" rx="22" fill={color.dot} opacity="0.9" />
          <rect x="44" y="56" width="72" height="46" rx="12" fill="white" opacity="0.25" />
          <circle cx="42" cy="56" r="14" fill={color.dot} opacity="0.85" />
          <circle cx="118" cy="56" r="14" fill={color.dot} opacity="0.85" />
          <circle cx="42" cy="120" r="14" fill={color.dot} opacity="0.85" />
          <circle cx="118" cy="120" r="14" fill={color.dot} opacity="0.85" />
          <circle cx="42" cy="56" r="7" fill="white" opacity="0.6" />
          <circle cx="118" cy="56" r="7" fill="white" opacity="0.6" />
          <circle cx="42" cy="120" r="7" fill="white" opacity="0.6" />
          <circle cx="118" cy="120" r="7" fill="white" opacity="0.6" />
        </svg>

        {/* "View Details" hint on hover */}
        <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/10 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 bg-white text-[#0F172A] text-xs font-bold px-3 py-1 rounded-full shadow transition-opacity">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-[#0F172A] text-base">{vehicle.name}</h3>
          <div className="text-right flex-shrink-0 ml-2">
            <span className="block font-bold text-lg text-[#0F172A] leading-none">₹{vehicle.price.toLocaleString()}</span>
            <span className="text-[10px] text-[#94A3B8] font-medium uppercase tracking-wider">/ day</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-[#64748B] mb-5 pb-4 border-b border-gray-100">
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" /> {vehicle.seats} Seats
          </span>
          <span className="flex items-center gap-1.5">
            <Fuel className="w-3.5 h-3.5" /> {vehicle.fuel}
          </span>
          <span className="flex items-center gap-1.5">
            <Settings className="w-3.5 h-3.5" /> {vehicle.transmission}
          </span>
        </div>

        <button
          onClick={onClick}
          className="mt-auto w-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-bold py-2.5 rounded-xl transition-colors"
        >
          View Details & Book
        </button>
      </div>
    </div>
  );
}
