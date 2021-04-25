// import logo from './logo.svg';
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import './App.css';
import React, { PureComponent } from 'react';
// Pages Import

import HomePage from "./Pages/Homepage";
import Footer from "./Components/Footer/footer";
import Home from './Components/Home/Home';
import About from './Components/Common/About';
import Eventsection from './Components/EventSection/EventSection';
import OurPrograms from './Components/OurPrograms/OurPrograms';
import OurCommunity from './Components/OurCommunity/OurCommunity';
import OurImpact from './Components/OurImpact/OurImpact';


const App = () => {
  return (
    <Fragment>
      <div className="Container">
        <Router>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/eventsection" component={Eventsection} />
            <Route exact path="/ourprograms" component={OurPrograms} />
            <Route exact path="/ourcommunity" component={OurCommunity} />
            <Route exact path="/ourimpact" component={OurImpact} />

          </Switch>
          <ourImpact/>
          <Footer/>
        </Router>
      </div>
    </Fragment>

  );
};

export default App;
