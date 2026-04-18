import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNow = () => {
    window.open('https://wa.me/919876543210?text=' + encodeURIComponent('Hello, I would like to book a vehicle.'), '_blank');
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Vehicles', href: '#vehicles' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-accent font-serif font-bold text-xl">P</span>
          </div>
          <span className={`font-serif font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Padma Priya <span className="text-accent">Enterprises</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-foreground' : 'text-white/90'}`}>
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 text-sm font-semibold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              <Phone className="w-4 h-4 text-accent" />
              +91 9876543210
            </div>
            <button onClick={handleBookNow} className="bg-orange-500 text-white hover:bg-orange-600 font-semibold px-4 py-2 rounded-lg transition-colors">
              Book Now
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-primary' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-foreground font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-2 py-2 text-primary font-semibold">
            <Phone className="w-4 h-4 text-accent" />
            +91 9876543210
          </div>
          <button onClick={handleBookNow} className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors mt-2">
            Book Now on WhatsApp
          </button>
        </div>
      )}
    </nav>
  );
}
