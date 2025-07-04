import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <main className="bg-gradient-to-b from-blue-50 via-white to-cyan-50 min-h-screen">
        {/* Hero Title with Image */}
        <section className="relative px-4 sm:px-6 py-20 md:px-10 lg:px-24 text-center">
          <img
            src={'../../about.png'}
            alt="Evyan About Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-5xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-6">
              About <span className="text-cyan-600">Evyan</span>
            </h1>
            <p className="text-gray-900 text-base sm:text-lg leading-relaxed mb-6 text-justify">
            Navyabharat Evyan Motors Pvt Ltd (NEMPL) is into Business of Design, Development, Manufacturing, 
Assembling, Sales & Services of Battery Operated Electric Vehicles. NEMPL Products Include E-Rick
shaw,  E-Auto, E-Scooty, E-Cycles etc. Our USP is 100% Indian Product with Excellence in Quality, Relia
bility and Support After Sales. 
All our Models having Best Quality Paint CED Coating/ PT Liquid Paint with upto 1 Year Warranty and 
Double Support CR Chassis with upto 3 Year Warranty. Beyond that we also Provide Warranty for Motor 
and Controller, Battery, and other Accessories for upto 15 Months.
            </p>
            <p className="text-gray-900 text-base sm:text-lg leading-relaxed">
            All our Models having Best Quality Paint CED Coating/ PT Liquid Paint with upto 1 Year Warranty and 
Double Support CR Chassis with upto 3 Year Warranty. Beyond that we also Provide Warranty for Motor 
and Controller, Battery, and other Accessories for upto 15 Months.
            </p>
          </motion.div>
        </section>

        {/* Our Mission Section with Image */}
        <section className="bg-cyan-100 py-16 px-4 sm:px-6 md:px-10 lg:px-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Mission</h2>
              <p className="text-blue-800 text-base sm:text-lg mb-4">
              Collaborating fervently with our valued customers and stakeholders to offer comprehensive solutions 
for affordable, adaptable, and eco-friendly products while prioritizing the exponential growth of our 
organization to maximize stakeholder value.
              </p>

            </motion.div>
            <motion.img
              src={'../../mission.png'}
              alt="Our Mission"
              className="rounded-lg shadow-lg w-full h-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            />
          </div>
        </section>

        {/* Vision Section with Image */}
        <section className="bg-gradient-to-br from-cyan-100 to-blue-50 py-16 px-4 sm:px-6 md:px-10 lg:px-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.img
              src={'../../vision.png'}
              alt="Our Vision"
              className="rounded-lg shadow-lg w-full h-auto order-last lg:order-first"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Vision</h2>
              <p className="text-blue-800 text-base sm:text-lg mb-4">
              By offering affordable, versatile, and sustainable solutions with a dedicated mindset of customer-first 
              approach, we endeavor to establish ourselves as the premier choice in the utility vehicle segment.
                            </p>
             
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;