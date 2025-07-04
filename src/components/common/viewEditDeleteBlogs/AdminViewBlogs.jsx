/* eslint-disable no-unused-vars */
import { ArrowPathIcon, MagnifyingGlassIcon, ArrowDownTrayIcon, TableCellsIcon, ListBulletIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import {
    CardHeader,
    Input,
    Typography,
    Button,
    Spinner,
    Card,
    CardBody,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import moment from "moment-timezone";
import { useGetAllBlogsAdminQuery, useGetAllBlogsQuery } from "../../../redux/slices/blogSlice";
import { Eye, EyeIcon } from "lucide-react";
import EditBlogModal from "./modal/EditBlogModal";
import DeleteBlogModal from "./modal/DeleteBlogModal";
import ViewMoreBlogModal from "./modal/ViewMoreBlogModal";
import authService from "../../../service/authService";


export default function AdminViewBlogs() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [viewType, setViewType] = useState(() => {
        // Initialize from localStorage or default to 'table'
        return localStorage.getItem("viewType") || "table";
    });

    const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen status

    const user = authService.getCurrentUser();

    const TABLE_HEAD = [
        "S.No",
        "Title",
        "Image",
        "Author",
        "View More",
        "Publish Date",
        "Delete", // Always included in the base array
    ].filter((header) => header !== "Delete" || user?.role === 1); // Remove "Delete" if role is not 3


    // Pass the search, page, and limit as parameters to the query
    const { data: blogs, error, isLoading, refetch } = useGetAllBlogsAdminQuery({ page, limit });

    // Sync local page state with backend's currentPage
    useEffect(() => {
        if (blogs?.currentPage) {
            setPage(blogs.currentPage);
        }
    }, [blogs?.currentPage]);

    
    const handlePrevious = () => {
        setPage(prev => Math.max(1, prev - 1));
      };
      
      const handleNext = () => {
        setPage(prev => prev + 1);
      };
      
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        toast.success(`${text} copied!`);
    };

    // Function to toggle view type
    const toggleView = () => {
        const newViewType = viewType === "table" ? "list" : "table";
        setViewType(newViewType);
        localStorage.setItem("viewType", newViewType); // Save to localStorage
    };

    useEffect(() => {
        // Sync state with localStorage in case of external changes (optional safeguard)
        const storedViewType = localStorage.getItem("viewType");
        if (storedViewType && storedViewType !== viewType) {
            setViewType(storedViewType);
        }
    }, []);




    const toggleFullscreen = () => {
        if (!isFullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setIsFullscreen(!isFullscreen);
    };
    return (
        <div className="h-full w-full bg-white pt-1 rounded-md border border-gray-300">
            <div className="rounded-none  border-b border-gray-300 px-2 py-1">
                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            All Blogs
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all blogs
                        </Typography>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-2">

                        <Button
                            variant=""
                            color="gray"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-gray-200 bg-transparent border text-black"
                            onClick={refetch}
                        >
                            <ArrowPathIcon className="h-5 w-5" />
                            <p >Refresh</p>
                        </Button>
                        <Button
                            variant=""
                            color="gray"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-gray-200 bg-transparent border text-black"
                            onClick={toggleView}
                        >
                            {viewType === "table" ? (
                                <ListBulletIcon className="h-5 w-5" />
                            ) : (
                                <TableCellsIcon className="h-5 w-5" />
                            )}
                            <p >
                                {viewType === "table" ? "List View" : "Table View"}
                            </p>
                        </Button>

                        <Button
                            variant=""
                            size="sm"
                            className="flex items-center gap-2 border hover:shadow-none shadow-none text-black bg-white border-gray-200"
                            onClick={toggleFullscreen}
                        >
                            {isFullscreen ? (
                                <ArrowsPointingInIcon className="h-5 w-5" />
                            ) : (
                                <ArrowsPointingOutIcon className="h-5 w-5" />
                            )}
                            <span className=" hidden lg:block sm:block md:block">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
                        </Button>


                    </div>
                </div>
            </div>

            <div className="overflow-scroll p-2">
                {isLoading ? (
                    <div className="flex justify-center p-4">
                        <Spinner className="h-8 w-8 text-gray-500" />
                    </div>
                ) : error ? (
                    <div className="p-4">
                        <div className="flex justify-center items-center">
                            <img
                                className="w-20"
                                src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png"
                                alt=""
                            />
                        </div>
                        <h1 className="text-center" color="red">{error?.data?.error}</h1>
                    </div>
                ) : viewType === "table" ? (
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-y border-l border-r border-gray-200 bg-gray-50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-bold leading-none text-gray-700"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* <pre>{JSON.stringify(blogs,null,2)}</pre> */}

                            {blogs?.blogs?.map(
                                ({ _id, blogTitle, blogImg, slug, userId, createdAt }, index) => (
                                    <tr key={index} className="hover:bg-gray-50/50 cursor-pointer">
                                        <td className="px-5  border-l border-r border-b border-gray-300">
                                            {index + 1 + (page - 1) * limit}.
                                        </td>

                                        <td className="px-5 py-2 text-black border-l border-r border-b border-gray-300 capitalize">
                                            {blogTitle}
                                        </td>

                                        <td
                                            className="px-5  border-l border-r border-b border-gray-300 hover:text-gray-700 text-black"

                                        >
                                            <img src={blogImg} className="w-8 h-8" alt="img" />
                                        </td>

                                        <td
                                            className="px-5  border-l border-r border-b border-gray-300 hover:text-gray-700 text-black"

                                        >
                                            {userId?.name}
                                        </td>
                                        <td
                                            className="px-5  border-l border-r border-b border-gray-300 hover:text-gray-700 text-black"
                                        >
                                            <ViewMoreBlogModal slug={slug} />
                                        </td>
                                        <td className="px-5  border-l border-r border-b border-gray-300">
                                            {moment(createdAt)
                                                .tz('Asia/Kolkata')
                                                .format('DD MMM YYYY, hh:mm A')}
                                        </td>
                                       
                                        {user?.role === 1 && <td className="px-5  border-l border-r border-b border-gray-300">
                                            <DeleteBlogModal id={_id} refetch={refetch} />
                                        </td>}
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
                        {blogs?.blogs?.map(({ _id, blogTitle, slug, blogImg, userId, createdAt }) => (
                            <div
                                key={_id}
                                className="border-2 border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
                            >
                                {/* Blog Image */}
                                {blogImg && (
                                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                                        <img
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            src={blogImg}
                                            alt={blogTitle}
                                        />
                                    </div>
                                )}

                                <div className="p-4 space-y-4">
                                    {/* Title */}
                                    <h2 className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors cursor-pointer">
                                        {blogTitle}
                                    </h2>

                                    {/* Author Info */}
                                    <div className="flex items-center space-x-3">
                                        {userId?.avatar && (
                                            <img
                                                className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                                                src={userId.avatar}
                                                alt={userId.name}
                                            />
                                        )}
                                        <div>
                                            <p className="font-medium text-gray-700">{userId?.name}</p>
                                            <p className="text-sm text-gray-500">Blog Author</p>
                                        </div>
                                    </div>

                                    {/* Date and Actions */}
                                    <div className="flex justify-between items-center text-sm">
                                        <div className="text-gray-500">
                                            {moment(createdAt)
                                                .tz('Asia/Kolkata')
                                                .format('DD MMM YYYY, hh:mm A')}
                                        </div>
                                        <ViewMoreBlogModal slug={slug} />

                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex justify-end space-x-3 border-t pt-4">
                                      
                                        {user?.role == 1 && <DeleteBlogModal
                                            id={_id}
                                            refetch={refetch}
                                            className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors"
                                        />}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between border-t border-gray-300 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {blogs?.currentPage ?? 1} of {blogs?.totalPages ?? 1}
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant=""
                        size="sm"
                        className="hover:bg-gray-50 active:bg-gray-50 focus:bg-gray-50 transition-colors duration-300 hover:shadow-none shadow-none bg-transparent border text-black border-gray-200"
                        onClick={handlePrevious}
                        disabled={page === 1 || isLoading}                    >
                        Previous
                    </Button>

                    <Button
                        variant=""
                        size="sm"
                        className="hover:shadow-none shadow-none bg-gray-900"
                        onClick={handleNext}
                        disabled={page >= blogs?.totalPages || isLoading}                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}