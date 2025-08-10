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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100">
                  <h2 className="text-xl font-semibold text-blue-900 mb-4">Our Identity</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Navyabharat Evyan Motors Pvt Ltd (NEMPL) is an initiative to make the world greener. 
                    At NEMPL, we accelerate the world's transition to sustainable last mile mobility by 
                    designing and manufacturing high-performance smart electric vehicles and intelligent 
                    mobility solutions.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Since our beginning, our mission has been to create clean, connected, and accessible 
                    mobility for everyone. Our lineup includes utility based commercial vehicles, mainly 
                    Three Wheeler low speed & high speed, engineered with a focus on safety, range, and 
                    smart technology with sole intention of 100% MAKE IN INDIA.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We are not only limited to Design, Development, Manufacturing, Sales & Services of 
                    Battery Operated Electric Vehicles - we sense innovation while keeping customer 
                    priority at the forefront.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-10"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-6 md:p-8 rounded-2xl shadow-xl text-white">
                  <h2 className="text-xl font-semibold mb-4">Reliability & Support</h2>
                  <p className="leading-relaxed mb-4">
                    Unlike prevailing products in the market, our vehicles feature:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-cyan-200 mr-2">•</span>
                      <span>Best Quality CED Coating Paint</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-200 mr-2">•</span>
                      <span>Double layered chassis for strength and durability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-200 mr-2">•</span>
                      <span>Extended warranty period</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-cyan-100">
                  <h2 className="text-xl font-semibold text-blue-900 mb-4">Comprehensive Warranty</h2>
                  <p className="text-gray-700 mb-4">
                    We provide industry-leading warranty coverage:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-cyan-600 font-bold mr-2">✓</span>
                      <span>Motor & Controller: 36 months warranty</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-600 font-bold mr-2">✓</span>
                      <span>Li-Ion Batteries: Premium coverage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-600 font-bold mr-2">✓</span>
                      <span>Accessories: Extended protection</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visionary Leadership</h2>
              <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Driving innovation with expertise and global perspective
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-cyan-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-cyan-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Expertise & Excellence</h3>
                </div>
                <p className="text-gray-700">
                  Our journey is guided by a team of visionary business leaders with extensive, proven 
                  credentials in the technology sector. Their expertise powers our relentless drive for 
                  excellence, ensuring we stay ahead in delivering advanced, reliable, and eco-friendly 
                  mobility to our customers.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Global Vision</h3>
                </div>
                <p className="text-gray-700">
                  At NEMPL, our journey towards sustainable mobility is steered by a robust management 
                  team with a far-reaching presence across the globe. Our leaders bring proven expertise 
                  in the technology business and share an unwavering vision: to make NEMPL a grand success 
                  and a recognized global leader in the electric vehicle industry.
                </p>
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
                  <h2 className="text-2xl font-bold text-gray-900">Our Commitment</h2>
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
                  <h2 className="text-2xl font-bold text-gray-900">Our Ambition</h2>
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

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
              <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Principles that drive our innovation and customer relationships
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sustainability First",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  content: "Commitment to environmental stewardship through clean mobility solutions"
                },
                {
                  title: "Indian Innovation",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  content: "100% MAKE IN INDIA initiative with indigenous R&D and manufacturing"
                },
                {
                  title: "Customer Centric",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                  content: "Putting customer needs at the forefront of product development and service"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-opacity-20 mr-3">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-700">{value.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;