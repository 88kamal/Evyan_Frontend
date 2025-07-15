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

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-12 overflow-hidden">
      {/* Background image slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${imagePaths[currentIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>

        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/60 via-[#2c2c2c]/70 to-[#0f2027]/50 z-[1]" />
      </div>

      {/* Content */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Upgrade to a Smarter Ride with
            <br />
            <span className="text-[#00a7da]">Electric Auto Rickshaws</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Say goodbye to rising fuel costs and high maintenance. Our e-rickshaws are built for city efficiency and long-lasting performance.
          </motion.p>

          <motion.ul
            className="text-white space-y-2 list-disc pl-5 text-left inline-block lg:inline lg:pl-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <li>Zero fuel cost & low maintenance</li>
            <li>Up to 120km range per charge</li>
            <li>Easy financing & EMI options</li>
            <li>Government subsidies available</li>
          </motion.ul>

          <motion.div
            className="flex justify-center lg:justify-start gap-4 flex-wrap pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-[#00a7da] text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition">
              Get a Quote
            </button>
            <Link to="/all-products">
              <button className="border border-white text-white px-6 py-3 rounded-md text-lg hover:bg-[#00a7da] hover:text-white transition">
                Explore Models
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Placeholder column for layout balance */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default HeroSection;
