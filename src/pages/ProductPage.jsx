// ProductsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

const ProductsPage = () => {
    const { type } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // All products
    const allVehicles = [
        {
            id: 1,
            name: "L5N - OPEN",
            type: "L5",
            category: "Utility Vehicle",
            image: "/high.png",
            specs: {
                battery: "Lithium Ion 60V 200AH",
                range: "125 km per charge",
                speed: "43.8 km/h",
                capacity: "675 kg loading capacity",
                charging: "4 hours charging time"
            },
            color: "from-blue-500 to-cyan-500",
            gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)"
        },
        {
            id: 2,
            name: "EVYAN GARBAGE",
            subname: "Semi-Hydraulic",
            type: "L3",
            category: "Waste Management",
            image: "/semi.png",
            specs: {
                battery: "135 Ah Eastman/Livguard",
                capacity: "600 kg rated load",
                dimension: "1500×940×1050 mm",
                tipping: "Semi-Hydraulic method"
            },
            color: "from-green-500 to-emerald-500",
            gradient: "linear-gradient(135deg, #10b981, #047857)"
        },
        {
            id: 3,
            name: "EVYAN GARBAGE",
            subname: "Hydraulic",
            type: "L3",
            category: "Waste Management",
            image: "/hydr.png",
            specs: {
                battery: "135 Ah Eastman/Livguard",
                capacity: "600 kg rated load",
                dimension: "1500×940×1050 mm",
                tipping: "Hydraulic method, 70° angle"
            },
            color: "from-purple-500 to-violet-500",
            gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)"
        }
    ];

    useEffect(() => {
        setIsLoading(true);
        // Simulate API loading
        setTimeout(() => {
            if (type === 'L5') {
                setProducts(allVehicles.filter(v => v.type === 'L5'));
            } else if (type === 'L2') {
                setProducts([]);
            } else {
                setProducts(allVehicles.filter(v => v.type === type));
            }
            setIsLoading(false);
        }, 800);
    }, [type]);

    const handleWhatsAppEnquiry = (productName) => {
        const message = `Hello, I am interested in your ${productName} vehicle. Could you please provide more information?`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://api.whatsapp.com/send?phone=+918292417430&text=${encodedMessage}`, '_blank');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4 }
        }
    };

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.h1 
                            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {type === 'L2' ? 'Coming Soon' : `${type} Vehicles`}
                        </motion.h1>
                        <motion.div 
                            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "6rem" }}
                            transition={{ duration: 0.8 }}
                        />
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Discover our premium range of electric vehicles designed for efficiency and sustainability.
                        </p>
                    </div>

                    {isLoading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                                <p className="text-gray-600">Loading vehicles...</p>
                            </div>
                        </div>
                    ) : type === 'L2' ? (
                        <motion.div 
                            className="flex justify-center"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-10 rounded-2xl shadow-2xl text-center max-w-md w-full transform transition-transform duration-300 hover:scale-[1.02]">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold mb-3">Coming Soon!</h2>
                                <p className="text-xl mb-6">We're working hard to bring L2 vehicles to you.</p>
                                <div className="animate-pulse">
                                    <div className="h-3 bg-white/30 rounded-full w-48 mx-auto mb-2"></div>
                                    <div className="h-3 bg-white/30 rounded-full w-40 mx-auto"></div>
                                </div>
                                <button 
                                    className="mt-8 bg-white text-purple-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center mx-auto"
                                    onClick={() => handleWhatsAppEnquiry("L2 Vehicle")}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Notify Me
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {products.map(product => (
                                <motion.div
                                    key={product.id}
                                    variants={cardVariants}
                                    className="rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2"
                                >
                                    <div className="relative">
                                        <div 
                                            className="h-48 bg-gray-200 border-2 border-dashed rounded-t-xl w-full flex items-center justify-center text-gray-500"
                                            style={{ background: product.gradient }}
                                        >
                                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                                        </div>
                                        <div className="absolute top-4 right-4 bg-white/90 text-gray-800 font-bold py-1 px-3 rounded-full text-sm">
                                            {product.type}
                                        </div>
                                    </div>
                                    <div className="bg-white p-6">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                                                {product.subname && (
                                                    <p className="text-sm text-gray-600 mt-1">{product.subname}</p>
                                                )}
                                                <div className="mt-2">
                                                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                                        {product.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-100 p-2 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-6 border-t border-gray-100 pt-4">
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Specifications</h3>
                                            <ul className="space-y-2">
                                                {Object.entries(product.specs).map(([key, value], idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-gray-600 w-32 flex-shrink-0">{key.replace(/_/g, ' ')}:</span>
                                                        <span className="text-gray-800 font-medium">{value}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <button
                                            onClick={() => handleWhatsAppEnquiry(product.name)}
                                            className="mt-8 w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            Enquire on WhatsApp
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                    
                    {products.length > 0 && (
                        <div className="mt-16 text-center">
                            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-4 rounded-full border border-blue-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                <p className="text-blue-600">
                                    Have questions? <button 
                                        onClick={() => handleWhatsAppEnquiry("General Enquiry")}
                                        className="font-semibold hover:underline"
                                    >
                                        Chat with us on WhatsApp
                                    </button>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default ProductsPage;