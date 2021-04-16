import React from 'react';
import Mission from "../Components/Mission/Mission";
import Impact from "../Components/ourImpact/ourImpact"
import Community from "../Components/ourCommunity/ourCommunity"
import Testimonial from "../Components/Testimonial/Testimonial"
import About from "../Components/Common/About"
import Newsletter from "../Components/Common/Newsletter"
import Join from "../Components/Common/Join"
import Navbar from "../Components/Navbar/Navbar"
import ScrollTop from "../Components/ScrollTop/ScrollTop";

const HomePage = () => {
    return (
        <>
            <Navbar/>
            
            <About/>
            <Mission />
            <Impact />
            <Community/>
            <Newsletter />
            <Testimonial />
            <Join />
            <ScrollTop />
        </>
    )

}

export default HomePage;