// src/components/BannerShowcase.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const totalImages = 9;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // Models data remains the same as provided
    const models = [
    // Banner 1: EVYAN (SS) ALLOY
    {
      name: "EVYAN (SS) ALLOY",
      subtitle: "Premium Passenger Model",
      model: "Stainless Steel Edition",
      features: "Durable & Corrosion-Resistant",
      tagline: "Aane de",
      description: "Stainless steel chassis with 4 passenger capacity",
      specs: {
        Chassis: "Double Girder CRC SS",
        Paint: "PT Liquid/ED Coated",
        Motor: "PMSM Indian make (1.97 Kw)",
        Controller: "24 T PMSM Indian",
        Battery: "135 Ah Eastman/Livguard",
        "Seating Capacity": "Driver + 4 Passenger"
      }
    },
    // Banner 2: EVYAN GOLD (Auto Facia) NORMAL
    {
      name: "EVYAN GOLD",
      subtitle: "Auto Facia Edition",
      model: "Standard Passenger Model",
      features: "Comfortable & Efficient",
      tagline: "Aane de",
      description: "Economical passenger variant with standard features",
      specs: {
        Chassis: "Double Girder CRC MS",
        Paint: "PT Liquid/ED Coated",
        Motor: "PMSM Indian make (1.97 Kw)",
        Controller: "24 T PMSM Indian",
        Battery: "135 Ah Eastman/Livguard",
        "Seating Capacity": "Driver + 4 Passenger"
      }
    },
    // Banner 3: EVYAN GARBAGE (Hydraulic)
    {
      name: "EVYAN GARBHAUL",
      subtitle: "Hydraulic Edition",
      model: "Waste Management Solution",
      features: "Smart City Solution",
      tagline: "Clean City Initiative",
      description: "Waste management vehicle with 600kg capacity",
      specs: {
        "Box Dimension": "1500×940×1050mm (L×W×H)",
        "Tipping Method": "Hydraulic (70°)",
        "Loading Capacity": "600 Kg",
        Battery: "135 Ah Eastman/Livguard",
        Motor: "PMSM Indian make (1.97 Kw)",
        "Tipping Angle": "70° approx"
      }
    },
    // Banner 4: EVYAN (MS) ALLOY
    {
      name: "EVYAN MS ALLOY",
      subtitle: "Mild Steel Edition",
      model: "Passenger Model",
      features: "Durable & Efficient",
      tagline: "Aane de",
      description: "Mild steel chassis with alloy wheels",
      specs: {
        Motor: "PMSM Indian make (1.97 Kw)",
        Controller: "24 T PMSM Indian",
        Battery: "135 Ah Eastman/Livguard",
        Tyre: "3.75*12 in CEAT/MRF/TVS",
        Rim: "4*12 In BIS Certified ALLOY",
        "Seating Capacity": "Driver + 4 Passenger"
      }
    },
    // Banner 5: EVYAN GOLD (Auto Facia) NORMAL
    {
      name: "EVYAN GOLD",
      subtitle: "Auto Facia Normal",
      model: "Economical Passenger Model",
      features: "Value for Money",
      tagline: "Aane de",
      description: "Affordable passenger variant",
      specs: {
        Chassis: "Double Girder CRC MS",
        Motor: "PMSM Indian make (1.97 Kw)",
        Controller: "24 T PMSM Indian",
        Battery: "135 Ah Eastman/Livguard",
        Tyre: "3.75*12 in CEAT/MRF/TVS",
        "Seating Capacity": "Driver + 4 Passenger"
      }
    },
    // Banner 6: EVYAN (MS) NORMAL
    {
      name: "EVYAN MS",
      subtitle: "Standard Edition",
      model: "Passenger Model",
      features: "Reliable Performance",
      tagline: "Aane de",
      description: "Standard mild steel model for passengers",
      specs: {
        Motor: "PMSM Indian make (1.97 Kw)",
        Controller: "24 T PMSM Indian",
        Battery: "135 Ah Eastman/Livguard",
        Tyre: "3.75*12 in CEAT/MRF/TVS",
        Rim: "4*12 In BIS Certified",
        "Seating Capacity": "Driver + 4 Passenger"
      }
    },
    // Banner 7: EVYAN LOADKRO (OPEN)
    {
      name: "LOADKRO",
      subtitle: "Open Loader",
      model: "Cargo Model",
      features: "Heavy Duty Performance",
      tagline: "Har Load, Har Road",
      description: "Open loader with 600kg capacity",
      specs: {
        Chassis: "Double Girder CRC MS Loader 4×6 ft",
        "Loading Capacity": "600 Kg",
        Motor: "PMSM Indian make (1.97 Kw)",
        Controller: "24 T PMSM Indian",
        Battery: "135 Ah Eastman/Livguard",
        Tyre: "3.75*12 in CEAT/MRF/TVS"
      }
    },
    // Banner 8: LongRange200
    {
      name: "LongRange200",
      subtitle: "T1250",
      model: "Euler Storm EV",
      features: "Har Load, Har Road",
      tagline: "Long Range Cargo",
      description: "Cargo model with 125km range & 675kg capacity",
      specs: {
        "Motor Type": "BLDC 64V",
        Battery: "Lithium Ion 60V 200AH",
        Range: "125 km per charge",
        "Charging Time": "4 hours",
        "Loading Capacity": "675 kg",
        "Max Speed": "43.8 km/h"
      }
    },
    // Banner 9: T1250 Passenger
    {
      name: "T1250",
      subtitle: "Passenger Edition",
      model: "Euler Storm EV",
      features: "Comfort Ride, City Ready",
      tagline: "Aane de",
      description: "Passenger model with 125km range",
      specs: {
        "Motor Type": "BLDC 64V",
        Battery: "Lithium Ion 60V 200AH",
        Range: "125 km per charge",
        "Charging Time": "4 hours",
        "Seating Capacity": "1 Driver + 3 Passenger",
        "Max Speed": "43.8 km/h"
      }
    }
  ];

  // Auto change models with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prev) => (prev + 1) % models.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [models.length, isHovering]);

  const currentModel = models[currentIndex];
  
  // Navigation functions remain the same\\

   const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % models.length);
  };


  return (
    <div 
      className="relative w-full min-h-[40vh] sm:min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src={`/banner/banner-${currentIndex + 1}.jpg`}
              alt={`${currentModel.name} showcase`}
              className="w-full h-full object-cover"
            />
            
            {/* Enhanced Text Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 flex flex-col justify-end sm:justify-center">
              <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
                  {/* Left Column - Model Info */}
                  <div className="flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`text-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.7 }}
                        className="text-white"
                      >
                        <div className="mb-3 flex items-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-black mr-2"></div>
                          <span className="text-sm sm:text-base font-medium text-white tracking-wider">
                            {currentModel.subtitle}
                          </span>
                        </div>
                        
                        <motion.h1 
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 tracking-tight"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {currentModel.name}
                        </motion.h1>
                        
                        <motion.h2 
                          className="text-xl sm:text-2xl text-gray-300 "
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {currentModel.model}
                        </motion.h2>
                        
                        <motion.p 
                          className="text-base sm:text-lg max-w-2xl mb-6 sm:mb-8 opacity-90 leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {currentModel.description}
                        </motion.p>
                        
                      
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Navigation Controls - Improved Positioning */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-12 gap-4">
                  <div className="flex items-center gap-2">
                    {models.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentIndex 
                            ? 'bg-[#00a7da] scale-125' 
                            : 'bg-gray-600 hover:bg-gray-400'
                        }`}
                        aria-label={`View ${models[index].name}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={goToPrevious}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                      aria-label="Previous model"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button 
                      onClick={goToNext}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                      aria-label="Next model"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00a7da] opacity-10 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-[#00a7da] opacity-10 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
        />
      </div>
    </div>
  );
};

export default HeroSection;