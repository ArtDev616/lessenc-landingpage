import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getSiteRoot } from '../util/environment.js';
import HomePage from '../pages/home/HomePage.js';
import OurPeoplePage from '../pages/ourPeople/OurPeoplePage.js';
import OurMethodsPage from '../pages/ourMethods/OurMethodsPage.js';
import ResidentialTimelinePage from '../pages/residential/ResidentialTimelinePage.js';
import CommercialTimelinePage from '../pages/commercial/CommercialTimelinePage.js';

class Website extends Component {
  render() {
    return (
      <Router basename={getSiteRoot()}>
        <div className="Website">
          <Switch>
            <Route exact path="/(index|index.html?|)" component={HomePage} />
            <Route path="/ourPeople" component={OurPeoplePage} />
            <Route path="/ourMethods" component={OurMethodsPage} />
            <Route path="/residential" component={ResidentialTimelinePage} />
            <Route path="/commercial" component={CommercialTimelinePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Website;

// ./src/site/Website.js