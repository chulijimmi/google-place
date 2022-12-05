import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: {
    name: "light"
  }
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    themeToogled(state) {
      state.theme.name = state.theme.name === "light" ? "dark" : "light";
    }
  }
});

export const { themeToogled } = settingSlice.actions;

export default settingSlice.reducer;
