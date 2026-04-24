import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNow = () => {
    window.open('https://wa.me/0000000000?text=' + encodeURIComponent('Hello, I would like to book a vehicle.'), '_blank');
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Fleet', href: '#vehicles' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#0F172A] rounded-lg flex items-center justify-center">
            <span className="text-[#F59E0B] font-bold text-lg leading-none">P</span>
          </div>
          <div className="leading-tight">
            <span className={`font-bold text-base tracking-tight ${isScrolled ? 'text-[#0F172A]' : 'text-white'}`}>
              Padma Priya
            </span>
            <span className={`text-xs block font-medium tracking-widest uppercase ${isScrolled ? 'text-[#64748B]' : 'text-white/60'}`}>
              Enterprises
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#F59E0B] ${isScrolled ? 'text-[#475569]' : 'text-white/80'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-5">
          <a href="tel:+910000000000" className={`flex items-center gap-2 text-sm font-semibold ${isScrolled ? 'text-[#0F172A]' : 'text-white'}`}>
            <Phone className="w-4 h-4 text-[#F59E0B]" />
            +91 0000000000
          </a>
          <button
            onClick={handleBookNow}
            className="bg-[#F97316] hover:bg-[#EA6A0A] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Book Now
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen
            ? <X className={isScrolled ? 'text-[#0F172A]' : 'text-white'} />
            : <Menu className={isScrolled ? 'text-[#0F172A]' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl py-5 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#0F172A] font-medium py-2 border-b border-gray-100 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+919876543210" className="flex items-center gap-2 text-[#0F172A] font-semibold text-sm py-2">
            <Phone className="w-4 h-4 text-[#F59E0B]" /> +91 0000000000
          </a>
          <button
            onClick={handleBookNow}
            className="w-full bg-[#F97316] text-white font-semibold py-3 rounded-lg text-sm"
          >
            Book Now on WhatsApp
          </button>
        </div>
      )}
    </nav>
  );
}
