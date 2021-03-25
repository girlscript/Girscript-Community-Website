import React from "react";
import Cards from "./Cards";
import image from "../images/bg.png";
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