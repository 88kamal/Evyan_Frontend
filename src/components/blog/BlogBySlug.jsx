import React from 'react';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet';
import { Spinner } from '@material-tailwind/react';
import { ArrowBigDown, ArrowLeft } from 'lucide-react';
import { useGetBlogBySlugQuery } from '../../redux/slices/blogSlice';
import Layout from '../layout/Layout';

const BlogBySlug = () => {
  const { slug } = useParams();
  const { data: response, isLoading, isError, error } = useGetBlogBySlugQuery(slug);
  const blog = response?.blog;

  const sanitizedHTML = blog?.blogBody ? DOMPurify.sanitize(blog.blogBody) : '';

  if (isLoading)
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <Spinner className="w-12 h-12 text-blue-500" />
        </div>
      </Layout>
    );

  if (isError)
    return (
      <Layout>
        <div className="text-center py-20 text-red-500 font-semibold">{error?.data?.message || error.message}</div>
      </Layout>
    );

  if (!blog)
    return (
      <Layout>
        <div className="text-center py-20 text-gray-600 text-lg">Blog not found</div>
      </Layout>
    );


    
  return (
    <Layout>
      <Helmet>
        <title>{`${blog.blogTitle} | Your Blog Name`}</title>
        <meta name="description" content={sanitizedHTML.substring(0, 150)} />
      </Helmet>

      <div className="lg:absolute  py-3 px-3">
        <Link to={"/blogs"}>
          <div className="bg-gray-200 w-10 rounded-full p-2 ">
            <ArrowLeft />
          </div>
        </Link>
      </div>

      <article className="lg:pt-5 pb-20 max-w-6xl mx-auto px-6">
        {blog.blogImg && (
          <div className="lg:w-full lg:h-96 rounded-xl overflow-hidden shadow-lg mb-8">
            <img
              src={blog.blogImg}
              alt={blog.blogTitle}
              className="lg:w-full lg:h-full object-cover transition-transform duration-300 hover:scale-105"
              priority="true"
              loading="lazy"
            />
          </div>
        )}
        <div className="mb-10 text-center">
          <h1 className="text-2xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {blog.blogTitle}
          </h1>
          <div className="flex items-center justify-center text-gray-500 text-sm space-x-3">
            <span className="font-medium">
              By {blog.userId?.name || "Unknown Author"}
            </span>
            <span>•</span>
            <time dateTime={blog.createdAt} className="italic">
              {new Date(blog.createdAt).toLocaleDateString()}
            </time>
          </div>
        </div>

        <div
          className="prose text-justify lg:prose-xl max-w-none dark:prose-invert prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-lg prose-img:shadow-md prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:bg-gray-100 prose-blockquote:px-5 prose-blockquote:py-3 leading-relaxed text-lg text-gray-800"
          dangerouslySetInnerHTML={{
            __html: sanitizedHTML || "<p>No content available</p>",
          }}
        />
      </article>
    </Layout>
  );
};

export default BlogBySlug;