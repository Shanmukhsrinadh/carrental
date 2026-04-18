import React, { useState } from "react";
import {
  X,
  Phone,
  MessageCircle,
  Users,
  Fuel,
  Settings,
  Gauge,
  Shield,
  Star,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { vehicles } from "../data/vehicles";

const categoryColors = {
  Hatchback: { bg: "#EFF6FF", text: "#1D4ED8" },
  Sedan: { bg: "#F0FDF4", text: "#15803D" },
  SUV: { bg: "#FFF7ED", text: "#C2410C" },
  MUV: { bg: "#FDF4FF", text: "#7E22CE" },
};

export default function VehicleDetailPage({ vehicle, onClose }) {
  if (!vehicle) return null;

  const color =
    categoryColors[vehicle.category] || { bg: "#F8FAFC", text: "#0F172A" };

  const images =
    vehicle.images?.length > 0
      ? vehicle.images.slice(0, 5)
      : ["/fallback-car.jpg"];

  const [activeImage, setActiveImage] = useState(images[0]);

  const related = vehicles
    .filter((v) => v.category === vehicle.category && v.id !== vehicle.id)
    .slice(0, 3);

  const handleCall = () => window.open("tel:+919876543210");

  const handleWhatsApp = () => {
    const text = `Hi, I'd like to book the ${vehicle.name} (${vehicle.category}) — ₹${vehicle.price}/day.`;
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* PANEL */}
      <div className="relative ml-auto w-full max-w-2xl h-full bg-white shadow-2xl overflow-y-auto animate-slide-in">

        {/* HEADER */}
        <div className="relative p-5 border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="text-xs text-gray-500 flex items-center gap-1">
            Fleet <ChevronRight className="w-3 h-3" />{" "}
            <span className="font-semibold text-black">{vehicle.name}</span>
          </div>
        </div>

        <div className="p-5">

          {/* 🔥 IMAGE GALLERY */}
          <div className="mb-6">
            {/* MAIN IMAGE */}
            <div className="w-full h-56 rounded-2xl overflow-hidden bg-gray-100 mb-3">
              <img
                src={activeImage}
                alt={vehicle.name}
                className="w-full h-full object-cover transition-all duration-300"
                loading="lazy"
              />
            </div>

            {/* THUMBNAILS */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition-all
                      ${
                        activeImage === img
                          ? "border-black scale-95"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                  >
                    <img
                      src={img}
                      alt="car"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* TITLE + PRICE */}
          <div className="flex justify-between items-start mb-3">
            <div>
              <h1 className="text-2xl font-bold">{vehicle.name}</h1>

              <div className="flex items-center gap-3 mt-1">
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: color.bg,
                    color: color.text,
                  }}
                >
                  {vehicle.category}
                </span>

                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-2xl font-bold">
                ₹{vehicle.price.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400 uppercase">
                per day
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 mt-5 mb-6">
            <button
              onClick={handleWhatsApp}
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eba58] text-white font-bold text-sm py-3 rounded-xl"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>

            <button
              onClick={handleCall}
              className="flex-1 flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-bold text-sm py-3 rounded-xl"
            >
              <Phone className="w-4 h-4" />
              Call
            </button>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">About</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {vehicle.description}
            </p>
          </div>

          {/* OVERVIEW */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { icon: <Settings />, label: "Transmission", value: vehicle.transmission },
              { icon: <Fuel />, label: "Fuel", value: vehicle.fuel },
              { icon: <Users />, label: "Seats", value: `${vehicle.seats}` },
              { icon: <Gauge />, label: "Mileage", value: vehicle.mileage },
              { icon: <Shield />, label: "A/C", value: vehicle.ac ? "Yes" : "No" },
              { icon: <CheckCircle />, label: "Engine", value: vehicle.engine },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase">
                    {item.label}
                  </div>
                  <div className="text-xs font-bold">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* FEATURES */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-3">Features</h3>
            <div className="flex flex-wrap gap-2">
              {vehicle.features.map((f, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 bg-gray-100 rounded-full flex items-center gap-1"
                >
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* RELATED */}
          {related.length > 0 && (
            <>
              <h3 className="text-sm font-bold mb-3">Related</h3>
              <div className="grid grid-cols-3 gap-3">
                {related.map((v) => (
                  <div
                    key={v.id}
                    className="border rounded-xl overflow-hidden cursor-pointer hover:shadow-md"
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent("open-vehicle", { detail: v })
                      );
                      onClose();
                    }}
                  >
                    <div className="h-20 bg-gray-100">
                      <img
                        src={v.images?.[0] || "/fallback-car.jpg"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <div className="text-xs font-bold truncate">
                        {v.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        ₹{v.price}/day
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* FINAL CTA */}
          <div className="mt-8 bg-black text-white rounded-2xl p-5 text-center">
            <p className="text-sm opacity-70">Ready to book?</p>
            <p className="font-bold mb-4">Call or WhatsApp now</p>

            <div className="flex gap-3">
              <button
                onClick={handleCall}
                className="flex-1 bg-orange-500 py-2.5 rounded-xl font-bold"
              >
                Call
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex-1 bg-green-500 py-2.5 rounded-xl font-bold"
              >
                WhatsApp
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}