import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

//Styles
import "./../sass/components/NavigationComponent.scss";

//Views
import Home from "../views/HomeView";
import PastTrials from "../views/PastTrialsView";
import HowItWorks from "../views/HowItWorksView";

function Navigation() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="nav-bar">
          <div className="anchor-to-home">
            <Link to="/">Rule of Thumb</Link>
          </div>
          <ul>
            <li><Link to="/past-trials">Past Trials</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/#">Log In / Sign Up</Link></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/past-trials">
          <PastTrials />
        </Route>
        <Route path="/how-it-works">
          <HowItWorks />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Navigation;