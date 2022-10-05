import React from 'react';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';
import MeetOurTeamMember from '../Pages/OurTeamPage/MeetOurTeamMember';
import OurTeamBanner from '../Pages/OurTeamPage/OurTeamBanner';

const OurTeamPage = () => {
    return (
        <div>
            <Navbar />
            <OurTeamBanner />
            <MeetOurTeamMember />
            <Footer />
        </div>
    );
};

export default OurTeamPage;