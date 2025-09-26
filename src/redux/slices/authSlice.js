import apiSlice from "./apiSlice";

export const authSlice = apiSlice.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // 🔹 Send OTP
    sendOtp: builder.mutation({
      query: (mobileNumber) => ({
        url: '/user/send-otp',
        method: 'POST',
        body: { mobileNumber },
      }),
    }),

    // 🔹 Verify OTP
    verifyOtp: builder.mutation({
      query: ({ mobileNumber, otp }) => ({
        url: '/user/verify-otp',
        method: 'POST',
        body: { mobileNumber, otp },
      }),
      async onQueryStarted(credentials, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem('token', JSON.stringify(data.token));
        } catch (error) {
          console.error("Error during OTP verification:", error);
        }
      },
    }),

    // 🔹 Get logged-in user profile
    getUserProfile: builder.query({
      query: () => ({
        url: `/user/get-profile`,
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
      }),
      providesTags: ['User'],
      keepUnusedDataFor: 3600,
      refetchOnFocus: true,
      refetchOnReconnect: true,
      refetchOnMountOrArgChange: true,
    }),

    // 🔹 Get users (with pagination, search, role filter)
    getUsers: builder.query({
      query: ({ search, page = 1, limit = 25, sortBy = 'createdAt', order = 'desc', role }) => {
        const params = { search, page, limit, sortBy, order };
        if (role) params.role = role;

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

    // 🔹 Delete user
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/user/delete-user/${userId}`,
        method: "DELETE",
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: ["User"],
    }),

    // 🔹 Update FULL user details (name, email, mobileNumber, role)
    updateUser: builder.mutation({
      query: ({ userId, ...updateData }) => ({
        url: `/user/update-user/${userId}`,
        method: 'PUT',
        body: updateData,
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
      }),
      invalidatesTags: (result, error, { userId }) => [{ type: 'User', id: userId }],
    }),

    // 🔹 Update ONLY logged-in user's profile
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

    // 🔹 Logout
    logout: builder.mutation({
      queryFn: () => {
        localStorage.removeItem('token');
        return { data: null };
      },
    }),
  }),
});

export const {
  useSendOtpMutation,
  useVerifyOtpMutation,
  useGetUserProfileQuery,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useUpdateUserProfileMutation,
  useLogoutMutation,
} = authSlice;
