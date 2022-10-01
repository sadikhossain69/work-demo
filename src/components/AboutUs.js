import React from 'react';
import AboutBanner from '../Pages/AboutUs-Page/AboutBanner';
import AboutSection from '../Pages/AboutUs-Page/AboutSection';
import WhyChooseUs from '../Pages/AboutUs-Page/WhyChooseUs';
import Navbar from '../Pages/Navbar/Navbar';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <AboutBanner />
            <AboutSection />
            <WhyChooseUs />
        </>
    );
};

export default AboutUs;