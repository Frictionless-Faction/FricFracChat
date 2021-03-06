import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './pages/Home';
import Chat from "./pages/Chat";
import About from "./pages/About";

function App(){
  return(
    <Router>
      <Switch>
        <Route path= "/" exact component={Home} />
        <Route path="/chat"  component={Chat} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;