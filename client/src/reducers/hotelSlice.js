import { createSlice } from "@reduxjs/toolkit";

const initialState = {
}

export const hotelSlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {
        selectHotel(state, action) {
             state.hotel = action.payload;
        },
        selectSuite(state, action) {
            state.hotel.suite = action.payload;
        }
    }
})

export const { selectHotel, selectSuite } = hotelSlice.actions;

export default hotelSlice.reducer;