import { useState, useEffect } from "react";

import './App.css'
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.component';

// Whenever the functional component re-renders it runs the code from top to bottom

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log('render');

  useEffect(() => {
    console.log("Fetch request")
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [])


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);

  }, [monsters, searchField])

  return (
    <div className="App">
      <h1 className="app-title">
        Monsters Rolodex
      </h1>
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search monsters' />
      <CardList monsters={filteredMonsters} />

    </div>
  )

}

export default App;