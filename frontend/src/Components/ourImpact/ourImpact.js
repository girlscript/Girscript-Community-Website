import "./ourImpact.css";
import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
const ourImpact = () => {
  
    const data01 = require("../../Test_data/ourImpactPiChartData.js").data01;
    return (
      <div> 
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
        
          <ResponsiveContainer width="100%" height="62%">
          <PieChart width={400} height={400}>
            <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#9844d8" />
          </PieChart>
        </ResponsiveContainer>
  
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
     
        </div>
        
        </div>
    );
  };
  export default ourImpact; 