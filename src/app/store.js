import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./reducers/mailSlice";

const store = configureStore({
  reducer:{
    mail:mailReducer,
  },
});

export default store;