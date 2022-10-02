import React from 'react';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';
import PlanCategorys from '../Pages/PricingPlan/PlanCategorys';
import PricingCompany from '../Pages/PricingPlan/PricingCompany';
import PricingPlanBanner from '../Pages/PricingPlan/PricingPlanBanner';
import Support from '../Pages/Servece-Pages/Support';

const PricingPlans = () => {
    return (
        <>
            <Navbar />
            <PricingPlanBanner />
            <PlanCategorys />
            <Support />
            <PricingCompany/>
            <Footer />
        </>
    );
};

export default PricingPlans;