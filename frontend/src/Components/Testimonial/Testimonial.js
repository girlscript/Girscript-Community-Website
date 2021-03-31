import React from "react";
import Cards from "./Card1";
import image from "../../images/bg.png";
import "./Testimonial.css";
const Testimonial = () =>{
    return(
<div className="testimonial" style={{backgroundImage:`url(${image})`}}>
    <div className= "our-mission">Our Mission</div>
    <div className="our-test">Our Testimonial</div>
    <Cards />
</div>
    )
}
export default Testimonial