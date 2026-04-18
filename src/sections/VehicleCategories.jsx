import React, { useState } from 'react';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function VehicleCategories({ onSelectVehicle }) {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Hatchback', 'Sedan', 'SUV', 'MUV'];
  const filtered = activeTab === 'All' ? vehicles : vehicles.filter(v => v.category === activeTab);

  return (
    <section id="categories" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-[#F59E0B] font-bold text-sm uppercase tracking-widest mb-3">Browse by Type</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-8">Find Your Perfect Ride</h2>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === cat
                    ? 'bg-[#0F172A] text-white shadow-md'
                    : 'bg-white text-[#475569] border border-gray-200 hover:border-[#0F172A] hover:text-[#0F172A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <VehicleCard vehicle={vehicle} onClick={() => onSelectVehicle(vehicle)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#94A3B8] text-sm">No vehicles in this category.</div>
        )}
      </div>
    </section>
  );
}
