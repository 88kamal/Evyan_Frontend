

// ProductsPage.jsx
import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

// --- Reusable Icon Components ---

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


// --- Specification Modal Component ---
const ProductSpecModal = ({ product, onClose }) => {
    // Animation variants for Framer Motion
    const backdropVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };
    
    const modalVariants = {
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 25 } },
        hidden: { opacity: 0, y: 50, scale: 0.9 },
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose} // Close modal on backdrop click
        >
            <motion.div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-5 border-b border-gray-200 flex-shrink-0">
                    <h3 className="text-xl font-bold text-gray-800">{product.name} Specifications</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors">
                        <CloseIcon />
                    </button>
                </div>

                {/* Modal Body - Scrollable */}
                <div className="p-6 overflow-y-auto">
                    <ul className="space-y-3">
                        {Object.entries(product.specs).map(([key, value]) => (
                            <li key={key} className="flex justify-between items-center text-sm pb-3 border-b border-gray-100 last:border-b-0">
                                <span className="text-gray-600 font-medium">{key}</span>
                                <span className="text-gray-800 font-semibold text-right">{String(value)}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Modal Footer */}
                <div className="p-5 border-t border-gray-200 bg-gray-50 rounded-b-2xl flex-shrink-0">
                    <button
                        onClick={onClose}
                        className="w-full bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm"
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};


// --- Main Products Page Component ---

const ProductsPage = () => {
    const { type } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalProduct, setModalProduct] = useState(null); // State to manage which product is in the modal

    const allVehicles = useMemo(() => [
        // ... (vehicle data remains the same)
        { id: 1, name: "L5N - OPEN", type: "L5", category: "Utility Vehicle", image: "/high.png", color: "from-blue-500 to-cyan-500", gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)", specs: { "Motor Type": "BLDC", "Controller": "3-phase bridge with Hall-effect sensors", "Battery": "Lithium Ion 60V 200AH", "System Voltage": "64V", "Charger": "30A", "Charging Time": "4 hours", "Loading Capacity": "675 kg", "Max Speed": "43.8 km/h", "Range": "125 km per charge", "Brake System": "DRUM (Front/Rear)", "Front Suspension": "Helical Spring with dampener, hydraulic telescopic shock absorber", "Rear Suspension": "Rubber compression spring with dampener, hydraulic telescopic shock", "Climbing Capacity": "20%", "Tyre": "4*50*10", "Axle Length (Rear)": "1250 mm", "Wheel Base": "2115 mm", "Overall Dimensions": "3155 x 1445 x 1810 mm", "Load Body Dimensions": "1500 x 1370 x 625 mm", "Turning Radius": "2110 mm", "Vehicle Weight": "900 kg", "Parking Brake": "Mechanical Lever Type", "Seating Capacity": "1 Driver", "Additional Features": "Fire Extinguisher, Mobile Charger, First Aid Kit, Tool Kit, LED Lights, Wiper" }},
        { id: 2, name: "EVYAN GARBAGE", subname: "Semi-Hydraulic", type: "L3", category: "Waste Management", image: "/semi.png", color: "from-green-500 to-emerald-500", gradient: "linear-gradient(135deg, #10b981, #047857)", specs: { "Chassis": "Rectangular Box", "Body Type": "Double Binder CBC MG Garbage", "Body Dimensions": "1500 × 940 × 1050 mm", "Tipping Mechanism": "Semi-Hydraulic", "Paint": "PT LiquidED Coated", "Motor": "PMGM Indian make, Capacity up to 137 Kw", "Controller": "24 T PMGM Indian", "Battery": "135 Ah Eastman/Livguard", "Differential": "110 GB Indian", "Charger": "18 Ah Indian Make", "Operating Temp": "3.75°C to 40°C", "Safety Certification": "CEA TM/FF/TVS, BIS Certified", "Tyre": "4*50*10", "Shocker": "Hydraulic with Spring", "Rim": "4°C In", "Accessories": "Stepney Cover, Body Light, Floor Mat, Roof inside cover, Wiper, Chequered floor, Windscreen", "Loading Capacity": "600 kg (Rated load)" }},
        { id: 3, name: "EVYAN GARBAGE", subname: "Hydraulic", type: "L3", category: "Waste Management", image: "/hydr.png", color: "from-purple-500 to-violet-500", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", specs: { "Chassis": "Rectangular Box", "Body Type": "Double Binder CBC MG Garbage", "Body Dimensions": "1500 × 940 × 1050 mm", "Tipping Mechanism": "Hydraulic (70° angle)", "Paint": "PT LiquidED Coated", "Motor": "PMGM Indian make, Capacity up to 137 Kw", "Controller": "24 T PMGM Indian", "Battery": "135 Ah Eastman/Livguard", "Differential": "110 GB Indian", "Charger": "18 Ah Indian Make", "Operating Temp": "3.75°C to 40°C", "Safety Certification": "CEA TM/FF/TVS, BIS Certified", "Tyre": "4*50*10", "Shocker": "Hydraulic with Spring", "Rim": "4°C In", "Accessories": "Stepney Cover, Body Light, Floor Mat, Roof inside cover, Wiper, Chequered floor, Windscreen", "Loading Capacity": "600 kg (Rated load)" }}
    ], []);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setProducts(allVehicles.filter(v => v.type === type));
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, [type, allVehicles]);
    
    // Handlers for Modal
    const handleViewDetails = (product) => setModalProduct(product);
    const handleCloseModal = () => setModalProduct(null);

    const handleWhatsAppEnquiry = (productName) => {
        const message = `Hello, I'm interested in your ${productName} vehicle. Could you provide more information?`;
        window.open(`https://api.whatsapp.com/send?phone=+918292417430&text=${encodeURIComponent(message)}`, '_blank');
    };
    
    const ProductCard = ({ product, onViewDetails }) => {
        const topSpecsToShow = ['Loading Capacity', 'Range', 'Max Speed', 'Battery', 'Charging Time'];
        const getSummarySpecs = (specs) => {
            return topSpecsToShow.reduce((obj, key) => {
                if (specs[key]) obj[key] = specs[key];
                return obj;
            }, {});
        };

        return (
            <motion.div
                variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="rounded-2xl shadow-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col"
            >
                <div className="relative">
                    <div className="h-56 w-full flex items-center justify-center p-4" style={{ background: product.gradient }}>
                        <motion.img src={product.image} alt={product.name} className="w-full h-full object-contain" whileHover={{ scale: 1.05 }} />
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                    {product.subname && <p className="text-md text-gray-500 -mt-1">{product.subname}</p>}
                    <span className={`mt-2 inline-block bg-gradient-to-r ${product.color} text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide self-start`}>{product.category}</span>
                    <div className="mt-6 border-t border-gray-200 pt-4">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Specifications</h3>
                        <ul className="space-y-2 text-sm">
                            {Object.entries(getSummarySpecs(product.specs)).map(([key, value]) => (
                                <li key={key} className="flex justify-between"><span className="text-gray-600">{key}:</span><span className="text-gray-900 font-medium text-right">{value}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-auto pt-4">
                        <button onClick={() => onViewDetails(product)} className="text-blue-600 text-sm font-medium hover:underline text-center w-full mt-4">View Full Specifications</button>
                        <button onClick={() => handleWhatsAppEnquiry(product.name)} className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg"><WhatsAppIcon />Enquire on WhatsApp</button>
                    </div>
                </div>
            </motion.div>
        );
    };

    // --- Other Render Helper Components (PageHeader, LoadingSpinner, etc.) ---
    const PageHeader = () => ( <div className="text-center mb-12 md:mb-16"> <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} > {`${type} Vehicles`} </motion.h1> <motion.div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" initial={{ width: 0 }} animate={{ width: "6rem" }} transition={{ duration: 0.8, ease: "easeInOut" }} /> <motion.p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} > Explore our premium range of electric vehicles, engineered for performance, efficiency, and sustainability. </motion.p> </div> );
    const LoadingSpinner = () => ( <div className="flex justify-center items-center h-64"> <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div> </div> );
    const ComingSoonDisplay = () => ( <motion.div className="flex justify-center" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} > <div className="bg-white text-gray-800 p-8 sm:p-10 rounded-2xl shadow-2xl text-center max-w-lg w-full border border-gray-200"> <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"> <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> </div> <h2 className="text-3xl font-bold mb-3">Coming Soon!</h2> <p className="text-lg text-gray-600 mb-8">We are currently developing our new range of L2 vehicles. Stay tuned!</p> <button className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto" onClick={() => handleWhatsAppEnquiry("L2 Vehicle")} > <WhatsAppIcon /> Notify Me on WhatsApp </button> </div> </motion.div> );
    const NoProductsFound = () => ( <motion.div className="text-center py-20" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} > <div className="bg-yellow-100 text-yellow-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"> <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> </div> <h2 className="text-2xl font-semibold text-gray-700">No vehicles found.</h2> <p className="text-gray-500 mt-2">Please check back later or explore other categories.</p> </motion.div> );
    
    return (
        <Layout>
            <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {type === 'L2' && !isLoading ? <ComingSoonDisplay /> : <PageHeader />}
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        (type !== 'L2' && products.length > 0) ? (
                            <motion.div 
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } }}}
                                initial="hidden"
                                animate="visible"
                            >
                                {products.map(product => <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />)}
                            </motion.div>
                        ) : (type !== 'L2' && <NoProductsFound />)
                    )}
                </div>
            </div>
            
            {/* Render Modal with AnimatePresence for exit animations */}
            <AnimatePresence>
                {modalProduct && <ProductSpecModal product={modalProduct} onClose={handleCloseModal} />}
            </AnimatePresence>
        </Layout>
    );
};

export default ProductsPage;