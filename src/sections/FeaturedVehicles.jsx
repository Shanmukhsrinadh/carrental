import React, { useRef } from "react";
import { vehicles } from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedVehicles({ onSelectVehicle }) {
  const scrollRef = useRef(null);
  const featured = vehicles.slice(0, 6);

  const scroll = (dir) => {
    const container = scrollRef.current;
    const amount = 360;

    container.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="vehicles" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#F59E0B] text-xs tracking-[0.25em] uppercase font-semibold mb-3">
              Our Fleet
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Popular Vehicles
            </h2>

            <p className="text-[#64748B] text-sm mt-3 max-w-md">
              Clean, well-maintained vehicles ready for your next trip.
            </p>
          </div>

          <button
            onClick={() =>
              document
                .getElementById("categories")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-[#0F172A] text-[#0F172A] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#0F172A] hover:text-white transition"
          >
            View All →
          </button>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:scale-110 transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:scale-110 transition"
          >
            <ChevronRight size={20} />
          </button>

          {/* SCROLL CONTAINER */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar px-2 md:px-10"
          >
            {featured.map((vehicle, i) => (
              <motion.div
                key={vehicle.id}
                className="min-w-[300px] sm:min-w-[320px] md:min-w-[360px] flex-shrink-0 snap-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <VehicleCard
                  vehicle={vehicle}
                  onClick={() => onSelectVehicle(vehicle)}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}