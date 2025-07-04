import apiSlice from "./apiSlice";

export const querySlice = apiSlice.injectEndpoints({
  tagTypes: ["Query"],
  endpoints: (builder) => ({
    submitQuery: builder.mutation({
        query: (queryData) => ({
          url: '/query/add-query',
          method: 'POST',
          body: queryData
        })
      }),

      // Get users with search, pagination, and filtering
    getQueries: builder.query({
        query: ({ page = 1, limit = 25, sortBy = 'createdAt', order = 'desc', role }) => {
          const params = {
            page,
            limit,
            sortBy,
            order,
          };
  
          return {
            url: '/query/get-queries',
            params,
            headers: {
              "auth-token": JSON.parse(localStorage.getItem("token")),
            },
          };
        },
        providesTags: (result) =>
          result
            ? [
              ...result.data.map(({ _id }) => ({ type: 'Query', id: _id })),
              { type: 'Query', id: 'LIST' },
            ]
            : [{ type: 'Query', id: 'LIST' }],
        keepUnusedDataFor: 3600,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
        refetchOnFocus: true,
      }),

      deleteQuery: builder.mutation({
        query: (queryId) => ({
          url: `/query/delete-query/${queryId}`,
          method: "DELETE",
          headers: {
            "auth-token": JSON.parse(localStorage.getItem("token")),
          },
        }),
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
        refetchOnFocus: true,
        invalidatesTags: ["Query"], // Invalidate cache for properties
      }),
  }),
});

// import { useUpdateUserRoleMutation } from "../../../../redux/slices/authSlice"; // Import the mutation for updating user role
export const { useSubmitQueryMutation ,useGetQueriesQuery,useDeleteQueryMutation} = querySlice;