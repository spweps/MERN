import logo from './logo.svg';
import './App.css';
import ListAuthors from './components/ListAuthors';
import NewAuthor from './components/NewAuthor';
import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { updateExistingAuthor } from '../../server/controllers/author.controller';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ListAuthors} />
          <Route path="/new" component={NewAuthor}/>
          <Route path="/author/:id:ed" component={updateExistingAuthor}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
