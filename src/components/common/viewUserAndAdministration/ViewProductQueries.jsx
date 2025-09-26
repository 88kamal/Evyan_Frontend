/* src/components/ViewProductQueries.jsx */
/* eslint-disable no-unused-vars */
import {
  ArrowPathIcon,
  TableCellsIcon,
  ListBulletIcon,
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import { Typography, Button, Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import moment from "moment-timezone";
import {
  useGetProductQueriesQuery,
  useDeleteProductQueryMutation,
} from "../../../redux/slices/productQuerySlice";

const TABLE_HEAD = [
  "S.No",
  "Name",
  "Mobile",
  "State",
  "City",
  "Product",
  "Date",
  "Delete",
];

export default function ViewProductQueries() {
  const [page, setPage] = useState(1);
  const [limit] = useState(25);
  const [viewType, setViewType] = useState(
    localStorage.getItem("productViewType") || "table"
  );
  const [isFullscreen, setIsFullscreen] = useState(false);

  const { data: queries, error, isLoading, refetch } = useGetProductQueriesQuery({
    page,
    limit,
  });

  const [deleteProductQuery, { isLoading: isDeleting }] =
    useDeleteProductQueryMutation();

  // Show toast if fetching error occurs
  useEffect(() => {
    if (error) {
      const msg = error?.data?.error || error?.error || "Failed to load product enquiries";
      toast.error(msg);
    }
  }, [error]);

  const handlePrevious = () => {
    const totalPages = Math.max(1, Math.ceil((queries?.pagination?.total ?? 0) / limit));
    if (page > 1) setPage((p) => p - 1);
  };

  const handleNext = () => {
    const totalPages = Math.max(1, Math.ceil((queries?.pagination?.total ?? 0) / limit));
    if (page < totalPages) setPage((p) => p + 1);
  };

  const handleDelete = async (id) => {
    if (!id) return toast.error("Invalid enquiry id");
    if (!window.confirm("Are you sure you want to delete this enquiry?")) return;

    try {
      await deleteProductQuery(id).unwrap();
      toast.success("Enquiry deleted successfully");
      // refetch to refresh the list
      if (typeof refetch === "function") refetch();
    } catch (err) {
      console.error(err);
      const msg = err?.data?.error || err?.error || "Failed to delete enquiry";
      toast.error(msg);
    }
  };

  const toggleView = () => {
    const newViewType = viewType === "table" ? "list" : "table";
    setViewType(newViewType);
    localStorage.setItem("productViewType", newViewType);
  };

  useEffect(() => {
    const stored = localStorage.getItem("productViewType");
    if (stored && stored !== viewType) setViewType(stored);
  }, []); // run once

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
    setIsFullscreen((s) => !s);
  };

  const queryList = queries?.data ?? [];
  const totalPages = Math.max(1, Math.ceil((queries?.pagination?.total ?? 0) / limit));

  return (
    <div className="h-full w-full bg-white pt-1 rounded-md border border-purple-300">
      <div className="rounded-none border-b border-purple-300 px-2 py-1">
        <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Product Enquiries
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See all submitted product enquiries
            </Typography>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Button
              variant=""
              color="purple"
              size="sm"
              className="flex hover:shadow-none shadow-none items-center gap-2 border-purple-200 bg-transparent border text-black"
              onClick={() => refetch && refetch()}
            >
              <ArrowPathIcon className="h-5 w-5" />
              <p>Refresh</p>
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
              <p>{viewType === "table" ? "List View" : "Table View"}</p>
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
              <span className="hidden lg:block sm:block md:block">
                {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="overflow-scroll p-2">
        {isLoading ? (
          <div className="flex justify-center p-4">
            <Spinner className="h-8 w-8 text-purple-500" />
          </div>
        ) : !queryList.length ? (
          <div className="p-6 text-center text-gray-500">No product enquiries found.</div>
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
              {queryList.map(
                ({ _id, name, mobile, state, city, product, createdAt }, index) => (
                  <tr key={_id} className="hover:bg-purple-50/50">
                    <td className="px-5 border-l border-r border-b border-purple-300">
                      {index + 1 + (page - 1) * limit}.
                    </td>

                    <td className="px-5 py-2 text-black border border-purple-300 capitalize">
                      {name || "Not-Set"}
                    </td>

                    <td className="px-5 border border-purple-300 text-black">
                      {mobile || "Not-Set"}
                    </td>

                    <td className="px-5 border border-purple-300">{state || "Not-Set"}</td>

                    <td className="px-5 border border-purple-300">{city || "Not-Set"}</td>

                    <td className="px-5 border border-purple-300 font-semibold">
                      {product || "Not-Set"}
                    </td>

                    <td className="px-5 border border-purple-300">
                      {createdAt
                        ? moment(createdAt).tz("Asia/Kolkata").format("DD MMM YYYY, hh:mm A")
                        : "Not-Set"}
                    </td>

                    <td className="px-5 border border-purple-300 text-center">
                      <button
                        onClick={() => handleDelete(_id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                        disabled={isDeleting}
                      >
                        {isDeleting ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {queryList.map(
              ({ _id, name, mobile, state, city, product, createdAt }) => (
                <div key={_id} className="border border-purple-300 rounded-md p-3">
                  <Typography variant="h6" color="blue-gray" className="capitalize text-black">
                    {name || "Not-Set"}
                  </Typography>

                  <Typography className="text-sm text-gray-900">
                    <b>Mobile:</b> {mobile || "Not-Set"}
                  </Typography>

                  <Typography className="text-sm text-gray-900">
                    <b>State:</b> {state || "Not-Set"}
                  </Typography>

                  <Typography className="text-sm text-gray-900">
                    <b>City:</b> {city || "Not-Set"}
                  </Typography>

                  <Typography className="text-sm text-gray-900">
                    <b>Product:</b> {product || "Not-Set"}
                  </Typography>

                  <Typography className="text-sm text-gray-900">
                    <b>Date:</b>{" "}
                    {createdAt
                      ? moment(createdAt).tz("Asia/Kolkata").format("DD MMM YYYY, hh:mm A")
                      : "Not-Set"}
                  </Typography>

                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() => handleDelete(_id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-purple-300 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {page} of {totalPages}
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
            className="hover:shadow-none shadow-none bg-purple-500 text-white"
            onClick={handleNext}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
