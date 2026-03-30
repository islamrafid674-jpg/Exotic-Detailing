import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Clock, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <ShieldCheck size={32} className="text-accent" />,
      title: "Precision Work",
      desc: "Every inch of your vehicle is treated with meticulous care."
    },
    {
      icon: <Sparkles size={32} className="text-accent" />,
      title: "High-End Finish",
      desc: "We use only premium products for a flawless, lasting shine."
    },
    {
      icon: <Clock size={32} className="text-accent" />,
      title: "Professional Service",
      desc: "Reliable, communicative, and respectful of your time."
    },
    {
      icon: <Award size={32} className="text-accent" />,
      title: "Consistent Results",
      desc: "Delivering perfection, every single time you book."
    }
  ];

  return (
    <section id="about" className="py-32 relative z-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Detailing for clients who care about <span className="text-accent">every inch</span>.
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Exotic Detailing focuses on precision-level detailing for clients who demand perfection. No rushed jobs. No shortcuts. Every detail is intentional. We treat your vehicle as if it were our own, ensuring a finish that stands out.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {values.map((val, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center box-glow">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
                    <p className="text-sm text-gray-500">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-3xl overflow-hidden glass p-2"
          >
            <img 
              src="https://scontent-sea5-1.cdninstagram.com/v/t51.82787-15/581202686_17899948305299753_3233138043348635005_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=111&ig_cache_key=Mzc2NjE0NzYwMzM2MTUxOTg5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=je-GW_UGLMcQ7kNvwFm1kRs&_nc_oc=AdogCLLqyE3nV0owGj_TSNpo1niWvBUCgI6guig-36v_1NGfUE7YzjFRuj_oVf18bNs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sea5-1.cdninstagram.com&_nc_gid=8Gmi4-Fl9hfil6t0mEqf6Q&_nc_ss=7a32e&oh=00_AfzDqAryoMWxQaClXbfHEe3go-UdiKEgAVmIIVTHNJfLlA&oe=69D093BF" 
              alt="Detailing process" 
              className="w-full h-full object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
