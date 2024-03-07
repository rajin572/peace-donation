import { baseApi } from "@/redux/api/api";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDonations: builder.query({
      query: () => {
        return {
          url: "/donation",
          method: "GET",
        };
      },
      providesTags: ["donation"],
    }),
    getSingleDonation: builder.query({
      query: (id) => {
        return {
          url: `/donation/${id}`,
          method: "GET",
        };
      },
      providesTags: ["donation"],
    }),
    postDonation: builder.mutation({
      query: (data) => ({
        url: "/donation",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["donation"],
    }),
    deleteDonation: builder.mutation({
      query: (id) => {
        return {
          url: `/donation/${id}`,
          method: "DELETE",
          credentials: "include",
        };
      },
      invalidatesTags: ["donation"],
    }),
  }),
});

export const {
  useGetDonationsQuery,
  useGetSingleDonationQuery,
  usePostDonationMutation,
  useDeleteDonationMutation,
} = donationApi;
