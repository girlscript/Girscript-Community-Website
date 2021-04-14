// import logo from './logo.svg';
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import './App.css';
// Pages Import

import HomePage from "./Pages/Homepage"
import Footer from "./Components/Footer/footer"
const App = () => {
  return (
    <Fragment>
      <div className="Container">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
  
          </Switch>
          <Footer/>
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
