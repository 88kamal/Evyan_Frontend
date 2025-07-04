/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useGetAllBlogsQuery } from '../../redux/slices/blogSlice';

// Blurred placeholder image as base64
const BLUR_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

const AllBlogs = () => {
  const [page, setPage] = useState(1);
  const limit = 9;
  const { data, isLoading, isError, isFetching, error, refetch } = useGetAllBlogsQuery({ page, limit });
  const [ref, inView] = useInView({ rootMargin: '200px' });

  const loadMore = useCallback(() => {
    if (!isFetching && data?.totalPages > page) {
      setPage(prev => prev + 1);
    }
  }, [isFetching, data?.totalPages, page]);

  useEffect(() => {
    if (inView) loadMore();
  }, [inView, loadMore]);

  if (isError) return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-12 max-w-md">
        <div className="flex justify-center items-center">
            <img
              className="w-20"
              src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png"
              alt=""
            />
          </div>
          <p className="text-red-500 text-xl mb-4">{error?.data?.error || 'Failed to load blogs'}</p>
          
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Latest Blog Posts</h1>

          {data?.blogs?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.blogs.map(blog => (
                <BlogCard key={blog?._id} blog={blog} />
              ))}
            </div>
          ) : (
            !isLoading && (
              <div className="text-center py-12 text-gray-500 text-xl">
                No blog posts found
              </div>
            )
          )}

          <div ref={ref} className="mt-12 text-center h-20">
            {isFetching ? (
              <LoadingSpinner />
            ) : data?.totalPages <= page ? (
              <EndOfListMessage />
            ) : (
              <p className="text-gray-400 text-sm">Scroll down to load more</p>
            )}
          </div>
        </div>
      </div>

      {(isLoading && page === 1) && (
        <SkeletonLoader limit={limit} />
      )}
    </>
  );
};

// eslint-disable-next-line react/display-name
const SkeletonLoader = React.memo(({ limit }) => (
  <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: limit }).map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
          <div className="aspect-video bg-gray-200" />
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-4/5" />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="h-4 bg-gray-200 rounded w-1/4" />
              <div className="h-4 bg-gray-200 rounded w-1/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
));

const BlogCard = React.memo(({ blog }) => (
  <Link
    to={`/blog/${blog?.slug}`}
    className="block transform transition duration-300 hover:scale-[1.02] focus:scale-[1.02] focus:outline-none"
    aria-label={`Read ${blog?.blogTitle}`}
  >
    <article className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <figure className="relative aspect-video">
        <img
          src={blog?.blogImg}
          alt={blog?.blogTitle}
          className="w-full h-full object-cover"
          loading="lazy"
          width={400}
          height={300}
          placeholder={BLUR_DATA_URL}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Blog+Image';
          }}
        />
      </figure>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {blog?.blogTitle}
        </h2>
        <div className="mt-auto pt-4 text-sm text-gray-500 flex items-center gap-2">
          <span className="font-medium truncate">{blog?.userId?.name}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={blog?.createdAt}>
            {new Date(blog?.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </time>
        </div>
      </div>
    </article>
  </Link>
));

const LoadingSpinner = () => (
  <div className="inline-flex items-center gap-2">
    <div
      className="animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
    <span className="text-gray-500">Loading more posts...</span>
  </div>
);

const EndOfListMessage = () => (
  <div className="text-gray-400 text-sm italic" role="status">
    🎉 You've reached the end! No more posts to load.
  </div>
);

export default AllBlogs;