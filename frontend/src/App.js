// import logo from './logo.svg';
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import './App.css';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
// Pages Import
import HomePage from "./Pages/Homepage"
import Footer from "./Components/Footer/footer"
const App = () => {
 
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];


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


      <h1 className="our_impact" ><b>OUR IMPACT</b></h1>
      
      <div className="our_impact_outerdiv" >
      

      <a href="#" >
      <div className="hover_effect1 " >
        <b>Learn More</b>
      </div>
      </a>
      
      <div className="our_impact_div1" >
        <div className="our_impact_div11 our_impact_innerdiv"><b>25K</b><br/>Students</div>
        <div className="our_impact_div12 our_impact_innerdiv" ><b>25K</b><br/>Students</div>
        <div className="our_impact_div13 our_impact_innerdiv" ><b>25K</b><br/>Students</div>
        <div className="our_impact_div14 our_impact_innerdiv" ><b>25K</b><br/>Students</div>
        <div className="our_impact_div15 our_impact_innerdiv" ><b>25K</b><br/>Students</div>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      </div>
      

      <a href="#" >
      <div className="hover_effect2 " >
        <b>Learn More</b>
      </div>
      </a>
      <div className="our_impact_div2" >
        {/*  */}
        
      
        <ResponsiveContainer width="100%" height="62%">
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#9844d8" />
        </PieChart>
      </ResponsiveContainer>

        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      </div>
   
      </div>


      <h1 className="our_community" ><b>OUR COMMUNITY</b></h1>
      
      <div className="our_community_outerdiv" >
      
      <div className="our_community_div1" >
       <a href="#" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9vJSpYrySadslLo4azrFIS4hJphw6DOsp1gQF0CH4HxyxldPsxlpOcE5wHocA_nScRk&usqp=CAU" >
      </img>
      </a>
      </div>
      

      <div className="our_community_div2" >
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
   
      </div>


    </Fragment>

  );
};

export default App;
