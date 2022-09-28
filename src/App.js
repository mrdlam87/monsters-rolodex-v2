import { useContext, Fragment } from "react";
import { MonstersContext } from "./contexts/monsters.context";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const { filteredMonsters, favouriteMonsters, setSearchField } =
    useContext(MonstersContext);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

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
