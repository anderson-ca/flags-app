import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav.js';
import Flags from './components/Flags.js'
import About from './components/About.js'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" />
        <Route path="/about" component={About} />
        <Route path="/flags" component={Flags} />
      </Switch>
    </div>
  );
}

export default App;
