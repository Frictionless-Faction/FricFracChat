import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Chat from "./pages/Chat";
import About from "./pages/About";
import Home from './pages/Home';

function App(){
  return(
    <Router>
      <div className="container">
      </div>
      <Switch>
        <Route path= "/" exact component={Home} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;