import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    selectReservation(state, action) {
      state.reservation = action.payload;
    },
  },
});

export const { selectReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
