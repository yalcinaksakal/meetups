const { configureStore } = require("@reduxjs/toolkit");
import meetupsReducer from "./meetups-slice";

const store = configureStore({
  reducer: { meetups: meetupsReducer },
});
export default store;
