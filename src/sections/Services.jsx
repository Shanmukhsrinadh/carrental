import React from 'react';
import { motion } from 'framer-motion';
import { Building2, PlaneTakeoff, Map, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-6 h-6" />,
    tag: 'City',
    title: 'City Rides',
    description: 'Navigate Vizag traffic with ease. Perfect for business meetings, shopping trips, or exploring local attractions.',
    cta: 'Book City Ride',
  },
  {
    icon: <PlaneTakeoff className="w-6 h-6" />,
    tag: 'Airport',
    title: 'Airport Transfer',
    description: 'Punctual drops and pickups from Visakhapatnam Airport. We track your flight to ensure we\'re there when you land.',
    cta: 'Book Airport Transfer',
  },
  {
    icon: <Map className="w-6 h-6" />,
    tag: 'Outstation',
    title: 'Outstation Trips',
    description: 'Safe journeys to Araku Valley, Annavaram, Srikakulam and other destinations across Andhra Pradesh.',
    cta: 'Book Outstation Trip',
  },
];

export default function Services() {
  const handleBook = (name) => {
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I want to book a vehicle for ${name}.`)}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[#F59E0B] font-bold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight mb-4">
            The Right Ride<br />for Every Journey
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed">
            Whether it's a quick city drop or a multi-day outstation trip, we have a vehicle and driver ready for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#0F172A] flex items-center justify-center text-white mb-5">
                {s.icon}
              </div>

              <span className="text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-2">{s.tag}</span>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">{s.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed flex-1 mb-6">{s.description}</p>

              <button
                onClick={() => handleBook(s.title)}
                className="flex items-center gap-2 text-sm font-bold text-[#0F172A] hover:text-[#F97316] transition-colors group"
              >
                {s.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
