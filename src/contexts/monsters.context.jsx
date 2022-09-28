import { createContext, useEffect, useState } from "react";

const toggleFavourite = (faveMonster, monsters) => {
  faveMonster.isFave = !faveMonster.isFave;
  return [...monsters];
};

const getFavourites = (monsters) =>
  monsters.filter((monster) => monster.isFave);

export const MonstersContext = createContext({
  monsters: [],
  filteredMonsters: [],
  favouriteMonsters: [],
  toggleFaveMonsters: () => {},
  searchField: "",
  setSearchField: () => {},
});

export const MonstersProvider = ({ children }) => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [favouriteMonsters, setFavouriteMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const toggleFavouriteMonster = (faveMonster) => {
    setMonsters(toggleFavourite(faveMonster, monsters));
    setFavouriteMonsters(getFavourites(monsters));
  };

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
