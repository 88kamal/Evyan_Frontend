import React from 'react';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Layout from '../components/layout/Layout';

const allProducts = [
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
    {
        name: 'Evyan Premium Passenger Model',
        image: '../../img/4.png',
        description: 'Premium model with extended battery life and superior seating comfort for urban travel.',
    },
    {
        name: 'Evyan Heavy-Duty Cargo Carrier',
        image: '../../img/5.png',
        description: 'Engineered for rugged cargo operations with reinforced chassis and extended load capacity.',
    },
    {
        name: 'Evyan Smart School Van',
        image: '../../img/6.png',
        description: 'Smart vehicle with GPS and safety features for student transportation.',
    },
    {
        name: 'Evyan Metro Shuttle',
        image: '../../img/7.png',
        description: 'Last-mile electric shuttle for metro stations and high footfall areas.',
    },
    {
        name: 'Evyan Solar Hybrid Rickshaw',
        image: '../../img/8.png',
        description: 'Eco-friendly model with solar charging panel integration.',
    },
    {
        name: 'Evyan Cold Storage Carrier',
        image: '../../img/9.png',
        description: 'Special cargo rickshaw designed to transport temperature-sensitive goods.',
    },
    {
        name: 'Evyan Mini Delivery EV',
        image: '../../img/10.png',
        description: 'Compact cargo e-rickshaw ideal for hyperlocal deliveries in tight spaces.',
    },
    {
        name: 'Evyan Tourist Ride Model',
        image: '../../img/11.png',
        description: 'Comfortable and stylish ride tailored for tourist zones and guided trips.',
    },
    {
        name: 'Evyan Smart City Passenger',
        image: '../../img/12.png',
        description: 'Connected model with IoT integration for smart city infrastructure.',
    },
    {
        name: 'Evyan Water Bottle Carrier',
        image: '../../img/13.png',
        description: 'Optimized cargo solution for 20L water bottle transport businesses.',
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
        name: 'Evyan Waste Collection Rickshaw',
        image: '../../img/17.png',
        description: 'Designed for municipal use — ideal for door-to-door waste collection.',
    },
    {
        name: 'Evyan Battery Swap Variant',
        image: '../../img/18.png',
        description: 'Fast battery swapping model for high turnaround operations.',
    },
    {
        name: 'Evyan Compact EcoRide',
        image: '../../img/19.png',
        description: 'Entry-level EV with affordable pricing for new fleet owners.',
    },
];


const AllProducts = () => {
    return (
        <Layout>
            <section className="bg-white py-5 px-6 md:px-12 lg:px-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">All Evyan Rickshaws</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                        Browse our complete range of electric vehicles crafted for every purpose.
                    </p>
                </div>

                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {allProducts.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card className="shadow-md hover:shadow-2xl border border-gray-200 rounded-xl overflow-hidden flex flex-col justify-between h-full">
                                <div className="bg-white aspect-w-16 aspect-h-9 flex items-center justify-center">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                                </div>
                                <CardBody className="px-6 py-4 text-center">
                                    <Typography variant="h5" className="text-blue-gray-900 font-semibold text-xl mb-2">
                                        {product.name}
                                    </Typography>
                                    <Typography className="text-gray-700 text-sm mb-4">{product.description}</Typography>
                                    <a href="tel:+918888888888">
                                        <Button fullWidth className="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold">
                                            Book Now
                                        </Button>
                                    </a>
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
