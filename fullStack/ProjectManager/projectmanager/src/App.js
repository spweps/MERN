import React, { useState } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [title, setTitle] = useState ("Title")
  const [price, setPrice] = useState ("Price")
  const [description, setDescription] = useState ("Description")
  const onSubmit = (e) => {
    e.preventDefault ()
      axios.post("http://localhost:8000/api/project", {title, price, description})
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Manager</h1>
        <form onSubmit={onSubmit}>
          <input onChange={(e)=>{setTitle(e.target.value)}} type="text" value={title}/>
          <input onChange={(e)=>{setPrice(e.target.value)}}type="text" value={price}/>
          <input onChange={(e)=>{setDescription(e.target.value)}}type="text" value={description}/>
          <button type="submit">Create</button>
        </form>
      </header>
    </div>
  );
}

export default App;
