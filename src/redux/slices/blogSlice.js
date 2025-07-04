import apiSlice from "./apiSlice";

export const blogSlice = apiSlice.injectEndpoints({
    tagTypes: ["Blog"],
    endpoints: (builder) => ({
        createBlogPost: builder.mutation({
            query: (formData) => ({
              url: '/blog/add-blog',
              method: 'POST',
              body: formData,
              headers: {
                "auth-token": JSON.parse(localStorage.getItem("token")),
              },
            }),
            invalidatesTags: ['Blog']
          }),
          getAllBlogs: builder.query({
            query: ({ page, limit }) => `/blog/get-blogs?page=${page}&limit=${limit}`,
            providesTags: (result) =>
              result
                ? [...result.blogs.map(({ _id }) => ({ type: 'Blog', id: _id })), 'Blog']
                : ['Blog'],
            // Merge paginated results
            serializeQueryArgs: ({ endpointName }) => endpointName,
            merge: (currentCache, newItems) => {
              if (newItems.currentPage === 1) return newItems;
              return {
                ...newItems,
                blogs: [...currentCache.blogs, ...newItems.blogs]
              };
            },
            forceRefetch({ currentArg, previousArg }) {
              return currentArg?.page !== previousArg?.page;
            }
          }),
          getBlogBySlug: builder.query({
            query: (slug) => `/blog/get-blogs-by-slug/${slug}`,
            providesTags: (result, error, slug) => [{ type: 'Blog', slug }],
          }),
          getBlogAnalytics: builder.query({
            query: () => ({
              url: '/blog/blog-analytics',
              method: 'GET',
              headers: {
                "auth-token": JSON.parse(localStorage.getItem("token")),
                // Add other headers if needed
                "Content-Type": "application/json"
              }
            }),
            providesTags: ['BlogAnalytics'],
          }),
          deleteBlog: builder.mutation({
            query: (blogId) => ({
              url: `/blog/delete-blog/${blogId}`,
              method: "DELETE",
              headers: {
                "auth-token": JSON.parse(localStorage.getItem("token")),
              },
            }),
            refetchOnMountOrArgChange: true,
            refetchOnReconnect: true,
            refetchOnFocus: true,
            invalidatesTags: ["Blog"], // Invalidate cache for properties
          }),
          getAllBlogsAdmin: builder.query({
            query: ({ page, limit }) => `/blog/get-blogs-admin?page=${page}&limit=${limit}`,
            providesTags: (result) =>
              result
                ? [...result.blogs.map(({ _id }) => ({ type: 'Blog', id: _id })), 'Blog']
                : ['Blog'],
          }),
    }),
});

export const {useCreateBlogPostMutation , useGetAllBlogsQuery,useGetAllBlogsAdminQuery, useGetBlogBySlugQuery,useDeleteBlogMutation,useGetBlogAnalyticsQuery } = blogSlice;