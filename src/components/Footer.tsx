import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-24 md:pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <a href="#" className="inline-block mb-4">
              <img 
                src="https://i.imgur.com/wsoLdfQ.png" 
                alt="Exotic Detailing Logo" 
                className="h-20 md:h-28 w-auto mx-auto md:mx-0"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-gray-500 text-sm">Pure. Precise. Professional.</p>
          </div>

          <div className="flex gap-6">
            <a href="https://www.instagram.com/exotic_detailers23/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-500 transition-all duration-300 text-pink-500 hover:text-pink-400 drop-shadow-[0_0_8px_rgba(225,48,108,0.6)] hover:drop-shadow-[0_0_16px_rgba(225,48,108,1)]">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500 transition-all duration-300 text-blue-500 hover:text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {currentYear} Exotic Detailing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
