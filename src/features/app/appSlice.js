import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPing: true
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    ping: (state, action) => {
      state.isPing = action.payload;
    },
    pong: (state, action) => {
      state.isPing = action.payload;
    }
  }
});

export const { ping, pong } = appSlice.actions;

export default appSlice.reducer;
