import React, { useState } from 'react';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function VehicleCategories() {
  const [activeTab, setActiveTab] = useState('All');
  
  const categories = ['All', 'Hatchback', 'Sedan', 'SUV', 'MUV'];

  const filteredVehicles = activeTab === 'All' 
    ? vehicles 
    : vehicles.filter(v => v.category === activeTab);

  return (
    <section id="categories" className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
            Find Your Perfect Ride
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === cat 
                    ? 'bg-primary text-white shadow-[0_8px_20px_rgba(13,110,253,0.3)] scale-105' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-medium">
            No vehicles found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
