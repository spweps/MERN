import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"

function App() {
  const [pokemon, setpokemon] = useState([])

  const fetchapi = () => fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                return response.json();
            }).then(response => {
                console.log(response);
                setpokemon(response.results);
            }).catch(err=>{
                console.log(err);
            })
  return (
    <div className="App">
      <button onClick = {fetchapi}>Get Pokemon!</button>
      {
        pokemon.map((pok, i) => (
          <p key={i}> { pok.name }</p>
        ))
      }
    </div>
  );
}

export default App;
