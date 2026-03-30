import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael T.",
      car: "Porsche 911 GT3",
      text: "Absolutely incredible attention to detail. My GT3 looks better than the day I picked it up from the dealership. The ceramic coating is flawless.",
      rating: 5
    },
    {
      name: "Sarah L.",
      car: "Range Rover Autobiography",
      text: "Exotic Detailing completely transformed my interior. They removed stains I thought were permanent and the leather feels brand new again.",
      rating: 5
    },
    {
      name: "David W.",
      car: "BMW M5 Competition",
      text: "Professional, punctual, and perfectionists. The paint correction removed years of swirl marks. I won't trust anyone else with my cars.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-32 relative z-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Client <span className="text-accent">Reviews</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from clients who demand the best.
          </p>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-3 gap-6 pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-3xl min-w-[85vw] sm:min-w-[400px] lg:min-w-0 snap-center flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} size={18} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-sm text-accent">{testimonial.car}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
