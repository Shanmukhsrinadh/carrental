import React from 'react';
import { MessageCircle, Phone, MapPin, Mail, ExternalLink } from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = () => window.open('https://wa.me/919876543210?text=' + encodeURIComponent('Hi, I\'d like to book a ride.'), '_blank');
  const handleCall    = () => window.open('tel:+919876543210');
  const handleMaps    = () => window.open('https://maps.app.goo.gl/YourLocation', '_blank');

  return (
    <section id="contact" className="relative h-[420px] md:h-[380px] overflow-hidden">

      {/* Full-bleed map background */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.6!2d83.3104!3d17.7434!2m3!1f0!2f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943335e093e25%3A0x97edf523ac7dd5b9!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1776366429166!5m2!1sen!2sin"
        className="absolute inset-0 w-full h-full border-0 pointer-events-none"
        allowFullScreen
        loading="lazy"
        title="Location Map"
      />

      {/* Dark gradient overlay — left 60% */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(10,15,30,0.96) 0%, rgba(10,15,30,0.92) 45%, rgba(10,15,30,0.5) 65%, transparent 85%)' }}
      />

      {/* Content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">

          {/* Left — headline + CTAs */}
          <div>
            <p className="text-[#F59E0B] font-bold text-xs uppercase tracking-[0.2em] mb-4">Book Instantly</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              Your ride is one<br />
              <span className="text-[#3B82F6]">message away</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-7 max-w-sm">
              Get in touch today to book your ride, confirm availability, or ask any travel questions. We respond within minutes.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eba58] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </button>
              <button
                onClick={handleCall}
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call +91 98765 43210
              </button>
            </div>
          </div>

          {/* Right — floating info card */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-[#0F172A]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-80 shadow-2xl">
              {/* Card header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#F59E0B] text-[10px] font-bold uppercase tracking-widest">Actual Location</span>
                <button
                  onClick={handleMaps}
                  className="inline-flex items-center gap-1.5 border border-white/20 hover:border-white/50 text-white text-xs font-semibold px-3 py-1 rounded-full transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Open in Maps
                </button>
              </div>

              <p className="text-white/40 text-xs leading-relaxed mb-5">
                The map shows our pickup and contact location. Open in Maps for directions.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Location</div>
                    <div className="text-white text-xs font-semibold">Padma Priya Enterprises, Vizag,<br/>Andhra Pradesh</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Phone</div>
                    <div className="text-white text-xs font-semibold">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Email</div>
                    <div className="text-white text-xs font-semibold">contact@padmapriyarentals.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
