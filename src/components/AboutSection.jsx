// AboutSection.js
import React from 'react';
import { motion } from 'framer-motion';
import SimpleSlider from './BannerSlider';

const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f0fcff] via-[#f0f9ff] to-[#e6f7ff] py-8 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Decorative elements - made responsive */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-[#00a7da]/10 rounded-full blur-xl lg:blur-3xl"></div>
        <div className="absolute bottom-4 left-4 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-[#ff6b6b]/10 rounded-full blur-xl lg:blur-3xl"></div>
        <div className="absolute top-1/4 left-1/5 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-[#68ceec]/20 rounded-full blur-xl lg:blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          <div className="inline-block relative">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Transforming Urban Mobility with <span className="text-[#00a7da]">Evyan</span>
            </motion.h2>
            <motion.div 
              className="absolute bottom-2 left-0 w-32 h-2 bg-[#00a7da]/30 z-[-1]"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          
          <motion.p 
            className="text-gray-700 text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            At Evyan, we are revolutionizing urban transportation through innovative electric vehicles designed for India's unique needs. Our mission is to create sustainable mobility solutions that empower communities and protect our planet.
          </motion.p>
          
          <div className="space-y-2 pt-2 md:pt-4">
            {[
              { icon: "⚡", text: "Backed by cutting-edge EV technology and eco-conscious engineering" },
              { icon: "🔧", text: "Comprehensive after-sales network with 250+ service centers" },
              { icon: "👥", text: "Trusted by 15,000+ drivers & fleet operators nationwide" },
              { icon: "🌱", text: "Reducing carbon emissions by 45,000+ tons annually" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <span className="text-xl p-1.5 sm:p-2 bg-white rounded-lg shadow-sm">{item.icon}</span>
                <span className="text-gray-800 text-base sm:text-lg flex-1">{item.text}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="pt-4 md:pt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button className="bg-[#00a7da] hover:bg-[#008ab9] text-white font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base">
              Explore Our Models
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-full border border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base">
              Download Brochure
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex justify-center order-first lg:order-none mt-6 lg:mt-0"
        >
          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-0 rounded-xl lg:rounded-3xl shadow-xl lg:shadow-2xl shadow-[#00a7da]/20"></div>
            <div className="overflow-hidden rounded-xl lg:rounded-3xl border-4 lg:border-8 border-white shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <SimpleSlider />
            </div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 lg:-bottom-6 lg:-right-6 bg-white px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-full shadow font-medium text-gray-800 flex items-center gap-1 text-xs sm:text-sm md:text-base">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              EV Innovation Leader
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;