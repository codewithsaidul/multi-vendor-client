import { baseApi } from "../baseAPi/baseApi";

export const vendorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVendors: builder.query({
      query: ( { page, limit, search } ) => `/vendors?page=${page}&limit=${limit}&q=${search}`,
      transformResponse: (response) => response.data,
      providesTags: ["Vendors"],
    }),
    getVendorById: builder.query({
      query: (id) => `/vendors/${id}`,
    }),
    createVendor: builder.mutation({
      query: (vendor) => ({
        url: "/vendors",
        method: "POST",
        body: vendor,
      }),
    }),
    updateVendorStatus: builder.mutation({
      query: ({ id, ...vendor }) => ({
        url: `/vendors/${id}`,
        method: "PUT",
        body: vendor,
      }),
    }),
    deleteVendor: builder.mutation({
      query: (id) => ({
        url: `/vendors/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetVendorsQuery,
  useGetVendorByIdQuery,
  useCreateVendorMutation,
  useUpdateVendorStatusMutation
} = vendorApi;
