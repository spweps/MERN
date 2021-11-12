
import './App.css';
import ListAuthors from './components/ListAuthors';
import NewAuthor from './components/NewAuthor';
import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Update from "./views/Update"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/authors" component={ListAuthors} />
          <Route path="/authors/new" component={NewAuthor}/>
          <Route path="/authors/:id/edit" component={Update}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
