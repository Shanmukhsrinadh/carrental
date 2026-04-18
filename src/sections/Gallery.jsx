import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const items = [
    { label: "City Tour Vizag", gradient: "from-blue-500 to-cyan-500" },
    { label: "Araku Valley", gradient: "from-emerald-500 to-teal-500" },
    { label: "Airport Transfer", gradient: "from-orange-500 to-amber-500" },
    { label: "Family Getaway", gradient: "from-pink-500 to-rose-500" },
    { label: "Corporate Travel", gradient: "from-indigo-500 to-purple-500" },
    { label: "Wedding", gradient: "from-fuchsia-500 to-pink-500" }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0D1B2A]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Moments from Our Journeys
          </h2>
          <p className="text-lg text-white/70 font-medium max-w-2xl mx-auto">
            Creating memorable travel experiences for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${
                index === 1 || index === 4 ? 'md:row-span-2' : ''
              }`}
            >
              {/* Colorful Background representing an image */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 transition-transform duration-700 group-hover:scale-110`}>
                <div className="w-full h-full bg-white/10 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center p-6 text-center">
                <h3 className="text-white font-serif font-bold text-2xl md:text-3xl drop-shadow-lg transform scale-95 group-hover:scale-100 transition-transform duration-300">
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
