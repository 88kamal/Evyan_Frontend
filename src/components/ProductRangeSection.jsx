import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Evyan Passenger E-Rickshaw',
    image: '../../img/1.png',
    description: 'Designed for comfortable city commuting with high range and low maintenance.',
  },
  {
    name: 'Evyan Cargo E-Rickshaw',
    image: '../../img/2.png',
    description: 'Built for delivery and logistics, offering a high load capacity and electric efficiency.',
  },
  {
    name: 'Evyan School E-Rickshaw',
    image: '../../img/3.png',
    description: 'Safe and eco-friendly transportation option for school routes and institutions.',
  },
];

const ProductRangeSection = () => {
  return (
    <section className="bg-[#f8f9fa] py-20 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore Evyan’s lineup of electric vehicles tailored for diverse needs—from personal commutes to cargo and institutional solutions.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col justify-between h-full border border-gray-200 rounded-xl overflow-hidden">
              <div>
                {/* Product Image */}
                <div className="aspect-w-16 aspect-h-9 bg-white flex items-center justify-center ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain "
                  />
                </div>

                {/* Product Info */}
                <CardBody className="text-center px-6 py-4">
                  <Typography variant="h5" className="text-blue-gray-900 font-semibold text-xl mb-2">
                    {product.name}
                  </Typography>
                  <Typography className="text-gray-700 text-sm">
                    {product.description}
                  </Typography>
                </CardBody>
              </div>

              {/* Book Now Button */}
              <div className="px-6 pb-6">
                <a href="tel:+918888888888">
                  <Button fullWidth className="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold">
                    Book Now
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="mt-12 text-center"
>
  <Link to="/all-products">
    <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-2 text-lg font-medium rounded-md">
      View More Products
    </Button>
  </Link>
</motion.div>
    </section>
  );
};

export default ProductRangeSection;
