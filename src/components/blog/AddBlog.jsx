// BlogEditor.jsx
import React, { useState, useRef, useCallback, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BeatLoader } from 'react-spinners';
import DOMPurify from 'dompurify';
import { useCreateBlogPostMutation } from '../../redux/slices/blogSlice';


const BlogEditor = React.memo(() => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogBody, setBlogBody] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const quillRef = useRef(null);
  
  const [createBlogPost, { isLoading, isSuccess, error }] = useCreateBlogPostMutation();

  const handleFeaturedImage = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFeaturedImage({ file, previewUrl });
    }
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('blogTitle', blogTitle);
    formData.append('blogBody', blogBody);
    if (featuredImage?.file) {
      formData.append('blogImg', featuredImage.file); // Ensure this matches backend field name
    }
  
    try {
      await createBlogPost(formData).unwrap();
      // Reset form
      setBlogTitle('');
      setBlogBody('');
      setFeaturedImage(null);
      if (featuredImage?.previewUrl) URL.revokeObjectURL(featuredImage.previewUrl);
      setError(''); // Clear previous errors
    } catch (err) {
      console.error('Blog submission failed:', err);
      setError(err.data?.message || 'Failed to publish blog');
    }
  }, [blogTitle, blogBody, featuredImage, createBlogPost]);

  const quillModules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link'],
        ['clean']
      ]
    }
  }), []);

  const quillFormats = useMemo(() => [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'blockquote', 'code-block',
    'list', 'bullet',
    'link'
  ], []);

  const sanitizedContent = useMemo(() => ({
    __html: DOMPurify.sanitize(blogBody)
  }), [blogBody]);

  return (
    <div className="flex h-screen bg-white">
      {/* Editor Section */}
      <div className="flex-1 p-8 bg-gray-50 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Editor</h1>
          
          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 border border-red-100">
              {error.data?.message || 'Failed to publish blog'}
            </div>
          )}
          
          {isSuccess && (
            <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 border border-green-100">
              Blog published successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blog Title
              </label>
              <input
                type="text"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter blog title..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image
              </label>
              <div className="flex items-center gap-4">
                <label className="flex flex-col items-center justify-center w-40 h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    onChange={handleFeaturedImage}
                    accept="image/*"
                    className="hidden"
                  />
                  <svg
                    className="w-8 h-8 text-gray-400 mb-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm text-gray-500">Upload Image</span>
                </label>
                
                {featuredImage?.previewUrl && (
                  <div className="relative group"
                    onMouseEnter={() => setIsHoveringImage(true)}
                    onMouseLeave={() => setIsHoveringImage(false)}
                  >
                    <img
                      src={featuredImage.previewUrl}
                      alt="Preview"
                      className="w-40 h-32 object-cover rounded-lg shadow-sm border border-gray-200"
                    />
                    {isHoveringImage && (
                      <button
                        type="button"
                        onClick={() => {
                          URL.revokeObjectURL(featuredImage.previewUrl);
                          setFeaturedImage(null);
                        }}
                        className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg"
                      >
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="h-[600px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blog Content
              </label>
              <ReactQuill
                ref={quillRef}
                theme="snow"
                value={blogBody}
                onChange={setBlogBody}
                modules={quillModules}
                formats={quillFormats}
                className="h-[500px] bg-white rounded-lg border border-gray-300"
                placeholder="Start writing your blog post..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <BeatLoader size={10} color="#fff" />
              ) : (
                'Publish Article'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Preview Section */}
      <div className="flex-1 p-8 bg-white overflow-y-auto border-l border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Live Preview</h2>
          <article className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            {blogTitle && (
              <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {blogTitle}
              </h1>
            )}
            {featuredImage?.previewUrl && (
              <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden">
                <img
                  src={featuredImage.previewUrl}
                  alt="Featured preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            )}
            <div className="prose lg:prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={sanitizedContent} 
              />
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-medium">AU</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Author Name</p>
                    <p className="text-sm text-gray-500">
                      Posted on {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
});

export default BlogEditor;