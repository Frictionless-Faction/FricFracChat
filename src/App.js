import { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './Themes';

import Chat from "./pages/Chat";
import About from "./pages/About";

function App(){
  const [theme, setTheme] = useState('light');
  const themeToggle = () => {
    theme === 'light' ? setTheme = ('dark') : setTheme ('light');
  }
  return(
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
    <Router>
      <div className="container">
      </div>
      <Switch>
        <Route path="/" exact component={Chat} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
    </ThemeProvider>
  );
};

export default App;