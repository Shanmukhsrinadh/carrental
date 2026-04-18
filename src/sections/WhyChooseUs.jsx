import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck, Clock, Wallet, HeadphonesIcon, Smartphone } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Professional Drivers",
      description: "Experienced, polite, and highly knowledgeable about local routes and traffic patterns."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Clean Vehicles",
      description: "Every car is thoroughly sanitized, serviced, and inspected before each trip."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Guarantee",
      description: "Punctuality is our priority. We ensure you reach your destination without delays."
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Transparent Pricing",
      description: "Honest rates with absolutely no hidden charges or last-minute surprises."
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service to assist you at any point during your journey."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Easy WhatsApp Booking",
      description: "Book your ride instantly through WhatsApp with just a few quick messages."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 font-bold text-xs tracking-widest uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            The Padma Priya Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              {/* Left accent border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
