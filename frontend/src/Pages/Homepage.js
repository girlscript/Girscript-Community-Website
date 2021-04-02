import React from 'react';
import Mission from "../Components/Mission/Mission";
import Testimonial from "../Components/Testimonial/Testimonial"
import Navbar from "../Components/Navbar/Navbar"
import About from "../Components/Common/About"
import Footer from "../Components/Footer/Footer"
import Newsletter from "../Components/Common/Newsletter"
import Join from "../Components/Common/Join"

const HomePage = () => {
    return (
        <>
        <Navbar/>
            <About/>
            <Mission />
            <Newsletter />
            <Testimonial />
            <Join />
            <Footer/>
        </>
    )

}

export default HomePage;