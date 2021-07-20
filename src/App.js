import React from "react";
// import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";
import UpdateInfoP1 from "./pages/UpdateInfo";
import { AuthProvider } from "./contexts/AuthContext";


function App(){
  return(
    <AuthProvider>
      <Router>
        <div className="container">
        </div>
        <Switch>
          <Route path= "/" exact component={Home} />
          <Route path="/chat"  component={Chat} />
          <Route path="/about" component={About} />
          <Route path="/update" component={UpdateInfoP1} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;