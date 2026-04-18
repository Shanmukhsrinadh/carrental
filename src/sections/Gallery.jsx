import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { label: 'City Tour — Vizag', sub: 'Daily city rides', color: '#DBEAFE', accent: '#1D4ED8' },
  { label: 'Araku Valley', sub: 'Outstation trips', color: '#D1FAE5', accent: '#059669' },
  { label: 'Airport Transfer', sub: 'On-time pickups', color: '#FEF3C7', accent: '#D97706' },
  { label: 'Family Getaway', sub: 'Weekend escapes', color: '#FCE7F3', accent: '#BE185D' },
  { label: 'Corporate Travel', sub: 'Business class', color: '#EDE9FE', accent: '#7C3AED' },
  { label: 'Wedding', sub: 'Special occasions', color: '#FEE2E2', accent: '#DC2626' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p className="text-[#F59E0B] font-bold text-sm uppercase tracking-widest mb-3">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">Moments from Our Journeys</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[220px]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-gray-100 ${i === 1 || i === 4 ? 'md:row-span-2' : ''}`}
              style={{ backgroundColor: item.color }}
            >
              {/* Decorative dots pattern */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle, ${item.accent}40 1px, transparent 1px)`,
                  backgroundSize: '22px 22px',
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-full"
                  style={{ color: item.accent, backgroundColor: `${item.accent}15` }}
                >
                  {item.sub}
                </span>
                <h3
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: item.accent }}
                >
                  {item.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
