import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const contactCards = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+91 9876543210",
      subDetails: "We answer 24/7",
      action: () => window.open('tel:+919876543210')
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: "Message us anytime",
      subDetails: "Fastest response",
      action: () => window.open('https://wa.me/919876543210', '_blank')
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Available 24/7",
      subDetails: "For pre-booked trips",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#EFF6FF]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Ready to book your ride? Need a custom quote? Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {contactCards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 flex items-center gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-blue-50 cursor-pointer group"
                onClick={card.action}
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{card.title}</h4>
                  <p className="text-primary font-bold">{card.details}</p>
                  <p className="text-sm text-gray-500 font-medium">{card.subDetails}</p>
                </div>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-6 flex items-start gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-blue-50"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-primary flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Our Location</h4>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Visakhapatnam, Andhra Pradesh, India<br/>
                  Providing services across the city and state.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl border border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900.0129956572264!2d83.3104168813759!3d17.7434144632578!2m3!1f0!2f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943335e093e25%3A0x97edf523ac7dd5b9!2sTaj%20Travels!5e0!3m2!1sen!2sin!4v1776366429166!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
