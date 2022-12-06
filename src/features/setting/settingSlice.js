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
    },
    setTheme(state, action) {
      state.theme.name = action.payload;
    }
  }
});

export const { themeToogled, setTheme } = settingSlice.actions;

export default settingSlice.reducer;
