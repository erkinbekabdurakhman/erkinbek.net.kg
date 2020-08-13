import React from 'react';
import {BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import {HomePage, AboutmePage, ProjectsPage, ContactsPage } from '../pages';
import ReactGA from 'react-ga';

import { createBrowserHistory } from 'history';

const trackingId = "UA-175187485-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);


const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/contacts" component={ContactsPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/aboutme" component={AboutmePage} />
        <Route exact path="/" component={HomePage} /> 
      </Switch>
    </Router>
  );
}

export default App;