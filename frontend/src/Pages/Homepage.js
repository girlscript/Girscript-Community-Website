import React from 'react';
import Mission from "../Components/Mission/Mission";
import Testimonial from "../Components/Testimonial/Testimonial";
import Upcomingeve from '../Components/Upcomingeve/Upcomingeve';


const HomePage = () => {
    return (
        <>
            <Upcomingeve/>
            <Mission />
            <Testimonial />
        </>
    )

}

export default HomePage;