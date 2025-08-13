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

 

  return (
    <div className="relative w-full overflow-hidden h-[10vh] sm:min-h-screen">
      {/* Slide Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {imagePaths.map((path, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img 
              src={'./../../new/10.jpg'} 
              alt={`Banner ${index + 1}`} 
              className="w-full h-[10vh] sm:min-h-screen object-cover"
            />
          </div>
        ))}
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