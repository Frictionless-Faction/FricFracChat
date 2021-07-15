import { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme, GlobalStyles } from './Themes';

import Chat from "./pages/Chat";
import About from "./pages/About";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App(){
  let [theme, setTheme] = useState('light');
  let themeToggle = () => {
    theme === 'light' ? setTheme = ('dark') : setTheme ('light');
  };
  return(
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
    <GlobalStyles />
    <Router>
    <StyledApp> Hello World
    <button onClick={() => themeToggle()} >Change Theme</button>
     </StyledApp>
      <Switch>
        <Route path="/" exact component={Chat} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
    </ThemeProvider>
  );
};

export default App;