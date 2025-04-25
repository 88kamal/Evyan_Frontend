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
            <p className="text-gray-900 text-base sm:text-lg leading-relaxed mb-6">
Navyabharat Evyan Motors Pvt Ltd (NEMPL) is into Business of Design, Development, Manufacturing, 
Assembling, Sales & Services of Battery Operated Electric Vehicles. NEMPL Products Include E-Rick
shaw,  E-Auto, E-Scooty, E-Cycles etc. Our USP is 100% Indian Product with Excellence in Quality, Relia
bility and Support After Sales. 
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
                To revolutionize everyday transportation with clean energy solutions that are accessible, affordable, and reliable for everyone.
              </p>
              <p className="text-blue-800 text-sm sm:text-base">
                We aim to eliminate dependency on fossil fuels in urban and rural transportation by enabling widespread adoption of electric vehicles. By collaborating with local communities and stakeholders, we empower drivers and businesses to transition toward sustainable alternatives that don’t compromise on performance or profitability.
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
                To become the most trusted and sustainable electric mobility brand, empowering communities and reshaping the future of transport across India.
              </p>
              <p className="text-blue-800 text-sm sm:text-base">
                We envision a cleaner, quieter, and more connected world where every commuter has access to affordable electric transport options. Our commitment extends beyond technology—we're building an ecosystem that supports green growth, creates employment, and promotes climate responsibility at scale.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;