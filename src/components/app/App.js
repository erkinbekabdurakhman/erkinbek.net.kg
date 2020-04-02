import React from 'react';
import {BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import {HomePage, AboutmePage, SkillsPage, PortfolioPage, ContactsPage} from '../pages';


class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/contacts">
            <ContactsPage />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route path="/skills">
            <SkillsPage />
          </Route>
          <Route path="/aboutme">
            <AboutmePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
