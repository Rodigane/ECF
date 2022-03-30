import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

export const suiteSlice = createSlice({
    name: "suite",
    initialState,
    reducers: {
        selectSuite(state, action) {
            state.suite = action.payload;
        }
    }
})

export const {  selectSuite } = suiteSlice.actions;

export default suiteSlice.reducer;