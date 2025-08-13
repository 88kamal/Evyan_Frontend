// BannerSlider.js
import React, { useState, useEffect } from 'react';

const SimpleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <div className="relative w-full overflow-hidden aspect-video sm:aspect-[16/9]">
      {/* Slide Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        
          <div className="w-full flex-shrink-0">
            <img 
              src={'/banner/banner-10.jpg'} 
              alt={`Banner`} 
              className="w-full h-full object-cover"
            />
          </div>
     
      </div>


    </div>
  );
};

export default SimpleSlider;