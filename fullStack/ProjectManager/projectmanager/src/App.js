import React, { useState } from 'react';
//import './App.css';
import axios from "axios";
import ProjectList from './components/ProjectList';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './views/Main';
import Details from './views/Details';

function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/projects/">
          <Main />
        </Route>
        <Route path="project/:id">
          <Detail />
        </Route>
        <Route path="/project/:id:edit">
          <Update />
        </Route>
        <header className="App-header">
          <h1>Project Manager</h1>
        </header>
        <ProjectList/>
      </div>
    </BrowserRouter>
  );
}

export default App;
