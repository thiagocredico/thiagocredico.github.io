import React from 'react';
import './App.css';
// import Pokemon from './components/Pokemon';
import Pokedex from './components/Pokedex';
import pokemonList from './data';

class App extends React.Component {
  render() {
    return (
      // <h1>Exercise - Pokedex</h1>
      // <Pokemon />
      <div className="App">
        <Pokedex pokemonList={ pokemonList } />
      </div>
    );
  }
}

export default App;
