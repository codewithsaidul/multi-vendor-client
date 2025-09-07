import { ILogin, IResponse, IUser } from "@/types";
import { baseApi } from "../baseAPi/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IResponse<IUser>, ILogin>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});


export const { useLoginMutation } = authApi;



