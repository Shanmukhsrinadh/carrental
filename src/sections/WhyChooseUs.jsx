import React from 'react';
import { motion } from 'framer-motion';
import { Car, Headphones, Wallet, Shield, MapPin, CheckCircle } from 'lucide-react';

const features = [
  { icon: <Car className="w-5 h-5" />,         title: 'Professional Drivers',   desc: 'Experienced, verified drivers who know every route in and around Vizag.' },
  { icon: <Headphones className="w-5 h-5" />,  title: '24/7 Support',           desc: 'Reach us instantly via WhatsApp or phone — quick response, any time.' },
  { icon: <Wallet className="w-5 h-5" />,      title: 'Transparent Pricing',    desc: 'What you see is what you pay. No hidden charges, no surprise fees.' },
  { icon: <Shield className="w-5 h-5" />,      title: 'Fully Insured',          desc: 'All vehicles are comprehensively insured for complete peace of mind.' },
  { icon: <MapPin className="w-5 h-5" />,      title: 'Wide Coverage',          desc: 'City rides, outstation trips, and airport transfers across Andhra Pradesh.' },
  { icon: <CheckCircle className="w-5 h-5" />, title: 'Well-Maintained Fleet',  desc: 'Every vehicle is regularly serviced and inspected before each trip.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0F172A] flex items-center gap-3 mb-14"
        >
          <span className="text-[#F59E0B] text-2xl">★</span>
          Best Car Rentals in Vizag
          <span className="text-[#F59E0B] text-2xl">★</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — car + tagline side by side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-8"
          >
            {/* Car image — upright, no rotation */}
            <div className="flex-shrink-0 w-48 sm:w-56">
              <img
                src="https://i.ibb.co/qFRYSpzK/pngwing-com.png"
                alt="Luxury car top view"
                className="w-full drop-shadow-2xl animate-float-car"
                style={{ transform: 'none' }}
              />
            </div>

            {/* Tagline — vertically centered beside car */}
            <div className="flex items-center">
              <p className="text-[#475569] text-lg leading-relaxed italic">
                From daily city commutes to long outstation journeys — Padma Priya Enterprises delivers comfort, reliability, and value on every trip.
              </p>
            </div>
          </motion.div>

          {/* Right — 2-col feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0F172A] flex items-center justify-center text-white flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-sm mb-1">{f.title}</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
