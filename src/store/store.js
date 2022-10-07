import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import monstersReducer from "./monsters.slice";
import { loggerMiddleware } from "./logger";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    monstersSlice: monstersReducer,
  })
);

const middleWares = [
  process.env.NODE_ENV !== "production" && loggerMiddleware,
].filter(Boolean);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
});

export const persistor = persistStore(store);
