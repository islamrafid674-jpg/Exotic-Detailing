/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import ParallaxBreak from './components/ParallaxBreak';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';

export default function App() {
  // Add custom scrollbar class to body
  useEffect(() => {
    document.body.classList.add('custom-scrollbar');
    return () => document.body.classList.remove('custom-scrollbar');
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <ParallaxBreak />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
