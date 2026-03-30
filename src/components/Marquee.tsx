import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Marquee() {
  const items = [
    "Precision Work",
    "High-End Finish",
    "Professional Service",
    "Consistent Results",
    "Ceramic Protection",
    "Paint Enhancement"
  ];

  // Duplicate items to ensure seamless scrolling
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="py-6 border-y border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden flex relative z-20">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <Star size={16} className="text-accent mr-8" />
            <span className="text-xl md:text-2xl font-bold tracking-widest uppercase text-gray-400">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
