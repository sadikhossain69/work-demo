import React from 'react';
import banner from '../../assets/output-onlinepngtools.png';

const PricingPlanBanner = () => {
    return (
        <div className='md:px-36 md:py-16' style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", minHeight: '60vh' }}>
            <div className='text-5xl font-bold text-white' >
                Pricing Plans
            </div>
            <div className='text-white font-medium mt-3'>
                Home {">"} Pricing Plans
            </div>
        </div>
    );
};

export default PricingPlanBanner;