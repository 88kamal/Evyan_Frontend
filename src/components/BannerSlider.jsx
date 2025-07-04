import React, { useState, useEffect } from 'react';
import { Button, IconButton } from '@material-tailwind/react';

const SimpleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 17;
  
  // Generate image paths
  const imagePaths = Array.from(
    { length: totalImages },
    (_, i) => `/banner/banner-${i + 1}.jpg`
  );

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  return (
    <div className="relative w-full overflow-hidden h-[500px]">
      {/* Slide Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {imagePaths.map((path, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img 
              src={path} 
              alt={`Banner ${index + 1}`} 
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={goToPrevious}
          className="rounded-full bg-black/50 hover:bg-black/70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </IconButton>

        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={goToNext}
          className="rounded-full bg-black/50 hover:bg-black/70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </IconButton>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {imagePaths.map((_, index) => (
          <Button
            key={index}
            variant="text"
            color="white"
            size="sm"
            onClick={() => setCurrentIndex(index)}
            className={`p-1 rounded-full transition-all ${
              currentIndex === index 
                ? 'bg-white opacity-100' 
                : 'bg-white/50 opacity-50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleSlider;