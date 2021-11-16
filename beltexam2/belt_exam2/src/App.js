import './App.css';
import ListPets from './components/ListPets';
import NewPet from './components/NewPet';
import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Update from "./views/Update"
import Details from "./views/Details"


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={ListPets}/>
          <Route exact path="/pets/" component={ListPets} />
          <Route exact path="/pets/new" component={NewPet}/>
          <Route exact path="/pets/details/:id" component={Details}/>
          <Route exact path="/pets/:id/edit" component={Update}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
