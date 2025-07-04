// src/components/FeaturedVehicle.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FeaturedVehicle = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 rounded-2xl overflow-hidden shadow-2xl mb-20 relative"
    >
      {/* Featured Badge */}
      <div className="absolute top-6 right-[-35px] w-[140px] py-2 text-center bg-gradient-to-r from-yellow-500 to-orange-500 transform rotate-45 text-xs font-bold text-white shadow-lg z-10">
        FEATURED
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
        {/* Vehicle Image */}
        <div className="flex items-center justify-center">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl blur-xl opacity-30 animate-pulse"></div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 md:h-96 relative z-10 flex items-center justify-center">
              <span className="text-gray-500 text-xl">L5N - OPEN Vehicle Image</span>
            </div>
          </motion.div>
        </div>
        
        {/* Vehicle Details */}
        <div className="text-white">
          <div className="mb-6">
            <span className="px-4 py-1 bg-blue-800 text-blue-200 rounded-full text-sm font-medium inline-block mb-4">
              NEW MODEL
            </span>
            <h2 className="text-3xl font-bold mb-2">L5N - OPEN</h2>
            <p className="text-blue-100 mb-6">
              Advanced electric utility vehicle with exceptional payload capacity and eco-friendly performance
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* Power */}
              <motion.div 
                className="flex items-center p-3 bg-blue-900/40 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <p className="text-sm text-blue-200">Power</p>
                  <p className="font-bold">BLDC 64V</p>
                </div>
              </motion.div>
              
              {/* Battery */}
              <motion.div 
                className="flex items-center p-3 bg-blue-900/40 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                  <span className="text-2xl">🔋</span>
                </div>
                <div>
                  <p className="text-sm text-blue-200">Battery</p>
                  <p className="font-bold">60V 200 AH</p>
                </div>
              </motion.div>
              
              {/* Speed */}
              <motion.div 
                className="flex items-center p-3 bg-blue-900/40 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <p className="text-sm text-blue-200">Top Speed</p>
                  <p className="font-bold">43.8 km/h</p>
                </div>
              </motion.div>
              
              {/* Range */}
              <motion.div 
                className="flex items-center p-3 bg-blue-900/40 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center mr-4">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-sm text-blue-200">Range</p>
                  <p className="font-bold">125 km</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <motion.div 
              className="p-4 bg-blue-900/30 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex justify-between">
                <span className="text-blue-200">Loading Capacity</span>
                <span className="font-bold">675 kg</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-blue-900/30 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-between">
                <span className="text-blue-200">Charging Time</span>
                <span className="font-bold">4 hours</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-blue-900/30 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex justify-between">
                <span className="text-blue-200">Dimensions</span>
                <span className="font-bold">3155 x 1445 x 1810 mm</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-blue-900/30 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex justify-between">
                <span className="text-blue-200">Load Body</span>
                <span className="font-bold">1500 x 1370 x 625 mm</span>
              </div>
            </motion.div>
          </div>
          
          <motion.button 
            className="w-full py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Request a Quote
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedVehicle;