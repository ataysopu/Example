import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { setAuthenticated } = authSlice.actions;
export const selectAuthState = (state) => state.auth.isAuthenticated;
export default authSlice.reducer;
