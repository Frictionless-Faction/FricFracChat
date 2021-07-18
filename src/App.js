import React from "react";
// import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";
import Update from "./pages/UpdateProfile";

function App(){
  return(
    <Router>
      <div className="container">
      </div>
      <Switch>
        <Route path= "/" exact component={Home} />
        <Route path="/chat"  component={Chat} />
        <Route path="/about" component={About} />
        <Route path="/update" component={Update} />
      </Switch>
    </Router>
  );
};

export default App;