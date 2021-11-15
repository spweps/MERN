import './App.css';
import ListPirates from './components/ListPirates';
import NewPirate from './components/NewPirate';
import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Update from "./views/Update"
import Details from "./views/Details"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ListPirates}/>
          <Route exact path="/pirates/" component={ListPirates} />
          <Route exact path="/pirates/new" component={NewPirate}/>
          <Route exact path="/pirates/details/:id" component={Details}/>
          <Route exact path="/pirates/:id/edit" component={Update}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
