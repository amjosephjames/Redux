import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./components/global";

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
});
