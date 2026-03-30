import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Full Interior Detailing",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Deep vacuum (seats, carpets, trunk)",
        "Surface wipe-down & sanitation",
        "Stain removal & spot treatment",
        "Interior glass cleaned",
        "Plastic & leather conditioning"
      ],
      colSpan: "lg:col-span-2",
    },
    {
      title: "Exterior Detailing",
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Foam pre-wash & hand wash",
        "Wheels, tires & rims deep cleaned",
        "Tire shine & trim dressing",
        "Streak-free exterior glass",
        "Paint-safe drying process"
      ],
      colSpan: "lg:col-span-1",
    },
    {
      title: "Paint Enhancement",
      image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1964&auto=format&fit=crop",
      features: [
        "Light paint correction",
        "Removes minor swirls & oxidation",
        "Restores gloss & depth"
      ],
      colSpan: "lg:col-span-1",
    },
    {
      title: "Ceramic Protection",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Long-lasting paint protection",
        "Hydrophobic finish (water repellent)",
        "UV & contamination resistance",
        "Easier maintenance"
      ],
      colSpan: "lg:col-span-2",
    }
  ];

  return (
    <section id="services" className="py-32 relative z-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Premium <span className="text-accent">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Detail-level cleaning for all surfaces. Restores clean, like-new condition.
          </p>
        </motion.div>

        {/* Mobile Carousel / Desktop Bento Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-3 gap-6 pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative group rounded-3xl overflow-hidden min-w-[85vw] sm:min-w-[400px] lg:min-w-0 snap-center ${service.colSpan} aspect-[4/5] lg:aspect-auto lg:min-h-[400px]`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
