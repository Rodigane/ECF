import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
   
}

export const hotelSlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {
        selectHotel(state, action) {
             state.hotel = action.payload;
        }
    }
})

export const { selectHotel } = hotelSlice.actions;

export default hotelSlice.reducer;