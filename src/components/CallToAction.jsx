// src/components/CallToAction.jsx
import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.div 
      className="text-center py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Go Electric?</h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
        Join the sustainable transportation revolution with our cutting-edge electric vehicles
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-900 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Test Drive
        </motion.button>
        <motion.button
          className="px-8 py-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Brochure
        </motion.button>
      </div>
      
      <footer className="mt-20 text-center text-gray-500 text-sm">
        <p>© 2023 Electric Vehicle Innovations. All rights reserved.</p>
        <p className="mt-2">Designed with ♥ for a sustainable future</p>
      </footer>
    </motion.div>
  );
};

export default CallToAction;