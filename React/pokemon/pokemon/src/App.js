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
      <ul>
        {
          pokemon.map((pok, i) => (
            <li key={i}> { pok.name }</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
