import { baseApi } from "../baseAPi/baseApi"




export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => ({
                url: "/users/profile",
                method: "GET",
            }),
            providesTags: ["User Profile"],
            transformResponse: (response) => response.data,
        }),
    })
})


export const { useGetProfileQuery } = userApi;