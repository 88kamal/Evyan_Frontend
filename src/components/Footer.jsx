import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  PhoneCall,
  MapPin,
  Clock,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#00a7da] via-[#027193] to-[#632728] text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Evyan</h3>
          <p className="text-sm leading-relaxed text-blue-100">
            Evyan is a leading manufacturer of eco-friendly electric rickshaws. Our mission is to provide sustainable, cost-effective mobility for a cleaner tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li><Link to={'/'} className="hover:text-white transition">Home</Link></li>
            <li><Link to={'/about'} className="hover:text-white transition">About</Link></li>
            <li><Link to={'/all-products'} className="hover:text-white transition">Products</Link></li>
            <li><Link to={'/contact'} className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-blue-100">
             <li className="flex items-start gap-2">
              <Clock size={18} className="mt-1 flex-shrink-0" />
              <span>Available: Monday - Saturday, 9am - 5pm</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span>
                Fact. 1: Plot no. 137, UV Extension, Ecotech II, <br />
                Greater Noida - 201310, UP, India
              </span>
            </li>
            <li className="flex items-start gap-2">
              <PhoneCall size={18} className="mt-1 flex-shrink-0" />
              <div>
                <a href="tel:+919311859995" className="block hover:text-white">+91 9311859995</a>
                <a href="tel:+919311859996" className="block hover:text-white">+91 9311859996</a>
                <a href="tel:+919311859997" className="block hover:text-white">+91 9311859997</a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={18} className="mt-1 flex-shrink-0" />
              <div>
                <a href="mailto:evyanscm@gmail.com" className="block hover:text-white">evyanscm@gmail.com</a>
                <a href="mailto:bharatevyan@gmail.com" className="block hover:text-white">bharatevyan@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider & Bottom */}
      <div className="border-t border-blue-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
        <p>&copy; {new Date().getFullYear()} Evyan. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white"><Facebook size={18} /></a>
          <a href="#" className="hover:text-white"><Instagram size={18} /></a>
          <a href="#" className="hover:text-white"><Twitter size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;