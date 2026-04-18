import React from 'react';
import { MapPin, Calendar, Car, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleSearch = () => {
    window.open('https://wa.me/919876543210?text=' + encodeURIComponent("Hi, I'd like to find a car for rent."), '_blank');
  };

  return (
    <section id="home" className="relative min-h-[100dvh] pt-24 pb-12 flex items-center bg-gray-50 overflow-hidden">
      {/* Abstract Background SVG */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full pointer-events-none opacity-60">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full object-cover">
          <path fill="#e0f2fe" d="M650,250 C800,300 950,450 900,650 C850,850 650,950 450,900 C250,850 150,650 200,450 C250,250 500,200 650,250 Z" />
          <path fill="#f0f9ff" d="M750,350 C850,400 950,550 900,700 C850,850 700,900 550,850 C400,800 350,650 400,500 C450,350 650,300 750,350 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Form */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-primary font-bold text-sm tracking-wide">
                Top Rated in Visakhapatnam
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">
                Your Comfort,<br />
                <span className="text-primary relative inline-block">
                  Our Commitment
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                Reliable car rentals & driver services across Visakhapatnam — available 24/7 for your seamless travel experience.
              </p>
            </motion.div>

            {/* Booking Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row gap-4 mb-12"
            >
              <div className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
                <label className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> Pickup
                </label>
                <input type="text" placeholder="City or Airport" className="w-full bg-transparent border-0 outline-none text-gray-900 font-semibold placeholder:text-gray-400 placeholder:font-medium p-0 focus:ring-0" />
              </div>
              
              <div className="flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
                <label className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-primary" /> Date
                </label>
                <input type="date" className="w-full bg-transparent border-0 outline-none text-gray-900 font-semibold p-0 focus:ring-0" />
              </div>

              <div className="flex-1 px-4 py-2">
                <label className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-primary" /> Vehicle
                </label>
                <select className="w-full bg-transparent border-0 outline-none text-gray-900 font-semibold p-0 focus:ring-0">
                  <option value="">Any Type</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                </select>
              </div>

              <div className="flex items-center justify-center pt-2 md:pt-0">
                <button 
                  onClick={handleSearch}
                  className="w-full md:w-16 h-14 md:h-16 md:rounded-full rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-lg flex items-center justify-center transition-colors"
                >
                  <Search className="w-6 h-6" />
                  <span className="md:hidden ml-2 font-bold">Find My Car</span>
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-8 md:gap-12"
            >
              {[
                { value: '500+', label: 'Trips Completed' },
                { value: '50+', label: 'Vehicles' },
                { value: '5+', label: 'Years Exp.' },
                { value: '24/7', label: 'Support' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-bold text-primary mb-1">{stat.value}</span>
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex justify-center items-center h-[500px]"
          >
            {/* SVG Composition */}
            <div className="absolute w-[120%] h-[120%] -z-10 animate-float">
               <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                 <circle cx="250" cy="250" r="180" fill="#fff" />
                 <circle cx="250" cy="250" r="150" fill="#f8fafc" />
                 {/* Car representation */}
                 <path d="M 120 280 Q 150 200 250 200 Q 350 200 380 280 L 400 320 L 100 320 Z" fill="#0D6EFD" />
                 <path d="M 160 230 Q 200 210 250 210 Q 300 210 340 230 L 350 270 L 150 270 Z" fill="#93c5fd" />
                 <circle cx="180" cy="320" r="30" fill="#1e293b" />
                 <circle cx="180" cy="320" r="15" fill="#cbd5e1" />
                 <circle cx="320" cy="320" r="30" fill="#1e293b" />
                 <circle cx="320" cy="320" r="15" fill="#cbd5e1" />
                 <path d="M 50 350 L 450 350" stroke="#cbd5e1" strokeWidth="8" strokeLinecap="round" />
               </svg>
            </div>
            
            {/* Floating badges */}
            <div className="absolute top-20 right-10 bg-white p-4 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Verified Drivers</div>
                  <div className="text-xs text-gray-500 font-medium">100% Safe</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-20 left-0 bg-white p-4 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-secondary">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">On Time</div>
                  <div className="text-xs text-gray-500 font-medium">Guaranteed</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
