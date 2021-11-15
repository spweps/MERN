import './App.css';
import ListVillain from './components/ListVillain';
import NewVillain from './components/NewVillain';
import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Update from "./views/Update"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Best Villains in History</h1>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Locale</td>
              <td>Accomplishments</td>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </BrowserRouter>
  );
}

export default App;
