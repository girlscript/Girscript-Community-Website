// import logo from './logo.svg';
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import './App.css';
<<<<<<< HEAD
import Testimonial from './Components/Testimonial/Testimonial';
=======
// Pages Import
>>>>>>> 12edc35ff53130389739aac070996b762f41a7c6

import HomePage from "./Pages/Homepage"
const App = () => {
  return (
    <Fragment>
      <div className="Container">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
