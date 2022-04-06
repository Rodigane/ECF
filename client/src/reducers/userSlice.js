import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const initialState = {
  user: {
    customer_id: null,
    name: null,
    first_name: null,
    email: null,
  },
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.login.matchFulfilled,
      (state, action) => {
        console.log("fulfilled", action.payload);
        state.token = action.payload.tokens.accessToken;
        state.user = {
          customer_id: action.payload.customers.customer_id,
          name: action.payload.customers.name,
          first_name: action.payload.customers.first_name,
          email: action.payload.customers.email,
        };
      }
    );
  },
});

export const { setCredentials } = userSlice.actions;

export default userSlice.reducer;
