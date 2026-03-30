import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300 ${
            isScrolled ? 'glass shadow-lg box-glow' : 'bg-transparent'
          }`}>
            <a href="#" className="flex items-center">
              <img 
                src="https://i.imgur.com/wsoLdfQ.png" 
                alt="Exotic Detailing Logo" 
                className="h-16 md:h-20 w-auto"
                referrerPolicy="no-referrer"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="flex items-center space-x-4 border-l border-white/20 pl-6">
                <a href="https://www.instagram.com/exotic_detailers23/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-all duration-300 drop-shadow-[0_0_8px_rgba(225,48,108,0.8)] hover:drop-shadow-[0_0_16px_rgba(225,48,108,1)]">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-400 transition-all duration-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#contact" 
                  className="bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-95 flex items-center gap-2"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col pt-24 px-8 pb-12"
          >
            <button 
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col space-y-8 mt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-bold tracking-tight text-white hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto flex flex-col space-y-6"
            >
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/exotic_detailers23/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-all duration-300 drop-shadow-[0_0_12px_rgba(225,48,108,0.8)] hover:drop-shadow-[0_0_20px_rgba(225,48,108,1)]">
                  <Instagram size={28} />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-400 transition-all duration-300 drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
              <a 
                href="tel:3214176961" 
                className="w-full bg-accent text-white py-4 rounded-xl text-center font-bold text-lg active:scale-95 transition-transform"
              >
                321-417-6961
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
