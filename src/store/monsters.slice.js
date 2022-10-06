import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  monsters: [],
  favouriteMonsterIds: [],
  searchField: "",
};

const monstersSlice = createSlice({
  name: "monstersSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setMonsters(state, action) {
      state.monsters = action.payload;
    },

    setSearchField(state, action) {
      state.searchField = action.payload;
    },
    addFavourite(state, action) {
      state.favouriteMonsterIds = [
        ...state.favouriteMonsterIds,
        action.payload.id,
      ];
    },
    removeFavourite(state, action) {
      state.favouriteMonsterIds = state.favouriteMonsterIds.filter(
        (id) => id !== action.payload.id
      );
    },
    toggleFavourite(state, action) {
      const isFave = state.favouriteMonsterIds.includes(action.payload.id);
      state.favouriteMonsterIds = isFave
        ? state.favouriteMonsterIds.filter((id) => id !== action.payload.id)
        : [...state.favouriteMonsterIds, action.payload.id];
    },
  },
});

export const {
  setMonsters,
  setSearchField,
  addFavourite,
  removeFavourite,
  toggleFavourite,
} = monstersSlice.actions;

export default monstersSlice.reducer;
