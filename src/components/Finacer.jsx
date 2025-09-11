// src/components/Financer.jsx
import React, { useState } from "react";

const images = [
  "/finacer/1.png",
  "/finacer/2.png",
  "/finacer/3.png",
  "/finacer/4.png",
  "/finacer/5.png",
];

const Financer = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  return (
    <div className="w-full mt-10 px-4 md:px-8">
      {/* Top heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
        Our Trusted Financers
      </h2>

      {/* Responsive logo grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform `}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={src}
              alt={`financer-${index}`}
              className="w-full h-auto object-contain p-4 md:p-6 cursor-pointer"
              style={{ aspectRatio: "16/9" }}
            />
            
       
          </div>
        ))}
      </div>

    </div>
  );
};

export default Financer;