  import React, { useState, useEffect } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  
  const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
  
 
    const models = [
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
  
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (!isHovering) {
          setCurrentIndex((prev) => (prev + 1) % models.length);
        }
      }, 5000);
      return () => clearInterval(interval);
    }, [models.length, isHovering]);
  
    const currentModel = models[currentIndex] || null;
    if (!currentModel) return null;
  
    const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + models.length) % models.length);
    const goToNext = () => setCurrentIndex((prev) => (prev + 1) % models.length);
  
    return (
      <div
        className="relative w-full h-[100vh] min-h-[100svh] overflow-hidden bg-black"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            {/* Banner Image */}
            <img
              src={`/banner/banner-${currentIndex + 1}.jpg`}
              alt={currentModel.name}
              className="w-full h-full object-cover object-center"
              style={{ aspectRatio: '9/16' }}
            />
  
            {/* Overlay for text readability */}
            <div className="
              absolute inset-0
              bg-gradient-to-b from-black/80 via-black/50 to-black/80
              flex flex-col
              justify-end
              sm:justify-center
            ">
              {/* ---------- TEXT CONTENT ---------- */}
              {/* Desktop: left align, Mobile: center and on top */}
              <div className="
                w-full mx-auto
                max-w-7xl px-4 sm:px-6 lg:px-8
                flex
                flex-col
                h-full
                sm:justify-center
                justify-end
                pb-24
                sm:pb-0
                pt-16
                sm:pt-0
              ">
                <div className="
                  sm:grid sm:grid-cols-2 sm:gap-8
                  flex flex-col items-center sm:items-start text-center sm:text-left
                  sm:h-auto
                  h-full
                ">
                  {/* ---- TEXT ---- */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`text-${currentIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.7 }}
                      className="
                        text-white
                        w-full
                        flex flex-col
                        items-center sm:items-start
                        sm:justify-center
                        justify-end
                        sm:mb-0
                        mb-8
                      "
                    >
                      <div className="mb-2 flex items-center justify-center sm:justify-start">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#00a7da] mr-2"></div>
                        <span className="text-xs sm:text-base font-medium tracking-wide">
                          {currentModel.subtitle}
                        </span>
                      </div>
                      <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold mb-2 tracking-tight leading-tight drop-shadow-lg">
                        {currentModel.name}
                      </h1>
                      <h2 className="text-sm sm:text-2xl text-gray-300 mb-2">{currentModel.model}</h2>
                      <p className="text-xs sm:text-lg max-w-xl mb-4 opacity-90 text-gray-100">
                        {currentModel.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                  {/* ---- For desktop, right column empty for image. Mobile: no gap ---- */}
                  <div className="hidden sm:block"></div>
                </div>
              </div>
              {/* ------------- END TEXT CONTENT ------------- */}
            </div>
  
            {/* Dots */}
            <div className="absolute left-0 right-0 bottom-20 sm:bottom-12 flex justify-center z-20">
              <div className="flex gap-1 sm:gap-2">
                {models.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      idx === currentIndex ? 'bg-[#00a7da] scale-110 shadow-lg' : 'bg-gray-400 opacity-70'
                    }`}
                    aria-label={`View ${models[idx].name}`}
                  />
                ))}
              </div>
            </div>
  
            {/* Arrows */}
            <div className="absolute left-0 right-0 bottom-8 sm:bottom-5 flex justify-center items-center gap-8 z-20">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900/70 hover:bg-[#00a7da]/90 transition-colors flex items-center justify-center shadow-xl"
                aria-label="Previous"
              >
                <svg width="24" height="24" stroke="currentColor" className="text-white" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900/70 hover:bg-[#00a7da]/90 transition-colors flex items-center justify-center shadow-xl"
                aria-label="Next"
              >
                <svg width="24" height="24" stroke="currentColor" className="text-white" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
  
        {/* Optional animated blurs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-36 h-36 sm:w-64 sm:h-64 rounded-full bg-[#00a7da] opacity-10 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-[#00a7da] opacity-10 blur-3xl"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 0.7 }}
        />
      </div>
    );
  };
  
  export default HeroSection;
  