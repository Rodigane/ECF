import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLocation(state, action) {
      state.auth = action.payload;
    },
  },
});

export const { userLocation } = authSlice.actions;

export default authSlice.reducer;
