import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden fixed bottom-6 left-6 right-6 z-50 flex gap-4"
        >
          <a
            href="tel:3214176961"
            className="flex-1 bg-white text-black py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href="#"
            className="flex-1 bg-accent text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(133,68,194,0.4)] active:scale-95 transition-transform"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
