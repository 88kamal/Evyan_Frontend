import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const totalImages = 17;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate image paths
  const imagePaths = Array.from(
    { length: totalImages },
    (_, i) => `/banner/banner-${i + 1}.jpg`
  );

  // Auto image change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <section className="relative w-full min-h-[30vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={imagePaths[currentIndex]}
            alt="Hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/60 via-[#2c2c2c]/70 to-[#0f2027]/50 z-10" />
      </div>

      {/* Hero content */}
      <div className="relative z-20 max-w-7xl w-full px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center py-8 sm:py-16">
        {/* Text content */}
        <motion.div
          className="text-center lg:text-left space-y-5"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Upgrade to a Smarter Ride with
            <br />
            <span className="text-[#00a7da]">Electric Auto Rickshaws</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base text-white max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Say goodbye to rising fuel costs and high maintenance. Our e-rickshaws are built for city efficiency and long-lasting performance.
          </motion.p>

          {/* List hidden on small screens */}
          <motion.ul
            className="hidden sm:block text-white space-y-2 list-disc pl-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <li>Zero fuel cost & low maintenance</li>
            <li>Up to 120km range per charge</li>
            <li>Easy financing & EMI options</li>
            <li>Government subsidies available</li>
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center lg:justify-start gap-4 flex-wrap pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-[#00a7da] text-white px-5 py-2 text-sm sm:text-base rounded-md hover:bg-blue-700 transition">
              Get a Quote
            </button>
            <Link to="/all-products">
              <button className="border border-white text-white px-5 py-2 text-sm sm:text-base rounded-md hover:bg-[#00a7da] hover:text-white transition">
                Explore Models
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Layout balance column */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default HeroSection;
