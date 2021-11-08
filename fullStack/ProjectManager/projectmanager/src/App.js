import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Manager</h1><br></br>
        <form>
          <input type="text" value="Title">Title</input><br></br>
          <input type="text" value="Price">Price</input><br></br>
          <input type="text" value="Description">Description</input><br></br>
          <button type="submit">Create</button>
        </form>
      </header>
    </div>
  );
}

export default App;
