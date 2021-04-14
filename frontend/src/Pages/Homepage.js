import React from 'react';
import Mission from "../Components/Mission/Mission";
import Testimonial from "../Components/Testimonial/Testimonial"
import About from "../Components/Common/About"
import Newsletter from "../Components/Common/Newsletter"
import Join from "../Components/Common/Join"
import Navbar from "../Components/Navbar/Navbarr"
import ScrollTop from "../Components/ScrollTop/ScrollTop";

const HomePage = () => {
    return (
        <>
            <Navbar/>
            
            <About/>
            <Mission />
            <Newsletter />
            <Testimonial />
            <Join />
            <ScrollTop />
        </>
    )

}

export default HomePage;