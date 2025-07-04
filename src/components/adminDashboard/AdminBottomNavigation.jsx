/* eslint-disable react/prop-types */
import { HomeIcon, TicketIcon, UsersIcon } from "@heroicons/react/24/outline";
import { BookText, UserCircleIcon } from "lucide-react";

import { Link } from 'react-router-dom';

const AdminBottomNavigation = () => {
    return (
        <div className="fixed z-50 bottom-0 left-0 w-full bg-purple-50 border-t border-purple-100 shadow-lg">
            <div className="flex justify-around py-1">
                <NavItem
                    icon={<HomeIcon className="w-6 h-6" />}
                    label="Home"
                    link={'admin-home-page'}
                />
                <NavItem
                    icon={<UsersIcon className="w-6 h-6" />}
                    label="Users"
                    link={'admin-view-user-and-administration'}
                />

                <NavItem
                    icon={<BookText className="w-6 h-6" />}
                    label="View Blogs"
                    link={'admin-view-blogs'}
                />


                <NavItem
                    icon={<UserCircleIcon className="w-6 h-6" />}
                    label="Profile"
                    link={'admin-profile-page'}
                />
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, link }) => (
    <Link to={link}>
        <button type='button' className="flex flex-col items-center text-black hover:text-purple-800">
            {icon}
            <span className="text-xs mt-1">{label}</span>
        </button>
    </Link>
);

export default AdminBottomNavigation;