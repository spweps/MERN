import './App.css';
import ListPirates from './components/ListPirates';
import NewPirate from './components/NewPirate';
import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Update from "./views/Update"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={ListPirates}/>
          <Route path="/pirates/" component={ListPirates} />
          <Route path="/pirates/new" component={NewPirate}/>
          <Route path="/pirates/:id/edit" component={Update}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
