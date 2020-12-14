import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header.js';
import Main from './components/Main.js';
import Teams from './components/Teams.js';
import Projects from './components/Projects.js';
import Explore from './components/Explore.js'
import Footer from './components/Footer.js';
import headerLogo from './images/logo.svg';

function App() {
  return (
    <>
      <Header
        headerLogo={headerLogo}
      />
      <Switch>
        <Route exact path="/">
          <Main
          />
        </Route>
        <Route path="/teams">
          <Teams />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />
      <Route path="/explore">
        <Explore
          headerLogo={headerLogo}
        />
      </Route>
    </>
  );
}

export default App;
