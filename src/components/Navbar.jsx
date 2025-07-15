import React, { useContext, useState } from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ShareModal from "./ShareModal";
import AuthModal from "./AuthModal";
import myContext from "../context/myContext";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";

export default function Navbars() {
    const [openNav, setOpenNav] = React.useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const { user } = useContext(myContext);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' },
        { label: "Blogs", to: "/blogs" },
        { to: '/services', label: 'Services' },
        { to: '/presence', label: 'Presence' },
    ];

    const rolePaths = {
        1: '/admin-dashboard/admin-home-page',
        2: '/user-profile',
    };

    // Product types for dropdown
    const productTypes = [
        { type: 'L2', label: 'L2 Vehicles' },
        { type: 'L3', label: 'L3 Vehicles' },
        { type: 'L5', label: 'L5 Vehicles' },
    ];

    return (
        <div className="sticky inset-0 z-50 w-full bg-blue-50">
            <Navbar className="w-full max-w-none shadow-md py-2 px-4 lg:px-5 lg:py-2.5 rounded-none relative">
                <div className="flex items-center justify-between text-blue-gray-900">
                    {/* Logo */}
                    <Link to={'/'}>
                        <Typography className="text-xl font-bold flex items-center">
                            <img src="/l.png" alt="Devknus Logo" className="w-28 h-11 lg:w-24 lg:h-10" />
                        </Typography>
                    </Link>

                    {/* Center Nav Links */}
                    <div className="hidden lg:flex flex-grow justify-center">
                        <ul className="flex gap-6 items-center">
                            {navLinks.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.to} className="text-md font-medium app-font hover:text-blue-600">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            
                            {/* Products Dropdown */}
                            <li className="relative group">
                                <button 
                                    className="text-md font-medium app-font hover:text-blue-600 flex items-center gap-1"
                                    onClick={() => setProductsOpen(!productsOpen)}
                                >
                                    Products
                                    <FaChevronDown className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                <div 
                                    className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ${
                                        productsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                    }`}
                                >
                                    {productTypes.map((item) => (
                                        <Link 
                                            key={item.type}
                                            to={`/products/${item.type}`}
                                            className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                                            onClick={() => setProductsOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right Buttons - Desktop */}
                    <div className="hidden lg:flex items-center gap-4">
                        <ShareModal />
                        {rolePaths[user?.role] ? (
                            <Link to={rolePaths[user.role]}>
                                <FaUserCircle className="w-7 h-7 text-gray-800" />
                            </Link>
                        ) : (
                            <AuthModal />
                        )}
                    </div>

                    {/* Mobile Menu Toggle and Buttons */}
                    <div className="flex lg:hidden items-center gap-2">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <ShareModal />
                            </div>
                            <div className="relative">
                                {rolePaths[user?.role] ? (
                                    <Link to={rolePaths[user.role]}>
                                        <FaUserCircle className="w-7 h-7 text-gray-800" />
                                    </Link>
                                ) : (
                                    <AuthModal />
                                )}
                            </div>
                        </div>
                        <IconButton
                            className="h-10 w-10 text-inherit rounded-lg border-blue-400 bg-white border shadow-none hover:shadow-none"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>

                {/* Mobile Nav Links */}
                <Collapse open={openNav}>
                    <div className="container mx-auto">
                        <ul className="flex flex-col gap-2 py-2">
                            {navLinks.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.to}
                                        className="block py-2 px-2 text-md app-font text-black hover:text-blue-600"
                                        onClick={() => setOpenNav(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            
                            {/* Mobile Products Dropdown */}
                            <li>
                                <button 
                                    className="flex items-center justify-between w-full py-2 px-2 text-md app-font text-black"
                                    onClick={() => setProductsOpen(!productsOpen)}
                                >
                                    Products
                                    <FaChevronDown className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                <div className={`overflow-hidden transition-all duration-300 ${
                                    productsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <ul className="pl-6">
                                        {productTypes.map((item) => (
                                            <li key={item.type}>
                                                <Link
                                                    to={`/products/${item.type}`}
                                                    className="block py-2 px-2 text-md app-font text-gray-600 hover:text-blue-600"
                                                    onClick={() => {
                                                        setProductsOpen(false);
                                                        setOpenNav(false);
                                                    }}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
}