import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const initialState = {
  user: {
    user_id: null,
    name: null,
    first_name: null,
    email: null,
    role: null,
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
          user_id: action.payload.users.user_id,
          name: action.payload.users.name,
          first_name: action.payload.users.first_name,
          email: action.payload.users.email,
          role: action.payload.users.role,
          hotel_id: action.payload.users.hotel_id,
        };
      }
    );
  },
});

export const { setCredentials } = userSlice.actions;

export default userSlice.reducer;
