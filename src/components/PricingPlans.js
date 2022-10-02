import React from 'react';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';
import PlanCategorys from '../Pages/PricingPlan/PlanCategorys';
import PricingPlanBanner from '../Pages/PricingPlan/PricingPlanBanner';
import Support from '../Pages/Servece-Pages/Support';

const PricingPlans = () => {
    return (
        <>
            <Navbar />
            <PricingPlanBanner />
            <PlanCategorys />
            <Support />
            <Footer />
        </>
    );
};

export default PricingPlans;