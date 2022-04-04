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
    deleteSuite: builder.mutation({
      query(suite_id) {
        return {
          url: `/suites/suite/${suite_id}`,
          method: "DELETE",
        };
      },
    }),
    updateSuite: builder.mutation({
      query(data) {
        const { suite_id, ...body } = data;
        return {
          url: `/suites/suite/${suite_id}`,
          method: "PUT",
          body,
        };
      },
    }),
    createSuite: builder.mutation({
      query(data) {
        const { hotel_id, body } = data;
        return {
          url: `/suites/${hotel_id}`,
          method: "POST",
          body,
        };
      },
    }),
    getReservations: builder.query({
      query: (suite_id) => `/reservations/${suite_id}`,
    }),
    createReservation: builder.mutation({
      query(data) {
        const { suite_id, customer_id, body } = data;
        return {
          url: `/reservations/${suite_id}/${customer_id}`,
          method: "POST",
          body,
        };
      },
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
  useUpdateSuiteMutation,
  useCreateSuiteMutation,
  useDeleteSuiteMutation,
  useGetReservationsQuery,
  useCreateReservationMutation,
} = apiSlice;
