import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';

const ElectricVehicleShowcase = () => {
  const vehicles = [
    {
      id: 1,
      name: "L5N - OPEN",
      category: "Utility Vehicle",
      image: "/high.png",
      specs: {
        battery: "Lithium Ion 60V 200AH",
        range: "125 km per charge",
        speed: "43.8 km/h",
        capacity: "675 kg loading capacity",
        charging: "4 hours charging time"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "EVYAN GARBAGE",
      subname: "Semi-Hydraulic",
      category: "Waste Management",
      image: "/semi.png",
      specs: {
        battery: "135 Ah Eastman/Livguard",
        capacity: "600 kg rated load",
        dimension: "1500×940×1050 mm",
        tipping: "Semi-Hydraulic method"
      },
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      name: "EVYAN GARBAGE",
      subname: "Hydraulic",
      category: "Waste Management",
      image: "/hydr.png",
      specs: {
        battery: "135 Ah Eastman/Livguard",
        capacity: "600 kg rated load",
        dimension: "1500×940×1050 mm",
        tipping: "Hydraulic method, 70° angle"
      },
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f0f9ff] to-[#e0f2fe] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              ELECTRIC VEHICLE SHOWCASE
            </Typography>
          </div>
          <Typography variant="lead" className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-3">
            Discover our cutting-edge electric vehicles designed for efficiency and sustainability
          </Typography>
          
          <div className="mt-10 flex justify-center space-x-3">
            {[0, 1, 2].map((item) => (
              <motion.div
                key={item}
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: item * 0.3
                }}
                className="w-3 h-3 rounded-full bg-cyan-500"
              />
            ))}
          </div>
        </motion.div>
        
        {/* Enhanced Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full overflow-hidden shadow-2xl border border-white/50 rounded-xl bg-white/80 backdrop-blur-sm">
                {/* Card Header with Image */}
                <div className={`relative h-52 md:h-60 overflow-hidden bg-gradient-to-br ${vehicle.color}`}>
                  <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-bold z-10 shadow-md">
                    {vehicle.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <motion.img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-contain p-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                
                {/* Card Body */}
                <CardBody className="p-6">
                  <div className="mb-4">
                    <Typography variant="h3" className="text-xl md:text-2xl font-bold text-gray-900">
                      {vehicle.name}
                    </Typography>
                    {vehicle.subname && (
                      <Typography variant="h5" className="text-md text-cyan-600 font-medium">
                        {vehicle.subname}
                      </Typography>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    {Object.entries(vehicle.specs).map(([key, value]) => (
                      <div key={key} className="flex items-start">
                        <div className="mr-3 mt-1.5">
                          <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                        </div>
                        <Typography className="text-gray-700">
                          <span className="font-semibold text-gray-900">{key}:</span> {value}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </CardBody>
                
                
              </Card>
            </motion.div>
          ))}
        </div>
        
    
      </div>
    </div>
  );
};

export default ElectricVehicleShowcase;