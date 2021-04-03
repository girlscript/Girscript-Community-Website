import React from "react"
import ocomma from "./../images/ocomma.png";
import scomma from "./../images/scomma.png";
import andrea from "./../images/andrea.png";
import Cardtemplate from "./../Components/Testimonial/Cardtemplate"
const details = [{
    comma:ocomma,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    imgurl:andrea,
    name:"Andrea Cloe",
    textcolor:"black",
    bgcolor:"white"
},

{
    comma:scomma,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imgurl:andrea,
    name:"Andrea Cloe",
    textcolor:"#FFC6A6",
    bgcolor:"#FF5200"
},

{
    comma:ocomma,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    imgurl:andrea,
    name:"Andrea Cloe",
    textcolor:"black",
    bgcolor:"white"
},
]

const ccard = details.map(val =>{
    console.log(val.comma);
    return(<Cardtemplate comma={val.comma}  description={val.description} imgurl={val.imgurl}  name={val.name} textcolor={val.textcolor} bgcolor={val.bgcolor}></Cardtemplate>)
})
export default ccard;