import React from 'react';
import { Mail, PhoneCall, MapPin, Send } from 'lucide-react';
import Layout from '../components/layout/Layout';

const ContactPage = () => {
  return (
    <Layout>
         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Contact Us</h1>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            We're here to answer your questions and provide the support you need. Reach out to us anytime.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-600">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">Our Office</h3>
                  <p className="text-blue-700">
                    Fact. 1: Plot no. 137, UV Extension, Ecotech II, <br />
                    Greater Noida - 201310, UP, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <PhoneCall className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">Phone Numbers</h3>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919311859995" className="text-blue-700 hover:text-blue-900 transition">+91 9311859995</a>
                    <a href="tel:+919311859996" className="text-blue-700 hover:text-blue-900 transition">+91 9311859996</a>
                    <a href="tel:+919311859997" className="text-blue-700 hover:text-blue-900 transition">+91 9311859997</a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">Email Addresses</h3>
                  <div className="flex flex-col gap-1">
                    <a href="mailto:evyanscm@gmail.com" className="text-blue-700 hover:text-blue-900 transition">evyanscm@gmail.com</a>
                    <a href="mailto:bharatevyan@gmail.com" className="text-blue-700 hover:text-blue-900 transition">bharatevyan@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="mt-10 pt-8 border-t border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Business Hours</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-blue-700">
                  <p className="font-medium">Monday - Friday</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
                <div className="text-blue-700">
                  <p className="font-medium">Saturday</p>
                  <p>10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-cyan-500">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Send a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-1">Your Message</label>
                <textarea
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 px-6 rounded-xl text-lg font-medium transition-all shadow-md hover:shadow-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Presence Map Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Map Visualization */}
            <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-cyan-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Our Market Presence</h2>
              <p className="mb-8 text-blue-100 max-w-md">
                We have established a strong presence across multiple cities in Uttar Pradesh and Bihar, serving businesses with our solutions.
              </p>
              
              <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-sm">
                  {/* Simplified map visualization */}
                  <div className="relative h-64">
                  
                    
                   <img src="./map.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Locations List */}
            <div className="md:w-1/2 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                    Uttar Pradesh
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      Noida
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      Ghaziabad
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      Modi Nagar
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      Kanpur
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      Gorakhpur
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-cyan-600 rounded-full mr-2"></span>
                    Bihar
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Motihari
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Jamui
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Muzaffarpur
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Bhagalpur
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Bettiah
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-100">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Expanding Our Reach</h3>
                <p className="text-blue-700">
                  We're continuously expanding our services to new locations. Contact us to learn about our expansion plans and when we'll be in your city.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
 
  );
};

export default ContactPage;