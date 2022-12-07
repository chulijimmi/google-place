import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  search: "",
  places: [],
  visits: [],
  errorMessage: "",
  loading: false
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
      state.loading = true;
      state.places = [];
    },
    setPlaces(state, action) {
      state.errorMessage = "";
      state.places = action.payload.predictions;
      state.loading = false;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
      state.places = [];
      state.loading = false;
    },
    addVisits(state, action) {
      const visitPlace = { ...action.payload };
      visitPlace.id = uuidv4();
      state.visits.push(visitPlace);
      state.search = "";
      state.places = [];
    },
    removeVisits(state, action) {
      state.visits = state.visits.filter((i) => i.id !== action.payload.id);
    }
  }
});

export const {
  setSearch,
  setPlaces,
  setErrorMessage,
  addVisits,
  removeVisits
} = feedSlice.actions;

export default feedSlice.reducer;
