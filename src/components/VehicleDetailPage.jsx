import React from 'react';
import { X, Phone, MessageCircle, Users, Fuel, Settings, Gauge, Shield, Star, ChevronRight, CheckCircle } from 'lucide-react';
import { vehicles } from '../data/vehicles';

const categoryColors = {
  Hatchback: { bg: '#EFF6FF', text: '#1D4ED8', dot: '#3B82F6' },
  Sedan:     { bg: '#F0FDF4', text: '#15803D', dot: '#22C55E' },
  SUV:       { bg: '#FFF7ED', text: '#C2410C', dot: '#F97316' },
  MUV:       { bg: '#FDF4FF', text: '#7E22CE', dot: '#A855F7' },
};

function CarVisual({ vehicle, size = 'lg' }) {
  const color = categoryColors[vehicle.category] || { bg: '#F8FAFC', text: '#0F172A', dot: '#64748B' };
  const dim = size === 'lg' ? 160 : 80;
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: color.bg }}>
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" width={dim} height={dim}>
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
    </div>
  );
}

export default function VehicleDetailPage({ vehicle, onClose }) {
  if (!vehicle) return null;

  const related = vehicles.filter(v => v.category === vehicle.category && v.id !== vehicle.id).slice(0, 3);
  const color = categoryColors[vehicle.category] || { bg: '#F8FAFC', text: '#0F172A', dot: '#64748B' };

  const handleCall      = () => window.open('tel:+919876543210');
  const handleWhatsApp  = () => {
    const text = `Hi, I'd like to book the ${vehicle.name} (${vehicle.category}) — ₹${vehicle.price}/day.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex animate-fade-in" onClick={(e) => e.target === e.currentTarget && onClose()}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative ml-auto w-full max-w-2xl h-full bg-white shadow-2xl animate-slide-in overflow-y-auto">

        {/* Hero banner */}
        <div className="relative h-56 flex-shrink-0" style={{ backgroundColor: color.bg }}>
          <CarVisual vehicle={vehicle} size="lg" />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition-colors shadow"
          >
            <X className="w-4 h-4 text-[#0F172A]" />
          </button>

          {/* Breadcrumb */}
          <div className="absolute bottom-4 left-5 flex items-center gap-1.5 text-xs text-[#475569]">
            <span>Fleet</span>
            <ChevronRight className="w-3 h-3" />
            <span className="font-semibold text-[#0F172A]">{vehicle.name}</span>
          </div>
        </div>

        <div className="p-6">

          {/* Name + price */}
          <div className="flex items-start justify-between mb-1">
            <div>
              <h1 className="text-2xl font-bold text-[#0F172A]">{vehicle.name}</h1>
              <div className="flex items-center gap-3 mt-1.5">
                <span
                  className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                  style={{ color: color.text, backgroundColor: color.bg }}
                >
                  {vehicle.category}
                </span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />)}
                </div>
                <span className="text-xs text-[#64748B]">5.0 (Premium)</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#0F172A]">₹{vehicle.price.toLocaleString()}</div>
              <div className="text-xs text-[#94A3B8] uppercase tracking-wide">per day</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 mt-5 mb-6">
            <button
              onClick={handleWhatsApp}
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eba58] text-white font-bold text-sm py-3 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Book on WhatsApp
            </button>
            <button
              onClick={handleCall}
              className="flex-1 flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm py-3 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call to Book
            </button>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-[#0F172A] mb-2">About this Vehicle</h3>
            <p className="text-sm text-[#475569] leading-relaxed">{vehicle.description}</p>
          </div>

          <hr className="border-gray-100 mb-6" />

          {/* Car Overview */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-[#0F172A] mb-4">Car Overview</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Settings className="w-4 h-4" />,   label: 'Transmission', value: vehicle.transmission },
                { icon: <Fuel className="w-4 h-4" />,       label: 'Fuel Type',    value: vehicle.fuel },
                { icon: <Users className="w-4 h-4" />,      label: 'Seating',      value: `${vehicle.seats} Persons` },
                { icon: <Gauge className="w-4 h-4" />,      label: 'Mileage',      value: vehicle.mileage },
                { icon: <Shield className="w-4 h-4" />,     label: 'A/C',          value: vehicle.ac ? 'Air Conditioned' : 'Non A/C' },
                { icon: <CheckCircle className="w-4 h-4" />,label: 'Engine',       value: vehicle.engine },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#F8FAFC] rounded-xl p-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0F172A] flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider">{item.label}</div>
                    <div className="text-xs font-bold text-[#0F172A]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-100 mb-6" />

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-[#0F172A] mb-4">Key Features</h3>
            <div className="flex flex-wrap gap-2">
              {vehicle.features.map((f, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F8FAFC] text-[#374151] border border-gray-100"
                >
                  <CheckCircle className="w-3 h-3 text-[#22C55E]" />
                  {f}
                </span>
              ))}
            </div>
          </div>

          <hr className="border-gray-100 mb-6" />

          {/* Contact Sidebar Info */}
          <div className="bg-[#F8FAFC] rounded-2xl p-5 mb-6">
            <h3 className="text-sm font-bold text-[#0F172A] mb-4">Book This Vehicle</h3>
            <p className="text-xs text-[#64748B] leading-relaxed mb-4">
              Contact us directly to check availability, get a custom quote, or confirm your booking. We respond within minutes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-[#F59E0B]" />
                <span className="font-semibold text-[#0F172A]">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="font-semibold text-[#0F172A]">WhatsApp — fastest response</span>
              </div>
            </div>
          </div>

          {/* Related Vehicles */}
          {related.length > 0 && (
            <>
              <h3 className="text-sm font-bold text-[#0F172A] mb-4">Related Vehicles</h3>
              <div className="grid grid-cols-3 gap-3">
                {related.map((v) => {
                  const rc = categoryColors[v.category] || { bg: '#F8FAFC', dot: '#64748B' };
                  return (
                    <div
                      key={v.id}
                      className="rounded-xl border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('open-vehicle', { detail: v }));
                        onClose();
                        setTimeout(() => window.dispatchEvent(new CustomEvent('open-vehicle', { detail: v })), 50);
                      }}
                    >
                      <div className="h-20" style={{ backgroundColor: rc.bg }}>
                        <CarVisual vehicle={v} size="sm" />
                      </div>
                      <div className="p-2">
                        <div className="text-xs font-bold text-[#0F172A] truncate">{v.name}</div>
                        <div className="text-xs text-[#64748B]">₹{v.price}/day</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* Bottom CTA banner */}
          <div className="mt-8 bg-[#0F172A] rounded-2xl p-5 text-center">
            <p className="text-white/70 text-xs mb-1">Ready to book?</p>
            <p className="text-white font-bold text-base mb-4">If you have any questions, call us.</p>
            <div className="flex gap-3">
              <button
                onClick={handleCall}
                className="flex-1 flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6A0A] text-white font-bold text-sm py-2.5 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eba58] text-white font-bold text-sm py-2.5 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
