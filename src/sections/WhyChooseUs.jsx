import {
  Shield,
  MapPin,
  Star,
  Headphones,
  Car,
  Wallet,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Professional Drivers",
    description:
      "Experienced, verified drivers who know every route in and around Vizag.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Reach us instantly via WhatsApp or phone — quick response, any time.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description:
      "What you see is what you pay. No hidden charges, no surprise fees.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "All vehicles are comprehensively insured for complete peace of mind.",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description:
      "City rides, outstation trips, and airport transfers across Andhra Pradesh.",
  },
  {
    icon: CheckCircle,
    title: "Well-Maintained Fleet",
    description:
      "Every vehicle is regularly serviced and inspected before each trip.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Best Car Rentals in Vizag
          </h2>
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr_3fr] gap-10 items-center">

          {/* Car */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://i.ibb.co/qFRYSpzK/pngwing-com.png"
              alt="Premium rental car top view"
              className="
                w-full 
                max-w-sm 
                lg:max-w-xl 
                object-contain
                translate-x-6
                scale-105
                transition-transform duration-500 ease-out
                hover:-translate-y-4
              "
              style={{
                mixBlendMode: "multiply",
                maxHeight: "480px",
                filter: "drop-shadow(0px 25px 40px rgba(0,0,0,0.15))",
              }}
            />
          </div>

          {/* Tagline */}
          <div className="flex items-center lg:-ml-6">
            <p className="
              text-gray-500 
              text-[17px] 
              leading-7 
              max-w-xl
            ">
              From daily city commutes to long outstation journeys —
              <span className="text-gray-900 font-semibold">
                {" "}Padma Priya Enterprises
              </span>{" "}
              delivers comfort, reliability, and value on every trip.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}