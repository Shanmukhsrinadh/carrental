import React from 'react';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import { motion } from 'framer-motion';

export default function FeaturedVehicles({ onSelectVehicle }) {
  const featured = vehicles.slice(0, 6);

  return (
    <section id="vehicles" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-[#F59E0B] font-bold text-sm uppercase tracking-widest mb-3">Our Fleet</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight">Popular Vehicles</h2>
            <p className="text-[#64748B] mt-3 max-w-lg text-sm leading-relaxed">
              Maintained to the highest standards — every car is inspected, sanitized, and ready for your trip.
            </p>
          </div>
          <button
            className="text-sm font-bold text-[#0F172A] border border-[#0F172A] hover:bg-[#0F172A] hover:text-white px-5 py-2.5 rounded-lg transition-colors self-start md:self-auto"
            onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((vehicle, i) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <VehicleCard vehicle={vehicle} onClick={() => onSelectVehicle(vehicle)} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
