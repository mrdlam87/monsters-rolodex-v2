import { configureStore } from "@reduxjs/toolkit";
import monstersReducer from "./monsters.slice";

export const store = configureStore({
  reducer: {
    monsters: monstersReducer,
  },
});
