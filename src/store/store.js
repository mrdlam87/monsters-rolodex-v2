import { configureStore } from "@reduxjs/toolkit";
import monstersReducer from "./monsters.slice";
import { loggerMiddleware } from "./logger";

export const store = configureStore({
  reducer: {
    monstersSlice: monstersReducer,
  },
  middleware: [loggerMiddleware],
});
