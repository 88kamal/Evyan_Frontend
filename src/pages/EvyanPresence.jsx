// src/components/EvyanPresence.jsx
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const EvyanPresence = () => {
  const [activeCity, setActiveCity] = useState('Patna');
  
  // Evyan locations in Bihar
  const cities = [
    { 
      id: 1, 
      name: "Patna (HQ)", 
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115292.07749988706!2d85.0628549698254!3d25.5940947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1712589670588",
      description: "Corporate headquarters and main operations center",
      address: "123 Gandhi Maidan, Patna, Bihar 800001"
    },
    { 
      id: 2, 
      name: "Gaya", 
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115292.07749988706!2d85.0628549698254!3d25.5940947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sGaya%2C%20Bihar!5e0!3m2!1sen!2sin!4v1712589670588",
      description: "Regional service center for South Bihar",
      address: "456 Bodh Gaya Road, Gaya, Bihar 823001"
    },
    { 
      id: 3, 
      name: "Muzaffarpur", 
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115292.07749988706!2d85.0628549698254!3d25.5940947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sMuzaffarpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1712589670588",
      description: "Northern Bihar operations hub",
      address: "789 Kalyani Nagar, Muzaffarpur, Bihar 842001"
    },
    { 
      id: 4, 
      name: "Bhagalpur", 
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115292.07749988706!2d85.0628549698254!3d25.5940947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sBhagalpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1712589670588",
      description: "Eastern Bihar technology center",
      address: "101 Vikramshila Setu, Bhagalpur, Bihar 812001"
    }
  ];
  
  // Find the active city's embed URL
  const activeCityData = cities.find(city => city.name === activeCity);
  
  const stats = [
    { id: 1, value: "12+", label: "Cities Served", icon: "🏙️" },
    { id: 2, value: "50K+", label: "Clients Empowered", icon: "👥" },
    { id: 3, value: "8", label: "Regional Offices", icon: "📍" },
    { id: 4, value: "7+", label: "Years in Bihar", icon: "📅" }
  ];
  
  const testimonials = [
    { id: 1, text: "Evyan's solutions have transformed our operations across Bihar. Their regional approach understands our unique challenges and delivers tailored solutions.", author: "Rajesh Kumar", role: "Patna Business Association" },
    { id: 2, text: "The digital transformation brought by Evyan has helped our rural communities access services that were previously unavailable. A true partner in progress.", author: "Priya Sharma", role: "Community Development Officer, Gaya" }
  ];
  
  return (
    <Layout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          <span className="text-blue-600">Evyan</span> Bihar
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Building a Digital Future Across the Heart of India
        </p>
      </header>
      
      {/* Presence Section */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-10 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Presence in Bihar</h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Serving communities across the state with innovative solutions and dedicated support
          </p>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
          {/* Info Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500 inline-block">
              Serving Bihar with Excellence
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Evyan has established a strong presence across Bihar, bringing cutting-edge solutions to urban and rural communities alike. With our headquarters in Patna and regional offices in major cities, we're committed to empowering Bihar's growth through technology and innovation.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Cities */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Locations:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setActiveCity(city.name)}
                  className={`py-3 px-4 rounded-lg transition-all flex items-center justify-center ${
                    activeCity === city.name
                      ? 'bg-blue-600 text-white shadow-lg transform -translate-y-0.5'
                      : 'bg-gray-50 hover:bg-blue-50 text-gray-700'
                  }`}
                >
                  <span className="mr-2">📍</span>
                  {city.name}
                </button>
              ))}
            </div>
            
            {/* Active City Details */}
            {activeCityData && (
              <div className="bg-blue-50 rounded-xl p-5 mb-6">
                <h4 className="text-xl font-bold text-blue-700 mb-2">{activeCityData.name}</h4>
                <p className="text-gray-700 mb-2">{activeCityData.description}</p>
                <p className="text-sm text-gray-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {activeCityData.address}
                </p>
              </div>
            )}
          </div>
          
          {/* Map Container */}
          <div className="h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            {activeCityData ? (
              <iframe
                title={`Evyan ${activeCityData.name}`}
                src={activeCityData.embedUrl}
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                  <p className="text-gray-500">Select a location to view on map</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="bg-gray-50 px-6 md:px-8 py-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">What Our Bihar Partners Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-800 font-bold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="text-center text-gray-600 py-6 border-t border-gray-200">
        <p className="mb-2">© 2023 Evyan Technologies. All rights reserved. | Serving Bihar with pride since 2016</p>
        <p>Contact: bihar.support@evyan.in | +91 1234567890</p>
      </footer>
    </div>
    </Layout>
   
  );
};

export default EvyanPresence;