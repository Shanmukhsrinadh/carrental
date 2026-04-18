import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

export default function Testimonials() {
  // Duplicate array multiple times to ensure seamless scrolling
  const scrollItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Quote SVG */}
      <div className="absolute top-10 left-10 opacity-5 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-16 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Honest feedback from people who have traveled with us across Vizag and beyond.
        </p>
      </div>

      <div className="relative w-full max-w-[100vw] overflow-hidden">
        {/* Left Gradient Mask */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        
        {/* First Row - Scrolling Left */}
        <div className="flex animate-marquee w-max gap-6 py-4 px-4 hover:[animation-play-state:paused]">
          {scrollItems.map((t, i) => (
            <div 
              key={`row1-${i}`} 
              className="w-[320px] md:w-[400px] flex-shrink-0 bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    className={`w-5 h-5 ${starIndex < t.rating ? 'fill-secondary text-secondary' : 'fill-gray-200 text-gray-200'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 font-medium leading-relaxed mb-8 flex-1">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500 font-medium">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Gradient Mask */}
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
}
