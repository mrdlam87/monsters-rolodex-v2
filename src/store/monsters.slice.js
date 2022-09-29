import { createSlice } from "@reduxjs/toolkit";

const toggleFavourite = (faveMonster, monsters) => {
  const updatedMonster = { ...faveMonster, isFave: !faveMonster.isFave };
  const updatedMonsters = [...monsters];
  updatedMonsters.splice(monsters.indexOf(faveMonster), 1, updatedMonster);
  return [...updatedMonsters];
};

const INITIAL_STATE = {
  monsters: [],
  searchField: "",
};

const monstersSlice = createSlice({
  name: "monsters",
  initialState: INITIAL_STATE,
  reducers: {
    setMonsters(state, action) {
      state.monsters = action.payload;
    },

    setSearchField(state, action) {
      state.searchField = action.payload;
    },
  },
});

export const { setMonsters, setSearchField } = monstersSlice.actions;

export const toggleFavouriteMonster = (faveMonster, monsters) =>
  setMonsters(toggleFavourite(faveMonster, monsters));

export default monstersSlice.reducer;
