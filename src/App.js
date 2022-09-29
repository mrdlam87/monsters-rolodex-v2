import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { setMonsters, setSearchField } from "./store/monsters.slice";
import {
  selectFavouriteMonsters,
  selectFilteredMonsters,
} from "./store/monsters.selector";

const App = () => {
  const dispatch = useDispatch();
  const filteredMonsters = useSelector(selectFilteredMonsters);
  const favouriteMonsters = useSelector(selectFavouriteMonsters);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    dispatch(setSearchField(searchFieldString));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => dispatch(setMonsters(users)));
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
      {favouriteMonsters.length > 0 && (
        <>
          <h2 className="app-sub-title">Favourite Monsters</h2>
          <CardList monsters={favouriteMonsters} />
        </>
      )}
    </div>
  );
};

export default App;
