import React from 'react';
import Mission from "../Components/Mission/Mission";
import Testimonial from "../Components/Testimonial/Testimonial";
import About from "../Components/Common/About";
import Newsletter from "../Components/Common/Newsletter";
import Join from "../Components/Common/Join";
import Upcomingeve from "../Components/Upcomingeve/Upcomingeve";

const HomePage = () => {
    return (
        <>
            <About/>
            <Mission />
            <Newsletter />
            <Upcomingeve/>
            <Testimonial />
            <Join />
        </>
    )

}

export default HomePage;