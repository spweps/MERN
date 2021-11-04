
import './App.css';
import React from "react"
import axios from "axios"
import { Routes, Route, Link } from "react-router-dom";
import Person from "./Components/Person"
import Planet from "./Components/Planet"
import Starship from "./Components/Starship"
import Weapon from "./Components/Weapon"

function App() {
  const fetchapi = () => axios.get("https://swapi.dev/api/")
            .then(response => {
                console.log(response);
            }).catch(err=>{
                console.log(err);
            })
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        
        <Route path="person" element={<Person />} />
        <Route path="planet" element={<Planet />} />
        <Route path="starship" element={<Starship />} />
        <Route path="weapon" element={<Weapon />} />
      </Routes>
    </div>
  );
}

export default App;
