import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Our Fleet', href: '#vehicles' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B] flex items-center justify-center font-bold text-[#0F172A] text-lg">P</div>
              <div>
                <div className="font-bold text-white text-base leading-none">Padma Priya Enterprises</div>
                <div className="text-[#64748B] text-xs mt-0.5 uppercase tracking-widest">Car Rentals & Driver Services</div>
              </div>
            </div>
            <p className="text-[#475569] text-sm leading-relaxed max-w-xs">
              Visakhapatnam's trusted travel partner — reliable vehicles, professional drivers, and transparent pricing since 2018.
            </p>
            <button
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              className="mt-6 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eba58] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </button>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-white text-sm mb-5 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[#475569] hover:text-[#F59E0B] text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-white text-sm mb-5 uppercase tracking-widest">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-[#475569]">
                <Phone className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-3 text-sm text-[#475569]">
                <MapPin className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                <span>Visakhapatnam,<br />Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#475569]">
                <MessageCircle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                Available 24/7 on WhatsApp
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#334155]">
          <p>© {currentYear} Padma Priya Enterprises. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#F59E0B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F59E0B] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
