import React from 'react';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';
import Banner from '../Pages/Servece-Pages/Banner/Banner';
import OurServices from '../Pages/Servece-Pages/Banner/OurServices';
import Support from '../Pages/Servece-Pages/Support';
import Testimonial from '../Pages/Servece-Pages/Testimonial';
import WorkingProgress from '../Pages/Servece-Pages/WorkingProgress';

const Services = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <OurServices />
            <WorkingProgress />
            <Support />
            <Testimonial />
            <Footer />
        </>
    );
};

export default Services;