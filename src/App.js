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
    <div>
      <MiniWalletContainer />
      <div className="App">
        <h1 className="app-title">Don't send any real fund to connected address.</h1>
      </div>
    </div>
  );
};

export default App;
