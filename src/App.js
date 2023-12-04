import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-bar/search-bar.component";
import { useState, useEffect } from "react";
import { MiniWalletContainer } from '@fum-is-chum/scallop-mini-wallet'

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setValue], useState(initialState)
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log("render");

  // useEffect(callback, [states_to_trigger_callback])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name.toLocaleLowerCase().includes(searchField)
      )
    );
  }, [monsters, searchField]);

  const search = (event) => {
    // console.log("search");
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      {/* <h1 className="app-title">Monster Rolodex</h1> */}
      <MiniWalletContainer />
      {/* <SearchBar
        onSearchHandler={search}
        placeholder="search monsters"
        className="monsters search-bar"
      />
      {(() => {
        if (filteredMonsters.length > 0) {
          // show component only if array has elements
          return <CardList monsters={filteredMonsters} />;
        }
      })()} */}
    </div>
  );
};

export default App;
