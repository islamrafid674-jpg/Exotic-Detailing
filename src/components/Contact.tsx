import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Instagram, Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleFocus = (name: string) => setFocusedInput(name);
  const handleBlur = () => setFocusedInput(null);

  return (
    <section id="contact" className="py-32 relative z-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Book Your <span className="text-accent">Detail</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Spots fill fast — serious clients only. Contact us today to schedule your appointment and transform your vehicle.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-1">Call / Text</h4>
                  <a href="tel:3214176961" className="text-xl font-semibold hover:text-accent transition-colors">
                    321-417-6961
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-1">Service Area</h4>
                  <p className="text-xl font-semibold">Brevard & Volusia County</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                  <Instagram size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-1">Direct Message</h4>
                  <a href="#" className="text-xl font-semibold hover:text-accent transition-colors">
                    @exoticdetailing
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10" />
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-accent transition-colors peer"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedInput === 'name' ? '-top-2.5 text-xs bg-black px-2 text-accent' : 'top-4 text-gray-500 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-black peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:text-gray-300'
                    }`}
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone"
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-accent transition-colors peer"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="phone"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedInput === 'phone' ? '-top-2.5 text-xs bg-black px-2 text-accent' : 'top-4 text-gray-500 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-black peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:text-gray-300'
                    }`}
                  >
                    Phone Number
                  </label>
                </div>
              </div>

              <div className="relative">
                <select 
                  id="service"
                  onFocus={() => handleFocus('service')}
                  onBlur={handleBlur}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-accent transition-colors appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-black text-gray-500">Select a Service</option>
                  <option value="full" className="bg-black">Full Detail (Interior + Exterior)</option>
                  <option value="interior" className="bg-black">Full Interior Detailing</option>
                  <option value="exterior" className="bg-black">Exterior Detailing</option>
                  <option value="paint" className="bg-black">Paint Enhancement</option>
                  <option value="ceramic" className="bg-black">Ceramic Protection</option>
                </select>
              </div>

              <div className="relative">
                <textarea 
                  id="message"
                  rows={4}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-accent transition-colors peer resize-none"
                  placeholder=" "
                ></textarea>
                <label 
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedInput === 'message' ? '-top-2.5 text-xs bg-black px-2 text-accent' : 'top-4 text-gray-500 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-black peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:text-gray-300'
                  }`}
                >
                  Vehicle Make/Model & Details
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent-light active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                Send Request
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
