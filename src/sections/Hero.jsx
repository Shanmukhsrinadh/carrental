import React from 'react';
import { MapPin, Calendar, Car, Search, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleSearch = () => {
    window.open('https://wa.me/917702102097?text=' + encodeURIComponent("Hi, I'd like to find a car for rent in Vizag."), '_blank');
  };

  const trustBadges = [
    'Verified Drivers',
    'No Hidden Charges',
    '24/7 Available',
  ];

  return (
    <section id="home" className="relative min-h-screen bg-[#0F172A] flex flex-col justify-center overflow-hidden">

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Gold accent glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#F59E0B] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            {/* Rating pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-6"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />)}
              </div>
              <span className="text-white/80 text-sm font-medium">Top Rated in Visakhapatnam</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
            >
              Reliable Car Rentals<br />
              <span className="text-[#F59E0B]">&amp; Driver Services</span><br />
              <span className="text-white/70 text-3xl md:text-4xl lg:text-5xl">in Vizag</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg"
            >
              From airport pickups to outstation trips — professional drivers, clean vehicles, transparent pricing. Available 24/7 across Visakhapatnam.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {trustBadges.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-[#F59E0B]" />
                  {b}
                </div>
              ))}
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="bg-white rounded-2xl p-3 flex flex-col sm:flex-row gap-2 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >
              <div className="flex-1 px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-100">
                <label className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1 mb-1">
                  <MapPin className="w-3 h-3 text-[#F59E0B]" /> Pickup
                </label>
                <input
                  type="text"
                  placeholder="City or Airport"
                  className="w-full text-sm font-medium text-gray-900 placeholder:text-gray-400 bg-transparent border-0 outline-none p-0"
                />
              </div>
              <div className="flex-1 px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-100">
                <label className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1 mb-1">
                  <Calendar className="w-3 h-3 text-[#F59E0B]" /> Date
                </label>
                <input
                  type="date"
                  className="w-full text-sm font-medium text-gray-900 bg-transparent border-0 outline-none p-0"
                />
              </div>
              <div className="flex-1 px-3 py-2">
                <label className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1 mb-1">
                  <Car className="w-3 h-3 text-[#F59E0B]" /> Vehicle
                </label>
                <select className="w-full text-sm font-medium text-gray-900 bg-transparent border-0 outline-none p-0">
                  <option value="">Any Type</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="muv">MUV</option>
                </select>
              </div>
              <button
                onClick={handleSearch}
                className="bg-[#F97316] hover:bg-[#EA6A0A] text-white font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm whitespace-nowrap"
              >
                <Search className="w-4 h-4" />
                Find Car
              </button>
            </motion.div>
          </div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-5"
          >
            {[
              { value: '500+', label: 'Trips Completed', icon: '🚗' },
              { value: '50+', label: 'Vehicles in Fleet', icon: '🚙' },
              { value: '5★', label: 'Average Rating', icon: '⭐' },
              { value: '24/7', label: 'Always Available', icon: '📞' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/50 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,40 C360,0 1080,70 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
