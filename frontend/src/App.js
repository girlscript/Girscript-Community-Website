
import image from './images/image1.png';
import Card from 'react-bootstrap/Card';
import {Button, Container} from 'react-bootstrap';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
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
    <>
      <h1>
        <br></br>
      </h1>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Text className="image1-content">
          <img  src={image} width="700" height="400" alt="logo"/>
          <br></br>
          <Jumbotron fluid >
            <Container>
            <div className="dashes dash-card">   
              <br>
              </br>
              <br>
              </br>
              <br>
              </br>
            </div>
            </Container>
          </Jumbotron>
          
          </Card.Text>
        </Card.Body>

        <Jumbotron fluid >
          <Container className="text-card">
            <h1>HELP STUDENTS SUCCEED IN TECH</h1>
            <br />
            
            <h2>We support newbies</h2>
            <Button className="button-class">Join us</Button>
          </Container>
        </Jumbotron>

      </Card>
    </>
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
