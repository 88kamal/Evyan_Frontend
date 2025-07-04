// src/components/AdvancedFeatures.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AdvancedFeatures = () => {
  const features = [
    {
      id: 1,
      icon: "⚙️",
      title: "Smart Controller",
      description: "3-phase bridge configuration with built-in decoding logic for Hall-effect sensors and PWM current controller"
    },
    {
      id: 2,
      icon: "🌿",
      title: "Eco-Friendly Design",
      description: "Zero-emission electric powertrain with energy-efficient systems for sustainable operations"
    },
    {
      id: 3,
      icon: "🛡️",
      title: "Safety Features",
      description: "Includes fire extinguisher, first aid kit, drum brakes, and reinforced chassis for maximum safety"
    }
  ];

  return (
    <motion.div 
      className="bg-gray-800 rounded-2xl p-8 mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Advanced Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="text-center p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
            whileHover={{ y: -10 }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center mx-auto mb-4 text-2xl">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold my-4 text-white">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AdvancedFeatures;