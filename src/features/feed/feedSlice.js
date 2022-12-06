import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  places: [],
  visits: [],
  errorMessage: ""
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setPlaces(state, action) {
      state.places = action.payload.predictions;
      state.visits.push(action.payload.visited);
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    }
  }
});

export const { setSearch, setPlaces, setErrorMessage } = feedSlice.actions;

export default feedSlice.reducer;
