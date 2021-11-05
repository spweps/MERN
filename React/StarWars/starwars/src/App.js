
import './App.css';
import React from "react"
import axios from "axios"
import { Routes, Route, Link } from "react-router-dom";
import Person from "./Components/Person"
import Planet from "./Components/Planet"
import Starship from "./Components/Starship"
import Weapon from "./Components/Weapon"
const arr=["Person", "Planet", "Starship", "Weapon"]

function App() {
  const fetchapi = () => axios.get("https://swapi.dev/api/")
            .then(response => {
                console.log(response);
            }).catch(err=>{
                console.log(err);
            })
  const starwars = (e) => {
    e.preventDefault ()
    console.log("it lives")
  }
  return (
    <div className="App">
      <div>
        <form onSubmit={starwars}>
          <select>{arr.map((item)=>{
                    return (<option value={item}>{item}</option>)
          })}</select>
          <input type="number"/>
          <input type="submit" value = "search"/>
        </form>
      </div>
      <h1>Welcome to the Dark Side...</h1>
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
