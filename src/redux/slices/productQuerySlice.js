// redux/slices/productQuerySlice.js
import apiSlice from "./apiSlice";

export const productQuerySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitProductQuery: builder.mutation({
      query: (queryData) => ({
        url: "/product-query/add-product-query",
        method: "POST",
        body: queryData,
      }),
    }),

    getProductQueries: builder.query({
      query: ({ page = 1, limit = 20 }) => ({
        url: "/product-query/get-product-queries",
        params: { page, limit },
      }),
      providesTags: ["ProductQuery"],
    }),

    deleteProductQuery: builder.mutation({
      query: (id) => ({
        url: `/product-query/delete-product-query/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProductQuery"],
    }),
  }),
});

export const {
  useSubmitProductQueryMutation,
  useGetProductQueriesQuery,
  useDeleteProductQueryMutation,
} = productQuerySlice;
