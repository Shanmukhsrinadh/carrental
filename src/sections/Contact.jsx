import React from 'react';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const handleWhatsApp = () => window.open('https://wa.me/919876543210', '_blank');

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <p className="text-[#F59E0B] font-bold text-sm uppercase tracking-widest mb-3">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 leading-tight">
              Ready to Book<br />Your Ride?
            </h2>
            <p className="text-[#64748B] text-sm leading-relaxed mb-10 max-w-md">
              Reach out via WhatsApp for the fastest response. We typically reply within minutes.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: <Phone className="w-5 h-5" />, label: 'Call Us', value: '+91 98765 43210', action: () => window.open('tel:+919876543210') },
                { icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp', value: 'Chat instantly', action: handleWhatsApp },
                { icon: <Clock className="w-5 h-5" />, label: 'Availability', value: '24 / 7', action: null },
                { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Visakhapatnam, Andhra Pradesh', action: null },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onClick={item.action}
                  className={`flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-[#F8FAFC] ${item.action ? 'cursor-pointer hover:border-[#0F172A] transition-colors group' : ''}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center text-white flex-shrink-0 group-hover:bg-[#F97316] transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">{item.label}</div>
                    <div className="font-bold text-[#0F172A] text-sm">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#1eba58] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now
            </button>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[460px] rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900.0129956572264!2d83.3104168813759!3d17.7434144632578!2m3!1f0!2f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943335e093e25%3A0x97edf523ac7dd5b9!2sTaj%20Travels!5e0!3m2!1sen!2sin!4v1776366429166!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
