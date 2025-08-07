import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <main className="bg-gradient-to-b from-blue-50 via-white to-cyan-50">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={'../../about.png'}
              alt="Evyan About Banner"
              className="w-full h-full object-cover opacity-[0.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-cyan-50/80"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                About <span className="text-cyan-600">Evyan</span>
              </h1>
              <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100">
                  <h2 className="text-xl font-semibold text-blue-900 mb-4">Our Identity</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Navyabharat Evyan Motors Pvt Ltd (NEMPL) is pioneering sustainable last-mile mobility 
                    through high-performance electric vehicles and intelligent solutions. Since inception, 
                    our mission has been to create clean, connected, and accessible mobility for all.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our product lineup features utility-focused commercial vehicles engineered with 
                    emphasis on safety, range, and smart technology - embodying our commitment to 
                    100% MAKE IN INDIA.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-6 md:p-8 rounded-2xl shadow-xl text-white">
                  <h2 className="text-xl font-semibold mb-4">Reliability & Support</h2>
                  <p className="leading-relaxed">
                    We set industry standards with Best Quality CED Coating Paint, double-layered chassis, 
                    and comprehensive warranties:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <span className="text-cyan-200 mr-2">✓</span>
                      <span>Motor & Controller: 36 months warranty</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-200 mr-2">✓</span>
                      <span>Li-Ion Batteries: Industry-leading coverage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-200 mr-2">✓</span>
                      <span>Accessories: Premium protection</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Collaborating fervently with customers and stakeholders to deliver affordable, adaptable, 
                  and eco-friendly mobility solutions while prioritizing exponential growth to maximize 
                  stakeholder value.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <img 
                    src={'../../mission.png'} 
                    alt="Our Mission" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-cyan-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  To become the premier choice in the utility vehicle segment through affordable, 
                  versatile, and sustainable solutions with an uncompromising customer-first approach.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <img 
                    src={'../../vision.png'} 
                    alt="Our Vision" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Leadership Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Guiding Excellence</h2>
              <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our journey is powered by visionary leaders with proven expertise in sustainable technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-cyan-500"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Expertise</h3>
                <p className="text-gray-700">
                  Our management team brings international experience from leading technology and automotive 
                  organizations, ensuring world-class innovation.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Vision</h3>
                <p className="text-gray-700">
                  We're driven by an unwavering commitment to establish NEMPL as a global leader in the 
                  electric vehicle revolution.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;