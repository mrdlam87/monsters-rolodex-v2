import { configureStore } from "@reduxjs/toolkit";
import monstersReducer from "./monsters.slice";
import { loggerMiddleware } from "./logger";

const middleWares = [
  process.env.NODE_ENV !== "production" && loggerMiddleware,
].filter(Boolean);

export const store = configureStore({
  reducer: {
    monstersSlice: monstersReducer,
  },
  middleware: middleWares,
});
