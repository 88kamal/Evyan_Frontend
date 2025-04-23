import React from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ShareModal from "./ShareModal";
import { PhoneCall } from "lucide-react";

export default function Navbars() {
    const [openNav, setOpenNav] = React.useState(false);

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
        { to: '/services', label: 'Services' },
    ];

    return (
        <div className="sticky inset-0 z-50 w-full bg-blue-50">
            <Navbar className="w-full max-w-none shadow-md py-2 px-4 lg:px-5 lg:py-2.5 rounded-none">
                <div className="flex items-center justify-between text-blue-gray-900">
                    {/* Logo */}
                    <Link to={'/'}>
                        <Typography className="text-xl font-bold flex items-center">
                            <img src="/logo.png" alt="Devknus Logo" className="w-28 h-11 lg:w-24 lg:h-10" />
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
                        </ul>
                    </div>

                    {/* Right Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <ShareModal />
                        <a
                            href="tel:+911234567890"
                            className="flex items-center gap-2 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md transition"
                        >
                            <PhoneCall className="w-4 h-4" />
                            Call Now
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <IconButton
                        className="ml-auto h-10 w-10 text-inherit rounded-lg border-blue-400 lg:hidden bg-white border shadow-none hover:shadow-none"
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

                {/* Mobile Nav Links */}
                <Collapse open={openNav}>
                    <ul className="flex flex-col gap-2 py-2">
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                <Link to={item.to} className="block py-1 px-2 text-md app-font text-black hover:text-blue-600">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li className="flex flex-col gap-2 px-2 pt-2">
                            <ShareModal />
                            <a
                                href="tel:+911234567890"
                                className="flex items-center justify-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md transition"
                            >
                                <PhoneCall className="w-4 h-4" />
                                Call Now
                            </a>
                        </li>
                    </ul>
                </Collapse>
            </Navbar>
        </div>
    );
}
