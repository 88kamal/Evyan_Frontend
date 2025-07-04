import React, { useState } from 'react'
import DOMPurify from 'dompurify'
import { Spinner, Dialog, Button } from '@material-tailwind/react'
import { useGetBlogBySlugQuery } from '../../../../redux/slices/blogSlice'
import { Eye } from 'lucide-react'

const ViewMoreBlogModal = ({ slug }) => {
    const [open, setOpen2] = useState(false);
    
  const { data: response, isLoading, isError, error } = useGetBlogBySlugQuery(slug)
  const blog = response?.blog

  const sanitizedHTML = blog?.blogBody 
    ? DOMPurify.sanitize(blog.blogBody)
    : ''

    const handleOpen = () => setOpen2(!open);

  return (
    <>
     <Button
        onClick={handleOpen}
        variant="text"
        className="flex items-center space-x-2 hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
      >
        <Eye className="h-5 w-5" /> {/* Icon */}
      
      </Button> 
      
      <Dialog
      open={open}
      
      size="xl"
      className="bg-white dark:bg-gray-800 rounded-lg max-h-[90vh] overflow-y-auto"
      dismissible
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <div className="p-6">
        {/* Close Button */}
        <button 
          onClick={handleOpen}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 text-2xl"
        >
          &times;
        </button>

        {isLoading ? (
          <div className="text-center py-8">
            <Spinner className="h-8 w-8 mx-auto" />
          </div>
        ) : isError ? (
          <div className="text-red-500 text-center py-8">
            {error?.data?.message || error.message}
          </div>
        ) : !blog ? (
          <div className="text-center py-8">Blog not found</div>
        ) : (
          <article className="prose dark:prose-invert max-w-none">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold mb-4">
                {blog.blogTitle}
              </h1>
              {blog.blogImg && (
                <img 
                  src={blog.blogImg}
                  alt={blog.blogTitle}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                  loading="lazy"
                />
              )}
              <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-300">
                <span>By {blog.userId?.name || 'Unknown Author'}</span>
                <span>•</span>
                <time dateTime={blog.createdAt}>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </time>
              </div>
            </div>

            <div 
              className="prose lg:prose-xl max-w-none dark:prose-invert
                        prose-headings:font-semibold prose-a:text-blue-600
                        hover:prose-a:text-blue-500 prose-img:rounded-xl
                        prose-img:shadow-lg prose-blockquote:border-l-4
                        prose-blockquote:border-gray-200 dark:prose-blockquote:border-gray-600
                        prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-700
                        prose-blockquote:px-4 prose-blockquote:py-2"
              dangerouslySetInnerHTML={{ __html: sanitizedHTML || '<p>No content available</p>' }}
            />
          </article>
        )}
      </div>
    </Dialog>
    </>
   
  )
}

export default ViewMoreBlogModal