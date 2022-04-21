import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLocation(state, action) {
      state.auth = action.payload;
    },
    resetLocation: () => initialState,
  },
});

export const { userLocation, resetLocation } = authSlice.actions;

export default authSlice.reducer;
