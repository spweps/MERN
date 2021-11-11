import logo from './logo.svg';
import './App.css';
import ListAuthors from './components/ListAuthors'
import NewAuthor from './components/NewAuthor'
import * as React from "react";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ListAuthors} />
        <Route path="/new" component={NewAuthor}/>
      </Switch>
    </div>
  );
}

export default App;
