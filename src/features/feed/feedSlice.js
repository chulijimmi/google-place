import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  places: [],
  visits: []
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setPlaces(state, action) {
      state.places = action.payload;
    },
    addVisit(state, action) {
      state.visits.push(action.payload);
    }
  }
});

export const { setSearch, setPlaces, addVisit } = feedSlice.actions;

export default feedSlice.reducer;
