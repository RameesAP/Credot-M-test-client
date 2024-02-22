import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAdmin: null,
  error: null,
  loading: false,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    signInAdminStart: (state) => {
      state.loading = true;
    },
    signInAdminSuccess: (state, action) => {
      state.currentAdmin = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInAdminFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signInAdminStart, signInAdminSuccess, signInAdminFailure } = adminSlice.actions;

export default adminSlice.reducer;