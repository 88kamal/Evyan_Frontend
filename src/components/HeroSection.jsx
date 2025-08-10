import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

   const models = [
    // Banner 1: EVYAN (SS) ALLOY
    {
      name: "EVYAN (SS)",
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
      name: "EVYAN GARBAGE",
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
      name: "EVYAN MS",
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
      name: "L5N - Closed",
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
    },
     {
      name: "EVYAN GOLD li",
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
  ];

const desktopBanners = [
  "/banner/banner-1.jpg",
  "/banner/banner-2.jpg",
  "/banner/banner-3.jpg",
  "/banner/banner-4.jpg",
  "/banner/banner-5.jpg",
  "/banner/banner-6.jpg",
  "/banner/banner-7.jpg",
  "/banner/banner-8.jpg",
  "/banner/banner-9.jpg",
  "/banner/banner-10.jpg",
];
const mobileBanners = [
  "../../../new/1.jpg", 
  "../../../new/2.jpg",
  "../../../new/3.jpg",
  "../../../new/4.jpg",
  "../../../new/5.jpg",
  "../../../new/6.jpg",
  "../../../new/7.jpg",
  "../../../new/8.jpg",
  "../../../new/9.jpg",
  "../../../new/10.jpg",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const isMobile = useIsMobile();
  const bannerImages = isMobile ? mobileBanners : desktopBanners;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setDirection(1);
        setCurrentIndex(prev => (prev + 1) % bannerImages.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering, bannerImages.length]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + bannerImages.length) % bannerImages.length);
  };
  
  const goToNext = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % bannerImages.length);
  };

  const currentModel = models[currentIndex % models.length];

  return (
    <div
      className={
        "relative w-full overflow-hidden bg-black " +
        (isMobile
          ? "aspect-[9/16] h-auto min-h-[100svh] max-h-screen"
          : "h-[100vh] min-h-[100svh] aspect-[16/7]")
      }
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Static UI elements that don't animate */}
      <div className="absolute inset-0 z-10">
        <div className="
          absolute inset-0
          bg-gradient-to-b from-black/40 via-black/40 to-black/40
          flex flex-col
          justify-end
          sm:justify-center
        ">
          <div className="w-full mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 flex flex-col h-full sm:justify-center justify-end pb-24 sm:pb-0 pt-8 sm:pt-0">
            <div className="sm:grid sm:grid-cols-2 sm:gap-8 flex flex-col items-center sm:items-start text-center sm:text-left sm:h-auto h-full">
              <div className="hidden sm:block"></div>
              
              <div className={`
                text-white w-full flex flex-col
                ${isMobile
                  ? "items-start justify-end text-left px-6 pb-24 pt-0"
                  : "items-end justify-center sm:text-right text-center"}
              `}
              style={isMobile ? { maxWidth: "90vw" } : { maxWidth: "90%" }}>
                <div className="mb-2 flex items-center justify-start sm:justify-end">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00a7da] mr-2"></div>
                  <span className="text-xs sm:text-base font-medium tracking-wide">
                    {currentModel?.subtitle}
                  </span>
                </div>
                <h1 className="text-3xl xs:text-3xl sm:text-5xl font-bold mb-2 tracking-tight leading-tight drop-shadow-lg">
                  {currentModel?.name}
                </h1>
                <h2 className="text-md sm:text-2xl text-gray-300 mb-2">{currentModel?.model}</h2>
                <p className="text-md sm:text-lg max-w-xl mb-4 opacity-90 text-gray-100">
                  {currentModel?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute left-0 right-0 bottom-20 sm:bottom-12 flex justify-center z-20">
          <div className="flex gap-1 sm:gap-2">
            {bannerImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  idx === currentIndex ? 'bg-[#00a7da] scale-110 shadow-lg' : 'bg-gray-400 opacity-70'
                }`}
                aria-label={`View slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
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
      </div>

      {/* Animated Images with Left-to-Right Scroll */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img
          key={currentIndex}
          src={bannerImages[currentIndex]}
          alt={models[currentIndex % models.length]?.name || ''}
          className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
          draggable={false}
          custom={direction}
          initial={{ 
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0.8
          }}
          animate={{ 
            x: 0,
            opacity: 1
          }}
          exit={{ 
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0.8
          }}
          transition={{ 
            duration: 0.7, 
            ease: "easeInOut" 
          }}
        />
      </AnimatePresence>

      {/* Background effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-36 h-36 sm:w-64 sm:h-64 rounded-full bg-[#00a7da] opacity-10 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-[#00a7da] opacity-10 blur-3xl"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.7}}
      />
    </div>
  );
};

export default HeroSection;