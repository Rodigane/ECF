import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import hotelReducer from "../reducers/hotelSlice";
import suiteReducer from "../reducers/suiteSlice";
import reservationReducer from "../reducers/reservationSlice";
import userReducer from "../reducers/userSlice";

export const store = configureStore({
  reducer: {
    suite: suiteReducer,
    hotel: hotelReducer,
    reservation: reservationReducer,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
