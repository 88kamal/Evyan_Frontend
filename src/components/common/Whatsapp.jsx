'use client';
import { motion } from 'framer-motion'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

export default function Whatsapp() {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* create a whatsapp button with a quick short message */}
            <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.15, ease: 'easeInOut' }}
                viewport={{ once: true }}
                href="https://api.whatsapp.com/send?phone=+918292417430&text=Hello%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">
                <FaWhatsapp className="w-8 h-8" />
                {/* Add a tooltip to the button */}
                <span className="absolute bottom-16 right-4 bg-gray-800 text-white text-sm p-2 rounded shadow-lg hidden group-hover:block">
                    Chat with us on WhatsApp!
                </span>
            </motion.a>
        </div>
    )
}