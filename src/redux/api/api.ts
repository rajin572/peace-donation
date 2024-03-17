import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://peace-server-main.vercel.app/api/v1",
    credentials: "include",
  }),
  tagTypes: ["donation", "donor", "testiomial", "volunteer", "comment"],
  endpoints: () => ({}),
});
