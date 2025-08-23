import React from 'react';
import { ShieldCheck, Truck, Wrench, Zap, Battery, Leaf, DollarSign, Settings, Shield, Clock, TrendingUp, MapPin } from 'lucide-react';
import Layout from '../components/layout/Layout';

const services = [
  {
    title: 'Passenger E-Rickshaw',
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    description:
      'Comfortable, cost-effective, and eco-friendly rides for daily commuters in urban and semi-urban areas.',
  },
  {
    title: 'Cargo E-Rickshaw',
    icon: <Truck className="w-10 h-10 text-green-600" />,
    description:
      'Efficient electric transport solution for delivery and logistics businesses with optimized payload capacity.',
  },
  {
    title: 'Maintenance & Support',
    icon: <Wrench className="w-10 h-10 text-yellow-500" />,
    description:
      'Dedicated nationwide support and regular maintenance packages to keep your rickshaw running smoothly.',
  },
];

const l5Features = [
  {
    icon: <Leaf className="w-8 h-8 text-green-500" />,
    title: "Eco-Friendly",
    description: "Zero emissions for a cleaner environment"
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-500" />,
    title: "Cost-Efficient",
    description: "Low running costs and minimal maintenance"
  },
  {
    icon: <Battery className="w-8 h-8 text-purple-500" />,
    title: "Easy Charging",
    description: "Multiple charging options available"
  },
  {
    icon: <Shield className="w-8 h-8 text-red-500" />,
    title: "Enhanced Safety",
    description: "Higher stability and safety features"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-600" />,
    title: "Better Earnings",
    description: "Increased profitability for drivers"
  },
  {
    icon: <Settings className="w-8 h-8 text-gray-600" />,
    title: "Robust Design",
    description: "Durable construction for long-lasting use"
  },
  {
    icon: <Clock className="w-8 h-8 text-yellow-600" />,
    title: "Government Support",
    description: "Subsidies and easy financing options"
  },
  {
    icon: <MapPin className="w-8 h-8 text-blue-600" />,
    title: "Last-Mile Connectivity",
    description: "Perfect solution for urban transportation"
  }
];

const ServicePage = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-cyan-50 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-blue-700 text-lg max-w-3xl mx-auto">
            We offer a wide range of electric mobility solutions and services designed to meet the evolving needs of drivers, businesses, and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-t-4 border-blue-600 rounded-xl shadow-lg p-6 text-center transition hover:shadow-2xl hover:scale-[1.02] duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-blue-700 text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* L5 Electric Vehicles Section */}
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-shrink-0 bg-white p-6 rounded-2xl shadow-md">
              <Zap className="w-16 h-16 text-purple-600 mx-auto" />
              <h3 className="text-2xl font-bold text-purple-800 mt-4 text-center">L5 Electric Vehicles</h3>
            </div>
            
            <div className="flex-grow">
              <p className="text-blue-900 text-lg mb-6 leading-relaxed">
                L5 Electric Vehicles are the next level in green mobility, offering higher stability, safety, and load-carrying capacity. They are eco-friendly, cost-efficient, and powerful, making them ideal for both passenger and cargo applications. With zero emissions, low running costs, and minimal maintenance, L5 EVs provide better earnings for drivers while contributing to a cleaner environment. Backed by government subsidies, easy financing, and robust design, these vehicles combine durability with comfort. Their versatility, easy charging options, and advanced features make them the perfect solution for sustainable last-mile connectivity.
              </p>
              
             
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;