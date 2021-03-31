import React from 'react';
import Upcomingevents from './Upcomingevents';
import Pastevents from './Pastevents';
import "./Upcomingeve.css";
import Carousel from 'react-bootstrap/Carousel';

const Upcomingeve = () => {
    return (
        <>
        <h1 id = "txtstyling">Upcoming Events</h1>

            <Carousel fade className = "bgstyling">

                <Carousel.Item>
                <h3> Upcoming events 👉 frontend</h3>  
                <Upcomingevents />
                </Carousel.Item>
                <Carousel.Item>
                <h3> Past events 👉 </h3>  
                <Pastevents/>
                </Carousel.Item>
                
            </Carousel>
        </>
    )
  }

  export default Upcomingeve;