import React from 'react';
import Mission from "../Components/Mission/Mission";
import Impact from "../Components/OurImpact/OurImpact"
import Community from "../Components/OurCommunity/OurCommunity"
import Testimonial from "../Components/Testimonial/Testimonial"
import About from "../Components/Common/About"
import Newsletter from "../Components/Common/Newsletter"
import Join from "../Components/Common/Join"
import Navbar from "../Components/Navbar/Navbar"
import ScrollTop from "../Components/ScrollTop/ScrollTop";
import Upcomingeve from "../Components/Upcomingeve/Upcomingeve";



const HomePage = () => {
    return (
        <>
            < Navbar/>
            <About />
            <Mission />
            <Impact />
            <Community />
            <Newsletter />
            <Upcomingeve />
            <Testimonial />
            <Join />
            <ScrollTop />
        </>
    )

}

export default HomePage;