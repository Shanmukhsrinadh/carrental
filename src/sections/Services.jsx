import React from 'react';
import { motion } from 'framer-motion';
import { Building2, PlaneTakeoff, Map } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "City Rides",
      description: "Navigate Vizag traffic with ease. Perfect for business meetings, shopping trips, or exploring local attractions comfortably.",
      cta: "Book City Ride"
    },
    {
      icon: <PlaneTakeoff className="w-8 h-8" />,
      title: "Airport Transfer",
      description: "Punctual drops and pickups from Visakhapatnam Airport. We track your flight to ensure we're there when you land.",
      cta: "Book Airport Transfer"
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Outstation Trips",
      description: "Safe and comfortable journeys to Araku Valley, Annavaram, Srikakulam, and other destinations across Andhra.",
      cta: "Book Outstation Trip"
    }
  ];

  const handleBook = (serviceName) => {
    const text = `Hi, I want to book a vehicle for ${serviceName}.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Services We Offer
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            From quick city drops to long weekend getaways, we have the right vehicle and driver for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white border border-gray-100 group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Gradient Top Band */}
              <div className="h-32 bg-gradient-to-br from-teal-500 to-primary relative flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary transform translate-y-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8 pt-12 flex-1 flex flex-col text-center">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium mb-8 flex-1">
                  {service.description}
                </p>
                <button 
                  onClick={() => handleBook(service.title)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-4 font-bold transition-colors"
                >
                  {service.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
