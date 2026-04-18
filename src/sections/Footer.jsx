import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg">
                P
              </div>
              <span className="font-serif font-bold text-3xl tracking-tight">
                Padma Priya
                <span className="block text-xs font-sans text-teal-400 uppercase tracking-widest mt-1">Enterprises</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed font-medium max-w-md">
              Visakhapatnam's trusted travel partner. Providing premium vehicle rentals, professional drivers, and unmatched comfort for every journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#home" className="text-white/60 hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#vehicles" className="text-white/60 hover:text-teal-400 transition-colors">Our Fleet</a></li>
              <li><a href="#services" className="text-white/60 hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#why-choose-us" className="text-white/60 hover:text-teal-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#gallery" className="text-white/60 hover:text-teal-400 transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 font-medium text-white/60">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span className="leading-relaxed">Visakhapatnam,<br/>Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-medium text-sm">
          <p className="text-white/40">
            &copy; {new Date().getFullYear()} Padma Priya Enterprises. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
