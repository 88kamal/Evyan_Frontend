

// TestimonialsSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {


 const testimonials = [
    {
      id: 1,
      name: "Ratnakar",
      rating: 5,
      comment: "The L5N-OPEN has transformed our last-mile delivery operations. With its impressive range and capacity, we've reduced costs by 40% while maintaining efficiency.",
      avatar: "R.jpeg"
    },
    {
      id: 2,
      name: "Anand",
      rating: 5,
      comment: "Our EVYAN GARBAGE hydraulic vehicles have significantly improved our waste collection efficiency. The hydraulic system makes dumping effortless for our operators.",
      avatar: "A.jpeg"
    },
    {
      id: 3,
      name: "Pradeep",
      rating: 4,
      comment: "We've deployed 15 units across the city. The silent operation is perfect for early morning collections, and maintenance costs are surprisingly low.",
      avatar: "P.jpeg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const nextTestimonial = () => {
    setDirection('right');
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection('left');
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > activeIndex ? 'right' : 'left');
    setActiveIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const testimonialVariants = {
    enter: (direction) => ({
      x: direction === 'right' ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === 'right' ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ... header section remains the same ... */}

        {/* Featured Testimonial - FIXED */}
        <div className="relative mb-16 min-h-[480px] sm:min-h-[400px] md:min-h-[400px]">
          <motion.div
            key={testimonials[activeIndex].id}
            custom={direction}
            variants={testimonialVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">
              {/* Left side - Avatar and info */}
              <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-cyan-600 p-6 sm:p-8 flex flex-col justify-center items-center text-center text-white">
                <div className="mb-4 sm:mb-6">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name} 
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-white/30 mx-auto object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{testimonials[activeIndex].name}</h3>
                {/* <p className="text-white/80 mt-1 text-sm sm:text-base">{testimonials[activeIndex].role}</p> */}
                {/* <p className="text-white/80 mt-1 text-sm sm:text-base">{testimonials[activeIndex].company}</p> */}
                <div className="flex mt-3 sm:mt-4">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
              </div>
              
              {/* Right side - Testimonial content */}
              <div className="md:w-3/5 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="mb-4 sm:mb-6">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg italic leading-relaxed">
                    "{testimonials[activeIndex].comment}"
                  </p>
                </div>
                
                <div className="mt-6 flex justify-center sm:justify-start">
                  <button 
                    onClick={prevTestimonial}
                    className="mr-4 p-2 sm:p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 sm:p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


       
        {/* Testimonials Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer transform transition-transform hover:-translate-y-1 ${index === activeIndex ? 'ring-2 ring-blue-500' : ''}`}
              whileHover={{ scale: 1.02 }}
              onClick={() => goToTestimonial(index)}
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-100 mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 italic">
                "{testimonial.comment.substring(0, 120)}..."
              </p>
          
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 py-12 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Trusted by Industry Leaders</h3>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Our vehicles are powering sustainable operations across multiple sectors
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-blue-200">Vehicles Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-200">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">40+</div>
                <div className="text-blue-200">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500k+</div>
                <div className="text-blue-200">Km Driven Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
