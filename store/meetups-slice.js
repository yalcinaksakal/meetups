import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meetups: [],
  isLoaded: false,
};

const meetupsSlice = createSlice({
  name: "meetups",
  initialState,
  reducers: {
    addMeetup(state, action) {},
    toogleFav(state, action) {
      const index = state.meetups.findIndex(
        meetup => meetup._id === action.payload
      );
      state.meetups[index].isFav = !state.meetups[index].isFav;
    },
    setMeetups(state, action) {
      state.meetups = [...action.payload];
      state.isLoaded = true;
    },
  },
});

// id={meetup._id}
// image={meetup.image}
// title={meetup.title}
// address={meetup.address}
// isFav={meetup.isFav}

export const meetupsSliceActions = meetupsSlice.actions;
export default meetupsSlice.reducer;
