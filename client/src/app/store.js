import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import hotelReducer from "../reducers/hotelSlice";
import suiteReducer from "../reducers/suiteSlice";

export const store = configureStore({
  reducer: {
    suite: suiteReducer,
    hotel: hotelReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
