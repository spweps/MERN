import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import axios from 'axios';

function App() {
  const [pokemon, setpokemon] = useState([])

  const fetchapi = () => axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                console.log(response);
                setpokemon(response.data.results);
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
