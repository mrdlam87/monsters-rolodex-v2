import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const toggleFavourite = (faveMonster, monsters) => {
  faveMonster.isFave = !faveMonster.isFave;
  return [...monsters];
};

const getFavourites = (monsters) =>
  monsters.filter((monster) => monster.isFave);

const MONSTER_ACTION_TYPES = {
  SET_MONSTERS: "SET_MONSTERS",
  SET_FILTERED_MONSTERS: "SET_FILTERED_MONSTERS",
  SET_FAVOURITE_MONSTERS: "SET_FAVOURITE_MONSTERS",
  SET_SEARCH_FIELD: "SET_SEARCH_FIELD",
};

const INITIAL_STATE = {
  monsters: [],
  filteredMonsters: [],
  favouriteMonsters: [],
  searchField: "",
};

const montersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case MONSTER_ACTION_TYPES.SET_MONSTERS:
      return {
        ...state,
        monsters: payload,
      };
    case MONSTER_ACTION_TYPES.SET_FILTERED_MONSTERS:
      return {
        ...state,
        filteredMonsters: payload,
      };
    case MONSTER_ACTION_TYPES.SET_FAVOURITE_MONSTERS:
      return {
        ...state,
        favouriteMonsters: payload,
      };
    case MONSTER_ACTION_TYPES.SET_SEARCH_FIELD:
      return {
        ...state,
        searchField: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in monstersReducer`);
  }
};

export const MonstersContext = createContext({
  monsters: [],
  filteredMonsters: [],
  favouriteMonsters: [],
  toggleFavouriteMonster: () => {},
  searchField: "",
  setSearchField: () => {},
});

export const MonstersProvider = ({ children }) => {
  const [
    { monsters, filteredMonsters, favouriteMonsters, searchField },
    dispatch,
  ] = useReducer(montersReducer, INITIAL_STATE);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        dispatch(createAction(MONSTER_ACTION_TYPES.SET_MONSTERS, users))
      );
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    dispatch(
      createAction(
        MONSTER_ACTION_TYPES.SET_FILTERED_MONSTERS,
        newFilteredMonsters
      )
    );

    dispatch(
      createAction(
        MONSTER_ACTION_TYPES.SET_FAVOURITE_MONSTERS,
        getFavourites(monsters)
      )
    );
  }, [monsters, searchField]);

  const toggleFavouriteMonster = (faveMonster) => {
    dispatch({
      type: MONSTER_ACTION_TYPES.SET_MONSTERS,
      payload: toggleFavourite(faveMonster, monsters),
    });
  };

  const setSearchField = (input) =>
    dispatch(createAction(MONSTER_ACTION_TYPES.SET_SEARCH_FIELD, input));

  const value = {
    monsters,
    filteredMonsters,
    favouriteMonsters,
    searchField,
    setSearchField,
    toggleFavouriteMonster,
  };

  return (
    <MonstersContext.Provider value={value}>
      {children}
    </MonstersContext.Provider>
  );
};
