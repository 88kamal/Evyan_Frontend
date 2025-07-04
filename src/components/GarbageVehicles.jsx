// src/components/GarbageVehicles.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GarbageVehicles = () => {
  const garbageVehicles = [
    {
      id: 1,
      title: "EVYAN GARBAGE",
      subtitle: "Semi-Hydraulic Model",
      badge: "Eco-Friendly",
      features: [
        { label: "Box Dimension", value: "1500×940×1050 mm" },
        { label: "Tipping Method", value: "Semi-Hydraulic" },
        { label: "Loading Capacity", value: "600 kg" },
        { label: "Battery", value: "135 Ah" },
      ]
    },
    {
      id: 2,
      title: "EVYAN GARBAGE",
      subtitle: "Hydraulic Model",
      badge: "Advanced",
      features: [
        { label: "Box Dimension", value: "1500×940×1050 mm" },
        { label: "Tipping Method", value: "Hydraulic" },
        { label: "Tipping Angle", value: "70° approx" },
        { label: "Loading Capacity", value: "600 kg" },
      ]
    }
  ];

  return (
    <div className="mb-20">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-4">Specialized Garbage Vehicles</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our eco-friendly garbage collection vehicles designed for efficient waste management
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {garbageVehicles.map((vehicle, index) => (
          <motion.div
            key={vehicle.id}
            className="bg-gradient-to-r from-purple-900 to-indigo-800 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
            whileHover={{ y: -10 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{vehicle.title}</h3>
                  <p className="text-purple-200 font-semibold">{vehicle.subtitle}</p>
                </div>
                <span className="px-3 py-1 bg-purple-800 text-purple-200 rounded-full text-sm">
                  {vehicle.badge}
                </span>
              </div>
              
              <div className="mb-6 flex justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center">
                  <span className="text-gray-500">
                    {vehicle.subtitle} Image
                  </span>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                {vehicle.features.map((feature, idx) => (
                  <div key={idx} className="flex justify-between pb-2 border-b border-purple-700">
                    <span className="text-purple-200">{feature.label}</span>
                    <span className="font-medium text-white">{feature.value}</span>
                  </div>
                ))}
              </div>
              
              <motion.button
                className="w-full py-3 bg-white text-purple-900 font-bold rounded-lg hover:bg-gray-100 transition duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GarbageVehicles;