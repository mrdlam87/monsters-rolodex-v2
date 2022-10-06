export const selectMonsters = (state) => state.monstersSlice.monsters;

export const selectFilteredMonsters = (state) =>
  state.monstersSlice.monsters.filter((monster) =>
    monster.name.toLowerCase().includes(state.monstersSlice.searchField)
  );

export const selectFavouriteMonsters = (state) =>
  state.monstersSlice.monsters.filter((monster) =>
    state.monstersSlice.favouriteMonsterIds.includes(monster.id)
  );

export const selectFavouriteMonsterIds = (state) =>
  state.monstersSlice.favouriteMonsterIds;
