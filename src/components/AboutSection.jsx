import React from 'react';
import { motion } from 'framer-motion';
import SimpleSlider from './BannerSlider';

const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f0fcff] via-[#f0f9ff] to-[#e6f7ff] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00a7da]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#ff6b6b]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#68ceec]/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="inline-block relative">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
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
            className="text-gray-700 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            At Evyan, we are revolutionizing urban transportation through innovative electric vehicles designed for India's unique needs. Our mission is to create sustainable mobility solutions that empower communities and protect our planet.
          </motion.p>
          
          <div className="space-y-6 pt-4">
            {[
              { icon: "⚡", text: "Backed by cutting-edge EV technology and eco-conscious engineering" },
              { icon: "🔧", text: "Comprehensive after-sales network with 250+ service centers" },
              { icon: "👥", text: "Trusted by 15,000+ drivers & fleet operators nationwide" },
              { icon: "🌱", text: "Reducing carbon emissions by 45,000+ tons annually" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <span className="text-2xl p-2 bg-white rounded-lg shadow-sm">{item.icon}</span>
                <span className="text-gray-800 text-lg flex-1">{item.text}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="pt-6 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button className="bg-[#00a7da] hover:bg-[#008ab9] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Explore Our Models
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-8 rounded-full border border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md">
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
          className="w-full flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-[#00a7da]/30"></div>
            <div className="overflow-hidden rounded-3xl border-8 border-white shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <SimpleSlider />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white px-6 py-3 rounded-full shadow-lg font-medium text-gray-800 flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              EV Innovation Leader
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;