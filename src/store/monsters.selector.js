export const selectMonsters = (state) => state.monsters.monsters;

export const selectFilteredMonsters = (state) =>
  state.monsters.monsters.filter((monster) =>
    monster.name.toLowerCase().includes(state.monsters.searchField)
  );

export const selectFavouriteMonsters = (state) =>
  state.monsters.monsters.filter((monster) => monster.isFave);
