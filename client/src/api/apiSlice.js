import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/api/v1" }),
  endpoints: (builder) => ({
    getHotels: builder.query({
      query: () => "/hotels",
    }),
    getHotel: builder.query({
      query: (hotel_id) => `/hotels/${hotel_id}`,
    }),
    updateHotel: builder.mutation({
      query(data) {
        const { hotel_id, ...body } = data;
        return {
          url: `/hotels/${hotel_id}`,
          method: "PUT",
          body,
        };
      },
    }),
    createHotel: builder.mutation({
      query(data) {
        const { body } = data;
        return {
          url: "/hotels",
          method: "POST",
          body,
        };
      },
    }),
    deleteHotel: builder.mutation({
      query(hotel_id) {
        return {
          url: `/hotels/${hotel_id}`,
          method: "DELETE",
        };
      },
    }),
    getSuites: builder.query({
      query: (hotel_id) => `/suites/${hotel_id}`,
    }),
    getSuite: builder.query({
      query: (suite_id) => `/suites/suite/${suite_id}`,
    }),
  }),
});

export const {
  useGetHotelsQuery,
  useGetHotelQuery,
  useUpdateHotelMutation,
  useCreateHotelMutation,
  useDeleteHotelMutation,
  useGetSuitesQuery,
  useGetSuiteQuery,
} = apiSlice;
