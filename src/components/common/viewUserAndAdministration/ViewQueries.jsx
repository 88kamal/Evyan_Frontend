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

import moment from 'moment-timezone';
import { useGetQueriesQuery } from "../../../redux/slices/querySlice";
import DeleteQueryModal from "./modal/DeleteQueryModal";

const TABLE_HEAD = ["S.No", "Name", "Email", "Mobile Number", "Service", "Description", "Date", "Delete"];

export default function ViewQueries() {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(25);
    const [viewType, setViewType] = useState(() => {
        // Initialize from localStorage or default to 'table'
        return localStorage.getItem("viewType") || "table";
    });

    const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen status





    // Pass the search, page, and limit as parameters to the query
    const { data: queries, error, isLoading, refetch } = useGetQueriesQuery({ page, limit });

    const handlePrevious = () => {
        const totalPages = Math.ceil((queries?.pagination?.total ?? 0) / limit);
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        const totalPages = Math.ceil((queries?.pagination?.total ?? 0) / limit);
        if (page < totalPages) setPage(page + 1);
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


    const handleDownload = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_HOST_URL}/api/v1/query/queries/download`, {
                method: 'GET',
                credentials: 'include', // Include cookies for authentication
                headers: {
                    "auth-token": JSON.parse(localStorage.getItem("token")),
                },
            });

            if (!response.ok) throw new Error('Download failed');

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `employees-${Date.now()}.xlsx`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            toast.error(error.message || 'Failed to download Excel file');
        }
    };


    const toggleFullscreen = () => {
        if (!isFullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setIsFullscreen(!isFullscreen);
    };
    return (
        <div className="h-full w-full bg-white pt-1 rounded-md border border-purple-300">
            <div className="rounded-none  border-b border-purple-300 px-2 py-1">
                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            All Employee
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all employees
                        </Typography>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Button
                            variant=""
                            color="purple"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-purple-200 bg-transparent border text-black"
                            onClick={refetch}
                        >
                            <ArrowPathIcon className="h-5 w-5" />
                            <p >Refresh</p>
                        </Button>
                        <Button
                            variant=""
                            color="purple"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-purple-200 bg-transparent border text-black"
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
                            className="flex items-center gap-2 border hover:shadow-none shadow-none text-black bg-white border-purple-200"
                            onClick={toggleFullscreen}
                        >
                            {isFullscreen ? (
                                <ArrowsPointingInIcon className="h-5 w-5" />
                            ) : (
                                <ArrowsPointingOutIcon className="h-5 w-5" />
                            )}
                            <span className=" hidden lg:block sm:block md:block">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
                        </Button>

                        <Button
                            variant=""
                            color="purple"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-purple-200 bg-transparent border text-black"
                            onClick={handleDownload}
                        >
                            <ArrowDownTrayIcon className="h-5 w-5" />
                            <p>Download Leads</p>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="overflow-scroll p-2">
                {isLoading ? (
                    <div className="flex justify-center p-4">
                        <Spinner className="h-8 w-8 text-purple-500" />
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
                                        className="border-y border-l border-r border-purple-200 bg-purple-50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-bold leading-none text-purple-700"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {queries?.data?.map(
                                ({ _id, name, email, phone, service, description, createdAt }, index) => (
                                    <tr key={index} className="hover:bg-purple-50/50 cursor-pointer">
                                        <td className="px-5  border-l border-r border-b border-purple-300">
                                            {index + 1 + (page - 1) * limit}.
                                        </td>

                                        <td className="px-5 py-2 text-black border-l border-r border-b border-purple-300 capitalize">
                                            {name ? name : 'Not-Set'}
                                        </td>

                                        <td
                                            className="px-5  border-l border-r border-b border-purple-300 hover:text-purple-700 text-black"
                                            onClick={() => handleCopy(email)}
                                        >
                                            {email ? email : 'Not-Set'}
                                        </td>

                                        <td
                                            className="px-5  border-l border-r border-b border-purple-300 hover:text-purple-700 text-black"
                                            onClick={() => handleCopy(phone)}
                                        >
                                            {phone}
                                        </td>
                                        <td
                                            className="px-5  border-l border-r border-b border-purple-300 hover:text-purple-700 text-black"
                                        >
                                            {
                                                service
                                            }
                                        </td>
                                        <td className="px-5  border-l border-r border-b border-purple-300">
                                            {description}
                                        </td>
                                        <td className="px-5  border-l border-r border-b border-purple-300">
                                            {moment(createdAt)
                                                .tz('Asia/Kolkata')
                                                .format('DD MMM YYYY, hh:mm A')}
                                        </td>
                                        <td className="px-5  border-l border-r border-b border-purple-300">
                                            <DeleteQueryModal id={_id} refetch={refetch} />
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {queries?.data?.map(({ _id, name, email, phone, service, description, createdAt }) => (
                            <div key={_id} className="border border-purple-300 rounded-md">
                                <div className="p-2">
                                    <Typography variant="h6" color="blue-gray" className=" capitalize text-black">
                                        {name ? name : 'Not-Set'}
                                    </Typography>
                                    <Typography className="text-sm text-gray-900">
                                        <b>Email:</b> {email ? email : 'Not-Set'}
                                    </Typography>
                                    <Typography className="text-sm text-gray-900">
                                        <b>Phone:</b> {phone}
                                    </Typography>
                                    <Typography className="text-sm text-gray-900">
                                        <b>Service:</b> {

                                        }
                                    </Typography>
                                    <Typography className="text-sm text-gray-900">
                                        <b>Description:</b> {
                                            description
                                        }
                                    </Typography>
                                    <Typography className="text-sm text-gray-900">
                                        <b>Date:</b>  {moment(createdAt)
                                            .tz('Asia/Kolkata')
                                            .format('DD MMM YYYY, hh:mm A')}
                                    </Typography>
                                    <div className="flex items-center justify-between mt-4 rounded-b-lg bg-purple-50">

                                        <DeleteQueryModal id={_id} refetch={refetch} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between border-t border-purple-300 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {page} of {Math.ceil((queries?.pagination?.total ?? 0) / limit)}
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant=""
                        size="sm"
                        className="hover:bg-purple-50 active:bg-purple-50 focus:bg-purple-50 transition-colors duration-300 hover:shadow-none shadow-none bg-transparent border text-black border-purple-200"
                        onClick={handlePrevious}
                        disabled={page === 1}
                    >
                        Previous
                    </Button>

                    <Button
                        variant=""
                        size="sm"
                        className="hover:shadow-none shadow-none bg-purple-500"
                        onClick={handleNext}
                        disabled={page === Math.ceil((queries?.pagination?.total ?? 0) / limit)}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}