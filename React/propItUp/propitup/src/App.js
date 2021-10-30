import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/PersonCard'
import React from "react"

function App() {
  return (
    <div className="App">
        <div>
          <PersonCard firstName="Jane" lastName="Doe" age={50} hairColor="brown"/>
          <PersonCard firstName="Philip" lastName="Bryan" age={24} hairColor="black"/>
          <PersonCard firstName="John" lastName="Smithe" age={75} hairColor="grey"/>
          <PersonCard firstName="Mary" lastName="Jane" age={36} hairColor="blonde"/>
        </div>
    </div>);
  }

export default App;


