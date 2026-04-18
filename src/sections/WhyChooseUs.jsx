import React from 'react';
import { motion } from 'framer-motion';
import { Car, Headphones, Wallet, Shield, MapPin, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <Car className="w-5 h-5" />,
    title: 'Professional Drivers',
    desc: 'Experienced, verified drivers who know every route in and around Vizag.',
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    title: '24/7 Support',
    desc: 'Reach us instantly via WhatsApp or phone — quick response, any time.',
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    title: 'Transparent Pricing',
    desc: 'What you see is what you pay. No hidden charges, no surprise fees.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Fully Insured',
    desc: 'All vehicles are comprehensively insured for complete peace of mind.',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'Wide Coverage',
    desc: 'City rides, outstation trips, and airport transfers across Andhra Pradesh.',
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: 'Well-Maintained Fleet',
    desc: 'Every vehicle is regularly serviced and inspected before each trip.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] flex items-center gap-3">
            <span className="text-[#F59E0B]">★</span>
            Best Car Rentals in Vizag
            <span className="text-[#F59E0B]">★</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — car image + tagline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center"
          >
            <img
              src="https://i.ibb.co/qFRYSpzK/pngwing-com.png"
              alt="Luxury car top view"
              className="w-full max-w-sm drop-shadow-2xl animate-float"
            />
            <p className="mt-8 text-[#475569] text-lg leading-relaxed italic text-center max-w-sm">
              From daily city commutes to long outstation journeys — Padma Priya Enterprises delivers comfort, reliability, and value on every trip.
            </p>
          </motion.div>

          {/* Right — 2-col feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                {/* Dark icon box */}
                <div className="w-11 h-11 rounded-xl bg-[#0F172A] flex items-center justify-center text-white flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] mb-1 text-sm">{f.title}</h4>
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
