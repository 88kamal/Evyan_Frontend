import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            About <span className="text-blue-600">Evyan</span>
          </h2>
          <p className="text-gray-700 text-lg">
            At Evyan, we’re on a mission to electrify urban mobility. Our focus lies in building reliable, sustainable, and affordable electric vehicles designed to reshape the future of transportation in India.
          </p>
          <p className="text-gray-700 text-md">
            With a range of electric auto-rickshaws tailored for both individuals and commercial fleets, we combine technology, design, and purpose to reduce carbon emissions and lower transportation costs for everyone.
          </p>
          <ul className="list-disc text-gray-800 pl-5 space-y-1">
            <li>Backed by innovation and eco-conscious engineering</li>
            <li>Strong after-sales service & support</li>
            <li>Trusted by 10,000+ drivers & business owners</li>
            <li>Dedicated to a greener tomorrow</li>
          </ul>
        </motion.div>

        {/* Right Image */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="w-full flex justify-center"
>
  <img
    src="../../img/5.png" // Replace with your actual image path
    alt="Electric Auto Evyan"
    className="max-w-md w-full object-contain rounded-lg shadow-lg"
  />
</motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
