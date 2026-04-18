import React from 'react';
import { Car, Users, Info } from 'lucide-react';

export default function VehicleCard({ vehicle }) {
  const handleBook = () => {
    const text = `Hi, I'd like to book a vehicle from Padma Priya Enterprises. I am interested in the ${vehicle.name} (${vehicle.category}).`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Generate a consistent hue based on vehicle ID for the gradient
  const hue = (vehicle.id * 45) % 360;
  
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Top Graphic Area */}
      <div 
        className="h-48 relative flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, hsl(${hue}, 80%, 95%), hsl(${(hue + 40) % 360}, 80%, 90%))`
        }}
      >
        <div className="absolute top-4 left-4 bg-teal-500/10 text-teal-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase backdrop-blur-md">
          {vehicle.category}
        </div>
        
        <Car 
          className="w-28 h-28 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 drop-shadow-md" 
          style={{ color: `hsl(${hue}, 70%, 40%)` }}
        />
        
        {/* Decorative background circle */}
        <div 
          className="absolute w-40 h-40 rounded-full blur-3xl -z-10 opacity-50"
          style={{ backgroundColor: `hsl(${hue}, 80%, 70%)` }}
        ></div>
      </div>
      
      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-serif font-bold text-xl text-gray-900">{vehicle.name}</h3>
          <div className="text-right">
            <span className="block font-bold text-xl text-primary leading-none">₹{vehicle.price}</span>
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Per Day</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
              <Users className="w-4 h-4 text-gray-500" />
            </div>
            <span className="font-medium">{vehicle.seats} Seats</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
              <Info className="w-4 h-4 text-gray-500" />
            </div>
            <span className="font-medium">{vehicle.ac ? 'A/C' : 'Non A/C'}</span>
          </div>
        </div>

        <button 
          onClick={handleBook} 
          className="w-full mt-auto bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-4 font-bold shadow-md hover:shadow-lg transition-all"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
