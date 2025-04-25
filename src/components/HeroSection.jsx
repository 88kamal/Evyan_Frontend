import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-[#cffafe] px-6 py-12">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center">

        {/* IMAGE FIRST ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <img
            src="../../hero.png"
            alt="Electric Auto Rickshaw"
            className="w-full max-w-xl object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* TEXT CONTENT SECOND ON MOBILE / FIRST ON DESKTOP */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 order-2 lg:order-1"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Upgrade to a Smarter Ride with
            <br />
            <span className="text-blue-600">Electric Auto Rickshaws</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Say goodbye to rising fuel costs and high maintenance. Our e-rickshaws are built for city efficiency and long-lasting performance.
          </motion.p>

          <motion.ul
            className="text-gray-800 space-y-2 list-disc pl-5"
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
            className="flex gap-4 flex-wrap pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition">
              Get a Quote
            </button>
            <Link to={'/all-products'}>
             <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-lg hover:bg-blue-600 hover:text-white transition">
              Explore Models
            </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
