import React, { useState } from 'react';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Layout from '../components/layout/Layout';

// Original product data
const allProducts = [
  {
    name: 'Evyan Passenger E-Rickshaw',
    image: '../../images/1.png',
    description: 'Designed for comfortable city commuting with high range and low maintenance.',
  },
  {
    name: 'Evyan Passenger E-Rickshaw',
    image: '../../images/2.png',
    description: 'Built for delivery and logistics, offering a high load capacity and electric efficiency.',
  },
  {
    name: 'Evyan School E-Rickshaw',
    image: '../../images/3.png',
    description: 'Safe and eco-friendly transportation option for school routes and institutions.',
  },
  {
    name: 'Evyan Premium Passenger Model',
    image: '../../images/4.png',
    description: 'Premium model with extended battery life and superior seating comfort for urban travel.',
  },
  {
    name: 'Evyan Smart School Van',
    image: '../../images/6.png',
    description: 'Smart vehicle with GPS and safety features for student transportation.',
  },
  {
    name: 'Evyan Metro Shuttle',
    image: '../../images/7.png',
    description: 'Last-mile electric shuttle for metro stations and high footfall areas.',
  },
  {
    name: 'Evyan Solar Hybrid Rickshaw',
    image: '../../images/8.png',
    description: 'Eco-friendly model with solar charging panel integration.',
  },
  {
    name: 'Evyan Tourist Ride Model',
    image: '../../img/11.png',
    description: 'Comfortable and stylish ride tailored for tourist zones and guided trips.',
  },
  {
    name: 'Evyan MetroFeeder XL',
    image: '../../img/14.png',
    description: 'Extra-large shuttle version designed to operate between metro and markets.',
  },
  {
    name: 'Evyan Ambulance E-Rickshaw',
    image: '../../img/16.png',
    description: 'Emergency-response rickshaw with stretcher space and medical compartment.',
  },
  {
    name: 'Evyan Battery Swap Variant',
    image: '../../img/18.png',
    description: 'Fast battery swapping model for high turnaround operations.',
  },
];

// Vehicle data for L3 and L5 categories
const vehicleData = {
  L3: {
    "EVYAN JANTA": [
      {
        "Model Name": "EVYAN JANTA",
        "Motor": "BLDC 1KW",
        "Controller": "24 T BLDC Indian",
        "Battery": "LOCAL",
        "Differential": "1:10 GR Indian",
        "Charger": "15 Ah Indian Make",
        "Shocker": "Hydraulic Shocker with Spring",
        "Rim": "4*12 In BIS Certified",
        "Accessories": "Powder coated paint, Stepney Cover, Body Light, led fog light, FM etc",
        "Seating Capacity": "Driver + 4 Passenger"
      }
    ],
    "EVYAN": [
      {
        "Model Name": "EVYAN (MS)",
        "Chassis": "Double Girder CRC SS",
        "Paint": "CED Coated",
        "Motor": "PMSM Indian make with Capacity upto 1.97 Kw",
        "Controller": "24 T PMSM Indian",
        "Battery": "140 Ah Eastman",
        "Differential": "1:10 GR Indian",
        "Charger": "18 Ah Indian Make",
        "Tyre": "3.75*12 in CEAT/RALCO",
        "Shocker": "Hydraulic Shocker with Spring",
        "Rim": "4*12 In BIS Certified",
        "Accessories": "Stepney Cover, Body Light, Floor Mat, Roof Carrier, Wiper, Windscreen, FM etc",
        "Seating Capacity": "Driver + 4 Passenger"
      },
      {
        "Model Name": "EVYAN (SS)",
        "Chassis": "Double Girder CRC",
        "Paint": "CED Coated",
        "Motor": "PMSM Indian make with Capacity upto 1.97 Kw",
        "Controller": "24 T PMSM Indian",
        "Battery": "140 Ah Eastman",
        "Differential": "1:10 GR Indian",
        "Charger": "18 Ah Indian Make",
        "Converter": "Super Quality",
        "Tyre": "3.75*12 in CEAT/RALCO",
        "Shocker": "Hydraulic Shocker with Spring",
        "Rim": "4*12 In BIS Certified",
        "Accessories": "Stepney Cover, Body Light, Floor Mat, Roof Carrier, Wiper, Windscreen, FM etc",
        "Seating Capacity": "Driver + 4 Passenger"
      },
      {
        "Model Name": "EVYAN LI (MS)",
        "Chassis": "Double Girder CRC",
        "Paint": "CED Coated",
        "Motor": "PMSM Indian make with Capacity upto 1.97 Kw",
        "Controller": "24 T PMSM Indian",
        "Battery": "51.2V 105AH  LITHIUM-ION",
        "Differential": "1:10 GR Indian",
        "Charger": "20 Ah Indian Make",
        "Converter": "Super Quality",
        "Tyre": "3.75*12 in CEAT/RALCO",
        "Shocker": "Hydraulic Shocker with Spring",
        "Rim": "4*12 In BIS Certified",
        "Accessories": "Stepney Cover, Body Light, Floor Mat, Roof Carrier, Roof inside cover, Wiper, Windscreen, FM etc",
        "Seating Capacity": "Driver + 4 Passenger"
      },
      {
        "Model Name": "EVYAN LI (SS)",
         "Paint": "CED Coated",
        "Motor": "PMSM Indian make with Capacity upto 1.97 Kw",
        "Controller": "24 T PMSM Indian",
        "Battery": "51.2V 105AH  LITHIUM-ION",
        "Differential": "1:10 GR Indian",
        "Charger": "20 Ah Indian Make",
        "Converter": "Super Quality",
        "Tyre": "3.75*12 in CEAT/RALCO",
        "Shocker": "Hydraulic Shocker with Spring",
        "Rim": "4*12 In BIS Certified",
        "Accessories": "Stepney Cover, Body Light, Floor Mat, Roof Carrier, Roof inside cover, Wiper, Windscreen, FM etc",
        "Seating Capacity": "Driver + 4 Passenger"
      }
    ],
    "EVYAN GOLD": [
      {
        "Model Name": "EVYAN GOLD (Auto Facia)",
        "Chassis": "Double Girder CRC MS",
        "Paint": "CED Coated",
        "Motor": "PMSM Indian make with Capacity upto 1.97 Kw",
        "Controller": "24 T PMSM Indian",
        "Battery": "140 Ah Eastman",
        "Differential": "1:10 GR Indian",
        "Charger": "18 Ah Indian Make",
        "Converter": "Super Quality",
        "Tyre": "3.75*12 in CEAT/RALCO",
        "Shocker": "Hydraulic Shocker with Spring",
        "Rim": "4*12 In BIS Certified",
        "Accessories": "Stepney Cover, Body Light, Floor Mat, Roof Carrier, Wiper, Windscreen, FM etc",
        "Seating Capacity": "Driver + 4 Passenger"
      },
      {
        "Model Name": "EVYAN GOLD LI (Auto Facia)",
        "Chassis": "Double Girder CRC MS",
        "Paint": "CED Coated",
        "Motor": "PMSM Indian make with Capacity upto 1.97 Kw",
        "Controller": "24 T PMSM Indian",
        "Battery": "51.2V 105AH LITHIUM-ION",
        "Differential": "1:10 GR Indian",
        "Charger": "20 Ah Indian Make",
        "Converter": "Super Quality",
        "Tyre": "3.75*12 in CEAT/RALCO",
        "Shocker": "Hydraulic Shocker with Spring",
        "Rim": "4*12 In BIS Certified",
        "Accessories": "Stepney Cover, Body Light, Floor Mat, Roof Carrier, Wiper, Windscreen, FM etc",
        "Seating Capacity": "Driver + 4 Passenger"
      },
       {
        "Model Name": "EVYAN GOLD li Premium",
        "Chassis": "Double Girder CRC MS",
        "Paint": "PT Liquid/ED Coated",
        "Motor": "PMSM Indian make with Capacity upto 1.97 Kw",
        "Controller": "24 T PMSM Indian",
        "Battery": "135 Ah Eastman/Livguard",
        "Differential": "1:10 GR Indian",
        "Charger": "18 Ah Indian Make",
        "Converter": "Super Quality",
        "Tyre": "3.75*12 in CEAT/MRF/TVS",
        "Shocker": "Hydraulic Shocker with Spring",
        "Rim": "4*12 In BIS Certified",
        "Accessories": "Stepney Cover, Body Light, Floor Mat, Roof Carrier, Roof inside cover, Wiper, Chequered floor, Windscreen, FM etc",
        "Seating Capacity": "Driver + 4 Passenger"
      }
    ],
    "EVYAN LOADKRO": [
      {
        "Model Name": "EVYAN LOADKRO (OPEN)",
        "Chassis": "Double Girder CRC MS Loader",
        "Paint": "CED Coated",
        "Motor": "PMSM Indian make with Capacity upto 1.97 Kw",
        "Controller": "24 T PMSM Indian",
        "Battery": "140 Ah Eastman",
        "Differential": "1:10 GR Indian",
        "Charger": "20 Ah Indian Make",
        "Converter": "Super Quality",
        "Tyre": "3.75*12 in CEAT/RALCO",
        "Shocker": "Hydraulic Shocker with Spring",
        "Rim": "4*12 In BIS Certified",
        "Accessories": "Stepney Cover, Led lights, Floor Mat, Wiper, FM etc",
        "Loading Capacity": "600 Kg (Rated load)",
        "Dala Size": "5\" x 3.5\" / 6\" X 4\""
      },
      {
        "Model Name": "EVYAN LOADKRO (CLOSED)",
        "Chassis": "Double Girder CRC MS Loader 4*6 ft",
        "Paint": "CED Coated",
        "Motor": "PMSM Indian make with Capacity upto 1.97 Kw",
        "Controller": "24 T PMSM Indian",
        "Battery": "140 Ah Eastman",
        "Differential": "1:10 GR Indian",
        "Charger": "18 Ah Indian Make",
        "Converter": "Super Quality",
        "Tyre": "3.75*12 in CEAT/RALCO",
        "Shocker": "Hydraulic Shocker with Spring",
        "Rim": "4*12 In BIS Certified",
        "Accessories": "Stepney Cover, Led lights, Floor Mat, Wiper, FM etc",
        "Loading Capacity": "600 Kg (Rated load)"
      },
      {
        "Model Name": "EVYAN LOADKRO LI",
        "Chassis": "Double Girder CRC MS Loader",
        "Paint": "CED Coated",
        "Motor": "PMSM Indian make with Capacity upto 1.97 Kw",
        "Controller": "24 T PMSM Indian",
        "Battery": "51.2V 105AH LITHIUM-ION",
        "Differential": "1:10 GR Indian",
        "Charger": "20 Ah Indian Make",
        "Converter": "Super Quality",
        "Tyre": "3.75*12 in CEAT/RALCO",
        "Shocker": "Hydraulic Shocker with Spring",
        "Rim": "4*12 In BIS Certified",
        "Accessories": "Stepney Cover, Led lights, Floor Mat, Wiper, FM etc",
        "Loading Capacity": "600 Kg (Rated load)",
        "Dala Size": "5\" x 3.5\""
      }
    ],
    "EVYAN GARBAGE": [
      {
        "Model Name": "EVYAN GARBAGE (Semi-Hydraulic)",
        "Chassis": "Double Girder CRC MS Garbage (2 bins)",
        "Box Dimension": "1500mm*940mm*1050mm (l*w*h)",
        "Tipping Method": "Semi-Hydraulic",
        "Paint": "CED Coated",
        "Motor": "PMSM Indian make with Capacity upto 1.97 Kw",
        "Controller": "24 T PMSM Indian",
        "Battery": "140 Ah Eastman",
        "Differential": "1:10 GR Indian",
        "Charger": "18 Ah Indian Make",
        "Converter": "Super Quality",
        "Tyre": "3.75*12 in CEAT/RALCO",
        "Shocker": "Hydraulic Shocker with Spring",
        "Rim": "4*12 In BIS Certified",
        "Accessories": "Stepney Cover, Led Lights, Floor Mat, Wiper, FM etc",
        "Loading Capacity": "600 Kg (Rated load) *"
      },
      {
        "Model Name": "EVYAN GARBAGE (Hydraulic)",
        "Chassis": "Double Girder CRC MS Garbage (2 bins)",
        "Box Dimension": "1500mm*940mm*1050mm (l*w*h)",
        "Tipping Method": "Hydraulic",
        "Tipping Abgle": "70 degree approx*",
        "Paint": "CED Coated",
        "Motor": "PMSM Indian make with Capacity upto 1.97 Kw",
        "Controller": "24 T PMSM Indian",
        "Battery": "140 Ah Eastman",
        "Differential": "1:10 GR Indian",
        "Charger": "18 Ah Indian Make",
        "Converter": "Super Quality",
        "Tyre": "3.75*12 in CEAT/RALCO",
        "Shocker": "Hydraulic Shocker with Spring",
        "Rim": "4*12 In BIS Certified",
        "Accessories": "Stepney Cover, Led Lights, Floor Mat, Wiper, FM etc",
        "Loading Capacity": "600 Kg (Rated load) *"
      }
    ]
  },
  L5: {
    "L5M": [
      {
        "Model Name": "L5M",
        "Motor Type": "BLDC 64V",
        "Controller type": "A 3-phase bridge configuration and intergrated solutions with bnuilt-in decoding logic for Hall-effect sensors and a PWM current controller to automously drive a AC motor or motion control system host",
        "Charger": "30 A",
        "Battery type": "Lithium Ion 60V 200 AH",
        "System voltage": "64 V",
        "Charging time": "4 hours",
        "Max. speed": "43.8 kmph",
        "Distance per charge": "125 km",
        "Brake (Front/Rear)": "DRUM",
        "Suspension (Front)": "Helical Spring with dampener with hydraulic telescopic shock absorber",
        "Suspension (Rear)": "Rubber compression spring with dampener witgh hydrauliuc telescopic shock absorber",
        "Climbing capacity": "0.2 Percentage",
        "Tyre": "4*50*10",
        "Axle length (rear)": "1250 mm",
        "Wheel base": "1955 mm",
        "Overall length": "2945 mm",
        "Overall width": "1525 mm",
        "Overall height": "1800 mm",
        "Turning radius": "2110 mm",
        "Vehicle gross weight": "850 kg",
        "Convertor": "DC",
        "Parking brake": "Mechanical Lever Type",
        "Seating capacity": "1 Driver, 3 Passenger",
        "Other features": "Fire Extinguisher, Mobile Charger, First Aid Kit, Tool Kit, Led Lights, Wiper, etc",
        "Chassis type": "RECTANGULAR"
      }
    ],
    "L5N - CLOSED": [
      {
        "Model Name": "L5N - CLOSED",
        "Motor Type": "BLDC 64V",
        "Controller type": "A 3-phase bridge configuration and intergrated solutions with bnuilt-in decoding logic for Hall-effect sensors and a PWM current controller to automously drive a AC motor or motion control system host",
        "Charger": "30 A",
        "Battery type": "Lithium Ion 60V 200 AH",
        "System voltage": "64 V",
        "Charging time": "4 hours",
        "Loading capacity": "675 kg",
        "Max. speed": "43.8 kmph",
        "Distance per charge": "125 km",
        "Brake (Front/Rear)": "DRUM",
        "Suspension (Front)": "Helical Spring with dampener with hydraulic telescopic shock absorber",
        "Suspension (Rear)": "Rubber compression spring with dampener witgh hydrauliuc telescopic shock absorber",
        "Climbing capacity": "0.2 Percentage",
        "Tyre": "4*50*10",
        "Axle length (rear)": "1250 mm",
        "Wheel base": "2115 mm",
        "Overall length": "3155 mm",
        "Overall width": "1445 mm",
        "Overall height": "1810 mm",
        "Load body length": "1500 mm",
        "Load body width": "1370 mm",
        "Load body height": "1220 mm",
        "Turning radius": "2110 mm",
        "Vehicle gross weight": "930 kg",
        "Convertor": "DC",
        "Parking brake": "Mechanical Lever Type",
        "Seating capacity": "1 DRIVER",
        "Other features": "Fire Extinguisher, Mobile Charger, First Aid Kit, Tool Kit, Led Lights, Wiper, etc",
        "Chassis type": "RECTANGULAR"
      }
    ],
    "L5N - OPEN": [
      {
        "Model Name": "L5N - OPEN",
        "Motor Type": "BLDC 64V",
        "Controller type": "A 3-phase bridge configuration and intergrated solutions with bnuilt-in decoding logic for Hall-effect sensors and a PWM current controller to automously drive a AC motor or motion control system host",
        "Charger": "30 A",
        "Battery type": "Lithium Ion 60V 200 AH",
        "System voltage": "64 V",
        "Charging time": "4 hours",
        "Loading capacity": "675 kg",
        "Max. speed": "43.8 kmph",
        "Distance per charge": "125 km",
        "Brake (Front/Rear)": "DRUM",
        "Suspension (Front)": "Helical Spring with dampener with hydraulic telescopic shock absorber",
        "Suspension (Rear)": "Rubber compression spring with dampener witgh hydrauliuc telescopic shock absorber",
        "Climbing capacity": "0.2 Percentage",
        "Tyre": "4*50*10",
        "Axle length (rear)": "1250 mm",
        "Wheel base": "2115 mm",
        "Overall length": "3155 mm",
        "Overall width": "1445 mm",
        "Overall height": "1810 mm",
        "Load body length": "1500 mm",
        "Load body width": "1370 mm",
        "Load body height": "625 mm",
        "Turning radius": "2110 mm",
        "Vehicle gross weight": "900 kg",
        "Convertor": "DC",
        "Parking brake": "Mechanical Lever Type",
        "Seating capacity": "1 DRIVER",
        "Other features": "Fire Extinguisher, Mobile Charger, First Aid Kit, Tool Kit, Led Lights, Wiper, etc",
        "Chassis type": "RECTANGULAR"
      }
    ]
  }
};

// Map model types to images
const modelImages = {
  // L3 Models
  "EVYAN (MS)": "/evyan-normal.png",
  "EVYAN (SS)": "/evyan-ss-normal.png",
  "EVYAN GOLD (Auto Facia)": "/gold-normal.png",
  "EVYAN GOLD LI (Auto Facia)": "/gold-alloy.png",
  "EVYAN GOLD li Premium": "/goldlii.png",
  "EVYAN LOADKRO (OPEN)": "/loadkro-open.png",
  "EVYAN LOADKRO (CLOSED)": "/loadkro-closed.png",
  "EVYAN LOADKRO LI": "/loadkro-li.png",
  "EVYAN GARBAGE (Semi-Hydraulic)": "/garbage-semi.png",
  "EVYAN GARBAGE (Hydraulic)": "/garbage-hydraulic.png",
  "EVYAN JANTA": "/janta.png",
  "EVYAN LI (MS)": "/evyan-alloy.png",
  "EVYAN LI (SS)": "/evyan-ss-alloy.png",

  // L5 Models
  "L5M": "/l5m.png",
  "L5N - CLOSED": "/l5n-closed.png",
  "L5N - OPEN": "/l5n-open.png"
};

// Function to convert vehicle data to product format
const convertVehicleDataToProducts = () => {
  const products = [];
  
  // Process L3 vehicles
  for (const [category, models] of Object.entries(vehicleData.L3)) {
    for (const model of models) {
      products.push({
        name: model["Model Name"],
        image: modelImages[model["Model Name"]] || '../../images/default.png',
        description: `${category} model with ${model["Seating Capacity"] || model["Loading Capacity"] || "specialized features"}`,
        category: "L3",
        specifications: model
      });
    }
  }
  
  // Process L5 vehicles
  for (const [category, models] of Object.entries(vehicleData.L5)) {
    for (const model of models) {
      products.push({
        name: model["Model Name"],
        image: modelImages[model["Model Name"]] || '../../images/default.png',
        description: `${category} model with ${model["Seating capacity"] || model["Loading capacity"] || "advanced features"}`,
        category: "L5",
        specifications: model
      });
    }
  }
  
  return products;
};

// Combine all products
const allVehicleProducts = [...allProducts, ...convertVehicleDataToProducts()];

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', 'L3', 'L5', ...new Set(allProducts.map(product => product.category))].filter(Boolean);
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' 
    ? allVehicleProducts 
    : allVehicleProducts.filter(product => product.category === selectedCategory);

  return (
    <Layout>
      <section className="bg-white py-5 px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">All Evyan Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Browse our complete range of electric vehicles crafted for every purpose.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mt-8 gap-3">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "filled" : "outlined"}
                color="blue"
                className={`rounded-full px-4 py-2 m-1 ${selectedCategory === category ? 'bg-blue-600' : 'border-blue-600 text-blue-600'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="shadow-md hover:shadow-2xl border border-gray-200 rounded-xl overflow-hidden flex flex-col justify-between h-full">
                <div className="bg-white aspect-w-16 aspect-h-9 flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-contain"
                    onError={(e) => {
                      e.target.src = '../../images/default.png';
                    }}
                  />
                </div>
                <CardBody className="px-6 py-4 text-center">
                  <Typography variant="h5" className="text-blue-gray-900 font-semibold text-xl mb-2">
                    {product.name}
                  </Typography>
                  <Typography className="text-gray-700 text-sm mb-4">{product.description}</Typography>
                  
                  <div className="flex flex-col gap-2">
                    <a href="tel:+918888888888">
                      <Button fullWidth className="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold">
                        Book Now
                      </Button>
                    </a>

                    <a href="../images/Brochure.pdf" target="_blank" rel="noopener noreferrer">
                      <Button fullWidth className="bg-red-600 hover:bg-red-700 text-white text-base font-semibold">
                        Download Brochure
                      </Button>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default AllProducts;