import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/api/v1"}),
    endpoints : (builder) => ({
        getHotels: builder.query({
            query: () => "/hotels",
        }),
        getHotel: builder.query({
            query: (hotel_id) => `/hotels/${hotel_id}`,
        }),
    }),
});

export const { useGetHotelsQuery, useGetHotelQuery } = apiSlice;