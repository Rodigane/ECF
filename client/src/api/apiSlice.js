import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/api/v1" }),

  tagTypes: ["Hotel", "Suite", "Reservation", "Manager"],
  endpoints: (builder) => ({
    getHotels: builder.query({
      query: () => "/hotels",
      providesTags: ["Hotel"],
    }),
    getHotel: builder.query({
      query: (hotel_id) => `/hotels/${hotel_id}`,
      providesTags: ["Hotel"],
    }),
    updateHotel: builder.mutation({
      query: (data) => {
        const { hotel_id, ...body } = data;
        return {
          url: `/hotels/${hotel_id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Hotel"],
    }),
    createHotel: builder.mutation({
      query: (data) => {
        const { body } = data;
        return {
          url: "/hotels",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Hotel"],
    }),
    deleteHotel: builder.mutation({
      query: (hotel_id) => {
        return {
          url: `/hotels/${hotel_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Hotel"],
    }),
    getSuites: builder.query({
      query: (hotel_id) => `/suites/${hotel_id}`,
      providesTags: ["Suite"],
    }),
    getSuite: builder.query({
      query: (suite_id) => `/suites/suite/${suite_id}`,
      providesTags: ["Suite"],
    }),
    deleteSuite: builder.mutation({
      query: (suite_id) => {
        return {
          url: `/suites/suite/${suite_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Suite"],
    }),
    updateSuite: builder.mutation({
      query: (data) => {
        const { suite_id, ...body } = data;
        return {
          url: `/suites/suite/${suite_id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Suite"],
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
      invalidatesTags: ["Suite"],
    }),
    getReservations: builder.query({
      query: (suite_id) => `/reservations/${suite_id}`,
      providesTags: ["Reservation"],
    }),
    createReservation: builder.mutation({
      query: (data) => {
        const { suite_id, user_id, token, body } = data;
        return {
          headers: { Authorization: `Bearer ${token}` },
          url: `/reservations/${suite_id}/${user_id}`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Reservation"],
    }),
    getCustomerReservations: builder.query({
      query: (data) => {
        const { customer_id, token } = data;
        return {
          headers: { Authorization: `Bearer ${token}` },
          url: `/reservations/customer/${customer_id}`,
          method: "GET",
        };
      },
      providesTags: ["Reservation"],
    }),
    deleteReservation: builder.mutation({
      query: (data) => {
        const { reservation_id, token } = data;
        return {
          headers: { Authorization: `Bearer ${token}` },
          url: `/reservations/${reservation_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Reservation"],
    }),
    getCustomer: builder.query({
      query: (data) => {
        const { user_id, token } = data;
        return {
          headers: { Authorization: `Bearer ${token}` },
          url: `/customers/${user_id}`,
          method: "GET",
        };
      },
      invalidatesTags: ["Reservation"],
    }),
    createCustomer: builder.mutation({
      query: (data) => {
        const { body } = data;
        return {
          url: `/customers`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Reservation"],
    }),
    createManager: builder.mutation({
      query: (data) => {
        const { body } = data;
        return {
          url: `/managers`,
          method: "POST",
          body,
        };
      },
      providesTags: ["Manager"],
    }),
    getManagers: builder.query({
      query: () => "/managers",
      providesTags: ["Manager"],
    }),
    updateManager: builder.mutation({
      query: (data) => {
        const { user_id, ...body } = data;
        return {
          url: `/managers/manager/${user_id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Manager"],
    }),
    deleteManager: builder.mutation({
      query: (user_id) => {
        return {
          url: `/managers/manager/${user_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Manager"],
    }),
    login: builder.mutation({
      query: (data) => {
        const { body } = data;
        return {
          url: "/login",
          method: "POST",
          body,
        };
      },
    }),
    contact: builder.mutation({
      query: (data) => {
        const { body } = data;
        return {
          url: "/contact",
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
  useDeleteReservationMutation,
  useGetCustomerReservationsQuery,
  useGetCustomerQuery,
  useCreateCustomerMutation,
  useCreateManagerMutation,
  useDeleteManagerMutation,
  useUpdateManagerMutation,
  useGetManagersQuery,
  useLoginMutation,
  useContactMutation,
} = apiSlice;
