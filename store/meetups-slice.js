import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meetups: [],
};

const meetupsSlice = createSlice({
  name: "meetups",
  initialState,
  reducers: {
    addMeetup(state, action) {},
    toogleFav(state, action) {},
    setMeetups(state, action) {
      state.meetups = [...action.payload];
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
