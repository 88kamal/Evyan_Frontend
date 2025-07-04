import apiSlice from "./apiSlice";

export const authSlice = apiSlice.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    sendOtp: builder.mutation({
      query: (mobileNumber) => ({
        url: '/user/send-otp',
        method: 'POST',
        body: { mobileNumber },
      }),
    }),
    verifyOtp: builder.mutation({
      query: ({ mobileNumber, otp }) => ({
        url: '/user/verify-otp',
        method: 'POST',
        body: { mobileNumber, otp },
      }),
      async onQueryStarted(credentials, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("data 123", data)
          // Store token in localStorage after successful OTP generation
          localStorage.setItem('token', JSON.stringify(data.token));
        } catch (error) {
          console.error("Error during OTP sending:", error);
        }
      },
    }),
    getUserProfile: builder.query({
      query: () => ({
        url: `/user/get-profile`, // Dynamically include the user ID
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")), // Fetch auth token from localStorage
        },
      }),
      providesTags: ['User'], // Tagging for cache updates
      keepUnusedDataFor: 3600, // Cache data for 60 seconds after the component unmounts
      refetchOnFocus: true, // Refetch data when the window is focused
      refetchOnReconnect: true, // Refetch when the connection is re-established
      refetchOnMountOrArgChange: true, // Refetch when the component remounts or query arguments change
    }),
    // Get users with search, pagination, and filtering
    getUsers: builder.query({
      query: ({ search, page = 1, limit = 25, sortBy = 'createdAt', order = 'desc', role }) => {
        const params = {
          search,
          page,
          limit,
          sortBy,
          order,
        };

        if (role) {
          params.role = role; // Add role to params if specified
        }

        return {
          url: '/user/users',
          params,
          headers: {
            "auth-token": JSON.parse(localStorage.getItem("token")),
          },
        };
      },
      providesTags: (result) =>
        result
          ? [
            ...result.data.map(({ _id }) => ({ type: 'User', id: _id })),
            { type: 'User', id: 'LIST' },
          ]
          : [{ type: 'User', id: 'LIST' }],
      keepUnusedDataFor: 3600,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/user/delete-user/${userId}`,
        method: "DELETE",
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
      }),
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
      invalidatesTags: ["Localities"], // Invalidate cache for properties
    }),
    updateUserRole: builder.mutation({
      query: ({ userId, role }) => ({
        url: `/user/update-role/${userId}`,
        method: 'PUT',
        body: { role },
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: (result, error, { userId }) => [{ type: 'User', id: userId }],
    }),
    // Add to authSlice endpoints
    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: '/user/update-user-profile',
        method: 'PUT',
        body: data,
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation({
      queryFn: () => {
        // Custom logic for logging out (client-side)
        localStorage.removeItem('token');
        return { data: null }; // No need to send a request to the server
      },
    }),
  }),
});

// import { useUpdateUserRoleMutation } from "../../../../redux/slices/authSlice"; // Import the mutation for updating user role
export const { useSendOtpMutation, useVerifyOtpMutation, useGetUserProfileQuery, useGetUsersQuery, useDeleteUserMutation, useUpdateUserRoleMutation,useUpdateUserProfileMutation, useLogoutMutation } = authSlice;