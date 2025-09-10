// src/components/Finacer.jsx
import React, { useEffect, useRef, useState } from "react";

const images = [
  "/finacer/1.png",
  "/finacer/2.png",
  "/finacer/3.png",
  "/finacer/4.png",
  "/finacer/5.png",
];

const Finacer = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      if (!isPaused) {
        container.scrollLeft += 1;

        // loop back to start when end is reached
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        }
      }
    }, 20); // smaller = faster

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  // toggle pause/resume
  const handleClick = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="w-full mt-10">
      {/* Top heading */}
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Our Trusted Partners
      </h2>

      {/* Auto-scrolling logo strip */}
      <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 p-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`finacer-${index}`}
              onClick={handleClick}
              className={`h-40 w-auto rounded-lg shadow-md object-cover flex-shrink-0 cursor-pointer transition-transform duration-200 ${
                isPaused ? "scale-105" : "scale-100"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Finacer;
