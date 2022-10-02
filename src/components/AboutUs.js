import React from 'react';
import AboutBanner from '../Pages/AboutUs-Page/AboutBanner';
import AboutSection from '../Pages/AboutUs-Page/AboutSection';
import Achievement from '../Pages/AboutUs-Page/Achievement';
import GetInTouch from '../Pages/AboutUs-Page/GetInTouch';
import OurSkills from '../Pages/AboutUs-Page/OurSkills';
import OurTeam from '../Pages/AboutUs-Page/OurTeam';
import TeamMembers from '../Pages/AboutUs-Page/TeamMembers';
import WhyChooseUs from '../Pages/AboutUs-Page/WhyChooseUs';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <AboutBanner />
            <AboutSection />
            <WhyChooseUs />
            <Achievement />
            <OurTeam />
            <TeamMembers />
            <OurSkills />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default AboutUs;