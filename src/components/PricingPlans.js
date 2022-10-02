import React from 'react';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';
import PricingPlanBanner from '../Pages/PricingPlan/PricingPlanBanner';

const PricingPlans = () => {
    return (
        <>
            <Navbar />
            <PricingPlanBanner />
            <Footer />
        </>
    );
};

export default PricingPlans;