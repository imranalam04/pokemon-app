import React from 'react';
import PokemonList from './components/PokemonList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Pokémon Gallery</h1>
      </header>
      <PokemonList />
    </div>
  );
}

export default App;