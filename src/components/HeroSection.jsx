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
  {
    name: "EVYAN (SS) ALLOY",
    subtitle: "Premium Passenger Model",
    model: "Stainless Steel Edition",
    features: "Durable & Corrosion-Resistant",
    tagline: "Aane de",
    description: "Stainless steel chassis with 4 passenger capacity",
  },
  {
    name: "EVYAN GOLD",
    subtitle: "Auto Facia Edition",
    model: "Standard Passenger Model",
    features: "Comfortable & Efficient",
    tagline: "Aane de",
    description: "Economical passenger variant with standard features",
  },
  {
    name: "EVYAN GARBHAUL",
    subtitle: "Hydraulic Edition",
    model: "Waste Management Solution",
    features: "Smart City Solution",
    tagline: "Clean City Initiative",
    description: "Waste management vehicle with 600kg capacity",
  },
];

const desktopBanners = [
  "/banner/banner-1.jpg",
  "/banner/banner-2.jpg",
  "/banner/banner-3.jpg",
];
const mobileBanners = [
  "../../../new/1.jpg", "../../../new/2.jpg", "../../../new/3.jpg", "../../../new/4.jpg", "../../../new/5.jpg",
  "../../../new/6.jpg", "../../../new/7.jpg", "../../../new/8.jpg", "../../../new/9.jpg", "../../../new/10.jpg",
  "../../../new/11.jpg", "../../../new/12.jpg"
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useIsMobile();

  const bannerImages = isMobile ? mobileBanners : desktopBanners;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering, bannerImages.length]);

  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % bannerImages.length);

  useEffect(() => {
    if (currentIndex >= bannerImages.length) setCurrentIndex(0);
  }, [bannerImages.length, currentIndex]);

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
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex + (isMobile ? '-mobile' : '-desktop')}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Yahi important: object-cover only, koi black nahi aayega */}
          <img
            src={bannerImages[currentIndex]}
            alt={currentModel?.name || ''}
            className="w-full h-full object-cover object-center select-none pointer-events-none"
            draggable={false}
          />
          {/* Overlay code below (unchanged)... */}
          <div className="
            absolute inset-0
            bg-gradient-to-b from-black/40 via-black/40 to-black/40
            flex flex-col
            justify-end
            sm:justify-center
          ">
            <div className="w-full mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 flex flex-col h-full sm:justify-center justify-end pb-24 sm:pb-0 pt-8 sm:pt-0">
              <div className="sm:grid sm:grid-cols-2 sm:gap-8 flex flex-col items-center sm:items-start text-center sm:text-left sm:h-auto h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                    className={`
                      text-white w-full flex flex-col
                      ${isMobile
                        ? "items-start justify-end text-left px-6 pb-24 pt-0"
                        : "items-center sm:items-start sm:justify-center justify-end sm:mb-0 mb-8 text-center sm:text-left"}
                      transition-all duration-300
                    `}
                    style={isMobile ? { maxWidth: "90vw", position: 'relative' } : {}}
                  >
                    <div className="mb-2 flex items-center justify-start">
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
                  </motion.div>
                </AnimatePresence>
                <div className="hidden sm:block"></div>
              </div>
            </div>
          </div>
          {/* Dots, Arrows, Blurs -- original code unchanged */}
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
        </motion.div>
      </AnimatePresence>

      {/* Blurs (unchanged) */}
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
