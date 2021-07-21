import React from "react";
// import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";
// import GetInfo from "./Components/GetInfo";
// import {UpdateInfoP1} from "./components/UpdateInfo";
// import QuickUpdate from "./Components/QuickUpdate";



function App(){
  return(
    // <AuthProvider>
      <Router>
          <div className="container">
          </div>
          <Switch>
            <Route path= "/" exact component={Home} />
            <Route path="/chat"  component={Chat} />
            <Route path="/about" component={About} />
            {/* <Route path="/update" component={UpdateInfoP1} /> */}
            {/* <Route path="/update" component={UpdateInfoP2} /> */}
            {/* <Route path="/get" component={GetInfo} />
            <Route path="/quick" component={QuickUpdate} /> */}
          </Switch>
      </Router>
    // </AuthProvider>
  );
};

export default App;