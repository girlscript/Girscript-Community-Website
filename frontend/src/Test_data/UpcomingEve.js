import React from 'react';
import image1 from "./../images/event1.jpeg";
import image2 from "./../images/event2.jpeg";
import image3 from "./../images/event3.jpg";
import image4 from "./../images/event4.jpg";
import image5 from "./../images/event5.jpg";
import Col from 'react-bootstrap/Col';
import CardTemplate from "./../Components/Upcomingeve/CardTemplate"

const up_details = [{
    image_used:image1,
    title: "Speed Designing with Canva",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content."
},

{
    image_used:image2,
    title: "Getting Started with GitHub",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content."
    
},

{
    image_used:image3,
    title: "Getting Started with Graphs in java",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content."
},

]
const pst_details = [{
    image_used:image4,
    title: "Web Devlpopment Bootcamp",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content."
},

{
    image_used:image5,
    title: "Hactober Fest",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content."
    
},


]




 const cards1 = up_details.map(val =>{
   // console.log(val.comma);
    return(
     <Col>   
        <CardTemplate image_used={val.image_used} title={val.title} description={val.description}></CardTemplate>
    </Col>
    )

})

const cards2 = pst_details.map(val =>{
    // console.log(val.comma);
     return(
      <Col>   
         <CardTemplate image_used={val.image_used} title={val.title} description={val.description}></CardTemplate>
     </Col>
     )
 
 })
export default cards1;
export {cards2};