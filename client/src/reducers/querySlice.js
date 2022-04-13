import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const initialState = {
  queryState: null,
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    query(state, action) {
      state.queryState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.updateSuite.matchFulfilled,
      (state, action) => {
        console.log("fulfilled", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.updateSuite.matchRejected,
      (state, action) => {
        console.log("error", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.deleteSuite.matchFulfilled,
      (state, action) => {
        console.log("fulfilled", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.deleteSuite.matchRejected,
      (state, action) => {
        console.log("error", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.contact.matchFulfilled,
      (state, action) => {
        console.log("fulfilled", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.contact.matchRejected,
      (state, action) => {
        console.log("error", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.createReservation.matchFulfilled,
      (state, action) => {
        console.log("fulfilled", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.createReservation.matchRejected,
      (state, action) => {
        console.log("error", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.deleteReservation.matchFulfilled,
      (state, action) => {
        console.log("fulfilled", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.deleteReservation.matchRejected,
      (state, action) => {
        console.log("error", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.updateHotel.matchFulfilled,
      (state, action) => {
        console.log("fulfilled", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.updateHotel.matchRejected,
      (state, action) => {
        console.log("error", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.deleteHotel.matchFulfilled,
      (state, action) => {
        console.log("fulfilled", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.deleteHotel.matchRejected,
      (state, action) => {
        console.log("error", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.createManager.matchFulfilled,
      (state, action) => {
        console.log("fulfilled", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.createManager.matchRejected,
      (state, action) => {
        console.log("error", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.updateManager.matchFulfilled,
      (state, action) => {
        console.log("fulfilled", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.updateManager.matchRejected,
      (state, action) => {
        console.log("error", action.payload);
        state.queryState = action.payload.status;
      }
    );
    builder.addMatcher(
      apiSlice.endpoints.login.matchRejected,
      (state, action) => {
        console.log("error", action.payload);
        state.queryState = action.payload.status;
      }
    );
  },
});

export const { query } = querySlice.actions;

export default querySlice.reducer;
