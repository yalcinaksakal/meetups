import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meetups: [],
  numberOfFavs: 0,
  isLoaded: false,
};

const meetupsSlice = createSlice({
  name: "meetups",
  initialState,
  reducers: {
    addMeetup(state, action) {
      state.meetups.push(action.payload);
    },
    toogleFav(state, action) {
      const index = state.meetups.findIndex(
        meetup => meetup._id === action.payload
      );
      state.numberOfFavs += state.meetups[index].isFav ? -1 : 1;
      state.meetups[index].isFav = !state.meetups[index].isFav;
    },
    setMeetups(state, action) {
      state.meetups = [...action.payload];
      state.isLoaded = true;
      state.numberOfFavs = state.meetups.filter(meetup => meetup.isFav).length;
    },
  },
});

export const meetupsSliceActions = meetupsSlice.actions;
export default meetupsSlice.reducer;
