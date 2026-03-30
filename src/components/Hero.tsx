import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 z-20 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          src="https://scontent-sea1-1.cdninstagram.com/v/t51.82787-15/582847779_18063505439625225_4208861303387685023_n.webp?_nc_cat=100&ig_cache_key=Mzc2NjUzNjA5MDU4NTc5OTY2NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=fxAjk_JRsV4Q7kNvwHGZa_i&_nc_oc=Adqz6zyB1W3OxFEclldKc-EBivDxPwhXUUsB0HVs_4Qi6w7p6cxsB9YBUvAncl9cGag&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_gid=8Gmi4-Fl9hfil6t0mEqf6Q&_nc_ss=7a32e&oh=00_AfzLOMW1FVXeS9ty7eyVhirZ7pPn1D1cyiebAQ1DwY_jcw&oe=69D0BA6B"
          alt="Luxury car detailing"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full flex flex-col items-start text-left mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <MapPin size={14} className="text-accent" />
          <span className="text-xs font-medium tracking-wider uppercase text-gray-300">Serving Brevard & Volusia County</span>
        </motion.div>

        <div className="overflow-hidden mb-2 sm:mb-4">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none"
          >
            Pure. Precise.
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mb-6 sm:mb-8">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-glow text-accent"
          >
            Professional.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 font-light"
        >
          Luxury auto detailing built for vehicles that demand perfection. No rushed jobs. No shortcuts. Every detail is intentional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-accent text-white rounded-full font-semibold overflow-hidden active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10">Book Appointment</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 glass text-white rounded-full font-semibold hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
